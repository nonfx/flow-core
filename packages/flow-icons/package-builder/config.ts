export type PackageDetails = {
	name: string;
	nodeId: string;
};

export type FigmaPackageConfig = {
	packages: PackageDetails[];
};
const config: FigmaPackageConfig = {
	packages: [
		{
			name: "flow-system-icon",
			nodeId: "0:1"
		},
		{
			name: "saas-system-icon",
			nodeId: "55:612"
		},
		{
			name: "flow-product-icon",
			nodeId: "1:2"
		},
		{
			name: "flow-gcp-icon",
			nodeId: "1:3"
		},
		{
			name: "flow-aws-icon",
			nodeId: "1:4"
		},
		{
			name: "flow-engineering-icon",
			nodeId: "1270:641"
		}
	]
};

export default config;
