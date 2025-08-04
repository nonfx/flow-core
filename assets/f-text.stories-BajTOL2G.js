import{x as i}from"./iframe-D6om2Bsl.js";const I={title:"@nonfx/flow-core/f-text",parameters:{controls:{hideNoControlsWarning:!0}}},t={render:e=>{const N=D=>{console.log("story edited",D.detail.value)};return i`<f-div direction="column" gap="large">
            <f-text
                .variant=${e.variant}
                .size=${e.size}
                .state=${e.state}
                .align=${e.align}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .ellipsis=${e.ellipsis}
                .highlight=${e.highlight}
                ?inline=${e.inline}
                >This is ${e.variant} with ${e.size} and "${e.state}" state. Alignment is
                ${e.align}
            </f-text>
            <f-div>
                <f-text
                    .variant=${e.variant}
                    .size=${e.size}
                    .state=${e.state}
                    .align=${e.align}
                    .loading=${e.loading}
                    .disabled=${e.disabled}
                    .ellipsis=${e.ellipsis}
                    .highlight=${e.highlight}
                    ?inline=${e.inline}
                    ?editable=${e.editable}
                    @input=${N}
                    >${e.text2}
                </f-text>
            </f-div>
            <f-text
                .variant=${e.variant}
                .size=${e.size}
                .state=${e.state}
                .align=${e.align}
                .loading=${e.loading}
                .disabled=${e.disabled}
                .ellipsis=${e.ellipsis}
                .highlight=${e.highlight}
                ?inline=${e.inline}
                >${e.text}</f-text
            >
        </f-div> `},name:"Playground",argTypes:{variant:{control:"radio",options:["para","heading","code"]},size:{control:"select",options:["x-large","large","medium","small","x-small"]},state:{control:"select",options:["default","secondary","subtle","primary","success","warning","danger","inherit","custom, #0000FF","custom, gray","custom, #fff","custom, white","custom, black","custom, #607B9F"]},align:{control:"radio",options:["left","right","center"]},highlight:{control:"text"},inline:{control:"boolean"},loading:{control:{type:"boolean"},if:{arg:"disabled",eq:!1}},disabled:{control:{type:"boolean"},if:{arg:"loading",eq:!1}},ellipsis:{control:{type:"boolean"},if:{arg:"loading",eq:!1}},editable:{control:{type:"boolean"}},text:{control:"text"}},args:{variant:"para",size:"medium",state:"default",align:"left",inline:!1,loading:!1,disabled:!1,ellipsis:!1,editable:!1,highlight:void 0,text:void 0,text2:"This is text demo for editable-text section"}},n={render:()=>i`<f-div gap="x-large" padding="x-large" align="middle-center">
            <f-text variant="heading">heading</f-text>
            <f-text variant="para">para</f-text>
            <f-text variant="code">code</f-text>
        </f-div>`,name:"variant"},a={render:()=>i`<f-div gap="medium" padding="x-large" direction="column">
            <f-text variant="para" size="large" weight="medium">size of variant="heading"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
            <f-text variant="para" size="large" weight="medium">size of variant="para"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
            <f-text variant="para" size="large" weight="medium">size of variant="code"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
        </f-div>`,name:"size"},d={render:()=>i`<f-div gap="medium" padding="x-large" direction="column">
            <f-text variant="para" size="large" weight="medium">weight of variant="heading"</f-text>
            <f-divider></f-divider>
            ${["regular","medium","bold"].map(e=>i` <f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="x-large" .weight=${e}>x-large ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="large" .weight=${e}>large ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="medium" .weight=${e}>medium ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="small" .weight=${e}>small ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="x-small" .weight=${e}>x-small ${e}</f-text>
                    </f-div>
                </f-div>`)}

            <f-text variant="para" size="large" weight="medium">weight of variant="para"</f-text>
            <f-divider></f-divider>
            ${["regular","medium","bold"].map(e=>i` <f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="x-large" .weight=${e}>x-large ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="large" .weight=${e}>large</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="medium" .weight=${e}>medium</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="small" .weight=${e}>small</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="x-small" .weight=${e}>x-small</f-text>
                    </f-div>
                </f-div>`)}
            <f-text variant="para" size="large" weight="medium">weight of variant="code"</f-text>
            <f-divider></f-divider>
            ${["regular","medium","bold"].map(e=>i`<f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="x-large" .weight=${e}>x-large ${e}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="large" .weight=${e}>large</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="medium" .weight=${e}>medium</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="small" .weight=${e}>small</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="x-small" .weight=${e}>x-small</f-text>
                    </f-div>
                </f-div>`)}
        </f-div>`,name:"weight"},r={render:()=>i`<f-div gap="medium" padding="x-large" direction="column" state="primary">
            <f-text variant="para" size="large" weight="medium" state="default"
                >This is a default state. This is a default state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="secondary"
                >This is a secondary state. This is a secondary state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="subtle"
                >This is a subtle state. This is a subtle state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="primary"
                >This is a primary state. This is a primary state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="success"
                >This is a success state. This is a success state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="danger"
                >This is a danger state. This is a danger state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="warning"
                >This is a warning state. This is a warning state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="inherit"
                >This is a inherit state. Inherit color from parent f-div.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="custom,pink"
                >This is a "custom, pink" state. This is a "custom, pink" state.</f-text
            >
        </f-div>`,name:"state"},g={render:()=>i`
        <br />
        <f-text variant="para" size="large" weight="medium" align="left">This is left aligned.</f-text
        ><br />
        <f-text variant="para" size="large" weight="medium" align="center"
            >This is center aligned.</f-text
        ><br />
        <f-text variant="para" size="large" weight="medium" align="right">This is right aligned.</f-text
        ><br />
    `,name:"align"},l={render:()=>i`
        <br />
        <f-text variant="para" size="large" weight="medium" align="left" highlight="left"
            >This is left aligned.</f-text
        ><br />
    `,name:"highlight"},s={render:()=>i`<f-div gap="large" padding="x-large" direction="column">
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-text variant="para" weight="regular" ?inline=${!1}>Normal Text</f-text>
                <f-text variant="para" weight="regular" ?inline=${!0}>Inline Text</f-text>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular">Loading</f-text>
                </f-div>
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular" loading=${!0}>Loading</f-text>
                </f-div>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular">Not Disabled</f-text>
                </f-div>
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular" disabled=${!0}>Disabled</f-text>
                </f-div>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="300px" padding="none">
                    <f-text variant="para" weight="regular"
                        >We can see the ellipis happening here when ellipsis="true"</f-text
                    >
                </f-div>
                <f-div width="200px" padding="none">
                    <f-text variant="para" weight="regular" ellipsis=${!0}
                        >We can see the ellipis happening here when ellipsis="true"</f-text
                    >
                </f-div>
            </f-div>
        </f-div>`,name:"Flags"};var f,h,o;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleEdit = (e: CustomEvent) => {
      console.log("story edited", e.detail.value);
    };
    return html\`<f-div direction="column" gap="large">
            <f-text
                .variant=\${args.variant}
                .size=\${args.size}
                .state=\${args.state}
                .align=\${args.align}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .ellipsis=\${args.ellipsis}
                .highlight=\${args.highlight}
                ?inline=\${args.inline}
                >This is \${args.variant} with \${args.size} and "\${args.state}" state. Alignment is
                \${args.align}
            </f-text>
            <f-div>
                <f-text
                    .variant=\${args.variant}
                    .size=\${args.size}
                    .state=\${args.state}
                    .align=\${args.align}
                    .loading=\${args.loading}
                    .disabled=\${args.disabled}
                    .ellipsis=\${args.ellipsis}
                    .highlight=\${args.highlight}
                    ?inline=\${args.inline}
                    ?editable=\${args.editable}
                    @input=\${handleEdit}
                    >\${args.text2}
                </f-text>
            </f-div>
            <f-text
                .variant=\${args.variant}
                .size=\${args.size}
                .state=\${args.state}
                .align=\${args.align}
                .loading=\${args.loading}
                .disabled=\${args.disabled}
                .ellipsis=\${args.ellipsis}
                .highlight=\${args.highlight}
                ?inline=\${args.inline}
                >\${args.text}</f-text
            >
        </f-div> \`;
  },
  name: "Playground",
  argTypes: {
    variant: {
      control: "radio",
      options: ["para", "heading", "code"]
    },
    size: {
      control: "select",
      options: ["x-large", "large", "medium", "small", "x-small"]
    },
    state: {
      control: "select",
      options: ["default", "secondary", "subtle", "primary", "success", "warning", "danger", "inherit", "custom, #0000FF", "custom, gray", "custom, #fff", "custom, white", "custom, black", "custom, #607B9F"]
    },
    align: {
      control: "radio",
      options: ["left", "right", "center"]
    },
    highlight: {
      control: "text"
    },
    inline: {
      control: "boolean"
    },
    loading: {
      control: {
        type: "boolean"
      },
      if: {
        arg: "disabled",
        eq: false
      }
    },
    disabled: {
      control: {
        type: "boolean"
      },
      if: {
        arg: "loading",
        eq: false
      }
    },
    ellipsis: {
      control: {
        type: "boolean"
      },
      if: {
        arg: "loading",
        eq: false
      }
    },
    editable: {
      control: {
        type: "boolean"
      }
    },
    text: {
      control: "text"
    }
  },
  args: {
    variant: "para",
    size: "medium",
    state: "default",
    align: "left",
    inline: false,
    loading: false,
    disabled: false,
    ellipsis: false,
    editable: false,
    highlight: undefined,
    text: undefined,
    text2: \`This is text demo for editable-text section\`
  }
}`,...(o=(h=t.parameters)==null?void 0:h.docs)==null?void 0:o.source}}};var m,v,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="x-large" padding="x-large" align="middle-center">
            <f-text variant="heading">heading</f-text>
            <f-text variant="para">para</f-text>
            <f-text variant="code">code</f-text>
        </f-div>\`,
  name: "variant"
}`,...(c=(v=n.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};var x,u,p;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="medium" padding="x-large" direction="column">
            <f-text variant="para" size="large" weight="medium">size of variant="heading"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="heading" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
            <f-text variant="para" size="large" weight="medium">size of variant="para"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="para" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
            <f-text variant="para" size="large" weight="medium">size of variant="code"</f-text>
            <f-divider></f-divider>
            <f-div gap="medium" padding="medium" align="middle-center">
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="x-large" weight="medium">x-large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="large" weight="medium">large</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="medium" weight="medium">medium</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="small" weight="medium">small</f-text>
                </f-div>
                <f-div height="hug-content" padding="none" align="middle-center">
                    <f-text variant="code" size="x-small" weight="medium">x-small</f-text>
                </f-div>
            </f-div>
        </f-div>\`,
  name: "size"
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var w,$,z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="medium" padding="x-large" direction="column">
            <f-text variant="para" size="large" weight="medium">weight of variant="heading"</f-text>
            <f-divider></f-divider>
            \${["regular", "medium", "bold"].map(weight => {
    return html\` <f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="x-large" .weight=\${weight}>x-large \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="large" .weight=\${weight}>large \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="medium" .weight=\${weight}>medium \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="small" .weight=\${weight}>small \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="heading" size="x-small" .weight=\${weight}>x-small \${weight}</f-text>
                    </f-div>
                </f-div>\`;
  })}

            <f-text variant="para" size="large" weight="medium">weight of variant="para"</f-text>
            <f-divider></f-divider>
            \${["regular", "medium", "bold"].map(weight => {
    return html\` <f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="x-large" .weight=\${weight}>x-large \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="large" .weight=\${weight}>large</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="medium" .weight=\${weight}>medium</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="small" .weight=\${weight}>small</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="para" size="x-small" .weight=\${weight}>x-small</f-text>
                    </f-div>
                </f-div>\`;
  })}
            <f-text variant="para" size="large" weight="medium">weight of variant="code"</f-text>
            <f-divider></f-divider>
            \${["regular", "medium", "bold"].map(weight => {
    return html\`<f-div gap="medium" padding="medium" align="middle-center">
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="x-large" .weight=\${weight}>x-large \${weight}</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="large" .weight=\${weight}>large</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="medium" .weight=\${weight}>medium</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="small" .weight=\${weight}>small</f-text>
                    </f-div>
                    <f-div height="hug-content" padding="none" align="middle-center">
                        <f-text variant="code" size="x-small" .weight=\${weight}>x-small</f-text>
                    </f-div>
                </f-div>\`;
  })}
        </f-div>\`,
  name: "weight"
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var b,T,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="medium" padding="x-large" direction="column" state="primary">
            <f-text variant="para" size="large" weight="medium" state="default"
                >This is a default state. This is a default state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="secondary"
                >This is a secondary state. This is a secondary state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="subtle"
                >This is a subtle state. This is a subtle state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="primary"
                >This is a primary state. This is a primary state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="success"
                >This is a success state. This is a success state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="danger"
                >This is a danger state. This is a danger state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="warning"
                >This is a warning state. This is a warning state.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="inherit"
                >This is a inherit state. Inherit color from parent f-div.</f-text
            >
            <f-text variant="para" size="large" weight="medium" state="custom,pink"
                >This is a "custom, pink" state. This is a "custom, pink" state.</f-text
            >
        </f-div>\`,
  name: "state"
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,F,k;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
        <br />
        <f-text variant="para" size="large" weight="medium" align="left">This is left aligned.</f-text
        ><br />
        <f-text variant="para" size="large" weight="medium" align="center"
            >This is center aligned.</f-text
        ><br />
        <f-text variant="para" size="large" weight="medium" align="right">This is right aligned.</f-text
        ><br />
    \`,
  name: "align"
}`,...(k=(F=g.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => html\`
        <br />
        <f-text variant="para" size="large" weight="medium" align="left" highlight="left"
            >This is left aligned.</f-text
        ><br />
    \`,
  name: "highlight"
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,A,E;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="large" padding="x-large" direction="column">
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-text variant="para" weight="regular" ?inline=\${false}>Normal Text</f-text>
                <f-text variant="para" weight="regular" ?inline=\${true}>Inline Text</f-text>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular">Loading</f-text>
                </f-div>
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular" loading=\${true}>Loading</f-text>
                </f-div>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular">Not Disabled</f-text>
                </f-div>
                <f-div width="hug-content" padding="none">
                    <f-text variant="para" weight="regular" disabled=\${true}>Disabled</f-text>
                </f-div>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden" height="hug-content">
                <f-div width="300px" padding="none">
                    <f-text variant="para" weight="regular"
                        >We can see the ellipis happening here when ellipsis="true"</f-text
                    >
                </f-div>
                <f-div width="200px" padding="none">
                    <f-text variant="para" weight="regular" ellipsis=\${true}
                        >We can see the ellipis happening here when ellipsis="true"</f-text
                    >
                </f-div>
            </f-div>
        </f-div>\`,
  name: "Flags"
}`,...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const L=["Playground","Variant","Size","Weight","State","Align","Highlight","Flags"],O=Object.freeze(Object.defineProperty({__proto__:null,Align:g,Flags:s,Highlight:l,Playground:t,Size:a,State:r,Variant:n,Weight:d,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{g as A,O as F,l as H,t as P,a as S,n as V,r as a,s as b};
