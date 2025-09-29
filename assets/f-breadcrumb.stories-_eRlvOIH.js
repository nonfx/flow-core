import{x as t}from"./iframe-CCyKNv7C.js";const C={title:"@nonfx/flow-core/f-breadcrumb",parameters:{controls:{hideNoControlsWarning:!0}}},i={render:e=>{const n=a=>{console.log(a.detail.value)};return t` <f-div padding="small">
            <f-breadcrumb
                .crumbs=${e.crumbs}
                .variant=${e.variant}
                .size=${e.size}
                ?disabled=${e.disabled}
                @click=${n}
            ></f-breadcrumb>
        </f-div>`},name:"Playground",argTypes:{size:{control:"radio",options:["medium","small"]},variant:{control:"radio",options:["text","icon"]},crumbs:{control:"object"},disabled:{control:"boolean"}},args:{size:"medium",variant:"text",crumbs:[{tabIndex:0,title:"Label 1 New Label Demo test",icon:"i-home"},{tabIndex:1,title:"Label 2",icon:"i-pipe"},{tabIndex:2,title:"Label 3",icon:"i-info-fill"},{tabIndex:3,title:"Label 4",icon:"i-app"},{tabIndex:4,title:"Label 5",icon:"i-download"}],disabled:!1}},r={render:()=>{const e=["medium","small"],n=[{tabIndex:0,title:"Label 1 New Label Demo test"},{tabIndex:1,title:"Label 2"},{tabIndex:2,title:"Label 3"},{tabIndex:3,title:"Label 4"}];return t`<f-div padding="small" gap="x-large">
            ${e.map(a=>t` <f-div direction="column" gap="large"
                        ><f-text>size=${a}</f-text
                        ><f-breadcrumb .crumbs=${n} .size=${a}></f-breadcrumb
                    ></f-div>`)}
        </f-div>`},name:"size"},l={render:()=>t`<f-div padding="small" gap="x-large">
            ${[[{tabIndex:0,title:"Label 1 New Label Demo test"},{tabIndex:1,title:"Label 2"},{tabIndex:2,title:"Label 3"},{tabIndex:3,title:"Label 4"}],[{tabIndex:0,title:"Label 1"},{tabIndex:1,title:"Label 2"},{tabIndex:2,title:"Label 3"},{tabIndex:3,title:"Label 4"},{tabIndex:4,title:"Label 5"}]].map(n=>t` <f-div direction="column" gap="large"
                        ><f-text>${n.length>4?"Crumbs length > 4":"Crumbs length < 4"}</f-text
                        ><f-breadcrumb .crumbs=${n}></f-breadcrumb
                    ></f-div>`)}
        </f-div>`,name:"crumbs"},d={render:()=>t`<f-div padding="small" gap="x-large">
            ${[[{tabIndex:0,title:"Home"},{tabIndex:1,title:"Label 2"},{tabIndex:2,title:"Label 3"},{tabIndex:3,title:"Label 4"},{tabIndex:4,title:"Current"}],[{tabIndex:0,title:"Home",icon:"i-home"},{tabIndex:1,title:"Label 2",icon:"i-app"},{tabIndex:2,title:"Label 3",icon:"i-launch"},{tabIndex:3,title:"info",icon:"i-info-fill"},{tabIndex:4,title:"Current",icon:"i-user-double"}]].map((n,a)=>t` <f-div direction="column" gap="large"
                        ><f-text>${a===0?"variant='text'":"variant='icon'"}</f-text
                        ><f-breadcrumb .crumbs=${n} .variant=${a===0?"text":"icon"}></f-breadcrumb
                    ></f-div>`)}
        </f-div>`,name:"variant"},b={render:()=>t` <f-div padding="small" gap="x-large">
            <f-div direction="column" gap="large"
                ><f-text>disabled</f-text><f-breadcrumb .crumbs=${[{tabIndex:0,title:"Label 1 New Label Demo test"},{tabIndex:1,title:"Label 2"},{tabIndex:2,title:"Label 3"},{tabIndex:3,title:"Label 4"}]} ?disabled=${!0}></f-breadcrumb
            ></f-div>
        </f-div>`,name:"Flags"};var o,s,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: BreadcrumbArgTypes) => {
    const handleClick = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\` <f-div padding="small">
            <f-breadcrumb
                .crumbs=\${args.crumbs}
                .variant=\${args.variant}
                .size=\${args.size}
                ?disabled=\${args.disabled}
                @click=\${handleClick}
            ></f-breadcrumb>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    size: {
      control: "radio",
      options: ["medium", "small"]
    },
    variant: {
      control: "radio",
      options: ["text", "icon"]
    },
    crumbs: {
      control: "object"
    },
    disabled: {
      control: "boolean"
    }
  },
  args: {
    size: "medium",
    variant: "text",
    crumbs: [{
      tabIndex: 0,
      title: "Label 1 New Label Demo test",
      icon: "i-home"
    }, {
      tabIndex: 1,
      title: "Label 2",
      icon: "i-pipe"
    }, {
      tabIndex: 2,
      title: "Label 3",
      icon: "i-info-fill"
    }, {
      tabIndex: 3,
      title: "Label 4",
      icon: "i-app"
    }, {
      tabIndex: 4,
      title: "Label 5",
      icon: "i-download"
    }],
    disabled: false
  }
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,u,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    type dataString = "medium" | "small";
    type dataType = dataString[];
    const data = ["medium", "small"] as dataType;
    const crumbs = [{
      tabIndex: 0,
      title: "Label 1 New Label Demo test"
    }, {
      tabIndex: 1,
      title: "Label 2"
    }, {
      tabIndex: 2,
      title: "Label 3"
    }, {
      tabIndex: 3,
      title: "Label 4"
    }];
    return html\`<f-div padding="small" gap="x-large">
            \${data.map(item => html\` <f-div direction="column" gap="large"
                        ><f-text>size=\${item}</f-text
                        ><f-breadcrumb .crumbs=\${crumbs} .size=\${item}></f-breadcrumb
                    ></f-div>\`)}
        </f-div>\`;
  },
  name: "size"
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,p,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const data = [[{
      tabIndex: 0,
      title: "Label 1 New Label Demo test"
    }, {
      tabIndex: 1,
      title: "Label 2"
    }, {
      tabIndex: 2,
      title: "Label 3"
    }, {
      tabIndex: 3,
      title: "Label 4"
    }], [{
      tabIndex: 0,
      title: "Label 1"
    }, {
      tabIndex: 1,
      title: "Label 2"
    }, {
      tabIndex: 2,
      title: "Label 3"
    }, {
      tabIndex: 3,
      title: "Label 4"
    }, {
      tabIndex: 4,
      title: "Label 5"
    }]];
    return html\`<f-div padding="small" gap="x-large">
            \${data.map(item => html\` <f-div direction="column" gap="large"
                        ><f-text>\${item.length > 4 ? "Crumbs length > 4" : "Crumbs length < 4"}</f-text
                        ><f-breadcrumb .crumbs=\${item}></f-breadcrumb
                    ></f-div>\`)}
        </f-div>\`;
  },
  name: "crumbs"
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var I,L,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const data = [[{
      tabIndex: 0,
      title: "Home"
    }, {
      tabIndex: 1,
      title: "Label 2"
    }, {
      tabIndex: 2,
      title: "Label 3"
    }, {
      tabIndex: 3,
      title: "Label 4"
    }, {
      tabIndex: 4,
      title: "Current"
    }], [{
      tabIndex: 0,
      title: "Home",
      icon: "i-home"
    }, {
      tabIndex: 1,
      title: "Label 2",
      icon: "i-app"
    }, {
      tabIndex: 2,
      title: "Label 3",
      icon: "i-launch"
    }, {
      tabIndex: 3,
      title: "info",
      icon: "i-info-fill"
    }, {
      tabIndex: 4,
      title: "Current",
      icon: "i-user-double"
    }]];
    return html\`<f-div padding="small" gap="x-large">
            \${data.map((item, index) => html\` <f-div direction="column" gap="large"
                        ><f-text>\${index === 0 ? "variant='text'" : "variant='icon'"}</f-text
                        ><f-breadcrumb .crumbs=\${item} .variant=\${index === 0 ? "text" : "icon"}></f-breadcrumb
                    ></f-div>\`)}
        </f-div>\`;
  },
  name: "variant"
}`,...(v=(L=d.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var $,h,z;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const crumbs = [{
      tabIndex: 0,
      title: "Label 1 New Label Demo test"
    }, {
      tabIndex: 1,
      title: "Label 2"
    }, {
      tabIndex: 2,
      title: "Label 3"
    }, {
      tabIndex: 3,
      title: "Label 4"
    }];
    return html\` <f-div padding="small" gap="x-large">
            <f-div direction="column" gap="large"
                ><f-text>disabled</f-text><f-breadcrumb .crumbs=\${crumbs} ?disabled=\${true}></f-breadcrumb
            ></f-div>
        </f-div>\`;
  },
  name: "Flags"
}`,...(z=(h=b.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const y=["Playground","Size","Crumbs","Variant","Flags"],w=Object.freeze(Object.defineProperty({__proto__:null,Crumbs:l,Flags:b,Playground:i,Size:r,Variant:d,__namedExportsOrder:y,default:C},Symbol.toStringTag,{value:"Module"}));export{l as C,w as F,i as P,r as S,d as V,b as a};
