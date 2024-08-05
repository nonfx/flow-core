import { expect } from "@open-wc/testing";

// IconPack to test
import { register } from "@nonfx/flow-icons";
register(["system"]);
// import flow-core elements
import "@nonfx/flow-core";
import "@nonfx/flow-dashboard";
import { FTimeseriesChart } from "@nonfx/flow-dashboard";

describe("f-timeseries-chart", () => {
	it("is defined", () => {
		const el = document.createElement("f-timeseries-chart");
		expect(el).instanceOf(FTimeseriesChart);
	});
});
