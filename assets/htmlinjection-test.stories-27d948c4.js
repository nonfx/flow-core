import{x as i}from"./lit-html-57bab4fd.js";import{n as g,e as b}from"./ref-8dc3593a.js";import"./directive-helpers-ef3e3cc7.js";import"./directive-12249aa5.js";const D={title:"@nonfx/flow-lineage/Debug/HTML-injection-test",parameters:{controls:{hideNoControlsWarning:!0}}},e={render:()=>{const f=[{from:"Tony",to:"Charlie"},{from:"Charlie",to:"Tony"},{from:"Max",to:"Charlie"},{from:"Calvin",to:"Hansen"},{from:"Brooke",to:"Tamara"},{from:"Calvin",to:"Bradley"},{from:"Tamara",to:"Bradley"},{from:"Charlie",to:"Roger"},{from:"Charlie",to:"Brooke"},{from:"Bradley",to:"John"},{from:"Bradley",to:"Tim"},{from:"Bradley",to:"Sam"},{from:"Bradley",to:"Rex"},{from:"Rex",to:"Bradley"},{from:"Roger",to:"Calvin"},{from:"Charlie",to:"Alicen"},{from:"Alicen",to:"Jennifer"},{from:"Jennifer",to:"John"},{from:"child1",to:"Tim"},{from:"Rex",to:"Pat"},{from:"A",to:"B"},{from:"Brooke",to:"child1"},{from:"mchild1",to:"child2"}],o={Calvin:{fData:{email:"abc@nonfx.com",mobile:'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" />',name:'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" />'}},Hansen:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Hansen"},fChildren:{hchild1:{}}},Alicen:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Alicen"}},Jennifer:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Jennifer"}},Brooke:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Brooke"}},Tamara:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Tamara"}},Bradley:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Bradley"}},Roger:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Roger"}},Max:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Max"},fHideChildren:!1,fChildren:{mchild1:{},mchild2:{},mchild3:{},mchild4:{},mchild5:{},mchild6:{},mchild7:{},mchild8:{},mchild9:{},mchild10:{},mchild11:{},mchild12:{},mchild13:{},mchild14:{},mchild15:{},mchild16:{}}},Tony:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Tony"}},Charlie:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Charlie"}},John:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"John"}},Tim:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Tim"}},Sam:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Sam"}},Rex:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Rex"}},Pat:{fData:{email:"abc@nonfx.com",mobile:"+91-12345 67890",name:"Pat"}}};let a=0;setTimeout(()=>{a+=1,o.Max.fData.name=`Max-${a}`},1e3),setTimeout(()=>{a+=1,o.Roger.fData={email:"abc@nonfx.com",mobile:"This is my mobile number",name:"Roger Updated"}},2e3);const c=function(n){var m,l;return i` <f-div style="position:absolute;top:-20px;z-index:1;" gap="x-small">
                    <f-tag label="Construction" state="primary" size="small"></f-tag>
                    <f-tag label="Cat" size="small" counter="35"></f-tag>
                </f-div>
                <f-div
                    state=${n.id==="Max"?"custom,#006ecc":"secondary"}
                    width="100%"
                    height="100%"
                    padding="none medium"
                    align="middle-left"
                    variant="curved"
                    gap="small"
                    ${n.fChildren&&!n.fHideChildren?'border="small solid default bottom"':""}
                >
                    <f-icon-button icon="i-table" state="neutral"></f-icon-button>
                    <f-div
                        .tooltip=${(m=n.fData)==null?void 0:m.mobile}
                        direction="column"
                        height="hug-content"
                        align="middle-left"
                    >
                        <f-text variant="code" size="large" ellipsis>${(l=n.fData)==null?void 0:l.name}</f-text>
                    </f-div>
                    ${n.childrenToggle}
                </f-div>`},s=function(n){return i`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="none medium"
                align="middle-left"
                gap="small"
                border="small solid default bottom"
            >
                <f-icon source="i-hashtag" size="small"></f-icon>
                <f-text variant="code" size="medium" ellipsis>${n.id}</f-text>
            </f-div>`},h=b();return i`<f-div ${g(h)} height="100%"
            ><f-div
                ><f-lineage
                    .direction=${"horizontal"}
                    .padding=${28}
                    .gap=${100}
                    .node-size=${{width:200,height:52}}
                    .children-node-size=${{width:200,height:32}}
                    .max-children=${8}
                    .node-template=${c}
                    .children-node-template=${s}
                    .links=${f}
                    .nodes=${o}
                    stagger-load="1"
                >
                </f-lineage> </f-div
        ></f-div>`},height:"500px"};var t,d,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const links = [{
      from: "Tony",
      to: "Charlie"
    }, {
      from: "Charlie",
      to: "Tony"
    }, {
      from: "Max",
      to: "Charlie"
    }, {
      from: "Calvin",
      to: "Hansen"
    }, {
      from: "Brooke",
      to: "Tamara"
    }, {
      from: "Calvin",
      to: "Bradley"
    }, {
      from: "Tamara",
      to: "Bradley"
    }, {
      from: "Charlie",
      to: "Roger"
    }, {
      from: "Charlie",
      to: "Brooke"
    }, {
      from: "Bradley",
      to: "John"
    }, {
      from: "Bradley",
      to: "Tim"
    }, {
      from: "Bradley",
      to: "Sam"
    }, {
      from: "Bradley",
      to: "Rex"
    }, {
      from: "Rex",
      to: "Bradley"
    }, {
      from: "Roger",
      to: "Calvin"
    }, {
      from: "Charlie",
      to: "Alicen"
    }, {
      from: "Alicen",
      to: "Jennifer"
    }, {
      from: "Jennifer",
      to: "John"
    }, {
      from: "child1",
      to: "Tim"
    }, {
      from: "Rex",
      to: "Pat"
    }, {
      from: "A",
      to: "B"
    }, {
      from: "Brooke",
      to: "child1"
    }, {
      from: "mchild1",
      to: "child2"
    }];
    const nodes = {
      Calvin: {
        fData: {
          email: "abc@nonfx.com",
          mobile: \`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" />\`,
          name: \`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png" />\`
        }
      },
      Hansen: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Hansen"
        },
        fChildren: {
          hchild1: {}
        }
      },
      Alicen: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Alicen"
        }
      },
      Jennifer: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Jennifer"
        }
      },
      Brooke: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Brooke"
        }
      },
      Tamara: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Tamara"
        }
      },
      Bradley: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Bradley"
        }
      },
      Roger: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Roger"
        }
      },
      Max: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Max"
        },
        fHideChildren: false,
        fChildren: {
          mchild1: {},
          mchild2: {},
          mchild3: {},
          mchild4: {},
          mchild5: {},
          mchild6: {},
          mchild7: {},
          mchild8: {},
          mchild9: {},
          mchild10: {},
          mchild11: {},
          mchild12: {},
          mchild13: {},
          mchild14: {},
          mchild15: {},
          mchild16: {}
        }
      },
      Tony: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Tony"
        }
      },
      Charlie: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Charlie"
        }
      },
      John: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "John"
        }
      },
      Tim: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Tim"
        }
      },
      Sam: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Sam"
        }
      },
      Rex: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Rex"
        }
      },
      Pat: {
        fData: {
          email: "abc@nonfx.com",
          mobile: "+91-12345 67890",
          name: "Pat"
        }
      }
    };
    let idx = 0;
    setTimeout(() => {
      idx += 1;
      nodes.Max.fData.name = \`Max-\${idx}\`;
    }, 1000);
    setTimeout(() => {
      idx += 1;
      nodes.Roger.fData = {
        email: "abc@nonfx.com",
        mobile: "This is my mobile number",
        name: "Roger Updated"
      };
    }, 2000);
    const nodeTemplate = function (node: LineageNodeElement) {
      return html\` <f-div style="position:absolute;top:-20px;z-index:1;" gap="x-small">
                    <f-tag label="Construction" state="primary" size="small"></f-tag>
                    <f-tag label="Cat" size="small" counter="35"></f-tag>
                </f-div>
                <f-div
                    state=\${node.id === "Max" ? "custom,#006ecc" : "secondary"}
                    width="100%"
                    height="100%"
                    padding="none medium"
                    align="middle-left"
                    variant="curved"
                    gap="small"
                    \${node.fChildren && !node.fHideChildren ? 'border="small solid default bottom"' : ""}
                >
                    <f-icon-button icon="i-table" state="neutral"></f-icon-button>
                    <f-div
                        .tooltip=\${node.fData?.mobile}
                        direction="column"
                        height="hug-content"
                        align="middle-left"
                    >
                        <f-text variant="code" size="large" ellipsis>\${node.fData?.name}</f-text>
                    </f-div>
                    \${node.childrenToggle}
                </f-div>\`;
    };
    const childNodeTemplate = function (node: LineageNodeElement) {
      return html\`<f-div
                state="secondary"
                width="100%"
                height="100%"
                padding="none medium"
                align="middle-left"
                gap="small"
                border="small solid default bottom"
            >
                <f-icon source="i-hashtag" size="small"></f-icon>
                <f-text variant="code" size="medium" ellipsis>\${node.id}</f-text>
            </f-div>\`;
    };
    const divRef = createRef();
    return html\`<f-div \${ref(divRef)} height="100%"
            ><f-div
                ><f-lineage
                    .direction=\${"horizontal"}
                    .padding=\${28}
                    .gap=\${100}
                    .node-size=\${{
      width: 200,
      height: 52
    }}
                    .children-node-size=\${{
      width: 200,
      height: 32
    }}
                    .max-children=\${8}
                    .node-template=\${nodeTemplate}
                    .children-node-template=\${childNodeTemplate}
                    .links=\${links}
                    .nodes=\${nodes}
                    stagger-load="1"
                >
                </f-lineage> </f-div
        ></f-div>\`;
  },
  height: "500px"
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const T=["Playground"];export{e as Playground,T as __namedExportsOrder,D as default};
