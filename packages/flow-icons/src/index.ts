import flowAwsIcon from "./flow-aws-icon";
import flowEngineeringIcon from "./flow-engineering-icon";
import flowGCPIcon from "./flow-gcp-icon";
import flowProductIcon from "./flow-product-icon";
import flowSystemIcon from "./flow-system-icon";
import saasSystemIcon from "./saas-system-icon";

export type IconPackNames = "aws" | "gcp" | "product" | "system" | "saas-system" | "engineering";
const ICON_PACK_MAP: Record<IconPackNames, Record<string, string>> = {
	aws: flowAwsIcon,
	gcp: flowGCPIcon,
	engineering: flowEngineeringIcon,
	product: flowProductIcon,
	system: flowSystemIcon,
	"saas-system": saasSystemIcon
};

import { ConfigUtil } from "@nonfx/flow-core-config";

export function register(iconPacks: IconPackNames[]) {
	for (let index = 0; index < iconPacks.length; index++) {
		const iconPackName = iconPacks[index];
		ConfigUtil.setConfig({
			iconPack: { ...ICON_PACK_MAP[iconPackName], ...ConfigUtil.getConfig().iconPack }
		});
	}
}
