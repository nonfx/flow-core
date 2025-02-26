// eslint.config.js
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import storybookPlugin from "eslint-plugin-storybook";
import prettierConfig from "eslint-config-prettier";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
	// Base JS configuration from @eslint/js
	js.configs.recommended,

	// Global TS configuration
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tsPlugin
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: "module"
			}
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			"no-prototype-builtins": "off",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-unused-vars": "warn"
		}
	},

	// Storybook configuration
	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		plugins: {
			storybook: storybookPlugin
		},
		rules: {
			...storybookPlugin.configs.recommended.rules
		}
	},

	// JS specific configuration
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module"
		}
	},

	// Config for rollup and test runner
	{
		files: ["rollup.config.js", "web-test-runner.config.js"],
		languageOptions: {
			globals: {
				node: true
			}
		}
	},

	// Config for stories
	{
		files: ["stories/**"],
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"no-undef": "off",
			"no-unused-vars": "off"
		}
	},

	// Config for packages with type checking
	{
		files: ["packages/**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: path.resolve(__dirname, "./tsconfig.eslint.json")
			}
		},
		rules: {
			"@typescript-eslint/unbound-method": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-assignment": "off"
		}
	},

	// Config for test files
	{
		files: ["**/*_test.ts", "**/*.test.ts", "**/custom_typings/*.ts"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "off"
		},
		languageOptions: {
			globals: {
				...globals.jest
			}
		}
	},

	// Prettier should be last
	prettierConfig,

	{
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	},

	// Ignore patterns
	{
		ignores: [
			"node_modules",
			"coverage",
			"build",
			"dist/",
			"bundle-analysis",
			"storybook-static/*",
			"lib/dist",
			"**/dist",
			"**/umd/*"
		]
	}
];
