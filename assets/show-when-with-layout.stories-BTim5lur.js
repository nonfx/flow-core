import{n as f,e as s,x as u}from"./iframe-CCyKNv7C.js";import"./preload-helper-D4nn9Y_6.js";const b={title:"@nonfx/flow-form-builder/Examples/Show When With Layout",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"vertical",label:{title:"Label left Layout fields"},fields:{first:{type:"text",label:{title:"First"},layout:"label-left"},second:{type:"text",label:{title:"Second"},layout:"label-left",showWhen(e){return console.log(e.first==="xyz"),e.first==="xyz"}},thirdWithIcon:{type:"object",label:{title:"Icon is added after field"},gap:"x-small",fields:{third:{type:"text",label:{title:"Third"},layout:"label-left"},icon:{type:"icon-button",icon:"i-close",category:"transparent",variant:"block",state:"neutral"}}}}}},c=e=>{const d=n=>{n.stopPropagation(),n.stopImmediatePropagation()},i=s(),r=n=>{i.value&&(i.value.innerHTML=JSON.stringify(n.detail,void 0,8))};return u`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=${e.field}
                .values=${e.values}
                @keydown=${d}
                @input=${r}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${f(i)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=c.bind({});t.args={field:p.field,values:{first:"Tony",second:"Stark"}};var l,a,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const y=["basic"];export{y as __namedExportsOrder,t as basic,b as default};
