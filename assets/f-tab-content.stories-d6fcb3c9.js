import{x as o}from"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";const{useArgs:T,useState:d,useEffect:$}=__STORYBOOK_MODULE_CLIENT_API__,w={title:"@nonfx/flow-core/f-tab-content",parameters:{controls:{hideNoControlsWarning:!0}}},i={render:t=>o`
            <f-tab-content .transition=${t.transition} .duration=${t.duration}
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content</f-text></f-div
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
        `,name:"Playground",parameters:{docs:{inlineStories:!1,iframeHeight:250}},argTypes:{transition:{control:"radio",options:["none","fade","slide"]},duration:{control:"number"}},args:{transition:"none",duration:200}},a={render:t=>{const[e,n]=d("uni-1");return o`
            <f-div>
                <f-tab
                    ?active=${e==="uni-1"}
                    content-id="uni-1"
                    @click=${()=>n("uni-1")}
                    >Tab 1</f-tab
                >
                <f-tab
                    ?active=${e==="uni-2"}
                    content-id="uni-2"
                    @click=${()=>n("uni-2")}
                    >Tab 2</f-tab
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
        `},name:"id",parameters:{docs:{inlineStories:!1,iframeHeight:200}}},s={render:t=>{let[e,n]=d("none");return o`
            <f-button
                ?disabled=${e==="fade"}
                label="Fade"
                @click=${()=>n("fade")}
            ></f-button>
            <f-button
                ?disabled=${e==="slide"}
                label="slide"
                @click=${()=>n("slide")}
            ></f-button>
            <f-button
                ?disabled=${e==="none"}
                label="none"
                @click=${()=>n("none")}
            ></f-button>
            <f-tab-content .transition=${e}
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content</f-text></f-div
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
        `},name:"transition",parameters:{docs:{inlineStories:!1,iframeHeight:200}}},r={render:t=>{let[e,n]=d("none");return o`
            <f-button
                ?disabled=${e==="fade"}
                label="Fade"
                @click=${()=>n("fade")}
            ></f-button>
            <f-button
                ?disabled=${e==="slide"}
                label="slide"
                @click=${()=>n("slide")}
            ></f-button>
            <f-button
                ?disabled=${e==="none"}
                label="none"
                @click=${()=>n("none")}
            ></f-button>
            <f-tab-content .transition=${e} duration="2000"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab Content (Duration 2000ms)</f-text
                        ></f-div
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
        `},name:"duration",parameters:{docs:{inlineStories:!1,iframeHeight:200}}};var l,u,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
            <f-tab-content .transition=\${args.transition} .duration=\${args.duration}
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content</f-text></f-div
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
  name: "Playground",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 250
    }
  },
  argTypes: {
    transition: {
      control: "radio",
      options: ["none", "fade", "slide"]
    },
    duration: {
      control: "number"
    }
  },
  args: {
    transition: "none",
    duration: 200
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("uni-1");
    return html\`
            <f-div>
                <f-tab
                    ?active=\${selected === "uni-1"}
                    content-id="uni-1"
                    @click=\${() => setSelected("uni-1")}
                    >Tab 1</f-tab
                >
                <f-tab
                    ?active=\${selected === "uni-2"}
                    content-id="uni-2"
                    @click=\${() => setSelected("uni-2")}
                    >Tab 2</f-tab
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
  name: "id",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    let [currentTransition, setCurrentTransition] = useState("none");
    return html\`
            <f-button
                ?disabled=\${currentTransition === "fade"}
                label="Fade"
                @click=\${() => setCurrentTransition("fade")}
            ></f-button>
            <f-button
                ?disabled=\${currentTransition === "slide"}
                label="slide"
                @click=\${() => setCurrentTransition("slide")}
            ></f-button>
            <f-button
                ?disabled=\${currentTransition === "none"}
                label="none"
                @click=\${() => setCurrentTransition("none")}
            ></f-button>
            <f-tab-content .transition=\${currentTransition}
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold">Tab Content</f-text></f-div
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
  name: "transition",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    let [currentTransition, setCurrentTransition] = useState("none");
    return html\`
            <f-button
                ?disabled=\${currentTransition === "fade"}
                label="Fade"
                @click=\${() => setCurrentTransition("fade")}
            ></f-button>
            <f-button
                ?disabled=\${currentTransition === "slide"}
                label="slide"
                @click=\${() => setCurrentTransition("slide")}
            ></f-button>
            <f-button
                ?disabled=\${currentTransition === "none"}
                label="none"
                @click=\${() => setCurrentTransition("none")}
            ></f-button>
            <f-tab-content .transition=\${currentTransition} duration="2000"
                ><f-div direction="column" width="100%" padding="large"
                    ><f-div
                        ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab Content (Duration 2000ms)</f-text
                        ></f-div
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
  name: "duration",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
}`,...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const x=["Playground","Id","Transition","Duration"],C=Object.freeze(Object.defineProperty({__proto__:null,Duration:r,Id:a,Playground:i,Transition:s,__namedExportsOrder:x,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,C as F,a as I,i as P,s as T};
