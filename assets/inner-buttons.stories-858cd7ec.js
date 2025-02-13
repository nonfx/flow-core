import{x as c}from"./lit-html-57bab4fd.js";import{n as l,e as r}from"./ref-8dc3593a.js";import"./directive-helpers-ef3e3cc7.js";import"./directive-12249aa5.js";const R={title:"@nonfx/flow-form-builder/Examples/Test Inner Buttons",argTypes:{field:{control:!1}}},d={field:{type:"object",direction:"vertical",fieldSeparator:!0,fields:{featureFlags:{type:"object",direction:"vertical",label:{title:"Feature flags"},fields:{ENABLE_NX_PLATFORM:{type:"switchButton",qaId:"ENABLE_NX_PLATFORM",label:{title:"VN-3176 - ENABLE_NX_PLATFORM"},helperText:"Enables features for the NX Platform",state:"primary"}}},highlightDataQa:{type:"switchButton",label:{title:"Highlight data-qa attributes"}},debugFunctions:{type:"object",direction:"vertical",label:{title:"Debug functions"},fields:{createSeedClassifications:{type:"button",label:"createSeedClassifications",state:"success",variant:"round",size:"small",iconLeft:"i-play",loading:!1},createSeedTemplate:{type:"button",label:"createSeedTemplate",state:"success",variant:"round",size:"small",iconLeft:"i-play",loading:!1}}}}}},m=n=>{const u=e=>{e.stopPropagation(),e.stopImmediatePropagation()},i=r(),a=r(),p=e=>{console.log(e),i.value&&(i.value.innerHTML=JSON.stringify(e.detail,void 0,8)),a.value&&(a.value.field={...d.field})};return c`
        <f-div padding="medium" gap="large">
            <f-form-builder
                ${l(a)}
                .field=${n.field}
                .values=${n.values}
                @keydown=${u}
                @input=${p}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${l(i)}>${JSON.stringify(n.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=m.bind({});t.args={field:d.field,values:{firstname:"Tony",lastname:"Stark"}};var o,f,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => {
  const handleKeydown = (event: Event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
  };
  const fieldRef: Ref<HTMLElement> = createRef();
  const formRef: Ref<FFormBuilder> = createRef();
  const handleInput = (event: CustomEvent) => {
    console.log(event);
    if (fieldRef.value) {
      fieldRef.value.innerHTML = JSON.stringify(event.detail, undefined, 8);
    }
    if (formRef.value) {
      formRef.value.field = {
        ...sampleFormBuilder.field
      };
    }
  };
  return html\`
        <f-div padding="medium" gap="large">
            <f-form-builder
                \${ref(formRef)}
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
}`,...(s=(f=t.parameters)==null?void 0:f.docs)==null?void 0:s.source}}};const h=["basic"];export{h as __namedExportsOrder,t as basic,R as default};
