import{x as u,e as f}from"./iframe-BdnCiKt2.js";import"./preload-helper-CTglmYes.js";const v={title:"@nonfx/flow-form-builder/Examples/Horiontal fields",argTypes:{field:{control:!1}}},p={field:{type:"object",fields:{cloudProvider:{type:"select",label:{title:"Cloud Provider"},validationRules:[{name:"required"}],options:[{title:"AWS",icon:"p-aws"},{title:"GCP",icon:"p-gcp"},{title:"Azure",icon:"p-azure"}]},text:{type:"text"},texta:{type:"textarea"},sugg:{type:"suggest",suggestions:["suggestion1","suggestion2","suggestion3"]},date:{type:"datetime"}}}},m=t=>{const d=e=>{e.stopPropagation(),e.stopImmediatePropagation()},o=f(),s=e=>{o.value&&(o.value.innerHTML=JSON.stringify(e.detail,void 0,8))},r=e=>{console.log(e),window.location.reload()};return u`
        <f-div padding="medium">
            <f-form-builder
                .field=${t.field}
                .values=${t.values}
                @keydown=${d}
                @input=${s}
                @submit="${r}"
            >
                <f-div>
                    <f-button label="login" type="submit"></f-button>
                </f-div>
            </f-form-builder>
        </f-div>
    `},n=m.bind({});n.args={field:p.field,values:{username:"",password:""}};var i,l,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => {
  const handleKeydown = (event: Event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
  };
  const fieldRef: Ref<HTMLElement> = createRef();
  const handleInput = (event: CustomEvent) => {
    if (fieldRef.value) {
      fieldRef.value.innerHTML = JSON.stringify(event.detail, undefined, 8);
    }
  };
  const handleSubmit = (event: CustomEvent) => {
    console.log(event);
    window.location.reload();
  };
  return html\`
        <f-div padding="medium">
            <f-form-builder
                .field=\${args.field}
                .values=\${args.values}
                @keydown=\${handleKeydown}
                @input=\${handleInput}
                @submit="\${handleSubmit}"
            >
                <f-div>
                    <f-button label="login" type="submit"></f-button>
                </f-div>
            </f-form-builder>
        </f-div>
    \`;
}`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const b=["basic"];export{b as __namedExportsOrder,n as basic,v as default};
