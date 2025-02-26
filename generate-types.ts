/* global process */
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { transformSchema } from "./packages/custom-elements-manifest-to-types/index";

const dirPaths = execSync('find ./packages -name "custom-elements.json"', {
	cwd: process.cwd(),
	encoding: "utf-8"
})
	.split("\n")
	.filter(Boolean)
	.map(dirPath => {
		return path.dirname(path.resolve(process.cwd(), dirPath));
	});

console.log(`Going to process ${dirPaths.length} packages`);

await Promise.all(
	dirPaths.map(async dirPath => {
		const customElementsJSONPath = path.resolve(dirPath, "custom-elements.json");
		const customElementsJSON = JSON.parse(await fs.readFile(customElementsJSONPath, "utf-8"));

		await fs.mkdirp(`${dirPath}/dist/types`);

		try {
			const [vue3Types, reactTypes] = await Promise.all([
				transformSchema(customElementsJSON, "vue3", "../src/index"),
				transformSchema(customElementsJSON, "react", "../src/index")
			]);

			await fs.writeFile(`${dirPath}/dist/types/vue3.ts`, vue3Types);
			await fs.writeFile(`${dirPath}/dist/types/react.ts`, reactTypes);
			console.log(`\x1b[32m \r ${dirPath} types generated  \u2705 \x1b[0m`);
		} catch (e) {
			console.error(e);
		}
	})
);
