            <f-div
                direction="column"
                height="100%"
                width="100%"
                gap="large"
                padding="none large"
                overflow="scroll"
            >
                <f-div padding="large none" sticky="top" state="default" height="hug-content" gap="small">
                    <f-text style="width:100%" align="center">${this.packName}</f-text>
                    <f-search
                        .value=${this.searchTerm}
                        @keydown=${this.handleKeydown}
                        @input=${this.handleInput}
                        style="width:100%;"
                        variant="round"
                    ></f-search>
                </f-div>
                <f-div gap="x-large" height="hug-content" padding="large">
                    ${Object.keys(this.icons).filter(l=>this.searchTerm?l.includes(this.searchTerm):!0).map(l=>h` <f-div
                                    direction="column"
                                    height="hug-content"
                                    width="90px"
                                    gap="medium"
                                    align="middle-center"
                                >
                                    <f-icon .source=${l} size="large"> </f-icon>
                                    <f-text variant="para" size="small" weight="medium" align="center">${l}</f-text>
                                </f-div>`)}
                </f-div>
            </f-div>
        `}};p([E({type:String})],f.prototype,"packName",2);p([E({reflect:!1,type:Object})],f.prototype,"icons",2);f=p([Q("icon-pack")],f);const t={render:()=>h` <icon-pack .packName=${"system"} .icons=${Ot}> </icon-pack> `,name:"system"},c={render:()=>h` <icon-pack .packName=${"aws"} .icons=${Q7}> </icon-pack> `,name:"aws"},v={render:()=>h` <icon-pack .packName=${"gcp"} .icons=${N7}> </icon-pack> `,name:"gcp"},s={render:()=>h` <icon-pack .packName=${"product"} .icons=${$6}> </icon-pack> `,name:"product"},d={render:()=>h` <icon-pack .packName=${"policy"} .icons=${ic}> </icon-pack> `,name:"policy"};var g,r,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"system"} .icons=\${flowSystemIcon}> </icon-pack> \`;
  },
  name: "system"
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var A,z,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"aws"} .icons=\${flowAwsIcon}> </icon-pack> \`;
  },
  name: "aws"
}`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var u,H,x;v.parameters={...v.parameters,docs:{...(u=v.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"gcp"} .icons=\${flowGCPIcon}> </icon-pack> \`;
  },
  name: "gcp"
}`,...(x=(H=v.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var B,V,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"product"} .icons=\${flowProductIcon}> </icon-pack> \`;
  },
  name: "product"
}`,...(C=(V=s.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var q,P,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"policy"} .icons=\${flowPolicyIcon}> </icon-pack> \`;
  },
  name: "policy"
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const fc=["IconPackElement","System","Aws","Gcp","Product","Policy"];export{c as Aws,v as Gcp,f as IconPackElement,d as Policy,s as Product,t as System,fc as __namedExportsOrder,dc as default};