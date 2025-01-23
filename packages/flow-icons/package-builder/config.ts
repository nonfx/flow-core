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
			name: "flow-policy-icon",
			nodeId: "47:71"
		},
		{
			name: "flow-azure-icon",
			nodeId: "154:174"
		},
		{
			name: "flow-nonfx-icon",
			nodeId: "199:38"
		}
	]
};

export default config;
