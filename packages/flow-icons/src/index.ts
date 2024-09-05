export type IconPackNames = "aws" | "gcp" | "product" | "system" | "policy";
const ICON_PACK_MAP: Record<IconPackNames, Promise<unknown>> = {
	aws: import("./flow-aws-icon"),
	gcp: import("./flow-gcp-icon"),
	product: import("./flow-product-icon"),
	system: import("./flow-system-icon"),
	policy: import("./flow-policy-icon")
};

import { ConfigUtil } from "@nonfx/flow-core-config";

export async function register(iconPacks: IconPackNames[]) {
	for (let index = 0; index < iconPacks.length; index++) {
		const iconPackName = iconPacks[index];
		const iconsMap = (await ICON_PACK_MAP[iconPackName]) as Record<string, string>;
		ConfigUtil.setConfig({
			iconPack: { ...iconsMap, ...ConfigUtil.getConfig().iconPack }
		});
	}
}
