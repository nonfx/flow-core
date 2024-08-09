import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as l,C as n,b as d,A as a}from"./index-3c40bd9d.js";import{F as c,P as h,A as x,V as j,C as o,M as m,a as p,b as f,S as u,c as b,d as y,e as g,D,f as v}from"./f-date-time-picker.stories-4d9090a6.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-865b1292.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";import"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";import"./directive-12249aa5.js";function t(i){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a",code:"code",ul:"ul",li:"li",ol:"ol"},r(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(s.h1,{id:"f-date-time-picker",children:"f-date-time-picker"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"Date time picker is an input field with a popover from which a user can easily select date and time."}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"playground",children:e.jsx(s.a,{href:"/story/components-f-date-time-picker--playground",children:"Playground"})}),`
`,e.jsx(n,{children:e.jsx(d,{of:h})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(d,{of:x}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"variant",children:"variant"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"Variants are various visual representations of a date-time-picker field."}),`
`,e.jsx(n,{children:e.jsx(d,{of:j})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"curved"}),e.jsx("td",{children:"border radius of 4px"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"round"}),e.jsx("td",{children:"border radius of 22px"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"block"}),e.jsx("td",{children:'works well with cateogry="transparent"'}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"category",children:"category"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"Category decides the background of f-date-time-picker"}),`
`,e.jsx(n,{children:e.jsx(d,{of:o})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"fill"}),e.jsx("td",{children:"background is filled"}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"outline"}),e.jsx("td",{children:"empty background with border"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"transparent"}),e.jsx("td",{}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"mode",children:"mode"}),`
`,e.jsx("f-divider",{}),`
`,e.jsxs(s.p,{children:["The type attribute specifies the type of ",e.jsx(s.code,{children:"<f-date-time-picker>"})," element to display."]}),`
`,e.jsx(n,{children:e.jsx(d,{of:m})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"date-time"}),e.jsx("td",{children:"selection for both date and time together "}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"date-only"}),e.jsx("td",{children:"selection for only date"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"time-only"}),e.jsx("td",{children:"selection for only time"}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"value",children:"value"}),`
`,e.jsx(s.p,{children:"Defines the value of an f-date-time-picker."}),`
`,e.jsx(s.p,{children:"You may specify those dates in a variety of formats:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Date Objects are always accepted ",e.jsx("code",{children:"new Date(2015, 0, 10)"})]}),`
`,e.jsx(s.li,{children:"Timestamps are always accepted e.g. 1488136398547"}),`
`,e.jsx(s.li,{children:'ISO Date Strings are always accepted e.g. "2017-02-26T19:40:03.243Z"'}),`
`,e.jsx(s.li,{children:'Date Strings, which must match the dateFormat chronologically - This means that "2016" "2016-10", "2016-10-20", "2016-10-20 15", "2016-10-20 15:30" are all valid date strings'}),`
`]}),`
`,e.jsx(n,{children:e.jsx(d,{of:p})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"placeholder",children:"placeholder"}),`
`,e.jsx(s.p,{children:"Defines the placeholder text for f-date-time-picker"}),`
`,e.jsx(n,{children:e.jsx(d,{of:f})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"size",children:"size"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"f-date-time-picker can have 2 sizes."}),`
`,e.jsx(n,{children:e.jsx(d,{of:u})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"small"}),e.jsx("td",{children:'height="28px"'}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"medium"}),e.jsx("td",{children:'eheight="36px"'}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"state",children:"state"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"States are used to communicate purpose and connotations. For example, a red color connotes danger, whereas a green color connotes success and so on."}),`
`,e.jsx(n,{children:e.jsx(d,{of:b})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Value"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"default"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("code",{children:"default"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"primary"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"danger"}),e.jsx("td",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"warning"}),e.jsx("td",{}),e.jsx("td",{})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"min-date",children:"min-date"}),`
`,e.jsx(s.p,{children:"Sets the minimum value of the date allowed in the picker"}),`
`,e.jsx(s.p,{children:"You may specify those dates in a variety of formats:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Date Objects are always accepted ",e.jsx("code",{children:"new Date(2015, 0, 10)"})]}),`
`,e.jsx(s.li,{children:"Timestamps are always accepted e.g. 1488136398547"}),`
`,e.jsx(s.li,{children:'ISO Date Strings are always accepted e.g. "2017-02-26T19:40:03.243Z"'}),`
`,e.jsx(s.li,{children:'Date Strings, which must match the dateFormat chronologically - This means that "2016" "2016-10", "2016-10-20", "2016-10-20 15", "2016-10-20 15:30" are all valid date strings'}),`
`,e.jsx(s.li,{children:'The shortcut "today"'}),`
`]}),`
`,e.jsx(n,{children:e.jsx(d,{of:y})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"max-date",children:"max-date"}),`
`,e.jsx(s.p,{children:"Sets the maximum value of the date allowed in the picker"}),`
`,e.jsx(s.p,{children:"You may specify those dates in a variety of formats:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Date Objects are always accepted ",e.jsx("code",{children:"new Date(2015, 0, 10)"})]}),`
`,e.jsx(s.li,{children:"Timestamps are always accepted e.g. 1488136398547"}),`
`,e.jsx(s.li,{children:'ISO Date Strings are always accepted e.g. "2017-02-26T19:40:03.243Z"'}),`
`,e.jsx(s.li,{children:'Date Strings, which must match the dateFormat chronologically - This means that "2016" "2016-10", "2016-10-20", "2016-10-20 15", "2016-10-20 15:30" are all valid date strings'}),`
`,e.jsx(s.li,{children:'The shortcut "today"'}),`
`]}),`
`,e.jsx(n,{children:e.jsx(d,{of:g})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"disable-date",children:"disable-date"}),`
`,e.jsx(s.p,{children:"Sets the certain dates unavailable. There can be multiple options:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Disabling specific date(s), format - dd/mm/YY"}),`
`,e.jsx(s.li,{children:"Disabling range of dates"}),`
`,e.jsx(s.li,{children:"Disabling dates using a function"}),`
`]}),`
`,e.jsx(n,{children:e.jsx(d,{of:D})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"flags",children:"Flags"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n,{children:e.jsx(d,{of:v})}),`
`,e.jsx("table",{className:"custom-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name"}),e.jsx("td",{children:"Description"}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"loading"}),e.jsx("td",{children:"Loader appears on right ride of input box."}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"Opacity is set to 50% in disabled state in disabled mode."}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clear"}),e.jsx("td",{children:e.jsx(s.p,{children:`Displays a close icon-button on the right side of the input that allows the user to clear
the input value`})}),e.jsx("td",{children:e.jsx("code",{children:"true"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"is-range"}),e.jsx("td",{children:"for range calnedar"}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"week-number"}),e.jsx("td",{children:"Displays the week number inside calendar"}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"inline"}),e.jsx("td",{children:"calnedar always open without popover mode"}),e.jsx("td",{children:e.jsx("code",{children:"false"})})]})]})}),`
`,e.jsx(a,{of:"f-date-time-picker"})]})}function L(i={}){const{wrapper:s}=Object.assign({},r(),i.components);return s?e.jsx(s,Object.assign({},i,{children:e.jsx(t,i)})):t(i)}export{L as default};
