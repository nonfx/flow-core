/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* global process */

const headers = () => {
	return {
		"X-FIGMA-TOKEN": process.env.FIGMA_TOKEN as string
	};
};
/**
 * Base fetch function for Figma API
 */
const figmaFetch = async (url: string, options: RequestInit = {}) => {
	const response = await fetch(url, {
		...options,
		headers: {
			...headers(),
			...options.headers
		}
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
};

/**
 * get Figma document info
 *
 * @return {Promise<Object>}
 */
const getDocument = async () =>
	figmaFetch(`https://api.figma.com/v1/files/${process.env.FILE_KEY}/`);

/**
 * get Figma style info
 *
 * @return {Promise<Object>}
 */
const getStyles = async () =>
	figmaFetch(`https://api.figma.com/v1/files/${process.env.FILE_KEY}/styles/`);

/**
 * get Figma node info
 *
 * @param {string} nodeId
 * @return {Promise<Object>}
 */
const getNode = async (nodeId: string) => {
	return figmaFetch(
		`https://api.figma.com/v1/files/${process.env.FILE_KEY}/nodes?ids=${decodeURIComponent(nodeId)}`
	);
};
/**
 * get Figma node children
 *
 * @param {string} nodeId
 * @return {Promise<[Object]>}
 */
const getNodeChildren = async (nodeId: string) => {
	const { nodes } = await figmaFetch(
		`https://api.figma.com/v1/files/${process.env.FILE_KEY}/nodes?ids=${decodeURIComponent(nodeId)}`
	);
	return nodes[nodeId].document.children;
};
/**
 * get svg image resource url
 *
 * @param {string} nodeId
 * @return {Promise<string>}
 */
const getSvgImageUrl = async (nodeId: string) => {
	const { images } = await figmaFetch(
		`https://api.figma.com/v1/images/${process.env.FILE_KEY}/?ids=${decodeURIComponent(nodeId)}&format=svg`
	);
	return images[nodeId];
};
/**
 * get svg image resource urls
 *
 * @param {string} nodeId
 * @return {Promise<string[]>}
 */
const getAllSvgImageUrl = async (nodeId: string) => {
	const { images } = await figmaFetch(
		`https://api.figma.com/v1/images/${process.env.FILE_KEY}/?ids=${decodeURIComponent(nodeId)}&format=svg`
	);
	return images;
};
const getIconContent = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return { data: await response.text() };
};

export {
	getDocument,
	getNode,
	getNodeChildren,
	getSvgImageUrl,
	getIconContent,
	getAllSvgImageUrl,
	getStyles
};
