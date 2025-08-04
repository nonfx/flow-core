import{x as e}from"./iframe-D6om2Bsl.js";const{useState:w}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"@nonfx/flow-core/f-tooltip",parameters:{controls:{hideNoControlsWarning:!0}}},i={render:t=>e`<f-div padding="large" height="200px" align="middle-center" gap="auto">
            <f-icon source="i-question-filled" size="medium" .tooltip=${t.tooltip} clickable></f-icon>
            <f-button label="Submit" .tooltip=${t.tooltip}></f-button>
            <f-tag label="Environment" .tooltip=${t.tooltip}></f-tag>
            <f-icon-button icon="i-plus" .tooltip=${t.tooltip}></f-icon-button>
            <f-counter size="large" label="88" .tooltip=${t.tooltip}></f-counter>
            <f-pictogram size="large" source="i-app" .tooltip=${t.tooltip}></f-pictogram>
        </f-div>`,name:"Playground - Directive Tooltip",argTypes:{tooltip:{content:"text"}},args:{tooltip:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu euismod eros. Maecenas varius facilisis libero sit amet tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sit amet hendrerit ante. Integer nec neque massa. Donec elit nulla, volutpat a auctor at, ullamcorper eleifend velit. Etiam sagittis, elit et maximus venenatis, sapien nisi auctor odio, non faucibus sapien erat sit amet tellus. Suspendisse fermentum porttitor lorem in laoreet. Proin vehicula iaculis eros sed pretium. Aenean in turpis massa.",placement:"bottom",closable:!0,maxWidth:"300px"}}},o={render:t=>e`${typeof t.tooltip=="string"&&t.tooltip.startsWith("#")?e`<f-div padding="large" height="200px" align="middle-center" gap="large">
                        <f-icon-button icon="i-plus" .tooltip=${t.tooltip}></f-icon-button>
                        <f-button label="Submit" .tooltip=${t.tooltip}></f-button>
                    </f-div>
                    <f-tooltip .placement=${t.placement} id="tooltipTarget" ?closable=${t.closable}>
                        <f-div direction="column" width="hug-content">
                            <f-text variant="para" size="small"> Hello Everyone </f-text>
                            <f-text variant="para" size="small" state="primary"> Learn More </f-text>
                        </f-div></f-tooltip
                    >`:e`<f-div padding="large" height="200px" align="middle-center" gap="large">
                    <f-icon-button icon="i-plus" .tooltip=${t.tooltip}></f-icon-button>
                    <f-button label="Submit" .tooltip=${t.tooltip}></f-button>
                </f-div>`}`,name:"Playground - Rich Tooltip Component",argTypes:{placement:{control:"select",options:["auto","top-start","top","top-end","bottom-start","bottom","bottom-end","right-start","right","right-end","left-start","left","left-end"]},tooltip:{control:"text"},closable:{control:"boolean"}},args:{tooltip:"#tooltipTarget",placement:"auto",closable:!1}},n={render:()=>e`
            <f-div gap="large" padding="x-large" direction="column">
                <f-div height="hug-content" padding="none">
                    <f-text variant="para" size="large" weight="medium">id="tooltip-target"</f-text>
                </f-div>
                <f-div padding="none" direction="row" gap="x-large" overflow="hidden">
                    <f-icon-button icon="i-plus" tooltip="#tooltip-target"></f-icon-button>
                </f-div>
                <f-tooltip id="tooltip-target">
                    <f-div width="350px" gap="medium" direction="column" overflow="visible">
                        <f-text size="small" inline data-qa-azure-cred-field-clientId-tooltip
                            >1. Go to the
                            <f-text size="small" weight="bold" inline>
                                Azure Portal Home page > All Services > Azure Active Directory > App Registrations.
                            </f-text>
                        </f-text>
                        <f-text size="small"
                            >2. Select an existing application or register a new application (e.g.
                            CodePipes).</f-text
                        >
                        <f-text size="small"
                            >3. Copy the Application (client) ID of the newly registered application.</f-text
                        >
                        <f-text size="small">
                            <f-text size="small" inline weight="bold">Note: </f-text> Once you have registered an
                            Application, it is required to explicitly grant it permissions in a form of a Role
                            assignment to work with the current Azure subscription.
                        </f-text>
                    </f-div>
                </f-tooltip>
            </f-div>
        `,name:"id"},a={render:()=>{const[t,P]=w([[{title:"Bottom Button End",placement:"bottom-end"},{title:"Bottom",placement:"bottom"},{title:"Bottom Start",placement:"bottom-start"}],[{title:"Right Start",placement:"right-start"},{title:"Left Start",placement:"left-start"}],[{title:"Right",placement:"right"},{title:"Auto",placement:"auto"},{title:"Left",placement:"left"}],[{title:"Right End",placement:"right-end"},{title:"left End",placement:"left-end"}],[{title:"Top End",placement:"top-end"},{title:"Top",placement:"top"},{title:"Top Start",placement:"top-start"}]]);return e`
            <f-div height="hug-content" gap="large" direction="column">
                ${t.map(T=>e`
                        <f-div height="hug-content" gap="auto" direction="row">
                            ${T.map(r=>e`
                                    <f-tooltip placement=${r.placement} id=${r.placement}>
                                        <f-text variant="para" size="small" id="tooltip-text">
                                            This is a tooltip
                                        </f-text></f-tooltip
                                    >
                                    <f-button tooltip=${`#${r.placement}`} label=${r.title}> </f-button>
                                `)}
                        </f-div>
                    `)}
            </f-div>
        `},name:"placement",parameters:{docs:{inlineStories:!1,iframeHeight:350}}},l={render:()=>e`<f-div gap="large" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">closable="true"</f-text>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden">
                <f-button label="Closable Tooltip" tooltip="#tooltipTarget2"></f-button>
            </f-div>
            <f-tooltip id="tooltipTarget2" ?closable=${!0}
                ><f-div direction="column" width="hug-content">
                    <f-text variant="para" size="small"> This is a tooltip </f-text>
                    <f-text variant="para" size="small" state="primary"> Learn More </f-text>
                </f-div></f-tooltip
            >
        </f-div>`,name:"Flags"};var p,s,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: TooltipStoryArgs) => html\`<f-div padding="large" height="200px" align="middle-center" gap="auto">
            <f-icon source="i-question-filled" size="medium" .tooltip=\${args.tooltip} clickable></f-icon>
            <f-button label="Submit" .tooltip=\${args.tooltip}></f-button>
            <f-tag label="Environment" .tooltip=\${args.tooltip}></f-tag>
            <f-icon-button icon="i-plus" .tooltip=\${args.tooltip}></f-icon-button>
            <f-counter size="large" label="88" .tooltip=\${args.tooltip}></f-counter>
            <f-pictogram size="large" source="i-app" .tooltip=\${args.tooltip}></f-pictogram>
        </f-div>\`,
  name: "Playground - Directive Tooltip",
  argTypes: {
    tooltip: {
      content: "text"
    }
  },
  args: {
    tooltip: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu euismod eros. Maecenas varius facilisis libero sit amet tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sit amet hendrerit ante. Integer nec neque massa. Donec elit nulla, volutpat a auctor at, ullamcorper eleifend velit. Etiam sagittis, elit et maximus venenatis, sapien nisi auctor odio, non faucibus sapien erat sit amet tellus. Suspendisse fermentum porttitor lorem in laoreet. Proin vehicula iaculis eros sed pretium. Aenean in turpis massa.",
      placement: "bottom",
      closable: true,
      maxWidth: "300px"
    }
  }
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: TooltipStoryArgs) => html\`\${typeof args.tooltip === "string" && args.tooltip.startsWith("#") ? html\`<f-div padding="large" height="200px" align="middle-center" gap="large">
                        <f-icon-button icon="i-plus" .tooltip=\${args.tooltip}></f-icon-button>
                        <f-button label="Submit" .tooltip=\${args.tooltip}></f-button>
                    </f-div>
                    <f-tooltip .placement=\${args.placement} id="tooltipTarget" ?closable=\${args.closable}>
                        <f-div direction="column" width="hug-content">
                            <f-text variant="para" size="small"> Hello Everyone </f-text>
                            <f-text variant="para" size="small" state="primary"> Learn More </f-text>
                        </f-div></f-tooltip
                    >\` : html\`<f-div padding="large" height="200px" align="middle-center" gap="large">
                    <f-icon-button icon="i-plus" .tooltip=\${args.tooltip}></f-icon-button>
                    <f-button label="Submit" .tooltip=\${args.tooltip}></f-button>
                </f-div>\`}\`,
  name: "Playground - Rich Tooltip Component",
  argTypes: {
    placement: {
      control: "select",
      options: ["auto", "top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end", "right-start", "right", "right-end", "left-start", "left", "left-end"]
    },
    tooltip: {
      control: "text"
    },
    closable: {
      control: "boolean"
    }
  },
  args: {
    tooltip: "#tooltipTarget",
    placement: "auto",
    closable: false
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return html\`
            <f-div gap="large" padding="x-large" direction="column">
                <f-div height="hug-content" padding="none">
                    <f-text variant="para" size="large" weight="medium">id="tooltip-target"</f-text>
                </f-div>
                <f-div padding="none" direction="row" gap="x-large" overflow="hidden">
                    <f-icon-button icon="i-plus" tooltip="#tooltip-target"></f-icon-button>
                </f-div>
                <f-tooltip id="tooltip-target">
                    <f-div width="350px" gap="medium" direction="column" overflow="visible">
                        <f-text size="small" inline data-qa-azure-cred-field-clientId-tooltip
                            >1. Go to the
                            <f-text size="small" weight="bold" inline>
                                Azure Portal Home page > All Services > Azure Active Directory > App Registrations.
                            </f-text>
                        </f-text>
                        <f-text size="small"
                            >2. Select an existing application or register a new application (e.g.
                            CodePipes).</f-text
                        >
                        <f-text size="small"
                            >3. Copy the Application (client) ID of the newly registered application.</f-text
                        >
                        <f-text size="small">
                            <f-text size="small" inline weight="bold">Note: </f-text> Once you have registered an
                            Application, it is required to explicitly grant it permissions in a form of a Role
                            assignment to work with the current Azure subscription.
                        </f-text>
                    </f-div>
                </f-tooltip>
            </f-div>
        \`;
  },
  name: "id"
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [dummyPlacementArray, setDummyPlacementArray] = useState([[{
      title: "Bottom Button End",
      placement: "bottom-end"
    }, {
      title: "Bottom",
      placement: "bottom"
    }, {
      title: "Bottom Start",
      placement: "bottom-start"
    }], [{
      title: "Right Start",
      placement: "right-start"
    }, {
      title: "Left Start",
      placement: "left-start"
    }], [{
      title: "Right",
      placement: "right"
    }, {
      title: "Auto",
      placement: "auto"
    }, {
      title: "Left",
      placement: "left"
    }], [{
      title: "Right End",
      placement: "right-end"
    }, {
      title: "left End",
      placement: "left-end"
    }], [{
      title: "Top End",
      placement: "top-end"
    }, {
      title: "Top",
      placement: "top"
    }, {
      title: "Top Start",
      placement: "top-start"
    }]]);
    return html\`
            <f-div height="hug-content" gap="large" direction="column">
                \${dummyPlacementArray.map(item => {
      return html\`
                        <f-div height="hug-content" gap="auto" direction="row">
                            \${item.map(main => {
        return html\`
                                    <f-tooltip placement=\${main.placement} id=\${main.placement}>
                                        <f-text variant="para" size="small" id="tooltip-text">
                                            This is a tooltip
                                        </f-text></f-tooltip
                                    >
                                    <f-button tooltip=\${\`#\${main.placement}\`} label=\${main.title}> </f-button>
                                \`;
      })}
                        </f-div>
                    \`;
    })}
            </f-div>
        \`;
  },
  name: "placement",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 350
    }
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,$,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`<f-div gap="large" padding="x-large" direction="column">
            <f-div height="hug-content" padding="none">
                <f-text variant="para" size="large" weight="medium">closable="true"</f-text>
            </f-div>
            <f-div padding="none" direction="row" gap="x-large" overflow="hidden">
                <f-button label="Closable Tooltip" tooltip="#tooltipTarget2"></f-button>
            </f-div>
            <f-tooltip id="tooltipTarget2" ?closable=\${true}
                ><f-div direction="column" width="hug-content">
                    <f-text variant="para" size="small"> This is a tooltip </f-text>
                    <f-text variant="para" size="small" state="primary"> Learn More </f-text>
                </f-div></f-tooltip
            >
        </f-div>\`,
  name: "Flags"
}`,...(z=($=l.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const A=["PlaygroundDirectiveTooltip","PlaygroundRichTooltipComponent","Id","Placement","Flags"],R=Object.freeze(Object.defineProperty({__proto__:null,Flags:l,Id:n,Placement:a,PlaygroundDirectiveTooltip:i,PlaygroundRichTooltipComponent:o,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{R as F,n as I,i as P,o as a,a as b,l as c};
