/* eslint-disable no-undef */
require("dotenv").config();

const headers = {
	"X-FIGMA-TOKEN": process.env.FIGMA_TOKEN
};

/**
 * Base fetch function for Figma API
 */
const figmaFetch = async (url, options = {}) => {
	const response = await fetch(url, {
		...options,
		headers: {
			...headers,
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
const getNode = async nodeId =>
	figmaFetch(
		`https://api.figma.com/v1/files/${process.env.FILE_KEY}/nodes?ids=${decodeURIComponent(nodeId)}`
	);
/**
 * get Figma node children
 *
 * @param {string} nodeId
 * @return {Promise<[Object]>}
 */
const getNodeChildren = async nodeId => {
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
const getSvgImageUrl = async nodeId => {
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
const getAllSvgImageUrl = async nodeId => {
	const { images } = await figmaFetch(
		`https://api.figma.com/v1/images/${process.env.FILE_KEY}/?ids=${decodeURIComponent(nodeId)}&format=svg`
	);
	return images;
};
const getIconContent = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return { data: await response.text() };
};
module.exports = {
	getDocument,
	getNode,
	getNodeChildren,
	getSvgImageUrl,
	getIconContent,
	getAllSvgImageUrl,
	getStyles
};
