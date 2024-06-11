import { FDagConfig } from "@ollion/flow-lineage";

const dagConfig: FDagConfig = {
	nodes: [
		{
			id: "node1",
			label: "Node 1",
			icon: "i-box"
		},
		{
			id: "node2",
			label: "Node 2",
			icon: "i-box"
		},
		{
			id: "node3",
			label: "Node 3",
			icon: "i-box",
			group: "group1"
		},
		{
			id: "node4",
			label: "Node 4",
			icon: "i-box",
			group: "group2"
		},
		{
			id: "node5",
			label: "Node 5",
			icon: "i-box",
			height: 48,
			width: 100,
			group: "group3"
		},
		{
			id: "node6",
			label: "Node 6",
			icon: "i-box",
			height: 48,
			width: 100,
			group: "group3"
		},
		{
			id: "node7",
			label: "Node 7",
			icon: "i-box",
			height: 48,
			width: 100,
			group: "group4"
		},
		{
			id: "node8",
			label: "Node 8",
			icon: "i-box",
			height: 48,
			width: 100
		},
		{
			id: "node9",
			label: "Node 9",
			icon: "i-box",
			height: 48,
			width: 120,
			group: "group5"
		},
		{
			id: "node10",
			label: "Node 10",
			icon: "i-box",
			height: 48,
			width: 120,
			group: "group5"
		}
	],
	links: [
		{
			from: {
				elementId: "node1"
			},
			to: {
				elementId: "group4"
			}
		},
		{
			from: {
				elementId: "node1"
			},
			to: {
				elementId: "group1"
			}
		},
		{
			from: {
				elementId: "node3"
			},
			to: {
				elementId: "node4"
			}
		},
		{
			from: {
				elementId: "node2"
			},
			to: {
				elementId: "group3"
			}
		},
		{
			from: {
				elementId: "group1"
			},
			to: {
				elementId: "group2"
			}
		},
		{
			from: {
				elementId: "node6"
			},
			to: {
				elementId: "node8"
			}
		}
	],
	groups: [
		{
			id: "group1",
			label: "Group 1",
			icon: "i-tree",
			spacing: {
				x: 50,
				y: 50
			}
		},
		{
			id: "group2",
			label: "Group 2",
			icon: "i-tree",
			spacing: {
				x: 50,
				y: 50
			}
		},
		{
			id: "group3",
			label: "Group 3",
			icon: "i-tree",
			spacing: {
				x: 20,
				y: 20
			},
			group: "group4"
		},
		{
			id: "group4",
			label: "Group 4",
			icon: "i-tree",
			spacing: {
				x: 20,
				y: 20
			},
			group: "group1"
		},
		{
			id: "group5",
			label: "Group 5",
			icon: "i-tree",
			spacing: {
				x: 20,
				y: 20
			},
			placement: {
				section: 3,
				position: "after"
			}
		}
	],
	spacing: {
		x: 100,
		y: 50
	},
	defaultNodeSize: {
		width: 200,
		height: 48
	},
	layoutDirection: "vertical"
};

export default dagConfig;
