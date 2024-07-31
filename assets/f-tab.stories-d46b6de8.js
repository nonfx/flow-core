import{x as n}from"./lit-html-b1a28dc3.js";import"./unsafe-svg-e29b2cc0.js";const{useArgs:H,useState:c}=__STORYBOOK_MODULE_CLIENT_API__,P={title:"@nonfx/flow-core/f-tab",parameters:{controls:{hideNoControlsWarning:!0}}},h={render:o=>{const a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[r,s]=c(4),d=t=>{s(t)};return n`
            <f-div
                direction=${o.direction==="vertical"?"row":"column"}
                .height=${o.direction==="vertical"?"100%":"fill-container"}
                overflow="visible"
            >
                <f-tab
                    .direction=${o.direction}
                    .variant=${o.variant}
                    .alignment=${o.alignment}
                    node-width=${o["node-width"]}
                >
                    ${a.map(t=>n` <f-tab-node
                                ?active=${r===t}
                                content-id=${`tab-${t}`}
                                @click=${()=>d(t)}
                                @keyup=${i=>{i.key==="Enter"&&d(t)}}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab ${t}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >`)}</f-tab
                >
                ${a.map(t=>n`
                        <f-tab-content
                            id=${`tab-${t}`}
                            .transition=${o["tab-content-transition"]}
                            .duration=${o["tab-content-transition-duration"]}
                            ><f-div direction="column" width="100%" padding="large"
                                ><f-div
                                    ><f-text variant="heading" size="x-large" weight="bold"
                                        >Tab ${t}</f-text
                                    ></f-div
                                >
                                <f-div>
                                    <f-text
                                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.</f-text
                                    ></f-div
                                ></f-div
                            ></f-tab-content
                        >
                    `)}
            </f-div>
        `},name:"Playground",parameters:{docs:{inlineStories:!1,iframeHeight:400}},argTypes:{variant:{control:"radio",options:["transparent","fill","no-border"]},direction:{control:"radio",options:["horizontal","vertical"]},alignment:{control:"select",options:["left","center","right","top","middle","bottom"]},"node-width":{control:"text"},"tab-content-transition":{control:"radio",options:["none","fade","slide"]},"tab-content-transition-duration":{control:"number"}},args:{variant:"transparent",direction:"horizontal",alignment:"left","node-width":"hug-content","tab-content-transition":"none","tab-content-transition-duration":200}},m={render:o=>{const a=[0,1,2,3,4,5],[r,s]=c(0),d=i=>{s(i)};return n`<f-div direction="column">
            ${["transparent","fill"].map(i=>n` <f-div direction="column" height="fill-container" overflow="visible">
                        <f-tab .variant=${i} node-width="fill">
                            ${a.map(e=>n` <f-tab-node
                                        ?active=${r===e}
                                        content-id=${`tab-${i}-${e}`}
                                        @click=${()=>d(e)}
                                        ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                            ><f-div align="middle-center" height="hug-content" width="hug-content"
                                                >Tab ${e}</f-div
                                            ><f-div align="middle-center" height="hug-content" width="hug-content"
                                                >Description</f-div
                                            ></f-div
                                        ></f-tab-node
                                    >`)}</f-tab
                        >
                        ${a.map(e=>n`
                                <f-tab-content id=${`tab-${i}-${e}`}
                                    ><f-div direction="column" width="100%" padding="large"
                                        ><f-div
                                            ><f-text variant="heading" size="x-large" weight="bold"
                                                >Tab ${e}</f-text
                                            ></f-div
                                        >
                                        <f-div>
                                            <f-text
                                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book. It has survived not only five centuries, but also
                                                the leap into electronic typesetting, remaining essentially unchanged. It
                                                was popularised in the 1960s with the release of Letraset sheets containing
                                                Lorem Ipsum passages, and more recently with desktop publishing software
                                                like Aldus PageMaker including versions of Lorem Ipsum.</f-text
                                            ></f-div
                                        ></f-div
                                    ></f-tab-content
                                >
                            `)}
                    </f-div>`)}</f-div
        > `},name:"variant",parameters:{docs:{inlineStories:!1,iframeHeight:500}}},g={render:o=>{const a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[r,s]=c(0),d=e=>{s(e)},[t,i]=c("horizontal");return n`
            <f-button
                label="horizontal"
                ?disabled=${t==="horizontal"}
                @click=${()=>i("horizontal")}
            ></f-button>
            <f-button
                label="vertical"
                ?disabled=${t==="vertical"}
                @click=${()=>i("vertical")}
            ></f-button>
            <f-spacer></f-spacer>
            <f-div
                direction=${t==="vertical"?"row":"column"}
                .height=${t==="vertical"?"100%":"fill-container"}
                overflow="visible"
            >
                <f-tab .direction=${t} node-width="fill">
                    ${a.map(e=>n` <f-tab-node
                                ?active=${r===e}
                                content-id=${`tab-${t}-${e}`}
                                @click=${()=>d(e)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab ${e}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >`)}</f-tab
                >
                ${a.map(e=>n`
                    <f-tab-content id=${`tab-${t}-${e}`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab ${e}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>`)}</f-div
            >
        `},name:"direction",parameters:{docs:{inlineStories:!1,iframeHeight:500}}},u={render:o=>{const a=[0,1,2],[r,s]=c(0),d=e=>{s(e)},[t,i]=c("fill");return n`
            <f-button
                label="fill"
                ?disabled=${t==="fill"}
                @click=${()=>i("fill")}
            ></f-button>
            <f-button
                label="hug-content"
                ?disabled=${t==="hug-content"}
                @click=${()=>i("hug-content")}
            ></f-button>
            <f-button
                label="300px"
                ?disabled=${t==="300"}
                @click=${()=>i("300")}
            ></f-button>
            <f-spacer></f-spacer>
            <f-div direction="column" height="fill-container" overflow="visible">
                <f-tab node-width=${t}>
                    ${a.map(e=>n` <f-tab-node
                                ?active=${r===e}
                                content-id=${`tab-${t}-${e}`}
                                @click=${()=>d(e)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab ${e}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >`)}</f-tab
                >
                ${a.map(e=>n`
                    <f-tab-content id=${`tab-${t}-${e}`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab ${e}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>`)}</f-div
            >
        `},name:"node-width",parameters:{docs:{inlineStories:!1,iframeHeight:500}}},b={render:o=>{const a=[0,1,2],[r,s]=c(0),d=l=>{s(l)},[t,i]=c("horizontal"),[e,f]=c("left");return n`
            <f-div>
                <f-button
                    label="horizontal"
                    ?disabled=${t==="horizontal"}
                    @click=${()=>i("horizontal")}
                ></f-button>
                <f-button
                    label="vertical"
                    ?disabled=${t==="vertical"}
                    @click=${()=>i("vertical")}
                ></f-button>
            </f-div>
            <f-spacer></f-spacer>
            ${t==="horizontal"?n` <f-button
                            label="left"
                            ?disabled=${e==="left"}
                            @click=${()=>f("left")}
                        ></f-button>
                        <f-button
                            label="center"
                            ?disabled=${e==="center"}
                            @click=${()=>f("center")}
                        ></f-button>
                        <f-button
                            label="right"
                            ?disabled=${e==="right"}
                            @click=${()=>f("right")}
                        ></f-button>`:n` <f-button
                            label="top"
                            ?disabled=${e==="top"}
                            @click=${()=>f("top")}
                        ></f-button>
                        <f-button
                            label="middle"
                            ?disabled=${e==="middle"}
                            @click=${()=>f("middle")}
                        ></f-button>
                        <f-button
                            label="bottom"
                            ?disabled=${e==="bottom"}
                            @click=${()=>f("bottom")}
                        ></f-button>`}
            <f-spacer></f-spacer>
            <f-div
                direction=${t==="vertical"?"row":"column"}
                .height=${t==="vertical"?"100%":"fill-container"}
                overflow="visible"
            >
                <f-tab .alignment=${e} .direction=${t}>
                    ${a.map(l=>n` <f-tab-node
                                ?active=${r===l}
                                content-id=${`tab-${e}-${l}`}
                                @click=${()=>d(l)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab ${l}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >`)}</f-tab
                >
                ${a.map(l=>n`
                    <f-tab-content id=${`tab-${e}-${l}`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab ${l}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>`)}</f-div
            >
        `},name:"alignment",parameters:{docs:{inlineStories:!1,iframeHeight:500}}};var p,v,$;h.parameters={...h.parameters,docs:{...(p=h.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const [selected, setSelected] = useState(4);
    const handleChange = id => {
      setSelected(id);
    };
    return html\`
            <f-div
                direction=\${args.direction === "vertical" ? "row" : "column"}
                .height=\${args.direction === "vertical" ? "100%" : "fill-container"}
                overflow="visible"
            >
                <f-tab
                    .direction=\${args.direction}
                    .variant=\${args.variant}
                    .alignment=\${args.alignment}
                    node-width=\${args["node-width"]}
                >
                    \${array.map(item => html\` <f-tab-node
                                ?active=\${selected === item ? true : false}
                                content-id=\${\`tab-\${item}\`}
                                @click=\${() => handleChange(item)}
                                @keyup=\${e => {
      if (e.key === "Enter") handleChange(item);
    }}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab \${item}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >\`)}</f-tab
                >
                \${array.map(item => html\`
                        <f-tab-content
                            id=\${\`tab-\${item}\`}
                            .transition=\${args["tab-content-transition"]}
                            .duration=\${args["tab-content-transition-duration"]}
                            ><f-div direction="column" width="100%" padding="large"
                                ><f-div
                                    ><f-text variant="heading" size="x-large" weight="bold"
                                        >Tab \${item}</f-text
                                    ></f-div
                                >
                                <f-div>
                                    <f-text
                                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.</f-text
                                    ></f-div
                                ></f-div
                            ></f-tab-content
                        >
                    \`)}
            </f-div>
        \`;
  },
  name: "Playground",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400
    }
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["transparent", "fill", "no-border"]
    },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"]
    },
    alignment: {
      control: "select",
      options: ["left", "center", "right", "top", "middle", "bottom"]
    },
    ["node-width"]: {
      control: "text"
    },
    ["tab-content-transition"]: {
      control: "radio",
      options: ["none", "fade", "slide"]
    },
    ["tab-content-transition-duration"]: {
      control: "number"
    }
  },
  args: {
    variant: "transparent",
    direction: "horizontal",
    alignment: "left",
    ["node-width"]: "hug-content",
    ["tab-content-transition"]: "none",
    ["tab-content-transition-duration"]: 200
  }
}`,...($=(v=h.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var y,w,k;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const array = [0, 1, 2, 3, 4, 5];
    const [selected, setSelected] = useState(0);
    const handleChange = id => {
      setSelected(id);
    };
    const variants = ["transparent", "fill"];
    return html\`<f-div direction="column">
            \${variants.map(variant => html\` <f-div direction="column" height="fill-container" overflow="visible">
                        <f-tab .variant=\${variant} node-width="fill">
                            \${array.map(item => html\` <f-tab-node
                                        ?active=\${selected === item ? true : false}
                                        content-id=\${\`tab-\${variant}-\${item}\`}
                                        @click=\${() => handleChange(item)}
                                        ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                            ><f-div align="middle-center" height="hug-content" width="hug-content"
                                                >Tab \${item}</f-div
                                            ><f-div align="middle-center" height="hug-content" width="hug-content"
                                                >Description</f-div
                                            ></f-div
                                        ></f-tab-node
                                    >\`)}</f-tab
                        >
                        \${array.map(item => html\`
                                <f-tab-content id=\${\`tab-\${variant}-\${item}\`}
                                    ><f-div direction="column" width="100%" padding="large"
                                        ><f-div
                                            ><f-text variant="heading" size="x-large" weight="bold"
                                                >Tab \${item}</f-text
                                            ></f-div
                                        >
                                        <f-div>
                                            <f-text
                                                >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book. It has survived not only five centuries, but also
                                                the leap into electronic typesetting, remaining essentially unchanged. It
                                                was popularised in the 1960s with the release of Letraset sheets containing
                                                Lorem Ipsum passages, and more recently with desktop publishing software
                                                like Aldus PageMaker including versions of Lorem Ipsum.</f-text
                                            ></f-div
                                        ></f-div
                                    ></f-tab-content
                                >
                            \`)}
                    </f-div>\`)}</f-div
        > \`;
  },
  name: "variant",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  }
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var x,S,I;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const [selected, setSelected] = useState(0);
    const handleChange = id => {
      setSelected(id);
    };
    const directions = ["horizontal", "vertical"];
    const [selectedDirection, setSelectedDirection] = useState("horizontal");
    return html\`
            <f-button
                label="horizontal"
                ?disabled=\${selectedDirection === "horizontal"}
                @click=\${() => setSelectedDirection("horizontal")}
            ></f-button>
            <f-button
                label="vertical"
                ?disabled=\${selectedDirection === "vertical"}
                @click=\${() => setSelectedDirection("vertical")}
            ></f-button>
            <f-spacer></f-spacer>
            <f-div
                direction=\${selectedDirection === "vertical" ? "row" : "column"}
                .height=\${selectedDirection === "vertical" ? "100%" : "fill-container"}
                overflow="visible"
            >
                <f-tab .direction=\${selectedDirection} node-width="fill">
                    \${array.map(item => html\` <f-tab-node
                                ?active=\${selected === item ? true : false}
                                content-id=\${\`tab-\${selectedDirection}-\${item}\`}
                                @click=\${() => handleChange(item)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab \${item}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >\`)}</f-tab
                >
                \${array.map(item => html\`
                    <f-tab-content id=\${\`tab-\${selectedDirection}-\${item}\`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab \${item}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>\`)}</f-div
            >
        \`;
  },
  name: "direction",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  }
}`,...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var L,D,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const array = [0, 1, 2];
    const [selected, setSelected] = useState(0);
    const handleChange = id => {
      setSelected(id);
    };
    const [selectedWidth, setSelectedWidth] = useState("fill");
    return html\`
            <f-button
                label="fill"
                ?disabled=\${selectedWidth === "fill"}
                @click=\${() => setSelectedWidth("fill")}
            ></f-button>
            <f-button
                label="hug-content"
                ?disabled=\${selectedWidth === "hug-content"}
                @click=\${() => setSelectedWidth("hug-content")}
            ></f-button>
            <f-button
                label="300px"
                ?disabled=\${selectedWidth === "300"}
                @click=\${() => setSelectedWidth("300")}
            ></f-button>
            <f-spacer></f-spacer>
            <f-div direction="column" height="fill-container" overflow="visible">
                <f-tab node-width=\${selectedWidth}>
                    \${array.map(item => html\` <f-tab-node
                                ?active=\${selected === item ? true : false}
                                content-id=\${\`tab-\${selectedWidth}-\${item}\`}
                                @click=\${() => handleChange(item)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab \${item}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >\`)}</f-tab
                >
                \${array.map(item => html\`
                    <f-tab-content id=\${\`tab-\${selectedWidth}-\${item}\`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab \${item}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>\`)}</f-div
            >
        \`;
  },
  name: "node-width",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  }
}`,...(z=(D=u.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,T,C;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const array = [0, 1, 2];
    const [selected, setSelected] = useState(0);
    const handleChange = id => {
      setSelected(id);
    };
    const [selectedDirection, setSelectedDirection] = useState("horizontal");
    const [selectedAlignment, setSelectedAlignment] = useState("left");
    return html\`
            <f-div>
                <f-button
                    label="horizontal"
                    ?disabled=\${selectedDirection === "horizontal"}
                    @click=\${() => setSelectedDirection("horizontal")}
                ></f-button>
                <f-button
                    label="vertical"
                    ?disabled=\${selectedDirection === "vertical"}
                    @click=\${() => setSelectedDirection("vertical")}
                ></f-button>
            </f-div>
            <f-spacer></f-spacer>
            \${selectedDirection === "horizontal" ? html\` <f-button
                            label="left"
                            ?disabled=\${selectedAlignment === "left"}
                            @click=\${() => setSelectedAlignment("left")}
                        ></f-button>
                        <f-button
                            label="center"
                            ?disabled=\${selectedAlignment === "center"}
                            @click=\${() => setSelectedAlignment("center")}
                        ></f-button>
                        <f-button
                            label="right"
                            ?disabled=\${selectedAlignment === "right"}
                            @click=\${() => setSelectedAlignment("right")}
                        ></f-button>\` : html\` <f-button
                            label="top"
                            ?disabled=\${selectedAlignment === "top"}
                            @click=\${() => setSelectedAlignment("top")}
                        ></f-button>
                        <f-button
                            label="middle"
                            ?disabled=\${selectedAlignment === "middle"}
                            @click=\${() => setSelectedAlignment("middle")}
                        ></f-button>
                        <f-button
                            label="bottom"
                            ?disabled=\${selectedAlignment === "bottom"}
                            @click=\${() => setSelectedAlignment("bottom")}
                        ></f-button>\`}
            <f-spacer></f-spacer>
            <f-div
                direction=\${selectedDirection === "vertical" ? "row" : "column"}
                .height=\${selectedDirection === "vertical" ? "100%" : "fill-container"}
                overflow="visible"
            >
                <f-tab .alignment=\${selectedAlignment} .direction=\${selectedDirection}>
                    \${array.map(item => html\` <f-tab-node
                                ?active=\${selected === item ? true : false}
                                content-id=\${\`tab-\${selectedAlignment}-\${item}\`}
                                @click=\${() => handleChange(item)}
                                ><f-div width="100%" height="100%" align="middle-center" direction="column"
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Tab \${item}</f-div
                                    ><f-div align="middle-center" height="hug-content" width="hug-content"
                                        >Description</f-div
                                    ></f-div
                                ></f-tab-node
                            >\`)}</f-tab
                >
                \${array.map(item => html\`
                    <f-tab-content id=\${\`tab-\${selectedAlignment}-\${item}\`}
                      ><f-div direction="column" width="100%" padding="large"
                        ><f-div
                          ><f-text variant="heading" size="x-large" weight="bold"
                            >Tab \${item}</f-text
                          ></f-div
                        >
                        <f-div>
                          <f-text
                            >Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.</f-text
                          ></f-div
                        ></f-div
                      ></f-tab-content
                    >
            </f-div>\`)}</f-div
            >
        \`;
  },
  name: "alignment",
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500
    }
  }
}`,...(C=(T=b.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const W=["Playground","Variant","Direction","NodeWidth","Alignment"],O=Object.freeze(Object.defineProperty({__proto__:null,Alignment:b,Direction:g,NodeWidth:u,Playground:h,Variant:m,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{b as A,g as D,O as F,u as N,h as P,m as V};
