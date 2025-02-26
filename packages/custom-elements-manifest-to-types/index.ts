import {
	CustomElementMixinDeclaration,
	Declaration,
	MixinDeclaration,
	Package
} from "custom-elements-manifest/schema";
import * as prettier from "prettier";
import { UserOptions, validateOptions } from "./options";

const camelToSnakeCase = (str: string) => {
	if (str === "FMDEditor") {
		return "-f-md-editor";
	}
	return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
};

export async function transformSchema(
	schema: Package,
	framework: "vue2" | "react" | "vue3",
	modulePath?: string
) {
	const options = await validateOptions({});

	if (framework === "vue3") {
		return transformSchemaVue3(schema, options, modulePath);
	} else if (framework === "react") {
		return transformSchemaReact(schema, options, modulePath);
	}

	return null;
}

function transformSchemaReact(schema: Package, options: UserOptions, modulePath?: string) {
	const components: string[] = [];

	schema.modules.forEach(module => {
		module.declarations?.forEach(declaration => {
			const component = getComponentCodeFromDeclarationReact(declaration);

			if (component) {
				components.push(component);
			}
		});
	});
	const allImports = getComponentPropTypeImports(schema, modulePath);
	const output = prettier.format(
		`
			${allImports.join("\n")}
	declare global {
		namespace JSX {
		   interface IntrinsicElements {

	                ${components.join("\n")}
	            }
	        }
		}
	    `,
		{ ...options.prettierConfig, parser: "typescript" }
	);

	return output;
}

function transformSchemaVue3(schema: Package, options: UserOptions, modulePath?: string) {
	const components: string[] = [];

	schema.modules.forEach(module => {
		module.declarations?.forEach(declaration => {
			const component = getComponentCodeFromDeclarationVue3(declaration);
			if (component) {
				components.push(component);
			}
		});
	});

	const allImports = getComponentPropTypeImports(schema, modulePath);
	const output = prettier.format(
		`
        /* eslint-disable */
        import type { DefineComponent } from "vue";
		${allImports.join("\n")}
		declare module "vue" {
			export interface GlobalComponents {
                ${components.join("\n")}
            }
        }
    `,
		{ ...options.prettierConfig, parser: "typescript" }
	);

	return output;
}
function getComponentCodeFromDeclarationReact(declaration: Declaration) {
	// declaration = declaration as CustomElementMixinDeclaration;
	if (!("members" in declaration)) {
		return;
	}

	const newDeclaration = declaration as CustomElementMixinDeclaration;
	if (!isSuperClassDeclaration(newDeclaration)) {
		return null;
	}

	let componentDeclaration = `
        ["${camelToSnakeCase(newDeclaration.name).substring(1)}"]:{
    `;

	declaration.members?.forEach(member => {
		if (member.kind === "method") {
			return;
		}

		componentDeclaration = `
                ${componentDeclaration}
                ${member.name}${member.default ? "" : "?"}: ${member.type?.text};
            `;
	});

	componentDeclaration = `
                ${componentDeclaration}
				children?:any;["class"]?:string;`;
	componentDeclaration = `${componentDeclaration}
        }&React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;`;

	return componentDeclaration;
}

function getComponentCodeFromDeclarationVue3(declaration: Declaration) {
	if (!("members" in declaration)) {
		return;
	}

	let componentDeclaration = `
        ["${camelToSnakeCase(declaration.name).substring(1)}"]: DefineComponent<
            {
    `;

	declaration.members?.forEach(member => {
		if (member.kind === "method") {
			return;
		}

		componentDeclaration = `
                ${componentDeclaration}
                ${member.name}${member.default ? "" : "?"}: ${member.type?.text};
            `;
	});

	componentDeclaration = `${componentDeclaration}} >;`;

	return componentDeclaration;
}

function isSuperClassDeclaration(declaration: MixinDeclaration) {
	return (
		declaration.superclass &&
		["FRoot", "LitElement", "FInputBase"].includes(declaration.superclass.name)
	);
}

function getComponentPropTypeImports(schema: Package, modulePath?: string): string[] {
	const builtInTypes = [
		"null",
		"undefined",
		"boolean",
		"|",
		"string",
		"number",
		"any",
		"{}",
		"unknown",
		"void",
		"HTMLElement"
	];
	const moduleTypeImports: string[] = [];
	const extractedTypes: Set<string> = new Set();
	const moduleName = modulePath || "./src";

	schema.modules.forEach(module => {
		module.declarations?.forEach(declaration => {
			declaration = declaration as MixinDeclaration;

			if (!isSuperClassDeclaration(declaration)) {
				return;
			}

			if ((declaration as CustomElementMixinDeclaration).attributes) {
				//@ts-expect-error xxx
				declaration.attributes.forEach(attribute => {
					if (attribute.type?.text) {
						const typesToImport: string[] = attribute.type.text.split(" ");
						typesToImport.forEach(t => {
							if (
								!builtInTypes.includes(t) &&
								t.charAt(0) !== "'" &&
								t.charAt(0) !== '"' &&
								!t.includes("<") &&
								t
							) {
								extractedTypes.add(t);
							}
						});
					}
				});
			}
		});
	});

	if (extractedTypes.size > 0) {
		let importStatement = `import type {
            ${Array.from(extractedTypes).join(",\n")}`;
		importStatement += `} from '${moduleName}';`;
		moduleTypeImports.push(importStatement);
	}
	return moduleTypeImports;
}
