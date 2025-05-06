import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BjBhjGZp.js";import{M as o}from"./index-BXwzuYut.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CVZwOsKm.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@nonfx/flow-form-builder/About"}),`
`,e.jsxs(n.p,{children:["The Flow form builder is built on the Flow design framework (",e.jsx(n.a,{href:"https://flow.ollion.com/",rel:"nofollow",children:"website"})," / ",e.jsx(n.a,{href:"https://github.com/nonfx/flow-core",rel:"nofollow",children:"github"}),")"]}),`
`,e.jsx(n.h2,{id:"benefits--features",children:"Benefits / Features"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"-speed--flexibility",children:"⚡ Speed + Flexibility"}),`
`,e.jsx(n.p,{children:"Quickly create and customize your form through the form builder schema. Built with developers in mind, the schema is simple and easy to use."}),`
`,e.jsx(n.h4,{id:"-typescript-support",children:"👩‍💻 TypeScript Support"}),`
`,e.jsx(n.p,{children:"Out of the box TS support."}),`
`,e.jsx(n.h4,{id:"-built-in--custom-validation",children:"🚓 Built-in + Custom Validation"}),`
`,e.jsx(n.p,{children:"Validation is natively built and integrated throught the form-builder schema. You can easily reference built-in validations or quickly write your own custom or advanced validation."}),`
`,e.jsx(n.h4,{id:"-dynamic-data",children:"🚀 Dynamic Data"}),`
`,e.jsx(n.p,{children:"Built with dyanmic complex usecases in mind, you can easily manupilate the form structure + data through built in events."}),`
`,e.jsx(n.h4,{id:"-silent-validation",children:"💤 Silent Validation"}),`
`,e.jsx(n.p,{children:"This form-builder automatically emits a state-change event whenever the internal state is modified, this gives you access to the validation state of the form builder silently (i.e. Without displaying validation messages)."}),`
`,e.jsx(n.p,{children:"This helps in custom or advanced scenarios like calling external APIs, modifying the form layout etc, based on user interactions"}),`
`,e.jsx(n.h4,{id:"-custom-designs",children:"🎨 Custom designs"}),`
`,e.jsx(n.p,{children:"You can pass custom markup to render custom designs for titles, actions, help text, content, etc"}),`
`,e.jsx(n.h4,{id:"-flow-components-and-themes",children:"🍭 Flow components and themes"}),`
`,e.jsxs(n.p,{children:["Built on ",e.jsx(n.a,{href:"https://github.com/nonfx/flow-core",rel:"nofollow",children:"flow-core"})," gives you accesss to all themes and components like emoji-picker, datetime-picker , suggestions ,file-upload,multi-select etc."]}),`
`,e.jsx(n.h4,{id:"️-structural-api-co-relation",children:"🛠️ Structural API co-relation"}),`
`,e.jsx(n.p,{children:"Structural correlation involves defining the data structure that will be transmitted between the frontend and backend, including the format and type of data. To achieve this, we leverage objects and arrays to support any type api payload format. This reduces the complex task of transpiling form builder output to the backend API payload format."}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.p,{children:["Flow form builder is built on ",e.jsx(n.a,{href:"https://flow.ollion.com/",rel:"nofollow",children:"Flow"}),", an open source design framework. To run form builder, please make sure that you have ",e.jsx(n.a,{href:"https://github.com/nonfx/flow-core",rel:"nofollow",children:"Flow core"})," as part of your project."]}),`
`,`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you already have Flow packages installed, please update to the latest versions"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If you do not have an existing front-end project, you can quickly create one from a ",e.jsx(n.a,{href:"https://github.com/nonfx/flow-core#starter-kits",rel:"nofollow",children:"flow starter kit"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h3,{id:"1️⃣-install-flow-form-builder-dependency",children:"1️⃣ Install flow form builder dependency"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`bun i --save @nonfx/flow-form-builder
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," after installation, re-start your application."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"2️⃣-import-stylescss",children:"2️⃣ Import styles/CSS"}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"Vue JS:"}),`
Paste the below snippet after the closing `,e.jsx(n.code,{children:"<template>"})," tag in your ",e.jsx(n.code,{children:"App.vue"})," file"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<style>
	@import "@nonfx/flow-form-builder/dist/style.css";
</style>
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"For React"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React:"})," Paste the below snippet in ",e.jsx(n.code,{children:"src/index.tsx"})," or ",e.jsx(n.code,{children:"index.jsx"})," file"]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-form-builder/dist/style.css";
`})})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"For Angular"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Angular:"})," Add css file path in ",e.jsx(n.code,{children:"angular.json"})," in ",e.jsx(n.code,{children:"styles"})," property array."]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`"styles": ["@nonfx/flow-form-builder/dist/style.css"],
`})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"3️⃣-import-flow-form-builder-into-your-project",children:"3️⃣ Import flow-form-builder into your project"}),`
`,e.jsx(n.p,{children:"Paste the below snippet in your project and add your application startup/runtime code to it."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import "@nonfx/flow-core";
import "@nonfx/flow-form-builder";
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"4️⃣-for-a-typescript-enabled-project-optional",children:"4️⃣ For a typescript enabled project (optional)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," After adding, re-start your application. Make sure you are using version >4.5"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"For Vue 3:"}),`
Copy paste below import types in your `,e.jsx(n.code,{children:"main.ts"})," file."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-form-builder/dist/types/vue3";
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"For Vue 2"}),e.jsxs(n.p,{children:["Copy paste below import types in your ",e.jsx(n.code,{children:"main.ts"})," file."]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`import "@nonfx/flow-form-builder/dist/types/vue2";
`})})]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"For React"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"React"}),": Include react type in ",e.jsx(n.code,{children:"tsconfig.json"})," file like below."]}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`"include": ["src", "./node_modules/@nonfx/flow-form-builder/dist/types/react.ts"]
`})})]}),`
`,e.jsx("br",{})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
