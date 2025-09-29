import{n as f,e as u,x as m}from"./iframe-C5Wc31tw.js";import"./preload-helper-D4nn9Y_6.js";const b={title:"@nonfx/flow-form-builder/Examples/Auto fill",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"vertical",fields:{username:{type:"text"},password:{type:"password"}}}},c=t=>{const a=e=>{e.stopPropagation(),e.stopImmediatePropagation()},i=u(),r=e=>{i.value&&(i.value.innerHTML=JSON.stringify(e.detail,void 0,8))},s=e=>{console.log(e),window.location.reload()};return m`
        <f-div padding="medium" dicrection="column" gap="large">
            <form style="width:500px">
                <f-form-builder
                    .field=${t.field}
                    .values=${t.values}
                    @keydown=${a}
                    @input=${r}
                    @submit="${s}"
                >
                    <f-div>
                        <f-button label="login" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </form>
            <f-div>
                <pre ${f(i)}>${JSON.stringify(t.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},n=c.bind({});n.args={field:p.field,values:{username:"",password:""}};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
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
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["basic"];export{y as __namedExportsOrder,n as basic,b as default};
