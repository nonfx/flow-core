import{n as f,e as m,x as u}from"./iframe-Cd35n0SZ.js";import"./preload-helper-D4nn9Y_6.js";const g={title:"@nonfx/flow-form-builder/Examples/Object field",argTypes:{field:{control:!1}}},p={field:{type:"object",direction:"horizontal",isCollapsible:!1,isCollapsed:!0,helperText:"This is helper text for object",label:{title:"Object field form",description:"showing object field",iconTooltip:"Simple object with 2 fields `firstname` & `lastname` "},fields:{firstname:{type:"text"},lastname:{type:"text"}},validationRules:[{name:"custom",message:"Please provide either firstname or lastname",validate:n=>{const i=n;return i.firstname!==void 0||i.lastname!==void 0}}]}},c=n=>{const i=e=>{e.stopPropagation(),e.stopImmediatePropagation()},o=m(),s=e=>{o.value&&(o.value.innerHTML=JSON.stringify(e.detail,void 0,8))},r=e=>{console.log(e.detail)};return u`
        <f-div padding="medium" gap="large">
            <f-form-builder
                .field=${n.field}
                .values=${n.values}
                @keydown=${i}
                @input=${s}
                @submit=${r}
            >
                <f-div>
                    <f-button label="submit" type="submit"></f-button>
                </f-div>
            </f-form-builder>
            <f-div>
                <pre ${f(o)}>${JSON.stringify(n.values,void 0,8)}</pre>
            </f-div>
        </f-div>
    `},t=c.bind({});t.args={field:p.field};var l,a,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
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
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const h=["basic"];export{h as __namedExportsOrder,t as basic,g as default};
