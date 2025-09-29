import{n as f,e as s,x as p}from"./iframe-CCyKNv7C.js";import"./preload-helper-D4nn9Y_6.js";const b={title:"@nonfx/flow-form-builder/Examples/Array with Object fields",argTypes:{field:{control:!1}}},u={field:{type:"array",allowEmpty:!0,label:{title:"Array of objects"},field:{type:"object",direction:"vertical",label:{title:"Object level title"},fields:{firstname:{type:"text",label:{title:"Test",description:"My description"}},lastname:{type:"text",helperText:"Lastname help"},email:{type:"text",helperText:"Email help"}}}}},m=n=>{const d=t=>{t.stopPropagation(),t.stopImmediatePropagation()},i=s(),o=t=>{i.value&&(i.value.innerHTML=JSON.stringify(t.detail,void 0,8))};return p`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=${n.field}
                .values=${n.values}
                @keydown=${d}
                @input=${o}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${f(i)}>${JSON.stringify(n.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},e=m.bind({});e.args={field:u.field,values:[{firstname:"Tony",lastname:"Stark"}]};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
        <f-div padding="medium" gap="large">
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
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const y=["basic"];export{y as __namedExportsOrder,e as basic,b as default};
