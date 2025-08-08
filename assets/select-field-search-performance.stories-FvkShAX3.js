import{n as s,e as p,x as u}from"./iframe-BdnCiKt2.js";import{f as c}from"./chunk-KZPPZA2C-BtqgzDBU.js";import"./preload-helper-CTglmYes.js";const $={title:"@nonfx/flow-form-builder/Examples/Select field search performance",argTypes:{field:{control:!1}}},f=[];for(let e=0;e<3e4;e++)f.push(`${e} - ${c.location.city()}`);const m={field:{type:"select",options:f,searchable:!0}},v=e=>{const a=i=>{i.stopPropagation(),i.stopImmediatePropagation()},t=p(),l=i=>{t.value&&(t.value.innerHTML=JSON.stringify(i.detail,void 0,8))};return u`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-div>
                <f-form-builder .field=${e.field} @keydown=${a} @input=${l}>
                    <f-div>
                        <f-button label="submit" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </f-div>
            <f-div>
                <pre ${s(t)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},n=v.bind({});n.args={field:m.field};var o,r,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
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
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const h=["basic"];export{h as __namedExportsOrder,n as basic,$ as default};
