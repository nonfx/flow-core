var g=function(e,r){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},g(e,r)};function p(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");g(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function rt(e,r,t,n){var o=arguments.length,i=o<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(r,t,i):s(r,t))||i);return o>3&&i&&Object.defineProperty(r,t,i),i}function O(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),o,i=[],s;try{for(;(r===void 0||r-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return i}function m(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}function l(e){return typeof e=="function"}function D(e){var r=function(n){Error.call(n),n.stack=new Error().stack},t=e(r);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var w=D(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function j(e,r){if(e){var t=e.indexOf(r);0<=t&&e.splice(t,1)}}var S=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,t,n,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=O(s),c=u.next();!c.done;c=u.next()){var _=c.value;_.remove(this)}}catch(a){r={error:a}}finally{try{c&&!c.done&&(t=u.return)&&t.call(u)}finally{if(r)throw r.error}}else s.remove(this);var A=this.initialTeardown;if(l(A))try{A()}catch(a){i=a instanceof w?a.errors:[a]}var C=this._finalizers;if(C){this._finalizers=null;try{for(var h=O(C),f=h.next();!f.done;f=h.next()){var L=f.value;try{I(L)}catch(a){i=i??[],a instanceof w?i=m(m([],y(i)),y(a.errors)):i.push(a)}}}catch(a){n={error:a}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}}if(i)throw new w(i)}},e.prototype.add=function(r){var t;if(r&&r!==this)if(this.closed)I(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(r)}},e.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},e.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},e.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&j(t,r)},e.prototype.remove=function(r){var t=this._finalizers;t&&j(t,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}(),Y=S.EMPTY;function H(e){return e instanceof S||e&&"closed"in e&&l(e.remove)&&l(e.add)&&l(e.unsubscribe)}function I(e){l(e)?e():e.unsubscribe()}var V={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},P={setTimeout:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var o=P.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,m([e,r],y(t))):setTimeout.apply(void 0,m([e,r],y(t)))},clearTimeout:function(e){var r=P.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0};function $(e){P.setTimeout(function(){throw e})}function U(){}function b(e){e()}var k=function(e){p(r,e);function r(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,H(t)&&t.add(n)):n.destination=K,n}return r.create=function(t,n,o){return new x(t,n,o)},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(S),q=Function.prototype.bind;function E(e,r){return q.call(e,r)}var G=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(n){d(n)}},e.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(n){d(n)}else d(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(t){d(t)}},e}(),x=function(e){p(r,e);function r(t,n,o){var i=e.call(this)||this,s;if(l(t)||!t)s={next:t??void 0,error:n??void 0,complete:o??void 0};else{var u;i&&V.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&E(t.next,u),error:t.error&&E(t.error,u),complete:t.complete&&E(t.complete,u)}):s=t}return i.destination=new G(s),i}return r}(k);function d(e){$(e)}function J(e){throw e}var K={closed:!0,next:U,error:J,complete:U},Q=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function W(e){return e}function X(e){return e.length===0?W:e.length===1?e[0]:function(t){return e.reduce(function(n,o){return o(n)},t)}}var R=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var t=new e;return t.source=this,t.operator=r,t},e.prototype.subscribe=function(r,t,n){var o=this,i=z(r)?r:new x(r,t,n);return b(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},e.prototype.forEach=function(r,t){var n=this;return t=F(t),new t(function(o,i){var s=new x({next:function(u){try{r(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});n.subscribe(s)})},e.prototype._subscribe=function(r){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(r)},e.prototype[Q]=function(){return this},e.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return X(r)(this)},e.prototype.toPromise=function(r){var t=this;return r=F(r),new r(function(n,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return n(i)})})},e.create=function(r){return new e(r)},e}();function F(e){var r;return(r=e??V.Promise)!==null&&r!==void 0?r:Promise}function Z(e){return e&&l(e.next)&&l(e.error)&&l(e.complete)}function z(e){return e&&e instanceof k||Z(e)&&H(e)}var N=D(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),T=function(e){p(r,e);function r(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.prototype.lift=function(t){var n=new M(this,this);return n.operator=t,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new N},r.prototype.next=function(t){var n=this;b(function(){var o,i;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var s=O(n.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(t)}}catch(_){o={error:_}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},r.prototype.error=function(t){var n=this;b(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var o=n.observers;o.length;)o.shift().error(t)}})},r.prototype.complete=function(){var t=this;b(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},r.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},r.prototype._innerSubscribe=function(t){var n=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?Y:(this.currentObservers=null,u.push(t),new S(function(){n.currentObservers=null,j(u,t)}))},r.prototype._checkFinalizedStatuses=function(t){var n=this,o=n.hasError,i=n.thrownError,s=n.isStopped;o?t.error(i):s&&t.complete()},r.prototype.asObservable=function(){var t=new R;return t.source=this,t},r.create=function(t,n){return new M(t,n)},r}(R),M=function(e){p(r,e);function r(t,n){var o=e.call(this)||this;return o.destination=t,o.source=n,o}return r.prototype.next=function(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,t)},r.prototype.error=function(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,t)},r.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},r.prototype._subscribe=function(t){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&o!==void 0?o:Y},r}(T),tt=function(e){p(r,e);function r(t){var n=e.call(this)||this;return n._value=t,n}return Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},r.prototype.getValue=function(){var t=this,n=t.hasError,o=t.thrownError,i=t._value;if(n)throw o;return this._throwIfClosed(),i},r.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},r}(T);const et=new T,v=new tt({theme:"f-dark",iconPack:null}),nt={getConfig(){return v.value},setConfig(e){v.next({...v.value,...e}),e.theme&&this.initTheme()},initTheme(){document.documentElement.setAttribute("data-theme",`${v.value.theme}`)}},B=new Set;function ot(e,r){if(B.has(e)||!document)return;B.add(e);const t=document.createElement("style");t.id=e,t.innerHTML=r,document.head.appendChild(t)}export{nt as C,T as S,rt as _,v as c,ot as i,et as t};