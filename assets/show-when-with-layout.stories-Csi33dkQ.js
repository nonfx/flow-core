import{x as f}from"./lit-html-BulfDIla.js";import{n as s,e as u}from"./ref-C9q2dBKz.js";import"./directive-helpers-CWXDk_SO.js";import"./directive-CJw_OlP2.js";const g={title:"@nonfx/flow-form-builder/Examples/Show When With Layout",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"vertical",label:{title:"Label left Layout fields"},fields:{first:{type:"text",label:{title:"First"},layout:"label-left"},second:{type:"text",label:{title:"Second"},layout:"label-left",showWhen(e){return console.log(e.first==="xyz"),e.first==="xyz"}},thirdWithIcon:{type:"object",label:{title:"Icon is added after field"},gap:"x-small",fields:{third:{type:"text",label:{title:"Third"},layout:"label-left"},icon:{type:"icon-button",icon:"i-close",category:"transparent",variant:"block",state:"neutral"}}}}}},c=e=>{const r=n=>{n.stopPropagation(),n.stopImmediatePropagation()},i=u(),d=n=>{i.value&&(i.value.innerHTML=JSON.stringify(n.detail,void 0,8))};return f`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=${e.field}
                .values=${e.values}
                @keydown=${r}
                @input=${d}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${s(i)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=c.bind({});t.args={field:p.field,values:{first:"Tony",second:"Stark"}};var l,o,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["basic"];export{h as __namedExportsOrder,t as basic,g as default};
