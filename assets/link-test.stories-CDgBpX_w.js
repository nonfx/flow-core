import{x as o}from"./iframe-C5Wc31tw.js";import{c as r,n as d}from"./node-templates-yAdpPCRV.js";import"./preload-helper-D4nn9Y_6.js";const f={title:"@nonfx/flow-lineage/Debug/Links",argTypes:{"node-template":{control:!1},"children-node-template":{control:!1}}},l={rdj:{fData:{fullName:"Robert Downey Jr.",description:"Movies",state:"secondary"},fChildren:{child1:{fData:{icon:"i-hashtag",title:"Iron man 1"}},child2:{fData:{icon:"i-hashtag",title:"Iron man 2"}}},fHideChildren:!1},judge:{fData:{fullName:"The Judge",description:"Hank Palmer",state:"custom,#006ecc"}},ironman:{fData:{fullName:"Iron Man",description:"Tony stark",state:"secondary"},fChildren:{iman1:{fData:{icon:"i-hashtag",title:"Iron man 1"}},iman2:{fData:{icon:"i-paragraph",title:"Iron man 2"}}}},hank:{fData:{fullName:"Hank Palmer",description:"Actor",state:"secondary"},fChildren:{hhchild1:{fData:{icon:"i-hashtag",title:"Node child 1"}},hhchild2:{fData:{icon:"i-paragraph",title:"Node child 2"}}},fHideChildren:!1},prop1:{fData:{fullName:"Bugs",description:"Roota Voota",state:"primary"},fChildren:{hchild1:{fData:{icon:"i-hashtag",title:"H Node child 1"}},hchild2:{fData:{icon:"i-paragraph",title:"H Node child 2"}}}}},s=[{from:"prop1",to:"judge"},{from:"rdj",to:"judge"},{from:"rdj",to:"ironman"},{from:"judge",to:"hank"},{from:"iman1",to:"child1"},{from:"ironman",to:"prop1"},{from:"hank",to:"rdj"}],h=a=>o`
        <f-lineage
            direction="horizontal"
            padding="16"
            gap="75"
            .node-size=${{width:240,height:53}}
            .children-node-size=${{width:240,height:32}}
            .max-children=${a["max-children"]}
            .node-template=${a["node-template"]}
            .children-node-template=${a["children-node-template"]}
            .links=${s}
            .nodes=${l}
            stagger-load="1"
        ></f-lineage>
    `,e=h.bind({});e.args={"node-template":d,"children-node-template":r};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => {
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const g=["basic"];export{g as __namedExportsOrder,e as basic,f as default};
