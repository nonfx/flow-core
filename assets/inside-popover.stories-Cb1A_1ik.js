import{n as l,e as f,x as o}from"./iframe-BdnCiKt2.js";import"./preload-helper-CTglmYes.js";const x={title:"@nonfx/flow-form-builder/Examples/In PopOver",argTypes:{field:{control:!1}}},m={field:{type:"object",direction:"vertical",isCollapsible:!1,isCollapsed:!0,label:{title:"Object field form",description:"showing object field",iconTooltip:"Simple object with 2 fields `name` & `emoji` "},fields:{topField:{type:"text",label:{title:"Top field",subTitle:"Optional"}},nameAndEmoji:{type:"object",direction:"horizontal",fields:{name:{type:"text",label:{title:"Testing external tooltip",iconTooltip:"#testTooltip"},helperText:'<f-text size="small" state="warning">This class is pretty straight-forward. It has two mandatory methods, bind and react which are called upon app initialization and after the scope updates respectively. Since this is a one-way binding on the text property, all we do here is set the innerText of the element.</f-text>',validationRules:[{name:"required"}]},emoji:{type:"emoji"}}},dropdown:{label:{title:"Dorpdown",subTitle:"MyDropDown"},type:"select",options:[{title:"Hash",data:{description:"[a-f0-9]"}},{title:"Two Digits",data:{description:"\\d+\\.\\d+"}}],optionTemplate:function(e){var n;return e=e,o`<f-div direction="column" gap="x-small">
                        <f-div gap="small">
                            ${e.title==="Hash"?o`<f-icon source="i-crown"></f-icon>`:""}
                            <f-text>${e.title}</f-text>
                        </f-div>
                        <f-text state="secondary">${(n=e.data)==null?void 0:n.description}</f-text></f-div
                    >`},validationRules:[{name:"required"}]},checkbox:{type:"checkbox",label:{title:" "},options:[{id:"aws-arn-checkbox-terms",title:o`<f-text size="medium" data-qa-id="aws-arn-checkbox-terms"
                            >I have designated my AWS account with Code Pipes Account ID and Organization
                            ID.</f-text
                        >`}],validationRules:[{name:"required",message:"Please make sure you have designated your AWS account with Code Pipes Account ID and Organization ID."}],id:"checkbox"}}}},h=e=>{const n=t=>{t.stopPropagation(),t.stopImmediatePropagation()},a=f(),p=f(),d=f(),u=t=>{a.value&&(a.value.innerHTML=JSON.stringify(t.detail,void 0,8))},v=t=>{d.value&&(d.value.textContent=JSON.stringify(t.detail,void 0,2))};return o`
        <f-popover open size="large">
            <f-tooltip id="testTooltip">
                <f-div gap="medium">
                    <f-icon source="i-bulb"></f-icon
                    ><f-text state="warning">This comes from external tooltip</f-text>
                </f-div>
            </f-tooltip>
            <f-div padding="large" width="100%" height="500px" state="default" gap="large">
                <f-div>
                    <f-form-builder
                        .field=${e.field}
                        .values=${e.values}
                        @keydown=${n}
                        @input=${u}
                        @state-change=${v}
                    >
                        <f-div>
                            <f-button ${l(p)} label="submit" type="submit"></f-button>
                        </f-div>
                    </f-form-builder>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" height="hug-content">
                    <f-div direction="column">
                        <f-text>Values : </f-text>
                        <pre ${l(a)}>${JSON.stringify(e.values,void 0,8)}</pre>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div direction="column">
                        <f-text>State : </f-text>
                        <pre ${l(d)}>${JSON.stringify(e.values,void 0,8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        </f-popover>
    `},i=h.bind({});i.args={field:m.field};var r,s,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: any) => {
  const handleKeydown = (event: Event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
  };
  const fieldRef: Ref<HTMLElement> = createRef();
  const buttonRef: Ref<FButton> = createRef();
  const stateRef = createRef();
  const handleInput = (event: CustomEvent) => {
    if (fieldRef.value) {
      fieldRef.value.innerHTML = JSON.stringify(event.detail, undefined, 8);
    }
  };
  const handleStateChange = (event: CustomEvent) => {
    if (stateRef.value) {
      stateRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
    }
    // if (buttonRef.value) {
    // 	buttonRef.value.disabled = !event.detail.isValid;
    // }
  };
  return html\`
        <f-popover open size="large">
            <f-tooltip id="testTooltip">
                <f-div gap="medium">
                    <f-icon source="i-bulb"></f-icon
                    ><f-text state="warning">This comes from external tooltip</f-text>
                </f-div>
            </f-tooltip>
            <f-div padding="large" width="100%" height="500px" state="default" gap="large">
                <f-div>
                    <f-form-builder
                        .field=\${args.field}
                        .values=\${args.values}
                        @keydown=\${handleKeydown}
                        @input=\${handleInput}
                        @state-change=\${handleStateChange}
                    >
                        <f-div>
                            <f-button \${ref(buttonRef)} label="submit" type="submit"></f-button>
                        </f-div>
                    </f-form-builder>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" height="hug-content">
                    <f-div direction="column">
                        <f-text>Values : </f-text>
                        <pre \${ref(fieldRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
                    </f-div>
                    <f-divider></f-divider>
                    <f-div direction="column">
                        <f-text>State : </f-text>
                        <pre \${ref(stateRef)}>\${JSON.stringify(args.values, undefined, 8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        </f-popover>
    \`;
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const y=["basic"];export{y as __namedExportsOrder,i as basic,x as default};
