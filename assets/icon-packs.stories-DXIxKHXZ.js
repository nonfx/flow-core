import{i as E,x as r,a as C,t as G}from"./iframe-D6om2Bsl.js";import{I as D}from"./icon-pack-BcidA_Zv.js";import{I as K}from"./icon-pack-DDh8-V_Z.js";import{I as R}from"./icon-pack-I0-6M9Vi.js";import{I as q}from"./icon-pack-N8z9QiSu.js";import{I as U}from"./icon-pack-DfmYCcCc.js";import{I as W}from"./icon-pack-Di-awHtt.js";import"./preload-helper-CTglmYes.js";var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,f=(e,a,l,c)=>{for(var n=c>1?void 0:c?F(a,l):a,u=e.length-1,h;u>=0;u--)(h=e[u])&&(n=(c?h(a,l,n):h(n))||n);return c&&n&&B(a,l,n),n};const Z={title:"@nonfx/flow-icons",parameters:{controls:{hideNoControlsWarning:!0}}};let d=class extends E{createRenderRoot(){return this}handleInput(e){e.stopPropagation(),this.searchTerm=e.detail.value,this.requestUpdate()}handleKeydown(e){e.stopPropagation(),e.stopImmediatePropagation()}render(){return r`
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
        `}};f([C({type:String})],d.prototype,"packName",2);f([C({reflect:!1,type:Object})],d.prototype,"icons",2);d=f([G("icon-pack")],d);const o={render:()=>r` <icon-pack .packName=${"aws"} .icons=${D}> </icon-pack> `,name:"aws"},t={render:()=>r` <icon-pack .packName=${"gcp"} .icons=${K}> </icon-pack> `,name:"gcp"},s={render:()=>r` <icon-pack .packName=${"product"} .icons=${R}> </icon-pack> `,name:"product"},i={render:()=>r` <icon-pack .packName=${"policy"} .icons=${q}> </icon-pack> `,name:"policy"},p={render:()=>r` <icon-pack .packName=${"azure"} .icons=${U}> </icon-pack> `,name:"azure"},m={render:()=>r` <icon-pack .packName=${"nonfx"} .icons=${W}> </icon-pack> `,name:"nonfx"};var k,g,$;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const ee=["IconPackElement","Aws","Gcp","Product","Policy","Azure","Nonfx"];export{o as Aws,p as Azure,t as Gcp,d as IconPackElement,m as Nonfx,i as Policy,s as Product,ee as __namedExportsOrder,Z as default};
