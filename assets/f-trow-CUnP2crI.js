import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BjBhjGZp.js";import{M as l,C as n,S as d}from"./index-BPCLHhN8.js";import"./lit-html-BulfDIla.js";import"./unsafe-svg-Bgti8cH4.js";import{F as c,P as o,A as h,S as x,O as j,a,E as p,b as u,T as f}from"./f-trow.stories-B5pH70cD.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B464crM9.js";import"./index-ipr2_oRq.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./directive-CJw_OlP2.js";import"./ref-C9q2dBKz.js";import"./directive-helpers-CWXDk_SO.js";function t(r){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(s.h1,{id:"f-trow",children:"f-trow"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"Row component for f-table."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"playground",children:e.jsx(s.a,{href:"/story/components-f-trow--playground",children:"Playground"})}),`
`,e.jsx(n,{children:e.jsx(d,{of:o})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("hr",{}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{of:h}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"state",children:"state"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"state sets background on row"}),`
`,e.jsx(n,{children:e.jsx(d,{of:x})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"default"}),e.jsx("td",{children:"based on variant on f-table"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"primary"}),e.jsx("td",{children:e.jsxs(s.p,{children:["Sets ",e.jsx("code",{children:"--color-primary-surface"})," background"]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"neutral"}),e.jsx("td",{children:e.jsxs(s.p,{children:["Sets ",e.jsx("code",{children:"--color-neutral-surface"})," background"]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:e.jsxs(s.p,{children:["Sets ",e.jsx("code",{children:"--color-success-surface"})," background"]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"warning"}),e.jsx("td",{children:e.jsxs(s.p,{children:["Sets ",e.jsx("code",{children:"--color-warning-surface"})," background"]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"danger"}),e.jsx("td",{children:e.jsxs(s.p,{children:["Sets ",e.jsx("code",{children:"--color-danger-surface"})," background"]})}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"inherit"}),e.jsx("td",{children:"Inherits from closest f-div"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"open",children:"open"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(s.p,{children:["It opens ",e.jsx(s.code,{children:"details"})," slot when specified"]}),`
`,e.jsx(n,{children:e.jsx(d,{of:j})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"false"}),e.jsx("td",{children:"by default details slot is hidden/closed"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"true"}),e.jsx("td",{children:"opens details slot"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"selected",children:"selected"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"It shows as selected with checkbox or radio, (Note : f-table must have 'single' or 'multiple' as selectable attribute)"}),`
`,e.jsx(n,{children:e.jsx(d,{of:a})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"false"}),e.jsx("td",{children:"by default details slot is hidden/closed"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"true"}),e.jsx("td",{children:"opens details slot"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"expand-icon-position",children:"expand-icon-position"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.code,{children:"details"})," slot is placed within the ",e.jsx(s.code,{children:"f-trow"})," element, the chevron icon will appear on the right side of the row by default. To adjust its position, utilize the ",e.jsx(s.code,{children:"expand-icon-position"})," property and set it to either ",e.jsx(s.code,{children:"left"})," or ",e.jsx(s.code,{children:"right"})," based on your preference."]}),`
`,e.jsx(n,{children:e.jsx(d,{of:p})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"right"}),e.jsx("td",{children:"by default checvon displayed on right"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"left"}),e.jsx("td",{children:"chevron will display on left"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"selected-row",children:"@selected-row"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"selected-row event will be emitted when when row is selected through checkbox or radio"}),`
`,e.jsx(n,{children:e.jsx(d,{of:u})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"toggle-row",children:"@toggle-row"}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.p,{children:"toggle-row event will be emitted when when row is selected through checkbox or radio"}),`
`,e.jsx(n,{children:e.jsx(d,{of:f})}),`
`,e.jsx("br",{})]})}function T(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{T as default};
