import{x as e,n as j,e as D}from"./iframe-CCyKNv7C.js";const F={title:"@nonfx/flow-table/f-trow",parameters:{controls:{hideNoControlsWarning:!0}}},a={render:t=>{const l=r=>{console.log("selected rows",r.detail)},n=r=>{console.log("clicked",r)};return e`
            <f-table selectable="multiple" @selected-rows=${l}>
                <f-trow slot="header">
                    ${[1,2,3,4,5].map(r=>e`<f-tcell @click=${n}> Header ${r} </f-tcell>`)}
                </f-trow>
                ${[1,2,3,4,5].map(()=>e`<f-trow
                        .disableSelection=${t["disable-selection"]}
                        .state=${t.state}
                        .open=${t.open}
                        .selected=${t.selected}
                    >
                        <f-div padding="large" slot="details">
                            <f-text variant="heading" size="x-large">This is details slot</f-text>
                        </f-div>
                        ${[1,2,3,4,5].map(r=>e`<f-tcell>
                                <f-text> Column ${r} </f-text>
                            </f-tcell>`)}
                    </f-trow>`)}
            </f-table>
        `},name:"Playground",argTypes:{state:{control:"select",options:["primary","neutral","success","warning","danger","inherit","default"]},open:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},"disable-selection":{control:{type:"boolean"}}},args:{state:"default",open:!1,selected:!1,"disable-selection":!1}},i={render:()=>e`<f-div align="middle-center" padding="large">Display anatomy here</f-div>`,name:"Anatomy"},o={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${["primary","neutral","success","warning","danger","inherit","default"].map(t=>e`<f-text>state="${t}"</f-text
                        ><f-table>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow .state=${t}>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"state"},d={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${[!0,!1].map(t=>e`<f-text>${t?"open":"--"}</f-text
                        ><f-table>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow .open=${t}>
                                    <f-div padding="large" slot="details">
                                        <f-text variant="heading" size="x-large">This is details slot</f-text>
                                    </f-div>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"open"},s={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${[!0,!1].map(t=>e`<f-text>${t?"selected":"--"}</f-text
                        ><f-table selectable="multiple">
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow .selected=${t}>
                                    <f-div padding="large" slot="details">
                                        <f-text variant="heading" size="x-large">This is details slot</f-text>
                                    </f-div>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"selected"},f={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            ><f-table>
                <f-trow slot="header">
                    ${[1,2].map(t=>e`<f-tcell> Header ${t} </f-tcell>`)}
                </f-trow>
                ${["left","right"].map(t=>e`<f-trow expand-icon-position="${t}">
                        <f-div padding="large" slot="details">
                            <f-text variant="heading" size="x-large">This is details slot</f-text>
                        </f-div>
                        ${[1,2].map(()=>e`<f-tcell>
                                <f-text> ${t} icon position </f-text>
                            </f-tcell>`)}
                    </f-trow>`)}
            </f-table></f-div
        >`,name:"expand-icon-position"},c={render:()=>{const t=D(),l=n=>{t.value&&(t.value.textContent=JSON.stringify(n.detail.value,void 0,2))};return e`<f-div direction="column" state="subtle" padding="small" gap="large"
                ><f-text>Click on checkbox to trigger 'selected-row' event</f-text>
                <f-table selectable="multiple">
                    <f-trow slot="header">
                        ${[1,2,3,4,5].map(n=>e`<f-tcell> Header ${n} </f-tcell>`)}
                    </f-trow>
                    ${[1,2,3,4,5].map(()=>e`<f-trow @selected-row=${l}>
                            <f-div padding="large" slot="details">
                                <f-text variant="heading" size="x-large">This is details slot</f-text>
                            </f-div>
                            ${[1,2,3,4,5].map(n=>e`<f-tcell>
                                    <f-text> Column ${n} </f-text>
                                </f-tcell>`)}
                        </f-trow>`)}
                </f-table>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail.value' will display here</f-text>
            <pre ${j(t)}></pre>`},name:"@selected-row"},m={render:()=>{const t=D(),l=n=>{t.value&&(t.value.textContent=JSON.stringify(n.detail,void 0,2))};return e`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>Click on chevron to see row details, it will trigger 'toggle-row' event</f-text>
                <f-table selectable="multiple">
                    <f-trow slot="header">
                        ${[1,2,3,4,5].map(n=>e`<f-tcell> Header ${n} </f-tcell>`)}
                    </f-trow>
                    ${[1,2,3,4,5].map(()=>e`<f-trow @toggle-row=${l}>
                            <f-div padding="large" slot="details">
                                <f-text variant="heading" size="x-large">This is details slot</f-text>
                            </f-div>
                            ${[1,2,3,4,5].map(n=>e`<f-tcell>
                                    <f-text> Column ${n} </f-text>
                                </f-tcell>`)}
                        </f-trow>`)}
                </f-table>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${j(t)}></pre>`},name:"@toggle-row"};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleSelectedRows = (event: CustomEvent) => {
      console.log("selected rows", event.detail);
    };
    const testOverrideClick = (event: CustomEvent) => {
      console.log("clicked", event);
    };
    return html\`
            <f-table selectable="multiple" @selected-rows=\${handleSelectedRows}>
                <f-trow slot="header">
                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell @click=\${testOverrideClick}> Header \${cellNumber} </f-tcell>\`;
    })}
                </f-trow>
                \${[1, 2, 3, 4, 5].map(() => {
      return html\`<f-trow
                        .disableSelection=\${args["disable-selection"]}
                        .state=\${args.state}
                        .open=\${args.open}
                        .selected=\${args.selected}
                    >
                        <f-div padding="large" slot="details">
                            <f-text variant="heading" size="x-large">This is details slot</f-text>
                        </f-div>
                        \${[1, 2, 3, 4, 5].map(cellNumber => {
        return html\`<f-tcell>
                                <f-text> Column \${cellNumber} </f-text>
                            </f-tcell>\`;
      })}
                    </f-trow>\`;
    })}
            </f-table>
        \`;
  },
  name: "Playground",
  argTypes: {
    state: {
      control: "select",
      options: ["primary", "neutral", "success", "warning", "danger", "inherit", "default"]
    },
    open: {
      control: {
        type: "boolean"
      }
    },
    selected: {
      control: {
        type: "boolean"
      }
    },
    ["disable-selection"]: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    state: "default",
    open: false,
    selected: false,
    ["disable-selection"]: false
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,$,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`<f-div align="middle-center" padding="large">Display anatomy here</f-div>\`,
  name: "Anatomy"
}`,...(x=($=i.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var b,w,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${["primary", "neutral", "success", "warning", "danger", "inherit", "default"].map(state => html\`<f-text>state="\${state}"</f-text
                        ><f-table>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow .state=\${state}>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "state"
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var y,N,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${[true, false].map(open => html\`<f-text>\${open ? "open" : "--"}</f-text
                        ><f-table>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow .open=\${open}>
                                    <f-div padding="large" slot="details">
                                        <f-text variant="heading" size="x-large">This is details slot</f-text>
                                    </f-div>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "open"
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var S,R,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${[true, false].map(selected => html\`<f-text>\${selected ? "selected" : "--"}</f-text
                        ><f-table selectable="multiple">
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow .selected=\${selected}>
                                    <f-div padding="large" slot="details">
                                        <f-text variant="heading" size="x-large">This is details slot</f-text>
                                    </f-div>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "selected"
}`,...(H=(R=s.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var T,k,z;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            ><f-table>
                <f-trow slot="header">
                    \${[1, 2].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                </f-trow>
                \${["left", "right"].map(iconPos => {
    return html\`<f-trow expand-icon-position="\${iconPos}">
                        <f-div padding="large" slot="details">
                            <f-text variant="heading" size="x-large">This is details slot</f-text>
                        </f-div>
                        \${[1, 2].map(() => {
      return html\`<f-tcell>
                                <f-text> \${iconPos} icon position </f-text>
                            </f-tcell>\`;
    })}
                    </f-trow>\`;
  })}
            </f-table></f-div
        >\`,
  name: "expand-icon-position"
}`,...(z=(k=f.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var O,P,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const fieldRef = createRef();
    const selectedRowHandler = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail.value, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large"
                ><f-text>Click on checkbox to trigger 'selected-row' event</f-text>
                <f-table selectable="multiple">
                    <f-trow slot="header">
                        \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
    })}
                    </f-trow>
                    \${[1, 2, 3, 4, 5].map(() => {
      return html\`<f-trow @selected-row=\${selectedRowHandler}>
                            <f-div padding="large" slot="details">
                                <f-text variant="heading" size="x-large">This is details slot</f-text>
                            </f-div>
                            \${[1, 2, 3, 4, 5].map(cellNumber => {
        return html\`<f-tcell>
                                    <f-text> Column \${cellNumber} </f-text>
                                </f-tcell>\`;
      })}
                        </f-trow>\`;
    })}
                </f-table>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail.value' will display here</f-text>
            <pre \${ref(fieldRef)}></pre>\`;
  },
  name: "@selected-row"
}`,...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var _,A,J;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const fieldRef = createRef();
    const toggleRowHandler = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>Click on chevron to see row details, it will trigger 'toggle-row' event</f-text>
                <f-table selectable="multiple">
                    <f-trow slot="header">
                        \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
    })}
                    </f-trow>
                    \${[1, 2, 3, 4, 5].map(() => {
      return html\`<f-trow @toggle-row=\${toggleRowHandler}>
                            <f-div padding="large" slot="details">
                                <f-text variant="heading" size="x-large">This is details slot</f-text>
                            </f-div>
                            \${[1, 2, 3, 4, 5].map(cellNumber => {
        return html\`<f-tcell>
                                    <f-text> Column \${cellNumber} </f-text>
                                </f-tcell>\`;
      })}
                        </f-trow>\`;
    })}
                </f-table>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre>\`;
  },
  name: "@toggle-row"
}`,...(J=(A=m.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};const I=["Playground","Anatomy","State","Open","Selected","ExpandIconPosition","SelectedRow","ToggleRow"],W=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:i,ExpandIconPosition:f,Open:d,Playground:a,Selected:s,SelectedRow:c,State:o,ToggleRow:m,__namedExportsOrder:I,default:F},Symbol.toStringTag,{value:"Module"}));export{i as A,f as E,W as F,d as O,a as P,o as S,m as T,s as a,c as b};
