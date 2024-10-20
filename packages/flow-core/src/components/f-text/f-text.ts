import { html, PropertyValueMap, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import { FRoot } from "../../mixins/components/f-root/f-root";
import eleStyle from "./f-text.scss?inline";
import globalStyle from "./f-text-global.scss?inline";
import { flowElement, getCustomColor } from "./../../utils";
import { FIcon } from "../f-icon/f-icon";
import { injectCss } from "@nonfx/flow-core-config";
injectCss("f-text", globalStyle);

export type FTextStateProp =
	| "default"
	| "secondary"
	| "subtle"
	| "primary"
	| "success"
	| "danger"
	| "warning"
	| "inherit"
	| `custom, ${string}`;

/**
 * @summary Text component includes Headings, titles, body texts and links.
 */
@flowElement("f-text")
export class FText extends FRoot {
	/**
	 * css loaded from scss file
	 */
	static styles = [unsafeCSS(eleStyle), unsafeCSS(globalStyle), ...FIcon.styles];

	/**
	 * @attribute local state for managing custom fill.
	 */
	@state()
	fill?: string;

	/**
	 * @attribute Variants of text component are use cases such as Heading, paragraph, and code.
	 */
	@property({ type: String, reflect: true })
	variant?: "heading" | "para" | "code" = "para";

	/**
	 * @attribute Each variant has various sizes. By default medium is the default size.
	 */
	@property({ type: String, reflect: true })
	size?: "x-large" | "large" | "medium" | "small" | "x-small" = "medium";

	/**
	 * @attribute Weight property defines the visual weight of the text such as regular, medium and bold.
	 */
	@property({ type: String, reflect: true })
	weight?: "bold" | "medium" | "regular";

	/**
	 * @attribute States on texts are used to communicate purpose and it’s connotation. For example, a red color connotes danger, whereas a green color connotes success and so on.
	 */
	@property({ type: String, reflect: true })
	state?: FTextStateProp = "default";

	/**
	 * @attribute Sets the alignment of the text. Can take 3 values: left, center, and right.
	 */
	@property({ type: String, reflect: true })
	align?: "left" | "center" | "right" = "left";

	/**
	 * @attribute will work as in the form inline span element taking just the width of internal text
	 */
	@property({ reflect: true, type: Boolean })
	inline?: boolean = false;

	/**
	 * @attribute Loader icon replaces the content of the button .
	 */
	@property({ reflect: true, type: Boolean })
	loading?: boolean = false;

	/**
	 * @attribute The disabled attribute can be set to keep a user from clicking on the button.
	 */
	@property({ reflect: true, type: Boolean })
	disabled?: boolean = false;

	/**
	 * @attribute will ellipsis apply on overflow
	 */
	@property({ reflect: true, type: Boolean })
	ellipsis?: boolean = false;

	get iconSize() {
		return this.size === "x-small" ? "x-small" : "small";
	}

	get headerLevel() {
		switch (this.size) {
			case "x-large":
				return "1";
			case "large":
				return "2";
			case "medium":
				return "3";
			case "small":
				return "4";
			case "x-small":
				return "4";
			default:
				return "3";
		}
	}

	protected willUpdate(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
		super.willUpdate(changedProperties);
		/**
		 * creating local fill variable out of state prop.
		 */
		this.fill = getCustomColor(this.state);
		/**
		 * set default weight according to variant
		 */
		if (this.fill && this.fill.trim() !== "") {
			this.style.color = this.fill;
		} else {
			this.style.removeProperty("color");
		}
		if (!this.weight) {
			if (this.variant === "heading") {
				this.weight = "bold";
			} else {
				this.weight = "regular";
			}
		}
	}

	render() {
		/**
		 * Final html to render
		 */
		return html`<slot></slot>`;
	}
}

/**
 * Required for typescript
 */
declare global {
	interface HTMLElementTagNameMap {
		"f-text": FText;
	}
}
