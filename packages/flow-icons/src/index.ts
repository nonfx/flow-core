import { ConfigUtil } from "@nonfx/flow-core-config";
import { version } from "./../package.json";

const ICON_PACK_MAP: Record<IconPackNames, () => Promise<Record<string, string>>> = {
	aws: async () => (await import("./flow-aws-icon")).default,
	gcp: async () => (await import("./flow-gcp-icon")).default,
	product: async () => (await import("./flow-product-icon")).default,
	system: async () => (await import("./flow-system-icon")).default,
	policy: async () => (await import("./flow-policy-icon")).default,
	azure: async () => (await import("./flow-azure-icon")).default,
	nonfx: async () => (await import("./flow-nonfx-icon")).default
};

export async function register(iconPacks: IconPackNames[]) {
	const iconPackBundle = await Promise.all(
		iconPacks.map(async iconPackName => {
			return {
				packName: iconPackName,
				pack: await ICON_PACK_MAP[iconPackName]()
			};
		})
	);

	const mergedIconPacks = iconPackBundle.reduce(
		(acc, { pack }) => {
			// Enable to check for duplicates
			// if (import.meta.env.DEV) {
			// 	const packKeys = Object.keys(pack);
			// 	const accKeys = Object.keys(acc);

			// 	if (packKeys.some(key => accKeys.includes(key))) {
			// 		console.error(
			// 			`Duplicate icon key found in icon pack: ${packKeys.filter(key => accKeys.includes(key)).join(", ")}`
			// 		);
			// 	}
			// }

			return { ...acc, ...pack };
		},
		{} as Record<string, string>
	);

	ConfigUtil.setConfig({ iconPack: { ...ConfigUtil.getConfig().iconPack, ...mergedIconPacks } });

	return iconPackBundle;
}

export type IconPackNames = "aws" | "gcp" | "product" | "system" | "policy" | "azure" | "nonfx";

console.log(
	`%c@nonfx/flow-icons%cv${version}`,
	"background:#161616;color:white;padding:4px 6px 4px 6px;border-radius:4px 0px 0px 4px",
	"background:#AAFF00;color:black;padding:4px 6px 4px 6px;border-radius:0px 4px 4px 0px;"
);
