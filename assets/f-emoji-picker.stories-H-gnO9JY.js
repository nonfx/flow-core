import{x as d}from"./iframe-Cd35n0SZ.js";const{useArgs:oe,useEffect:ue,useState:o}=__STORYBOOK_MODULE_PREVIEW_API__,re={title:"@nonfx/flow-core/f-emoji-picker",parameters:{controls:{hideNoControlsWarning:!0}}},r={render:e=>{const[n,t]=oe(),i=l=>{t({value:l.detail.value})};return d`
            <f-div width="100%" align="top-left" padding="large">
                <f-div width="hug-content" align="top-left">
                    <f-emoji-picker
                        aria-label="Emoji Picker"
                        .value=${e.value}
                        .state=${e.state}
                        .size=${e.size}
                        .placeholder=${e.placeholder}
                        .category=${e.category}
                        .variant=${e.variant}
                        .recent=${e.recent}
                        .include=${e.include}
                        .exclude=${e.exclude}
                        .exclude-emojis=${e["exclude-emojis"]}
                        .custom=${e.custom}
                        ?disabled=${e.disabled}
                        ?clear=${e.clear}
                        ?resizable=${e.resizable}
                        .close-on-select=${e["close-on-select"]}
                        @input=${i}
                    >
                        <f-text slot="label" variant="para" size="small">Label</f-text>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker>
                </f-div>
            </f-div>
        `},name:"Playground",argTypes:{value:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},state:{control:"select",options:["default","success","primary","warning","danger"]},size:{control:"radio",options:["small","medium"]},include:{control:"object"},exclude:{control:"object"},"exclude-emojis":{control:"object"},custom:{control:"object"},recent:{control:"object"},"close-on-select":{control:"boolean"},disabled:{control:"boolean"},clear:{control:"boolean"}},args:{value:void 0,placeholder:void 0,variant:"round",category:"fill",state:"default",size:"medium",recent:["office","compass","luggage","hourglass","gem","computer"],include:[],exclude:[],"exclude-emojis":[],custom:[{id:"github",name:"GitHub",emojis:[{id:"octocat",name:"Octocat",keywords:["github"],skins:[{src:"https://octodex.github.com/images/snowoctocat.png"}]}]}],disabled:!1,clear:!0,"close-on-select":!1}},s={render:e=>{const n=["curved","round","block"],[t,i]=o(""),l=a=>{i(a.detail.value)};return d`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${n.map(a=>d`<f-div width="hug-content">
      <f-emoji-picker
      value=${t}
            @input=${l}
            .variant=${a}
            size="medium"
            >
 <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>						</f-emoji-picker>
      </f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"variant"},c={render:e=>{const n=["fill","outline","transparent"],[t,i]=o(""),l=a=>{i(a.detail.value)};return d`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${n.map(a=>d`<f-div width="hug-content">
          <f-emoji-picker
            value=${t}
            @input=${l}
            .category=${a}
            size="medium"
            .variant=${a==="transparent"?"block":"curved"}
          >
 <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>
          </f-emoji-picker></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"category"},u={render:e=>{const[n,t]=o("⌛");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${l=>{t(l.detail.value)}} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"value"},m={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} placeholder="🧭" @input=${l=>{t(l.detail.value)}} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"placeholder"},p={render:e=>{const n=["small","medium"],[t,i]=o(""),l=a=>{i(a.detail.value)};return d`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${n.map(a=>d`<f-div width="hug-content">
          <f-emoji-picker
            value=${t}
            @input=${l}
            size=${a}
          >
           <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>
          </f-emoji-picker></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"size"},f={render:e=>{const n=[["default","primary","success"],["danger","warning","default"]],[t,i]=o(""),l=a=>{i(a.detail.value)};return d`
            <f-div direction="column" gap="medium">
                ${n.map(a=>d` <f-div align="middle-center" padding="large" gap="medium">
                            ${a.map(de=>d`<f-div width="hug-content"
                                        ><f-emoji-picker
                                            value=${t}
                                            @input=${l}
                                            size="medium"
                                            state=${de}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label</f-div>
                                            <f-text slot="help" variant="para" size="small">Help!</f-text>
                                        </f-emoji-picker></f-div
                                    >`)}
                        </f-div>`)}
            </f-div>
        `},name:"state"},v={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${a=>{t(a.detail.value)}} size="medium" .recent=${["office","compass","luggage","hourglass","gem","computer"]}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"recent"},g={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${a=>{t(a.detail.value)}} size="medium" .include=${["frequent","people","flags"]}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"include"},h={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${a=>{t(a.detail.value)}} size="medium" .exclude=${["people","foods"]}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"exclude"},b={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker
                        value=${n}
                        @input=${a=>{t(a.detail.value)}}
                        size="medium"
                        .exclude-emojis=${["office"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        `},name:"exclude-emojis"},x={render:e=>{const[n,t]=o("");return d`
            <f-div width="100%" align="middle-center" padding="large" direction="row">
                <f-div width="50%" align="middle-center">
                    <f-div width="hug-content" align="middle-center">
                        <f-emoji-picker value=${n} @input=${a=>{t(a.detail.value)}} size="medium" .custom=${[{id:"github",name:"GitHub",emojis:[{id:"octocat",name:"Octocat",keywords:["github"],skins:[{src:"https://octodex.github.com/images/snowoctocat.png"}]}]}]}>
                            <f-div slot="label" padding="none" gap="none">Label</f-div>
                            <f-text slot="help" variant="para" size="small">Help!</f-text>
                        </f-emoji-picker></f-div
                    >
                </f-div>
                <f-div state="subtle">
                    <f-text>
                        <pre>
  [{
  "id": "github",
  "name": "GitHub",
  "emojis":
  [
    {
      "id": "octocat",
      "name": "Octocat",
      "keywords": ["github"],
      "skins": [{"src":
      "https://octodex.github.com/images/snowoctocat.png"
      }]
    }
  ]
  }]
</pre
                        >
                    </f-text>
                </f-div>
            </f-div>
        `},name:"custom"},$={render:e=>{const[n,t]=o(""),i=l=>{t(l.detail.value)};return d` <f-div width="100%" align="middle-center" padding="large">
            <f-div direction="column">
                <f-text>disabled=true</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${i} size="medium" ?disabled=${!0}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
            <f-div direction="column">
                <f-text>clear=false</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=${n} @input=${i} size="medium" .clear=${!1}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
            <f-div direction="column">
                <f-text>close-on-select=true</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker
                        value=${n}
                        @input=${i}
                        size="medium"
                        .close-on-select=${!0}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
        </f-div>`},name:"Flags"};var j,V,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleInput = e => {
      updateArgs({
        value: e.detail.value
      });
    };
    return html\`
            <f-div width="100%" align="top-left" padding="large">
                <f-div width="hug-content" align="top-left">
                    <f-emoji-picker
                        aria-label="Emoji Picker"
                        .value=\${args.value}
                        .state=\${args.state}
                        .size=\${args.size}
                        .placeholder=\${args.placeholder}
                        .category=\${args.category}
                        .variant=\${args.variant}
                        .recent=\${args.recent}
                        .include=\${args.include}
                        .exclude=\${args.exclude}
                        .exclude-emojis=\${args["exclude-emojis"]}
                        .custom=\${args.custom}
                        ?disabled=\${args.disabled}
                        ?clear=\${args.clear}
                        ?resizable=\${args.resizable}
                        .close-on-select=\${args["close-on-select"]}
                        @input=\${handleInput}
                    >
                        <f-text slot="label" variant="para" size="small">Label</f-text>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker>
                </f-div>
            </f-div>
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
    state: {
      control: "select",
      options: ["default", "success", "primary", "warning", "danger"]
    },
    size: {
      control: "radio",
      options: ["small", "medium"]
    },
    include: {
      control: "object"
    },
    exclude: {
      control: "object"
    },
    ["exclude-emojis"]: {
      control: "object"
    },
    custom: {
      control: "object"
    },
    recent: {
      control: "object"
    },
    ["close-on-select"]: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    clear: {
      control: "boolean"
    }
  },
  args: {
    value: undefined,
    placeholder: undefined,
    variant: "round",
    category: "fill",
    state: "default",
    size: "medium",
    recent: ["office", "compass", "luggage", "hourglass", "gem", "computer"],
    include: [],
    exclude: [],
    ["exclude-emojis"]: [],
    custom: [{
      id: "github",
      name: "GitHub",
      emojis: [{
        id: "octocat",
        name: "Octocat",
        keywords: ["github"],
        skins: [{
          src: "https://octodex.github.com/images/snowoctocat.png"
        }]
      }]
    }],
    disabled: false,
    clear: true,
    ["close-on-select"]: false
  }
}`,...(k=(V=r.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var z,w,H;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const variants = ["curved", "round", "block"];
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${variants.map(item => html\`<f-div width="hug-content">
      <f-emoji-picker
      value=\${value}
            @input=\${handleValue}
            .variant=\${item}
            size="medium"
            >
 <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>						</f-emoji-picker>
      </f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "variant"
}`,...(H=(w=s.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var S,y,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const categories = ["fill", "outline", "transparent"];
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${categories.map(item => html\`<f-div width="hug-content">
          <f-emoji-picker
            value=\${value}
            @input=\${handleValue}
            .category=\${item}
            size="medium"
            .variant=\${item === "transparent" ? "block" : "curved"}
          >
 <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>
          </f-emoji-picker></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "category"
}`,...(L=(y=c.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var E,_,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("⌛");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "value"
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var O,I,A;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} placeholder="🧭" @input=\${handleValue} size="medium">
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "placeholder"
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var C,F,G;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const sizes = ["small", "medium"];
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${sizes.map(item => html\`<f-div width="hug-content">
          <f-emoji-picker
            value=\${value}
            @input=\${handleValue}
            size=\${item}
          >
           <f-div slot="label" padding="none" gap="none">Label</f-div>
            <f-text slot="help" variant="para" size="small">Help!</f-text>
          </f-emoji-picker></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var D,R,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const states = [["default", "primary", "success"], ["danger", "warning", "default"]];
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div direction="column" gap="medium">
                \${states.map(item => html\` <f-div align="middle-center" padding="large" gap="medium">
                            \${item.map(state => html\`<f-div width="hug-content"
                                        ><f-emoji-picker
                                            value=\${value}
                                            @input=\${handleValue}
                                            size="medium"
                                            state=\${state}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label</f-div>
                                            <f-text slot="help" variant="para" size="small">Help!</f-text>
                                        </f-emoji-picker></f-div
                                    >\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(T=(R=f.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,B,M;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const recent = ["office", "compass", "luggage", "hourglass", "gem", "computer"];
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" .recent=\${recent}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "recent"
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var W,K,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    const include = ["frequent", "people", "flags"];
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" .include=\${include}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "include"
}`,...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,Y,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    const exclude = ["people", "foods"];
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" .exclude=\${exclude}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "exclude"
}`,...(J=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    const excludeEmojis = ["office"];
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker
                        value=\${value}
                        @input=\${handleValue}
                        size="medium"
                        .exclude-emojis=\${excludeEmojis}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                ></f-div
            >
        \`;
  },
  name: "exclude-emojis"
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    const custom = [{
      id: "github",
      name: "GitHub",
      emojis: [{
        id: "octocat",
        name: "Octocat",
        keywords: ["github"],
        skins: [{
          src: "https://octodex.github.com/images/snowoctocat.png"
        }]
      }]
    }];
    return html\`
            <f-div width="100%" align="middle-center" padding="large" direction="row">
                <f-div width="50%" align="middle-center">
                    <f-div width="hug-content" align="middle-center">
                        <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" .custom=\${custom}>
                            <f-div slot="label" padding="none" gap="none">Label</f-div>
                            <f-text slot="help" variant="para" size="small">Help!</f-text>
                        </f-emoji-picker></f-div
                    >
                </f-div>
                <f-div state="subtle">
                    <f-text>
                        <pre>
  [{
  "id": "github",
  "name": "GitHub",
  "emojis":
  [
    {
      "id": "octocat",
      "name": "Octocat",
      "keywords": ["github"],
      "skins": [{"src":
      "https://octodex.github.com/images/snowoctocat.png"
      }]
    }
  ]
  }]
</pre
                        >
                    </f-text>
                </f-div>
            </f-div>
        \`;
  },
  name: "custom"
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,ie,le;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleValue = e => {
      setValue(e.detail.value);
    };
    return html\` <f-div width="100%" align="middle-center" padding="large">
            <f-div direction="column">
                <f-text>disabled=true</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" ?disabled=\${true}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
            <f-div direction="column">
                <f-text>clear=false</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker value=\${value} @input=\${handleValue} size="medium" .clear=\${false}>
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
            <f-div direction="column">
                <f-text>close-on-select=true</f-text>
                <f-div width="hug-content" align="middle-center">
                    <f-emoji-picker
                        value=\${value}
                        @input=\${handleValue}
                        size="medium"
                        .close-on-select=\${true}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">Help!</f-text>
                    </f-emoji-picker></f-div
                >
            </f-div>
        </f-div>\`;
  },
  name: "Flags"
}`,...(le=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const se=["Playground","Variant","Category","Value","Placeholder","Size","State","Recent","Include","Exclude","ExcludeEmojis","Custom","Flags"],me=Object.freeze(Object.defineProperty({__proto__:null,Category:c,Custom:x,Exclude:h,ExcludeEmojis:b,Flags:$,Include:g,Placeholder:m,Playground:r,Recent:v,Size:p,State:f,Value:u,Variant:s,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{c as C,h as E,me as F,g as I,r as P,v as R,p as S,s as V,u as a,m as b,f as c,b as d,x as e,$ as f};
