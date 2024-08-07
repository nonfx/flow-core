import { register } from "@nonfx/flow-icons";
register(["system"]);
import { expect } from "@open-wc/testing";

// import flow-core elements
import "@nonfx/flow-core";

import { FTextEditor } from "@nonfx/flow-text-editor";

/**
 * flow-text-editor is based on Quill so we added our skin and few props. hence for feature testing we don't need more test cases
 */
describe("f-text-editor", () => {
	it("is defined", () => {
		const el = document.createElement("f-text-editor");
		expect(el).instanceOf(FTextEditor);
	});
});
