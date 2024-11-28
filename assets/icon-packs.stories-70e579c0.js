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
                    ${Object.keys(this.icons).filter(l=>this.searchTerm?l.includes(this.searchTerm):!0).map(l=>a` <f-div
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
        `}};g([Q({type:String})],f.prototype,"packName",2);g([Q({reflect:!1,type:Object})],f.prototype,"icons",2);f=g([k("icon-pack")],f);const e={render:()=>a` <icon-pack .packName=${"system"} .icons=${hv}> </icon-pack> `,name:"system"},c={render:()=>a` <icon-pack .packName=${"aws"} .icons=${O7}> </icon-pack> `,name:"aws"},v={render:()=>a` <icon-pack .packName=${"gcp"} .icons=${$6}> </icon-pack> `,name:"gcp"},s={render:()=>a` <icon-pack .packName=${"product"} .icons=${o9}> </icon-pack> `,name:"product"},d={render:()=>a` <icon-pack .packName=${"policy"} .icons=${rv}> </icon-pack> `,name:"policy"},o={render:()=>a` <icon-pack .packName=${"azure"} .icons=${As}> </icon-pack> `,name:"azure"};var r,m,A;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"system"} .icons=\${flowSystemIcon}> </icon-pack> \`;
  },
  name: "system"
}`,...(A=(m=e.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};var z,M,u;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"aws"} .icons=\${flowAwsIcon}> </icon-pack> \`;
  },
  name: "aws"
}`,...(u=(M=c.parameters)==null?void 0:M.docs)==null?void 0:u.source}}};var H,x,B;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"gcp"} .icons=\${flowGCPIcon}> </icon-pack> \`;
  },
  name: "gcp"
}`,...(B=(x=v.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var V,C,q;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"product"} .icons=\${flowProductIcon}> </icon-pack> \`;
  },
  name: "product"
}`,...(q=(C=s.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var F,P,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"policy"} .icons=\${flowPolicyIcon}> </icon-pack> \`;
  },
  name: "policy"
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var D,L,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"azure"} .icons=\${flowAzureIcon}> </icon-pack> \`;
  },
  name: "azure"
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const Vs=["IconPackElement","System","Aws","Gcp","Product","Policy","Azure"];export{c as Aws,o as Azure,v as Gcp,f as IconPackElement,d as Policy,s as Product,e as System,Vs as __namedExportsOrder,Bs as default};