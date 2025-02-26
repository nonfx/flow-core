import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BjBhjGZp.js";import{M as o}from"./index-ScDDhTTv.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DQIAP8eb.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@nonfx/flow-lineage/About"}),`
`,e.jsx(n.h2,{id:"flow-lineage",children:"Flow Lineage"}),`
`,e.jsx(n.p,{children:"A lineage chart is a graphical representation of a node's ancestors, showing the relationships among nodes. It is often used in analytics to show the relations and to trace their ancestry. Lineage charts can be in the form of a hierarchy data, showing the relationships between parents and children, or they can be more complex and show the relationships between more distant nodes. Lineage charts can be useful for investigating the hierarchy of a data."}),`
`,e.jsx(n.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.p,{children:["If you have an existing front-end project, you need to install ",e.jsx(n.a,{href:"https://github.com/nonfx/flow-core",rel:"nofollow",children:"Flow core"}),` into that project before continuing with Flow lineage.
If you do not have an existing front-end project, you can easily create one from a `,e.jsx(n.a,{href:"https://github.com/nonfx/flow-core#starter-kits",rel:"nofollow",children:"flow starter kit"}),"."]}),`
`,e.jsx(n.h3,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.h4,{id:"step-1-install-flow-lineage",children:"Step 1: Install flow lineage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"npm i --save @nonfx/flow-lineage"}),`
`,e.jsx(n.em,{children:"Note:"})," after installation, re-start your application."]}),`
`,e.jsx(n.h4,{id:"step-2--import-stylescss",children:"Step 2 : Import styles/CSS"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Vue JS:"})," Paste the below snippet *after the closing ",e.jsx(n.code,{children:"<template>"})," tag in your ",e.jsx(n.code,{children:"App.vue"})," file"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<style>
  @import "@nonfx/flow-lineage/dist/style.css";
</style>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React:"})," Paste the below snippet in ",e.jsx(n.code,{children:"src/index.tsx"})," or ",e.jsx(n.code,{children:"index.jsx"})," file"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-lineage/dist/style.css";
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Angular:"})," Add css file path in ",e.jsx(n.code,{children:"angular.json"})," in ",e.jsx(n.code,{children:"styles"})," property array."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"styles": ["@nonfx/flow-lineage/dist/style.css"],
`})}),`
`,e.jsx(n.h4,{id:"step-3-import-flow-lineage-into-your-project",children:"Step 3: Import flow-lineage into your project"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"import"})," lineage after ",e.jsx(n.code,{children:"@nonfx/flow-core"})," like below. In ",e.jsx(n.strong,{children:"VueJS:"})," (src/main.ts or main.js), ",e.jsx(n.strong,{children:"Angular:"})," (src/main.ts), ",e.jsx(n.strong,{children:"React:"})," (src/index.tsx or index.jsx)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import "@nonfx/flow-core";
import "@nonfx/flow-lineage";
`})}),`
`,e.jsx(n.h4,{id:"step-4--if-your-project-is-typescript-enabled-then-you-will-need-to-include-import-types",children:"Step 4 : If your project is typescript enabled then you will need to include import types"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Vue JS 2 or 3:"})," Copy paste below line in your ",e.jsx(n.code,{children:"main.ts"})," file."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-lineage/dist/types/vue2";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-lineage/dist/types/vue3";
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React"}),": Include react type in ",e.jsx(n.code,{children:"tsconfig.json"})," file like below."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"include": ["src", "./node_modules/@nonfx/flow-lineage/dist/types/react.ts"]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," after adding the snippets, re-start your application."]})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{f as default};
