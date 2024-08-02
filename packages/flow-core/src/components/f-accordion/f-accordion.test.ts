import { html, fixture, expect } from "@open-wc/testing";
// importing flow-core components
import "@nonfx/flow-core";
// setting icon pack for testing icon related test cases

import { FAccordion, FIconButton } from "@nonfx/flow-core";
import { register } from "@nonfx/flow-icons";
register(["system"]);

describe("f-accordion", () => {
	it("is defined", () => {
		const el = document.createElement("f-accordion");
		expect(el).instanceOf(FAccordion);
	});

	it("should render with all default properties", async () => {
		const el = await fixture(html` <f-accordion></f-accordion> `);

		expect(el.getAttribute("icon")).to.equal("chevron");
		expect(el.getAttribute("icon-size")).to.equal("small");
		expect(el.getAttribute("icon-placement")).to.equal("right");
	});

	it("should render with i-caret-down/up as icon", async () => {
		const el = await fixture(html` <f-accordion icon="caret" ?open=${true}></f-accordion> `);
		const descendant = el.shadowRoot!.querySelector(".f-accordion-icon")!;
		expect(descendant.getAttribute("icon")).to.equal("i-caret-down");
	});

	it("should render icon at left position", async () => {
		const el = await fixture(html`
			<f-accordion icon="caret" ?open=${true} icon-placement="left"></f-accordion>
		`);
		const descendant = el.shadowRoot!.querySelector(".f-accordion-header")!;
		const icon = descendant.children[0].children[0];
		expect(icon).instanceOf(FIconButton);
	});
});
