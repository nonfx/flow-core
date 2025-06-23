import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BjBhjGZp.js";import{M as r}from"./index-4THhLaEE.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DV4GvnWd.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const s=`# Flow Text Editor

The Flow text editor is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/nonfx/flow-core)) using [Quill](https://github.com/slab/quill?tab=readme-ov-file)

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
`,t.jsx("f-md-editor",{value:s})]})}function y(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(e,{...n})}):e()}export{y as default};
