import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as l,C as d,b as n,A as c}from"./index-5ab5848e.js";import"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";import{F as x,P as j,A as o,C as h,L as a,S as u,a as m,b as p}from"./f-counter.stories-46003712.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-6b5829cd.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";import"./directive-12249aa5.js";function t(r){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:x}),`
`,e.jsx(s.h1,{id:"f-counter",children:"f-counter"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"A counter is a visual indicator for numeric values."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"playground",children:e.jsx(s.a,{href:"/story/components-f-counter--playground",children:"Playground"})}),`
`,e.jsx(d,{children:e.jsx(n,{of:j})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(n,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"category",children:"category"}),`
`,e.jsx(s.p,{children:"Category for f-counter."}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{children:e.jsx(n,{of:h})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fill"}),e.jsx("td",{children:"background is filled with respective state"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"outline"}),e.jsx("td",{children:"oulined counter with border"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"transparent"}),e.jsx("td",{children:"just showing the inner label, background and border are transparent"}),e.jsx("td",{})]})]})}),`
`,e.jsx(s.h2,{id:"label",children:"label"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:`Label property defines the numeric count on the counter. For larger numeric values label truncates
according to the rules mentioned below.`}),`
`,e.jsx("br",{}),`
`,e.jsx("table",{className:"custom-color-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Number"}),e.jsx("th",{children:"Rule"}),e.jsx("th",{children:"Examples"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Less than 10"}),e.jsx("td",{children:"zero gets appended before number."}),e.jsx("td",{children:"01, 05, 09"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Between 10 and 999"}),e.jsx("td",{children:"actual number gets displayed"}),e.jsx("td",{children:"12, 467, 899"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Between 999 and 10,000"}),e.jsxs("td",{children:[e.jsx(s.p,{children:"Use of K to annotate Thousand"}),e.jsx("br",{}),e.jsx(s.p,{children:"Note: Round of the number upto one place of decimal."})]}),e.jsxs("td",{children:[e.jsx(s.p,{children:"1732 -> 1.7K"}),e.jsx("br",{}),e.jsx(s.p,{children:"8760 -> 8.8K"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Between 10,000 and 1 million"}),e.jsxs("td",{children:[e.jsx(s.p,{children:"Annotate with K and round off the number to the nearest thousand."}),e.jsx("br",{}),e.jsx(s.p,{children:"Note: Do not use decimals"})]}),e.jsxs("td",{children:[e.jsx(s.p,{children:"34657 -> 35k"}),e.jsx("br",{}),e.jsx(s.p,{children:"887650 -> 888K"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Between 1 million and 10 million"}),e.jsxs("td",{children:[e.jsx(s.p,{children:"Use M to annotate Million"}),e.jsx("br",{}),e.jsx(s.p,{children:"Note: Round of the number upto one place of decimal."})]}),e.jsxs("td",{children:[e.jsx(s.p,{children:"1100000 -> 1.1M"}),e.jsx("br",{}),e.jsx(s.p,{children:"2560000 -> 2.6M"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"10 million and above"}),e.jsxs("td",{children:[e.jsx(s.p,{children:"Annotate with M and round off the number to the nearest thousand."}),e.jsx("br",{}),e.jsx(s.p,{children:"Note: Do not use decimals"})]}),e.jsxs("td",{children:[e.jsx(s.p,{children:"5500000 -> 55M"}),e.jsx("br",{}),e.jsxs(s.p,{children:[`1280000 -> 13M
`,e.jsx("br",{})," 678000000 -> 678M"]})]})]})]})}),`
`,e.jsx(d,{children:e.jsx(n,{of:a})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"size",children:"size"}),`
`,e.jsx(s.p,{children:"The medium size is the default and recommended option."}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{children:e.jsx(n,{of:u})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"large"}),e.jsx("td",{children:"Large size - 20px"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"medium"}),e.jsx("td",{children:"Medium size - 16px"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"small"}),e.jsx("td",{children:"Small size - 12px"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"state",children:"state"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:`States on counters are used to communicate purpose and it’s connotation. For example, a red color
connotes danger, whereas a green color connotes success and so on.`}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{children:e.jsx(n,{of:m})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"neutral"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"primary"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"danger"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"warning"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"inherit"}),e.jsx("td",{children:"inherit the color according to parent f-div state"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"custom"}),e.jsx("td",{children:"For adding custom color to counter"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"flags",children:"Flags"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(d,{children:e.jsx(n,{of:p})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name"}),e.jsx("td",{children:"Description"}),e.jsx("td",{children:"Default"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"loading"}),e.jsx("td",{children:"Loading flag makes a loader rotate inside counter"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"Opacity of pictogram is set to 50% in disabled state."}),e.jsx("td",{children:"false "})]})]})}),`
`,e.jsx(c,{of:"f-counter"})]})}function k(r={}){const{wrapper:s}=Object.assign({},i(),r.components);return s?e.jsx(s,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{k as default};
