import{x as p}from"./lit-html-b1a28dc3.js";import{n as o,e as r}from"./ref-a55570ea.js";const g={title:"@nonfx/flow-form-builder/Examples/Validations",parameters:{controls:{hideNoControlsWarning:!0}}},a=e=>e.emailField==="vikas@nonfx.com",h=e=>(console.log("in custom validate",e),e==="vikas@nonfx.com"),b={type:"object",direction:"vertical",fieldSeparator:!0,label:{title:"Object level label",description:"following fields are used for demo purpose only"},fields:{emailField:{type:"email",label:{title:"Email field",description:"default validaiton should apply"},validationRules:[{name:"required"},{name:"custom",validate:h,message:"Custom validation failed"}]},urlField:{type:"url",label:{title:"URL field",description:"default validaiton should apply"},showWhen:a,validationRules:[{name:"required"}]},minMaxLength:{type:"text",label:{title:"Min and Max length check"},helperText:"Value must be least 3 character long and max 5 character long",showWhen:a,validationRules:[{name:"min",params:{length:3}},{name:"max",params:{length:5}},{name:"required"}]},minMaxValue:{type:"number",label:{title:"Min and Max value check"},helperText:"Value must be greater than 10 and less than 48",showWhen:a,validationRules:[{name:"min-value",params:{min:10}},{name:"max-value",params:{max:48}},{name:"required"}]},regexField:{type:"text",label:{title:"Regex to not allowing special charcters and spaces"},helperText:"Value must match /^[\\w&.-]+$/ regex",showWhen:a,validationRules:[{name:"regex",message:"Special charcters and spaces are not allowed",params:{regex:/^[\w&.-]+$/}},{name:"required"}]}}},n={render:e=>{const l=r(),i=r(),c=t=>{console.log("Submit event",t.detail),window.alert("event submit successfully")},m=t=>{l.value&&(l.value.textContent=JSON.stringify(t.detail,void 0,2)),console.log("input event",t.detail)},f=t=>{i.value&&(i.value.textContent=JSON.stringify(t.detail,void 0,2)),console.log("state change event",t.detail)},v=t=>{t.stopPropagation(),t.stopImmediatePropagation()};return p` <f-div padding="medium" gap="medium" height="100%" overflow="scroll">
            <f-form-builder
                .field=${e.field}
                .values=${e.values}
                .variant=${e.variant}
                .category=${e.category}
                .size=${e.size}
                .gap=${e.gap}
                .label=${{title:"Main form label"}}
                @submit=${c}
                @input=${m}
                @keydown=${v}
                @state-change=${f}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-divider></f-divider>
            <f-div width="400px" height="hug-content" direction="column" gap="small" overflow="scroll">
                <f-text>Values</f-text>
                <pre ${o(l)}>${JSON.stringify(e.values,void 0,8)}</pre>
                <f-divider></f-divider>
                <f-text size="large" weight="bold" state="secondary">Form State with silent errors</f-text>
                <pre ${o(i)}></pre>
            </f-div>
        </f-div>`},name:"Playground",argTypes:{field:{control:"object"},values:{control:"object"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},size:{control:"select",options:["medium","small"]},gap:{control:"select",options:["large","medium","small","x-small"]}},args:{field:b,values:{},variant:"curved",category:"fill",size:"medium",gap:"medium"}};var s,d,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    const fieldRef = createRef();
    const stateRef = createRef();
    const handleSubmit = (event: CustomEvent) => {
      console.log("Submit event", event.detail);
      window.alert("event submit successfully");
    };
    const handleInput = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
      console.log("input event", event.detail);
    };
    const handleStateChange = (event: CustomEvent) => {
      if (stateRef.value) {
        stateRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
      console.log("state change event", event.detail);
    };
    const handleKeydown = (event: CustomEvent) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
    return html\` <f-div padding="medium" gap="medium" height="100%" overflow="scroll">
            <f-form-builder
                .field=\${args.field}
                .values=\${args.values}
                .variant=\${args.variant}
                .category=\${args.category}
                .size=\${args.size}
                .gap=\${args.gap}
                .label=\${{
      title: "Main form label"
    }}
                @submit=\${handleSubmit}
                @input=\${handleInput}
                @keydown=\${handleKeydown}
                @state-change=\${handleStateChange}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-divider></f-divider>
            <f-div width="400px" height="hug-content" direction="column" gap="small" overflow="scroll">
                <f-text>Values</f-text>
                <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
                <f-divider></f-divider>
                <f-text size="large" weight="bold" state="secondary">Form State with silent errors</f-text>
                <pre \${ref(stateRef)}></pre>
            </f-div>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    field: {
      control: "object"
    },
    values: {
      control: "object"
    },
    variant: {
      control: "select",
      options: ["curved", "round", "block"]
    },
    category: {
      control: "select",
      options: ["fill", "transparent", "outline"]
    },
    size: {
      control: "select",
      options: ["medium", "small"]
    },
    gap: {
      control: "select",
      options: ["large", "medium", "small", "x-small"]
    }
  },
  args: {
    field,
    values: {},
    variant: "curved",
    category: "fill",
    size: "medium",
    gap: "medium"
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Playground"],w=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{n as P,w as V};
