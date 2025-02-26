import{x as s}from"./lit-html-BulfDIla.js";import{n as f,e as u}from"./ref-C9q2dBKz.js";import"./directive-helpers-CWXDk_SO.js";import"./directive-CJw_OlP2.js";const b={title:"@nonfx/flow-form-builder/Examples/Array field",argTypes:{field:{control:!1}}},m={field:{type:"array",allowEmpty:!0,helperText:"Array help",label:{title:"Text array"},field:{type:"text"},validationRules:[{name:"custom",message:"Values must start with `array` prefix",validate:e=>e.every(n=>n.startsWith("array"))}]}},p=e=>{const r=a=>{a.stopPropagation(),a.stopImmediatePropagation()},n=u(),o=a=>{n.value&&(n.value.innerHTML=JSON.stringify(a.detail,void 0,8))};return s`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-form-builder
                .field=${e.field}
                .values=${e.values}
                @keydown=${r}
                @input=${o}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${f(n)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=p.bind({});t.args={field:m.field,values:["username1","username2"]};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => {
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
  return html\`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-form-builder
                .field=\${args.field}
                .values=\${args.values}
                @keydown=\${handleKeydown}
                @input=\${handleInput}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
            </f-div>
        </f-div>
    \`;
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const $=["basic"];export{$ as __namedExportsOrder,t as basic,b as default};
