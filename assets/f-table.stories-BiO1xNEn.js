import{x as e}from"./lit-html-BulfDIla.js";import{n as L,e as W}from"./ref-C9q2dBKz.js";import{d as q}from"./donwload-file-Bv6G9zgP.js";const B={title:"@nonfx/flow-table/f-table",parameters:{controls:{hideNoControlsWarning:!0}}},a={render:t=>{const l=n=>{console.log("selected rows",n.detail)},r=n=>{console.log("clicked",n)};return e`
            <f-button style="display:none" label="download" @click=${q}></f-button>
            <f-div state="default" id="reportTemplate">
                <f-table
                    .highlightSelected=${t["highlight-selected"]}
                    .highlightHover=${t["highlight-hover"]}
                    .highlightColumnHover=${t["highlight-column-hover"]}
                    .selectable=${t.selectable}
                    .variant=${t.variant}
                    .size=${t.size}
                    @selected-rows=${l}
                >
                    <f-trow slot="header">
                        ${[1,2,3,4,5].map(n=>e`<f-tcell @click=${r}> Header ${n} </f-tcell>`)}
                    </f-trow>
                    ${[1,2,3,4,5].map(n=>e`<f-trow>
                            <f-div padding="large" slot="details">
                                <f-text variant="heading" size="x-large">This is details slot</f-text>
                            </f-div>
                            ${[1,2,3,4,5].map(u=>e`<f-tcell>
                                    <f-text> Column ${u} </f-text>
                                </f-tcell>`)}
                        </f-trow>`)}
                </f-table>
            </f-div>
        `},name:"Playground",argTypes:{variant:{control:"select",options:["stripped","outlined","underlined","bordered"]},size:{control:"select",options:["medium","small"]},selectable:{control:"select",options:["single","multiple","none"]},"highlight-selected":{control:{type:"boolean"}},"highlight-hover":{control:{type:"boolean"}},"highlight-column-hover":{control:{type:"boolean"}}},args:{variant:"stripped",size:"medium",selectable:"none","highlight-selected":!0,"highlight-hover":!0,"highlight-column-hover":!0}},o={render:()=>e`<f-div align="middle-center" padding="large">Display anatomy here</f-div>`,name:"Anatomy"},i={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${["stripped","outlined","underlined","bordered"].map(t=>e`<f-text>variant="${t}"</f-text
                        ><f-table .variant=${t}>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"variant"},d={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${["small","medium"].map(t=>e`<f-text>size="${t}"</f-text
                        ><f-table .size=${t}>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"size"},s={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${["single","multiple","none"].map(t=>e`<f-text>selectable="${t}"</f-text
                        ><f-table .selectable=${t}>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"selectable"},f={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${[!0,!1].map(t=>e`<f-text>${t?"highlight-selected":""}</f-text
                        ><f-table .highlightSelected=${t} selectable="multiple">
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(l=>e`<f-trow .selected=${l===3}>
                                    ${[1,2,3,4,5].map(r=>e`<f-tcell>
                                            <f-text> Column ${r} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"highlight-selected"},c={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${[!0,!1].map(t=>e`<f-text>${t?"highlight-hover":""}</f-text
                        ><f-table .highlightHover=${t}>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"highlight-hover"},m={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large">
            <f-text state="warning">Hover on column header to see result</f-text>
            ${[!0,!1].map(t=>e`<f-text>${t?"highlight-column-hover":""}</f-text
                        ><f-table .highlightColumnHover=${t}>
                            <f-trow slot="header">
                                ${[1,2,3,4,5].map(l=>e`<f-tcell> Header ${l} </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3,4,5].map(()=>e`<f-trow>
                                    ${[1,2,3,4,5].map(l=>e`<f-tcell>
                                            <f-text> Column ${l} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)} </f-table
                        ><f-divider></f-divider>`)}</f-div
        >`,name:"highlight-column-hover"},h={render:()=>{const t=W();return e`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>'selected-rows' event emitted whenever any row is selected or de-selected</f-text>
                <f-table selectable="multiple" @selected-rows=${r=>{if(t.value){const n=[];r.detail.forEach(u=>{n.push(u.toString())}),t.value.textContent=JSON.stringify(n,void 0,2)}}}>
                    <f-trow slot="header">
                        ${[1,2,3,4,5].map(r=>e`<f-tcell> Header ${r} </f-tcell>`)}
                    </f-trow>
                    ${[1,2,3,4,5].map(()=>e`<f-trow>
                            ${[1,2,3,4,5].map(r=>e`<f-tcell>
                                    <f-text> Column ${r} </f-text>
                                </f-tcell>`)}
                        </f-trow>`)}
                </f-table>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${L(t)}></pre>`},name:"@selected-rows"};var g,p,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleSelectedRows = (event: CustomEvent) => {
      console.log("selected rows", event.detail);
    };
    const testOverrideClick = (event: CustomEvent) => {
      console.log("clicked", event);
    };
    return html\`
            <f-button style="display:none" label="download" @click=\${downloadFile}></f-button>
            <f-div state="default" id="reportTemplate">
                <f-table
                    .highlightSelected=\${args["highlight-selected"]}
                    .highlightHover=\${args["highlight-hover"]}
                    .highlightColumnHover=\${args["highlight-column-hover"]}
                    .selectable=\${args.selectable}
                    .variant=\${args.variant}
                    .size=\${args.size}
                    @selected-rows=\${handleSelectedRows}
                >
                    <f-trow slot="header">
                        \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell @click=\${testOverrideClick}> Header \${cellNumber} </f-tcell>\`;
    })}
                    </f-trow>
                    \${[1, 2, 3, 4, 5].map(_rowNumber => {
      return html\`<f-trow>
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
            </f-div>
        \`;
  },
  name: "Playground",
  argTypes: {
    variant: {
      control: "select",
      options: ["stripped", "outlined", "underlined", "bordered"]
    },
    size: {
      control: "select",
      options: ["medium", "small"]
    },
    selectable: {
      control: "select",
      options: ["single", "multiple", "none"]
    },
    ["highlight-selected"]: {
      control: {
        type: "boolean"
      }
    },
    ["highlight-hover"]: {
      control: {
        type: "boolean"
      }
    },
    ["highlight-column-hover"]: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    variant: "stripped",
    size: "medium",
    selectable: "none",
    ["highlight-selected"]: true,
    ["highlight-hover"]: true,
    ["highlight-column-hover"]: true
  }
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var $,b,w;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`<f-div align="middle-center" padding="large">Display anatomy here</f-div>\`,
  name: "Anatomy"
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,H,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${["stripped", "outlined", "underlined", "bordered"].map(variant => html\`<f-text>variant="\${variant}"</f-text
                        ><f-table .variant=\${variant}>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "variant"
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var y,S,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${["small", "medium"].map(size => html\`<f-text>size="\${size}"</f-text
                        ><f-table .size=\${size}>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "size"
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var z,R,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${["single", "multiple", "none"].map(selectable => html\`<f-text>selectable="\${selectable}"</f-text
                        ><f-table .selectable=\${selectable}>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "selectable"
}`,...(k=(R=s.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var T,_,O;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${[true, false].map(highlightSelected => html\`<f-text>\${highlightSelected ? "highlight-selected" : ""}</f-text
                        ><f-table .highlightSelected=\${highlightSelected} selectable="multiple">
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(rowNumber => {
    return html\`<f-trow .selected=\${rowNumber === 3}>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "highlight-selected"
}`,...(O=(_=f.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var E,P,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${[true, false].map(highlightHover => html\`<f-text>\${highlightHover ? "highlight-hover" : ""}</f-text
                        ><f-table .highlightHover=\${highlightHover}>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "highlight-hover"
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,V,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large">
            <f-text state="warning">Hover on column header to see result</f-text>
            \${[true, false].map(highlightColumnHover => html\`<f-text>\${highlightColumnHover ? "highlight-column-hover" : ""}</f-text
                        ><f-table .highlightColumnHover=\${highlightColumnHover}>
                            <f-trow slot="header">
                                \${[1, 2, 3, 4, 5].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3, 4, 5].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })} </f-table
                        ><f-divider></f-divider>\`)}</f-div
        >\`,
  name: "highlight-column-hover"
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var D,J,M;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const fieldRef = createRef();
    const selectedRowsHandler = (event: CustomEvent) => {
      if (fieldRef.value) {
        const selectedrows: string[] = [];
        event.detail.forEach((element: HTMLElement) => {
          selectedrows.push(element.toString());
        });
        fieldRef.value.textContent = JSON.stringify(selectedrows, undefined, 2);
      }
    };

    // .highlightHover=\${highlightHover}

    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>'selected-rows' event emitted whenever any row is selected or de-selected</f-text>
                <f-table selectable="multiple" @selected-rows=\${selectedRowsHandler}>
                    <f-trow slot="header">
                        \${[1, 2, 3, 4, 5].map(cellNumber => {
      return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
    })}
                    </f-trow>
                    \${[1, 2, 3, 4, 5].map(() => {
      return html\`<f-trow>
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
  name: "@selected-rows"
}`,...(M=(J=h.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const G=["Playground","Anatomy","Variant","Size","Selectable","HighlightSelected","HighlightHover","HighlightColumnHover","SelectedRows"],U=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:o,HighlightColumnHover:m,HighlightHover:c,HighlightSelected:f,Playground:a,Selectable:s,SelectedRows:h,Size:d,Variant:i,__namedExportsOrder:G,default:B},Symbol.toStringTag,{value:"Module"}));export{o as A,U as F,f as H,a as P,d as S,i as V,s as a,c as b,m as c,h as d};
