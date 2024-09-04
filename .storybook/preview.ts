import { html } from "lit-html";
import { register } from "@nonfx/flow-icons";

import { ConfigUtil } from "@nonfx/flow-core-config";
import { changeRoute } from "./utils";
import "@nonfx/flow-core";
import "@nonfx/flow-log";
import "@nonfx/flow-code-editor";
import "@nonfx/flow-table";
import "@nonfx/flow-md-editor";
import "@nonfx/flow-text-editor";
import "@nonfx/flow-form-builder";
import "@nonfx/flow-lineage";
import "@nonfx/flow-dashboard";

import { setCustomElementsManifest, setCustomElements } from "@storybook/web-components";
import { themes } from "@storybook/theming";
import { Preview } from "@storybook/web-components";

import "./storybook.css";

(async () => {
	await register(["aws", "gcp", "product", "system", "policy"]);
})();

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark
		}
	}
};

export default preview;

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: { disable: true },
	// themes: {
	// 	default: "f-dark",
	// 	clearable: false,
	// 	list: [
	// 		{ name: "f-dark", color: "#000" },
	// 		{ name: "f-light", color: "#fff" }
	// 	]
	// },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: [
				"About",
				"foundation",
				"@nonfx",
				[
					"flow-core",
					["About", "Release Notes"],
					"flow-form-builder",
					["About", "Release Notes", "Properties", "*", "Examples"],
					"flow-table",
					["About", "Release Notes"],
					"flow-lineage",
					["About", "Release Notes", "Properties", "*", "Examples", "Debug"],
					"flow-code-editor",
					["About", "Release Notes"],
					"flow-text-editor",
					["About", "Release Notes"],
					"flow-md-editor",
					["About", "Release Notes"],
					"flow-log",
					["About", "Release Notes"]
				],
				"templates",
				"icons"
			]
		}
	},
	previewTabs: {
		"storybook/docs/panel": { index: -1 }
	}
};

export const decorators = [
	story => {
		window.onmessage = function (e) {
			if (e.data && typeof e.data === "string") {
				const message = JSON.parse(e.data);

				if (message.event.type === "storybook-addon-themes/change") {
					ConfigUtil.setConfig({ theme: message.event.args[0] });
				}
			}
		};

		const link = document.createElement("link");

		link.rel = "stylesheet";
		link.href =
			"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300&family=Roboto:wght@100;300;400;500;700&display=swap";

		document.head.appendChild(link);

		const monolink = document.createElement("link");

		monolink.rel = "stylesheet";
		monolink.href =
			"https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300&family=Roboto:wght@100;300;400;500;700&display=swap";

		document.head.appendChild(monolink);

		register(["aws", "gcp", "product", "system", "saas-system", "engineering"]);
		ConfigUtil.setConfig({
			theme: "f-light",
			customFont: {
				default: `"Montserrat", "Montserrat", sans-serif`,
				mono: `"Operator Mono", monospace`
			}
		});
		return html`
			<div
				style="background-color:var(--color-surface-default);color:var(--color-text-default);font-family:var(--flow-font);height:inherit;padding: 0px;"
			>
				${story()}
			</div>
		`;
	}
];

async function run() {
	const customElements = await (
		await fetch(new URL("../packages/flow-core/custom-elements.json", import.meta.url))
	).json();

	const loggerCustomElements = await (
		await fetch(new URL("../packages/flow-log/custom-elements.json", import.meta.url))
	).json();

	const editorCustomElements = await (
		await fetch(new URL("../packages/flow-code-editor/custom-elements.json", import.meta.url))
	).json();

	const tableCustomElements = await (
		await fetch(new URL("../packages/flow-table/custom-elements.json", import.meta.url))
	).json();
	const dashboardCustomElements = await (
		await fetch(new URL("../packages/flow-dashboard/custom-elements.json", import.meta.url))
	).json();

	const mdEditorCustomElements = await (
		await fetch(new URL("../packages/flow-md-editor/custom-elements.json", import.meta.url))
	).json();

	const textEditorCustomElements = await (
		await fetch(new URL("../packages/flow-text-editor/custom-elements.json", import.meta.url))
	).json();

	setCustomElementsManifest(customElements);
	setCustomElements(customElements);
	setCustomElementsManifest(loggerCustomElements);
	setCustomElements(loggerCustomElements);
	setCustomElementsManifest(editorCustomElements);
	setCustomElements(editorCustomElements);

	setCustomElementsManifest(tableCustomElements);
	setCustomElements(tableCustomElements);

	setCustomElementsManifest(mdEditorCustomElements);
	setCustomElements(mdEditorCustomElements);
	setCustomElementsManifest(textEditorCustomElements);
	setCustomElements(textEditorCustomElements);
	setCustomElementsManifest(dashboardCustomElements);
	setCustomElements(dashboardCustomElements);
}

run();

// 404 error state --start--
const el = document.body.querySelector(".sb-errordisplay.sb-wrapper")!;
const errorMessage = el.querySelector<HTMLElement>("#error-message.sb-heading")!;
const codeMessage = el.querySelector<HTMLElement>(".sb-errordisplay_code")!;
const url = new URL(window.location.href);
const url_id = url.searchParams.get("id");

const errorSnippet = `<f-div direction="column" align="middle-center" gap="large" width="hug-content">
		<f-pictogram source="⛔️" variant="hexagon" size="large" state="default"></f-pictogram>
		<f-div direction="column" gap="small" align="middle-center" width="500px" height="hug-content">
			<f-text variant="heading" size="medium" weight="bold" align="center"
				>404 Page Not Found!!</f-text
			>
			<f-text variant="para" size="medium" weight="regular" align="center"
				>Couldn't find story matching '${url_id}'</f-text
			>
		</f-div>
		<f-div align="middle-center">
			<f-button
			id="home-button"
				label="Home"
				size="small"
				variant="round"
			></f-button>
		</f-div>
	</f-div>`;

if (el) {
	const paraDefine = errorSnippet;
	el?.insertAdjacentHTML("afterbegin", paraDefine);
	codeMessage.style.display = "none";
	errorMessage.style.display = "none";
	const homeButton = el.querySelector("#home-button")!;
	homeButton.addEventListener("click", changePath);
}

function changePath() {
	changeRoute("ft-time-schedule-popover", "/story/foundation-introduction-about--page");
}
