import{x as t,n as E,e as P}from"./iframe-BdnCiKt2.js";const R={title:"@nonfx/flow-text-editor/f-text-editor",parameters:{controls:{hideNoControlsWarning:!0}}},n={render:e=>{const s=function(l){console.log(l)};return t`<f-div height="100%">
            <f-text-editor
                .placeholder=${e.placeholder}
                .value=${e.value}
                @input=${s}
            ></f-text-editor>
        </f-div>`},name:"Playground",argTypes:{value:{control:"text"},placeholder:{control:"text"}},args:{value:"<h1>Hello World!</h1>",placeholder:"Enter rich text here..."}},r={render:()=>t`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'value' will display inside editor</f-text>
            <f-text-editor .value=${"<h1>This is value</h1>"}></f-text-editor>
        </f-div>`,name:"value"},i={render:()=>t`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'placeholder' will display whenever there is no content</f-text>
            <f-text-editor .placeholder=${"This is placeholder"}></f-text-editor>
        </f-div>`,name:"placeholder"},o={render:()=>t`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">If 'read-only' is set then you can't edit</f-text>
            <f-text-editor
                .readOnly=${!0}
                .value=${"<h1>You can't edit this value</h1>"}
            ></f-text-editor>
        </f-div>`,name:"read-only"},a={render:()=>{const e=[["bold","italic","underline","strike"],["blockquote","code-block"],["link","image","video","formula"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];return t`<f-div height="100%" direction="column" gap="large">
            <f-div height="hug-content">
                <f-text state="warning">'toolbar' is used customize toolbar actions</f-text>
            </f-div>
            <f-div>
                <f-text-editor
                    .toolbar=${e}
                    .value=${`<pre>${JSON.stringify(e,null,4)}</pre>`}
                ></f-text-editor>
            </f-div>
        </f-div>`},name:"tooltbar"},d={render:()=>{const e=P();return t`
            <f-div height="100%">
                <f-div height="100%" direction="column" gap="large" padding="medium">
                    <f-div height="hug-content">
                        <f-text state="warning"
                            >It will emit 'input' event whenver there are any modification in editor</f-text
                        >
                    </f-div>
                    <f-div>
                        <f-text-editor @input=${l=>{e.value&&(e.value.textContent=JSON.stringify(l.detail,null,4))}} .value=${"<h1>This is value</h1>"}></f-text-editor>
                    </f-div>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="large" padding="medium">
                    <f-text state="warning">'event.detail' will display here</f-text>
                    <pre ${E(e)}></pre>
                </f-div>
            </f-div>
        `},name:"@input"};var c,u,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    const handleInput = function (ev: CustomEvent) {
      console.log(ev);
    };
    return html\`<f-div height="100%">
            <f-text-editor
                .placeholder=\${args.placeholder}
                .value=\${args.value}
                @input=\${handleInput}
            ></f-text-editor>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    value: {
      control: "text"
    },
    placeholder: {
      control: "text"
    }
  },
  args: {
    value: \`<h1>Hello World!</h1>\`,
    placeholder: \`Enter rich text here...\`
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,p,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'value' will display inside editor</f-text>
            <f-text-editor .value=\${"<h1>This is value</h1>"}></f-text-editor>
        </f-div>\`;
  },
  name: "value"
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,m,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'placeholder' will display whenever there is no content</f-text>
            <f-text-editor .placeholder=\${"This is placeholder"}></f-text-editor>
        </f-div>\`;
  },
  name: "placeholder"
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,y,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">If 'read-only' is set then you can't edit</f-text>
            <f-text-editor
                .readOnly=\${true}
                .value=\${"<h1>You can't edit this value</h1>"}
            ></f-text-editor>
        </f-div>\`;
  },
  name: "read-only"
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var $,O,T;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const toolbarOptions = [["bold", "italic", "underline", "strike"],
    // toggled buttons
    ["blockquote", "code-block"], ["link", "image", "video", "formula"], [{
      header: 1
    }, {
      header: 2
    }],
    // custom button values
    [{
      list: "ordered"
    }, {
      list: "bullet"
    }, {
      list: "check"
    }], [{
      script: "sub"
    }, {
      script: "super"
    }],
    // superscript/subscript
    [{
      indent: "-1"
    }, {
      indent: "+1"
    }],
    // outdent/indent
    [{
      direction: "rtl"
    }],
    // text direction

    [{
      size: ["small", false, "large", "huge"]
    }],
    // custom dropdown
    [{
      header: [1, 2, 3, 4, 5, 6, false]
    }], [{
      color: []
    }, {
      background: []
    }],
    // dropdown with defaults from theme
    [{
      font: []
    }], [{
      align: []
    }], ["clean"] // remove formatting button
    ];
    return html\`<f-div height="100%" direction="column" gap="large">
            <f-div height="hug-content">
                <f-text state="warning">'toolbar' is used customize toolbar actions</f-text>
            </f-div>
            <f-div>
                <f-text-editor
                    .toolbar=\${toolbarOptions}
                    .value=\${\`<pre>\${JSON.stringify(toolbarOptions, null, 4)}</pre>\`}
                ></f-text-editor>
            </f-div>
        </f-div>\`;
  },
  name: "tooltbar"
}`,...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var I,S,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const preRef = createRef<HTMLPreElement>();
    const handleInput = (ev: CustomEvent) => {
      if (preRef.value) {
        preRef.value.textContent = JSON.stringify(ev.detail, null, 4);
      }
    };
    return html\`
            <f-div height="100%">
                <f-div height="100%" direction="column" gap="large" padding="medium">
                    <f-div height="hug-content">
                        <f-text state="warning"
                            >It will emit 'input' event whenver there are any modification in editor</f-text
                        >
                    </f-div>
                    <f-div>
                        <f-text-editor @input=\${handleInput} .value=\${\`<h1>This is value</h1>\`}></f-text-editor>
                    </f-div>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="large" padding="medium">
                    <f-text state="warning">'event.detail' will display here</f-text>
                    <pre \${ref(preRef)}></pre>
                </f-div>
            </f-div>
        \`;
  },
  name: "@input"
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const _=["Playground","Value","Placeholder","ReadOnly","ToolBar","InputEvent"],C=Object.freeze(Object.defineProperty({__proto__:null,InputEvent:d,Placeholder:i,Playground:n,ReadOnly:o,ToolBar:a,Value:r,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{C as F,n as P};
