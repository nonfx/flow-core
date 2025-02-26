import{x as f}from"./lit-html-BulfDIla.js";import{n as u,e as m}from"./ref-C9q2dBKz.js";import"./directive-helpers-CWXDk_SO.js";import"./directive-CJw_OlP2.js";const $={title:"@nonfx/flow-form-builder/Examples/Dynamic Validation Message",argTypes:{field:{control:!1}}},p="External Variable",c={field:{type:"object",direction:"vertical",fields:{username:{type:"text",validationRules:[{name:"required",message:(n,o)=>`${n} with  ${p}`}]},password:{type:"password"}}}},v=n=>{const o=e=>{e.stopPropagation(),e.stopImmediatePropagation()},t=m(),l=e=>{t.value&&(t.value.innerHTML=JSON.stringify(e.detail,void 0,8))},s=e=>{console.log(e),window.location.reload()};return f`
        <f-div padding="medium" dicrection="column" gap="large">
            <form style="width:500px">
                <f-form-builder
                    .field=${n.field}
                    .values=${n.values}
                    @keydown=${o}
                    @input=${l}
                    @submit="${s}"
                >
                    <f-div>
                        <f-button label="login" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </form>
            <f-div>
                <pre ${u(t)}>${JSON.stringify(n.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},i=v.bind({});i.args={field:c.field,values:{username:"",password:""}};var a,d,r;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
        <f-div padding="medium" dicrection="column" gap="large">
            <form style="width:500px">
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
            </form>
            <f-div>
                <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
            </f-div>
        </f-div>
    \`;
}`,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const h=["basic"];export{h as __namedExportsOrder,i as basic,$ as default};
