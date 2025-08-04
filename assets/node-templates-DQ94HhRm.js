import{x as f}from"./iframe-D6om2Bsl.js";function m(t){var i,l,e,a;return f`<f-div
		state=${(i=t.fData)==null?void 0:i.state}
		width="100%"
		height="100%"
		padding="small"
		align="top-left"
		variant="curved"
		gap="small"
		${t.fChildren&&!t.fHideChildren?'border="small solid default bottom"':""}
	>
		<f-pictogram variant="circle" source="${(l=t.fData)==null?void 0:l.fullName}"></f-pictogram>
		<f-div direction="column">
			<f-text size="small" ellipsis>${(e=t.fData)==null?void 0:e.fullName}</f-text>
			<f-text size="x-small" ellipsis>${t.x} ${t.y}</f-text>
		</f-div>
		<f-div direction="column">
			<f-text size="small" ellipsis>${(a=t.fData)==null?void 0:a.fullName}</f-text>
		</f-div>
		${t.childrenToggle}
	</f-div>`}function r(t){var i,l;return f`<f-div
		state="secondary"
		width="100%"
		height="100%"
		padding="none medium"
		align="middle-left"
		gap="small"
		border="small solid default bottom"
	>
		<f-icon source="${(i=t.fData)==null?void 0:i.icon}" size="small"></f-icon>
		<f-text size="small" ellipsis>${(l=t.fData)==null?void 0:l.title}</f-text>
	</f-div>`}export{r as c,m as n};
