import{x as n}from"./lit-html-BulfDIla.js";import"./lit-element-3mBpJhh8.js";import{n as s,e as r}from"./ref-C9q2dBKz.js";import{u as h,a as b}from"./chunk-2WNKQWTL-cTwTzLwY.js";const v=()=>alert("test called"),y=()=>alert("Lucky function called"),x={type:"object",direction:"vertical",fieldSeparator:!1,label:{title:"Object level label",description:"following fields are used for demo purpose only"},fields:{paymentInfo:{type:"object",fields:{cardNumber:{type:"number",validationRules:[{name:"max-value",params:{max:5}}]},color:{type:"color",label:{title:"Color"}}}},hiddenField:{type:"hidden",qaId:"hiddenQA"},orgDetails:{type:"object",fields:{name:{qaId:"org",label:{title:"Org name",subTitle:n`<f-text size="small">
							<a href="#" @click=${y}>I'm Feeling Lucky</a>
						</f-text>`},type:"text",validationRules:[{name:"required",message:"{{name}} field is compulsary gshdg sdghsd ghsd ghsf sggsgfjhgs sgfgsjfh dgfhgdfh dfhgdfh dhfghdgf ghdgfhdf ghgdfhdgf ghdgfhdgfh gdhfghdfgh"},{name:"custom",validate:async function(e,t){return(t==null?void 0:t.element).loading=!0,await new Promise(l=>setTimeout(l,5e3)),(t==null?void 0:t.element).loading=!1,!1},message:"{{value}} already present"}],helperText:"Test",autofocus:!0,state:"success",suffix:"suggested"},logo:{label:{title:"Logo"},type:"emoji",clear:!0}}},selectBox:{qaId:"selectQa",label:{title:"Select multiple option to test"},options:["option 1","option 2","option 3"],type:"select",placeholder:"This is a placeholder",selection:"multiple",disabled:!1,searchable:!0,clear:!1,createOption:!0,onInput(e){console.log(e)},validationRules:[{name:"required"}],helperText:n`<f-text size="small" state="secondary"
				>Testing&nbsp;<a href="#" @click=${v}> link</a>&nbsp;inside text.</f-text
			>`},mySeparator:{type:"separator",title:"OR"},singleSelect:{qaId:"singleSelectQa",label:{title:"Select option from dropdown",description:"Here is another description"},selection:"multiple",options:[{title:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a m"},{title:"Second"},{title:"Third",disabled:!0}],type:"select",placeholder:"This is a placeholder",loading:!1,validationRules:[{name:"required"}],optionTemplate:function(e){return e=e,n`<f-div align="middle-left" padding="small" gap="small"> <f-pictogram source="i-plus" size="small"></f-pictogram><f-text ellipsis
				>${e.title}</f-tag></f-div>`}},textField:{qaId:"sampleQAId",label:{title:"Test for QA field",description:"Hello description",iconTooltip:"Tooltip QA help"},type:"text",helperText:"This field is a required field",suffix:"recommended",suffixWhen:e=>e==="vikas",showWhen:e=>{var t;return((t=e==null?void 0:e.orgDetails)==null?void 0:t.name)==="vikas"},validationRules:[{name:"required"}]},eventTestField:{qaId:"eventTestQa",type:"number",helperText:"This field is a required field",validationRules:[{name:"required"}],showWhen:e=>(e==null?void 0:e.textField)==="vikas",onClick:e=>{console.log("onClick callback triggered",e)},onInput:e=>{console.log("onInput callback triggered",e)},onFocus:e=>{console.log("onFocus callback triggered",e)},onKeyPress:e=>{console.log("onKeyPress callback triggered",e)},onKeyDown:e=>{console.log("onKeyDown callback triggered",e)},onKeyUp:e=>{console.log("onKeyUp callback triggered",e)},onMouseOver:e=>{console.log("onMouseOver callback triggered",e)}},switchButton:{qaId:"switchQA",type:"switchButton",validationRules:[{name:"required"}]},radio:{qaId:"radioQA",type:"radio",disabled:!1,label:{title:n`<f-text state="warning" weight="bold">Radios</f-text>`,subTitle:"Optional",iconTooltip:{text:"Test Radio tooltip",closable:!0,placement:"right"}},helperText:n`<f-text size="small" state="subtle">Checking helper text</f-text>`,options:[{id:"or",title:n` <f-div gap="small">
						<f-text size="medium">Terraform Variable</f-text>
						<f-tag size="small" label="TF" state="custom, #924AEE"> </f-tag
					></f-div>`,iconTooltip:"hello",subTitle:"Fruit"},{id:"banannaId",title:n`<f-div gap="small"
						><f-text size="medium">Environment Variable</f-text>
						<f-tag size="small" label="Env" state="custom, #008272"></f-tag
					></f-div>`,iconTooltip:"hello",description:"Check if you like Banana"},{id:"disabledRadio",title:n`<f-div gap="small"
						><f-text size="medium">Disabled Variable</f-text>
						<f-tag size="small" label="Env" state="custom, orange"></f-tag
					></f-div>`,iconTooltip:"This is disabled",description:"You can't select this",disabled:!0}],validationRules:[{name:"required"}]},checkboxField:{qaId:"checkboxQA",type:"checkbox",direction:"horizontal",disabled:!1,label:{title:"Check/Uncheck options",subTitle:"this my checkbox"},helperText:n`<f-text size="small" state="subtle">Checking helper text</f-text>`,options:[{id:"or",title:"Orange",iconTooltip:"hello",description:"Orange has Vitamin C"},{id:"banannaId",iconTooltip:"hello",subTitle:"Fruit"},{id:"disabled",iconTooltip:"This is disabled",subTitle:"Disabled",disabled:!0}],validationRules:[{name:"required"}]},textAreaField:{qaId:"textAreaQA",label:{title:"I am textarea",description:"This is my decription",iconTooltip:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},type:"textarea",placeholder:"This is a placeholder",maxLength:100,disabled:!1,readonly:!1,clear:!0,validationRules:[{name:"required"}]},dateTimeField:{type:"datetime",label:{title:"This is date time field"},validationRules:[{name:"required"}]},nestedObject:{type:"object",fields:{username:{qaId:"nestedUsernameQA",type:"number",placeholder:"Numbers only",validationRules:[{name:"required"}],label:{title:"Username"}},email:{qaId:"emailQA",type:"text",validationRules:[{name:"required"},{name:"email"}]}}},nestedArray:{type:"array",allowEmpty:!0,label:{title:"Optional Array",description:"Description of array"},field:{qaId:"nestedArrayText",type:"text",validationRules:[{name:"required",message:"this isn hasjhgd  dghgsd sd ghds sdghgghgsd ghsgdhsd tsgdytsds sdtytsd sdtytsd sdtytd sdgsdgysd"}]}},buttons:{type:"object",direction:"horizontal",fields:{getButton:{qaId:"getButtonQA",type:"button",label:"get",iconLeft:"i-arrow-rotate"},transparentButton:{type:"button",label:"add description",iconLeft:"i-plus",category:"transparent",size:"small"},testButton:{type:"object",direction:"horizontal",fields:{innerButton:{qaId:"testButtonQA",type:"button",label:"Custom State",variant:"curved",category:"outline",size:"small",iconLeft:"i-crown",state:"custom, orange"}}}}},iconButtons:{type:"object",direction:"horizontal",fields:{fillIconButton:{type:"icon-button",icon:"i-plus",size:"small"},outlinedIconButton:{type:"icon-button",icon:"i-plus",category:"outline",size:"small"},packedIconButton:{type:"icon-button",icon:"i-plus",category:"transparent",size:"small"}}},uploadFiles:{qaId:"uploadFilesQA",label:{title:"Files to upload",subTitle:"Select any file from native os file browser"},type:"file",multiple:!0},suggestValues:{qaId:"suggestQA",type:"suggest",label:{title:"Click inside field to see suggestions",description:"Select suggestion to fill value"},optionsMaxHeight:"100px",suggestWhen:()=>!0,suggestions:["Suggestion 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis vitae turpis sit amet vehicula. Mauris leo nulla, venenatis vel ullamcorper vel, scelerisque at sem. Donec venenatis nisl in eros consequat, vitae condimentum odio gravida.","Suggestion 3","Mauris efficitur tincidunt viverra. Praesent est velit, tincidunt ut ullamcorper et, commodo sed nibh. Fusce iaculis libero non arcu imperdiet laoreet. Phasellus vitae tortor vestibulum, interdum sem sit amet, semper risus. Pellentesque risus mauris, venenatis ut nunc non, lobortis venenatis nibh."]}}},T={title:"@nonfx/flow-form-builder/f-form-builder",parameters:{controls:{hideNoControlsWarning:!0}}},o={render:e=>{h(),b({});const t=r(),l=r(),a=r(),f=i=>{console.log("Submit event",i.detail),window.alert("event submit successfully")},m=i=>{t.value&&(t.value.textContent=JSON.stringify(i.detail,void 0,2)),a.value&&(a.value.values=i.detail),console.log("input event",i.detail)},p=i=>{l.value&&(l.value.textContent=JSON.stringify(i.detail,void 0,2)),console.log("state change event",i.detail)},g=i=>{i.stopPropagation(),i.stopImmediatePropagation()};return n`<f-div padding="medium" gap="medium" height="100%" overflow="scroll">
            <f-div>
                <f-form-builder
                    ${s(a)}
                    .field=${e.field}
                    .values=${e.values}
                    .variant=${e.variant}
                    .category=${e.category}
                    .size=${e.size}
                    .gap=${e.gap}
                    .label=${{title:"Form label",description:"Description about form",iconTooltip:"Form more info"}}
                    @submit=${f}
                    @input=${m}
                    @keydown=${g}
                    @state-change=${p}
                >
                    <f-div>
                        <f-button label="submit" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </f-div>
            <f-divider></f-divider>
            <f-div width="400px" height="hug-content" direction="column" gap="small" overflow="scroll">
                <f-text>Values</f-text>
                <pre ${s(t)}>${JSON.stringify(e.values,void 0,8)}</pre>
                <f-divider></f-divider>
                <f-text size="large" weight="bold" state="secondary">Form State with silent errors</f-text>
                <pre ${s(l)}></pre>
            </f-div>
        </f-div>`},name:"Playground",argTypes:{field:{control:"object"},values:{control:"object"},variant:{control:"select",options:["curved","round","block"]},category:{control:"select",options:["fill","transparent","outline"]},size:{control:"select",options:["medium","small"]},gap:{control:"select",options:["large","medium","small","x-small"]}},args:{field:x,values:{hiddenField:"IAmHidden",selectBox:["option 1"],nestedArray:[],orgDetails:{name:"par"}},variant:"curved",category:"fill",size:"medium",gap:"medium"}};var d,u,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [_, updateArgs] = useArgs();
    const [state, setState] = useState({});
    const fieldRef = createRef();
    const stateRef = createRef();
    const formRef = createRef();
    const handleSubmit = event => {
      console.log("Submit event", event.detail);
      window.alert("event submit successfully");
    };
    const handleInput = event => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
      if (formRef.value) {
        formRef.value.values = event.detail;
      }
      console.log("input event", event.detail);
    };
    const handleStateChange = event => {
      if (stateRef.value) {
        stateRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
      console.log("state change event", event.detail);
    };
    const handleKeydown = event => {
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
    return html\`<f-div padding="medium" gap="medium" height="100%" overflow="scroll">
            <f-div>
                <f-form-builder
                    \${ref(formRef)}
                    .field=\${args.field}
                    .values=\${args.values}
                    .variant=\${args.variant}
                    .category=\${args.category}
                    .size=\${args.size}
                    .gap=\${args.gap}
                    .label=\${{
      title: "Form label",
      description: "Description about form",
      iconTooltip: "Form more info"
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
            </f-div>
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
    values: {
      hiddenField: "IAmHidden",
      selectBox: ["option 1"],
      nestedArray: [],
      orgDetails: {
        name: "par"
      }
    },
    variant: "curved",
    category: "fill",
    size: "medium",
    gap: "medium"
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const w=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{S as F,o as P};
