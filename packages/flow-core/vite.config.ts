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
			name: "flow-elements",
			fileName: format => `flow-core.${format}.js`,
			formats: ["es"]
		},
		rollupOptions: {
			// If we want to publish standalone components we don't externalize lit,
			// if you are going to use lit in your own project, you can make it a dep instead.
			// external: /^lit/, <-- comment this line
			external: [
				"emoji-mart",
				"lodash-es",
				/^lit/,
				"rxjs",
				"@nonfx/flow-core-config",
				"vanilla-colorful",
				"mark.js",
				"@floating-ui/dom"
			]
		}
	}
});
