import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as o,C as r,b as n,A as h}from"./index-c393e95b.js";import"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";import"./index-fa1bd678.js";import{F as l,P as c,A as x,T as a,a as j,S as p,b as m,C as b}from"./f-popover.stories-3b0f855c.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-f78c7b7c.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./index-bbead140.js";import"./_defineProperty-5bd5182b.js";import"./index-b75c9059.js";import"./index-356e4a49.js";import"./index-1959b55b.js";import"./directive-12249aa5.js";import"./ref-a55570ea.js";import"./directive-helpers-7e9c1cf5.js";__STORYBOOK_MODULE_CLIENT_API__;function d(s){const e=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",a:"a"},i(),s.components);return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:l}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"f-popover",children:"f-popover"}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx("hr",{}),`
`,t.jsx(e.p,{children:`Popovers are containers that float on top of the interface with an overlay behind them. They can
be used to show short-lived information such as menus, options, additional actions.`}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h3,{id:"playground",children:t.jsx(e.a,{href:"/story/ollion-flow-core-f-popover--playground",children:"Playground"})}),`
`,t.jsx(r,{children:t.jsx(n,{of:c})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h3,{id:"anatomy",children:"Anatomy"}),`
`,t.jsx("hr",{}),`
`,t.jsx("br",{}),`
`,t.jsx(n,{of:x}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"target",children:"target"}),`
`,t.jsx("hr",{}),`
`,t.jsx(e.p,{children:`Target property specifies a name or a keyword that indicates where to display the popover
(source).`}),`
`,t.jsx("br",{}),`
`,t.jsx(r,{children:t.jsx(n,{of:a})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"placement",children:"placement"}),`
`,t.jsx("hr",{}),`
`,t.jsx(e.p,{children:`A popover can have placements relative to the source or auto aligned. There are 12 possible placements relative to the source.
By default the popover is auto aligned to the center of the viewport.`}),`
`,t.jsx("br",{}),`
`,t.jsx(r,{children:t.jsx(n,{of:j})}),`
`,t.jsx("table",{className:"custom-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Value"}),t.jsx("td",{children:"Description"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"auto"}),t.jsx("td",{children:"Sets the placement of popover automatically according to the screen size"}),t.jsx("td",{children:t.jsx("code",{children:"default"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"top"}),t.jsx("td",{children:"placed at top-middle part w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"top-start"}),t.jsx("td",{children:"placed at top-start position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"top-end"}),t.jsx("td",{children:"placed at top-end position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"bottom"}),t.jsx("td",{children:"placed at bottom-middle position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"bottom-start"}),t.jsx("td",{children:"placed at bottom-start position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"bottom-end"}),t.jsx("td",{children:"placed at bottom-end position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"right"}),t.jsx("td",{children:"placed at right-center position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"right-start"}),t.jsx("td",{children:"starting from top to downwards on right side wrt to the button opening popup"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"right-end"}),t.jsx("td",{children:"starting from bottom to upwards on right side wrt to the button opening popup"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"left"}),t.jsx("td",{children:"placed at left-center position w.r.t the opening button"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"left-start"}),t.jsx("td",{children:"starting from top to downwards on left side wrt to the button opening popup"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"left-end"}),t.jsx("td",{children:"starting from bottom to upwards on left side wrt to the button opening popup"}),t.jsx("td",{})]})]})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"size",children:"size"}),`
`,t.jsx("hr",{}),`
`,t.jsx(e.p,{children:"A popover can have different sizes depending on the use case from the range: small, medium, large, stretch."}),`
`,t.jsx("br",{}),`
`,t.jsx(e.p,{children:`Each size defines a width and a maximum height. By default the height will adjust to the content of the
popover and if the max height is attained, the body contents will scroll.`}),`
`,t.jsx("br",{}),`
`,t.jsx("p",{className:"note-section",children:t.jsx(e.p,{children:"Note: Popover will be constrained with viewport and can not go beyond it."})}),`
`,t.jsx("br",{}),`
`,t.jsx(r,{children:t.jsx(n,{of:p})}),`
`,t.jsx("table",{className:"custom-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Value"}),t.jsx("td",{children:"Description"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"stretch"}),t.jsx("td",{children:t.jsx(e.p,{children:"Viewport width with a 16px gutter/padding and Viewport height with a 16px gutter/padding"})}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"large"}),t.jsx("td",{children:"width: 864px. max-height: 600px"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"medium"}),t.jsx("td",{children:"width: 432px. max-height: 600px"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"top-end"}),t.jsx("td",{children:"width: 320px. max-height: 432px"}),t.jsx("td",{children:t.jsx("code",{children:"default"})})]})]})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"flags",children:"Flags"}),`
`,t.jsx("hr",{}),`
`,t.jsx("br",{}),`
`,t.jsx(r,{children:t.jsx(n,{of:m})}),`
`,t.jsx("table",{className:"custom-table",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Name"}),t.jsx("td",{children:"Description"}),t.jsx("td",{})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"overlay"}),t.jsx("td",{children:"If we need black with 50% opacity background ot not when open the popover"}),t.jsx("td",{children:t.jsx("code",{children:"true"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"open"}),t.jsx("td",{children:"To open and close popover"}),t.jsx("td",{children:t.jsx("code",{children:"false"})})]})]})}),`
`,t.jsx(e.h2,{id:"child-popovers",children:"Child Popovers"}),`
`,t.jsx("hr",{}),`
`,t.jsx("br",{}),`
`,t.jsx(r,{children:t.jsx(n,{of:b})}),`
`,t.jsx(h,{of:"f-popover"})]})}function k(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?t.jsx(e,Object.assign({},s,{children:t.jsx(d,s)})):d(s)}export{k as default};
