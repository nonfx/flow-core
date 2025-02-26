import{x as o}from"./lit-html-BulfDIla.js";import{u as z,a as r}from"./chunk-2WNKQWTL-cTwTzLwY.js";const M={title:"@nonfx/flow-code-editor/f-code-editor",parameters:{controls:{hideNoControlsWarning:!0}}},d={render:e=>{z();const n=function(t){console.log(t)};return o`<f-div padding="x-large" height="100%">
            <f-code-editor
                .code=${e.code}
                .language=${e.language}
                .state=${e.state}
                .comments=${e.comments}
                ?copy-button=${e["copy-button"]}
                .title=${e.title}
                ?show-line-numbers=${e["show-line-numbers"]}
                ?read-only=${e["read-only"]}
                @content-change=${n}
            ></f-code-editor>
        </f-div>`},name:"Playground",argTypes:{code:{control:"text"},title:{control:"text"},comments:{control:"boolean"},"copy-button":{control:"boolean"},state:{control:"select",options:["default","secondary","subtle"]},"show-line-numbers":{control:"boolean"},language:{control:"select",options:["scala","python","json","css","scss","less","html","yaml","javascript","typescript"]},"read-only":{control:"boolean"}},args:{code:`%TAG ! tag:clarkevans.com,2002:
--- !shape
  # Use the ! handle for presenting
  # tag:clarkevans.com,2002:circle
- !circle
  center: &ORIGIN {x: 73, y: 129}
  radius: 7
- !line
  start: *ORIGIN
  finish: { x: 89, y: 102 }
- !label
  start: *ORIGIN
  color: 0xFFEEBB
  text: Pretty vector drawing.`,title:"",comments:!1,"copy-button":!1,"show-line-numbers":!1,state:"default",language:"scala","read-only":!1}},s={render:e=>o`
            <f-div padding="x-large" height="100%">
                <f-code-editor .code=${e.code} .language=${e.language}></f-code-editor>
            </f-div>
        `,name:"code",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  `,language:"scala"}},c={render:e=>{const[n,t]=r("");return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div width="200px" height="hug-content">
                    <f-input
                        .value=${n}
                        @input=${a=>{t(a.detail.value)}}
                        placeholder="Enter your title here"
                    ></f-input>
                </f-div>
                <f-text
                    >Now, on the basis of title header gets shown on code-editor, "title='This is a
                    title'"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        .title=${n}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"title",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  `,language:"scala"}},i={render:e=>{const[n,t]=r(!0);return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=${n} @input=${a=>{t(a.detail.value)}}>
                        <f-text slot="label">Add Comments Toggle button to header</f-text>
                    </f-switch>
                </f-div>
                <f-text
                    >Now, on the basis of comments, header gets shown on code-editor, "comments=true"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        title="JAVASCRIPT"
                        ?comments=${n}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"comments",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}`,language:"javascript"}},u={render:e=>{const[n,t]=r(!0);return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=${n} @input=${a=>{t(a.detail.value)}}>
                        <f-text slot="label">Add Copy button button to header</f-text>
                    </f-switch>
                </f-div>
                <f-text
                    >Now, on the basis of copy-button, header gets shown on code-editor,
                    "copy-button=true"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        title="JAVASCRIPT"
                        ?copy-button=${n}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"copy-button",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}`,language:"javascript"}},g={render:e=>{const[n,t]=r(!0);return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=${n} @input=${a=>{t(a.detail.value)}}>
                        <f-text slot="label">Toggle Line No.'s</f-text>
                    </f-switch>
                </f-div>
                <f-text>show-line-numbers=${n}</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        title="JAVASCRIPT"
                        ?show-line-numbers=${n}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"show-line-numbers",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}`,language:"javascript"}},f={render:e=>{const[n,t]=r("default");return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div width="200px" height="hug-content">
                    <f-select .value=${n} @input=${U=>{t(U.detail.value)}} .options=${["default","secondary","subtle"]}></f-select>
                </f-div>
                <f-text> "state=${n}"</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        title="JAVASCRIPT"
                        .state=${n}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"state",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}`,language:"javascript"}},h={render:e=>o`
            <f-div padding="x-large" height="100%">
                <f-code-editor .code=${e.code} .language=${e.language}></f-code-editor>
            </f-div>
        `,name:"language",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  `,language:"scala"}},p={render:e=>{const[n,t]=r(!1);return o`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=${n} @input=${a=>{t(a.detail.value)}}>
                        <f-text slot="label">Toggle read-only mode</f-text>
                    </f-switch>
                </f-div>
                <f-text>read-only=${n}</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=${e.code}
                        .language=${e.language}
                        title="JAVASCRIPT"
                        ?read-only=${n}
                        state="subtle"
                        ?copy-button=${!0}
                        ?comments=${!0}
                    ></f-code-editor>
                </f-div>
            </f-div>
        `},name:"read-only",argTypes:{code:{control:!1},language:{control:!1}},args:{code:`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}`,language:"javascript"}};var m,v,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  // updateArgs({ code: ev.detail.value });
  render: args => {
    const [_, updateArgs] = useArgs();
    const handleInput = function (ev) {
      console.log(ev);
    };
    return html\`<f-div padding="x-large" height="100%">
            <f-code-editor
                .code=\${args.code}
                .language=\${args.language}
                .state=\${args.state}
                .comments=\${args.comments}
                ?copy-button=\${args["copy-button"]}
                .title=\${args.title}
                ?show-line-numbers=\${args["show-line-numbers"]}
                ?read-only=\${args["read-only"]}
                @content-change=\${handleInput}
            ></f-code-editor>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    code: {
      control: "text"
    },
    title: {
      control: "text"
    },
    comments: {
      control: "boolean"
    },
    ["copy-button"]: {
      control: "boolean"
    },
    state: {
      control: "select",
      options: ["default", "secondary", "subtle"]
    },
    ["show-line-numbers"]: {
      control: "boolean"
    },
    language: {
      control: "select",
      options: ["scala", "python", "json", "css", "scss", "less", "html", "yaml", "javascript", "typescript"]
    },
    ["read-only"]: {
      control: "boolean"
    }
  },
  args: {
    code: \`%TAG ! tag:clarkevans.com,2002:
--- !shape
  # Use the ! handle for presenting
  # tag:clarkevans.com,2002:circle
- !circle
  center: &ORIGIN {x: 73, y: 129}
  radius: 7
- !line
  start: *ORIGIN
  finish: { x: 89, y: 102 }
- !label
  start: *ORIGIN
  color: 0xFFEEBB
  text: Pretty vector drawing.\`,
    title: "",
    comments: false,
    ["copy-button"]: false,
    ["show-line-numbers"]: false,
    state: "default",
    language: "scala",
    ["read-only"]: false
  }
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var $,x,y;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
            <f-div padding="x-large" height="100%">
                <f-code-editor .code=\${args.code} .language=\${args.language}></f-code-editor>
            </f-div>
        \`;
  },
  name: "code",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  \`,
    language: "scala"
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,S,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div width="200px" height="hug-content">
                    <f-input
                        .value=\${value}
                        @input=\${handleInput}
                        placeholder="Enter your title here"
                    ></f-input>
                </f-div>
                <f-text
                    >Now, on the basis of title header gets shown on code-editor, "title='This is a
                    title'"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        .title=\${value}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "title",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  \`,
    language: "scala"
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,A,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(true);
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=\${value} @input=\${handleInput}>
                        <f-text slot="label">Add Comments Toggle button to header</f-text>
                    </f-switch>
                </f-div>
                <f-text
                    >Now, on the basis of comments, header gets shown on code-editor, "comments=true"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        title="JAVASCRIPT"
                        ?comments=\${value}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "comments",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}\`,
    language: "javascript"
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var V,C,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(true);
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=\${value} @input=\${handleInput}>
                        <f-text slot="label">Add Copy button button to header</f-text>
                    </f-switch>
                </f-div>
                <f-text
                    >Now, on the basis of copy-button, header gets shown on code-editor,
                    "copy-button=true"</f-text
                >
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        title="JAVASCRIPT"
                        ?copy-button=\${value}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "copy-button",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}\`,
    language: "javascript"
  }
}`,...(j=(C=u.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var P,N,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(true);
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=\${value} @input=\${handleInput}>
                        <f-text slot="label">Toggle Line No.'s</f-text>
                    </f-switch>
                </f-div>
                <f-text>show-line-numbers=\${value}</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        title="JAVASCRIPT"
                        ?show-line-numbers=\${value}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "show-line-numbers",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}\`,
    language: "javascript"
  }
}`,...(E=(N=g.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,J,G;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("default");
    const options = ["default", "secondary", "subtle"];
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div width="200px" height="hug-content">
                    <f-select .value=\${value} @input=\${handleInput} .options=\${options}></f-select>
                </f-div>
                <f-text> "state=\${value}"</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        title="JAVASCRIPT"
                        .state=\${value}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "state",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}\`,
    language: "javascript"
  }
}`,...(G=(J=f.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var _,L,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    return html\`
            <f-div padding="x-large" height="100%">
                <f-code-editor .code=\${args.code} .language=\${args.language}></f-code-editor>
            </f-div>
        \`;
  },
  name: "language",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`object ScalaExample{
    def main(args:Array[String]){
        println "Hello Scala"
    }
}  \`,
    language: "scala"
  }
}`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var F,H,k;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(false);
    const handleInput = e => {
      setValue(e.detail.value);
    };
    return html\`
            <f-div padding="x-large" height="100%" gap="x-large" direction="column">
                <f-div height="hug-content">
                    <f-switch .value=\${value} @input=\${handleInput}>
                        <f-text slot="label">Toggle read-only mode</f-text>
                    </f-switch>
                </f-div>
                <f-text>read-only=\${value}</f-text>
                <f-div overflow="hidden">
                    <f-code-editor
                        .code=\${args.code}
                        .language=\${args.language}
                        title="JAVASCRIPT"
                        ?read-only=\${value}
                        state="subtle"
                        ?copy-button=\${true}
                        ?comments=\${true}
                    ></f-code-editor>
                </f-div>
            </f-div>
        \`;
  },
  name: "read-only",
  argTypes: {
    code: {
      control: false
    },
    language: {
      control: false
    }
  },
  args: {
    code: \`/**
 * dce
 * ewcer
 */
function add(a, b) {
  // This function adds two numbers
  return a + b; // Return the sum
}\`,
    language: "javascript"
  }
}`,...(k=(H=p.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const W=["Playground","Code","Title","Comments","CopyButton","ShowLineNumbers","State","Language","ReadOnly"],K=Object.freeze(Object.defineProperty({__proto__:null,Code:s,Comments:i,CopyButton:u,Language:h,Playground:d,ReadOnly:p,ShowLineNumbers:g,State:f,Title:c,__namedExportsOrder:W,default:M},Symbol.toStringTag,{value:"Module"}));export{s as C,K as F,h as L,d as P,p as R,g as S,c as T,i as a,u as b,f as c};
