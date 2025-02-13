/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,S=x.trustedTypes,U=S?S.createPolicy("lit-html",{createHTML:h=>h}):void 0,E="$lit$",d=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+d,Q=`<${B}>`,v=document,H=()=>v.createComment(""),N=h=>h===null||typeof h!="object"&&typeof h!="function",P=Array.isArray,k=h=>P(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",w=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,L=/>/g,u=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,V=/"/g,D=/^(?:script|style|textarea|title)$/i,j=h=>(t,...e)=>({_$litType$:h,strings:t,values:e}),X=j(1),Y=j(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),W=new WeakMap,g=v.createTreeWalker(v,129);function z(h,t){if(!P(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return U!==void 0?U.createHTML(t):t}const Z=(h,t)=>{const e=h.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=y;for(let _=0;_<e;_++){const r=h[_];let $,a,l=-1,c=0;for(;c<r.length&&(n.lastIndex=c,a=n.exec(r),a!==null);)c=n.lastIndex,n===y?a[1]==="!--"?n=R:a[1]!==void 0?n=L:a[2]!==void 0?(D.test(a[2])&&(i=RegExp("</"+a[2],"g")),n=u):a[3]!==void 0&&(n=u):n===u?a[0]===">"?(n=i??y,l=-1):a[1]===void 0?l=-2:(l=n.lastIndex-a[2].length,$=a[1],n=a[3]===void 0?u:a[3]==='"'?V:O):n===V||n===O?n=u:n===R||n===L?n=y:(n=u,i=void 0);const p=n===u&&h[_+1].startsWith("/>")?" ":"";o+=n===y?r+Q:l>=0?(s.push($),r.slice(0,l)+E+r.slice(l)+d+p):r+d+(l===-2?_:p)}return[z(h,o+(h[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class b{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const _=t.length-1,r=this.parts,[$,a]=Z(t,e);if(this.el=b.createElement($,s),g.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=g.nextNode())!==null&&r.length<_;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(E)){const c=a[n++],p=i.getAttribute(l).split(d),M=/([.?@])?(.*)/.exec(c);r.push({type:1,index:o,name:M[2],strings:p,ctor:M[1]==="."?q:M[1]==="?"?G:M[1]==="@"?J:C}),i.removeAttribute(l)}else l.startsWith(d)&&(r.push({type:6,index:o}),i.removeAttribute(l));if(D.test(i.tagName)){const l=i.textContent.split(d),c=l.length-1;if(c>0){i.textContent=S?S.emptyScript:"";for(let p=0;p<c;p++)i.append(l[p],H()),g.nextNode(),r.push({type:2,index:++o});i.append(l[c],H())}}}else if(i.nodeType===8)if(i.data===B)r.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(d,l+1))!==-1;)r.push({type:7,index:o}),l+=d.length-1}o++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function f(h,t,e=h,s){var n,_;if(t===T)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((_=i==null?void 0:i._$AO)==null||_.call(i,!1),o===void 0?i=void 0:(i=new o(h),i._$AT(h,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=f(h,i._$AS(h,t.values),i,s)),t}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);g.currentNode=i;let o=g.nextNode(),n=0,_=0,r=s[0];for(;r!==void 0;){if(n===r.index){let $;r.type===2?$=new m(o,o.nextSibling,this,t):r.type===1?$=new r.ctor(o,r.name,r.strings,this,t):r.type===6&&($=new K(o,this,t)),this._$AV.push($),r=s[++_]}n!==(r==null?void 0:r.index)&&(o=g.nextNode(),n++)}return g.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class m{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=f(this,t,e),N(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):k(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=b.createElement(z(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new F(i,this),_=n.u(this.options);n.p(e),this.T(_),this._$AH=n}}_$AC(t){let e=W.get(t.strings);return e===void 0&&W.set(t.strings,e=new b(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new m(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class C{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=f(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const _=t;let r,$;for(t=o[0],r=0;r<o.length-1;r++)$=f(this,_[s+r],e,r),$===T&&($=this._$AH[r]),n||(n=!N($)||$!==this._$AH[r]),$===A?t=A:t!==A&&(t+=($??"")+o[r+1]),this._$AH[r]=$}n&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class q extends C{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class G extends C{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class J extends C{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=f(this,t,e,0)??A)===T)return;const s=this._$AH,i=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==A&&(s===A||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){f(this,t)}}const tt={M:E,P:d,A:B,C:1,L:Z,R:F,D:k,V:f,I:m,H:C,N:G,U:J,B:q,F:K},I=x.litHtmlPolyfillSupport;I==null||I(b,m),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.2.1");const et=(h,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new m(t.insertBefore(H(),o),o,void 0,e??{})}return i._$AI(h),i};export{et as B,A as E,T,tt as Z,Y as b,X as x};
