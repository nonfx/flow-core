import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
	plugins: [
		analyzer({
			enabled: false // Set to true to enable bundle analysis
		})
	],

	build: {
		// Disabling minification makes it easy to debug during development
		// And all modern bundlers will consume the library and minify it anyway
		minify: false,
		sourcemap: true,
		lib: {
			entry: "src/index.ts",
			name: "flow-form-builder",
			fileName: format => `flow-form-builder.${format}.js`,
			formats: ["es"]
		},
		rollupOptions: {
			external: ["@nonfx/flow-core-config", "@nonfx/flow-core", /^lit/, "rxjs", "lodash-es"],
			output: {
				globals: {
					"@nonfx/flow-core": "@nonfx/flow-core"
				}
			}
		}
	}
});
