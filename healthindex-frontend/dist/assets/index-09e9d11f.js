var yd=Object.defineProperty;var wd=(e,t,n)=>t in e?yd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Tt=(e,t,n)=>(wd(e,typeof t!="symbol"?t+"":t,n),n);function xd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hl={exports:{}},Ni={},Wl={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),bd=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Td=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Ld=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),xo=Symbol.iterator;function Id(e){return e===null||typeof e!="object"?null:(e=xo&&e[xo]||e["@@iterator"],typeof e=="function"?e:null)}var $l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ul=Object.assign,Vl={};function vn(e,t,n){this.props=e,this.context=t,this.refs=Vl,this.updater=n||$l}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ql(){}ql.prototype=vn.prototype;function vs(e,t,n){this.props=e,this.context=t,this.refs=Vl,this.updater=n||$l}var ys=vs.prototype=new ql;ys.constructor=vs;Ul(ys,vn.prototype);ys.isPureReactComponent=!0;var ko=Array.isArray,Ql=Object.prototype.hasOwnProperty,ws={current:null},Gl={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Ql.call(t,r)&&!Gl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var o=Array(l),u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:pr,type:e,key:a,ref:s,props:i,_owner:ws.current}}function _d(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function zd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var So=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zd(""+e.key):t.toString(36)}function jr(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case pr:case Sd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Vi(s,0):r,ko(i)?(n="",e!=null&&(n=e.replace(So,"$&/")+"/"),jr(i,t,n,"",function(u){return u})):i!=null&&(xs(i)&&(i=_d(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(So,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ko(e))for(var l=0;l<e.length;l++){a=e[l];var o=r+Vi(a,l);s+=jr(a,t,n,o,i)}else if(o=Id(e),typeof o=="function")for(e=o.call(e),l=0;!(a=e.next()).done;)a=a.value,o=r+Vi(a,l++),s+=jr(a,t,n,o,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function kr(e,t,n){if(e==null)return e;var r=[],i=0;return jr(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Fd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Ar={transition:null},Bd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:ws};function Yl(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=vn;_.Fragment=bd;_.Profiler=Cd;_.PureComponent=vs;_.StrictMode=Nd;_.Suspense=Rd;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;_.act=Yl;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ul({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=ws.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in t)Ql.call(t,o)&&!Gl.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&l!==void 0?l[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){l=Array(o);for(var u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:pr,type:e.type,key:i,ref:a,props:r,_owner:s}};_.createContext=function(e){return e={$$typeof:Td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};_.createElement=Kl;_.createFactory=function(e){var t=Kl.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Pd,render:e}};_.isValidElement=xs;_.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Fd}};_.memo=function(e,t){return{$$typeof:Ld,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};_.unstable_act=Yl;_.useCallback=function(e,t){return pe.current.useCallback(e,t)};_.useContext=function(e){return pe.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};_.useEffect=function(e,t){return pe.current.useEffect(e,t)};_.useId=function(){return pe.current.useId()};_.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return pe.current.useMemo(e,t)};_.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};_.useRef=function(e){return pe.current.useRef(e)};_.useState=function(e){return pe.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return pe.current.useTransition()};_.version="18.3.1";Wl.exports=_;var N=Wl.exports;const yn=kd(N),Dd=xd({__proto__:null,default:yn},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=N,jd=Symbol.for("react.element"),Ad=Symbol.for("react.fragment"),Hd=Object.prototype.hasOwnProperty,Wd=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$d={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Hd.call(t,r)&&!$d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jd,type:e,key:a,ref:s,props:i,_owner:Wd.current}}Ni.Fragment=Ad;Ni.jsx=Xl;Ni.jsxs=Xl;Hl.exports=Ni;var ks=Hl.exports;const Ud=ks.Fragment,c=ks.jsx,y=ks.jsxs;var xa={},Zl={exports:{}},be={},Jl={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var I=T.length;T.push(M);e:for(;0<I;){var Q=I-1>>>1,J=T[Q];if(0<i(J,M))T[Q]=M,T[I]=J,I=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],I=T.pop();if(I!==M){T[0]=I;e:for(var Q=0,J=T.length,wr=J>>>1;Q<wr;){var Ct=2*(Q+1)-1,Ui=T[Ct],Et=Ct+1,xr=T[Et];if(0>i(Ui,I))Et<J&&0>i(xr,Ui)?(T[Q]=xr,T[Et]=I,Q=Et):(T[Q]=Ui,T[Ct]=I,Q=Ct);else if(Et<J&&0>i(xr,I))T[Q]=xr,T[Et]=I,Q=Et;else break e}}return M}function i(T,M){var I=T.sortIndex-M.sortIndex;return I!==0?I:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var o=[],u=[],m=1,h=null,g=3,k=!1,S=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(o,M);else break;M=n(u)}}function x(T){if(v=!1,f(T),!S)if(n(o)!==null)S=!0,Wi(C);else{var M=n(u);M!==null&&$i(x,M.startTime-T)}}function C(T,M){S=!1,v&&(v=!1,p(L),L=-1),k=!0;var I=g;try{for(f(M),h=n(o);h!==null&&(!(h.expirationTime>M)||T&&!Ie());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var J=Q(h.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(o)&&r(o),f(M)}else r(o);h=n(o)}if(h!==null)var wr=!0;else{var Ct=n(u);Ct!==null&&$i(x,Ct.startTime-M),wr=!1}return wr}finally{h=null,g=I,k=!1}}var P=!1,R=null,L=-1,q=5,z=-1;function Ie(){return!(e.unstable_now()-z<q)}function Sn(){if(R!==null){var T=e.unstable_now();z=T;var M=!0;try{M=R(!0,T)}finally{M?bn():(P=!1,R=null)}}else P=!1}var bn;if(typeof d=="function")bn=function(){d(Sn)};else if(typeof MessageChannel<"u"){var wo=new MessageChannel,vd=wo.port2;wo.port1.onmessage=Sn,bn=function(){vd.postMessage(null)}}else bn=function(){w(Sn,0)};function Wi(T){R=T,P||(P=!0,bn())}function $i(T,M){L=w(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Wi(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var I=g;g=M;try{return T()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=g;g=T;try{return M()}finally{g=I}},e.unstable_scheduleCallback=function(T,M,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,T){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,T={id:m++,callback:M,priorityLevel:T,startTime:I,expirationTime:J,sortIndex:-1},I>Q?(T.sortIndex=I,t(u,T),n(o)===null&&T===n(u)&&(v?(p(L),L=-1):v=!0,$i(x,I-Q))):(T.sortIndex=J,t(o,T),S||k||(S=!0,Wi(C))),T},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(T){var M=g;return function(){var I=g;g=M;try{return T.apply(this,arguments)}finally{g=I}}}})(ec);Jl.exports=ec;var Vd=Jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=N,Se=Vd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,Vn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Vn[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,Qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bo={},No={};function Gd(e){return ka.call(No,e)?!0:ka.call(bo,e)?!1:Qd.test(e)?No[e]=!0:(bo[e]=!0,!1)}function Kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t>"u"||Kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,bs);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,bs);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,bs);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yd(t,n,i,r)&&(n=null),r||i===null?Gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ic=Symbol.for("react.offscreen"),Co=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,qi;function In(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var Qi=!1;function Gi(e,t){if(!e||Qi)return"";Qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var o=`
`+i[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=l);break}}}finally{Qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Xd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ut:return"Portal";case Sa:return"Profiler";case Cs:return"StrictMode";case ba:return"Suspense";case Na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jd(e){var t=ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=Jd(e))}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oc(e,t){t=t.checked,t!=null&&Ns(e,"checked",t,!1)}function Ta(e,t){oc(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function To(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Po(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(_n(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function lc(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ro(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,rn=null,an=null;function Lo(e){if(e=mr(e)){if(typeof za!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ri(t),za(e.stateNode,e.type,t))}}function hc(e){rn?an?an.push(e):an=[e]:rn=e}function fc(){if(rn){var e=rn,t=an;if(an=rn=null,Lo(e),t)for(e=0;e<t.length;e++)Lo(t[e])}}function mc(e,t){return e(t)}function gc(){}var Ki=!1;function vc(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return mc(e,t,n)}finally{Ki=!1,(rn!==null||an!==null)&&(gc(),fc())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Fa=!1;if(Xe)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Fa=!1}function np(e,t,n,r,i,a,s,l,o){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Dn=!1,Jr=null,ei=!1,Ba=null,rp={onError:function(e){Dn=!0,Jr=e}};function ip(e,t,n,r,i,a,s,l,o){Dn=!1,Jr=null,np.apply(rp,arguments)}function ap(e,t,n,r,i,a,s,l,o){if(ip.apply(this,arguments),Dn){if(Dn){var u=Jr;Dn=!1,Jr=null}else throw Error(b(198));ei||(ei=!0,Ba=u)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mo(e){if(Ht(e)!==e)throw Error(b(188))}function sp(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Mo(i),e;if(a===r)return Mo(i),t;a=a.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function wc(e){return e=sp(e),e!==null?xc(e):null}function xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xc(e);if(t!==null)return t;e=e.sibling}return null}var kc=Se.unstable_scheduleCallback,Io=Se.unstable_cancelCallback,op=Se.unstable_shouldYield,lp=Se.unstable_requestPaint,G=Se.unstable_now,cp=Se.unstable_getCurrentPriorityLevel,Rs=Se.unstable_ImmediatePriority,Sc=Se.unstable_UserBlockingPriority,ti=Se.unstable_NormalPriority,up=Se.unstable_LowPriority,bc=Se.unstable_IdlePriority,Ci=null,Ue=null;function dp(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:fp,pp=Math.log,hp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var Cr=64,Er=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=zn(l):(a&=s,a!==0&&(r=zn(a)))}else s=n&~i,s!==0?r=zn(s):a!==0&&(r=zn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-De(a),l=1<<s,o=i[s];o===-1?(!(l&n)||l&r)&&(i[s]=mp(l,t)):o<=t&&(e.expiredLanes|=l),a&=~l}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nc(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Ms,Tc,Pc,Rc,Oa=!1,Tr=[],ut=null,dt=null,pt=null,Gn=new Map,Kn=new Map,at=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _o(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function En(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=mr(t),t!==null&&Ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wp(e,t,n,r,i){switch(t){case"focusin":return ut=En(ut,e,t,n,r,i),!0;case"dragenter":return dt=En(dt,e,t,n,r,i),!0;case"mouseover":return pt=En(pt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Gn.set(a,En(Gn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Kn.set(a,En(Kn.get(a)||null,e,t,n,r,i)),!0}return!1}function Lc(e){var t=Lt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=yc(n),t!==null){e.blockedOn=t,Rc(e.priority,function(){Tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_a=r,n.target.dispatchEvent(r),_a=null}else return t=mr(n),t!==null&&Ms(t),e.blockedOn=n,!1;t.shift()}return!0}function zo(e,t,n){Hr(e)&&n.delete(t)}function xp(){Oa=!1,ut!==null&&Hr(ut)&&(ut=null),dt!==null&&Hr(dt)&&(dt=null),pt!==null&&Hr(pt)&&(pt=null),Gn.forEach(zo),Kn.forEach(zo)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Oa||(Oa=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,xp)))}function Yn(e){function t(i){return Tn(i,e)}if(0<Tr.length){Tn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Tn(ut,e),dt!==null&&Tn(dt,e),pt!==null&&Tn(pt,e),Gn.forEach(t),Kn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&at.shift()}var sn=tt.ReactCurrentBatchConfig,ri=!0;function kp(e,t,n,r){var i=B,a=sn.transition;sn.transition=null;try{B=1,Is(e,t,n,r)}finally{B=i,sn.transition=a}}function Sp(e,t,n,r){var i=B,a=sn.transition;sn.transition=null;try{B=4,Is(e,t,n,r)}finally{B=i,sn.transition=a}}function Is(e,t,n,r){if(ri){var i=ja(e,t,n,r);if(i===null)sa(e,t,r,ii,n),_o(e,r);else if(wp(i,e,t,n,r))r.stopPropagation();else if(_o(e,r),t&4&&-1<yp.indexOf(e)){for(;i!==null;){var a=mr(i);if(a!==null&&Ec(a),a=ja(e,t,n,r),a===null&&sa(e,t,r,ii,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else sa(e,t,r,null,n)}}var ii=null;function ja(e,t,n,r){if(ii=null,e=Ps(r),e=Lt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case Rs:return 1;case Sc:return 4;case ti:case up:return 16;case bc:return 536870912;default:return 16}default:return 16}}var ot=null,_s=null,Wr=null;function Ic(){if(Wr)return Wr;var e,t=_s,n=t.length,r,i="value"in ot?ot.value:ot.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Wr=i.slice(e,1<r?1-r:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Fo(){return!1}function Ne(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pr:Fo,this.isPropagationStopped=Fo,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Ne(wn),fr=U({},wn,{view:0,detail:0}),bp=Ne(fr),Xi,Zi,Pn,Ei=U({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Xi=e.screenX-Pn.screenX,Zi=e.screenY-Pn.screenY):Zi=Xi=0,Pn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Bo=Ne(Ei),Np=U({},Ei,{dataTransfer:0}),Cp=Ne(Np),Ep=U({},fr,{relatedTarget:0}),Ji=Ne(Ep),Tp=U({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pp=Ne(Tp),Rp=U({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=Ne(Rp),Mp=U({},wn,{data:0}),Do=Ne(Mp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function Fs(){return Fp}var Bp=U({},fr,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Ne(Bp),Op=U({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Ne(Op),jp=U({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),Ap=Ne(jp),Hp=U({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wp=Ne(Hp),$p=U({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=Ne($p),Vp=[9,13,27,32],Bs=Xe&&"CompositionEvent"in window,On=null;Xe&&"documentMode"in document&&(On=document.documentMode);var qp=Xe&&"TextEvent"in window&&!On,_c=Xe&&(!Bs||On&&8<On&&11>=On),jo=String.fromCharCode(32),Ao=!1;function zc(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Qp(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Ao=!0,jo);case"textInput":return e=t.data,e===jo&&Ao?null:e;default:return null}}function Gp(e,t){if(qt)return e==="compositionend"||!Bs&&zc(e,t)?(e=Ic(),Wr=_s=ot=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Bc(e,t,n,r){hc(r),t=ai(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,Xn=null;function Yp(e){Qc(e,0)}function Ti(e){var t=Kt(e);if(sc(t))return e}function Xp(e,t){if(e==="change")return t}var Dc=!1;if(Xe){var ea;if(Xe){var ta="oninput"in document;if(!ta){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),ta=typeof Wo.oninput=="function"}ea=ta}else ea=!1;Dc=ea&&(!document.documentMode||9<document.documentMode)}function $o(){jn&&(jn.detachEvent("onpropertychange",Oc),Xn=jn=null)}function Oc(e){if(e.propertyName==="value"&&Ti(Xn)){var t=[];Bc(t,Xn,e,Ps(e)),vc(Yp,t)}}function Zp(e,t,n){e==="focusin"?($o(),jn=t,Xn=n,jn.attachEvent("onpropertychange",Oc)):e==="focusout"&&$o()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Xn)}function eh(e,t){if(e==="click")return Ti(t)}function th(e,t){if(e==="input"||e==="change")return Ti(t)}function nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:nh;function Zn(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ka.call(t,i)||!je(e[i],t[i]))return!1}return!0}function Uo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vo(e,t){var n=Uo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uo(n)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ac(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rh(e){var t=Ac(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jc(n.ownerDocument.documentElement,n)){if(r!==null&&Ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Vo(n,a);var s=Vo(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ih=Xe&&"documentMode"in document&&11>=document.documentMode,Qt=null,Aa=null,An=null,Ha=!1;function qo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||Qt==null||Qt!==Zr(r)||(r=Qt,"selectionStart"in r&&Ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Zn(An,r)||(An=r,r=ai(Aa,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},na={},Hc={};Xe&&(Hc=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Pi(e){if(na[e])return na[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hc)return na[e]=t[n];return e}var Wc=Pi("animationend"),$c=Pi("animationiteration"),Uc=Pi("animationstart"),Vc=Pi("transitionend"),qc=new Map,Qo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){qc.set(e,t),At(t,[e])}for(var ra=0;ra<Qo.length;ra++){var ia=Qo[ra],ah=ia.toLowerCase(),sh=ia[0].toUpperCase()+ia.slice(1);kt(ah,"on"+sh)}kt(Wc,"onAnimationEnd");kt($c,"onAnimationIteration");kt(Uc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Vc,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Go(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ap(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],o=l.instance,u=l.currentTarget;if(l=l.listener,o!==a&&i.isPropagationStopped())break e;Go(i,l,u),a=o}else for(s=0;s<r.length;s++){if(l=r[s],o=l.instance,u=l.currentTarget,l=l.listener,o!==a&&i.isPropagationStopped())break e;Go(i,l,u),a=o}}}if(ei)throw e=Ba,ei=!1,Ba=null,e}function j(e,t){var n=t[qa];n===void 0&&(n=t[qa]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function aa(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Lr]){e[Lr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(oh.has(n)||aa(n,!1,e),aa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,aa("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Mc(t)){case 1:var i=kp;break;case 4:i=Sp;break;default:i=Is}n=i.bind(null,t,n,e),i=void 0,!Fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sa(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Lt(l),s===null)return;if(o=s.tag,o===5||o===6){r=a=s;continue e}l=l.parentNode}}r=r.return}vc(function(){var u=a,m=Ps(n),h=[];e:{var g=qc.get(e);if(g!==void 0){var k=zs,S=e;switch(e){case"keypress":if($r(n)===0)break e;case"keydown":case"keyup":k=Dp;break;case"focusin":S="focus",k=Ji;break;case"focusout":S="blur",k=Ji;break;case"beforeblur":case"afterblur":k=Ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ap;break;case Wc:case $c:case Uc:k=Pp;break;case Vc:k=Wp;break;case"scroll":k=bp;break;case"wheel":k=Up;break;case"copy":case"cut":case"paste":k=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Oo}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=u,f;d!==null;){f=d;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Qn(d,p),x!=null&&v.push(er(d,x,f)))),w)break;d=d.return}0<v.length&&(g=new k(g,S,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==_a&&(S=n.relatedTarget||n.fromElement)&&(Lt(S)||S[Ze]))break e;if((k||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=u,S=S?Lt(S):null,S!==null&&(w=Ht(S),S!==w||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=u),k!==S)){if(v=Bo,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Oo,x="onPointerLeave",p="onPointerEnter",d="pointer"),w=k==null?g:Kt(k),f=S==null?g:Kt(S),g=new v(x,d+"leave",k,n,m),g.target=w,g.relatedTarget=f,x=null,Lt(m)===u&&(v=new v(p,d+"enter",S,n,m),v.target=f,v.relatedTarget=w,x=v),w=x,k&&S)t:{for(v=k,p=S,d=0,f=v;f;f=$t(f))d++;for(f=0,x=p;x;x=$t(x))f++;for(;0<d-f;)v=$t(v),d--;for(;0<f-d;)p=$t(p),f--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=$t(v),p=$t(p)}v=null}else v=null;k!==null&&Ko(h,g,k,v,!1),S!==null&&w!==null&&Ko(h,w,S,v,!0)}}e:{if(g=u?Kt(u):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var C=Xp;else if(Ho(g))if(Dc)C=th;else{C=Jp;var P=Zp}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=eh);if(C&&(C=C(e,u))){Bc(h,C,n,m);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Pa(g,"number",g.value)}switch(P=u?Kt(u):window,e){case"focusin":(Ho(P)||P.contentEditable==="true")&&(Qt=P,Aa=u,An=null);break;case"focusout":An=Aa=Qt=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,qo(h,n,m);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":qo(h,n,m)}var R;if(Bs)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else qt?zc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(_c&&n.locale!=="ko"&&(qt||L!=="onCompositionStart"?L==="onCompositionEnd"&&qt&&(R=Ic()):(ot=m,_s="value"in ot?ot.value:ot.textContent,qt=!0)),P=ai(u,L),0<P.length&&(L=new Do(L,e,null,n,m),h.push({event:L,listeners:P}),R?L.data=R:(R=Fc(n),R!==null&&(L.data=R)))),(R=qp?Qp(e,n):Gp(e,n))&&(u=ai(u,"onBeforeInput"),0<u.length&&(m=new Do("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=R))}Qc(h,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qn(e,n),a!=null&&r.unshift(er(e,a,i)),a=Qn(e,t),a!=null&&r.push(er(e,a,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ko(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var l=n,o=l.alternate,u=l.stateNode;if(o!==null&&o===r)break;l.tag===5&&u!==null&&(l=u,i?(o=Qn(n,a),o!=null&&s.unshift(er(n,o,l))):i||(o=Qn(n,a),o!=null&&s.push(er(n,o,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lh=/\r\n?/g,ch=/\u0000|\uFFFD/g;function Yo(e){return(typeof e=="string"?e:""+e).replace(lh,`
`).replace(ch,"")}function Mr(e,t,n){if(t=Yo(t),Yo(e)!==t&&n)throw Error(b(425))}function si(){}var Wa=null,$a=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,uh=typeof clearTimeout=="function"?clearTimeout:void 0,Xo=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Xo<"u"?function(e){return Xo.resolve(null).then(e).catch(ph)}:Va;function ph(e){setTimeout(function(){throw e})}function oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),$e="__reactFiber$"+xn,tr="__reactProps$"+xn,Ze="__reactContainer$"+xn,qa="__reactEvents$"+xn,hh="__reactListeners$"+xn,fh="__reactHandles$"+xn;function Lt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zo(e);e!==null;){if(n=e[$e])return n;e=Zo(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[$e]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ri(e){return e[tr]||null}var Qa=[],Yt=-1;function St(e){return{current:e}}function A(e){0>Yt||(e.current=Qa[Yt],Qa[Yt]=null,Yt--)}function O(e,t){Yt++,Qa[Yt]=e.current,e.current=t}var xt={},ce=St(xt),ge=St(!1),Ft=xt;function dn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function oi(){A(ge),A(ce)}function Jo(e,t,n){if(ce.current!==xt)throw Error(b(168));O(ce,t),O(ge,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Zd(e)||"Unknown",i));return U({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Ft=ce.current,O(ce,e),O(ge,ge.current),!0}function el(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Kc(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,A(ge),A(ce),O(ce,e)):A(ge),O(ge,n)}var Qe=null,Li=!1,la=!1;function Yc(e){Qe===null?Qe=[e]:Qe.push(e)}function mh(e){Li=!0,Yc(e)}function bt(){if(!la&&Qe!==null){la=!0;var e=0,t=B;try{var n=Qe;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Li=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),kc(Rs,bt),i}finally{B=t,la=!1}}return null}var Xt=[],Zt=0,ci=null,ui=0,Ee=[],Te=0,Bt=null,Ge=1,Ke="";function Pt(e,t){Xt[Zt++]=ui,Xt[Zt++]=ci,ci=e,ui=t}function Xc(e,t,n){Ee[Te++]=Ge,Ee[Te++]=Ke,Ee[Te++]=Bt,Bt=e;var r=Ge;e=Ke;var i=32-De(r)-1;r&=~(1<<i),n+=1;var a=32-De(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ge=1<<32-De(t)+i|n<<i|r,Ke=a+e}else Ge=1<<a|n<<i|r,Ke=e}function Os(e){e.return!==null&&(Pt(e,1),Xc(e,1,0))}function js(e){for(;e===ci;)ci=Xt[--Zt],Xt[Zt]=null,ui=Xt[--Zt],Xt[Zt]=null;for(;e===Bt;)Bt=Ee[--Te],Ee[Te]=null,Ke=Ee[--Te],Ee[Te]=null,Ge=Ee[--Te],Ee[Te]=null}var ke=null,xe=null,H=!1,Be=null;function Zc(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,xe=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Ge,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,xe=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ka(e){if(H){var t=xe;if(t){var n=t;if(!tl(e,t)){if(Ga(e))throw Error(b(418));t=ht(n.nextSibling);var r=ke;t&&tl(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,H=!1,ke=e)}}else{if(Ga(e))throw Error(b(418));e.flags=e.flags&-4097|2,H=!1,ke=e}}}function nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ir(e){if(e!==ke)return!1;if(!H)return nl(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=xe)){if(Ga(e))throw Jc(),Error(b(418));for(;t;)Zc(e,t),t=ht(t.nextSibling)}if(nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ke?ht(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=xe;e;)e=ht(e.nextSibling)}function pn(){xe=ke=null,H=!1}function As(e){Be===null?Be=[e]:Be.push(e)}var gh=tt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rl(e){var t=e._init;return t(e._payload)}function eu(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=vt(p,d),p.index=0,p.sibling=null,p}function a(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,x){return d===null||d.tag!==6?(d=ma(f,p.mode,x),d.return=p,d):(d=i(d,f),d.return=p,d)}function o(p,d,f,x){var C=f.type;return C===Vt?m(p,d,f.props.children,x,f.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&rl(C)===d.type)?(x=i(d,f.props),x.ref=Rn(p,d,f),x.return=p,x):(x=Yr(f.type,f.key,f.props,null,p.mode,x),x.ref=Rn(p,d,f),x.return=p,x)}function u(p,d,f,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ga(f,p.mode,x),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function m(p,d,f,x,C){return d===null||d.tag!==7?(d=zt(f,p.mode,x,C),d.return=p,d):(d=i(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ma(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sr:return f=Yr(d.type,d.key,d.props,null,p.mode,f),f.ref=Rn(p,null,d),f.return=p,f;case Ut:return d=ga(d,p.mode,f),d.return=p,d;case rt:var x=d._init;return h(p,x(d._payload),f)}if(_n(d)||Nn(d))return d=zt(d,p.mode,f,null),d.return=p,d;_r(p,d)}return null}function g(p,d,f,x){var C=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:l(p,d,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:return f.key===C?o(p,d,f,x):null;case Ut:return f.key===C?u(p,d,f,x):null;case rt:return C=f._init,g(p,d,C(f._payload),x)}if(_n(f)||Nn(f))return C!==null?null:m(p,d,f,x,null);_r(p,f)}return null}function k(p,d,f,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,l(d,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sr:return p=p.get(x.key===null?f:x.key)||null,o(d,p,x,C);case Ut:return p=p.get(x.key===null?f:x.key)||null,u(d,p,x,C);case rt:var P=x._init;return k(p,d,f,P(x._payload),C)}if(_n(x)||Nn(x))return p=p.get(f)||null,m(d,p,x,C,null);_r(d,x)}return null}function S(p,d,f,x){for(var C=null,P=null,R=d,L=d=0,q=null;R!==null&&L<f.length;L++){R.index>L?(q=R,R=null):q=R.sibling;var z=g(p,R,f[L],x);if(z===null){R===null&&(R=q);break}e&&R&&z.alternate===null&&t(p,R),d=a(z,d,L),P===null?C=z:P.sibling=z,P=z,R=q}if(L===f.length)return n(p,R),H&&Pt(p,L),C;if(R===null){for(;L<f.length;L++)R=h(p,f[L],x),R!==null&&(d=a(R,d,L),P===null?C=R:P.sibling=R,P=R);return H&&Pt(p,L),C}for(R=r(p,R);L<f.length;L++)q=k(R,p,L,f[L],x),q!==null&&(e&&q.alternate!==null&&R.delete(q.key===null?L:q.key),d=a(q,d,L),P===null?C=q:P.sibling=q,P=q);return e&&R.forEach(function(Ie){return t(p,Ie)}),H&&Pt(p,L),C}function v(p,d,f,x){var C=Nn(f);if(typeof C!="function")throw Error(b(150));if(f=C.call(f),f==null)throw Error(b(151));for(var P=C=null,R=d,L=d=0,q=null,z=f.next();R!==null&&!z.done;L++,z=f.next()){R.index>L?(q=R,R=null):q=R.sibling;var Ie=g(p,R,z.value,x);if(Ie===null){R===null&&(R=q);break}e&&R&&Ie.alternate===null&&t(p,R),d=a(Ie,d,L),P===null?C=Ie:P.sibling=Ie,P=Ie,R=q}if(z.done)return n(p,R),H&&Pt(p,L),C;if(R===null){for(;!z.done;L++,z=f.next())z=h(p,z.value,x),z!==null&&(d=a(z,d,L),P===null?C=z:P.sibling=z,P=z);return H&&Pt(p,L),C}for(R=r(p,R);!z.done;L++,z=f.next())z=k(R,p,L,z.value,x),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?L:z.key),d=a(z,d,L),P===null?C=z:P.sibling=z,P=z);return e&&R.forEach(function(Sn){return t(p,Sn)}),H&&Pt(p,L),C}function w(p,d,f,x){if(typeof f=="object"&&f!==null&&f.type===Vt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Sr:e:{for(var C=f.key,P=d;P!==null;){if(P.key===C){if(C=f.type,C===Vt){if(P.tag===7){n(p,P.sibling),d=i(P,f.props.children),d.return=p,p=d;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&rl(C)===P.type){n(p,P.sibling),d=i(P,f.props),d.ref=Rn(p,P,f),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}f.type===Vt?(d=zt(f.props.children,p.mode,x,f.key),d.return=p,p=d):(x=Yr(f.type,f.key,f.props,null,p.mode,x),x.ref=Rn(p,d,f),x.return=p,p=x)}return s(p);case Ut:e:{for(P=f.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ga(f,p.mode,x),d.return=p,p=d}return s(p);case rt:return P=f._init,w(p,d,P(f._payload),x)}if(_n(f))return S(p,d,f,x);if(Nn(f))return v(p,d,f,x);_r(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=ma(f,p.mode,x),d.return=p,p=d),s(p)):n(p,d)}return w}var hn=eu(!0),tu=eu(!1),di=St(null),pi=null,Jt=null,Hs=null;function Ws(){Hs=Jt=pi=null}function $s(e){var t=di.current;A(di),e._currentValue=t}function Ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){pi=e,Hs=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Hs!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(pi===null)throw Error(b(308));Jt=e,pi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Mt=null;function Us(e){Mt===null?Mt=[e]:Mt.push(e)}function nu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Us(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,Us(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ls(e,n)}}function il(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var i=e.updateQueue;it=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var o=l,u=o.next;o.next=null,s===null?a=u:s.next=u,s=o;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=o))}if(a!==null){var h=i.baseState;s=0,m=u=o=null,l=a;do{var g=l.lane,k=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,v=l;switch(g=t,k=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){h=S.call(k,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,g=typeof S=="function"?S.call(k,h,g):S,g==null)break e;h=U({},h,g);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else k={eventTime:k,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=k,o=h):m=m.next=k,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(o=h),i.baseState=o,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Ot|=s,e.lanes=s,e.memoizedState=h}}function al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var gr={},Ve=St(gr),nr=St(gr),rr=St(gr);function It(e){if(e===gr)throw Error(b(174));return e}function qs(e,t){switch(O(rr,t),O(nr,e),O(Ve,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:La(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=La(t,e)}A(Ve),O(Ve,t)}function fn(){A(Ve),A(nr),A(rr)}function iu(e){It(rr.current);var t=It(Ve.current),n=La(t,e.type);t!==n&&(O(nr,e),O(Ve,n))}function Qs(e){nr.current===e&&(A(Ve),A(nr))}var W=St(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function Gs(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var Vr=tt.ReactCurrentDispatcher,ua=tt.ReactCurrentBatchConfig,Dt=0,$=null,X=null,ee=null,mi=!1,Hn=!1,ir=0,vh=0;function se(){throw Error(b(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function Ys(e,t,n,r,i,a){if(Dt=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?kh:Sh,e=n(r,i),Hn){a=0;do{if(Hn=!1,ir=0,25<=a)throw Error(b(301));a+=1,ee=X=null,t.updateQueue=null,Vr.current=bh,e=n(r,i)}while(Hn)}if(Vr.current=gi,t=X!==null&&X.next!==null,Dt=0,ee=X=$=null,mi=!1,t)throw Error(b(300));return e}function Xs(){var e=ir!==0;return ir=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(X===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?$.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(b(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?$.memoizedState=ee=e:ee=ee.next=e}return ee}function ar(e,t){return typeof t=="function"?t(e):t}function da(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=s=null,o=null,u=a;do{var m=u.lane;if((Dt&m)===m)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(l=o=h,s=r):o=o.next=h,$.lanes|=m,Ot|=m}u=u.next}while(u!==null&&u!==a);o===null?s=r:o.next=l,je(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,$.lanes|=a,Ot|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);je(a,t.memoizedState)||(me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function au(){}function su(e,t){var n=$,r=Me(),i=t(),a=!je(r.memoizedState,i);if(a&&(r.memoizedState=i,me=!0),r=r.queue,Zs(cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,sr(9,lu.bind(null,n,r,i,t),void 0,null),te===null)throw Error(b(349));Dt&30||ou(n,t,i)}return i}function ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lu(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&du(e)}function cu(e,t,n){return n(function(){uu(t)&&du(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function du(e){var t=Je(e,1);t!==null&&Oe(t,e,1,-1)}function sl(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=xh.bind(null,$,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pu(){return Me().memoizedState}function qr(e,t,n,r){var i=We();$.flags|=e,i.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var i=Me();r=r===void 0?null:r;var a=void 0;if(X!==null){var s=X.memoizedState;if(a=s.destroy,r!==null&&Ks(r,s.deps)){i.memoizedState=sr(t,n,a,r);return}}$.flags|=e,i.memoizedState=sr(1|t,n,a,r)}function ol(e,t){return qr(8390656,8,e,t)}function Zs(e,t){return Mi(2048,8,e,t)}function hu(e,t){return Mi(4,2,e,t)}function fu(e,t){return Mi(4,4,e,t)}function mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gu(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,mu.bind(null,t,e),n)}function Js(){}function vu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wu(e,t,n){return Dt&21?(je(n,t)||(n=Nc(),$.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function yh(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{B=n,ua.transition=r}}function xu(){return Me().memoizedState}function wh(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ku(e))Su(t,n);else if(n=nu(e,t,n,r),n!==null){var i=de();Oe(n,e,r,i),bu(n,t,r)}}function xh(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Su(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(i.hasEagerState=!0,i.eagerState=l,je(l,s)){var o=t.interleaved;o===null?(i.next=i,Us(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}n=nu(e,t,i,r),n!==null&&(i=de(),Oe(n,e,r,i),bu(n,t,r))}}function ku(e){var t=e.alternate;return e===$||t!==null&&t===$}function Su(e,t){Hn=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ls(e,n)}}var gi={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},kh={readContext:Le,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ol,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qr(4194308,4,mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return qr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wh.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:sl,useDebugValue:Js,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=sl(!1),t=e[0];return e=yh.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,i=We();if(H){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),te===null)throw Error(b(349));Dt&30||ou(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ol(cu.bind(null,r,a,e),[e]),r.flags|=2048,sr(9,lu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(H){var n=Ke,r=Ge;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sh={readContext:Le,useCallback:vu,useContext:Le,useEffect:Zs,useImperativeHandle:gu,useInsertionEffect:hu,useLayoutEffect:fu,useMemo:yu,useReducer:da,useRef:pu,useState:function(){return da(ar)},useDebugValue:Js,useDeferredValue:function(e){var t=Me();return wu(t,X.memoizedState,e)},useTransition:function(){var e=da(ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:xu,unstable_isNewReconciler:!1},bh={readContext:Le,useCallback:vu,useContext:Le,useEffect:Zs,useImperativeHandle:gu,useInsertionEffect:hu,useLayoutEffect:fu,useMemo:yu,useReducer:pa,useRef:pu,useState:function(){return pa(ar)},useDebugValue:Js,useDeferredValue:function(e){var t=Me();return X===null?t.memoizedState=e:wu(t,X.memoizedState,e)},useTransition:function(){var e=pa(ar)[0],t=Me().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:xu,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),a=Ye(r,i);a.payload=t,n!=null&&(a.callback=n),t=ft(e,a,i),t!==null&&(Oe(t,e,i,r),Ur(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=gt(e),a=Ye(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ft(e,a,i),t!==null&&(Oe(t,e,i,r),Ur(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=gt(e),i=Ye(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Oe(t,e,r,n),Ur(t,e,r))}};function ll(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,a):!0}function Nu(e,t,n){var r=!1,i=xt,a=t.contextType;return typeof a=="object"&&a!==null?a=Le(a):(i=ve(t)?Ft:ce.current,r=t.contextTypes,a=(r=r!=null)?dn(e,i):xt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function cl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vs(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Le(a):(a=ve(t)?Ft:ce.current,i.context=dn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Xa(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ii.enqueueReplaceState(i,i.state,null),hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Xd(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nh=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,cs=r),Ja(e,t)},n}function Eu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ja(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ul(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Oh.bind(null,e,t,n),t.then(e,e))}function dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var Ch=tt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?tu(t,null,n,r):hn(t,e.child,n,r)}function hl(e,t,n,r,i){n=n.render;var a=t.ref;return on(t,i),r=Ys(e,t,n,r,a,i),n=Xs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(H&&n&&Os(t),t.flags|=1,ue(e,t,r,i),t.child)}function fl(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!oo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Tu(e,t,a,r,i)):(e=Yr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(s,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=vt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Tu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zn(a,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,et(e,t,i)}return es(e,t,n,r,i)}function Pu(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(tn,we),we|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(tn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,O(tn,we),we|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,O(tn,we),we|=r;return ue(e,t,i,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function es(e,t,n,r,i){var a=ve(n)?Ft:ce.current;return a=dn(t,a),on(t,i),n=Ys(e,t,n,r,a,i),r=Xs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(H&&r&&Os(t),t.flags|=1,ue(e,t,n,i),t.child)}function ml(e,t,n,r,i){if(ve(n)){var a=!0;li(t)}else a=!1;if(on(t,i),t.stateNode===null)Qr(e,t),Nu(t,n,r),Za(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var o=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ve(n)?Ft:ce.current,u=dn(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||o!==u)&&cl(t,s,r,u),it=!1;var g=t.memoizedState;s.state=g,hi(t,r,s,i),o=t.memoizedState,l!==r||g!==o||ge.current||it?(typeof m=="function"&&(Xa(t,n,m,r),o=t.memoizedState),(l=it||ll(t,n,l,r,g,o,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),s.props=r,s.state=o,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ru(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ze(t.type,l),s.props=u,h=t.pendingProps,g=s.context,o=n.contextType,typeof o=="object"&&o!==null?o=Le(o):(o=ve(n)?Ft:ce.current,o=dn(t,o));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||g!==o)&&cl(t,s,r,o),it=!1,g=t.memoizedState,s.state=g,hi(t,r,s,i);var S=t.memoizedState;l!==h||g!==S||ge.current||it?(typeof k=="function"&&(Xa(t,n,k,r),S=t.memoizedState),(u=it||ll(t,n,u,r,g,S,o)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=o,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ts(e,t,n,r,a,i)}function ts(e,t,n,r,i,a){Ru(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&el(t,n,!1),et(e,t,a);r=t.stateNode,Ch.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hn(t,e.child,null,a),t.child=hn(t,null,l,a)):ue(e,t,l,a),t.memoizedState=r.state,i&&el(t,n,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?Jo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jo(e,t.context,!1),qs(e,t.containerInfo)}function gl(e,t,n,r,i){return pn(),As(i),t.flags|=256,ue(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,i=W.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(W,i&1),e===null)return Ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Fi(s,r,0,null),e=zt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=rs(n),t.memoizedState=ns,e):eo(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Eh(e,t,s,r,l,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,l=i.sibling;var o={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=vt(i,o),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=vt(l,a):(a=zt(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?rs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=ns,r}return a=e.child,e=a.sibling,r=vt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&As(r),hn(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=ha(Error(b(422))),zr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Fi({mode:"visible",children:r.children},i,0,null),a=zt(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&hn(t,e.child,null,s),t.child.memoizedState=rs(s),t.memoizedState=ns,a);if(!(t.mode&1))return zr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(b(419)),r=ha(a,r,void 0),zr(e,t,s,r)}if(l=(s&e.childLanes)!==0,me||l){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Je(e,i),Oe(r,e,i,-1))}return so(),r=ha(Error(b(421))),zr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jh.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xe=ht(i.nextSibling),ke=t,H=!0,Be=null,e!==null&&(Ee[Te++]=Ge,Ee[Te++]=Ke,Ee[Te++]=Bt,Ge=e.id,Ke=e.overflow,Bt=t),t=eo(t,r.children),t.flags|=4096,t)}function vl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ya(e.return,t,n)}function fa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Iu(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ue(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vl(e,n,t);else if(e.tag===19)vl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fa(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fa(t,!0,n,null,a);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Th(e,t,n){switch(t.tag){case 3:Lu(t),pn();break;case 5:iu(t);break;case 1:ve(t.type)&&li(t);break;case 4:qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Mu(e,t,n):(O(W,W.current&1),e=et(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Iu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Pu(e,t,n)}return et(e,t,n)}var _u,is,zu,Fu;_u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};zu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,It(Ve.current);var a=null;switch(n){case"input":i=Ea(e,i),r=Ea(e,r),a=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),a=[];break;case"textarea":i=Ra(e,i),r=Ra(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}Ma(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var o=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&o!==l&&(o!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in o)o.hasOwnProperty(s)&&l[s]!==o[s]&&(n||(n={}),n[s]=o[s])}else n||(a||(a=[]),a.push(u,n)),n=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(a=a||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(a=a||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&j("scroll",e),a||l===o||(a=[])):(a=a||[]).push(u,o))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Fu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ph(e,t,n){var r=t.pendingProps;switch(js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&oi(),oe(t),null;case 3:return r=t.stateNode,fn(),A(ge),A(ce),Gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(ps(Be),Be=null))),is(e,t),oe(t),null;case 5:Qs(t);var i=It(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)zu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return oe(t),null}if(e=It(Ve.current),Ir(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[$e]=t,r[tr]=a,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<Fn.length;i++)j(Fn[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Eo(r,a),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},j("invalid",r);break;case"textarea":Po(r,a),j("invalid",r)}Ma(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),i=["children",""+l]):Vn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":br(r),To(r,a,!0);break;case"textarea":br(r),Ro(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$e]=t,e[tr]=r,_u(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ia(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<Fn.length;i++)j(Fn[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Eo(e,r),i=Ea(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),j("invalid",e);break;case"textarea":Po(e,r),i=Ra(e,r),j("invalid",e);break;default:i=r}Ma(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="style"?pc(e,o):a==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&uc(e,o)):a==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&qn(e,o):typeof o=="number"&&qn(e,""+o):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vn.hasOwnProperty(a)?o!=null&&a==="onScroll"&&j("scroll",e):o!=null&&Ns(e,a,o,s))}switch(n){case"input":br(e),To(e,r,!1);break;case"textarea":br(e),Ro(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?nn(e,!!r.multiple,a,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Fu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=It(rr.current),It(Ve.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(a=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return oe(t),null;case 13:if(A(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&xe!==null&&t.mode&1&&!(t.flags&128))Jc(),pn(),t.flags|=98560,a=!1;else if(a=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[$e]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else Be!==null&&(ps(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):so())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return fn(),is(e,t),e===null&&Jn(t.stateNode.containerInfo),oe(t),null;case 10:return $s(t.type._context),oe(t),null;case 17:return ve(t.type)&&oi(),oe(t),null;case 19:if(A(W),a=t.memoizedState,a===null)return oe(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Ln(a,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fi(e),s!==null){for(t.flags|=128,Ln(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&G()>gn&&(t.flags|=128,r=!0,Ln(a,!1),t.lanes=4194304)}else{if(!r)if(e=fi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!H)return oe(t),null}else 2*G()-a.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=G(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Rh(e,t){switch(js(t),t.tag){case 1:return ve(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),A(ge),A(ce),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(A(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(W),null;case 4:return fn(),null;case 10:return $s(t.type._context),null;case 22:case 23:return ao(),null;case 24:return null;default:return null}}var Fr=!1,le=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,E=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function as(e,t,n){try{n()}catch(r){V(e,t,r)}}var yl=!1;function Mh(e,t){if(Wa=ri,e=Ac(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,o=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var k;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==a||r!==0&&h.nodeType!==3||(o=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break t;if(g===n&&++u===i&&(l=s),g===a&&++m===r&&(o=s),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:e,selectionRange:n},ri=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,w=S.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ze(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return S=yl,yl=!1,S}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&as(t,n,a)}i=i.next}while(i!==r)}}function _i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[tr],delete t[qa],delete t[hh],delete t[fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Du(e){return e.tag===5||e.tag===3||e.tag===4}function wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}function ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}var ne=null,Fe=!1;function nt(e,t,n){for(n=n.child;n!==null;)Ou(e,t,n),n=n.sibling}function Ou(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:le||en(n,t);case 6:var r=ne,i=Fe;ne=null,nt(e,t,n),ne=r,Fe=i,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?oa(e.parentNode,n):e.nodeType===1&&oa(e,n),Yn(e)):oa(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,nt(e,t,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&as(n,t,s),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!le&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){V(n,t,l)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,nt(e,t,n),le=r):nt(e,t,n);break;default:nt(e,t,n)}}function xl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lh),t.forEach(function(r){var i=Ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Fe=!1;break e;case 3:ne=l.stateNode.containerInfo,Fe=!0;break e;case 4:ne=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(ne===null)throw Error(b(160));Ou(a,s,i),ne=null,Fe=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(u){V(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ae(e),r&4){try{Wn(3,e,e.return),_i(3,e)}catch(v){V(e,e.return,v)}try{Wn(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:_e(t,e),Ae(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(_e(t,e),Ae(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{qn(i,"")}catch(v){V(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&oc(i,a),Ia(l,s);var u=Ia(l,a);for(s=0;s<o.length;s+=2){var m=o[s],h=o[s+1];m==="style"?pc(i,h):m==="dangerouslySetInnerHTML"?uc(i,h):m==="children"?qn(i,h):Ns(i,m,h,u)}switch(l){case"input":Ta(i,a);break;case"textarea":lc(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?nn(i,!!a.multiple,k,!1):g!==!!a.multiple&&(a.defaultValue!=null?nn(i,!!a.multiple,a.defaultValue,!0):nn(i,!!a.multiple,a.multiple?[]:"",!1))}i[tr]=a}catch(v){V(e,e.return,v)}}break;case 6:if(_e(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){V(e,e.return,v)}}break;case 3:if(_e(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:_e(t,e),Ae(e);break;case 13:_e(t,e),Ae(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ro=G())),r&4&&xl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||m,_e(t,e),le=u):_e(t,e),Ae(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(h=E=m;E!==null;){switch(g=E,k=g.child,g.tag){case 0:case 11:case 14:case 15:Wn(4,g,g.return);break;case 1:en(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){V(r,n,v)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){Sl(h);continue}}k!==null?(k.return=g,E=k):Sl(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=h.stateNode,o=h.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=dc("display",s))}catch(v){V(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){V(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Ae(e),r&4&&xl(e);break;case 21:break;default:_e(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Du(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qn(i,""),r.flags&=-33);var a=wl(e);ls(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=wl(e);os(e,l,s);break;default:throw Error(b(161))}}catch(o){V(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e,t,n){E=e,Au(e)}function Au(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fr;if(!s){var l=i.alternate,o=l!==null&&l.memoizedState!==null||le;l=Fr;var u=le;if(Fr=s,(le=o)&&!u)for(E=i;E!==null;)s=E,o=s.child,s.tag===22&&s.memoizedState!==null?bl(i):o!==null?(o.return=s,E=o):bl(i);for(;a!==null;)E=a,Au(a),a=a.sibling;E=i,Fr=l,le=u}kl(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,E=a):kl(e)}}function kl(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||_i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&al(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}al(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Yn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}le||t.flags&512&&ss(t)}catch(g){V(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Sl(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function bl(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_i(4,t)}catch(o){V(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(o){V(t,i,o)}}var a=t.return;try{ss(t)}catch(o){V(t,a,o)}break;case 5:var s=t.return;try{ss(t)}catch(o){V(t,s,o)}}}catch(o){V(t,t.return,o)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var _h=Math.ceil,vi=tt.ReactCurrentDispatcher,to=tt.ReactCurrentOwner,Re=tt.ReactCurrentBatchConfig,F=0,te=null,K=null,re=0,we=0,tn=St(0),Z=0,or=null,Ot=0,zi=0,no=0,$n=null,fe=null,ro=0,gn=1/0,qe=null,yi=!1,cs=null,mt=null,Br=!1,lt=null,wi=0,Un=0,us=null,Gr=-1,Kr=0;function de(){return F&6?G():Gr!==-1?Gr:Gr=G()}function gt(e){return e.mode&1?F&2&&re!==0?re&-re:gh.transition!==null?(Kr===0&&(Kr=Nc()),Kr):(e=B,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function Oe(e,t,n,r){if(50<Un)throw Un=0,us=null,Error(b(185));hr(e,n,r),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(zi|=n),Z===4&&st(e,re)),ye(e,r),n===1&&F===0&&!(t.mode&1)&&(gn=G()+500,Li&&bt()))}function ye(e,t){var n=e.callbackNode;gp(e,t);var r=ni(e,e===te?re:0);if(r===0)n!==null&&Io(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Io(n),t===1)e.tag===0?mh(Nl.bind(null,e)):Yc(Nl.bind(null,e)),dh(function(){!(F&6)&&bt()}),n=null;else{switch(Cc(r)){case 1:n=Rs;break;case 4:n=Sc;break;case 16:n=ti;break;case 536870912:n=bc;break;default:n=ti}n=Gu(n,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hu(e,t){if(Gr=-1,Kr=0,F&6)throw Error(b(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=ni(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var i=F;F|=2;var a=$u();(te!==e||re!==t)&&(qe=null,gn=G()+500,_t(e,t));do try{Bh();break}catch(l){Wu(e,l)}while(1);Ws(),vi.current=a,F=i,K!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(i=Da(e),i!==0&&(r=i,t=ds(e,i))),t===1)throw n=or,_t(e,0),st(e,r),ye(e,G()),n;if(t===6)st(e,r);else{if(i=e.current.alternate,!(r&30)&&!zh(i)&&(t=xi(e,r),t===2&&(a=Da(e),a!==0&&(r=a,t=ds(e,a))),t===1))throw n=or,_t(e,0),st(e,r),ye(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Rt(e,fe,qe);break;case 3:if(st(e,r),(r&130023424)===r&&(t=ro+500-G(),10<t)){if(ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Va(Rt.bind(null,e,fe,qe),t);break}Rt(e,fe,qe);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-De(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_h(r/1960))-r,10<r){e.timeoutHandle=Va(Rt.bind(null,e,fe,qe),r);break}Rt(e,fe,qe);break;case 5:Rt(e,fe,qe);break;default:throw Error(b(329))}}}return ye(e,G()),e.callbackNode===n?Hu.bind(null,e):null}function ds(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=xi(e,t),e!==2&&(t=fe,fe=n,t!==null&&ps(t)),e}function ps(e){fe===null?fe=e:fe.push.apply(fe,e)}function zh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!je(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~no,t&=~zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Nl(e){if(F&6)throw Error(b(327));ln();var t=ni(e,0);if(!(t&1))return ye(e,G()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=Da(e);r!==0&&(t=r,n=ds(e,r))}if(n===1)throw n=or,_t(e,0),st(e,t),ye(e,G()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,fe,qe),ye(e,G()),null}function io(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(gn=G()+500,Li&&bt())}}function jt(e){lt!==null&&lt.tag===0&&!(F&6)&&ln();var t=F;F|=1;var n=Re.transition,r=B;try{if(Re.transition=null,B=1,e)return e()}finally{B=r,Re.transition=n,F=t,!(F&6)&&bt()}}function ao(){we=tn.current,A(tn)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uh(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:fn(),A(ge),A(ce),Gs();break;case 5:Qs(r);break;case 4:fn();break;case 13:A(W);break;case 19:A(W);break;case 10:$s(r.type._context);break;case 22:case 23:ao()}n=n.return}if(te=e,K=e=vt(e.current,null),re=we=t,Z=0,or=null,no=zi=Ot=0,fe=$n=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}Mt=null}return e}function Wu(e,t){do{var n=K;try{if(Ws(),Vr.current=gi,mi){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mi=!1}if(Dt=0,ee=X=$=null,Hn=!1,ir=0,to.current=null,n===null||n.return===null){Z=1,or=t,K=null;break}e:{var a=e,s=n.return,l=n,o=t;if(t=re,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,m=l,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=dl(s);if(k!==null){k.flags&=-257,pl(k,s,l,a,t),k.mode&1&&ul(a,u,t),t=k,o=u;var S=t.updateQueue;if(S===null){var v=new Set;v.add(o),t.updateQueue=v}else S.add(o);break e}else{if(!(t&1)){ul(a,u,t),so();break e}o=Error(b(426))}}else if(H&&l.mode&1){var w=dl(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),pl(w,s,l,a,t),As(mn(o,l));break e}}a=o=mn(o,l),Z!==4&&(Z=2),$n===null?$n=[a]:$n.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Cu(a,o,t);il(a,p);break e;case 1:l=o;var d=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mt===null||!mt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Eu(a,l,t);il(a,x);break e}}a=a.return}while(a!==null)}Vu(n)}catch(C){t=C,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function $u(){var e=vi.current;return vi.current=gi,e===null?gi:e}function so(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Ot&268435455)&&!(zi&268435455)||st(te,re)}function xi(e,t){var n=F;F|=2;var r=$u();(te!==e||re!==t)&&(qe=null,_t(e,t));do try{Fh();break}catch(i){Wu(e,i)}while(1);if(Ws(),F=n,vi.current=r,K!==null)throw Error(b(261));return te=null,re=0,Z}function Fh(){for(;K!==null;)Uu(K)}function Bh(){for(;K!==null&&!op();)Uu(K)}function Uu(e){var t=Qu(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Vu(e):K=t,to.current=null}function Vu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rh(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=Ph(n,t,we),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function Rt(e,t,n){var r=B,i=Re.transition;try{Re.transition=null,B=1,Dh(e,t,n,r)}finally{Re.transition=i,B=r}return null}function Dh(e,t,n,r){do ln();while(lt!==null);if(F&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(vp(e,a),e===te&&(K=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,Gu(ti,function(){return ln(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Re.transition,Re.transition=null;var s=B;B=1;var l=F;F|=4,to.current=null,Mh(e,n),ju(n,e),rh($a),ri=!!Wa,$a=Wa=null,e.current=n,Ih(n),lp(),F=l,B=s,Re.transition=a}else e.current=n;if(Br&&(Br=!1,lt=e,wi=i),a=e.pendingLanes,a===0&&(mt=null),dp(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yi)throw yi=!1,e=cs,cs=null,e;return wi&1&&e.tag!==0&&ln(),a=e.pendingLanes,a&1?e===us?Un++:(Un=0,us=e):Un=0,bt(),null}function ln(){if(lt!==null){var e=Cc(wi),t=Re.transition,n=B;try{if(Re.transition=null,B=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,wi=0,F&6)throw Error(b(331));var i=F;for(F|=4,E=e.current;E!==null;){var a=E,s=a.child;if(E.flags&16){var l=a.deletions;if(l!==null){for(var o=0;o<l.length;o++){var u=l[o];for(E=u;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Wn(8,m,a)}var h=m.child;if(h!==null)h.return=m,E=h;else for(;E!==null;){m=E;var g=m.sibling,k=m.return;if(Bu(m),m===u){E=null;break}if(g!==null){g.return=k,E=g;break}E=k}}}var S=a.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}E=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,E=s;else e:for(;E!==null;){if(a=E,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wn(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,E=p;break e}E=a.return}}var d=e.current;for(E=d;E!==null;){s=E;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,E=f;else e:for(s=d;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_i(9,l)}}catch(C){V(l,l.return,C)}if(l===s){E=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,E=x;break e}E=l.return}}if(F=i,bt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{B=n,Re.transition=t}}return!1}function Cl(e,t,n){t=mn(n,t),t=Cu(e,t,1),e=ft(e,t,1),t=de(),e!==null&&(hr(e,1,t),ye(e,t))}function V(e,t,n){if(e.tag===3)Cl(e,e,n);else for(;t!==null;){if(t.tag===3){Cl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=mn(n,e),e=Eu(t,e,1),t=ft(t,e,1),e=de(),t!==null&&(hr(t,1,e),ye(t,e));break}}t=t.return}}function Oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-ro?_t(e,0):no|=n),ye(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=de();e=Je(e,t),e!==null&&(hr(e,t,n),ye(e,n))}function jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),qu(e,n)}var Qu;Qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Th(e,t,n);me=!!(e.flags&131072)}else me=!1,H&&t.flags&1048576&&Xc(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var i=dn(t,ce.current);on(t,n),i=Ys(null,t,r,e,i,n);var a=Xs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(a=!0,li(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vs(t),i.updater=Ii,t.stateNode=i,i._reactInternals=t,Za(t,r,e,n),t=ts(null,t,r,!0,a,n)):(t.tag=0,H&&a&&Os(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wh(r),e=ze(r,e),i){case 0:t=es(null,t,r,e,n);break e;case 1:t=ml(null,t,r,e,n);break e;case 11:t=hl(null,t,r,e,n);break e;case 14:t=fl(null,t,r,ze(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),es(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),ml(e,t,r,i,n);case 3:e:{if(Lu(t),e===null)throw Error(b(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ru(e,t),hi(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=mn(Error(b(423)),t),t=gl(e,t,r,n,i);break e}else if(r!==i){i=mn(Error(b(424)),t),t=gl(e,t,r,n,i);break e}else for(xe=ht(t.stateNode.containerInfo.firstChild),ke=t,H=!0,Be=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===i){t=et(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return iu(t),e===null&&Ka(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Ua(r,i)?s=null:a!==null&&Ua(r,a)&&(t.flags|=32),Ru(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&Ka(t),null;case 13:return Mu(e,t,n);case 4:return qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),hl(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,O(di,r._currentValue),r._currentValue=s,a!==null)if(je(a.value,s)){if(a.children===i.children&&!ge.current){t=et(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var o=l.firstContext;o!==null;){if(o.context===r){if(a.tag===1){o=Ye(-1,n&-n),o.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?o.next=o:(o.next=m.next,m.next=o),u.pending=o}}a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ya(a.return,n,t),l.lanes|=n;break}o=o.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(b(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ya(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=Le(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),fl(e,t,r,i,n);case 15:return Tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Qr(e,t),t.tag=1,ve(r)?(e=!0,li(t)):e=!1,on(t,n),Nu(t,r,i),Za(t,r,i,n),ts(null,t,r,!0,e,n);case 19:return Iu(e,t,n);case 22:return Pu(e,t,n)}throw Error(b(156,t.tag))};function Gu(e,t){return kc(e,t)}function Hh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Hh(e,t,n,r)}function oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wh(e){if(typeof e=="function")return oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===Ts)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")oo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Vt:return zt(n.children,i,a,t);case Cs:s=8,i|=8;break;case Sa:return e=Pe(12,n,t,i|2),e.elementType=Sa,e.lanes=a,e;case ba:return e=Pe(13,n,t,i),e.elementType=ba,e.lanes=a,e;case Na:return e=Pe(19,n,t,i),e.elementType=Na,e.lanes=a,e;case ic:return Fi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:s=10;break e;case rc:s=9;break e;case Es:s=11;break e;case Ts:s=14;break e;case rt:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function zt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=ic,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ga(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $h(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lo(e,t,n,r,i,a,s,l,o){return e=new $h(e,t,n,l,o),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(a),e}function Uh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ku(e){if(!e)return xt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(ve(n))return Kc(e,n,t)}return t}function Yu(e,t,n,r,i,a,s,l,o){return e=lo(n,r,!0,e,i,a,s,l,o),e.context=Ku(null),n=e.current,r=de(),i=gt(n),a=Ye(r,i),a.callback=t??null,ft(n,a,i),e.current.lanes=i,hr(e,i,r),ye(e,r),e}function Bi(e,t,n,r){var i=t.current,a=de(),s=gt(i);return n=Ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,s),e!==null&&(Oe(e,i,s,a),Ur(e,i,s)),s}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function El(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function co(e,t){El(e,t),(e=e.alternate)&&El(e,t)}function Vh(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function uo(e){this._internalRoot=e}Di.prototype.render=uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Bi(e,t,null,null)};Di.prototype.unmount=uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){Bi(null,e,null,null)}),t[Ze]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Lc(e)}};function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tl(){}function qh(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=ki(s);a.call(u)}}var s=Yu(t,r,e,0,null,!1,!1,"",Tl);return e._reactRootContainer=s,e[Ze]=s.current,Jn(e.nodeType===8?e.parentNode:e),jt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ki(o);l.call(u)}}var o=lo(e,0,!1,null,null,!1,!1,"",Tl);return e._reactRootContainer=o,e[Ze]=o.current,Jn(e.nodeType===8?e.parentNode:e),jt(function(){Bi(t,o,n,r)}),o}function ji(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var o=ki(s);l.call(o)}}Bi(t,s,e,i)}else s=qh(n,t,e,i,r);return ki(s)}Ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(Ls(t,n|1),ye(t,G()),!(F&6)&&(gn=G()+500,bt()))}break;case 13:jt(function(){var r=Je(e,1);if(r!==null){var i=de();Oe(r,e,1,i)}}),co(e,1)}};Ms=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=de();Oe(t,e,134217728,n)}co(e,134217728)}};Tc=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=de();Oe(n,e,t,r)}co(e,t)}};Pc=function(){return B};Rc=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};za=function(e,t,n){switch(t){case"input":if(Ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ri(r);if(!i)throw Error(b(90));sc(r),Ta(r,i)}}}break;case"textarea":lc(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};mc=io;gc=jt;var Qh={usingClientEntryPoint:!1,Events:[mr,Kt,Ri,hc,fc,io]},Mn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gh={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Vh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{Ci=Dr.inject(Gh),Ue=Dr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!po(t))throw Error(b(200));return Uh(e,t,null,n)};be.createRoot=function(e,t){if(!po(e))throw Error(b(299));var n=!1,r="",i=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lo(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Jn(e.nodeType===8?e.parentNode:e),new uo(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=wc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return jt(e)};be.hydrate=function(e,t,n){if(!Oi(t))throw Error(b(200));return ji(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!po(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yu(t,null,e,1,n??null,i,!1,a,s),e[Ze]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)};be.render=function(e,t,n){if(!Oi(t))throw Error(b(200));return ji(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(b(40));return e._reactRootContainer?(jt(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};be.unstable_batchedUpdates=io;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return ji(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zl.exports=be;var Kh=Zl.exports,Pl=Kh;xa.createRoot=Pl.createRoot,xa.hydrateRoot=Pl.hydrateRoot;var Ju=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Ju||{}),va={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(Ju);var ho={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(ho).reduce((e,[t,n])=>(e[n]=t,e),{});var lr="data-rh",Yh=e=>Array.isArray(e)?e.join(""):e,Xh=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},ya=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Xh(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Zh=["noscript","script","style"],hs=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ed=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Jh=(e,t,n,r)=>{const i=ed(n),a=Yh(t);return i?`<${e} ${lr}="true" ${i}>${hs(a,r)}</${e}>`:`<${e} ${lr}="true">${hs(a,r)}</${e}>`},ef=(e,t,n=!0)=>t.reduce((r,i)=>{const a=i,s=Object.keys(a).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,m)=>{const h=typeof a[m]>"u"?m:`${m}="${hs(a[m],n)}"`;return u?`${u} ${h}`:h},""),l=a.innerHTML||a.cssText||"",o=Zh.indexOf(e)===-1;return`${r}<${e} ${lr}="true" ${s}${o?"/>":`>${l}</${e}>`}`},""),td=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=ho[r];return n[i||r]=e[r],n},t),tf=(e,t,n)=>{const r={key:t,[lr]:!0},i=td(n,r);return[yn.createElement("title",i,t)]},Xr=(e,t)=>t.map((n,r)=>{const i={key:r,[lr]:!0};return Object.keys(n).forEach(a=>{const l=ho[a]||a;if(l==="innerHTML"||l==="cssText"){const o=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:o}}else i[l]=n[a]}),yn.createElement(e,i)}),Ce=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>tf(e,t.title,t.titleAttributes),toString:()=>Jh(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>td(t),toString:()=>ed(t)};default:return{toComponent:()=>Xr(e,t),toString:()=>ef(e,t,n)}}},nf=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=ya(e,va.meta),a=ya(t,va.link),s=ya(n,va.script);return{priorityMethods:{toComponent:()=>[...Xr("meta",i.priority),...Xr("link",a.priority),...Xr("script",s.priority)],toString:()=>`${Ce("meta",i.priority,r)} ${Ce("link",a.priority,r)} ${Ce("script",s.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:s.default}},rf=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:s,title:l="",titleAttributes:o,prioritizeSeoTags:u}=e;let{linkTags:m,metaTags:h,scriptTags:g}=e,k={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:k,linkTags:m,metaTags:h,scriptTags:g}=nf(e)),{priority:k,base:Ce("base",t,r),bodyAttributes:Ce("bodyAttributes",n,r),htmlAttributes:Ce("htmlAttributes",i,r),link:Ce("link",m,r),meta:Ce("meta",h,r),noscript:Ce("noscript",a,r),script:Ce("script",g,r),style:Ce("style",s,r),title:Ce("title",{title:l,titleAttributes:o},r)}},af=rf,Or=[],nd=!!(typeof window<"u"&&window.document&&window.document.createElement),sf=class{constructor(e,t){Tt(this,"instances",[]);Tt(this,"canUseDOM",nd);Tt(this,"context");Tt(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Or:this.instances,add:e=>{(this.canUseDOM?Or:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Or:this.instances).indexOf(e);(this.canUseDOM?Or:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=af({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},of={},lf=yn.createContext(of),cn,cf=(cn=class extends N.Component{constructor(n){super(n);Tt(this,"helmetData");this.helmetData=new sf(this.props.context||{},cn.canUseDOM)}render(){return yn.createElement(lf.Provider,{value:this.helmetData.value},this.props.children)}},Tt(cn,"canUseDOM",nd),cn);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const Rl="popstate";function uf(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:l}=r.location;return fs("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Si(i)}return pf(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function df(){return Math.random().toString(36).substr(2,8)}function Ll(e,t){return{usr:e.state,key:e.key,idx:t}}function fs(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||df()})}function Si(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,l=ct.Pop,o=null,u=m();u==null&&(u=0,s.replaceState(cr({},s.state,{idx:u}),""));function m(){return(s.state||{idx:null}).idx}function h(){l=ct.Pop;let w=m(),p=w==null?null:w-u;u=w,o&&o({action:l,location:v.location,delta:p})}function g(w,p){l=ct.Push;let d=fs(v.location,w,p);n&&n(d,w),u=m()+1;let f=Ll(d,u),x=v.createHref(d);try{s.pushState(f,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(x)}a&&o&&o({action:l,location:v.location,delta:1})}function k(w,p){l=ct.Replace;let d=fs(v.location,w,p);n&&n(d,w),u=m();let f=Ll(d,u),x=v.createHref(d);s.replaceState(f,"",x),a&&o&&o({action:l,location:v.location,delta:0})}function S(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof w=="string"?w:Si(w);return d=d.replace(/ $/,"%20"),Y(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return l},get location(){return e(i,s)},listen(w){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(Rl,h),o=w,()=>{i.removeEventListener(Rl,h),o=null}},createHref(w){return t(i,w)},createURL:S,encodeLocation(w){let p=S(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:k,go(w){return s.go(w)}};return v}var Ml;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ml||(Ml={}));function hf(e,t,n){return n===void 0&&(n="/"),ff(e,t,n,!1)}function ff(e,t,n,r){let i=typeof t=="string"?kn(t):t,a=mo(i.pathname||"/",n);if(a==null)return null;let s=rd(e);mf(s);let l=null;for(let o=0;l==null&&o<s.length;++o){let u=Ef(a);l=Nf(s[o],u,r)}return l}function rd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,l)=>{let o={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};o.relativePath.startsWith("/")&&(Y(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let u=yt([r,o.relativePath]),m=n.concat(o);a.children&&a.children.length>0&&(Y(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rd(a.children,t,m,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Sf(u,a.index),routesMeta:m})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let o of id(a.path))i(a,s,o)}),t}function id(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=id(r.join("/")),l=[];return l.push(...s.map(o=>o===""?a:[a,o].join("/"))),i&&l.push(...s),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function mf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gf=/^:[\w-]+$/,vf=3,yf=2,wf=1,xf=10,kf=-2,Il=e=>e==="*";function Sf(e,t){let n=e.split("/"),r=n.length;return n.some(Il)&&(r+=kf),t&&(r+=yf),n.filter(i=>!Il(i)).reduce((i,a)=>i+(gf.test(a)?vf:a===""?wf:xf),r)}function bf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Nf(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a="/",s=[];for(let l=0;l<r.length;++l){let o=r[l],u=l===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",h=_l({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},m),g=o.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=_l({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},m)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:yt([a,h.pathname]),pathnameBase:Mf(yt([a,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(a=yt([a,h.pathnameBase]))}return s}function _l(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cf(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:k}=m;if(g==="*"){let v=l[h]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const S=l[h];return k&&!S?u[g]=void 0:u[g]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function Cf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,o)=>(r.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ef(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Tf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pf=e=>Tf.test(e);function Rf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kn(e):e,a;if(n)if(Pf(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),fo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=zl(n.substring(1),"/"):a=zl(n,t)}else a=t;return{pathname:a,search:If(r),hash:_f(i)}}function zl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ad(e,t){let n=Lf(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kn(e):(i=cr({},e),Y(!i.pathname||!i.pathname.includes("?"),wa("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),wa("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),wa("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let o=Rf(i,l),u=s&&s!=="/"&&s.endsWith("/"),m=(a||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(u||m)&&(o.pathname+="/"),o}const yt=e=>e.join("/").replace(/\/\/+/g,"/"),Mf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),If=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_f=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const od=["post","put","patch","delete"];new Set(od);const Ff=["get",...od];new Set(Ff);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}const go=N.createContext(null),Bf=N.createContext(null),Wt=N.createContext(null),Ai=N.createContext(null),Nt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),ld=N.createContext(null);function Df(e,t){let{relative:n}=t===void 0?{}:t;vr()||Y(!1);let{basename:r,navigator:i}=N.useContext(Wt),{hash:a,pathname:s,search:l}=ud(e,{relative:n}),o=s;return r!=="/"&&(o=s==="/"?r:yt([r,s])),i.createHref({pathname:o,search:l,hash:a})}function vr(){return N.useContext(Ai)!=null}function Hi(){return vr()||Y(!1),N.useContext(Ai).location}function cd(e){N.useContext(Wt).static||N.useLayoutEffect(e)}function Of(){let{isDataRoute:e}=N.useContext(Nt);return e?Xf():jf()}function jf(){vr()||Y(!1);let e=N.useContext(go),{basename:t,future:n,navigator:r}=N.useContext(Wt),{matches:i}=N.useContext(Nt),{pathname:a}=Hi(),s=JSON.stringify(ad(i,n.v7_relativeSplatPath)),l=N.useRef(!1);return cd(()=>{l.current=!0}),N.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=sd(u,JSON.parse(s),a,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:yt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,s,a,e])}function vo(){let{matches:e}=N.useContext(Nt),t=e[e.length-1];return t?t.params:{}}function ud(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Wt),{matches:i}=N.useContext(Nt),{pathname:a}=Hi(),s=JSON.stringify(ad(i,r.v7_relativeSplatPath));return N.useMemo(()=>sd(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function Af(e,t){return Hf(e,t)}function Hf(e,t,n,r){vr()||Y(!1);let{navigator:i}=N.useContext(Wt),{matches:a}=N.useContext(Nt),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let u=Hi(),m;if(t){var h;let w=typeof t=="string"?kn(t):t;o==="/"||(h=w.pathname)!=null&&h.startsWith(o)||Y(!1),m=w}else m=u;let g=m.pathname||"/",k=g;if(o!=="/"){let w=o.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=hf(e,{pathname:k}),v=qf(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:yt([o,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:yt([o,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&v?N.createElement(Ai.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ct.Pop}},v):v}function Wf(){let e=Yf(),t=zf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,a)}const $f=N.createElement(Wf,null);class Uf extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Nt.Provider,{value:this.props.routeContext},N.createElement(ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vf(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(go);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Nt.Provider,{value:t},r)}function qf(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);m>=0||Y(!1),s=s.slice(0,Math.min(s.length,m+1))}let o=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:k}=n,S=h.route.loader&&g[h.route.id]===void 0&&(!k||k[h.route.id]===void 0);if(h.route.lazy||S){o=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((m,h,g)=>{let k,S=!1,v=null,w=null;n&&(k=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||$f,o&&(u<0&&g===0?(Zf("route-fallback",!1),S=!0,w=null):u===g&&(S=!0,w=h.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),d=()=>{let f;return k?f=v:S?f=w:h.route.Component?f=N.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,N.createElement(Vf,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?N.createElement(Uf,{location:n.location,revalidation:n.revalidation,component:v,error:k,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var dd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dd||{}),bi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bi||{});function Qf(e){let t=N.useContext(go);return t||Y(!1),t}function Gf(e){let t=N.useContext(Bf);return t||Y(!1),t}function Kf(e){let t=N.useContext(Nt);return t||Y(!1),t}function pd(e){let t=Kf(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Yf(){var e;let t=N.useContext(ld),n=Gf(bi.UseRouteError),r=pd(bi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Xf(){let{router:e}=Qf(dd.UseNavigateStable),t=pd(bi.UseNavigateStable),n=N.useRef(!1);return cd(()=>{n.current=!0}),N.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ur({fromRouteId:t},a)))},[e,t])}const Fl={};function Zf(e,t,n){!t&&!Fl[e]&&(Fl[e]=!0)}function Jf(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function He(e){Y(!1)}function em(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ct.Pop,navigator:a,static:s=!1,future:l}=e;vr()&&Y(!1);let o=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:o,navigator:a,static:s,future:ur({v7_relativeSplatPath:!1},l)}),[o,l,a,s]);typeof r=="string"&&(r=kn(r));let{pathname:m="/",search:h="",hash:g="",state:k=null,key:S="default"}=r,v=N.useMemo(()=>{let w=mo(m,o);return w==null?null:{location:{pathname:w,search:h,hash:g,state:k,key:S},navigationType:i}},[o,m,h,g,k,S,i]);return v==null?null:N.createElement(Wt.Provider,{value:u},N.createElement(Ai.Provider,{children:n,value:v}))}function tm(e){let{children:t,location:n}=e;return Af(ms(t),n)}new Promise(()=>{});function ms(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let a=[...t,i];if(r.type===N.Fragment){n.push.apply(n,ms(r.props.children,a));return}r.type!==He&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ms(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}function nm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function im(e,t){return e.button===0&&(!t||t==="_self")&&!rm(e)}const am=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sm="6";try{window.__reactRouterVersion=sm}catch{}const om="startTransition",Bl=Dd[om];function lm(e){let{basename:t,children:n,future:r,window:i}=e,a=N.useRef();a.current==null&&(a.current=uf({window:i,v5Compat:!0}));let s=a.current,[l,o]=N.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},m=N.useCallback(h=>{u&&Bl?Bl(()=>o(h)):o(h)},[o,u]);return N.useLayoutEffect(()=>s.listen(m),[s,m]),N.useEffect(()=>Jf(r),[r]),N.createElement(em,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:l,target:o,to:u,preventScrollReset:m,viewTransition:h}=t,g=nm(t,am),{basename:k}=N.useContext(Wt),S,v=!1;if(typeof u=="string"&&um.test(u)&&(S=u,cm))try{let f=new URL(window.location.href),x=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=mo(x.pathname,k);x.origin===f.origin&&C!=null?u=C+x.search+x.hash:v=!0}catch{}let w=Df(u,{relative:i}),p=dm(u,{replace:s,state:l,target:o,preventScrollReset:m,relative:i,viewTransition:h});function d(f){r&&r(f),f.defaultPrevented||p(f)}return N.createElement("a",gs({},g,{href:S||w,onClick:v||a?r:d,ref:n,target:o}))});var Dl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var Ol;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ol||(Ol={}));function dm(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,o=Of(),u=Hi(),m=ud(e,{relative:s});return N.useCallback(h=>{if(im(h,n)){h.preventDefault();let g=r!==void 0?r:Si(u)===Si(m);o(e,{replace:g,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[u,o,m,r,i,n,e,a,s,l])}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:l="",children:o,...u},m)=>N.createElement("svg",{ref:m,...pm,width:i,height:i,stroke:r,strokeWidth:s?Number(a)*24/Number(i):a,className:["lucide",`lucide-${hm(e)}`,l].join(" "),...u},[...t.map(([h,g])=>N.createElement(h,g)),...Array.isArray(o)?o:[o]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=ae("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ae("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ae("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ae("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=ae("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=ae("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ae("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ae("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dr="https://healthindex-backend.fly.dev",gd=async(e=null)=>{try{const t=e?`${dr}/api/products?category=${e}`:`${dr}/api/products`,n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch products");const r=await n.json();return{products:Array.isArray(r)?r:[],count:r.length}}catch(t){return console.error("Failed to fetch products:",t),{products:[],count:0}}},Cm=async e=>{try{const t=await fetch(`${dr}/api/products/${e}`);if(!t.ok)throw new Error("Product not found");return await t.json()}catch(t){throw console.error("Failed to fetch product:",t),t}},Em=async()=>{try{const e=await fetch(`${dr}/api/categories`);if(!e.ok)throw new Error("Failed to fetch categories");return await e.json()}catch(e){return console.error("Failed to fetch categories:",e),[]}},Tm=async e=>{try{const t=await fetch(`${dr}/api/search/${e}`);if(!t.ok)throw new Error("Search failed");return await t.json()}catch(t){return console.error("Price search failed:",t),null}},Pm=()=>{const[e,t]=N.useState([]),[n,r]=N.useState(!0);N.useEffect(()=>{i()},[]);const i=async()=>{try{const{products:o}=await gd(),m=["sauna","hyperbaric","cryotherapy","red-light","compression","pemf"].map(h=>o.find(g=>g.category===h)).filter(Boolean).slice(0,6);t(m)}catch(o){console.error("Failed to fetch products:",o)}finally{r(!1)}},a=o=>{if(!(o!=null&&o.prices))return null;const u=Object.entries(o.prices).filter(([m,h])=>h.inStock&&h.price).map(([m,h])=>({retailer:m,...h}));return u.length===0?null:u.reduce((m,h)=>h.price<m.price?h:m,u[0])},s=o=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(o||0);return y("div",{className:"min-h-screen bg-[#0a0a0a]",children:[y("section",{className:"max-w-[900px] mx-auto px-6 py-16 text-center",children:[y("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm text-[#a3a3a3] mb-8",children:[c(hd,{className:"w-4 h-4 text-emerald-400"}),"Medical-grade wellness equipment"]}),y("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] mb-4",children:["Wellness ",c("span",{className:"text-emerald-400",children:"Intelligence"})]}),c("p",{className:"text-xl text-emerald-400/80 mb-4",children:"Medical Device Tracking"}),c("p",{className:"text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-10 leading-relaxed",children:"Compare prices on saunas, hyperbaric chambers, cryotherapy, and biohacking equipment across certified retailers."}),y("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[y(D,{to:"/products",className:"inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors",children:[c(fd,{className:"w-5 h-5"}),"Browse Equipment"]}),y(D,{to:"/alerts",className:"inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141414] border border-[#262626] text-[#fafafa] rounded-xl font-medium hover:bg-[#1a1a1a] transition-colors",children:[c(yo,{className:"w-5 h-5"}),"Set Price Alert"]})]}),y("div",{className:"flex items-center justify-center gap-16",children:[y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"11+"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Products"})]}),y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"6"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Categories"})]}),y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"24/7"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Monitoring"})]})]})]}),y("section",{className:"max-w-[1200px] mx-auto px-6 py-12",children:[c("h2",{className:"text-2xl font-semibold text-[#fafafa] mb-8",children:"Categories"}),c("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:[{name:"Saunas",path:"/products/sauna",icon:"🔥",count:"Infrared & Traditional"},{name:"Hyperbaric",path:"/products/hyperbaric",icon:"🫧",count:"Oxygen Therapy"},{name:"Cryotherapy",path:"/products/cryotherapy",icon:"❄️",count:"Cold Therapy"},{name:"Red Light",path:"/products/red-light",icon:"💡",count:"Light Therapy"},{name:"Compression",path:"/products/compression",icon:"🦵",count:"Recovery Boots"},{name:"PEMF",path:"/products/pemf",icon:"⚡",count:"EMF Therapy"}].map(o=>y(D,{to:o.path,className:"group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all text-center",children:[c("div",{className:"text-4xl mb-3",children:o.icon}),c("h3",{className:"font-medium text-[#fafafa] group-hover:text-emerald-400 transition-colors",children:o.name}),c("p",{className:"text-sm text-[#a3a3a3] mt-1",children:o.count})]},o.path))})]}),y("section",{className:"max-w-[1200px] mx-auto px-6 py-12",children:[y("div",{className:"flex items-center justify-between mb-8",children:[c("h2",{className:"text-2xl font-semibold text-[#fafafa]",children:"Featured Equipment"}),y(D,{to:"/products",className:"text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1",children:["View All ",c(fm,{className:"w-4 h-4"})]})]}),n?c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((o,u)=>y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 animate-pulse",children:[c("div",{className:"h-4 bg-[#262626] rounded w-16 mb-3"}),c("div",{className:"h-6 bg-[#262626] rounded w-full mb-2"}),c("div",{className:"h-8 bg-[#262626] rounded w-24"})]},u))}):c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(o=>{const u=a(o);return y(D,{to:`/product/${o.id}`,className:"group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all",children:[c("div",{className:"h-48 overflow-hidden bg-[#0a0a0a]",children:c("img",{src:o.image||"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",alt:o.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),y("div",{className:"p-6",children:[y("div",{className:"flex items-start justify-between mb-3",children:[c("span",{className:"inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400",children:o.category}),c("span",{className:"text-sm text-[#a3a3a3] capitalize",children:u==null?void 0:u.retailer})]}),c("h3",{className:"text-xl font-semibold text-[#fafafa] mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2",children:o.name}),o.specs&&c("p",{className:"text-[#a3a3a3] text-sm mb-3",children:Object.values(o.specs).slice(0,2).join(" • ")}),c("div",{className:"flex items-end justify-between",children:y("div",{children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:"Best Price"}),c("p",{className:"text-2xl font-bold text-[#fafafa]",children:s(u==null?void 0:u.price)})]})})]})]},o.id)})})]})]})},Al=()=>{const{category:e}=vo(),[t,n]=N.useState([]),[r,i]=N.useState([]),[a,s]=N.useState(!0),[l,o]=N.useState(e||"All");N.useEffect(()=>{u(),m()},[]),N.useEffect(()=>{e&&o(e)},[e]);const u=async()=>{const v=await Em();i(v)},m=async()=>{s(!0);try{const{products:v}=await gd();n(Array.isArray(v)?v:[])}catch(v){console.error("Failed to fetch products:",v)}s(!1)},h=v=>{if(!(v!=null&&v.prices))return null;const w=Object.entries(v.prices).filter(([p,d])=>d.inStock&&d.price).map(([p,d])=>({retailer:p,...d}));return w.length===0?null:w.reduce((p,d)=>d.price<p.price?d:p,w[0])},g=v=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(v||0),k=l==="All"?t:t.filter(v=>v.category===l),S={sauna:"Saunas",hyperbaric:"Hyperbaric Chambers",cryotherapy:"Cryotherapy","red-light":"Red Light Therapy",compression:"Compression Systems",pemf:"PEMF Devices"};return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[1200px] mx-auto px-6 py-8",children:[y("div",{className:"flex items-center gap-2 text-sm text-[#a3a3a3] mb-6",children:[c(D,{to:"/",className:"hover:text-emerald-400",children:"Home"}),c(jl,{className:"w-4 h-4"}),c(D,{to:"/products",className:"hover:text-emerald-400",children:"Products"}),l!=="All"&&y(Ud,{children:[c(jl,{className:"w-4 h-4"}),c("span",{className:"text-[#fafafa]",children:S[l]||l})]})]}),c("h1",{className:"text-3xl md:text-4xl font-bold text-[#fafafa] mb-8",children:l==="All"?"All Products":S[l]||l}),y("div",{className:"flex flex-wrap items-center gap-2 mb-8",children:[c(xm,{className:"w-4 h-4 text-[#a3a3a3] mr-2"}),c("button",{onClick:()=>o("All"),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${l==="All"?"bg-emerald-500 text-white":"bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]"}`,children:"All"}),r.map(v=>c("button",{onClick:()=>o(v),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${l===v?"bg-emerald-500 text-white":"bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]"}`,children:S[v]||v},v))]}),a?c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((v,w)=>y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 animate-pulse",children:[c("div",{className:"h-4 bg-[#262626] rounded w-16 mb-3"}),c("div",{className:"h-6 bg-[#262626] rounded w-full mb-2"}),c("div",{className:"h-8 bg-[#262626] rounded w-24"})]},w))}):c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:k.map(v=>{const w=h(v),p=v.prices?Object.values(v.prices):[],d=p.some(C=>C.inStock&&C.price),f=p.filter(C=>C.inStock&&C.price).length,x=d?f===1?"limited":"in-stock":"out";return y("div",{className:"group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all flex flex-col",children:[c(D,{to:`/product/${v.id}`,className:"block",children:y("div",{className:"h-48 overflow-hidden bg-[#0a0a0a] relative",children:[c("img",{src:v.image||"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",alt:v.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),c("div",{className:`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold ${x==="out"?"bg-red-500/90 text-white":x==="limited"?"bg-orange-500/90 text-white":"bg-emerald-500/90 text-white"}`,children:x==="out"?"OUT OF STOCK":x==="limited"?"LIMITED":"IN STOCK"})]})}),y("div",{className:"p-6 flex flex-col flex-1",children:[y("div",{className:"flex items-start justify-between mb-3",children:[c("span",{className:"inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400",children:v.category}),c("span",{className:"text-xs text-[#a3a3a3] capitalize",children:v.brand})]}),c(D,{to:`/product/${v.id}`,children:c("h3",{className:"text-xl font-semibold text-[#fafafa] mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2",children:v.name})}),v.specs&&c("div",{className:"flex flex-wrap gap-2 mb-4",children:Object.entries(v.specs).slice(0,3).map(([C,P])=>c("span",{className:"text-xs px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-[#a3a3a3]",children:P},C))}),y("div",{className:"mt-auto",children:[y("div",{className:"flex items-end justify-between mb-4",children:[y("div",{children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:"Best Price"}),c("p",{className:"text-2xl font-bold text-[#fafafa]",children:g(w==null?void 0:w.price)})]}),(w==null?void 0:w.price)&&y("span",{className:"text-sm text-emerald-400",children:["from ",w.retailer]})]}),w!=null&&w.url?c("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full py-3 bg-emerald-500 text-white text-center text-sm font-medium rounded-xl hover:bg-emerald-600 transition-colors",onClick:C=>C.stopPropagation(),children:"View Deal →"}):c(D,{to:`/product/${v.id}`,className:"block w-full py-3 bg-[#262626] text-[#a3a3a3] text-center text-sm font-medium rounded-xl hover:bg-[#333] transition-colors",children:"View Details"})]})]})]},v.id)})}),!a&&k.length===0&&c("div",{className:"text-center py-16",children:c("p",{className:"text-[#a3a3a3]",children:"No products found in this category."})})]})})},Rm=()=>{const{id:e}=vo(),[t,n]=N.useState(null),[r,i]=N.useState(!0),[a,s]=N.useState(null),[l,o]=N.useState(!1);N.useEffect(()=>{u()},[e]);const u=async()=>{try{i(!0);const w=await Cm(e);n(w)}catch(w){console.error("Failed to fetch product:",w)}finally{i(!1)}},m=async()=>{o(!0);try{const w=await Tm(e);s(w)}catch(w){console.error("Price search failed:",w)}finally{o(!1)}},h=w=>w!=null&&w.prices?Object.entries(w.prices).filter(([p,d])=>d.price).map(([p,d])=>({retailer:p,...d})).sort((p,d)=>(p.price||1/0)-(d.price||1/0)):[],g=w=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(w||0),k={sauna:"Sauna",hyperbaric:"Hyperbaric Chamber",cryotherapy:"Cryotherapy Device","red-light":"Red Light Therapy",compression:"Compression System",pemf:"PEMF Device"};if(r)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:c("div",{className:"animate-pulse text-emerald-400",children:"Loading..."})});if(!t)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:c("div",{className:"text-[#a3a3a3]",children:"Product not found"})});const S=h(t),v=S[0];return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[1200px] mx-auto px-6 py-8",children:[y("div",{className:"flex items-center gap-2 text-sm text-[#a3a3a3] mb-6",children:[c(D,{to:"/",className:"hover:text-emerald-400",children:"Home"}),c("span",{children:"/"}),c(D,{to:"/products",className:"hover:text-emerald-400",children:"Products"}),c("span",{children:"/"}),c(D,{to:`/products/${t.category}`,className:"hover:text-emerald-400",children:k[t.category]||t.category})]}),y(D,{to:"/products",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-6 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Products"]}),y("div",{className:"mb-8",children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:k[t.category]||t.category}),c("h1",{className:"text-3xl md:text-4xl font-bold text-[#fafafa] mb-2",children:t.name}),c("p",{className:"text-[#a3a3a3]",children:t.brand})]}),y("div",{className:"grid lg:grid-cols-3 gap-8",children:[y("div",{className:"lg:col-span-2 space-y-6",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa] mb-4",children:"Specifications"}),c("div",{className:"grid grid-cols-2 gap-4",children:t.specs&&Object.entries(t.specs).map(([w,p])=>y("div",{className:"bg-[#0a0a0a] border border-[#262626] rounded-lg p-4",children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:w}),c("p",{className:"text-[#fafafa] font-medium",children:p})]},w))})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa] mb-4",children:"Price Comparison"}),c("div",{className:"space-y-3",children:S.map((w,p)=>y("div",{className:`flex items-center justify-between p-4 rounded-xl border ${p===0?"bg-emerald-500/10 border-emerald-500/30":"bg-[#0a0a0a] border-[#262626]"}`,children:[y("div",{className:"flex items-center gap-3",children:[c("span",{className:"text-[#fafafa] font-medium capitalize",children:w.retailer}),p===0&&c("span",{className:"px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full",children:"Best Price"}),w.inStock?c("span",{className:"text-xs text-emerald-400",children:"In Stock"}):c("span",{className:"text-xs text-[#a3a3a3]",children:"Out of Stock"})]}),y("div",{className:"flex items-center gap-4",children:[c("span",{className:"text-xl font-bold text-[#fafafa]",children:g(w.price)}),w.url&&y("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1.5 bg-[#3b82f6] text-white text-sm rounded-lg hover:bg-[#2563eb] transition-colors",children:["View ",c(ym,{className:"w-3 h-3"})]})]})]},w.retailer))})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[y("div",{className:"flex items-center justify-between mb-4",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa]",children:"Live Price Search"}),y("button",{onClick:m,disabled:l,className:"flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50",children:[c(fd,{className:"w-4 h-4"}),l?"Searching...":"Search Prices"]})]}),(a==null?void 0:a.results)&&c("div",{className:"space-y-3",children:a.results.slice(0,5).map((w,p)=>c("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 bg-[#0a0a0a] border border-[#262626] rounded-lg hover:border-emerald-500/50 transition-colors",children:y("div",{className:"flex items-start justify-between",children:[y("div",{children:[c("h4",{className:"text-[#fafafa] font-medium line-clamp-1",children:w.title}),c("p",{className:"text-sm text-[#a3a3a3] line-clamp-2 mt-1",children:w.description})]}),w.price&&c("span",{className:"text-emerald-400 font-bold whitespace-nowrap ml-4",children:g(w.price)})]})},p))}),!a&&!l&&c("p",{className:"text-[#a3a3a3] text-sm",children:'Click "Search Prices" to find current prices across the web using Brave Search.'})]})]}),c("div",{className:"space-y-4",children:y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 sticky top-24",children:[y("div",{className:"text-center mb-6",children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-2",children:"Best Price"}),c("p",{className:"text-4xl font-bold text-[#fafafa]",children:g(v==null?void 0:v.price)}),y("p",{className:"text-sm text-emerald-400 mt-1 capitalize",children:["at ",v==null?void 0:v.retailer]})]}),(v==null?void 0:v.url)&&c("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full py-4 bg-emerald-500 text-white text-center font-medium rounded-xl hover:bg-emerald-600 transition-colors mb-3",children:"View Deal"}),y("button",{className:"flex items-center justify-center gap-2 w-full py-4 bg-[#141414] border border-[#262626] text-[#fafafa] font-medium rounded-xl hover:bg-[#1a1a1a] transition-colors",children:[c(yo,{className:"w-5 h-5"}),"Set Price Alert"]})]})})]})]})})},Lm=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(md,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"Privacy Policy"})]}),y("div",{className:"prose prose-invert max-w-none",children:[c("p",{className:"text-[#a3a3a3] mb-6",children:"Last updated: February 24, 2026"}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Overview"}),c("p",{className:"text-[#a3a3a3] mb-4",children:'HealthIndex ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.'})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Information We Collect"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[y("li",{children:[c("strong",{children:"Usage Data:"})," We collect anonymous usage statistics to improve our service."]}),y("li",{children:[c("strong",{children:"Cookies:"})," We use cookies to enhance your browsing experience and analyze site traffic."]}),y("li",{children:[c("strong",{children:"Price Alerts:"})," If you sign up for price alerts, we collect your email address solely for notification purposes."]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"How We Use Your Information"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[c("li",{children:"To provide and maintain our price tracking service"}),c("li",{children:"To notify you of price drops (if you opt in)"}),c("li",{children:"To analyze usage patterns and improve our website"}),c("li",{children:"To detect and prevent technical issues"})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Third-Party Services"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"We use the following third-party services:"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[y("li",{children:[c("strong",{children:"Brave Search API:"})," For live price comparisons"]}),y("li",{children:[c("strong",{children:"Vercel:"})," For website hosting"]}),y("li",{children:[c("strong",{children:"Fly.io:"})," For backend services"]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Affiliate Disclosure"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex participates in affiliate marketing programs. This means we may earn commissions on purchases made through our links to retailer sites. This does not affect the price you pay."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Your Rights"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"You have the right to:"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[c("li",{children:"Access the personal data we hold about you"}),c("li",{children:"Request correction or deletion of your data"}),c("li",{children:"Opt out of price alert notifications at any time"}),c("li",{children:"Disable cookies through your browser settings"})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact Us"}),c("p",{className:"text-[#a3a3a3]",children:"If you have any questions about this Privacy Policy, please contact us at privacy@healthindex.app"})]})]})]})}),Mm=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(wm,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"Terms of Service"})]}),y("div",{className:"prose prose-invert max-w-none",children:[c("p",{className:"text-[#a3a3a3] mb-6",children:"Last updated: February 24, 2026"}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Agreement to Terms"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"By accessing or using HealthIndex, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Use of Service"}),c("p",{className:"text-[#a3a3a3] mb-4",children:'HealthIndex provides price comparison and tracking for medical wellness devices. Our service is provided "as is" for informational purposes only.'}),c("p",{className:"text-[#a3a3a3] mb-4",children:"You agree to use our service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Price Accuracy"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"While we strive to provide accurate and up-to-date pricing information, we cannot guarantee the accuracy of all prices displayed. Prices are subject to change without notice. Always verify the final price on the retailer's website before making a purchase."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Affiliate Links"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex contains affiliate links. When you click on these links and make a purchase, we may receive a commission. This comes at no additional cost to you and helps support our service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Intellectual Property"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"All content on HealthIndex, including text, graphics, logos, and software, is the property of HealthIndex or its content suppliers and is protected by copyright and other intellectual property laws."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Disclaimer"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex is not a medical advice service. The products listed are wellness devices and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Limitation of Liability"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"In no event shall HealthIndex be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Changes to Terms"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact"}),c("p",{className:"text-[#a3a3a3]",children:"For questions about these Terms, please contact us at legal@healthindex.app"})]})]})]})}),Im=[{id:"best-red-light-panels-2026",title:"Best Red Light Therapy Panels of 2026: Ranked & Reviewed",category:"Buying Guide",date:"Mar 3, 2026"},{id:"theragun-vs-compression-boots",title:"Theragun vs. Compression Boots: Which Recovery Tool Is Worth It?",category:"Education",date:"Mar 3, 2026"},{id:"science-of-cold-exposure",title:"The Science of Cold Exposure: What Happens to Your Body",category:"Education",date:"Mar 3, 2026"},{id:"red-light-muscle-recovery",title:"Red Light Therapy for Muscle Recovery: Does It Work?",category:"Education",date:"Mar 3, 2026"},{id:"lymphatic-system-recovery-tech",title:"How the Lymphatic System Works (And Why Recovery Tech Targets It)",category:"Education",date:"Mar 3, 2026"},{id:"cryotherapy-chamber-buying-guide",title:"Cryotherapy Chambers: A Buyer's Guide",category:"Buying Guide",date:"Feb 27, 2026"},{id:"pemf-mat-buying-guide",title:"PEMF Mat Buying Guide",category:"Buying Guide",date:"Feb 27, 2026"},{id:"choose-right-red-light-device",title:"How to Choose the Right Red Light Device",category:"Buying Guide",date:"Feb 26, 2026"},{id:"red-light-vs-infrared-sauna",title:"Red Light vs Infrared Saunas",category:"Education",date:"Feb 26, 2026"},{id:"2026-wellness-trends",title:"2026 Wellness Tech Trends",category:"Trends",date:"Feb 26, 2026"},{id:"compression-therapy-buying-guide",title:"Compression Therapy Systems",category:"Buying Guide",date:"Feb 28, 2026"}],_m=()=>y("div",{style:{padding:"40px 20px",background:"#0a0a0a",minHeight:"100vh"},children:[c(D,{to:"/",style:{color:"#a3a3a3",textDecoration:"none",display:"inline-block",marginBottom:"20px"},children:"← Back"}),c("h1",{style:{color:"#fafafa",fontSize:"2.5rem",marginBottom:"10px"},children:"HealthIndex Blog"}),c("p",{style:{color:"#a3a3a3",marginBottom:"40px"},children:"Expert guides for medical wellness devices."}),c("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px"},children:Im.map(e=>y(D,{to:`/blog/${e.id}`,style:{background:"#141414",border:"1px solid #262626",borderRadius:"12px",padding:"20px",textDecoration:"none",display:"block"},children:[c("span",{style:{background:"rgba(16, 185, 129, 0.2)",color:"#10b981",padding:"4px 12px",borderRadius:"20px",fontSize:"12px"},children:e.category}),c("h2",{style:{color:"#fafafa",fontSize:"1.2rem",marginTop:"12px"},children:e.title}),c("p",{style:{color:"#737373",fontSize:"14px",marginTop:"8px"},children:e.date})]},e.id))})]}),zm={"best-red-light-panels-2026":{id:"best-red-light-panels-2026",title:"Best Red Light Therapy Panels of 2026: Ranked & Reviewed",excerpt:"The red light therapy panel market has matured. Here are the top full-body panels worth considering, ranked by irradiance performance, value, and build quality.",date:"March 3, 2026",readTime:"12 min read",category:"Buying Guide",content:`
      <p class="intro">
        The red light therapy panel market has matured significantly. More brands, better specs, and — critically — more independent testing data to separate the genuinely effective devices from the overhyped ones. Here are the top full-body panels worth considering in 2026, ranked by irradiance performance, value, and build quality.
      </p>

      <section class="category-section">
        <h2>What We're Evaluating</h2>
        <p>Rankings are based on four criteria:</p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Irradiance at Treatment Distance</h4>
            <p>The most important therapeutic variable — how much light actually reaches your tissue</p>
          </div>
          <div class="benefit-card">
            <h4>Wavelength Quality</h4>
            <p>660nm and 850nm coverage — the gold standard wavelengths</p>
          </div>
          <div class="benefit-card">
            <h4>Build Quality & Warranty</h4>
            <p>LED lifespan, heat management, and manufacturer support</p>
          </div>
          <div class="benefit-card">
            <h4>Overall Value</h4>
            <p>Price-to-performance ratio for the features delivered</p>
          </div>
        </div>
        <p><strong>All panels listed deliver both red and near-infrared wavelengths.</strong></p>
      </section>

      <section class="category-section">
        <h2>1. Hooga HG1500 — Best Full-Body Value</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> ~$899 | <strong>Wavelengths:</strong> 660nm + 850nm | <strong>Irradiance:</strong> ~115 mW/cm² at 6"</p>
        </div>
        <p>The HG1500 has become the benchmark for value in full-body red light therapy. It delivers professional-grade irradiance at a price point that undercuts most of its direct competitors by hundreds of dollars. The panel covers the full body standing at treatment distance, runs cool with an effective cooling fan, and uses LEDs rated for 50,000+ hours of life.</p>
        <p>It's not the flashiest device on the market — no touchscreen, no app integration — but on the metric that matters most (how much therapeutic light reaches your tissue), it performs at the top of its price tier.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>Full-body daily use, recovery, anti-aging, home wellness setups</p>
        </div>
      </section>

      <section class="category-section">
        <h2>2. PlatinumLED BioMax 900 — Best Multi-Wavelength Panel</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> Premium | <strong>Wavelengths:</strong> 7 wavelengths (630–1060nm) | <strong>Irradiance:</strong> Top-tier, near-zero EMF at 4"</p>
        </div>
        <p>PlatinumLED's BioMax series represents the premium end of the consumer panel market, and the BioMax 900 justifies its price with clinical-grade irradiance output and the most comprehensive wavelength coverage available in a home device. Seven wavelengths spanning 630nm to 1060nm target different tissue depths and biological processes simultaneously — skin surface to deep tissue.</p>
        <p>The build quality is exceptional: rigid housing, excellent heat management, and consistently zero measurable EMF at treatment distance.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>Advanced users, clinical applications, maximum wavelength coverage</p>
        </div>
      </section>

      <section class="category-section">
        <h2>3. Mito Red MitoPRO 1500 — Best Balanced Performance</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> Mid-to-premium | <strong>Wavelengths:</strong> 630/660/830/850nm (Adapt 4.0: 8 wavelengths) | <strong>Irradiance:</strong> High, balanced output</p>
        </div>
        <p>Mito Red has built a strong reputation for evidence-focused design and transparent communication about specs. The MitoPRO 1500 covers four core wavelengths with balanced, high irradiance output, and the newer Adapt 4.0 model expands to eight wavelengths. The 2026 update adds a touchscreen interface and quieter cooling.</p>
        <p>What distinguishes Mito Red is their commitment to publishing actual irradiance data with third-party verification.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>Serious home users, science-minded buyers, balanced price-to-performance</p>
        </div>
      </section>

      <section class="category-section">
        <h2>4. Hooga HG1000 — Best Mid-Size Panel</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> ~$599 | <strong>Wavelengths:</strong> 660nm + 850nm | <strong>Irradiance:</strong> Optimal density</p>
        </div>
        <p>The HG1000 is essentially the HG1500's smaller sibling — half-body coverage, same LED quality and irradiance density, lower price. For users who don't need full-body simultaneous coverage (you can always do upper body and lower body in separate sessions), the HG1000 offers the same core Hooga performance at a more accessible price point.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>Budget-conscious buyers, targeted treatment, expandable setups</p>
        </div>
      </section>

      <section class="category-section">
        <h2>5. Joovv Solo 3.0 — Best App-Connected Panel</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> Premium | <strong>Wavelengths:</strong> 660nm + 850nm | <strong>Irradiance:</strong> Solid</p>
        </div>
        <p>Joovv pioneered the consumer red light therapy panel market, and the Solo 3.0 remains a quality, reliable option — particularly for users who want seamless app integration with the broader Hyperice/Joovv ecosystem. The app allows session logging, timer control, and ambient mode settings.</p>
        <p>Where Joovv falls slightly behind in 2026 is on the value equation. At its price point, irradiance output is competitive but not exceptional. The premium is largely for ecosystem integration and brand trust.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>App-forward users, Hyperice ecosystem owners, reliable daily driver</p>
        </div>
      </section>

      <section class="category-section">
        <h2>6. Hooga HG300 — Best Entry-Level Panel</h2>
        <div class="key-difference">
          <p><strong>Price:</strong> ~$199 | <strong>Wavelengths:</strong> 660nm + 850nm | <strong>Irradiance:</strong> ~73 mW/cm² at 6"</p>
        </div>
        <p>The HG300 is the most accessible entry point into quality red light therapy. It doesn't cover the full body in a single session — it's a targeted panel — but its irradiance is above the minimum therapeutic threshold, its 3-year warranty is excellent for the price, and it's a legitimate way to experience RLT without a major investment.</p>
        <div class="goal-card" style="margin-top: 1rem;">
          <h4>Best for:</h4>
          <p>Beginners, facial treatment, targeted use, budget entry point</p>
        </div>
      </section>

      <section class="comparison-section">
        <h2>The Buying Decision</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Panel</th>
                <th>Price</th>
                <th>Key Strength</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hooga HG1500</td>
                <td><span class="price-tag">~$899</span></td>
                <td>Best overall value, full-body</td>
              </tr>
              <tr>
                <td>PlatinumLED BioMax 900</td>
                <td><span class="price-tag">Premium</span></td>
                <td>Maximum wavelength coverage</td>
              </tr>
              <tr>
                <td>Mito Red MitoPRO 1500</td>
                <td><span class="price-tag">Mid-premium</span></td>
                <td>Balanced performance & transparency</td>
              </tr>
              <tr>
                <td>Hooga HG1000</td>
                <td><span class="price-tag">~$599</span></td>
                <td>Mid-size, expandable</td>
              </tr>
              <tr>
                <td>Joovv Solo 3.0</td>
                <td><span class="price-tag">Premium</span></td>
                <td>App integration</td>
              </tr>
              <tr>
                <td>Hooga HG300</td>
                <td><span class="price-tag">~$199</span></td>
                <td>Entry-level, targeted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>For most buyers starting a full-body red light therapy practice, the <strong>Hooga HG1500</strong> is the pragmatic choice — it delivers the therapeutic output you need at a price that doesn't require significant justification. Step up to PlatinumLED or Mito Red if you want broader wavelength coverage or are building a more clinical-grade home setup.</p>
      </div>

      <div class="cta-section">
        <h3>Compare Red Light Panels</h3>
        <p>Browse our curated selection of red light therapy devices with verified specs.</p>
        <Link to="/products/red-light" class="cta-button">Browse Red Light Therapy</Link>
      </div>
    `},"theragun-vs-compression-boots":{id:"theragun-vs-compression-boots",title:"Theragun vs. Compression Boots: Which Recovery Tool Is Worth It?",excerpt:"An honest comparison of percussion therapy vs pneumatic compression. Learn which tool wins for your training style — or whether you need both.",date:"March 3, 2026",readTime:"10 min read",category:"Education",content:`
      <p class="intro">
        Two tools dominate the athletic recovery space: percussion devices (led by Theragun) and pneumatic compression boots (led by Normatec). Both have genuine science behind them. Both have devoted users. And both are frequently purchased by people who end up using only one of them. Here's an honest comparison to help you figure out which deserves your money — or whether you need both.
      </p>

      <section class="category-section">
        <h2>How Each One Works</h2>
        <p><strong>Percussion therapy</strong> (Theragun and similar devices) uses a motor-driven head that delivers rapid, high-amplitude pulses into muscle tissue — typically at 1,750–2,400 percussions per minute. The mechanism is a combination of mechanical desensitization of pain receptors, increased local blood flow from the stimulation, and release of muscle tension through the golgi tendon organ response. Think of it as a very targeted, very intense form of deep tissue massage.</p>

        <p><strong>Compression boots</strong> use air-filled chambers that inflate sequentially from foot to thigh, mimicking the venous and lymphatic pumping action of muscle contraction. The mechanism is primarily circulatory — driving blood and lymph back toward the core, clearing metabolic waste, reducing edema, and restoring fluid balance in the limbs.</p>

        <div class="key-difference">
          <p><strong>Different tools, different biological targets.</strong></p>
        </div>
      </section>

      <section class="category-section">
        <h2>What the Research Shows</h2>
        <p>The evidence base for compression boots has grown meaningfully in recent years. A 2025 study on competitive handball players using daily Therabody JetBoots over five weeks found measurable reductions in fatigue markers and significant improvements in objective recovery metrics compared to a control group. Earlier trials comparing compression therapy to massage found equivalent outcomes for DOMS relief and limb volume reduction.</p>

        <p>Percussion therapy research is more limited in quantity and largely shows short-term benefits — reduced muscle soreness perception, improved range of motion pre-activity, and faster warm-up. The evidence for percussion as a recovery modality (rather than a pre-workout prep tool) is less robust than the marketing suggests.</p>
      </section>

      <section class="category-section">
        <h2>Head-to-Head: When Each One Wins</h2>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>🎯 Theragun wins for:</h4>
            <ul>
              <li><strong>Pre-workout activation</strong> — excellent for increasing local blood flow and reducing pre-exercise stiffness rapidly (5–10 minutes)</li>
              <li><strong>Targeted, localized muscle tightness</strong> — a specific knot in a calf, hip flexor tension, upper trapezius tightness</li>
              <li><strong>Portability and convenience</strong> — fits in a bag and can be used anywhere, any time</li>
              <li><strong>Immediate post-activity relief</strong> when you need something fast</li>
            </ul>
          </div>
          <div class="goal-card">
            <h4>🦵 Compression boots win for:</h4>
            <ul>
              <li><strong>Systemic lower-body recovery</strong> after high-volume training — long runs, cycling, heavy leg days</li>
              <li><strong>Lymphatic drainage and swelling reduction</strong> — particularly relevant after long travel, injury, or surgery</li>
              <li><strong>High training frequency periods</strong> where recovery is the limiting factor</li>
              <li><strong>Passive recovery</strong> — you can sit and do nothing while the boots do the work</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>The Honest Verdict</h2>

        <p>If you train primarily in endurance sports (running, cycling, triathlon) or do high-volume lower-body training, <strong>compression boots are the higher-value tool.</strong> The systemic circulatory and lymphatic benefits directly address the primary recovery challenge in those sports, and the evidence supporting compression therapy is stronger and more consistent.</p>

        <p>If you train across multiple modalities, deal with frequent localized muscle tension, or need a versatile tool that travels well, <strong>a percussion device earns its place</strong> — but it's better thought of as a warm-up and targeted relief tool than a comprehensive recovery system.</p>

        <div class="key-difference" style="border-color: #10b981; background: #064e3b;">
          <p><strong>If budget allows, use both</strong> — and sequence them intentionally. Percussion before training for activation and targeted warm-up, compression boots after training for systemic recovery. The two modalities are genuinely complementary, targeting different physiological systems without overlap or contraindication.</p>
        </div>
      </section>

      <section class="category-section">
        <h2>One Practical Note on Brand</h2>
        <p>In the percussion category, <strong>Theragun (by Therabody)</strong> is the benchmark — but competitors like Hypervolt offer comparable performance at lower price points. The premium is largely for build quality and the Therabody app ecosystem.</p>

        <p>In the compression category, <strong>Normatec (by Hyperice)</strong> is the benchmark for full-featured modular systems, while Rapid Reboot and Air Relax offer strong value in the mid-range.</p>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>Choose based on your training style, not the marketing hype. Endurance athletes should prioritize compression boots; cross-training athletes may get more value from percussion. And if you're serious about recovery, the combination of both — used at the right times — delivers the best results.</p>
      </div>

      <div class="cta-section">
        <h3>Compare Recovery Tools</h3>
        <p>Browse percussion devices and compression systems to find the right fit for your routine.</p>
        <Link to="/products" class="cta-button">Browse Recovery Equipment</Link>
      </div>
    `},"science-of-cold-exposure":{id:"science-of-cold-exposure",title:"The Science of Cold Exposure: What Happens to Your Body",excerpt:"Cold plunges and cryotherapy have gone mainstream. Here is a clear-eyed look at the physiology — what actually happens when you expose your body to extreme cold.",date:"March 3, 2026",readTime:"12 min read",category:"Education",content:`
      <p class="intro">
        Cold plunges, ice baths, cryotherapy chambers — cold exposure has gone from fringe biohacking to mainstream wellness practice in a few short years. The enthusiasm is justified, but the "why" is often oversimplified. Here's a clear-eyed look at the physiology — what actually happens when you expose your body to extreme cold, and why it produces the effects people report.
      </p>

      <section class="category-section">
        <h2>The Initial Response: Cold Shock</h2>
        <p>The moment cold water contacts your skin, your body initiates an immediate defensive cascade driven by the sympathetic nervous system.</p>

        <p>Peripheral blood vessels constrict sharply — <strong>vasoconstriction</strong> — redirecting blood from the skin and extremities toward the vital organs. Breathing becomes rapid and shallow involuntarily (the "gasp reflex"), heart rate and blood pressure spike, and the body's temperature-regulation systems kick into high gear.</p>

        <p>Simultaneously, the adrenal glands and the brain's locus coeruleus release a surge of <strong>norepinephrine</strong> — the neurotransmitter/hormone central to arousal, focus, and the stress response. Research shows a 2–5 fold increase in norepinephrine during cold exposure, with elevated levels persisting for hours afterward. This is the primary driver of the mood elevation, mental clarity, and energy that cold exposure users consistently report.</p>
      </section>

      <section class="category-section">
        <h2>Thermogenesis: Generating Heat from Within</h2>
        <p>As the body works to maintain core temperature, two heating mechanisms activate.</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>Shivering Thermogenesis</h4>
            <p>Involuntary muscle contractions generate heat rapidly, at significant metabolic cost. Brief cold exposure can boost metabolic rate by up to <strong>350%</strong> during active shivering.</p>
          </div>
          <div class="goal-card">
            <h4>Brown Adipose Tissue (BAT)</h4>
            <p>Brown fat burns calories to generate heat rather than storing them. Cold exposure activates BAT and, with repeated exposure, increases brown fat volume and activity.</p>
          </div>
        </div>

        <p>This has downstream effects on lipid metabolism, insulin sensitivity, and energy regulation that are the subject of active research.</p>
      </section>

      <section class="category-section">
        <h2>The Vascular Pump: Vasoconstriction and Vasodilation</h2>
        <p>After the initial cold shock response — and particularly during the rewarming phase — something important happens in the vascular system. The blood vessels that constricted during cold exposure dilate as the body rewarms, often to a greater degree than baseline.</p>

        <div class="key-difference">
          <p><strong>This oscillation between constriction and dilation creates a pumping effect</strong> in blood and lymphatic vessels — improved circulation, accelerated clearance of metabolic waste, and the characteristic post-cold "flush" that users describe as profound physical revitalization.</p>
        </div>

        <p>This vascular cycling effect is a significant part of why cold therapy is effective for recovery — it's not just about reducing inflammation directly, it's about driving flow through tissue that was previously stagnant.</p>
      </section>

      <section class="category-section">
        <h2>Anti-Inflammatory and Hormetic Effects</h2>
        <p>Cold exposure acts as a <strong>hormetic stressor</strong> — a mild physiological stress that, when applied in appropriate doses, triggers adaptive responses that leave the system more resilient.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Antioxidant Enhancement</h4>
            <p>Enhanced activity of antioxidant enzymes reduces oxidative damage</p>
          </div>
          <div class="benefit-card">
            <h4>Cytokine Suppression</h4>
            <p>Inflammatory cytokine production is suppressed during and after cold exposure</p>
          </div>
          <div class="benefit-card">
            <h4>Immune Support</h4>
            <p>Regular cold exposure has been associated with higher immunoglobulin levels and reduced rates of upper respiratory infection</p>
          </div>
        </div>

        <p>The hormetic framing is important: <strong>the dose matters.</strong> Brief, repeated cold exposure (1–3 minutes in 10–15°C water) produces adaptive benefits. Prolonged or extreme cold exposure can impair immune function and create genuine physiological risk.</p>
      </section>

      <section class="category-section">
        <h2>Cold Exposure After Exercise: A Nuance Worth Knowing</h2>
        <div class="key-difference" style="border-color: #f59e0b; background: #451a03;">
          <p><strong>Important finding:</strong> Cold water immersion immediately after strength training may blunt muscle adaptation over time. The same inflammatory response that cold exposure suppresses is also part of the signaling cascade that drives muscle hypertrophy and strength gains.</p>
        </div>

        <p>Several studies have shown that regular post-workout cold immersion reduces long-term muscle mass gains compared to passive recovery, particularly for resistance-trained athletes.</p>

        <p><strong>The practical implication:</strong> Cold exposure is excellent for recovery from endurance training and high-volume sessions where reducing inflammation and soreness is the priority. It should be used more cautiously after strength training sessions where hypertrophy is the goal — in those cases, delaying cold exposure by several hours or saving it for non-training days preserves the anabolic signal.</p>
      </section>

      <section class="category-section">
        <h2>Long-Term Adaptation</h2>
        <p>With regular cold exposure, the body adapts in meaningful ways:</p>

        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text">The acute cold shock response blunts — breathing stabilizes, heart rate spike decreases</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text">Brown fat stores increase in volume and metabolic activity</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">3</span>
            <span class="step-text">Resting blood pressure and heart rate tend to decrease over time</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">4</span>
            <span class="step-text">The norepinephrine response does NOT fully habituate — regular users continue to experience meaningful elevation</span>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Starting Safely</h2>
        <p>The gasp reflex and initial cardiovascular stress of cold exposure are real physiological events with real risks for certain populations — particularly those with cardiovascular conditions or uncontrolled hypertension.</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>Beginner Protocol</h4>
            <ul>
              <li>Start with cold showers (30–60 seconds)</li>
              <li>Work up to 1–3 minutes in 10–15°C water</li>
              <li>Never cold plunge alone if you're new</li>
            </ul>
          </div>
          <div class="goal-card">
            <h4>Intermediate/Advanced</h4>
            <ul>
              <li>2–4 minutes at -110°C in cryo chambers</li>
              <li>3–5 minutes in 5–10°C plunges</li>
              <li>Contrast therapy (hot/cold alternation)</li>
            </ul>
          </div>
        </div>

        <p>The benefits are real and increasingly well-documented. The key is applying <strong>the right dose</strong> — enough stress to trigger adaptation, not so much that it becomes a liability.</p>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>Cold exposure works through multiple mechanisms: norepinephrine-driven mental clarity, vascular cycling for circulation, hormetic anti-inflammatory effects, and metabolic activation through brown fat. The research supports the benefits — but also highlights important nuances around timing relative to strength training and the need for safe, progressive dosing.</p>
      </div>

      <div class="cta-section">
        <h3>Explore Cold Therapy Options</h3>
        <p>Compare cold plunges, cryotherapy chambers, and ice baths to find the right cold exposure method for your routine.</p>
        <Link to="/products/cryotherapy" class="cta-button">Browse Cryotherapy</Link>
      </div>
    `},"red-light-muscle-recovery":{id:"red-light-muscle-recovery",title:"Red Light Therapy for Muscle Recovery: Does It Work?",excerpt:"Red light therapy is everywhere in pro sports — but what does the 2025 research actually show? Here is the honest assessment of benefits, limitations, and optimal protocols.",date:"March 3, 2026",readTime:"10 min read",category:"Education",content:`
      <p class="intro">
        Red light therapy has become a fixture in professional sports recovery rooms and elite training facilities. But does the evidence actually support the hype — or is this another wellness trend running ahead of its science? The honest answer is somewhere in the middle, and worth understanding clearly.
      </p>

      <section class="category-section">
        <h2>The Mechanism</h2>
        <p>Red light therapy at wavelengths of 660–850nm penetrates several centimeters into muscle tissue, where it's absorbed by mitochondria and stimulates increased ATP production. This cellular energy boost, combined with:</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Reduced Oxidative Stress</h4>
            <p>Less cellular damage from free radicals</p>
          </div>
          <div class="benefit-card">
            <h4>Enhanced Nitric Oxide</h4>
            <p>Improved local blood flow</p>
          </div>
          <div class="benefit-card">
            <h4>Anti-Inflammatory Action</h4>
            <p>Downregulation of inflammatory cytokines</p>
          </div>
        </div>

        <p>...creates conditions that are genuinely favorable for muscle repair. The question isn't really whether the mechanism is real — it's well-established — but whether it's clinically significant enough to produce meaningful, measurable recovery improvements in real-world use.</p>
      </section>

      <section class="category-section">
        <h2>What the 2025 Research Shows</h2>
        <p>A 2025 meta-analysis examining professional soccer and volleyball players found clear sport-specific effects:</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>⚽ Soccer Players</h4>
            <p><strong>Significantly lower creatine kinase levels</strong> following RLT — creatine kinase being the primary blood marker of muscle breakdown and damage. Lower CK means less muscle trauma, or faster clearance of damage.</p>
          </div>
          <div class="goal-card">
            <h4>🏐 Volleyball Players</h4>
            <p><strong>Significant improvements in repetitions before fatigue</strong> — a measure of muscular endurance — when RLT was used as part of their recovery protocol.</p>
          </div>
        </div>

        <p>A separate 2025 systematic review found that <strong>pre-exercise photobiomodulation significantly reduced muscle soreness at 24 hours post-exercise</strong> and outperformed both neuromuscular electrical stimulation and intermittent pneumatic compression for soreness reduction.</p>

        <div class="key-difference">
          <p><strong>The headline number:</strong> Red light therapy can reduce DOMS by up to 50% when applied pre-exercise or within 2–4 hours post-exercise.</p>
        </div>
      </section>

      <section class="category-section">
        <h2>What It Doesn't Do</h2>
        <p>The same research is clear about RLT's limitations:</p>

        <div class="red-flags">
          <div class="flag-item">
            <div class="flag-number">1</div>
            <div class="flag-content">
              <h4>No Strength or Power Enhancement</h4>
              <p>RLT does not significantly improve maximum strength or power output. If you're hoping red light therapy will make you stronger, the evidence doesn't support that.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">2</div>
            <div class="flag-content">
              <h4>Not a Replacement for Fundamentals</h4>
              <p>It's not a replacement for sleep, nutrition, or adequate training load management. RLT works best as an additive layer in a comprehensive recovery protocol.</p>
            </div>
          </div>
        </div>

        <p>RLT reduces damage and accelerates repair — it doesn't enhance performance in the way that training stimulus does.</p>
      </section>

      <section class="category-section">
        <h2>Optimal Protocol for Muscle Recovery</h2>
        <p>The research points to clear practical guidelines:</p>

        <div class="specs-grid">
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">🌊</div>
              <div class="spec-title">
                <h4>Wavelengths</h4>
              </div>
            </div>
            <p><strong>810–850nm near-infrared</strong> penetrates deep enough to reach muscle tissue. 660nm red light works at the surface but is less effective for deeper muscle groups.</p>
            <div class="spec-range">
              <strong>Prioritize:</strong> NIR wavelengths for recovery
            </div>
          </div>
          
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">⏱️</div>
              <div class="spec-title">
                <h4>Timing</h4>
              </div>
            </div>
            <p><strong>Pre-exercise RLT</strong> (20–30 minutes before) reduces exercise-induced damage. <strong>Post-exercise</strong> (within 2–4 hours) accelerates repair.</p>
            <div class="spec-range">
              <strong>Both work;</strong> pre-exercise may have slight edge
            </div>
          </div>
          
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">⏳</div>
              <div class="spec-title">
                <h4>Session Duration</h4>
              </div>
            </div>
            <p><strong>10–20 minutes per body area</strong> is the standard clinical protocol. More isn't necessarily better — the photobiomodulation response has a dose ceiling.</p>
            <div class="spec-range">
              <strong>Don't exceed:</strong> 20 min per area
            </div>
          </div>
          
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">⚡</div>
              <div class="spec-title">
                <h4>Device Quality</h4>
              </div>
            </div>
            <p>Muscle tissue is 2–4cm below the skin. Meaningful NIR light requires verified irradiance of at least <strong>100 mW/cm²</strong> at treatment distance.</p>
            <div class="spec-range">
              <strong>Underpowered devices</strong> don't reach muscle tissue
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>The Honest Assessment</h2>
        <p>Red light therapy for muscle recovery is a <strong>legitimate, evidence-backed tool</strong> — not a miracle. The benefits are real:</p>

        <div class="goal-grid">
          <div class="goal-card" style="border-color: #10b981;">
            <h4>✅ Real Benefits</h4>
            <ul>
              <li>Meaningful reductions in soreness</li>
              <li>Measurable decreases in muscle damage markers</li>
              <li>Improvements in endurance recovery</li>
            </ul>
          </div>
          <div class="goal-card" style="border-color: #f59e0b;">
            <h4>⚠️ Limitations</h4>
            <ul>
              <li>No strength gains</li>
              <li>Device quality matters enormously</li>
              <li>Consistency is required</li>
            </ul>
          </div>
        </div>

        <p>For athletes training at moderate-to-high loads who are looking for every edge in their recovery toolkit, RLT is worth including. For casual exercisers, the benefit-to-cost ratio depends heavily on what you're already doing and where recovery is breaking down.</p>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>Red light therapy delivers on its recovery claims — but with important caveats. Choose NIR wavelengths, use adequate irradiance (100+ mW/cm²), time it right (pre or early post-exercise), and have realistic expectations. It's a recovery accelerator, not a performance enhancer.</p>
      </div>

      <div class="cta-section">
        <h3>Compare Red Light Devices</h3>
        <p>Browse panels and devices with verified specs for muscle recovery.</p>
        <Link to="/products/red-light" class="cta-button">Browse Red Light Therapy</Link>
      </div>
    `},"lymphatic-system-recovery-tech":{id:"lymphatic-system-recovery-tech",title:"How the Lymphatic System Works (And Why Recovery Tech Targets It)",excerpt:"The lymphatic system is the unsung infrastructure of recovery. Learn how compression, massage, heat, and cold all work by supporting this critical system.",date:"March 3, 2026",readTime:"10 min read",category:"Education",content:`
      <p class="intro">
        Most people have a rough understanding of the cardiovascular system — heart pumps blood, blood delivers oxygen, repeat. Far fewer understand the lymphatic system, despite the fact that it plays an equally critical role in keeping the body functioning. It's also the primary biological mechanism that recovery technologies like compression therapy, massage, and certain heat modalities are specifically designed to support.
      </p>

      <section class="category-section">
        <h2>What the Lymphatic System Actually Does</h2>
        <p>Think of the lymphatic system as the body's <strong>drainage and waste management network.</strong> Every day, roughly 20 liters of fluid leak out of your blood capillaries into the surrounding tissue. Your cardiovascular system only reabsorbs about 17 liters of that directly.</p>

        <div class="key-difference">
          <p><strong>The remaining 3 liters</strong> — along with cellular waste products, proteins, fats, bacteria, and immune cells — is collected by a separate network of vessels: the lymphatics.</p>
        </div>

        <p>Lymphatic capillaries are blind-ended tubes threaded through virtually every tissue in the body. They collect this excess interstitial fluid (now called lymph), move it through progressively larger vessels and lymph nodes — where it's filtered and immune cells are activated — and ultimately return it to the bloodstream via the subclavian veins near the collarbone.</p>

        <p>The result: fluid balance is maintained, metabolic waste is cleared, and immune surveillance is continuously active throughout the body.</p>
      </section>

      <section class="category-section">
        <h2>The Problem: The Lymphatic System Has No Pump</h2>
        <p>Here's what makes the lymphatic system different from the cardiovascular system — and why it matters for recovery. <strong>The heart pumps blood continuously. The lymphatic system has no equivalent central pump.</strong></p>

        <p>Instead, lymph moves through a combination of three mechanisms:</p>

        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text"><strong>Smooth muscle contraction</strong> in the walls of larger lymphatic vessels (responsible for about two-thirds of flow at rest)</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text"><strong>Skeletal muscle compression</strong> of vessels during movement</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">3</span>
            <span class="step-text"><strong>Pressure differentials</strong> created by breathing</span>
          </div>
        </div>

        <div class="key-difference" style="border-color: #f59e0b; background: #451a03;">
          <p><strong>This means lymphatic flow is highly dependent on physical movement.</strong> When you're sedentary — sitting at a desk, resting after injury, recovering from surgery — lymphatic flow slows dramatically. Fluid accumulates in tissue. Waste products linger. Inflammation persists longer than it needs to.</p>
        </div>
      </section>

      <section class="category-section">
        <h2>What Happens During and After Exercise</h2>
        <p>Intense exercise creates a significant lymphatic challenge:</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Metabolic Byproducts</h4>
            <p>Muscle breakdown produces lactate, creatine kinase, and inflammatory cytokines that need clearance</p>
          </div>
          <div class="benefit-card">
            <h4>Microtrauma Response</h4>
            <p>Damage to muscle fibers triggers fluid influx and immune activity</p>
          </div>
          <div class="benefit-card">
            <h4>Normal Repair Process</h4>
            <p>This is necessary for adaptation — but requires efficient waste removal</p>
          </div>
        </div>

        <p>But if lymphatic clearance is sluggish, fluid and cellular debris accumulates faster than it drains. The result is prolonged soreness, stiffness, swelling, and delayed recovery. <strong>The lymphatic system is, in a very real sense, the bottleneck of the recovery process.</strong></p>
      </section>

      <section class="category-section">
        <h2>Why Recovery Tech Targets the Lymphatics</h2>
        <p>Once you understand that lymphatic flow depends on physical compression of vessels, the rationale behind most recovery technologies becomes immediately clear.</p>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>🦵 Pneumatic Compression Boots</h4>
              <p>Directly replicate the mechanical pumping action of muscle contraction. Sequential inflation from foot to thigh creates a wave of pressure that physically propels lymph and venous blood toward the core — mimicking what walking and running do naturally, but more intensively.</p>
              <p class="brand-mention">This is why compression therapy is the gold standard for lymphedema management.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>💆 Massage & Manual Lymphatic Drainage</h4>
              <p>Work through the same mechanism — external pressure on tissue compresses lymphatic vessels and drives fluid movement. Professional lymphatic drainage uses techniques optimized for lymphatic anatomy.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>🔥 Infrared Heat</h4>
              <p>Dilates blood and lymphatic vessels, reducing resistance to flow and increasing the rate of fluid movement. Heat improves recovery not just through relaxation, but through genuine improvement in lymphatic clearance.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>❄️ Cold Therapy</h4>
              <p>Vasoconstriction during cold exposure is followed by vasodilation during rewarming, creating a pumping effect that drives fluid movement. This vascular cycling is why contrast therapy has long been used in athletic recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>What Happens When the Lymphatic System Is Compromised</h2>
        <p>Poor lymphatic function — whether from inactivity, injury, surgery, or disease — produces predictable consequences:</p>

        <div class="red-flags">
          <div class="flag-item">
            <div class="flag-number">1</div>
            <div class="flag-content">
              <h4>Chronic Swelling (Edema)</h4>
              <p>Fluid accumulation in limbs and tissue</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">2</div>
            <div class="flag-content">
              <h4>Persistent Inflammation</h4>
              <p>Waste products and immune cells linger in tissue</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">3</div>
            <div class="flag-content">
              <h4>Impaired Immunity</h4>
              <p>Reduced immune surveillance and response</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">4</div>
            <div class="flag-content">
              <h4>Slower Healing</h4>
              <p>Repair processes stall without efficient waste clearance</p>
            </div>
          </div>
        </div>

        <p>Lymphedema, the clinical condition caused by lymphatic insufficiency, results in significant quality-of-life burden and is notoriously difficult to treat once established.</p>

        <p>Even <strong>subclinical lymphatic sluggishness</strong> — the kind most sedentary people experience without formal diagnosis — contributes to chronic low-grade inflammation, fatigue, and reduced resilience to physical stress.</p>
      </section>

      <section class="category-section">
        <h2>Optimizing Lymphatic Function</h2>
        <p>Beyond recovery tech, several practices support healthy lymphatic flow:</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>Movement</h4>
            <p>Walking, rebounding, and low-impact exercise create the muscle contractions that drive lymphatic flow</p>
          </div>
          <div class="goal-card">
            <h4>Hydration</h4>
            <p>Adequate fluid intake keeps lymph thin and mobile — dehydration thickens lymph and slows flow</p>
          </div>
          <div class="goal-card">
            <h4>Deep Breathing</h4>
            <p>Diaphragmatic breathing creates pressure changes that draw lymph through the thoracic duct</p>
          </div>
          <div class="goal-card">
            <h4>Sleep Position</h4>
            <p>Elevating legs slightly can assist overnight lymphatic drainage</p>
          </div>
        </div>
      </section>

      <div class="final-rule">
        <h3>The Takeaway</h3>
        <p>The lymphatic system is the unsung infrastructure of recovery. It doesn't get the attention of the cardiovascular or nervous system, but without it functioning well, recovery stalls, inflammation persists, and immune function degrades. The most effective recovery technologies — compression therapy, massage, heat, cold, movement — work in large part because they support and amplify lymphatic function. Understanding that connection makes every recovery tool in your toolkit make more sense.</p>
      </div>

      <div class="cta-section">
        <h3>Support Your Lymphatic System</h3>
        <p>Explore compression boots, massage tools, and other recovery tech designed to optimize lymphatic flow.</p>
        <Link to="/products/compression" class="cta-button">Browse Recovery Tech</Link>
      </div>
    `},"cryotherapy-chamber-buying-guide":{id:"cryotherapy-chamber-buying-guide",title:"Cryotherapy Chambers: A Buyer's Guide",excerpt:"A cryotherapy chamber is not an impulse purchase. Learn the critical differences between device types, cooling technologies, and safety systems before investing.",date:"February 27, 2026",readTime:"12 min read",category:"Buying Guide",content:`
      <p class="intro">
        Whole-body cryotherapy has made the journey from professional sports recovery rooms to mainstream wellness studios — and increasingly, to high-end home setups. The appeal is straightforward: two to three minutes at extreme cold triggers a powerful physiological reset, flooding the body with endorphins, reducing systemic inflammation, and accelerating recovery in ways that are hard to replicate by other means.
      </p>

      <p>But buying a cryotherapy chamber is a significant decision. These are complex, high-cost pieces of equipment with real safety considerations. Whether you're outfitting a commercial wellness studio, a gym, or a serious home recovery space, here's what you need to know before you buy.</p>

      <section class="category-section">
        <h2>Cryosauna vs. Cryo Chamber: Know the Difference</h2>
        <p>The first decision is the device type — and these two are not the same thing.</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>Cryosauna (Cryocabin) 🧍</h4>
            <p><strong>Format:</strong> Single-person, upright<br>
            <strong>Head Position:</strong> Outside in ambient air<br>
            <strong>Min Temperature:</strong> -170°C<br>
            <strong>Best For:</strong> Studios, home use</p>
            <div class="recommendation">Most Practical</div>
          </div>
          <div class="goal-card">
            <h4>Cryo Chamber 👥</h4>
            <p><strong>Format:</strong> Walk-in room<br>
            <strong>Head Position:</strong> Fully enclosed<br>
            <strong>Min Temperature:</strong> -110°C to -140°C<br>
            <strong>Best For:</strong> High-traffic commercial</p>
          </div>
        </div>

        <p>For most buyers — whether a wellness studio, sports facility, or home user — <strong>a cryosauna is the more practical starting point</strong>. Cryo chambers are best suited for high-traffic commercial environments where throughput justifies the additional cost and space requirements.</p>
      </section>

      <section class="category-section">
        <h2>Electric vs. Nitrogen: The Most Important Choice You'll Make</h2>
        <p>How a unit generates its cold determines your operating costs, safety profile, session experience, and long-term maintenance burden. This is the most consequential spec decision in the buying process.</p>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>💧 Nitrogen-Based Systems</h4>
              <p><strong>Technology:</strong> Liquid nitrogen vaporization</p>
              <p><strong>Advantages:</strong></p>
              <ul>
                <li>Lowest temperatures (-170°C)</li>
                <li>Lower upfront cost</li>
                <li>Fast chamber cooling</li>
                <li>Compact footprint</li>
              </ul>
              <p><strong>Considerations:</strong></p>
              <ul>
                <li>Ongoing nitrogen supply costs</li>
                <li>Delivery logistics required</li>
                <li>Oxygen displacement risk in enclosed spaces</li>
                <li>Ventilation requirements</li>
              </ul>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>⚡ Electric Systems</h4>
              <p><strong>Technology:</strong> Refrigeration compressors</p>
              <p><strong>Advantages:</strong></p>
              <ul>
                <li>No nitrogen supply needed</li>
                <li>Predictable operating costs</li>
                <li>No asphyxiation risk</li>
                <li>Lower maintenance</li>
              </ul>
              <p><strong>Considerations:</strong></p>
              <ul>
                <li>Higher upfront cost</li>
                <li>Larger physical footprint</li>
                <li>Temperature ceiling (~-110°C)</li>
                <li>Longer initial cool-down</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="key-difference" style="border-color: #dc2626; background: #fef2f2;">
          <p><strong>Safety Critical:</strong> For enclosed cryo chambers, electric is the safer, lower-maintenance choice. For open-top cryosaunas, nitrogen is a proven, cost-effective option — provided the unit uses indirect nitrogen delivery and the space is properly ventilated.</p>
        </div>
      </section>

      <section class="category-section">
        <h2>Key Specs to Evaluate</h2>

        <div class="specs-grid">
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">🌡️</div>
              <div class="spec-title">
                <h4>Temperature Range and Uniformity</h4>
              </div>
            </div>
            <p>Target: -110°C to -130°C for whole-body sessions. More important than minimum temperature is <strong>uniformity</strong> — how evenly cold is distributed across the body.</p>
            <div class="spec-range">
              <strong>Look for:</strong> 360° airflow systems
            </div>
          </div>
          
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">⏱️</div>
              <div class="spec-title">
                <h4>Session Duration Control</h4>
              </div>
            </div>
            <p>Effective sessions run 2 to 4 minutes. Quality units offer precise, adjustable timers with automatic shut-off — a non-negotiable safety feature.</p>
            <div class="spec-range">
              <strong>Required:</strong> Remote emergency stop
            </div>
          </div>
          
          <div class="spec-card">
            <div class="spec-header">
              <div class="spec-icon">🎛️</div>
              <div class="spec-title">
                <h4>Control Interface</h4>
              </div>
            </div>
            <p>Operators should control temperature, duration, and intensity from an external panel — not just from inside the unit. Smart features like remote monitoring and session logging are increasingly standard.</p>
            <div class="spec-range">
              <strong>Look for:</strong> AI-assisted calibration
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Safety Systems: Non-Negotiable Features</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Emergency Stop</h4>
            <p>Accessible to both operator and user</p>
          </div>
          <div class="benefit-card">
            <h4>Oxygen Monitoring</h4>
            <p>Critical in enclosed chambers</p>
          </div>
          <div class="benefit-card">
            <h4>Auto Cutoff</h4>
            <p>Temperature threshold protection</p>
          </div>
          <div class="benefit-card">
            <h4>Interlock Systems</h4>
            <p>Prevents operation without attendant</p>
          </div>
          <div class="benefit-card">
            <h4>Certifications</h4>
            <p>CE, ISO, FDA registration</p>
          </div>
          <div class="benefit-card">
            <h4>Clear Protocols</h4>
            <p>Emergency procedures built-in</p>
          </div>
        </div>
        <p>Any reputable manufacturer will have detailed safety documentation. If they can't produce certifications on request, walk away.</p>
      </section>

      <section class="category-section">
        <h2>Commercial vs. Home Use: Different Criteria</h2>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>🏢 Commercial Buyers</h4>
            <ul>
              <li>Prioritize throughput capacity (20–30 sessions/day)</li>
              <li>Evaluate after-sales support and parts availability</li>
              <li>Confirm staff training is included</li>
              <li>Minimize downtime — it's expensive</li>
              <li>Response times for service calls matter</li>
            </ul>
          </div>
          <div class="goal-card">
            <h4>🏠 Home Buyers</h4>
            <ul>
              <li>Focus on footprint and installation requirements</li>
              <li>Nitrogen cryosauna is typically more practical</li>
              <li>Verify nitrogen supply logistics in your area</li>
              <li>Consider cold plunge tubs as alternative</li>
              <li>Operational simplicity is key</li>
            </ul>
          </div>
        </div>

        <p><strong>Alternative for home users:</strong> Cold plunge tubs offer meaningful overlap in benefits (vasoconstriction, endorphin release, inflammation reduction) at a fraction of the cost and complexity, though without the rapid skin temperature drop of gaseous cryo at -110°C.</p>
      </section>

      <section class="comparison-section">
        <h2>Cost Breakdown: What to Budget</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Price Range</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="price-tag">$5,000–$20,000</span> <span class="tier-label">Spot Treatment</span></td>
                <td>Localized Cryo Devices</td>
                <td>Not whole-body. Useful for clinical or targeted joint/limb recovery applications.</td>
              </tr>
              <tr>
                <td><span class="price-tag">$20,000–$40,000</span> <span class="tier-label">Starter</span></td>
                <td>Entry-Level Nitrogen Cryosaunas</td>
                <td>Suitable for smaller studios or home installation. Lower operating sophistication but functional for standard therapeutic use.</td>
              </tr>
              <tr>
                <td><span class="price-tag">$40,000–$70,000</span> <span class="tier-label">Standard</span></td>
                <td>Mid-Range Electric/Nitrogen Units</td>
                <td>Better build quality, advanced controls, higher throughput. The standard for professional wellness studios.</td>
              </tr>
              <tr>
                <td><span class="price-tag">$70,000–$100,000+</span> <span class="tier-label">Professional</span></td>
                <td>Premium Commercial Cryo Chambers</td>
                <td>Full-room electric chambers for multi-person sessions, advanced safety systems, commercial-grade durability.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Operating costs:</strong> Factor in liquid nitrogen supply (if applicable), electricity, annual maintenance contracts, and consumables. Electric systems typically run <strong>$500–$1,500/month</strong> at moderate commercial use; nitrogen costs vary by usage volume and local supply pricing.</p>
      </section>

      <section class="category-section">
        <h2>Questions to Ask Every Manufacturer</h2>
        <p>Before signing anything, get clear answers to these:</p>
        
        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text"><strong>What is the minimum temperature achieved at body level</strong> — not just at the cooling element?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text"><strong>How is temperature uniformity maintained</strong> throughout the session?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">3</span>
            <span class="step-text"><strong>What are the specific safety certifications</strong>, and can you provide the documentation?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">4</span>
            <span class="step-text"><strong>What does the warranty cover</strong>, and what's the typical response time for service calls?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">5</span>
            <span class="step-text"><strong>What training is provided</strong> for operators?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">6</span>
            <span class="step-text"><strong>What is the expected lifespan</strong> of the unit, and what are the major maintenance milestones?</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">7</span>
            <span class="step-text"><strong>Is nitrogen delivery or installation infrastructure required</strong>, and what are the costs?</span>
          </div>
        </div>
        
        <p style="text-align: center; margin-top: 2rem;"><strong>Any manufacturer unwilling or unable to answer these in detail is not a manufacturer you want to buy from.</strong></p>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>A cryotherapy chamber is not an impulse purchase — but for the right buyer, it's a transformative addition to a wellness or recovery operation. The technology is proven, the demand is growing, and the units available in 2026 are meaningfully better than what existed five years ago in terms of safety, control, and efficiency.</p>
        <p>Get the device type right for your use case, choose your cooling technology based on your environment and operational needs, and hold every manufacturer to the same high bar on safety certifications and after-sales support. Those three decisions will determine 90% of your long-term satisfaction with the investment.</p>
      </div>

      <div class="cta-section">
        <h3>Ready to Explore Cryotherapy?</h3>
        <p>Compare cryotherapy chambers and related recovery equipment to find the right fit for your needs.</p>
        <Link to="/products" class="cta-button">Browse Cryotherapy Equipment</Link>
      </div>
    `},"pemf-mat-buying-guide":{id:"pemf-mat-buying-guide",title:"PEMF Mat Buying Guide: What to Look for Before You Buy",excerpt:"Don't overpay for underpowered mats. Learn which specs matter—frequency range, coil configuration, waveform type—and avoid marketing traps.",date:"February 27, 2026",readTime:"15 min read",category:"Buying Guide",content:`
      <p class="intro">
        Pulsed Electromagnetic Field (PEMF) therapy is one of the fastest-growing segments in the home wellness market — and also one of the most confusing to shop for. The technology is legitimate, the research is solid, and the benefits are real. But the product landscape is cluttered with rebranded budget mats, exaggerated claims, and specs that sound impressive but mean very little.
      </p>

      <p>This guide cuts through the noise. Here's what actually matters when choosing a PEMF mat — and how to avoid wasting money on something that won't deliver.</p>

      <section class="category-section">
        <h2>What a PEMF Mat Actually Does</h2>
        
        <div class="key-difference">
          <p><strong>The Key Mechanism:</strong> PEMF mats generate <strong>low-frequency electromagnetic pulses</strong> that pass through the body, interacting with cells at a biological level. The key word is <strong>pulsed</strong> — it's the rhythmic on/off cycling that produces the therapeutic effect, not a static magnetic field.</p>
        </div>

        <p>This stimulates cellular repair, improves oxygen uptake, reduces inflammation, and supports the nervous system's natural recovery processes. A quality PEMF mat delivers these pulses consistently across your full body while you lie still — typically for 20 to 40 minutes per session. Done regularly, the cumulative effect on inflammation, sleep quality, pain, and recovery is where users report the most meaningful results.</p>
      </section>

      <section class="category-section">
        <h2>The Specs That Actually Matter</h2>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>📻 Frequency Range</h4>
              <p><strong>Measured in Hertz (Hz)</strong></p>
              <p>Determines the rate at which electromagnetic pulses cycle. Different frequencies produce different biological effects.</p>
              <p><strong>Target:</strong> 1–30 Hz for home use. This aligns with natural brainwave and cellular rhythms.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>⚡ Intensity</h4>
              <p><strong>Gauss (G) or microtesla (µT)</strong></p>
              <p>Measures the strength of the electromagnetic field reaching your tissue. More isn't always better.</p>
              <p><strong>Home use:</strong> 0.5–3 Gauss for wellness. <strong>Deep tissue:</strong> 10–50 Gauss for pain/recovery.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>〰️ Waveform Type</h4>
              <p><strong>Pulse Shape</strong></p>
              <p>The shape of the electromagnetic pulse affects how it interacts with tissue and your nervous system.</p>
              <p><strong>Sine wave:</strong> Gentle, for relaxation. <strong>Square wave:</strong> Stronger, for active recovery.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>🔘 Coil Configuration</h4>
              <p><strong>Copper vs. Ferrite</strong></p>
              <p>More coils, better spaced, means more even coverage across your body. Material matters for field strength.</p>
              <p><strong>Minimum:</strong> 6–8 copper coils. Avoid ferrite rods — they produce fraction of the field strength.</p>
            </div>
          </div>
        </div>

        <h3>Frequency Range: 1–30 Hz Is the Sweet Spot</h3>
        <p>Higher frequencies aren't necessarily better. What you want is adjustability within the proven range.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>1–8 Hz</h4>
            <p>Sleep & Relaxation</p>
          </div>
          <div class="benefit-card">
            <h4>8–15 Hz</h4>
            <p>Recovery & Inflammation</p>
          </div>
          <div class="benefit-card">
            <h4>15–30 Hz</h4>
            <p>Energy & Focus</p>
          </div>
        </div>

        <h3>Waveform Type: Sine vs. Square</h3>
        
        <div class="goal-grid">
          <div class="goal-card">
            <h4>Sine Wave</h4>
            <p>Smooth, rounded pulses that feel gentle. Best suited for relaxation, sleep, and parasympathetic nervous system support.</p>
            <div class="recommendation">Evening Use</div>
          </div>
          <div class="goal-card">
            <h4>Square Wave ⚡</h4>
            <p>Sharper, more abrupt pulses that deliver stronger cellular stimulus. Better for pre-workout or active recovery.</p>
            <div class="recommendation">Morning/Pre-Workout</div>
          </div>
        </div>
        
        <p style="text-align: center; margin-top: 1rem;"><strong>Ideal:</strong> A mat that offers both waveforms with the ability to switch between them.</p>
      </section>

      <section class="category-section">
        <h2>Useful Add-Ons vs. Marketing Extras</h2>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>🔥 Far-Infrared Heat (FIR) <span class="best-tag">Worth Having</span></h4>
              <p>Genuinely useful. Adds deep tissue warmth, circulation benefits, and relaxation — complementing PEMF rather than duplicating it. Worthwhile if you don't already own an infrared sauna.</p>
            </div>
          </div>
          <div class="device-type-card" style="opacity: 0.7;">
            <div class="device-info">
              <h4>💎 Gemstones <span class="steal-badge">Skip It</span></h4>
              <p>Amethyst, tourmaline, jade — mostly aesthetic. May contribute marginally to heat distribution, but the therapeutic benefit comes from PEMF coils and FIR elements, not crystals. Don't pay a premium for "negative ions."</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>🎛️ Preset Programs <span class="best-tag">Worth Having</span></h4>
              <p>Named presets (Sleep, Relax, Recovery, Energy) make it easier to match your session to your goal without manually dialing in frequency and intensity each time.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>🛡️ EMF Shielding <span class="best-tag">Worth Having</span></h4>
              <p>Quality mats include shielding to minimize stray EMF exposure outside the intended therapeutic field. Look for this as a listed feature.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Red Flags to Avoid</h2>
        
        <div class="red-flags">
          <div class="flag-item">
            <div class="flag-number">1</div>
            <div class="flag-content">
              <h4>No Coil Specs Listed</h4>
              <p>If a brand doesn't tell you how many coils their mat has, what they're made of, or what field strength they produce, that's a problem. Legitimate PEMF mats lead with this information.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">2</div>
            <div class="flag-content">
              <h4>"NASA Waveform" Claims</h4>
              <p>This phrase appears frequently in marketing copy and is largely unsubstantiated. NASA has researched PEMF, but there is no proprietary "NASA waveform" used in consumer mats.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">3</div>
            <div class="flag-content">
              <h4>Rebranded Import Mats</h4>
              <p>Mass-produced mats manufactured for $100–$200 and resold for $800–$2,000. Often use ferrite rods instead of copper coils and plastic "gemstones." Vague specs and lifestyle-heavy marketing are giveaways.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">4</div>
            <div class="flag-content">
              <h4>Exaggerated Benefit Claims</h4>
              <p>Anti-aging, weight loss, libido enhancement, allergy relief — if a PEMF mat claims to fix everything, trust nothing. Legitimate brands focus on recovery, sleep, inflammation, and pain relief.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">5</div>
            <div class="flag-content">
              <h4>Short Warranties</h4>
              <p>A mat built with quality components should come with a minimum 2–3 year warranty. Thirty-day return windows and 90-day warranties are red flags on products in this price range.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="comparison-section">
        <h2>Budget Guide: What to Expect at Each Price Point</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Price Range</th>
                <th>What to Expect</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="price-tag">Under $300</span> <span class="tier-label">Entry</span></td>
                <td>Basic PEMF functionality. Limited frequency control, lower field strength, simpler builds. Verify coil specs carefully.</td>
                <td>Curious beginners wanting to try PEMF before committing</td>
              </tr>
              <tr>
                <td><span class="price-tag">$300–$700</span> <span class="tier-label">Sweet Spot</span></td>
                <td>Quality floor for functional home mats. Healthy Wave and Grooni Earthing deliver dual waveforms, adjustable 1–30 Hz, copper coils, and FIR heat.</td>
                <td>Most users starting out</td>
              </tr>
              <tr>
                <td><span class="price-tag">$700–$1,500</span> <span class="tier-label">Mid-Range</span></td>
                <td>Meaningful upgrades: better coil arrays, higher intensity ceilings, premium materials, longer warranties. OMI and HealthyLine Inframat Pro sit here.</td>
                <td>Regular users targeting specific health outcomes</td>
              </tr>
              <tr>
                <td><span class="price-tag">$1,500+</span> <span class="tier-label">Professional</span></td>
                <td>Professional-grade intensity (up to 50 Gauss), advanced controls, AI-adaptive protocols, clinical build quality. CELLER8 and high-end HealthyLine.</td>
                <td>Serious athletes, chronic pain management, practitioners</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="category-section">
        <h2>How to Use a PEMF Mat Effectively</h2>
        
        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text"><strong>Start Low, Go Slow</strong> — Begin with lower frequencies (5–10 Hz) and lower intensity for your first few weeks. Some users experience a detox-like response early on — mild fatigue or headaches — which typically resolves as the body adapts.</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text"><strong>Consistency Beats Duration</strong> — Twenty minutes daily outperforms an occasional 60-minute session. PEMF works cumulatively — regular use builds on itself.</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">3</span>
            <span class="step-text"><strong>Time It Right: Morning or Evening</strong> — Higher frequencies (15–30 Hz) tend to be stimulating — better used in the morning or pre-workout. Lower frequencies (1–8 Hz) support sleep and recovery — best in the evening before bed.</span>
          </div>
        </div>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>PEMF therapy is one of the most underrated recovery tools available to home users — but only if the mat delivers what it claims. Prioritize <strong>frequency range</strong>, <strong>coil quality</strong>, <strong>intensity output</strong>, and <strong>waveform flexibility</strong>. Demand published specs and ignore brands that lead with crystals and lifestyle claims over engineering.</p>
        <p>Get those fundamentals right, and a PEMF mat can become one of the most consistently useful tools in your wellness routine.</p>
      </div>

      <div class="cta-section">
        <h3>Ready to Compare PEMF Mats?</h3>
        <p>Browse our curated selection of PEMF therapy mats with verified specs.</p>
        <Link to="/products" class="cta-button">Browse PEMF Mats</Link>
      </div>
    `},"choose-right-red-light-device":{id:"choose-right-red-light-device",title:"How to Choose the Right Red Light Therapy Device",excerpt:"Don't waste money on underpowered devices. Learn the only specs that matter—wavelengths, irradiance, EMF levels—and find the right RLT device for your goals.",date:"February 26, 2026",readTime:"12 min read",category:"Buying Guide",content:`
      <p class="intro">
        Red light therapy has gone from clinical obscurity to mainstream wellness staple — and the market has exploded to match. Walk into any online wellness store and you'll find hundreds of devices: panels, masks, handhelds, wraps, and everything in between, ranging from $50 to $5,000. They all claim to deliver the same benefits. <strong>Most of them don't.</strong>
      </p>

      <section class="category-section">
        <h2>Start With Your Goal</h2>
        <p>Before comparing specs, get clear on what you're trying to achieve. Red light therapy devices vary enormously in form factor, coverage area, and power output — and the right choice depends entirely on your primary use case.</p>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>Skin Rejuvenation</h4>
            <p>Collagen production, fine lines, acne, wound healing</p>
            <div class="recommendation">Face Mask or Compact Panel</div>
          </div>
          <div class="goal-card">
            <h4>Muscle Recovery</h4>
            <p>Joint pain, inflammation, deep tissue repair</p>
            <div class="recommendation">Large Panel (810-850nm)</div>
          </div>
          <div class="goal-card">
            <h4>Full-Body Protocol</h4>
            <p>Sleep, mood, thyroid, systemic recovery</p>
            <div class="recommendation">Full-Body or Modular Setup</div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>The Only Specs That Actually Matter</h2>
        
        <div class="spec-box">
          <h3>Wavelengths: 660nm and 850nm Are the Gold Standard</h3>
          <p>Decades of research have concentrated on two specific wavelengths. These are the wavelengths with the strongest evidence base for photobiomodulation.</p>
          
          <div class="wavelength-visual">
            <div class="wave-block">
              <span class="wave-nm">660nm</span>
              <div class="wave-type">Visible Red</div>
              <div class="wave-benefit">Surface tissue, Skin health</div>
            </div>
            <div class="wave-block">
              <span class="wave-nm">850nm</span>
              <div class="wave-type">Near-Infrared</div>
              <div class="wave-benefit">Deep penetration, Muscle & joint</div>
            </div>
          </div>
        </div>

        <h3>Irradiance: The Number Most Brands Hide</h3>
        <p>Irradiance — measured in milliwatts per square centimeter (mW/cm2) — is the single most important specification. It tells you how much therapeutic light energy is actually reaching your tissue at a given distance.</p>

        <div class="irradiance-meter">
          <div class="meter-labels">
            <span>0</span>
            <span>50</span>
            <span>100+ (Optimal)</span>
            <span>200+</span>
          </div>
          <div class="meter">
            <div class="meter-fill"></div>
            <div class="marker insufficient"></div>
            <div class="marker optimal"></div>
          </div>
          <div class="meter-legend">
            <div><span class="dot warning"></span> <strong>20-50 mW/cm2:</strong> Insufficient</div>
            <div><span class="dot success"></span> <strong>100-200+ mW/cm2:</strong> Clinical-grade</div>
          </div>
        </div>

        <h3>EMF Levels and Flicker</h3>
        <p>Quality devices are engineered to minimize EMF at the user's treatment distance — most drop to near zero by 6 inches. Cheap drivers in low-quality panels can cause rapid, invisible flickering that may cause eye strain and headaches.</p>
      </section>

      <section class="category-section">
        <h2>Device Types: Which Form Factor Is Right for You?</h2>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>Full-Body Panels <span class="best-tag">Most Versatile</span></h4>
              <p>The most cost-effective option for serious users. Floor-standing or wall-mounted panels cover large surface areas in a single session — ideal for recovery protocols, sleep improvement, and whole-body cellular support.</p>
              <p class="brand-mention">Top picks: PlatinumLED BioMax, Mito Red MitoPRO, Joovv Solo 3.0</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>Targeted/Handheld Devices</h4>
              <p>Compact, portable devices for specific body areas — a sore knee, shoulder, or lower back. Lower irradiance than full panels but convenient for on-the-go use.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>Face Masks</h4>
              <p>Purpose-built for facial skin treatment, delivering 660nm light hands-free with consistent coverage. Popular for anti-aging and acne.</p>
              <p class="brand-mention">Credible brands: CurrentBody, Omnilux</p>
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Red Flags to Avoid</h2>
        
        <div class="red-flags">
          <div class="flag-item">
            <div class="flag-number">1</div>
            <div class="flag-content">
              <h4>"Medical Grade" Claims Without Specifics</h4>
              <p>"Medical grade" has no regulated definition. What matters is FDA registration or actual FDA clearance for specific claims.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">2</div>
            <div class="flag-content">
              <h4>Wattage Without Irradiance</h4>
              <p>Total wattage tells you electricity consumption, not therapeutic light delivery. Brands leading with wattage are hiding something.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">3</div>
            <div class="flag-content">
              <h4>Irradiance Measured at the Lens</h4>
              <p>Impressive surface readings that drop 50-70% at 6 inches. Always look for treatment distance measurements.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">4</div>
            <div class="flag-content">
              <h4>Short Warranties</h4>
              <p>A 30-day warranty on a $400+ device signals poor build quality. Look for 2-3 years minimum.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">5</div>
            <div class="flag-content">
              <h4>Gimmick Wavelengths</h4>
              <p>Green, yellow, or cyan LEDs alongside red and NIR prioritize aesthetics over efficacy. Stick to proven wavelengths.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="comparison-section">
        <h2>Budget Guide</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Price Range</th>
                <th>What to Expect</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="price-tag">Under $200</span></td>
                <td>Entry-level panels. Can be effective for basic skin or localized use, but verify irradiance carefully.</td>
                <td>Facial or spot treatment</td>
              </tr>
              <tr>
                <td><span class="price-tag">$200-$500</span> <span class="tier-label">Sweet Spot</span></td>
                <td>Quality home panels from brands like Hooga and entry-level Mito Red. Solid irradiance, dual wavelengths.</td>
                <td>Most users starting out</td>
              </tr>
              <tr>
                <td><span class="price-tag">$500-$1,000</span></td>
                <td>Mid-range full panels and modular systems. Noticeably better irradiance and coverage area.</td>
                <td>Serious home users</td>
              </tr>
              <tr>
                <td><span class="price-tag">$1,000+</span> <span class="tier-label">Premium</span></td>
                <td>Premium full-body systems. 150-290 mW/cm2 irradiance, built to last a decade.</td>
                <td>Comprehensive home wellness</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="final-rule">
        <h3>One Final Rule</h3>
        <p>Buy from a brand that publishes its irradiance data at treatment distance, with third-party verification. That single filter removes most low-quality options and points you toward devices that will actually deliver results.</p>
      </div>

      <div class="cta-section">
        <h3>Ready to Compare Devices?</h3>
        <p>Browse our curated selection of red light therapy devices with verified specs.</p>
        <Link to="/products/red-light" class="cta-button">Browse Red Light Devices</Link>
      </div>
    `},"red-light-vs-infrared-sauna":{id:"red-light-vs-infrared-sauna",title:"Red Light Therapy vs. Infrared Saunas: What's the Difference?",excerpt:"Red light therapy and infrared saunas are fundamentally different. Learn which modality targets your cells versus your whole body, and how to choose the right one for your goals.",date:"February 26, 2026",readTime:"8 min read",category:"Education",content:`
      <p class="intro">
        Walk into any wellness studio in 2026 and you'll likely find both: a sleek red light panel glowing in one corner, an infrared sauna cabin tucked into another. They look different, feel different, and target your body in fundamentally different ways.
      </p>

      <section class="category-section">
        <h2>The Core Difference: Light vs. Heat</h2>
        
        <div class="key-difference">
          <p><strong>The simplest way to understand the distinction is this:</strong> red light therapy is a light treatment, and infrared sauna is a heat treatment.</p>
        </div>

        <p><strong>Red light therapy (RLT)</strong> uses specific wavelengths of light — typically 660nm (visible red) and 850nm (near-infrared) — to trigger a biological response inside your cells. Critically, it produces no meaningful heat. You sit or stand in front of a panel at room temperature and the light penetrates your skin to interact directly with your mitochondria.</p>

        <p><strong>An infrared sauna</strong>, by contrast, is defined by heat. Infrared wavelengths are absorbed by the body and converted into warmth. Your core temperature rises, you sweat heavily, and your heart rate increases. The infrared light is the delivery mechanism; the therapeutic outcome is the heat response.</p>
      </section>

      <section class="category-section">
        <h2>How Red Light Therapy Works</h2>
        
        <p>Red light therapy operates through a process called <strong>photobiomodulation (PBM)</strong>. The specific wavelengths penetrate skin and are absorbed by cytochrome c oxidase, a key enzyme in the mitochondrial energy chain. This stimulates increased production of ATP — the fuel your cells run on — and triggers a cascade of downstream effects.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Skin Health</h4>
            <p>Collagen stimulation, reduced fine lines, acne improvement, wound healing</p>
          </div>
          <div class="benefit-card">
            <h4>Muscle Recovery</h4>
            <p>Reduced soreness and faster repair post-exercise</p>
          </div>
          <div class="benefit-card">
            <h4>Joint & Pain Relief</h4>
            <p>Localized inflammation reduction</p>
          </div>
          <div class="benefit-card">
            <h4>Sleep & Mood</h4>
            <p>Circadian rhythm support and neurological benefits</p>
          </div>
        </div>

        <p>Sessions are short — typically 10 to 20 minutes — and can be done daily. There's no heat, no sweat, no recovery time.</p>
      </section>

      <section class="category-section">
        <h2>How Infrared Saunas Work</h2>
        
        <p>Infrared saunas come in three varieties:</p>

        <div class="sauna-types">
          <div class="sauna-type">
            <div class="sauna-type-content">
              <h4>Near-infrared (NIR)</h4>
              <p>Penetrates skin surface. Best for skin rejuvenation and cellular repair at a surface level.</p>
            </div>
          </div>
          <div class="sauna-type">
            <div class="sauna-type-content">
              <h4>Mid-infrared (MIR)</h4>
              <p>Reaches deeper into soft tissue and muscle. Improves circulation and reduces inflammation.</p>
            </div>
          </div>
          <div class="sauna-type">
            <div class="sauna-type-content">
              <h4>Far-infrared (FIR)</h4>
              <p>Penetrates deepest — up to 4cm into tissue. Gold standard for detoxification and cardiovascular conditioning.</p>
            </div>
          </div>
        </div>

        <p>The typical infrared sauna session runs 20 to 45 minutes at temperatures between 120F and 140F. Benefits include deep detoxification, cardiovascular conditioning, stress relief, and sustained muscle and joint recovery.</p>
      </section>

      <section class="comparison-section">
        <h2>Side-by-Side Comparison</h2>
        
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Red Light Therapy</th>
                <th>Infrared Sauna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mechanism</td>
                <td>Photobiomodulation (cellular)</td>
                <td>Thermal (heat response)</td>
              </tr>
              <tr>
                <td>Heat produced</td>
                <td>None</td>
                <td>Yes - core temp rises</td>
              </tr>
              <tr>
                <td>Sweat</td>
                <td>No</td>
                <td>Yes - heavy</td>
              </tr>
              <tr>
                <td>Session length</td>
                <td>10-20 min</td>
                <td>20-45 min</td>
              </tr>
              <tr>
                <td>Best for skin</td>
                <td>Collagen, anti-aging</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Best for detox</td>
                <td>No</td>
                <td>Deep sweat</td>
              </tr>
              <tr>
                <td>Best for recovery</td>
                <td>Cellular repair</td>
                <td>Deep muscle, joint</td>
              </tr>
              <tr>
                <td>Cardiovascular</td>
                <td>Limited</td>
                <td>Mimics moderate exercise</td>
              </tr>
              <tr>
                <td>Entry price</td>
                <td>~$300 (panel)</td>
                <td>~$1,500 (cabin)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="synergy-section">
        <h3>Can You Use Both? Yes — and You Should</h3>
        <p>RLT primes your mitochondria and reduces baseline inflammation at the cellular level. Infrared sauna then amplifies circulation, drives out toxins through sweat, and deepens the muscular and cardiovascular benefits. Used together, the two therapies hit recovery from two completely different angles.</p>
        
        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text">Red light therapy first</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text">Follow with infrared sauna session</span>
          </div>
        </div>
      </section>

      <section class="decision-section">
        <h2>Which One Should You Start With?</h2>
        
        <div class="decision-grid">
          <div class="decision-card">
            <h4>Choose Red Light Therapy If...</h4>
            <ul>
              <li>Skin health is your main concern</li>
              <li>Targeted inflammation reduction needed</li>
              <li>Post-workout cellular recovery is priority</li>
              <li>Low-commitment daily protocol</li>
              <li>Budget is under $500</li>
              <li>Limited space for equipment</li>
            </ul>
          </div>
          <div class="decision-card">
            <h4>Choose Infrared Sauna If...</h4>
            <ul>
              <li>Whole-body detoxification is key</li>
              <li>Stress relief and relaxation matter</li>
              <li>Cardiovascular conditioning is a goal</li>
              <li>Deep joint and muscle recovery needed</li>
              <li>Value the immersive heat experience</li>
              <li>Space for a cabin or blanket</li>
            </ul>
          </div>
        </div>
      </section>

      <div class="conclusion">
        <h2>The Bottom Line</h2>
        <p>Red light therapy and infrared saunas are not the same thing, and they're not really competing with each other. Think of them as tools that work on different systems: <strong>one speaks to your cells, the other speaks to your whole body.</strong> Understanding that distinction is the foundation for building a recovery and wellness protocol that actually delivers results.</p>
      </div>

      <div class="cta-section">
        <h3>Ready to Explore Your Options?</h3>
        <p>Compare prices on red light therapy devices and infrared saunas to find the right fit for your goals.</p>
        <Link to="/" class="cta-button">Browse Products</Link>
      </div>
    `},"2026-wellness-trends":{id:"2026-wellness-trends",title:"2026 Wellness Tech: Trends to Watch",excerpt:"The home recovery revolution is here. From infrared saunas to PEMF therapy, discover the technologies transforming how we heal, recover, and optimize performance.",date:"February 26, 2026",readTime:"12 min read",category:"Trends",content:`
      <p class="intro">
        The wellness industry has always chased the next breakthrough — but <strong>2026 marks a turning point</strong>. The therapies that were once reserved for elite athletes, longevity clinics, and high-end spas are landing in living rooms. Infrared saunas, red light therapy, cryotherapy, and PEMF are no longer fringe biohacking tools. They're becoming the foundation of a new approach to proactive health: drug-free, non-invasive, and increasingly backed by serious science.
      </p>

      <section class="category-section">
        <div class="section-header">
          <div>
          <div>
            <h2>Infrared Sauna: The Cornerstone of Recovery Culture</h2>
            <p class="section-subtitle">Deep heat therapy meets modern convenience</p>
          </div>
        </div>
        
        <p>If one modality has come to define the home wellness space in 2026, it's the infrared sauna. Unlike traditional saunas that heat the air around you, infrared saunas use light waves to heat your body directly from within — penetrating deeper into tissue at lower, more tolerable ambient temperatures.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Cardiovascular Support</h4>
            <p>Research suggests regular use can mimic circulatory effects of moderate exercise</p>
          </div>
          <div class="benefit-card">
            <h4>Muscle Recovery</h4>
            <p>Accelerated repair through enhanced blood flow and heat shock proteins</p>
          </div>
          <div class="benefit-card">
            <h4>Sleep Quality</h4>
            <p>Measurable improvements in deep sleep and sleep onset</p>
          </div>
          <div class="benefit-card">
            <h4>Detoxification</h4>
            <p>Enhanced elimination of heavy metals and environmental toxins through sweat</p>
          </div>
        </div>

        <p><strong>What's new in 2026</strong> is the hybrid unit revolution. Brands like Sunlighten, Clearlight, and HigherDose are now building full-spectrum infrared cabins with integrated red light therapy panels, combining two powerful modalities in a single session.</p>

        <div class="progress-section">
          <div class="progress-item">
            <div class="progress-header">
              <span>Optimal Session Frequency</span>
              <span>3-5x per week</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 85%; background: linear-gradient(90deg, #e85d4e, #ff8f70);"></div></div>
          </div>
          <div class="progress-item">
            <div class="progress-header">
              <span>Session Duration</span>
              <span>15-30 minutes</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 60%; background: linear-gradient(90deg, #e85d4e, #ff8f70);"></div></div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <div class="section-header">
          <div>
          <div>
            <h2>Red Light Therapy: The Science Is Catching Up</h2>
            <p class="section-subtitle">Photobiomodulation goes mainstream</p>
          </div>
        </div>

        <p>Red light therapy has had a reputation problem — mainly because it sounds too good to be true. But the research has matured considerably, and in 2026, the scientific community is taking photobiomodulation (PBM) seriously.</p>

        <div class="wavelengths-grid">
          <div class="wavelength-card">
            <div class="wavelength-value">660nm</div>
            <div class="wavelength-label">Red Light</div>
            <div class="wavelength-use">Surface tissue, Skin health</div>
          </div>
          <div class="wavelength-arrow">→</div>
          <div class="wavelength-card">
            <div class="wavelength-value">850nm</div>
            <div class="wavelength-label">Near-Infrared</div>
            <div class="wavelength-use">Deep penetration, Muscle & joint</div>
          </div>
          <div class="wavelength-arrow">→</div>
          <div class="wavelength-card atp">
            <div class="wavelength-value">ATP ↑</div>
            <div class="wavelength-label">Cellular Energy</div>
            <div class="wavelength-use">Enhanced repair, Regeneration</div>
          </div>
        </div>

        <div class="pro-tip">
          <h4>Pro Tip: The Stacking Protocol</h4>
          <p>Used before or alongside an infrared sauna session, red light therapy creates a powerful cellular one-two punch: <strong>RLT primes the mitochondria</strong>, and sauna heat drives circulation and detox.</p>
        </div>
      </section>

      <section class="category-section">
        <div class="section-header">
          <div>
          <div>
            <h2>Cryotherapy: Cold Exposure Goes Commercial</h2>
            <p class="section-subtitle">From Wim Hof to mainstream wellness</p>
          </div>
        </div>

        <p>Cold therapy has always had passionate advocates. In 2026, whole-body cryotherapy is going commercial at scale, with the global market on track to exceed <strong>$325 billion</strong> and growing at nearly 10% annually.</p>

        <div class="cryo-stats">
          <div class="cryo-stat">
            <div class="cryo-value">-110°C to -140°C</div>
            <div class="cryo-label">Chamber Temperature</div>
          </div>
          <div class="cryo-stat">
            <div class="cryo-value">2-4 Minutes</div>
            <div class="cryo-label">Session Duration</div>
          </div>
          <div class="cryo-stat">
            <div class="cryo-value">80%</div>
            <div class="cryo-label">DOMS Reduction Rate</div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <div class="section-header">
          <div>
          <div>
            <h2>PEMF: The Under-the-Radar Modality</h2>
            <p class="section-subtitle">Electromagnetic healing enters the mainstream</p>
          </div>
        </div>

        <p>Of the four therapies, PEMF is probably the one most people haven't encountered yet — but that's rapidly changing. The home PEMF device market is projected to grow by nearly <strong>$5 billion through 2032</strong>, driven by a 15%+ annual growth rate.</p>

        <div class="pemf-table">
          <table>
            <thead>
              <tr>
                <th>Application</th>
                <th>Evidence Level</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bone Fracture Healing</td>
                <td><span class="badge success">FDA Cleared</span></td>
                <td>Post-surgical recovery, non-union fractures</td>
              </tr>
              <tr>
                <td>Chronic Pain Management</td>
                <td><span class="badge info">Strong Research</span></td>
                <td>Arthritis, fibromyalgia, back pain</td>
              </tr>
              <tr>
                <td>Cartilage Repair</td>
                <td><span class="badge warning">Promising</span></td>
                <td>Joint degeneration, osteoarthritis</td>
              </tr>
              <tr>
                <td>Sleep & Recovery</td>
                <td><span class="badge purple">Emerging</span></td>
                <td>Nervous system regulation, deep rest</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="protocol-section">
        <h3>Stacking: The New Recovery Protocol</h3>
        
        <div class="timeline">
          <div class="timeline-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Morning: PEMF Mat Session</h4>
              <p>Reduce overnight inflammation and prime cellular function</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Pre-Workout: Red Light Therapy</h4>
              <p>Boost mitochondrial output and prepare muscles</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Post-Workout: Infrared Sauna</h4>
              <p>Drive circulation, accelerate muscle recovery</p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Weekly: Cryotherapy Session</h4>
              <p>Systemic inflammation reset and nervous system stimulation</p>
            </div>
          </div>
        </div>
      </section>

      <section class="conclusion">
        <h2>What This Means for 2026 and Beyond</h2>
        <p>The common thread across all four technologies is a shift toward <strong>cellular and systemic health</strong> rather than surface-level wellness. These aren't therapies for looking better — they're tools for working with your body's own repair and regulatory systems.</p>
        <p>As prices continue to fall and the research base deepens, the window between "elite biohacker territory" and "mainstream wellness routine" is closing fast. <strong>2026 may be the year you stop reading about these therapies and start using them.</strong></p>
      </section>

      <div class="cta-section">
        <h3>Ready to Build Your Home Wellness Setup?</h3>
        <p>Start with one modality that aligns with your primary health goals, then expand your protocol as you experience the benefits.</p>
        <Link to="/" class="cta-button">Explore Products →</Link>
      </div>
    `},"compression-therapy-buying-guide":{id:"compression-therapy-buying-guide",title:"Compression Therapy Systems: A Buyer's Guide",excerpt:"Don't overpay for underpowered systems. Learn which compression specs matter—pressure range, cycle modes, zone configuration—and avoid the marketing traps.",date:"February 28, 2026",readTime:"12 min read",category:"Buying Guide",content:`
      <p class="intro">
        Compression therapy has evolved from basic pneumatic sleeves in hospital settings to sophisticated recovery systems found in professional athletic facilities and increasingly, home recovery setups. The concept is straightforward: controlled external pressure applied to limbs enhances circulation, reduces swelling, and accelerates recovery in ways that passive rest simply cannot match.
      </p>

      <p>But buying a compression therapy system is more complex than it appears. These devices vary enormously in pressure capabilities, treatment modes, and zone configuration — and the wrong choice means spending significantly on a system that won't deliver the physiological benefits you're after. Whether you're equipping a sports medicine clinic, a high-performance training facility, or a serious home recovery space, here's what actually matters when choosing a compression therapy system.</p>

      <section class="category-section">
        <h2>The Physics: How Compression Actually Works</h2>
        
        <div class="key-difference">
          <p><strong>The Core Mechanism:</strong> Compression therapy works by applying <strong>controlled external pressure</strong> to limbs, creating a pressure gradient that enhances venous return and lymphatic drainage. The key is <strong>intermittent pneumatic compression (IPC)</strong> — sequential inflation and deflation of chambers that mimics and amplifies the body's natural circulatory pumping action.</p>
        </div>

        <p>This mechanical assistance accelerates the removal of metabolic waste products, reduces fluid accumulation in tissues, and improves oxygenated blood flow to fatigued muscles. Unlike static compression garments, pneumatic systems deliver dynamic pressure cycles that actively move fluid rather than simply containing it.</p>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h4>Enhanced Circulation</h4>
            <p>Improved venous return and arterial inflow to extremities</p>
          </div>
          <div class="benefit-card">
            <h4>Edema Reduction</h4>
            <p>Decreased fluid accumulation in tissues post-injury or surgery</p>
          </div>
          <div class="benefit-card">
            <h4>Muscle Recovery</h4>
            <p>Accelerated clearance of metabolic waste after intense exercise</p>
          </div>
          <div class="benefit-card">
            <h4>DVT Prevention</h4>
            <p>Reduced risk of deep vein thrombosis in immobilized patients</p>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>The Specs That Actually Matter</h2>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>🌡️ Pressure Range</h4>
              <p><strong>Measured in mmHg (millimeters of mercury)</strong></p>
              <p>Determines the force applied to tissues. Too low provides minimal physiological benefit; too high risks tissue damage or discomfort.</p>
              <p><strong>Target:</strong> 30–100 mmHg for recovery. Medical-grade systems reach 120+ mmHg.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>⏱️ Cycle Time Control</h4>
              <p><strong>Inflation/Deflation Timing</strong></p>
              <p>Determines how quickly chambers fill and empty. Faster cycles provide more aggressive fluid movement; slower cycles are gentler.</p>
              <p><strong>Range:</strong> 15–60 seconds per cycle. Adjustable timing is essential.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>🎯 Zone Configuration</h4>
              <p><strong>Chamber Layout</strong></p>
              <p>More zones mean more precise pressure gradients and better mimicking of natural peristaltic flow. Fewer zones are simpler but less effective.</p>
              <p><strong>Minimum:</strong> 4–6 zones per limb. Premium systems offer 8+ zones.</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>〰️ Treatment Modes</h4>
              <p><strong>Sequential, Peristaltic, or Static</strong></p>
              <p>Different patterns serve different purposes. Sequential (distal to proximal) is gold standard for recovery and edema management.</p>
              <p><strong>Ideal:</strong> Multiple modes with customizable sequences.</p>
            </div>
          </div>
        </div>

        <h3>Pressure Range: 30–100 mmHg Is the Therapeutic Sweet Spot</h3>
        <p>Lower pressures (20–40 mmHg) provide mild compression suitable for general wellness and light recovery. Moderate pressures (40–80 mmHg) are the standard for athletic recovery and post-surgical rehabilitation. Higher pressures (80–120+ mmHg) are typically reserved for medical-grade lymphedema management and should only be used under clinical supervision.</p>

        <div class="irradiance-meter">
          <div class="meter-labels">
            <span>0</span>
            <span>30</span>
            <span>60</span>
            <span>100+</span>
          </div>
          <div class="meter">
            <div class="meter-fill" style="width: 60%;"></div>
          </div>
          <div class="meter-legend">
            <div><span class="dot warning"></span> <strong>20–40 mmHg:</strong> Wellness/Prevention</div>
            <div><span class="dot success"></span> <strong>40–80 mmHg:</strong> Athletic Recovery</div>
            <div><span class="dot purple"></span> <strong>80–120+ mmHg:</strong> Medical/Clinical</div>
          </div>
        </div>

        <h3>Zone Configuration: More Is Better</h3>
        
        <div class="goal-grid">
          <div class="goal-card">
            <h4>4-Zone Systems</h4>
            <p>Basic foot, calf, knee, thigh segmentation. Functional for general recovery but limited precision in pressure gradients.</p>
            <div class="recommendation">Entry Level</div>
          </div>
          <div class="goal-card">
            <h4>6-Zone Systems ⚡</h4>
            <p>Enhanced segmentation with separate foot, ankle, calf, knee, lower thigh, upper thigh control. Better mimics natural circulation.</p>
            <div class="recommendation">Most Popular</div>
          </div>
          <div class="goal-card">
            <h4>8+ Zone Systems</h4>
            <p>Precise peristaltic sequencing with fine-grained pressure control. Professional-grade fluid movement and recovery optimization.</p>
            <div class="recommendation">Professional</div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>System Types: Which Configuration Is Right for You?</h2>

        <div class="device-types-grid">
          <div class="device-type-card">
            <div class="device-info">
              <h4>Leg-Only Systems <span class="best-tag">Most Common</span></h4>
              <p>Boots or sleeves covering foot to thigh. The standard configuration for athletic recovery and general wellness applications.</p>
              <p class="brand-mention">Top picks: Normatec 3, Therabody RecoveryAir, Rapid Reboot</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>Full-Body Systems</h4>
              <p>Includes leg boots plus hip/lower back attachment and arm sleeves. Comprehensive coverage for total-body recovery protocols.</p>
              <p class="brand-mention">Normatec 3 Full Body, Therabody RecoveryAir JetBoots + attachments</p>
            </div>
          </div>
          <div class="device-type-card">
            <div class="device-info">
              <h4>Targeted/Portable Units</h4>
              <p>Single-limb or localized compression for specific injuries. Lower pressure ranges but convenient for travel or spot treatment.</p>
              <p class="brand-mention">CrediHeal, Vortix, portable recovery boots</p>
            </div>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Red Flags to Avoid</h2>
        
        <div class="red-flags">
          <div class="flag-item">
            <div class="flag-number">1</div>
            <div class="flag-content">
              <h4>No Published Pressure Specifications</h4>
              <p>If a brand doesn't clearly state the maximum pressure their system generates, they're likely underpowered. Legitimate systems publish mmHg ratings prominently.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">2</div>
            <div class="flag-content">
              <h4>Single-Zone or 2-Zone Designs</h4>
              <p>Systems with fewer than 4 zones cannot create effective pressure gradients. They essentially squeeze the entire limb at once — ineffective for fluid movement.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">3</div>
            <div class="flag-content">
              <h4>No Adjustable Cycle Timing</h4>
              <p>Fixed inflation/deflation cycles limit customization for different recovery needs. User-controlled timing is a baseline requirement for serious systems.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">4</div>
            <div class="flag-content">
              <h4>Poor Build Quality</h4>
              <p>Leaky chambers, weak pumps, and flimsy connectors mean inconsistent pressure delivery and short product lifespan. Look for medical-grade construction.</p>
            </div>
          </div>
          <div class="flag-item">
            <div class="flag-number">5</div>
            <div class="flag-content">
              <h4>No FDA Registration</h4>
              <p>For systems claiming medical benefits (DVT prevention, lymphedema management), FDA Class II medical device registration is a minimum standard.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="comparison-section">
        <h2>Budget Guide: What to Expect at Each Price Point</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Price Range</th>
                <th>What to Expect</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="price-tag">Under $200</span> <span class="tier-label">Basic</span></td>
                <td>Entry-level leg sleeves. Limited pressure (often under 30 mmHg), fewer zones, fixed cycles. Suitable for light wellness use only.</td>
                <td>Casual users, travel</td>
              </tr>
              <tr>
                <td><span class="price-tag">$200–$500</span> <span class="tier-label">Sweet Spot</span></td>
                <td>Quality home systems with adjustable pressure (30–80 mmHg), 4–6 zones, multiple modes. Rapid Reboot and mid-tier brands sit here.</td>
                <td>Most home users, athletes</td>
              </tr>
              <tr>
                <td><span class="price-tag">$500–$1,000</span> <span class="tier-label">Mid-Range</span></td>
                <td>Enhanced systems with better pumps, more zones (6–8), smartphone connectivity, and improved durability. Therabody RecoveryAir range.</td>
                <td>Serious athletes, small clinics</td>
              </tr>
              <tr>
                <td><span class="price-tag">$1,000+</span> <span class="tier-label">Professional</span></td>
                <td>Medical-grade systems with 8+ zones, highest pressures (up to 120+ mmHg), professional durability, and clinical validation. Normatec 3 Pro.</td>
                <td>Professional facilities, medical use</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="category-section">
        <h2>How to Use Compression Therapy Effectively</h2>
        
        <div class="protocol-steps">
          <div class="protocol-step">
            <span class="step-num">1</span>
            <span class="step-text"><strong>Timing Matters</strong> — Post-workout (within 1–2 hours) is optimal for athletic recovery. For edema management, consistent daily use matters more than precise timing.</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">2</span>
            <span class="step-text"><strong>Session Duration</strong> — 15–30 minutes is standard. Longer isn't necessarily better; consistency beats duration.</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">3</span>
            <span class="step-text"><strong>Pressure Progression</strong> — Start at lower pressures (40–50 mmHg) and increase gradually as tolerance builds. Discomfort means dial it back.</span>
          </div>
          <div class="protocol-step">
            <span class="step-num">4</span>
            <span class="step-text"><strong>Hydration Is Key</strong> — Compression moves fluid; adequate hydration supports optimal lymphatic function and prevents dehydration.</span>
          </div>
        </div>
      </section>

      <section class="category-section">
        <h2>Medical vs. Consumer: Know the Difference</h2>

        <div class="goal-grid">
          <div class="goal-card">
            <h4>🏥 Medical-Grade Systems</h4>
            <ul>
              <li>FDA Class II medical device registration</li>
              <li>Higher pressure ceilings (80–120+ mmHg)</li>
              <li>Clinical validation and studies</li>
              <li>Designed for lymphedema, DVT prevention</li>
              <li>Often require prescription</li>
              <li>Insurance may cover with documentation</li>
            </ul>
          </div>
          <div class="goal-card">
            <h4>🏠 Consumer Recovery Systems</h4>
            <ul>
              <li>No FDA medical claims (wellness/recovery focus)</li>
              <li>Moderate pressures (30–80 mmHg)</li>
              <li>User-friendly interfaces and apps</li>
              <li>Designed for athletic recovery</li>
              <li>Direct purchase, no prescription</li>
              <li>Generally not insurance-eligible</li>
            </ul>
          </div>
        </div>

        <p><strong>Important:</strong> If you're managing a medical condition (lymphedema, chronic venous insufficiency, post-surgical recovery), consult a healthcare provider. Consumer recovery systems are excellent for athletic recovery but may not provide the pressure or protocols needed for clinical conditions.</p>
      </section>

      <div class="final-rule">
        <h3>The Bottom Line</h3>
        <p>Compression therapy is one of the most effective, evidence-based recovery tools available — but only if the system delivers sufficient pressure with proper zone configuration and cycling. Prioritize <strong>published pressure specifications</strong>, <strong>minimum 4–6 zones</strong>, and <strong>adjustable cycle timing</strong>. Ignore marketing that emphasizes aesthetics or app features over physiological effectiveness.</p>
        <p>Get those fundamentals right, and compression therapy can become a cornerstone of your recovery protocol, delivering consistent, measurable improvements in circulation, swelling reduction, and post-exercise muscle repair.</p>
      </div>

      <div class="cta-section">
        <h3>Ready to Compare Compression Systems?</h3>
        <p>Browse our curated selection of compression therapy devices with verified specs.</p>
        <Link to="/products" class="cta-button">Browse Compression Systems</Link>
      </div>
    `}},Fm=()=>{const{slug:e}=vo(),t=zm[e];if(!t)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:y("div",{className:"text-center",children:[c("h1",{className:"text-2xl font-bold text-[#fafafa] mb-4",children:"Post not found"}),c(D,{to:"/blog",className:"text-emerald-400 hover:text-emerald-300",children:"← Back to Blog"})]})});const n=t.content;return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/blog",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Blog"]}),n?y("article",{children:[y("div",{className:"mb-8",children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:t.category}),c("h1",{className:"text-4xl font-bold text-[#fafafa] mb-4 leading-tight",children:t.title}),y("div",{className:"flex items-center gap-4 text-sm text-[#a3a3a3]",children:[y("span",{className:"flex items-center gap-1",children:[c(gm,{className:"w-4 h-4"}),t.date]}),y("span",{className:"flex items-center gap-1",children:[c(vm,{className:"w-4 h-4"}),t.readTime]})]})]}),c("div",{className:"prose prose-invert max-w-none",dangerouslySetInnerHTML:{__html:t.content}})]}):y("div",{children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:t.category}),c("h1",{className:"text-3xl font-bold text-[#fafafa] mb-4",children:t.title}),c("p",{className:"text-[#a3a3a3] mb-8",children:t.excerpt}),c(D,{to:"/blog",className:"text-emerald-400 hover:text-emerald-300",children:"← Back to Blog"})]})]})})},Bm=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(Sm,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"About HealthIndex"})]}),y("div",{className:"prose prose-invert max-w-none",children:[y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Our Mission"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex was created to solve a simple problem: medical wellness equipment is expensive, and prices vary dramatically between retailers. We aggregate prices from across the web to help you make informed decisions about your health investments."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"What We Track"}),y("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🔥"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Saunas"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Infrared & Traditional"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🫧"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Hyperbaric"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Oxygen Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"❄️"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Cryotherapy"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Cold Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"💡"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Red Light"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Light Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🦵"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Compression"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Recovery Boots"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"⚡"}),c("h3",{className:"font-medium text-[#fafafa]",children:"PEMF"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"EMF Therapy"})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"How It Works"}),y("div",{className:"space-y-4",children:[y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"1"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"We Monitor Prices"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"Our system continuously tracks prices from authorized retailers and manufacturers."})]})]}),y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"2"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"Brave Search Integration"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"We use Brave Search API to find live prices across the web in real-time."})]})]}),y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"3"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"You Save Money"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"Compare prices instantly and set alerts for when prices drop."})]})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Our Values"}),y("div",{className:"grid md:grid-cols-3 gap-4",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(hd,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Transparency"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"We show all prices, including our affiliate relationships."})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(md,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Privacy First"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Minimal data collection. No tracking. No selling your info."})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(km,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Independent"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"We work with all major brands, not just our partners."})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Disclosure"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex participates in affiliate marketing programs. This means we may earn commissions when you purchase through our links. This comes at no additional cost to you and helps us maintain and improve our service."}),c("p",{className:"text-[#a3a3a3]",children:"Our recommendations are based on product quality and value, not affiliate rates. We prioritize your health outcomes over commissions."})]}),y("section",{children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact"}),y("p",{className:"text-[#a3a3a3]",children:["Questions? Suggestions? Reach us at"," ",c("a",{href:"mailto:hello@healthindex.app",className:"text-emerald-400 hover:text-emerald-300",children:"hello@healthindex.app"})]})]})]})]})});function Dm(){const[e,t]=N.useState(!1),n=[{label:"Home",path:"/"},{label:"Products",path:"/products"},{label:"Saunas",path:"/products/sauna"},{label:"Hyperbaric",path:"/products/hyperbaric"},{label:"Cryotherapy",path:"/products/cryotherapy"},{label:"Red Light",path:"/products/red-light"},{label:"Compression",path:"/products/compression"},{label:"PEMF",path:"/products/pemf"},{label:"Blog",path:"/blog"}];return y("div",{className:"min-h-screen bg-[#0a0a0a]",children:[y("header",{className:"sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#262626]",children:[y("div",{className:"max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between",children:[y(D,{to:"/",className:"flex items-center gap-2",children:[c("div",{className:"w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center",children:c(yo,{className:"w-5 h-5 text-white"})}),y("span",{className:"text-xl font-semibold tracking-tight text-[#fafafa]",children:["Health",c("span",{className:"text-emerald-400",children:"Index"})]})]}),c("nav",{className:"hidden md:flex items-center gap-1",children:n.map(r=>c(D,{to:r.path,className:"px-4 py-2 text-sm font-medium text-[#a3a3a3] hover:text-[#fafafa] transition-colors",children:r.label},r.path))}),y("div",{className:"flex items-center gap-3",children:[y("button",{className:"hidden sm:flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white text-sm font-medium rounded-lg hover:bg-[#2563eb] transition-colors",children:[c(mm,{className:"w-4 h-4"}),"Price Alerts"]}),c("button",{className:"md:hidden p-2 text-[#a3a3a3] hover:text-[#fafafa]",onClick:()=>t(!e),children:e?c(Nm,{className:"w-6 h-6"}):c(bm,{className:"w-6 h-6"})})]})]}),e&&c("div",{className:"md:hidden border-t border-[#262626] bg-[#0a0a0a]",children:c("nav",{className:"flex flex-col px-6 py-4",children:n.map(r=>c(D,{to:r.path,className:"py-3 text-[#a3a3a3] hover:text-[#fafafa] transition-colors",onClick:()=>t(!1),children:r.label},r.path))})})]}),c("main",{children:y(tm,{children:[c(He,{path:"/",element:c(Pm,{})}),c(He,{path:"/products",element:c(Al,{})}),c(He,{path:"/products/:category",element:c(Al,{})}),c(He,{path:"/product/:id",element:c(Rm,{})}),c(He,{path:"/blog",element:c(_m,{})}),c(He,{path:"/blog/:slug",element:c(Fm,{})}),c(He,{path:"/privacy",element:c(Lm,{})}),c(He,{path:"/terms",element:c(Mm,{})}),c(He,{path:"/about",element:c(Bm,{})})]})}),c("footer",{className:"border-t border-[#262626] mt-16 py-8 px-6",children:y("div",{className:"max-w-[1200px] mx-auto text-center",children:[y("p",{className:"text-[#a3a3a3] text-sm mb-2",children:[c(D,{to:"/privacy",className:"hover:text-emerald-400 mx-2",children:"Privacy"}),c("span",{className:"text-[#333]",children:"|"}),c(D,{to:"/terms",className:"hover:text-emerald-400 mx-2",children:"Terms"}),c("span",{className:"text-[#333]",children:"|"}),c(D,{to:"/about",className:"hover:text-emerald-400 mx-2",children:"About"})]}),c("p",{className:"text-[#a3a3a3] text-sm",children:"© 2026 HealthIndex"})]})})]})}xa.createRoot(document.getElementById("root")).render(c(yn.StrictMode,{children:c(cf,{children:c(lm,{children:c(Dm,{})})})}));
//# sourceMappingURL=index-09e9d11f.js.map
