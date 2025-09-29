import{x as i,o as Se}from"./iframe-C5Wc31tw.js";import{f as fe}from"./i-finput-anatomy-DZtGO_DG.js";const pe={title:"@nonfx/flow-core/f-suggest",parameters:{controls:{hideNoControlsWarning:!0}}},s={render:e=>{const g=t=>{console.log(t.detail.value)},n=t=>{t.stopPropagation(),t.stopImmediatePropagation()};return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-suggest
                    value=${e.value}
                    .variant=${e.variant}
                    .category=${e.category}
                    .placeholder=${e.placeholder}
                    .suggestions=${e.suggestions}
                    @input=${g}
                    icon-left=${e["icon-left"]}
                    icon-right=${e["icon-right"]}
                    prefix=${e.prefix}
                    suffix=${e.suffix}
                    state=${e.state}
                    max-length=${e["max-length"]}
                    ?loading=${e.loading}
                    ?disabled=${e.disabled}
                    ?clear=${e.clear}
                    ?read-only=${e.readOnly}
                    .size=${e.size}
                    .optionsMaxHeight=${e["options-max-height"]}
                    @keydown=${n}
                >
                    <f-div slot="label" padding="none" gap="none">Label</f-div>
                    <f-div width="100%" slot="help"
                        ><f-text variant="para" size="small">This is a Subtext</f-text></f-div
                    >
                    <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
                    <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                    <f-div slot="no-data" padding="medium"><f-text>this is no-data slot.</f-text></f-div>
                </f-suggest>
            </f-div>
        `},name:"Playground",argTypes:{value:{control:"text"},slot:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},state:{control:"select",options:["default","success","primary","warning","danger"]},size:{control:"radio",options:["small","medium"]},"icon-left":{control:"text"},"icon-right":{control:"text"},prefix:{control:"text"},suffix:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},clear:{control:"boolean"},"max-length":{control:"text"},"options-max-height":{control:"text"}},args:{value:"",placeholder:"Enter your text here",variant:"round",category:"fill",state:"default",size:"medium","icon-left":void 0,"icon-right":void 0,prefix:void 0,suffix:void 0,"max-length":void 0,loading:!1,disabled:!1,readOnly:!1,clear:!1,suggestions:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis porta dignissim. Etiam a aliquam elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam hendrerit quis lorem cursus consectetur. Donec sem ipsum, scelerisque at nulla vel, rutrum efficitur tortor. Praesent eu tincidunt mauris. Nam eu aliquam turpis. Curabitur placerat maximus tempor. Donec non ante in nunc eleifend elementum eu quis lorem","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}},o={render:()=>i`<div class="align-center">${Se(fe)}</div>`,name:"Anatomy"},a={render:()=>{const e=["curved","round","block"],n=t=>{console.log(t.detail)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-suggest
            value=${""}
            placeholder="Write here"
            @input=${n}
            .variant=${t}
            size="medium"
      .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>

          </f-suggest></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"variant"},l={render:()=>{const e=["fill","outline","transparent"],n=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-suggest
            value=${""}
            placeholder="Write here"
            @input=${n}
            .category=${t}
            size="medium"
            .variant=${t==="transparent"?"block":"curved"}
      .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"category"},u={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"value"},d={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="This is the placeholder"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"placeholder"},r={render:()=>{const e=["small","medium"],n=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-suggest
            value=${""}
            placeholder="Write here"
            @input=${n}
            size=${t}
      .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"size"},S={render:()=>{const e=[["default","primary","success"],["danger","warning","default"]],n=t=>{console.log(t.detail.value)};return i`
            <f-div direction="column" gap="medium">
                ${e.map(t=>i` <f-div align="middle-center" padding="large" gap="medium">
                            ${t.map($=>i`<f-div
                                        ><f-suggest
                                            value=${""}
                                            placeholder="Write here"
                                            @input=${n}
                                            size="medium"
                                            state=${$}
                                            .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="${$}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-suggest></f-div
                                    >`)}
                        </f-div>`)}
            </f-div>
        `},name:"state"},f={render:()=>{const g=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                <f-div align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${g}
                        size="medium"
                        .suggestions=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for array search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
                <f-div align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${g}
                        size="medium"
                        .suggestions=${{Category1:["option 1","option2"],Category2:["option3","option 4"],Category3:["option5","option6"]}}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for categorized search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
                <f-div align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${g}
                        size="medium"
                        .suggestions=${[{value:"Hello",template:function(t){return i`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=${t}>${this.value}</f-text
                        ><f-text inline highlight=${t}>subtitle</f-text></f-div
                    >`},toString:function(){return"Hello"}},{value:"Hello123",template:function(t){return i`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=${t}>${this.value}</f-text
                        ><f-text inline highlight=${t}>subtitle</f-text></f-div
                    >`},toString:function(){return"Hello123"}}]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for custom template search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
            </f-div>
        `},name:"suggestions"},p={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-left="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"icon-left"},c={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-right="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"icon-right"},v={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for prefix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"prefix"},m={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for suffix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"suffix"},h={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        max-length="10"
                        .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        `,name:"max-length"},x={render:()=>{const g=n=>{console.log(n.detail.value)};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${[0,1,2,3].map(n=>i`<f-div>
          <f-suggest
            value=${""}
            placeholder="Write here"
            @input=${g}
            size="medium"
            ?loading=${n===0}
            ?disabled=${n===1}
            ?clear=${n===2}
            ?read-only=${n===3}
      .suggestions=${["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">${n===0?"Loader":n===1?"Disabled":n===2?"Clear Icon on Type":"Readonly"}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"Flags"};var b,z,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleInput = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    const handleKeydown = (event: CustomEvent) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-suggest
                    value=\${args.value}
                    .variant=\${args.variant}
                    .category=\${args.category}
                    .placeholder=\${args.placeholder}
                    .suggestions=\${args.suggestions}
                    @input=\${handleInput}
                    icon-left=\${args["icon-left"]}
                    icon-right=\${args["icon-right"]}
                    prefix=\${args["prefix"]}
                    suffix=\${args["suffix"]}
                    state=\${args.state}
                    max-length=\${args["max-length"]}
                    ?loading=\${args.loading}
                    ?disabled=\${args.disabled}
                    ?clear=\${args.clear}
                    ?read-only=\${args.readOnly}
                    .size=\${args.size}
                    .optionsMaxHeight=\${args["options-max-height"]}
                    @keydown=\${handleKeydown}
                >
                    <f-div slot="label" padding="none" gap="none">Label</f-div>
                    <f-div width="100%" slot="help"
                        ><f-text variant="para" size="small">This is a Subtext</f-text></f-div
                    >
                    <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
                    <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                    <f-div slot="no-data" padding="medium"><f-text>this is no-data slot.</f-text></f-div>
                </f-suggest>
            </f-div>
        \`;
  },
  name: "Playground",
  argTypes: {
    value: {
      control: "text"
    },
    slot: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    variant: {
      control: "select",
      options: ["curved", "round", "block"]
    },
    category: {
      control: "select",
      options: ["fill", "transparent", "outline"]
    },
    state: {
      control: "select",
      options: ["default", "success", "primary", "warning", "danger"]
    },
    size: {
      control: "radio",
      options: ["small", "medium"]
    },
    ["icon-left"]: {
      control: "text"
    },
    ["icon-right"]: {
      control: "text"
    },
    ["prefix"]: {
      control: "text"
    },
    ["suffix"]: {
      control: "text"
    },
    loading: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    },
    clear: {
      control: "boolean"
    },
    ["max-length"]: {
      control: "text"
    },
    ["options-max-height"]: {
      control: "text"
    }
  },
  args: {
    value: "",
    placeholder: "Enter your text here",
    variant: "round",
    category: "fill",
    state: "default",
    size: "medium",
    ["icon-left"]: undefined,
    ["icon-right"]: undefined,
    ["prefix"]: undefined,
    ["suffix"]: undefined,
    ["max-length"]: undefined,
    loading: false,
    disabled: false,
    readOnly: false,
    clear: false,
    suggestions: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis porta dignissim. Etiam a aliquam elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam hendrerit quis lorem cursus consectetur. Donec sem ipsum, scelerisque at nulla vel, rutrum efficitur tortor. Praesent eu tincidunt mauris. Nam eu aliquam turpis. Curabitur placerat maximus tempor. Donec non ante in nunc eleifend elementum eu quis lorem", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]
  }
}`,...(T=(z=s.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var y,V,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:'{\n  render: () => html`<div class="align-center">${unsafeSVG(fInputAnatomy)}</div>`,\n  name: "Anatomy"\n}',...(w=(V=o.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var H,L,C;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const variants = ["curved", "round", "block"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${variants.map(item => html\`<f-div>
          <f-suggest
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            .variant=\${item}
            size="medium"
      .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>

          </f-suggest></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "variant"
}`,...(C=(L=a.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var W,E,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const categories = ["fill", "outline", "transparent"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${categories.map(item => html\`<f-div>
          <f-suggest
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            .category=\${item}
            size="medium"
            .variant=\${item === "transparent" ? "block" : "curved"}
      .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "category"
}`,...(q=(E=l.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var P,I,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "value"
}`,...(O=(I=u.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var D,k,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="This is the placeholder"
                        @input=\${handleValue}
                        size="medium"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "placeholder"
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,F,M;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["small", "medium"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${sizes.map(item => html\`<f-div>
          <f-suggest
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            size=\${item}
      .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(M=(F=r.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,K,N;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const states = [["default", "primary", "success"], ["danger", "warning", "default"]];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div direction="column" gap="medium">
                \${states.map(item => html\` <f-div align="middle-center" padding="large" gap="medium">
                            \${item.map(state => html\`<f-div
                                        ><f-suggest
                                            value=\${value}
                                            placeholder="Write here"
                                            @input=\${handleValue}
                                            size="medium"
                                            state=\${state}
                                            .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="\${state}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-suggest></f-div
                                    >\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(N=(K=S.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var j,G,B;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    const template = [{
      value: "Hello",
      template: function (value: string) {
        return html\`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=\${value}>\${this.value}</f-text
                        ><f-text inline highlight=\${value}>subtitle</f-text></f-div
                    >\`;
      },
      toString: function () {
        return "Hello";
      }
    }, {
      value: "Hello123",
      template: function (value: string) {
        return html\`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=\${value}>\${this.value}</f-text
                        ><f-text inline highlight=\${value}>subtitle</f-text></f-div
                    >\`;
      },
      toString: function () {
        return "Hello123";
      }
    }];
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                <f-div align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .suggestions=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for array search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
                <f-div align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .suggestions=\${{
      Category1: ["option 1", "option2"],
      Category2: ["option3", "option 4"],
      Category3: ["option5", "option6"]
    }}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for categorized search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
                <f-div align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .suggestions=\${template}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for custom template search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                >
            </f-div>
        \`;
  },
  name: "suggestions"
}`,...(B=(G=f.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var J,Q,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-left="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "icon-left"
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-right="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "icon-right"
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for prefix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "prefix"
}`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,ge,se;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for suffix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "suffix"
}`,...(se=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:se.source}}};var oe,ae,le;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-suggest
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        max-length="10"
                        .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-suggest></f-div
                ></f-div
            >
        \`;
  },
  name: "max-length"
}`,...(le=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ue,de,re;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${[0, 1, 2, 3].map(item => html\`<f-div>
          <f-suggest
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            size="medium"
            ?loading=\${item === 0 ? true : false}
            ?disabled=\${item === 1 ? true : false}
            ?clear=\${item === 2 ? true : false}
            ?read-only=\${item === 3 ? true : false}
      .suggestions=\${["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">\${item === 0 ? "Loader" : item === 1 ? "Disabled" : item === 2 ? "Clear Icon on Type" : "Readonly"}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-suggest></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "Flags"
}`,...(re=(de=x.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};const ce=["Playground","Anatomy","Variant","Category","Value","Placeholder","Size","State","Suggestions","IconLeft","IconRight","Prefix","Suffix","MaxLength","Flags"],he=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:o,Category:l,Flags:x,IconLeft:p,IconRight:c,MaxLength:h,Placeholder:d,Playground:s,Prefix:v,Size:r,State:S,Suffix:m,Suggestions:f,Value:u,Variant:a,__namedExportsOrder:ce,default:pe},Symbol.toStringTag,{value:"Module"}));export{o as A,l as C,he as F,p as I,h as M,s as P,r as S,a as V,u as a,d as b,S as c,f as d,c as e,v as f,m as g,x as h};
