import{x as i}from"./iframe-CCyKNv7C.js";import"./preload-helper-D4nn9Y_6.js";const h={title:"@nonfx/flow-lineage/Examples",parameters:{controls:{hideNoControlsWarning:!0}}},t={render:g=>{const o={user:{fData:{icon:"i-user",state:"neutral"}},computer:{fData:{icon:"i-computer",state:"primary",effect:"pulse"}},failed:{fData:{icon:"i-org-fill",state:"danger"}},result:{fData:{icon:"i-crown",state:"neutral"}}},u=[{from:"user",to:"computer"},{from:"user",to:"failed"},{from:"failed",to:"result"},{from:"computer",to:"result"},{from:"user",to:"result"}],d=e=>{var a,r,s;return i`<f-icon-button
                .icon=${(a=e.fData)==null?void 0:a.icon}
                .state=${(r=e.fData)==null?void 0:r.state}
                .effect=${(s=e.fData)==null?void 0:s.effect}
            ></f-icon-button>`},m={width:36,height:36};let n=0;const p=["primary","danger","success","neutral"];return setInterval(()=>{var e;(e=o.result.fData)!=null&&e.state&&(o.result.fData.state=p[n]),n++,n===4&&(n=0)},1500),i`<f-lineage
            .nodes=${o}
            .links=${u}
            direction="vertical"
            gap="250"
            .node-size=${m}
            .node-template=${d}
        ></f-lineage>`},name:"Icon Buttons Nodes ",height:"500px"};var c,f,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    const nodes: LineageNodes = {
      user: {
        fData: {
          icon: "i-user",
          state: "neutral"
        }
      },
      computer: {
        fData: {
          icon: "i-computer",
          state: "primary",
          effect: "pulse"
        }
      },
      failed: {
        fData: {
          icon: "i-org-fill",
          state: "danger"
        }
      },
      result: {
        fData: {
          icon: "i-crown",
          state: "neutral"
        }
      }
    };
    const links: LineageNodeLinks = [{
      from: "user",
      to: "computer"
    }, {
      from: "user",
      to: "failed"
    }, {
      from: "failed",
      to: "result"
    }, {
      from: "computer",
      to: "result"
    }, {
      from: "user",
      to: "result"
    }];
    const nodeTemplate: LineageNodeTemplate = node => {
      return html\`<f-icon-button
                .icon=\${node.fData?.icon}
                .state=\${node.fData?.state}
                .effect=\${node.fData?.effect}
            ></f-icon-button>\`;
    };
    const nodeSize: LineageNodeSize = {
      width: 36,
      height: 36
    };
    let idx = 0;
    const states = ["primary", "danger", "success", "neutral"];
    setInterval(() => {
      if (nodes.result.fData?.state) {
        nodes.result.fData.state = states[idx];
      }
      idx++;
      if (idx === 4) {
        idx = 0;
      }
    }, 1500);
    return html\`<f-lineage
            .nodes=\${nodes}
            .links=\${links}
            direction="vertical"
            gap="250"
            .node-size=\${nodeSize}
            .node-template=\${nodeTemplate}
        ></f-lineage>\`;
  },
  name: "Icon Buttons Nodes ",
  height: "500px"
}`,...(l=(f=t.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};const x=["Playground"];export{t as Playground,x as __namedExportsOrder,h as default};
