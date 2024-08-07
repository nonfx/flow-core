import { register } from "@nonfx/flow-icons";
register(["system"]);
import { expect, fixture, html } from "@open-wc/testing";
import sampleMd from "./sample-md";

// import flow-core elements
import "@nonfx/flow-core";

import { FMDEditor } from "@nonfx/flow-md-editor";

describe("f-md-editor", () => {
	it("is defined", () => {
		const el = document.createElement("f-md-editor");
		expect(el).instanceOf(FMDEditor);
	});
	it("should match view mode snapshot", async () => {
		const el = await fixture<FMDEditor>(
			html` <f-md-editor .value=${sampleMd} mode="view"></f-md-editor>`
		);
		await el.updateComplete;
		expect(el).lightDom.to.equalSnapshot();
	});
	it("should match edit mode snapshot", async () => {
		const el = await fixture<FMDEditor>(
			html` <f-md-editor .value=${sampleMd} mode="edit"></f-md-editor>`
		);
		await el.updateComplete;
		expect(el).lightDom.to.equalSnapshot();
	});
});
