import{x as r}from"./lit-html-BulfDIla.js";import{n as i}from"./nodes-Dy-e1dV2.js";import{c as l,n as a}from"./node-templates-B52zEtIB.js";const f={title:"@nonfx/flow-lineage/Debug/Glitch",argTypes:{"node-template":{control:!1},"children-node-template":{control:!1}}},m=[{from:"noede1",to:"node2"},{from:"node1",to:"node5"},{from:"node1",to:"node4"},{from:"node2",to:"node5"},{to:"node3",from:"node5"},{from:"node5",to:"node4"},{from:"node6",to:"node5"},{from:"node4child1",to:"node5child2"},{from:"node4child1",to:"node5child1"},{from:"node1child1",to:"node5child2"},{from:"node1child1",to:"node4child2"},{from:"node6",to:"node6"}],s=n=>r`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=${{width:240,height:53}}
            .children-node-size=${{width:240,height:32}}
            .max-children=${n["max-children"]}
            .node-template=${n["node-template"]}
            .children-node-template=${n["children-node-template"]}
            .links=${m}
            .nodes=${i}
            stagger-load="1"
        ></f-lineage>
    `,e=s.bind({});e.args={"node-template":a,"children-node-template":l};var o,d,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
  return html\`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=\${{
    width: 240,
    height: 53
  }}
            .children-node-size=\${{
    width: 240,
    height: 32
  }}
            .max-children=\${args["max-children"]}
            .node-template=\${args["node-template"]}
            .children-node-template=\${args["children-node-template"]}
            .links=\${links}
            .nodes=\${nodes}
            stagger-load="1"
        ></f-lineage>
    \`;
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const g=["basic"];export{g as __namedExportsOrder,e as basic,f as default};
