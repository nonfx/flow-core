import{x as s}from"./lit-html-BulfDIla.js";const u={title:"@nonfx/flow-lineage/Examples/Large Data",argTypes:{"node-template":{control:!1}}},m=()=>{const e=window.crypto,n=new Uint32Array(1);return`N${e.getRandomValues(n)[0]}`};function p(e,n){return new Date().getTime()%(n-e+1)+e}const l={},c=[],o={};for(let e=0;e<50;e++)for(let n=0;n<20;n++){const a=m();l[a]={},o[e]||(o[e]=[]),o[e].push(a),e>0&&c.push({from:o[e-1][p(0,9)],to:a})}const g=e=>s`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=${{width:44,height:44}}
            .children-node-size=${e["children-node-size"]}
            .max-children=${e["max-children"]}
            .node-template=${e["node-template"]}
            .children-node-template=${e["children-node-template"]}
            .links=${c}
            .nodes=${l}
            stagger-load="5"
        ></f-lineage>
    `,t=g.bind({});t.args={"node-template":function(e){return s`<f-pictogram source="${e.id}" variant="circle" clickable></f-text>`}};var r,i,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: any) => {
  return html\`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=\${{
    width: 44,
    height: 44
  }}
            .children-node-size=\${args["children-node-size"]}
            .max-children=\${args["max-children"]}
            .node-template=\${args["node-template"]}
            .children-node-template=\${args["children-node-template"]}
            .links=\${links}
            .nodes=\${nodes}
            stagger-load="5"
        ></f-lineage>
    \`;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const $=["basic"];export{$ as __namedExportsOrder,t as basic,u as default};
