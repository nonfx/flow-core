import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r,C as i,b as n,A as a}from"./index-1849ba66.js";import{F as c,P as x,A as o,T as j,V as h,a as p,b as f,S as m,c as u,M as b,d as y}from"./f-file-upload.stories-60bc835b.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-6895a86d.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";import"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";import"./directive-12249aa5.js";function d(l){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a",ul:"ul",li:"li"},t(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s.h1,{id:"f-file-upload",children:"f-file-upload"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"File upload allows users to select one or more files to upload to a specific location."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"playground",children:e.jsx(s.a,{href:"/story/components-f-file-upload--playground",children:"Playground"})}),`
`,e.jsx(i,{children:e.jsx(n,{of:x})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(n,{of:o}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"type",children:"type"}),`
`,e.jsx(s.p,{children:"f-file-upload has 2 type of modes: single and multiple."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"When type is single, a user can select only one file and the filename appears inline to the file uploader."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"When type is multiple, a user can select multiple files and each filename stacks under the file uploader."}),`
`]}),`
`]}),`
`,e.jsx(i,{children:e.jsx(n,{of:j})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"single"}),e.jsx("td",{children:"single file selection"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"multiple"}),e.jsx("td",{children:"multiple file selection"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"value",children:"value"}),`
`,e.jsx(s.p,{children:`Defines the return value of f-file-uploader.
When type is single, return value is single file object instance.
When type is multiple, return value is an array of file object instances.`}),`
`,e.jsx(i,{children:e.jsx(n,{of:h})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"placeholder",children:"placeholder"}),`
`,e.jsx(s.p,{children:"Defines the placeholder text for f-file-upload."}),`
`,e.jsx("p",{className:"note-section",children:"Note: Placeholder is replaced by file name when type is single."}),`
`,e.jsx(i,{children:e.jsx(n,{of:p})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"file-type",children:"file-type"}),`
`,e.jsx(s.p,{children:"Users can limit the file types by setting the file-type property to a string containing the allowed file type(s). To specify more than one type, separate the values with a comma."}),`
`,e.jsx(s.p,{children:"Acceptable file formats are displayed in brackets under description."}),`
`,e.jsx(i,{children:e.jsx(n,{of:f})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"size",children:"size"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"f-switch can have 2 sizes."}),`
`,e.jsx(i,{children:e.jsx(n,{of:m})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"small"}),e.jsx("td",{children:"padding and gap 8px"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"medium"}),e.jsx("td",{children:"padding and gap 12px"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"state",children:"state"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"States are used to communicate purpose and connotations. For example, a red color connotes danger, whereas a green color connotes success and so on."}),`
`,e.jsx(i,{children:e.jsx(n,{of:u})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"default"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"primary"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"danger"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"warning"}),e.jsx("td",{}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"max-size",children:"max-size"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"This shows the maximum file size allowed per file"}),`
`,e.jsx("p",{className:"note-section",children:"Note: max-size appears on the right of the label."}),`
`,e.jsx(i,{children:e.jsx(n,{of:b})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"flags",children:"Flags"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("br",{}),`
`,e.jsx(i,{children:e.jsx(n,{of:y})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"Opacity is set to 50% in disabled state in disabled mode."}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"loading"}),e.jsx("td",{children:"Sets the file-upload to loading state."}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]})]})}),`
`,e.jsx(a,{of:"f-file-upload"})]})}function k(l={}){const{wrapper:s}=Object.assign({},t(),l.components);return s?e.jsx(s,Object.assign({},l,{children:e.jsx(d,l)})):d(l)}export{k as default};
