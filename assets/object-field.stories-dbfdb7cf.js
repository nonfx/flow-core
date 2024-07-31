import{x as f}from"./lit-html-b1a28dc3.js";import{n as m,e as u}from"./ref-a55570ea.js";import"./directive-helpers-7e9c1cf5.js";import"./directive-12249aa5.js";const y={title:"@nonfx/flow-form-builder/Examples/Object field",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"horizontal",isCollapsible:!1,isCollapsed:!0,helperText:"This is helper text for object",label:{title:"Object field form",description:"showing object field",iconTooltip:"Simple object with 2 fields `firstname` & `lastname` "},fields:{firstname:{type:"text"},lastname:{type:"text"}},validationRules:[{name:"custom",message:"Please provide either firstname or lastname",validate:t=>{const i=t;return i.firstname!==void 0||i.lastname!==void 0}}]}},c=t=>{const i=e=>{e.stopPropagation(),e.stopImmediatePropagation()},o=u(),s=e=>{o.value&&(o.value.innerHTML=JSON.stringify(e.detail,void 0,8))},r=e=>{console.log(e.detail)};return f`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=${t.field}
                .values=${t.values}
                @keydown=${i}
                @input=${s}
                @submit=${r}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${m(o)}>${JSON.stringify(t.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},n=c.bind({});n.args={field:p.field};var l,a,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
    console.log(event.detail);
  };
  return html\`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=\${args.field}
                .values=\${args.values}
                @keydown=\${handleKeydown}
                @input=\${handleInput}
                @submit=\${handleSubmit}
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
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const $=["basic"];export{$ as __namedExportsOrder,n as basic,y as default};
