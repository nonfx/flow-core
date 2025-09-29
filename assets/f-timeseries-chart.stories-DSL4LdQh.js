import{f as y}from"./chunk-KZPPZA2C-BtqgzDBU.js";import{e as h,n as d,x as s}from"./iframe-Cd35n0SZ.js";import{g as f}from"./mock-data-utils-CU6H5kLF.js";import"./preload-helper-D4nn9Y_6.js";const q={title:"@nonfx/flow-dashboard/f-timeseries-chart",parameters:{controls:{hideNoControlsWarning:!0}}};function C(e){const o=[{value:y.number.int({min:150,max:200}),color:"var(--color-danger-default)"},{value:y.number.int({min:50,max:100}),color:"var(--color-warning-default)"}];return{xLines:[{value:e[0].points[+(e[0].points.length/3).toFixed(0)].date,color:"yellow"},{value:e[0].points[+(e[0].points.length/2).toFixed(0)].date,color:"yellow"}],yLines:o}}const g={render:()=>{const e=f(new Date),{xLines:o,yLines:c}=C(e),t=h();for(let n=0;n<10;n++){const r=new Date;r.setMinutes(r.getMinutes()+15*(n+1))}const l={data:e,xAxis:{lines:o,tickConfig:{format:n=>`${n.getHours()}h${n.getMinutes()}m`,type:"interval",interval:{type:"minutes",every:5}}},yAxis:{lines:c,tickConfig:{format:n=>`#${n}`,type:"auto"}},legends:{disabled:!1,position:"bottom",template:({click:n,mouseEnter:r,mouseLeave:i})=>{const u=["i-area","i-bar","i-line"];return s`<f-div height="hug-content" gap="medium" align="middle-center">
                        ${e.map((a,Y)=>s`<f-div
                                .id=${"legend-"+a.seriesName}
                                class="timeseries-legend"
                                width="hug-content"
                                height="hug-content"
                                @click=${()=>n(a.seriesName)}
                                @mouseenter=${()=>r(a.seriesName)}
                                @mouseleave=${()=>i()}
                                clickable
                                align="middle-left"
                                gap="small"
                            >
                                <f-icon-button
                                    .state=${"custom,"+a.color}
                                    category="packed"
                                    size="medium"
                                    .icon=${u[Y]}
                                ></f-icon-button>
                                <f-text>${a.seriesName}</f-text></f-div
                            >`)}
                    </f-div>`}},tooltipTemplate:(n,r)=>s`<f-div
                    width="280px"
                    max-height="500px"
                    overflow="scroll"
                    direction="column"
                    gap="small"
                >
                    ${r.map(i=>s`<f-text weight="medium" .state=${"custom,"+i.color}
                            >${i.seriesName} : ${i==null?void 0:i.value}</f-text
                        >`)}
                    <f-divider state="subtle"></f-divider>
                    <f-div align="middle-right" gap="x-small">
                        <f-text inline variant="code" size="small">
                            ${n.toLocaleDateString()} | ${n.toLocaleTimeString()}</f-text
                        >
                    </f-div>
                </f-div>`},m=setInterval(()=>{const n=e.map(i=>i.points).flat();f(new Date(n[n.length-1].date+60*1e3),e.length,1).forEach((i,u)=>{const a=e[u];a==null||a.points.shift(),a==null||a.points.push(...i.points)}),t.value&&(t.value.config={...l})},1e3);return setTimeout(()=>{clearInterval(m)},3e3),s`<f-div height="500px">
            <f-timeseries-chart ${d(t)} .config=${l}></f-timeseries-chart>
        </f-div>`},name:"all-options"},p={render:()=>{const e=f(new Date),o=h(),c={data:e,xAxis:{tickConfig:{format:t=>`${t.getHours()}h${t.getMinutes()}m`,type:"interval",interval:{type:"minutes",every:5}}},yAxis:{tickConfig:{format:t=>`#${t}`,type:"auto"}},legends:{disabled:!1,position:"bottom",template:({click:t,mouseEnter:l,mouseLeave:m})=>{const n=["i-user","i-home","i-computer"];return s`<f-div height="hug-content" align="middle-center">
                        ${e.map((r,i)=>s`<f-div
                                .id=${"legend-"+r.seriesName}
                                class="timeseries-legend"
                                width="hug-content"
                                height="hug-content"
                                padding="small medium"
                                @click=${()=>t(r.seriesName)}
                                @mouseenter=${()=>l(r.seriesName)}
                                @mouseleave=${()=>m()}
                                clickable
                                align="middle-left"
                                gap="small"
                            >
                                <f-icon-button
                                    .state=${"custom,"+r.color}
                                    category="packed"
                                    size="small"
                                    .icon=${n[i]}
                                ></f-icon-button>
                                <f-text .state=${"custom,"+r.color}>${r.seriesName}</f-text></f-div
                            >`)}
                    </f-div>`}}};return s`<f-div height="500px">
            <f-timeseries-chart ${d(o)} .config=${c}></f-timeseries-chart>
        </f-div>`},name:"legends-template"},v={render:()=>{const e=f(new Date),{xLines:o,yLines:c}=C(e),t=h(),l={data:e,xAxis:{lines:o},yAxis:{lines:c}};return s`<f-div height="500px">
            <f-timeseries-chart ${d(t)} .config=${l}></f-timeseries-chart>
        </f-div>`},name:"x-&-y-lines"},x={render:()=>{const e=f(new Date),o=h(),c={data:e,tooltipTemplate:(t,l)=>s`<f-div
                    width="280px"
                    max-height="500px"
                    overflow="scroll"
                    direction="column"
                    gap="small"
                >
                    ${l.map(m=>s`<f-text weight="medium" .state=${"custom,"+m.color}
                            >${m.seriesName} : ${m==null?void 0:m.value}</f-text
                        >`)}
                    <f-divider state="subtle"></f-divider>
                    <f-div align="middle-right" gap="x-small">
                        <f-text inline variant="code" size="small">
                            ${t.toLocaleDateString()} | ${t.toLocaleTimeString()}</f-text
                        >
                    </f-div>
                </f-div>`};return s`<f-div height="500px">
            <f-timeseries-chart ${d(o)} .config=${c}></f-timeseries-chart>
        </f-div>`},name:"tooltip-template"},$={render:()=>{const e=f(new Date),o=h(),c={data:e,xAxis:{tickConfig:{format:t=>`${t.getHours()}h${t.getMinutes()}m`,type:"auto"}},yAxis:{tickConfig:{format:t=>`#${t}`,type:"auto"}}};return s`<f-div height="500px">
            <f-timeseries-chart ${d(o)} .config=${c}></f-timeseries-chart>
        </f-div>`},name:"tick-format"},D={render:()=>{const e=f(new Date),{xLines:o,yLines:c}=C(e),t=h(),l={data:e,xAxis:{lines:o},yAxis:{lines:c}},m=setInterval(()=>{const n=e.map(i=>i.points).flat();f(new Date(n[n.length-1].date+60*1e3),e.length,1).forEach((i,u)=>{const a=e[u];a==null||a.points.shift(),a==null||a.points.push(...i.points)}),t.value&&(t.value.config={...l})},1e3);return setTimeout(()=>{clearInterval(m)},6e4*60),s`<f-div height="500px">
            <f-timeseries-chart ${d(t)} .config=${l}></f-timeseries-chart>
        </f-div>`},name:"realtime-data"};var w,T,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const {
      xLines,
      yLines
    } = getXYLines(chartData);
    const chartRef = createRef<FTimeseriesChart>();
    const customTickValues = [];
    for (let d = 0; d < 10; d++) {
      const date = new Date();
      date.setMinutes(date.getMinutes() + 15 * (d + 1));
      customTickValues.push(date);
    }
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      xAxis: {
        lines: xLines,
        tickConfig: {
          format: (d: Date) => {
            return \`\${d.getHours()}h\${d.getMinutes()}m\`;
          },
          // type: "auto"
          type: "interval",
          interval: {
            type: "minutes",
            every: 5
          }
          // type: "values",
          // values: customTickValues
        }
      },
      yAxis: {
        lines: yLines,
        tickConfig: {
          format: (value: number) => {
            return \`#\${value}\`;
          },
          type: "auto"
          // type: "values",
          // values: [50, 100]
        }
      },
      legends: {
        disabled: false,
        position: "bottom",
        template: ({
          click,
          mouseEnter,
          mouseLeave
        }) => {
          const icons = ["i-area", "i-bar", "i-line"];
          return html\`<f-div height="hug-content" gap="medium" align="middle-center">
                        \${chartData.map((series, idx) => {
            return html\`<f-div
                                .id=\${"legend-" + series.seriesName}
                                class="timeseries-legend"
                                width="hug-content"
                                height="hug-content"
                                @click=\${() => click(series.seriesName)}
                                @mouseenter=\${() => mouseEnter(series.seriesName)}
                                @mouseleave=\${() => mouseLeave()}
                                clickable
                                align="middle-left"
                                gap="small"
                            >
                                <f-icon-button
                                    .state=\${"custom," + series.color}
                                    category="packed"
                                    size="medium"
                                    .icon=\${icons[idx]}
                                ></f-icon-button>
                                <f-text>\${series.seriesName}</f-text></f-div
                            >\`;
          })}
                    </f-div>\`;
        }
      },
      tooltipTemplate: (tooltipDate: Date, tooltipPoints: TooltipPoints) => {
        return html\`<f-div
                    width="280px"
                    max-height="500px"
                    overflow="scroll"
                    direction="column"
                    gap="small"
                >
                    \${tooltipPoints.map(point => {
          return html\`<f-text weight="medium" .state=\${"custom," + point.color}
                            >\${point.seriesName} : \${point?.value}</f-text
                        >\`;
        })}
                    <f-divider state="subtle"></f-divider>
                    <f-div align="middle-right" gap="x-small">
                        <f-text inline variant="code" size="small">
                            \${tooltipDate.toLocaleDateString()} | \${tooltipDate.toLocaleTimeString()}</f-text
                        >
                    </f-div>
                </f-div>\`;
      }
    };
    const interval = setInterval(() => {
      const chartDataFlat = chartData.map(series => series.points).flat();
      const newPoints = generateTimeseriesChartData(new Date(chartDataFlat[chartDataFlat.length - 1].date + 60 * 1000), chartData.length, 1);
      newPoints.forEach((element, idx) => {
        const series = chartData[idx];
        series?.points.shift();
        series?.points.push(...element.points);
      });
      if (chartRef.value) {
        chartRef.value.config = {
          ...chartConfig
        };
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "all-options"
}`,...(L=(T=g.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var k,b,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const chartRef = createRef<FTimeseriesChart>();
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      xAxis: {
        tickConfig: {
          format: (d: Date) => {
            return \`\${d.getHours()}h\${d.getMinutes()}m\`;
          },
          // type: "auto"
          type: "interval",
          interval: {
            type: "minutes",
            every: 5
          }
          // type: "values",
          // values: customTickValues
        }
      },
      yAxis: {
        tickConfig: {
          format: (value: number) => {
            return \`#\${value}\`;
          },
          type: "auto"
          // type: "values",
          // values: [50, 100]
        }
      },
      legends: {
        disabled: false,
        position: "bottom",
        template: ({
          click,
          mouseEnter,
          mouseLeave
        }) => {
          const icons = ["i-user", "i-home", "i-computer"];
          return html\`<f-div height="hug-content" align="middle-center">
                        \${chartData.map((series, idx) => {
            return html\`<f-div
                                .id=\${"legend-" + series.seriesName}
                                class="timeseries-legend"
                                width="hug-content"
                                height="hug-content"
                                padding="small medium"
                                @click=\${() => click(series.seriesName)}
                                @mouseenter=\${() => mouseEnter(series.seriesName)}
                                @mouseleave=\${() => mouseLeave()}
                                clickable
                                align="middle-left"
                                gap="small"
                            >
                                <f-icon-button
                                    .state=\${"custom," + series.color}
                                    category="packed"
                                    size="small"
                                    .icon=\${icons[idx]}
                                ></f-icon-button>
                                <f-text .state=\${"custom," + series.color}>\${series.seriesName}</f-text></f-div
                            >\`;
          })}
                    </f-div>\`;
        }
      }
    };
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "legends-template"
}`,...(R=(b=p.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var F,A,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const {
      xLines,
      yLines
    } = getXYLines(chartData);
    const chartRef = createRef<FTimeseriesChart>();
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      xAxis: {
        lines: xLines
      },
      yAxis: {
        lines: yLines
      }
    };
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "x-&-y-lines"
}`,...(N=(A=v.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var P,S,M;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const chartRef = createRef<FTimeseriesChart>();
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      tooltipTemplate: (tooltipDate: Date, tooltipPoints: TooltipPoints) => {
        return html\`<f-div
                    width="280px"
                    max-height="500px"
                    overflow="scroll"
                    direction="column"
                    gap="small"
                >
                    \${tooltipPoints.map(point => {
          return html\`<f-text weight="medium" .state=\${"custom," + point.color}
                            >\${point.seriesName} : \${point?.value}</f-text
                        >\`;
        })}
                    <f-divider state="subtle"></f-divider>
                    <f-div align="middle-right" gap="x-small">
                        <f-text inline variant="code" size="small">
                            \${tooltipDate.toLocaleDateString()} | \${tooltipDate.toLocaleTimeString()}</f-text
                        >
                    </f-div>
                </f-div>\`;
      }
    };
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "tooltip-template"
}`,...(M=(S=x.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var E,z,I;$.parameters={...$.parameters,docs:{...(E=$.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const chartRef = createRef<FTimeseriesChart>();
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      xAxis: {
        tickConfig: {
          format: (d: Date) => {
            return \`\${d.getHours()}h\${d.getMinutes()}m\`;
          },
          type: "auto"
        }
      },
      yAxis: {
        tickConfig: {
          format: (value: number) => {
            return \`#\${value}\`;
          },
          type: "auto"
        }
      }
    };
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "tick-format"
}`,...(I=(z=$.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var H,V,X;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const chartData = generateTimeseriesChartData(new Date());
    const {
      xLines,
      yLines
    } = getXYLines(chartData);
    const chartRef = createRef<FTimeseriesChart>();
    const chartConfig: FTimeseriesChartConfig = {
      data: chartData,
      xAxis: {
        lines: xLines
      },
      yAxis: {
        lines: yLines
      }
    };
    const interval = setInterval(() => {
      const chartDataFlat = chartData.map(series => series.points).flat();
      const newPoints = generateTimeseriesChartData(new Date(chartDataFlat[chartDataFlat.length - 1].date + 60 * 1000), chartData.length, 1);
      newPoints.forEach((element, idx) => {
        const series = chartData[idx];
        series?.points.shift();
        series?.points.push(...element.points);
      });
      if (chartRef.value) {
        chartRef.value.config = {
          ...chartConfig
        };
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 60000 * 60);
    return html\`<f-div height="500px">
            <f-timeseries-chart \${ref(chartRef)} .config=\${chartConfig}></f-timeseries-chart>
        </f-div>\`;
  },
  name: "realtime-data"
}`,...(X=(V=D.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const B=["AllOptions","CustomLegendTemplate","Lines","CustomTooltip","TickFormat","Realtime"];export{g as AllOptions,p as CustomLegendTemplate,x as CustomTooltip,v as Lines,D as Realtime,$ as TickFormat,B as __namedExportsOrder,q as default};
