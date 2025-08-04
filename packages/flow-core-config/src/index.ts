import { SimpleBehaviorSubject, SimpleSubject } from "./simple-observable";

export { SimpleBehaviorSubject, SimpleSubject, type Subscription } from "./simple-observable";

export type CustomFontConfig = {
	para: string;
	header: string;
	mono?: string;
};
export type FlowCoreConfig = {
	theme: "f-dark" | "f-light" | string;
	iconPack: Record<string, string> | null;
	customFont?: CustomFontConfig;
};

export const themeSubject = new SimpleSubject<string>();

export const configSubject = new SimpleBehaviorSubject<FlowCoreConfig>({
	theme: "f-dark",
	iconPack: null
});

export const ConfigUtil = {
	getConfig() {
		return configSubject.value;
	},
	setConfig(cfg: Partial<FlowCoreConfig>) {
		configSubject.next({ ...configSubject.value, ...cfg });
		if (cfg.theme) {
			this.initTheme();
		}
		if (cfg.customFont) {
			const existingStyle = document.documentElement.style.cssText; // Get existing styles

			const customFontConfig = cfg.customFont as CustomFontConfig;
			let newStyle = `--flow-font: ${customFontConfig.para};
	--text-para-x-small-fontfamily: ${customFontConfig.para};
	--text-para-large-fontfamily: ${customFontConfig.para};
	--text-para-medium-fontfamily: ${customFontConfig.para};
	--text-para-small-fontfamily: ${customFontConfig.para};
	--text-para-x-large-fontfamily: ${customFontConfig.para};
	--text-heading-x-small-fontfamily: ${customFontConfig.header};
	--text-heading-small-fontfamily: ${customFontConfig.header};
	--text-heading-x-large-fontfamily: ${customFontConfig.header};
	--text-heading-medium-fontfamily: ${customFontConfig.header};
	--text-heading-large-fontfamily: ${customFontConfig.header};`;

			if (cfg.customFont.mono) {
				newStyle += `	--flow-code-font: ${cfg.customFont.mono};
	--text-code-small-fontfamily: ${cfg.customFont.mono};
	--text-code-large-fontfamily: ${cfg.customFont.mono};
	--text-code-medium-fontfamily: ${cfg.customFont.mono};
	--text-code-x-small-fontfamily: ${cfg.customFont.mono};
	--text-code-x-large-fontfamily: ${cfg.customFont.mono};`;
			}
			document.documentElement.style.cssText = existingStyle + newStyle;
		}
	},
	initTheme() {
		document.documentElement.setAttribute("data-theme", `${configSubject.value.theme}`);
	}
};

const cssSet = new Set<string>();

export function injectCss(id: string, css: string) {
	if (cssSet.has(id) || typeof document === "undefined") {
		return;
	}

	cssSet.add(id);
	const style = document.createElement("style");
	style.id = id;
	style.innerHTML = css;
	document.head.appendChild(style);
}
