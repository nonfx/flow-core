import{j as t}from"./jsx-runtime-ffb262ed.js";import"./blocks-2646952b.js";import{u as r}from"./index-a1cf9e47.js";import{M as s}from"./index-58d83d9e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c33ab225.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";const i=`# Flow Code Editor

The Flow code editor is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/ollionorg/flow-core)) using [Monaco Editor](https://microsoft.github.io/monaco-editor/)

# Installation

### 1️⃣ Install flow code editor dependency

\`\`\`
npm i --save @nonfx/flow-code-editor
\`\`\`

**Note:** after installation, re-start your application.

<br>

### 2️⃣ Import flow-code-editor into your project

Paste the below snippet in your project and add your application startup/runtime code to it.

\`\`\`javascript
import "@nonfx/flow-core";
import "@nonfx/flow-code-editor";
\`\`\`

<br>

### 3️⃣ For a typescript enabled project (optional)

**Note:** After adding, re-start your application. Make sure you are using version >4.5

**For Vue 3:**
Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-code-editor/dist/types/vue3";
\`\`\`

<details>
<summary>For Vue 2</summary>

Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-code-editor/dist/types/vue2";
\`\`\`

</details>

<details>
<summary>For React</summary>

**React**: Include react type in \`tsconfig.json\` file like below.

\`\`\`json
"include": ["src", "./node_modules/@nonfx/flow-code-editor/dist/types/react.ts"]
\`\`\`

</details>
<br>

# Integration in Vite App

### Add following code snippet in \`vite.config.ts\`

\`\`\`typescript
import * as fs from "fs";
import * as path from "path";

const copyDir = (src, dest, callback?: (er: Error) => void) => {
	const copy = (copySrc, copyDest) => {
		fs.readdir(copySrc, (err, list) => {
			if (err) {
				callback(err);
				return;
			}
			list.forEach(item => {
				const ss = path.resolve(copySrc, item);
				fs.stat(ss, (err, stat) => {
					if (err) {
						callback(err);
					} else {
						const curSrc = path.resolve(copySrc, item);
						const curDest = path.resolve(copyDest, item);

						if (stat.isFile()) {
							fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
						} else if (stat.isDirectory()) {
							fs.mkdirSync(curDest, { recursive: true });
							copy(curSrc, curDest);
						}
					}
				});
			});
		});
	};

	fs.access(dest, err => {
		if (err) {
			fs.mkdirSync(dest, { recursive: true });
		}
		copy(src, dest);
	});
};

copyDir("node_modules/@nonfx/flow-code-editor/dist/assets", "assets");
\`\`\`

### add specify \`assets\` folder in \`assetsInclude\` property.

For example

\`\`\`typescript
export default defineConfig({
	plugins: [vue()],
	base: "",
	// \`assets\` folder specified here 👇
	assetsInclude: ["assets"]
});
\`\`\`
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"@nonfx/flow-code-editor/About"}),`
`,t.jsx("f-md-editor",{value:i})]})}function v(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(o,n)})):o()}export{v as default};
