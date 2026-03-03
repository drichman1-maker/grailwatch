var yd=Object.defineProperty;var xd=(e,t,n)=>t in e?yd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var bt=(e,t,n)=>(xd(e,typeof t!="symbol"?t+"":t,n),n);function wd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ao={exports:{}},Ci={},Uo={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Ld=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),xs=Symbol.iterator;function _d(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var Ho={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wo=Object.assign,Vo={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Vo,this.updater=n||Ho}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qo(){}Qo.prototype=gn.prototype;function ga(e,t,n){this.props=e,this.context=t,this.refs=Vo,this.updater=n||Ho}var ya=ga.prototype=new Qo;ya.constructor=ga;Wo(ya,gn.prototype);ya.isPureReactComponent=!0;var ws=Array.isArray,qo=Object.prototype.hasOwnProperty,xa={current:null},Go={key:!0,ref:!0,__self:!0,__source:!0};function Ko(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)qo.call(t,r)&&!Go.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:pr,type:e,key:l,ref:a,props:i,_owner:xa.current}}function zd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ks=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fd(""+e.key):t.toString(36)}function Br(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case pr:case Sd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Vi(a,0):r,ws(i)?(n="",e!=null&&(n=e.replace(ks,"$&/")+"/"),Br(i,t,n,"",function(u){return u})):i!=null&&(wa(i)&&(i=zd(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ks,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ws(e))for(var o=0;o<e.length;o++){l=e[o];var s=r+Vi(l,o);a+=Br(l,t,n,s,i)}else if(s=_d(e),typeof s=="function")for(e=s.call(e),o=0;!(l=e.next()).done;)l=l.value,s=r+Vi(l,o++),a+=Br(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function kr(e,t,n){if(e==null)return e;var r=[],i=0;return Br(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},$r={transition:null},Od={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:$r,ReactCurrentOwner:xa};function Yo(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=gn;z.Fragment=Nd;z.Profiler=Ed;z.PureComponent=ga;z.StrictMode=Cd;z.Suspense=Rd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;z.act=Yo;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wo({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=xa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)qo.call(t,s)&&!Go.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:pr,type:e.type,key:i,ref:l,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pd,_context:e},e.Consumer=e};z.createElement=Ko;z.createFactory=function(e){var t=Ko.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Td,render:e}};z.isValidElement=wa;z.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Id}};z.memo=function(e,t){return{$$typeof:Ld,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};z.unstable_act=Yo;z.useCallback=function(e,t){return pe.current.useCallback(e,t)};z.useContext=function(e){return pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};z.useEffect=function(e,t){return pe.current.useEffect(e,t)};z.useId=function(){return pe.current.useId()};z.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return pe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};z.useRef=function(e){return pe.current.useRef(e)};z.useState=function(e){return pe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return pe.current.useTransition()};z.version="18.3.1";Uo.exports=z;var C=Uo.exports;const yn=kd(C),Dd=wd({__proto__:null,default:yn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=C,Bd=Symbol.for("react.element"),$d=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Ud=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function Xo(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ad.call(t,r)&&!Hd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bd,type:e,key:l,ref:a,props:i,_owner:Ud.current}}Ci.Fragment=$d;Ci.jsx=Xo;Ci.jsxs=Xo;Ao.exports=Ci;var ka=Ao.exports;const Wd=ka.Fragment,c=ka.jsx,y=ka.jsxs;var wl={},Zo={exports:{}},Ne={},Jo={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,M){var _=b.length;b.push(M);e:for(;0<_;){var q=_-1>>>1,J=b[q];if(0<i(J,M))b[q]=M,b[_]=J,_=q;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var M=b[0],_=b.pop();if(_!==M){b[0]=_;e:for(var q=0,J=b.length,xr=J>>>1;q<xr;){var Et=2*(q+1)-1,Wi=b[Et],Pt=Et+1,wr=b[Pt];if(0>i(Wi,_))Pt<J&&0>i(wr,Wi)?(b[q]=wr,b[Pt]=_,q=Pt):(b[q]=Wi,b[Et]=_,q=Et);else if(Pt<J&&0>i(wr,_))b[q]=wr,b[Pt]=_,q=Pt;else break e}}return M}function i(b,M){var _=b.sortIndex-M.sortIndex;return _!==0?_:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],u=[],m=1,f=null,v=3,k=!1,S=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=b)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function w(b){if(g=!1,h(b),!S)if(n(s)!==null)S=!0,Ui(E);else{var M=n(u);M!==null&&Hi(w,M.startTime-b)}}function E(b,M){S=!1,g&&(g=!1,p(L),L=-1),k=!0;var _=v;try{for(h(M),f=n(s);f!==null&&(!(f.expirationTime>M)||b&&!_e());){var q=f.callback;if(typeof q=="function"){f.callback=null,v=f.priorityLevel;var J=q(f.expirationTime<=M);M=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(s)&&r(s),h(M)}else r(s);f=n(s)}if(f!==null)var xr=!0;else{var Et=n(u);Et!==null&&Hi(w,Et.startTime-M),xr=!1}return xr}finally{f=null,v=_,k=!1}}var T=!1,R=null,L=-1,Q=5,F=-1;function _e(){return!(e.unstable_now()-F<Q)}function Sn(){if(R!==null){var b=e.unstable_now();F=b;var M=!0;try{M=R(!0,b)}finally{M?Nn():(T=!1,R=null)}}else T=!1}var Nn;if(typeof d=="function")Nn=function(){d(Sn)};else if(typeof MessageChannel<"u"){var ys=new MessageChannel,gd=ys.port2;ys.port1.onmessage=Sn,Nn=function(){gd.postMessage(null)}}else Nn=function(){x(Sn,0)};function Ui(b){R=b,T||(T=!0,Nn())}function Hi(b,M){L=x(function(){b(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Ui(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(b){switch(v){case 1:case 2:case 3:var M=3;break;default:M=v}var _=v;v=M;try{return b()}finally{v=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var _=v;v=b;try{return M()}finally{v=_}},e.unstable_scheduleCallback=function(b,M,_){var q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?q+_:q):_=q,b){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=_+J,b={id:m++,callback:M,priorityLevel:b,startTime:_,expirationTime:J,sortIndex:-1},_>q?(b.sortIndex=_,t(u,b),n(s)===null&&b===n(u)&&(g?(p(L),L=-1):g=!0,Hi(w,_-q))):(b.sortIndex=J,t(s,b),S||k||(S=!0,Ui(E))),b},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(b){var M=v;return function(){var _=v;v=M;try{return b.apply(this,arguments)}finally{v=_}}}})(ec);Jo.exports=ec;var Vd=Jo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=C,Se=Vd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,Vn={};function $t(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Vn[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kl=Object.prototype.hasOwnProperty,qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},Ns={};function Gd(e){return kl.call(Ns,e)?!0:kl.call(Ss,e)?!1:qd.test(e)?Ns[e]=!0:(Ss[e]=!0,!1)}function Kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t>"u"||Kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sa,Na);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sa,Na);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sa,Na);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yd(t,n,i,r)&&(n=null),r||i===null?Gd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ic=Symbol.for("react.offscreen"),Cs=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Qi;function _n(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var qi=!1;function Gi(e,t){if(!e||qi)return"";qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Xd(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Wt:return"Portal";case Sl:return"Profiler";case Ea:return"StrictMode";case Nl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jd(e){var t=lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Jd(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Es(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sc(e,t){t=t.checked,t!=null&&Ca(e,"checked",t,!1)}function bl(e,t){sc(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(zn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function oc(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ts(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tp=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,rn=null,ln=null;function Rs(e){if(e=mr(e)){if(typeof Fl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ri(t),Fl(e.stateNode,e.type,t))}}function fc(e){rn?ln?ln.push(e):ln=[e]:rn=e}function hc(){if(rn){var e=rn,t=ln;if(ln=rn=null,Rs(e),t)for(e=0;e<t.length;e++)Rs(t[e])}}function mc(e,t){return e(t)}function vc(){}var Ki=!1;function gc(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return mc(e,t,n)}finally{Ki=!1,(rn!==null||ln!==null)&&(vc(),hc())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Il=!1;if(Xe)try{var En={};Object.defineProperty(En,"passive",{get:function(){Il=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Il=!1}function np(e,t,n,r,i,l,a,o,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Dn=!1,Jr=null,ei=!1,Ol=null,rp={onError:function(e){Dn=!0,Jr=e}};function ip(e,t,n,r,i,l,a,o,s){Dn=!1,Jr=null,np.apply(rp,arguments)}function lp(e,t,n,r,i,l,a,o,s){if(ip.apply(this,arguments),Dn){if(Dn){var u=Jr;Dn=!1,Jr=null}else throw Error(N(198));ei||(ei=!0,Ol=u)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ls(e){if(At(e)!==e)throw Error(N(188))}function ap(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ls(i),e;if(l===r)return Ls(i),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function xc(e){return e=ap(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var kc=Se.unstable_scheduleCallback,Ms=Se.unstable_cancelCallback,sp=Se.unstable_shouldYield,op=Se.unstable_requestPaint,G=Se.unstable_now,cp=Se.unstable_getCurrentPriorityLevel,Ra=Se.unstable_ImmediatePriority,Sc=Se.unstable_UserBlockingPriority,ti=Se.unstable_NormalPriority,up=Se.unstable_LowPriority,Nc=Se.unstable_IdlePriority,Ei=null,We=null;function dp(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ei,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:hp,pp=Math.log,fp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(pp(e)/fp|0)|0}var Er=64,Pr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Fn(o):(l&=a,l!==0&&(r=Fn(l)))}else a=n&~i,a!==0?r=Fn(a):l!==0&&(r=Fn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-De(l),o=1<<a,s=i[a];s===-1?(!(o&n)||o&r)&&(i[a]=mp(o,t)):s<=t&&(e.expiredLanes|=o),l&=~o}}function Dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=Er;return Er<<=1,!(Er&4194240)&&(Er=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function La(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pc,Ma,bc,Tc,Rc,jl=!1,br=[],ut=null,dt=null,pt=null,Gn=new Map,Kn=new Map,lt=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Pn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=mr(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xp(e,t,n,r,i){switch(t){case"focusin":return ut=Pn(ut,e,t,n,r,i),!0;case"dragenter":return dt=Pn(dt,e,t,n,r,i),!0;case"mouseover":return pt=Pn(pt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Gn.set(l,Pn(Gn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Kn.set(l,Pn(Kn.get(l)||null,e,t,n,r,i)),!0}return!1}function Lc(e){var t=Lt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=yc(n),t!==null){e.blockedOn=t,Rc(e.priority,function(){bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=mr(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){Ar(e)&&n.delete(t)}function wp(){jl=!1,ut!==null&&Ar(ut)&&(ut=null),dt!==null&&Ar(dt)&&(dt=null),pt!==null&&Ar(pt)&&(pt=null),Gn.forEach(zs),Kn.forEach(zs)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,wp)))}function Yn(e){function t(i){return bn(i,e)}if(0<br.length){bn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&bn(ut,e),dt!==null&&bn(dt,e),pt!==null&&bn(pt,e),Gn.forEach(t),Kn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&lt.shift()}var an=tt.ReactCurrentBatchConfig,ri=!0;function kp(e,t,n,r){var i=O,l=an.transition;an.transition=null;try{O=1,_a(e,t,n,r)}finally{O=i,an.transition=l}}function Sp(e,t,n,r){var i=O,l=an.transition;an.transition=null;try{O=4,_a(e,t,n,r)}finally{O=i,an.transition=l}}function _a(e,t,n,r){if(ri){var i=Bl(e,t,n,r);if(i===null)al(e,t,r,ii,n),_s(e,r);else if(xp(i,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<yp.indexOf(e)){for(;i!==null;){var l=mr(i);if(l!==null&&Pc(l),l=Bl(e,t,n,r),l===null&&al(e,t,r,ii,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var ii=null;function Bl(e,t,n,r){if(ii=null,e=Ta(r),e=Lt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case Ra:return 1;case Sc:return 4;case ti:case up:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var st=null,za=null,Ur=null;function _c(){if(Ur)return Ur;var e,t=za,n=t.length,r,i="value"in st?st.value:st.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Ur=i.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Fs(){return!1}function Ce(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tr:Fs,this.isPropagationStopped=Fs,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Ce(xn),hr=W({},xn,{view:0,detail:0}),Np=Ce(hr),Xi,Zi,Tn,Pi=W({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Xi=e.screenX-Tn.screenX,Zi=e.screenY-Tn.screenY):Zi=Xi=0,Tn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Is=Ce(Pi),Cp=W({},Pi,{dataTransfer:0}),Ep=Ce(Cp),Pp=W({},hr,{relatedTarget:0}),Ji=Ce(Pp),bp=W({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=Ce(bp),Rp=W({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=Ce(Rp),Mp=W({},xn,{data:0}),Os=Ce(Mp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function Ia(){return Ip}var Op=W({},hr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ia,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Ce(Op),jp=W({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=Ce(jp),Bp=W({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ia}),$p=Ce(Bp),Ap=W({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Ce(Ap),Hp=W({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=Ce(Hp),Vp=[9,13,27,32],Oa=Xe&&"CompositionEvent"in window,jn=null;Xe&&"documentMode"in document&&(jn=document.documentMode);var Qp=Xe&&"TextEvent"in window&&!jn,zc=Xe&&(!Oa||jn&&8<jn&&11>=jn),js=String.fromCharCode(32),Bs=!1;function Fc(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function qp(e,t){switch(e){case"compositionend":return Ic(t);case"keypress":return t.which!==32?null:(Bs=!0,js);case"textInput":return e=t.data,e===js&&Bs?null:e;default:return null}}function Gp(e,t){if(Qt)return e==="compositionend"||!Oa&&Fc(e,t)?(e=_c(),Ur=za=st=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Oc(e,t,n,r){fc(r),t=li(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Xn=null;function Yp(e){qc(e,0)}function bi(e){var t=Kt(e);if(ac(t))return e}function Xp(e,t){if(e==="change")return t}var Dc=!1;if(Xe){var el;if(Xe){var tl="oninput"in document;if(!tl){var As=document.createElement("div");As.setAttribute("oninput","return;"),tl=typeof As.oninput=="function"}el=tl}else el=!1;Dc=el&&(!document.documentMode||9<document.documentMode)}function Us(){Bn&&(Bn.detachEvent("onpropertychange",jc),Xn=Bn=null)}function jc(e){if(e.propertyName==="value"&&bi(Xn)){var t=[];Oc(t,Xn,e,Ta(e)),gc(Yp,t)}}function Zp(e,t,n){e==="focusin"?(Us(),Bn=t,Xn=n,Bn.attachEvent("onpropertychange",jc)):e==="focusout"&&Us()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Xn)}function ef(e,t){if(e==="click")return bi(t)}function tf(e,t){if(e==="input"||e==="change")return bi(t)}function nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:nf;function Zn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kl.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function Bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rf(e){var t=$c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bc(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ws(n,l);var a=Ws(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=Xe&&"documentMode"in document&&11>=document.documentMode,qt=null,$l=null,$n=null,Al=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||qt==null||qt!==Zr(r)||(r=qt,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&Zn($n,r)||($n=r,r=li($l,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},nl={},Ac={};Xe&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ti(e){if(nl[e])return nl[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return nl[e]=t[n];return e}var Uc=Ti("animationend"),Hc=Ti("animationiteration"),Wc=Ti("animationstart"),Vc=Ti("transitionend"),Qc=new Map,Qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){Qc.set(e,t),$t(t,[e])}for(var rl=0;rl<Qs.length;rl++){var il=Qs[rl],af=il.toLowerCase(),sf=il[0].toUpperCase()+il.slice(1);kt(af,"on"+sf)}kt(Uc,"onAnimationEnd");kt(Hc,"onAnimationIteration");kt(Wc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Vc,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lp(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==l&&i.isPropagationStopped())break e;qs(i,o,u),l=s}else for(a=0;a<r.length;a++){if(o=r[a],s=o.instance,u=o.currentTarget,o=o.listener,s!==l&&i.isPropagationStopped())break e;qs(i,o,u),l=s}}}if(ei)throw e=Ol,ei=!1,Ol=null,e}function B(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Lr]){e[Lr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(of.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ll("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Mc(t)){case 1:var i=kp;break;case 4:i=Sp;break;default:i=_a}n=i.bind(null,t,n,e),i=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Lt(o),a===null)return;if(s=a.tag,s===5||s===6){r=l=a;continue e}o=o.parentNode}}r=r.return}gc(function(){var u=l,m=Ta(n),f=[];e:{var v=Qc.get(e);if(v!==void 0){var k=Fa,S=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":k=Dp;break;case"focusin":S="focus",k=Ji;break;case"focusout":S="blur",k=Ji;break;case"beforeblur":case"afterblur":k=Ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=$p;break;case Uc:case Hc:case Wc:k=Tp;break;case Vc:k=Up;break;case"scroll":k=Np;break;case"wheel":k=Wp;break;case"copy":case"cut":case"paste":k=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ds}var g=(t&4)!==0,x=!g&&e==="scroll",p=g?v!==null?v+"Capture":null:v;g=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=qn(d,p),w!=null&&g.push(er(d,w,h)))),x)break;d=d.return}0<g.length&&(v=new k(v,S,null,n,m),f.push({event:v,listeners:g}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",v&&n!==zl&&(S=n.relatedTarget||n.fromElement)&&(Lt(S)||S[Ze]))break e;if((k||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=u,S=S?Lt(S):null,S!==null&&(x=At(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=u),k!==S)){if(g=Is,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ds,w="onPointerLeave",p="onPointerEnter",d="pointer"),x=k==null?v:Kt(k),h=S==null?v:Kt(S),v=new g(w,d+"leave",k,n,m),v.target=x,v.relatedTarget=h,w=null,Lt(m)===u&&(g=new g(p,d+"enter",S,n,m),g.target=h,g.relatedTarget=x,w=g),x=w,k&&S)t:{for(g=k,p=S,d=0,h=g;h;h=Ht(h))d++;for(h=0,w=p;w;w=Ht(w))h++;for(;0<d-h;)g=Ht(g),d--;for(;0<h-d;)p=Ht(p),h--;for(;d--;){if(g===p||p!==null&&g===p.alternate)break t;g=Ht(g),p=Ht(p)}g=null}else g=null;k!==null&&Gs(f,v,k,g,!1),S!==null&&x!==null&&Gs(f,x,S,g,!0)}}e:{if(v=u?Kt(u):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var E=Xp;else if($s(v))if(Dc)E=tf;else{E=Jp;var T=Zp}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=ef);if(E&&(E=E(e,u))){Oc(f,E,n,m);break e}T&&T(e,v,u),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Tl(v,"number",v.value)}switch(T=u?Kt(u):window,e){case"focusin":($s(T)||T.contentEditable==="true")&&(qt=T,$l=u,$n=null);break;case"focusout":$n=$l=qt=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Vs(f,n,m);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":Vs(f,n,m)}var R;if(Oa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Qt?Fc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(zc&&n.locale!=="ko"&&(Qt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Qt&&(R=_c()):(st=m,za="value"in st?st.value:st.textContent,Qt=!0)),T=li(u,L),0<T.length&&(L=new Os(L,e,null,n,m),f.push({event:L,listeners:T}),R?L.data=R:(R=Ic(n),R!==null&&(L.data=R)))),(R=Qp?qp(e,n):Gp(e,n))&&(u=li(u,"onBeforeInput"),0<u.length&&(m=new Os("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:u}),m.data=R))}qc(f,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function li(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qn(e,n),l!=null&&r.unshift(er(e,l,i)),l=qn(e,t),l!=null&&r.push(er(e,l,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var o=n,s=o.alternate,u=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&u!==null&&(o=u,i?(s=qn(n,l),s!=null&&a.unshift(er(n,s,o))):i||(s=qn(n,l),s!=null&&a.push(er(n,s,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cf=/\r\n?/g,uf=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(uf,"")}function Mr(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(N(425))}function ai(){}var Ul=null,Hl=null;function Wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(ff)}:Vl;function ff(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),He="__reactFiber$"+wn,tr="__reactProps$"+wn,Ze="__reactContainer$"+wn,Ql="__reactEvents$"+wn,hf="__reactListeners$"+wn,mf="__reactHandles$"+wn;function Lt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xs(e);e!==null;){if(n=e[He])return n;e=Xs(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ri(e){return e[tr]||null}var ql=[],Yt=-1;function St(e){return{current:e}}function $(e){0>Yt||(e.current=ql[Yt],ql[Yt]=null,Yt--)}function j(e,t){Yt++,ql[Yt]=e.current,e.current=t}var wt={},ce=St(wt),ve=St(!1),It=wt;function dn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function si(){$(ve),$(ce)}function Zs(e,t,n){if(ce.current!==wt)throw Error(N(168));j(ce,t),j(ve,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Zd(e)||"Unknown",i));return W({},n,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,It=ce.current,j(ce,e),j(ve,ve.current),!0}function Js(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Kc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,$(ve),$(ce),j(ce,e)):$(ve),j(ve,n)}var qe=null,Li=!1,ol=!1;function Yc(e){qe===null?qe=[e]:qe.push(e)}function vf(e){Li=!0,Yc(e)}function Nt(){if(!ol&&qe!==null){ol=!0;var e=0,t=O;try{var n=qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Li=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),kc(Ra,Nt),i}finally{O=t,ol=!1}}return null}var Xt=[],Zt=0,ci=null,ui=0,Pe=[],be=0,Ot=null,Ge=1,Ke="";function Tt(e,t){Xt[Zt++]=ui,Xt[Zt++]=ci,ci=e,ui=t}function Xc(e,t,n){Pe[be++]=Ge,Pe[be++]=Ke,Pe[be++]=Ot,Ot=e;var r=Ge;e=Ke;var i=32-De(r)-1;r&=~(1<<i),n+=1;var l=32-De(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ge=1<<32-De(t)+i|n<<i|r,Ke=l+e}else Ge=1<<l|n<<i|r,Ke=e}function ja(e){e.return!==null&&(Tt(e,1),Xc(e,1,0))}function Ba(e){for(;e===ci;)ci=Xt[--Zt],Xt[Zt]=null,ui=Xt[--Zt],Xt[Zt]=null;for(;e===Ot;)Ot=Pe[--be],Pe[be]=null,Ke=Pe[--be],Pe[be]=null,Ge=Pe[--be],Pe[be]=null}var ke=null,we=null,A=!1,Oe=null;function Zc(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ge,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(A){var t=we;if(t){var n=t;if(!eo(e,t)){if(Gl(e))throw Error(N(418));t=ft(n.nextSibling);var r=ke;t&&eo(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,A=!1,ke=e)}}else{if(Gl(e))throw Error(N(418));e.flags=e.flags&-4097|2,A=!1,ke=e}}}function to(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function _r(e){if(e!==ke)return!1;if(!A)return to(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wl(e.type,e.memoizedProps)),t&&(t=we)){if(Gl(e))throw Jc(),Error(N(418));for(;t;)Zc(e,t),t=ft(t.nextSibling)}if(to(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ft(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=we;e;)e=ft(e.nextSibling)}function pn(){we=ke=null,A=!1}function $a(e){Oe===null?Oe=[e]:Oe.push(e)}var gf=tt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function no(e){var t=e._init;return t(e._payload)}function eu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=gt(p,d),p.index=0,p.sibling=null,p}function l(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,h,w){return d===null||d.tag!==6?(d=ml(h,p.mode,w),d.return=p,d):(d=i(d,h),d.return=p,d)}function s(p,d,h,w){var E=h.type;return E===Vt?m(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rt&&no(E)===d.type)?(w=i(d,h.props),w.ref=Rn(p,d,h),w.return=p,w):(w=Yr(h.type,h.key,h.props,null,p.mode,w),w.ref=Rn(p,d,h),w.return=p,w)}function u(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=vl(h,p.mode,w),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function m(p,d,h,w,E){return d===null||d.tag!==7?(d=Ft(h,p.mode,w,E),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ml(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sr:return h=Yr(d.type,d.key,d.props,null,p.mode,h),h.ref=Rn(p,null,d),h.return=p,h;case Wt:return d=vl(d,p.mode,h),d.return=p,d;case rt:var w=d._init;return f(p,w(d._payload),h)}if(zn(d)||Cn(d))return d=Ft(d,p.mode,h,null),d.return=p,d;zr(p,d)}return null}function v(p,d,h,w){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:o(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:return h.key===E?s(p,d,h,w):null;case Wt:return h.key===E?u(p,d,h,w):null;case rt:return E=h._init,v(p,d,E(h._payload),w)}if(zn(h)||Cn(h))return E!==null?null:m(p,d,h,w,null);zr(p,h)}return null}function k(p,d,h,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,o(d,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Sr:return p=p.get(w.key===null?h:w.key)||null,s(d,p,w,E);case Wt:return p=p.get(w.key===null?h:w.key)||null,u(d,p,w,E);case rt:var T=w._init;return k(p,d,h,T(w._payload),E)}if(zn(w)||Cn(w))return p=p.get(h)||null,m(d,p,w,E,null);zr(d,w)}return null}function S(p,d,h,w){for(var E=null,T=null,R=d,L=d=0,Q=null;R!==null&&L<h.length;L++){R.index>L?(Q=R,R=null):Q=R.sibling;var F=v(p,R,h[L],w);if(F===null){R===null&&(R=Q);break}e&&R&&F.alternate===null&&t(p,R),d=l(F,d,L),T===null?E=F:T.sibling=F,T=F,R=Q}if(L===h.length)return n(p,R),A&&Tt(p,L),E;if(R===null){for(;L<h.length;L++)R=f(p,h[L],w),R!==null&&(d=l(R,d,L),T===null?E=R:T.sibling=R,T=R);return A&&Tt(p,L),E}for(R=r(p,R);L<h.length;L++)Q=k(R,p,L,h[L],w),Q!==null&&(e&&Q.alternate!==null&&R.delete(Q.key===null?L:Q.key),d=l(Q,d,L),T===null?E=Q:T.sibling=Q,T=Q);return e&&R.forEach(function(_e){return t(p,_e)}),A&&Tt(p,L),E}function g(p,d,h,w){var E=Cn(h);if(typeof E!="function")throw Error(N(150));if(h=E.call(h),h==null)throw Error(N(151));for(var T=E=null,R=d,L=d=0,Q=null,F=h.next();R!==null&&!F.done;L++,F=h.next()){R.index>L?(Q=R,R=null):Q=R.sibling;var _e=v(p,R,F.value,w);if(_e===null){R===null&&(R=Q);break}e&&R&&_e.alternate===null&&t(p,R),d=l(_e,d,L),T===null?E=_e:T.sibling=_e,T=_e,R=Q}if(F.done)return n(p,R),A&&Tt(p,L),E;if(R===null){for(;!F.done;L++,F=h.next())F=f(p,F.value,w),F!==null&&(d=l(F,d,L),T===null?E=F:T.sibling=F,T=F);return A&&Tt(p,L),E}for(R=r(p,R);!F.done;L++,F=h.next())F=k(R,p,L,F.value,w),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?L:F.key),d=l(F,d,L),T===null?E=F:T.sibling=F,T=F);return e&&R.forEach(function(Sn){return t(p,Sn)}),A&&Tt(p,L),E}function x(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===Vt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:e:{for(var E=h.key,T=d;T!==null;){if(T.key===E){if(E=h.type,E===Vt){if(T.tag===7){n(p,T.sibling),d=i(T,h.props.children),d.return=p,p=d;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rt&&no(E)===T.type){n(p,T.sibling),d=i(T,h.props),d.ref=Rn(p,T,h),d.return=p,p=d;break e}n(p,T);break}else t(p,T);T=T.sibling}h.type===Vt?(d=Ft(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=Yr(h.type,h.key,h.props,null,p.mode,w),w.ref=Rn(p,d,h),w.return=p,p=w)}return a(p);case Wt:e:{for(T=h.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=vl(h,p.mode,w),d.return=p,p=d}return a(p);case rt:return T=h._init,x(p,d,T(h._payload),w)}if(zn(h))return S(p,d,h,w);if(Cn(h))return g(p,d,h,w);zr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=ml(h,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return x}var fn=eu(!0),tu=eu(!1),di=St(null),pi=null,Jt=null,Aa=null;function Ua(){Aa=Jt=pi=null}function Ha(e){var t=di.current;$(di),e._currentValue=t}function Yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){pi=e,Aa=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(pi===null)throw Error(N(308));Jt=e,pi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Mt=null;function Wa(e){Mt===null?Mt=[e]:Mt.push(e)}function nu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,Wa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}function ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;it=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,u=s.next;s.next=null,a===null?l=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==a&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=s))}if(l!==null){var f=i.baseState;a=0,m=u=s=null,o=l;do{var v=o.lane,k=o.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:k,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=e,g=o;switch(v=t,k=n,g.tag){case 1:if(S=g.payload,typeof S=="function"){f=S.call(k,f,v);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=g.payload,v=typeof S=="function"?S.call(k,f,v):S,v==null)break e;f=W({},f,v);break e;case 2:it=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[o]:v.push(o))}else k={eventTime:k,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=k,s=f):m=m.next=k,a|=v;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;v=o,o=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(m===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);jt|=a,e.lanes=a,e.memoizedState=f}}function io(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var vr={},Ve=St(vr),nr=St(vr),rr=St(vr);function _t(e){if(e===vr)throw Error(N(174));return e}function Qa(e,t){switch(j(rr,t),j(nr,e),j(Ve,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ll(t,e)}$(Ve),j(Ve,t)}function hn(){$(Ve),$(nr),$(rr)}function iu(e){_t(rr.current);var t=_t(Ve.current),n=Ll(t,e.type);t!==n&&(j(nr,e),j(Ve,n))}function qa(e){nr.current===e&&($(Ve),$(nr))}var U=St(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function Ga(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Vr=tt.ReactCurrentDispatcher,ul=tt.ReactCurrentBatchConfig,Dt=0,H=null,X=null,ee=null,mi=!1,An=!1,ir=0,yf=0;function ae(){throw Error(N(321))}function Ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Ya(e,t,n,r,i,l){if(Dt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?Sf:Nf,e=n(r,i),An){l=0;do{if(An=!1,ir=0,25<=l)throw Error(N(301));l+=1,ee=X=null,t.updateQueue=null,Vr.current=Cf,e=n(r,i)}while(An)}if(Vr.current=vi,t=X!==null&&X.next!==null,Dt=0,ee=X=H=null,mi=!1,t)throw Error(N(300));return e}function Xa(){var e=ir!==0;return ir=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(N(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function lr(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Me(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,s=null,u=l;do{var m=u.lane;if((Dt&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=f,a=r):s=s.next=f,H.lanes|=m,jt|=m}u=u.next}while(u!==null&&u!==l);s===null?a=r:s.next=o,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,jt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=Me(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Be(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function lu(){}function au(e,t){var n=H,r=Me(),i=t(),l=!Be(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,Za(cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,ou.bind(null,n,r,i,t),void 0,null),te===null)throw Error(N(349));Dt&30||su(n,t,i)}return i}function su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ou(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&du(e)}function cu(e,t,n){return n(function(){uu(t)&&du(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function du(e){var t=Je(e,1);t!==null&&je(t,e,1,-1)}function lo(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=kf.bind(null,H,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pu(){return Me().memoizedState}function Qr(e,t,n,r){var i=Ue();H.flags|=e,i.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var i=Me();r=r===void 0?null:r;var l=void 0;if(X!==null){var a=X.memoizedState;if(l=a.destroy,r!==null&&Ka(r,a.deps)){i.memoizedState=ar(t,n,l,r);return}}H.flags|=e,i.memoizedState=ar(1|t,n,l,r)}function ao(e,t){return Qr(8390656,8,e,t)}function Za(e,t){return Mi(2048,8,e,t)}function fu(e,t){return Mi(4,2,e,t)}function hu(e,t){return Mi(4,4,e,t)}function mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vu(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,mu.bind(null,t,e),n)}function Ja(){}function gu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xu(e,t,n){return Dt&21?(Be(n,t)||(n=Cc(),H.lanes|=n,jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function xf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{O=n,ul.transition=r}}function wu(){return Me().memoizedState}function wf(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ku(e))Su(t,n);else if(n=nu(e,t,n,r),n!==null){var i=de();je(n,e,r,i),Nu(n,t,r)}}function kf(e,t,n){var r=vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Su(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,o=l(a,n);if(i.hasEagerState=!0,i.eagerState=o,Be(o,a)){var s=t.interleaved;s===null?(i.next=i,Wa(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=nu(e,t,i,r),n!==null&&(i=de(),je(n,e,r,i),Nu(n,t,r))}}function ku(e){var t=e.alternate;return e===H||t!==null&&t===H}function Su(e,t){An=mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}var vi={readContext:Le,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sf={readContext:Le,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ao,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:lo,useDebugValue:Ja,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=lo(!1),t=e[0];return e=xf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ue();if(A){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),te===null)throw Error(N(349));Dt&30||su(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ao(cu.bind(null,r,l,e),[e]),r.flags|=2048,ar(9,ou.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=te.identifierPrefix;if(A){var n=Ke,r=Ge;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nf={readContext:Le,useCallback:gu,useContext:Le,useEffect:Za,useImperativeHandle:vu,useInsertionEffect:fu,useLayoutEffect:hu,useMemo:yu,useReducer:dl,useRef:pu,useState:function(){return dl(lr)},useDebugValue:Ja,useDeferredValue:function(e){var t=Me();return xu(t,X.memoizedState,e)},useTransition:function(){var e=dl(lr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:au,useId:wu,unstable_isNewReconciler:!1},Cf={readContext:Le,useCallback:gu,useContext:Le,useEffect:Za,useImperativeHandle:vu,useInsertionEffect:fu,useLayoutEffect:hu,useMemo:yu,useReducer:pl,useRef:pu,useState:function(){return pl(lr)},useDebugValue:Ja,useDeferredValue:function(e){var t=Me();return X===null?t.memoizedState=e:xu(t,X.memoizedState,e)},useTransition:function(){var e=pl(lr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:au,useId:wu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _i={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=vt(e),l=Ye(r,i);l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(je(t,e,i,r),Wr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=vt(e),l=Ye(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,i),t!==null&&(je(t,e,i,r),Wr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),i=Ye(n,r);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,r),t!==null&&(je(t,e,r,n),Wr(t,e,r))}};function so(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,l):!0}function Cu(e,t,n){var r=!1,i=wt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(i=ge(t)?It:ce.current,r=t.contextTypes,l=(r=r!=null)?dn(e,i):wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function oo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Va(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Le(l):(l=ge(t)?It:ce.current,i.context=dn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_i.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Xd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ef=typeof WeakMap=="function"?WeakMap:Map;function Eu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,ca=r),Jl(e,t)},n}function Pu(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function co(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ef;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bf.bind(null,e,t,n),t.then(e,e))}function uo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function po(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Pf=tt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?tu(t,null,n,r):fn(t,e.child,n,r)}function fo(e,t,n,r,i){n=n.render;var l=t.ref;return sn(t,i),r=Ya(e,t,n,r,l,i),n=Xa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(A&&n&&ja(t),t.flags|=1,ue(e,t,r,i),t.child)}function ho(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ss(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bu(e,t,l,r,i)):(e=Yr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(a,r)&&e.ref===t.ref)return et(e,t,i)}return t.flags|=1,e=gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Zn(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,et(e,t,i)}return ea(e,t,n,r,i)}function Tu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(tn,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(tn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,j(tn,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,j(tn,xe),xe|=r;return ue(e,t,i,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,i){var l=ge(n)?It:ce.current;return l=dn(t,l),sn(t,i),n=Ya(e,t,n,r,l,i),r=Xa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,et(e,t,i)):(A&&r&&ja(t),t.flags|=1,ue(e,t,n,i),t.child)}function mo(e,t,n,r,i){if(ge(n)){var l=!0;oi(t)}else l=!1;if(sn(t,i),t.stateNode===null)qr(e,t),Cu(t,n,r),Zl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ge(n)?It:ce.current,u=dn(t,u));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||s!==u)&&oo(t,a,r,u),it=!1;var v=t.memoizedState;a.state=v,fi(t,r,a,i),s=t.memoizedState,o!==r||v!==s||ve.current||it?(typeof m=="function"&&(Xl(t,n,m,r),s=t.memoizedState),(o=it||so(t,n,o,r,v,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ru(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Fe(t.type,o),a.props=u,f=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=ge(n)?It:ce.current,s=dn(t,s));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||v!==s)&&oo(t,a,r,s),it=!1,v=t.memoizedState,a.state=v,fi(t,r,a,i);var S=t.memoizedState;o!==f||v!==S||ve.current||it?(typeof k=="function"&&(Xl(t,n,k,r),S=t.memoizedState),(u=it||so(t,n,u,r,v,S,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,l,i)}function ta(e,t,n,r,i,l){Ru(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Js(t,n,!1),et(e,t,l);r=t.stateNode,Pf.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fn(t,e.child,null,l),t.child=fn(t,null,o,l)):ue(e,t,o,l),t.memoizedState=r.state,i&&Js(t,n,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?Zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zs(e,t.context,!1),Qa(e,t.containerInfo)}function vo(e,t,n,r,i){return pn(),$a(i),t.flags|=256,ue(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,i=U.current,l=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(U,i&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Ii(a,r,0,null),e=Ft(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ra(n),t.memoizedState=na,e):es(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return bf(e,t,a,r,o,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=gt(o,l):(l=Ft(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?ra(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=na,r}return l=e.child,e=l.sibling,r=gt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function es(e,t){return t=Ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&$a(r),fn(t,e.child,null,n),e=es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(N(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ii({mode:"visible",children:r.children},i,0,null),l=Ft(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&fn(t,e.child,null,a),t.child.memoizedState=ra(a),t.memoizedState=na,l);if(!(t.mode&1))return Fr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(N(419)),r=fl(l,r,void 0),Fr(e,t,a,r)}if(o=(a&e.childLanes)!==0,me||o){if(r=te,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),je(r,e,i,-1))}return as(),r=fl(Error(N(421))),Fr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$f.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,we=ft(i.nextSibling),ke=t,A=!0,Oe=null,e!==null&&(Pe[be++]=Ge,Pe[be++]=Ke,Pe[be++]=Ot,Ge=e.id,Ke=e.overflow,Ot=t),t=es(t,r.children),t.flags|=4096,t)}function go(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yl(e.return,t,n)}function hl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function _u(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&go(e,n,t);else if(e.tag===19)go(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,l);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tf(e,t,n){switch(t.tag){case 3:Lu(t),pn();break;case 5:iu(t);break;case 1:ge(t.type)&&oi(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Mu(e,t,n):(j(U,U.current&1),e=et(e,t,n),e!==null?e.sibling:null);j(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _u(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Tu(e,t,n)}return et(e,t,n)}var zu,ia,Fu,Iu;zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ia=function(){};Fu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_t(Ve.current);var l=null;switch(n){case"input":i=Pl(e,i),r=Pl(e,r),l=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}Ml(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&B("scroll",e),l||o===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Iu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rf(e,t,n){var r=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&si(),se(t),null;case 3:return r=t.stateNode,hn(),$(ve),$(ce),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(pa(Oe),Oe=null))),ia(e,t),se(t),null;case 5:qa(t);var i=_t(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return se(t),null}if(e=_t(Ve.current),_r(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[He]=t,r[tr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<In.length;i++)B(In[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Es(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":bs(r,l),B("invalid",r)}Ml(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Mr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Mr(r.textContent,o,e),i=["children",""+o]):Vn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&B("scroll",r)}switch(n){case"input":Nr(r),Ps(r,l,!0);break;case"textarea":Nr(r),Ts(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[tr]=r,zu(e,t,!1,!1),t.stateNode=e;e:{switch(a=_l(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<In.length;i++)B(In[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Es(e,r),i=Pl(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":bs(e,r),i=Rl(e,r),B("invalid",e);break;default:i=r}Ml(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="style"?pc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&uc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Qn(e,s):typeof s=="number"&&Qn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&B("scroll",e):s!=null&&Ca(e,l,s,a))}switch(n){case"input":Nr(e),Ps(e,r,!1);break;case"textarea":Nr(e),Ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Iu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=_t(rr.current),_t(Ve.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return se(t),null;case 13:if($(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&we!==null&&t.mode&1&&!(t.flags&128))Jc(),pn(),t.flags|=98560,l=!1;else if(l=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[He]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Oe!==null&&(pa(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Z===0&&(Z=3):as())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return hn(),ia(e,t),e===null&&Jn(t.stateNode.containerInfo),se(t),null;case 10:return Ha(t.type._context),se(t),null;case 17:return ge(t.type)&&si(),se(t),null;case 19:if($(U),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Ln(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=hi(e),a!==null){for(t.flags|=128,Ln(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>vn&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304)}else{if(!r)if(e=hi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!A)return se(t),null}else 2*G()-l.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=U.current,j(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Lf(e,t){switch(Ba(t),t.tag){case 1:return ge(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),$(ve),$(ce),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if($(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(U),null;case 4:return hn(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var Ir=!1,oe=!1,Mf=typeof WeakSet=="function"?WeakSet:Set,P=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){V(e,t,r)}}var yo=!1;function _f(e,t){if(Ul=ri,e=$c(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,o=-1,s=-1,u=0,m=0,f=e,v=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==l||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)v=f,f=k;for(;;){if(f===e)break t;if(v===n&&++u===i&&(o=a),v===l&&++m===r&&(s=a),(k=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=k}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:e,selectionRange:n},ri=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var g=S.memoizedProps,x=S.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:Fe(t.type,g),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){V(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=yo,yo=!1,S}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&la(t,n,l)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[tr],delete t[Ql],delete t[hf],delete t[mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Du(e){return e.tag===5||e.tag===3||e.tag===4}function xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ne=null,Ie=!1;function nt(e,t,n){for(n=n.child;n!==null;)ju(e,t,n),n=n.sibling}function ju(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ei,n)}catch{}switch(n.tag){case 5:oe||en(n,t);case 6:var r=ne,i=Ie;ne=null,nt(e,t,n),ne=r,Ie=i,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Yn(e)):sl(ne,n.stateNode));break;case 4:r=ne,i=Ie,ne=n.stateNode.containerInfo,Ie=!0,nt(e,t,n),ne=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&la(n,t,a),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!oe&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){V(n,t,o)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,nt(e,t,n),oe=r):nt(e,t,n);break;default:nt(e,t,n)}}function wo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mf),t.forEach(function(r){var i=Af.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Ie=!1;break e;case 3:ne=o.stateNode.containerInfo,Ie=!0;break e;case 4:ne=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(ne===null)throw Error(N(160));ju(l,a,i),ne=null,Ie=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){V(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),$e(e),r&4){try{Un(3,e,e.return),zi(3,e)}catch(g){V(e,e.return,g)}try{Un(5,e,e.return)}catch(g){V(e,e.return,g)}}break;case 1:ze(t,e),$e(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(ze(t,e),$e(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Qn(i,"")}catch(g){V(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&sc(i,l),_l(o,a);var u=_l(o,l);for(a=0;a<s.length;a+=2){var m=s[a],f=s[a+1];m==="style"?pc(i,f):m==="dangerouslySetInnerHTML"?uc(i,f):m==="children"?Qn(i,f):Ca(i,m,f,u)}switch(o){case"input":bl(i,l);break;case"textarea":oc(i,l);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?nn(i,!!l.multiple,k,!1):v!==!!l.multiple&&(l.defaultValue!=null?nn(i,!!l.multiple,l.defaultValue,!0):nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[tr]=l}catch(g){V(e,e.return,g)}}break;case 6:if(ze(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(g){V(e,e.return,g)}}break;case 3:if(ze(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(g){V(e,e.return,g)}break;case 4:ze(t,e),$e(e);break;case 13:ze(t,e),$e(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(rs=G())),r&4&&wo(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||m,ze(t,e),oe=u):ze(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(f=P=m;P!==null;){switch(v=P,k=v.child,v.tag){case 0:case 11:case 14:case 15:Un(4,v,v.return);break;case 1:en(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(g){V(r,n,g)}}break;case 5:en(v,v.return);break;case 22:if(v.memoizedState!==null){So(f);continue}}k!==null?(k.return=v,P=k):So(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=dc("display",a))}catch(g){V(e,e.return,g)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){V(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ze(t,e),$e(e),r&4&&wo(e);break;case 21:break;default:ze(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Du(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qn(i,""),r.flags&=-33);var l=xo(e);oa(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=xo(e);sa(e,o,a);break;default:throw Error(N(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e,t,n){P=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ir;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||oe;o=Ir;var u=oe;if(Ir=a,(oe=s)&&!u)for(P=i;P!==null;)a=P,s=a.child,a.tag===22&&a.memoizedState!==null?No(i):s!==null?(s.return=a,P=s):No(i);for(;l!==null;)P=l,$u(l),l=l.sibling;P=i,Ir=o,oe=u}ko(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):ko(e)}}function ko(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&io(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}io(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}oe||t.flags&512&&aa(t)}catch(v){V(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function So(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function No(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){V(t,i,s)}}var l=t.return;try{aa(t)}catch(s){V(t,l,s)}break;case 5:var a=t.return;try{aa(t)}catch(s){V(t,a,s)}}}catch(s){V(t,t.return,s)}if(t===e){P=null;break}var o=t.sibling;if(o!==null){o.return=t.return,P=o;break}P=t.return}}var Ff=Math.ceil,gi=tt.ReactCurrentDispatcher,ts=tt.ReactCurrentOwner,Re=tt.ReactCurrentBatchConfig,I=0,te=null,K=null,re=0,xe=0,tn=St(0),Z=0,sr=null,jt=0,Fi=0,ns=0,Hn=null,he=null,rs=0,vn=1/0,Qe=null,yi=!1,ca=null,mt=null,Or=!1,ot=null,xi=0,Wn=0,ua=null,Gr=-1,Kr=0;function de(){return I&6?G():Gr!==-1?Gr:Gr=G()}function vt(e){return e.mode&1?I&2&&re!==0?re&-re:gf.transition!==null?(Kr===0&&(Kr=Cc()),Kr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function je(e,t,n,r){if(50<Wn)throw Wn=0,ua=null,Error(N(185));fr(e,n,r),(!(I&2)||e!==te)&&(e===te&&(!(I&2)&&(Fi|=n),Z===4&&at(e,re)),ye(e,r),n===1&&I===0&&!(t.mode&1)&&(vn=G()+500,Li&&Nt()))}function ye(e,t){var n=e.callbackNode;vp(e,t);var r=ni(e,e===te?re:0);if(r===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?vf(Co.bind(null,e)):Yc(Co.bind(null,e)),pf(function(){!(I&6)&&Nt()}),n=null;else{switch(Ec(r)){case 1:n=Ra;break;case 4:n=Sc;break;case 16:n=ti;break;case 536870912:n=Nc;break;default:n=ti}n=Gu(n,Au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Au(e,t){if(Gr=-1,Kr=0,I&6)throw Error(N(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=ni(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var i=I;I|=2;var l=Hu();(te!==e||re!==t)&&(Qe=null,vn=G()+500,zt(e,t));do try{Df();break}catch(o){Uu(e,o)}while(1);Ua(),gi.current=l,I=i,K!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(i=Dl(e),i!==0&&(r=i,t=da(e,i))),t===1)throw n=sr,zt(e,0),at(e,r),ye(e,G()),n;if(t===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!If(i)&&(t=wi(e,r),t===2&&(l=Dl(e),l!==0&&(r=l,t=da(e,l))),t===1))throw n=sr,zt(e,0),at(e,r),ye(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Rt(e,he,Qe);break;case 3:if(at(e,r),(r&130023424)===r&&(t=rs+500-G(),10<t)){if(ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vl(Rt.bind(null,e,he,Qe),t);break}Rt(e,he,Qe);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-De(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ff(r/1960))-r,10<r){e.timeoutHandle=Vl(Rt.bind(null,e,he,Qe),r);break}Rt(e,he,Qe);break;case 5:Rt(e,he,Qe);break;default:throw Error(N(329))}}}return ye(e,G()),e.callbackNode===n?Au.bind(null,e):null}function da(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=wi(e,t),e!==2&&(t=he,he=n,t!==null&&pa(t)),e}function pa(e){he===null?he=e:he.push.apply(he,e)}function If(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Be(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~ns,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Co(e){if(I&6)throw Error(N(327));on();var t=ni(e,0);if(!(t&1))return ye(e,G()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Dl(e);r!==0&&(t=r,n=da(e,r))}if(n===1)throw n=sr,zt(e,0),at(e,t),ye(e,G()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,he,Qe),ye(e,G()),null}function is(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(vn=G()+500,Li&&Nt())}}function Bt(e){ot!==null&&ot.tag===0&&!(I&6)&&on();var t=I;I|=1;var n=Re.transition,r=O;try{if(Re.transition=null,O=1,e)return e()}finally{O=r,Re.transition=n,I=t,!(I&6)&&Nt()}}function ls(){xe=tn.current,$(tn)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:hn(),$(ve),$(ce),Ga();break;case 5:qa(r);break;case 4:hn();break;case 13:$(U);break;case 19:$(U);break;case 10:Ha(r.type._context);break;case 22:case 23:ls()}n=n.return}if(te=e,K=e=gt(e.current,null),re=xe=t,Z=0,sr=null,ns=Fi=jt=0,he=Hn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}Mt=null}return e}function Uu(e,t){do{var n=K;try{if(Ua(),Vr.current=vi,mi){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mi=!1}if(Dt=0,ee=X=H=null,An=!1,ir=0,ts.current=null,n===null||n.return===null){Z=1,sr=t,K=null;break}e:{var l=e,a=n.return,o=n,s=t;if(t=re,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=o,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=uo(a);if(k!==null){k.flags&=-257,po(k,a,o,l,t),k.mode&1&&co(l,u,t),t=k,s=u;var S=t.updateQueue;if(S===null){var g=new Set;g.add(s),t.updateQueue=g}else S.add(s);break e}else{if(!(t&1)){co(l,u,t),as();break e}s=Error(N(426))}}else if(A&&o.mode&1){var x=uo(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),po(x,a,o,l,t),$a(mn(s,o));break e}}l=s=mn(s,o),Z!==4&&(Z=2),Hn===null?Hn=[l]:Hn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Eu(l,s,t);ro(l,p);break e;case 1:o=s;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(mt===null||!mt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Pu(l,o,t);ro(l,w);break e}}l=l.return}while(l!==null)}Vu(n)}catch(E){t=E,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function Hu(){var e=gi.current;return gi.current=vi,e===null?vi:e}function as(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(jt&268435455)&&!(Fi&268435455)||at(te,re)}function wi(e,t){var n=I;I|=2;var r=Hu();(te!==e||re!==t)&&(Qe=null,zt(e,t));do try{Of();break}catch(i){Uu(e,i)}while(1);if(Ua(),I=n,gi.current=r,K!==null)throw Error(N(261));return te=null,re=0,Z}function Of(){for(;K!==null;)Wu(K)}function Df(){for(;K!==null&&!sp();)Wu(K)}function Wu(e){var t=qu(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Vu(e):K=t,ts.current=null}function Vu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=Rf(n,t,xe),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function Rt(e,t,n){var r=O,i=Re.transition;try{Re.transition=null,O=1,jf(e,t,n,r)}finally{Re.transition=i,O=r}return null}function jf(e,t,n,r){do on();while(ot!==null);if(I&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gp(e,l),e===te&&(K=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,Gu(ti,function(){return on(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Re.transition,Re.transition=null;var a=O;O=1;var o=I;I|=4,ts.current=null,_f(e,n),Bu(n,e),rf(Hl),ri=!!Ul,Hl=Ul=null,e.current=n,zf(n),op(),I=o,O=a,Re.transition=l}else e.current=n;if(Or&&(Or=!1,ot=e,xi=i),l=e.pendingLanes,l===0&&(mt=null),dp(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yi)throw yi=!1,e=ca,ca=null,e;return xi&1&&e.tag!==0&&on(),l=e.pendingLanes,l&1?e===ua?Wn++:(Wn=0,ua=e):Wn=0,Nt(),null}function on(){if(ot!==null){var e=Ec(xi),t=Re.transition,n=O;try{if(Re.transition=null,O=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,xi=0,I&6)throw Error(N(331));var i=I;for(I|=4,P=e.current;P!==null;){var l=P,a=l.child;if(P.flags&16){var o=l.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(P=u;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Un(8,m,l)}var f=m.child;if(f!==null)f.return=m,P=f;else for(;P!==null;){m=P;var v=m.sibling,k=m.return;if(Ou(m),m===u){P=null;break}if(v!==null){v.return=k,P=v;break}P=k}}}var S=l.alternate;if(S!==null){var g=S.child;if(g!==null){S.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}P=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,P=a;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,P=p;break e}P=l.return}}var d=e.current;for(P=d;P!==null;){a=P;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,P=h;else e:for(a=d;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zi(9,o)}}catch(E){V(o,o.return,E)}if(o===a){P=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,P=w;break e}P=o.return}}if(I=i,Nt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ei,e)}catch{}r=!0}return r}finally{O=n,Re.transition=t}}return!1}function Eo(e,t,n){t=mn(n,t),t=Eu(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(fr(e,1,t),ye(e,t))}function V(e,t,n){if(e.tag===3)Eo(e,e,n);else for(;t!==null;){if(t.tag===3){Eo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=mn(n,e),e=Pu(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(fr(t,1,e),ye(t,e));break}}t=t.return}}function Bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-rs?zt(e,0):ns|=n),ye(e,t)}function Qu(e,t){t===0&&(e.mode&1?(t=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):t=1);var n=de();e=Je(e,t),e!==null&&(fr(e,t,n),ye(e,n))}function $f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qu(e,n)}function Af(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Qu(e,n)}var qu;qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Tf(e,t,n);me=!!(e.flags&131072)}else me=!1,A&&t.flags&1048576&&Xc(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var i=dn(t,ce.current);sn(t,n),i=Ya(null,t,r,e,i,n);var l=Xa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,oi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Va(t),i.updater=_i,t.stateNode=i,i._reactInternals=t,Zl(t,r,e,n),t=ta(null,t,r,!0,l,n)):(t.tag=0,A&&l&&ja(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hf(r),e=Fe(r,e),i){case 0:t=ea(null,t,r,e,n);break e;case 1:t=mo(null,t,r,e,n);break e;case 11:t=fo(null,t,r,e,n);break e;case 14:t=ho(null,t,r,Fe(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ea(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),mo(e,t,r,i,n);case 3:e:{if(Lu(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ru(e,t),fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=mn(Error(N(423)),t),t=vo(e,t,r,n,i);break e}else if(r!==i){i=mn(Error(N(424)),t),t=vo(e,t,r,n,i);break e}else for(we=ft(t.stateNode.containerInfo.firstChild),ke=t,A=!0,Oe=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===i){t=et(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return iu(t),e===null&&Kl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,Wl(r,i)?a=null:l!==null&&Wl(r,l)&&(t.flags|=32),Ru(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return Mu(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),fo(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,j(di,r._currentValue),r._currentValue=a,l!==null)if(Be(l.value,a)){if(l.children===i.children&&!ve.current){t=et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ye(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Yl(l.return,n,t),o.lanes|=n;break}s=s.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(N(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,sn(t,n),i=Le(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),ho(e,t,r,i,n);case 15:return bu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),qr(e,t),t.tag=1,ge(r)?(e=!0,oi(t)):e=!1,sn(t,n),Cu(t,r,i),Zl(t,r,i,n),ta(null,t,r,!0,e,n);case 19:return _u(e,t,n);case 22:return Tu(e,t,n)}throw Error(N(156,t.tag))};function Gu(e,t){return kc(e,t)}function Uf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Uf(e,t,n,r)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===ba)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")ss(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vt:return Ft(n.children,i,l,t);case Ea:a=8,i|=8;break;case Sl:return e=Te(12,n,t,i|2),e.elementType=Sl,e.lanes=l,e;case Nl:return e=Te(13,n,t,i),e.elementType=Nl,e.lanes=l,e;case Cl:return e=Te(19,n,t,i),e.elementType=Cl,e.lanes=l,e;case ic:return Ii(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:a=10;break e;case rc:a=9;break e;case Pa:a=11;break e;case ba:a=14;break e;case rt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Te(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ft(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Ii(e,t,n,r){return e=Te(22,e,r,t),e.elementType=ic,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function os(e,t,n,r,i,l,a,o,s){return e=new Wf(e,t,n,o,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(l),e}function Vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ku(e){if(!e)return wt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ge(n))return Kc(e,n,t)}return t}function Yu(e,t,n,r,i,l,a,o,s){return e=os(n,r,!0,e,i,l,a,o,s),e.context=Ku(null),n=e.current,r=de(),i=vt(n),l=Ye(r,i),l.callback=t??null,ht(n,l,i),e.current.lanes=i,fr(e,i,r),ye(e,r),e}function Oi(e,t,n,r){var i=t.current,l=de(),a=vt(i);return n=Ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(i,t,a),e!==null&&(je(e,i,a,l),Wr(e,i,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Po(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cs(e,t){Po(e,t),(e=e.alternate)&&Po(e,t)}function Qf(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function us(e){this._internalRoot=e}Di.prototype.render=us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Oi(e,t,null,null)};Di.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Oi(null,e,null,null)}),t[Ze]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&Lc(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bo(){}function qf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=ki(a);l.call(u)}}var a=Yu(t,r,e,0,null,!1,!1,"",bo);return e._reactRootContainer=a,e[Ze]=a.current,Jn(e.nodeType===8?e.parentNode:e),Bt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=ki(s);o.call(u)}}var s=os(e,0,!1,null,null,!1,!1,"",bo);return e._reactRootContainer=s,e[Ze]=s.current,Jn(e.nodeType===8?e.parentNode:e),Bt(function(){Oi(t,s,n,r)}),s}function Bi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var s=ki(a);o.call(s)}}Oi(t,a,e,i)}else a=qf(n,t,e,i,r);return ki(a)}Pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(La(t,n|1),ye(t,G()),!(I&6)&&(vn=G()+500,Nt()))}break;case 13:Bt(function(){var r=Je(e,1);if(r!==null){var i=de();je(r,e,1,i)}}),cs(e,1)}};Ma=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=de();je(t,e,134217728,n)}cs(e,134217728)}};bc=function(e){if(e.tag===13){var t=vt(e),n=Je(e,t);if(n!==null){var r=de();je(n,e,t,r)}cs(e,t)}};Tc=function(){return O};Rc=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Fl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ri(r);if(!i)throw Error(N(90));ac(r),bl(r,i)}}}break;case"textarea":oc(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};mc=is;vc=Bt;var Gf={usingClientEntryPoint:!1,Events:[mr,Kt,Ri,fc,hc,is]},Mn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kf={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{Ei=Dr.inject(Kf),We=Dr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(t))throw Error(N(200));return Vf(e,t,null,n)};Ne.createRoot=function(e,t){if(!ds(e))throw Error(N(299));var n=!1,r="",i=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=os(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Jn(e.nodeType===8?e.parentNode:e),new us(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Bt(e)};Ne.hydrate=function(e,t,n){if(!ji(t))throw Error(N(200));return Bi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!ds(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Yu(t,null,e,1,n??null,i,!1,l,a),e[Ze]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)};Ne.render=function(e,t,n){if(!ji(t))throw Error(N(200));return Bi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!ji(e))throw Error(N(40));return e._reactRootContainer?(Bt(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=is;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Bi(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zo.exports=Ne;var Yf=Zo.exports,To=Yf;wl.createRoot=To.createRoot,wl.hydrateRoot=To.hydrateRoot;var Ju=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Ju||{}),gl={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(Ju);var ps={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(ps).reduce((e,[t,n])=>(e[n]=t,e),{});var or="data-rh",Xf=e=>Array.isArray(e)?e.join(""):e,Zf=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},yl=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Zf(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Jf=["noscript","script","style"],fa=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ed=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),eh=(e,t,n,r)=>{const i=ed(n),l=Xf(t);return i?`<${e} ${or}="true" ${i}>${fa(l,r)}</${e}>`:`<${e} ${or}="true">${fa(l,r)}</${e}>`},th=(e,t,n=!0)=>t.reduce((r,i)=>{const l=i,a=Object.keys(l).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,m)=>{const f=typeof l[m]>"u"?m:`${m}="${fa(l[m],n)}"`;return u?`${u} ${f}`:f},""),o=l.innerHTML||l.cssText||"",s=Jf.indexOf(e)===-1;return`${r}<${e} ${or}="true" ${a}${s?"/>":`>${o}</${e}>`}`},""),td=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=ps[r];return n[i||r]=e[r],n},t),nh=(e,t,n)=>{const r={key:t,[or]:!0},i=td(n,r);return[yn.createElement("title",i,t)]},Xr=(e,t)=>t.map((n,r)=>{const i={key:r,[or]:!0};return Object.keys(n).forEach(l=>{const o=ps[l]||l;if(o==="innerHTML"||o==="cssText"){const s=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:s}}else i[o]=n[l]}),yn.createElement(e,i)}),Ee=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>nh(e,t.title,t.titleAttributes),toString:()=>eh(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>td(t),toString:()=>ed(t)};default:return{toComponent:()=>Xr(e,t),toString:()=>th(e,t,n)}}},rh=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=yl(e,gl.meta),l=yl(t,gl.link),a=yl(n,gl.script);return{priorityMethods:{toComponent:()=>[...Xr("meta",i.priority),...Xr("link",l.priority),...Xr("script",a.priority)],toString:()=>`${Ee("meta",i.priority,r)} ${Ee("link",l.priority,r)} ${Ee("script",a.priority,r)}`},metaTags:i.default,linkTags:l.default,scriptTags:a.default}},ih=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:l,styleTags:a,title:o="",titleAttributes:s,prioritizeSeoTags:u}=e;let{linkTags:m,metaTags:f,scriptTags:v}=e,k={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:k,linkTags:m,metaTags:f,scriptTags:v}=rh(e)),{priority:k,base:Ee("base",t,r),bodyAttributes:Ee("bodyAttributes",n,r),htmlAttributes:Ee("htmlAttributes",i,r),link:Ee("link",m,r),meta:Ee("meta",f,r),noscript:Ee("noscript",l,r),script:Ee("script",v,r),style:Ee("style",a,r),title:Ee("title",{title:o,titleAttributes:s},r)}},lh=ih,jr=[],nd=!!(typeof window<"u"&&window.document&&window.document.createElement),ah=class{constructor(e,t){bt(this,"instances",[]);bt(this,"canUseDOM",nd);bt(this,"context");bt(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?jr:this.instances,add:e=>{(this.canUseDOM?jr:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?jr:this.instances).indexOf(e);(this.canUseDOM?jr:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=lh({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},sh={},oh=yn.createContext(sh),cn,ch=(cn=class extends C.Component{constructor(n){super(n);bt(this,"helmetData");this.helmetData=new ah(this.props.context||{},cn.canUseDOM)}render(){return yn.createElement(oh.Provider,{value:this.helmetData.value},this.props.children)}},bt(cn,"canUseDOM",nd),cn);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const Ro="popstate";function uh(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:a,hash:o}=r.location;return ha("",{pathname:l,search:a,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Si(i)}return ph(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dh(){return Math.random().toString(36).substr(2,8)}function Lo(e,t){return{usr:e.state,key:e.key,idx:t}}function ha(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||dh()})}function Si(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ph(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,o=ct.Pop,s=null,u=m();u==null&&(u=0,a.replaceState(cr({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function f(){o=ct.Pop;let x=m(),p=x==null?null:x-u;u=x,s&&s({action:o,location:g.location,delta:p})}function v(x,p){o=ct.Push;let d=ha(g.location,x,p);n&&n(d,x),u=m()+1;let h=Lo(d,u),w=g.createHref(d);try{a.pushState(h,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}l&&s&&s({action:o,location:g.location,delta:1})}function k(x,p){o=ct.Replace;let d=ha(g.location,x,p);n&&n(d,x),u=m();let h=Lo(d,u),w=g.createHref(d);a.replaceState(h,"",w),l&&s&&s({action:o,location:g.location,delta:0})}function S(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof x=="string"?x:Si(x);return d=d.replace(/ $/,"%20"),Y(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let g={get action(){return o},get location(){return e(i,a)},listen(x){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ro,f),s=x,()=>{i.removeEventListener(Ro,f),s=null}},createHref(x){return t(i,x)},createURL:S,encodeLocation(x){let p=S(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:k,go(x){return a.go(x)}};return g}var Mo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mo||(Mo={}));function fh(e,t,n){return n===void 0&&(n="/"),hh(e,t,n,!1)}function hh(e,t,n,r){let i=typeof t=="string"?kn(t):t,l=hs(i.pathname||"/",n);if(l==null)return null;let a=rd(e);mh(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let u=Ph(l);o=Ch(a[s],u,r)}return o}function rd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,a,o)=>{let s={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=yt([r,s.relativePath]),m=n.concat(s);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rd(l.children,t,m,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Sh(u,l.index),routesMeta:m})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))i(l,a);else for(let s of id(l.path))i(l,a,s)}),t}function id(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=id(r.join("/")),o=[];return o.push(...a.map(s=>s===""?l:[l,s].join("/"))),i&&o.push(...a),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function mh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vh=/^:[\w-]+$/,gh=3,yh=2,xh=1,wh=10,kh=-2,_o=e=>e==="*";function Sh(e,t){let n=e.split("/"),r=n.length;return n.some(_o)&&(r+=kh),t&&(r+=yh),n.filter(i=>!_o(i)).reduce((i,l)=>i+(vh.test(l)?gh:l===""?xh:wh),r)}function Nh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ch(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},l="/",a=[];for(let o=0;o<r.length;++o){let s=r[o],u=o===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",f=zo({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),v=s.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=zo({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},m)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:yt([l,f.pathname]),pathnameBase:Mh(yt([l,f.pathnameBase])),route:v}),f.pathnameBase!=="/"&&(l=yt([l,f.pathnameBase]))}return a}function zo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Eh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,m,f)=>{let{paramName:v,isOptional:k}=m;if(v==="*"){let g=o[f]||"";a=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const S=o[f];return k&&!S?u[v]=void 0:u[v]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:a,pattern:e}}function Eh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ph(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=e=>bh.test(e);function Rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kn(e):e,l;if(n)if(Th(n))l=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?l=Fo(n.substring(1),"/"):l=Fo(n,t)}else l=t;return{pathname:l,search:_h(r),hash:zh(i)}}function Fo(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ld(e,t){let n=Lh(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ad(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kn(e):(i=cr({},e),Y(!i.pathname||!i.pathname.includes("?"),xl("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),xl("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),xl("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}o=f>=0?t[f]:"/"}let s=Rh(i,o),u=a&&a!=="/"&&a.endsWith("/"),m=(l||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const yt=e=>e.join("/").replace(/\/\/+/g,"/"),Mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sd=["post","put","patch","delete"];new Set(sd);const Ih=["get",...sd];new Set(Ih);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}const ms=C.createContext(null),Oh=C.createContext(null),Ut=C.createContext(null),$i=C.createContext(null),Ct=C.createContext({outlet:null,matches:[],isDataRoute:!1}),od=C.createContext(null);function Dh(e,t){let{relative:n}=t===void 0?{}:t;gr()||Y(!1);let{basename:r,navigator:i}=C.useContext(Ut),{hash:l,pathname:a,search:o}=ud(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:yt([r,a])),i.createHref({pathname:s,search:o,hash:l})}function gr(){return C.useContext($i)!=null}function Ai(){return gr()||Y(!1),C.useContext($i).location}function cd(e){C.useContext(Ut).static||C.useLayoutEffect(e)}function jh(){let{isDataRoute:e}=C.useContext(Ct);return e?Xh():Bh()}function Bh(){gr()||Y(!1);let e=C.useContext(ms),{basename:t,future:n,navigator:r}=C.useContext(Ut),{matches:i}=C.useContext(Ct),{pathname:l}=Ai(),a=JSON.stringify(ld(i,n.v7_relativeSplatPath)),o=C.useRef(!1);return cd(()=>{o.current=!0}),C.useCallback(function(u,m){if(m===void 0&&(m={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let f=ad(u,JSON.parse(a),l,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yt([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,a,l,e])}function vs(){let{matches:e}=C.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function ud(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Ut),{matches:i}=C.useContext(Ct),{pathname:l}=Ai(),a=JSON.stringify(ld(i,r.v7_relativeSplatPath));return C.useMemo(()=>ad(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function $h(e,t){return Ah(e,t)}function Ah(e,t,n,r){gr()||Y(!1);let{navigator:i}=C.useContext(Ut),{matches:l}=C.useContext(Ct),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Ai(),m;if(t){var f;let x=typeof t=="string"?kn(t):t;s==="/"||(f=x.pathname)!=null&&f.startsWith(s)||Y(!1),m=x}else m=u;let v=m.pathname||"/",k=v;if(s!=="/"){let x=s.replace(/^\//,"").split("/");k="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let S=fh(e,{pathname:k}),g=Qh(S&&S.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:yt([s,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:yt([s,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,n,r);return t&&g?C.createElement($i.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ct.Pop}},g):g}function Uh(){let e=Yh(),t=Fh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,l)}const Hh=C.createElement(Uh,null);class Wh extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Ct.Provider,{value:this.props.routeContext},C.createElement(od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vh(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(ms);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ct.Provider,{value:t},r)}function Qh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(i=n)==null?void 0:i.errors;if(o!=null){let m=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);m>=0||Y(!1),a=a.slice(0,Math.min(a.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let f=a[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=m),f.route.id){let{loaderData:v,errors:k}=n,S=f.route.loader&&v[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||S){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,f,v)=>{let k,S=!1,g=null,x=null;n&&(k=o&&f.route.id?o[f.route.id]:void 0,g=f.route.errorElement||Hh,s&&(u<0&&v===0?(Zh("route-fallback",!1),S=!0,x=null):u===v&&(S=!0,x=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,v+1)),d=()=>{let h;return k?h=g:S?h=x:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,C.createElement(Vh,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?C.createElement(Wh,{location:n.location,revalidation:n.revalidation,component:g,error:k,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var dd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dd||{}),Ni=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ni||{});function qh(e){let t=C.useContext(ms);return t||Y(!1),t}function Gh(e){let t=C.useContext(Oh);return t||Y(!1),t}function Kh(e){let t=C.useContext(Ct);return t||Y(!1),t}function pd(e){let t=Kh(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Yh(){var e;let t=C.useContext(od),n=Gh(Ni.UseRouteError),r=pd(Ni.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Xh(){let{router:e}=qh(dd.UseNavigateStable),t=pd(Ni.UseNavigateStable),n=C.useRef(!1);return cd(()=>{n.current=!0}),C.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ur({fromRouteId:t},l)))},[e,t])}const Io={};function Zh(e,t,n){!t&&!Io[e]&&(Io[e]=!0)}function Jh(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Ae(e){Y(!1)}function em(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ct.Pop,navigator:l,static:a=!1,future:o}=e;gr()&&Y(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:l,static:a,future:ur({v7_relativeSplatPath:!1},o)}),[s,o,l,a]);typeof r=="string"&&(r=kn(r));let{pathname:m="/",search:f="",hash:v="",state:k=null,key:S="default"}=r,g=C.useMemo(()=>{let x=hs(m,s);return x==null?null:{location:{pathname:x,search:f,hash:v,state:k,key:S},navigationType:i}},[s,m,f,v,k,S,i]);return g==null?null:C.createElement(Ut.Provider,{value:u},C.createElement($i.Provider,{children:n,value:g}))}function tm(e){let{children:t,location:n}=e;return $h(ma(t),n)}new Promise(()=>{});function ma(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let l=[...t,i];if(r.type===C.Fragment){n.push.apply(n,ma(r.props.children,l));return}r.type!==Ae&&Y(!1),!r.props.index||!r.props.children||Y(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ma(r.props.children,l)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}function nm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function im(e,t){return e.button===0&&(!t||t==="_self")&&!rm(e)}const lm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],am="6";try{window.__reactRouterVersion=am}catch{}const sm="startTransition",Oo=Dd[sm];function om(e){let{basename:t,children:n,future:r,window:i}=e,l=C.useRef();l.current==null&&(l.current=uh({window:i,v5Compat:!0}));let a=l.current,[o,s]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=C.useCallback(f=>{u&&Oo?Oo(()=>s(f)):s(f)},[s,u]);return C.useLayoutEffect(()=>a.listen(m),[a,m]),C.useEffect(()=>Jh(r),[r]),C.createElement(em,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:o,target:s,to:u,preventScrollReset:m,viewTransition:f}=t,v=nm(t,lm),{basename:k}=C.useContext(Ut),S,g=!1;if(typeof u=="string"&&um.test(u)&&(S=u,cm))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=hs(w.pathname,k);w.origin===h.origin&&E!=null?u=E+w.search+w.hash:g=!0}catch{}let x=Dh(u,{relative:i}),p=dm(u,{replace:a,state:o,target:s,preventScrollReset:m,relative:i,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return C.createElement("a",va({},v,{href:S||x,onClick:g||l?r:d,ref:n,target:s}))});var Do;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Do||(Do={}));var jo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jo||(jo={}));function dm(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:o}=t===void 0?{}:t,s=jh(),u=Ai(),m=ud(e,{relative:a});return C.useCallback(f=>{if(im(f,n)){f.preventDefault();let v=r!==void 0?r:Si(u)===Si(m);s(e,{replace:v,state:i,preventScrollReset:l,relative:a,viewTransition:o})}},[u,s,m,r,i,n,e,l,a,o])}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),le=(e,t)=>{const n=C.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:o="",children:s,...u},m)=>C.createElement("svg",{ref:m,...pm,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${fm(e)}`,o].join(" "),...u},[...t.map(([f,v])=>C.createElement(f,v)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=le("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=le("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=le("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=le("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=le("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=le("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=le("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dr="https://healthindex-backend.fly.dev",vd=async(e=null)=>{try{const t=e?`${dr}/api/products?category=${e}`:`${dr}/api/products`,n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch products");const r=await n.json();return{products:Array.isArray(r)?r:[],count:r.length}}catch(t){return console.error("Failed to fetch products:",t),{products:[],count:0}}},Em=async e=>{try{const t=await fetch(`${dr}/api/products/${e}`);if(!t.ok)throw new Error("Product not found");return await t.json()}catch(t){throw console.error("Failed to fetch product:",t),t}},Pm=async()=>{try{const e=await fetch(`${dr}/api/categories`);if(!e.ok)throw new Error("Failed to fetch categories");return await e.json()}catch(e){return console.error("Failed to fetch categories:",e),[]}},bm=async e=>{try{const t=await fetch(`${dr}/api/search/${e}`);if(!t.ok)throw new Error("Search failed");return await t.json()}catch(t){return console.error("Price search failed:",t),null}},Tm=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(!0);C.useEffect(()=>{i()},[]);const i=async()=>{try{const{products:s}=await vd(),m=["sauna","hyperbaric","cryotherapy","red-light","compression","pemf"].map(f=>s.find(v=>v.category===f)).filter(Boolean).slice(0,6);t(m)}catch(s){console.error("Failed to fetch products:",s)}finally{r(!1)}},l=s=>{if(!(s!=null&&s.prices))return null;const u=Object.entries(s.prices).filter(([m,f])=>f.inStock&&f.price).map(([m,f])=>({retailer:m,...f}));return u.length===0?null:u.reduce((m,f)=>f.price<m.price?f:m,u[0])},a=s=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(s||0);return y("div",{className:"min-h-screen bg-[#0a0a0a]",children:[y("section",{className:"max-w-[900px] mx-auto px-6 py-16 text-center",children:[y("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm text-[#a3a3a3] mb-8",children:[c(fd,{className:"w-4 h-4 text-emerald-400"}),"Medical-grade wellness equipment"]}),y("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fafafa] mb-4",children:["Wellness ",c("span",{className:"text-emerald-400",children:"Intelligence"})]}),c("p",{className:"text-xl text-emerald-400/80 mb-4",children:"Medical Device Tracking"}),c("p",{className:"text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-10 leading-relaxed",children:"Compare prices on saunas, hyperbaric chambers, cryotherapy, and biohacking equipment across certified retailers."}),y("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[y(D,{to:"/products",className:"inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors",children:[c(hd,{className:"w-5 h-5"}),"Browse Equipment"]}),y(D,{to:"/alerts",className:"inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141414] border border-[#262626] text-[#fafafa] rounded-xl font-medium hover:bg-[#1a1a1a] transition-colors",children:[c(gs,{className:"w-5 h-5"}),"Set Price Alert"]})]}),y("div",{className:"flex items-center justify-center gap-16",children:[y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"11+"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Products"})]}),y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"6"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Categories"})]}),y("div",{className:"text-center",children:[c("div",{className:"text-3xl font-bold text-[#fafafa]",children:"24/7"}),c("div",{className:"text-sm text-[#a3a3a3]",children:"Monitoring"})]})]})]}),y("section",{className:"max-w-[1200px] mx-auto px-6 py-12",children:[c("h2",{className:"text-2xl font-semibold text-[#fafafa] mb-8",children:"Categories"}),c("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:[{name:"Saunas",path:"/products/sauna",icon:"🔥",count:"Infrared & Traditional"},{name:"Hyperbaric",path:"/products/hyperbaric",icon:"🫧",count:"Oxygen Therapy"},{name:"Cryotherapy",path:"/products/cryotherapy",icon:"❄️",count:"Cold Therapy"},{name:"Red Light",path:"/products/red-light",icon:"💡",count:"Light Therapy"},{name:"Compression",path:"/products/compression",icon:"🦵",count:"Recovery Boots"},{name:"PEMF",path:"/products/pemf",icon:"⚡",count:"EMF Therapy"}].map(s=>y(D,{to:s.path,className:"group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all text-center",children:[c("div",{className:"text-4xl mb-3",children:s.icon}),c("h3",{className:"font-medium text-[#fafafa] group-hover:text-emerald-400 transition-colors",children:s.name}),c("p",{className:"text-sm text-[#a3a3a3] mt-1",children:s.count})]},s.path))})]}),y("section",{className:"max-w-[1200px] mx-auto px-6 py-12",children:[y("div",{className:"flex items-center justify-between mb-8",children:[c("h2",{className:"text-2xl font-semibold text-[#fafafa]",children:"Featured Equipment"}),y(D,{to:"/products",className:"text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1",children:["View All ",c(hm,{className:"w-4 h-4"})]})]}),n?c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((s,u)=>y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 animate-pulse",children:[c("div",{className:"h-4 bg-[#262626] rounded w-16 mb-3"}),c("div",{className:"h-6 bg-[#262626] rounded w-full mb-2"}),c("div",{className:"h-8 bg-[#262626] rounded w-24"})]},u))}):c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(s=>{const u=l(s);return y(D,{to:`/product/${s.id}`,className:"group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all",children:[c("div",{className:"h-48 overflow-hidden bg-[#0a0a0a]",children:c("img",{src:s.image||"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",alt:s.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),y("div",{className:"p-6",children:[y("div",{className:"flex items-start justify-between mb-3",children:[c("span",{className:"inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400",children:s.category}),c("span",{className:"text-sm text-[#a3a3a3] capitalize",children:u==null?void 0:u.retailer})]}),c("h3",{className:"text-xl font-semibold text-[#fafafa] mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2",children:s.name}),s.specs&&c("p",{className:"text-[#a3a3a3] text-sm mb-3",children:Object.values(s.specs).slice(0,2).join(" • ")}),c("div",{className:"flex items-end justify-between",children:y("div",{children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:"Best Price"}),c("p",{className:"text-2xl font-bold text-[#fafafa]",children:a(u==null?void 0:u.price)})]})})]})]},s.id)})})]})]})},$o=()=>{const{category:e}=vs(),[t,n]=C.useState([]),[r,i]=C.useState([]),[l,a]=C.useState(!0),[o,s]=C.useState(e||"All");C.useEffect(()=>{u(),m()},[]),C.useEffect(()=>{e&&s(e)},[e]);const u=async()=>{const g=await Pm();i(g)},m=async()=>{a(!0);try{const{products:g}=await vd();n(Array.isArray(g)?g:[])}catch(g){console.error("Failed to fetch products:",g)}a(!1)},f=g=>{if(!(g!=null&&g.prices))return null;const x=Object.entries(g.prices).filter(([p,d])=>d.inStock&&d.price).map(([p,d])=>({retailer:p,...d}));return x.length===0?null:x.reduce((p,d)=>d.price<p.price?d:p,x[0])},v=g=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(g||0),k=o==="All"?t:t.filter(g=>g.category===o),S={sauna:"Saunas",hyperbaric:"Hyperbaric Chambers",cryotherapy:"Cryotherapy","red-light":"Red Light Therapy",compression:"Compression Systems",pemf:"PEMF Devices"};return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[1200px] mx-auto px-6 py-8",children:[y("div",{className:"flex items-center gap-2 text-sm text-[#a3a3a3] mb-6",children:[c(D,{to:"/",className:"hover:text-emerald-400",children:"Home"}),c(Bo,{className:"w-4 h-4"}),c(D,{to:"/products",className:"hover:text-emerald-400",children:"Products"}),o!=="All"&&y(Wd,{children:[c(Bo,{className:"w-4 h-4"}),c("span",{className:"text-[#fafafa]",children:S[o]||o})]})]}),c("h1",{className:"text-3xl md:text-4xl font-bold text-[#fafafa] mb-8",children:o==="All"?"All Products":S[o]||o}),y("div",{className:"flex flex-wrap items-center gap-2 mb-8",children:[c(wm,{className:"w-4 h-4 text-[#a3a3a3] mr-2"}),c("button",{onClick:()=>s("All"),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${o==="All"?"bg-emerald-500 text-white":"bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]"}`,children:"All"}),r.map(g=>c("button",{onClick:()=>s(g),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${o===g?"bg-emerald-500 text-white":"bg-[#141414] text-[#a3a3a3] hover:text-[#fafafa] border border-[#262626]"}`,children:S[g]||g},g))]}),l?c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((g,x)=>y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 animate-pulse",children:[c("div",{className:"h-4 bg-[#262626] rounded w-16 mb-3"}),c("div",{className:"h-6 bg-[#262626] rounded w-full mb-2"}),c("div",{className:"h-8 bg-[#262626] rounded w-24"})]},x))}):c("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:k.map(g=>{const x=f(g),p=g.prices?Object.values(g.prices):[],d=p.some(E=>E.inStock&&E.price),h=p.filter(E=>E.inStock&&E.price).length,w=d?h===1?"limited":"in-stock":"out";return y("div",{className:"group bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] hover:border-emerald-500/50 transition-all flex flex-col",children:[c(D,{to:`/product/${g.id}`,className:"block",children:y("div",{className:"h-48 overflow-hidden bg-[#0a0a0a] relative",children:[c("img",{src:g.image||"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",alt:g.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),c("div",{className:`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold ${w==="out"?"bg-red-500/90 text-white":w==="limited"?"bg-orange-500/90 text-white":"bg-emerald-500/90 text-white"}`,children:w==="out"?"OUT OF STOCK":w==="limited"?"LIMITED":"IN STOCK"})]})}),y("div",{className:"p-6 flex flex-col flex-1",children:[y("div",{className:"flex items-start justify-between mb-3",children:[c("span",{className:"inline-block px-2 py-1 rounded text-xs font-medium uppercase tracking-wider bg-emerald-500/20 text-emerald-400",children:g.category}),c("span",{className:"text-xs text-[#a3a3a3] capitalize",children:g.brand})]}),c(D,{to:`/product/${g.id}`,children:c("h3",{className:"text-xl font-semibold text-[#fafafa] mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2",children:g.name})}),g.specs&&c("div",{className:"flex flex-wrap gap-2 mb-4",children:Object.entries(g.specs).slice(0,3).map(([E,T])=>c("span",{className:"text-xs px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-[#a3a3a3]",children:T},E))}),y("div",{className:"mt-auto",children:[y("div",{className:"flex items-end justify-between mb-4",children:[y("div",{children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:"Best Price"}),c("p",{className:"text-2xl font-bold text-[#fafafa]",children:v(x==null?void 0:x.price)})]}),(x==null?void 0:x.price)&&y("span",{className:"text-sm text-emerald-400",children:["from ",x.retailer]})]}),x!=null&&x.url?c("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full py-3 bg-emerald-500 text-white text-center text-sm font-medium rounded-xl hover:bg-emerald-600 transition-colors",onClick:E=>E.stopPropagation(),children:"View Deal →"}):c(D,{to:`/product/${g.id}`,className:"block w-full py-3 bg-[#262626] text-[#a3a3a3] text-center text-sm font-medium rounded-xl hover:bg-[#333] transition-colors",children:"View Details"})]})]})]},g.id)})}),!l&&k.length===0&&c("div",{className:"text-center py-16",children:c("p",{className:"text-[#a3a3a3]",children:"No products found in this category."})})]})})},Rm=()=>{const{id:e}=vs(),[t,n]=C.useState(null),[r,i]=C.useState(!0),[l,a]=C.useState(null),[o,s]=C.useState(!1);C.useEffect(()=>{u()},[e]);const u=async()=>{try{i(!0);const x=await Em(e);n(x)}catch(x){console.error("Failed to fetch product:",x)}finally{i(!1)}},m=async()=>{s(!0);try{const x=await bm(e);a(x)}catch(x){console.error("Price search failed:",x)}finally{s(!1)}},f=x=>x!=null&&x.prices?Object.entries(x.prices).filter(([p,d])=>d.price).map(([p,d])=>({retailer:p,...d})).sort((p,d)=>(p.price||1/0)-(d.price||1/0)):[],v=x=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(x||0),k={sauna:"Sauna",hyperbaric:"Hyperbaric Chamber",cryotherapy:"Cryotherapy Device","red-light":"Red Light Therapy",compression:"Compression System",pemf:"PEMF Device"};if(r)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:c("div",{className:"animate-pulse text-emerald-400",children:"Loading..."})});if(!t)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:c("div",{className:"text-[#a3a3a3]",children:"Product not found"})});const S=f(t),g=S[0];return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[1200px] mx-auto px-6 py-8",children:[y("div",{className:"flex items-center gap-2 text-sm text-[#a3a3a3] mb-6",children:[c(D,{to:"/",className:"hover:text-emerald-400",children:"Home"}),c("span",{children:"/"}),c(D,{to:"/products",className:"hover:text-emerald-400",children:"Products"}),c("span",{children:"/"}),c(D,{to:`/products/${t.category}`,className:"hover:text-emerald-400",children:k[t.category]||t.category})]}),y(D,{to:"/products",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-6 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Products"]}),y("div",{className:"mb-8",children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:k[t.category]||t.category}),c("h1",{className:"text-3xl md:text-4xl font-bold text-[#fafafa] mb-2",children:t.name}),c("p",{className:"text-[#a3a3a3]",children:t.brand})]}),y("div",{className:"grid lg:grid-cols-3 gap-8",children:[y("div",{className:"lg:col-span-2 space-y-6",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa] mb-4",children:"Specifications"}),c("div",{className:"grid grid-cols-2 gap-4",children:t.specs&&Object.entries(t.specs).map(([x,p])=>y("div",{className:"bg-[#0a0a0a] border border-[#262626] rounded-lg p-4",children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-1",children:x}),c("p",{className:"text-[#fafafa] font-medium",children:p})]},x))})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa] mb-4",children:"Price Comparison"}),c("div",{className:"space-y-3",children:S.map((x,p)=>y("div",{className:`flex items-center justify-between p-4 rounded-xl border ${p===0?"bg-emerald-500/10 border-emerald-500/30":"bg-[#0a0a0a] border-[#262626]"}`,children:[y("div",{className:"flex items-center gap-3",children:[c("span",{className:"text-[#fafafa] font-medium capitalize",children:x.retailer}),p===0&&c("span",{className:"px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full",children:"Best Price"}),x.inStock?c("span",{className:"text-xs text-emerald-400",children:"In Stock"}):c("span",{className:"text-xs text-[#a3a3a3]",children:"Out of Stock"})]}),y("div",{className:"flex items-center gap-4",children:[c("span",{className:"text-xl font-bold text-[#fafafa]",children:v(x.price)}),x.url&&y("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1.5 bg-[#3b82f6] text-white text-sm rounded-lg hover:bg-[#2563eb] transition-colors",children:["View ",c(ym,{className:"w-3 h-3"})]})]})]},x.retailer))})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6",children:[y("div",{className:"flex items-center justify-between mb-4",children:[c("h2",{className:"text-lg font-semibold text-[#fafafa]",children:"Live Price Search"}),y("button",{onClick:m,disabled:o,className:"flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50",children:[c(hd,{className:"w-4 h-4"}),o?"Searching...":"Search Prices"]})]}),(l==null?void 0:l.results)&&c("div",{className:"space-y-3",children:l.results.slice(0,5).map((x,p)=>c("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 bg-[#0a0a0a] border border-[#262626] rounded-lg hover:border-emerald-500/50 transition-colors",children:y("div",{className:"flex items-start justify-between",children:[y("div",{children:[c("h4",{className:"text-[#fafafa] font-medium line-clamp-1",children:x.title}),c("p",{className:"text-sm text-[#a3a3a3] line-clamp-2 mt-1",children:x.description})]}),x.price&&c("span",{className:"text-emerald-400 font-bold whitespace-nowrap ml-4",children:v(x.price)})]})},p))}),!l&&!o&&c("p",{className:"text-[#a3a3a3] text-sm",children:'Click "Search Prices" to find current prices across the web using Brave Search.'})]})]}),c("div",{className:"space-y-4",children:y("div",{className:"bg-[#141414] border border-[#262626] rounded-2xl p-6 sticky top-24",children:[y("div",{className:"text-center mb-6",children:[c("p",{className:"text-xs text-[#a3a3a3] uppercase tracking-wider mb-2",children:"Best Price"}),c("p",{className:"text-4xl font-bold text-[#fafafa]",children:v(g==null?void 0:g.price)}),y("p",{className:"text-sm text-emerald-400 mt-1 capitalize",children:["at ",g==null?void 0:g.retailer]})]}),(g==null?void 0:g.url)&&c("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"block w-full py-4 bg-emerald-500 text-white text-center font-medium rounded-xl hover:bg-emerald-600 transition-colors mb-3",children:"View Deal"}),y("button",{className:"flex items-center justify-center gap-2 w-full py-4 bg-[#141414] border border-[#262626] text-[#fafafa] font-medium rounded-xl hover:bg-[#1a1a1a] transition-colors",children:[c(gs,{className:"w-5 h-5"}),"Set Price Alert"]})]})})]})]})})},Lm=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(md,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"Privacy Policy"})]}),y("div",{className:"prose prose-invert max-w-none",children:[c("p",{className:"text-[#a3a3a3] mb-6",children:"Last updated: February 24, 2026"}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Overview"}),c("p",{className:"text-[#a3a3a3] mb-4",children:'HealthIndex ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.'})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Information We Collect"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[y("li",{children:[c("strong",{children:"Usage Data:"})," We collect anonymous usage statistics to improve our service."]}),y("li",{children:[c("strong",{children:"Cookies:"})," We use cookies to enhance your browsing experience and analyze site traffic."]}),y("li",{children:[c("strong",{children:"Price Alerts:"})," If you sign up for price alerts, we collect your email address solely for notification purposes."]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"How We Use Your Information"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[c("li",{children:"To provide and maintain our price tracking service"}),c("li",{children:"To notify you of price drops (if you opt in)"}),c("li",{children:"To analyze usage patterns and improve our website"}),c("li",{children:"To detect and prevent technical issues"})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Third-Party Services"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"We use the following third-party services:"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[y("li",{children:[c("strong",{children:"Brave Search API:"})," For live price comparisons"]}),y("li",{children:[c("strong",{children:"Vercel:"})," For website hosting"]}),y("li",{children:[c("strong",{children:"Fly.io:"})," For backend services"]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Affiliate Disclosure"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex participates in affiliate marketing programs. This means we may earn commissions on purchases made through our links to retailer sites. This does not affect the price you pay."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Your Rights"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"You have the right to:"}),y("ul",{className:"list-disc list-inside text-[#a3a3a3] space-y-2",children:[c("li",{children:"Access the personal data we hold about you"}),c("li",{children:"Request correction or deletion of your data"}),c("li",{children:"Opt out of price alert notifications at any time"}),c("li",{children:"Disable cookies through your browser settings"})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact Us"}),c("p",{className:"text-[#a3a3a3]",children:"If you have any questions about this Privacy Policy, please contact us at privacy@healthindex.app"})]})]})]})}),Mm=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(xm,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"Terms of Service"})]}),y("div",{className:"prose prose-invert max-w-none",children:[c("p",{className:"text-[#a3a3a3] mb-6",children:"Last updated: February 24, 2026"}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Agreement to Terms"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"By accessing or using HealthIndex, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Use of Service"}),c("p",{className:"text-[#a3a3a3] mb-4",children:'HealthIndex provides price comparison and tracking for medical wellness devices. Our service is provided "as is" for informational purposes only.'}),c("p",{className:"text-[#a3a3a3] mb-4",children:"You agree to use our service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Price Accuracy"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"While we strive to provide accurate and up-to-date pricing information, we cannot guarantee the accuracy of all prices displayed. Prices are subject to change without notice. Always verify the final price on the retailer's website before making a purchase."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Affiliate Links"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex contains affiliate links. When you click on these links and make a purchase, we may receive a commission. This comes at no additional cost to you and helps support our service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Intellectual Property"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"All content on HealthIndex, including text, graphics, logos, and software, is the property of HealthIndex or its content suppliers and is protected by copyright and other intellectual property laws."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Disclaimer"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex is not a medical advice service. The products listed are wellness devices and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Limitation of Liability"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"In no event shall HealthIndex be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Changes to Terms"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact"}),c("p",{className:"text-[#a3a3a3]",children:"For questions about these Terms, please contact us at legal@healthindex.app"})]})]})]})}),_m=[{id:"cryotherapy-chamber-buying-guide",title:"Cryotherapy Chambers: A Buyer's Guide",category:"Buying Guide",date:"Feb 27, 2026"},{id:"pemf-mat-buying-guide",title:"PEMF Mat Buying Guide",category:"Buying Guide",date:"Feb 27, 2026"},{id:"choose-right-red-light-device",title:"How to Choose the Right Red Light Device",category:"Buying Guide",date:"Feb 26, 2026"},{id:"red-light-vs-infrared-sauna",title:"Red Light vs Infrared Saunas",category:"Education",date:"Feb 26, 2026"},{id:"2026-wellness-trends",title:"2026 Wellness Tech Trends",category:"Trends",date:"Feb 26, 2026"},{id:"compression-therapy-buying-guide",title:"Compression Therapy Systems",category:"Buying Guide",date:"Feb 28, 2026"}],zm=()=>y("div",{style:{padding:"40px 20px",background:"#0a0a0a",minHeight:"100vh"},children:[c(D,{to:"/",style:{color:"#a3a3a3",textDecoration:"none",display:"inline-block",marginBottom:"20px"},children:"← Back"}),c("h1",{style:{color:"#fafafa",fontSize:"2.5rem",marginBottom:"10px"},children:"HealthIndex Blog"}),c("p",{style:{color:"#a3a3a3",marginBottom:"40px"},children:"Expert guides for medical wellness devices."}),c("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px"},children:_m.map(e=>y(D,{to:`/blog/${e.id}`,style:{background:"#141414",border:"1px solid #262626",borderRadius:"12px",padding:"20px",textDecoration:"none",display:"block"},children:[c("span",{style:{background:"rgba(16, 185, 129, 0.2)",color:"#10b981",padding:"4px 12px",borderRadius:"20px",fontSize:"12px"},children:e.category}),c("h2",{style:{color:"#fafafa",fontSize:"1.2rem",marginTop:"12px"},children:e.title}),c("p",{style:{color:"#737373",fontSize:"14px",marginTop:"8px"},children:e.date})]},e.id))})]}),Fm={"cryotherapy-chamber-buying-guide":{id:"cryotherapy-chamber-buying-guide",title:"Cryotherapy Chambers: A Buyer's Guide",excerpt:"A cryotherapy chamber is not an impulse purchase. Learn the critical differences between device types, cooling technologies, and safety systems before investing.",date:"February 27, 2026",readTime:"12 min read",category:"Buying Guide",content:`
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
    `}},Im=()=>{const{slug:e}=vs(),t=Fm[e];if(!t)return c("div",{className:"min-h-screen bg-[#0a0a0a] flex items-center justify-center",children:y("div",{className:"text-center",children:[c("h1",{className:"text-2xl font-bold text-[#fafafa] mb-4",children:"Post not found"}),c(D,{to:"/blog",className:"text-emerald-400 hover:text-emerald-300",children:"← Back to Blog"})]})});const n=t.content;return c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/blog",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Blog"]}),n?y("article",{children:[y("div",{className:"mb-8",children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:t.category}),c("h1",{className:"text-4xl font-bold text-[#fafafa] mb-4 leading-tight",children:t.title}),y("div",{className:"flex items-center gap-4 text-sm text-[#a3a3a3]",children:[y("span",{className:"flex items-center gap-1",children:[c(vm,{className:"w-4 h-4"}),t.date]}),y("span",{className:"flex items-center gap-1",children:[c(gm,{className:"w-4 h-4"}),t.readTime]})]})]}),c("div",{className:"prose prose-invert max-w-none",dangerouslySetInnerHTML:{__html:t.content}})]}):y("div",{children:[c("span",{className:"inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 mb-4",children:t.category}),c("h1",{className:"text-3xl font-bold text-[#fafafa] mb-4",children:t.title}),c("p",{className:"text-[#a3a3a3] mb-8",children:t.excerpt}),c(D,{to:"/blog",className:"text-emerald-400 hover:text-emerald-300",children:"← Back to Blog"})]})]})})},Om=()=>c("div",{className:"min-h-screen bg-[#0a0a0a]",children:y("div",{className:"max-w-[800px] mx-auto px-6 py-12",children:[y(D,{to:"/",className:"inline-flex items-center gap-2 text-[#a3a3a3] hover:text-emerald-400 mb-8 transition-colors",children:[c(yr,{className:"w-4 h-4"}),"Back to Home"]}),y("div",{className:"flex items-center gap-3 mb-8",children:[c("div",{className:"w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center",children:c(Sm,{className:"w-6 h-6 text-emerald-400"})}),c("h1",{className:"text-3xl font-bold text-[#fafafa]",children:"About HealthIndex"})]}),y("div",{className:"prose prose-invert max-w-none",children:[y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Our Mission"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex was created to solve a simple problem: medical wellness equipment is expensive, and prices vary dramatically between retailers. We aggregate prices from across the web to help you make informed decisions about your health investments."})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"What We Track"}),y("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🔥"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Saunas"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Infrared & Traditional"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🫧"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Hyperbaric"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Oxygen Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"❄️"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Cryotherapy"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Cold Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"💡"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Red Light"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Light Therapy"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"🦵"}),c("h3",{className:"font-medium text-[#fafafa]",children:"Compression"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Recovery Boots"})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4 text-center",children:[c("div",{className:"text-3xl mb-2",children:"⚡"}),c("h3",{className:"font-medium text-[#fafafa]",children:"PEMF"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"EMF Therapy"})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"How It Works"}),y("div",{className:"space-y-4",children:[y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"1"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"We Monitor Prices"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"Our system continuously tracks prices from authorized retailers and manufacturers."})]})]}),y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"2"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"Brave Search Integration"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"We use Brave Search API to find live prices across the web in real-time."})]})]}),y("div",{className:"flex items-start gap-4",children:[c("div",{className:"w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0",children:c("span",{className:"text-emerald-400 font-bold",children:"3"})}),y("div",{children:[c("h3",{className:"font-medium text-[#fafafa] mb-1",children:"You Save Money"}),c("p",{className:"text-[#a3a3a3] text-sm",children:"Compare prices instantly and set alerts for when prices drop."})]})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Our Values"}),y("div",{className:"grid md:grid-cols-3 gap-4",children:[y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(fd,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Transparency"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"We show all prices, including our affiliate relationships."})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(md,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Privacy First"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"Minimal data collection. No tracking. No selling your info."})]}),y("div",{className:"bg-[#141414] border border-[#262626] rounded-xl p-4",children:[c(km,{className:"w-6 h-6 text-emerald-400 mb-3"}),c("h3",{className:"font-medium text-[#fafafa] mb-2",children:"Independent"}),c("p",{className:"text-sm text-[#a3a3a3]",children:"We work with all major brands, not just our partners."})]})]})]}),y("section",{className:"mb-8",children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Disclosure"}),c("p",{className:"text-[#a3a3a3] mb-4",children:"HealthIndex participates in affiliate marketing programs. This means we may earn commissions when you purchase through our links. This comes at no additional cost to you and helps us maintain and improve our service."}),c("p",{className:"text-[#a3a3a3]",children:"Our recommendations are based on product quality and value, not affiliate rates. We prioritize your health outcomes over commissions."})]}),y("section",{children:[c("h2",{className:"text-xl font-semibold text-[#fafafa] mb-4",children:"Contact"}),y("p",{className:"text-[#a3a3a3]",children:["Questions? Suggestions? Reach us at"," ",c("a",{href:"mailto:hello@healthindex.app",className:"text-emerald-400 hover:text-emerald-300",children:"hello@healthindex.app"})]})]})]})]})});function Dm(){const[e,t]=C.useState(!1),n=[{label:"Home",path:"/"},{label:"Products",path:"/products"},{label:"Saunas",path:"/products/sauna"},{label:"Hyperbaric",path:"/products/hyperbaric"},{label:"Cryotherapy",path:"/products/cryotherapy"},{label:"Red Light",path:"/products/red-light"},{label:"Compression",path:"/products/compression"},{label:"PEMF",path:"/products/pemf"},{label:"Blog",path:"/blog"}];return y("div",{className:"min-h-screen bg-[#0a0a0a]",children:[y("header",{className:"sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#262626]",children:[y("div",{className:"max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between",children:[y(D,{to:"/",className:"flex items-center gap-2",children:[c("div",{className:"w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center",children:c(gs,{className:"w-5 h-5 text-white"})}),y("span",{className:"text-xl font-semibold tracking-tight text-[#fafafa]",children:["Health",c("span",{className:"text-emerald-400",children:"Index"})]})]}),c("nav",{className:"hidden md:flex items-center gap-1",children:n.map(r=>c(D,{to:r.path,className:"px-4 py-2 text-sm font-medium text-[#a3a3a3] hover:text-[#fafafa] transition-colors",children:r.label},r.path))}),y("div",{className:"flex items-center gap-3",children:[y("button",{className:"hidden sm:flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white text-sm font-medium rounded-lg hover:bg-[#2563eb] transition-colors",children:[c(mm,{className:"w-4 h-4"}),"Price Alerts"]}),c("button",{className:"md:hidden p-2 text-[#a3a3a3] hover:text-[#fafafa]",onClick:()=>t(!e),children:e?c(Cm,{className:"w-6 h-6"}):c(Nm,{className:"w-6 h-6"})})]})]}),e&&c("div",{className:"md:hidden border-t border-[#262626] bg-[#0a0a0a]",children:c("nav",{className:"flex flex-col px-6 py-4",children:n.map(r=>c(D,{to:r.path,className:"py-3 text-[#a3a3a3] hover:text-[#fafafa] transition-colors",onClick:()=>t(!1),children:r.label},r.path))})})]}),c("main",{children:y(tm,{children:[c(Ae,{path:"/",element:c(Tm,{})}),c(Ae,{path:"/products",element:c($o,{})}),c(Ae,{path:"/products/:category",element:c($o,{})}),c(Ae,{path:"/product/:id",element:c(Rm,{})}),c(Ae,{path:"/blog",element:c(zm,{})}),c(Ae,{path:"/blog/:slug",element:c(Im,{})}),c(Ae,{path:"/privacy",element:c(Lm,{})}),c(Ae,{path:"/terms",element:c(Mm,{})}),c(Ae,{path:"/about",element:c(Om,{})})]})}),c("footer",{className:"border-t border-[#262626] mt-16 py-8 px-6",children:y("div",{className:"max-w-[1200px] mx-auto text-center",children:[y("p",{className:"text-[#a3a3a3] text-sm mb-2",children:[c(D,{to:"/privacy",className:"hover:text-emerald-400 mx-2",children:"Privacy"}),c("span",{className:"text-[#333]",children:"|"}),c(D,{to:"/terms",className:"hover:text-emerald-400 mx-2",children:"Terms"}),c("span",{className:"text-[#333]",children:"|"}),c(D,{to:"/about",className:"hover:text-emerald-400 mx-2",children:"About"})]}),c("p",{className:"text-[#a3a3a3] text-sm",children:"© 2026 HealthIndex"})]})})]})}wl.createRoot(document.getElementById("root")).render(c(yn.StrictMode,{children:c(ch,{children:c(om,{children:c(Dm,{})})})}));
//# sourceMappingURL=index-59ad18db.js.map
