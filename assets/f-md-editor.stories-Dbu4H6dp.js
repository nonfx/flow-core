import{n as $,e as I,x as r}from"./iframe-CCyKNv7C.js";const _=`# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraph text. This is a sample Markdown file demonstrating various features.

## Emphasis

*Italic text* or _Italic text_

**Bold text** or __Bold text__

**_Bold and italic text_**

## Lists

Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

## Links

[Link to OpenAI's website](https://openai.com)

## Images

![Markdown logo](https://markdown-here.com/img/icon256.png)

## Code

Inline code: \`var x = 10;\`

Code block:

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")
\`\`\`
`,H={title:"@nonfx/flow-md-editor/f-md-editor",parameters:{controls:{hideNoControlsWarning:!0}}},n={render:e=>{const a=I(),o=function(y){console.log(y.detail.value)};return r`<f-div padding="x-large" height="100%">
            <f-md-editor
                ${$(a)}
                .value=${e.value}
                .mode=${e.mode}
                @input=${o}
            ></f-md-editor>
        </f-div>`},name:"Playground",argTypes:{value:{control:"text"},mode:{control:"radio",options:["edit","view"]}},args:{value:_,mode:"view"}},t={render:()=>r`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'value' will display inside editor</f-text>
            <f-md-editor
                mode="edit"
                .value=${`## Heading 2
            ### Heading 3
            #### Heading 4`}
            ></f-md-editor>
        </f-div>`,name:"value"},i={render:()=>r`<f-div height="100%" gap="large">
            <f-md-editor mode="edit" .value=${"## This is edit mode"}></f-md-editor>
            <f-divider></f-divider>
            <f-md-editor mode="view" .value=${"## This is view mode"}></f-md-editor>
        </f-div>`,name:"mode"},d={render:()=>{const e=I();return r`
            <f-div height="100%">
                <f-div height="100%" direction="column" gap="large" padding="medium">
                    <f-div height="hug-content">
                        <f-text state="warning"
                            >It will emit 'input' event whenver there are any modification in editor</f-text
                        >
                    </f-div>
                    <f-div>
                        <f-md-editor
                            mode="edit"
                            @input=${o=>{e.value&&(e.value.textContent=JSON.stringify(o.detail,null,4))}}
                            .value=${"# This is value"}
                        ></f-md-editor>
                    </f-div>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="large" padding="medium">
                    <f-text state="warning">'event.detail' will display here</f-text>
                    <pre ${$(e)}></pre>
                </f-div>
            </f-div>
        `},name:"@input"};var l,s,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: Record<string, string>) => {
    const mdRef = createRef<FMDEditor>();
    const handleInput = function (ev: CustomEvent) {
      console.log(ev.detail.value);
    };
    return html\`<f-div padding="x-large" height="100%">
            <f-md-editor
                \${ref(mdRef)}
                .value=\${args.value}
                .mode=\${args.mode}
                @input=\${handleInput}
            ></f-md-editor>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    value: {
      control: "text"
    },
    mode: {
      control: "radio",
      options: ["edit", "view"]
    }
  },
  args: {
    value: sampleMd,
    mode: "view"
  }
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var f,u,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div height="100%" direction="column" gap="large">
            <f-text state="warning">'value' will display inside editor</f-text>
            <f-md-editor
                mode="edit"
                .value=\${\`## Heading 2
            ### Heading 3
            #### Heading 4\`}
            ></f-md-editor>
        </f-div>\`;
  },
  name: "value"
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,c,p;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const editValue = \`## This is edit mode\`;
    const viewValue = \`## This is view mode\`;
    return html\`<f-div height="100%" gap="large">
            <f-md-editor mode="edit" .value=\${editValue}></f-md-editor>
            <f-divider></f-divider>
            <f-md-editor mode="view" .value=\${viewValue}></f-md-editor>
        </f-div>\`;
  },
  name: "mode"
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,w,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                        <f-md-editor
                            mode="edit"
                            @input=\${handleInput}
                            .value=\${\`# This is value\`}
                        ></f-md-editor>
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
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const T=["Playground","Value","Mode","InputEvent"],R=Object.freeze(Object.defineProperty({__proto__:null,InputEvent:d,Mode:i,Playground:n,Value:t,__namedExportsOrder:T,default:H},Symbol.toStringTag,{value:"Module"}));export{R as F,n as P};
