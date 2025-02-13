import{x as d}from"./lit-html-57bab4fd.js";import{g}from"./mock-data-utils-f5f3c130.js";import{f as e}from"./index-1f53deeb.js";import{n as p,e as u}from"./ref-8dc3593a.js";import"./directive-helpers-ef3e3cc7.js";import"./directive-12249aa5.js";const y={title:"@nonfx/flow-dashboard/f-dashboard",argTypes:{field:{control:!1}}},l=()=>{const t=["p-azure","p-google","p-aws","p-hadoop","p-sonarcloud","p-snowflake","p-terraform","p-discord"],a=[],s=new Date;for(let r=0;r<10;r++)r%2===0?a.push({type:"timeseries",data:{data:g(s)},id:e.string.alpha(10),header(){const n=e.company.name(),i=e.lorem.sentences(3);return d`<f-div
                        align="middle-left"
                        height="hug-content"
                        padding="medium"
                        gap="medium"
                        border="small solid subtle bottom"
                    >
                        <f-icon .source=${e.helpers.arrayElement(t)} size="large"></f-icon>
                        <f-div direction="column" align="middle-left">
                            <f-text ellipsis .tooltip=${n} variant="heading" weight="medium">${n}</f-text>
                            <f-text ellipsis .tooltip=${i} size="small">${i}</f-text>
                        </f-div>
                    </f-div>`},footer:()=>{const n=e.date.recent({refDate:new Date}),i=e.helpers.arrayElement(["danger","success","warning"]);return d`<f-div
                        padding="medium"
                        gap="auto"
                        border="small solid subtle top"
                        height="hug-content"
                    >
                        <f-div gap="small" align="middle-left">
                            <f-icon source="i-clock-outline" size="small" .state=${i}></f-icon>
                            <f-text .state=${i} size="small"
                                >Last updated on ${n.toLocaleDateString()} ${n.toLocaleTimeString()}</f-text
                            >
                        </f-div>
                        <f-button label="view details" size="x-small" icon-right="i-new-tab"></f-button>
                    </f-div>`},placement:{w:e.number.int({min:4,max:8}),h:e.number.int({min:3,max:4})}}):a.push({type:"big-number",data:e.number.int({min:11,max:999}),dataType:"count",id:e.string.alpha(10),header:{title:e.company.name(),description:e.lorem.sentences(3)},footer:"Powered by Flow",placement:{w:e.number.int({min:1.5,max:3}),h:e.number.int({min:1.5,max:2})}});return a},h=()=>{const t=u(),a={widgets:l()};return d`<f-div height="100%" width="100%" gap="small" direction="column">
        <f-div
            variant="curved"
            state="primary"
            height="hug-content"
            padding="medium"
            gap="auto"
            align="middle-left"
        >
            <f-text state="inherit">Click on randomize button to generate new data</f-text>
            <f-button @click=${()=>{t.value&&(t.value.config={widgets:l()})}} label="randomize"></f-button>
        </f-div>

        <f-dashboard ${p(t)} .config=${a}> </f-dashboard>
    </f-div>`},o=h.bind({});var m,f,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const dashboardRef = createRef<FDashboard>();
  const dashboardConfig: FDashboardConfig = {
    widgets: getWidgets()
  };
  const randomize = () => {
    if (dashboardRef.value) {
      dashboardRef.value.config = {
        widgets: getWidgets()
      };
    }
  };
  return html\`<f-div height="100%" width="100%" gap="small" direction="column">
        <f-div
            variant="curved"
            state="primary"
            height="hug-content"
            padding="medium"
            gap="auto"
            align="middle-left"
        >
            <f-text state="inherit">Click on randomize button to generate new data</f-text>
            <f-button @click=\${randomize} label="randomize"></f-button>
        </f-div>

        <f-dashboard \${ref(dashboardRef)} .config=\${dashboardConfig}> </f-dashboard>
    </f-div>\`;
}`,...(c=(f=o.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const D=["basic"];export{D as __namedExportsOrder,o as basic,y as default};
