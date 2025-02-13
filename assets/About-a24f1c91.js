import{j as n}from"./jsx-runtime-1a9d9a93.js";import"./blocks-2646952b.js";import{u as i}from"./index-4811e648.js";import{M as r}from"./index-0489f07c.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4cbbb895.js";import"../sb-preview/runtime.js";import"./chunk-6E673XPF-debcdbe9.js";import"./index-a0a7be28.js";import"./_defineProperty-094902f6.js";import"./index-385d94e7.js";import"./index-356e4a49.js";import"./index-1605002a.js";const s=`# Flow MD Editor

The Flow md editor is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/ollionorg/flow-core)) using [Monaco Editor](https://microsoft.github.io/monaco-editor/)

# Installation

### 1️⃣ Install flow code editor dependency

\`\`\`
npm i --save @nonfx/flow-md-editor
\`\`\`

**Note:** after installation, re-start your application.

<br>

### 2️⃣ Import flow-md-editor into your project

Paste the below snippet in your project and add your application startup/runtime code to it.

\`\`\`javascript
import "@nonfx/flow-core";
import "@nonfx/flow-md-editor";
\`\`\`

<br>

### 3️⃣ For a typescript enabled project (optional)

**Note:** After adding, re-start your application. Make sure you are using version >4.5

**For Vue 3:**
Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-md-editor/dist/types/vue3";
\`\`\`

<details>
<summary>For Vue 2</summary>

Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-md-editor/dist/types/vue2";
\`\`\`

</details>

<details>
<summary>For React</summary>

**React**: Include react type in \`tsconfig.json\` file like below.

\`\`\`json
"include": ["src", "./node_modules/@nonfx/flow-md-editor/dist/types/react.ts"]
\`\`\`

</details>
<br>
`;function e(o){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@nonfx/flow-md-editor/About"}),`
`,n.jsx("f-md-editor",{value:s})]})}function h(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?n.jsx(t,Object.assign({},o,{children:n.jsx(e,o)})):e()}export{h as default};
