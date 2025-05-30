import { html, PropertyValueMap, unsafeCSS } from "lit";
import { property, query } from "lit/decorators.js";
import eleStyle from "./f-progress-bar.scss?inline";
import globalStyle from "./f-progress-bar-global.scss?inline";
import { FRoot } from "../../mixins/components/f-root/f-root";
import { FDiv } from "../f-div/f-div";
import { flowElement, getCustomColor } from "../../utils";
import { injectCss } from "@nonfx/flow-core-config";
import { classMap } from "lit-html/directives/class-map.js";
import { keyed } from "lit/directives/keyed.js";
import { ifDefined } from "lit/directives/if-defined.js";

injectCss("f-progress-bar", globalStyle);

export type FProgressBarState =
	| "primary"
	| "default"
	| "success"
	| "warning"
	| "danger"
	| `custom, ${string}`;

export type FProgressBarWidthProp = "fill-container" | `${number}px`;

export type FProgressBarValueProp = `${number}%`;

@flowElement("f-progress-bar")
export class FProgressBar extends FRoot {
	/**
	 * css loaded from scss file
	 */
	static styles = [unsafeCSS(eleStyle), unsafeCSS(globalStyle), ...FDiv.styles];

	/**
	 * @attribute value of the fill section in progress-bar
	 */
	@property({ type: String, reflect: true })
	value?: FProgressBarValueProp;

	/**
	 * @attribute Variants are visual representations of progress bar. A progress bar can be round or block.

	 */
	@property({ type: String, reflect: true })
	variant?: "block" | "curved" | "circle" = "block";

	/**
	 * @attribute The medium size is the default and recommended option.
	 */
	@property({ type: String, reflect: true })
	size?: "large" | "medium" | "small" | "x-small" = "medium";

	/**
	 * @attribute States are used to communicate purpose and it’s connotation. For example, a red color connotes danger, whereas a green color connotes success and so on.
	 */
	@property({ reflect: true, type: String })
	state?: FProgressBarState = "default";

	/**
	 * @attribute By default progress bar takes full width of the parent container. User can change it using width property.
	 */
	@property({ reflect: true, type: String })
	width?: FProgressBarWidthProp = "fill-container";

	/**
	 * @attribute Enable animation
	 */
	@property({ reflect: true, type: Boolean })
	animation? = true;

	/**
	 * progress-bar fill query selector
	 */
	@query(".f-progress-bar-fill")
	fProgressBarFill?: FDiv;

	/**
	 * compyr height of the progress-bar
	 */
	get computedHeight() {
		if (this.size === "large") {
			return "16px";
		} else if (this.size === "medium") {
			return "12px";
		} else if (this.size === "small") {
			return "8px";
		} else {
			return "4px";
		}
	}

	get circleDiameter() {
		if (this.size === "large") {
			return "30px";
		} else if (this.size === "medium") {
			return "22px";
		} else if (this.size === "small") {
			return "16px";
		} else {
			return "12px";
		}
	}

	/**
	 * compute width of fill in the track
	 */
	get computedWidth() {
		if (this.width === "fill-container") {
			return "100%";
		} else {
			return this.width;
		}
	}

	fill = "";

	/**
	 * Calculate angle of pseudo element
	 */
	get valueInAngle() {
		let perValue = 0;
		if (this.value) {
			perValue = +this.value.replace(/%/g, "");
		}
		if (perValue > 50) {
			return perValue * 3.6 - 180;
		}
		return perValue * 3.6;
	}

	/**
	 * Calculate value in number by removing % character
	 */
	get valueInNumber() {
		let perValue = 0;
		if (this.value) {
			perValue = +this.value.replace(/%/g, "");
		}

		return perValue;
	}

	/**
	 * Calculate overall style to apply
	 */
	get circleProgressStyle() {
		return `--f-progress-transform: rotate(${this.valueInAngle}deg);width:${
			this.circleDiameter
		};height:${this.circleDiameter};${this.fill ? `--f-circle-progress-fill: ${this.fill};` : ""}`;
	}

	protected willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
		super.willUpdate(changedProperties);
		this.role = "progressbar";
		this.setAttribute("aria-valuenow", `${this.valueInNumber}`);
		if (!this.getAttribute("aria-label")) {
			this.setAttribute("aria-label", `Progress bar`);
		}
	}

	render() {
		/**
		 * creating local fill variable out of state prop.
		 */
		this.fill = getCustomColor(this.state) ?? "";

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		this.style.setProperty("--f-circle-progress-outline", this.fill);

		if (this.variant !== "circle") {
			return html`
				<f-div
					class="f-progress-bar"
					state=${ifDefined(this.state)}
					.width=${this.computedWidth}
					height=${this.computedHeight}
					data-variant=${ifDefined(this.variant)}
				>
					<f-div
						.width=${this.value}
						data-animation=${ifDefined(this.animation)}
						data-state=${ifDefined(this.state)}
						state=${ifDefined(this.state)}
						class="f-progress-bar-fill"
					></f-div>
					<f-div width="fill-container"></f-div>
				</f-div>
			`;
		}
		const classes = {
			["f-progress-bar-circle"]: true,
			["less-than-eq-50"]: this.valueInNumber <= 50,
			["grt-than-50"]: this.valueInNumber > 50
		};
		return keyed(
			this.valueInNumber > 50 ? 1 : 2,
			html`<div
				class=${classMap(classes)}
				data-state=${ifDefined(this.state)}
				style="${this.circleProgressStyle}"
			></div>`
		);
	}
}

/**
 * Required for typescript
 */
declare global {
	interface HTMLElementTagNameMap {
		"f-progress-bar": FProgressBar;
	}
}
