import{i as c,t as a,e as n}from"./directive-12249aa5.js";import{T as r,w as u}from"./lit-html-b1a28dc3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends c{constructor(t){if(super(t),this.et=r,t.type!==a.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r||t==null)return this.vt=void 0,this.et=t;if(t===u)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const s=[t];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const d=n(e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends e{}i.directiveName="unsafeSVG",i.resultType=2;const f=n(i);export{d as a,f as o};
