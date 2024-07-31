import{x as a}from"./lit-html-b1a28dc3.js";import{f as i}from"./index-3a83ac04.js";import"./lit-element-3bb9b17f.js";import{e as o,n as s}from"./ref-a55570ea.js";import{d as Le}from"./donwload-file-71a9ce32.js";const c=o();function T(){return i.string.alpha(10)}function n(e=100,t=8){const d=[];for(let f=0;f<e;f++){const O={value:i.person.firstName(),align:"middle-left",template:function(){return a`<f-div gap="small" align="middle-left" width="100%" height="100%">
					<f-pictogram .source=${i.internet.emoji()}></f-pictogram>
					<f-div direction="column" height="hug-content">
						<f-text>${this.value}</f-text>
						<f-text size="small" state="secondary">${i.person.jobTitle()}</f-text>
					</f-div>
				</f-div>`}},l={value:i.person.lastName(),template:function(){return a`<f-div gap="x-small" align="middle-center" width="100%" height="100%"
					><f-text inline state="success">${this.value}</f-text></f-div
				>`}},Be={value:i.internet.email(),template:function(){return a`<f-div gap="x-small"
					><f-icon state="warning" source="i-hashtag"></f-icon
					><f-text inline state="warning">${this.value}</f-text></f-div
				>`},actions:[{icon:"i-chat",tooltip:"This is Tooltip",id:T(),onClick(Me,F){c.value&&(c.value.open=!0,F&&(c.value.target=F))}},{icon:"i-mail",tooltip:"This is 2nd Tooltip",id:T()},{icon:"i-star",tooltip:"This is 3rd Tooltip",id:T()}]},Je={value:i.phone.number()},Ue={value:i.person.sex()},De={value:i.number.int({min:18,max:60})},Pe={value:i.date.birthdate({min:18,max:65,mode:"age"}),template:function(){return a`<f-div gap="small" width="hug-content">
					<f-icon source="i-date-time"></f-icon>
					<f-text inline
						>${this.value.getDate()}-${this.value.getMonth()}-${this.value.getFullYear()}</f-text
					></f-div
				>`},toString:function(){return this.value.toString()}},ze={value:`${i.location.street()}, ${i.location.city()}, ${i.location.state()}, ${i.location.zipCode()} ${i.location.country()}`},Ie={id:T(),disableSelection:f%2===0,expandIconPosition:"right",data:{firstName:O,lastName:l,age:De,birthDate:Pe,email:Be,mobile:Je,sex:Ue,address:ze},details:function(){return a`<f-div padding="large"
					><f-text state="danger">This is Details slot</f-text></f-div
				>`}};d.push(Ie)}return{header:Object.fromEntries(Object.entries({firstName:{value:"First name",sticky:!0,template:function(){return a`<f-div height="100%" align="middle-left"
					><f-text state="success">${this.value}</f-text></f-div
				>`}},lastName:{value:"Last name"},age:{value:"Age"},birthDate:{value:"Birth Date"},mobile:{value:"Mobile"},email:{value:"Email"},sex:{value:"Sex",disableSort:!0},address:{value:"Address",width:"300px",selected:!1,sticky:!0}}).slice(0,t)),rows:d}}const je={title:"@nonfx/flow-table/f-table-schema",parameters:{controls:{hideNoControlsWarning:!0}}},m={render:e=>{const t=()=>{console.log("in next event")},d=l=>{console.log("on row toggled",l.detail)},r=l=>{console.log("on row input",l.detail)},f=l=>{console.log("on header selected",l.detail)},O=()=>{c.value&&(c.value.open=!1)};return a`
            <f-popover ${s(c)} @overlay-click=${O}>
                <f-div padding="large" state="secondary">
                    <f-text
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.</f-text
                    >
                </f-div>
            </f-popover>
            <f-button style="display:none" label="download" @click=${Le}></f-button>
            <f-div
                state="default"
                id="reportTemplate"
                .maxHeight=${"100%"}
                direction="column"
                overflow="scroll"
            >
                <f-div state="warning" padding="large" variant="curved">
                    <f-text state="inherit"
                        >'f-table-schema' supports all properties and events of 'f-table'</f-text
                    >
                </f-div>
                <f-table-schema
                    .data=${e.data}
                    .highlightSelected=${e["highlight-selected"]}
                    .highlightHover=${e["highlight-hover"]}
                    .highlightColumnHover=${e["highlight-column-hover"]}
                    .selectable=${e.selectable}
                    .variant=${e.variant}
                    .size=${e.size}
                    .headerCellTemplate=${e["header-cell-template"]}
                    .stickyHeader=${e["sticky-header"]}
                    .rowsPerPage=${e["rows-per-page"]}
                    .sortBy=${e["sort-by"]}
                    .sortOrder=${e["sort-order"]}
                    .searchTerm=${e["search-term"]}
                    .showSearchBar=${e["show-search-bar"]}
                    .stickyCellBackground=${e["sticky-cell-background"]}
                    @next=${t}
                    @toggle-row-details=${d}
                    @row-input=${r}
                    @header-selected=${f}
                >
                </f-table-schema>
            </f-div>
        `},name:"Playground",argTypes:{variant:{control:"select",options:["stripped","outlined","underlined","bordered"]},size:{control:"select",options:["medium","small"]},selectable:{control:"select",options:["single","multiple","none"]},"highlight-selected":{control:{type:"boolean"}},"highlight-hover":{control:{type:"boolean"}},"highlight-column-hover":{control:{type:"boolean"}},"sticky-header":{control:{type:"boolean"}},"rows-per-page":{control:{type:"number"}},data:{control:{type:"object"}},"sort-by":{control:{type:"text"}},"sort-order":{control:"select",options:["desc","desc"]},"sticky-cell-background":{control:"select",options:["default","secondary","tertiary","subtle"]},"search-term":{control:{type:"text"}},"show-search-bar":{control:{type:"boolean"}}},args:{variant:"stripped",size:"medium",selectable:"none","highlight-selected":!0,"highlight-hover":!0,"highlight-column-hover":!0,"sticky-header":!0,"rows-per-page":20,data:n(60),"sort-by":"firstName","sort-order":"asc","search-term":"","show-search-bar":!0,"sticky-cell-background":"default","header-cell-template":e=>a`<f-div gap="small" align="middle-center">
                <f-icon source="i-icon"></f-icon>
                <f-text>${e}</f-text></f-div
            >`}},h={render:()=>{const e=n(5,5);return a`
            <f-div gap="small" height="100%">
                <f-table-schema .data=${e}> </f-table-schema>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" padding="small">
                    <f-text
                        >Sample data used to display table.
                        <a
                            href="https://github.com/ollionorg/flow-core/blob/main/packages/flow-table/f-table-schema.doc.md"
                            >Learn more</a
                        ></f-text
                    >
                    <f-divider></f-divider>
                    <f-div>
                        <pre>${JSON.stringify(e,void 0,8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        `},name:"data"},v={render:()=>{const e=n(5,5);return a`
            <f-div gap="small" height="100%">
                <f-table-schema .data=${e} .headerCellTemplate=${d=>a`<f-div gap="small" align="middle-center">
                <f-icon source="i-icon"></f-icon>
                <f-text>${d}</f-text></f-div
            >`}> </f-table-schema>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" padding="small">
                    <f-text
                        >Sample data used to display table.
                        <a
                            href="https://github.com/ollionorg/flow-core/blob/main/packages/flow-table/f-table-schema.doc.md"
                            >Learn more</a
                        ></f-text
                    >
                    <f-divider></f-divider>
                    <f-div>
                        <pre>${JSON.stringify(e,void 0,8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        `},name:"header-cell-template"},u={render:()=>{const e=n(30,5);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sticky-header=true</f-text>
                    <f-table-schema .data=${e} .stickyHeader=${!0}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sticky-header=false</f-text>
                    <f-table-schema .data=${e} .stickyHeader=${!1}> </f-table-schema>
                </f-div>
            </f-div>
        `},name:"sticky-header"},p={render:()=>{const e=n(30,10);return a`
            <f-div gap="small" height="100%" overflow="scroll" direction="column" width="100%">
                <f-text>
                    sticky-cell-background="secondary", this property works when variant!="stripped"</f-text
                >
                <f-table-schema
                    .stickyCellBackground=${"secondary"}
                    highlight-hover
                    variant="underlined"
                    .data=${e}
                    .stickyHeader=${!0}
                >
                </f-table-schema>
            </f-div>
        `},name:"sticky-cell-background"},g={render:()=>{const e=n(30,5);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> rows-per-page="5"</f-text>
                    <f-table-schema rows-per-page="5" .data=${e} .stickyHeader=${!0}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> rows-per-page="10"</f-text>
                    <f-table-schema rows-per-page="10" .data=${e} .stickyHeader=${!1}> </f-table-schema>
                </f-div>
            </f-div>
        `},name:"rows-per-page"},b={render:()=>{const e=n(10,5);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName"</f-text>
                    <f-table-schema sort-by="firstName" .data=${e} .stickyHeader=${!0}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="age"</f-text>
                    <f-table-schema sort-by="age" .data=${e} .stickyHeader=${!1}> </f-table-schema>
                </f-div>
            </f-div>
        `},name:"sort-by"},w={render:()=>{const e=n(10,5);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName" sort-order="asc"</f-text>
                    <f-table-schema sort-by="firstName" sort-order="asc" .data=${e} .stickyHeader=${!0}>
                    </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName" sort-order="desc"</f-text>
                    <f-table-schema
                        sort-by="firstName"
                        sort-order="desc"
                        .data=${e}
                        .stickyHeader=${!1}
                    >
                    </f-table-schema>
                </f-div>
            </f-div>
        `},name:"sort-order"},y={render:()=>{const e=n(10);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text>search-term="female"</f-text>
                    <f-table-schema search-term="female" .data=${e} .stickyHeader=${!0}>
                    </f-table-schema>
                </f-div>
            </f-div>
        `},name:"search-term"},x={render:()=>{const e=n(10,5);return a`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> show-search-bar="true"</f-text>
                    <f-table-schema show-search-bar .data=${e}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> show-search-bar="false"</f-text>
                    <f-table-schema .showSearchBar=${!1} .data=${e}> </f-table-schema>
                </f-div>
            </f-div>
        `},name:"show-search-bar"},$={render:()=>{const e=n(10,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>'toggle-row-details' event emitted whenever any row is open or closed</f-text>
                <f-table-schema .data=${e} @toggle-row-details=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@toggle-row-details"},k={render:()=>{const e=n(10,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'row-input' event emitted whenever any row is selected through checkbox or radio</f-text
                >
                <f-table-schema .data=${e} selectable="multiple" @row-input=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@row-input"},S={render:()=>{const e=n(10,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'header-selected' event emitted whenever any column is selected by clicking on column
                    header</f-text
                >
                <f-table-schema .data=${e} selectable="multiple" @header-selected=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@header-selected"},R={render:()=>{const e=n(10,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'header-input' event emitted whenever checkbox is checked/unchecked in header</f-text
                >
                <f-table-schema .data=${e} selectable="multiple" @header-input=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@header-input"},C={render:()=>{const e=n(50,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text>'sort' event emitted whenever user on sort icon in header cell.</f-text>
                <f-table-schema .data=${e} rows-per-page="20" @sort=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@sort"},N={render:()=>{const e=n(50,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text
                    >'next' event emitted whenever user reach to at the end of records by scrolling.</f-text
                >
                <f-table-schema .data=${e} rows-per-page="20" @next=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@next"},E={render:()=>{const e=n(50,5),t=o();return a`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text>'row-click' event emitted whenever user click on row</f-text>
                <f-table-schema .data=${e} rows-per-page="20" @row-click=${r=>{t.value&&(t.value.textContent=JSON.stringify(r.detail,void 0,2))}}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre ${s(t)}></pre> `},name:"@row-click"},H={render:()=>{const e=n(0,5);return a`<f-div direction="column" padding="small" gap="large" height="50%">
            <f-text>slot='no-data' is used to customize message when there are 0 rows to display</f-text>
            <f-table-schema .data=${e} .showSearchBar=${!1}>
                <f-div slot="no-data" state="warning" variant="curved" width="100%" padding="medium">
                    <f-text state="warning">This is my custom no data meesage</f-text>
                </f-div>
            </f-table-schema>
        </f-div> `},name:"slot='no-data'"};var B,J,U;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: Record<string, unknown>) => {
    const handleNext = () => {
      console.log("in next event");
    };
    const toggleRowDetails = (event: CustomEvent) => {
      console.log("on row toggled", event.detail);
    };
    const onRowInput = (event: CustomEvent) => {
      console.log("on row input", event.detail);
    };
    const onHeaderSelect = (event: CustomEvent) => {
      console.log("on header selected", event.detail);
    };
    const handleOverlayClick = () => {
      if (popoverRef.value) {
        popoverRef.value.open = false;
      }
    };
    return html\`
            <f-popover \${ref(popoverRef)} @overlay-click=\${handleOverlayClick}>
                <f-div padding="large" state="secondary">
                    <f-text
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.</f-text
                    >
                </f-div>
            </f-popover>
            <f-button style="display:none" label="download" @click=\${downloadFile}></f-button>
            <f-div
                state="default"
                id="reportTemplate"
                .maxHeight=\${"100%"}
                direction="column"
                overflow="scroll"
            >
                <f-div state="warning" padding="large" variant="curved">
                    <f-text state="inherit"
                        >'f-table-schema' supports all properties and events of 'f-table'</f-text
                    >
                </f-div>
                <f-table-schema
                    .data=\${args.data}
                    .highlightSelected=\${args["highlight-selected"]}
                    .highlightHover=\${args["highlight-hover"]}
                    .highlightColumnHover=\${args["highlight-column-hover"]}
                    .selectable=\${args.selectable}
                    .variant=\${args.variant}
                    .size=\${args.size}
                    .headerCellTemplate=\${args["header-cell-template"]}
                    .stickyHeader=\${args["sticky-header"]}
                    .rowsPerPage=\${args["rows-per-page"]}
                    .sortBy=\${args["sort-by"]}
                    .sortOrder=\${args["sort-order"]}
                    .searchTerm=\${args["search-term"]}
                    .showSearchBar=\${args["show-search-bar"]}
                    .stickyCellBackground=\${args["sticky-cell-background"]}
                    @next=\${handleNext}
                    @toggle-row-details=\${toggleRowDetails}
                    @row-input=\${onRowInput}
                    @header-selected=\${onHeaderSelect}
                >
                </f-table-schema>
            </f-div>
        \`;
  },
  name: "Playground",
  argTypes: {
    variant: {
      control: "select",
      options: ["stripped", "outlined", "underlined", "bordered"]
    },
    size: {
      control: "select",
      options: ["medium", "small"]
    },
    selectable: {
      control: "select",
      options: ["single", "multiple", "none"]
    },
    ["highlight-selected"]: {
      control: {
        type: "boolean"
      }
    },
    ["highlight-hover"]: {
      control: {
        type: "boolean"
      }
    },
    ["highlight-column-hover"]: {
      control: {
        type: "boolean"
      }
    },
    ["sticky-header"]: {
      control: {
        type: "boolean"
      }
    },
    ["rows-per-page"]: {
      control: {
        type: "number"
      }
    },
    data: {
      control: {
        type: "object"
      }
    },
    ["sort-by"]: {
      control: {
        type: "text"
      }
    },
    ["sort-order"]: {
      control: "select",
      options: ["desc", "desc"]
    },
    ["sticky-cell-background"]: {
      control: "select",
      options: ["default", "secondary", "tertiary", "subtle"]
    },
    ["search-term"]: {
      control: {
        type: "text"
      }
    },
    ["show-search-bar"]: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    variant: "stripped",
    size: "medium",
    selectable: "none",
    ["highlight-selected"]: true,
    ["highlight-hover"]: true,
    ["highlight-column-hover"]: true,
    ["sticky-header"]: true,
    ["rows-per-page"]: 20,
    data: getFakeUsers(60),
    ["sort-by"]: "firstName",
    ["sort-order"]: "asc",
    ["search-term"]: "",
    ["show-search-bar"]: true,
    ["sticky-cell-background"]: "default",
    ["header-cell-template"]: (val: string) => {
      return html\`<f-div gap="small" align="middle-center">
                <f-icon source="i-icon"></f-icon>
                <f-text>\${val}</f-text></f-div
            >\`;
    }
  }
}`,...(U=(J=m.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var D,P,z;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(5, 5);
    return html\`
            <f-div gap="small" height="100%">
                <f-table-schema .data=\${data}> </f-table-schema>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" padding="small">
                    <f-text
                        >Sample data used to display table.
                        <a
                            href="https://github.com/ollionorg/flow-core/blob/main/packages/flow-table/f-table-schema.doc.md"
                            >Learn more</a
                        ></f-text
                    >
                    <f-divider></f-divider>
                    <f-div>
                        <pre>\${JSON.stringify(data, undefined, 8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        \`;
  },
  name: "data"
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var I,L,j;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(5, 5);
    const headerCellTemplate = (val: string) => {
      return html\`<f-div gap="small" align="middle-center">
                <f-icon source="i-icon"></f-icon>
                <f-text>\${val}</f-text></f-div
            >\`;
    };
    return html\`
            <f-div gap="small" height="100%">
                <f-table-schema .data=\${data} .headerCellTemplate=\${headerCellTemplate}> </f-table-schema>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" padding="small">
                    <f-text
                        >Sample data used to display table.
                        <a
                            href="https://github.com/ollionorg/flow-core/blob/main/packages/flow-table/f-table-schema.doc.md"
                            >Learn more</a
                        ></f-text
                    >
                    <f-divider></f-divider>
                    <f-div>
                        <pre>\${JSON.stringify(data, undefined, 8)}</pre>
                    </f-div>
                </f-div>
            </f-div>
        \`;
  },
  name: "header-cell-template"
}`,...(j=(L=v.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,M,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(30, 5);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sticky-header=true</f-text>
                    <f-table-schema .data=\${data} .stickyHeader=\${true}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sticky-header=false</f-text>
                    <f-table-schema .data=\${data} .stickyHeader=\${false}> </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "sticky-header"
}`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var W,Y,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(30, 10);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" direction="column" width="100%">
                <f-text>
                    sticky-cell-background="secondary", this property works when variant!="stripped"</f-text
                >
                <f-table-schema
                    .stickyCellBackground=\${"secondary"}
                    highlight-hover
                    variant="underlined"
                    .data=\${data}
                    .stickyHeader=\${true}
                >
                </f-table-schema>
            </f-div>
        \`;
  },
  name: "sticky-cell-background"
}`,...(q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,K,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(30, 5);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> rows-per-page="5"</f-text>
                    <f-table-schema rows-per-page="5" .data=\${data} .stickyHeader=\${true}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> rows-per-page="10"</f-text>
                    <f-table-schema rows-per-page="10" .data=\${data} .stickyHeader=\${false}> </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "rows-per-page"
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName"</f-text>
                    <f-table-schema sort-by="firstName" .data=\${data} .stickyHeader=\${true}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="age"</f-text>
                    <f-table-schema sort-by="age" .data=\${data} .stickyHeader=\${false}> </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "sort-by"
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName" sort-order="asc"</f-text>
                    <f-table-schema sort-by="firstName" sort-order="asc" .data=\${data} .stickyHeader=\${true}>
                    </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> sort-by="firstName" sort-order="desc"</f-text>
                    <f-table-schema
                        sort-by="firstName"
                        sort-order="desc"
                        .data=\${data}
                        .stickyHeader=\${false}
                    >
                    </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "sort-order"
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text>search-term="female"</f-text>
                    <f-table-schema search-term="female" .data=\${data} .stickyHeader=\${true}>
                    </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "search-term"
}`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,oe,se;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    return html\`
            <f-div gap="small" height="100%" overflow="scroll" gap="auto" width="100%">
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> show-search-bar="true"</f-text>
                    <f-table-schema show-search-bar .data=\${data}> </f-table-schema>
                </f-div>
                <f-divider></f-divider>
                <f-div direction="column" gap="medium" overflow="hidden">
                    <f-text> show-search-bar="false"</f-text>
                    <f-table-schema .showSearchBar=\${false} .data=\${data}> </f-table-schema>
                </f-div>
            </f-div>
        \`;
  },
  name: "show-search-bar"
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,fe;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    const fieldRef = createRef();
    const toggleRowDetails = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text>'toggle-row-details' event emitted whenever any row is open or closed</f-text>
                <f-table-schema .data=\${data} @toggle-row-details=\${toggleRowDetails}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@toggle-row-details"
}`,...(fe=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var me,he,ve;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'row-input' event emitted whenever any row is selected through checkbox or radio</f-text
                >
                <f-table-schema .data=\${data} selectable="multiple" @row-input=\${handleEvent}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@row-input"
}`,...(ve=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ue,pe,ge;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'header-selected' event emitted whenever any column is selected by clicking on column
                    header</f-text
                >
                <f-table-schema .data=\${data} selectable="multiple" @header-selected=\${handleEvent}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@header-selected"
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,we,ye;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(10, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large">
                <f-text
                    >'header-input' event emitted whenever checkbox is checked/unchecked in header</f-text
                >
                <f-table-schema .data=\${data} selectable="multiple" @header-input=\${handleEvent}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@header-input"
}`,...(ye=(we=R.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var xe,$e,ke;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(50, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text>'sort' event emitted whenever user on sort icon in header cell.</f-text>
                <f-table-schema .data=\${data} rows-per-page="20" @sort=\${handleEvent}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@sort"
}`,...(ke=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:ke.source}}};var Se,Re,Ce;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(50, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text
                    >'next' event emitted whenever user reach to at the end of records by scrolling.</f-text
                >
                <f-table-schema .data=\${data} rows-per-page="20" @next=\${handleEvent}> </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@next"
}`,...(Ce=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Ne,Ee,He;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(50, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" state="subtle" padding="small" gap="large" height="50%">
                <f-text>'row-click' event emitted whenever user click on row</f-text>
                <f-table-schema .data=\${data} rows-per-page="20" @row-click=\${handleEvent}>
                </f-table-schema>
                <f-divider></f-divider>
            </f-div>
            <br />
            <f-divider></f-divider>
            <br />
            <f-text state="secondary">'event.detail' will display here</f-text>
            <pre \${ref(fieldRef)}></pre> \`;
  },
  name: "@row-click"
}`,...(He=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Te,Oe,Fe;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const data = getFakeUsers(0, 5);
    const fieldRef = createRef();
    const handleEvent = (event: CustomEvent) => {
      if (fieldRef.value) {
        fieldRef.value.textContent = JSON.stringify(event.detail, undefined, 2);
      }
    };
    return html\`<f-div direction="column" padding="small" gap="large" height="50%">
            <f-text>slot='no-data' is used to customize message when there are 0 rows to display</f-text>
            <f-table-schema .data=\${data} .showSearchBar=\${false}>
                <f-div slot="no-data" state="warning" variant="curved" width="100%" padding="medium">
                    <f-text state="warning">This is my custom no data meesage</f-text>
                </f-div>
            </f-table-schema>
        </f-div> \`;
  },
  name: "slot='no-data'"
}`,...(Fe=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};const _e=["Playground","Data","HeaderCellTemplate","StickyHeader","StickyCellBackground","RowsPerPage","SortBy","SortOrder","SearchTerm","ShowSearchBar","ToggleRowDetails","RowInput","HeaderSelected","HeaderInput","Sort","Next","RowClick","NoData"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Data:h,HeaderCellTemplate:v,HeaderInput:R,HeaderSelected:S,Next:N,NoData:H,Playground:m,RowClick:E,RowInput:k,RowsPerPage:g,SearchTerm:y,ShowSearchBar:x,Sort:C,SortBy:b,SortOrder:w,StickyCellBackground:p,StickyHeader:u,ToggleRowDetails:$,__namedExportsOrder:_e,default:je},Symbol.toStringTag,{value:"Module"}));export{Ke as F,m as P};
