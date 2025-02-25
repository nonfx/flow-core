import { mergeConfig } from "vite";
import { resolve } from "path";

const alias = [
	"flow-code-editor",
	"flow-core-config",
	"flow-core",
	"flow-form-builder",
	"flow-lineage",
	"flow-log",
	"flow-md-editor",
	"flow-text-editor",
	"flow-table",
	"flow-dashboard"
].map(pkg => ({
	find: `@nonfx/${pkg}`,
	replacement: resolve(import.meta.dirname, "../packages", pkg, "src")
}));

export default {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-storysource"],

	framework: "@storybook/web-components-vite",

	async viteFinal(config) {
		return mergeConfig(config, {
			// base: resolve(import.meta.dirname, "../"),
			resolve: {
				alias
			}
		});
	}
};
