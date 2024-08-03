function dE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),pE=Symbol.for("react.portal"),mE=Symbol.for("react.fragment"),gE=Symbol.for("react.strict_mode"),vE=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),_E=Symbol.for("react.context"),wE=Symbol.for("react.forward_ref"),SE=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),kE=Symbol.for("react.lazy"),dm=Symbol.iterator;function CE(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,Uy={};function fs(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||My}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $y(){}$y.prototype=fs.prototype;function th(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||My}var nh=th.prototype=new $y;nh.constructor=th;Fy(nh,fs.prototype);nh.isPureReactComponent=!0;var hm=Array.isArray,zy=Object.prototype.hasOwnProperty,rh={current:null},jy={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zy.call(e,r)&&!jy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:rh.current}}function bE(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function IE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IE(""+t.key):e.toString(36)}function Ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case pE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mu(o,0):r,hm(i)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Ya(i,e,n,"",function(c){return c})):i!=null&&(ih(i)&&(i=bE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mu(s,a);o+=Ya(s,e,n,l,i)}else if(l=CE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mu(s,a++),o+=Ya(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var r=[],i=0;return Ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},qa={transition:null},TE={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:qa,ReactCurrentOwner:rh};ue.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=fs;ue.Fragment=mE;ue.Profiler=vE;ue.PureComponent=th;ue.StrictMode=gE;ue.Suspense=SE;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zy.call(e,l)&&!jy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:_E,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yE,_context:t},t.Consumer=t};ue.createElement=Wy;ue.createFactory=function(t){var e=Wy.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:wE,render:t}};ue.isValidElement=ih;ue.lazy=function(t){return{$$typeof:kE,_payload:{_status:-1,_result:t},_init:xE}};ue.memo=function(t,e){return{$$typeof:EE,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return ht.current.useCallback(t,e)};ue.useContext=function(t){return ht.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ue.useEffect=function(t,e){return ht.current.useEffect(t,e)};ue.useId=function(){return ht.current.useId()};ue.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return ht.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ue.useRef=function(t){return ht.current.useRef(t)};ue.useState=function(t){return ht.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return ht.current.useTransition()};ue.version="18.2.0";(function(t){t.exports=ue})(N);const fn=hE(N.exports),mf=dE({__proto__:null,default:fn},[N.exports]);var gf={},Hy={exports:{}},Pt={},By={exports:{}},Vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,T){var L=S.length;S.push(T);e:for(;0<L;){var D=L-1>>>1,C=S[D];if(0<i(C,T))S[D]=T,S[L]=C,L=D;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var T=S[0],L=S.pop();if(L!==T){S[0]=L;e:for(var D=0,C=S.length,A=C>>>1;D<A;){var U=2*(D+1)-1,W=S[U],w=U+1,Y=S[w];if(0>i(W,L))w<C&&0>i(Y,W)?(S[D]=Y,S[w]=L,D=w):(S[D]=W,S[U]=L,D=U);else if(w<C&&0>i(Y,L))S[D]=Y,S[w]=L,D=w;else break e}}return T}function i(S,T){var L=S.sortIndex-T.sortIndex;return L!==0?L:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,u=null,d=3,h=!1,m=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(S){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=S)r(c),T.sortIndex=T.expirationTime,e(l,T);else break;T=n(c)}}function E(S){if(_=!1,v(S),!m)if(n(l)!==null)m=!0,x(O);else{var T=n(c);T!==null&&k(E,T.startTime-S)}}function O(S,T){m=!1,_&&(_=!1,g(F),F=-1),h=!0;var L=d;try{for(v(T),u=n(l);u!==null&&(!(u.expirationTime>T)||S&&!pe());){var D=u.callback;if(typeof D=="function"){u.callback=null,d=u.priorityLevel;var C=D(u.expirationTime<=T);T=t.unstable_now(),typeof C=="function"?u.callback=C:u===n(l)&&r(l),v(T)}else r(l);u=n(l)}if(u!==null)var A=!0;else{var U=n(c);U!==null&&k(E,U.startTime-T),A=!1}return A}finally{u=null,d=L,h=!1}}var I=!1,M=null,F=-1,G=5,j=-1;function pe(){return!(t.unstable_now()-j<G)}function we(){if(M!==null){var S=t.unstable_now();j=S;var T=!0;try{T=M(!0,S)}finally{T?ze():(I=!1,M=null)}}else I=!1}var ze;if(typeof p=="function")ze=function(){p(we)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,y=se.port2;se.port1.onmessage=we,ze=function(){y.postMessage(null)}}else ze=function(){b(we,0)};function x(S){M=S,I||(I=!0,ze())}function k(S,T){F=b(function(){S(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,x(O))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(S){switch(d){case 1:case 2:case 3:var T=3;break;default:T=d}var L=d;d=T;try{return S()}finally{d=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var L=d;d=S;try{return T()}finally{d=L}},t.unstable_scheduleCallback=function(S,T,L){var D=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,S){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=L+C,S={id:f++,callback:T,priorityLevel:S,startTime:L,expirationTime:C,sortIndex:-1},L>D?(S.sortIndex=L,e(c,S),n(l)===null&&S===n(c)&&(_?(g(F),F=-1):_=!0,k(E,L-D))):(S.sortIndex=C,e(l,S),m||h||(m=!0,x(O))),S},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(S){var T=d;return function(){var L=d;d=T;try{return S.apply(this,arguments)}finally{d=L}}}})(Vy);(function(t){t.exports=Vy})(By);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=N.exports,Tt=By.exports;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ky=new Set,fo={};function li(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(fo[t]=e,t=0;t<e.length;t++)Ky.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function NE(t){return vf.call(gm,t)?!0:vf.call(mm,t)?!1:PE.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function AE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RE(t,e,n,r){if(e===null||typeof e>"u"||AE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sh=/[\-:]([a-z])/g;function oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sh,oh);nt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sh,oh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sh,oh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RE(e,n,i,r)&&(n=null),r||i===null?NE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),yi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),lh=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),uh=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Qy=Symbol.for("react.offscreen"),vm=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=vm&&t[vm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,gu;function $s(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var vu=!1;function yu(t,e){if(!t||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function OE(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case yi:return"Portal";case yf:return"Profiler";case lh:return"StrictMode";case _f:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uh:return e=t.displayName||null,e!==null?e:Sf(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return Sf(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sf(e);case 8:return e===lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DE(t){var e=Xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=DE(t))}function Jy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zy(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function kf(t,e){Zy(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(zs(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function e_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function If(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){ME.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FE=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(FE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Fi=null,Ui=null;function Em(t){if(t=Qo(t)){if(typeof Nf!="function")throw Error($(280));var e=t.stateNode;e&&(e=wc(e),Nf(t.stateNode,t.type,e))}}function s_(t){Fi?Ui?Ui.push(t):Ui=[t]:Fi=t}function o_(){if(Fi){var t=Fi,e=Ui;if(Ui=Fi=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function a_(t,e){return t(e)}function l_(){}var _u=!1;function c_(t,e,n){if(_u)return t(e,n);_u=!0;try{return a_(t,e,n)}finally{_u=!1,(Fi!==null||Ui!==null)&&(l_(),o_())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Af=!1;if(Cn)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Af=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Af=!1}function UE(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ks=!1,ml=null,gl=!1,Rf=null,$E={onError:function(t){Ks=!0,ml=t}};function zE(t,e,n,r,i,s,o,a,l){Ks=!1,ml=null,UE.apply($E,arguments)}function jE(t,e,n,r,i,s,o,a,l){if(zE.apply(this,arguments),Ks){if(Ks){var c=ml;Ks=!1,ml=null}else throw Error($(198));gl||(gl=!0,Rf=c)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function km(t){if(ci(t)!==t)throw Error($(188))}function WE(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return km(i),t;if(s===r)return km(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function f_(t){return t=WE(t),t!==null?d_(t):null}function d_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d_(t);if(e!==null)return e;t=t.sibling}return null}var h_=Tt.unstable_scheduleCallback,Cm=Tt.unstable_cancelCallback,HE=Tt.unstable_shouldYield,BE=Tt.unstable_requestPaint,Fe=Tt.unstable_now,VE=Tt.unstable_getCurrentPriorityLevel,dh=Tt.unstable_ImmediatePriority,p_=Tt.unstable_UserBlockingPriority,vl=Tt.unstable_NormalPriority,GE=Tt.unstable_LowPriority,m_=Tt.unstable_IdlePriority,gc=null,on=null;function KE(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:QE,YE=Math.log,qE=Math.LN2;function QE(t){return t>>>=0,t===0?32:31-(YE(t)/qE|0)|0}var _a=64,wa=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=js(a):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=XE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=_a;return _a<<=1,(_a&4194240)===0&&(_a=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function v_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var y_,ph,__,w_,S_,Lf=!1,Sa=[],er=null,tr=null,nr=null,mo=new Map,go=new Map,Bn=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qo(e),e!==null&&ph(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tk(t,e,n,r,i){switch(e){case"focusin":return er=Is(er,t,e,n,r,i),!0;case"dragenter":return tr=Is(tr,t,e,n,r,i),!0;case"mouseover":return nr=Is(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,Is(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,go.set(s,Is(go.get(s)||null,t,e,n,r,i)),!0}return!1}function E_(t){var e=Fr(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=u_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){__(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pf=r,n.target.dispatchEvent(r),Pf=null}else return e=Qo(n),e!==null&&ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Qa(t)&&n.delete(e)}function nk(){Lf=!1,er!==null&&Qa(er)&&(er=null),tr!==null&&Qa(tr)&&(tr=null),nr!==null&&Qa(nr)&&(nr=null),mo.forEach(Im),go.forEach(Im)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Lf||(Lf=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,nk)))}function vo(t){function e(i){return xs(i,t)}if(0<Sa.length){xs(Sa[0],t);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&xs(er,t),tr!==null&&xs(tr,t),nr!==null&&xs(nr,t),mo.forEach(e),go.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)E_(n),n.blockedOn===null&&Bn.shift()}var $i=Ln.ReactCurrentBatchConfig,_l=!0;function rk(t,e,n,r){var i=me,s=$i.transition;$i.transition=null;try{me=1,mh(t,e,n,r)}finally{me=i,$i.transition=s}}function ik(t,e,n,r){var i=me,s=$i.transition;$i.transition=null;try{me=4,mh(t,e,n,r)}finally{me=i,$i.transition=s}}function mh(t,e,n,r){if(_l){var i=Df(t,e,n,r);if(i===null)Nu(t,e,r,wl,n),bm(t,r);else if(tk(i,t,e,n,r))r.stopPropagation();else if(bm(t,r),e&4&&-1<ek.indexOf(t)){for(;i!==null;){var s=Qo(i);if(s!==null&&y_(s),s=Df(t,e,n,r),s===null&&Nu(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nu(t,e,r,null,n)}}var wl=null;function Df(t,e,n,r){if(wl=null,t=fh(r),t=Fr(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function k_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case dh:return 1;case p_:return 4;case vl:case GE:return 16;case m_:return 536870912;default:return 16}default:return 16}}var Qn=null,gh=null,Xa=null;function C_(){if(Xa)return Xa;var t,e=gh,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function xm(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:xm,this.isPropagationStopped=xm,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=Nt(ds),qo=Ae({},ds,{view:0,detail:0}),sk=Nt(qo),Su,Eu,Ts,vc=Ae({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Su=t.screenX-Ts.screenX,Eu=t.screenY-Ts.screenY):Eu=Su=0,Ts=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Tm=Nt(vc),ok=Ae({},vc,{dataTransfer:0}),ak=Nt(ok),lk=Ae({},qo,{relatedTarget:0}),ku=Nt(lk),ck=Ae({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),uk=Nt(ck),fk=Ae({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dk=Nt(fk),hk=Ae({},ds,{data:0}),Pm=Nt(hk),pk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gk[t])?!!e[t]:!1}function yh(){return vk}var yk=Ae({},qo,{key:function(t){if(t.key){var e=pk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_k=Nt(yk),wk=Ae({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Nt(wk),Sk=Ae({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),Ek=Nt(Sk),kk=Ae({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ck=Nt(kk),bk=Ae({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=Nt(bk),xk=[9,13,27,32],_h=Cn&&"CompositionEvent"in window,Ys=null;Cn&&"documentMode"in document&&(Ys=document.documentMode);var Tk=Cn&&"TextEvent"in window&&!Ys,b_=Cn&&(!_h||Ys&&8<Ys&&11>=Ys),Am=String.fromCharCode(32),Rm=!1;function I_(t,e){switch(t){case"keyup":return xk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function Pk(t,e){switch(t){case"compositionend":return x_(e);case"keypress":return e.which!==32?null:(Rm=!0,Am);case"textInput":return t=e.data,t===Am&&Rm?null:t;default:return null}}function Nk(t,e){if(wi)return t==="compositionend"||!_h&&I_(t,e)?(t=C_(),Xa=gh=Qn=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var Ak={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ak[t.type]:e==="textarea"}function T_(t,e,n,r){s_(r),e=Sl(e,"onChange"),0<e.length&&(n=new vh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,yo=null;function Rk(t){$_(t,0)}function yc(t){var e=ki(t);if(Jy(e))return t}function Ok(t,e){if(t==="change")return e}var P_=!1;if(Cn){var Cu;if(Cn){var bu="oninput"in document;if(!bu){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),bu=typeof Lm.oninput=="function"}Cu=bu}else Cu=!1;P_=Cu&&(!document.documentMode||9<document.documentMode)}function Dm(){qs&&(qs.detachEvent("onpropertychange",N_),yo=qs=null)}function N_(t){if(t.propertyName==="value"&&yc(yo)){var e=[];T_(e,yo,t,fh(t)),c_(Rk,e)}}function Lk(t,e,n){t==="focusin"?(Dm(),qs=e,yo=n,qs.attachEvent("onpropertychange",N_)):t==="focusout"&&Dm()}function Dk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(yo)}function Mk(t,e){if(t==="click")return yc(e)}function Fk(t,e){if(t==="input"||t==="change")return yc(e)}function Uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:Uk;function _o(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R_(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $k(t){var e=R_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&wh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fm(n,s);var o=Fm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zk=Cn&&"documentMode"in document&&11>=document.documentMode,Si=null,Mf=null,Qs=null,Ff=!1;function Um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ff||Si==null||Si!==pl(r)||(r=Si,"selectionStart"in r&&wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&_o(Qs,r)||(Qs=r,r=Sl(Mf,"onSelect"),0<r.length&&(e=new vh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Iu={},O_={};Cn&&(O_=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function _c(t){if(Iu[t])return Iu[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O_)return Iu[t]=e[n];return t}var L_=_c("animationend"),D_=_c("animationiteration"),M_=_c("animationstart"),F_=_c("transitionend"),U_=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){U_.set(t,e),li(e,[t])}for(var xu=0;xu<$m.length;xu++){var Tu=$m[xu],jk=Tu.toLowerCase(),Wk=Tu[0].toUpperCase()+Tu.slice(1);br(jk,"on"+Wk)}br(L_,"onAnimationEnd");br(D_,"onAnimationIteration");br(M_,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(F_,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jE(r,e,void 0,t),t.currentTarget=null}function $_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zm(i,a,c),s=l}}}if(gl)throw t=Rf,gl=!1,Rf=null,t}function ke(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var r=t+"__bubble";n.has(r)||(z_(e,t,2,!1),n.add(r))}function Pu(t,e,n){var r=0;e&&(r|=4),z_(n,t,r,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Ca]){t[Ca]=!0,Ky.forEach(function(n){n!=="selectionchange"&&(Hk.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,Pu("selectionchange",!1,e))}}function z_(t,e,n,r){switch(k_(e)){case 1:var i=rk;break;case 4:i=ik;break;default:i=mh}n=i.bind(null,e,n,t),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}c_(function(){var c=s,f=fh(n),u=[];e:{var d=U_.get(t);if(d!==void 0){var h=vh,m=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":h=_k;break;case"focusin":m="focus",h=ku;break;case"focusout":m="blur",h=ku;break;case"beforeblur":case"afterblur":h=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ek;break;case L_:case D_:case M_:h=uk;break;case F_:h=Ck;break;case"scroll":h=sk;break;case"wheel":h=Ik;break;case"copy":case"cut":case"paste":h=dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Nm}var _=(e&4)!==0,b=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var p=c,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=po(p,g),E!=null&&_.push(So(p,E,v)))),b)break;p=p.return}0<_.length&&(d=new h(d,m,null,n,f),u.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==Pf&&(m=n.relatedTarget||n.fromElement)&&(Fr(m)||m[bn]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?Fr(m):null,m!==null&&(b=ci(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(_=Tm,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Nm,E="onPointerLeave",g="onPointerEnter",p="pointer"),b=h==null?d:ki(h),v=m==null?d:ki(m),d=new _(E,p+"leave",h,n,f),d.target=b,d.relatedTarget=v,E=null,Fr(f)===c&&(_=new _(g,p+"enter",m,n,f),_.target=v,_.relatedTarget=b,E=_),b=E,h&&m)t:{for(_=h,g=m,p=0,v=_;v;v=di(v))p++;for(v=0,E=g;E;E=di(E))v++;for(;0<p-v;)_=di(_),p--;for(;0<v-p;)g=di(g),v--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=di(_),g=di(g)}_=null}else _=null;h!==null&&jm(u,d,h,_,!1),m!==null&&b!==null&&jm(u,b,m,_,!0)}}e:{if(d=c?ki(c):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var O=Ok;else if(Om(d))if(P_)O=Fk;else{O=Dk;var I=Lk}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=Mk);if(O&&(O=O(t,c))){T_(u,O,n,f);break e}I&&I(t,d,c),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Cf(d,"number",d.value)}switch(I=c?ki(c):window,t){case"focusin":(Om(I)||I.contentEditable==="true")&&(Si=I,Mf=c,Qs=null);break;case"focusout":Qs=Mf=Si=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,Um(u,n,f);break;case"selectionchange":if(zk)break;case"keydown":case"keyup":Um(u,n,f)}var M;if(_h)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else wi?I_(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(b_&&n.locale!=="ko"&&(wi||F!=="onCompositionStart"?F==="onCompositionEnd"&&wi&&(M=C_()):(Qn=f,gh="value"in Qn?Qn.value:Qn.textContent,wi=!0)),I=Sl(c,F),0<I.length&&(F=new Pm(F,t,null,n,f),u.push({event:F,listeners:I}),M?F.data=M:(M=x_(n),M!==null&&(F.data=M)))),(M=Tk?Pk(t,n):Nk(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(f=new Pm("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=M))}$_(u,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=po(t,n),s!=null&&r.unshift(So(t,s,i)),s=po(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=po(n,s),l!=null&&o.unshift(So(n,l,a))):i||(l=po(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Bk=/\r\n?/g,Vk=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(Bk,`
`).replace(Vk,"")}function ba(t,e,n){if(e=Wm(e),Wm(t)!==e&&n)throw Error($(425))}function El(){}var Uf=null,$f=null;function zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,Gk=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,Kk=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(t){return Hm.resolve(null).then(t).catch(Yk)}:jf;function Yk(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),rn="__reactFiber$"+hs,Eo="__reactProps$"+hs,bn="__reactContainer$"+hs,Wf="__reactEvents$"+hs,qk="__reactListeners$"+hs,Qk="__reactHandles$"+hs;function Fr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[rn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[rn]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function wc(t){return t[Eo]||null}var Hf=[],Ci=-1;function Ir(t){return{current:t}}function Ie(t){0>Ci||(t.current=Hf[Ci],Hf[Ci]=null,Ci--)}function Ee(t,e){Ci++,Hf[Ci]=t.current,t.current=e}var vr={},at=Ir(vr),_t=Ir(!1),Kr=vr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function kl(){Ie(_t),Ie(at)}function Vm(t,e,n){if(at.current!==vr)throw Error($(168));Ee(at,e),Ee(_t,n)}function j_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,LE(t)||"Unknown",i));return Ae({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Kr=at.current,Ee(at,t),Ee(_t,_t.current),!0}function Gm(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=j_(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,Ie(_t),Ie(at),Ee(at,t)):Ie(_t),Ee(_t,n)}var pn=null,Sc=!1,Ru=!1;function W_(t){pn===null?pn=[t]:pn.push(t)}function Xk(t){Sc=!0,W_(t)}function xr(){if(!Ru&&pn!==null){Ru=!0;var t=0,e=me;try{var n=pn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,Sc=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),h_(dh,xr),i}finally{me=e,Ru=!1}}return null}var bi=[],Ii=0,bl=null,Il=0,Dt=[],Mt=0,Yr=null,mn=1,gn="";function Rr(t,e){bi[Ii++]=Il,bi[Ii++]=bl,bl=t,Il=e}function H_(t,e,n){Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Yr,Yr=t;var r=mn;t=gn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Xt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function Sh(t){t.return!==null&&(Rr(t,1),H_(t,1,0))}function Eh(t){for(;t===bl;)bl=bi[--Ii],bi[Ii]=null,Il=bi[--Ii],bi[Ii]=null;for(;t===Yr;)Yr=Dt[--Mt],Dt[Mt]=null,gn=Dt[--Mt],Dt[Mt]=null,mn=Dt[--Mt],Dt[Mt]=null}var xt=null,It=null,Te=!1,Vt=null;function B_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,It=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,It=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(Te){var e=It;if(e){var n=e;if(!Km(t,e)){if(Bf(t))throw Error($(418));e=rr(n.nextSibling);var r=xt;e&&Km(t,e)?B_(r,n):(t.flags=t.flags&-4097|2,Te=!1,xt=t)}}else{if(Bf(t))throw Error($(418));t.flags=t.flags&-4097|2,Te=!1,xt=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Ia(t){if(t!==xt)return!1;if(!Te)return Ym(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zf(t.type,t.memoizedProps)),e&&(e=It)){if(Bf(t))throw V_(),Error($(418));for(;e;)B_(t,e),e=rr(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=xt?rr(t.stateNode.nextSibling):null;return!0}function V_(){for(var t=It;t;)t=rr(t.nextSibling)}function Xi(){It=xt=null,Te=!1}function kh(t){Vt===null?Vt=[t]:Vt.push(t)}var Jk=Ln.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xl=Ir(null),Tl=null,xi=null,Ch=null;function bh(){Ch=xi=Tl=null}function Ih(t){var e=xl.current;Ie(xl),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){Tl=t,Ch=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Ch!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(Tl===null)throw Error($(308));xi=t,Tl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Ur=null;function xh(t){Ur===null?Ur=[t]:Ur.push(t)}function G_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hh(t,n)}}function qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(d=e,h=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){u=m.call(h,u,d);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,d=typeof m=="function"?m.call(h,u,d):m,d==null)break e;u=Ae({},u,d);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=h,l=u):f=f.next=h,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=u}}function Qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Y_=new Gy.Component().refs;function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=or(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Jt(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=or(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Jt(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=or(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Jt(e,t,r,n),Za(e,t,r))}};function Xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function q_(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?Kr:at.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Yf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y_,Th(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?Kr:at.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Y_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function Q_(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ar(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,E){return p===null||p.tag!==6?(p=$u(v,g.mode,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,E){var O=v.type;return O===_i?f(g,p,v.props.children,E,v.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Wn&&Zm(O)===p.type)?(E=i(p,v.props),E.ref=Ps(g,p,v),E.return=g,E):(E=sl(v.type,v.key,v.props,null,g.mode,E),E.ref=Ps(g,p,v),E.return=g,E)}function c(g,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=zu(v,g.mode,E),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function f(g,p,v,E,O){return p===null||p.tag!==7?(p=Vr(v,g.mode,E,O),p.return=g,p):(p=i(p,v),p.return=g,p)}function u(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$u(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ga:return v=sl(p.type,p.key,p.props,null,g.mode,v),v.ref=Ps(g,null,p),v.return=g,v;case yi:return p=zu(p,g.mode,v),p.return=g,p;case Wn:var E=p._init;return u(g,E(p._payload),v)}if(zs(p)||Cs(p))return p=Vr(p,g.mode,v,null),p.return=g,p;xa(g,p)}return null}function d(g,p,v,E){var O=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:a(g,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:return v.key===O?l(g,p,v,E):null;case yi:return v.key===O?c(g,p,v,E):null;case Wn:return O=v._init,d(g,p,O(v._payload),E)}if(zs(v)||Cs(v))return O!==null?null:f(g,p,v,E,null);xa(g,v)}return null}function h(g,p,v,E,O){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(p,g,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ga:return g=g.get(E.key===null?v:E.key)||null,l(p,g,E,O);case yi:return g=g.get(E.key===null?v:E.key)||null,c(p,g,E,O);case Wn:var I=E._init;return h(g,p,v,I(E._payload),O)}if(zs(E)||Cs(E))return g=g.get(v)||null,f(p,g,E,O,null);xa(p,E)}return null}function m(g,p,v,E){for(var O=null,I=null,M=p,F=p=0,G=null;M!==null&&F<v.length;F++){M.index>F?(G=M,M=null):G=M.sibling;var j=d(g,M,v[F],E);if(j===null){M===null&&(M=G);break}t&&M&&j.alternate===null&&e(g,M),p=s(j,p,F),I===null?O=j:I.sibling=j,I=j,M=G}if(F===v.length)return n(g,M),Te&&Rr(g,F),O;if(M===null){for(;F<v.length;F++)M=u(g,v[F],E),M!==null&&(p=s(M,p,F),I===null?O=M:I.sibling=M,I=M);return Te&&Rr(g,F),O}for(M=r(g,M);F<v.length;F++)G=h(M,g,F,v[F],E),G!==null&&(t&&G.alternate!==null&&M.delete(G.key===null?F:G.key),p=s(G,p,F),I===null?O=G:I.sibling=G,I=G);return t&&M.forEach(function(pe){return e(g,pe)}),Te&&Rr(g,F),O}function _(g,p,v,E){var O=Cs(v);if(typeof O!="function")throw Error($(150));if(v=O.call(v),v==null)throw Error($(151));for(var I=O=null,M=p,F=p=0,G=null,j=v.next();M!==null&&!j.done;F++,j=v.next()){M.index>F?(G=M,M=null):G=M.sibling;var pe=d(g,M,j.value,E);if(pe===null){M===null&&(M=G);break}t&&M&&pe.alternate===null&&e(g,M),p=s(pe,p,F),I===null?O=pe:I.sibling=pe,I=pe,M=G}if(j.done)return n(g,M),Te&&Rr(g,F),O;if(M===null){for(;!j.done;F++,j=v.next())j=u(g,j.value,E),j!==null&&(p=s(j,p,F),I===null?O=j:I.sibling=j,I=j);return Te&&Rr(g,F),O}for(M=r(g,M);!j.done;F++,j=v.next())j=h(M,g,F,j.value,E),j!==null&&(t&&j.alternate!==null&&M.delete(j.key===null?F:j.key),p=s(j,p,F),I===null?O=j:I.sibling=j,I=j);return t&&M.forEach(function(we){return e(g,we)}),Te&&Rr(g,F),O}function b(g,p,v,E){if(typeof v=="object"&&v!==null&&v.type===_i&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:e:{for(var O=v.key,I=p;I!==null;){if(I.key===O){if(O=v.type,O===_i){if(I.tag===7){n(g,I.sibling),p=i(I,v.props.children),p.return=g,g=p;break e}}else if(I.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Wn&&Zm(O)===I.type){n(g,I.sibling),p=i(I,v.props),p.ref=Ps(g,I,v),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}v.type===_i?(p=Vr(v.props.children,g.mode,E,v.key),p.return=g,g=p):(E=sl(v.type,v.key,v.props,null,g.mode,E),E.ref=Ps(g,p,v),E.return=g,g=E)}return o(g);case yi:e:{for(I=v.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=zu(v,g.mode,E),p.return=g,g=p}return o(g);case Wn:return I=v._init,b(g,p,I(v._payload),E)}if(zs(v))return m(g,p,v,E);if(Cs(v))return _(g,p,v,E);xa(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=$u(v,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return b}var Ji=Q_(!0),X_=Q_(!1),Xo={},an=Ir(Xo),ko=Ir(Xo),Co=Ir(Xo);function $r(t){if(t===Xo)throw Error($(174));return t}function Ph(t,e){switch(Ee(Co,e),Ee(ko,t),Ee(an,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:If(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=If(e,t)}Ie(an),Ee(an,e)}function Zi(){Ie(an),Ie(ko),Ie(Co)}function J_(t){$r(Co.current);var e=$r(an.current),n=If(e,t.type);e!==n&&(Ee(ko,t),Ee(an,n))}function Nh(t){ko.current===t&&(Ie(an),Ie(ko))}var Pe=Ir(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ou=[];function Ah(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var el=Ln.ReactCurrentDispatcher,Lu=Ln.ReactCurrentBatchConfig,qr=0,Ne=null,je=null,Ke=null,Al=!1,Xs=!1,bo=0,Zk=0;function rt(){throw Error($(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Oh(t,e,n,r,i,s){if(qr=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?rC:iC,t=n(r,i),Xs){s=0;do{if(Xs=!1,bo=0,25<=s)throw Error($(301));s+=1,Ke=je=null,e.updateQueue=null,el.current=sC,t=n(r,i)}while(Xs)}if(el.current=Rl,e=je!==null&&je.next!==null,qr=0,Ke=je=Ne=null,Al=!1,e)throw Error($(300));return t}function Lh(){var t=bo!==0;return bo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function zt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error($(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Io(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((qr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,Ne.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function e0(t,e){var n=Ne,r=zt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Dh(r0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,xo(9,n0.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error($(349));(qr&30)!==0||t0(n,e,i)}return i}function t0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n0(t,e,n,r){e.value=n,e.getSnapshot=r,i0(e)&&s0(t)}function r0(t,e,n){return n(function(){i0(e)&&s0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function s0(t){var e=In(t,1);e!==null&&Jt(e,t,1,-1)}function eg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=nC.bind(null,Ne,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o0(){return zt().memoizedState}function tl(t,e,n,r){var i=nn();Ne.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Rh(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function tg(t,e){return tl(8390656,8,t,e)}function Dh(t,e){return kc(2048,8,t,e)}function a0(t,e){return kc(4,2,t,e)}function l0(t,e){return kc(4,4,t,e)}function c0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function u0(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,c0.bind(null,e,t),n)}function Mh(){}function f0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function h0(t,e,n){return(qr&21)===0?(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n):(en(n,e)||(n=g_(),Ne.lanes|=n,Qr|=n,t.baseState=!0),e)}function eC(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Lu.transition;Lu.transition={};try{t(!1),e()}finally{me=n,Lu.transition=r}}function p0(){return zt().memoizedState}function tC(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m0(t))g0(e,n);else if(n=G_(t,e,n,r),n!==null){var i=dt();Jt(n,t,r,i),v0(n,e,r)}}function nC(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(t))g0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,xh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=G_(t,e,i,r),n!==null&&(i=dt(),Jt(n,t,r,i),v0(n,e,r))}}function m0(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function g0(t,e){Xs=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hh(t,n)}}var Rl={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},rC={readContext:$t,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,c0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tC.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:eg,useDebugValue:Mh,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=eg(!1),e=t[0];return t=eC.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=nn();if(Te){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Qe===null)throw Error($(349));(qr&30)!==0||t0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tg(r0.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,n0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Qe.identifierPrefix;if(Te){var n=gn,r=mn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iC={readContext:$t,useCallback:f0,useContext:$t,useEffect:Dh,useImperativeHandle:u0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:Du,useRef:o0,useState:function(){return Du(Io)},useDebugValue:Mh,useDeferredValue:function(t){var e=zt();return h0(e,je.memoizedState,t)},useTransition:function(){var t=Du(Io)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1},sC={readContext:$t,useCallback:f0,useContext:$t,useEffect:Dh,useImperativeHandle:u0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:d0,useReducer:Mu,useRef:o0,useState:function(){return Mu(Io)},useDebugValue:Mh,useDeferredValue:function(t){var e=zt();return je===null?e.memoizedState=t:h0(e,je.memoizedState,t)},useTransition:function(){var t=Mu(Io)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:e0,useId:p0,unstable_isNewReconciler:!1};function es(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oC=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,sd=r),qf(t,e)},n}function _0(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qf(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wC.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var aC=Ln.ReactCurrentOwner,vt=!1;function ct(t,e,n,r){e.child=t===null?X_(e,null,n,r):Ji(e,t.child,n,r)}function sg(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Oh(t,e,n,r,s,i),n=Lh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Te&&n&&Sh(e),e.flags|=1,ct(t,e,r,i),e.child)}function og(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w0(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function w0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(vt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Qf(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Pi,bt),bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Pi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Pi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Pi,bt),bt|=r;return ct(t,e,i,n),e.child}function E0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var s=wt(n)?Kr:at.current;return s=Qi(e,s),zi(e,i),n=Oh(t,e,n,r,s,i),r=Lh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Te&&r&&Sh(e),e.flags|=1,ct(t,e,n,i),e.child)}function ag(t,e,n,r,i){if(wt(n)){var s=!0;Cl(e)}else s=!1;if(zi(e,i),e.stateNode===null)nl(t,e),q_(e,n,r),Yf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?Kr:at.current,c=Qi(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Jm(e,o,r,c),Hn=!1;var d=e.memoizedState;o.state=d,Pl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||_t.current||Hn?(typeof f=="function"&&(Kf(e,n,f,r),l=e.memoizedState),(a=Hn||Xm(e,n,a,r,d,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ht(e.type,a),o.props=c,u=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=wt(n)?Kr:at.current,l=Qi(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==l)&&Jm(e,o,r,l),Hn=!1,d=e.memoizedState,o.state=d,Pl(e,r,o,i);var m=e.memoizedState;a!==u||d!==m||_t.current||Hn?(typeof h=="function"&&(Kf(e,n,h,r),m=e.memoizedState),(c=Hn||Xm(e,n,c,r,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Xf(t,e,n,r,s,i)}function Xf(t,e,n,r,i,s){E0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gm(e,n,!1),xn(t,e,s);r=e.stateNode,aC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&Gm(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?Vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vm(t,e.context,!1),Ph(t,e.containerInfo)}function lg(t,e,n,r,i){return Xi(),kh(i),e.flags|=256,ct(t,e,n,r),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function C0(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Pe,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Jf,t):Fh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jf,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fh(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,r){return r!==null&&kh(r),Ji(e,t.child,null,n),t=Fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fu(Error($(422))),Ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ji(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Jf,s);if((e.mode&1)===0)return Ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Fu(s,r,void 0),Ta(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),Jt(r,t,i,-1))}return Hh(),r=Fu(Error($(421))),Ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=rr(i.nextSibling),xt=e,Te=!0,Vt=null,t!==null&&(Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Yr,mn=t.id,gn=t.overflow,Yr=e),e=Fh(e,r.children),e.flags|=4096,e)}function cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Uu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,n,e);else if(t.tag===19)cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Pe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uu(e,!0,n,null,s);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cC(t,e,n){switch(e.tag){case 3:k0(e),Xi();break;case 5:J_(e);break;case 1:wt(e.type)&&Cl(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?C0(t,e,n):(Ee(Pe,Pe.current&1),t=xn(t,e,n),t!==null?t.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return b0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return xn(t,e,n)}var I0,ed,x0,T0;I0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};x0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(an.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=bf(t,i),r=bf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}xf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uC(t,e,n){var r=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return wt(e.type)&&kl(),it(e),null;case 3:return r=e.stateNode,Zi(),Ie(_t),Ie(at),Ah(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vt!==null&&(ld(Vt),Vt=null))),ed(t,e),it(e),null;case 5:Nh(e);var i=$r(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)x0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return it(e),null}if(t=$r(an.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Ws.length;i++)ke(Ws[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ym(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":wm(r,s),ke("invalid",r)}xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":va(r),_m(r,s,!0);break;case"textarea":va(r),Sm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Eo]=r,I0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ws.length;i++)ke(Ws[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":ym(t,r),i=Ef(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ke("invalid",t);break;case"textarea":wm(t,r),i=bf(t,r),ke("invalid",t);break;default:i=r}xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&ah(t,s,l,o))}switch(n){case"input":va(t),_m(t,r,!1);break;case"textarea":va(t),Sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)T0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=$r(Co.current),$r(an.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return it(e),null;case 13:if(Ie(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&It!==null&&(e.mode&1)!==0&&(e.flags&128)===0)V_(),Xi(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[rn]=e}else Xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Vt!==null&&(ld(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Pe.current&1)!==0?Be===0&&(Be=3):Hh())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Zi(),ed(t,e),t===null&&wo(e.stateNode.containerInfo),it(e),null;case 10:return Ih(e.type._context),it(e),null;case 17:return wt(e.type)&&kl(),it(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>ts&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*Fe()-s.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(bt&1073741824)!==0&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function fC(t,e){switch(Eh(e),e.tag){case 1:return wt(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),Ie(_t),Ie(at),Ah(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Nh(e),null;case 13:if(Ie(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return Zi(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Pa=!1,st=!1,dC=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var ug=!1;function hC(t,e){if(Uf=_l,t=R_(),wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,u=t,d=null;t:for(;;){for(var h;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(h=u.firstChild)!==null;)d=u,u=h;for(;;){if(u===t)break t;if(d===n&&++c===i&&(a=o),d===s&&++f===r&&(l=o),(h=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},_l=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,b=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ht(e.type,_),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(E){Oe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=ug,ug=!1,m}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function P0(t){var e=t.alternate;e!==null&&(t.alternate=null,P0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Eo],delete e[Wf],delete e[qk],delete e[Qk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N0(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var et=null,Bt=!1;function $n(t,e,n){for(n=n.child;n!==null;)A0(t,e,n),n=n.sibling}function A0(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:st||Ti(n,e);case 6:var r=et,i=Bt;et=null,$n(t,e,n),et=r,Bt=i,et!==null&&(Bt?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Bt?(t=et,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),vo(t)):Au(et,n.stateNode));break;case 4:r=et,i=Bt,et=n.stateNode.containerInfo,Bt=!0,$n(t,e,n),et=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&td(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!st&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,$n(t,e,n),st=r):$n(t,e,n);break;default:$n(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dC),e.forEach(function(r){var i=EC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,Bt=!1;break e;case 3:et=a.stateNode.containerInfo,Bt=!0;break e;case 4:et=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(et===null)throw Error($(160));A0(s,o,i),et=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R0(e,t),e=e.sibling}function R0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),tn(t),r&4){try{Js(3,t,t.return),Cc(3,t)}catch(_){Oe(t,t.return,_)}try{Js(5,t,t.return)}catch(_){Oe(t,t.return,_)}}break;case 1:Wt(e,t),tn(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Wt(e,t),tn(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(_){Oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zy(i,s),Tf(a,o);var c=Tf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?i_(i,u):f==="dangerouslySetInnerHTML"?n_(i,u):f==="children"?ho(i,u):ah(i,f,u,c)}switch(a){case"input":kf(i,s);break;case"textarea":e_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Mi(i,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(_){Oe(t,t.return,_)}}break;case 6:if(Wt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Oe(t,t.return,_)}}break;case 3:if(Wt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(_){Oe(t,t.return,_)}break;case 4:Wt(e,t),tn(t);break;case 13:Wt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zh=Fe())),r&4&&dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||f,Wt(e,t),st=c):Wt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&(t.mode&1)!==0)for(B=t,f=t.child;f!==null;){for(u=B=f;B!==null;){switch(d=B,h=d.child,d.tag){case 0:case 11:case 14:case 15:Js(4,d,d.return);break;case 1:Ti(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Oe(r,n,_)}}break;case 5:Ti(d,d.return);break;case 22:if(d.memoizedState!==null){pg(u);continue}}h!==null?(h.return=d,B=h):pg(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r_("display",o))}catch(_){Oe(t,t.return,_)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(_){Oe(t,t.return,_)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Wt(e,t),tn(t),r&4&&dg(t);break;case 21:break;default:Wt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=fg(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fg(t);rd(t,a,o);break;default:throw Error($(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pC(t,e,n){B=t,O0(t)}function O0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=Pa;var c=st;if(Pa=o,(st=l)&&!c)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?mg(i):l!==null?(l.return=o,B=l):mg(i);for(;s!==null;)B=s,O0(s),s=s.sibling;B=i,Pa=a,st=c}hg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,B=s):hg(t)}}function hg(t){for(;B!==null;){var e=B;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:st||Cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&vo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}st||e.flags&512&&nd(e)}catch(d){Oe(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function pg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function mg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{nd(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{nd(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var mC=Math.ceil,Ol=Ln.ReactCurrentDispatcher,Uh=Ln.ReactCurrentOwner,Ut=Ln.ReactCurrentBatchConfig,de=0,Qe=null,$e=null,tt=0,bt=0,Pi=Ir(0),Be=0,To=null,Qr=0,bc=0,$h=0,Zs=null,gt=null,zh=0,ts=1/0,hn=null,Ll=!1,sd=null,sr=null,Na=!1,Xn=null,Dl=0,eo=0,od=null,rl=-1,il=0;function dt(){return(de&6)!==0?Fe():rl!==-1?rl:rl=Fe()}function or(t){return(t.mode&1)===0?1:(de&2)!==0&&tt!==0?tt&-tt:Jk.transition!==null?(il===0&&(il=g_()),il):(t=me,t!==0||(t=window.event,t=t===void 0?16:k_(t.type)),t)}function Jt(t,e,n,r){if(50<eo)throw eo=0,od=null,Error($(185));Yo(t,n,r),((de&2)===0||t!==Qe)&&(t===Qe&&((de&2)===0&&(bc|=n),Be===4&&Vn(t,tt)),St(t,r),n===1&&de===0&&(e.mode&1)===0&&(ts=Fe()+500,Sc&&xr()))}function St(t,e){var n=t.callbackNode;JE(t,e);var r=yl(t,t===Qe?tt:0);if(r===0)n!==null&&Cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cm(n),e===1)t.tag===0?Xk(gg.bind(null,t)):W_(gg.bind(null,t)),Kk(function(){(de&6)===0&&xr()}),n=null;else{switch(v_(r)){case 1:n=dh;break;case 4:n=p_;break;case 16:n=vl;break;case 536870912:n=m_;break;default:n=vl}n=j0(n,L0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L0(t,e){if(rl=-1,il=0,(de&6)!==0)throw Error($(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=yl(t,t===Qe?tt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ml(t,r);else{e=r;var i=de;de|=2;var s=M0();(Qe!==t||tt!==e)&&(hn=null,ts=Fe()+500,Br(t,e));do try{yC();break}catch(a){D0(t,a)}while(1);bh(),Ol.current=s,de=i,$e!==null?e=0:(Qe=null,tt=0,e=Be)}if(e!==0){if(e===2&&(i=Of(t),i!==0&&(r=i,e=ad(t,i))),e===1)throw n=To,Br(t,0),Vn(t,r),St(t,Fe()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!gC(i)&&(e=Ml(t,r),e===2&&(s=Of(t),s!==0&&(r=s,e=ad(t,s))),e===1))throw n=To,Br(t,0),Vn(t,r),St(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Or(t,gt,hn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=zh+500-Fe(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jf(Or.bind(null,t,gt,hn),e);break}Or(t,gt,hn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mC(r/1960))-r,10<r){t.timeoutHandle=jf(Or.bind(null,t,gt,hn),r);break}Or(t,gt,hn);break;case 5:Or(t,gt,hn);break;default:throw Error($(329))}}}return St(t,Fe()),t.callbackNode===n?L0.bind(null,t):null}function ad(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=gt,gt=n,e!==null&&ld(e)),t}function ld(t){gt===null?gt=t:gt.push.apply(gt,t)}function gC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~$h,e&=~bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if((de&6)!==0)throw Error($(327));ji();var e=yl(t,0);if((e&1)===0)return St(t,Fe()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Of(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=To,Br(t,0),Vn(t,e),St(t,Fe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,gt,hn),St(t,Fe()),null}function jh(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ts=Fe()+500,Sc&&xr())}}function Xr(t){Xn!==null&&Xn.tag===0&&(de&6)===0&&ji();var e=de;de|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,t)return t()}finally{me=r,Ut.transition=n,de=e,(de&6)===0&&xr()}}function Wh(){bt=Pi.current,Ie(Pi)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gk(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Eh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:Zi(),Ie(_t),Ie(at),Ah();break;case 5:Nh(r);break;case 4:Zi();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:Ih(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Qe=t,$e=t=ar(t.current,null),tt=bt=e,Be=0,To=null,$h=bc=Qr=0,gt=Zs=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function D0(t,e){do{var n=$e;try{if(bh(),el.current=Rl,Al){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(qr=0,Ke=je=Ne=null,Xs=!1,bo=0,Uh.current=null,n===null||n.return===null){Be=1,To=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if((f.mode&1)===0&&(u===0||u===11||u===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=rg(o);if(h!==null){h.flags&=-257,ig(h,o,a,s,e),h.mode&1&&ng(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if((e&1)===0){ng(s,c,e),Hh();break e}l=Error($(426))}}else if(Te&&a.mode&1){var b=rg(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),ig(b,o,a,s,e),kh(es(l,a));break e}}s=l=es(l,a),Be!==4&&(Be=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=y0(s,l,e);qm(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(sr===null||!sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_0(s,a,e);qm(s,E);break e}}s=s.return}while(s!==null)}U0(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function M0(){var t=Ol.current;return Ol.current=Rl,t===null?Rl:t}function Hh(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||(Qr&268435455)===0&&(bc&268435455)===0||Vn(Qe,tt)}function Ml(t,e){var n=de;de|=2;var r=M0();(Qe!==t||tt!==e)&&(hn=null,Br(t,e));do try{vC();break}catch(i){D0(t,i)}while(1);if(bh(),de=n,Ol.current=r,$e!==null)throw Error($(261));return Qe=null,tt=0,Be}function vC(){for(;$e!==null;)F0($e)}function yC(){for(;$e!==null&&!HE();)F0($e)}function F0(t){var e=z0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?U0(t):$e=e,Uh.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=uC(n,e,bt),n!==null){$e=n;return}}else{if(n=fC(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Be===0&&(Be=5)}function Or(t,e,n){var r=me,i=Ut.transition;try{Ut.transition=null,me=1,_C(t,e,n,r)}finally{Ut.transition=i,me=r}return null}function _C(t,e,n,r){do ji();while(Xn!==null);if((de&6)!==0)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZE(t,s),t===Qe&&($e=Qe=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Na||(Na=!0,j0(vl,function(){return ji(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ut.transition,Ut.transition=null;var o=me;me=1;var a=de;de|=4,Uh.current=null,hC(t,n),R0(n,t),$k($f),_l=!!Uf,$f=Uf=null,t.current=n,pC(n),BE(),de=a,me=o,Ut.transition=s}else t.current=n;if(Na&&(Na=!1,Xn=t,Dl=i),s=t.pendingLanes,s===0&&(sr=null),KE(n.stateNode),St(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=sd,sd=null,t;return(Dl&1)!==0&&t.tag!==0&&ji(),s=t.pendingLanes,(s&1)!==0?t===od?eo++:(eo=0,od=t):eo=0,xr(),null}function ji(){if(Xn!==null){var t=v_(Dl),e=Ut.transition,n=me;try{if(Ut.transition=null,me=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Dl=0,(de&6)!==0)throw Error($(331));var i=de;for(de|=4,B=t.current;B!==null;){var s=B,o=s.child;if((B.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(B=c;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Js(8,f,s)}var u=f.child;if(u!==null)u.return=f,B=u;else for(;B!==null;){f=B;var d=f.sibling,h=f.return;if(P0(f),f===c){B=null;break}if(d!==null){d.return=h,B=d;break}B=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}B=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,B=g;break e}B=s.return}}var p=t.current;for(B=p;B!==null;){o=B;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,B=v;else e:for(o=p;B!==null;){if(a=B,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(O){Oe(a,a.return,O)}if(a===o){B=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,B=E;break e}B=a.return}}if(de=i,xr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{me=n,Ut.transition=e}}return!1}function vg(t,e,n){e=es(n,e),e=y0(t,e,1),t=ir(t,e,1),e=dt(),t!==null&&(Yo(t,1,e),St(t,e))}function Oe(t,e,n){if(t.tag===3)vg(t,t,n);else for(;e!==null;){if(e.tag===3){vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=es(n,t),t=_0(e,t,1),e=ir(e,t,1),t=dt(),e!==null&&(Yo(e,1,t),St(e,t));break}}e=e.return}}function wC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(Be===4||Be===3&&(tt&130023424)===tt&&500>Fe()-zh?Br(t,0):$h|=n),St(t,e)}function $0(t,e){e===0&&((t.mode&1)===0?e=1:(e=wa,wa<<=1,(wa&130023424)===0&&(wa=4194304)));var n=dt();t=In(t,e),t!==null&&(Yo(t,e,n),St(t,n))}function SC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$0(t,n)}function EC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),$0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return vt=!1,cC(t,e,n);vt=(t.flags&131072)!==0}else vt=!1,Te&&(e.flags&1048576)!==0&&H_(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=Qi(e,at.current);zi(e,n),i=Oh(null,e,r,t,i,n);var s=Lh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Th(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Yf(e,r,t,n),e=Xf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Sh(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CC(r),t=Ht(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=sg(null,e,r,t,n);break e;case 14:e=og(null,e,r,Ht(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ag(t,e,r,i,n);case 3:e:{if(k0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K_(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=es(Error($(423)),e),e=lg(t,e,r,n,i);break e}else if(r!==i){i=es(Error($(424)),e),e=lg(t,e,r,n,i);break e}else for(It=rr(e.stateNode.containerInfo.firstChild),xt=e,Te=!0,Vt=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=xn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return J_(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zf(r,i)?o=null:s!==null&&zf(r,s)&&(e.flags|=32),E0(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return C0(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),sg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(xl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!_t.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=En(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=$t(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),og(t,e,r,i,n);case 15:return w0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),nl(t,e),e.tag=1,wt(r)?(t=!0,Cl(e)):t=!1,zi(e,n),q_(e,r,i),Yf(e,r,i,n),Xf(null,e,r,!0,t,n);case 19:return b0(t,e,n);case 22:return S0(t,e,n)}throw Error($(156,e.tag))};function j0(t,e){return h_(t,e)}function kC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new kC(t,e,n,r)}function Bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CC(t){if(typeof t=="function")return Bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ch)return 11;if(t===uh)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return Vr(n.children,i,s,e);case lh:o=8,i|=8;break;case yf:return t=Ft(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case _f:return t=Ft(13,n,e,i),t.elementType=_f,t.lanes=s,t;case wf:return t=Ft(19,n,e,i),t.elementType=wf,t.lanes=s,t;case Qy:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case qy:o=9;break e;case ch:o=11;break e;case uh:o=14;break e;case Wn:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Qy,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,r,i,s,o,a,l){return t=new bC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),t}function IC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function W0(t){if(!t)return vr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(wt(n))return j_(t,n,e)}return e}function H0(t,e,n,r,i,s,o,a,l){return t=Vh(n,r,!0,t,i,s,o,a,l),t.context=W0(null),n=t.current,r=dt(),i=or(n),s=En(r,i),s.callback=e!=null?e:null,ir(n,s,i),t.current.lanes=i,Yo(t,i,r),St(t,r),t}function xc(t,e,n,r){var i=e.current,s=dt(),o=or(i);return n=W0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Jt(t,i,o,s),Za(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function xC(){return null}var B0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}Tc.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xc(t,e,null,null)};Tc.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){xc(null,t,null,null)}),e[bn]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&E_(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function TC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fl(o);s.call(c)}}var o=H0(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[bn]=o.current,wo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fl(l);a.call(c)}}var l=Vh(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[bn]=l.current,wo(t.nodeType===8?t.parentNode:t),Xr(function(){xc(e,l,n,r)}),l}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fl(o);a.call(l)}}xc(e,o,t,i)}else o=TC(n,e,t,i,r);return Fl(o)}y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(hh(e,n|1),St(e,Fe()),(de&6)===0&&(ts=Fe()+500,xr()))}break;case 13:Xr(function(){var r=In(t,1);if(r!==null){var i=dt();Jt(r,t,1,i)}}),Gh(t,1)}};ph=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=dt();Jt(e,t,134217728,n)}Gh(t,134217728)}};__=function(t){if(t.tag===13){var e=or(t),n=In(t,e);if(n!==null){var r=dt();Jt(n,t,e,r)}Gh(t,e)}};w_=function(){return me};S_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Nf=function(t,e,n){switch(e){case"input":if(kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error($(90));Jy(r),kf(r,i)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};a_=jh;l_=Xr;var PC={usingClientEntryPoint:!1,Events:[Qo,ki,wc,s_,o_,jh]},As={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NC={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||xC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{gc=Aa.inject(NC),on=Aa}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PC;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error($(200));return IC(t,e,null,n)};Pt.createRoot=function(t,e){if(!Yh(t))throw Error($(299));var n=!1,r="",i=B0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,wo(t.nodeType===8?t.parentNode:t),new Kh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Xr(t)};Pt.hydrate=function(t,e,n){if(!Pc(e))throw Error($(200));return Nc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[bn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tc(e)};Pt.render=function(t,e,n){if(!Pc(e))throw Error($(200));return Nc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Pc(t))throw Error($(40));return t._reactRootContainer?(Xr(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Pt.unstable_batchedUpdates=jh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Nc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(Hy);var wg=Hy.exports;gf.createRoot=wg.createRoot,gf.hydrateRoot=wg.hydrateRoot;var Ac={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,qh=Je?Symbol.for("react.element"):60103,Qh=Je?Symbol.for("react.portal"):60106,Rc=Je?Symbol.for("react.fragment"):60107,Oc=Je?Symbol.for("react.strict_mode"):60108,Lc=Je?Symbol.for("react.profiler"):60114,Dc=Je?Symbol.for("react.provider"):60109,Mc=Je?Symbol.for("react.context"):60110,Xh=Je?Symbol.for("react.async_mode"):60111,Fc=Je?Symbol.for("react.concurrent_mode"):60111,Uc=Je?Symbol.for("react.forward_ref"):60112,$c=Je?Symbol.for("react.suspense"):60113,AC=Je?Symbol.for("react.suspense_list"):60120,zc=Je?Symbol.for("react.memo"):60115,jc=Je?Symbol.for("react.lazy"):60116,RC=Je?Symbol.for("react.block"):60121,OC=Je?Symbol.for("react.fundamental"):60117,LC=Je?Symbol.for("react.responder"):60118,DC=Je?Symbol.for("react.scope"):60119;function At(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qh:switch(t=t.type,t){case Xh:case Fc:case Rc:case Lc:case Oc:case $c:return t;default:switch(t=t&&t.$$typeof,t){case Mc:case Uc:case jc:case zc:case Dc:return t;default:return e}}case Qh:return e}}}function V0(t){return At(t)===Fc}ge.AsyncMode=Xh;ge.ConcurrentMode=Fc;ge.ContextConsumer=Mc;ge.ContextProvider=Dc;ge.Element=qh;ge.ForwardRef=Uc;ge.Fragment=Rc;ge.Lazy=jc;ge.Memo=zc;ge.Portal=Qh;ge.Profiler=Lc;ge.StrictMode=Oc;ge.Suspense=$c;ge.isAsyncMode=function(t){return V0(t)||At(t)===Xh};ge.isConcurrentMode=V0;ge.isContextConsumer=function(t){return At(t)===Mc};ge.isContextProvider=function(t){return At(t)===Dc};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qh};ge.isForwardRef=function(t){return At(t)===Uc};ge.isFragment=function(t){return At(t)===Rc};ge.isLazy=function(t){return At(t)===jc};ge.isMemo=function(t){return At(t)===zc};ge.isPortal=function(t){return At(t)===Qh};ge.isProfiler=function(t){return At(t)===Lc};ge.isStrictMode=function(t){return At(t)===Oc};ge.isSuspense=function(t){return At(t)===$c};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Rc||t===Fc||t===Lc||t===Oc||t===$c||t===AC||typeof t=="object"&&t!==null&&(t.$$typeof===jc||t.$$typeof===zc||t.$$typeof===Dc||t.$$typeof===Mc||t.$$typeof===Uc||t.$$typeof===OC||t.$$typeof===LC||t.$$typeof===DC||t.$$typeof===RC)};ge.typeOf=At;(function(t){t.exports=ge})(Ac);function MC(t){function e(C,A,U,W,w){for(var Y=0,R=0,X=0,q=0,ee,Z,Q=0,ye=0,re,Ue=re=ee=0,fe=0,Re=0,Fn=0,Ze=0,pa=U.length,ks=pa-1,jt,ne="",Me="",hu="",pu="",Un;fe<pa;){if(Z=U.charCodeAt(fe),fe===ks&&R+q+X+Y!==0&&(R!==0&&(Z=R===47?10:47),q=X=Y=0,pa++,ks++),R+q+X+Y===0){if(fe===ks&&(0<Re&&(ne=ne.replace(d,"")),0<ne.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:ne+=U.charAt(fe)}Z=59}switch(Z){case 123:for(ne=ne.trim(),ee=ne.charCodeAt(0),re=1,Ze=++fe;fe<pa;){switch(Z=U.charCodeAt(fe)){case 123:re++;break;case 125:re--;break;case 47:switch(Z=U.charCodeAt(fe+1)){case 42:case 47:e:{for(Ue=fe+1;Ue<ks;++Ue)switch(U.charCodeAt(Ue)){case 47:if(Z===42&&U.charCodeAt(Ue-1)===42&&fe+2!==Ue){fe=Ue+1;break e}break;case 10:if(Z===47){fe=Ue+1;break e}}fe=Ue}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;fe++<ks&&U.charCodeAt(fe)!==Z;);}if(re===0)break;fe++}switch(re=U.substring(Ze,fe),ee===0&&(ee=(ne=ne.replace(u,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Re&&(ne=ne.replace(d,"")),Z=ne.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Re=A;break;default:Re=x}if(re=e(A,Re,re,Z,w+1),Ze=re.length,0<S&&(Re=n(x,ne,Fn),Un=a(3,re,Re,A,ze,we,Ze,Z,w,W),ne=Re.join(""),Un!==void 0&&(Ze=(re=Un.trim()).length)===0&&(Z=0,re="")),0<Ze)switch(Z){case 115:ne=ne.replace(I,o);case 100:case 109:case 45:re=ne+"{"+re+"}";break;case 107:ne=ne.replace(p,"$1 $2"),re=ne+"{"+re+"}",re=y===1||y===2&&s("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=ne+re,W===112&&(re=(Me+=re,""))}else re="";break;default:re=e(A,n(A,ne,Fn),re,W,w+1)}hu+=re,re=Fn=Re=Ue=ee=0,ne="",Z=U.charCodeAt(++fe);break;case 125:case 59:if(ne=(0<Re?ne.replace(d,""):ne).trim(),1<(Ze=ne.length))switch(Ue===0&&(ee=ne.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Ze=(ne=ne.replace(" ",":")).length),0<S&&(Un=a(1,ne,A,C,ze,we,Me.length,W,w,W))!==void 0&&(Ze=(ne=Un.trim()).length)===0&&(ne="\0\0"),ee=ne.charCodeAt(0),Z=ne.charCodeAt(1),ee){case 0:break;case 64:if(Z===105||Z===99){pu+=ne+U.charAt(fe);break}default:ne.charCodeAt(Ze-1)!==58&&(Me+=i(ne,ee,Z,ne.charCodeAt(2)))}Fn=Re=Ue=ee=0,ne="",Z=U.charCodeAt(++fe)}}switch(Z){case 13:case 10:R===47?R=0:1+ee===0&&W!==107&&0<ne.length&&(Re=1,ne+="\0"),0<S*L&&a(0,ne,A,C,ze,we,Me.length,W,w,W),we=1,ze++;break;case 59:case 125:if(R+q+X+Y===0){we++;break}default:switch(we++,jt=U.charAt(fe),Z){case 9:case 32:if(q+Y+R===0)switch(Q){case 44:case 58:case 9:case 32:jt="";break;default:Z!==32&&(jt=" ")}break;case 0:jt="\\0";break;case 12:jt="\\f";break;case 11:jt="\\v";break;case 38:q+R+Y===0&&(Re=Fn=1,jt="\f"+jt);break;case 108:if(q+R+Y+se===0&&0<Ue)switch(fe-Ue){case 2:Q===112&&U.charCodeAt(fe-3)===58&&(se=Q);case 8:ye===111&&(se=ye)}break;case 58:q+R+Y===0&&(Ue=fe);break;case 44:R+X+q+Y===0&&(Re=1,jt+="\r");break;case 34:case 39:R===0&&(q=q===Z?0:q===0?Z:q);break;case 91:q+R+X===0&&Y++;break;case 93:q+R+X===0&&Y--;break;case 41:q+R+Y===0&&X--;break;case 40:if(q+R+Y===0){if(ee===0)switch(2*Q+3*ye){case 533:break;default:ee=1}X++}break;case 64:R+X+q+Y+Ue+re===0&&(re=1);break;case 42:case 47:if(!(0<q+Y+X))switch(R){case 0:switch(2*Z+3*U.charCodeAt(fe+1)){case 235:R=47;break;case 220:Ze=fe,R=42}break;case 42:Z===47&&Q===42&&Ze+2!==fe&&(U.charCodeAt(Ze+2)===33&&(Me+=U.substring(Ze,fe+1)),jt="",R=0)}}R===0&&(ne+=jt)}ye=Q,Q=Z,fe++}if(Ze=Me.length,0<Ze){if(Re=A,0<S&&(Un=a(2,Me,Re,C,ze,we,Ze,W,w,W),Un!==void 0&&(Me=Un).length===0))return pu+Me+hu;if(Me=Re.join(",")+"{"+Me+"}",y*se!==0){switch(y!==2||s(Me,2)||(se=0),se){case 111:Me=Me.replace(E,":-moz-$1")+Me;break;case 112:Me=Me.replace(v,"::-webkit-input-$1")+Me.replace(v,"::-moz-$1")+Me.replace(v,":-ms-input-$1")+Me}se=0}}return pu+Me+hu}function n(C,A,U){var W=A.trim().split(b);A=W;var w=W.length,Y=C.length;switch(Y){case 0:case 1:var R=0;for(C=Y===0?"":C[0]+" ";R<w;++R)A[R]=r(C,A[R],U).trim();break;default:var X=R=0;for(A=[];R<w;++R)for(var q=0;q<Y;++q)A[X++]=r(C[q]+" ",W[R],U).trim()}return A}function r(C,A,U){var W=A.charCodeAt(0);switch(33>W&&(W=(A=A.trim()).charCodeAt(0)),W){case 38:return A.replace(g,"$1"+C.trim());case 58:return C.trim()+A.replace(g,"$1"+C.trim());default:if(0<1*U&&0<A.indexOf("\f"))return A.replace(g,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+A}function i(C,A,U,W){var w=C+";",Y=2*A+3*U+4*W;if(Y===944){C=w.indexOf(":",9)+1;var R=w.substring(C,w.length-1).trim();return R=w.substring(0,C).trim()+R+";",y===1||y===2&&s(R,1)?"-webkit-"+R+R:R}if(y===0||y===2&&!s(w,1))return w;switch(Y){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(pe,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return R=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+w+"-ms-flex-pack"+R+w;case 1005:return m.test(w)?w.replace(h,":-webkit-")+w.replace(h,":-moz-")+w:w;case 1e3:switch(R=w.substring(13).trim(),A=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(A)){case 226:R=w.replace(O,"tb");break;case 232:R=w.replace(O,"tb-rl");break;case 220:R=w.replace(O,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+R+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(A=(w=C).length-10,R=(w.charCodeAt(A)===33?w.substring(0,A):w).substring(C.indexOf(":",7)+1).trim(),Y=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:w=w.replace(R,"-webkit-"+R)+";"+w;break;case 207:case 102:w=w.replace(R,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+w.replace(R,"-webkit-"+R)+";"+w.replace(R,"-ms-"+R+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return R=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+R+"-ms-flex-"+R+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(F,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(F,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(C)===!0)return(R=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?i(C.replace("stretch","fill-available"),A,U,W).replace(":fill-available",":stretch"):w.replace(R,"-webkit-"+R)+w.replace(R,"-moz-"+R.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,U+W===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+w}return w}function s(C,A){var U=C.indexOf(A===1?":":"{"),W=C.substring(0,A!==3?U:10);return U=C.substring(U+1,C.length-1),T(A!==2?W:W.replace(G,"$1"),U,A)}function o(C,A){var U=i(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return U!==A+";"?U.replace(M," or ($1)").substring(4):"("+A+")"}function a(C,A,U,W,w,Y,R,X,q,ee){for(var Z=0,Q=A,ye;Z<S;++Z)switch(ye=k[Z].call(f,C,Q,U,W,w,Y,R,X,q,ee)){case void 0:case!1:case!0:case null:break;default:Q=ye}if(Q!==A)return Q}function l(C){switch(C){case void 0:case null:S=k.length=0;break;default:if(typeof C=="function")k[S++]=C;else if(typeof C=="object")for(var A=0,U=C.length;A<U;++A)l(C[A]);else L=!!C|0}return l}function c(C){return C=C.prefix,C!==void 0&&(T=null,C?typeof C!="function"?y=1:(y=2,T=C):y=0),c}function f(C,A){var U=C;if(33>U.charCodeAt(0)&&(U=U.trim()),D=U,U=[D],0<S){var W=a(-1,A,U,U,ze,we,0,0,0,0);W!==void 0&&typeof W=="string"&&(A=W)}var w=e(x,U,A,0,0);return 0<S&&(W=a(-2,w,U,U,ze,we,w.length,0,0,0),W!==void 0&&(w=W)),D="",se=0,we=ze=1,w}var u=/^\0+/g,d=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,_=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,I=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,F=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,we=1,ze=1,se=0,y=1,x=[],k=[],S=0,T=null,L=0,D="";return f.use=l,f.set=c,t!==void 0&&c(t),f}var FC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function UC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var $C=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sg=UC(function(t){return $C.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Jh=Ac.exports,zC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zh={};Zh[Jh.ForwardRef]=WC;Zh[Jh.Memo]=G0;function Eg(t){return Jh.isMemo(t)?G0:Zh[t.$$typeof]||zC}var HC=Object.defineProperty,BC=Object.getOwnPropertyNames,kg=Object.getOwnPropertySymbols,VC=Object.getOwnPropertyDescriptor,GC=Object.getPrototypeOf,Cg=Object.prototype;function K0(t,e,n){if(typeof e!="string"){if(Cg){var r=GC(e);r&&r!==Cg&&K0(t,r,n)}var i=BC(e);kg&&(i=i.concat(kg(e)));for(var s=Eg(t),o=Eg(e),a=0;a<i.length;++a){var l=i[a];if(!jC[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=VC(e,l);try{HC(t,l,c)}catch{}}}}return t}var KC=K0;function Kt(){return(Kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var bg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},cd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ac.exports.typeOf(t)},Ul=Object.freeze([]),lr=Object.freeze({});function ns(t){return typeof t=="function"}function Ig(t){return t.displayName||t.name||"Component"}function ep(t){return t&&typeof t.styledComponentId=="string"}var rs=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",tp=typeof window<"u"&&"HTMLElement"in window,YC=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),qC={};function Jr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var QC=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Jr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,f=r.length;c<f;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ol=new Map,$l=new Map,to=1,Ra=function(t){if(ol.has(t))return ol.get(t);for(;$l.has(to);)to++;var e=to++;return ol.set(t,e),$l.set(e,t),e},XC=function(t){return $l.get(t)},JC=function(t,e){e>=to&&(to=e+1),ol.set(t,e),$l.set(e,t)},ZC="style["+rs+'][data-styled-version="5.3.6"]',eb=new RegExp("^"+rs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tb=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},nb=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(eb);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(JC(c,l),tb(t,c,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},rb=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Y0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var f=l[c];if(f&&f.nodeType===1&&f.hasAttribute(rs))return f}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(rs,"active"),r.setAttribute("data-styled-version","5.3.6");var o=rb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ib=function(){function t(n){var r=this.element=Y0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Jr(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),sb=function(){function t(n){var r=this.element=Y0(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),ob=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),xg=tp,ab={isServer:!tp,useCSSOMInjection:!YC},zl=function(){function t(n,r,i){n===void 0&&(n=lr),r===void 0&&(r={}),this.options=Kt({},ab,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&tp&&xg&&(xg=!1,function(s){for(var o=document.querySelectorAll(ZC),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(rs)!=="active"&&(nb(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return Ra(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new ob(o):s?new ib(o):new sb(o),new QC(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ra(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ra(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ra(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=XC(o);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(o);if(l&&c&&l.size){var f=rs+".g"+o+'[id="'+a+'"]',u="";l!==void 0&&l.forEach(function(d){d.length>0&&(u+=d+",")}),s+=""+c+f+'{content:"'+u+`"}/*!sc*/
`}}}return s}(this)},t}(),lb=/(a)(d)/gi,Tg=function(t){return String.fromCharCode(t+(t>25?39:97))};function ud(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Tg(e%52)+n;return(Tg(e%52)+n).replace(lb,"$1-$2")}var Ni=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},q0=function(t){return Ni(5381,t)};function Q0(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ns(n)&&!ep(n))return!1}return!0}var cb=q0("5.3.6"),ub=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q0(e),this.componentId=n,this.baseHash=Ni(cb,n),this.baseStyle=r,zl.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Zr(this.rules,e,n,r).join(""),a=ud(Ni(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,f=Ni(this.baseHash,r.hash),u="",d=0;d<c;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var m=Zr(h,e,n,r),_=Array.isArray(m)?m.join(""):m;f=Ni(f,_+d),u+=_}}if(u){var b=ud(f>>>0);if(!n.hasNameForId(i,b)){var g=r(u,"."+b,void 0,i);n.insertRules(i,b,g)}s.push(b)}}return s.join(" ")},t}(),fb=/^\s*\/\/.*$/gm,db=[":","[",".","#"];function hb(t){var e,n,r,i,s=t===void 0?lr:t,o=s.options,a=o===void 0?lr:o,l=s.plugins,c=l===void 0?Ul:l,f=new MC(a),u=[],d=function(_){function b(g){if(g)try{_(g+"}")}catch{}}return function(g,p,v,E,O,I,M,F,G,j){switch(g){case 1:if(G===0&&p.charCodeAt(0)===64)return _(p+";"),"";break;case 2:if(F===0)return p+"/*|*/";break;case 3:switch(F){case 102:case 112:return _(v[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(b)}}}(function(_){u.push(_)}),h=function(_,b,g){return b===0&&db.indexOf(g[n.length])!==-1||g.match(i)?_:"."+e};function m(_,b,g,p){p===void 0&&(p="&");var v=_.replace(fb,""),E=b&&g?g+" "+b+" { "+v+" }":v;return e=p,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(g||!b?"":b,E)}return f.use([].concat(c,[function(_,b,g){_===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},d,function(_){if(_===-2){var b=u;return u=[],b}}])),m.hash=c.length?c.reduce(function(_,b){return b.name||Jr(15),Ni(_,b.name)},5381).toString():"",m}var X0=fn.createContext();X0.Consumer;var J0=fn.createContext(),pb=(J0.Consumer,new zl),fd=hb();function Z0(){return N.exports.useContext(X0)||pb}function e1(){return N.exports.useContext(J0)||fd}var mb=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=fd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Jr(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=fd),this.name+e.hash},t}(),gb=/([A-Z])/,vb=/([A-Z])/g,yb=/^ms-/,_b=function(t){return"-"+t.toLowerCase()};function Pg(t){return gb.test(t)?t.replace(vb,_b).replace(yb,"-ms-"):t}var Ng=function(t){return t==null||t===!1||t===""};function Zr(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Zr(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Ng(t))return"";if(ep(t))return"."+t.styledComponentId;if(ns(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var l=t(e);return Zr(l,e,n,r)}var c;return t instanceof mb?n?(t.inject(n,r),t.getName(r)):t:cd(t)?function f(u,d){var h,m,_=[];for(var b in u)u.hasOwnProperty(b)&&!Ng(u[b])&&(Array.isArray(u[b])&&u[b].isCss||ns(u[b])?_.push(Pg(b)+":",u[b],";"):cd(u[b])?_.push.apply(_,f(u[b],b)):_.push(Pg(b)+": "+(h=b,(m=u[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in FC?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var Ag=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function t1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ns(t)||cd(t)?Ag(Zr(bg(Ul,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Ag(Zr(bg(t,n)))}var n1=function(t,e,n){return n===void 0&&(n=lr),t.theme!==n.theme&&t.theme||e||n.theme},wb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sb=/(^-|-$)/g;function ju(t){return t.replace(wb,"-").replace(Sb,"")}var r1=function(t){return ud(q0(t)>>>0)};function Oa(t){return typeof t=="string"&&!0}var dd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},Eb=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function kb(t,e,n){var r=t[n];dd(e)&&dd(r)?i1(r,e):t[n]=e}function i1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(dd(o))for(var a in o)Eb(a)&&kb(t,o[a],a)}return t}var Po=fn.createContext();Po.Consumer;function Cb(t){var e=N.exports.useContext(Po),n=N.exports.useMemo(function(){return function(r,i){if(!r)return Jr(14);if(ns(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Jr(8):i?Kt({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?fn.createElement(Po.Provider,{value:n},t.children):null}var Wu={};function s1(t,e,n){var r=ep(t),i=!Oa(t),s=e.attrs,o=s===void 0?Ul:s,a=e.componentId,l=a===void 0?function(p,v){var E=typeof p!="string"?"sc":ju(p);Wu[E]=(Wu[E]||0)+1;var O=E+"-"+r1("5.3.6"+E+Wu[E]);return v?v+"-"+O:O}(e.displayName,e.parentComponentId):a,c=e.displayName,f=c===void 0?function(p){return Oa(p)?"styled."+p:"Styled("+Ig(p)+")"}(t):c,u=e.displayName&&e.componentId?ju(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,h=e.shouldForwardProp;r&&t.shouldForwardProp&&(h=e.shouldForwardProp?function(p,v,E){return t.shouldForwardProp(p,v,E)&&e.shouldForwardProp(p,v,E)}:t.shouldForwardProp);var m,_=new ub(n,u,r?t.componentStyle:void 0),b=_.isStatic&&o.length===0,g=function(p,v){return function(E,O,I,M){var F=E.attrs,G=E.componentStyle,j=E.defaultProps,pe=E.foldedComponentIds,we=E.shouldForwardProp,ze=E.styledComponentId,se=E.target,y=function(W,w,Y){W===void 0&&(W=lr);var R=Kt({},w,{theme:W}),X={};return Y.forEach(function(q){var ee,Z,Q,ye=q;for(ee in ns(ye)&&(ye=ye(R)),ye)R[ee]=X[ee]=ee==="className"?(Z=X[ee],Q=ye[ee],Z&&Q?Z+" "+Q:Z||Q):ye[ee]}),[R,X]}(n1(O,N.exports.useContext(Po),j)||lr,O,F),x=y[0],k=y[1],S=function(W,w,Y,R){var X=Z0(),q=e1(),ee=w?W.generateAndInjectStyles(lr,X,q):W.generateAndInjectStyles(Y,X,q);return ee}(G,M,x),T=I,L=k.$as||O.$as||k.as||O.as||se,D=Oa(L),C=k!==O?Kt({},O,{},k):O,A={};for(var U in C)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?A.as=C[U]:(we?we(U,Sg,L):!D||Sg(U))&&(A[U]=C[U]));return O.style&&k.style!==O.style&&(A.style=Kt({},O.style,{},k.style)),A.className=Array.prototype.concat(pe,ze,S!==ze?S:null,O.className,k.className).filter(Boolean).join(" "),A.ref=T,N.exports.createElement(L,A)}(m,p,v,b)};return g.displayName=f,(m=fn.forwardRef(g)).attrs=d,m.componentStyle=_,m.displayName=f,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Ul,m.styledComponentId=u,m.target=r?t.target:t,m.withComponent=function(p){var v=e.componentId,E=function(I,M){if(I==null)return{};var F,G,j={},pe=Object.keys(I);for(G=0;G<pe.length;G++)F=pe[G],M.indexOf(F)>=0||(j[F]=I[F]);return j}(e,["componentId"]),O=v&&v+"-"+(Oa(p)?p:ju(Ig(p)));return s1(p,Kt({},E,{attrs:d,componentId:O}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?i1({},t.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&KC(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var hd=function(t){return function e(n,r,i){if(i===void 0&&(i=lr),!Ac.exports.isValidElementType(r))return Jr(1,String(r));var s=function(){return n(r,i,t1.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Kt({},i,{},o))},s.attrs=function(o){return e(n,r,Kt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(s1,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){hd[t]=hd(t)});var bb=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=Q0(n),zl.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Zr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&zl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function Ib(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=t1.apply(void 0,[t].concat(n)),s="sc-global-"+r1(JSON.stringify(i)),o=new bb(i,s);function a(c){var f=Z0(),u=e1(),d=N.exports.useContext(Po),h=N.exports.useRef(f.allocateGSInstance(s)).current;return f.server&&l(h,c,f,d,u),N.exports.useLayoutEffect(function(){if(!f.server)return l(h,c,f,d,u),function(){return o.removeStyles(h,f)}},[h,c,f,d,u]),null}function l(c,f,u,d,h){if(o.isStatic)o.renderStyles(c,qC,u,h);else{var m=Kt({},f,{theme:n1(f,d,a.defaultProps)});o.renderStyles(c,m,u,h)}}return fn.memo(a)}const V=hd;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},No.apply(this,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const Rg="popstate";function xb(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ui(i.location.hash.substr(1));return pd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Ao(s))}function r(i,s){Tb(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ab(e,n,r,t)}function Tb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Pb(){return Math.random().toString(36).substr(2,8)}function Og(t){return{usr:t.state,key:t.key}}function pd(t,e,n,r){return n===void 0&&(n=null),No({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ui(e):e,{state:n,key:e&&e.key||r||Pb()})}function Ao(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Nb(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Ao(t);return new URL(n,e)}function Ab(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Jn.Pop,l=null;function c(){a=Jn.Pop,l&&l({action:a,location:d.location})}function f(h,m){a=Jn.Push;let _=pd(d.location,h,m);n&&n(_,h);let b=Og(_),g=d.createHref(_);try{o.pushState(b,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:d.location})}function u(h,m){a=Jn.Replace;let _=pd(d.location,h,m);n&&n(_,h);let b=Og(_),g=d.createHref(_);o.replaceState(b,"",g),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Rg,c),l=h,()=>{i.removeEventListener(Rg,c),l=null}},createHref(h){return e(i,h)},encodeLocation(h){let m=Nb(Ao(h));return No({},h,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:u,go(h){return o.go(h)}};return d}var Lg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Lg||(Lg={}));function Rb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ui(e):e,i=a1(r.pathname||"/",n);if(i==null)return null;let s=o1(t);Ob(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Wb(s[a],Vb(i));return o}function o1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Xe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=cr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),o1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:zb(a,i.index),routesMeta:l})}),e}function Ob(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lb=/^:\w+$/,Db=3,Mb=2,Fb=1,Ub=10,$b=-2,Dg=t=>t==="*";function zb(t,e){let n=t.split("/"),r=n.length;return n.some(Dg)&&(r+=$b),e&&(r+=Mb),n.filter(i=>!Dg(i)).reduce((i,s)=>i+(Lb.test(s)?Db:s===""?Fb:Ub),r)}function jb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Wb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=Hb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let u=a.route;s.push({params:r,pathname:cr([i,f.pathname]),pathnameBase:qb(cr([i,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(i=cr([i,f.pathnameBase]))}return s}function Hb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Bb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,u)=>{if(f==="*"){let d=a[u]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[f]=Gb(a[u]||"",f),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Bb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),np(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Vb(t){try{return decodeURI(t)}catch(e){return np(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gb(t,e){try{return decodeURIComponent(t)}catch(n){return np(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function a1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function np(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ui(t):t;return{pathname:n?n.startsWith("/")?n:Yb(n,e):e,search:Qb(r),hash:Xb(i)}}function Yb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function c1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ui(t):(i=No({},t),Xe(!i.pathname||!i.pathname.includes("?"),Hu("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Hu("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Hu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let u=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),u-=1;i.pathname=d.join("/")}a=u>=0?e[u]:"/"}let l=Kb(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),qb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Qb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Xb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Jb{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Zb(t){return t instanceof Jb}const eI=new Set(["POST","PUT","PATCH","DELETE"]);[...eI];var Wc={exports:{}},Hc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tI=N.exports,nI=Symbol.for("react.element"),rI=Symbol.for("react.fragment"),iI=Object.prototype.hasOwnProperty,sI=tI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oI={key:!0,ref:!0,__self:!0,__source:!0};function u1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iI.call(e,r)&&!oI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nI,type:t,key:s,ref:o,props:i,_owner:sI.current}}Hc.Fragment=rI;Hc.jsx=u1;Hc.jsxs=u1;(function(t){t.exports=Hc})(Wc);const no=Wc.exports.Fragment,P=Wc.exports.jsx,ie=Wc.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}function aI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const lI=typeof Object.is=="function"?Object.is:aI,{useState:cI,useEffect:uI,useLayoutEffect:fI,useDebugValue:dI}=mf;function hI(t,e,n){const r=e(),[{inst:i},s]=cI({inst:{value:r,getSnapshot:e}});return fI(()=>{i.value=r,i.getSnapshot=e,Bu(i)&&s({inst:i})},[t,r,e]),uI(()=>(Bu(i)&&s({inst:i}),t(()=>{Bu(i)&&s({inst:i})})),[t]),dI(r),r}function Bu(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!lI(n,r)}catch{return!0}}function pI(t,e,n){return e()}const mI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gI=!mI,vI=gI?pI:hI;"useSyncExternalStore"in mf&&(t=>t.useSyncExternalStore)(mf);const yI=N.exports.createContext(null),_I=N.exports.createContext(null),f1=N.exports.createContext(null),rp=N.exports.createContext(null),Bc=N.exports.createContext(null),ps=N.exports.createContext({outlet:null,matches:[]}),d1=N.exports.createContext(null);function wI(t,e){let{relative:n}=e===void 0?{}:e;Jo()||Xe(!1);let{basename:r,navigator:i}=N.exports.useContext(rp),{hash:s,pathname:o,search:a}=p1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Jo(){return N.exports.useContext(Bc)!=null}function Vc(){return Jo()||Xe(!1),N.exports.useContext(Bc).location}function ip(){Jo()||Xe(!1);let{basename:t,navigator:e}=N.exports.useContext(rp),{matches:n}=N.exports.useContext(ps),{pathname:r}=Vc(),i=JSON.stringify(l1(n).map(a=>a.pathnameBase)),s=N.exports.useRef(!1);return N.exports.useEffect(()=>{s.current=!0}),N.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=c1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:cr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function h1(){let{matches:t}=N.exports.useContext(ps),e=t[t.length-1];return e?e.params:{}}function p1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.exports.useContext(ps),{pathname:i}=Vc(),s=JSON.stringify(l1(r).map(o=>o.pathnameBase));return N.exports.useMemo(()=>c1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function SI(t,e){Jo()||Xe(!1);let n=N.exports.useContext(f1),{matches:r}=N.exports.useContext(ps),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Vc(),l;if(e){var c;let m=typeof e=="string"?ui(e):e;o==="/"||((c=m.pathname)==null?void 0:c.startsWith(o))||Xe(!1),l=m}else l=a;let f=l.pathname||"/",u=o==="/"?f:f.slice(o.length)||"/",d=Rb(t,{pathname:u}),h=bI(d&&d.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:cr([o,m.pathname]),pathnameBase:m.pathnameBase==="/"?o:cr([o,m.pathnameBase])})),r,n||void 0);return e&&h?P(Bc.Provider,{value:{location:md({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Jn.Pop},children:h}):h}function EI(){let t=xI(),e=Zb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return ie(no,{children:[P("h2",{children:"Unhandled Thrown Error!"}),P("h3",{style:{fontStyle:"italic"},children:e}),n?P("pre",{style:i,children:n}):null,P("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ie("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",P("code",{style:s,children:"errorElement"})," props on\xA0",P("code",{style:s,children:"<Route>"})]})]})}class kI extends N.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P(d1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function CI(t){let{routeContext:e,match:n,children:r}=t,i=N.exports.useContext(yI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),P(ps.Provider,{value:e,children:r})}function bI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=n?o.route.errorElement||P(EI,{}):null,f=()=>P(CI,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?c:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?P(kI,{location:n.location,component:c,error:l,children:f()}):f()},null)}var Mg;(function(t){t.UseRevalidator="useRevalidator"})(Mg||(Mg={}));var gd;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(gd||(gd={}));function II(t){let e=N.exports.useContext(f1);return e||Xe(!1),e}function xI(){var t;let e=N.exports.useContext(d1),n=II(gd.UseRouteError),r=N.exports.useContext(ps),i=r.matches[r.matches.length-1];return e||(r||Xe(!1),i.route.id||Xe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Lr(t){Xe(!1)}function TI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1}=t;Jo()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=N.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ui(r));let{pathname:c="/",search:f="",hash:u="",state:d=null,key:h="default"}=r,m=N.exports.useMemo(()=>{let _=a1(c,a);return _==null?null:{pathname:_,search:f,hash:u,state:d,key:h}},[a,c,f,u,d,h]);return m==null?null:P(rp.Provider,{value:l,children:P(Bc.Provider,{children:n,value:{location:m,navigationType:i}})})}function PI(t){let{children:e,location:n}=t,r=N.exports.useContext(_I),i=r&&!e?r.router.routes:vd(e);return SI(i,n)}var Fg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Fg||(Fg={}));new Promise(()=>{});function vd(t,e){e===void 0&&(e=[]);let n=[];return N.exports.Children.forEach(t,(r,i)=>{if(!N.exports.isValidElement(r))return;if(r.type===N.exports.Fragment){n.push.apply(n,vd(r.props.children,e));return}r.type!==Lr&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=vd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function NI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RI(t,e){return t.button===0&&(!e||e==="_self")&&!AI(t)}const OI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function LI(t){let{basename:e,children:n,window:r}=t,i=N.exports.useRef();i.current==null&&(i.current=xb({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.exports.useState({action:s.action,location:s.location});return N.exports.useLayoutEffect(()=>s.listen(a),[s]),P(TI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const m1=N.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f}=e,u=NI(e,OI),d=wI(c,{relative:i}),h=DI(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:i});function m(_){r&&r(_),_.defaultPrevented||h(_)}return P("a",{...u,href:d,onClick:s?r:m,ref:n,target:l})});var Ug;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Ug||(Ug={}));var $g;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($g||($g={}));function DI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ip(),l=Vc(),c=p1(t,{relative:o});return N.exports.useCallback(f=>{if(RI(f,n)){f.preventDefault();let u=r!==void 0?r:Ao(l)===Ao(c);a(t,{replace:u,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}function zg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zg(Object(n),!0).forEach(function(r){Ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jl(t){return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jl(t)}function MI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jg(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function FI(t,e,n){return e&&jg(t.prototype,e),n&&jg(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sp(t,e){return $I(t)||jI(t,e)||g1(t,e)||HI()}function Zo(t){return UI(t)||zI(t)||g1(t)||WI()}function UI(t){if(Array.isArray(t))return yd(t)}function $I(t){if(Array.isArray(t))return t}function zI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function g1(t,e){if(!!t){if(typeof t=="string")return yd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yd(t,e)}}function yd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function WI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wg=function(){},op={},v1={},y1=null,_1={mark:Wg,measure:Wg};try{typeof window<"u"&&(op=window),typeof document<"u"&&(v1=document),typeof MutationObserver<"u"&&(y1=MutationObserver),typeof performance<"u"&&(_1=performance)}catch{}var BI=op.navigator||{},Hg=BI.userAgent,Bg=Hg===void 0?"":Hg,yr=op,xe=v1,Vg=y1,La=_1;yr.document;var Dn=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",w1=~Bg.indexOf("MSIE")||~Bg.indexOf("Trident/"),Da,Ma,Fa,Ua,$a,Tn="___FONT_AWESOME___",_d=16,S1="fa",E1="svg-inline--fa",ei="data-fa-i2svg",wd="data-fa-pseudo-element",VI="data-fa-pseudo-element-pending",ap="data-prefix",lp="data-icon",Gg="fontawesome-i2svg",GI="async",KI=["HTML","HEAD","STYLE","SCRIPT"],k1=function(){try{return!0}catch{return!1}}(),be="classic",Le="sharp",cp=[be,Le];function ea(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var Ro=ea((Da={},Ve(Da,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ve(Da,Le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Da)),Oo=ea((Ma={},Ve(Ma,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(Ma,Le,{solid:"fass"}),Ma)),Lo=ea((Fa={},Ve(Fa,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(Fa,Le,{fass:"fa-solid"}),Fa)),YI=ea((Ua={},Ve(Ua,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(Ua,Le,{"fa-solid":"fass"}),Ua)),qI=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,C1="fa-layers-text",QI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,XI=ea(($a={},Ve($a,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve($a,Le,{900:"fass"}),$a)),b1=[1,2,3,4,5,6,7,8,9,10],JI=b1.concat([11,12,13,14,15,16,17,18,19,20]),ZI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Do=new Set;Object.keys(Oo[be]).map(Do.add.bind(Do));Object.keys(Oo[Le]).map(Do.add.bind(Do));var ex=[].concat(cp,Zo(Do),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zr.GROUP,zr.SWAP_OPACITY,zr.PRIMARY,zr.SECONDARY]).concat(b1.map(function(t){return"".concat(t,"x")})).concat(JI.map(function(t){return"w-".concat(t)})),ro=yr.FontAwesomeConfig||{};function tx(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function nx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var rx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rx.forEach(function(t){var e=sp(t,2),n=e[0],r=e[1],i=nx(tx(n));i!=null&&(ro[r]=i)})}var I1={styleDefault:"solid",familyDefault:"classic",cssPrefix:S1,replacementClass:E1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ro.familyPrefix&&(ro.cssPrefix=ro.familyPrefix);var is=H(H({},I1),ro);is.autoReplaceSvg||(is.observeMutations=!1);var K={};Object.keys(I1).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){is[t]=n,io.forEach(function(r){return r(K)})},get:function(){return is[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){is.cssPrefix=e,io.forEach(function(n){return n(K)})},get:function(){return is.cssPrefix}});yr.FontAwesomeConfig=K;var io=[];function ix(t){return io.push(t),function(){io.splice(io.indexOf(t),1)}}var zn=_d,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sx(t){if(!(!t||!Dn)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}}var ox="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mo(){for(var t=12,e="";t-- >0;)e+=ox[Math.random()*62|0];return e}function ms(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function up(t){return t.classList?ms(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function x1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ax(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(x1(t[n]),'" ')},"").trim()}function Gc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fp(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function lx(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function cx(t){var e=t.transform,n=t.width,r=n===void 0?_d:n,i=t.height,s=i===void 0?_d:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&w1?l+="translate(".concat(e.x/zn-r/2,"em, ").concat(e.y/zn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/zn,"em), calc(-50% + ").concat(e.y/zn,"em)) "):l+="translate(".concat(e.x/zn,"em, ").concat(e.y/zn,"em) "),l+="scale(".concat(e.size/zn*(e.flipX?-1:1),", ").concat(e.size/zn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ux=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function T1(){var t=S1,e=E1,n=K.cssPrefix,r=K.replacementClass,i=ux;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Kg=!1;function Vu(){K.autoAddCss&&!Kg&&(sx(T1()),Kg=!0)}var fx={mixout:function(){return{dom:{css:T1,insertCss:Vu}}},hooks:function(){return{beforeDOMElementCreation:function(){Vu()},beforeI2svg:function(){Vu()}}}},Pn=yr||{};Pn[Tn]||(Pn[Tn]={});Pn[Tn].styles||(Pn[Tn].styles={});Pn[Tn].hooks||(Pn[Tn].hooks={});Pn[Tn].shims||(Pn[Tn].shims=[]);var Yt=Pn[Tn],P1=[],dx=function t(){xe.removeEventListener("DOMContentLoaded",t),Wl=1,P1.map(function(e){return e()})},Wl=!1;Dn&&(Wl=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Wl||xe.addEventListener("DOMContentLoaded",dx));function hx(t){!Dn||(Wl?setTimeout(t,0):P1.push(t))}function ta(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?x1(t):"<".concat(e," ").concat(ax(r),">").concat(s.map(ta).join(""),"</").concat(e,">")}function Yg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var px=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Gu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?px(n,i):n,l,c,f;for(r===void 0?(l=1,f=e[s[0]]):(l=0,f=r);l<o;l++)c=s[l],f=a(f,e[c],c,e);return f};function mx(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Sd(t){var e=mx(t);return e.length===1?e[0].toString(16):null}function gx(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function qg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ed(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=qg(e);typeof Yt.hooks.addPack=="function"&&!i?Yt.hooks.addPack(t,qg(e)):Yt.styles[t]=H(H({},Yt.styles[t]||{}),s),t==="fas"&&Ed("fa",e)}var za,ja,Wa,Ai=Yt.styles,vx=Yt.shims,yx=(za={},Ve(za,be,Object.values(Lo[be])),Ve(za,Le,Object.values(Lo[Le])),za),dp=null,N1={},A1={},R1={},O1={},L1={},_x=(ja={},Ve(ja,be,Object.keys(Ro[be])),Ve(ja,Le,Object.keys(Ro[Le])),ja);function wx(t){return~ex.indexOf(t)}function Sx(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!wx(i)?i:null}var D1=function(){var e=function(s){return Gu(Ai,function(o,a,l){return o[l]=Gu(a,s,{}),o},{})};N1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),A1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),L1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ai||K.autoFetchSvg,r=Gu(vx,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});R1=r.names,O1=r.unicodes,dp=Kc(K.styleDefault,{family:K.familyDefault})};ix(function(t){dp=Kc(t.styleDefault,{family:K.familyDefault})});D1();function hp(t,e){return(N1[t]||{})[e]}function Ex(t,e){return(A1[t]||{})[e]}function jr(t,e){return(L1[t]||{})[e]}function M1(t){return R1[t]||{prefix:null,iconName:null}}function kx(t){var e=O1[t],n=hp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _r(){return dp}var pp=function(){return{prefix:null,iconName:null,rest:[]}};function Kc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=Ro[r][t],s=Oo[r][t]||Oo[r][i],o=t in Yt.styles?t:null;return s||o||null}var Qg=(Wa={},Ve(Wa,be,Object.keys(Lo[be])),Ve(Wa,Le,Object.keys(Lo[Le])),Wa);function Yc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ve(e,be,"".concat(K.cssPrefix,"-").concat(be)),Ve(e,Le,"".concat(K.cssPrefix,"-").concat(Le)),e),o=null,a=be;(t.includes(s[be])||t.some(function(c){return Qg[be].includes(c)}))&&(a=be),(t.includes(s[Le])||t.some(function(c){return Qg[Le].includes(c)}))&&(a=Le);var l=t.reduce(function(c,f){var u=Sx(K.cssPrefix,f);if(Ai[f]?(f=yx[a].includes(f)?YI[a][f]:f,o=f,c.prefix=f):_x[a].indexOf(f)>-1?(o=f,c.prefix=Kc(f,{family:a})):u?c.iconName=u:f!==K.replacementClass&&f!==s[be]&&f!==s[Le]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var d=o==="fa"?M1(c.iconName):{},h=jr(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||h||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Ai.far&&Ai.fas&&!K.autoFetchSvg&&(c.prefix="fas")}return c},pp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Le&&(Ai.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=jr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=_r()||"fas"),l}var Cx=function(){function t(){MI(this,t),this.definitions={}}return FI(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=H(H({},n.definitions[a]||{}),o[a]),Ed(a,o[a]);var l=Lo[be][a];l&&Ed(l,o[a]),D1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[a][u]=c)}),n[a][l]=c}),n}}]),t}(),Xg=[],Ri={},Wi={},bx=Object.keys(Wi);function Ix(t,e){var n=e.mixoutsTo;return Xg=t,Ri={},Object.keys(Wi).forEach(function(r){bx.indexOf(r)===-1&&delete Wi[r]}),Xg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),jl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ri[o]||(Ri[o]=[]),Ri[o].push(s[o])})}r.provides&&r.provides(Wi)}),n}function kd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ri[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ti(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ri[t]||[];i.forEach(function(s){s.apply(null,n)})}function Nn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Wi[t]?Wi[t].apply(null,e):void 0}function Cd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||_r();if(!!e)return e=jr(n,e)||e,Yg(F1.definitions,n,e)||Yg(Yt.styles,n,e)}var F1=new Cx,xx=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,ti("noAuto")},Tx={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dn?(ti("beforeI2svg",e),Nn("pseudoElements2svg",e),Nn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,hx(function(){Nx({autoReplaceSvgRoot:n}),ti("watch",e)})}},Px={icon:function(e){if(e===null)return null;if(jl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:jr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kc(e[0]);return{prefix:r,iconName:jr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(qI))){var i=Yc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||_r(),iconName:jr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=_r();return{prefix:s,iconName:jr(s,e)||e}}}},Rt={noAuto:xx,config:K,dom:Tx,parse:Px,library:F1,findIconDefinition:Cd,toHtml:ta},Nx=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(Yt.styles).length>0||K.autoFetchSvg)&&Dn&&K.autoReplaceSvg&&Rt.dom.i2svg({node:r})};function qc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ta(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Dn){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ax(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(fp(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Gc(H(H({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Rx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},i),{},{id:o}),children:r}]}]}function mp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,d=t.watchable,h=d===void 0?!1:d,m=r.found?r:n,_=m.width,b=m.height,g=i==="fak",p=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(function(G){return u.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(u.classes).join(" "),v={children:[],attributes:H(H({},u.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},E=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};h&&(v.attributes[ei]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||Mo())},children:[l]}),delete v.attributes.title);var O=H(H({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:H(H({},E),u.styles)}),I=r.found&&n.found?Nn("generateAbstractMask",O)||{children:[],attributes:{}}:Nn("generateAbstractIcon",O)||{children:[],attributes:{}},M=I.children,F=I.attributes;return O.children=M,O.attributes=F,a?Rx(O):Ax(O)}function Jg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=H(H(H({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[ei]="");var f=H({},o.styles);fp(i)&&(f.transform=cx({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=Gc(f);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Ox(t){var e=t.content,n=t.title,r=t.extra,i=H(H(H({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ku=Yt.styles;function bd(t){var e=t[0],n=t[1],r=t.slice(4),i=sp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Lx={found:!1,width:512,height:512};function Dx(t,e){!k1&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Id(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=_r()),new Promise(function(r,i){if(Nn("missingIconAbstract"),n==="fa"){var s=M1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ku[e]&&Ku[e][t]){var o=Ku[e][t];return r(bd(o))}Dx(t,e),r(H(H({},Lx),{},{icon:K.showMissingIcons&&t?Nn("missingIconAbstract")||{}:{}}))})}var Zg=function(){},xd=K.measurePerformance&&La&&La.mark&&La.measure?La:{mark:Zg,measure:Zg},Hs='FA "6.2.1"',Mx=function(e){return xd.mark("".concat(Hs," ").concat(e," begins")),function(){return U1(e)}},U1=function(e){xd.mark("".concat(Hs," ").concat(e," ends")),xd.measure("".concat(Hs," ").concat(e),"".concat(Hs," ").concat(e," begins"),"".concat(Hs," ").concat(e," ends"))},gp={begin:Mx,end:U1},al=function(){};function ev(t){var e=t.getAttribute?t.getAttribute(ei):null;return typeof e=="string"}function Fx(t){var e=t.getAttribute?t.getAttribute(ap):null,n=t.getAttribute?t.getAttribute(lp):null;return e&&n}function Ux(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function $x(){if(K.autoReplaceSvg===!0)return ll.replace;var t=ll[K.autoReplaceSvg];return t||ll.replace}function zx(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function jx(t){return xe.createElement(t)}function $1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?zx:jx:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild($1(o,{ceFn:r}))}),i}function Wx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ll={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore($1(i),n)}),n.getAttribute(ei)===null&&K.keepOriginalSource){var r=xe.createComment(Wx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~up(n).indexOf(K.replacementClass))return ll.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===K.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ta(a)}).join(`
`);n.setAttribute(ei,""),n.innerHTML=o}};function tv(t){t()}function z1(t,e){var n=typeof e=="function"?e:al;if(t.length===0)n();else{var r=tv;K.mutateApproach===GI&&(r=yr.requestAnimationFrame||tv),r(function(){var i=$x(),s=gp.begin("mutate");t.map(i),s(),n()})}}var vp=!1;function j1(){vp=!0}function Td(){vp=!1}var Hl=null;function nv(t){if(!!Vg&&!!K.observeMutations){var e=t.treeCallback,n=e===void 0?al:e,r=t.nodeCallback,i=r===void 0?al:r,s=t.pseudoElementsCallback,o=s===void 0?al:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;Hl=new Vg(function(c){if(!vp){var f=_r();ms(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ev(u.addedNodes[0])&&(K.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&K.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&ev(u.target)&&~ZI.indexOf(u.attributeName))if(u.attributeName==="class"&&Fx(u.target)){var d=Yc(up(u.target)),h=d.prefix,m=d.iconName;u.target.setAttribute(ap,h||f),m&&u.target.setAttribute(lp,m)}else Ux(u.target)&&i(u.target)})}}),Dn&&Hl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hx(){!Hl||Hl.disconnect()}function Bx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Vx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Yc(up(t));return i.prefix||(i.prefix=_r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Ex(i.prefix,t.innerText)||hp(i.prefix,Sd(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Gx(t){var e=ms(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Mo()):(e["aria-hidden"]="true",e.focusable="false")),e}function Kx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vx(t),r=n.iconName,i=n.prefix,s=n.rest,o=Gx(t),a=kd("parseNodeAttributes",{},t),l=e.styleParser?Bx(t):[];return H({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Yx=Yt.styles;function W1(t){var e=K.autoReplaceSvg==="nest"?rv(t,{styleParser:!1}):rv(t);return~e.extra.classes.indexOf(C1)?Nn("generateLayersText",t,e):Nn("generateSvgReplacementMutation",t,e)}var wr=new Set;cp.map(function(t){wr.add("fa-".concat(t))});Object.keys(Ro[be]).map(wr.add.bind(wr));Object.keys(Ro[Le]).map(wr.add.bind(wr));wr=Zo(wr);function iv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dn)return Promise.resolve();var n=xe.documentElement.classList,r=function(u){return n.add("".concat(Gg,"-").concat(u))},i=function(u){return n.remove("".concat(Gg,"-").concat(u))},s=K.autoFetchSvg?wr:cp.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Yx));s.includes("fa")||s.push("fa");var o=[".".concat(C1,":not([").concat(ei,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(ei,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ms(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=gp.begin("onTree"),c=a.reduce(function(f,u){try{var d=W1(u);d&&f.push(d)}catch(h){k1||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(d){z1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),u(d)})})}function qx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W1(t).then(function(n){n&&z1([n],e)})}function Qx(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Cd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Cd(i||{})),t(r,H(H({},n),{},{mask:i}))}}var Xx=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?sn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,f=c===void 0?null:c,u=n.title,d=u===void 0?null:u,h=n.titleId,m=h===void 0?null:h,_=n.classes,b=_===void 0?[]:_,g=n.attributes,p=g===void 0?{}:g,v=n.styles,E=v===void 0?{}:v;if(!!e){var O=e.prefix,I=e.iconName,M=e.icon;return qc(H({type:"icon"},e),function(){return ti("beforeDOMElementCreation",{iconDefinition:e,params:n}),K.autoA11y&&(d?p["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(m||Mo()):(p["aria-hidden"]="true",p.focusable="false")),mp({icons:{main:bd(M),mask:l?bd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:I,transform:H(H({},sn),i),symbol:o,title:d,maskId:f,titleId:m,extra:{attributes:p,styles:E,classes:b}})})}},Jx={mixout:function(){return{icon:Qx(Xx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=iv,n.nodeCallback=qx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,s=n.callback,o=s===void 0?function(){}:s;return iv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,d=r.extra;return new Promise(function(h,m){Promise.all([Id(i,a),f.iconName?Id(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=sp(_,2),g=b[0],p=b[1];h([n,mp({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:c,maskId:u,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gc(a);l.length>0&&(i.style=l);var c;return fp(o)&&(c=Nn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Zx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return qc({type:"layer"},function(){ti("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Zo(s)).join(" ")},children:o}]})}}}},eT={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return qc({type:"counter",content:n},function(){return ti("beforeDOMElementCreation",{content:n,params:r}),Ox({content:n.toString(),title:s,extra:{attributes:c,styles:u,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Zo(a))}})})}}}},tT={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?sn:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,d=r.styles,h=d===void 0?{}:d;return qc({type:"text",content:n},function(){return ti("beforeDOMElementCreation",{content:n,params:r}),Jg({content:n,transform:H(H({},sn),s),title:a,extra:{attributes:u,styles:h,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Zo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(w1){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,l=f.height/c}return K.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Jg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},nT=new RegExp('"',"ug"),sv=[1105920,1112319];function rT(t){var e=t.replace(nT,""),n=gx(e,0),r=n>=sv[0]&&n<=sv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Sd(i?e[0]:e),isSecondary:r||i}}function ov(t,e){var n="".concat(VI).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ms(t.children),o=s.filter(function(M){return M.getAttribute(wd)===e})[0],a=yr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(QI),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Le:be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oo[d][l[2].toLowerCase()]:XI[d][c],m=rT(u),_=m.value,b=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=hp(h,_),v=p;if(g){var E=kx(_);E.iconName&&E.prefix&&(p=E.iconName,h=E.prefix)}if(p&&!b&&(!o||o.getAttribute(ap)!==h||o.getAttribute(lp)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var O=Kx(),I=O.extra;I.attributes[wd]=e,Id(p,h).then(function(M){var F=mp(H(H({},O),{},{icons:{main:M,mask:pp()},prefix:h,iconName:v,extra:I,watchable:!0})),G=xe.createElement("svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=F.map(function(j){return ta(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function iT(t){return Promise.all([ov(t,"::before"),ov(t,"::after")])}function sT(t){return t.parentNode!==document.head&&!~KI.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function av(t){if(!!Dn)return new Promise(function(e,n){var r=ms(t.querySelectorAll("*")).filter(sT).map(iT),i=gp.begin("searchPseudoElements");j1(),Promise.all(r).then(function(){i(),Td(),e()}).catch(function(){i(),Td(),n()})})}var oT={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=av,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;K.searchPseudoElements&&av(i)}}},lv=!1,aT={mixout:function(){return{dom:{unwatch:function(){j1(),lv=!0}}}},hooks:function(){return{bootstrap:function(){nv(kd("mutationObserverCallbacks",{}))},noAuto:function(){Hx()},watch:function(n){var r=n.observeMutationsRoot;lv?Td():nv(kd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},lT={mixout:function(){return{parse:{transform:function(n){return cv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=cv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:u,path:d};return{tag:"g",attributes:H({},h.outer),children:[{tag:"g",attributes:H({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:H(H({},r.icon.attributes),h.path)}]}]}}}},Yu={x:0,y:0,width:"100%",height:"100%"};function uv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cT(t){return t.tag==="g"?t.children:[t]}var uT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Yc(i.split(" ").map(function(o){return o.trim()})):pp();return s.prefix||(s.prefix=_r()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,f=s.icon,u=o.width,d=o.icon,h=lx({transform:l,containerWidth:u,iconWidth:c}),m={tag:"rect",attributes:H(H({},Yu),{},{fill:"white"})},_=f.children?{children:f.children.map(uv)}:{},b={tag:"g",attributes:H({},h.inner),children:[uv(H({tag:f.tag,attributes:H(H({},f.attributes),h.path)},_))]},g={tag:"g",attributes:H({},h.outer),children:[b]},p="mask-".concat(a||Mo()),v="clip-".concat(a||Mo()),E={tag:"mask",attributes:H(H({},Yu),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:cT(d)},E]};return r.push(O,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Yu)}),{children:r,attributes:i}}}},fT={provides:function(e){var n=!1;yr.matchMedia&&(n=yr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:H(H({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=H(H({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:H(H({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:H(H({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:H(H({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:H(H({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:H(H({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},hT=[fx,Jx,Zx,eT,tT,oT,aT,lT,uT,fT,dT];Ix(hT,{mixoutsTo:Rt});Rt.noAuto;Rt.config;Rt.library;Rt.dom;var Pd=Rt.parse;Rt.findIconDefinition;Rt.toHtml;var pT=Rt.icon;Rt.layer;Rt.text;Rt.counter;var oe={exports:{}},mT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gT=mT,vT=gT;function H1(){}function B1(){}B1.resetWarningCache=H1;var yT=function(){function t(r,i,s,o,a,l){if(l!==vT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:B1,resetWarningCache:H1};return n.PropTypes=n,n};oe.exports=yT();function fv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fv(Object(n),!0).forEach(function(r){Oi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bl(t){return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bl(t)}function Oi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _T(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wT(t,e){if(t==null)return{};var n=_T(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Nd(t){return ST(t)||ET(t)||kT(t)||CT()}function ST(t){if(Array.isArray(t))return Ad(t)}function ET(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kT(t,e){if(!!t){if(typeof t=="string")return Ad(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ad(t,e)}}function Ad(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function CT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bT(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,d=t.fixedWidth,h=t.inverse,m=t.border,_=t.listItem,b=t.flip,g=t.size,p=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":h,"fa-border":m,"fa-li":_,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Oi(e,"fa-".concat(g),typeof g<"u"&&g!==null),Oi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Oi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Oi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(O){return E[O]?O:null}).filter(function(O){return O})}function IT(t){return t=t-0,t===t}function V1(t){return IT(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xT=["style"];function TT(t){return t.charAt(0).toUpperCase()+t.slice(1)}function PT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=V1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[TT(i)]=s:e[i]=s,e},{})}function G1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return G1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=PT(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[V1(c)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=wT(n,xT);return i.attrs.style=Zn(Zn({},i.attrs.style),o),t.apply(void 0,[e.tag,Zn(Zn({},i.attrs),a)].concat(Nd(r)))}var K1=!1;try{K1=!0}catch{}function NT(){if(!K1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dv(t){if(t&&Bl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pd.icon)return Pd.icon(t);if(t===null)return null;if(t&&Bl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function qu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Oi({},t,e):{}}var Tr=fn.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,c=dv(n),f=qu("classes",[].concat(Nd(bT(t)),Nd(s.split(" ")))),u=qu("transform",typeof t.transform=="string"?Pd.transform(t.transform):t.transform),d=qu("mask",dv(r)),h=pT(c,Zn(Zn(Zn(Zn({},f),u),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return NT("Could not find icon",c),null;var m=h.abstract,_={ref:e};return Object.keys(t).forEach(function(b){Tr.defaultProps.hasOwnProperty(b)||(_[b]=t[b])}),AT(m[0],_)});Tr.displayName="FontAwesomeIcon";Tr.propTypes={beat:oe.exports.bool,border:oe.exports.bool,beatFade:oe.exports.bool,bounce:oe.exports.bool,className:oe.exports.string,fade:oe.exports.bool,flash:oe.exports.bool,mask:oe.exports.oneOfType([oe.exports.object,oe.exports.array,oe.exports.string]),maskId:oe.exports.string,fixedWidth:oe.exports.bool,inverse:oe.exports.bool,flip:oe.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:oe.exports.oneOfType([oe.exports.object,oe.exports.array,oe.exports.string]),listItem:oe.exports.bool,pull:oe.exports.oneOf(["right","left"]),pulse:oe.exports.bool,rotation:oe.exports.oneOf([0,90,180,270]),shake:oe.exports.bool,size:oe.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:oe.exports.bool,spinPulse:oe.exports.bool,spinReverse:oe.exports.bool,symbol:oe.exports.oneOfType([oe.exports.bool,oe.exports.string]),title:oe.exports.string,titleId:oe.exports.string,transform:oe.exports.oneOfType([oe.exports.string,oe.exports.object]),swapOpacity:oe.exports.bool};Tr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var AT=G1.bind(null,fn.createElement),RT={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"]},OT=RT,LT={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},DT={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},MT={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},FT=MT,UT={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},$T=UT,zT={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]},jT=zT,WT={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},HT=WT,BT={prefix:"fas",iconName:"rectangle-xmark",icon:[512,512,[62164,"rectangle-times","times-rectangle","window-close"],"f410","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},VT=BT;const GT=V.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`,KT=V.h1`
  font-weight: normal;
  color: ${t=>t.theme.colors.text};
`,YT=V.div`
  flex-grow: 1;
`,qT=V.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: ${t=>t.theme.colors.text};
`,QT=V(m1)`
  text-decoration: none;
  color: ${t=>t.theme.colors.text};
`,XT=({onClickSettings:t})=>ie(GT,{children:[ie(KT,{children:[P(QT,{to:"/",children:"\u2658"})," react-chess"]}),P(YT,{}),P(qT,{onClick:t,children:P(Tr,{icon:jT,style:{margin:"auto"}})})]}),JT=V.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,hv=V.p`
  font-weight: normal;
  justify-self: center;
  text-align: left;
  color: ${t=>t.theme.colors.text};
`,ZT=V.div`
  flex-grow: 1;
  overflow: hidden;
`,e2=V.a`
  color: ${t=>t.theme.colors.text};
`,t2=()=>ie(JT,{children:[P(hv,{children:"2023 zac"}),P(ZT,{}),P(hv,{children:P(e2,{href:"https://github.com/zaccnz/react-chess/",children:"source code"})})]}),yp={hasLoaded:!1,isDarkTheme:!1,darkTheme:!1,useSystemTheme:!0,allowPause:!0,useChessNotation:!1,gameLength:10,defaultUsername:"online player"},Qu=window.matchMedia("(prefers-color-scheme: dark)"),n2=()=>{const t={...yp};t.hasLoaded=!0;const e=localStorage.getItem("react-chess.darkTheme");e&&(t.darkTheme=e==="true");const n=localStorage.getItem("react-chess.useSystemTheme");n&&(t.useSystemTheme=n==="true");const r=localStorage.getItem("react-chess.allowPause");r&&(t.allowPause=r==="true");const i=localStorage.getItem("react-chess.useChessNotation");i&&(t.useChessNotation=i==="true");const s=localStorage.getItem("react-chess.gameLength");s&&(t.gameLength=parseInt(s));const o=localStorage.getItem("react-chess.defaultUsername");return o&&(t.defaultUsername=o),t},pv=t=>{if(!!t.hasLoaded)for(const[e,n]of Object.entries(t))localStorage.setItem(`react-chess.${e}`,n)},Pr=N.exports.createContext({...yp,updateSettings:()=>{}}),r2=t=>{const[e,n]=N.exports.useState(yp),[r,i]=N.exports.useState(Qu.matches),s=o=>{i(o.matches)};return N.exports.useEffect(()=>(n(n2()),Qu.addEventListener("change",s),()=>{pv(e),Qu.removeEventListener("change",s)}),[]),N.exports.useEffect(()=>{e.useSystemTheme?r!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=r,a}):e.darkTheme!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=e.darkTheme,a})},[e.darkTheme,e.useSystemTheme,r]),N.exports.useEffect(()=>{pv(e)},[e]),P(Pr.Provider,{value:{...e,updateSettings:n},children:t.children})};function i2(){return new Worker("/react-chess/assets/bot.285fa3b0.js")}var Vl={};(function(t){/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.Chess=t.validateFen=t.SQUARES=t.DEFAULT_POSITION=t.KING=t.QUEEN=t.ROOK=t.BISHOP=t.KNIGHT=t.PAWN=t.BLACK=t.WHITE=void 0,t.WHITE="w",t.BLACK="b",t.PAWN="p",t.KNIGHT="n",t.BISHOP="b",t.ROOK="r",t.QUEEN="q",t.KING="k",t.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const e=-1,n={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};t.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const r={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},i={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},s={b:[16,32,17,15],w:[-16,-32,-17,-15]},o={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},a=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],l=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],c={p:1,n:2,b:4,r:8,q:16,k:32},f="pnbrqkPNBRQK",u=[t.KNIGHT,t.BISHOP,t.ROOK,t.QUEEN],d=7,h=6,m=1,_=0,b={w:[{square:i.a1,flag:r.QSIDE_CASTLE},{square:i.h1,flag:r.KSIDE_CASTLE}],b:[{square:i.a8,flag:r.QSIDE_CASTLE},{square:i.h8,flag:r.KSIDE_CASTLE}]},g={b:m,w:h},p=["1-0","0-1","1/2-1/2","*"];function v(se){return se>>4}function E(se){return se&15}function O(se){return"0123456789".indexOf(se)!==-1}function I(se){const y=E(se),x=v(se);return"abcdefgh".substring(y,y+1)+"87654321".substring(x,x+1)}function M(se){return se===t.WHITE?t.BLACK:t.WHITE}function F(se){const y=se.split(/\s+/);if(y.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const x=parseInt(y[5],10);if(isNaN(x)||x<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const k=parseInt(y[4],10);if(isNaN(k)||k<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(y[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(y[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(y[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const S=y[0].split("/");if(S.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let L=0;L<S.length;L++){let D=0,C=!1;for(let A=0;A<S[L].length;A++)if(O(S[L][A])){if(C)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};D+=parseInt(S[L][A],10),C=!0}else{if(!/^[prnbqkPRNBQK]$/.test(S[L][A]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};D+=1,C=!1}if(D!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(y[3][1]=="3"&&y[1]=="w"||y[3][1]=="6"&&y[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const T=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:L,regex:D}of T){if(!D.test(y[0]))return{ok:!1,error:`Invalid FEN: missing ${L} king`};if((y[0].match(D)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${L} kings`}}return{ok:!0}}t.validateFen=F;function G(se,y){const x=se.from,k=se.to,S=se.piece;let T=0,L=0,D=0;for(let C=0,A=y.length;C<A;C++){const U=y[C].from,W=y[C].to,w=y[C].piece;S===w&&x!==U&&k===W&&(T++,v(x)===v(U)&&L++,E(x)===E(U)&&D++)}return T>0?L>0&&D>0?I(x):D>0?I(x).charAt(1):I(x).charAt(0):""}function j(se,y,x,k,S,T=void 0,L=r.NORMAL){const D=v(k);if(S===t.PAWN&&(D===d||D===_))for(let C=0;C<u.length;C++){const A=u[C];se.push({color:y,from:x,to:k,piece:S,captured:T,promotion:A,flags:L|r.PROMOTION})}else se.push({color:y,from:x,to:k,piece:S,captured:T,flags:L})}function pe(se){let y=se.charAt(0);return y>="a"&&y<="h"?se.match(/[a-h]\d.*[a-h]\d/)?void 0:t.PAWN:(y=y.toLowerCase(),y==="o"?t.KING:y)}function we(se){return se.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class ze{constructor(y=t.DEFAULT_POSITION){this._board=new Array(128),this._turn=t.WHITE,this._header={},this._kings={w:e,b:e},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(y)}clear(y=!1){this._board=new Array(128),this._kings={w:e,b:e},this._turn=t.WHITE,this._castling={w:0,b:0},this._epSquare=e,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=y?this._header:{},this._updateSetup(this.fen())}removeHeader(y){y in this._header&&delete this._header[y]}load(y,x=!1){let k=y.split(/\s+/);if(k.length>=2&&k.length<6){const C=["-","-","0","1"];y=k.concat(C.slice(-(6-k.length))).join(" ")}k=y.split(/\s+/);const{ok:S,error:T}=F(y);if(!S)throw new Error(T);const L=k[0];let D=0;this.clear(x);for(let C=0;C<L.length;C++){const A=L.charAt(C);if(A==="/")D+=8;else if(O(A))D+=parseInt(A,10);else{const U=A<"a"?t.WHITE:t.BLACK;this.put({type:A.toLowerCase(),color:U},I(D)),D++}}this._turn=k[1],k[2].indexOf("K")>-1&&(this._castling.w|=r.KSIDE_CASTLE),k[2].indexOf("Q")>-1&&(this._castling.w|=r.QSIDE_CASTLE),k[2].indexOf("k")>-1&&(this._castling.b|=r.KSIDE_CASTLE),k[2].indexOf("q")>-1&&(this._castling.b|=r.QSIDE_CASTLE),this._epSquare=k[3]==="-"?e:i[k[3]],this._halfMoves=parseInt(k[4],10),this._moveNumber=parseInt(k[5],10),this._updateSetup(this.fen())}fen(){var y,x;let k=0,S="";for(let D=i.a8;D<=i.h1;D++){if(this._board[D]){k>0&&(S+=k,k=0);const{color:C,type:A}=this._board[D];S+=C===t.WHITE?A.toUpperCase():A.toLowerCase()}else k++;D+1&136&&(k>0&&(S+=k),D!==i.h1&&(S+="/"),k=0,D+=8)}let T="";this._castling[t.WHITE]&r.KSIDE_CASTLE&&(T+="K"),this._castling[t.WHITE]&r.QSIDE_CASTLE&&(T+="Q"),this._castling[t.BLACK]&r.KSIDE_CASTLE&&(T+="k"),this._castling[t.BLACK]&r.QSIDE_CASTLE&&(T+="q"),T=T||"-";let L="-";if(this._epSquare!==e){const D=this._epSquare+(this._turn===t.WHITE?16:-16),C=[D+1,D-1];for(const A of C){if(A&136)continue;const U=this._turn;if(((y=this._board[A])===null||y===void 0?void 0:y.color)===U&&((x=this._board[A])===null||x===void 0?void 0:x.type)===t.PAWN){this._makeMove({color:U,from:A,to:this._epSquare,piece:t.PAWN,captured:t.PAWN,flags:r.EP_CAPTURE});const W=!this._isKingAttacked(U);if(this._undoMove(),W){L=I(this._epSquare);break}}}}return[S,this._turn,T,L,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(y){this._history.length>0||(y!==t.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=y):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(t.DEFAULT_POSITION)}get(y){return this._board[i[y]]||!1}put({type:y,color:x},k){if(f.indexOf(y.toLowerCase())===-1||!(k in i))return!1;const S=i[k];return y==t.KING&&!(this._kings[x]==e||this._kings[x]==S)?!1:(this._board[S]={type:y,color:x},y===t.KING&&(this._kings[x]=S),this._updateSetup(this.fen()),!0)}remove(y){const x=this.get(y);return delete this._board[i[y]],x&&x.type===t.KING&&(this._kings[x.color]=e),this._updateSetup(this.fen()),x}_attacked(y,x){for(let k=i.a8;k<=i.h1;k++){if(k&136){k+=7;continue}if(this._board[k]===void 0||this._board[k].color!==y)continue;const S=this._board[k],T=k-x;if(T===0)continue;const L=T+119;if(a[L]&c[S.type]){if(S.type===t.PAWN){if(T>0){if(S.color===t.WHITE)return!0}else if(S.color===t.BLACK)return!0;continue}if(S.type==="n"||S.type==="k")return!0;const D=l[L];let C=k+D,A=!1;for(;C!==x;){if(this._board[C]!=null){A=!0;break}C+=D}if(!A)return!0}}return!1}_isKingAttacked(y){const x=this._kings[y];return x===-1?!1:this._attacked(M(y),x)}isAttacked(y,x){return this._attacked(x,i[y])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const y={b:0,n:0,r:0,q:0,k:0,p:0},x=[];let k=0,S=0;for(let T=i.a8;T<=i.h1;T++){if(S=(S+1)%2,T&136){T+=7;continue}const L=this._board[T];L&&(y[L.type]=L.type in y?y[L.type]+1:1,L.type===t.BISHOP&&x.push(S),k++)}if(k===2)return!0;if(k===3&&(y[t.BISHOP]===1||y[t.KNIGHT]===1))return!0;if(k===y[t.BISHOP]+2){let T=0;const L=x.length;for(let D=0;D<L;D++)T+=x[D];if(T===0||T===L)return!0}return!1}isThreefoldRepetition(){const y=[],x={};let k=!1;for(;;){const S=this._undoMove();if(!S)break;y.push(S)}for(;;){const S=this.fen().split(" ").slice(0,4).join(" ");x[S]=S in x?x[S]+1:1,x[S]>=3&&(k=!0);const T=y.pop();if(T)this._makeMove(T);else break}return k}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:y=!1,square:x=void 0,piece:k=void 0}={}){const S=this._moves({square:x,piece:k});return y?S.map(T=>this._makePretty(T)):S.map(T=>this._moveToSan(T,S))}_moves({legal:y=!0,piece:x=void 0,square:k=void 0}={}){var S;const T=k?k.toLowerCase():void 0,L=x==null?void 0:x.toLowerCase(),D=[],C=this._turn,A=M(C);let U=i.a8,W=i.h1,w=!1;if(T)if(T in i)U=W=i[T],w=!0;else return[];for(let R=U;R<=W;R++){if(R&136){R+=7;continue}if(!this._board[R]||this._board[R].color===A)continue;const{type:X}=this._board[R];let q;if(X===t.PAWN){if(L&&L!==X)continue;q=R+s[C][0],this._board[q]||(j(D,C,R,q,t.PAWN),q=R+s[C][1],g[C]===v(R)&&!this._board[q]&&j(D,C,R,q,t.PAWN,void 0,r.BIG_PAWN));for(let ee=2;ee<4;ee++)q=R+s[C][ee],!(q&136)&&(((S=this._board[q])===null||S===void 0?void 0:S.color)===A?j(D,C,R,q,t.PAWN,this._board[q].type,r.CAPTURE):q===this._epSquare&&j(D,C,R,q,t.PAWN,t.PAWN,r.EP_CAPTURE))}else{if(L&&L!==X)continue;for(let ee=0,Z=o[X].length;ee<Z;ee++){const Q=o[X][ee];for(q=R;q+=Q,!(q&136);){if(!this._board[q])j(D,C,R,q,X);else{if(this._board[q].color===C)break;j(D,C,R,q,X,this._board[q].type,r.CAPTURE);break}if(X===t.KNIGHT||X===t.KING)break}}}}if((L===void 0||L===t.KING)&&(!w||W===this._kings[C])){if(this._castling[C]&r.KSIDE_CASTLE){const R=this._kings[C],X=R+2;!this._board[R+1]&&!this._board[X]&&!this._attacked(A,this._kings[C])&&!this._attacked(A,R+1)&&!this._attacked(A,X)&&j(D,C,this._kings[C],X,t.KING,void 0,r.KSIDE_CASTLE)}if(this._castling[C]&r.QSIDE_CASTLE){const R=this._kings[C],X=R-2;!this._board[R-1]&&!this._board[R-2]&&!this._board[R-3]&&!this._attacked(A,this._kings[C])&&!this._attacked(A,R-1)&&!this._attacked(A,X)&&j(D,C,this._kings[C],X,t.KING,void 0,r.QSIDE_CASTLE)}}if(!y||this._kings[C]===-1)return D;const Y=[];for(let R=0,X=D.length;R<X;R++)this._makeMove(D[R]),this._isKingAttacked(C)||Y.push(D[R]),this._undoMove();return Y}move(y,{strict:x=!1}={}){let k=null;if(typeof y=="string")k=this._moveFromSan(y,x);else if(typeof y=="object"){const T=this._moves();for(let L=0,D=T.length;L<D;L++)if(y.from===I(T[L].from)&&y.to===I(T[L].to)&&(!("promotion"in T[L])||y.promotion===T[L].promotion)){k=T[L];break}}if(!k)throw typeof y=="string"?new Error(`Invalid move: ${y}`):new Error(`Invalid move: ${JSON.stringify(y)}`);const S=this._makePretty(k);return this._makeMove(k),S}_push(y){this._history.push({move:y,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(y){const x=this._turn,k=M(x);if(this._push(y),this._board[y.to]=this._board[y.from],delete this._board[y.from],y.flags&r.EP_CAPTURE&&(this._turn===t.BLACK?delete this._board[y.to-16]:delete this._board[y.to+16]),y.promotion&&(this._board[y.to]={type:y.promotion,color:x}),this._board[y.to].type===t.KING){if(this._kings[x]=y.to,y.flags&r.KSIDE_CASTLE){const S=y.to-1,T=y.to+1;this._board[S]=this._board[T],delete this._board[T]}else if(y.flags&r.QSIDE_CASTLE){const S=y.to+1,T=y.to-2;this._board[S]=this._board[T],delete this._board[T]}this._castling[x]=0}if(this._castling[x]){for(let S=0,T=b[x].length;S<T;S++)if(y.from===b[x][S].square&&this._castling[x]&b[x][S].flag){this._castling[x]^=b[x][S].flag;break}}if(this._castling[k]){for(let S=0,T=b[k].length;S<T;S++)if(y.to===b[k][S].square&&this._castling[k]&b[k][S].flag){this._castling[k]^=b[k][S].flag;break}}y.flags&r.BIG_PAWN?x===t.BLACK?this._epSquare=y.to-16:this._epSquare=y.to+16:this._epSquare=e,y.piece===t.PAWN?this._halfMoves=0:y.flags&(r.CAPTURE|r.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,x===t.BLACK&&this._moveNumber++,this._turn=k}undo(){const y=this._undoMove();return y?this._makePretty(y):null}_undoMove(){const y=this._history.pop();if(y===void 0)return null;const x=y.move;this._kings=y.kings,this._turn=y.turn,this._castling=y.castling,this._epSquare=y.epSquare,this._halfMoves=y.halfMoves,this._moveNumber=y.moveNumber;const k=this._turn,S=M(k);if(this._board[x.from]=this._board[x.to],this._board[x.from].type=x.piece,delete this._board[x.to],x.captured)if(x.flags&r.EP_CAPTURE){let T;k===t.BLACK?T=x.to-16:T=x.to+16,this._board[T]={type:t.PAWN,color:S}}else this._board[x.to]={type:x.captured,color:S};if(x.flags&(r.KSIDE_CASTLE|r.QSIDE_CASTLE)){let T,L;x.flags&r.KSIDE_CASTLE?(T=x.to+1,L=x.to-1):(T=x.to-2,L=x.to+1),this._board[T]=this._board[L],delete this._board[L]}return x}pgn({newline:y=`
`,maxWidth:x=0}={}){const k=[];let S=!1;for(const w in this._header)k.push("["+w+' "'+this._header[w]+'"]'+y),S=!0;S&&this._history.length&&k.push(y);const T=w=>{const Y=this._comments[this.fen()];if(typeof Y<"u"){const R=w.length>0?" ":"";w=`${w}${R}{${Y}}`}return w},L=[];for(;this._history.length>0;)L.push(this._undoMove());const D=[];let C="";for(L.length===0&&D.push(T(""));L.length>0;){C=T(C);const w=L.pop();if(!w)break;if(!this._history.length&&w.color==="b"){const Y=`${this._moveNumber}. ...`;C=C?`${C} ${Y}`:Y}else w.color==="w"&&(C.length&&D.push(C),C=this._moveNumber+".");C=C+" "+this._moveToSan(w,this._moves({legal:!0})),this._makeMove(w)}if(C.length&&D.push(T(C)),typeof this._header.Result<"u"&&D.push(this._header.Result),x===0)return k.join("")+D.join(" ");const A=function(){return k.length>0&&k[k.length-1]===" "?(k.pop(),!0):!1},U=function(w,Y){for(const R of Y.split(" "))if(!!R){if(w+R.length>x){for(;A();)w--;k.push(y),w=0}k.push(R),w+=R.length,k.push(" "),w++}return A()&&w--,w};let W=0;for(let w=0;w<D.length;w++){if(W+D[w].length>x&&D[w].includes("{")){W=U(W,D[w]);continue}W+D[w].length>x&&w!==0?(k[k.length-1]===" "&&k.pop(),k.push(y),W=0):w!==0&&(k.push(" "),W++),k.push(D[w]),W+=D[w].length}return k.join("")}header(...y){for(let x=0;x<y.length;x+=2)typeof y[x]=="string"&&typeof y[x+1]=="string"&&(this._header[y[x]]=y[x+1]);return this._header}loadPgn(y,{strict:x=!1,newlineChar:k=`\r?
`}={}){function S(Q){return Q.replace(/\\/g,"\\")}function T(Q){const ye={},re=Q.split(new RegExp(S(k)));let Ue="",fe="";for(let Re=0;Re<re.length;Re++){const Fn=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;Ue=re[Re].replace(Fn,"$1"),fe=re[Re].replace(Fn,"$2"),Ue.trim().length>0&&(ye[Ue]=fe)}return ye}y=y.trim();const D=new RegExp("^(\\[((?:"+S(k)+")|.)*\\])((?:\\s*"+S(k)+"){2}|(?:\\s*"+S(k)+")*$)").exec(y),C=D&&D.length>=2?D[1]:"";this.reset();const A=T(C);let U="";for(const Q in A)Q.toLowerCase()==="fen"&&(U=A[Q]),this.header(Q,A[Q]);if(!x)U&&this.load(U,!0);else if(A.SetUp==="1"){if(!("FEN"in A))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(A.FEN,!0)}function W(Q){return Array.from(Q).map(function(ye){return ye.charCodeAt(0)<128?ye.charCodeAt(0).toString(16):encodeURIComponent(ye).replace(/%/g,"").toLowerCase()}).join("")}function w(Q){return Q.length==0?"":decodeURIComponent("%"+(Q.match(/.{1,2}/g)||[]).join("%"))}const Y=function(Q){return Q=Q.replace(new RegExp(S(k),"g")," "),`{${W(Q.slice(1,Q.length-1))}}`},R=function(Q){if(Q.startsWith("{")&&Q.endsWith("}"))return w(Q.slice(1,Q.length-1))};let X=y.replace(C,"").replace(new RegExp(`({[^}]*})+?|;([^${S(k)}]*)`,"g"),function(Q,ye,re){return ye!==void 0?Y(ye):" "+Y(`{${re.slice(1)}}`)}).replace(new RegExp(S(k),"g")," ");const q=/(\([^()]+\))+?/g;for(;q.test(X);)X=X.replace(q,"");X=X.replace(/\d+\.(\.\.)?/g,""),X=X.replace(/\.\.\./g,""),X=X.replace(/\$\d+/g,"");let ee=X.trim().split(new RegExp(/\s+/));ee=ee.filter(Q=>Q!=="");let Z="";for(let Q=0;Q<ee.length;Q++){const ye=R(ee[Q]);if(ye!==void 0){this._comments[this.fen()]=ye;continue}const re=this._moveFromSan(ee[Q],x);if(re==null)if(p.indexOf(ee[Q])>-1)Z=ee[Q];else throw new Error(`Invalid move in PGN: ${ee[Q]}`);else Z="",this._makeMove(re)}Z&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",Z)}_moveToSan(y,x){let k="";if(y.flags&r.KSIDE_CASTLE)k="O-O";else if(y.flags&r.QSIDE_CASTLE)k="O-O-O";else{if(y.piece!==t.PAWN){const S=G(y,x);k+=y.piece.toUpperCase()+S}y.flags&(r.CAPTURE|r.EP_CAPTURE)&&(y.piece===t.PAWN&&(k+=I(y.from)[0]),k+="x"),k+=I(y.to),y.promotion&&(k+="="+y.promotion.toUpperCase())}return this._makeMove(y),this.isCheck()&&(this.isCheckmate()?k+="#":k+="+"),this._undoMove(),k}_moveFromSan(y,x=!1){const k=we(y);let S=pe(k),T=this._moves({legal:!0,piece:S});for(let w=0,Y=T.length;w<Y;w++)if(k===we(this._moveToSan(T[w],T)))return T[w];if(x)return null;let L,D,C,A,U,W=!1;if(D=k.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),D?(L=D[1],C=D[2],A=D[3],U=D[4],C.length==1&&(W=!0)):(D=k.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),D&&(L=D[1],C=D[2],A=D[3],U=D[4],C.length==1&&(W=!0))),S=pe(k),T=this._moves({legal:!0,piece:L||S}),!A)return null;for(let w=0,Y=T.length;w<Y;w++)if(C){if((!L||L.toLowerCase()==T[w].piece)&&i[C]==T[w].from&&i[A]==T[w].to&&(!U||U.toLowerCase()==T[w].promotion))return T[w];if(W){const R=I(T[w].from);if((!L||L.toLowerCase()==T[w].piece)&&i[A]==T[w].to&&(C==R[0]||C==R[1])&&(!U||U.toLowerCase()==T[w].promotion))return T[w]}}else if(k===we(this._moveToSan(T[w],T)).replace("x",""))return T[w];return null}ascii(){let y=`   +------------------------+
`;for(let x=i.a8;x<=i.h1;x++){if(E(x)===0&&(y+=" "+"87654321"[v(x)]+" |"),this._board[x]){const k=this._board[x].type,T=this._board[x].color===t.WHITE?k.toUpperCase():k.toLowerCase();y+=" "+T+" "}else y+=" . ";x+1&136&&(y+=`|
`,x+=8)}return y+=`   +------------------------+
`,y+="     a  b  c  d  e  f  g  h",y}perft(y){const x=this._moves({legal:!1});let k=0;const S=this._turn;for(let T=0,L=x.length;T<L;T++)this._makeMove(x[T]),this._isKingAttacked(S)||(y-1>0?k+=this.perft(y-1):k++),this._undoMove();return k}_makePretty(y){const{color:x,piece:k,from:S,to:T,flags:L,captured:D,promotion:C}=y;let A="";for(const Y in r)r[Y]&L&&(A+=n[Y]);const U=I(S),W=I(T),w={color:x,piece:k,from:U,to:W,san:this._moveToSan(y,this._moves({legal:!0})),flags:A,lan:U+W,before:this.fen(),after:""};return this._makeMove(y),w.after=this.fen(),this._undoMove(),D&&(w.captured=D),C&&(w.promotion=C,w.lan+=C),w}turn(){return this._turn}board(){const y=[];let x=[];for(let k=i.a8;k<=i.h1;k++)this._board[k]==null?x.push(null):x.push({square:I(k),type:this._board[k].type,color:this._board[k].color}),k+1&136&&(y.push(x),x=[],k+=8);return y}squareColor(y){if(y in i){const x=i[y];return(v(x)+E(x))%2===0?"light":"dark"}return null}history({verbose:y=!1}={}){const x=[],k=[];for(;this._history.length>0;)x.push(this._undoMove());for(;;){const S=x.pop();if(!S)break;y?k.push(this._makePretty(S)):k.push(this._moveToSan(S,this._moves())),this._makeMove(S)}return k}_pruneComments(){const y=[],x={},k=S=>{S in this._comments&&(x[S]=this._comments[S])};for(;this._history.length>0;)y.push(this._undoMove());for(k(this.fen());;){const S=y.pop();if(!S)break;this._makeMove(S),k(this.fen())}this._comments=x}getComment(){return this._comments[this.fen()]}setComment(y){this._comments[this.fen()]=y.replace("{","[").replace("}","]")}deleteComment(){const y=this._comments[this.fen()];return delete this._comments[this.fen()],y}getComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>({fen:y,comment:this._comments[y]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>{const x=this._comments[y];return delete this._comments[y],{fen:y,comment:x}})}}t.Chess=ze})(Vl);const Y1=(t,e)=>t.board().map(n=>n.map(r=>r!==null?{type:r.type,team:r.color,uid:e[r.square]}:null));var vi=(t=>(t.CHECKMATE="c",t.DRAW="d",t.THREEFOLD_REPITITION="r",t.INSUFFICIENT_MATERIAL="m",t.OUT_OF_TIME="t",t))(vi||{});const mv=(t,e=!1)=>{let n="";if(e&&(n+="t"),t.isCheckmate()&&(n+="c"),t.isDraw()&&(n+="d"),t.isInsufficientMaterial()&&(n+="m"),t.isThreefoldRepetition()&&(n+="r"),n.length!==0)return n},Rd=(t,e)=>{const n=new Vl.Chess,r={};return n.board().flat().forEach((s,o)=>{s!==null&&(r[s.square]=`${o}`)}),{board:Y1(n,r),timers:{w:{time:t*60},b:{time:t*60}},moves:[],captured:{w:[],b:[]},turn:"w",check:{w:!1,b:!1},fen:n.fen(),redoStack:[],pieceUids:r,pieceUidTracker:[],paused:!1,players:e}},ut=(t,e)=>{var n;switch(e.type){case"move":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;t.redoStack&&(t.redoStack=[]);try{const r=e.chess.move({from:e.from,to:e.to,promotion:e.promotion}),i={};if(r.captured||r.flags.indexOf("e")>=0)i.taken=t.pieceUids[r.to],t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];else if(r.flags.indexOf("k")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];t.pieceUids={...t.pieceUids},t.pieceUidTracker=[...t.pieceUidTracker,i],t.moves=[...(n=t.moves)!=null?n:[],r],r.captured&&(t.captured[r.color]=[...t.captured[r.color],r.captured])}catch{break}return ut(t,{type:"endMove",chess:e.chess,time:e.time})}case"undo":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=e.chess.undo();if(r===null||t.moves===void 0)break;t.moves.pop(),t.moves=[...t.moves];const i=t.pieceUidTracker.pop();if(t.pieceUidTracker=[...t.pieceUidTracker],r.captured||r.flags.indexOf("e")>=0)t.pieceUids[r.from]=t.pieceUids[r.to],i&&i.taken?t.pieceUids[r.to]=i.taken:(console.error("move UID tracker made a mistake"),delete t.pieceUids[r.to]);else if(r.flags.indexOf("k")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];if(t.pieceUids={...t.pieceUids},r.captured){const s=t.captured[r.color],o=s.indexOf(r.captured);t.captured[r.color]=s.filter((a,l)=>l!==o)}return t.redoStack=[...t.redoStack,r],ut(t,{type:"endMove",chess:e.chess,time:e.time})}case"redo":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=t.redoStack.pop();if(r===void 0)break;const i=[...t.redoStack];return t=ut(t,{type:"move",to:r.to,from:r.from,promotion:r.promotion,chess:e.chess,time:e.time}),t.redoStack=i,t}case"pause":{console.error("PAUSE is not implemented");break}case"checkTimers":{const r=e.time,{set:i,time:s}=t.timers.w.set?t.timers.w:t.timers.b;if(!i)break;const o=(r-i)/1e3;if(s-o<=0)return t.complete=mv(e.chess,!0),{...t,timers:{w:{time:t.timers.w.set?0:t.timers.w.time},b:{time:t.timers.b.set?0:t.timers.b.time}}};break}case"endMove":{let{w:r,b:i}=t.timers;if(e.chess.turn()==="b"){if(i.set=e.time,r.set){const s=(i.set-r.set)/1e3;r.time-=s}r.set=void 0}else{if(r.set=e.time,i.set){const s=(r.set-i.set)/1e3;i.time-=s}i.set=void 0}return t.timers={w:r,b:i},t.turn=e.chess.turn(),t.board=Y1(e.chess,t.pieceUids),t.check={w:!1,b:!1},t.check[t.turn]=e.chess.isCheck(),t.complete=mv(e.chess,!1),{...t}}}return t},gv=t=>({timers:t.timers,board:t.board,captured:t.captured,check:t.check,fen:t.fen,moves:t.moves,turn:t.turn,complete:t.complete}),s2=(t,e,n,r,i)=>{var d,h,m,_,b,g,p,v,E,O,I,M,F,G;if(t.players={w:{name:e.players.w.name,type:e.players.w.uid===n?"local":"online"},b:{name:(h=(d=e.players.b)==null?void 0:d.name)!=null?h:"connecting",type:((m=e.players.b)==null?void 0:m.uid)===n?"local":"online"}},((b=(_=t.moves)==null?void 0:_.length)!=null?b:0)===0&&(t.timers=e.game.timers,((p=(g=e.game.moves)==null?void 0:g.length)!=null?p:0)>1)){for(const j of(v=e.game.moves)!=null?v:[])ut(t,{type:"move",from:j.from,to:j.to,promotion:j.promotion,chess:r,time:i});return t}if(t.turn===e.game.turn)return t;const s=(O=(E=t.moves)==null?void 0:E.length)!=null?O:0,o=(M=(I=e.game.moves)==null?void 0:I.length)!=null?M:0,a=(F=t.moves)!=null?F:[],l=(G=e.game.moves)!=null?G:[];if(s!==o&&s!==o-1)return`other user sent us ${o} moves, expected ${s} or ${s+1} moves`;for(let j=0;j<s;j++)if(a[j].san!==l[j].san)return`other user manipulated move history (move ${j} expected ${a[j].san} got ${l[j].san}`;if(s===o)return t;const c=l[l.length-1];if(c)t=ut(t,{type:"move",from:c.from,to:c.to,promotion:c.promotion,chess:r,time:i});else return t;if(t.moves&&e.game.moves&&t.moves.length!==e.game.moves.length)return"other user sent an invalid move";t.timers=e.game.timers;const f=t.captured.w.every((j,pe)=>j===e.game.captured.w[pe]),u=t.captured.b.every((j,pe)=>j===e.game.captured.b[pe]);return f&&u?t.check.w!==e.game.check.w||t.check.b!==e.game.check.b?"other user manipulated game check status":t.complete!==e.game.complete?"other user manipulated game completion!":t:"other user manipulated captures"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw gs(e)},gs=function(t){return new Error("Firebase Database ("+q1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(d=64)),r.push(n[f],n[u],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new a2;const d=s<<2|a>>4;if(r.push(d),c!==64){const h=a<<4&240|c>>2;if(r.push(h),u!==64){const m=c<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X1=function(t){const e=Q1(t);return _p.encodeByteArray(e,!0)},Gl=function(t){return X1(t).replace(/\./g,"")},Kl=function(t){try{return _p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){return J1(void 0,t)}function J1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!c2(n)||(t[n]=J1(t[n],e[n]));return t}function c2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=()=>u2().__FIREBASE_DEFAULTS__,d2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kl(t[1]);return e&&JSON.parse(e)},wp=()=>{try{return f2()||d2()||h2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z1=t=>{var e,n;return(n=(e=wp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p2=t=>{const e=Z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ew=()=>{var t;return(t=wp())===null||t===void 0?void 0:t.config},tw=t=>{var e;return(e=wp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function g2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v2(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rw(){return q1.NODE_ADMIN===!0}function y2(){try{return typeof indexedDB=="object"}catch{return!1}}function _2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="FirebaseError";class Nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=w2,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?S2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nr(i,a,r)}}function S2(t,e){return t.replace(E2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const E2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fo(Kl(s[0])||""),n=Fo(Kl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},k2=function(t){const e=iw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},C2=function(t){const e=iw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vv(s)&&vv(o)){if(!ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),f=1518500249):(c=s^o^a,f=1859775393):u<60?(c=s&o|a&(s|o),f=2400959708):(c=s^o^a,f=3395469782);const d=(i<<5|i>>>27)+c+l+f+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function I2(t,e){const n=new x2(t,e);return n.subscribe.bind(n)}class x2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}function Ep(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R2(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A2(t){return t===Dr?void 0:t}function R2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new N2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const L2={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},D2=ve.INFO,M2={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},F2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=M2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kp{constructor(e){this.name=e,this._logLevel=D2,this._logHandler=F2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const U2=(t,e)=>e.some(n=>t instanceof n);let yv,_v;function $2(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z2(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sw=new WeakMap,Ld=new WeakMap,ow=new WeakMap,Ju=new WeakMap,Cp=new WeakMap;function j2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sw.set(n,t)}).catch(()=>{}),Cp.set(e,t),e}function W2(t){if(Ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ld.set(t,e)}let Dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ow.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function H2(t){Dd=t(Dd)}function B2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return ow.set(r,e.sort?e.sort():[e]),ur(r)}:z2().includes(t)?function(...e){return t.apply(Zu(this),e),ur(sw.get(this))}:function(...e){return ur(t.apply(Zu(this),e))}}function V2(t){return typeof t=="function"?B2(t):(t instanceof IDBTransaction&&W2(t),U2(t,$2())?new Proxy(t,Dd):t)}function ur(t){if(t instanceof IDBRequest)return j2(t);if(Ju.has(t))return Ju.get(t);const e=V2(t);return e!==t&&(Ju.set(t,e),Cp.set(e,t)),e}const Zu=t=>Cp.get(t);function G2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const K2=["get","getKey","getAll","getAllKeys","count"],Y2=["put","add","delete","clear"],ef=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ef.set(e,s),s}H2(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Q2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Q2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Sv="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new kp("@firebase/app"),X2="@firebase/app-compat",J2="@firebase/analytics-compat",Z2="@firebase/analytics",eP="@firebase/app-check-compat",tP="@firebase/app-check",nP="@firebase/auth",rP="@firebase/auth-compat",iP="@firebase/database",sP="@firebase/database-compat",oP="@firebase/functions",aP="@firebase/functions-compat",lP="@firebase/installations",cP="@firebase/installations-compat",uP="@firebase/messaging",fP="@firebase/messaging-compat",dP="@firebase/performance",hP="@firebase/performance-compat",pP="@firebase/remote-config",mP="@firebase/remote-config-compat",gP="@firebase/storage",vP="@firebase/storage-compat",yP="@firebase/firestore",_P="@firebase/vertexai-preview",wP="@firebase/firestore-compat",SP="firebase",EP="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",kP={[Md]:"fire-core",[X2]:"fire-core-compat",[Z2]:"fire-analytics",[J2]:"fire-analytics-compat",[tP]:"fire-app-check",[eP]:"fire-app-check-compat",[nP]:"fire-auth",[rP]:"fire-auth-compat",[iP]:"fire-rtdb",[sP]:"fire-rtdb-compat",[oP]:"fire-fn",[aP]:"fire-fn-compat",[lP]:"fire-iid",[cP]:"fire-iid-compat",[uP]:"fire-fcm",[fP]:"fire-fcm-compat",[dP]:"fire-perf",[hP]:"fire-perf-compat",[pP]:"fire-rc",[mP]:"fire-rc-compat",[gP]:"fire-gcs",[vP]:"fire-gcs-compat",[yP]:"fire-fst",[wP]:"fire-fst-compat",[_P]:"fire-vertex","fire-js":"fire-js",[SP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Map,CP=new Map,Ud=new Map;function Ev(t,e){try{t.container.addComponent(e)}catch(n){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Ud.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,t);for(const n of Ql.values())Ev(n,t);for(const n of CP.values())Ev(n,t);return!0}function bp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},fr=new na("app","Firebase",bP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=EP;function aw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=ew()),!n)throw fr.create("no-options");const s=Ql.get(i);if(s){if(ql(n,s.options)&&ql(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new O2(i);for(const l of Ud.values())o.addComponent(l);const a=new IP(n,r,o);return Ql.set(i,a),a}function lw(t=Fd){const e=Ql.get(t);if(!e&&t===Fd&&ew())return aw();if(!e)throw fr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=kP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(a.join(" "));return}os(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="firebase-heartbeat-database",TP=1,Uo="firebase-heartbeat-store";let tf=null;function cw(){return tf||(tf=G2(xP,TP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),tf}async function PP(t){try{const n=(await cw()).transaction(Uo),r=await n.objectStore(Uo).get(uw(t));return await n.done,r}catch(e){if(e instanceof Nr)ri.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ri.warn(n.message)}}}async function kv(t,e){try{const r=(await cw()).transaction(Uo,"readwrite");await r.objectStore(Uo).put(e,uw(t)),await r.done}catch(n){if(n instanceof Nr)ri.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ri.warn(r.message)}}}function uw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=1024,AP=30*24*60*60*1e3;class RP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cv(),{heartbeatsToSend:r,unsentEntries:i}=OP(this._heartbeatsCache.heartbeats),s=Gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Cv(){return new Date().toISOString().substring(0,10)}function OP(t,e=NP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y2()?_2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bv(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){os(new ni("platform-logger",e=>new q2(e),"PRIVATE")),os(new ni("heartbeat",e=>new RP(e),"PRIVATE")),dr(Md,Sv,t),dr(Md,Sv,"esm2017"),dr("fire-js","")}DP("");var MP="firebase",FP="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(MP,FP,"app");function Ip(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UP=fw,dw=new na("auth","Firebase",fw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new kp("@firebase/auth");function $P(t,...e){Xl.logLevel<=ve.WARN&&Xl.warn(`Auth (${ys}): ${t}`,...e)}function cl(t,...e){Xl.logLevel<=ve.ERROR&&Xl.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw xp(t,...e)}function ln(t,...e){return xp(t,...e)}function hw(t,e,n){const r=Object.assign(Object.assign({},UP()),{[e]:n});return new na("auth","Firebase",r).create(e,{appName:t.name})}function hr(t){return hw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dw.create(t,...e)}function te(t,e,...n){if(!t)throw xp(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function Rn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zP(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zP()||g2()||"connection"in navigator)?navigator.onLine:!0}function WP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sp()||nw()}get(){return jP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=new ra(3e4,6e4);function Jc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _s(t,e,n,r,i={}){return mw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pw.fetch()(vw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HP),e);try{const i=new VP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hw(t,f,c);An(t,f)}}catch(i){if(i instanceof Nr)throw i;An(t,"network-request-failed",{message:String(i)})}}async function gw(t,e,n,r,i={}){const s=await _s(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tp(t.config,i):`${t.config.apiScheme}://${i}`}class VP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),BP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function yw(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KP(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),i=Pp(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:so(nf(i.auth_time)),issuedAtTime:so(nf(i.iat)),expirationTime:so(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function Pp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kl(n);return i?JSON.parse(i):(cl("Failed to decode base64 JWT payload"),null)}catch(i){return cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xv(t){const e=Pp(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nr&&YP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $o(t,yw(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_w(s.providerUserInfo):[],a=XP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function QP(t){const e=Ot(t);await Jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _w(t){return t.map(e=>{var{providerId:n}=e,r=Ip(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e){const n=await mw(t,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZP(t,e){return _s(t,"POST","/v2/accounts:revokeToken",Jc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hi;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ip(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KP(this,e)}reload(){return QP(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(hr(this.auth));const e=await this.getIdToken();return await $o(this,GP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:E,isAnonymous:O,providerData:I,stsTokenManager:M}=n;te(v&&M,e,"internal-error");const F=Hi.fromJSON(this.name,M);te(typeof v=="string",e,"internal-error"),jn(u,e.name),jn(d,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof O=="boolean",e,"internal-error"),jn(h,e.name),jn(m,e.name),jn(_,e.name),jn(b,e.name),jn(g,e.name),jn(p,e.name);const G=new _n({uid:v,auth:e,email:d,emailVerified:E,displayName:u,isAnonymous:O,photoURL:m,phoneNumber:h,tenantId:_,stsTokenManager:F,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(G.providerData=I.map(j=>Object.assign({},j))),b&&(G._redirectEventId=b),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hi;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_w(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Hi;a.updateFromIdToken(r);const l=new _n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Map;function wn(t){Rn(t instanceof Function,"Expected a class definition");let e=Tv.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ww.type="NONE";const Pv=ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(wn(Pv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||wn(Pv);const o=ul(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const u=_n._fromJSON(e,f);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(Iw(e))return"Webos";if(Np(e))return"Safari";if((e.includes("chrome/")||Ew(e))&&!e.includes("edge/"))return"Chrome";if(Cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sw(t=lt()){return/firefox\//i.test(t)}function Np(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ew(t=lt()){return/crios\//i.test(t)}function kw(t=lt()){return/iemobile/i.test(t)}function Cw(t=lt()){return/android/i.test(t)}function bw(t=lt()){return/blackberry/i.test(t)}function Iw(t=lt()){return/webos/i.test(t)}function Zc(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eN(t=lt()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tN(){return v2()&&document.documentMode===10}function xw(t=lt()){return Zc(t)||Cw(t)||Iw(t)||bw(t)||/windows phone/i.test(t)||kw(t)}function nN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e=[]){let n;switch(t){case"Browser":n=Nv(lt());break;case"Worker":n=`${Nv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e={}){return _s(t,"GET","/v2/passwordPolicy",Jc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=6;class oN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Av(this),this.idTokenSubscription=new Av(this),this.beforeStateQueue=new rN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yw(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(hr(this));const n=e?Ot(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iN(this),n=new oN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$P(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function eu(t){return Ot(t)}class Av{constructor(e){this.auth=e,this.observer=null,this.addObserver=I2(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lN(t){Ap=t}function cN(t){return Ap.loadJS(t)}function uN(){return Ap.gapiScript}function fN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){const n=bp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ql(s,e!=null?e:{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function hN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pN(t,e,n){const r=eu(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Pw(e),{host:o,port:a}=mN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gN()}function Pw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mN(t){const e=Pw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rv(o)}}}function Rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return gw(t,"POST","/v1/accounts:signInWithIdp",Jc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="http://localhost";class ii extends Nw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ip(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends Aw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ia{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ia{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ia{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){return gw(t,"POST","/v1/accounts:signUp",Jc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Ov(r);return new Sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ov(r);return new Sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t){var e;if(vn(t.app))return Promise.reject(hr(t));const n=eu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yN(n,{returnSecureToken:!0}),i=await Sr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zl(e,n,r,i)}}function Rw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zl._fromErrorAndOperation(t,s,e,r):s})}async function wN(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e,n=!1){const{auth:r}=t;if(vn(r.app))return Promise.reject(hr(r));const i="reauthenticate";try{const s=await $o(t,Rw(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Pp(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Sr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e,n=!1){if(vn(t.app))return Promise.reject(hr(t));const r="signIn",i=await Rw(t,r,e),s=await Sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function kN(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function CN(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function bN(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(){const t=lt();return Np(t)||Zc(t)}const xN=1e3,TN=10;class Lw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IN()&&nN(),this.fallbackToPolling=xw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lw.type="LOCAL";const PN=Lw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const Mw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await NN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Rp("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function RN(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function ON(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DN(){return Fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebaseLocalStorageDb",MN=1,tc="firebaseLocalStorage",$w="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function FN(){const t=indexedDB.deleteDatabase(Uw);return new sa(t).toPromise()}function jd(){const t=indexedDB.open(Uw,MN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:$w})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await FN(),e(await jd()))})})}async function Lv(t,e,n){const r=nu(t,!0).put({[$w]:e,value:n});return new sa(r).toPromise()}async function UN(t,e){const n=nu(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=nu(t,!0).delete(e);return new sa(n).toPromise()}const $N=800,zN=3;class zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(DN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ON(),!this.activeServiceWorker)return;this.sender=new AN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await Lv(e,ec,"1"),await Dv(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nu(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zw.type="LOCAL";const jN=zw;new ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){return e?wn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Nw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HN(t){return EN(t.auth,new Op(t),t.bypassAuthState)}function BN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),SN(n,new Op(t),t.bypassAuthState)}async function VN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),wN(n,new Op(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HN;case"linkViaPopup":case"linkViaRedirect":return VN;case"reauthViaPopup":case"reauthViaRedirect":return BN;default:An(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new ra(2e3,1e4);class Li extends jw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GN.get())};e()}}Li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="pendingRedirect",fl=new Map;class YN extends jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await qN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qN(t,e){const n=JN(e),r=XN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QN(t,e){fl.set(t._key(),e)}function XN(t){return wn(t._redirectPersistence)}function JN(t){return ul(KN,t.config.apiKey,t.name)}async function ZN(t,e,n=!1){if(vn(t.app))return Promise.reject(hr(t));const r=eu(t),i=WN(r,e),o=await new YN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=10*60*1e3;class tA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ww(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ww(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sA=/^https?/;async function oA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rA(t);for(const n of e)try{if(aA(n))return}catch{}An(t,"unauthorized-domain")}function aA(t){const e=$d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sA.test(n))return!1;if(iA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new ra(3e4,6e4);function Fv(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var r,i,s;function o(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),n(ln(t,"network-request-failed"))},timeout:lA.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const a=fN("iframefcb");return cn()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},cN(`${uN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dl=null,e})}let dl=null;function uA(t){return dl=dl||cA(t),dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new ra(5e3,15e3),dA="__/auth/iframe",hA="emulator/auth/iframe",pA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gA(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tp(e,hA):`https://${t.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:t.name,v:ys},i=mA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vs(r).slice(1)}`}async function vA(t){const e=await uA(t),n=cn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:gA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=cn().setTimeout(()=>{s(o)},fA.get());function l(){cn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_A=500,wA=600,SA="_blank",EA="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(t,e,n,r=_A,i=wA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yA),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=Ew(c)?SA:n),Sw(c)&&(e=e||EA,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if(eN(c)&&a!=="_self")return CA(e||"",a),new Uv(null);const u=window.open(e||"",a,f);te(u,t,"popup-blocked");try{u.focus()}catch{}return new Uv(u)}function CA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",IA="emulator/auth/handler",xA=encodeURIComponent("fac");async function $v(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:i};if(e instanceof Aw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))o[f]=u}if(e instanceof ia){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${xA}=${encodeURIComponent(l)}`:"";return`${TA(t)}?${vs(a).slice(1)}${c}`}function TA({config:t}){return t.emulator?Tp(t,IA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="webStorageSupport";class PA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=ZN,this._overrideRedirectResult=QN}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,r,$d(),i);return kA(e,o,Rp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $v(e,n,r,$d(),i);return RN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vA(e),r=new tA(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xw()||Np()||Zc()}}const NA=PA;var zv="@firebase/auth",jv="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OA(t){os(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(t)},c=new aN(r,i,s,l);return hN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new ni("auth-internal",e=>{const n=eu(e.getProvider("auth").getImmediate());return(r=>new AA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(zv,jv,RA(t)),dr(zv,jv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=5*60,DA=tw("authIdTokenMaxAge")||LA;let Wv=null;const MA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DA)return;const i=n==null?void 0:n.token;Wv!==i&&(Wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FA(t=lw()){const e=bp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dN(t,{popupRedirectResolver:NA,persistence:[jN,PN,Mw]}),r=tw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MA(s.toString());CN(n,o,()=>o(n.currentUser)),kN(n,a=>o(a))}}const i=Z1("auth");return i&&pN(n,`http://${i}`),n}function UA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OA("Browser");const Hv="@firebase/database",Bv="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hw="";function $A(t){Hw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zA(e)}}catch{}return new jA},Wr=Bw("localStorage"),Wd=Bw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new kp("@firebase/database"),WA=function(){let t=1;return function(){return t++}}(),Vw=function(t){const e=P2(t),n=new b2;n.update(e);const r=n.digest();return _p.encodeByteArray(r)},oa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=oa.apply(null,r):typeof r=="object"?e+=We(r):e+=r,e+=" "}return e};let Gr=null,Vv=!0;const HA=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Gi.logLevel=ve.VERBOSE,Gr=Gi.log.bind(Gi),e&&Wd.set("logging_enabled",!0)):typeof t=="function"?Gr=t:(Gr=null,Wd.remove("logging_enabled"))},ot=function(...t){if(Vv===!0&&(Vv=!1,Gr===null&&Wd.get("logging_enabled")===!0&&HA(!0)),Gr){const e=oa.apply(null,t);Gr(e)}},aa=function(t){return function(...e){ot(t,...e)}},Hd=function(...t){const e="FIREBASE INTERNAL ERROR: "+oa(...t);Gi.error(e)},On=function(...t){const e=`FIREBASE FATAL ERROR: ${oa(...t)}`;throw Gi.error(e),new Error(e)},Et=function(...t){const e="FIREBASE WARNING: "+oa(...t);Gi.warn(e)},BA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},VA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},as="[MIN_NAME]",si="[MAX_NAME]",ws=function(t,e){if(t===e)return 0;if(t===as||e===si)return-1;if(e===as||t===si)return 1;{const n=Gv(t),r=Gv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GA=function(t,e){return t===e?0:t<e?-1:1},Rs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Lp=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=We(e[r]),n+=":",n+=Lp(t[e[r]]);return n+="}",n},Kw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Yw=function(t){z(!Gw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},KA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const QA=new RegExp("^-?(0*)\\d{1,10}$"),XA=-2147483648,JA=2147483647,Gv=function(t){if(QA.test(t)){const e=Number(t);if(e>=XA&&e<=JA)return e}return null},Ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Et("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(e)}}class Ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ki.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="5",qw="v",Qw="s",Xw="r",Jw="f",Zw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eS="ls",tS="p",Bd="ac",nS="websocket",rS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sS(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===nS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===rS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nR(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return l2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={},of={};function Mp(t){const e=t.toString();return sf[e]||(sf[e]=new rR),sf[e]}function iR(t,e){const n=t.toString();return of[n]||(of[n]=e()),of[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ss(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="start",oR="close",aR="pLPCommand",lR="pRTLPCB",oS="id",aS="pw",lS="ser",cR="cb",uR="seg",fR="ts",dR="d",hR="dframe",cS=1870,uS=30,pR=cS-uS,mR=25e3,gR=3e4;class Di{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=aa(e),this.stats_=Mp(n),this.urlFn=l=>(this.appCheckToken&&(l[Bd]=this.appCheckToken),sS(n,rS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gR)),VA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fp((...s)=>{const[o,a,l,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kv)this.id=a,this.password=l;else if(o===oR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kv]="t",r[lS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[qw]=Dp,this.transportSessionId&&(r[Qw]=this.transportSessionId),this.lastSessionId&&(r[eS]=this.lastSessionId),this.applicationId&&(r[tS]=this.applicationId),this.appCheckToken&&(r[Bd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zw.test(location.hostname)&&(r[Xw]=Jw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Di.forceAllow_=!0}static forceDisallow(){Di.forceDisallow_=!0}static isAvailable(){return Di.forceAllow_?!0:!Di.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KA()&&!YA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=X1(n),i=Kw(r,pR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hR]="t",r[oS]=e,r[aS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WA(),window[aR+this.uniqueCallbackIdentifier]=e,window[lR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oS]=this.myID,e[aS]=this.myPW,e[lS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uS+r.length<=cS;){const o=this.pendingSegs.shift();r=r+"&"+uR+i+"="+o.seg+"&"+fR+i+"="+o.ts+"&"+dR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(mR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=16384,yR=45e3;let nc=null;typeof MozWebSocket<"u"?nc=MozWebSocket:typeof WebSocket<"u"&&(nc=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=aa(this.connId),this.stats_=Mp(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[qw]=Dp,typeof location<"u"&&location.hostname&&Zw.test(location.hostname)&&(o[Xw]=Jw),n&&(o[Qw]=n),r&&(o[eS]=r),i&&(o[Bd]=i),s&&(o[tS]=s),sS(e,nS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wr.set("previous_websocket_failure",!0);try{let r;rw(),this.mySock=new nc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&nc!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Wr.isInMemoryStorage||Wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Kw(n,vR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Di,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of zo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=6e4,wR=5e3,SR=10*1024,ER=100*1024,af="t",Yv="d",kR="s",qv="r",CR="e",Qv="o",Xv="a",Jv="n",Zv="p",bR="h";class IR{constructor(e,n,r,i,s,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=aa("c:"+this.id+":"),this.transportManager_=new zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ER?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(af in e){const n=e[af];n===Xv?this.upgradeIfSecondaryHealthy_():n===qv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Rs("t",e),r=Rs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Rs(af,e);if(Yv in e){const r=e[Yv];if(n===bR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kR?this.onConnectionShutdown_(r):n===qv?this.onReset_(r):n===CR?Hd("Server Error: "+r):n===Qv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dp!==r&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_R))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends dS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rc}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=32,ty=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new _e("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function hS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function ft(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return ft(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Up(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class TR{constructor(e,n){this.errorPrefix_=n,this.parts_=pS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Xc(this.parts_[r]);gS(this)}}function PR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xc(e),gS(t)}function NR(t){const e=t.parts_.pop();t.byteLength_-=Xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function gS(t){if(t.byteLength_>ty)throw new Error(t.errorPrefix_+"has a key path longer than "+ty+" bytes ("+t.byteLength_+").");if(t.parts_.length>ey)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ey+") or object contains a cycle "+Mr(t))}function Mr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends dS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $p}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=1e3,AR=60*5*1e3,ny=30*1e3,RR=1.3,OR=3e4,LR="server_kill",ry=3;class kn extends fS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kn.nextPersistentConnectionId_++,this.log_=aa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Os,this.maxReconnectDelay_=AR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$p.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(We(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Qc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;kn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const r=ss(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||C2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ny)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=k2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hd("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OR&&(this.reconnectDelay_=Os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new IR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,h=>{Et(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(LR)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Et(u),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Od(this.interruptReasons_)&&(this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ry&&(this.reconnectDelay_=ny,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ry&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hw.replace(/\./g,"-")]=1,Sp()?e["framework.cordova"]=1:nw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rc.getInstance().currentlyOnline();return Od(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(as,e),i=new le(as,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class vS extends ru{static get __EMPTY_NODE(){return Ba}static set __EMPTY_NODE(e){Ba=e}compare(e,n){return ws(e.name,n.name)}isDefinedOn(e){throw gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(si,Ba)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ba)}toString(){return".key"}}const Yi=new vS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:yt.EMPTY_NODE,this.right=s!=null?s:yt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class DR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Va(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Va(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Va(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Va(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new DR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e){return ws(t.name,e.name)}function zp(t,e){return ws(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd;function FR(t){Vd=t}const yS=function(t){return typeof t=="number"?"number:"+Yw(t):"string:"+t},_S=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else z(t===Vd||t.isEmpty(),"priority of unexpected type.");z(t===Vd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_S(this.priorityNode_)}static set __childrenNodeConstructor(e){iy=e}static get __childrenNodeConstructor(){return iy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ae(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yw(this.value_):e+=this.value_,this.lazyHash_=Vw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),s=Ge.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wS,SS;function UR(t){wS=t}function $R(t){SS=t}class zR extends ru{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ws(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(si,new Ge("[PRIORITY-POST]",SS))}makePost(e,n){const r=wS(e);return new le(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new zR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=Math.log(2);class WR{constructor(e){const n=s=>parseInt(Math.log(s)/jR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ic=function(t,e,n,r){t.sort(e);const i=function(l,c){const f=c-l;let u,d;if(f===0)return null;if(f===1)return u=t[l],d=n?n(u):u,new Ye(d,u.node,Ye.BLACK,null,null);{const h=parseInt(f/2,10)+l,m=i(l,h),_=i(h+1,c);return u=t[h],d=n?n(u):u,new Ye(d,u.node,Ye.BLACK,m,_)}},s=function(l){let c=null,f=null,u=t.length;const d=function(m,_){const b=u-m,g=u;u-=m;const p=i(b+1,g),v=t[b],E=n?n(v):v;h(new Ye(E,v.node,_,null,p))},h=function(m){c?(c.left=m,c=m):(f=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));_?d(b,Ye.BLACK):(d(b,Ye.BLACK),d(b,Ye.RED))}return f},o=new WR(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf;const hi={};class Sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(hi&&De,"ChildrenNode.ts has not been loaded"),lf=lf||new Sn({".priority":hi},{".priority":De}),lf}get(e){const n=ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Yi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ic(r,e.getCompare()):a=hi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new Sn(f,c)}addToIndexes(e,n){const r=Yl(this.indexes_,(i,s)=>{const o=ss(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===hi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ic(a,o.getCompare())}else return hi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new Sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yl(this.indexes_,i=>{if(i===hi)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new Sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&_S(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new J(new yt(zp),null,Sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{z(ae(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yS(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===la?-1:0}withIndex(e){if(e===Yi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yi?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HR extends J{constructor(){super(new yt(zp),J.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const la=new HR;Object.defineProperties(le,{MIN:{value:new le(as,J.EMPTY_NODE)},MAX:{value:new le(si,la)}});vS.__EMPTY_NODE=J.EMPTY_NODE;Ge.__childrenNodeConstructor=J;FR(la);$R(la);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=!0;function qe(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,qe(e))}if(!(t instanceof Array)&&BR){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=ic(n,MR,o=>o.name,zp);if(r){const o=ic(n,De.getCompare());return new J(s,qe(e),new Sn({".priority":o},{".priority":De}))}else return new J(s,qe(e),Sn.Default)}else{let n=J.EMPTY_NODE;return kt(t,(r,i)=>{if(Mn(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}UR(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR extends ru{constructor(e){super(),this.indexPath_=e,z(!ce(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ws(e.name,n.name):s}makePost(e,n){const r=qe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,la);return new le(si,e)}toString(){return pS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR extends ru{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ws(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=qe(e);return new le(n,r)}toString(){return".value"}}const KR=new GR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){return{type:"value",snapshotNode:t}}function ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function jo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(jo(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ls(n,r)):o.trackChildChange(Wo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(jo(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Wo(i,s,o))}else r.trackChildChange(ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.indexedFilter_=new jp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ho.getStartPost_(e),this.endPost_=Ho.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new le(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ho(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new le(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,h)=>u(h,d)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const l=new le(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,l);if(f&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Wo(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(jo(n,u));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ls(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:f&&o(c,l)>=0?(s!=null&&(s.trackChildChange(jo(c.name,c.node)),s.trackChildChange(ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:as}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Wp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QR(t){return t.loadsAllData()?new jp(t.getIndex()):t.hasLimit()?new qR(t):new Ho(t)}function sy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===KR?n="$value":t.index_===Yi?n="$key":(z(t.index_ instanceof VR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=We(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+We(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=We(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends fS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=aa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=sc.getListenId_(e,r),a={};this.listens_[o]=a;const l=sy(e._queryParams);this.restRequest_(s+".json",l,(c,f)=>{let u=f;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),ss(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=sc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sy(e._queryParams),r=e._path.toString(),i=new Qc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fo(a.responseText)}catch{Et("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Et("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){return{value:null,children:new Map}}function kS(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,oc());const i=t.children.get(r);e=Se(e),kS(i,e,n)}}function Gd(t,e,n){t.value!==null?n(e,t.value):JR(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);Gd(i,s,n)})}function JR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=10*1e3,eO=30*1e3,tO=5*60*1e3;class nO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ZR(e);const r=ay+(eO-ay)*Math.random();oo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*tO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function CS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=CS()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new ac(he(),n,this.revert)}}else return z(ae(this.path)===e,"operationForChild called for unrelated child."),new ac(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Bo(this.source,he()):new Bo(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return ce(this.path)?new oi(this.source,he(),this.snap.getImmediateChild(e)):new oi(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new oi(this.source,he(),n.value):new Vo(this.source,he(),n)}else return z(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vo(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(YR(o.childName,o.snapshotNode))}),Ds(t,i,"child_removed",e,r,n),Ds(t,i,"child_added",e,r,n),Ds(t,i,"child_moved",s,r,n),Ds(t,i,"child_changed",e,r,n),Ds(t,i,"value",e,r,n),i}function Ds(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>oO(t,a,l)),o.forEach(a=>{const l=sO(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oO(t,e,n){if(e.childName==null||n.childName==null)throw gs("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,r){return iu(new kr(e,n,r),t.serverCache)}function bS(t,e,n,r){return iu(t.eventCache,new kr(e,n,r))}function lc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ai(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf;const aO=()=>(cf||(cf=new yt(GA)),cf);class Ce{constructor(e,n=aO()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return kt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ce(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:He(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Ce(null)}}set(e,n){if(ce(e))return new Ce(n,this.children);{const r=ae(e),s=(this.children.get(r)||new Ce(null)).set(Se(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(ce(e))return n;{const r=ae(e),s=(this.children.get(r)||new Ce(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(He(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),He(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),He(n,i),r):new Ce(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ce(null))}}function lo(t,e,n){if(ce(e))return new Zt(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ft(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function ly(t,e,n){let r=t;return kt(n,(i,s)=>{r=lo(r,He(e,i),s)}),r}function cy(t,e){if(ce(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Zt(n)}}function Kd(t,e){return fi(t,e)!=null}function fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ft(n.path,e)):null}function uy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function pr(t,e){if(ce(e))return t;{const n=fi(t,e);return n!=null?new Zt(new Ce(n)):new Zt(t.writeTree_.subtree(e))}}function Yd(t){return t.writeTree_.isEmpty()}function cs(t,e){return IS(he(),t.writeTree_,e)}function IS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=IS(He(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){return NS(e,t)}function lO(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=r}function cO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function uO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fO(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return dO(t),!0;if(r.snap)t.visibleWrites=cy(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=cy(t.visibleWrites,He(r.path,l))})}return!0}else return!1}function fO(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(He(t.path,n),e))return!0;return!1}function dO(t){t.visibleWrites=xS(t.allWrites,hO,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hO(t){return t.visible}function xS(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=ft(n,o),r=lo(r,a,s.snap)):qt(o,n)&&(a=ft(o,n),r=lo(r,he(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=ft(n,o),r=ly(r,a,s.children);else if(qt(o,n))if(a=ft(o,n),ce(a))r=ly(r,he(),s.children);else{const l=ss(s.children,ae(a));if(l){const c=l.getChild(Se(a));r=lo(r,he(),c)}}}else throw gs("WriteRecord should have .snap or .children")}}return r}function TS(t,e,n,r,i){if(!r&&!i){const s=fi(t.visibleWrites,e);if(s!=null)return s;{const o=pr(t.visibleWrites,e);if(Yd(o))return n;if(n==null&&!Kd(o,he()))return null;{const a=n||J.EMPTY_NODE;return cs(o,a)}}}else{const s=pr(t.visibleWrites,e);if(!i&&Yd(s))return n;if(!i&&n==null&&!Kd(s,he()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(qt(c.path,e)||qt(e,c.path))},a=xS(t.allWrites,o,e),l=n||J.EMPTY_NODE;return cs(a,l)}}}function pO(t,e,n){let r=J.EMPTY_NODE;const i=fi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=cs(pr(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),uy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pr(t.visibleWrites,e);return uy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function mO(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=He(e,n);if(Kd(t.visibleWrites,s))return null;{const o=pr(t.visibleWrites,s);return Yd(o)?i.getChild(n):cs(o,i.getChild(n))}}function gO(t,e,n,r){const i=He(e,n),s=fi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pr(t.visibleWrites,i);return cs(o,r.getNode().getImmediateChild(n))}else return null}function vO(t,e){return fi(t.visibleWrites,e)}function yO(t,e,n,r,i,s,o){let a;const l=pr(t.visibleWrites,e),c=fi(l,he());if(c!=null)a=c;else if(n!=null)a=cs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=d.getNext();for(;h&&f.length<i;)u(h,r)!==0&&f.push(h),h=d.getNext();return f}else return[]}function _O(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function cc(t,e,n,r){return TS(t.writeTree,t.treePath,e,n,r)}function Vp(t,e){return pO(t.writeTree,t.treePath,e)}function fy(t,e,n,r){return mO(t.writeTree,t.treePath,e,n,r)}function uc(t,e){return vO(t.writeTree,He(t.treePath,e))}function wO(t,e,n,r,i,s){return yO(t.writeTree,t.treePath,e,n,r,i,s)}function Gp(t,e,n){return gO(t.writeTree,t.treePath,e,n)}function PS(t,e){return NS(He(t.treePath,e),t.writeTree)}function NS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Wo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,jo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Wo(r,e.snapshotNode,i.oldSnap));else throw gs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const AS=new EO;class Kp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ai(this.viewCache_),s=wO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){return{filter:t}}function CO(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bO(t,e,n,r,i){const s=new SO;let o,a;if(n.type===Qt.OVERWRITE){const c=n;c.source.fromUser?o=qd(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=fc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const c=n;c.source.fromUser?o=xO(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const c=n;c.revert?o=NO(t,e,c.path,r,i,s):o=TO(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=PO(t,e,n.path,r,s);else throw gs("Unknown operation type: "+n.type);const l=s.getChanges();return IO(e,o,l),{viewCache:o,changes:l}}function IO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=lc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ES(lc(e)))}}function RS(t,e,n,r,i,s){const o=e.eventCache;if(uc(r,n)!=null)return e;{let a,l;if(ce(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ai(e),f=c instanceof J?c:J.EMPTY_NODE,u=Vp(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=cc(r,ai(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){z(Er(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const u=fy(r,n,f,l);u!=null?a=t.filter.updatePriority(f,u):a=o.getNode()}else{const f=Se(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=fy(r,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(f,d):u=o.getNode().getImmediateChild(c)}else u=Gp(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,f,i,s):a=o.getNode()}}return ao(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function fc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),h,null)}else{const h=ae(n);if(!l.isCompleteForPath(n)&&Er(n)>1)return e;const m=Se(n),b=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?c=f.updatePriority(l.getNode(),b):c=f.updateChild(l.getNode(),h,b,m,AS,null)}const u=bS(e,c,l.isFullyInitialized()||ce(n),f.filtersNodes()),d=new Kp(i,u,s);return RS(t,u,n,i,d,a)}function qd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const f=new Kp(i,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ao(e,c,!0,t.filter.filtersNodes());else{const u=ae(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Se(n),h=a.getNode().getImmediateChild(u);let m;if(ce(d))m=r;else{const _=f.getCompleteChild(u);_!=null?hS(d)===".priority"&&_.getChild(mS(d)).isEmpty()?m=_:m=_.updateChild(d,r):m=J.EMPTY_NODE}if(h.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),u,m,d,f,o);l=ao(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function dy(t,e){return t.eventCache.isCompleteForChild(e)}function xO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const f=He(n,l);dy(e,ae(f))&&(a=qd(t,a,f,c,i,s,o))}),r.foreach((l,c)=>{const f=He(n,l);dy(e,ae(f))||(a=qd(t,a,f,c,i,s,o))}),a}function hy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=r:c=new Ce(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const h=e.serverCache.getNode().getImmediateChild(u),m=hy(t,h,d);l=fc(t,l,new _e(u),m,i,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const h=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!h){const m=e.serverCache.getNode().getImmediateChild(u),_=hy(t,m,d);l=fc(t,l,new _e(u),_,i,s,o,a)}}),l}function TO(t,e,n,r,i,s,o){if(uc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let c=new Ce(null);return l.getNode().forEachChild(Yi,(f,u)=>{c=c.set(new _e(f),u)}),Qd(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ce(null);return r.foreach((f,u)=>{const d=He(n,f);l.isCompleteForPath(d)&&(c=c.set(f,l.getNode().getChild(d)))}),Qd(t,e,n,c,i,s,a,o)}}function PO(t,e,n,r,i){const s=e.serverCache,o=bS(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return RS(t,o,n,r,AS,i)}function NO(t,e,n,r,i,s){let o;if(uc(r,n)!=null)return e;{const a=new Kp(r,e,i),l=e.eventCache.getNode();let c;if(ce(n)||ae(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=cc(r,ai(e));else{const u=e.serverCache.getNode();z(u instanceof J,"serverChildren would be complete if leaf node"),f=Vp(r,u)}f=f,c=t.filter.updateFullNode(l,f,s)}else{const f=ae(n);let u=Gp(r,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=l.getImmediateChild(f)),u!=null?c=t.filter.updateChild(l,f,u,Se(n),a,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,J.EMPTY_NODE,Se(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cc(r,ai(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||uc(r,he())!=null,ao(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new jp(r.getIndex()),s=QR(r);this.processor_=kO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),f=new kr(l,o.isFullyInitialized(),i.filtersNodes()),u=new kr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=iu(u,f),this.eventGenerator_=new rO(this.query_)}get query(){return this.query_}}function RO(t){return t.viewCache_.serverCache.getNode()}function OO(t){return lc(t.viewCache_)}function LO(t,e){const n=ai(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function py(t){return t.eventRegistrations_.length===0}function DO(t,e){t.eventRegistrations_.push(e)}function my(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gy(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(z(ai(t.viewCache_),"We should always have a full cache before handling merges"),z(lc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=bO(t.processor_,i,e,n,r);return CO(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,OS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function MO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(ls(s,o))}),n.isFullyInitialized()&&r.push(ES(n.getNode())),OS(t,r,n.getNode(),e)}function OS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return iO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class LS{constructor(){this.views=new Map}}function FO(t){z(!dc,"__referenceConstructor has already been defined"),dc=t}function UO(){return z(dc,"Reference.ts has not been loaded"),dc}function $O(t){return t.views.size===0}function Yp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),gy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gy(o,e,n,r));return s}}function DS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=cc(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=Vp(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const c=iu(new kr(a,l,!1),new kr(r,i,!1));return new AO(e,c)}return o}function zO(t,e,n,r,i,s){const o=DS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DO(o,n),MO(o,n)}function jO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Cr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(my(c,n,r)),py(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(my(l,n,r)),py(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Cr(t)&&s.push(new(UO())(e._repo,e._path)),{removed:s,events:o}}function MS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mr(t,e){let n=null;for(const r of t.views.values())n=n||LO(r,e);return n}function FS(t,e){if(e._queryParams.loadsAllData())return ou(t);{const r=e._queryIdentifier;return t.views.get(r)}}function US(t,e){return FS(t,e)!=null}function Cr(t){return ou(t)!=null}function ou(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;function WO(t){z(!hc,"__referenceConstructor has already been defined"),hc=t}function HO(){return z(hc,"Reference.ts has not been loaded"),hc}let BO=1;class vy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=_O(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $S(t,e,n,r,i){return lO(t.pendingWriteTree_,e,n,r,i),i?ua(t,new oi(CS(),e,n)):[]}function Hr(t,e,n=!1){const r=cO(t.pendingWriteTree_,e);if(uO(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(he(),!0):kt(r.children,o=>{s=s.set(new _e(o),!0)}),ua(t,new ac(r.path,s,n))}else return[]}function ca(t,e,n){return ua(t,new oi(Hp(),e,n))}function VO(t,e,n){const r=Ce.fromObject(n);return ua(t,new Vo(Hp(),e,r))}function GO(t,e){return ua(t,new Bo(Hp(),e))}function KO(t,e,n){const r=Qp(t,n);if(r){const i=Xp(r),s=i.path,o=i.queryId,a=ft(s,e),l=new Bo(Bp(o),a);return Jp(t,s,l)}else return[]}function pc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||US(o,e))){const l=jO(o,e,n,r);$O(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const f=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(d,h)=>Cr(h));if(f&&!u){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=QO(d);for(let m=0;m<h.length;++m){const _=h[m],b=_.query,g=HS(t,_);t.listenProvider_.startListening(co(b),Go(t,b),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(co(e),null):c.forEach(d=>{const h=t.queryToTagMap.get(au(d));t.listenProvider_.stopListening(co(d),h)}))}XO(t,c)}return a}function zS(t,e,n,r){const i=Qp(t,r);if(i!=null){const s=Xp(i),o=s.path,a=s.queryId,l=ft(o,e),c=new oi(Bp(a),l,n);return Jp(t,o,c)}else return[]}function YO(t,e,n,r){const i=Qp(t,r);if(i){const s=Xp(i),o=s.path,a=s.queryId,l=ft(o,e),c=Ce.fromObject(n),f=new Vo(Bp(a),l,c);return Jp(t,o,f)}else return[]}function Xd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const m=ft(d,i);s=s||mr(h,m),o=o||Cr(h)});let a=t.syncPointTree_.get(i);a?(o=o||Cr(a),s=s||mr(a,he())):(a=new LS,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,m)=>{const _=mr(m,he());_&&(s=s.updateImmediateChild(h,_))}));const c=US(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=au(e);z(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=JO();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const f=su(t.pendingWriteTree_,i);let u=zO(a,e,n,f,s,l);if(!c&&!o&&!r){const d=FS(a,e);u=u.concat(ZO(t,e,d))}return u}function qp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ft(o,e),c=mr(a,l);if(c)return c});return TS(i,e,s,n,!0)}function qO(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const u=ft(c,n);r=r||mr(f,u)});let i=t.syncPointTree_.get(n);i?r=r||mr(i,he()):(i=new LS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new kr(r,!0,!1):null,a=su(t.pendingWriteTree_,e._path),l=DS(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return OO(l)}function ua(t,e){return jS(e,t.syncPointTree_,null,su(t.pendingWriteTree_,he()))}function jS(t,e,n,r){if(ce(t.path))return WS(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=mr(i,he()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=PS(r,o);s=s.concat(jS(a,l,c,f))}return i&&(s=s.concat(Yp(i,t,r,n))),s}}function WS(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=mr(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=PS(r,o),f=t.operationForChild(o);f&&(s=s.concat(WS(f,a,l,c)))}),i&&(s=s.concat(Yp(i,t,r,n))),s}function HS(t,e){const n=e.query,r=Go(t,n);return{hashFn:()=>(RO(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?KO(t,n._path,r):GO(t,n._path);{const s=qA(i,n);return pc(t,n,null,s)}}}}function Go(t,e){const n=au(e);return t.queryToTagMap.get(n)}function au(t){return t._path.toString()+"$"+t._queryIdentifier}function Qp(t,e){return t.tagToQueryMap.get(e)}function Xp(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Jp(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=su(t.pendingWriteTree_,e);return Yp(r,n,i,null)}function QO(t){return t.fold((e,n,r)=>{if(n&&Cr(n))return[ou(n)];{let i=[];return n&&(i=MS(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function co(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(HO())(t._repo,t._path):t}function XO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=au(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function JO(){return BO++}function ZO(t,e,n){const r=e._path,i=Go(t,e),s=HS(t,n),o=t.listenProvider_.startListening(co(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!Cr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,u)=>{if(!ce(c)&&f&&Cr(f))return[ou(f).query];{let d=[];return f&&(d=d.concat(MS(f).map(h=>h.query))),kt(u,(h,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(co(f),Go(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zp(n)}node(){return this.node_}}class em{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new em(this.syncTree_,n)}node(){return qp(this.syncTree_,this.path_)}}const eL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yy=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nL(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},nL=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},rL=function(t,e,n,r){return tm(e,new em(n,t),r)},BS=function(t,e,n){return tm(t,new Zp(e),n)};function tm(t,e,n){const r=t.getPriority().val(),i=yy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=yy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ge(i))),o.forEachChild(De,(a,l)=>{const c=tm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rm(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=ae(n);for(;i!==null;){const s=ss(r.node.children,i)||{children:{},childCount:0};r=new nm(i,r,s),n=Se(n),i=ae(n)}return r}function Es(t){return t.node.value}function VS(t,e){t.node.value=e,Jd(t)}function GS(t){return t.node.childCount>0}function iL(t){return Es(t)===void 0&&!GS(t)}function lu(t,e){kt(t.node.children,(n,r)=>{e(new nm(n,t,r))})}function KS(t,e,n,r){n&&!r&&e(t),lu(t,i=>{KS(i,e,!0,r)}),n&&r&&e(t)}function sL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fa(t){return new _e(t.parent===null?t.name:fa(t.parent)+"/"+t.name)}function Jd(t){t.parent!==null&&oL(t.parent,t.name,t)}function oL(t,e,n){const r=iL(n),i=Mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Jd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Jd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=/[\[\].#$\/\u0000-\u001F\u007F]/,lL=/[\[\].#$\u0000-\u001F\u007F]/,uf=10*1024*1024,YS=function(t){return typeof t=="string"&&t.length!==0&&!aL.test(t)},qS=function(t){return typeof t=="string"&&t.length!==0&&!lL.test(t)},cL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qS(t)},uL=function(t,e,n,r){r&&e===void 0||im(Ep(t,"value"),e,n)},im=function(t,e,n){const r=n instanceof _e?new TR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mr(r)+" with contents = "+e.toString());if(Gw(e))throw new Error(t+"contains "+e.toString()+" "+Mr(r));if(typeof e=="string"&&e.length>uf/3&&Xc(e)>uf)throw new Error(t+"contains a string greater than "+uf+" utf8 bytes "+Mr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!YS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PR(r,o),im(t,a,r),NR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Mr(r)+" in addition to actual children.")}},QS=function(t,e,n,r){if(!(r&&n===void 0)&&!qS(n))throw new Error(Ep(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),QS(t,e,n,r)},dL=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!YS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cL(n))throw new Error(Ep(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sm(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Up(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function XS(t,e,n){sm(t,n),JS(t,r=>Up(r,e))}function un(t,e,n){sm(t,n),JS(t,r=>qt(r,e)||qt(e,r))}function JS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gr&&ot("event: "+n.toString()),Ss(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL="repo_interrupt",vL=25;class yL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oc(),this.transactionQueueTree_=new nm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _L(t,e,n){if(t.stats_=Mp(t.repoInfo_),t.forceRestClient_||ZA())t.server_=new sc(t.repoInfo_,(r,i,s,o)=>{_y(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new kn(t.repoInfo_,e,(r,i,s,o)=>{_y(t,r,i,s,o)},r=>{wy(t,r)},r=>{SL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iR(t.repoInfo_,()=>new nO(t.stats_,t.server_)),t.infoData_=new XR,t.infoSyncTree_=new vy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ca(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),am(t,"connected",!1),t.serverSyncTree_=new vy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);un(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function wL(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function om(t){return eL({timestamp:wL(t)})}function _y(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Yl(n,c=>qe(c));o=YO(t.serverSyncTree_,s,l,i)}else{const l=qe(n);o=zS(t.serverSyncTree_,s,l,i)}else if(r){const l=Yl(n,c=>qe(c));o=VO(t.serverSyncTree_,s,l)}else{const l=qe(n);o=ca(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=uu(t,s)),un(t.eventQueue_,a,o)}function wy(t,e){am(t,"connected",e),e===!1&&CL(t)}function SL(t,e){kt(e,(n,r)=>{am(t,n,r)})}function am(t,e,n){const r=new _e("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=ca(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function ZS(t){return t.nextWriteId_++}function EL(t,e,n){const r=qO(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=qe(i).withIndex(e._queryParams.getIndex());Xd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ca(t.serverSyncTree_,e._path,s);else{const a=Go(t.serverSyncTree_,e);o=zS(t.serverSyncTree_,e._path,s,a)}return un(t.eventQueue_,e._path,o),pc(t.serverSyncTree_,e,n,null,!0),s},i=>(cu(t,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function kL(t,e,n,r,i){cu(t,"set",{path:e.toString(),value:n,priority:r});const s=om(t),o=qe(n,r),a=qp(t.serverSyncTree_,e),l=BS(o,a,s),c=ZS(t),f=$S(t.serverSyncTree_,e,l,c,!0);sm(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,h)=>{const m=d==="ok";m||Et("set at "+e+" failed: "+d);const _=Hr(t.serverSyncTree_,c,!m);un(t.eventQueue_,e,_),xL(t,i,d,h)});const u=iE(t,e);uu(t,u),un(t.eventQueue_,u,[])}function CL(t){cu(t,"onDisconnectEvents");const e=om(t),n=oc();Gd(t.onDisconnect_,he(),(i,s)=>{const o=rL(i,s,t.serverSyncTree_,e);kS(n,i,o)});let r=[];Gd(n,he(),(i,s)=>{r=r.concat(ca(t.serverSyncTree_,i,s));const o=iE(t,i);uu(t,o)}),t.onDisconnect_=oc(),un(t.eventQueue_,he(),r)}function bL(t,e,n){let r;ae(e._path)===".info"?r=Xd(t.infoSyncTree_,e,n):r=Xd(t.serverSyncTree_,e,n),XS(t.eventQueue_,e._path,r)}function Sy(t,e,n){let r;ae(e._path)===".info"?r=pc(t.infoSyncTree_,e,n):r=pc(t.serverSyncTree_,e,n),XS(t.eventQueue_,e._path,r)}function IL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gL)}function cu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function xL(t,e,n,r){e&&Ss(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function eE(t,e,n){return qp(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function lm(t,e=t.transactionQueueTree_){if(e||fu(t,e),Es(e)){const n=nE(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TL(t,fa(e),n)}else GS(e)&&lu(e,n=>{lm(t,n)})}function TL(t,e,n){const r=n.map(c=>c.currentWriteId),i=eE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=ft(e,f.path);s=s.updateChild(u,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{cu(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Hr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();fu(t,rm(t.transactionQueueTree_,e)),lm(t,t.transactionQueueTree_),un(t.eventQueue_,e,f);for(let d=0;d<u.length;d++)Ss(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Et("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}uu(t,e)}},o)}function uu(t,e){const n=tE(t,e),r=fa(n),i=nE(t,n);return PL(t,i,r),r}function PL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ft(n,l.path);let f=!1,u;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,u=l.abortReason,i=i.concat(Hr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vL)f=!0,u="maxretry",i=i.concat(Hr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=eE(t,l.path,o);l.currentInputSnapshot=d;const h=e[a].update(d.val());if(h!==void 0){im("transaction failed: Data returned ",h,l.path);let m=qe(h);typeof h=="object"&&h!=null&&Mn(h,".priority")||(m=m.updatePriority(d.getPriority()));const b=l.currentWriteId,g=om(t),p=BS(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=ZS(t),o.splice(o.indexOf(b),1),i=i.concat($S(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Hr(t.serverSyncTree_,b,!0))}else f=!0,u="nodata",i=i.concat(Hr(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}fu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ss(r[a]);lm(t,t.transactionQueueTree_)}function tE(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&Es(r)===void 0;)r=rm(r,n),e=Se(e),n=ae(e);return r}function nE(t,e){const n=[];return rE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rE(t,e,n){const r=Es(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);lu(e,i=>{rE(t,i,n)})}function fu(t,e){const n=Es(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,VS(e,n.length>0?n:void 0)}lu(e,r=>{fu(t,r)})}function iE(t,e){const n=fa(tE(t,e)),r=rm(t.transactionQueueTree_,e);return sL(r,i=>{ff(t,i)}),ff(t,r),KS(r,i=>{ff(t,i)}),n}function ff(t,e){const n=Es(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?VS(e,void 0):n.length=s+1,un(t.eventQueue_,fa(e),i);for(let o=0;o<r.length;o++)Ss(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Et(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ey=function(t,e){const n=RL(t),r=n.namespace;n.domain==="firebase.com"&&On(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&On("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},RL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(i=NL(t.substring(f,u)));const d=AL(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class oE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:hS(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=oy(this._queryParams),n=Lp(e);return n==="{}"?"default":n}get _queryObject(){return oy(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof cm))return!1;const n=this._repo===e._repo,r=Up(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xR(this._path)}}class dn extends cm{constructor(e,n){super(e,n,new Wp,!1)}get parent(){const e=mS(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=mc(this.ref,e);return new us(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new us(i,mc(this.ref,r),De)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bs(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?mc(t._root,e):t._root}function mc(t,e){return t=Ot(t),ae(t._path)===null?fL("child","path",e,!1):QS("child","path",e,!1),new dn(t._repo,He(t._path,e))}function Ms(t,e){t=Ot(t),dL("set",t._path),uL("set",e,t._path,!1);const n=new Qc;return kL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lE(t){t=Ot(t);const e=new aE(()=>{}),n=new du(e);return EL(t._repo,t,n).then(r=>new us(r,new dn(t._repo,t._path),t._queryParams.getIndex()))}class du{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sE("value",this,new us(e.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}matches(e){return e instanceof du?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class um{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}createEvent(e,n){z(e.childName!=null,"Child events should have a childName.");const r=mc(new dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sE(e.type,this,new us(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof um?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function OL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(f,u)=>{Sy(t._repo,t,a),l(f,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new aE(n,s||void 0),a=e==="value"?new du(o):new um(e,o);return bL(t._repo,t,a),()=>Sy(t._repo,t,a)}function ky(t,e,n,r){return OL(t,"value",e,n,r)}FO(dn);WO(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="FIREBASE_DATABASE_EMULATOR_HOST",Zd={};let DL=!1;function ML(t,e,n,r){t.repoInfo_=new iS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function FL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||On("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ey(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[LL]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ey(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new Ki(Ki.OWNER):new tR(t.name,t.options,e);hL("Invalid Firebase Database URL",o),ce(o.path)||On("Database URL must point to the root of a Firebase Database (not including a child path).");const u=$L(a,t,f,new eR(t.name,n));return new zL(u,t)}function UL(t,e){const n=Zd[e];(!n||n[t.key]!==t)&&On(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IL(t),delete n[t.key]}function $L(t,e,n,r){let i=Zd[e.name];i||(i={},Zd[e.name]=i);let s=i[t.toURLString()];return s&&On("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new yL(t,DL,n,r),i[t.toURLString()]=s,s}class zL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_L(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&On("Cannot call "+e+" on a deleted database.")}}function jL(t=lw(),e){const n=bp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=p2("database");r&&WL(n,...r)}return n}function WL(t,e,n,r={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&On("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&On('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ki(Ki.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:m2(r.mockUserToken,t.app.options.projectId);s=new Ki(o)}ML(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){$A(ys),os(new ni("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return FL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dr(Hv,Bv,t),dr(Hv,Bv,"esm2017")}kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HL();const BL={apiKey:"AIzaSyCUyPgR8Z7fj3iXS_VXlsZOUurasOnochI",authDomain:"react-chess-d36fb.firebaseapp.com",databaseURL:"https://react-chess-d36fb-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-chess-d36fb",storageBucket:"react-chess-d36fb.appspot.com",messagingSenderId:"179911716640",appId:"1:179911716640:web:288ee42b166e3069207145"},VL=aw(BL),cE=FA(),Vs=jL(VL);_N(cE).catch(t=>console.error(t));const da=N.exports.createContext(null),GL=()=>{const t=N.exports.useContext(da);if(t===null)throw new Error("Lobby context has not been created.");return t},KL=async()=>{let t=0;for(;t<10;){let n=(Math.floor(Math.random()*999998)+1).toString().padStart(6,"0");if(!(await lE(Bs(Vs,`lobbies/${n}`))).exists())return n;t++}},df=t=>{const{defaultUsername:e,gameLength:n}=N.exports.useContext(Pr),[r,i]=N.exports.useState(!0),[s,o]=N.exports.useState(),[a,l]=N.exports.useState(void 0),c=N.exports.useRef();N.exports.useEffect(()=>(bN(cE,d=>{d?(c.current=d,o(d.uid)):(c.current=void 0,o(void 0))}),()=>{}),[]);const f=d=>{l(d.val())},u=s?r?{type:"ready",uid:s,Create:async d=>{if(!s){d("not authenticated yet");return}const h=await KL();if(!h){d("could not find a unique id for your lobby");return}const m=Rd(n,{w:{name:e,type:"local"},b:{name:"not joined",type:"online"}}),_=gv(m),b={lobbyId:h,hostUid:s,players:{w:{name:e,uid:s}},lastAccessTime:new Date().getTime(),game:_,inGame:!1,spectators:[]};try{const g=Bs(Vs,`lobbies/${h}`);await Ms(g,JSON.parse(JSON.stringify(b))),l(b),i(!1),ky(g,f)}catch(g){d(`failed to create lobby (id ${h}).  see the console for more information.`),console.error(g)}},Connect:async(d,h)=>{var g;if(!s){h("not authenticated yet");return}const m=Bs(Vs,`lobbies/${d}`),_=await lE(m);if(!_.exists()){h("lobby does not exist");return}const b=_.val();b.players.w.uid!==s&&(b.players.b===void 0?(b.players.b={name:e,uid:s},Ms(m,JSON.parse(JSON.stringify(b)))):b.players.b.uid!==s&&((g=b.spectators)!=null?g:[]).filter(v=>v.uid===s).length===0&&(b.spectators===void 0&&(b.spectators=[]),b.spectators.push({name:e,uid:s}),Ms(m,JSON.parse(JSON.stringify(b))))),ky(m,f),l(b),i(!1)}}:a!=null&&a.inGame?{type:"ingame",uid:s,lobby:a,Sync:d=>{const h=gv(d);l(m=>{if(m){let _=new Date().getTime();const b=h.timers[h.turn].set;b!==void 0&&(_=b),m={...m,game:h,lastAccessTime:_},Ms(Bs(Vs,`lobbies/${m==null?void 0:m.lobbyId}`),JSON.parse(JSON.stringify(m)))}return m})}}:{type:"lobby",uid:s,lobby:a,Start:()=>{l(d=>(d&&(d={...d,inGame:!0},Ms(Bs(Vs,`lobbies/${d.lobbyId}/inGame`),!0)),d))}}:{type:"loading"};return P(da.Provider,{value:u,children:t.children})},eh=(t,e)=>`${"abcdefgh"[t]}${8-e}`,Cy=t=>["abcdefgh".indexOf(t[0]),8-parseInt(t[1])],uE=N.exports.createContext(null),ha=()=>{const t=N.exports.useContext(uE);if(t===null)throw new Error("Chess context has not been created.");return t},hf=t=>{const{allowPause:e,defaultUsername:n,gameLength:r}=N.exports.useContext(Pr),[i,s]=N.exports.useState(Rd(r,{w:{name:"loading",type:"local"},b:{name:"loading",type:"local"}})),[o,a]=N.exports.useState(),l=N.exports.useRef(new Vl.Chess),c=N.exports.useRef(new i2),f=N.exports.useRef(void 0),u=N.exports.useContext(da);c.current.onmessage=h=>{const m=h.data;switch(m.type){case"success":{s(_=>ut(_,{type:"move",from:m.move.from,to:m.move.to,promotion:m.move.promotion,time:new Date().getTime(),chess:l.current}));break}case"failed":{alert("bot failed to generate a move");break}}},N.exports.useEffect(()=>{var m,_,b,g,p,v;if((i.turn==="b"?(m=f.current)==null?void 0:m.player_black:(_=f.current)==null?void 0:_.player_white)==="bot"&&i.redoStack.length===0)c.current.postMessage({type:"generateMove",fen:l.current.fen(),team:i.turn});else if((u==null?void 0:u.type)==="ingame"){const E=u.lobby.players[i.turn==="w"?"b":"w"],O=(g=(b=i.moves)==null?void 0:b.length)!=null?g:0,I=(v=(p=u.lobby.game.moves)==null?void 0:p.length)!=null?v:0;E&&E.uid===u.uid&&O>I&&u.Sync(i)}},[i.turn]),N.exports.useEffect(()=>{if((u==null?void 0:u.type)==="ingame"){const h=u.lobby;s(m=>{const _=s2(m,h,u.uid,l.current,new Date().getTime());if(typeof _=="string")a(_),console.error("found cheater!"),console.error(_);else return _;return m})}},[u]);const d={state:i,anticheat:o,clearAnticheat:()=>{a(void 0)},StartNewGame:h=>{f.current=h,l.current=new Vl.Chess,s(Rd(r,{w:{name:"WHITE",type:h.player_white},b:{name:h.player_black==="bot"?"BOT":"BLACK",type:h.player_black}}))},MakeMove:(h,m)=>(s(_=>ut(_,{type:"move",from:h,to:m,time:new Date().getTime(),chess:l.current})),!0),Promote:(h,m,_)=>(s(b=>ut(b,{type:"move",from:h,to:m,promotion:_,time:new Date().getTime(),chess:l.current})),!0),PotentialMoves:(h,m)=>l.current.moves({square:eh(h,m),verbose:!0}),UndoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ut(h,{type:"undo",time:new Date().getTime(),chess:l.current})),!0),RedoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ut(h,{type:"redo",time:new Date().getTime(),chess:l.current})),!0),Pause:()=>i.players.w.type==="online"||i.players.b.type==="online"||!e?!1:(s(h=>ut(h,{type:"pause",time:new Date().getTime()})),!0),OutOfTime:()=>{s(h=>ut(h,{type:"checkTimers",time:new Date().getTime(),chess:l.current}))}};return P(uE.Provider,{value:d,children:t.children})},YL=V.p`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: #000000AA;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  opacity: ${t=>t.opacity};
  transition: opacity 0.5s;
`,fm=({error:t,duration:e,onErrorClose:n})=>{const[r,i]=N.exports.useState(""),[s,o]=N.exports.useState(1);return N.exports.useEffect(()=>{if(i(t),t!=""){setTimeout(()=>{o(0)},e);const a=setTimeout(()=>{o(1),i(""),n()},e+500);return()=>clearTimeout(a)}},[t]),P(no,{children:r!==""&&P(YL,{opacity:s,children:r})})},by="512px",uo=(t,e)=>{switch(t){case"p":return e?"\u2659":"\u265F\uFE0E";case"r":return e?"\u2656":"\u265C";case"n":return e?"\u2658":"\u265E";case"b":return e?"\u2657":"\u265D";case"k":return e?"\u2654":"\u265A";case"q":return e?"\u2655":"\u265B"}return"_"},hl=t=>{switch(t){case"p":return"pawn";case"r":return"rook";case"n":return"knight";case"b":return"bishop";case"k":return"king";case"q":return"queen"}return"_"},fE=(t,e)=>{const n=`/react-chess/pieces/shadow/${by}/`,r=`${e?"w":"b"}_${hl(t)}_png_shadow_${by}.png`;return n+r},qL=V.img.attrs(t=>{if(t.drag_state)return{style:{transform:`translate(${t.drag_state.x-t.drag_state.relx}px, ${t.drag_state.y-t.drag_state.rely}px)`,transition:"none",zIndex:15}};let e={};return t.moved&&(e={zIndex:10}),{style:{transform:`translate(${t.gx*100}%, ${t.gy*100}%)`,...e}}})`
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  top: 0px;
  left: 0px;
  transition: transform 0.5s;
  touch-action: none;
`,QL=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(null),[i,s]=N.exports.useState(!1),o=d=>{if(d.stopPropagation(),d.preventDefault(),d.button!=0||!t.can_click)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const _=d.pageX-h.x+m.offsetLeft,b=d.pageY-h.y+m.offsetTop-window.scrollY;t.on_select_change(!0),r({x:d.pageX,y:d.pageY,relx:_,rely:b})},a=d=>{if(d.stopPropagation(),d.preventDefault(),!t.can_click||d.touches.length===0)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const _=d.touches[0].pageX-h.x+m.offsetLeft,b=d.touches[0].pageY-h.y+m.offsetTop;t.on_select_change(!0),r({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:_,rely:b})},l=d=>{n!==null&&(r(h=>({x:d.pageX,y:d.pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},c=d=>{n===null&&d.touches.length>0||(r(h=>({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},f=d=>{if(n!==null){t.on_select_change(!1),r(null);const h=t.pixels_to_grid(d.pageX,d.pageY);t.on_place(h[0],h[1])}},u=()=>{if(n!==null){const[d,h]=[n.x,n.y];t.on_select_change(!1),r(null);const m=t.pixels_to_grid(d,h);t.on_place(m[0],m[1])}};return N.exports.useEffect(()=>(n!==null&&(document.addEventListener("mousemove",l,{passive:!1}),document.addEventListener("mouseup",f,{passive:!1}),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",u,{passive:!1})),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",u)}),[n]),N.exports.useEffect(()=>{s(!0),setTimeout(()=>{s(!1)},500)},[t.grid_x,t.grid_y]),P(qL,{drag_state:n,moved:i,gx:t.grid_x,gy:t.grid_y,ref:e,onMouseDown:o,onTouchStart:a,src:fE(t.type,t.is_white)})},XL=V.div`
grid-column: ${t=>t.grid_x+1} / span 1;
grid-row: ${t=>t.grid_y+1} / span 1;
position: relative;
`,JL=V.div`
top: 25%;
left: 25%;
position: absolute;
width: 50%;
height: 50%;
border-radius: 50%;
background-color: ${t=>t.will_take?"#fc0339":t.is_castle?"#f5a742":"#03a1fc"};
`,ZL=t=>P(XL,{...t,children:P(JL,{...t})}),eD=V.div`
  width: 100%;
  height: 100%;

  display: grid;
  position: relative;
  grid-template-columns: ${()=>"auto ".repeat(8)+";"};
  grid-template-rows: ${()=>"auto ".repeat(8)+";"};
  user-select: none;
  -moz-user-select: none;
  touch-action: none;
`,tD=V.div`
  position: relative;
  background-color: ${t=>t.gridColor?t.theme.chess.board_light:t.theme.chess.board_dark};
  grid-column: ${t=>t.grid_x+1} / span 1;
  grid-row: ${t=>t.grid_y+1} / span 1;
`,nD=V.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,rD=V.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,Iy=V.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  right: 50px;
  background: ${t=>t.theme.menus.controls.background};
  z-index: 20;
`,xy=V.h1`
  text-align: center;
  color: #fff;
  padding-top: 1em;
`,iD=V.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 2em 0em 4em 0em;
`,sD=V.img`
  width: 15%;
  background: #fff;
  border: 1px solid #ffffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  padding: 5px;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,oD=V.h2`
  text-align: center;
  color: #fff;
  padding-bottom: 1em;
`,aD=["q","r","n","b"],lD=()=>{const{state:{board:t,turn:e,players:n,complete:r},anticheat:i,clearAnticheat:s,PotentialMoves:o,MakeMove:a,Promote:l}=ha(),[c,f]=N.exports.useState(null),u=N.exports.useRef(null),[d,h]=N.exports.useState(""),[m,_]=N.exports.useState(void 0);N.exports.useContext(da);const b=I=>{if(!I.target||!u.current)return;const M=I.target;(M===u.current||u.current.contains(M))&&(I.preventDefault(),I.stopPropagation())};N.exports.useEffect(()=>(document.addEventListener("touchmove",b,{passive:!1}),()=>{document.removeEventListener("touchmove",b)}),[]),N.exports.useEffect(()=>{h(i||"")},[i]);const g=(I,M)=>{const F=u.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const G=Math.floor((I-F.offsetLeft)/(F.offsetWidth/8)),j=Math.floor((M-F.offsetTop)/(F.offsetHeight/8));return[G,j]},p=(I,M)=>{const F=u.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const G=I*(F.offsetWidth/8)+F.offsetLeft,j=M*(F.offsetHeight/8)+F.offsetTop;return[G,j]},v=(I,M,F,G)=>{var we;const j=eh(I,M),pe=eh(F,G);if(pe[1]===(e==="w"?"8":"1")&&((we=t[M][I])==null?void 0:we.type)==="p"){_({from:j,to:pe});return}if(!a(j,pe)){h(`unable to move piece from ${j} to ${pe}`);return}},E=(I,M,F)=>{if(!l(I,M,F)){h(`unable to move piece from ${I} to ${M} (picked ${hl(F)})`);return}_(void 0)},O=()=>{if(r===void 0)return"invalid reason";let I=e==="w"?n.w.name:n.b.name;return r.indexOf(vi.CHECKMATE)>=0?I+" is in checkmate":r.indexOf(vi.OUT_OF_TIME)>=0?I+" ran out of time":r.indexOf(vi.INSUFFICIENT_MATERIAL)>=0?I+" has insufficient material":r.indexOf(vi.THREEFOLD_REPITITION)>=0?I+" performed threefold repitition":r.indexOf(vi.DRAW)>=0?"draw":"invalid reason"};return ie(eD,{ref:u,children:[[...Array(8*8)].map((I,M)=>{const F=M%8,G=Math.floor(M/8);return ie(tD,{grid_x:F,grid_y:G,gridColor:(M-G)%2==0,children:[F==0&&P(nD,{children:8-G}),G==0&&P(rD,{children:"abcdefgh"[F]})]},M)}),t.map((I,M)=>I.map((F,G)=>({x:G,y:M,...F}))).flat().filter(I=>I.team&&I.type&&I.uid).sort((I,M)=>I.uid.localeCompare(M.uid)).map(I=>P(QL,{type:I.type,grid_x:I.x,grid_y:I.y,is_white:I.team=="w",on_place:(M,F)=>v(I.x,I.y,M,F),pixels_to_grid:g,grid_to_pixels:p,on_select_change:M=>f(M?{grid_x:I.x,grid_y:I.y}:null),can_click:I.team===e&&n[e].type==="local"},`piece_${I.uid}`)),c&&o(c.grid_x,c.grid_y).map((I,M)=>P(ZL,{grid_x:Cy(I.to)[0],grid_y:Cy(I.to)[1],will_take:I.flags.indexOf("e")>=0||I.flags.indexOf("c")>=0,is_castle:I.flags.indexOf("k")>=0||I.flags.indexOf("q")>=0},`move_${M}`)),P(fm,{error:d,duration:1e3,onErrorClose:()=>{h(""),s()}}),m&&ie(Iy,{children:[P(xy,{children:"promotion"}),P(iD,{children:aD.map(I=>P(sD,{src:fE(I,e==="w"),title:hl(I),alt:hl(I),onClick:()=>E(m.from,m.to,I)},`promotion-${I}`))})]}),r&&ie(Iy,{children:[P(xy,{children:"Game Over: "}),P(oD,{children:O()})]})]})},cD=V.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${t=>t.theme.menus.controls.background};
  user-select: none;
`,Fs=V(Tr)`
  background: ${t=>t.theme.menus.controls.button};
  padding: 9px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  border: 1px solid #ffffffff;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,uD=({toggleFullscreen:t,quitGame:e})=>{const{UndoMove:n,RedoMove:r,Pause:i}=ha(),[s,o]=N.exports.useState("");return ie(cD,{children:[P(Fs,{onClick:()=>n()||o("Undo is disabled"),icon:$T,title:"Undo move"}),P(Fs,{onClick:()=>r()||o("Redo is disabled"),icon:FT,title:"Redo move"}),P(Fs,{onClick:()=>i()||o("Pause is disabled"),icon:DT,title:"Pause"}),P(Fs,{onClick:()=>t(),icon:HT,title:"Fullscreen"}),P(Fs,{onClick:()=>e(),icon:OT,title:"Leave game"}),P(fm,{error:s,duration:1e3,onErrorClose:()=>o("")})]})},fD=V.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${t=>t.theme.menus.players.background};
`,dD=V.div`
  display: grid;
  border-top: 2px solid ${t=>t.theme.menus.controls.background};
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    "icon name turn"
    "icon details turn"
    "pieces pieces turn";
`,hD=V.span`
  font-size: 30px;
  width: 50px;
  text-align: center;
  align-self: center;
  grid-area: icon;
`,pD=V.p`
  padding: 0px;
  margin: 0px;
  grid-area: name;
  align-self: end;
  color: ${t=>t.theme.colors.text};
`,mD=V.span`
  font-size: 10px;
  background: #ff0000;
  border-radius: 7px;
  padding: 2px 4px;
  color: ${t=>t.theme.colors.text};
`,gD=V.p`
  padding: 0px;
  margin: 0px;
  align-self: center;
  grid-area: details;
  color: ${t=>t.theme.colors.text};
`,vD=V.p`
  grid-area: pieces;
  padding: 0px;
  margin: 0px;
  margin-top: -3px;
  margin-left: 2px;
  color: #000;
`,yD=V.p`
  grid-area: turn;
  display: flex;
  align-item: center;
  justify-content: center;
  color: ${t=>t.theme.colors.text};
`,pi={icon:"",name:"loading...",status:"",details:"",turn:!1,lost_pieces:[],playable:!1,timer:{minutes:0,seconds:0}},_D=()=>{const{state:{players:t,captured:e,turn:n,complete:r,timers:i,check:s},OutOfTime:o}=ha(),[a,l]=N.exports.useState([{...pi,lost_pieces:[...pi.lost_pieces],timer:{...pi.timer}},{...pi,lost_pieces:[...pi.lost_pieces],timer:{...pi.timer}}]),c=()=>{l(u=>(u.forEach((d,h)=>{const m=h===0?"w":"b";d.icon=uo("k",m==="w"),s[m]?d.status="CHECK":d.status="",d.name=t[m].name,d.playable=t[m].type==="local",d.turn=n===m,d.lost_pieces=[...e[m]]}),[...u]))},f=()=>{l(u=>(u.forEach((d,h)=>{const m=h===0?"w":"b",{set:_,time:b}=i[m];let g=0;_&&(g=(new Date().getTime()-_)/1e3);let p=b-g;p<=0&&(p=0),d.timer.minutes=Math.floor(p/60),d.timer.seconds=Math.floor(p)%60}),[...u]))};return N.exports.useEffect(()=>{c()},[e,n,r,t]),N.exports.useEffect(()=>{f();const u=setInterval(()=>{f();for(const d of a)d.timer.minutes===0&&d.timer.seconds===0&&o()},1e3);return()=>{clearInterval(u)}},[i]),P(fD,{style:{gridArea:"players"},children:a.map((u,d)=>ie(dD,{children:[P(hD,{children:u.icon}),ie(pD,{children:[u.playable?P("strong",{children:u.name}):u.name," ",u.status!==""&&P(mD,{children:u.status})]}),ie(gD,{children:[u.timer.minutes,":",u.timer.seconds.toString().padStart(2,"0")]}),P(vD,{children:u.lost_pieces.map(h=>uo(h,d==1))}),P(yD,{children:u.turn&&P(Tr,{style:{alignSelf:"center"},icon:LT})})]},d))})},wD=V.div`
  grid-area: moves;
  overflow-y: auto;
  background-color: ${t=>t.theme.menus.moves.background};
  max-height: min(calc(100vw - 450px), calc(1000px - 430px));
  @media (max-width: 800px) {
    max-height: none;
  }
`,Ty=V.p`
  padding: 5px 10px;
  margin: 0px;
  color: ${t=>t.theme.colors.text};
`,SD=()=>{const{useChessNotation:t}=N.exports.useContext(Pr),{state:{moves:e,redoStack:n}}=ha(),r=i=>{if(t)return i.san;const s=uo(i.piece,i.color==="w");if(i.flags.indexOf("k")>=0)return`castled ${s} kingside`;if(i.flags.indexOf("q")>=0)return`castled ${s} queenside`;let o=`moved ${s} ${i.from} to ${i.to}`;if(i.promotion){const a=uo(i.promotion,i.color==="w");o+=` (promoted to ${a})`}if(i.captured){const a=uo(i.captured,i.color==="b");o+=` (took ${a})`}return o};return ie(wD,{children:[(e!=null?e:[]).map((i,s)=>P(Ty,{style:(e!=null?e:[]).length-1===s?{fontWeight:"bold"}:{},children:r(i)},`move_${s}`)),[...n].reverse().map((i,s)=>P(Ty,{children:r(i)},`move_redo_${s}`))]})};var Ct={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},Py=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],Ny=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],Ay=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],mt=typeof window<"u"&&typeof window.document<"u"?window.document:{},Lt="fullscreenEnabled"in mt&&Object.keys(Ct)||Py[0]in mt&&Py||Ny[0]in mt&&Ny||Ay[0]in mt&&Ay||[],ED={requestFullscreen:function(t){return t[Lt[Ct.requestFullscreen]]()},requestFullscreenFunction:function(t){return t[Lt[Ct.requestFullscreen]]},get exitFullscreen(){return mt[Lt[Ct.exitFullscreen]].bind(mt)},get fullscreenPseudoClass(){return":"+Lt[Ct.fullscreen]},addEventListener:function(t,e,n){return mt.addEventListener(Lt[Ct[t]],e,n)},removeEventListener:function(t,e,n){return mt.removeEventListener(Lt[Ct[t]],e,n)},get fullscreenEnabled(){return Boolean(mt[Lt[Ct.fullscreenEnabled]])},set fullscreenEnabled(t){},get fullscreenElement(){return mt[Lt[Ct.fullscreenElement]]},set fullscreenElement(t){},get onfullscreenchange(){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]},set onfullscreenchange(t){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]=t},get onfullscreenerror(){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]},set onfullscreenerror(t){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]=t}};const mi=ED,kD=V.div`
  overflow: ${t=>t.fullscreen?"scroll":"default"};
  padding: 0;
  margin: 0;
`,CD=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(!1),[i,s]=N.exports.useState(""),o=()=>{mi.fullscreenElement!==null?r(!0):r(!1)};return N.exports.useEffect(()=>(mi.addEventListener("fullscreenchange",o,!1),()=>mi.removeEventListener("fullscreenchange",o,!1)),[]),N.exports.useEffect(()=>{if(e.current===null||!mi.fullscreenEnabled){t.isFullscreen&&s("fullscreen is not available!");return}t.isFullscreen&&!n?mi.requestFullscreen(e.current):!t.isFullscreen&&n&&mi.exitFullscreen()},[t.isFullscreen]),ie(kD,{ref:e,fullscreen:n,children:[t.children,P(fm,{error:i,duration:1e3,onErrorClose:()=>s("")})]})},bD=V.div`
  ${t=>t.fullscreen&&`display: flex; 
  align-items: center; justify-content: center; 
  background: ${t.theme.colors.background}; 
  width: 100%; height: 100%;`}
  
  width: 100%;
`,ID=V.div`
  width: 100%;
  ${t=>t.fullscreen&&"max-width: 1400px;"};
  display: grid;
  background: ${t=>t.theme.colors.grid};
  grid-template-columns: auto auto 250px;
  grid-template-rows: 60px 120px auto;
  grid-template-areas:
    "chess chess controls"
    "chess chess players"
    "chess chess moves";

  @media (max-width: 800px) {
    grid-template-columns: 250px auto;
    grid-template-rows: auto 60px 120px;
    grid-template-areas:
      "chess chess"
      "controls moves"
      "players moves"
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto 60px 120px auto;
    grid-template-areas:
      "chess"
      "controls"
      "players"
      "moves"
  }
`,xD=V.div`
  grid-area: chess;
  aspect-ratio: 1;
`,pf=({type:t})=>{const[e,n]=N.exports.useState(!1),{hasLoaded:r}=N.exports.useContext(Pr),{id:i}=h1(),{StartNewGame:s}=ha(),o=ip(),a=N.exports.useContext(da);N.exports.useEffect(()=>{!r||(t==="bot"?s({player_white:"local",player_black:"bot",positions:"default"}):t==="local"?s({player_white:"local",player_black:"local",positions:"default"}):(a==null?void 0:a.type)==="ready"&&a.Connect(i!=null?i:"",f=>{alert(f)}))},[r,a==null?void 0:a.type]);const l=()=>{n(f=>!f)},c=()=>{confirm("would you like to quit this game?  once left, it cannot be joined again.")&&o("/")};return P(CD,{isFullscreen:e,children:ie(bD,{fullscreen:e,children:[a&&a.type!=="ingame"&&P("p",{children:"connecting..."}),ie(ID,{fullscreen:e,children:[P(xD,{children:P(lD,{})}),P(uD,{toggleFullscreen:()=>l(),quitGame:()=>c()}),P(_D,{}),P(SD,{})]})]})})},TD=V.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 85%;
  border: 2px solid #000;
  padding: 10px;
  background: ${t=>t.theme.colors.background};
`,Ar=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`,PD=V.h1`
  margin: 10px 0;
  color: ${t=>t.theme.colors.text};
`,ND=V.h1`
  user-select: none;
  cursor: pointer;
  margin: 0;
  color: ${t=>t.theme.colors.text};
`,gi=V.p`
  font-size: 1.2em;
  margin: 5px 0;
  color: ${t=>t.theme.colors.text};
`,Ga=V.input`
`,AD=V.input`
`,RD=V.input`
`,Ry=V.p`
  color: red;
`,OD=V.p`
  color: ${t=>t.theme.colors.text};
`,LD=V.a`
  color: ${t=>t.theme.colors.text};
`,DD=({onClickSettings:t})=>{const e=N.exports.useContext(Pr),n=N.exports.useRef(null),r=N.exports.useRef(null),i=N.exports.useRef(null),s=N.exports.useRef(null),o=N.exports.useRef(null),[a,l]=N.exports.useState(""),[c,f]=N.exports.useState(""),[u,d]=N.exports.useState(0),[h,m]=N.exports.useState(""),_=()=>{e.updateSettings(v=>{const E={...v};return n.current&&(E.useSystemTheme=n.current.checked),r.current&&(E.darkTheme=r.current.checked),i.current&&(E.allowPause=i.current.checked),i.current&&(E.allowPause=i.current.checked),s.current&&(E.useChessNotation=s.current.checked),E})},b=v=>/^[a-zA-Z0-9 _-]{1,16}$/gi.test(v),g=v=>{l(v),e.updateSettings(E=>(b(v)&&(E.defaultUsername=v),{...E}))},p=v=>{if(isNaN(v)||v<5||v>30){m("game length must be a number between 5 and 30");return}else m("");d(v),e.updateSettings(E=>(v>=5&&v<=30&&(E.gameLength=v),{...E}))};return N.exports.useEffect(()=>{b(a)?f(""):f("username must be 1-16 characters, containing letters, numbers, spaces, underscores and dashes")},[a]),N.exports.useEffect(()=>{a!==e.defaultUsername&&l(e.defaultUsername)},[e.defaultUsername]),N.exports.useEffect(()=>{u!==e.gameLength&&d(e.gameLength)},[e.gameLength]),ie(TD,{children:[ie(Ar,{children:[P(PD,{children:"settings"}),P(ND,{onClick:t,children:P(Tr,{icon:VT})})]}),ie(Ar,{children:[P(gi,{children:"match system theme"}),P(Ga,{type:"checkbox",ref:n,checked:e.useSystemTheme,onChange:()=>_()})]}),ie(Ar,{children:[P(gi,{children:"dark theme"}),P(Ga,{type:"checkbox",ref:r,checked:e.isDarkTheme,disabled:e.useSystemTheme,onChange:()=>_()})]}),ie(Ar,{children:[P(gi,{children:"allow pause"}),P(Ga,{type:"checkbox",ref:i,checked:e.allowPause,onChange:()=>_()})]}),ie(Ar,{children:[P(gi,{children:"use chess notation"}),P(Ga,{type:"checkbox",ref:s,checked:e.useChessNotation,onChange:()=>_()})]}),ie(Ar,{children:[P(gi,{children:"game length (minutes per player)"}),P(AD,{type:"number",value:u,min:5,max:30,step:5,onChange:v=>p(parseInt(v.target.value))})]}),h!==""&&P(Ry,{children:h}),ie(Ar,{children:[P(gi,{children:"default username"}),P(RD,{ref:o,value:a,onChange:v=>g(v.target.value)})]}),c!==""&&P(Ry,{children:c}),ie(OD,{children:["these settings are stored in your\xA0",P(LD,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})]})]})},MD=V.div`
`,Oy=V.h1`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`,FD=V.p`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`,Ly=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
  align-items: center;
`,Ka=V(m1)`
  background: ${t=>t.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  font-size: 2em;
  margin: 0.5em;
  text-align: center;
`,UD=V.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`,$D=()=>{const t=N.exports.useRef(null),[e,n]=N.exports.useState("");return ie(MD,{children:[P(Oy,{children:"create a game"}),ie(Ly,{children:[P(Ka,{to:"/game",children:"local"}),P(Ka,{to:"/game/bot",children:"bot"}),P(Ka,{to:"/lobby",children:"online"})]}),P(Oy,{children:"join game"}),ie(Ly,{children:[P(UD,{placeholder:"lobby id",maxLength:6,value:e,ref:t,type:"text",onChange:()=>{var r,i;n((i=(r=t.current)==null?void 0:r.value)!=null?i:"")}}),P(Ka,{to:`/lobby/${e}`,children:"join"})]}),P(FD,{children:"play chess against a local player, a bot, or an online player."})]})},zD=V.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,jD=V.div`
  display: flex;
  align-items: center;
`,WD=V.h1`
  color: ${t=>t.theme.colors.text};
  flex: 1;
  font-size: 3em;
`,HD=V.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
`,BD=V.button`
  font-size: 2em;
`,VD=V.div`
`,GD=V.div`
`,KD=V.button`
  font-size: 2em;
`,Us=V.p`
  color: ${t=>t.theme.colors.text};
`,YD=V.h1`
  color: red;
`,Dy=()=>{const t=GL(),{id:e}=h1(),[n,r]=N.exports.useState(),i=ip(),{hasLoaded:s}=N.exports.useContext(Pr);return N.exports.useEffect(()=>{if(t.type!=="loading"){if(t.type==="lobby"){e||(i(`/lobby/${t.lobby.lobbyId}/`),window.location.reload());return}if(t.type==="ingame"){i(`/game/${t.lobby.lobbyId}/`);return}!s||(e?t.Connect(e,r):t.Create(r))}},[t.type,e,s]),ie(zD,{children:[ie(jD,{children:[P(WD,{children:"lobby"}),t.type==="lobby"&&ie(no,{children:[P(HD,{value:t.lobby.lobbyId,type:"text",disabled:!0}),P(BD,{onClick:()=>{navigator.clipboard.writeText(window.location.href)},children:"copy"})]})]}),n?P(no,{children:P(YD,{children:n})}):t.type==="lobby"?ie(no,{children:[ie(VD,{children:[ie(Us,{children:["white: ",t.lobby.players.w.name]}),t.lobby.players.b&&ie(Us,{children:["black: ",t.lobby.players.b.name]}),ie(Us,{children:["spectators:"," ",t&&t.lobby.spectators&&t.lobby.spectators.length>0?t.lobby.spectators.map(o=>P("span",{children:o.name},o.uid)):P("span",{children:"none"})]}),P(Us,{children:"game length: 5 minutes (change in settings)"})]}),t.lobby.hostUid===t.uid&&P(GD,{onClick:t.Start,children:P(KD,{children:"start game"})})]}):ie(Us,{children:[e?"connecting to":"creating"," lobby..."]})]})},qD={colors:{text:"#000",background:"#fff",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#bbb",button:"#fff",button_hover:"#eee"},players:{background:"#ddd"},moves:{background:"",white:"",black:"",hover:""}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},QD={colors:{text:"#fff",background:"#0f172a",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#1e293b",button:"#fff",button_hover:"#eee"},players:{background:"#334155"},moves:{background:"#475569",white:"#475569",black:"#52525b",hover:"#94a3b8"}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},XD=t=>{const e=N.exports.useContext(Pr);return P(Cb,{theme:e.isDarkTheme?QD:qD,children:t.children})},JD=Ib`
body, html {
  margin: 0;
  font-family: 'Consolas',
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: ${t=>t.theme.colors.background};
}

#root {
  height: 100%;
}

::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  background: #B3AFB3;
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover{
  background: #B3AFB3;
}
::-webkit-scrollbar-track{
  background: #FFFFFF00;
  border-radius: 9px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F000;
}
`,ZD=V.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background: ${t=>t.theme.colors.background};
`,eM=LI;function tM(){const[t,e]=N.exports.useState(!1),n=()=>e(r=>!r);return P(r2,{children:P(XD,{children:ie(eM,{children:[P(JD,{}),ie(ZD,{className:"App",children:[P(XT,{onClickSettings:n}),ie(PI,{children:[P(Lr,{path:"/",element:P($D,{})}),P(Lr,{path:"/game/bot",element:P(hf,{children:P(pf,{type:"bot"})})}),P(Lr,{path:"/game/:id",element:P(df,{children:P(hf,{children:P(pf,{type:"online"})})})}),P(Lr,{path:"/game",element:P(hf,{children:P(pf,{type:"local"})})}),P(Lr,{path:"/lobby/:id",element:P(df,{children:P(Dy,{})})}),P(Lr,{path:"/lobby",element:P(df,{children:P(Dy,{})})})]}),P(t2,{}),t&&P(DD,{onClickSettings:n})]})]})})})}gf.createRoot(document.getElementById("root")).render(P(fn.StrictMode,{children:P(tM,{})}));
