module.exports = {
	"**/*.{ts?(x),js?(x)}": () => "bun run tsc",
	"**/*.{js,ts,mjs,cjs,jsx,tsx}": "bun run lint:files",
	"**/*.{js,ts,md,mdx,scss,json,mjs,cjs}": "bun run prettier:lint"
};
