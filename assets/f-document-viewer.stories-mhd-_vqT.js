import{x as o}from"./iframe-C5Wc31tw.js";import{f}from"./chunk-KZPPZA2C-BtqgzDBU.js";function p(e=2,n=2,u=!1){const t={};for(let i=0;i<e;i++)t[`${i+1}.`]=_(n,i+1,"heading"),u&&(t[`${i+1}.`].template=function(l){return o`
					<f-div gap="medium">
						<f-div gap="medium">
							<f-text inline size="small" weight="bold" .highlight=${l??""}>1. </f-text>
							<f-div>
								<f-text inline size="small" weight="bold" .highlight=${l??""}
									>${t[`${i+1}.`].title}</f-text
								>
							</f-div>
						</f-div>
						<f-divider state="secondary"></f-divider>
						<f-div width="150px" padding="none large"
							><f-tag label="Required" size="small" state="custom,#C29270"></f-tag
						></f-div>
					</f-div>
				`});return t}function _(e,n,u="para"){const t={},i={title:u==="heading"?f.lorem.words(6):f.lorem.sentence(100),type:u,open:!0};if(e>0)for(let l=0;l<2;l++)l===1?t[`${n}.${l+1}.`]=_(e-1,`${n}.${l+1}`):t[`${n}.${l+1}.`]=f.lorem.sentence(100);return t&&Object.keys(t).length>0&&(i.data=t),i}const{useState:m}=__STORYBOOK_MODULE_PREVIEW_API__,z={title:"@nonfx/flow-core/f-document-viewer",parameters:{controls:{hideNoControlsWarning:!0}}},a={render:e=>o`
            <f-document-viewer
                .content=${e.content}
                ?jump-links=${e["jump-links"]}
                ?collapsible-jump-links=${e["collapsible-jump-links"]}
                ?level-selector=${e["level-selector"]}
            ></f-document-viewer>
        `,name:"Playground",argTypes:{content:{control:"object"},"jump-links":{control:"boolean"},"collapsible-jump-links":{control:"boolean"},"level-selector":{control:"boolean"}},args:{content:p(20,4),"jump-links":!0,"collapsible-jump-links":!0,"level-selector":!0}},r={render:()=>o`
            <f-document-viewer .content=${{"1.":{title:"Preface",type:"heading",open:!0,data:{"1.1":"The technology landscape of the financial sector is transforming at a rapid pace","1.2":"The technology landscape of the financial sector is transforming at a rapid pace","1.3":{title:"The technology landscape of the financial sector is transforming at a rapid pace",open:!0,data:{"1.3.a":"The technology landscape of the financial sector is transforming at a rapid pace","1.3.b":"The technology landscape of the financial sector is transforming at a rapid pace"}}}},"2.":{title:"Technology",type:"heading",open:!0,template:function(n){return o`
                        <f-div gap="medium">
                            <f-div gap="medium">
                                <f-text inline size="small" weight="bold" .highlight=${n} state="warning"
                                    >2.
                                </f-text>
                                <f-div>
                                    <f-text inline size="small" weight="bold" .highlight=${n} state="warning"
                                        >${this.title}</f-text
                                    >
                                </f-div>
                            </f-div>
                            <f-divider state="secondary"></f-divider>
                            <f-div width="150px" padding="none large"
                                ><f-tag label="Required" size="small" state="custom,#C29270"></f-tag
                            ></f-div>
                        </f-div>
                    `},data:{"2.1":"The technology landscape of the financial sector is transforming at a rapid pace","2.2":"The technology landscape of the financial sector is transforming at a rapid pace"}}}} ?collapsible-jump-links=${!0}></f-document-viewer>
        `,name:"content"},s={render:()=>{const[e,n]=m(!0);return o`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=${`jump-links=${e}`}
                        @click=${()=>{n(!e)}}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=${p()}
                        ?jump-links=${e}
                        ?collapsible-jump-links=${!0}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        `},name:"jump-links"},c={render:()=>{const[e,n]=m(!0);return o`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=${`collpasible-jump-links=${e}`}
                        @click=${()=>{n(!e)}}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=${p()}
                        ?collapsible-jump-links=${e}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        `},name:"collapsible-jump-links"},d={render:()=>{const[e,n]=m(!0);return o`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=${`level-selector=${e}`}
                        @click=${()=>{n(!e)}}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=${p()}
                        ?level-selector=${e}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        `},name:"level-selector"};var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: DocViewerArgs) => {
    return html\`
            <f-document-viewer
                .content=\${args.content}
                ?jump-links=\${args["jump-links"]}
                ?collapsible-jump-links=\${args["collapsible-jump-links"]}
                ?level-selector=\${args["level-selector"]}
            ></f-document-viewer>
        \`;
  },
  name: "Playground",
  argTypes: {
    content: {
      control: "object"
    },
    ["jump-links"]: {
      control: "boolean"
    },
    ["collapsible-jump-links"]: {
      control: "boolean"
    },
    ["level-selector"]: {
      control: "boolean"
    }
  },
  args: {
    content: getFakeDocContent(20, 4),
    ["jump-links"]: true,
    ["collapsible-jump-links"]: true,
    ["level-selector"]: true
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,k,$;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const content = {
      ["1."]: {
        title: "Preface",
        type: "heading",
        open: true,
        data: {
          "1.1": "The technology landscape of the financial sector is transforming at a rapid pace",
          "1.2": "The technology landscape of the financial sector is transforming at a rapid pace",
          "1.3": {
            title: "The technology landscape of the financial sector is transforming at a rapid pace",
            open: true,
            data: {
              "1.3.a": "The technology landscape of the financial sector is transforming at a rapid pace",
              "1.3.b": "The technology landscape of the financial sector is transforming at a rapid pace"
            }
          }
        }
      },
      ["2."]: {
        title: "Technology",
        type: "heading",
        open: true,
        template: function (highlight: string) {
          return html\`
                        <f-div gap="medium">
                            <f-div gap="medium">
                                <f-text inline size="small" weight="bold" .highlight=\${highlight} state="warning"
                                    >2.
                                </f-text>
                                <f-div>
                                    <f-text inline size="small" weight="bold" .highlight=\${highlight} state="warning"
                                        >\${this.title}</f-text
                                    >
                                </f-div>
                            </f-div>
                            <f-divider state="secondary"></f-divider>
                            <f-div width="150px" padding="none large"
                                ><f-tag label="Required" size="small" state="custom,#C29270"></f-tag
                            ></f-div>
                        </f-div>
                    \`;
        },
        data: {
          "2.1": "The technology landscape of the financial sector is transforming at a rapid pace",
          "2.2": "The technology landscape of the financial sector is transforming at a rapid pace"
        }
      }
    };
    return html\`
            <f-document-viewer .content=\${content} ?collapsible-jump-links=\${true}></f-document-viewer>
        \`;
  },
  name: "content"
}`,...($=(k=r.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var j,w,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [jumpLinks, setJumpLinks] = useState(true);
    return html\`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=\${\`jump-links=\${jumpLinks}\`}
                        @click=\${() => {
      setJumpLinks(!jumpLinks);
    }}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=\${getFakeDocContent()}
                        ?jump-links=\${jumpLinks}
                        ?collapsible-jump-links=\${true}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        \`;
  },
  name: "jump-links"
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var L,S,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [collapsibleJumpLinks, setCollapsibleJumpLinks] = useState(true);
    return html\`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=\${\`collpasible-jump-links=\${collapsibleJumpLinks}\`}
                        @click=\${() => {
      setCollapsibleJumpLinks(!collapsibleJumpLinks);
    }}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=\${getFakeDocContent()}
                        ?collapsible-jump-links=\${collapsibleJumpLinks}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        \`;
  },
  name: "collapsible-jump-links"
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,x,J;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [levelSelector, setLevelSelector] = useState(true);
    return html\`
            <f-div direction="column" height="100%">
                <f-div state="subtle" padding="medium" height="hug-content"
                    ><f-button
                        label=\${\`level-selector=\${levelSelector}\`}
                        @click=\${() => {
      setLevelSelector(!levelSelector);
    }}
                    ></f-button
                ></f-div>
                <f-div>
                    <f-document-viewer
                        .content=\${getFakeDocContent()}
                        ?level-selector=\${levelSelector}
                    ></f-document-viewer>
                </f-div>
            </f-div>
        \`;
  },
  name: "level-selector"
}`,...(J=(x=d.parameters)==null?void 0:x.docs)==null?void 0:J.source}}};const P=["Playground","Content","JumpLinks","CollapsibleJumpLinks","LevelSelector"],F=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleJumpLinks:c,Content:r,JumpLinks:s,LevelSelector:d,Playground:a,__namedExportsOrder:P,default:z},Symbol.toStringTag,{value:"Module"}));export{r as C,F,s as J,d as L,a as P,c as a};
