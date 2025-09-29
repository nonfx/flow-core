import{n as c,e as u,x as t}from"./iframe-C5Wc31tw.js";import"./preload-helper-D4nn9Y_6.js";const y={title:"@nonfx/flow-form-builder/Examples/Label Left Layout",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"vertical",fields:{division:{type:"suggest",label:{title:t`<f-div gap="large" align="middle-left" width="200px">
                        <f-icon state="secondary" source="i-grid-view" size="large"></f-icon>
                        <f-text state="secondary">Division</f-text>
                    </f-div>`},validationRules:[{name:"required"}],layout:"label-left",iconRight:"i-search",suggestions:["option1","option2","option3","option4"]},class:{type:"suggest",label:{title:t`<f-div gap="large" align="middle-left" width="200px">
                        <f-icon state="secondary" source="i-org" size="large"></f-icon>
                        <f-text state="secondary">Class</f-text>
                    </f-div>`},layout:"label-left",iconRight:"i-search",suggestions:["option1","option2","option3","option4"]},family:{type:"suggest",layout:"label-left",label:{title:t`<f-div gap="large" align="middle-left" width="200px">
                        <f-icon state="secondary" source="i-cart" size="large"></f-icon>
                        <f-text state="secondary">Family</f-text>
                    </f-div>`},iconRight:"i-search",suggestions:["option1","option2","option3","option4"]},canonicalName:{type:"suggest",layout:"label-left",label:{title:t`<f-div gap="large" align="middle-left" width="200px">
                        <f-icon state="secondary" source="i-crown" size="large"></f-icon>
                        <f-text state="secondary">Canonical name</f-text>
                    </f-div>`},iconRight:"i-search",suggestions:["option1","option2","option3","option4"]}}}},g=n=>{const d=e=>{e.stopPropagation(),e.stopImmediatePropagation()},o=u(),f=e=>{o.value&&(o.value.innerHTML=JSON.stringify(e.detail,void 0,8))},r=e=>{console.log(e),window.location.reload()};return t`
        <f-div padding="medium" dicrection="column" gap="large">
            <f-form-builder
                .field=${n.field}
                .values=${n.values}
                @keydown=${d}
                @input=${f}
                @submit="${r}"
            >
                <f-div>
                    <f-button label="save" type="submit"></f-button>
                </f-div>
            </f-form-builder>

            <f-div>
                <pre ${c(o)}>${JSON.stringify(n.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},i=g.bind({});i.args={field:p.field};var a,l,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => {
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
            <f-form-builder
                .field=\${args.field}
                .values=\${args.values}
                @keydown=\${handleKeydown}
                @input=\${handleInput}
                @submit="\${handleSubmit}"
            >
                <f-div>
                    <f-button label="save" type="submit"></f-button>
                </f-div>
            </f-form-builder>

            <f-div>
                <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
            </f-div>
        </f-div>
    \`;
}`,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,i as basic,y as default};
