import{x as i}from"./lit-html-b1a28dc3.js";import{n as r,c as a}from"./node-templates-485ccb50.js";import{n as l}from"./nodes-775edc82.js";const g={title:"@nonfx/flow-lineage/Debug/dashed-hidden-children-link",argTypes:{"node-template":{control:!1},"children-node-template":{control:!1}}},s=[{from:"node1",to:"node2"},{from:"node2",to:"node5"},{to:"node3",from:"node5"},{from:"node6",to:"node5"},{from:"node5",to:"node4"},{from:"node4child1",to:"node5child2"},{from:"node4child1",to:"node5child1"},{from:"node1child1",to:"node5child6"}],h=n=>i`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=${{width:240,height:53}}
            .children-node-size=${{width:240,height:32}}
            .max-children=${4}
            .node-template=${n["node-template"]}
            .children-node-template=${n["children-node-template"]}
            .links=${s}
            .nodes=${l}
            stagger-load="1"
        ></f-lineage>
    `,e=h.bind({});e.args={"node-template":r,"children-node-template":a};var o,d,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
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
            .max-children=\${4}
            .node-template=\${args["node-template"]}
            .children-node-template=\${args["children-node-template"]}
            .links=\${links}
            .nodes=\${nodes}
            stagger-load="1"
        ></f-lineage>
    \`;
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const f=["basic"];export{f as __namedExportsOrder,e as basic,g as default};