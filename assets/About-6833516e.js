import{j as t}from"./jsx-runtime-ffb262ed.js";import"./blocks-2646952b.js";import{u as i}from"./index-a1cf9e47.js";import{M as r}from"./index-b42496a4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bfce787d.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";const s=`# Flow Text Editor

The Flow text editor is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/ollionorg/flow-core)) using [Quill](https://github.com/slab/quill?tab=readme-ov-file)

# Installation

### 1️⃣ Install flow code editor dependency

\`\`\`
npm i --save @nonfx/flow-text-editor
\`\`\`

**Note:** after installation, re-start your application.

<br>

### 2️⃣ Import flow-text-editor into your project

Paste the below snippet in your project and add your application startup/runtime code to it.

\`\`\`javascript
import "@nonfx/flow-core";
import "@nonfx/flow-text-editor";
\`\`\`

<br>

### 3️⃣ For a typescript enabled project (optional)

**Note:** After adding, re-start your application. Make sure you are using version >4.5

**For Vue 3:**
Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-text-editor/dist/types/vue3";
\`\`\`

<details>
<summary>For Vue 2</summary>

Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-text-editor/dist/types/vue2";
\`\`\`

</details>

<details>
<summary>For React</summary>

**React**: Include react type in \`tsconfig.json\` file like below.

\`\`\`json
"include": ["src", "./node_modules/@nonfx/flow-text-editor/dist/types/react.ts"]
\`\`\`

</details>
<br>
`;function e(n){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"@nonfx/flow-text-editor/About"}),`
`,t.jsx("f-md-editor",{value:s})]})}function h(n={}){const{wrapper:o}=Object.assign({},i(),n.components);return o?t.jsx(o,Object.assign({},n,{children:t.jsx(e,n)})):e()}export{h as default};