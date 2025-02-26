import { expect, fixture, html } from "@open-wc/testing";

import "@nonfx/flow-core";
import { FPopover } from "@nonfx/flow-core";

describe("f-popover", () => {
	it("is defined", () => {
		const el = document.createElement("f-popover");
		expect(el).instanceOf(FPopover);
	});
	it("should render open popover ", async () => {
		const el = await fixture(html` <f-popover open>Test</f-popover> `);
		expect(el.textContent?.trim()).to.equal("Test");
	});
	it("should render closed popover ", async () => {
		const el = await fixture(html` <f-popover>Test</f-popover> `);
		expect(el.textContent?.trim()).to.equal("Test");
		const descendant = document.querySelector(".f-overlay")!;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		expect(descendant).is.null;
	});

	it("should render with default size ", async () => {
		const el = await fixture<FPopover>(html` <f-popover open>Test</f-popover> `);
		expect(el.getAttribute("size")).to.equal("medium");
		expect(el.offsetWidth).to.equal(432);
	});
	it("should render with default state ", async () => {
		const el = await fixture(html` <f-popover open>Test</f-popover> `);
		expect(el.getAttribute("state")).to.equal("default");
	});
	it("should render with correct size ", async () => {
		const el = await fixture<FPopover>(html` <f-popover size="large" open>Test</f-popover> `);
		expect(el.offsetWidth).to.equal(864);
		el.size = "small";
		await el.updateComplete;
		expect(el.offsetWidth).to.equal(320);
	});
});
