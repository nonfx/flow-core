import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BjBhjGZp.js";import{M as i}from"./index-P46WplXj.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cls0rUh5.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";const s=`# Flow MD Editor

The Flow md editor is built on the Flow design framework ([website](https://flow.ollion.com/) / [github](https://github.com/nonfx/flow-core)) using [Monaco Editor](https://microsoft.github.io/monaco-editor/)

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
`;function e(o){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@nonfx/flow-md-editor/About"}),`
`,n.jsx("f-md-editor",{value:s})]})}function w(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(e,{...o})}):e()}export{w as default};
