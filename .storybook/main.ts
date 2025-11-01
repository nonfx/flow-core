import { createRequire } from "node:module";
import { dirname, join } from "node:path";
const require = createRequire(import.meta.url);
export default {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs")],
	framework: getAbsolutePath("@storybook/web-components-vite"),
	viteFinal: (config: any, env: any) => {
		// Only apply source aliases in dev mode for hot reload support
		if (env.configType === "DEVELOPMENT") {
			config.resolve.alias = config.resolve.alias || {};
			config.resolve.alias["@nonfx/flow-core"] =
				`${dirname(__dirname)}/packages/flow-core/src/index.ts`;
			config.resolve.alias["@nonfx/flow-core-config"] =
				`${dirname(__dirname)}/packages/flow-core-config/src/index.ts`;
			config.resolve.alias["@nonfx/flow-icons"] =
				`${dirname(__dirname)}/packages/flow-icons/src/index.ts`;
			config.resolve.alias["@nonfx/flow-log"] =
				`${dirname(__dirname)}/packages/flow-log/src/index.ts`;
			config.resolve.alias["@nonfx/flow-code-editor"] =
				`${dirname(__dirname)}/packages/flow-code-editor/src/index.ts`;
			config.resolve.alias["@nonfx/flow-table"] =
				`${dirname(__dirname)}/packages/flow-table/src/index.ts`;
			config.resolve.alias["@nonfx/flow-md-editor"] =
				`${dirname(__dirname)}/packages/flow-md-editor/src/index.ts`;
			config.resolve.alias["@nonfx/flow-text-editor"] =
				`${dirname(__dirname)}/packages/flow-text-editor/src/index.ts`;
			config.resolve.alias["@nonfx/flow-form-builder"] =
				`${dirname(__dirname)}/packages/flow-form-builder/src/index.ts`;
			config.resolve.alias["@nonfx/flow-lineage"] =
				`${dirname(__dirname)}/packages/flow-lineage/src/index.ts`;
			config.resolve.alias["@nonfx/flow-dashboard"] =
				`${dirname(__dirname)}/packages/flow-dashboard/src/index.ts`;
		}
		return config;
	}
};

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}
