import { html } from "lit";
import { repeat } from "lit/directives/repeat.js";

export default {
	title: "@nonfx/flow-core/performance-testing",

	parameters: {
		controls: {
			hideNoControlsWarning: true
		}
	}
};

export const Test = {
	render: () => {
		const elements = Array.from({ length: 10 }, (_, index) => index + 1);

		return html`
			${repeat(
				elements,
				item => item,
				item =>
					html` <!--div
							style="display:flex;background:var(--color-primary-default);width:600px;padding:12px"
						>
							<p>${item}</p>
						</div-->
						<f-div
							state="primary"
							width="200px"
							padding="medium"
							border="small solid default around"
							gap="medium"
							align="middle-left"
							><f-text state="danger" inline>${item}</f-text>
							<f-select
								.options=${[
									"A length unit, or percentage, specifying the initial length of the flexible item(s)",
									"option2",
									"option3"
								]}
								.value=${["option1"]}
								searchable
								icon-left="i-plus"
								icon-right="i-delete"
								type="multiple"
							></f-select>
						</f-div>`
			)}
		`;
	},

	name: "Test"
};
