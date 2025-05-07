import { LitElement, PropertyValues, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";

import globalStyle from "./f-root-global.scss?inline";
import { injectCss } from "@nonfx/flow-core-config";
import { FTooltipPlacement } from "../../../components/f-tooltip/f-tooltip";
import type { FText } from "../../../components/f-text/f-text";

// to avoid recursive tye check
type TooltipElement = HTMLElement & {
	target: unknown;
	open: boolean;
	closable: boolean;
	placement?: FTooltipPlacement;
};

injectCss("f-root", globalStyle);

export type FTooltipObject = {
	text: string;
	closable?: boolean;
	placement?: FTooltipPlacement;
	maxWidth?: string;
};

export type FRootTooltip = string | FTooltipObject;

/**
 * @summary Every component must extent this class to consume gbobal styles , such as css reset, font family,...
 *
 */
export class FRoot extends LitElement {
	static styles = [unsafeCSS(globalStyle)];

	@query("f-popover")
	tooltipElement?: HTMLElement;

	/**
	 * @attribute Value of a switch defines if it is on or off.
	 */
	@property({ reflect: true, type: String })
	tooltip?: FRootTooltip;

	get tooltipText() {
		if (this.tooltip !== null && typeof this.tooltip === "object") {
			return this.tooltip.text;
		}
		return this.tooltip;
	}

	get tooltipMaxWidth() {
		if (this.tooltip !== null && typeof this.tooltip === "object") {
			return this.tooltip.maxWidth ?? `500px`;
		}
		return "500px";
	}

	mouseEnter?: () => void;

	mouseLeave?: () => void;

	disconnectedCallback() {
		if (this.tooltip) {
			const tooltipElement = document.querySelector<TooltipElement>("#flow-tooltip");
			if (tooltipElement?.target === this && tooltipElement) tooltipElement.open = false;
		}
		super.disconnectedCallback();
	}

	protected updated(changedProperties: PropertyValues) {
		super.updated(changedProperties);
		/**
		 * check if changed properties has tooltip
		 */
		if (changedProperties.has("tooltip")) {
			/**
			 * get global tooltip component
			 */
			let tooltipElement = document.querySelector<TooltipElement>("#flow-tooltip");

			const changedTooltip = changedProperties.get("tooltip");

			/**
			 * close tooltip if it is open by mouse over
			 */
			if (typeof changedTooltip === "string" && changedTooltip.startsWith("#")) {
				const extTooltip = document.querySelector<TooltipElement>(changedTooltip);
				if (extTooltip) {
					extTooltip.open = false;
				}
			} else if (changedProperties.get("tooltip") && tooltipElement) {
				tooltipElement.open = false;
			}

			/**
			 * is tooltip external
			 */
			let isExternalTooltip = false;

			/**
			 *   remove existing event listeners to avoid memeory leak
			 * */
			if (this.mouseEnter) this.removeEventListener("mouseenter", this.mouseEnter);
			if (this.mouseLeave) this.removeEventListener("mouseleave", this.mouseLeave);
			/**
			 * mouse enter behaviour
			 */
			this.mouseEnter = () => {
				if (tooltipElement) {
					tooltipElement.target = this;
					if (!isExternalTooltip) {
						const tooltipTextElement = tooltipElement?.querySelector<FText>("#tooltip-text");
						if (tooltipTextElement && this.tooltipText) {
							tooltipTextElement.style.maxWidth = this.tooltipMaxWidth;
							tooltipTextElement.innerText = this.tooltipText;
						}
					}

					if (this.tooltip !== null && typeof this.tooltip === "object") {
						tooltipElement.closable = this.tooltip.closable ?? false;
						tooltipElement.placement = this.tooltip.placement ?? "auto";
					} else if (!isExternalTooltip) {
						//reset to original
						tooltipElement.closable = false;
						tooltipElement.placement = "auto";
					}
					tooltipElement.open = true;
				}
			};

			/**
			 * mouse leave behavior
			 */

			this.mouseLeave = () => {
				if (tooltipElement && !tooltipElement?.closable) {
					tooltipElement.open = false;
				}
			};

			/**
			 * If tooltip is specified by user
			 */
			if (this.tooltipText) {
				/**
				 * check if tooltip contains id
				 */
				if (this.tooltipText.startsWith("#")) {
					tooltipElement = document.querySelector<TooltipElement>(this.tooltipText);
					isExternalTooltip = true;
					if (!tooltipElement) {
						console.warn(`${this.tooltipText} tooltip not found`);
					}
				}
				/**
				 * if global tooltip not present
				 */
				if (!tooltipElement && !isExternalTooltip) {
					const tooltipDefine = `<f-tooltip placement="auto" id="flow-tooltip">
        <f-text variant="para" size="small" id="tooltip-text">
        </f-text>
</f-tooltip>`;
					document.body?.insertAdjacentHTML("beforeend", tooltipDefine);

					// if tooltip present with particular id `flow-tooltip`
					tooltipElement = document.querySelector("#flow-tooltip");
				}

				this.addEventListener("mouseenter", this.mouseEnter);
				this.addEventListener("mouseleave", this.mouseLeave);
			} else {
				if (this.mouseLeave !== undefined && tooltipElement && tooltipElement.target === this) {
					this.mouseLeave();
				}
				this.removeEventListener("mouseenter", this.mouseEnter);
				this.removeEventListener("mouseleave", this.mouseLeave);
			}
		}
	}
}
