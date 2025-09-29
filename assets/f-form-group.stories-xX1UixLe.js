import{x as a}from"./iframe-CCyKNv7C.js";const A={title:"@nonfx/flow-core/f-form-group",parameters:{controls:{hideNoControlsWarning:!0}}},e={render:i=>a`
        <f-form>
            <f-form-group
                data-qa-id="testQaId"
                variant=${i.variant}
                .label=${{title:"Test for Variant 1",description:"This is a description"}}
                direction="horizontal"
                .gap=${i.gap}
                .collapse=${i.collapse}
                ?is-collapsed=${i["is-collapsed"]}
                ?can-duplicate=${i["can-duplicate"]}
            >
                <f-input aria-label="Sample Input" placeholder="This is an input field"></f-input>
                <f-divider></f-divider>
                <f-button aria-label="Submit Button" label="submit" variant="curved"></f-button>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                variant=${i.variant}
                .label=${{title:"Test for Variant 2",description:"This is a description"}}
                direction="horizontal"
                .gap=${i.gap}
                ?can-duplicate=${i["can-duplicate"]}
            >
                <f-select
                    aria-label="Sample Select"
                    .value=${"+91"}
                    .options=${["+91","+92","+93"]}
                    width="150"
                    .clear=${!1}
                ></f-select>
                <f-divider></f-divider>
                <f-input aria-label="Another Input" placeholder="This is an input field"></f-input>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=${{title:"Test for direction (f-input)",description:"This is a description"}}
                direction=${i.direction}
                .gap=${i.gap}
                .collapse=${i.collapse}
                ?is-collapsed=${i["is-collapsed"]}
            >
                <f-input aria-label="Input 2" placeholder="This is an input field"></f-input>
                <f-divider></f-divider>
                <f-input aria-label="Input 3" placeholder="This is an input field"></f-input>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=${{title:"Test for direction (f-checkbox)",description:"This is a description"}}
                direction=${i.direction}
                .gap=${i.gap}
                .collapse=${i.collapse}
                ?is-collapsed=${i["is-collapsed"]}
            >
                <f-checkbox aria-label="Apple Checkbox">
                    <f-div slot="label">Apple</f-div>
                </f-checkbox>
                <f-checkbox aria-label="Banana Checkbox">
                    <f-div slot="label">Banana</f-div>
                </f-checkbox>
                <f-checkbox aria-label="Radio Checkbox">
                    <f-div slot="label">Radio</f-div>
                </f-checkbox>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=${{title:"Test for direction (f-radio)",description:"This is a description"}}
                direction=${i.direction}
                .gap=${i.gap}
                .collapse=${i.collapse}
                ?is-collapsed=${i["is-collapsed"]}
            >
                <f-radio aria-label="Apple Radio">
                    <f-div slot="label">Apple</f-div>
                </f-radio>
                <f-radio aria-label="Banana Radio">
                    <f-div slot="label">Banana</f-div>
                </f-radio>
                <f-radio aria-label="Sample Radio">
                    <f-div slot="label">Radio</f-div>
                </f-radio>
            </f-form-group>
        </f-form>
    `,name:"Playground",argTypes:{variant:{control:"radio",options:["normal","compact"]},direction:{control:"radio",options:["vertical","horizontal"]},gap:{control:"select",options:["large","medium","small","x-small"]},collapse:{control:"select",options:["none","accordion","text"]},"is-collapsed":{control:"boolean"},"can-duplicate":{control:{type:"boolean"}}},args:{variant:"block",direction:"vertical",gap:"small",collapse:"none","is-collapsed":!1,"can-duplicate":!1}},o={render:i=>a` <f-form>
            <f-form-group
                variant="normal"
                .label=${{title:"Test for Variant-Normal",description:"This is a description"}}
                direction="horizontal"
                gap="small"
            >
                <f-input placeholder="This is an input field"></f-input>
                <f-button label="submit" variant="curved"></f-button>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                variant="compact"
                .label=${{title:"Test for Variant-Normal",description:"This is a description"}}
                direction="horizontal"
                gap="small"
            >
                <f-input placeholder="This is an input field"></f-input>
                <f-button label="submit" variant="curved"></f-button> </f-form-group
        ></f-form>`,name:"variant"},l={render:i=>a`<f-form>
      <f-form-group
        variant="normal"
        .label=${{title:"Horizontally aligned",description:"This is a description"}}
        direction="horizontal"
        gap="large"
      >
        <f-checkbox>
            <f-div slot="label">Apple</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Banana</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Radio</f-div>
          </f-checkbox>
      </f-form-group>
      <f-divider></f-divider>
      <f-form-group
        variant="compact"
        .label=${{title:"Verically aligned",description:"This is a description"}}
        direction="vertical"
        gap="large"
      >
         <f-checkbox>
            <f-div slot="label">Apple</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Banana</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Radio</f-div>
          </f-checkbox>
    </f-form>`,name:"direction"},r={render:i=>a`
            <f-form>
                ${["x-small","small","medium","large"].map(n=>a`
                        <f-form-group
                            variant="normal"
                            .label=${{title:`gap=${n}`}}
                            .gap=${n}
                        >
                            <f-input placeholder="This is an input field"></f-input>
                            <f-input placeholder="This is an input field"></f-input>
                        </f-form-group>
                        <f-divider></f-divider>
                    `)}
            </f-form>
        `,name:"gap"},t={render:i=>a`
            <f-form>
                ${["none","accordion","text"].map(n=>a`
                        <f-form-group
                            variant="normal"
                            .label=${{title:`collapse=${n}`}}
                            .collapse=${n}
                        >
                            <f-input placeholder="This is an input field"></f-input>
                            <f-input placeholder="This is an input field"></f-input>
                        </f-form-group>
                        <f-divider></f-divider>
                    `)}
            </f-form>
        `,name:"collapse"},f={render:i=>a`<f-form ?separator=${!0}>
            <f-form-group
                variant="normal"
                .label=${{title:"Group Title (can-duplicate)",description:"This is a description"}}
                ?can-duplicate=${!0}
            >
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
            </f-form-group>
            <f-form-group
                variant="normal"
                .label=${{title:"Group Title (is-collapsed)",description:"This is a description"}}
                ?is-collapsed=${!1}
                collapse="accordion"
            >
                <f-input placeholder="This is an input field">
                    <f-div slot="label">is-collpased (false)</f-div>
                </f-input>
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
            </f-form-group>
            <f-form> </f-form
        ></f-form> `,name:"Flags"};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
        <f-form>
            <f-form-group
                data-qa-id="testQaId"
                variant=\${args.variant}
                .label=\${{
    title: "Test for Variant 1",
    description: "This is a description"
  }}
                direction="horizontal"
                .gap=\${args.gap}
                .collapse=\${args.collapse}
                ?is-collapsed=\${args["is-collapsed"]}
                ?can-duplicate=\${args["can-duplicate"]}
            >
                <f-input aria-label="Sample Input" placeholder="This is an input field"></f-input>
                <f-divider></f-divider>
                <f-button aria-label="Submit Button" label="submit" variant="curved"></f-button>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                variant=\${args.variant}
                .label=\${{
    title: "Test for Variant 2",
    description: "This is a description"
  }}
                direction="horizontal"
                .gap=\${args.gap}
                ?can-duplicate=\${args["can-duplicate"]}
            >
                <f-select
                    aria-label="Sample Select"
                    .value=\${"+91"}
                    .options=\${["+91", "+92", "+93"]}
                    width="150"
                    .clear=\${false}
                ></f-select>
                <f-divider></f-divider>
                <f-input aria-label="Another Input" placeholder="This is an input field"></f-input>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=\${{
    title: "Test for direction (f-input)",
    description: "This is a description"
  }}
                direction=\${args.direction}
                .gap=\${args.gap}
                .collapse=\${args.collapse}
                ?is-collapsed=\${args["is-collapsed"]}
            >
                <f-input aria-label="Input 2" placeholder="This is an input field"></f-input>
                <f-divider></f-divider>
                <f-input aria-label="Input 3" placeholder="This is an input field"></f-input>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=\${{
    title: "Test for direction (f-checkbox)",
    description: "This is a description"
  }}
                direction=\${args.direction}
                .gap=\${args.gap}
                .collapse=\${args.collapse}
                ?is-collapsed=\${args["is-collapsed"]}
            >
                <f-checkbox aria-label="Apple Checkbox">
                    <f-div slot="label">Apple</f-div>
                </f-checkbox>
                <f-checkbox aria-label="Banana Checkbox">
                    <f-div slot="label">Banana</f-div>
                </f-checkbox>
                <f-checkbox aria-label="Radio Checkbox">
                    <f-div slot="label">Radio</f-div>
                </f-checkbox>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                .label=\${{
    title: "Test for direction (f-radio)",
    description: "This is a description"
  }}
                direction=\${args.direction}
                .gap=\${args.gap}
                .collapse=\${args.collapse}
                ?is-collapsed=\${args["is-collapsed"]}
            >
                <f-radio aria-label="Apple Radio">
                    <f-div slot="label">Apple</f-div>
                </f-radio>
                <f-radio aria-label="Banana Radio">
                    <f-div slot="label">Banana</f-div>
                </f-radio>
                <f-radio aria-label="Sample Radio">
                    <f-div slot="label">Radio</f-div>
                </f-radio>
            </f-form-group>
        </f-form>
    \`,
  name: "Playground",
  argTypes: {
    variant: {
      control: "radio",
      options: ["normal", "compact"]
    },
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"]
    },
    gap: {
      control: "select",
      options: ["large", "medium", "small", "x-small"]
    },
    collapse: {
      control: "select",
      options: ["none", "accordion", "text"]
    },
    ["is-collapsed"]: {
      control: "boolean"
    },
    ["can-duplicate"]: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    variant: "block",
    direction: "vertical",
    gap: "small",
    collapse: "none",
    ["is-collapsed"]: false,
    ["can-duplicate"]: false
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\` <f-form>
            <f-form-group
                variant="normal"
                .label=\${{
    title: "Test for Variant-Normal",
    description: "This is a description"
  }}
                direction="horizontal"
                gap="small"
            >
                <f-input placeholder="This is an input field"></f-input>
                <f-button label="submit" variant="curved"></f-button>
            </f-form-group>
            <f-divider></f-divider>
            <f-form-group
                variant="compact"
                .label=\${{
    title: "Test for Variant-Normal",
    description: "This is a description"
  }}
                direction="horizontal"
                gap="small"
            >
                <f-input placeholder="This is an input field"></f-input>
                <f-button label="submit" variant="curved"></f-button> </f-form-group
        ></f-form>\`,
  name: "variant"
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,v,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`<f-form>
      <f-form-group
        variant="normal"
        .label=\${{
    title: "Horizontally aligned",
    description: "This is a description"
  }}
        direction="horizontal"
        gap="large"
      >
        <f-checkbox>
            <f-div slot="label">Apple</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Banana</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Radio</f-div>
          </f-checkbox>
      </f-form-group>
      <f-divider></f-divider>
      <f-form-group
        variant="compact"
        .label=\${{
    title: "Verically aligned",
    description: "This is a description"
  }}
        direction="vertical"
        gap="large"
      >
         <f-checkbox>
            <f-div slot="label">Apple</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Banana</f-div>
          </f-checkbox>
          <f-checkbox>
            <f-div slot="label">Radio</f-div>
          </f-checkbox>
    </f-form>\`,
  name: "direction"
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,$,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const gaps = ["x-small", "small", "medium", "large"];
    return html\`
            <f-form>
                \${gaps.map(gap => html\`
                        <f-form-group
                            variant="normal"
                            .label=\${{
      title: \`gap=\${gap}\`
    }}
                            .gap=\${gap}
                        >
                            <f-input placeholder="This is an input field"></f-input>
                            <f-input placeholder="This is an input field"></f-input>
                        </f-form-group>
                        <f-divider></f-divider>
                    \`)}
            </f-form>
        \`;
  },
  name: "gap"
}`,...(T=($=r.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var x,k,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const collapses = ["none", "accordion", "text"];
    return html\`
            <f-form>
                \${collapses.map(item => html\`
                        <f-form-group
                            variant="normal"
                            .label=\${{
      title: \`collapse=\${item}\`
    }}
                            .collapse=\${item}
                        >
                            <f-input placeholder="This is an input field"></f-input>
                            <f-input placeholder="This is an input field"></f-input>
                        </f-form-group>
                        <f-divider></f-divider>
                    \`)}
            </f-form>
        \`;
  },
  name: "collapse"
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var I,R,z;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => html\`<f-form ?separator=\${true}>
            <f-form-group
                variant="normal"
                .label=\${{
    title: "Group Title (can-duplicate)",
    description: "This is a description"
  }}
                ?can-duplicate=\${true}
            >
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
            </f-form-group>
            <f-form-group
                variant="normal"
                .label=\${{
    title: "Group Title (is-collapsed)",
    description: "This is a description"
  }}
                ?is-collapsed=\${false}
                collapse="accordion"
            >
                <f-input placeholder="This is an input field">
                    <f-div slot="label">is-collpased (false)</f-div>
                </f-input>
                <f-input placeholder="This is an input field">
                    <f-div slot="label">Input title</f-div>
                </f-input>
            </f-form-group>
            <f-form> </f-form
        ></f-form> \`,
  name: "Flags"
}`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const B=["Playground","Variant","Direction","Gap","Collapse","Flags"],C=Object.freeze(Object.defineProperty({__proto__:null,Collapse:t,Direction:l,Flags:f,Gap:r,Playground:e,Variant:o,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{t as C,l as D,C as F,r as G,e as P,o as V,f as a};
