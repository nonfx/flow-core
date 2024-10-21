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
		const elements = Array.from({ length: 1000 }, (_, index) => index + 1);

		return html`
			${repeat(
				elements,
				item => item,
				item =>
					html` <!--div
							style="display:flex;background:var(--color-primary-default);width:600px;padding:12px"
						>
							<p>${item}</p>
							<select>
								<option><f-icon source="i-plus"></f-icon>option 1</option>
								<option>option 2</option>
								<option>option 3</option>
							</select>
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
								.value=${"option1"}
								searchable
								icon-left="i-org"
							></f-select>
						</f-div>`
			)}
		`;
	},

	name: "Test"
};
