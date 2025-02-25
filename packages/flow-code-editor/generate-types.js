/* eslint-disable*/
const fs = require("fs");
const customElementsJSON = require("./custom-elements.json");
const vue3TypesFileName = `${__dirname}/dist/types/vue3.ts`;
const reactTypesFileName = `${__dirname}/dist/types/react.ts`;

const { transformSchema } = require("./../custom-elements-manifest-to-types");

const vue3Types = transformSchema(customElementsJSON, "vue3", "./index");
const reactTypes = transformSchema(customElementsJSON, "react", "./index");

try {
	fs.writeFileSync(vue3TypesFileName, vue3Types);
	console.log(`\x1b[32m \r ${vue3TypesFileName} generated  \u2705 \x1b[0m`);
	fs.writeFileSync(reactTypesFileName, reactTypes);
	console.log(`\x1b[32m \r ${reactTypesFileName} generated  \u2705 \x1b[0m`);
} catch (e) {
	console.log(e);
}
