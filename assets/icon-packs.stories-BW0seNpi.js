import{x as r}from"./lit-html-BulfDIla.js";import{I as E}from"./icon-pack-BcidA_Zv.js";import{I as G}from"./icon-pack-CaOM1DAX.js";import{I as D}from"./icon-pack-Dne-HmB8.js";import{I as K}from"./icon-pack-gynObV8z.js";import{I as R}from"./icon-pack-Cfid6H3i.js";import{I as q}from"./icon-pack-BxEVzb-k.js";import{n as C,t as U}from"./property-Dn_e7HmW.js";import{r as W}from"./lit-element-3mBpJhh8.js";var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,h=(e,c,l,a)=>{for(var n=a>1?void 0:a?F(c,l):c,u=e.length-1,f;u>=0;u--)(f=e[u])&&(n=(a?f(c,l,n):f(n))||n);return a&&n&&B(c,l,n),n};const ee={title:"@nonfx/flow-icons",parameters:{controls:{hideNoControlsWarning:!0}}};let d=class extends W{createRenderRoot(){return this}handleInput(e){e.stopPropagation(),this.searchTerm=e.detail.value,this.requestUpdate()}handleKeydown(e){e.stopPropagation(),e.stopImmediatePropagation()}render(){return r`
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
                    ${Object.keys(this.icons).filter(e=>this.searchTerm?e.includes(this.searchTerm):!0).map(e=>r` <f-div
                                    direction="column"
                                    height="hug-content"
                                    width="90px"
                                    gap="medium"
                                    align="middle-center"
                                >
                                    <f-icon .source=${e} size="large"> </f-icon>
                                    <f-text variant="para" size="small" weight="medium" align="center">${e}</f-text>
                                </f-div>`)}
                </f-div>
            </f-div>
        `}};h([C({type:String})],d.prototype,"packName",2);h([C({reflect:!1,type:Object})],d.prototype,"icons",2);d=h([U("icon-pack")],d);const o={render:()=>r` <icon-pack .packName=${"aws"} .icons=${E}> </icon-pack> `,name:"aws"},t={render:()=>r` <icon-pack .packName=${"gcp"} .icons=${G}> </icon-pack> `,name:"gcp"},s={render:()=>r` <icon-pack .packName=${"product"} .icons=${D}> </icon-pack> `,name:"product"},i={render:()=>r` <icon-pack .packName=${"policy"} .icons=${K}> </icon-pack> `,name:"policy"},p={render:()=>r` <icon-pack .packName=${"azure"} .icons=${R}> </icon-pack> `,name:"azure"},m={render:()=>r` <icon-pack .packName=${"nonfx"} .icons=${q}> </icon-pack> `,name:"nonfx"};var k,g,$;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"aws"} .icons=\${flowAwsIcon}> </icon-pack> \`;
  },
  name: "aws"
}`,...($=(g=o.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var w,I,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"gcp"} .icons=\${flowGCPIcon}> </icon-pack> \`;
  },
  name: "gcp"
}`,...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var x,y,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"product"} .icons=\${flowProductIcon}> </icon-pack> \`;
  },
  name: "product"
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var v,T,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"policy"} .icons=\${flowPolicyIcon}> </icon-pack> \`;
  },
  name: "policy"
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var _,O,S;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"azure"} .icons=\${flowAzureIcon}> </icon-pack> \`;
  },
  name: "azure"
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var A,b,j;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const searchTerm = "";
    return html\` <icon-pack .packName=\${"nonfx"} .icons=\${flowNonfxIcon}> </icon-pack> \`;
  },
  name: "nonfx"
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const re=["IconPackElement","Aws","Gcp","Product","Policy","Azure","Nonfx"];export{o as Aws,p as Azure,t as Gcp,d as IconPackElement,m as Nonfx,i as Policy,s as Product,re as __namedExportsOrder,ee as default};
