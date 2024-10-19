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
		const elements = Array.from({ length: 10000 }, (_, index) => index + 1);

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
							><f-text state="danger">${item}</f-text>
						</f-div>`
			)}
		`;
	},

	name: "Test"
};
