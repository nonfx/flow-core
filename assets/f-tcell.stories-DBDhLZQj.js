import{x as e,n as P,e as T}from"./iframe-Cd35n0SZ.js";const j={title:"@nonfx/flow-table/f-tcell",parameters:{controls:{hideNoControlsWarning:!0}}},r={render:t=>e`
            <f-table>
                <f-trow slot="header">
                    ${[1,2,3].map(n=>e`<f-tcell> Header ${n} </f-tcell>`)}
                </f-trow>
                ${[1,2,3].map(()=>e`<f-trow>
                        ${[1,2,3].map(n=>e`<f-tcell .actions=${t.actions}>
                                <f-text> Column ${n} </f-text>
                            </f-tcell>`)}
                    </f-trow>`)}
            </f-table>
        `,name:"Playground",argTypes:{actions:{control:"object"},selected:{control:{type:"boolean"}}},args:{actions:[{icon:"i-copy",onClick:()=>console.log("i-launch clicked")},{icon:"i-git-branch",onClick:()=>console.log("i-launch clicked")},{icon:"i-launch",onClick:()=>console.log("i-launch clicked")}],selected:!1}},a={render:()=>e`<f-div align="middle-center" padding="large">Display anatomy here</f-div>`,name:"Anatomy"},o={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large">
            <f-text>3rd column has actions</f-text>
            <f-table>
                <f-trow slot="header">
                    ${[1,2,3].map(t=>e`<f-tcell> Header ${t} </f-tcell>`)}
                </f-trow>
                ${[1,2,3].map(()=>e`<f-trow>
                        ${[1,2,3].map(t=>e`<f-tcell
                                .actions=${t===3?[{icon:"i-copy",onClick:()=>console.log("i-launch clicked")},{icon:"i-git-branch",onClick:()=>console.log("i-launch clicked")},{icon:"i-launch",onClick:()=>console.log("i-launch clicked")}]:[]}
                            >
                                <f-text> Column ${t} </f-text>
                            </f-tcell>`)}
                    </f-trow>`)}
            </f-table>
        </f-div>`,name:"actions"},c={render:()=>e`<f-div direction="column" state="subtle" padding="small" gap="large"
            >${[!0].map(()=>e`<f-text>2nd column is selected</f-text
                        ><f-table>
                            <f-trow slot="header">
                                ${[1,2,3].map(t=>e`<f-tcell .selected=${t===2}>
                                        Header ${t}
                                    </f-tcell>`)}
                            </f-trow>
                            ${[1,2,3].map(()=>e`<f-trow>
                                    ${[1,2,3].map(t=>e`<f-tcell .selected=${t===2}>
                                            <f-text> Column ${t} </f-text>
                                        </f-tcell>`)}
                                </f-trow>`)}
                        </f-table>`)}</f-div
        >`,name:"selected"},i={render:()=>{const t=["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"];return e`<f-div padding="x-large"
            ><f-table variant="bordered">
                <f-trow slot="header">
                    ${t.map(n=>e`<f-tcell width="300px" .align=${n}> ${n} </f-tcell>`)}
                    <f-tcell> Cell with height </f-tcell>
                </f-trow>
                ${[1,2,3].map(()=>e`<f-trow>
                        ${t.map(n=>e`<f-tcell .align=${n}>
                                <f-text inline> align="${n}" </f-text>
                            </f-tcell>`)}
                        <f-tcell>
                            <f-div height="200px"></f-div>
                        </f-tcell>
                    </f-trow>`)}
            </f-table></f-div
        >`},name:"align"},f={render:()=>{const t=T(),n=l=>{t.value&&(t.value.textContent=JSON.stringify(l.detail,void 0,2))};return e`<f-div direction="column" state="subtle" padding="small" gap="large"
                >${[!0].map(()=>e`<f-text>Hover on header cell, it will trigger 'highlight-column' event </f-text>
                            <f-table>
                                <f-trow slot="header">
                                    ${[1,2,3].map(l=>e`<f-tcell
                                            @highlight-column=${n}
                                            .selected=${l===2}
                                        >
                                            Hover to Highlight ${l}
                                        </f-tcell>`)}
                                </f-trow>
                                ${[1,2,3].map(()=>e`<f-trow>
                                        ${[1,2,3].map(l=>e`<f-tcell .selected=${l===2}>
                                                <f-text> Column ${l} </f-text>
                                            </f-tcell>`)}
                                    </f-trow>`)}
                            </f-table> `)}
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${P(t)}></pre>`},name:"@highlight-column"},d={render:()=>{const t=T(),n=l=>{t.value&&(t.value.textContent=JSON.stringify(l.detail,void 0,2))};return e`<f-div direction="column" state="subtle" padding="small" gap="large"
                >${[!0].map(()=>e`<f-text>Click on header cell, it will trigger 'selected-column' event </f-text>
                            <f-table>
                                <f-trow slot="header">
                                    ${[1,2,3].map(l=>e`<f-tcell
                                            @selected-column=${n}
                                            .selected=${l===2}
                                        >
                                            Click to select ${l}
                                        </f-tcell>`)}
                                </f-trow>
                                ${[1,2,3].map(()=>e`<f-trow>
                                        ${[1,2,3].map(l=>e`<f-tcell .selected=${l===2}>
                                                <f-text> Column ${l} </f-text>
                                            </f-tcell>`)}
                                    </f-trow>`)}
                            </f-table> `)}
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${P(t)}></pre>`},name:"@selected-column"};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    return html\`
            <f-table>
                <f-trow slot="header">
                    \${[1, 2, 3].map(cellNumber => {
      return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
    })}
                </f-trow>
                \${[1, 2, 3].map(() => {
      return html\`<f-trow>
                        \${[1, 2, 3].map(cellNumber => {
        return html\`<f-tcell .actions=\${args.actions}>
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
    actions: {
      control: "object"
    },
    selected: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    actions: [{
      icon: "i-copy",
      onClick: () => console.log("i-launch clicked")
    }, {
      icon: "i-git-branch",
      onClick: () => console.log("i-launch clicked")
    }, {
      icon: "i-launch",
      onClick: () => console.log("i-launch clicked")
    }],
    selected: false
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`<f-div align="middle-center" padding="large">Display anatomy here</f-div>\`,
  name: "Anatomy"
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var $,b,v;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large">
            <f-text>3rd column has actions</f-text>
            <f-table>
                <f-trow slot="header">
                    \${[1, 2, 3].map(cellNumber => {
    return html\`<f-tcell> Header \${cellNumber} </f-tcell>\`;
  })}
                </f-trow>
                \${[1, 2, 3].map(() => {
    return html\`<f-trow>
                        \${[1, 2, 3].map(cellNumber => {
      return html\`<f-tcell
                                .actions=\${cellNumber === 3 ? [{
        icon: "i-copy",
        onClick: () => console.log("i-launch clicked")
      }, {
        icon: "i-git-branch",
        onClick: () => console.log("i-launch clicked")
      }, {
        icon: "i-launch",
        onClick: () => console.log("i-launch clicked")
      }] : []}
                            >
                                <f-text> Column \${cellNumber} </f-text>
                            </f-tcell>\`;
    })}
                    </f-trow>\`;
  })}
            </f-table>
        </f-div>\`,
  name: "actions"
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,x,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`<f-div direction="column" state="subtle" padding="small" gap="large"
            >\${[true].map(() => html\`<f-text>2nd column is selected</f-text
                        ><f-table>
                            <f-trow slot="header">
                                \${[1, 2, 3].map(cellNumber => {
    return html\`<f-tcell .selected=\${cellNumber === 2}>
                                        Header \${cellNumber}
                                    </f-tcell>\`;
  })}
                            </f-trow>
                            \${[1, 2, 3].map(() => {
    return html\`<f-trow>
                                    \${[1, 2, 3].map(cellNumber => {
      return html\`<f-tcell .selected=\${cellNumber === 2}>
                                            <f-text> Column \${cellNumber} </f-text>
                                        </f-tcell>\`;
    })}
                                </f-trow>\`;
  })}
                        </f-table>\`)}</f-div
        >\`,
  name: "selected"
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,k,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const alignValues = ["top-left", "top-center", "top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", "bottom-right"];
    return html\`<f-div padding="x-large"
            ><f-table variant="bordered">
                <f-trow slot="header">
                    \${alignValues.map(align => {
      return html\`<f-tcell width="300px" .align=\${align}> \${align} </f-tcell>\`;
    })}
                    <f-tcell> Cell with height </f-tcell>
                </f-trow>
                \${[1, 2, 3].map(() => {
      return html\`<f-trow>
                        \${alignValues.map(align => {
        return html\`<f-tcell .align=\${align}>
                                <f-text inline> align="\${align}" </f-text>
                            </f-tcell>\`;
      })}
                        <f-tcell>
                            <f-div height="200px"></f-div>
                        </f-tcell>
                    </f-trow>\`;
    })}
            </f-table></f-div
        >\`;
  },
  name: "align"
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var H,S,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const fieldRef = createRef();
    const highlightColumnHandler = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large"
                >\${[true].map(() => html\`<f-text>Hover on header cell, it will trigger 'highlight-column' event </f-text>
                            <f-table>
                                <f-trow slot="header">
                                    \${[1, 2, 3].map(cellNumber => {
      return html\`<f-tcell
                                            @highlight-column=\${highlightColumnHandler}
                                            .selected=\${cellNumber === 2}
                                        >
                                            Hover to Highlight \${cellNumber}
                                        </f-tcell>\`;
    })}
                                </f-trow>
                                \${[1, 2, 3].map(() => {
      return html\`<f-trow>
                                        \${[1, 2, 3].map(cellNumber => {
        return html\`<f-tcell .selected=\${cellNumber === 2}>
                                                <f-text> Column \${cellNumber} </f-text>
                                            </f-tcell>\`;
      })}
                                    </f-trow>\`;
    })}
                            </f-table> \`)}
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre>\`;
  },
  name: "@highlight-column"
}`,...(R=(S=f.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var A,O,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const fieldRef = createRef();
    const selectedColumnHandler = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large"
                >\${[true].map(() => html\`<f-text>Click on header cell, it will trigger 'selected-column' event </f-text>
                            <f-table>
                                <f-trow slot="header">
                                    \${[1, 2, 3].map(cellNumber => {
      return html\`<f-tcell
                                            @selected-column=\${selectedColumnHandler}
                                            .selected=\${cellNumber === 2}
                                        >
                                            Click to select \${cellNumber}
                                        </f-tcell>\`;
    })}
                                </f-trow>
                                \${[1, 2, 3].map(() => {
      return html\`<f-trow>
                                        \${[1, 2, 3].map(cellNumber => {
        return html\`<f-tcell .selected=\${cellNumber === 2}>
                                                <f-text> Column \${cellNumber} </f-text>
                                            </f-tcell>\`;
      })}
                                    </f-trow>\`;
    })}
                            </f-table> \`)}
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre>\`;
  },
  name: "@selected-column"
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const J=["Playground","Anatomy","Actions","Selected","Align","HighlightColumn","SelectedColumn"],E=Object.freeze(Object.defineProperty({__proto__:null,Actions:o,Align:i,Anatomy:a,HighlightColumn:f,Playground:r,Selected:c,SelectedColumn:d,__namedExportsOrder:J,default:j},Symbol.toStringTag,{value:"Module"}));export{a as A,E as F,f as H,r as P,c as S,o as a,d as b};
