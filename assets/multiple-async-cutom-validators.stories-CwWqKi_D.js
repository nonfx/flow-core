import{x as p}from"./lit-html-BulfDIla.js";import{n as i,e as l}from"./ref-C9q2dBKz.js";import"./directive-helpers-CWXDk_SO.js";import"./directive-CJw_OlP2.js";const R={title:"@nonfx/flow-form-builder/Examples/Multiple Async Custom Validator",argTypes:{field:{control:!1}}},f={field:{type:"object",direction:"vertical",fields:{username:{type:"text",validationRules:[{name:"required"},{name:"custom",validate:async function(e){return console.log("a called"),!e.includes("a")},message:"{{value}} has a"},{name:"custom",validate:async function(e){return console.log("b called"),!e.includes("b")},message:"{{value}} has b"}]}}}},g=e=>{const u=n=>{n.stopPropagation(),n.stopImmediatePropagation()},o=l(),a=l(),m=n=>{o.value&&(o.value.innerHTML=JSON.stringify(n.detail,void 0,8))},c=n=>{console.log(n),window.location.reload()},v=n=>{a.value&&(a.value.field={...f.field})};return p`
        <f-div padding="medium" dicrection="column" gap="large">
            <form style="width:500px">
                <f-form-builder
                    ${i(a)}
                    .field=${e.field}
                    .values=${e.values}
                    @keydown=${u}
                    @input=${m}
                    @submit=${c}
                    @state-change=${v}
                >
                    <f-div>
                        <f-button label="login" type="submit"></f-button>
                    </f-div>
                </f-form-builder>
            </form>
            <f-div>
                <pre ${i(o)}>${JSON.stringify(e.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=g.bind({});t.args={field:f.field,values:{username:"kkb"}};var d,r,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: any) => {
  const handleKeydown = (event: Event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
  };
  const fieldRef: Ref<HTMLElement> = createRef();
  const formRef: Ref<FFormBuilder> = createRef();
  const handleInput = (event: CustomEvent) => {
    if (fieldRef.value) {
      fieldRef.value.innerHTML = JSON.stringify(event.detail, undefined, 8);
    }
  };
  const handleSubmit = (event: CustomEvent) => {
    console.log(event);
    window.location.reload();
  };
  const handleStateChange = (_event: CustomEvent) => {
    if (formRef.value) {
      formRef.value.field = {
        ...sampleFormBuilder.field
      };
    }
  };
  return html\`
        <f-div padding="medium" dicrection="column" gap="large">
            <form style="width:500px">
                <f-form-builder
                    \${ref(formRef)}
                    .field=\${args.field}
                    .values=\${args.values}
                    @keydown=\${handleKeydown}
                    @input=\${handleInput}
                    @submit=\${handleSubmit}
                    @state-change=\${handleStateChange}
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const w=["basic"];export{w as __namedExportsOrder,t as basic,R as default};
