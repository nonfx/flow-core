import{n as o,e as f,x as u}from"./iframe-BdnCiKt2.js";import"./preload-helper-CTglmYes.js";const y={title:"@nonfx/flow-form-builder/Examples/Array field",argTypes:{field:{control:!1}}},m={field:{type:"array",allowEmpty:!0,helperText:"Array help",label:{title:"Text array"},field:{type:"text"},validationRules:[{name:"custom",message:"Values must start with `array` prefix",validate:e=>e.every(n=>n.startsWith("array"))}]}},p=e=>{const r=a=>{a.stopPropagation(),a.stopImmediatePropagation()},n=f(),s=a=>{n.value&&(n.value.innerHTML=JSON.stringify(a.detail,void 0,8))};return u`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-form-builder
                .field=${e.field}
                .values=${e.values}
                @keydown=${r}
                @input=${s}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${o(n)}>${JSON.stringify(e.values,void 0,8)}</pre>
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const g=["basic"];export{g as __namedExportsOrder,t as basic,y as default};
