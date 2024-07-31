import{x as d}from"./lit-html-b1a28dc3.js";import{n as l,e as c}from"./ref-a55570ea.js";const T={title:"@nonfx/flow-core/f-tab-node",parameters:{controls:{hideNoControlsWarning:!0}}},n={render:e=>d` <f-div>
            <f-tab-node ?active=${e.active} .width=${e.width} variant=${e.variant}>
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >Description</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>`,name:"Playground",parameters:{docs:{inlineStories:!1,iframeHeight:200}},argTypes:{width:{control:"text"},active:{control:"boolean"},variant:{control:"radio",options:["transparent","fill"]}},args:{width:"fill",active:!0,variant:"fill"}},t={render:()=>{let e="uni-1";const r=c(),o=c(),s=k=>{k==="uni-1"?(r.value.active=!0,o.value.active=!1,e="uni-1"):(o.value.active=!0,r.value.active=!1,e="uni-2")};return d`
            <f-div>
                <f-tab-node
                    ${l(r)}
                    ?active=${e==="uni-1"}
                    content-id="uni-1"
                    @click=${()=>s("uni-1")}
                    >Tab 1</f-tab-node
                >
                <f-tab-node
                    ${l(o)}
                    ?active=${e==="uni-2"}
                    content-id="uni-2"
                    @click=${()=>s("uni-2")}
                    >Tab 2</f-tab-node
                >
            </f-div>
            <f-tab-content transition="fade" id="uni-1"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content - 1</f-text></f-div
                    >
                    <f-div>
                        <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</f-text
                        ></f-div
                    ></f-div
                ></f-tab-content
            >
            <f-tab-content transition="fade" id="uni-2"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content - 2</f-text></f-div
                    >
                    <f-div>
                        <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</f-text
                        ></f-div
                    ></f-div
                ></f-tab-content
            >
        `},name:"content-id",parameters:{docs:{inlineStories:!1,iframeHeight:200}}},i={render:()=>d`<f-div>
            <f-tab-node ?active=${!0} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >active="true"</f-div
                    ></f-div
                >
            </f-tab-node>
            <f-tab-node ?active=${!1} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >active = "false"</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>`,name:"active",parameters:{docs:{inlineStories:!1,iframeHeight:200}}},a={render:()=>d`<f-div>
            <f-tab-node variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >disabled="false"</f-div
                    ></f-div
                >
            </f-tab-node>
            <f-tab-node disabled ?active=${!1} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >disabled = "true"</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>`,name:"disabled",parameters:{docs:{inlineStories:!1,iframeHeight:200}}};var f,h,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: Record<string, string>) => {
    return html\` <f-div>
            <f-tab-node ?active=\${args.active} .width=\${args.width} variant=\${args.variant}>
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >Description</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>\`;
  },
  name: "Playground",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  },
  argTypes: {
    width: {
      control: "text"
    },
    active: {
      control: "boolean"
    },
    variant: {
      control: "radio",
      options: ["transparent", "fill"]
    }
  },
  args: {
    width: "fill",
    active: true,
    variant: "fill"
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,v,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    let selected = "uni-1";
    const tab1 = createRef<FTabNode>();
    const tab2 = createRef<FTabNode>();
    const setSelected = (tabid: string) => {
      if (tabid === "uni-1") {
        tab1.value!.active = true;
        tab2.value!.active = false;
        selected = "uni-1";
      } else {
        tab2.value!.active = true;
        tab1.value!.active = false;
        selected = "uni-2";
      }
    };
    return html\`
            <f-div>
                <f-tab-node
                    \${ref(tab1)}
                    ?active=\${selected === "uni-1"}
                    content-id="uni-1"
                    @click=\${() => setSelected("uni-1")}
                    >Tab 1</f-tab-node
                >
                <f-tab-node
                    \${ref(tab2)}
                    ?active=\${selected === "uni-2"}
                    content-id="uni-2"
                    @click=\${() => setSelected("uni-2")}
                    >Tab 2</f-tab-node
                >
            </f-div>
            <f-tab-content transition="fade" id="uni-1"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content - 1</f-text></f-div
                    >
                    <f-div>
                        <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</f-text
                        ></f-div
                    ></f-div
                ></f-tab-content
            >
            <f-tab-content transition="fade" id="uni-2"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content - 2</f-text></f-div
                    >
                    <f-div>
                        <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</f-text
                        ></f-div
                    ></f-div
                ></f-tab-content
            >
        \`;
  },
  name: "content-id",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,b,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div>
            <f-tab-node ?active=\${true} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >active="true"</f-div
                    ></f-div
                >
            </f-tab-node>
            <f-tab-node ?active=\${false} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >active = "false"</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>\`;
  },
  name: "active",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,I,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div>
            <f-tab-node variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >disabled="false"</f-div
                    ></f-div
                >
            </f-tab-node>
            <f-tab-node disabled ?active=\${false} variant="fill">
                <f-div width="100%" height="100%" align="middle-center" direction="column"
                    ><f-div align="middle-center" height="hug-content" width="hug-content">Tab Item</f-div
                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                        >disabled = "true"</f-div
                    ></f-div
                >
            </f-tab-node>
        </f-div>\`;
  },
  name: "disabled",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(x=(I=a.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const $=["Playground","ContentId","Active","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Active:i,ContentId:t,Disabled:a,Playground:n,__namedExportsOrder:$,default:T},Symbol.toStringTag,{value:"Module"}));export{i as A,t as C,a as D,P as F,n as P};
