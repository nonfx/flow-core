import{x as i}from"./lit-html-b1a28dc3.js";import{f as me}from"./i-finput-anatomy-08dacfc4.js";import{o as ve}from"./unsafe-svg-e29b2cc0.js";const{useState:d}=__STORYBOOK_MODULE_PREVIEW_API__,ge={title:"@nonfx/flow-core/f-input",parameters:{controls:{hideNoControlsWarning:!0}}},o={render:e=>{const a=l=>{console.log(l.detail)};return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        .value=${e.value}
                        .variant=${e.variant}
                        .category=${e.category}
                        .placeholder=${e.placeholder}
                        data-qa-element-id="testId"
                        @input=${a}
                        .type=${e.type}
                        icon-left=${e["icon-left"]}
                        icon-right=${e["icon-right"]}
                        prefix=${e.prefix}
                        suffix=${e.suffix}
                        state=${e.state}
                        max-length=${e["max-length"]}
                        ?loading=${e.loading}
                        ?disabled=${e.disabled}
                        .clear=${e.clear}
                        ?read-only=${e.readOnly}
                        .size=${e.size}
                        autofocus
                        autocomplete="on"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"Playground",argTypes:{value:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},type:{control:"select",options:["text","number","email","password","url","tel"]},state:{control:"select",options:["default","success","primary","warning","danger"]},size:{control:"radio",options:["small","medium"]},"icon-left":{control:"text"},"icon-right":{control:"text"},prefix:{control:"text"},suffix:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},clear:{control:"boolean"},"max-length":{control:"text"}},args:{value:null,placeholder:"Enter your text here",variant:"round",category:"fill",type:"text",state:"default",size:"medium","icon-left":void 0,"icon-right":void 0,prefix:void 0,suffix:void 0,"max-length":void 0,loading:!1,disabled:!1,readOnly:!1,clear:!1}},s={render:()=>i`<div class="align-center">${ve(me)}</div>`,name:"Anatomy"},u={render:()=>{const e=["curved","round","block"],[a,l]=d(""),t=n=>{l(n.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(n=>i`<f-div>
          <f-input
            value=${a}
            placeholder="Write here"
            @input=${t}
            .variant=${n}
            size="medium"
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="${n}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
      <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
      <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
          </f-input></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"variant"},p={render:()=>{const e=["fill","outline","transparent"],[a,l]=d(""),t=n=>{l(n.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(n=>i`<f-div>
          <f-input
            value=${a}
            placeholder="Write here"
            @input=${t}
            .category=${n}
            size="medium"
            .variant=${n==="transparent"?"block":"curved"}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="${n}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"category"},f={render:()=>{const e=[["text","number","email"],["password","tel","url"]],[a,l]=d(""),t=n=>{l(n.detail.value)};return i`
            <f-div direction="column" gap="medium">
                ${e.map(n=>i` <f-div align="middle-center" padding="large" gap="medium">
                            ${n.map(r=>i`<f-div
                                        ><f-input
                                            value=${a}
                                            placeholder="Write here"
                                            @input=${t}
                                            type=${r}
                                            size="medium"
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (type="${r}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-input></f-div
                                    >`)}
                        </f-div>`)}
            </f-div>
        `},name:"type"},c={render:()=>{const[e,a]=d("Value Here");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input value=${e} placeholder="Write here" @input=${t=>{a(t.detail.value)}} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"value"},m={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="This is the placeholder"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"placeholder"},v={render:()=>{const e=["small","medium"],[a,l]=d(""),t=n=>{l(n.detail.value)};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${e.map(n=>i`<f-div>
          <f-input
            value=${a}
            placeholder="Write here"
            @input=${t}
            size=${n}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="${n}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"size"},g={render:()=>{const e=[["default","primary","success"],["danger","warning","default"]],[a,l]=d(""),t=n=>{l(n.detail.value)};return i`
            <f-div direction="column" gap="medium">
                ${e.map(n=>i` <f-div align="middle-center" padding="large" gap="medium">
                            ${n.map(r=>i`<f-div
                                        ><f-input
                                            value=${a}
                                            placeholder="Write here"
                                            @input=${t}
                                            size="medium"
                                            state=${r}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="${r}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-input></f-div
                                    >`)}
                        </f-div>`)}
            </f-div>
        `},name:"state"},h={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="Write here"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-left="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"icon-left"},x={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="Write here"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-right="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"icon-right"},$={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="Write here"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for prefix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"prefix"},b={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="Write here"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for suffix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"suffix"},V={render:()=>{const[e,a]=d("");return i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=${e}
                        placeholder="Write here"
                        @input=${t=>{a(t.detail.value)}}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        max-length="10"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        `},name:"max-length"},z={render:()=>{const[e,a]=d(""),l=n=>{a(n.detail.value)},t={0:"Loader",1:"Disabled",2:"Clear Icon on Type",3:"Readonly"};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${[0,1,2,3].map(n=>i`<f-div>
          <f-input
            value=${e}
            placeholder="Write here"
            @input=${l}
            size="medium"
            ?loading=${n===0}
            ?disabled=${n===1}
            ?clear=${n===2}
            ?read-only=${n===3}
          >
            <f-div slot="label" padding="none" gap="none">${t[n]}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"Flags"};var y,T,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleInput = (e: CustomEvent) => {
      console.log(e.detail);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        .value=\${args.value}
                        .variant=\${args.variant}
                        .category=\${args.category}
                        .placeholder=\${args.placeholder}
                        data-qa-element-id="testId"
                        @input=\${handleInput}
                        .type=\${args.type}
                        icon-left=\${args["icon-left"]}
                        icon-right=\${args["icon-right"]}
                        prefix=\${args["prefix"]}
                        suffix=\${args["suffix"]}
                        state=\${args.state}
                        max-length=\${args["max-length"]}
                        ?loading=\${args.loading}
                        ?disabled=\${args.disabled}
                        .clear=\${args.clear}
                        ?read-only=\${args.readOnly}
                        .size=\${args.size}
                        autofocus
                        autocomplete="on"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "Playground",
  argTypes: {
    value: {
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
    type: {
      control: "select",
      options: ["text", "number", "email", "password", "url", "tel"]
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
    }
  },
  args: {
    value: null,
    placeholder: "Enter your text here",
    variant: "round",
    category: "fill",
    type: "text",
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
    clear: false
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,L,H;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'{\n  render: () => html`<div class="align-center">${unsafeSVG(fInputAnatomy)}</div>`,\n  name: "Anatomy"\n}',...(H=(L=s.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var W,C,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const variants = ["curved", "round", "block"];
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${variants.map(item => html\`<f-div>
          <f-input
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            .variant=\${item}
            size="medium"
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
      <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
      <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
          </f-input></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "variant"
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,O,_;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const categories = ["fill", "outline", "transparent"];
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${categories.map(item => html\`<f-div>
          <f-input
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            .category=\${item}
            size="medium"
            .variant=\${item === "transparent" ? "block" : "curved"}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "category"
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var P,A,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const types = [["text", "number", "email"], ["password", "tel", "url"]];
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div direction="column" gap="medium">
                \${types.map(item => html\` <f-div align="middle-center" padding="large" gap="medium">
                            \${item.map(type => html\`<f-div
                                        ><f-input
                                            value=\${value}
                                            placeholder="Write here"
                                            @input=\${handleValue}
                                            type=\${type}
                                            size="medium"
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (type="\${type}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-input></f-div
                                    >\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "type"
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,D,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Value Here");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input value=\${value} placeholder="Write here" @input=\${handleValue} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "value"
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,q,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="This is the placeholder"
                        @input=\${handleValue}
                        size="medium"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "placeholder"
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var j,B,G;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["small", "medium"];
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${sizes.map(item => html\`<f-div>
          <f-input
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            size=\${item}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,U,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const states = [["default", "primary", "success"], ["danger", "warning", "default"]];
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div direction="column" gap="medium">
                \${states.map(item => html\` <f-div align="middle-center" padding="large" gap="medium">
                            \${item.map(state => html\`<f-div
                                        ><f-input
                                            value=\${value}
                                            placeholder="Write here"
                                            @input=\${handleValue}
                                            size="medium"
                                            state=\${state}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="\${state}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-input></f-div
                                    >\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-left="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "icon-left"
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for icon-right="i-app" prop</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "icon-right"
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,ie;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for prefix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "prefix"
}`,...(ie=(te=$.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,de,re;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for suffix</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "suffix"
}`,...(re=(de=b.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var oe,se,ue;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-input
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        icon-left="i-app"
                        icon-right="i-delete"
                        prefix="+91"
                        suffix="Delete"
                        max-length="10"
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-input></f-div
                ></f-div
            >
        \`;
  },
  name: "max-length"
}`,...(ue=(se=V.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var pe,fe,ce;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const handleValue = (e: CustomEvent) => {
      setValue(e.detail.value);
    };
    const flagNames: Record<number, string> = {
      0: "Loader",
      1: "Disabled",
      2: "Clear Icon on Type",
      3: "Readonly"
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${[0, 1, 2, 3].map(item => html\`<f-div>
          <f-input
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            size="medium"
            ?loading=\${item === 0}
            ?disabled=\${item === 1}
            ?clear=\${item === 2}
            ?read-only=\${item === 3}
          >
            <f-div slot="label" padding="none" gap="none">\${flagNames[item]}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-input></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "Flags"
}`,...(ce=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:ce.source}}};const he=["Playground","Anatomy","Variant","Category","Type","Value","Placeholder","Size","State","IconLeft","IconRight","Prefix","Suffix","MaxLength","Flags"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:s,Category:p,Flags:z,IconLeft:h,IconRight:x,MaxLength:V,Placeholder:m,Playground:o,Prefix:$,Size:v,State:g,Suffix:b,Type:f,Value:c,Variant:u,__namedExportsOrder:he,default:ge},Symbol.toStringTag,{value:"Module"}));export{s as A,p as C,Ve as F,h as I,V as M,o as P,v as S,f as T,u as V,c as a,m as b,g as c,x as d,$ as e,b as f,z as g};
