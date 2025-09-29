import{c as a,x as t}from"./iframe-Cd35n0SZ.js";import"./preload-helper-D4nn9Y_6.js";const c={title:"@nonfx/flow-core/performance-testing",parameters:{controls:{hideNoControlsWarning:!0}}},n={render:()=>{const p=Array.from({length:1e3},(e,l)=>l+1);return t`
            ${a(p,e=>e,e=>t` <!--div
                            style="display:flex;background:var(--color-primary-default);width:600px;padding:12px"
                        >
                            <p>${e}</p>
                            <select>
                                <option><f-icon source="i-plus"></f-icon>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                        </div-->
                        <f-div
                            state="primary"
                            width="200px"
                            padding="medium"
                            border="small solid default around"
                            gap="medium"
                            align="middle-left"
                            ><f-text state="danger" inline>${e}</f-text>
                            <f-select
                                .options=${["A length unit, or percentage, specifying the initial length of the flexible item(s)","option2","option3"]}
                                .value=${"option1"}
                                searchable
                                icon-left="i-org"
                            ></f-select>
                        </f-div>`)}
        `},name:"Test"};var o,i,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const elements = Array.from({
      length: 1000
    }, (_, index) => index + 1);
    return html\`
            \${repeat(elements, item => item, item => html\` <!--div
                            style="display:flex;background:var(--color-primary-default);width:600px;padding:12px"
                        >
                            <p>\${item}</p>
                            <select>
                                <option><f-icon source="i-plus"></f-icon>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                        </div-->
                        <f-div
                            state="primary"
                            width="200px"
                            padding="medium"
                            border="small solid default around"
                            gap="medium"
                            align="middle-left"
                            ><f-text state="danger" inline>\${item}</f-text>
                            <f-select
                                .options=\${["A length unit, or percentage, specifying the initial length of the flexible item(s)", "option2", "option3"]}
                                .value=\${"option1"}
                                searchable
                                icon-left="i-org"
                            ></f-select>
                        </f-div>\`)}
        \`;
  },
  name: "Test"
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const m=["Test"];export{n as Test,m as __namedExportsOrder,c as default};
