import{j as n}from"./jsx-runtime-ffb262ed.js";import"./blocks-2646952b.js";import{u as r}from"./index-a1cf9e47.js";import{M as i}from"./index-f3f29b60.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-dadcc6ca.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";const a=`# Flow Table

The Flow table is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/ollionorg/flow-core))

# Installation

### 1️⃣ Install flow table dependency

\`\`\`
npm i --save @nonfx/flow-table
\`\`\`

**Note:** after installation, re-start your application.

<br>

### 2️⃣ Import flow-table into your project

Paste the below snippet in your project and add your application startup/runtime code to it.

\`\`\`javascript
import "@nonfx/flow-core";
import "@nonfx/flow-table";
\`\`\`

<br>

### 3️⃣ For a typescript enabled project (optional)

**Note:** After adding, re-start your application. Make sure you are using version >4.5

**For Vue 3:**
Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-table/dist/types/vue3";
\`\`\`

<details>
<summary>For Vue 2</summary>

Copy paste below import types in your \`main.ts\` file.

\`\`\`Javascript
import "@nonfx/flow-table/dist/types/vue2";
\`\`\`

</details>

<details>
<summary>For React</summary>

**React**: Include react type in \`tsconfig.json\` file like below.

\`\`\`json
"include": ["src", "./node_modules/@nonfx/flow-table/dist/types/react.ts"]
\`\`\`

</details>
<br>
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@nonfx/flow-table/About"}),`
`,n.jsx("f-md-editor",{value:a})]})}function h(t={}){const{wrapper:o}=Object.assign({},r(),t.components);return o?n.jsx(o,Object.assign({},t,{children:n.jsx(e,t)})):e()}export{h as default};
