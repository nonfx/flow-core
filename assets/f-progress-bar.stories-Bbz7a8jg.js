import{n as k,e as F,x as e,o as _}from"./iframe-C5Wc31tw.js";const A=`<svg width="622" height="59" viewBox="0 0 622 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1205_9090)">
<rect width="622" height="24" fill="#6682AA" fill-opacity="0.5"/>
<rect width="219" height="24" fill="#66B8FF"/>
</g>
<path d="M106.315 49H108.471V45.206H113.147V43.246H108.471V41.16H113.777V39.2H106.315V49ZM115.32 40.67H117.56V38.78H115.32V40.67ZM115.376 49H117.504V41.496H115.376V49ZM119.601 49H121.729V38.78H119.601V49ZM123.825 49H125.953V38.78H123.825V49Z" fill="#7B93B2"/>
<path d="M116 7.33333C114.527 7.33333 113.333 8.52724 113.333 10C113.333 11.4728 114.527 12.6667 116 12.6667C117.473 12.6667 118.667 11.4728 118.667 10C118.667 8.52724 117.473 7.33333 116 7.33333ZM115.5 10L115.5 31L116.5 31L116.5 10L115.5 10Z" fill="#7B93B2"/>
<path d="M424.149 54H426.305V46.188H429.287V44.2H421.167V46.188H424.149V54ZM429.888 54H432.016V51.228C432.016 49.436 432.884 48.582 434.298 48.582H434.41V46.356C433.15 46.3 432.45 46.972 432.016 48.008V46.496H429.888V54ZM437.512 54.14C438.548 54.14 439.262 53.762 439.78 53.188V54H441.838V49.646C441.838 48.638 441.586 47.812 441.026 47.252C440.494 46.72 439.654 46.412 438.492 46.412C437.218 46.412 436.406 46.65 435.58 47.014L436.112 48.638C436.798 48.386 437.372 48.232 438.184 48.232C439.248 48.232 439.794 48.722 439.794 49.604V49.73C439.262 49.548 438.716 49.422 437.96 49.422C436.182 49.422 434.936 50.178 434.936 51.816V51.844C434.936 53.328 436.098 54.14 437.512 54.14ZM438.156 52.67C437.47 52.67 436.994 52.334 436.994 51.76V51.732C436.994 51.06 437.554 50.696 438.464 50.696C438.982 50.696 439.458 50.808 439.822 50.976V51.354C439.822 52.124 439.15 52.67 438.156 52.67ZM447.211 54.168C448.709 54.168 449.549 53.594 450.277 52.796L449.031 51.536C448.513 52.026 448.023 52.334 447.309 52.334C446.147 52.334 445.405 51.41 445.405 50.262V50.234C445.405 49.128 446.161 48.19 447.225 48.19C447.981 48.19 448.457 48.512 448.933 49.016L450.235 47.616C449.535 46.832 448.653 46.356 447.239 46.356C444.943 46.356 443.305 48.12 443.305 50.262V50.29C443.305 52.432 444.957 54.168 447.211 54.168ZM451.667 54H453.795V51.718L454.551 50.92L456.469 54H458.933L455.979 49.45L458.835 46.496H456.287L453.795 49.226V43.78H451.667V54Z" fill="#7B93B2"/>
<path d="M439 12.3333C437.527 12.3333 436.333 13.5272 436.333 15C436.333 16.4728 437.527 17.6667 439 17.6667C440.473 17.6667 441.667 16.4728 441.667 15C441.667 13.5272 440.473 12.3333 439 12.3333ZM438.5 15L438.5 36L439.5 36L439.5 15L438.5 15Z" fill="#7B93B2"/>
<defs>
<clipPath id="clip0_1205_9090">
<rect width="622" height="16" rx="8" fill="white"/>
</clipPath>
</defs>
</svg>
`,W={title:"@nonfx/flow-core/f-progress-bar",parameters:{controls:{hideNoControlsWarning:!0}}},t={render:a=>{const r=F();return e`<f-div direction="row" padding="x-large" gap="medium"
            ><f-progress-bar
                ${k(r)}
                .value=${a.value}
                .variant=${a.variant}
                .size=${a.size}
                .state=${a.state}
                .width=${a.width}
                .animation=${a.animation}
            ></f-progress-bar>
        </f-div>`},name:"Playground",argTypes:{value:{control:"text"},variant:{control:"radio",options:["curved","block","circle"]},size:{control:"radio",options:["large","medium","small","x-small"]},state:{control:"select",options:["default","primary","success","warning","danger","custom, #0000FF","custom, gray","custom, #fff","custom, white","custom, black","custom, #607B9F","custom, var(--color-highlight-default)"]},animation:{control:"boolean"},width:{control:"select",options:["fill-container","150px","200px","300px","450px"]}},args:{value:"60%",variant:"block",size:"medium",state:"default",width:"fill-container",animation:!0}},n={render:()=>e`<div class="align-center">${_(A)}</div>`,name:"Anatomy"},i={render:()=>e`<f-div direction="row" padding="x-large" gap="medium"
            ><f-progress-bar value="30%" variant="curved" state="success"></f-progress-bar>
            <f-div width="hug-content"
                ><f-text variant="para" size="small" state="success">30%</f-text></f-div
            >
        </f-div>`,name:"value"},s={render:()=>e`<f-div direction="row" gap="medium"
            >${["block","curved","circle"].map(r=>e`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar value="30%" .variant=${r}></f-progress-bar>
                        <f-div width="hug-content"
                            ><f-text variant="para" size="small">variant="${r}"</f-text></f-div
                        >
                    </f-div>`)}</f-div
        >`,name:"variant"},o={render:()=>{const a=["large","medium","small","x-small"];return e`${["block","curved","circle"].map(c=>e`<f-div direction="column" gap="medium">
                    <f-div padding="medium"><f-text>variant="${c}"</f-text></f-div>
                    ${a.map(m=>e`<f-div direction="row" align="middle-left" padding="x-large" gap="medium"
                                ><f-progress-bar
                                    value="30%"
                                    .size=${m}
                                    .variant=${c}
                                    state="primary"
                                ></f-progress-bar>
                                <f-div width="20%"
                                    ><f-text variant="para" size="small">size="${m}"</f-text></f-div
                                >
                            </f-div>`)}
                    <f-divider></f-divider>
                </f-div>`)}`},name:"size"},d={render:()=>e`<f-div direction="column" gap="medium"
            >${["default","primary","success","danger","warning","custom,#fff"].map(r=>e`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar value="30%" .state=${r} variant="curved"></f-progress-bar>
                        <f-div width="20%"><f-text variant="para" size="small">state="${r}"</f-text></f-div>
                    </f-div>`)}</f-div
        >`,name:"state"},l={render:()=>e`<f-div direction="column" gap="medium"
            >${["fill-container","300px"].map(r=>e`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar
                            value="30%"
                            .width=${r}
                            variant="curved"
                            state="primary"
                        ></f-progress-bar>
                        <f-div width="20%"><f-text variant="para" size="small">width="${r}"</f-text></f-div>
                    </f-div>`)}</f-div
        >`,name:"width"};var f,v,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const prgressBar = createRef<FProgressBar>();
    // let value = 10;
    // setInterval(() => {
    // 	if (prgressBar.value && value < 100) {
    // 		value += 10;
    // 		prgressBar.value.value = \`\${value}%\`;
    // 	} else {
    // 		value = 10;
    // 	}
    // }, 1000);
    return html\`<f-div direction="row" padding="x-large" gap="medium"
            ><f-progress-bar
                \${ref(prgressBar)}
                .value=\${args.value}
                .variant=\${args.variant}
                .size=\${args.size}
                .state=\${args.state}
                .width=\${args.width}
                .animation=\${args.animation}
            ></f-progress-bar>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    value: {
      control: "text"
    },
    variant: {
      control: "radio",
      options: ["curved", "block", "circle"]
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small", "x-small"]
    },
    state: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "custom, #0000FF", "custom, gray", "custom, #fff", "custom, white", "custom, black", "custom, #607B9F", "custom, var(--color-highlight-default)"]
    },
    animation: {
      control: "boolean"
    },
    width: {
      control: "select",
      options: ["fill-container", "150px", "200px", "300px", "450px"]
    }
  },
  args: {
    value: "60%",
    variant: "block",
    size: "medium",
    state: "default",
    width: "fill-container",
    animation: true
  }
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:'{\n  render: () => html`<div class="align-center">${unsafeSVG(fProgressBarAnatomy)}</div>`,\n  name: "Anatomy"\n}',...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,x,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return html\`<f-div direction="row" padding="x-large" gap="medium"
            ><f-progress-bar value="30%" variant="curved" state="success"></f-progress-bar>
            <f-div width="hug-content"
                ><f-text variant="para" size="small" state="success">30%</f-text></f-div
            >
        </f-div>\`;
  },
  name: "value"
}`,...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var b,V,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const variants = ["block", "curved", "circle"];
    return html\`<f-div direction="row" gap="medium"
            >\${variants.map(item => html\`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar value="30%" .variant=\${item}></f-progress-bar>
                        <f-div width="hug-content"
                            ><f-text variant="para" size="small">variant="\${item}"</f-text></f-div
                        >
                    </f-div>\`)}</f-div
        >\`;
  },
  name: "variant"
}`,...(C=(V=s.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var z,y,H;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["large", "medium", "small", "x-small"];
    const variants = ["block", "curved", "circle"];
    return html\`\${variants.map(variant => html\`<f-div direction="column" gap="medium">
                    <f-div padding="medium"><f-text>variant="\${variant}"</f-text></f-div>
                    \${sizes.map(item => html\`<f-div direction="row" align="middle-left" padding="x-large" gap="medium"
                                ><f-progress-bar
                                    value="30%"
                                    .size=\${item}
                                    .variant=\${variant}
                                    state="primary"
                                ></f-progress-bar>
                                <f-div width="20%"
                                    ><f-text variant="para" size="small">size="\${item}"</f-text></f-div
                                >
                            </f-div>\`)}
                    <f-divider></f-divider>
                </f-div>\`)}\`;
  },
  name: "size"
}`,...(H=(y=o.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var B,L,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const states = ["default", "primary", "success", "danger", "warning", "custom,#fff"];
    return html\`<f-div direction="column" gap="medium"
            >\${states.map(item => html\`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar value="30%" .state=\${item} variant="curved"></f-progress-bar>
                        <f-div width="20%"><f-text variant="para" size="small">state="\${item}"</f-text></f-div>
                    </f-div>\`)}</f-div
        >\`;
  },
  name: "state"
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var S,Z,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const widths = ["fill-container", "300px"];
    return html\`<f-div direction="column" gap="medium"
            >\${widths.map(item => html\`<f-div direction="row" padding="x-large" gap="medium"
                        ><f-progress-bar
                            value="30%"
                            .width=\${item}
                            variant="curved"
                            state="primary"
                        ></f-progress-bar>
                        <f-div width="20%"><f-text variant="para" size="small">width="\${item}"</f-text></f-div>
                    </f-div>\`)}</f-div
        >\`;
  },
  name: "width"
}`,...(P=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:P.source}}};const O=["Playground","Anatomy","Value","Variant","Size","State","Width"],j=Object.freeze(Object.defineProperty({__proto__:null,Anatomy:n,Playground:t,Size:o,State:d,Value:i,Variant:s,Width:l,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{n as A,j as F,t as P,o as S,i as V,l as W,s as a,d as b};
