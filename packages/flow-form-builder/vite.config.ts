import { defineConfig } from "vite";

export default defineConfig({
	build: {
		// Disabling minification makes it easy to debug during development
		// And all modern bundlers will consume the library and minify it anyway
		minify: false,
		sourcemap: true,
		lib: {
			entry: "src/index.ts",
			name: "flow-form-builder",
			fileName: format => `flow-form-builder.${format}.js`,
			formats: ["es", "cjs"]
		},
		rollupOptions: {
			external: [
				/^@ollion/,
				"axios",
				"emoji-mart",
				"lodash-es",
				/^lit/,
				"rxjs",
				"vanilla-colorful",
				"mark.js",
				"@emoji-mart/data",
				"@lit-labs/virtualizer",
				"flatpickr",
				"@floating-ui/dom"
			],
			output: {
				globals: {
					"@ollion/flow-core": "@ollion/flow-core"
				}
			}
		}
	}
});
