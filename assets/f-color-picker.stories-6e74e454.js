import{x as n}from"./lit-html-b1a28dc3.js";const T={title:"@nonfx/flow-core/f-color-picker",parameters:{controls:{hideNoControlsWarning:!0}}},t={render:e=>n`<f-color-picker
            aria-label="Color Picker"
            .variant=${e.variant}
            .state=${e.state}
            .size=${e.size}
            .value=${e.value}
            .disabled=${e.disabled}
            .readOnly=${e["read-only"]}
        ></f-color-picker>`,name:"Playground",parameters:{docs:{inlineStories:!1,iframeHeight:200}},argTypes:{variant:{control:"select",options:["curved","round","block"]},state:{control:"select",options:["default","success","warning","danger","primary"]},size:{control:"select",options:["medium","small"]},value:{control:"text"},disabled:{control:"boolean"},"read-only":{control:"boolean"}},args:{variant:"curved",state:"default",size:"medium",value:"#000",disabled:!1,"read-only":!1}},r={render:()=>n`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${["curved","round","block"].map(a=>n` <f-color-picker .variant=${a} size="medium">
                            <f-div slot="label" padding="none" gap="none">Label (variant="${a}")</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                            <f-text slot="subtitle" state="secondary" variant="para" size="small"
                                >Optional</f-text
                            >
                            <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                        </f-color-picker>`)}
            </f-div>
        `,name:"variant"},i={render:()=>n`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${["small","medium"].map(a=>n` <f-color-picker size=${a}>
                            <f-div slot="label" padding="none" gap="none">Label (size="${a}")</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                        </f-color-picker>`)}
            </f-div>
        `,name:"size"},s={render:()=>n`
            <f-div direction="column" gap="medium">
                ${[["default","primary","success"],["danger","warning"]].map(a=>n` <f-div padding="large" gap="medium">
                            ${a.map(l=>n`<f-color-picker size="medium" state=${l}>
                                        <f-div slot="label" padding="none" gap="none">Label (state="${l}")</f-div>
                                        <f-text slot="help" variant="para" size="small"
                                            >This is a Subtext (Helper Text)</f-text
                                        >
                                    </f-color-picker>`)}
                        </f-div>`)}
            </f-div>
        `,name:"state"},o={render:()=>{const e={0:"Disabled",1:"Readonly"};return n`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${[0,1].map(a=>n` <f-color-picker size="medium" ?disabled=${a===0} ?read-only=${a===1}>
                            <f-div slot="label" padding="none" gap="none">${e[a]}</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                        </f-color-picker>`)}
            </f-div>
        `},name:"Flags"};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    return html\`<f-color-picker
            aria-label="Color Picker"
            .variant=\${args.variant}
            .state=\${args.state}
            .size=\${args.size}
            .value=\${args.value}
            .disabled=\${args.disabled}
            .readOnly=\${args["read-only"]}
        ></f-color-picker>\`;
  },
  name: "Playground",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["curved", "round", "block"]
    },
    state: {
      control: "select",
      options: ["default", "success", "warning", "danger", "primary"]
    },
    size: {
      control: "select",
      options: ["medium", "small"]
    },
    value: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    ["read-only"]: {
      control: "boolean"
    }
  },
  args: {
    variant: "curved",
    state: "default",
    size: "medium",
    value: "#000",
    disabled: false,
    ["read-only"]: false
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,f,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const variants = ["curved", "round", "block"];
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${variants.map(item => html\` <f-color-picker .variant=\${item} size="medium">
                            <f-div slot="label" padding="none" gap="none">Label (variant="\${item}")</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                            <f-text slot="subtitle" state="secondary" variant="para" size="small"
                                >Optional</f-text
                            >
                            <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                        </f-color-picker>\`)}
            </f-div>
        \`;
  },
  name: "variant"
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,v,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["small", "medium"];
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${sizes.map(item => html\` <f-color-picker size=\${item}>
                            <f-div slot="label" padding="none" gap="none">Label (size="\${item}")</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                        </f-color-picker>\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,$,z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const states = [["default", "primary", "success"], ["danger", "warning"]];
    return html\`
            <f-div direction="column" gap="medium">
                \${states.map(item => html\` <f-div padding="large" gap="medium">
                            \${item.map(state => html\`<f-color-picker size="medium" state=\${state}>
                                        <f-div slot="label" padding="none" gap="none">Label (state="\${state}")</f-div>
                                        <f-text slot="help" variant="para" size="small"
                                            >This is a Subtext (Helper Text)</f-text
                                        >
                                    </f-color-picker>\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(z=($=s.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var h,k,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const flagNames: Record<number, string> = {
      0: "Disabled",
      1: "Readonly"
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${[0, 1].map(item => html\` <f-color-picker size="medium" ?disabled=\${item === 0} ?read-only=\${item === 1}>
                            <f-div slot="label" padding="none" gap="none">\${flagNames[item]}</f-div>
                            <f-text slot="help" variant="para" size="small"
                                >This is a Subtext (Helper Text)</f-text
                            >
                        </f-color-picker>\`)}
            </f-div>
        \`;
  },
  name: "Flags"
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const w=["Playground","Variant","Size","State","Flags"];export{o as Flags,t as Playground,i as Size,s as State,r as Variant,w as __namedExportsOrder,T as default};
