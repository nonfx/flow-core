import {
	Attribute,
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
        import type { DefineComponent, Ref } from "vue";
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
	const attributes = getAttributesFromDeclaration(declaration);
	if (!attributes) {
		return;
	}

	// declaration = declaration as CustomElementMixinDeclaration;
	if (!("members" in declaration)) {
		return;
	}

	const newDeclaration = declaration as CustomElementMixinDeclaration;
	if (!isSuperClassDeclaration(newDeclaration)) {
		return null;
	}

	return `
        ["${camelToSnakeCase(newDeclaration.name).substring(1)}"]:{ ${attributes}
				children?:any;["class"]?:string;
        }&React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;`;
}

function getComponentCodeFromDeclarationVue3(declaration: Declaration) {
	const attributes = getAttributesFromDeclaration(declaration);
	if (!attributes) {
		return;
	}

	return `["${camelToSnakeCase(declaration.name).substring(1)}"]: DefineComponent<{${attributes}}>;\n`;
}

function getAttributesFromDeclaration(declaration: Declaration) {
	if (!("attributes" in declaration)) {
		return null;
	}

	const fieldMap = new Map<string, string>();

	declaration.attributes?.forEach(attribute => {
		if (
			!attribute.type ||
			!attribute.fieldName ||
			attribute.fieldName.startsWith("_") ||
			SUPER_CLASS_NAMES.includes(attribute.type?.text ?? "")
		) {
			return;
		}

		fieldMap.set(
			attribute.fieldName,
			`${attribute.fieldName}${isAttributeOptional(attribute) ? "?" : ""}: ${attribute.type?.text}`
		);
	});

	return Array.from(fieldMap.values()).join("\n");
}

function isAttributeOptional(attribute: Attribute) {
	if (attribute.default !== undefined) {
		return true;
	}

	if (attribute.type?.text.includes("| undefined")) {
		return true;
	}

	return false;
}

const SUPER_CLASS_NAMES = [
	"FRoot",
	"LitElement",
	"FInputBase",
	"array",
	"object",
	"HTMLDivElement",
	"HTMLInputElement",
	"HTMLTextAreaElement",
	"Instance",
	"object",
	"Picker",
	"Instance"
];

function isSuperClassDeclaration(declaration: MixinDeclaration) {
	return declaration.superclass && SUPER_CLASS_NAMES.includes(declaration.superclass.name);
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

			const allTypes = [
				...((declaration as CustomElementMixinDeclaration).attributes ?? []).map(
					attribute => attribute.type?.text
				)
			].filter(Boolean) as string[];

			allTypes.forEach(attribute => {
				const typesToImport: string[] = attribute.split(" ");
				typesToImport.forEach(t => {
					if (!builtInTypes.includes(t) && /^[a-zA-Z0-9_]+$/.test(t)) {
						extractedTypes.add(t);
					}
				});
			});
		});
	});

	if (extractedTypes.size > 0) {
		let importStatement = `import type {
            ${Array.from(extractedTypes)
							.filter(name => !SUPER_CLASS_NAMES.includes(name))
							.sort((a, b) => a.localeCompare(b))
							.join(",\n")}`;

		importStatement += `} from '${moduleName}';`;
		moduleTypeImports.push(importStatement);
	}
	return moduleTypeImports;
}
