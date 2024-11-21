import { ConfigUtil } from "@nonfx/flow-core-config";

const ICON_PACK_MAP: Record<IconPackNames, () => Promise<Record<string, string>>> = {
	aws: async () => (await import("./flow-aws-icon")).default,
	gcp: async () => (await import("./flow-gcp-icon")).default,
	product: async () => (await import("./flow-product-icon")).default,
	system: async () => (await import("./flow-system-icon")).default,
	policy: async () => (await import("./flow-policy-icon")).default,
	azure: async () => (await import("./flow-azure-icon")).default
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
		(acc, { pack }) => ({ ...acc, ...pack }),
		{} as Record<string, string>
	);

	ConfigUtil.setConfig({ iconPack: { ...ConfigUtil.getConfig().iconPack, ...mergedIconPacks } });

	return iconPackBundle;
}

export type IconPackNames = "aws" | "gcp" | "product" | "system" | "policy" | "azure";
