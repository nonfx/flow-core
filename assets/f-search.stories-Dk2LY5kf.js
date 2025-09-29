import{x as i}from"./iframe-CCyKNv7C.js";const oe={title:"@nonfx/flow-core/f-search",parameters:{controls:{hideNoControlsWarning:!0}}},g={render:e=>{const s=t=>{console.log(t.detail)},n=t=>{console.log(t.detail)};return i`
            <f-div padding="large">
                <f-search
                    aria-label="Search Input"
                    .value=${e.value}
                    .selectedScope=${e["selected-scope"]}
                    .variant=${e.variant}
                    .category=${e.category}
                    .placeholder=${e.placeholder}
                    .result=${e.result}
                    .scope=${e.scope}
                    @input=${s}
                    .state=${e.state}
                    ?disabled=${e.disabled}
                    ?clear=${e.clear}
                    ?search-button=${e["search-button"]}
                    .size=${e.size}
                    .resultMaxHeight=${e["result-max-height"]}
                    @search=${n}
                >
                    <f-div slot="label" padding="none" gap="none">Label</f-div>
                    <f-div width="100%" slot="help"
                        ><f-text variant="para" size="small">This is a Subtext</f-text></f-div
                    >
                    <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
                    <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                </f-search>
            </f-div>
        `},name:"Playground",argTypes:{value:{control:"text"},"selected-scope":{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},state:{control:"select",options:["default","success","primary","warning","danger"]},size:{control:"radio",options:["small","medium"]},disabled:{control:"boolean"},clear:{control:"boolean"},"search-button":{control:"boolean"},"result-max-height":{control:"text"}},args:{value:"","selected-scope":"",placeholder:void 0,variant:"curved",category:"fill",state:"default",size:"medium",disabled:!1,clear:!1,"search-button":!1,result:{Category1:["option 1","option2"],Category2:["option3","option 4"],Category3:["option5","option6"]},scope:["Scope 2","Scope 3","Scope 4","Scope 5","Scope 6","Scope 7","Scope 8","Scope 9","Scope 10","Scope 11","Scope 12","Scope 13","Scope 14","Scope 15","Scope 16","Scope 17","Scope 18"]}},r={render:()=>{const e=["curved","round","block"],n=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-search
            value=${""}
            placeholder="Search"
            @input=${n}
            .variant=${t}
            size="medium"
      .result=${["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis porta dignissim. Etiam a aliquam elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam hendrerit quis lorem cursus consectetur. Donec sem ipsum, scelerisque at nulla vel, rutrum efficitur tortor. Praesent eu tincidunt mauris. Nam eu aliquam turpis. Curabitur placerat maximus tempor. Donec non ante in nunc eleifend elementum eu quis lorem","Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18","<f-text state='success'>Using markup</f-text>"]}
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"variant"},u={render:()=>{const e=["fill","outline","transparent"],n=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-search
            value=${""}
            placeholder="Search"
            @input=${n}
            .category=${t}
            size="medium"
            .variant=${t==="transparent"?"block":"curved"}
      .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18","<f-text state='success'>Using markup</f-text>"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"category"},d={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${"Suggestion 2"}
                        placeholder="Search"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        `,name:"value"},c={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${""}
                        @input=${n=>{console.log(n.detail.value)}}
                        placeholder="Search Here"
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        `,name:"placeholder"},p={render:()=>{const e=["small","medium"],n=t=>{console.log(t.detail.value)};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${e.map(t=>i`<f-div>
          <f-search
            value=${""}
            @input=${n}
            size=${t}
      .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="${t}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"size"},S={render:()=>{const e=[["default","primary","success"],["danger","warning","default"]],n=t=>{console.log(t.detail.value)};return i`
            <f-div direction="column" gap="medium">
                ${e.map(t=>i` <f-div align="middle-center" padding="large" gap="medium">
                            ${t.map(o=>i`<f-div
                                        ><f-search
                                            value=${""}
                                            @input=${n}
                                            size="medium"
                                            state=${o}
                                            .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="${o}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-search></f-div
                                    >`)}
                        </f-div>`)}
            </f-div>
        `},name:"state"},f={render:()=>{const e="jane",s=a=>{console.log("in input",a)};return i`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                <f-div align="middle-center">
                    <f-search
                        value=${e}
                        placeholder="Write here"
                        @input=${s}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                        .resultMaxHeight=${"150px"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for array search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                        <f-div slot="no-data" padding="medium">
                            <f-text variant="para" size="small">This is no-data slot.</f-text>
                        </f-div>
                    </f-search></f-div
                >
                <f-div align="middle-center">
                    <f-search
                        value=${e}
                        placeholder="Write here"
                        @input=${s}
                        size="medium"
                        .result=${{Category1:["option 1","option2"],Category2:["option3","option 4"],Category3:["option5","option6"]}}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for categorized search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                >
                <f-div align="middle-center">
                    <f-search
                        value=${e}
                        .resultWhen=${(a,l)=>(console.log("in result when"),l==="*"||l==="$"?!0:typeof a=="object"?a.toString().toLocaleLowerCase().includes((l==null?void 0:l.toLocaleLowerCase())??""):a.toLocaleLowerCase().includes((l==null?void 0:l.toLocaleLowerCase())??""))}
                        placeholder="Write here"
                        @input=${s}
                        size="medium"
                        .result=${[{value:{firstname:"henry",lastname:"jane"},template:function(a){return i`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=${a}
                            >${this.value.firstname} ${this.value.lastname}</f-text
                        ><f-text inline highlight=${a}>subtitle</f-text></f-div
                    >`},toString:function(){return this.value.firstname+" "+this.value.lastname}},{value:{firstname:"tony",lastname:"stark"},template:function(a){return i`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=${a}
                            >${this.value.firstname} ${this.value.lastname}</f-text
                        ><f-text inline highlight=${a}>subtitle</f-text></f-div
                    >`},toString:function(){return this.value.firstname+" "+this.value.lastname}}]}
                        @selected=${a=>{console.log("in selected",a)}}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for custom template search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                >
            </f-div>
        `},name:"result"},v={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                        .scope=${["scope 1","scope 2","scope 3"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for scope</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        `,name:"scope"},m={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                        .scope=${["scope 1","scope 2","scope 3"]}
                        .selectedScope=${"scope 2"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">'scope 2' is selected</f-div>
                        <f-text slot="help" variant="para" size="small"
                            >These 3 scopes are used above ["scope 1", "scope 2", "scope 3"]</f-text
                        >
                    </f-search></f-div
                ></f-div
            >
        `,name:"selected-scope"},h={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${""}
                        placeholder="Write here"
                        @input=${n=>{console.log(n.detail.value)}}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                        .resultMaxHeight=${"150px"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >'result-max-height' set to 150px</f-div
                        >
                        <f-text slot="help" variant="para" size="small"
                            >Click in search box to see results/suggestions</f-text
                        >
                    </f-search></f-div
                ></f-div
            >
        `,name:"result-max-height"},$={render:()=>i`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=${""}
                        placeholder="Write here"
                        @input=${t=>{console.log(t.detail.value)}}
                        size="medium"
                        .result=${["Suggestion 2","Suggestion 3","Suggestion 4","Suggestion 5","Suggestion 6","Suggestion 7","Suggestion 8","Suggestion 9","Suggestion 10","Suggestion 11","Suggestion 12","Suggestion 13","Suggestion 14","Suggestion 15","Suggestion 16","Suggestion 17","Suggestion 18"]}
                        .resultWhen=${(t,o)=>o==="*"?!0:t.toLocaleLowerCase().includes((o==null?void 0:o.toLocaleLowerCase())??"")}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >'result-when' is used to customised behavior of showing results. (By default, it will
                            employ the '.includes' method on each result for filtering and display.)</f-div
                        >
                        <f-div slot="help" width="100%" direction="column" gap="small">
                            <f-text variant="code" size="small"
                                >E.g. type '*' in search box to see all result
                            </f-text>
                            <f-div width="100%" state="subtle">
                                <pre style="outline:none !important;">
                            const resWhen: FSearchResultWhen = (suggestion, value) => {
                                if (value === "*") {
                                    return true;
                                }
                                return (suggestion as string).toLocaleLowerCase().includes(value?.toLocaleLowerCase() ?? "");
                            };
                            </pre
                                >
                            </f-div>
                        </f-div>
                    </f-search></f-div
                ></f-div
            >
        `,name:"result-when"},x={render:()=>{const s=n=>{console.log(n.detail.value)};return i`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                ${[0,1,2,3].map(n=>i`<f-div>
          <f-search
            value=${""}
            placeholder="Write here"
            @input=${s}
            size="medium"
            ?search-button=${n===0}
            ?disabled=${n===1}
            ?clear=${n===2}
      ?loading=${n===3}
          >
            <f-div slot="label" padding="none" gap="none">${n===0?"search-button":n===1?"Disabled":"Clear Icon on Type"}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >`)}
            </f-div>
        `},name:"Flags"};var b,z,w;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleInput = (e: CustomEvent) => {
      console.log(e.detail);
    };
    const handleSearch = (event: CustomEvent) => {
      console.log(event.detail);
    };
    return html\`
            <f-div padding="large">
                <f-search
                    aria-label="Search Input"
                    .value=\${args.value}
                    .selectedScope=\${args["selected-scope"]}
                    .variant=\${args.variant}
                    .category=\${args.category}
                    .placeholder=\${args.placeholder}
                    .result=\${args.result}
                    .scope=\${args.scope}
                    @input=\${handleInput}
                    .state=\${args.state}
                    ?disabled=\${args.disabled}
                    ?clear=\${args.clear}
                    ?search-button=\${args["search-button"]}
                    .size=\${args.size}
                    .resultMaxHeight=\${args["result-max-height"]}
                    @search=\${handleSearch}
                >
                    <f-div slot="label" padding="none" gap="none">Label</f-div>
                    <f-div width="100%" slot="help"
                        ><f-text variant="para" size="small">This is a Subtext</f-text></f-div
                    >
                    <f-text slot="subtitle" state="secondary" variant="para" size="small">Optional</f-text>
                    <f-icon slot="icon-tooltip" source="i-question-filled" tooltip="some info"></f-icon>
                </f-search>
            </f-div>
        \`;
  },
  name: "Playground",
  argTypes: {
    value: {
      control: "text"
    },
    ["selected-scope"]: {
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
    disabled: {
      control: "boolean"
    },
    clear: {
      control: "boolean"
    },
    ["search-button"]: {
      control: "boolean"
    },
    ["result-max-height"]: {
      control: "text"
    }
  },
  args: {
    value: "",
    ["selected-scope"]: "",
    placeholder: undefined,
    variant: "curved",
    category: "fill",
    state: "default",
    size: "medium",
    disabled: false,
    clear: false,
    ["search-button"]: false,
    result: {
      Category1: ["option 1", "option2"],
      Category2: ["option3", "option 4"],
      Category3: ["option5", "option6"]
    },
    scope: ["Scope 2", "Scope 3", "Scope 4", "Scope 5", "Scope 6", "Scope 7", "Scope 8", "Scope 9", "Scope 10", "Scope 11", "Scope 12", "Scope 13", "Scope 14", "Scope 15", "Scope 16", "Scope 17", "Scope 18"]
  }
}`,...(w=(z=g.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var T,y,L;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const variants = ["curved", "round", "block"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${variants.map(item => html\`<f-div>
          <f-search
            value=\${value}
            placeholder="Search"
            @input=\${handleValue}
            .variant=\${item}
            size="medium"
      .result=\${["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis porta dignissim. Etiam a aliquam elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam hendrerit quis lorem cursus consectetur. Donec sem ipsum, scelerisque at nulla vel, rutrum efficitur tortor. Praesent eu tincidunt mauris. Nam eu aliquam turpis. Curabitur placerat maximus tempor. Donec non ante in nunc eleifend elementum eu quis lorem", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18", "<f-text state='success'>Using markup</f-text>"]}
          >
             <f-div slot="label" padding="none" gap="none">Label (variant="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "variant"
}`,...(L=(y=r.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var C,V,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const categories = ["fill", "outline", "transparent"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                \${categories.map(item => html\`<f-div>
          <f-search
            value=\${value}
            placeholder="Search"
            @input=\${handleValue}
            .category=\${item}
            size="medium"
            .variant=\${item === "transparent" ? "block" : "curved"}
      .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18", "<f-text state='success'>Using markup</f-text>"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (category="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "category"
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,E,k;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const value = "Suggestion 2";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Search"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "value"
}`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var q,P,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        @input=\${handleValue}
                        placeholder="Search Here"
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "placeholder"
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,j,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["small", "medium"];
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${sizes.map(item => html\`<f-div>
          <f-search
            value=\${value}
            @input=\${handleValue}
            size=\${item}
      .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
          >
            <f-div slot="label" padding="none" gap="none">Label (size="\${item}")</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "size"
}`,...(R=(j=p.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var I,O,_;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
                                        ><f-search
                                            value=\${value}
                                            @input=\${handleValue}
                                            size="medium"
                                            state=\${state}
                                            .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                                        >
                                            <f-div slot="label" padding="none" gap="none">Label (state="\${state}")</f-div>
                                            <f-text slot="help" variant="para" size="small"
                                                >This is a Subtext (Helper Text)</f-text
                                            >
                                        </f-search></f-div
                                    >\`)}
                        </f-div>\`)}
            </f-div>
        \`;
  },
  name: "state"
}`,...(_=(O=S.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,U,N;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const value = "jane";
    const handleValue = (e: CustomEvent) => {
      console.log("in input", e);
    };
    const handleSelected = (e: CustomEvent) => {
      console.log("in selected", e);
    };
    const template = [{
      value: {
        firstname: "henry",
        lastname: "jane"
      },
      template: function (value: string) {
        return html\`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=\${value}
                            >\${this.value.firstname} \${this.value.lastname}</f-text
                        ><f-text inline highlight=\${value}>subtitle</f-text></f-div
                    >\`;
      },
      toString: function () {
        return this.value.firstname + " " + this.value.lastname;
      }
    }, {
      value: {
        firstname: "tony",
        lastname: "stark"
      },
      template: function (value: string) {
        return html\`<f-div gap="medium" direction="column"
                        ><f-text inline highlight=\${value}
                            >\${this.value.firstname} \${this.value.lastname}</f-text
                        ><f-text inline highlight=\${value}>subtitle</f-text></f-div
                    >\`;
      },
      toString: function () {
        return this.value.firstname + " " + this.value.lastname;
      }
    }];
    const resultWhen = (result: string | Record<string, unknown>, value: string) => {
      console.log("in result when");
      if (value === "*" || value === "$") {
        return true;
      } else if (typeof result === "object") {
        return result.toString().toLocaleLowerCase().includes(value?.toLocaleLowerCase() ?? "");
      }
      return (result as string).toLocaleLowerCase().includes(value?.toLocaleLowerCase() ?? "");
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large" gap="medium">
                <f-div align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                        .resultMaxHeight=\${"150px"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for array search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                        <f-div slot="no-data" padding="medium">
                            <f-text variant="para" size="small">This is no-data slot.</f-text>
                        </f-div>
                    </f-search></f-div
                >
                <f-div align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${{
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
                    </f-search></f-div
                >
                <f-div align="middle-center">
                    <f-search
                        value=\${value}
                        .resultWhen=\${resultWhen}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${template}
                        @selected=\${handleSelected}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >This is a demo for custom template search result</f-div
                        >
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                >
            </f-div>
        \`;
  },
  name: "result"
}`,...(N=(U=f.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var A,B,G;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                        .scope=\${["scope 1", "scope 2", "scope 3"]}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">This is a demo for scope</f-div>
                        <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "scope"
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                        .scope=\${["scope 1", "scope 2", "scope 3"]}
                        .selectedScope=\${"scope 2"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none">'scope 2' is selected</f-div>
                        <f-text slot="help" variant="para" size="small"
                            >These 3 scopes are used above ["scope 1", "scope 2", "scope 3"]</f-text
                        >
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "selected-scope"
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                        .resultMaxHeight=\${"150px"}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >'result-max-height' set to 150px</f-div
                        >
                        <f-text slot="help" variant="para" size="small"
                            >Click in search box to see results/suggestions</f-text
                        >
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "result-max-height"
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;$.parameters={...$.parameters,docs:{...(ee=$.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    const resWhen: FSearchResultWhen = (suggestion, value) => {
      if (value === "*") {
        return true;
      }
      return (suggestion as string).toLocaleLowerCase().includes(value?.toLocaleLowerCase() ?? "");
    };
    return html\`
            <f-div width="100%" align="middle-center" padding="large">
                <f-div width="80%" align="middle-center">
                    <f-search
                        value=\${value}
                        placeholder="Write here"
                        @input=\${handleValue}
                        size="medium"
                        .result=\${["Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6", "Suggestion 7", "Suggestion 8", "Suggestion 9", "Suggestion 10", "Suggestion 11", "Suggestion 12", "Suggestion 13", "Suggestion 14", "Suggestion 15", "Suggestion 16", "Suggestion 17", "Suggestion 18"]}
                        .resultWhen=\${resWhen}
                    >
                        <f-div slot="label" padding="none" gap="none">Label</f-div>
                        <f-div slot="description" padding="none" gap="none"
                            >'result-when' is used to customised behavior of showing results. (By default, it will
                            employ the '.includes' method on each result for filtering and display.)</f-div
                        >
                        <f-div slot="help" width="100%" direction="column" gap="small">
                            <f-text variant="code" size="small"
                                >E.g. type '*' in search box to see all result
                            </f-text>
                            <f-div width="100%" state="subtle">
                                <pre style="outline:none !important;">
                            const resWhen: FSearchResultWhen = (suggestion, value) => {
                                if (value === "*") {
                                    return true;
                                }
                                return (suggestion as string).toLocaleLowerCase().includes(value?.toLocaleLowerCase() ?? "");
                            };
                            </pre
                                >
                            </f-div>
                        </f-div>
                    </f-search></f-div
                ></f-div
            >
        \`;
  },
  name: "result-when"
}`,...(te=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,se,ae;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const value = "";
    const handleValue = (e: CustomEvent) => {
      console.log(e.detail.value);
    };
    return html\`
            <f-div width="100%" align="top-center" padding="large" gap="medium">
                \${[0, 1, 2, 3].map(item => html\`<f-div>
          <f-search
            value=\${value}
            placeholder="Write here"
            @input=\${handleValue}
            size="medium"
            ?search-button=\${item === 0 ? true : false}
            ?disabled=\${item === 1 ? true : false}
            ?clear=\${item === 2 ? true : false}
      ?loading=\${item === 3 ? true : false}
          >
            <f-div slot="label" padding="none" gap="none">\${item === 0 ? "search-button" : item === 1 ? "Disabled" : "Clear Icon on Type"}</f-div>
            <f-text slot="help" variant="para" size="small">This is a Subtext (Helper Text)</f-text>
          </f-search></f-div
        ></f-div
      >\`)}
            </f-div>
        \`;
  },
  name: "Flags"
}`,...(ae=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const le=["Playground","Variant","Category","Value","Placeholder","Size","State","Result","Scope","selectedScope","resultMaxHeight","resultWhen","Flags"],re=Object.freeze(Object.defineProperty({__proto__:null,Category:u,Flags:x,Placeholder:c,Playground:g,Result:f,Scope:v,Size:p,State:S,Value:d,Variant:r,__namedExportsOrder:le,default:oe,resultMaxHeight:h,resultWhen:$,selectedScope:m},Symbol.toStringTag,{value:"Module"}));export{u as C,re as F,g as P,f as R,p as S,r as V,d as a,c as b,S as c,v as d,x as e};
