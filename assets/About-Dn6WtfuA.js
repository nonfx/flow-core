import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BjBhjGZp.js";import{M as i}from"./index-Cxc1ViK9.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BPcKCdC2.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const a=`# Flow Table

The Flow table is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/nonfx/flow-core))

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
`,n.jsx("f-md-editor",{value:a})]})}function y(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{y as default};
