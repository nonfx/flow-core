import { html } from "lit-html";
import flowAwsIcon from "@nonfx/flow-icons/src/flow-aws-icon/icon-pack";
import flowEngineeringIcon from "@nonfx/flow-icons/src/flow-engineering-icon/icon-pack";
import flowGCPIcon from "@nonfx/flow-icons/src/flow-gcp-icon/icon-pack";
import flowProductIcon from "@nonfx/flow-icons/src/flow-product-icon/icon-pack";
import flowSystemIcon from "@nonfx/flow-icons/src/flow-system-icon/icon-pack";
import saasSystemIcon from "@nonfx/flow-icons/src/saas-system-icon/icon-pack";
import { customElement, property } from "lit/decorators.js";
import { LitElement } from "lit";

export default {
	title: "@nonfx/flow-icons",

	parameters: {
		controls: {
			hideNoControlsWarning: true
		}
	}
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

export const System = {
	render: () => {
		const searchTerm = "";
		return html` <icon-pack .packName=${"system"} .icons=${flowSystemIcon}> </icon-pack> `;
	},

	name: "system"
};

export const Aws = {
	render: () => {
		const searchTerm = "";
		return html` <icon-pack .packName=${"aws"} .icons=${flowAwsIcon}> </icon-pack> `;
	},

	name: "aws"
};

export const Engineering = {
	render: () => {
		const searchTerm = "";
		return html`
			<icon-pack .packName=${"engineering"} .icons=${flowEngineeringIcon}> </icon-pack>
		`;
	},

	name: "engineering"
};
export const Gcp = {
	render: () => {
		const searchTerm = "";
		return html` <icon-pack .packName=${"gcp"} .icons=${flowGCPIcon}> </icon-pack> `;
	},

	name: "gcp"
};

export const Product = {
	render: () => {
		const searchTerm = "";
		return html` <icon-pack .packName=${"product"} .icons=${flowProductIcon}> </icon-pack> `;
	},

	name: "product"
};
export const SaasSystem = {
	render: () => {
		const searchTerm = "";
		return html` <icon-pack .packName=${"saas-system"} .icons=${saasSystemIcon}> </icon-pack> `;
	},

	name: "saas-system"
};
