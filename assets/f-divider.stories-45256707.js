import{x as A}from"./lit-html-57bab4fd.js";import{o as D}from"./unsafe-svg-0091c80b.js";const F=`<svg width="576" height="48" viewBox="0 0 576 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="576" height="48" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_72_28473" transform="scale(0.000868056 0.0104167)"/>
</pattern>
<image id="image0_72_28473" width="1152" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABIAAAABgCAYAAABlownLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHxSURBVHgB7dgxEYBAEATBA52IIEIEESLw+Ugg+qq/rW4FE08VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxnq+aO8x4FAAAAMM94n2uvxlrHAwAAAPDPAAIAAAAIZwABAAAAhDOAAAAAAMIZQAAAAADhDCAAAACAcAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM9AFULAUQDu3/rgAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,k={title:"@nonfx/flow-core/f-divider",parameters:{controls:{hideNoControlsWarning:!0}}},i={render:e=>A`<f-div direction="column" padding="x-large"
            ><f-divider variant=${e.variant} size=${e.size} state=${e.state}></f-divider
        ></f-div>`,name:"Playground",argTypes:{variant:{control:"select",options:["solid","dashed","dotted"]},size:{control:"select",options:["large","medium"]},state:{control:"select",options:["default","secondary","subtle","custom, #0000FF","custom, gray","custom, #fff","custom, white","custom, black","custom, #607B9F"]}},args:{variant:"solid",size:"medium",state:"default"}},n={render:()=>A`<div class="align-center">${D(F)}</div>`,name:"Anatomy"},d={render:()=>A` <f-div direction="row" gap="auto" padding="large none none none">
                <f-div padding="none x-large" height="hug-content">Row layout</f-div>
                <f-div padding="none x-large" height="hug-content">Column layout</f-div>
            </f-div>
            <f-div padding="x-large" gap="x-large" direction="row">
                <f-div
                    padding="large"
                    gap="x-large"
                    border="medium solid default around"
                    direction="row"
                    height="486px"
                >
                    <f-div
                        padding="large"
                        gap="large"
                        border="medium dashed secondary around"
                        height="100%"
                        direction="column"
                    >
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="200px" padding="none" state="secondary" variant="curved"></f-div>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div
                        padding="none"
                        gap="large"
                        state="secondary"
                        height="444px"
                        variant="curved"
                    ></f-div>
                </f-div>
                <f-div
                    padding="large"
                    gap="x-large"
                    border="medium solid default around"
                    height="486px"
                    direction="column"
                >
                    <f-div
                        padding="large"
                        gap="large"
                        border="medium dashed secondary around"
                        height="hug-content"
                        direction="column"
                    >
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div
                        padding="none"
                        state="secondary"
                        height="164px"
                        variant="curved"
                        width="100%"
                    ></f-div>
                </f-div>
            </f-div>`,name:"Specifications"},a={render:e=>A`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Solid</f-text>
            </f-div>
            <f-divider variant="solid"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Dotted</f-text>
            </f-div>
            <f-divider variant="dotted"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Dashed</f-text>
            </f-div>
            <f-divider variant="dashed"></f-divider>
        </f-div>`,name:"variant"},t={render:e=>A`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">large</f-text>
            </f-div>
            <f-divider size="large"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">medium</f-text>
            </f-div>
            <f-divider size="medium"></f-divider>
        </f-div>`,name:"size"},r={render:e=>A`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="default"</f-text>
            </f-div>
            <f-divider size="large" state="default"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="secondary"</f-text>
            </f-div>
            <f-divider size="large" state="secondary"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="subtle"</f-text>
            </f-div>
            <f-divider size="large" state="subtle"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="custom,black"</f-text>
            </f-div>
            <f-divider size="large" state="custom,black"></f-divider>
        </f-div>`,name:"state"};var o,g,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`<f-div direction="column" padding="x-large"
            ><f-divider variant=\${args.variant} size=\${args.size} state=\${args.state}></f-divider
        ></f-div>\`,
  name: "Playground",
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"]
    },
    size: {
      control: "select",
      options: ["large", "medium"]
    },
    state: {
      control: "select",
      options: ["default", "secondary", "subtle", "custom, #0000FF", "custom, gray", "custom, #fff", "custom, white", "custom, black", "custom, #607B9F"]
    }
  },
  args: {
    variant: "solid",
    size: "medium",
    state: "default"
  }
}`,...(s=(g=i.parameters)==null?void 0:g.docs)==null?void 0:s.source}}};var v,f,c;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  render: () => html`<div class="align-center">${unsafeSVG(fDividerAnatomy)}</div>`,\n  name: "Anatomy"\n}',...(c=(f=n.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};var l,u,m;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\` <f-div direction="row" gap="auto" padding="large none none none">
                <f-div padding="none x-large" height="hug-content">Row layout</f-div>
                <f-div padding="none x-large" height="hug-content">Column layout</f-div>
            </f-div>
            <f-div padding="x-large" gap="x-large" direction="row">
                <f-div
                    padding="large"
                    gap="x-large"
                    border="medium solid default around"
                    direction="row"
                    height="486px"
                >
                    <f-div
                        padding="large"
                        gap="large"
                        border="medium dashed secondary around"
                        height="100%"
                        direction="column"
                    >
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="200px" padding="none" state="secondary" variant="curved"></f-div>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div
                        padding="none"
                        gap="large"
                        state="secondary"
                        height="444px"
                        variant="curved"
                    ></f-div>
                </f-div>
                <f-div
                    padding="large"
                    gap="x-large"
                    border="medium solid default around"
                    height="486px"
                    direction="column"
                >
                    <f-div
                        padding="large"
                        gap="large"
                        border="medium dashed secondary around"
                        height="hug-content"
                        direction="column"
                    >
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                        <f-div height="80px" padding="none" state="secondary" variant="curved"></f-div>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div
                        padding="none"
                        state="secondary"
                        height="164px"
                        variant="curved"
                        width="100%"
                    ></f-div>
                </f-div>
            </f-div>\`,
  name: "Specifications"
}`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,p,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => html\`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Solid</f-text>
            </f-div>
            <f-divider variant="solid"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Dotted</f-text>
            </f-div>
            <f-divider variant="dotted"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">Dashed</f-text>
            </f-div>
            <f-divider variant="dashed"></f-divider>
        </f-div>\`,
  name: "variant"
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var w,y,z;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => html\`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">large</f-text>
            </f-div>
            <f-divider size="large"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">medium</f-text>
            </f-div>
            <f-divider size="medium"></f-divider>
        </f-div>\`,
  name: "size"
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var b,S,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`<f-div gap="medium" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="default"</f-text>
            </f-div>
            <f-divider size="large" state="default"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="secondary"</f-text>
            </f-div>
            <f-divider size="large" state="secondary"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="subtle"</f-text>
            </f-div>
            <f-divider size="large" state="subtle"></f-divider>
            <br />
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">state="custom,black"</f-text>
            </f-div>
            <f-divider size="large" state="custom,black"></f-divider>
        </f-div>\`,
  name: "state"
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const U=["Playground","Anatomy","Specifications","Variant","Size","State"],E=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:n,Playground:i,Size:t,Specifications:d,State:r,Variant:a,__namedExportsOrder:U,default:k},Symbol.toStringTag,{value:"Module"}));export{n as A,E as F,i as P,d as S,a as V,t as a,r as b};
