import { html } from "lit-html";
import { register, type IconPackNames } from "@nonfx/flow-icons";
import { customElement, property } from "lit/decorators.js";
import { LitElement } from "lit";

let iconPackBundle: Awaited<ReturnType<typeof register>>;

async function setupIconPacks() {
	if (!iconPackBundle) {
		const allPacks: IconPackNames[] = [
			"aws",
			"gcp",
			"product",
			"system",
			"policy",
			"azure",
			"nonfx"
		];
		iconPackBundle = await register(allPacks);
	}
	return iconPackBundle;
}

export default {
	title: "@nonfx/flow-icons",

	parameters: {
		controls: {
			hideNoControlsWarning: true
		}
	},
	loaders: [
		async () => {
			await setupIconPacks();
		}
	]
};

@customElement("icon-pack")
export class IconPackElement extends LitElement {
	searchTerm?: string;

	@property({ type: String })
	packName!: string;

	/**
	 * @attribute category of button
	 */
	@property({ reflect: false, type: Object })
	icons!: Record<string, string>;

	createRenderRoot() {
		return this;
	}

	handleInput(event: CustomEvent) {
		event.stopPropagation();
		this.searchTerm = event.detail.value;
		this.requestUpdate();
	}
	handleKeydown(event: Event) {
		event.stopPropagation();
		event.stopImmediatePropagation();
	}
	render() {
		return html`
			<f-div
				direction="column"
				height="100%"
				width="100%"
				gap="large"
				padding="none large"
				overflow="scroll"
			>
				<f-div padding="large none" sticky="top" state="default" height="hug-content" gap="small">
					<f-text style="width:100%" align="center">${this.packName}</f-text>
					<f-search
						.value=${this.searchTerm}
						@keydown=${this.handleKeydown}
						@input=${this.handleInput}
						style="width:100%;"
						variant="round"
					></f-search>
				</f-div>
				<f-div gap="x-large" height="hug-content" padding="large">
					${Object.keys(this.icons)
						.filter(src => (this.searchTerm ? src.includes(this.searchTerm) : true))
						.map(
							src =>
								html` <f-div
									direction="column"
									height="hug-content"
									width="90px"
									gap="medium"
									align="middle-center"
								>
									<f-icon .source=${src} size="large"> </f-icon>
									<f-text variant="para" size="small" weight="medium" align="center">${src}</f-text>
								</f-div>`
						)}
				</f-div>
			</f-div>
		`;
	}
}

export const Aws = {
	render: () => {
		const bundle = iconPackBundle;
		const awsPack = bundle.find(b => b.packName === "aws");
		return html` <icon-pack .packName=${"aws"} .icons=${awsPack?.pack}> </icon-pack> `;
	},

	name: "aws"
};

export const Gcp = {
	render: () => {
		const bundle = iconPackBundle;
		const gcpPack = bundle.find(b => b.packName === "gcp");
		return html` <icon-pack .packName=${"gcp"} .icons=${gcpPack?.pack}> </icon-pack> `;
	},

	name: "gcp"
};

export const Product = {
	render: () => {
		const bundle = iconPackBundle;
		const productPack = bundle.find(b => b.packName === "product");
		return html` <icon-pack .packName=${"product"} .icons=${productPack?.pack}> </icon-pack> `;
	},

	name: "product"
};
export const Policy = {
	render: () => {
		const bundle = iconPackBundle;
		const policyPack = bundle.find(b => b.packName === "policy");
		return html` <icon-pack .packName=${"policy"} .icons=${policyPack?.pack}> </icon-pack> `;
	},

	name: "policy"
};

export const Azure = {
	render: () => {
		const bundle = iconPackBundle;
		const azurePack = bundle.find(b => b.packName === "azure");
		return html` <icon-pack .packName=${"azure"} .icons=${azurePack?.pack}> </icon-pack> `;
	},

	name: "azure"
};

export const Nonfx = {
	render: () => {
		const bundle = iconPackBundle;
		const nonfxPack = bundle.find(b => b.packName === "nonfx");
		return html` <icon-pack .packName=${"nonfx"} .icons=${nonfxPack?.pack}> </icon-pack> `;
	},

	name: "nonfx"
};
