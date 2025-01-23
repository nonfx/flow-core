/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// @ts-nocheck
import { getAllSvgImageUrl, getIconContent, getNode } from "./api.js";
import * as fs from "fs";
import config from "./config.js";
import prettier from "prettier";
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";
import { optimize } from "svgo";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const packageName = "all";
const versionType = "minor";

function sliceIntoChunks(arr: IconUrl[], chunkSize: number) {
	const res: IconUrl[][] = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
}

type componentMeta = { name: string };
type IconUrl = {
	id: string;
	url: [string, unknown];
};

for (let p = 0; p < config.packages.length; p++) {
	const pkg = config.packages[p];
	if (packageName === pkg.name || packageName === "all") {
		console.log("Updating...", pkg.name, versionType);
		await downloadIcons(pkg.nodeId, pkg.name);
	}
}
export default async function downloadIcons(nodeId: string, pkg: string) {
	const indexFileImports = new Set();
	indexFileImports.add('import { ConfigUtil } from "@nonfx/flow-core-config";');
	indexFileImports.add('import IconPack from "./icon-pack" ;');

	const iconPackExports = new Set();
	const iconPackImports = new Set();
	/**
	 * Get document of specified file Id
	 */
	await getNode(nodeId)
		.then(async response => {
			const componetKeys = Object.keys(response.data.nodes[nodeId].components);
			const ids = componetKeys.join(",");

			/**
			 * Components count
			 */
			console.log(
				"node-id : ",
				nodeId,
				" package : ",
				pkg,
				` #${componetKeys.length} Icons present in Figma! \n`
			);

			/**
			 * Storing id to name mapping
			 */
			const iconNameMapping: Record<string, string> = {};

			for (const [id, component] of Object.entries(
				Object.entries(response.data.nodes[nodeId].components)
			)) {
				iconNameMapping[id] = (component[1] as componentMeta).name;
			}

			const eascapeWhitelist = ["s-malaysia-gov"];
			/**
			 * async/await removed to download asynchronously
			 */
			await getAllSvgImageUrl(ids)
				.then(
					async urls => {
						process.stdout.write(`\x1b[36m \r${pkg} Downloading ${componetKeys.length} icons.`);

						const iconUrls: IconUrl[] = [];
						for (const [id, url] of Object.entries(Object.entries(urls))) {
							/**
							 * Downloading component whose name starts with 'i-'
							 */
							if (iconNameMapping[id].indexOf("/") === -1) {
								iconUrls.push({ id, url });
							}
						}

						fs.rmSync(`${__dirname}/../src/${pkg}/svg`, {
							recursive: true,
							force: true
						});
						fs.mkdirSync(`${__dirname}/../src/${pkg}/svg`, {
							recursive: true
						});
						const batchSize = 10;
						const batches = sliceIntoChunks(iconUrls, batchSize);

						for (let i = 0; i < batches.length; i++) {
							const promises: any[] = [];
							process.stdout.write(
								`\x1b[36m \r${pkg} Downloading ${i * batchSize} to ${i * batchSize + batchSize} ...`
							);

							batches[i].forEach(({ id, url }) => {
								/**
								 * Downloading component whose name starts with 'i-'
								 */

								promises.push(
									getIconContent(url[1] as string).then(
										icon => {
											let formattedIcon = icon.data;
											try {
												formattedIcon = optimize(icon.data, {
													multipass: true,
													plugins: [
														{
															name: "preset-default",
															params: {
																overrides: {
																	removeViewBox: false
																}
															}
														}
													]
												}).data;
											} catch (e) {
												console.warn("\nWarn: error in formatting icon", iconNameMapping[id]);
											}
											if (pkg === "flow-system-icon" || pkg === "flow-nonfx-icon") {
												formattedIcon = formattedIcon.replace(/fill="#fff"/g, `fill="white"`);
												formattedIcon = formattedIcon.replace(/fill="#ffffff"/g, `fill="white"`);
												formattedIcon = formattedIcon.replace(/fill="#FFF"/g, `fill="white"`);
												formattedIcon = formattedIcon.replace(/fill="#FFFFFF"/g, `fill="white"`);
											}

											if (eascapeWhitelist.includes(iconNameMapping[id])) {
												formattedIcon = formattedIcon.replace(/fill="white"/g, `fill="#fff"`);
											}
											const svgToJS = `export default \`${formattedIcon}\`;`;
											//@ts-ignore
											const iconNameAsVariable = iconNameMapping[id].replaceAll("-", "_");
											iconPackImports.add(
												`import ${iconNameAsVariable} from "./svg/${iconNameMapping[id]}";`
											);
											iconPackExports.add(`"${iconNameMapping[id]}": ${iconNameAsVariable}`);
											/**
											 * Writing file in svg folder
											 */
											try {
												fs.writeFileSync(
													`${__dirname}/../src/${pkg}/svg/${iconNameMapping[id]}.ts`,
													svgToJS
												);
											} catch (err) {
												console.error("\nInvalid path " + iconNameMapping[id]);
											}
										},
										error => {
											console.error(
												`\nError : Failed to load svg ${iconNameMapping[id]} - ${url[1]}`,
												error.code
											);
										}
									)
								);
							});
							await Promise.all(promises);
						}

						process.stdout.write(`\x1b[36m \r${pkg} Creating index.ts for packaging... \n \n `);

						const iconPackFile = `${Array.from(iconPackImports).join(
							"\n"
						)} \n const IconPack= { ${Array.from(iconPackExports).join(
							","
						)} } as Record<string,string>;
		  export default IconPack;
		   `;
						const indexFile = `
			${Array.from(indexFileImports).join("\n")} \n
		  ConfigUtil.setConfig({ iconPack: {...IconPack,...ConfigUtil.getConfig().iconPack} });
		  export default IconPack;
		   `;
						/**
						 * Writing icon pack file for package
						 */
						fs.writeFileSync(
							`${__dirname}/../src/${pkg}/icon-pack.ts`,
							await prettier.format(iconPackFile, {
								printWidth: 100,
								singleQuote: true,
								tabWidth: 4,
								parser: "typescript"
							})
						);
						/**
						 * Writing index file for package
						 */
						fs.writeFileSync(
							`${__dirname}/../src/${pkg}/index.ts`,
							await prettier.format(indexFile, {
								printWidth: 100,
								singleQuote: true,
								tabWidth: 4,
								parser: "typescript"
							})
						);

						process.stdout.write(
							`\x1b[36m \r${pkg} ${componetKeys.length} Icons downloaded! \n \n `
						);
					},
					error => {
						console.error(error);
						return;
					}
				)
				.catch(error => {
					console.error(error);
					return;
				});
		})
		.catch(error => {
			console.error(error);
			return;
		});
	return 1;
}
