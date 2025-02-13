import{x as e}from"./lit-html-57bab4fd.js";const P={title:"@nonfx/flow-core/f-countdown",parameters:{controls:{hideNoControlsWarning:!0}}},a={render:n=>e` <f-div padding="small">
            <f-countdown
                .state=${n.state}
                .size=${n.size}
                .category=${n.category}
                label-placement=${n["label-placement"]}
                .duration=${n.duration}
            ></f-countdown>
        </f-div>`,name:"Playground",argTypes:{duration:{control:"text"},size:{control:"radio",options:["large","medium","small","x-small"]},category:{control:"radio",options:["fill","outline"]},state:{control:"select",options:["default","primary","success","warning","danger","custom, pink","custom, blue"]},"label-placement":{control:"radio",options:["left","right","bottom","top","none"]}},args:{duration:"30",size:"medium",category:"fill",state:"default","label-placement":"left"}},o={render:()=>e`
        <f-div gap="large">
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>duration="30"</f-text>
                <f-countdown label-placement="top" duration="30"></f-countdown>
            </f-div>
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>duration="2:30"</f-text>
                <f-countdown label-placement="top" duration="2:30"></f-countdown>
            </f-div>
        </f-div>
    `,name:"duration"},i={render:()=>e`
        <f-div gap="large">
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>category="fill"</f-text>
                <f-countdown label-placement="top" category="fill" duration="20"></f-countdown>
            </f-div>
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>category="outline"</f-text>
                <f-countdown label-placement="top" category="outline" duration="20"></f-countdown>
            </f-div>
        </f-div>
    `,name:"category"},r={render:()=>e`
            <f-div gap="large">
                ${["large","medium","small","x-small"].map(t=>e` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>size="${t}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                .size=${t}
                            ></f-countdown>
                        </f-div>`)}
            </f-div>
        `,name:"size"},l={render:()=>e`
            <f-div gap="large">
                ${["default","primary","success","warning","danger","custom,pink"].map(t=>e` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>state="${t}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                .state=${t}
                            ></f-countdown>
                        </f-div>`)}
            </f-div>
        `,name:"state"},d={render:()=>e`
            <f-div gap="large">
                ${["left","top","right","bottom","none"].map(t=>e` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>label-placement="${t}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                state="success"
                                label-placement=${t}
                            ></f-countdown>
                        </f-div>`)}
            </f-div>
        `,name:"label-placement"};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\` <f-div padding="small">
            <f-countdown
                .state=\${args.state}
                .size=\${args.size}
                .category=\${args.category}
                label-placement=\${args["label-placement"]}
                .duration=\${args.duration}
            ></f-countdown>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    duration: {
      control: "text"
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small", "x-small"]
    },
    category: {
      control: "radio",
      options: ["fill", "outline"]
    },
    state: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "custom, pink", "custom, blue"]
    },
    ["label-placement"]: {
      control: "radio",
      options: ["left", "right", "bottom", "top", "none"]
    }
  },
  args: {
    duration: "30",
    size: "medium",
    category: "fill",
    state: "default",
    ["label-placement"]: "left"
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var u,f,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
        <f-div gap="large">
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>duration="30"</f-text>
                <f-countdown label-placement="top" duration="30"></f-countdown>
            </f-div>
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>duration="2:30"</f-text>
                <f-countdown label-placement="top" duration="2:30"></f-countdown>
            </f-div>
        </f-div>
    \`,
  name: "duration"
}`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,v,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
        <f-div gap="large">
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>category="fill"</f-text>
                <f-countdown label-placement="top" category="fill" duration="20"></f-countdown>
            </f-div>
            <f-div direction="column" gap="medium" align="middle-center">
                <f-text inline>category="outline"</f-text>
                <f-countdown label-placement="top" category="outline" duration="20"></f-countdown>
            </f-div>
        </f-div>
    \`,
  name: "category"
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,y,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["large", "medium", "small", "x-small"];
    return html\`
            <f-div gap="large">
                \${sizes.map(item => html\` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>size="\${item}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                .size=\${item}
                            ></f-countdown>
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,z,h;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const states = ["default", "primary", "success", "warning", "danger", "custom,pink"];
    return html\`
            <f-div gap="large">
                \${states.map(item => html\` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>state="\${item}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                .state=\${item}
                            ></f-countdown>
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(h=(z=l.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var S,_,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const states = ["left", "top", "right", "bottom", "none"];
    return html\`
            <f-div gap="large">
                \${states.map(item => html\` <f-div direction="column" gap="medium" align="middle-center">
                            <f-text inline>label-placement="\${item}"</f-text>
                            <f-countdown
                                label-placement="top"
                                category="fill"
                                duration="20"
                                state="success"
                                label-placement=\${item}
                            ></f-countdown>
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "label-placement"
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const k=["Playground","Duration","Category","Size","State","Label"],L=Object.freeze(Object.defineProperty({__proto__:null,Category:i,Duration:o,Label:d,Playground:a,Size:r,State:l,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{i as C,o as D,L as F,d as L,a as P,r as S,l as a};
