import{_ as u}from"./index-32f51081.js";import{s as I}from"./lit-element-3bb9b17f.js";import{x as L,w as B}from"./lit-html-b1a28dc3.js";import{n as d}from"./property-8b570948.js";import{e as A,t as F}from"./directive-12249aa5.js";import{f as N}from"./ref-a55570ea.js";import{c as P}from"./f-form-builder-f075c4cd.js";import{_ as D}from"./iframe-c5bb7398.js";import"./directive-helpers-7e9c1cf5.js";import"./unsafe-svg-e29b2cc0.js";import"./_commonjsHelpers-de833af9.js";import"../sb-preview/runtime.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends Event{constructor(t){super(p.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}p.eventName="rangeChanged";class y extends Event{constructor(t){super(y.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}y.eventName="visibilityChanged";class g extends Event{constructor(){super(g.eventName,{bubbles:!1})}}g.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class j extends H{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:s}=this._destination;i=Math.min(i||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const l=Math.abs(i-t),n=Math.abs(s-e);l<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let E=window==null?void 0:window.ResizeObserver;const v=Symbol("virtualizerRef"),m="virtualizer-sizer";let C;class W{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new E(()=>this._hostElementSizeChanged()),this._childrenRO=new E(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[v]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=U(this._hostElement,t),this._scrollerController=new j(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen()}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var t,e,i,s;this._scrollEventListeners.forEach(l=>l.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(t=this._scrollerController)==null||t.detach(this),this._scrollerController=null,(e=this._mutationObserver)==null||e.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(s=this._childrenRO)==null||s.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected")}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${m}]`);e||(e=document.createElement("div"),e.setAttribute(m,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(m,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||C;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const s={...t};delete s.type,e=s}else e=t;i===void 0&&(C=i=(await D(()=>import("./flow-df0b2f60.js"),[],import.meta.url)).FlowLayout),this._layout=new i(s=>this._handleLayoutMessage(s),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(l=>l.startTime>=this._benchmarkStart&&l.startTime<t).reduce((l,n)=>l+n.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:s}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<e.length;s++){const l=e[s],n=this._first+s;(this._itemsChanged||this._toBeMeasured.has(l))&&(t[n]=i.call(this,l,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},$(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout&&this._scrollerController&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var t;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((t=this._layout)==null||t.unpin()),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new g)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(m)||t.push(e),e=e.nextElementSibling;return t}_updateView(){var s;const t=this._hostElement,e=(s=this._scrollerController)==null?void 0:s.element,i=this._layout;if(t&&e&&i){let l,n,h,a;const o=t.getBoundingClientRect();l=0,n=0,h=window.innerHeight,a=window.innerWidth;const b=this._clippingAncestors.map(c=>c.getBoundingClientRect());b.unshift(o);for(const c of b)l=Math.max(l,c.top),n=Math.max(n,c.left),h=Math.min(h,c.bottom),a=Math.min(a,c.right);const w=e.getBoundingClientRect(),V={left:o.left-w.left,top:o.top-w.top},R={width:e.scrollWidth,height:e.scrollHeight},x=l-o.top+t.scrollTop,k=n-o.left+t.scrollLeft,M=h-l,O=a-n;i.viewportSize={width:O,height:M},i.viewportScroll={top:x,left:k},i.totalScrollSize=R,i.offsetWithinScroller=V}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,s=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const l=this._hostElement.style;l.minWidth=i?`${i}px`:"100%",l.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:s,height:l,xOffset:n,yOffset:h},a)=>{const o=this._children[a-this._first];o&&(o.style.position="absolute",o.style.boxSizing="border-box",o.style.transform=`translate(${i}px, ${e}px)`,s!==void 0&&(o.style.width=s+"px"),l!==void 0&&(o.style.height=l+"px"),o.style.left=n===void 0?null:n+"px",o.style.top=h===void 0?null:h+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:s,_lastVisible:l}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==l}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-s})}}element(t){var e;return t===1/0&&(t=this._items.length-1),((e=this._items)==null?void 0:e[t])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&(t!=null&&t.has(e))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new p({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new y({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){var e;if((e=this._layout)!=null&&e.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function $(r){const t=window.getComputedStyle(r);return{marginTop:f(t.marginTop),marginRight:f(t.marginRight),marginBottom:f(t.marginBottom),marginLeft:f(t.marginLeft)}}function f(r){const t=r?parseFloat(r):NaN;return Number.isNaN(t)?0:t}function S(r){if(r.assignedSlot!==null)return r.assignedSlot;if(r.parentElement!==null)return r.parentElement;const t=r.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function q(r,t=!1){const e=[];let i=t?r:S(r);for(;i!==null;)e.push(i),i=S(i);return e}function U(r,t=!1){let e=!1;return q(r,t).filter(i=>{if(e)return!1;const s=getComputedStyle(i);return e=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=r=>r,T=(r,t)=>L`${t}: ${JSON.stringify(r,null,2)}`;class G extends N{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>T(e,i+this._first),this._keyFunction=(e,i)=>z(e,i+this._first),this._items=[],t.type!==F.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return P(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?B:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const s=t.parentNode;this._makeVirtualizer(s,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(s,l)=>e(s,l+this._first)),i&&(this._keyFunction=(s,l)=>i(s,l+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:l}=e;this._virtualizer=new W({hostElement:t,layout:i,scroller:s}),this._virtualizer.items=l,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){var t;(t=this._virtualizer)==null||t.disconnected()}reconnected(){var t;(t=this._virtualizer)==null||t.connected()}}const J=A(G);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends I{constructor(){super(...arguments),this.items=[],this.renderItem=T,this.keyFunction=z,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:t,renderItem:e,keyFunction:i,layout:s,scroller:l}=this;return L`${J({items:t,renderItem:e,keyFunction:i,layout:s,scroller:l})}`}element(t){var e;return(e=this[v])==null?void 0:e.element(t)}get layoutComplete(){var t;return(t=this[v])==null?void 0:t.layoutComplete}scrollToIndex(t,e="start"){var i;(i=this.element(t))==null||i.scrollIntoView({block:e})}}u([d({attribute:!1})],_.prototype,"items",void 0);u([d()],_.prototype,"renderItem",void 0);u([d()],_.prototype,"keyFunction",void 0);u([d({attribute:!1})],_.prototype,"layout",void 0);u([d({reflect:!0,type:Boolean})],_.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",_);export{_ as LitVirtualizer,p as RangeChangedEvent,y as VisibilityChangedEvent};
