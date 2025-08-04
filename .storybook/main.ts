import { createRequire } from "node:module";
import { dirname, join } from "node:path";
const require = createRequire(import.meta.url);
export default {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs")],
	framework: getAbsolutePath("@storybook/web-components-vite")
};

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}
