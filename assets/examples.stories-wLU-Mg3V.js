import{x as a}from"./iframe-D6om2Bsl.js";const o={title:"@nonfx/flow-lineage/Examples/Organizational Structure ",parameters:{controls:{hideNoControlsWarning:!0}}},e={render:n=>a`<f-lineage
            .direction=${n.direction}
            .nodes=${n.nodes}
            .links=${n.links}
            .padding=${n.padding}
            .gap=${n.gap}
            .node-size=${n["node-size"]}
            .children-node-size=${n["children-node-size"]}
            .max-children=${n["max-children"]}
            .node-template=${n["node-template"]}
            .children-node-template=${n["children-node-template"]}
        ></f-lineage>`,name:"Playground",height:"500px",argTypes:{direction:{control:"select",options:["horizontal","vertical"]},fData:{control:"object"},padding:{control:"number"},gap:{control:"number"},"node-size":{control:"object"},"children-node-size":{control:"object"},"max-children":{control:"number"}},args:{direction:"horizontal",nodes:{root:{fData:{fullName:"Carey McLaughlin",designation:"Vice President",mobile:"+1 123 456 000",email:"abc@xyz.com"}},hr:{fData:{fullName:"Angelena Doyle",designation:"Director Human Resources",mobile:"+1 123 456 000",email:"abc@xyz.com"}},am:{fData:{fullName:"Max Oliver",designation:"Director Accounting",mobile:"+1 123 456 000",email:"abc@xyz.com"}},mo:{fData:{fullName:"Aubree Matthews",designation:"Director Marketing",mobile:"+1 123 456 000",email:"abc@xyz.com"}},"mo-tl1":{fData:{fullName:"Anastasia Day",designation:"Team Lead",mobile:"+1 123 456 000",email:"abc@xyz.com"},fChildren:{"mo-tl1-1":{fData:{fullName:"Whitney Lambert"}},"mo-tl1-2":{fData:{fullName:"Jennifer Pearson"}},"mo-tl1-3":{fData:{fullName:"Lark Motley"}}},fHideChildren:!1},"mo-tl2":{fData:{fullName:"Osmond Wise",designation:"Team Lead",mobile:"+1 123 456 000",email:"abc@xyz.com"},fChildren:{"mo-tl2-1":{fData:{fullName:"Adele Green"}},"mo-tl2-2":{fData:{fullName:"Lawrence Potter"}},"mo-tl2-3":{fData:{fullName:"Darlene Holden"}}},fHideChildren:!1},de:{fData:{fullName:"Ben Stokes",designation:"Director Engineering",mobile:"+1 123 456 000",email:"abc@xyz.com"}},tl1:{fData:{fullName:"Aaron Verler",designation:"Team Lead",mobile:"+1 123 456 000",email:"abc@xyz.com"},fChildren:{"tl1-1":{fData:{fullName:"Max Furry"}},"tl1-2":{fData:{fullName:"Steve Roger"}},"tl1-3":{fData:{fullName:"Tony Stark"}}},fHideChildren:!1},tl2:{fData:{fullName:"Bruce Banner",designation:"Team Lead",mobile:"+1 123 456 000",email:"abc@xyz.com"},fChildren:{"tl2-1":{fData:{fullName:"Celeste Waters"}},"tl2-2":{fData:{fullName:"Jeffrey Bell"}},"tl2-3":{fData:{fullName:"Mona Hancock"}}},fHideChildren:!1}},links:[{from:"root",to:"hr"},{from:"root",to:"am"},{from:"root",to:"mo"},{from:"root",to:"de"},{from:"mo",to:"mo-tl1"},{from:"mo",to:"mo-tl2"},{from:"de",to:"tl1"},{from:"de",to:"tl2"}],padding:16,gap:100,"node-size":{width:250,height:115},"children-node-size":{width:250,height:32},"max-children":8,"node-template":function(n){return a`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="medium"
                align="top-left"
                variant="curved"
                gap="x-small"
                direction="column"
                ${n.fChildren&&!n.fHideChildren?'border="small solid default bottom"':""}
            >
                <f-div height="hug-content">
                    <f-text variant="heading" size="medium">${n.fData.designation}</f-text>
                    ${n.childrenToggle}
                </f-div>
                <f-div height="hug-content" gap="small">
                    <f-pictogram source="i-user" state="success" size="large" variant="circle"></f-pictogram>
                    <f-div direction="column" height="hug-content" align="middle-left">
                        <f-text ellipsis>${n.fData.fullName}</f-text>
                        <f-div padding="x-small none none none">
                            <f-text size="small" ellipsis>Mobile No : ${n.fData.mobile}</f-text>
                        </f-div>
                        <f-div padding="x-small none none none">
                            <f-text size="small" ellipsis>Email : ${n.fData.email}</f-text>
                        </f-div>
                    </f-div>
                </f-div>
            </f-div>`},"children-node-template":function(n){return a`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="none medium"
                align="middle-left"
                gap="small"
                border="small solid default bottom"
            >
                <f-icon source="i-user" size="small"></f-icon>
                <f-text variant="code" size="medium" ellipsis>${n.fData.fullName}</f-text>
            </f-div>`}}};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  //  const fData = lineageDataGenerator();
  render: args => {
    return html\`<f-lineage
            .direction=\${args.direction}
            .nodes=\${args.nodes}
            .links=\${args.links}
            .padding=\${args.padding}
            .gap=\${args.gap}
            .node-size=\${args["node-size"]}
            .children-node-size=\${args["children-node-size"]}
            .max-children=\${args["max-children"]}
            .node-template=\${args["node-template"]}
            .children-node-template=\${args["children-node-template"]}
        ></f-lineage>\`;
  },
  name: "Playground",
  height: "500px",
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"]
    },
    fData: {
      control: "object"
    },
    padding: {
      control: "number"
    },
    gap: {
      control: "number"
    },
    ["node-size"]: {
      control: "object"
    },
    ["children-node-size"]: {
      control: "object"
    },
    ["max-children"]: {
      control: "number"
    }
  },
  args: {
    direction: "horizontal",
    nodes: {
      root: {
        fData: {
          fullName: "Carey McLaughlin",
          designation: "Vice President",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        }
      },
      hr: {
        fData: {
          fullName: "Angelena Doyle",
          designation: "Director Human Resources",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        }
      },
      am: {
        fData: {
          fullName: "Max Oliver",
          designation: "Director Accounting",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        }
      },
      mo: {
        fData: {
          fullName: "Aubree Matthews",
          designation: "Director Marketing",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        }
      },
      "mo-tl1": {
        fData: {
          fullName: "Anastasia Day",
          designation: "Team Lead",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        },
        fChildren: {
          ["mo-tl1-1"]: {
            fData: {
              fullName: "Whitney Lambert"
            }
          },
          ["mo-tl1-2"]: {
            fData: {
              fullName: "Jennifer Pearson"
            }
          },
          ["mo-tl1-3"]: {
            fData: {
              fullName: "Lark Motley"
            }
          }
        },
        fHideChildren: false
      },
      "mo-tl2": {
        fData: {
          fullName: "Osmond Wise",
          designation: "Team Lead",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        },
        fChildren: {
          ["mo-tl2-1"]: {
            fData: {
              fullName: "Adele Green"
            }
          },
          ["mo-tl2-2"]: {
            fData: {
              fullName: "Lawrence Potter"
            }
          },
          ["mo-tl2-3"]: {
            fData: {
              fullName: "Darlene Holden"
            }
          }
        },
        fHideChildren: false
      },
      de: {
        fData: {
          fullName: "Ben Stokes",
          designation: "Director Engineering",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        }
      },
      tl1: {
        fData: {
          fullName: "Aaron Verler",
          designation: "Team Lead",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        },
        fChildren: {
          ["tl1-1"]: {
            fData: {
              fullName: "Max Furry"
            }
          },
          ["tl1-2"]: {
            fData: {
              fullName: "Steve Roger"
            }
          },
          ["tl1-3"]: {
            fData: {
              fullName: "Tony Stark"
            }
          }
        },
        fHideChildren: false
      },
      tl2: {
        fData: {
          fullName: "Bruce Banner",
          designation: "Team Lead",
          mobile: "+1 123 456 000",
          email: "abc@xyz.com"
        },
        fChildren: {
          ["tl2-1"]: {
            fData: {
              fullName: "Celeste Waters"
            }
          },
          ["tl2-2"]: {
            fData: {
              fullName: "Jeffrey Bell"
            }
          },
          ["tl2-3"]: {
            fData: {
              fullName: "Mona Hancock"
            }
          }
        },
        fHideChildren: false
      }
    },
    links: [{
      from: "root",
      to: "hr"
    }, {
      from: "root",
      to: "am"
    }, {
      from: "root",
      to: "mo"
    }, {
      from: "root",
      to: "de"
    }, {
      from: "mo",
      to: "mo-tl1"
    }, {
      from: "mo",
      to: "mo-tl2"
    }, {
      from: "de",
      to: "tl1"
    }, {
      from: "de",
      to: "tl2"
    }],
    padding: 16,
    gap: 100,
    ["node-size"]: {
      width: 250,
      height: 115
    },
    ["children-node-size"]: {
      width: 250,
      height: 32
    },
    ["max-children"]: 8,
    ["node-template"]: function (node) {
      return html\`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="medium"
                align="top-left"
                variant="curved"
                gap="x-small"
                direction="column"
                \${node.fChildren && !node.fHideChildren ? 'border="small solid default bottom"' : ""}
            >
                <f-div height="hug-content">
                    <f-text variant="heading" size="medium">\${node.fData.designation}</f-text>
                    \${node.childrenToggle}
                </f-div>
                <f-div height="hug-content" gap="small">
                    <f-pictogram source="i-user" state="success" size="large" variant="circle"></f-pictogram>
                    <f-div direction="column" height="hug-content" align="middle-left">
                        <f-text ellipsis>\${node.fData.fullName}</f-text>
                        <f-div padding="x-small none none none">
                            <f-text size="small" ellipsis>Mobile No : \${node.fData.mobile}</f-text>
                        </f-div>
                        <f-div padding="x-small none none none">
                            <f-text size="small" ellipsis>Email : \${node.fData.email}</f-text>
                        </f-div>
                    </f-div>
                </f-div>
            </f-div>\`;
    },
    ["children-node-template"]: function (node) {
      return html\`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="none medium"
                align="middle-left"
                gap="small"
                border="small solid default bottom"
            >
                <f-icon source="i-user" size="small"></f-icon>
                <f-text variant="code" size="medium" ellipsis>\${node.fData.fullName}</f-text>
            </f-div>\`;
    }
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const r=["Playground"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:r,default:o},Symbol.toStringTag,{value:"Module"}));export{m as E,e as P};
