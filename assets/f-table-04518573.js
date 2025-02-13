import{j as e}from"./jsx-runtime-1a9d9a93.js";import{M as l,C as r,b as n}from"./index-95faca17.js";import{F as c,P as o,A as h,V as x,S as j,a,H as b,b as m,c as p,d as u}from"./f-table.stories-4cae171d.js";import{u as i}from"./index-4811e648.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c10e5ca6.js";import"../sb-preview/runtime.js";import"./chunk-6E673XPF-debcdbe9.js";import"./index-a0a7be28.js";import"./_defineProperty-094902f6.js";import"./index-385d94e7.js";import"./index-356e4a49.js";import"./index-1605002a.js";import"./lit-html-57bab4fd.js";import"./ref-8dc3593a.js";import"./directive-helpers-ef3e3cc7.js";import"./directive-12249aa5.js";import"./donwload-file-d0c02218.js";function t(d){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a",code:"code"},i(),d.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(s.h1,{id:"f-table",children:"f-table"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"Table component includes rows and cells."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"playground",children:e.jsx(s.a,{href:"/story/components-f-table--playground",children:"Playground"})}),`
`,e.jsx(r,{children:e.jsx(n,{of:o})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("hr",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variant",children:"variant"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"variant are representations of a f-table with different row background and borders."}),`
`,e.jsx(r,{children:e.jsx(n,{of:x})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stripped"}),e.jsx("td",{children:"Sets aletrnate background on each row"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"outlined"}),e.jsx("td",{children:"Sets border around table"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"underlined"}),e.jsx("td",{children:"Sets border at bottom of each row"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"bordered"}),e.jsx("td",{children:"Sets border around each cell"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"size",children:"size"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"size sets differrent padding on each cell of table"}),`
`,e.jsx(r,{children:e.jsx(n,{of:j})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"medium"}),e.jsx("td",{children:"Sets 16px padding on each cell"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"small"}),e.jsx("td",{children:"Sets 12px padding on each cell"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"selectable",children:"selectable"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"selectable sets checkbox or radio for row selection."}),`
`,e.jsx(r,{children:e.jsx(n,{of:a})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"none"}),e.jsx("td",{children:"Sets no selection on rows"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"single"}),e.jsx("td",{children:"radio available for selection on rows"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"multiple"}),e.jsx("td",{children:"checkbox available for selection on rows"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"highlight-selected",children:"highlight-selected"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"Sets background for selected rows"}),`
`,e.jsx(r,{children:e.jsx(n,{of:b})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"highlight-hover",children:"highlight-hover"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"Sets background on row hover"}),`
`,e.jsx(r,{children:e.jsx(n,{of:m})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"highlight-column-hover",children:"highlight-column-hover"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"Sets background on column hover"}),`
`,e.jsx(r,{children:e.jsx(n,{of:p})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"selected-rows",children:"@selected-rows"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"selected-rows"})," event"]}),`
`,e.jsx(r,{children:e.jsx(n,{of:u})}),`
`,e.jsx("br",{})]})}function R(d={}){const{wrapper:s}=Object.assign({},i(),d.components);return s?e.jsx(s,Object.assign({},d,{children:e.jsx(t,d)})):t(d)}export{R as default};
