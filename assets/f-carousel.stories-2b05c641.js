import{x as t}from"./lit-html-b1a28dc3.js";import{o as A}from"./unsafe-svg-e29b2cc0.js";const _=`<svg width="320" height="166" viewBox="0 0 320 166" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="166" fill="#CCE7FF"/>
<g clip-path="url(#clip0_901_17660)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.7037 76.0963C28.2765 76.669 28.2765 77.5977 27.7037 78.1704L22.8742 83L27.7037 87.8296C28.2765 88.4024 28.2765 89.331 27.7037 89.9038C27.131 90.4765 26.2023 90.4765 25.6296 89.9038L19.7629 84.0371C19.1901 83.4643 19.1901 82.5357 19.7629 81.9629L25.6296 76.0963C26.2023 75.5235 27.131 75.5235 27.7037 76.0963Z" fill="#202A36"/>
</g>
<rect x="47" y="24.5" width="226" height="117" rx="3.5" stroke="#9267E9" stroke-dasharray="4 4"/>
<g clip-path="url(#clip1_901_17660)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M291.763 89.9038C291.19 89.331 291.19 88.4024 291.763 87.8296L296.592 83L291.763 78.1704C291.19 77.5977 291.19 76.669 291.763 76.0963C292.336 75.5235 293.264 75.5235 293.837 76.0963L299.704 81.9629C300.277 82.5357 300.277 83.4643 299.704 84.0371L293.837 89.9038C293.264 90.4765 292.336 90.4765 291.763 89.9038Z" fill="#202A36"/>
</g>
<defs>
<clipPath id="clip0_901_17660">
<rect width="16" height="16" fill="white" transform="translate(16 75)"/>
</clipPath>
<clipPath id="clip1_901_17660">
<rect width="16" height="16" fill="white" transform="translate(288 75)"/>
</clipPath>
</defs>
</svg>`,S={title:"@nonfx/flow-core/f-carousel",parameters:{controls:{hideNoControlsWarning:!0}}},i={render:n=>{const a=r=>{console.log("in next callback",r)},e=r=>{console.log("in previous callback",r)};return t`<f-div width="100%" padding="large">
            <f-carousel
                .autoPlay=${n["auto-play"]}
                .autoPlayInterval=${n["auto-play-interval"]}
                .activeContentId=${n["active-content-id"]}
                @next=${a}
                @prev=${e}
            >
                ${["primary","secondary","tertiary","warning","danger"].map((r,c)=>t`<f-carousel-content content-id=${"slide-"+(c+1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=${r}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit"
                                    >${"slide-"+(c+1)}</f-text
                                >
                            </f-div>
                        </f-carousel-content>`)}
            </f-carousel>
        </f-div>`},name:"Playground",argTypes:{"active-content-id":{control:"select",options:["slide-1","slide-2","slide-3","slide-4","slide-5"]},"auto-play":{control:"boolean"},"auto-play-interval":{control:"number"}},args:{"active-content-id":"slide-3","auto-play":!0,"auto-play-interval":5e3}},l={render:()=>t`<f-div align="middle-center" padding="large">${A(_)}</f-div>`,name:"Anatomy"},d={render:n=>t`<f-div width="100%" padding="large">
            <f-carousel active-content-id="slide-3">
                ${["primary","secondary","tertiary","warning","danger"].map((a,e)=>t`<f-carousel-content content-id=${"slide-"+(e+1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=${a}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    ${"slide-"+(e+1)}</f-text
                                >
                                <f-text size="small">active-content-id set to ${"slide-"+(e+1)}</f-text>
                            </f-div>
                        </f-carousel-content>`)}
            </f-carousel>
        </f-div>`,name:"active-content-id"},o={render:n=>t`<f-div width="100%" padding="large">
            <f-carousel auto-play>
                ${["primary","secondary","tertiary","warning","danger"].map((a,e)=>t`<f-carousel-content content-id=${"slide-"+(e+1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=${a}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    ${"slide-"+(e+1)}</f-text
                                >
                                <f-text size="small">auto-play set to true</f-text>
                            </f-div>
                        </f-carousel-content>`)}
            </f-carousel>
        </f-div>`,name:"auto-play"},s={render:n=>t`<f-div width="100%" padding="large">
            <f-carousel auto-play auto-play-interval="7000">
                ${["primary","secondary","tertiary","warning","danger"].map((a,e)=>t`<f-carousel-content content-id=${"slide-"+(e+1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                direction="column"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=${a}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    ${"slide-"+(e+1)}</f-text
                                >
                                <f-text size="small">auto-play-interval is 7000ms</f-text>
                            </f-div>
                        </f-carousel-content>`)}
            </f-carousel>
        </f-div>`,name:"auto-play-interval"};var g,p,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const handleNext = e => {
      console.log("in next callback", e);
    };
    const handlePrev = e => {
      console.log("in previous callback", e);
    };
    return html\`<f-div width="100%" padding="large">
            <f-carousel
                .autoPlay=\${args["auto-play"]}
                .autoPlayInterval=\${args["auto-play-interval"]}
                .activeContentId=\${args["active-content-id"]}
                @next=\${handleNext}
                @prev=\${handlePrev}
            >
                \${["primary", "secondary", "tertiary", "warning", "danger"].map((state, idx) => html\`<f-carousel-content content-id=\${"slide-" + (idx + 1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=\${state}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit"
                                    >\${"slide-" + (idx + 1)}</f-text
                                >
                            </f-div>
                        </f-carousel-content>\`)}
            </f-carousel>
        </f-div>\`;
  },
  name: "Playground",
  argTypes: {
    ["active-content-id"]: {
      control: "select",
      options: ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"]
    },
    ["auto-play"]: {
      control: "boolean"
    },
    ["auto-play-interval"]: {
      control: "number"
    }
  },
  args: {
    ["active-content-id"]: "slide-3",
    ["auto-play"]: true,
    ["auto-play-interval"]: 5000
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,v,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html`<f-div align="middle-center" padding="large">${unsafeSVG(FCarouselAnatomy)}</f-div>`,\n  name: "Anatomy"\n}',...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var m,y,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`<f-div width="100%" padding="large">
            <f-carousel active-content-id="slide-3">
                \${["primary", "secondary", "tertiary", "warning", "danger"].map((state, idx) => html\`<f-carousel-content content-id=\${"slide-" + (idx + 1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=\${state}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    \${"slide-" + (idx + 1)}</f-text
                                >
                                <f-text size="small">active-content-id set to \${"slide-" + (idx + 1)}</f-text>
                            </f-div>
                        </f-carousel-content>\`)}
            </f-carousel>
        </f-div>\`;
  },
  name: "active-content-id"
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,w,C;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`<f-div width="100%" padding="large">
            <f-carousel auto-play>
                \${["primary", "secondary", "tertiary", "warning", "danger"].map((state, idx) => html\`<f-carousel-content content-id=\${"slide-" + (idx + 1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=\${state}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    \${"slide-" + (idx + 1)}</f-text
                                >
                                <f-text size="small">auto-play set to true</f-text>
                            </f-div>
                        </f-carousel-content>\`)}
            </f-carousel>
        </f-div>\`;
  },
  name: "auto-play"
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var P,b,z;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return html\`<f-div width="100%" padding="large">
            <f-carousel auto-play auto-play-interval="7000">
                \${["primary", "secondary", "tertiary", "warning", "danger"].map((state, idx) => html\`<f-carousel-content content-id=\${"slide-" + (idx + 1)}>
                            <f-div
                                height="300px"
                                width="100%"
                                direction="column"
                                padding="large"
                                gap="large"
                                variant="curved"
                                align="middle-center"
                                .state=\${state}
                            >
                                <f-text size="x-large" weight="bold" variant="heading" state="inherit">
                                    \${"slide-" + (idx + 1)}</f-text
                                >
                                <f-text size="small">auto-play-interval is 7000ms</f-text>
                            </f-div>
                        </f-carousel-content>\`)}
            </f-carousel>
        </f-div>\`;
  },
  name: "auto-play-interval"
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const I=["Playground","Anatomy","ActiveContentId","AutoPlay","AutoPlayInterval"],F=Object.freeze(Object.defineProperty({__proto__:null,ActiveContentId:d,Anatomy:l,AutoPlay:o,AutoPlayInterval:s,Playground:i,__namedExportsOrder:I,default:S},Symbol.toStringTag,{value:"Module"}));export{l as A,F,i as P,d as a,o as b,s as c};
