import{x as s}from"./lit-html-BulfDIla.js";import{n as p,e as m}from"./ref-C9q2dBKz.js";import{f as u}from"./chunk-KRMY7ATX-ZvXBKWTq.js";import"./directive-helpers-CWXDk_SO.js";import"./directive-CJw_OlP2.js";const R={title:"@nonfx/flow-form-builder/Examples/Select field search performance",argTypes:{field:{control:!1}}},f=[];for(let e=0;e<3e4;e++)f.push(`${e} - ${u.location.city()}`);const c={field:{type:"select",options:f,searchable:!0}},v=e=>{const a=i=>{i.stopPropagation(),i.stopImmediatePropagation()},t=m(),l=i=>{t.value&&(t.value.innerHTML=JSON.stringify(i.detail,void 0,8))};return s`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-div>
                <f-form-builder .field=${e.field} @keydown=${a} @input=${l}>
                    <f-div>
                        <f-button label="submit" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </f-div>
            <f-div>
                <pre ${p(t)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},n=v.bind({});n.args={field:c.field};var o,r,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
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
            <f-div>
                <f-form-builder .field=\${args.field} @keydown=\${handleKeydown} @input=\${handleInput}>
                    <f-div>
                        <f-button label="submit" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </f-div>
            <f-div>
                <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
            </f-div>
        </f-div>
    \`;
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const S=["basic"];export{S as __namedExportsOrder,n as basic,R as default};
