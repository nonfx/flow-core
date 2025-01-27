import{j as e}from"./jsx-runtime-ffb262ed.js";import"./lit-html-b1a28dc3.js";import{s as r}from"./flow-icons.es-134dcb77.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-794b39ec.js";import"../sb-preview/runtime.js";import"./index-fa1bd678.js";r(["aws","gcp","product","system","saas-system","engineering"]);function i(n){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a"},t(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("p",{children:e.jsx(s.p,{children:`Design tokens are the immutable values needed to construct and maintain a design system
represented as data. They are not only a way to store information, but also a way to convey
information.`})}),`
`,e.jsx(s.h2,{id:"color",children:"Color"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:"In Flow, color system is broken into two parts"}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:e.jsx("a",{href:"/story/foundation-design-tokens-base-color--page",children:"Base colors"})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsx("a",{href:"/story/foundation-design-tokens-system-color--page",children:e.jsx(s.p,{children:"System colors"})})})})]}),`
`,e.jsx(s.h2,{id:"themes",children:"themes"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.p,{children:`Themes are usually a collection of base colors, with each theme based on a
specific primary background color (default surface)`}),`
`,e.jsx("br",{}),`
`,e.jsx(s.p,{children:"Flow ships with two themes"}),`
`,e.jsx("br",{}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:e.jsx(s.p,{children:`Flow dark - The dark theme is automatically applied based on the user's
preference of dark or light mode on their operating system.`})})})," ",e.jsx("br",{})," ",e.jsx("li",{children:e.jsx("p",{children:e.jsx(s.p,{children:`Flow Light- The light theme is automatically applied based on the user's preference of dark or
light mode on their operating system.`})})}),e.jsx("br",{})]}),`
`,e.jsx("p",{children:"Content and snippet for theme switching"}),`
`,e.jsx(s.h2,{id:"font-tokens",children:"Font Tokens"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx(s.h3,{id:"font-family",children:"Font Family"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("table",{className:"custom-color-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Toekn"}),e.jsx("th",{children:"Value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"Heading"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"$text-family-heading"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"montserrat"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"Paragraph"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"$text-family-para"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"montserrat"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"Code"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"$text-family-code"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"Courier prime"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"Big number"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"$text-family-big-number"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"BenchNine"})})]})]})}),`
`,e.jsx(s.h3,{id:"font-size",children:"Font size"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("p",{children:e.jsxs(s.p,{children:["font size ",e.jsx("u",{children:"tokens"})]})}),`
`,e.jsx(s.h3,{id:"font-weight",children:"Font weight"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("p",{children:e.jsxs(s.p,{children:["font weight ",e.jsx("u",{children:"tokens"})]})}),`
`,e.jsx(s.h3,{id:"icon",children:"Icon"}),`
`,e.jsx("f-divider",{}),`
`,e.jsx("p",{children:e.jsx(s.p,{children:`Icon token is used to provide the library defined SVGs to the elements. Flow provides follwoing
categories in form of dependencies.`})}),`
`,e.jsx("table",{className:"custom-color-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Prefix"}),e.jsx("th",{children:"Example"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"System icon"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"All system icons"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary font-wt-700",children:"i-"})}),e.jsx("td",{children:e.jsxs("div",{className:"custom-table-flex",children:[e.jsx("f-icon",{source:"i-plus"}),e.jsx("div",{className:"margin-lt-10",children:e.jsx("p",{className:"text-secondary",children:"i-icon"})})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"Product icon"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"Collection of product logos"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary font-wt-700",children:"p-"})}),e.jsx("td",{children:e.jsxs("div",{className:"custom-table-flex",children:[e.jsx("f-icon",{source:"p-google"}),e.jsx("div",{className:"margin-lt-10",children:e.jsx("p",{className:"text-secondary",children:"p-google"})})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"GCP icon"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"Icons used in GCP services"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary font-wt-700",children:"gcp-"})}),e.jsx("td",{children:e.jsxs("div",{className:"custom-table-flex",children:[e.jsx("f-icon",{source:"gcp-cloud-sql"}),e.jsx("div",{className:"margin-lt-10",children:e.jsx("p",{className:"text-secondary",children:"gcp-cloud-sql"})})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("p",{className:"text-default",children:"AWS icon"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary",children:"Icons used in AWS services"})}),e.jsx("td",{children:e.jsx("p",{className:"text-secondary font-wt-700",children:"aws-"})}),e.jsx("td",{children:e.jsxs("div",{className:"custom-table-flex",children:[e.jsx("f-icon",{source:"aws-analytics-emr"}),e.jsx("div",{className:"margin-lt-10",children:e.jsx("p",{className:"text-secondary",children:"aws-analytics-emr"})})]})})]})]})}),`
`,e.jsxs(s.p,{children:["Find complete icon sets of each category in ",e.jsx(s.a,{href:"/story/dependencies-icons--system-icons",children:"Icon dependencies"})]})]})}function p(n={}){const{wrapper:s}=Object.assign({},t(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{p as default};
