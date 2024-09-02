var bM=Object.defineProperty;var RM=(t,e,n)=>e in t?bM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var as=(t,e,n)=>RM(t,typeof e!="symbol"?e+"":e,n);function S_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E_={exports:{}},Gu={},w_={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),PM=Symbol.for("react.portal"),LM=Symbol.for("react.fragment"),DM=Symbol.for("react.strict_mode"),IM=Symbol.for("react.profiler"),UM=Symbol.for("react.provider"),NM=Symbol.for("react.context"),FM=Symbol.for("react.forward_ref"),OM=Symbol.for("react.suspense"),kM=Symbol.for("react.memo"),BM=Symbol.for("react.lazy"),pg=Symbol.iterator;function zM(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var T_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,A_={};function Ja(t,e,n){this.props=t,this.context=e,this.refs=A_,this.updater=n||T_}Ja.prototype.isReactComponent={};Ja.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ja.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b_(){}b_.prototype=Ja.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=A_,this.updater=n||T_}var kp=Op.prototype=new b_;kp.constructor=Op;C_(kp,Ja.prototype);kp.isPureReactComponent=!0;var mg=Array.isArray,R_=Object.prototype.hasOwnProperty,Bp={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)R_.call(e,r)&&!P_.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:yl,type:t,key:o,ref:a,props:i,_owner:Bp.current}}function HM(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function VM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gg=/\/+/g;function Gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VM(""+t.key):e.toString(36)}function Uc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yl:case PM:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Gf(a,0):r,mg(i)?(n="",t!=null&&(n=t.replace(gg,"$&/")+"/"),Uc(i,e,n,"",function(c){return c})):i!=null&&(zp(i)&&(i=HM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",mg(t))for(var s=0;s<t.length;s++){o=t[s];var l=r+Gf(o,s);a+=Uc(o,e,n,l,i)}else if(l=zM(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=r+Gf(o,s++),a+=Uc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function kl(t,e,n){if(t==null)return t;var r=[],i=0;return Uc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function GM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Nc={transition:null},WM={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:Bp};function D_(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:kl,forEach:function(t,e,n){kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kl(t,function(){e++}),e},toArray:function(t){return kl(t,function(e){return e})||[]},only:function(t){if(!zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Ja;rt.Fragment=LM;rt.Profiler=IM;rt.PureComponent=Op;rt.StrictMode=DM;rt.Suspense=OM;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WM;rt.act=D_;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)R_.call(e,l)&&!P_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:yl,type:t.type,key:i,ref:o,props:r,_owner:a}};rt.createContext=function(t){return t={$$typeof:NM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UM,_context:t},t.Consumer=t};rt.createElement=L_;rt.createFactory=function(t){var e=L_.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:FM,render:t}};rt.isValidElement=zp;rt.lazy=function(t){return{$$typeof:BM,_payload:{_status:-1,_result:t},_init:GM}};rt.memo=function(t,e){return{$$typeof:kM,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};rt.unstable_act=D_;rt.useCallback=function(t,e){return wn.current.useCallback(t,e)};rt.useContext=function(t){return wn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return wn.current.useEffect(t,e)};rt.useId=function(){return wn.current.useId()};rt.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return wn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};rt.useRef=function(t){return wn.current.useRef(t)};rt.useState=function(t){return wn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return wn.current.useTransition()};rt.version="18.3.1";w_.exports=rt;var k=w_.exports;const da=M_(k),Jd=S_({__proto__:null,default:da},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $M=k,jM=Symbol.for("react.element"),XM=Symbol.for("react.fragment"),YM=Object.prototype.hasOwnProperty,KM=$M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qM={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)YM.call(e,r)&&!qM.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jM,type:t,key:o,ref:a,props:i,_owner:KM.current}}Gu.Fragment=XM;Gu.jsx=I_;Gu.jsxs=I_;E_.exports=Gu;var Ee=E_.exports,U_={exports:{}},Yn={},N_={exports:{}},F_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var te=U.length;U.push(W);e:for(;0<te;){var le=te-1>>>1,Ae=U[le];if(0<i(Ae,W))U[le]=W,U[te]=Ae,te=le;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var W=U[0],te=U.pop();if(te!==W){U[0]=te;e:for(var le=0,Ae=U.length,je=Ae>>>1;le<je;){var q=2*(le+1)-1,ce=U[q],pe=q+1,me=U[pe];if(0>i(ce,te))pe<Ae&&0>i(me,ce)?(U[le]=me,U[pe]=te,le=pe):(U[le]=ce,U[q]=te,le=q);else if(pe<Ae&&0>i(me,te))U[le]=me,U[pe]=te,le=pe;else break e}}return W}function i(U,W){var te=U.sortIndex-W.sortIndex;return te!==0?te:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=U)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(U){if(y=!1,v(U),!_)if(n(l)!==null)_=!0,Y(b);else{var W=n(c);W!==null&&J(M,W.startTime-U)}}function b(U,W){_=!1,y&&(y=!1,h(E),E=-1),p=!0;var te=d;try{for(v(W),f=n(l);f!==null&&(!(f.expirationTime>W)||U&&!R());){var le=f.callback;if(typeof le=="function"){f.callback=null,d=f.priorityLevel;var Ae=le(f.expirationTime<=W);W=t.unstable_now(),typeof Ae=="function"?f.callback=Ae:f===n(l)&&r(l),v(W)}else r(l);f=n(l)}if(f!==null)var je=!0;else{var q=n(c);q!==null&&J(M,q.startTime-W),je=!1}return je}finally{f=null,d=te,p=!1}}var A=!1,C=null,E=-1,g=5,S=-1;function R(){return!(t.unstable_now()-S<g)}function z(){if(C!==null){var U=t.unstable_now();S=U;var W=!0;try{W=C(!0,U)}finally{W?H():(A=!1,C=null)}}else A=!1}var H;if(typeof x=="function")H=function(){x(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=z,H=function(){Z.postMessage(null)}}else H=function(){m(z,0)};function Y(U){C=U,A||(A=!0,H())}function J(U,W){E=m(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var te=d;d=W;try{return U()}finally{d=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=d;d=U;try{return W()}finally{d=te}},t.unstable_scheduleCallback=function(U,W,te){var le=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?le+te:le):te=le,U){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=te+Ae,U={id:u++,callback:W,priorityLevel:U,startTime:te,expirationTime:Ae,sortIndex:-1},te>le?(U.sortIndex=te,e(c,U),n(l)===null&&U===n(c)&&(y?(h(E),E=-1):y=!0,J(M,te-le))):(U.sortIndex=Ae,e(l,U),_||p||(_=!0,Y(b))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var W=d;return function(){var te=d;d=W;try{return U.apply(this,arguments)}finally{d=te}}}})(F_);N_.exports=F_;var ZM=N_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QM=k,Xn=ZM;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,Xs={};function Uo(t,e){ka(t,e),ka(t+"Capture",e)}function ka(t,e){for(Xs[t]=e,t=0;t<e.length;t++)O_.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,JM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vg={},_g={};function eE(t){return eh.call(_g,t)?!0:eh.call(vg,t)?!1:JM.test(t)?_g[t]=!0:(vg[t]=!0,!1)}function tE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nE(t,e,n,r){if(e===null||typeof e>"u"||tE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){fn[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];fn[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){fn[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){fn[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){fn[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){fn[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){fn[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){fn[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){fn[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hp=/[\-:]([a-z])/g;function Vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hp,Vp);fn[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hp,Vp);fn[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hp,Vp);fn[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){fn[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});fn.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){fn[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gp(t,e,n,r){var i=fn.hasOwnProperty(e)?fn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nE(e,n,i,r)&&(n=null),r||i===null?eE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fi=QM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),ha=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),yg=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,Wf;function As(t){if(Wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wf=e&&e[1]||""}return`
`+Wf+t}var $f=!1;function jf(t,e){if(!t||$f)return"";$f=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{$f=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function rE(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=jf(t.type,!1),t;case 11:return t=jf(t.type.render,!1),t;case 1:return t=jf(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pa:return"Fragment";case ha:return"Portal";case th:return"Profiler";case Wp:return"StrictMode";case nh:return"Suspense";case rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B_:return(t.displayName||"Context")+".Consumer";case k_:return(t._context.displayName||"Context")+".Provider";case $p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case Si:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function iE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oE(t){var e=H_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=oE(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oh(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G_(t,e){e=e.checked,e!=null&&Gp(t,"checked",e,!1)}function ah(t,e){G_(t,e);var n=Bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function Aa(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(bs(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function W_(t,e){var n=Bi(e.value),r=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hl,j_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hl=Hl||document.createElement("div"),Hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aE=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){aE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function X_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function Y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sE=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(sE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function Xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,ba=null,Ra=null;function wg(t){if(t=Ml(t)){if(typeof hh!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Yu(e),hh(t.stateNode,t.type,e))}}function K_(t){ba?Ra?Ra.push(t):Ra=[t]:ba=t}function q_(){if(ba){var t=ba,e=Ra;if(Ra=ba=null,wg(t),e)for(t=0;t<e.length;t++)wg(e[t])}}function Z_(t,e){return t(e)}function Q_(){}var Xf=!1;function J_(t,e,n){if(Xf)return t(e,n);Xf=!0;try{return Z_(t,e,n)}finally{Xf=!1,(ba!==null||Ra!==null)&&(Q_(),q_())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var ph=!1;if(oi)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){ph=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{ph=!1}function lE(t,e,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fs=!1,iu=null,ou=!1,mh=null,cE={onError:function(t){Fs=!0,iu=t}};function uE(t,e,n,r,i,o,a,s,l){Fs=!1,iu=null,lE.apply(cE,arguments)}function fE(t,e,n,r,i,o,a,s,l){if(uE.apply(this,arguments),Fs){if(Fs){var c=iu;Fs=!1,iu=null}else throw Error(de(198));ou||(ou=!0,mh=c)}}function No(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ey(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tg(t){if(No(t)!==t)throw Error(de(188))}function dE(t){var e=t.alternate;if(!e){if(e=No(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tg(i),t;if(o===r)return Tg(i),e;o=o.sibling}throw Error(de(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==r)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function ty(t){return t=dE(t),t!==null?ny(t):null}function ny(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ny(t);if(e!==null)return e;t=t.sibling}return null}var ry=Xn.unstable_scheduleCallback,Cg=Xn.unstable_cancelCallback,hE=Xn.unstable_shouldYield,pE=Xn.unstable_requestPaint,Vt=Xn.unstable_now,mE=Xn.unstable_getCurrentPriorityLevel,Yp=Xn.unstable_ImmediatePriority,iy=Xn.unstable_UserBlockingPriority,au=Xn.unstable_NormalPriority,gE=Xn.unstable_LowPriority,oy=Xn.unstable_IdlePriority,Wu=null,kr=null;function vE(t){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:xE,_E=Math.log,yE=Math.LN2;function xE(t){return t>>>=0,t===0?32:31-(_E(t)/yE|0)|0}var Vl=64,Gl=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Rs(s):(o&=a,o!==0&&(r=Rs(o)))}else a=n&~i,a!==0?r=Rs(a):o!==0&&(r=Rs(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Er(e),i=1<<n,r|=t[n],e&=~i;return r}function SE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ME(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Er(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=SE(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ay(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function Yf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Er(e),t[e]=n}function EE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Er(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Er(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _t=0;function sy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ly,qp,cy,uy,fy,vh=!1,Wl=[],bi=null,Ri=null,Pi=null,qs=new Map,Zs=new Map,Ei=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ag(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function cs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ml(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TE(t,e,n,r,i){switch(e){case"focusin":return bi=cs(bi,t,e,n,r,i),!0;case"dragenter":return Ri=cs(Ri,t,e,n,r,i),!0;case"mouseover":return Pi=cs(Pi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return qs.set(o,cs(qs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zs.set(o,cs(Zs.get(o)||null,t,e,n,r,i)),!0}return!1}function dy(t){var e=ho(t.target);if(e!==null){var n=No(e);if(n!==null){if(e=n.tag,e===13){if(e=ey(n),e!==null){t.blockedOn=e,fy(t.priority,function(){cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dh=r,n.target.dispatchEvent(r),dh=null}else return e=Ml(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function bg(t,e,n){Fc(t)&&n.delete(e)}function CE(){vh=!1,bi!==null&&Fc(bi)&&(bi=null),Ri!==null&&Fc(Ri)&&(Ri=null),Pi!==null&&Fc(Pi)&&(Pi=null),qs.forEach(bg),Zs.forEach(bg)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,CE)))}function Qs(t){function e(i){return us(i,t)}if(0<Wl.length){us(Wl[0],t);for(var n=1;n<Wl.length;n++){var r=Wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bi!==null&&us(bi,t),Ri!==null&&us(Ri,t),Pi!==null&&us(Pi,t),qs.forEach(e),Zs.forEach(e),n=0;n<Ei.length;n++)r=Ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)dy(n),n.blockedOn===null&&Ei.shift()}var Pa=fi.ReactCurrentBatchConfig,lu=!0;function AE(t,e,n,r){var i=_t,o=Pa.transition;Pa.transition=null;try{_t=1,Zp(t,e,n,r)}finally{_t=i,Pa.transition=o}}function bE(t,e,n,r){var i=_t,o=Pa.transition;Pa.transition=null;try{_t=4,Zp(t,e,n,r)}finally{_t=i,Pa.transition=o}}function Zp(t,e,n,r){if(lu){var i=_h(t,e,n,r);if(i===null)id(t,e,r,cu,n),Ag(t,r);else if(TE(i,t,e,n,r))r.stopPropagation();else if(Ag(t,r),e&4&&-1<wE.indexOf(t)){for(;i!==null;){var o=Ml(i);if(o!==null&&ly(o),o=_h(t,e,n,r),o===null&&id(t,e,r,cu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else id(t,e,r,null,n)}}var cu=null;function _h(t,e,n,r){if(cu=null,t=Xp(r),t=ho(t),t!==null)if(e=No(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ey(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mE()){case Yp:return 1;case iy:return 4;case au:case gE:return 16;case oy:return 536870912;default:return 16}default:return 16}}var Ci=null,Qp=null,Oc=null;function py(){if(Oc)return Oc;var t,e=Qp,n=e.length,r,i="value"in Ci?Ci.value:Ci.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return Oc=i.slice(t,1<r?1-r:void 0)}function kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Rg(){return!1}function Kn(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$l:Rg,this.isPropagationStopped=Rg,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Kn(es),Sl=Ft({},es,{view:0,detail:0}),RE=Kn(Sl),Kf,qf,fs,$u=Ft({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(Kf=t.screenX-fs.screenX,qf=t.screenY-fs.screenY):qf=Kf=0,fs=t),Kf)},movementY:function(t){return"movementY"in t?t.movementY:qf}}),Pg=Kn($u),PE=Ft({},$u,{dataTransfer:0}),LE=Kn(PE),DE=Ft({},Sl,{relatedTarget:0}),Zf=Kn(DE),IE=Ft({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),UE=Kn(IE),NE=Ft({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FE=Kn(NE),OE=Ft({},es,{data:0}),Lg=Kn(OE),kE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zE[t])?!!e[t]:!1}function em(){return HE}var VE=Ft({},Sl,{key:function(t){if(t.key){var e=kE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:em,charCode:function(t){return t.type==="keypress"?kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GE=Kn(VE),WE=Ft({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Kn(WE),$E=Ft({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:em}),jE=Kn($E),XE=Ft({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),YE=Kn(XE),KE=Ft({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qE=Kn(KE),ZE=[9,13,27,32],tm=oi&&"CompositionEvent"in window,Os=null;oi&&"documentMode"in document&&(Os=document.documentMode);var QE=oi&&"TextEvent"in window&&!Os,my=oi&&(!tm||Os&&8<Os&&11>=Os),Ig=" ",Ug=!1;function gy(t,e){switch(t){case"keyup":return ZE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function JE(t,e){switch(t){case"compositionend":return vy(e);case"keypress":return e.which!==32?null:(Ug=!0,Ig);case"textInput":return t=e.data,t===Ig&&Ug?null:t;default:return null}}function e1(t,e){if(ma)return t==="compositionend"||!tm&&gy(t,e)?(t=py(),Oc=Qp=Ci=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return my&&e.locale!=="ko"?null:e.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t1[t.type]:e==="textarea"}function _y(t,e,n,r){K_(r),e=uu(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ks=null,Js=null;function n1(t){Ry(t,0)}function ju(t){var e=_a(t);if(V_(e))return t}function r1(t,e){if(t==="change")return e}var yy=!1;if(oi){var Qf;if(oi){var Jf="oninput"in document;if(!Jf){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Jf=typeof Fg.oninput=="function"}Qf=Jf}else Qf=!1;yy=Qf&&(!document.documentMode||9<document.documentMode)}function Og(){ks&&(ks.detachEvent("onpropertychange",xy),Js=ks=null)}function xy(t){if(t.propertyName==="value"&&ju(Js)){var e=[];_y(e,Js,t,Xp(t)),J_(n1,e)}}function i1(t,e,n){t==="focusin"?(Og(),ks=e,Js=n,ks.attachEvent("onpropertychange",xy)):t==="focusout"&&Og()}function o1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Js)}function a1(t,e){if(t==="click")return ju(e)}function s1(t,e){if(t==="input"||t==="change")return ju(e)}function l1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tr=typeof Object.is=="function"?Object.is:l1;function el(t,e){if(Tr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eh.call(e,i)||!Tr(t[i],e[i]))return!1}return!0}function kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kg(n)}}function Sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c1(t){var e=My(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(r!==null&&nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Bg(n,o);var a=Bg(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u1=oi&&"documentMode"in document&&11>=document.documentMode,ga=null,yh=null,Bs=null,xh=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||ga==null||ga!==ru(r)||(r=ga,"selectionStart"in r&&nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&el(Bs,r)||(Bs=r,r=uu(yh,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ga)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var va={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},ed={},Ey={};oi&&(Ey=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Xu(t){if(ed[t])return ed[t];if(!va[t])return t;var e=va[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ey)return ed[t]=e[n];return t}var wy=Xu("animationend"),Ty=Xu("animationiteration"),Cy=Xu("animationstart"),Ay=Xu("transitionend"),by=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){by.set(t,e),Uo(e,[t])}for(var td=0;td<Hg.length;td++){var nd=Hg[td],f1=nd.toLowerCase(),d1=nd[0].toUpperCase()+nd.slice(1);Wi(f1,"on"+d1)}Wi(wy,"onAnimationEnd");Wi(Ty,"onAnimationIteration");Wi(Cy,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Ay,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function Vg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fE(r,e,void 0,t),t.currentTarget=null}function Ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Vg(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Vg(i,s,c),o=l}}}if(ou)throw t=mh,ou=!1,mh=null,t}function Ct(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(Py(e,t,2,!1),n.add(r))}function rd(t,e,n){var r=0;e&&(r|=4),Py(n,t,r,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function tl(t){if(!t[Xl]){t[Xl]=!0,O_.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||rd(n,!1,t),rd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,rd("selectionchange",!1,e))}}function Py(t,e,n,r){switch(hy(e)){case 1:var i=AE;break;case 4:i=bE;break;default:i=Zp}n=i.bind(null,e,n,t),i=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function id(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=ho(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}J_(function(){var c=o,u=Xp(n),f=[];e:{var d=by.get(t);if(d!==void 0){var p=Jp,_=t;switch(t){case"keypress":if(kc(n)===0)break e;case"keydown":case"keyup":p=GE;break;case"focusin":_="focus",p=Zf;break;case"focusout":_="blur",p=Zf;break;case"beforeblur":case"afterblur":p=Zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jE;break;case wy:case Ty:case Cy:p=UE;break;case Ay:p=YE;break;case"scroll":p=RE;break;case"wheel":p=qE;break;case"copy":case"cut":case"paste":p=FE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dg}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var x=c,v;x!==null;){v=x;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,h!==null&&(M=Ks(x,h),M!=null&&y.push(nl(x,M,v)))),m)break;x=x.return}0<y.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==dh&&(_=n.relatedTarget||n.fromElement)&&(ho(_)||_[ai]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ho(_):null,_!==null&&(m=No(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Pg,M="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Dg,M="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:_a(p),v=_==null?d:_a(_),d=new y(M,x+"leave",p,n,u),d.target=m,d.relatedTarget=v,M=null,ho(u)===c&&(y=new y(h,x+"enter",_,n,u),y.target=v,y.relatedTarget=m,M=y),m=M,p&&_)t:{for(y=p,h=_,x=0,v=y;v;v=Ho(v))x++;for(v=0,M=h;M;M=Ho(M))v++;for(;0<x-v;)y=Ho(y),x--;for(;0<v-x;)h=Ho(h),v--;for(;x--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ho(y),h=Ho(h)}y=null}else y=null;p!==null&&Gg(f,d,p,y,!1),_!==null&&m!==null&&Gg(f,m,_,y,!0)}}e:{if(d=c?_a(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=r1;else if(Ng(d))if(yy)b=s1;else{b=o1;var A=i1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=a1);if(b&&(b=b(t,c))){_y(f,b,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&sh(d,"number",d.value)}switch(A=c?_a(c):window,t){case"focusin":(Ng(A)||A.contentEditable==="true")&&(ga=A,yh=c,Bs=null);break;case"focusout":Bs=yh=ga=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,zg(f,n,u);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":zg(f,n,u)}var C;if(tm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ma?gy(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(my&&n.locale!=="ko"&&(ma||E!=="onCompositionStart"?E==="onCompositionEnd"&&ma&&(C=py()):(Ci=u,Qp="value"in Ci?Ci.value:Ci.textContent,ma=!0)),A=uu(c,E),0<A.length&&(E=new Lg(E,t,null,n,u),f.push({event:E,listeners:A}),C?E.data=C:(C=vy(n),C!==null&&(E.data=C)))),(C=QE?JE(t,n):e1(t,n))&&(c=uu(c,"onBeforeInput"),0<c.length&&(u=new Lg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}Ry(f,e)})}function nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ks(t,n),o!=null&&r.unshift(nl(t,o,i)),o=Ks(t,e),o!=null&&r.push(nl(t,o,i))),t=t.return}return r}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gg(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Ks(n,o),l!=null&&a.unshift(nl(n,l,s))):i||(l=Ks(n,o),l!=null&&a.push(nl(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var p1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(m1,"")}function Yl(t,e,n){if(e=Wg(e),Wg(t)!==e&&n)throw Error(de(425))}function fu(){}var Sh=null,Mh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(_1)}:wh;function _1(t){setTimeout(function(){throw t})}function od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qs(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Ur="__reactFiber$"+ts,rl="__reactProps$"+ts,ai="__reactContainer$"+ts,Th="__reactEvents$"+ts,y1="__reactListeners$"+ts,x1="__reactHandles$"+ts;function ho(t){var e=t[Ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[Ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jg(t);t!==null;){if(n=t[Ur])return n;t=jg(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Ur]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _a(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Yu(t){return t[rl]||null}var Ch=[],ya=-1;function $i(t){return{current:t}}function bt(t){0>ya||(t.current=Ch[ya],Ch[ya]=null,ya--)}function wt(t,e){ya++,Ch[ya]=t.current,t.current=e}var zi={},_n=$i(zi),Pn=$i(!1),To=zi;function Ba(t,e){var n=t.type.contextTypes;if(!n)return zi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ln(t){return t=t.childContextTypes,t!=null}function du(){bt(Pn),bt(_n)}function Xg(t,e,n){if(_n.current!==zi)throw Error(de(168));wt(_n,e),wt(Pn,n)}function Ly(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(de(108,iE(t)||"Unknown",i));return Ft({},n,r)}function hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,To=_n.current,wt(_n,t),wt(Pn,Pn.current),!0}function Yg(t,e,n){var r=t.stateNode;if(!r)throw Error(de(169));n?(t=Ly(t,e,To),r.__reactInternalMemoizedMergedChildContext=t,bt(Pn),bt(_n),wt(_n,t)):bt(Pn),wt(Pn,n)}var Zr=null,Ku=!1,ad=!1;function Dy(t){Zr===null?Zr=[t]:Zr.push(t)}function S1(t){Ku=!0,Dy(t)}function ji(){if(!ad&&Zr!==null){ad=!0;var t=0,e=_t;try{var n=Zr;for(_t=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zr=null,Ku=!1}catch(i){throw Zr!==null&&(Zr=Zr.slice(t+1)),ry(Yp,ji),i}finally{_t=e,ad=!1}}return null}var xa=[],Sa=0,pu=null,mu=0,tr=[],nr=0,Co=null,Jr=1,ei="";function oo(t,e){xa[Sa++]=mu,xa[Sa++]=pu,pu=t,mu=e}function Iy(t,e,n){tr[nr++]=Jr,tr[nr++]=ei,tr[nr++]=Co,Co=t;var r=Jr;t=ei;var i=32-Er(r)-1;r&=~(1<<i),n+=1;var o=32-Er(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Jr=1<<32-Er(e)+i|n<<i|r,ei=o+t}else Jr=1<<o|n<<i|r,ei=t}function rm(t){t.return!==null&&(oo(t,1),Iy(t,1,0))}function im(t){for(;t===pu;)pu=xa[--Sa],xa[Sa]=null,mu=xa[--Sa],xa[Sa]=null;for(;t===Co;)Co=tr[--nr],tr[nr]=null,ei=tr[--nr],tr[nr]=null,Jr=tr[--nr],tr[nr]=null}var $n=null,Wn=null,Lt=!1,xr=null;function Uy(t,e){var n=or(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,Wn=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,Wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Co!==null?{id:Jr,overflow:ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=or(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,Wn=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(Lt){var e=Wn;if(e){var n=e;if(!Kg(t,e)){if(Ah(t))throw Error(de(418));e=Li(n.nextSibling);var r=$n;e&&Kg(t,e)?Uy(r,n):(t.flags=t.flags&-4097|2,Lt=!1,$n=t)}}else{if(Ah(t))throw Error(de(418));t.flags=t.flags&-4097|2,Lt=!1,$n=t}}}function qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Kl(t){if(t!==$n)return!1;if(!Lt)return qg(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Wn)){if(Ah(t))throw Ny(),Error(de(418));for(;e;)Uy(t,e),e=Li(e.nextSibling)}if(qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wn=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wn=null}}else Wn=$n?Li(t.stateNode.nextSibling):null;return!0}function Ny(){for(var t=Wn;t;)t=Li(t.nextSibling)}function za(){Wn=$n=null,Lt=!1}function om(t){xr===null?xr=[t]:xr.push(t)}var M1=fi.ReactCurrentBatchConfig;function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var r=n.stateNode}if(!r)throw Error(de(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function Fy(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=Ni(h,x),h.index=0,h.sibling=null,h}function o(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function s(h,x,v,M){return x===null||x.tag!==6?(x=hd(v,h.mode,M),x.return=h,x):(x=i(x,v),x.return=h,x)}function l(h,x,v,M){var b=v.type;return b===pa?u(h,x,v.props.children,M,v.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Si&&Zg(b)===x.type)?(M=i(x,v.props),M.ref=ds(h,x,v),M.return=h,M):(M=$c(v.type,v.key,v.props,null,h.mode,M),M.ref=ds(h,x,v),M.return=h,M)}function c(h,x,v,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=pd(v,h.mode,M),x.return=h,x):(x=i(x,v.children||[]),x.return=h,x)}function u(h,x,v,M,b){return x===null||x.tag!==7?(x=Mo(v,h.mode,M,b),x.return=h,x):(x=i(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hd(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:return v=$c(x.type,x.key,x.props,null,h.mode,v),v.ref=ds(h,null,x),v.return=h,v;case ha:return x=pd(x,h.mode,v),x.return=h,x;case Si:var M=x._init;return f(h,M(x._payload),v)}if(bs(x)||ss(x))return x=Mo(x,h.mode,v,null),x.return=h,x;ql(h,x)}return null}function d(h,x,v,M){var b=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:s(h,x,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bl:return v.key===b?l(h,x,v,M):null;case ha:return v.key===b?c(h,x,v,M):null;case Si:return b=v._init,d(h,x,b(v._payload),M)}if(bs(v)||ss(v))return b!==null?null:u(h,x,v,M,null);ql(h,v)}return null}function p(h,x,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(v)||null,s(x,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Bl:return h=h.get(M.key===null?v:M.key)||null,l(x,h,M,b);case ha:return h=h.get(M.key===null?v:M.key)||null,c(x,h,M,b);case Si:var A=M._init;return p(h,x,v,A(M._payload),b)}if(bs(M)||ss(M))return h=h.get(v)||null,u(x,h,M,b,null);ql(x,M)}return null}function _(h,x,v,M){for(var b=null,A=null,C=x,E=x=0,g=null;C!==null&&E<v.length;E++){C.index>E?(g=C,C=null):g=C.sibling;var S=d(h,C,v[E],M);if(S===null){C===null&&(C=g);break}t&&C&&S.alternate===null&&e(h,C),x=o(S,x,E),A===null?b=S:A.sibling=S,A=S,C=g}if(E===v.length)return n(h,C),Lt&&oo(h,E),b;if(C===null){for(;E<v.length;E++)C=f(h,v[E],M),C!==null&&(x=o(C,x,E),A===null?b=C:A.sibling=C,A=C);return Lt&&oo(h,E),b}for(C=r(h,C);E<v.length;E++)g=p(C,h,E,v[E],M),g!==null&&(t&&g.alternate!==null&&C.delete(g.key===null?E:g.key),x=o(g,x,E),A===null?b=g:A.sibling=g,A=g);return t&&C.forEach(function(R){return e(h,R)}),Lt&&oo(h,E),b}function y(h,x,v,M){var b=ss(v);if(typeof b!="function")throw Error(de(150));if(v=b.call(v),v==null)throw Error(de(151));for(var A=b=null,C=x,E=x=0,g=null,S=v.next();C!==null&&!S.done;E++,S=v.next()){C.index>E?(g=C,C=null):g=C.sibling;var R=d(h,C,S.value,M);if(R===null){C===null&&(C=g);break}t&&C&&R.alternate===null&&e(h,C),x=o(R,x,E),A===null?b=R:A.sibling=R,A=R,C=g}if(S.done)return n(h,C),Lt&&oo(h,E),b;if(C===null){for(;!S.done;E++,S=v.next())S=f(h,S.value,M),S!==null&&(x=o(S,x,E),A===null?b=S:A.sibling=S,A=S);return Lt&&oo(h,E),b}for(C=r(h,C);!S.done;E++,S=v.next())S=p(C,h,E,S.value,M),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?E:S.key),x=o(S,x,E),A===null?b=S:A.sibling=S,A=S);return t&&C.forEach(function(z){return e(h,z)}),Lt&&oo(h,E),b}function m(h,x,v,M){if(typeof v=="object"&&v!==null&&v.type===pa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bl:e:{for(var b=v.key,A=x;A!==null;){if(A.key===b){if(b=v.type,b===pa){if(A.tag===7){n(h,A.sibling),x=i(A,v.props.children),x.return=h,h=x;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Si&&Zg(b)===A.type){n(h,A.sibling),x=i(A,v.props),x.ref=ds(h,A,v),x.return=h,h=x;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===pa?(x=Mo(v.props.children,h.mode,M,v.key),x.return=h,h=x):(M=$c(v.type,v.key,v.props,null,h.mode,M),M.ref=ds(h,x,v),M.return=h,h=M)}return a(h);case ha:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=i(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=pd(v,h.mode,M),x.return=h,h=x}return a(h);case Si:return A=v._init,m(h,x,A(v._payload),M)}if(bs(v))return _(h,x,v,M);if(ss(v))return y(h,x,v,M);ql(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=i(x,v),x.return=h,h=x):(n(h,x),x=hd(v,h.mode,M),x.return=h,h=x),a(h)):n(h,x)}return m}var Ha=Fy(!0),Oy=Fy(!1),gu=$i(null),vu=null,Ma=null,am=null;function sm(){am=Ma=vu=null}function lm(t){var e=gu.current;bt(gu),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function La(t,e){vu=t,am=Ma=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rn=!0),t.firstContext=null)}function cr(t){var e=t._currentValue;if(am!==t)if(t={context:t,memoizedValue:e,next:null},Ma===null){if(vu===null)throw Error(de(308));Ma=t,vu.dependencies={lanes:0,firstContext:t}}else Ma=Ma.next=t;return e}var po=null;function cm(t){po===null?po=[t]:po.push(t)}function ky(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,si(t,r)}function si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mi=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function By(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,lt&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,si(t,n)}return i=r.interleaved,i===null?(e.next=e,cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,si(t,n)}function Bc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function Qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,r){var i=t.updateQueue;Mi=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=c=l=null,s=o;do{var d=s.lane,p=s.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,y=s;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=Ft({},f,d);break e;case 2:Mi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);bo|=a,t.lanes=a,t.memoizedState=f}}function Jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(de(191,i));i.call(r)}}}var El={},Br=$i(El),il=$i(El),ol=$i(El);function mo(t){if(t===El)throw Error(de(174));return t}function fm(t,e){switch(wt(ol,e),wt(il,t),wt(Br,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}bt(Br),wt(Br,e)}function Va(){bt(Br),bt(il),bt(ol)}function zy(t){mo(ol.current);var e=mo(Br.current),n=ch(e,t.type);e!==n&&(wt(il,t),wt(Br,n))}function dm(t){il.current===t&&(bt(Br),bt(il))}var Ut=$i(0);function yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function hm(){for(var t=0;t<sd.length;t++)sd[t]._workInProgressVersionPrimary=null;sd.length=0}var zc=fi.ReactCurrentDispatcher,ld=fi.ReactCurrentBatchConfig,Ao=0,Nt=null,qt=null,nn=null,xu=!1,zs=!1,al=0,E1=0;function dn(){throw Error(de(321))}function pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tr(t[n],e[n]))return!1;return!0}function mm(t,e,n,r,i,o){if(Ao=o,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zc.current=t===null||t.memoizedState===null?A1:b1,t=n(r,i),zs){o=0;do{if(zs=!1,al=0,25<=o)throw Error(de(301));o+=1,nn=qt=null,e.updateQueue=null,zc.current=R1,t=n(r,i)}while(zs)}if(zc.current=Su,e=qt!==null&&qt.next!==null,Ao=0,nn=qt=Nt=null,xu=!1,e)throw Error(de(300));return t}function gm(){var t=al!==0;return al=0,t}function Rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Nt.memoizedState=nn=t:nn=nn.next=t,nn}function ur(){if(qt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var e=nn===null?Nt.memoizedState:nn.next;if(e!==null)nn=e,qt=t;else{if(t===null)throw Error(de(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},nn===null?Nt.memoizedState=nn=t:nn=nn.next=t}return nn}function sl(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=ur(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var r=qt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((Ao&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,Nt.lanes|=u,bo|=u}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Tr(r,e.memoizedState)||(Rn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Nt.lanes|=o,bo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=ur(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);Tr(o,e.memoizedState)||(Rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Hy(){}function Vy(t,e){var n=Nt,r=ur(),i=e(),o=!Tr(r.memoizedState,i);if(o&&(r.memoizedState=i,Rn=!0),r=r.queue,vm($y.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||nn!==null&&nn.memoizedState.tag&1){if(n.flags|=2048,ll(9,Wy.bind(null,n,r,i,e),void 0,null),an===null)throw Error(de(349));Ao&30||Gy(n,e,i)}return i}function Gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wy(t,e,n,r){e.value=n,e.getSnapshot=r,jy(e)&&Xy(t)}function $y(t,e,n){return n(function(){jy(e)&&Xy(t)})}function jy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tr(t,n)}catch{return!0}}function Xy(t){var e=si(t,1);e!==null&&wr(e,t,1,-1)}function e0(t){var e=Rr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=C1.bind(null,Nt,t),[e.memoizedState,t]}function ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yy(){return ur().memoizedState}function Hc(t,e,n,r){var i=Rr();Nt.flags|=t,i.memoizedState=ll(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=ur();r=r===void 0?null:r;var o=void 0;if(qt!==null){var a=qt.memoizedState;if(o=a.destroy,r!==null&&pm(r,a.deps)){i.memoizedState=ll(e,n,o,r);return}}Nt.flags|=t,i.memoizedState=ll(1|e,n,o,r)}function t0(t,e){return Hc(8390656,8,t,e)}function vm(t,e){return qu(2048,8,t,e)}function Ky(t,e){return qu(4,2,t,e)}function qy(t,e){return qu(4,4,t,e)}function Zy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qy(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,Zy.bind(null,e,t),n)}function _m(){}function Jy(t,e){var n=ur();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ex(t,e){var n=ur();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tx(t,e,n){return Ao&21?(Tr(n,e)||(n=ay(),Nt.lanes|=n,bo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=n)}function w1(t,e){var n=_t;_t=n!==0&&4>n?n:4,t(!0);var r=ld.transition;ld.transition={};try{t(!1),e()}finally{_t=n,ld.transition=r}}function nx(){return ur().memoizedState}function T1(t,e,n){var r=Ui(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rx(t))ix(e,n);else if(n=ky(t,e,n,r),n!==null){var i=Mn();wr(n,t,r,i),ox(n,e,r)}}function C1(t,e,n){var r=Ui(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rx(t))ix(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,a)){var l=e.interleaved;l===null?(i.next=i,cm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ky(t,e,i,r),n!==null&&(i=Mn(),wr(n,t,r,i),ox(n,e,r))}}function rx(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function ix(t,e){zs=xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ox(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var Su={readContext:cr,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},A1={readContext:cr,useCallback:function(t,e){return Rr().memoizedState=[t,e===void 0?null:e],t},useContext:cr,useEffect:t0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hc(4194308,4,Zy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hc(4,2,t,e)},useMemo:function(t,e){var n=Rr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=T1.bind(null,Nt,t),[r.memoizedState,t]},useRef:function(t){var e=Rr();return t={current:t},e.memoizedState=t},useState:e0,useDebugValue:_m,useDeferredValue:function(t){return Rr().memoizedState=t},useTransition:function(){var t=e0(!1),e=t[0];return t=w1.bind(null,t[1]),Rr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Nt,i=Rr();if(Lt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),an===null)throw Error(de(349));Ao&30||Gy(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,t0($y.bind(null,r,o,t),[t]),r.flags|=2048,ll(9,Wy.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Rr(),e=an.identifierPrefix;if(Lt){var n=ei,r=Jr;n=(r&~(1<<32-Er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=E1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b1={readContext:cr,useCallback:Jy,useContext:cr,useEffect:vm,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:qy,useMemo:ex,useReducer:cd,useRef:Yy,useState:function(){return cd(sl)},useDebugValue:_m,useDeferredValue:function(t){var e=ur();return tx(e,qt.memoizedState,t)},useTransition:function(){var t=cd(sl)[0],e=ur().memoizedState;return[t,e]},useMutableSource:Hy,useSyncExternalStore:Vy,useId:nx,unstable_isNewReconciler:!1},R1={readContext:cr,useCallback:Jy,useContext:cr,useEffect:vm,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:qy,useMemo:ex,useReducer:ud,useRef:Yy,useState:function(){return ud(sl)},useDebugValue:_m,useDeferredValue:function(t){var e=ur();return qt===null?e.memoizedState=t:tx(e,qt.memoizedState,t)},useTransition:function(){var t=ud(sl)[0],e=ur().memoizedState;return[t,e]},useMutableSource:Hy,useSyncExternalStore:Vy,useId:nx,unstable_isNewReconciler:!1};function vr(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?No(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mn(),i=Ui(t),o=ii(r,i);o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(wr(e,t,i,r),Bc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mn(),i=Ui(t),o=ii(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(wr(e,t,i,r),Bc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),r=Ui(t),i=ii(n,r);i.tag=2,e!=null&&(i.callback=e),e=Di(t,i,r),e!==null&&(wr(e,t,r,n),Bc(e,t,r))}};function n0(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!el(n,r)||!el(i,o):!0}function ax(t,e,n){var r=!1,i=zi,o=e.contextType;return typeof o=="object"&&o!==null?o=cr(o):(i=Ln(e)?To:_n.current,r=e.contextTypes,o=(r=r!=null)?Ba(t,i):zi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function r0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Lh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},um(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=cr(o):(o=Ln(e)?To:_n.current,i.context=Ba(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ph(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),_u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ga(t,e){try{var n="",r=e;do n+=rE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var P1=typeof WeakMap=="function"?WeakMap:Map;function sx(t,e,n){n=ii(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eu||(Eu=!0,Vh=r),Dh(t,e)},n}function lx(t,e,n){n=ii(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function i0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new P1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=W1.bind(null,t,e,n),e.then(t,t))}function o0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function a0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ii(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var L1=fi.ReactCurrentOwner,Rn=!1;function Sn(t,e,n,r){e.child=t===null?Oy(e,null,n,r):Ha(e,t.child,n,r)}function s0(t,e,n,r,i){n=n.render;var o=e.ref;return La(e,i),r=mm(t,e,n,r,o,i),n=gm(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Lt&&n&&rm(e),e.flags|=1,Sn(t,e,r,i),e.child)}function l0(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Cm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,cx(t,e,o,r,i)):(t=$c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(a,r)&&t.ref===e.ref)return li(t,e,i)}return e.flags|=1,t=Ni(o,r),t.ref=e.ref,t.return=e,e.child=t}function cx(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(el(o,r)&&t.ref===e.ref)if(Rn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Rn=!0);else return e.lanes=t.lanes,li(t,e,i)}return Ih(t,e,n,r,i)}function ux(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(wa,Hn),Hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,wt(wa,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,wt(wa,Hn),Hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,wt(wa,Hn),Hn|=r;return Sn(t,e,i,n),e.child}function fx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,i){var o=Ln(n)?To:_n.current;return o=Ba(e,o),La(e,i),n=mm(t,e,n,r,o,i),r=gm(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,li(t,e,i)):(Lt&&r&&rm(e),e.flags|=1,Sn(t,e,n,i),e.child)}function c0(t,e,n,r,i){if(Ln(n)){var o=!0;hu(e)}else o=!1;if(La(e,i),e.stateNode===null)Vc(t,e),ax(e,n,r),Lh(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=cr(c):(c=Ln(n)?To:_n.current,c=Ba(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&r0(e,a,r,c),Mi=!1;var d=e.memoizedState;a.state=d,_u(e,r,a,i),l=e.memoizedState,s!==r||d!==l||Pn.current||Mi?(typeof u=="function"&&(Ph(e,n,u,r),l=e.memoizedState),(s=Mi||n0(e,n,s,r,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,By(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:vr(e.type,s),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=cr(l):(l=Ln(n)?To:_n.current,l=Ba(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&r0(e,a,r,l),Mi=!1,d=e.memoizedState,a.state=d,_u(e,r,a,i);var _=e.memoizedState;s!==f||d!==_||Pn.current||Mi?(typeof p=="function"&&(Ph(e,n,p,r),_=e.memoizedState),(c=Mi||n0(e,n,c,r,d,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),a.props=r,a.state=_,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,o,i)}function Uh(t,e,n,r,i,o){fx(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Yg(e,n,!1),li(t,e,o);r=e.stateNode,L1.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Ha(e,t.child,null,o),e.child=Ha(e,null,s,o)):Sn(t,e,s,o),e.memoizedState=r.state,i&&Yg(e,n,!0),e.child}function dx(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),fm(t,e.containerInfo)}function u0(t,e,n,r,i){return za(),om(i),e.flags|=256,Sn(t,e,n,r),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function hx(t,e,n){var r=e.pendingProps,i=Ut.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),wt(Ut,i&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ef(a,r,0,null),t=Mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Fh(n),e.memoizedState=Nh,t):ym(e,a));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return D1(t,e,a,r,s,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ni(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ni(s,o):(o=Mo(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?Fh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=Nh,r}return o=t.child,t=o.sibling,r=Ni(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ym(t,e){return e=ef({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zl(t,e,n,r){return r!==null&&om(r),Ha(e,t.child,null,n),t=ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D1(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(de(422))),Zl(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ef({mode:"visible",children:r.children},i,0,null),o=Mo(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ha(e,t.child,null,a),e.child.memoizedState=Fh(a),e.memoizedState=Nh,o);if(!(e.mode&1))return Zl(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(de(419)),r=fd(o,r,void 0),Zl(t,e,a,r)}if(s=(a&t.childLanes)!==0,Rn||s){if(r=an,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,si(t,i),wr(r,t,i,-1))}return Tm(),r=fd(Error(de(421))),Zl(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$1.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Wn=Li(i.nextSibling),$n=e,Lt=!0,xr=null,t!==null&&(tr[nr++]=Jr,tr[nr++]=ei,tr[nr++]=Co,Jr=t.id,ei=t.overflow,Co=e),e=ym(e,r.children),e.flags|=4096,e)}function f0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function dd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function px(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Sn(t,e,r.children,n),r=Ut.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,n,e);else if(t.tag===19)f0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(wt(Ut,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dd(e,!0,n,null,o);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I1(t,e,n){switch(e.tag){case 3:dx(e),za();break;case 5:zy(e);break;case 1:Ln(e.type)&&hu(e);break;case 4:fm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;wt(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(wt(Ut,Ut.current&1),e.flags|=128,null):n&e.child.childLanes?hx(t,e,n):(wt(Ut,Ut.current&1),t=li(t,e,n),t!==null?t.sibling:null);wt(Ut,Ut.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return px(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),wt(Ut,Ut.current),r)break;return null;case 22:case 23:return e.lanes=0,ux(t,e,n)}return li(t,e,n)}var mx,Oh,gx,vx;mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};gx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mo(Br.current);var o=null;switch(n){case"input":i=oh(t,i),r=oh(t,r),o=[];break;case"select":i=Ft({},i,{value:void 0}),r=Ft({},r,{value:void 0}),o=[];break;case"textarea":i=lh(t,i),r=lh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}uh(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ct("scroll",t),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};vx=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function hn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function U1(t,e,n){var r=e.pendingProps;switch(im(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return Ln(e.type)&&du(),hn(e),null;case 3:return r=e.stateNode,Va(),bt(Pn),bt(_n),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xr!==null&&($h(xr),xr=null))),Oh(t,e),hn(e),null;case 5:dm(e);var i=mo(ol.current);if(n=e.type,t!==null&&e.stateNode!=null)gx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(de(166));return hn(e),null}if(t=mo(Br.current),Kl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Ur]=e,r[rl]=o,t=(e.mode&1)!==0,n){case"dialog":Ct("cancel",r),Ct("close",r);break;case"iframe":case"object":case"embed":Ct("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)Ct(Ps[i],r);break;case"source":Ct("error",r);break;case"img":case"image":case"link":Ct("error",r),Ct("load",r);break;case"details":Ct("toggle",r);break;case"input":xg(r,o),Ct("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ct("invalid",r);break;case"textarea":Mg(r,o),Ct("invalid",r)}uh(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yl(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yl(r.textContent,s,t),i=["children",""+s]):Xs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ct("scroll",r)}switch(n){case"input":zl(r),Sg(r,o,!0);break;case"textarea":zl(r),Eg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Ur]=e,t[rl]=r,mx(t,e,!1,!1),e.stateNode=t;e:{switch(a=fh(n,r),n){case"dialog":Ct("cancel",t),Ct("close",t),i=r;break;case"iframe":case"object":case"embed":Ct("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)Ct(Ps[i],t);i=r;break;case"source":Ct("error",t),i=r;break;case"img":case"image":case"link":Ct("error",t),Ct("load",t),i=r;break;case"details":Ct("toggle",t),i=r;break;case"input":xg(t,r),i=oh(t,r),Ct("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ft({},r,{value:void 0}),Ct("invalid",t);break;case"textarea":Mg(t,r),i=lh(t,r),Ct("invalid",t);break;default:i=r}uh(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Y_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&j_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ct("scroll",t):l!=null&&Gp(t,o,l,a))}switch(n){case"input":zl(t),Sg(t,r,!1);break;case"textarea":zl(t),Eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Aa(t,!!r.multiple,o,!1):r.defaultValue!=null&&Aa(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(t&&e.stateNode!=null)vx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(de(166));if(n=mo(ol.current),mo(Br.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ur]=e,(o=r.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:Yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ur]=e,e.stateNode=r}return hn(e),null;case 13:if(bt(Ut),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Wn!==null&&e.mode&1&&!(e.flags&128))Ny(),za(),e.flags|=98560,o=!1;else if(o=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(de(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(de(317));o[Ur]=e}else za(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),o=!1}else xr!==null&&($h(xr),xr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ut.current&1?Zt===0&&(Zt=3):Tm())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return Va(),Oh(t,e),t===null&&tl(e.stateNode.containerInfo),hn(e),null;case 10:return lm(e.type._context),hn(e),null;case 17:return Ln(e.type)&&du(),hn(e),null;case 19:if(bt(Ut),o=e.memoizedState,o===null)return hn(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)hs(o,!1);else{if(Zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=yu(t),a!==null){for(e.flags|=128,hs(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return wt(Ut,Ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&Vt()>Wa&&(e.flags|=128,r=!0,hs(o,!1),e.lanes=4194304)}else{if(!r)if(t=yu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Lt)return hn(e),null}else 2*Vt()-o.renderingStartTime>Wa&&n!==1073741824&&(e.flags|=128,r=!0,hs(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Vt(),e.sibling=null,n=Ut.current,wt(Ut,r?n&1|2:n&1),e):(hn(e),null);case 22:case 23:return wm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Hn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function N1(t,e){switch(im(e),e.tag){case 1:return Ln(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Va(),bt(Pn),bt(_n),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dm(e),null;case 13:if(bt(Ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));za()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Ut),null;case 4:return Va(),null;case 10:return lm(e.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Ql=!1,vn=!1,F1=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ea(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){zt(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){zt(t,e,r)}}var d0=!1;function O1(t,e){if(Sh=lu,t=My(),nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===i&&(s=a),d===o&&++u===r&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},lu=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:vr(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(M){zt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=d0,d0=!1,_}function Hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&kh(e,n,o)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _x(t){var e=t.alternate;e!==null&&(t.alternate=null,_x(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ur],delete e[rl],delete e[Th],delete e[y1],delete e[x1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yx(t){return t.tag===5||t.tag===3||t.tag===4}function h0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}var ln=null,_r=!1;function hi(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:vn||Ea(n,e);case 6:var r=ln,i=_r;ln=null,hi(t,e,n),ln=r,_r=i,ln!==null&&(_r?(t=ln,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ln.removeChild(n.stateNode));break;case 18:ln!==null&&(_r?(t=ln,n=n.stateNode,t.nodeType===8?od(t.parentNode,n):t.nodeType===1&&od(t,n),Qs(t)):od(ln,n.stateNode));break;case 4:r=ln,i=_r,ln=n.stateNode.containerInfo,_r=!0,hi(t,e,n),ln=r,_r=i;break;case 0:case 11:case 14:case 15:if(!vn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&kh(n,e,a),i=i.next}while(i!==r)}hi(t,e,n);break;case 1:if(!vn&&(Ea(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){zt(n,e,s)}hi(t,e,n);break;case 21:hi(t,e,n);break;case 22:n.mode&1?(vn=(r=vn)||n.memoizedState!==null,hi(t,e,n),vn=r):hi(t,e,n);break;default:hi(t,e,n)}}function p0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new F1),e.forEach(function(r){var i=j1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hr(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:ln=s.stateNode,_r=!1;break e;case 3:ln=s.stateNode.containerInfo,_r=!0;break e;case 4:ln=s.stateNode.containerInfo,_r=!0;break e}s=s.return}if(ln===null)throw Error(de(160));xx(o,a,i),ln=null,_r=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){zt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sx(e,t),e=e.sibling}function Sx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hr(e,t),Ar(t),r&4){try{Hs(3,t,t.return),Qu(3,t)}catch(y){zt(t,t.return,y)}try{Hs(5,t,t.return)}catch(y){zt(t,t.return,y)}}break;case 1:hr(e,t),Ar(t),r&512&&n!==null&&Ea(n,n.return);break;case 5:if(hr(e,t),Ar(t),r&512&&n!==null&&Ea(n,n.return),t.flags&32){var i=t.stateNode;try{Ys(i,"")}catch(y){zt(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&G_(i,o),fh(s,a);var c=fh(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Y_(i,f):u==="dangerouslySetInnerHTML"?j_(i,f):u==="children"?Ys(i,f):Gp(i,u,f,c)}switch(s){case"input":ah(i,o);break;case"textarea":W_(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Aa(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Aa(i,!!o.multiple,o.defaultValue,!0):Aa(i,!!o.multiple,o.multiple?[]:"",!1))}i[rl]=o}catch(y){zt(t,t.return,y)}}break;case 6:if(hr(e,t),Ar(t),r&4){if(t.stateNode===null)throw Error(de(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){zt(t,t.return,y)}}break;case 3:if(hr(e,t),Ar(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(y){zt(t,t.return,y)}break;case 4:hr(e,t),Ar(t);break;case 13:hr(e,t),Ar(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=Vt())),r&4&&p0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(vn=(c=vn)||u,hr(e,t),vn=c):hr(e,t),Ar(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(f=be=u;be!==null;){switch(d=be,p=d.child,d.tag){case 0:case 11:case 14:case 15:Hs(4,d,d.return);break;case 1:Ea(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){zt(r,n,y)}}break;case 5:Ea(d,d.return);break;case 22:if(d.memoizedState!==null){g0(f);continue}}p!==null?(p.return=d,be=p):g0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=X_("display",a))}catch(y){zt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){zt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hr(e,t),Ar(t),r&4&&p0(t);break;case 21:break;default:hr(e,t),Ar(t)}}function Ar(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yx(n)){var r=n;break e}n=n.return}throw Error(de(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var o=h0(t);Hh(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=h0(t);zh(t,s,a);break;default:throw Error(de(161))}}catch(l){zt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k1(t,e,n){be=t,Mx(t)}function Mx(t,e,n){for(var r=(t.mode&1)!==0;be!==null;){var i=be,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ql;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||vn;s=Ql;var c=vn;if(Ql=a,(vn=l)&&!c)for(be=i;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?v0(i):l!==null?(l.return=a,be=l):v0(i);for(;o!==null;)be=o,Mx(o),o=o.sibling;be=i,Ql=s,vn=c}m0(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,be=o):m0(t)}}function m0(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vn||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Jg(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jg(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Qs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}vn||e.flags&512&&Bh(e)}catch(d){zt(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function g0(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function v0(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){zt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){zt(e,i,l)}}var o=e.return;try{Bh(e)}catch(l){zt(e,o,l)}break;case 5:var a=e.return;try{Bh(e)}catch(l){zt(e,a,l)}}}catch(l){zt(e,e.return,l)}if(e===t){be=null;break}var s=e.sibling;if(s!==null){s.return=e.return,be=s;break}be=e.return}}var B1=Math.ceil,Mu=fi.ReactCurrentDispatcher,xm=fi.ReactCurrentOwner,sr=fi.ReactCurrentBatchConfig,lt=0,an=null,Xt=null,un=0,Hn=0,wa=$i(0),Zt=0,cl=null,bo=0,Ju=0,Sm=0,Vs=null,An=null,Mm=0,Wa=1/0,qr=null,Eu=!1,Vh=null,Ii=null,Jl=!1,Ai=null,wu=0,Gs=0,Gh=null,Gc=-1,Wc=0;function Mn(){return lt&6?Vt():Gc!==-1?Gc:Gc=Vt()}function Ui(t){return t.mode&1?lt&2&&un!==0?un&-un:M1.transition!==null?(Wc===0&&(Wc=ay()),Wc):(t=_t,t!==0||(t=window.event,t=t===void 0?16:hy(t.type)),t):1}function wr(t,e,n,r){if(50<Gs)throw Gs=0,Gh=null,Error(de(185));xl(t,n,r),(!(lt&2)||t!==an)&&(t===an&&(!(lt&2)&&(Ju|=n),Zt===4&&wi(t,un)),Dn(t,r),n===1&&lt===0&&!(e.mode&1)&&(Wa=Vt()+500,Ku&&ji()))}function Dn(t,e){var n=t.callbackNode;ME(t,e);var r=su(t,t===an?un:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?S1(_0.bind(null,t)):Dy(_0.bind(null,t)),v1(function(){!(lt&6)&&ji()}),n=null;else{switch(sy(r)){case 1:n=Yp;break;case 4:n=iy;break;case 16:n=au;break;case 536870912:n=oy;break;default:n=au}n=Px(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if(Gc=-1,Wc=0,lt&6)throw Error(de(327));var n=t.callbackNode;if(Da()&&t.callbackNode!==n)return null;var r=su(t,t===an?un:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tu(t,r);else{e=r;var i=lt;lt|=2;var o=Tx();(an!==t||un!==e)&&(qr=null,Wa=Vt()+500,So(t,e));do try{V1();break}catch(s){wx(t,s)}while(!0);sm(),Mu.current=o,lt=i,Xt!==null?e=0:(an=null,un=0,e=Zt)}if(e!==0){if(e===2&&(i=gh(t),i!==0&&(r=i,e=Wh(t,i))),e===1)throw n=cl,So(t,0),wi(t,r),Dn(t,Vt()),n;if(e===6)wi(t,r);else{if(i=t.current.alternate,!(r&30)&&!z1(i)&&(e=Tu(t,r),e===2&&(o=gh(t),o!==0&&(r=o,e=Wh(t,o))),e===1))throw n=cl,So(t,0),wi(t,r),Dn(t,Vt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(de(345));case 2:ao(t,An,qr);break;case 3:if(wi(t,r),(r&130023424)===r&&(e=Mm+500-Vt(),10<e)){if(su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Mn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(ao.bind(null,t,An,qr),e);break}ao(t,An,qr);break;case 4:if(wi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Er(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=Vt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B1(r/1960))-r,10<r){t.timeoutHandle=wh(ao.bind(null,t,An,qr),r);break}ao(t,An,qr);break;case 5:ao(t,An,qr);break;default:throw Error(de(329))}}}return Dn(t,Vt()),t.callbackNode===n?Ex.bind(null,t):null}function Wh(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(So(t,e).flags|=256),t=Tu(t,e),t!==2&&(e=An,An=n,e!==null&&$h(e)),t}function $h(t){An===null?An=t:An.push.apply(An,t)}function z1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~Sm,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Er(e),r=1<<n;t[n]=-1,e&=~r}}function _0(t){if(lt&6)throw Error(de(327));Da();var e=su(t,0);if(!(e&1))return Dn(t,Vt()),null;var n=Tu(t,e);if(t.tag!==0&&n===2){var r=gh(t);r!==0&&(e=r,n=Wh(t,r))}if(n===1)throw n=cl,So(t,0),wi(t,e),Dn(t,Vt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ao(t,An,qr),Dn(t,Vt()),null}function Em(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Wa=Vt()+500,Ku&&ji())}}function Ro(t){Ai!==null&&Ai.tag===0&&!(lt&6)&&Da();var e=lt;lt|=1;var n=sr.transition,r=_t;try{if(sr.transition=null,_t=1,t)return t()}finally{_t=r,sr.transition=n,lt=e,!(lt&6)&&ji()}}function wm(){Hn=wa.current,bt(wa)}function So(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,g1(n)),Xt!==null)for(n=Xt.return;n!==null;){var r=n;switch(im(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:Va(),bt(Pn),bt(_n),hm();break;case 5:dm(r);break;case 4:Va();break;case 13:bt(Ut);break;case 19:bt(Ut);break;case 10:lm(r.type._context);break;case 22:case 23:wm()}n=n.return}if(an=t,Xt=t=Ni(t.current,null),un=Hn=e,Zt=0,cl=null,Sm=Ju=bo=0,An=Vs=null,po!==null){for(e=0;e<po.length;e++)if(n=po[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}po=null}return t}function wx(t,e){do{var n=Xt;try{if(sm(),zc.current=Su,xu){for(var r=Nt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xu=!1}if(Ao=0,nn=qt=Nt=null,zs=!1,al=0,xm.current=null,n===null||n.return===null){Zt=1,cl=e,Xt=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=un,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=o0(a);if(p!==null){p.flags&=-257,a0(p,a,s,o,e),p.mode&1&&i0(o,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){i0(o,c,e),Tm();break e}l=Error(de(426))}}else if(Lt&&s.mode&1){var m=o0(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),a0(m,a,s,o,e),om(Ga(l,s));break e}}o=l=Ga(l,s),Zt!==4&&(Zt=2),Vs===null?Vs=[o]:Vs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=sx(o,l,e);Qg(o,h);break e;case 1:s=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ii===null||!Ii.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=lx(o,s,e);Qg(o,M);break e}}o=o.return}while(o!==null)}Ax(n)}catch(b){e=b,Xt===n&&n!==null&&(Xt=n=n.return);continue}break}while(!0)}function Tx(){var t=Mu.current;return Mu.current=Su,t===null?Su:t}function Tm(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),an===null||!(bo&268435455)&&!(Ju&268435455)||wi(an,un)}function Tu(t,e){var n=lt;lt|=2;var r=Tx();(an!==t||un!==e)&&(qr=null,So(t,e));do try{H1();break}catch(i){wx(t,i)}while(!0);if(sm(),lt=n,Mu.current=r,Xt!==null)throw Error(de(261));return an=null,un=0,Zt}function H1(){for(;Xt!==null;)Cx(Xt)}function V1(){for(;Xt!==null&&!hE();)Cx(Xt)}function Cx(t){var e=Rx(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?Ax(t):Xt=e,xm.current=null}function Ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=N1(n,e),n!==null){n.flags&=32767,Xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,Xt=null;return}}else if(n=U1(n,e,Hn),n!==null){Xt=n;return}if(e=e.sibling,e!==null){Xt=e;return}Xt=e=t}while(e!==null);Zt===0&&(Zt=5)}function ao(t,e,n){var r=_t,i=sr.transition;try{sr.transition=null,_t=1,G1(t,e,n,r)}finally{sr.transition=i,_t=r}return null}function G1(t,e,n,r){do Da();while(Ai!==null);if(lt&6)throw Error(de(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(EE(t,o),t===an&&(Xt=an=null,un=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,Px(au,function(){return Da(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=sr.transition,sr.transition=null;var a=_t;_t=1;var s=lt;lt|=4,xm.current=null,O1(t,n),Sx(n,t),c1(Mh),lu=!!Sh,Mh=Sh=null,t.current=n,k1(n),pE(),lt=s,_t=a,sr.transition=o}else t.current=n;if(Jl&&(Jl=!1,Ai=t,wu=i),o=t.pendingLanes,o===0&&(Ii=null),vE(n.stateNode),Dn(t,Vt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eu)throw Eu=!1,t=Vh,Vh=null,t;return wu&1&&t.tag!==0&&Da(),o=t.pendingLanes,o&1?t===Gh?Gs++:(Gs=0,Gh=t):Gs=0,ji(),null}function Da(){if(Ai!==null){var t=sy(wu),e=sr.transition,n=_t;try{if(sr.transition=null,_t=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,wu=0,lt&6)throw Error(de(331));var i=lt;for(lt|=4,be=t.current;be!==null;){var o=be,a=o.child;if(be.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Hs(8,u,o)}var f=u.child;if(f!==null)f.return=u,be=f;else for(;be!==null;){u=be;var d=u.sibling,p=u.return;if(_x(u),u===c){be=null;break}if(d!==null){d.return=p,be=d;break}be=p}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}be=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,be=a;else e:for(;be!==null;){if(o=be,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hs(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,be=h;break e}be=o.return}}var x=t.current;for(be=x;be!==null;){a=be;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,be=v;else e:for(a=x;be!==null;){if(s=be,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qu(9,s)}}catch(b){zt(s,s.return,b)}if(s===a){be=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,be=M;break e}be=s.return}}if(lt=i,ji(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(Wu,t)}catch{}r=!0}return r}finally{_t=n,sr.transition=e}}return!1}function y0(t,e,n){e=Ga(n,e),e=sx(t,e,1),t=Di(t,e,1),e=Mn(),t!==null&&(xl(t,1,e),Dn(t,e))}function zt(t,e,n){if(t.tag===3)y0(t,t,n);else for(;e!==null;){if(e.tag===3){y0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=Ga(n,t),t=lx(e,t,1),e=Di(e,t,1),t=Mn(),e!==null&&(xl(e,1,t),Dn(e,t));break}}e=e.return}}function W1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mn(),t.pingedLanes|=t.suspendedLanes&n,an===t&&(un&n)===n&&(Zt===4||Zt===3&&(un&130023424)===un&&500>Vt()-Mm?So(t,0):Sm|=n),Dn(t,e)}function bx(t,e){e===0&&(t.mode&1?(e=Gl,Gl<<=1,!(Gl&130023424)&&(Gl=4194304)):e=1);var n=Mn();t=si(t,e),t!==null&&(xl(t,e,n),Dn(t,n))}function $1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bx(t,n)}function j1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(de(314))}r!==null&&r.delete(e),bx(t,n)}var Rx;Rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rn=!1,I1(t,e,n);Rn=!!(t.flags&131072)}else Rn=!1,Lt&&e.flags&1048576&&Iy(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vc(t,e),t=e.pendingProps;var i=Ba(e,_n.current);La(e,n),i=mm(null,e,r,t,i,n);var o=gm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(r)?(o=!0,hu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Lh(e,r,t,n),e=Uh(null,e,r,!0,o,n)):(e.tag=0,Lt&&o&&rm(e),Sn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Y1(r),t=vr(r,t),i){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=c0(null,e,r,t,n);break e;case 11:e=s0(null,e,r,t,n);break e;case 14:e=l0(null,e,r,vr(r.type,t),n);break e}throw Error(de(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vr(r,i),Ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vr(r,i),c0(t,e,r,i,n);case 3:e:{if(dx(e),t===null)throw Error(de(387));r=e.pendingProps,o=e.memoizedState,i=o.element,By(t,e),_u(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ga(Error(de(423)),e),e=u0(t,e,r,n,i);break e}else if(r!==i){i=Ga(Error(de(424)),e),e=u0(t,e,r,n,i);break e}else for(Wn=Li(e.stateNode.containerInfo.firstChild),$n=e,Lt=!0,xr=null,n=Oy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(za(),r===i){e=li(t,e,n);break e}Sn(t,e,r,n)}e=e.child}return e;case 5:return zy(e),t===null&&bh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,Eh(r,i)?a=null:o!==null&&Eh(r,o)&&(e.flags|=32),fx(t,e),Sn(t,e,a,n),e.child;case 6:return t===null&&bh(e),null;case 13:return hx(t,e,n);case 4:return fm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ha(e,null,r,n):Sn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vr(r,i),s0(t,e,r,i,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,wt(gu,r._currentValue),r._currentValue=a,o!==null)if(Tr(o.value,a)){if(o.children===i.children&&!Pn.current){e=li(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ii(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rh(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(de(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Rh(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Sn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,La(e,n),i=cr(i),r=r(i),e.flags|=1,Sn(t,e,r,n),e.child;case 14:return r=e.type,i=vr(r,e.pendingProps),i=vr(r.type,i),l0(t,e,r,i,n);case 15:return cx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vr(r,i),Vc(t,e),e.tag=1,Ln(r)?(t=!0,hu(e)):t=!1,La(e,n),ax(e,r,i),Lh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return px(t,e,n);case 22:return ux(t,e,n)}throw Error(de(156,e.tag))};function Px(t,e){return ry(t,e)}function X1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function or(t,e,n,r){return new X1(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y1(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$p)return 11;if(t===jp)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=or(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $c(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")Cm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case pa:return Mo(n.children,i,o,e);case Wp:a=8,i|=8;break;case th:return t=or(12,n,e,i|2),t.elementType=th,t.lanes=o,t;case nh:return t=or(13,n,e,i),t.elementType=nh,t.lanes=o,t;case rh:return t=or(19,n,e,i),t.elementType=rh,t.lanes=o,t;case z_:return ef(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k_:a=10;break e;case B_:a=9;break e;case $p:a=11;break e;case jp:a=14;break e;case Si:a=16,r=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=or(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Mo(t,e,n,r){return t=or(7,t,r,e),t.lanes=n,t}function ef(t,e,n,r){return t=or(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function hd(t,e,n){return t=or(6,t,null,e),t.lanes=n,t}function pd(t,e,n){return e=or(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yf(0),this.expirationTimes=Yf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Am(t,e,n,r,i,o,a,s,l){return t=new K1(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=or(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(o),t}function q1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ha,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lx(t){if(!t)return zi;t=t._reactInternals;e:{if(No(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Ly(t,n,e)}return e}function Dx(t,e,n,r,i,o,a,s,l){return t=Am(n,r,!0,t,i,o,a,s,l),t.context=Lx(null),n=t.current,r=Mn(),i=Ui(n),o=ii(r,i),o.callback=e??null,Di(n,o,i),t.current.lanes=i,xl(t,i,r),Dn(t,r),t}function tf(t,e,n,r){var i=e.current,o=Mn(),a=Ui(i);return n=Lx(n),e.context===null?e.context=n:e.pendingContext=n,e=ii(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Di(i,e,a),t!==null&&(wr(t,i,a,o),Bc(t,i,a)),a}function Cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function x0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bm(t,e){x0(t,e),(t=t.alternate)&&x0(t,e)}function Z1(){return null}var Ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rm(t){this._internalRoot=t}nf.prototype.render=Rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));tf(t,e,null,null)};nf.prototype.unmount=Rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ro(function(){tf(null,t,null,null)}),e[ai]=null}};function nf(t){this._internalRoot=t}nf.prototype.unstable_scheduleHydration=function(t){if(t){var e=uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&dy(t)}};function Pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function S0(){}function Q1(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Cu(a);o.call(c)}}var a=Dx(e,r,t,0,null,!1,!1,"",S0);return t._reactRootContainer=a,t[ai]=a.current,tl(t.nodeType===8?t.parentNode:t),Ro(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Cu(l);s.call(c)}}var l=Am(t,0,!1,null,null,!1,!1,"",S0);return t._reactRootContainer=l,t[ai]=l.current,tl(t.nodeType===8?t.parentNode:t),Ro(function(){tf(e,l,n,r)}),l}function of(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Cu(a);s.call(l)}}tf(e,a,t,i)}else a=Q1(n,e,t,i,r);return Cu(a)}ly=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(Kp(e,n|1),Dn(e,Vt()),!(lt&6)&&(Wa=Vt()+500,ji()))}break;case 13:Ro(function(){var r=si(t,1);if(r!==null){var i=Mn();wr(r,t,1,i)}}),bm(t,1)}};qp=function(t){if(t.tag===13){var e=si(t,134217728);if(e!==null){var n=Mn();wr(e,t,134217728,n)}bm(t,134217728)}};cy=function(t){if(t.tag===13){var e=Ui(t),n=si(t,e);if(n!==null){var r=Mn();wr(n,t,e,r)}bm(t,e)}};uy=function(){return _t};fy=function(t,e){var n=_t;try{return _t=t,e()}finally{_t=n}};hh=function(t,e,n){switch(e){case"input":if(ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(de(90));V_(r),ah(r,i)}}}break;case"textarea":W_(t,n);break;case"select":e=n.value,e!=null&&Aa(t,!!n.multiple,e,!1)}};Z_=Em;Q_=Ro;var J1={usingClientEntryPoint:!1,Events:[Ml,_a,Yu,K_,q_,Em]},ps={findFiberByHostInstance:ho,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ty(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||Z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Wu=ec.inject(ew),kr=ec}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(e))throw Error(de(200));return q1(t,e,null,n)};Yn.createRoot=function(t,e){if(!Pm(t))throw Error(de(299));var n=!1,r="",i=Ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Am(t,1,!1,null,null,n,!1,r,i),t[ai]=e.current,tl(t.nodeType===8?t.parentNode:t),new Rm(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=ty(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return Ro(t)};Yn.hydrate=function(t,e,n){if(!rf(e))throw Error(de(200));return of(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!Pm(t))throw Error(de(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ix;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Dx(e,null,t,1,n??null,i,!1,o,a),t[ai]=e.current,tl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nf(e)};Yn.render=function(t,e,n){if(!rf(e))throw Error(de(200));return of(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!rf(t))throw Error(de(40));return t._reactRootContainer?(Ro(function(){of(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};Yn.unstable_batchedUpdates=Em;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rf(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return of(t,e,n,!1,r)};Yn.version="18.3.1-next-f1338f8080-20240426";function Ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ux)}catch(t){console.error(t)}}Ux(),U_.exports=Yn;var Lm=U_.exports;const tw=M_(Lm),nw=S_({__proto__:null,default:tw},[Lm]);var Nx,M0=Lm;Nx=M0.createRoot,M0.hydrateRoot;const ul={black:"#000",white:"#fff"},Vo={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Go={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Wo={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},$o={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},jo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},ms={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},rw={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Po(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const zr="$$material";function Au(){return Au=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Au.apply(null,arguments)}function Fx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var iw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ow=Fx(function(t){return iw.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),aw=!1;function sw(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function lw(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var cw=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!aw:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lw(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=sw(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),gn="-ms-",bu="-moz-",ut="-webkit-",Ox="comm",Dm="rule",Im="decl",uw="@import",kx="@keyframes",fw="@layer",dw=Math.abs,af=String.fromCharCode,hw=Object.assign;function pw(t,e){return cn(t,0)^45?(((e<<2^cn(t,0))<<2^cn(t,1))<<2^cn(t,2))<<2^cn(t,3):0}function Bx(t){return t.trim()}function mw(t,e){return(t=e.exec(t))?t[0]:t}function ft(t,e,n){return t.replace(e,n)}function jh(t,e){return t.indexOf(e)}function cn(t,e){return t.charCodeAt(e)|0}function fl(t,e,n){return t.slice(e,n)}function Lr(t){return t.length}function Um(t){return t.length}function tc(t,e){return e.push(t),t}function gw(t,e){return t.map(e).join("")}var sf=1,$a=1,zx=0,Fn=0,jt=0,ns="";function lf(t,e,n,r,i,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:sf,column:$a,length:a,return:""}}function gs(t,e){return hw(lf("",null,null,"",null,null,0),t,{length:-t.length},e)}function vw(){return jt}function _w(){return jt=Fn>0?cn(ns,--Fn):0,$a--,jt===10&&($a=1,sf--),jt}function jn(){return jt=Fn<zx?cn(ns,Fn++):0,$a++,jt===10&&($a=1,sf++),jt}function Hr(){return cn(ns,Fn)}function jc(){return Fn}function wl(t,e){return fl(ns,t,e)}function dl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hx(t){return sf=$a=1,zx=Lr(ns=t),Fn=0,[]}function Vx(t){return ns="",t}function Xc(t){return Bx(wl(Fn-1,Xh(t===91?t+2:t===40?t+1:t)))}function yw(t){for(;(jt=Hr())&&jt<33;)jn();return dl(t)>2||dl(jt)>3?"":" "}function xw(t,e){for(;--e&&jn()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return wl(t,jc()+(e<6&&Hr()==32&&jn()==32))}function Xh(t){for(;jn();)switch(jt){case t:return Fn;case 34:case 39:t!==34&&t!==39&&Xh(jt);break;case 40:t===41&&Xh(t);break;case 92:jn();break}return Fn}function Sw(t,e){for(;jn()&&t+jt!==57;)if(t+jt===84&&Hr()===47)break;return"/*"+wl(e,Fn-1)+"*"+af(t===47?t:jn())}function Mw(t){for(;!dl(Hr());)jn();return wl(t,Fn)}function Ew(t){return Vx(Yc("",null,null,null,[""],t=Hx(t),0,[0],t))}function Yc(t,e,n,r,i,o,a,s,l){for(var c=0,u=0,f=a,d=0,p=0,_=0,y=1,m=1,h=1,x=0,v="",M=i,b=o,A=r,C=v;m;)switch(_=x,x=jn()){case 40:if(_!=108&&cn(C,f-1)==58){jh(C+=ft(Xc(x),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Xc(x);break;case 9:case 10:case 13:case 32:C+=yw(_);break;case 92:C+=xw(jc()-1,7);continue;case 47:switch(Hr()){case 42:case 47:tc(ww(Sw(jn(),jc()),e,n),l);break;default:C+="/"}break;case 123*y:s[c++]=Lr(C)*h;case 125*y:case 59:case 0:switch(x){case 0:case 125:m=0;case 59+u:h==-1&&(C=ft(C,/\f/g,"")),p>0&&Lr(C)-f&&tc(p>32?w0(C+";",r,n,f-1):w0(ft(C," ","")+";",r,n,f-2),l);break;case 59:C+=";";default:if(tc(A=E0(C,e,n,c,u,i,s,v,M=[],b=[],f),o),x===123)if(u===0)Yc(C,e,A,A,M,o,f,s,b);else switch(d===99&&cn(C,3)===110?100:d){case 100:case 108:case 109:case 115:Yc(t,A,A,r&&tc(E0(t,A,A,0,0,i,s,v,i,M=[],f),b),i,b,f,s,r?M:b);break;default:Yc(C,A,A,A,[""],b,0,s,b)}}c=u=p=0,y=h=1,v=C="",f=a;break;case 58:f=1+Lr(C),p=_;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&_w()==125)continue}switch(C+=af(x),x*y){case 38:h=u>0?1:(C+="\f",-1);break;case 44:s[c++]=(Lr(C)-1)*h,h=1;break;case 64:Hr()===45&&(C+=Xc(jn())),d=Hr(),u=f=Lr(v=C+=Mw(jc())),x++;break;case 45:_===45&&Lr(C)==2&&(y=0)}}return o}function E0(t,e,n,r,i,o,a,s,l,c,u){for(var f=i-1,d=i===0?o:[""],p=Um(d),_=0,y=0,m=0;_<r;++_)for(var h=0,x=fl(t,f+1,f=dw(y=a[_])),v=t;h<p;++h)(v=Bx(y>0?d[h]+" "+x:ft(x,/&\f/g,d[h])))&&(l[m++]=v);return lf(t,e,n,i===0?Dm:s,l,c,u)}function ww(t,e,n){return lf(t,e,n,Ox,af(vw()),fl(t,2,-2),0)}function w0(t,e,n,r){return lf(t,e,n,Im,fl(t,0,r),fl(t,r+1,-1),r)}function Ia(t,e){for(var n="",r=Um(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Tw(t,e,n,r){switch(t.type){case fw:if(t.children.length)break;case uw:case Im:return t.return=t.return||t.value;case Ox:return"";case kx:return t.return=t.value+"{"+Ia(t.children,r)+"}";case Dm:t.value=t.props.join(",")}return Lr(n=Ia(t.children,r))?t.return=t.value+"{"+n+"}":""}function Cw(t){var e=Um(t);return function(n,r,i,o){for(var a="",s=0;s<e;s++)a+=t[s](n,r,i,o)||"";return a}}function Aw(t){return function(e){e.root||(e=e.return)&&t(e)}}var bw=function(e,n,r){for(var i=0,o=0;i=o,o=Hr(),i===38&&o===12&&(n[r]=1),!dl(o);)jn();return wl(e,Fn)},Rw=function(e,n){var r=-1,i=44;do switch(dl(i)){case 0:i===38&&Hr()===12&&(n[r]=1),e[r]+=bw(Fn-1,n,r);break;case 2:e[r]+=Xc(i);break;case 4:if(i===44){e[++r]=Hr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=af(i)}while(i=jn());return e},Pw=function(e,n){return Vx(Rw(Hx(e),n))},T0=new WeakMap,Lw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!T0.get(r))&&!i){T0.set(e,!0);for(var o=[],a=Pw(n,o),s=r.props,l=0,c=0;l<a.length;l++)for(var u=0;u<s.length;u++,c++)e.props[c]=o[l]?a[l].replace(/&\f/g,s[u]):s[u]+" "+a[l]}}},Dw=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Gx(t,e){switch(pw(t,e)){case 5103:return ut+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ut+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ut+t+bu+t+gn+t+t;case 6828:case 4268:return ut+t+gn+t+t;case 6165:return ut+t+gn+"flex-"+t+t;case 5187:return ut+t+ft(t,/(\w+).+(:[^]+)/,ut+"box-$1$2"+gn+"flex-$1$2")+t;case 5443:return ut+t+gn+"flex-item-"+ft(t,/flex-|-self/,"")+t;case 4675:return ut+t+gn+"flex-line-pack"+ft(t,/align-content|flex-|-self/,"")+t;case 5548:return ut+t+gn+ft(t,"shrink","negative")+t;case 5292:return ut+t+gn+ft(t,"basis","preferred-size")+t;case 6060:return ut+"box-"+ft(t,"-grow","")+ut+t+gn+ft(t,"grow","positive")+t;case 4554:return ut+ft(t,/([^-])(transform)/g,"$1"+ut+"$2")+t;case 6187:return ft(ft(ft(t,/(zoom-|grab)/,ut+"$1"),/(image-set)/,ut+"$1"),t,"")+t;case 5495:case 3959:return ft(t,/(image-set\([^]*)/,ut+"$1$`$1");case 4968:return ft(ft(t,/(.+:)(flex-)?(.*)/,ut+"box-pack:$3"+gn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ut+t+t;case 4095:case 3583:case 4068:case 2532:return ft(t,/(.+)-inline(.+)/,ut+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lr(t)-1-e>6)switch(cn(t,e+1)){case 109:if(cn(t,e+4)!==45)break;case 102:return ft(t,/(.+:)(.+)-([^]+)/,"$1"+ut+"$2-$3$1"+bu+(cn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jh(t,"stretch")?Gx(ft(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(cn(t,e+1)!==115)break;case 6444:switch(cn(t,Lr(t)-3-(~jh(t,"!important")&&10))){case 107:return ft(t,":",":"+ut)+t;case 101:return ft(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ut+(cn(t,14)===45?"inline-":"")+"box$3$1"+ut+"$2$3$1"+gn+"$2box$3")+t}break;case 5936:switch(cn(t,e+11)){case 114:return ut+t+gn+ft(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ut+t+gn+ft(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ut+t+gn+ft(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ut+t+gn+t+t}return t}var Iw=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Im:e.return=Gx(e.value,e.length);break;case kx:return Ia([gs(e,{value:ft(e.value,"@","@"+ut)})],i);case Dm:if(e.length)return gw(e.props,function(o){switch(mw(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ia([gs(e,{props:[ft(o,/:(read-\w+)/,":"+bu+"$1")]})],i);case"::placeholder":return Ia([gs(e,{props:[ft(o,/:(plac\w+)/,":"+ut+"input-$1")]}),gs(e,{props:[ft(o,/:(plac\w+)/,":"+bu+"$1")]}),gs(e,{props:[ft(o,/:(plac\w+)/,gn+"input-$1")]})],i)}return""})}},Uw=[Iw],Nw=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var m=y.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||Uw,o={},a,s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var m=y.getAttribute("data-emotion").split(" "),h=1;h<m.length;h++)o[m[h]]=!0;s.push(y)});var l,c=[Lw,Dw];{var u,f=[Tw,Aw(function(y){u.insert(y)})],d=Cw(c.concat(i,f)),p=function(m){return Ia(Ew(m),d)};l=function(m,h,x,v){u=x,p(m?m+"{"+h.styles+"}":h.styles),v&&(_.inserted[h.name]=!0)}}var _={key:n,sheet:new cw({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return _.sheet.hydrate(s),_},Wx={exports:{}},yt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sn=typeof Symbol=="function"&&Symbol.for,Nm=sn?Symbol.for("react.element"):60103,Fm=sn?Symbol.for("react.portal"):60106,cf=sn?Symbol.for("react.fragment"):60107,uf=sn?Symbol.for("react.strict_mode"):60108,ff=sn?Symbol.for("react.profiler"):60114,df=sn?Symbol.for("react.provider"):60109,hf=sn?Symbol.for("react.context"):60110,Om=sn?Symbol.for("react.async_mode"):60111,pf=sn?Symbol.for("react.concurrent_mode"):60111,mf=sn?Symbol.for("react.forward_ref"):60112,gf=sn?Symbol.for("react.suspense"):60113,Fw=sn?Symbol.for("react.suspense_list"):60120,vf=sn?Symbol.for("react.memo"):60115,_f=sn?Symbol.for("react.lazy"):60116,Ow=sn?Symbol.for("react.block"):60121,kw=sn?Symbol.for("react.fundamental"):60117,Bw=sn?Symbol.for("react.responder"):60118,zw=sn?Symbol.for("react.scope"):60119;function qn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Nm:switch(t=t.type,t){case Om:case pf:case cf:case ff:case uf:case gf:return t;default:switch(t=t&&t.$$typeof,t){case hf:case mf:case _f:case vf:case df:return t;default:return e}}case Fm:return e}}}function $x(t){return qn(t)===pf}yt.AsyncMode=Om;yt.ConcurrentMode=pf;yt.ContextConsumer=hf;yt.ContextProvider=df;yt.Element=Nm;yt.ForwardRef=mf;yt.Fragment=cf;yt.Lazy=_f;yt.Memo=vf;yt.Portal=Fm;yt.Profiler=ff;yt.StrictMode=uf;yt.Suspense=gf;yt.isAsyncMode=function(t){return $x(t)||qn(t)===Om};yt.isConcurrentMode=$x;yt.isContextConsumer=function(t){return qn(t)===hf};yt.isContextProvider=function(t){return qn(t)===df};yt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nm};yt.isForwardRef=function(t){return qn(t)===mf};yt.isFragment=function(t){return qn(t)===cf};yt.isLazy=function(t){return qn(t)===_f};yt.isMemo=function(t){return qn(t)===vf};yt.isPortal=function(t){return qn(t)===Fm};yt.isProfiler=function(t){return qn(t)===ff};yt.isStrictMode=function(t){return qn(t)===uf};yt.isSuspense=function(t){return qn(t)===gf};yt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cf||t===pf||t===ff||t===uf||t===gf||t===Fw||typeof t=="object"&&t!==null&&(t.$$typeof===_f||t.$$typeof===vf||t.$$typeof===df||t.$$typeof===hf||t.$$typeof===mf||t.$$typeof===kw||t.$$typeof===Bw||t.$$typeof===zw||t.$$typeof===Ow)};yt.typeOf=qn;Wx.exports=yt;var Hw=Wx.exports,jx=Hw,Vw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xx={};Xx[jx.ForwardRef]=Vw;Xx[jx.Memo]=Gw;var Ww=!0;function $w(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var Yx=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Ww===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Kx=function(e,n,r){Yx(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function jw(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Xw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yw=!1,Kw=/[A-Z]|^ms/g,qw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qx=function(e){return e.charCodeAt(1)===45},C0=function(e){return e!=null&&typeof e!="boolean"},md=Fx(function(t){return qx(t)?t:t.replace(Kw,"-$&").toLowerCase()}),A0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(qw,function(r,i,o){return Dr={name:i,styles:o,next:Dr},i})}return Xw[e]!==1&&!qx(e)&&typeof n=="number"&&n!==0?n+"px":n},Zw="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function hl(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Dr={name:i.name,styles:i.styles,next:Dr},i.name;var o=n;if(o.styles!==void 0){var a=o.next;if(a!==void 0)for(;a!==void 0;)Dr={name:a.name,styles:a.styles,next:Dr},a=a.next;var s=o.styles+";";return s}return Qw(t,e,n)}case"function":{if(t!==void 0){var l=Dr,c=n(t);return Dr=l,hl(t,e,c)}break}}var u=n;if(e==null)return u;var f=e[u];return f!==void 0?f:u}function Qw(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=hl(t,e,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object"){var s=a;e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":C0(s)&&(r+=md(o)+":"+A0(o,s)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&Yw)throw new Error(Zw);if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var l=0;l<a.length;l++)C0(a[l])&&(r+=md(o)+":"+A0(o,a[l])+";");else{var c=hl(t,e,a);switch(o){case"animation":case"animationName":{r+=md(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var b0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Dr;function km(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";Dr=void 0;var o=t[0];if(o==null||o.raw===void 0)r=!1,i+=hl(n,e,o);else{var a=o;i+=a[0]}for(var s=1;s<t.length;s++)if(i+=hl(n,e,t[s]),r){var l=o;i+=l[s]}b0.lastIndex=0;for(var c="",u;(u=b0.exec(i))!==null;)c+="-"+u[1];var f=jw(i)+c;return{name:f,styles:i,next:Dr}}var Jw=function(e){return e()},Zx=Jd.useInsertionEffect?Jd.useInsertionEffect:!1,eT=Zx||Jw,R0=Zx||k.useLayoutEffect,Qx=k.createContext(typeof HTMLElement<"u"?Nw({key:"css"}):null);Qx.Provider;var Jx=function(e){return k.forwardRef(function(n,r){var i=k.useContext(Qx);return e(n,i,r)})},yf=k.createContext({}),tT=Jx(function(t,e){var n=t.styles,r=km([n],void 0,k.useContext(yf)),i=k.useRef();return R0(function(){var o=e.key+"-global",a=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return e.sheet.tags.length&&(a.before=e.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",o),a.hydrate([l])),i.current=[a,s],function(){a.flush()}},[e]),R0(function(){var o=i.current,a=o[0],s=o[1];if(s){o[1]=!1;return}if(r.next!==void 0&&Kx(e,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}e.insert("",r,a,!1)},[e,r.name]),null});function nT(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return km(e)}var Bm=function(){var e=nT.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rT=ow,iT=function(e){return e!=="theme"},P0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?rT:iT},L0=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(a){return e.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},oT=!1,aT=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Yx(n,r,i),eT(function(){return Kx(n,r,i)}),null},sT=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,a;n!==void 0&&(o=n.label,a=n.target);var s=L0(e,n,r),l=s||P0(i),c=!l("as");return function(){var u=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)f.push.apply(f,u);else{f.push(u[0][0]);for(var d=u.length,p=1;p<d;p++)f.push(u[p],u[0][p])}var _=Jx(function(y,m,h){var x=c&&y.as||i,v="",M=[],b=y;if(y.theme==null){b={};for(var A in y)b[A]=y[A];b.theme=k.useContext(yf)}typeof y.className=="string"?v=$w(m.registered,M,y.className):y.className!=null&&(v=y.className+" ");var C=km(f.concat(M),m.registered,b);v+=m.key+"-"+C.name,a!==void 0&&(v+=" "+a);var E=c&&s===void 0?P0(x):l,g={};for(var S in y)c&&S==="as"||E(S)&&(g[S]=y[S]);return g.className=v,h&&(g.ref=h),k.createElement(k.Fragment,null,k.createElement(aT,{cache:m,serialized:C,isStringTag:typeof x=="string"}),k.createElement(x,g))});return _.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",_.defaultProps=e.defaultProps,_.__emotion_real=_,_.__emotion_base=i,_.__emotion_styles=f,_.__emotion_forwardProp=s,Object.defineProperty(_,"toString",{value:function(){return a===void 0&&oT?"NO_COMPONENT_SELECTOR":"."+a}}),_.withComponent=function(y,m){return t(y,Au({},n,m,{shouldForwardProp:L0(_,m,!0)})).apply(void 0,f)},_}},lT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Yh=sT.bind();lT.forEach(function(t){Yh[t]=Yh(t)});function cT(t){return t==null||Object.keys(t).length===0}function uT(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(cT(i)?n:i):e;return Ee.jsx(tT,{styles:r})}/**
 * @mui/styled-engine v6.0.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function eS(t,e){return Yh(t,e)}const fT=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function Nr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function tS(t){if(!Nr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=tS(t[n])}),e}function En(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return Nr(t)&&Nr(e)&&Object.keys(e).forEach(i=>{Nr(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&Nr(t[i])?r[i]=En(t[i],e[i],n):n.clone?r[i]=Nr(e[i])?tS(e[i]):e[i]:r[i]=e[i]}),r}const dT=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function hT(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,o=dT(e),a=Object.keys(o);function s(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function c(d,p){const _=a.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(_!==-1&&typeof e[a[_]]=="number"?e[a[_]]:p)-r/100}${n})`}function u(d){return a.indexOf(d)+1<a.length?c(d,a[a.indexOf(d)+1]):s(d)}function f(d){const p=a.indexOf(d);return p===0?s(a[1]):p===a.length-1?l(a[p]):c(d,a[a.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:a,values:o,up:s,down:l,between:c,only:u,not:f,unit:n,...i}}function pT(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var a,s;const o=/min-width:\s*([0-9.]+)/;return+(((a=r.match(o))==null?void 0:a[1])||0)-+(((s=i.match(o))==null?void 0:s[1])||0)});return n.length?n.reduce((r,i)=>{const o=e[i];return delete r[i],r[i]=o,r},{...e}):e}function mT(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function gT(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,o=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(o)}function vT(t){const e=(o,a)=>o.replace("@media",a?`@container ${a}`:"@container");function n(o,a){o.up=(...s)=>e(t.breakpoints.up(...s),a),o.down=(...s)=>e(t.breakpoints.down(...s),a),o.between=(...s)=>e(t.breakpoints.between(...s),a),o.only=(...s)=>e(t.breakpoints.only(...s),a),o.not=(...s)=>{const l=e(t.breakpoints.not(...s),a);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const r={},i=o=>(n(r,o),r);return n(i),{...t,containerQueries:i}}const _T={borderRadius:4};function Ws(t,e){return e?En(t,e,{clone:!1}):t}const xf={xs:0,sm:600,md:900,lg:1200,xl:1536},D0={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${xf[t]}px)`},yT={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:xf[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function On(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||D0;return e.reduce((a,s,l)=>(a[o.up(o.keys[l])]=n(e[l]),a),{})}if(typeof e=="object"){const o=r.breakpoints||D0;return Object.keys(e).reduce((a,s)=>{if(mT(o.keys,s)){const l=gT(r.containerQueries?r:yT,s);l&&(a[l]=n(e[s],s))}else if(Object.keys(o.values||xf).includes(s)){const l=o.up(s);a[l]=n(e[s],s)}else{const l=s;a[l]=e[l]}return a},{})}return n(e)}function nS(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function rS(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function xT(t,...e){const n=nS(t),r=[n,...e].reduce((i,o)=>En(i,o),{});return rS(Object.keys(n),r)}function ST(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((i,o)=>{o<t.length&&(n[i]=!0)}):r.forEach(i=>{t[i]!=null&&(n[i]=!0)}),n}function Eo({values:t,breakpoints:e,base:n}){const r=n||ST(t,e),i=Object.keys(r);if(i.length===0)return t;let o;return i.reduce((a,s,l)=>(Array.isArray(t)?(a[s]=t[l]!=null?t[l]:t[o],o=l):typeof t=="object"?(a[s]=t[s]!=null?t[s]:t[o],o=s):a[s]=t,a),{})}function Ht(t){if(typeof t!="string")throw new Error(Po(7));return t.charAt(0).toUpperCase()+t.slice(1)}function ja(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Ru(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=ja(t,n)||r,e&&(i=e(i,r,t)),i}function Gt(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=a=>{if(a[e]==null)return null;const s=a[e],l=a.theme,c=ja(l,r)||{};return On(a,s,f=>{let d=Ru(c,i,f);return f===d&&typeof f=="string"&&(d=Ru(c,i,`${e}${f==="default"?"":Ht(f)}`,f)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function MT(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const ET={m:"margin",p:"padding"},wT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},I0={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},TT=MT(t=>{if(t.length>2)if(I0[t])t=I0[t];else return[t];const[e,n]=t.split(""),r=ET[e],i=wT[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),zm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Hm=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...zm,...Hm];function Tl(t,e,n,r){const i=ja(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?o=>typeof o=="string"?o:typeof i=="string"?`calc(${o} * ${i})`:i*o:Array.isArray(i)?o=>{if(typeof o=="string")return o;const a=Math.abs(o),s=i[a];return o>=0?s:typeof s=="number"?-s:`-${s}`}:typeof i=="function"?i:()=>{}}function Sf(t){return Tl(t,"spacing",8)}function Lo(t,e){return typeof e=="string"||e==null?e:t(e)}function CT(t,e){return n=>t.reduce((r,i)=>(r[i]=Lo(e,n),r),{})}function AT(t,e,n,r){if(!e.includes(n))return null;const i=TT(n),o=CT(i,r),a=t[n];return On(t,a,o)}function iS(t,e){const n=Sf(t.theme);return Object.keys(t).map(r=>AT(t,e,r,n)).reduce(Ws,{})}function kt(t){return iS(t,zm)}kt.propTypes={};kt.filterProps=zm;function Bt(t){return iS(t,Hm)}Bt.propTypes={};Bt.filterProps=Hm;function oS(t=8,e=Sf({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(o=>{const a=e(o);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function Mf(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?Ws(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function rr(t){return typeof t!="number"?t:`${t}px solid`}function fr(t,e){return Gt({prop:t,themeKey:"borders",transform:e})}const bT=fr("border",rr),RT=fr("borderTop",rr),PT=fr("borderRight",rr),LT=fr("borderBottom",rr),DT=fr("borderLeft",rr),IT=fr("borderColor"),UT=fr("borderTopColor"),NT=fr("borderRightColor"),FT=fr("borderBottomColor"),OT=fr("borderLeftColor"),kT=fr("outline",rr),BT=fr("outlineColor"),Ef=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Tl(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Lo(e,r)});return On(t,t.borderRadius,n)}return null};Ef.propTypes={};Ef.filterProps=["borderRadius"];Mf(bT,RT,PT,LT,DT,IT,UT,NT,FT,OT,Ef,kT,BT);const wf=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Tl(t.theme,"spacing",8),n=r=>({gap:Lo(e,r)});return On(t,t.gap,n)}return null};wf.propTypes={};wf.filterProps=["gap"];const Tf=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Tl(t.theme,"spacing",8),n=r=>({columnGap:Lo(e,r)});return On(t,t.columnGap,n)}return null};Tf.propTypes={};Tf.filterProps=["columnGap"];const Cf=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Tl(t.theme,"spacing",8),n=r=>({rowGap:Lo(e,r)});return On(t,t.rowGap,n)}return null};Cf.propTypes={};Cf.filterProps=["rowGap"];const zT=Gt({prop:"gridColumn"}),HT=Gt({prop:"gridRow"}),VT=Gt({prop:"gridAutoFlow"}),GT=Gt({prop:"gridAutoColumns"}),WT=Gt({prop:"gridAutoRows"}),$T=Gt({prop:"gridTemplateColumns"}),jT=Gt({prop:"gridTemplateRows"}),XT=Gt({prop:"gridTemplateAreas"}),YT=Gt({prop:"gridArea"});Mf(wf,Tf,Cf,zT,HT,VT,GT,WT,$T,jT,XT,YT);function Ua(t,e){return e==="grey"?e:t}const KT=Gt({prop:"color",themeKey:"palette",transform:Ua}),qT=Gt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ua}),ZT=Gt({prop:"backgroundColor",themeKey:"palette",transform:Ua});Mf(KT,qT,ZT);function Gn(t){return t<=1&&t!==0?`${t*100}%`:t}const QT=Gt({prop:"width",transform:Gn}),Vm=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,o,a,s,l;const r=((a=(o=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:o.values)==null?void 0:a[n])||xf[n];return r?((l=(s=t.theme)==null?void 0:s.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:Gn(n)}};return On(t,t.maxWidth,e)}return null};Vm.filterProps=["maxWidth"];const JT=Gt({prop:"minWidth",transform:Gn}),eC=Gt({prop:"height",transform:Gn}),tC=Gt({prop:"maxHeight",transform:Gn}),nC=Gt({prop:"minHeight",transform:Gn});Gt({prop:"size",cssProperty:"width",transform:Gn});Gt({prop:"size",cssProperty:"height",transform:Gn});const rC=Gt({prop:"boxSizing"});Mf(QT,Vm,JT,eC,tC,nC,rC);const Cl={border:{themeKey:"borders",transform:rr},borderTop:{themeKey:"borders",transform:rr},borderRight:{themeKey:"borders",transform:rr},borderBottom:{themeKey:"borders",transform:rr},borderLeft:{themeKey:"borders",transform:rr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:rr},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ef},color:{themeKey:"palette",transform:Ua},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ua},backgroundColor:{themeKey:"palette",transform:Ua},p:{style:Bt},pt:{style:Bt},pr:{style:Bt},pb:{style:Bt},pl:{style:Bt},px:{style:Bt},py:{style:Bt},padding:{style:Bt},paddingTop:{style:Bt},paddingRight:{style:Bt},paddingBottom:{style:Bt},paddingLeft:{style:Bt},paddingX:{style:Bt},paddingY:{style:Bt},paddingInline:{style:Bt},paddingInlineStart:{style:Bt},paddingInlineEnd:{style:Bt},paddingBlock:{style:Bt},paddingBlockStart:{style:Bt},paddingBlockEnd:{style:Bt},m:{style:kt},mt:{style:kt},mr:{style:kt},mb:{style:kt},ml:{style:kt},mx:{style:kt},my:{style:kt},margin:{style:kt},marginTop:{style:kt},marginRight:{style:kt},marginBottom:{style:kt},marginLeft:{style:kt},marginX:{style:kt},marginY:{style:kt},marginInline:{style:kt},marginInlineStart:{style:kt},marginInlineEnd:{style:kt},marginBlock:{style:kt},marginBlockStart:{style:kt},marginBlockEnd:{style:kt},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:wf},rowGap:{style:Cf},columnGap:{style:Tf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Gn},maxWidth:{style:Vm},minWidth:{transform:Gn},height:{transform:Gn},maxHeight:{transform:Gn},minHeight:{transform:Gn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function iC(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function oC(t,e){return typeof t=="function"?t(e):t}function aC(){function t(n,r,i,o){const a={[n]:r,theme:i},s=o[n];if(!s)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:f}=s;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const d=ja(i,c)||{};return f?f(a):On(a,r,_=>{let y=Ru(d,u,_);return _===y&&typeof _=="string"&&(y=Ru(d,u,`${n}${_==="default"?"":Ht(_)}`,_)),l===!1?y:{[l]:y}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const o=i.unstable_sxConfig??Cl;function a(s){let l=s;if(typeof s=="function")l=s(i);else if(typeof s!="object")return s;if(!l)return null;const c=nS(i.breakpoints),u=Object.keys(c);let f=c;return Object.keys(l).forEach(d=>{const p=oC(l[d],i);if(p!=null)if(typeof p=="object")if(o[d])f=Ws(f,t(d,p,i,o));else{const _=On({theme:i},p,y=>({[d]:y}));iC(_,p)?f[d]=e({sx:p,theme:i}):f=Ws(f,_)}else f=Ws(f,t(d,p,i,o))}),pT(i,rS(u,f))}return Array.isArray(r)?r.map(a):a(r)}return e}const Fo=aC();Fo.filterProps=["sx"];function sC(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return(i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e}}return n.palette.mode===t?e:{}}function Af(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={},...a}=t,s=hT(n),l=oS(i);let c=En({breakpoints:s,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:l,shape:{..._T,...o}},a);return c=vT(c),c.applyStyles=sC,c=e.reduce((u,f)=>En(u,f),c),c.unstable_sxConfig={...Cl,...a==null?void 0:a.unstable_sxConfig},c.unstable_sx=function(f){return Fo({sx:f,theme:this})},c}function lC(t){return Object.keys(t).length===0}function aS(t=null){const e=k.useContext(yf);return!e||lC(e)?t:e}const cC=Af();function Gm(t=cC){return aS(t)}const uC=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??Cl;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function bf(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=uC(n);let o;return Array.isArray(e)?o=[r,...e]:typeof e=="function"?o=(...a)=>{const s=e(...a);return Nr(s)?{...r,...s}:r}:o={...r,...e},{...i,sx:o}}const U0=t=>t,fC=()=>{let t=U0;return{configure(e){t=e},generate(e){return t(e)},reset(){t=U0}}},sS=fC();function lS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=lS(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function rn(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=lS(t))&&(r&&(r+=" "),r+=e);return r}function dC(t={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=t,o=eS("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(Fo);return k.forwardRef(function(l,c){const u=Gm(n),{className:f,component:d="div",...p}=bf(l);return Ee.jsx(o,{as:d,ref:c,className:rn(f,i?i(r):r),theme:e&&u[e]||u,...p})})}const hC={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Xi(t,e,n="Mui"){const r=hC[e];return r?`${n}-${r}`:`${sS.generate(t)}-${e}`}function Yi(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=Xi(t,i,n)}),r}const pC=Af();function gd(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function Kh(t,e,n){return gC(e)?n:e[t]||e}const nc=Symbol("mui.processed_props");function rc(t,e,n){if(nc in t)return t[nc];const r={...t,theme:Kh(e,t.theme,n)};return t[nc]=r,r[nc]=r,r}function mC(t){return t?(e,n)=>n[t]:null}function Kc(t,e){var r;const n=typeof t=="function"?t(e):t;if(Array.isArray(n))return n.flatMap(i=>Kc(i,e));if(Array.isArray(n==null?void 0:n.variants)){const{variants:i,...o}=n;let a=o,s;e:for(let l=0;l<i.length;l+=1){const c=i[l];if(typeof c.props=="function"){if(s??(s={...e,...e.ownerState,ownerState:e.ownerState}),!c.props(s))continue}else for(const u in c.props)if(e[u]!==c.props[u]&&((r=e.ownerState)==null?void 0:r[u])!==c.props[u])continue e;Array.isArray(a)||(a=[a]),typeof c.style=="function"?(s??(s={...e,...e.ownerState,ownerState:e.ownerState}),a.push(c.style(s))):a.push(c.style)}return a}return n}function cS(t={}){const{themeId:e,defaultTheme:n=pC,rootShouldForwardProp:r=gd,slotShouldForwardProp:i=gd}=t,o=s=>Fo(rc(s,e,n));return o.__mui_systemSx=!0,(s,l={})=>{fT(s,A=>A.filter(C=>!(C!=null&&C.__mui_systemSx)));const{name:c,slot:u,skipVariantsResolver:f,skipSx:d,overridesResolver:p=mC(_C(u)),..._}=l,y=f!==void 0?f:u&&u!=="Root"&&u!=="root"||!1,m=d||!1;let h,x=gd;u==="Root"||u==="root"?x=r:u?x=i:vC(s)&&(x=void 0);const v=eS(s,{shouldForwardProp:x,label:h,..._}),M=A=>typeof A=="function"&&A.__emotion_real!==A||Nr(A)?C=>Kc(A,rc(C,e,n)):A,b=(A,...C)=>{let E=M(A);const g=C?C.map(M):[];c&&p&&g.push(z=>{const H=Kh(e,z.theme,n);if(!H.components||!H.components[c]||!H.components[c].styleOverrides)return null;const j=H.components[c].styleOverrides,Z={},Y=rc(z,e,n);for(const J in j)Z[J]=Kc(j[J],Y);return p(z,Z)}),c&&!y&&g.push(z=>{var Z,Y;const H=Kh(e,z.theme,n),j=(Y=(Z=H==null?void 0:H.components)==null?void 0:Z[c])==null?void 0:Y.variants;return j?Kc({variants:j},rc(z,e,n)):null}),m||g.push(o);const S=g.length-C.length;if(Array.isArray(A)&&S>0){const z=new Array(S).fill("");E=[...A,...z],E.raw=[...A.raw,...z]}const R=v(E,...g);return s.muiName&&(R.muiName=s.muiName),R};return v.withConfig&&(b.withConfig=v.withConfig),b}}function gC(t){for(const e in t)return!1;return!0}function vC(t){return typeof t=="string"&&t.charCodeAt(0)>96}function _C(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}const yC=cS();function pl(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const o=t[i],a=e[i];if(!a)n[i]=o||{};else if(!o)n[i]=a;else{n[i]={...a};for(const s in o)if(Object.prototype.hasOwnProperty.call(o,s)){const l=s;n[i][l]=pl(o[l],a[l])}}}else n[i]===void 0&&(n[i]=t[i])}return n}function xC(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:pl(e.components[n].defaultProps,r)}function uS({props:t,name:e,defaultTheme:n,themeId:r}){let i=Gm(n);return r&&(i=i[r]||i),xC({theme:i,name:e,props:t})}const SC=typeof window<"u"?k.useLayoutEffect:k.useEffect;function MC(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function Wm(t,e=0,n=1){return MC(t,e,n)}function EC(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Hi(t){if(t.type)return t;if(t.charAt(0)==="#")return Hi(EC(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(Po(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(Po(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const wC=t=>{const e=Hi(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Ls=(t,e)=>{try{return wC(t)}catch{return t}};function Rf(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function fS(t){t=Hi(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),a=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let s="rgb";const l=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return t.type==="hsla"&&(s+="a",l.push(e[3])),Rf({type:s,values:l})}function qh(t){t=Hi(t);let e=t.type==="hsl"||t.type==="hsla"?Hi(fS(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function TC(t,e){const n=qh(t),r=qh(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Fr(t,e){return t=Hi(t),e=Wm(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Rf(t)}function ic(t,e,n){try{return Fr(t,e)}catch{return t}}function $m(t,e){if(t=Hi(t),e=Wm(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Rf(t)}function St(t,e,n){try{return $m(t,e)}catch{return t}}function jm(t,e){if(t=Hi(t),e=Wm(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Rf(t)}function Mt(t,e,n){try{return jm(t,e)}catch{return t}}function CC(t,e=.15){return qh(t)>.5?$m(t,e):jm(t,e)}function oc(t,e,n){try{return CC(t,e)}catch{return t}}function AC(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function ac(t){const e=k.useRef(t);return SC(()=>{e.current=t}),k.useRef((...n)=>(0,e.current)(...n)).current}function N0(...t){return k.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{AC(n,e)})},t)}const F0={};function dS(t,e){const n=k.useRef(F0);return n.current===F0&&(n.current=t(e)),n}const bC=[];function RC(t){k.useEffect(t,bC)}class Xm{constructor(){as(this,"currentId",null);as(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});as(this,"disposeEffect",()=>this.clear)}static create(){return new Xm}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function PC(){const t=dS(Xm.create).current;return RC(t.disposeEffect),t}function Pu(t){try{return t.matches(":focus-visible")}catch{}return!1}function Oo(t,e,n=void 0){const r={};for(const i in t){const o=t[i];let a="";for(let s=0;s<o.length;s+=1){const l=o[s];l&&(a+=e(l)+" ",n&&n[l]&&(a+=n[l]+" "))}r[i]=a}return r}const hS=k.createContext(null);function Ym(){return k.useContext(hS)}const LC=typeof Symbol=="function"&&Symbol.for,DC=LC?Symbol.for("mui.nested"):"__THEME_NESTED__";function IC(t,e){return typeof e=="function"?e(t):{...t,...e}}function UC(t){const{children:e,theme:n}=t,r=Ym(),i=k.useMemo(()=>{const o=r===null?{...n}:IC(r,n);return o!=null&&(o[DC]=r!==null),o},[n,r]);return Ee.jsx(hS.Provider,{value:i,children:e})}const NC=k.createContext();function FC({value:t,...e}){return Ee.jsx(NC.Provider,{value:t??!0,...e})}const pS=k.createContext(void 0);function OC({value:t,children:e}){return Ee.jsx(pS.Provider,{value:t,children:e})}function kC(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?pl(i.defaultProps,r):!i.styleOverrides&&!i.variants?pl(i,r):r}function BC({props:t,name:e}){const n=k.useContext(pS);return kC({props:t,name:e,theme:{components:n}})}const O0={};function k0(t,e,n,r=!1){return k.useMemo(()=>{const i=t&&e[t]||e;if(typeof n=="function"){const o=n(i),a=t?{...e,[t]:o}:o;return r?()=>a:a}return t?{...e,[t]:n}:{...e,...n}},[t,e,n,r])}function mS(t){const{children:e,theme:n,themeId:r}=t,i=aS(O0),o=Ym()||O0,a=k0(r,i,n),s=k0(r,o,n,!0),l=a.direction==="rtl";return Ee.jsx(UC,{theme:s,children:Ee.jsx(yf.Provider,{value:a,children:Ee.jsx(FC,{value:l,children:Ee.jsx(OC,{value:a==null?void 0:a.components,children:e})})})})}const Km="mode",qm="color-scheme",zC="data-color-scheme";function HC(t){const{defaultLightColorScheme:e="light",defaultDarkColorScheme:n="dark",modeStorageKey:r=Km,colorSchemeStorageKey:i=qm,attribute:o=zC,colorSchemeNode:a="document.documentElement",nonce:s}=t||{};let l="",c=o;if(o==="class"&&(c=".%s"),o==="data"&&(c="[data-%s]"),c.startsWith(".")){const f=c.substring(1);l+=`${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`}const u=c.match(/\[([^\]]+)\]/);if(u){const[f,d]=u[1].split("=");d||(l+=`${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`),l+=`
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${d?`${d}.replace('%s', colorScheme)`:'""'});`}else l+=`${a}.setAttribute('${c}', colorScheme);`;return Ee.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?s:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${r}') || 'system';
  var colorScheme = '';
  var dark = localStorage.getItem('${i}-dark') || '${n}';
  var light = localStorage.getItem('${i}-light') || '${e}';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function B0(t){if(typeof window<"u"&&typeof window.matchMedia=="function"&&t==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function gS(t,e){if(t.mode==="light"||t.mode==="system"&&t.systemMode==="light")return e("light");if(t.mode==="dark"||t.mode==="system"&&t.systemMode==="dark")return e("dark")}function VC(t){return gS(t,e=>{if(e==="light")return t.lightColorScheme;if(e==="dark")return t.darkColorScheme})}function vd(t,e){if(typeof window>"u")return;let n;try{n=localStorage.getItem(t)||void 0,n||localStorage.setItem(t,e)}catch{}return n||e}function GC(t){const{defaultMode:e="light",defaultLightColorScheme:n,defaultDarkColorScheme:r,supportedColorSchemes:i=[],modeStorageKey:o=Km,colorSchemeStorageKey:a=qm,storageWindow:s=typeof window>"u"?void 0:window}=t,l=i.join(","),c=i.length>1,[u,f]=k.useState(()=>{const v=vd(o,e),M=vd(`${a}-light`,n),b=vd(`${a}-dark`,r);return{mode:v,systemMode:B0(v),lightColorScheme:M,darkColorScheme:b}}),[,d]=k.useState(!1),p=k.useRef(!1);k.useEffect(()=>{c&&d(!0),p.current=!0},[c]);const _=VC(u),y=k.useCallback(v=>{f(M=>{if(v===M.mode)return M;const b=v??e;try{localStorage.setItem(o,b)}catch{}return{...M,mode:b,systemMode:B0(b)}})},[o,e]),m=k.useCallback(v=>{v?typeof v=="string"?v&&!l.includes(v)?console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`):f(M=>{const b={...M};return gS(M,A=>{try{localStorage.setItem(`${a}-${A}`,v)}catch{}A==="light"&&(b.lightColorScheme=v),A==="dark"&&(b.darkColorScheme=v)}),b}):f(M=>{const b={...M},A=v.light===null?n:v.light,C=v.dark===null?r:v.dark;if(A)if(!l.includes(A))console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`);else{b.lightColorScheme=A;try{localStorage.setItem(`${a}-light`,A)}catch{}}if(C)if(!l.includes(C))console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`);else{b.darkColorScheme=C;try{localStorage.setItem(`${a}-dark`,C)}catch{}}return b}):f(M=>{try{localStorage.setItem(`${a}-light`,n),localStorage.setItem(`${a}-dark`,r)}catch{}return{...M,lightColorScheme:n,darkColorScheme:r}})},[l,a,n,r]),h=k.useCallback(v=>{u.mode==="system"&&f(M=>{const b=v!=null&&v.matches?"dark":"light";return M.systemMode===b?M:{...M,systemMode:b}})},[u.mode]),x=k.useRef(h);return x.current=h,k.useEffect(()=>{if(typeof window.matchMedia!="function"||!c)return;const v=(...b)=>x.current(...b),M=window.matchMedia("(prefers-color-scheme: dark)");return M.addListener(v),v(M),()=>{M.removeListener(v)}},[c]),k.useEffect(()=>{if(s&&c){const v=M=>{const b=M.newValue;typeof M.key=="string"&&M.key.startsWith(a)&&(!b||l.match(b))&&(M.key.endsWith("light")&&m({light:b}),M.key.endsWith("dark")&&m({dark:b})),M.key===o&&(!b||["light","dark","system"].includes(b))&&y(b||e)};return s.addEventListener("storage",v),()=>{s.removeEventListener("storage",v)}}},[m,y,o,a,l,e,s,c]),{...u,mode:p.current||!c?u.mode:void 0,systemMode:p.current||!c?u.systemMode:void 0,colorScheme:p.current||!c?_:void 0,setMode:y,setColorScheme:m}}const WC="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function $C(t){const{themeId:e,theme:n={},modeStorageKey:r=Km,colorSchemeStorageKey:i=qm,disableTransitionOnChange:o=!1,defaultColorScheme:a,resolveTheme:s}=t,l={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},c=k.createContext(void 0),u=()=>k.useContext(c)||l;function f(y){var T,X,G,ae,ie;const{children:m,theme:h,modeStorageKey:x=r,colorSchemeStorageKey:v=i,disableTransitionOnChange:M=o,storageWindow:b=typeof window>"u"?void 0:window,documentNode:A=typeof document>"u"?void 0:document,colorSchemeNode:C=typeof document>"u"?void 0:document.documentElement,disableNestedContext:E=!1,disableStyleSheetGeneration:g=!1}=y,S=k.useRef(!1),R=Ym(),z=k.useContext(c),H=!!z&&!E,j=k.useMemo(()=>h||(typeof n=="function"?n():n),[h]),Z=j[e],{colorSchemes:Y={},components:J={},cssVarPrefix:U,...W}=Z||j,te=Object.keys(Y).filter(ge=>!!Y[ge]).join(","),le=k.useMemo(()=>te.split(","),[te]),Ae=typeof a=="string"?a:a.light,je=typeof a=="string"?a:a.dark,q=Y[Ae]&&Y[je]?"system":((X=(T=Y[W.defaultColorScheme])==null?void 0:T.palette)==null?void 0:X.mode)||((G=W.palette)==null?void 0:G.mode),{mode:ce,setMode:pe,systemMode:me,lightColorScheme:Ie,darkColorScheme:We,colorScheme:Ye,setColorScheme:mt}=GC({supportedColorSchemes:le,defaultLightColorScheme:Ae,defaultDarkColorScheme:je,modeStorageKey:x,colorSchemeStorageKey:v,defaultMode:q,storageWindow:b});let D=ce,it=Ye;H&&(D=z.mode,it=z.colorScheme);const Ve=it||W.defaultColorScheme,Ke=((ae=W.generateThemeVars)==null?void 0:ae.call(W))||W.vars,Te={...W,components:J,colorSchemes:Y,cssVarPrefix:U,vars:Ke};if(typeof Te.generateSpacing=="function"&&(Te.spacing=Te.generateSpacing()),Ve){const ge=Y[Ve];ge&&typeof ge=="object"&&Object.keys(ge).forEach(se=>{ge[se]&&typeof ge[se]=="object"?Te[se]={...Te[se],...ge[se]}:Te[se]=ge[se]})}const dt=W.colorSchemeSelector;k.useEffect(()=>{if(it&&C&&dt&&dt!=="media"){const ge=dt;let se=dt;if(ge==="class"&&(se=".%s"),ge==="data"&&(se="[data-%s]"),ge!=null&&ge.startsWith("data-")&&!ge.includes("%s")&&(se=`[${ge}="%s"]`),se.startsWith("."))C.classList.remove(...le.map(we=>se.substring(1).replace("%s",we))),C.classList.add(se.substring(1).replace("%s",it));else{const we=se.replace("%s",it).match(/\[([^\]]+)\]/);if(we){const[Xe,fe]=we[1].split("=");fe||le.forEach(Se=>{C.removeAttribute(Xe.replace(it,Se))}),C.setAttribute(Xe,fe?fe.replace(/"|'/g,""):"")}else C.setAttribute(se,it)}}},[it,dt,C,le]),k.useEffect(()=>{let ge;if(M&&S.current&&A){const se=A.createElement("style");se.appendChild(A.createTextNode(WC)),A.head.appendChild(se),window.getComputedStyle(A.body),ge=setTimeout(()=>{A.head.removeChild(se)},1)}return()=>{clearTimeout(ge)}},[it,M,A]),k.useEffect(()=>(S.current=!0,()=>{S.current=!1}),[]);const Ue=k.useMemo(()=>({allColorSchemes:le,colorScheme:it,darkColorScheme:We,lightColorScheme:Ie,mode:D,setColorScheme:mt,setMode:pe,systemMode:me}),[le,it,We,Ie,D,mt,pe,me]);let Oe=!0;(g||W.cssVariables===!1||H&&(R==null?void 0:R.cssVarPrefix)===U)&&(Oe=!1);const P=Ee.jsxs(k.Fragment,{children:[Oe&&Ee.jsx(k.Fragment,{children:(((ie=Te.generateStyleSheets)==null?void 0:ie.call(Te))||[]).map((ge,se)=>Ee.jsx(uT,{styles:ge},se))}),Ee.jsx(mS,{themeId:Z?e:void 0,theme:s?s(Te):Te,children:m})]});return H?P:Ee.jsx(c.Provider,{value:Ue,children:P})}const d=typeof a=="string"?a:a.light,p=typeof a=="string"?a:a.dark;return{CssVarsProvider:f,useColorScheme:u,getInitColorSchemeScript:y=>HC({colorSchemeStorageKey:i,defaultLightColorScheme:d,defaultDarkColorScheme:p,modeStorageKey:r,...y})}}function jC(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const z0=(t,e,n,r=[])=>{let i=t;e.forEach((o,a)=>{a===e.length-1?Array.isArray(i)?i[Number(o)]=n:i&&typeof i=="object"&&(i[o]=n):i&&typeof i=="object"&&(i[o]||(i[o]=r.includes(o)?[]:{}),i=i[o])})},XC=(t,e,n)=>{function r(i,o=[],a=[]){Object.entries(i).forEach(([s,l])=>{(!n||n&&!n([...o,s]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?r(l,[...o,s],Array.isArray(l)?[...a,s]:a):e([...o,s],l,a))})}r(t)},YC=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().indexOf("opacity")>=0?e:`${e}px`:e;function _d(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},o={},a={};return XC(t,(s,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!r||!r(s,l))){const u=`--${n?`${n}-`:""}${s.join("-")}`,f=YC(s,l);Object.assign(i,{[u]:f}),z0(o,s,`var(${u})`,c),z0(a,s,`var(${u}, ${f})`,c)}},s=>s[0]==="vars"),{css:i,vars:o,varsWithDefaults:a}}function KC(t,e={}){const{getSelector:n=m,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:o={},components:a,defaultColorScheme:s="light",...l}=t,{vars:c,css:u,varsWithDefaults:f}=_d(l,e);let d=f;const p={},{[s]:_,...y}=o;if(Object.entries(y||{}).forEach(([v,M])=>{const{vars:b,css:A,varsWithDefaults:C}=_d(M,e);d=En(d,C),p[v]={css:A,vars:b}}),_){const{css:v,vars:M,varsWithDefaults:b}=_d(_,e);d=En(d,b),p[s]={css:v,vars:M}}function m(v,M){var A,C;let b=i;if(i==="class"&&(b=".%s"),i==="data"&&(b="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(b=`[${i}="%s"]`),v){if(b==="media")return t.defaultColorScheme===v?":root":{[`@media (prefers-color-scheme: ${((C=(A=o[v])==null?void 0:A.palette)==null?void 0:C.mode)||v})`]:{":root":M}};if(b)return t.defaultColorScheme===v?`:root, ${b.replace("%s",String(v))}`:b.replace("%s",String(v))}return":root"}return{vars:d,generateThemeVars:()=>{let v={...c};return Object.entries(p).forEach(([,{vars:M}])=>{v=En(v,M)}),v},generateStyleSheets:()=>{var E,g;const v=[],M=t.defaultColorScheme||"light";function b(S,R){Object.keys(R).length&&v.push(typeof S=="string"?{[S]:{...R}}:S)}b(n(void 0,{...u}),u);const{[M]:A,...C}=p;if(A){const{css:S}=A,R=(g=(E=o[M])==null?void 0:E.palette)==null?void 0:g.mode,z=!r&&R?{colorScheme:R,...S}:{...S};b(n(M,{...z}),z)}return Object.entries(C).forEach(([S,{css:R}])=>{var j,Z;const z=(Z=(j=o[S])==null?void 0:j.palette)==null?void 0:Z.mode,H=!r&&z?{colorScheme:z,...R}:{...R};b(n(S,{...H}),H)}),v}}}function qC(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const ZC=Af(),QC=yC("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function JC(t){return uS({props:t,name:"MuiStack",defaultTheme:ZC})}function eA(t,e){const n=k.Children.toArray(t).filter(Boolean);return n.reduce((r,i,o)=>(r.push(i),o<n.length-1&&r.push(k.cloneElement(e,{key:`separator-${o}`})),r),[])}const tA=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],nA=({ownerState:t,theme:e})=>{let n={display:"flex",flexDirection:"column",...On({theme:e},Eo({values:t.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r}))};if(t.spacing){const r=Sf(e),i=Object.keys(e.breakpoints.values).reduce((l,c)=>((typeof t.spacing=="object"&&t.spacing[c]!=null||typeof t.direction=="object"&&t.direction[c]!=null)&&(l[c]=!0),l),{}),o=Eo({values:t.direction,base:i}),a=Eo({values:t.spacing,base:i});typeof o=="object"&&Object.keys(o).forEach((l,c,u)=>{if(!o[l]){const d=c>0?o[u[c-1]]:"column";o[l]=d}}),n=En(n,On({theme:e},a,(l,c)=>t.useFlexGap?{gap:Lo(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${tA(c?o[c]:t.direction)}`]:Lo(r,l)}}))}return n=xT(e.breakpoints,n),n};function rA(t={}){const{createStyledComponent:e=QC,useThemeProps:n=JC,componentName:r="MuiStack"}=t,i=()=>Oo({root:["root"]},l=>Xi(r,l),{}),o=e(nA);return k.forwardRef(function(l,c){const u=n(l),f=bf(u),{component:d="div",direction:p="column",spacing:_=0,divider:y,children:m,className:h,useFlexGap:x=!1,...v}=f,M={direction:p,spacing:_,useFlexGap:x},b=i();return Ee.jsx(o,{as:d,ownerState:M,ref:c,className:rn(b.root,h),...v,children:y?eA(m,y):m})})}const H0={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ul.white,default:ul.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},yd={text:{primary:ul.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ul.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function V0(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=jm(t.main,i):e==="dark"&&(t.dark=$m(t.main,o)))}function iA(t="light"){return t==="dark"?{main:Wo[200],light:Wo[50],dark:Wo[400]}:{main:Wo[700],light:Wo[400],dark:Wo[800]}}function oA(t="light"){return t==="dark"?{main:Go[200],light:Go[50],dark:Go[400]}:{main:Go[500],light:Go[300],dark:Go[700]}}function aA(t="light"){return t==="dark"?{main:Vo[500],light:Vo[300],dark:Vo[700]}:{main:Vo[700],light:Vo[400],dark:Vo[800]}}function sA(t="light"){return t==="dark"?{main:$o[400],light:$o[300],dark:$o[700]}:{main:$o[700],light:$o[500],dark:$o[900]}}function lA(t="light"){return t==="dark"?{main:jo[400],light:jo[300],dark:jo[700]}:{main:jo[800],light:jo[500],dark:jo[900]}}function cA(t="light"){return t==="dark"?{main:ms[400],light:ms[300],dark:ms[700]}:{main:"#ed6c02",light:ms[500],dark:ms[900]}}function Zm(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,o=t.primary||iA(e),a=t.secondary||oA(e),s=t.error||aA(e),l=t.info||sA(e),c=t.success||lA(e),u=t.warning||cA(e);function f(y){return TC(y,yd.text.primary)>=n?yd.text.primary:H0.text.primary}const d=({color:y,name:m,mainShade:h=500,lightShade:x=300,darkShade:v=700})=>{if(y={...y},!y.main&&y[h]&&(y.main=y[h]),!y.hasOwnProperty("main"))throw new Error(Po(11,m?` (${m})`:"",h));if(typeof y.main!="string")throw new Error(Po(12,m?` (${m})`:"",JSON.stringify(y.main)));return V0(y,"light",x,r),V0(y,"dark",v,r),y.contrastText||(y.contrastText=f(y.main)),y},p={dark:yd,light:H0};return En({common:{...ul},mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:s,name:"error"}),warning:d({color:u,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:rw,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:r,...p[e]},i)}function uA(t){const e={};return Object.entries(t).forEach(r=>{const[i,o]=r;typeof o=="object"&&(e[i]=`${o.fontStyle?`${o.fontStyle} `:""}${o.fontVariant?`${o.fontVariant} `:""}${o.fontWeight?`${o.fontWeight} `:""}${o.fontStretch?`${o.fontStretch} `:""}${o.fontSize||""}${o.lineHeight?`/${o.lineHeight} `:""}${o.fontFamily||""}`)}),e}function fA(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function dA(t){return Math.round(t*1e5)/1e5}const G0={textTransform:"uppercase"},W0='"Roboto", "Helvetica", "Arial", sans-serif';function vS(t,e){const{fontFamily:n=W0,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:s=700,htmlFontSize:l=16,allVariants:c,pxToRem:u,...f}=typeof e=="function"?e(t):e,d=r/14,p=u||(m=>`${m/l*d}rem`),_=(m,h,x,v,M)=>({fontFamily:n,fontWeight:m,fontSize:p(h),lineHeight:x,...n===W0?{letterSpacing:`${dA(v/h)}em`}:{},...M,...c}),y={h1:_(i,96,1.167,-1.5),h2:_(i,60,1.2,-.5),h3:_(o,48,1.167,0),h4:_(o,34,1.235,.25),h5:_(o,24,1.334,0),h6:_(a,20,1.6,.15),subtitle1:_(o,16,1.75,.15),subtitle2:_(a,14,1.57,.1),body1:_(o,16,1.5,.15),body2:_(o,14,1.43,.15),button:_(a,14,1.75,.4,G0),caption:_(o,12,1.66,.4),overline:_(o,12,2.66,1,G0),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return En({htmlFontSize:l,pxToRem:p,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:s,...y},f,{clone:!1})}const hA=.2,pA=.14,mA=.12;function Pt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${hA})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${pA})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${mA})`].join(",")}const gA=["none",Pt(0,2,1,-1,0,1,1,0,0,1,3,0),Pt(0,3,1,-2,0,2,2,0,0,1,5,0),Pt(0,3,3,-2,0,3,4,0,0,1,8,0),Pt(0,2,4,-1,0,4,5,0,0,1,10,0),Pt(0,3,5,-1,0,5,8,0,0,1,14,0),Pt(0,3,5,-1,0,6,10,0,0,1,18,0),Pt(0,4,5,-2,0,7,10,1,0,2,16,1),Pt(0,5,5,-3,0,8,10,1,0,3,14,2),Pt(0,5,6,-3,0,9,12,1,0,3,16,2),Pt(0,6,6,-3,0,10,14,1,0,4,18,3),Pt(0,6,7,-4,0,11,15,1,0,4,20,3),Pt(0,7,8,-4,0,12,17,2,0,5,22,4),Pt(0,7,8,-4,0,13,19,2,0,5,24,4),Pt(0,7,9,-4,0,14,21,2,0,5,26,4),Pt(0,8,9,-5,0,15,22,2,0,6,28,5),Pt(0,8,10,-5,0,16,24,2,0,6,30,5),Pt(0,8,11,-5,0,17,26,2,0,6,32,5),Pt(0,9,11,-5,0,18,28,2,0,7,34,6),Pt(0,9,12,-6,0,19,29,2,0,7,36,6),Pt(0,10,13,-6,0,20,31,3,0,8,38,7),Pt(0,10,13,-6,0,21,33,3,0,8,40,7),Pt(0,10,14,-6,0,22,35,3,0,8,42,7),Pt(0,11,14,-7,0,23,36,3,0,9,44,8),Pt(0,11,15,-7,0,24,38,3,0,9,46,8)],vA={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},_A={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function $0(t){return`${Math.round(t)}ms`}function yA(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function xA(t){const e={...vA,...t.easing},n={..._A,...t.duration};return{getAutoHeightDuration:yA,create:(i=["all"],o={})=>{const{duration:a=n.standard,easing:s=e.easeInOut,delay:l=0,...c}=o;return(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof a=="string"?a:$0(a)} ${s} ${typeof l=="string"?l:$0(l)}`).join(",")},...t,easing:e,duration:n}}const SA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function _S(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:o={},transitions:a={},typography:s={},shape:l,...c}=t;if(t.vars)throw new Error(Po(20));const u=Zm(o),f=Af(t);let d=En(f,{mixins:fA(f.breakpoints,r),palette:u,shadows:gA.slice(),typography:vS(u,s),transitions:xA(a),zIndex:{...SA}});return d=En(d,c),d=e.reduce((p,_)=>En(p,_),d),d.unstable_sxConfig={...Cl,...c==null?void 0:c.unstable_sxConfig},d.unstable_sx=function(_){return Fo({sx:_,theme:this})},d}function MA(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const EA=[...Array(25)].map((t,e)=>{if(e===0)return;const n=MA(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function yS(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function xS(t){return t==="dark"?EA:[]}function wA(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,o=Zm(e);return{palette:o,opacity:{...yS(o.mode),...n},overlays:r||xS(o.mode),...i}}function TA(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const CA=t=>[...[...Array(24)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n+1}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],AA=t=>(e,n)=>{const r=t.colorSchemeSelector;let i=r;if(r==="class"&&(i=".%s"),r==="data"&&(i="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(i=`[${r}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const o={};return CA(t.cssVarPrefix).forEach(a=>{o[a]=n[a],delete n[a]}),i==="media"?{":root":n,"@media (prefers-color-scheme: dark)":{":root":o}}:i?{[i.replace("%s",e)]:o,[`:root, ${i.replace("%s",e)}`]:n}:{":root":{...n,...o}}}if(i&&i!=="media")return`:root, ${i.replace("%s",String(e))}`}else if(e){if(i==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{":root":n}};if(i)return i.replace("%s",String(e))}return":root"};function bA(t){return Nr(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function RA(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let o=0;o<i.length;o++){const[a,s]=i[o];!bA(s)||a.startsWith("unstable_")?delete r[a]:Nr(s)&&(r[a]={...s},n(r[a]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function PA(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function Q(t,e,n){!t[e]&&n&&(t[e]=n)}function Ds(t){return!t||!t.startsWith("hsl")?t:fS(t)}function Gr(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Ls(Ds(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function LA(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const br=t=>{try{return t()}catch{}},DA=(t="mui")=>jC(t);function xd(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=wA({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:o,...a}=_S({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:o,opacity:{...yS(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||xS(i)},a}function IA(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:o="mui",shouldSkipGeneratingVar:a=TA,colorSchemeSelector:s=n.light&&n.dark?"media":void 0,...l}=t,c=Object.keys(n)[0],u=r||(n.light&&c!=="light"?"light":c),f=DA(o),{[u]:d,light:p,dark:_,...y}=n,m={...y};let h=d;if((u==="dark"&&!("dark"in n)||u==="light"&&!("light"in n))&&(h=!0),!h)throw new Error(Po(21,u));const x=xd(m,h,l,u);p&&!m.light&&xd(m,p,void 0,"light"),_&&!m.dark&&xd(m,_,void 0,"dark");let v={defaultColorScheme:u,...x,cssVarPrefix:o,colorSchemeSelector:s,getCssVar:f,colorSchemes:m,font:{...uA(x.typography),...x.font},spacing:LA(l.spacing)};Object.keys(v.colorSchemes).forEach(E=>{const g=v.colorSchemes[E].palette,S=R=>{const z=R.split("-"),H=z[1],j=z[2];return f(R,g[H][j])};if(g.mode==="light"&&(Q(g.common,"background","#fff"),Q(g.common,"onBackground","#000")),g.mode==="dark"&&(Q(g.common,"background","#000"),Q(g.common,"onBackground","#fff")),PA(g,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),g.mode==="light"){Q(g.Alert,"errorColor",St(g.error.light,.6)),Q(g.Alert,"infoColor",St(g.info.light,.6)),Q(g.Alert,"successColor",St(g.success.light,.6)),Q(g.Alert,"warningColor",St(g.warning.light,.6)),Q(g.Alert,"errorFilledBg",S("palette-error-main")),Q(g.Alert,"infoFilledBg",S("palette-info-main")),Q(g.Alert,"successFilledBg",S("palette-success-main")),Q(g.Alert,"warningFilledBg",S("palette-warning-main")),Q(g.Alert,"errorFilledColor",br(()=>g.getContrastText(g.error.main))),Q(g.Alert,"infoFilledColor",br(()=>g.getContrastText(g.info.main))),Q(g.Alert,"successFilledColor",br(()=>g.getContrastText(g.success.main))),Q(g.Alert,"warningFilledColor",br(()=>g.getContrastText(g.warning.main))),Q(g.Alert,"errorStandardBg",Mt(g.error.light,.9)),Q(g.Alert,"infoStandardBg",Mt(g.info.light,.9)),Q(g.Alert,"successStandardBg",Mt(g.success.light,.9)),Q(g.Alert,"warningStandardBg",Mt(g.warning.light,.9)),Q(g.Alert,"errorIconColor",S("palette-error-main")),Q(g.Alert,"infoIconColor",S("palette-info-main")),Q(g.Alert,"successIconColor",S("palette-success-main")),Q(g.Alert,"warningIconColor",S("palette-warning-main")),Q(g.AppBar,"defaultBg",S("palette-grey-100")),Q(g.Avatar,"defaultBg",S("palette-grey-400")),Q(g.Button,"inheritContainedBg",S("palette-grey-300")),Q(g.Button,"inheritContainedHoverBg",S("palette-grey-A100")),Q(g.Chip,"defaultBorder",S("palette-grey-400")),Q(g.Chip,"defaultAvatarColor",S("palette-grey-700")),Q(g.Chip,"defaultIconColor",S("palette-grey-700")),Q(g.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Q(g.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Q(g.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Q(g.LinearProgress,"primaryBg",Mt(g.primary.main,.62)),Q(g.LinearProgress,"secondaryBg",Mt(g.secondary.main,.62)),Q(g.LinearProgress,"errorBg",Mt(g.error.main,.62)),Q(g.LinearProgress,"infoBg",Mt(g.info.main,.62)),Q(g.LinearProgress,"successBg",Mt(g.success.main,.62)),Q(g.LinearProgress,"warningBg",Mt(g.warning.main,.62)),Q(g.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),Q(g.Slider,"primaryTrack",Mt(g.primary.main,.62)),Q(g.Slider,"secondaryTrack",Mt(g.secondary.main,.62)),Q(g.Slider,"errorTrack",Mt(g.error.main,.62)),Q(g.Slider,"infoTrack",Mt(g.info.main,.62)),Q(g.Slider,"successTrack",Mt(g.success.main,.62)),Q(g.Slider,"warningTrack",Mt(g.warning.main,.62));const R=oc(g.background.default,.8);Q(g.SnackbarContent,"bg",R),Q(g.SnackbarContent,"color",br(()=>g.getContrastText(R))),Q(g.SpeedDialAction,"fabHoverBg",oc(g.background.paper,.15)),Q(g.StepConnector,"border",S("palette-grey-400")),Q(g.StepContent,"border",S("palette-grey-400")),Q(g.Switch,"defaultColor",S("palette-common-white")),Q(g.Switch,"defaultDisabledColor",S("palette-grey-100")),Q(g.Switch,"primaryDisabledColor",Mt(g.primary.main,.62)),Q(g.Switch,"secondaryDisabledColor",Mt(g.secondary.main,.62)),Q(g.Switch,"errorDisabledColor",Mt(g.error.main,.62)),Q(g.Switch,"infoDisabledColor",Mt(g.info.main,.62)),Q(g.Switch,"successDisabledColor",Mt(g.success.main,.62)),Q(g.Switch,"warningDisabledColor",Mt(g.warning.main,.62)),Q(g.TableCell,"border",Mt(ic(g.divider,1),.88)),Q(g.Tooltip,"bg",ic(g.grey[700],.92))}if(g.mode==="dark"){Q(g.Alert,"errorColor",Mt(g.error.light,.6)),Q(g.Alert,"infoColor",Mt(g.info.light,.6)),Q(g.Alert,"successColor",Mt(g.success.light,.6)),Q(g.Alert,"warningColor",Mt(g.warning.light,.6)),Q(g.Alert,"errorFilledBg",S("palette-error-dark")),Q(g.Alert,"infoFilledBg",S("palette-info-dark")),Q(g.Alert,"successFilledBg",S("palette-success-dark")),Q(g.Alert,"warningFilledBg",S("palette-warning-dark")),Q(g.Alert,"errorFilledColor",br(()=>g.getContrastText(g.error.dark))),Q(g.Alert,"infoFilledColor",br(()=>g.getContrastText(g.info.dark))),Q(g.Alert,"successFilledColor",br(()=>g.getContrastText(g.success.dark))),Q(g.Alert,"warningFilledColor",br(()=>g.getContrastText(g.warning.dark))),Q(g.Alert,"errorStandardBg",St(g.error.light,.9)),Q(g.Alert,"infoStandardBg",St(g.info.light,.9)),Q(g.Alert,"successStandardBg",St(g.success.light,.9)),Q(g.Alert,"warningStandardBg",St(g.warning.light,.9)),Q(g.Alert,"errorIconColor",S("palette-error-main")),Q(g.Alert,"infoIconColor",S("palette-info-main")),Q(g.Alert,"successIconColor",S("palette-success-main")),Q(g.Alert,"warningIconColor",S("palette-warning-main")),Q(g.AppBar,"defaultBg",S("palette-grey-900")),Q(g.AppBar,"darkBg",S("palette-background-paper")),Q(g.AppBar,"darkColor",S("palette-text-primary")),Q(g.Avatar,"defaultBg",S("palette-grey-600")),Q(g.Button,"inheritContainedBg",S("palette-grey-800")),Q(g.Button,"inheritContainedHoverBg",S("palette-grey-700")),Q(g.Chip,"defaultBorder",S("palette-grey-700")),Q(g.Chip,"defaultAvatarColor",S("palette-grey-300")),Q(g.Chip,"defaultIconColor",S("palette-grey-300")),Q(g.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Q(g.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Q(g.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Q(g.LinearProgress,"primaryBg",St(g.primary.main,.5)),Q(g.LinearProgress,"secondaryBg",St(g.secondary.main,.5)),Q(g.LinearProgress,"errorBg",St(g.error.main,.5)),Q(g.LinearProgress,"infoBg",St(g.info.main,.5)),Q(g.LinearProgress,"successBg",St(g.success.main,.5)),Q(g.LinearProgress,"warningBg",St(g.warning.main,.5)),Q(g.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),Q(g.Slider,"primaryTrack",St(g.primary.main,.5)),Q(g.Slider,"secondaryTrack",St(g.secondary.main,.5)),Q(g.Slider,"errorTrack",St(g.error.main,.5)),Q(g.Slider,"infoTrack",St(g.info.main,.5)),Q(g.Slider,"successTrack",St(g.success.main,.5)),Q(g.Slider,"warningTrack",St(g.warning.main,.5));const R=oc(g.background.default,.98);Q(g.SnackbarContent,"bg",R),Q(g.SnackbarContent,"color",br(()=>g.getContrastText(R))),Q(g.SpeedDialAction,"fabHoverBg",oc(g.background.paper,.15)),Q(g.StepConnector,"border",S("palette-grey-600")),Q(g.StepContent,"border",S("palette-grey-600")),Q(g.Switch,"defaultColor",S("palette-grey-300")),Q(g.Switch,"defaultDisabledColor",S("palette-grey-600")),Q(g.Switch,"primaryDisabledColor",St(g.primary.main,.55)),Q(g.Switch,"secondaryDisabledColor",St(g.secondary.main,.55)),Q(g.Switch,"errorDisabledColor",St(g.error.main,.55)),Q(g.Switch,"infoDisabledColor",St(g.info.main,.55)),Q(g.Switch,"successDisabledColor",St(g.success.main,.55)),Q(g.Switch,"warningDisabledColor",St(g.warning.main,.55)),Q(g.TableCell,"border",St(ic(g.divider,1),.68)),Q(g.Tooltip,"bg",ic(g.grey[700],.92))}Gr(g.background,"default"),Gr(g.background,"paper"),Gr(g.common,"background"),Gr(g.common,"onBackground"),Gr(g,"divider"),Object.keys(g).forEach(R=>{const z=g[R];z&&typeof z=="object"&&(z.main&&Q(g[R],"mainChannel",Ls(Ds(z.main))),z.light&&Q(g[R],"lightChannel",Ls(Ds(z.light))),z.dark&&Q(g[R],"darkChannel",Ls(Ds(z.dark))),z.contrastText&&Q(g[R],"contrastTextChannel",Ls(Ds(z.contrastText))),R==="text"&&(Gr(g[R],"primary"),Gr(g[R],"secondary")),R==="action"&&(z.active&&Gr(g[R],"active"),z.selected&&Gr(g[R],"selected")))})}),v=e.reduce((E,g)=>En(E,g),v);const M={prefix:o,disableCssColorScheme:i,shouldSkipGeneratingVar:a,getSelector:AA(v)},{vars:b,generateThemeVars:A,generateStyleSheets:C}=KC(v,M);return v.vars=b,Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([E,g])=>{v[E]=g}),v.generateThemeVars=A,v.generateStyleSheets=C,v.generateSpacing=function(){return oS(l.spacing,Sf(this))},v.getColorSchemeSelector=qC(s),v.spacing=v.generateSpacing(),v.shouldSkipGeneratingVar=a,v.unstable_sxConfig={...Cl,...l==null?void 0:l.unstable_sxConfig},v.unstable_sx=function(g){return Fo({sx:g,theme:this})},v.toRuntimeSource=RA,v}function j0(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:Zm({...n===!0?{}:n,mode:e})})}function Pf(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:o=n==null?void 0:n.mode,...a}=t,s=o||"light",l=i==null?void 0:i[s],c={...i,...n?{[s]:{...typeof l!="boolean"&&l,palette:n}}:void 0};if(r===!1){const u=_S(t,...e);return"colorSchemes"in t&&(u.defaultColorScheme=s,u.colorSchemes=c,u.palette.mode==="light"&&(u.colorSchemes.light={palette:u.palette},j0(u,"dark",c.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={palette:u.palette},j0(u,"light",c.light))),u}return!n&&!("light"in c)&&s==="light"&&(c.light=!0),IA({...a,colorSchemes:c,defaultColorScheme:s,...typeof r!="boolean"&&r},...e)}const Qm=Pf();function SS(){const t=Gm(Qm);return t[zr]||t}function MS({props:t,name:e}){return uS({props:t,name:e,defaultTheme:Qm,themeId:zr})}function UA(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const ES=t=>UA(t)&&t!=="classes",Cr=cS({themeId:zr,defaultTheme:Qm,rootShouldForwardProp:ES});function X0({theme:t,...e}){const n=zr in t?t[zr]:void 0;return Ee.jsx(mS,{...e,themeId:n?zr:void 0,theme:n||t})}const sc={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:NA,useColorScheme:HU,getInitColorSchemeScript:VU}=$C({themeId:zr,theme:()=>Pf({cssVariables:!0}),colorSchemeStorageKey:sc.colorSchemeStorageKey,modeStorageKey:sc.modeStorageKey,defaultColorScheme:{light:sc.defaultLightColorScheme,dark:sc.defaultDarkColorScheme},resolveTheme:t=>{const e={...t,typography:vS(t.palette,t.typography)};return e.unstable_sx=function(r){return Fo({sx:r,theme:this})},e}}),FA=NA;function OA({theme:t,...e}){return typeof t=="function"?Ee.jsx(X0,{theme:t,...e}):"colorSchemes"in(zr in t?t[zr]:t)?Ee.jsx(FA,{theme:t,...e}):Ee.jsx(X0,{theme:t,...e})}function kA(){return bf}const Y0={theme:void 0};function Lf(t){let e,n;return r=>{let i=e;return(i===void 0||r.theme!==n)&&(Y0.theme=r.theme,i=t(Y0),e=i,n=r.theme),i}}function rs(t){return BC(t)}function BA(t){return Xi("MuiSvgIcon",t)}Yi("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const zA=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Ht(e)}`,`fontSize${Ht(n)}`]};return Oo(i,BA,r)},HA=Cr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Ht(n.color)}`],e[`fontSize${Ht(n.fontSize)}`]]}})(Lf(({theme:t})=>{var e,n,r,i,o,a,s,l,c,u,f,d,p,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(i=(e=t.transitions)==null?void 0:e.create)==null?void 0:i.call(e,"fill",{duration:(r=(n=(t.vars??t).transitions)==null?void 0:n.duration)==null?void 0:r.shorter}),variants:[{props:y=>!y.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((a=(o=t.typography)==null?void 0:o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((l=(s=t.typography)==null?void 0:s.pxToRem)==null?void 0:l.call(s,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((u=(c=t.typography)==null?void 0:c.pxToRem)==null?void 0:u.call(c,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,y])=>y&&y.main).map(([y])=>{var m,h;return{props:{color:y},style:{color:(h=(m=(t.vars??t).palette)==null?void 0:m[y])==null?void 0:h.main}}}),{props:{color:"action"},style:{color:(d=(f=(t.vars??t).palette)==null?void 0:f.action)==null?void 0:d.active}},{props:{color:"disabled"},style:{color:(_=(p=(t.vars??t).palette)==null?void 0:p.action)==null?void 0:_.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Lu=k.forwardRef(function(e,n){const r=rs({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:a="inherit",component:s="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:f,viewBox:d="0 0 24 24",...p}=r,_=k.isValidElement(i)&&i.type==="svg",y={...r,color:a,component:s,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:u,viewBox:d,hasSvgAsChild:_},m={};u||(m.viewBox=d);const h=zA(y);return Ee.jsxs(HA,{as:s,className:rn(h.root,o),focusable:"false",color:c,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n,...m,...p,..._&&i.props,ownerState:y,children:[_?i.props.children:i,f?Ee.jsx("title",{children:f}):null]})});Lu&&(Lu.muiName="SvgIcon");function VA(t,e){function n(r,i){return Ee.jsx(Lu,{"data-testid":`${e}Icon`,ref:i,...r,children:t})}return n.muiName=Lu.muiName,k.memo(k.forwardRef(n))}function GA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function Zh(t,e){return Zh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Zh(t,e)}function WA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Zh(t,e)}const K0=da.createContext(null);function $A(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jm(t,e){var n=function(o){return e&&k.isValidElement(o)?e(o):o},r=Object.create(null);return t&&k.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function jA(t,e){t=t||{},e=e||{};function n(u){return u in e?e[u]:t[u]}var r=Object.create(null),i=[];for(var o in t)o in e?i.length&&(r[o]=i,i=[]):i.push(o);var a,s={};for(var l in e){if(r[l])for(a=0;a<r[l].length;a++){var c=r[l][a];s[r[l][a]]=n(c)}s[l]=n(l)}for(a=0;a<i.length;a++)s[i[a]]=n(i[a]);return s}function go(t,e,n){return n[e]!=null?n[e]:t.props[e]}function XA(t,e){return Jm(t.children,function(n){return k.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:go(n,"appear",t),enter:go(n,"enter",t),exit:go(n,"exit",t)})})}function YA(t,e,n){var r=Jm(t.children),i=jA(e,r);return Object.keys(i).forEach(function(o){var a=i[o];if(k.isValidElement(a)){var s=o in e,l=o in r,c=e[o],u=k.isValidElement(c)&&!c.props.in;l&&(!s||u)?i[o]=k.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:go(a,"exit",t),enter:go(a,"enter",t)}):!l&&s&&!u?i[o]=k.cloneElement(a,{in:!1}):l&&s&&k.isValidElement(c)&&(i[o]=k.cloneElement(a,{onExited:n.bind(null,a),in:c.props.in,exit:go(a,"exit",t),enter:go(a,"enter",t)}))}}),i}var KA=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},qA={component:"div",childFactory:function(e){return e}},eg=function(t){WA(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var a=o.handleExited.bind($A(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,o){var a=o.children,s=o.handleExited,l=o.firstRender;return{children:l?XA(i,s):YA(i,a,s),firstRender:!1}},n.handleExited=function(i,o){var a=Jm(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(s){var l=Au({},s.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,a=i.childFactory,s=GA(i,["component","childFactory"]),l=this.state.contextValue,c=KA(this.state.children).map(a);return delete s.appear,delete s.enter,delete s.exit,o===null?da.createElement(K0.Provider,{value:l},c):da.createElement(K0.Provider,{value:l},da.createElement(o,s,c))},e}(da.Component);eg.propTypes={};eg.defaultProps=qA;class Du{constructor(){as(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Du}static use(){const e=dS(Du.create).current,[n,r]=k.useState(!1);return e.shouldMount=n,e.setShouldMount=r,k.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=QA(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function ZA(){return Du.use()}function QA(){let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n}function JA(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:a,in:s,onExited:l,timeout:c}=t,[u,f]=k.useState(!1),d=rn(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:a,height:a,top:-(a/2)+o,left:-(a/2)+i},_=rn(n.child,u&&n.childLeaving,r&&n.childPulsate);return!s&&!u&&f(!0),k.useEffect(()=>{if(!s&&l!=null){const y=setTimeout(l,c);return()=>{clearTimeout(y)}}},[l,s,c]),Ee.jsx("span",{className:d,style:p,children:Ee.jsx("span",{className:_})})}const er=Yi("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Qh=550,eb=80,tb=Bm`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,nb=Bm`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,rb=Bm`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ib=Cr("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ob=Cr(JA,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${er.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${tb};
    animation-duration: ${Qh}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${er.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${er.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${er.childLeaving} {
    opacity: 0;
    animation-name: ${nb};
    animation-duration: ${Qh}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${er.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${rb};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ab=k.forwardRef(function(e,n){const r=rs({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:a,...s}=r,[l,c]=k.useState([]),u=k.useRef(0),f=k.useRef(null);k.useEffect(()=>{f.current&&(f.current(),f.current=null)},[l]);const d=k.useRef(!1),p=PC(),_=k.useRef(null),y=k.useRef(null),m=k.useCallback(M=>{const{pulsate:b,rippleX:A,rippleY:C,rippleSize:E,cb:g}=M;c(S=>[...S,Ee.jsx(ob,{classes:{ripple:rn(o.ripple,er.ripple),rippleVisible:rn(o.rippleVisible,er.rippleVisible),ripplePulsate:rn(o.ripplePulsate,er.ripplePulsate),child:rn(o.child,er.child),childLeaving:rn(o.childLeaving,er.childLeaving),childPulsate:rn(o.childPulsate,er.childPulsate)},timeout:Qh,pulsate:b,rippleX:A,rippleY:C,rippleSize:E},u.current)]),u.current+=1,f.current=g},[o]),h=k.useCallback((M={},b={},A=()=>{})=>{const{pulsate:C=!1,center:E=i||b.pulsate,fakeElement:g=!1}=b;if((M==null?void 0:M.type)==="mousedown"&&d.current){d.current=!1;return}(M==null?void 0:M.type)==="touchstart"&&(d.current=!0);const S=g?null:y.current,R=S?S.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,H,j;if(E||M===void 0||M.clientX===0&&M.clientY===0||!M.clientX&&!M.touches)z=Math.round(R.width/2),H=Math.round(R.height/2);else{const{clientX:Z,clientY:Y}=M.touches&&M.touches.length>0?M.touches[0]:M;z=Math.round(Z-R.left),H=Math.round(Y-R.top)}if(E)j=Math.sqrt((2*R.width**2+R.height**2)/3),j%2===0&&(j+=1);else{const Z=Math.max(Math.abs((S?S.clientWidth:0)-z),z)*2+2,Y=Math.max(Math.abs((S?S.clientHeight:0)-H),H)*2+2;j=Math.sqrt(Z**2+Y**2)}M!=null&&M.touches?_.current===null&&(_.current=()=>{m({pulsate:C,rippleX:z,rippleY:H,rippleSize:j,cb:A})},p.start(eb,()=>{_.current&&(_.current(),_.current=null)})):m({pulsate:C,rippleX:z,rippleY:H,rippleSize:j,cb:A})},[i,m,p]),x=k.useCallback(()=>{h({},{pulsate:!0})},[h]),v=k.useCallback((M,b)=>{if(p.clear(),(M==null?void 0:M.type)==="touchend"&&_.current){_.current(),_.current=null,p.start(0,()=>{v(M,b)});return}_.current=null,c(A=>A.length>0?A.slice(1):A),f.current=b},[p]);return k.useImperativeHandle(n,()=>({pulsate:x,start:h,stop:v}),[x,h,v]),Ee.jsx(ib,{className:rn(er.root,o.root,a),ref:y,...s,children:Ee.jsx(eg,{component:null,exit:!0,children:l})})});function sb(t){return Xi("MuiButtonBase",t)}const lb=Yi("MuiButtonBase",["root","disabled","focusVisible"]),cb=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,a=Oo({root:["root",e&&"disabled",n&&"focusVisible"]},sb,i);return n&&r&&(a.root+=` ${r}`),a},ub=Cr("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${lb.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),fb=k.forwardRef(function(e,n){const r=rs({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:a,className:s,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:f=!1,focusRipple:d=!1,focusVisibleClassName:p,LinkComponent:_="a",onBlur:y,onClick:m,onContextMenu:h,onDragLeave:x,onFocus:v,onFocusVisible:M,onKeyDown:b,onKeyUp:A,onMouseDown:C,onMouseLeave:E,onMouseUp:g,onTouchEnd:S,onTouchMove:R,onTouchStart:z,tabIndex:H=0,TouchRippleProps:j,touchRippleRef:Z,type:Y,...J}=r,U=k.useRef(null),W=ZA(),te=N0(W.ref,Z),[le,Ae]=k.useState(!1);c&&le&&Ae(!1),k.useImperativeHandle(i,()=>({focusVisible:()=>{Ae(!0),U.current.focus()}}),[]);const je=W.shouldMount&&!u&&!c;k.useEffect(()=>{le&&d&&!u&&W.pulsate()},[u,d,le,W]);function q(G,ae,ie=f){return ac(ge=>(ae&&ae(ge),ie||W[G](ge),!0))}const ce=q("start",C),pe=q("stop",h),me=q("stop",x),Ie=q("stop",g),We=q("stop",G=>{le&&G.preventDefault(),E&&E(G)}),Ye=q("start",z),mt=q("stop",S),D=q("stop",R),it=q("stop",G=>{Pu(G.target)||Ae(!1),y&&y(G)},!1),Ve=ac(G=>{U.current||(U.current=G.currentTarget),Pu(G.target)&&(Ae(!0),M&&M(G)),v&&v(G)}),Ke=()=>{const G=U.current;return l&&l!=="button"&&!(G.tagName==="A"&&G.href)},Te=ac(G=>{d&&!G.repeat&&le&&G.key===" "&&W.stop(G,()=>{W.start(G)}),G.target===G.currentTarget&&Ke()&&G.key===" "&&G.preventDefault(),b&&b(G),G.target===G.currentTarget&&Ke()&&G.key==="Enter"&&!c&&(G.preventDefault(),m&&m(G))}),dt=ac(G=>{d&&G.key===" "&&le&&!G.defaultPrevented&&W.stop(G,()=>{W.pulsate(G)}),A&&A(G),m&&G.target===G.currentTarget&&Ke()&&G.key===" "&&!G.defaultPrevented&&m(G)});let Ue=l;Ue==="button"&&(J.href||J.to)&&(Ue=_);const Oe={};Ue==="button"?(Oe.type=Y===void 0?"button":Y,Oe.disabled=c):(!J.href&&!J.to&&(Oe.role="button"),c&&(Oe["aria-disabled"]=c));const P=N0(n,U),T={...r,centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:f,focusRipple:d,tabIndex:H,focusVisible:le},X=cb(T);return Ee.jsxs(ub,{as:Ue,className:rn(X.root,s),ownerState:T,onBlur:it,onClick:m,onContextMenu:pe,onFocus:Ve,onKeyDown:Te,onKeyUp:dt,onMouseDown:ce,onMouseLeave:We,onMouseUp:Ie,onDragLeave:me,onTouchEnd:mt,onTouchMove:D,onTouchStart:Ye,ref:P,tabIndex:c?-1:H,type:Y,...Oe,...J,children:[a,je?Ee.jsx(ab,{ref:te,center:o,...j}):null]})});function db(t){return Xi("MuiTypography",t)}Yi("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const hb={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},pb=kA(),mb=t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:a}=t,s={root:["root",o,t.align!=="inherit"&&`align${Ht(e)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return Oo(s,db,a)},gb=Cr("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${Ht(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(Lf(({theme:t})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([n,r])=>n!=="inherit"&&r&&typeof r=="object").map(([n,r])=>({props:{variant:n},style:r})),...Object.entries(t.palette).filter(([,n])=>n&&n.main).map(([n])=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),...Object.entries(((e=t.palette)==null?void 0:e.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${Ht(n)}`},style:{color:(t.vars||t).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),q0={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},lr=k.forwardRef(function(e,n){const{color:r,...i}=rs({props:e,name:"MuiTypography"}),o=!hb[r],a=pb({...i,...o&&{color:r}}),{align:s="inherit",className:l,component:c,gutterBottom:u=!1,noWrap:f=!1,paragraph:d=!1,variant:p="body1",variantMapping:_=q0,...y}=a,m={...a,align:s,color:r,className:l,component:c,gutterBottom:u,noWrap:f,paragraph:d,variant:p,variantMapping:_},h=c||(d?"p":_[p]||q0[p])||"span",x=mb(m);return Ee.jsx(gb,{as:h,ref:n,className:rn(x.root,l),...y,ownerState:m,style:{...s!=="inherit"&&{"--Typography-textAlign":s},...y.style}})}),vb=Yi("MuiBox",["root"]),_b=Pf(),yb=dC({themeId:zr,defaultTheme:_b,defaultClassName:vb.root,generateClassName:sS.generate});function xb(t){return Xi("MuiButton",t)}const Xo=Yi("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Sb=k.createContext({}),Mb=k.createContext(void 0),Eb=t=>{const{color:e,disableElevation:n,fullWidth:r,size:i,variant:o,classes:a}=t,s={root:["root",o,`${o}${Ht(e)}`,`size${Ht(i)}`,`${o}Size${Ht(i)}`,`color${Ht(e)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Ht(i)}`],endIcon:["icon","endIcon",`iconSize${Ht(i)}`]},l=Oo(s,xb,a);return{...a,...l}},wS=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],wb=Cr(fb,{shouldForwardProp:t=>ES(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${Ht(n.color)}`],e[`size${Ht(n.size)}`],e[`${n.variant}Size${Ht(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(Lf(({theme:t})=>{var r,i;const e=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],n=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Xo.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${Xo.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${Xo.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Xo.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter(([,o])=>o&&o.main&&o.dark&&o.contrastText).map(([o])=>({props:{color:o},style:{"--variant-textColor":(t.vars||t).palette[o].main,"--variant-outlinedColor":(t.vars||t).palette[o].main,"--variant-outlinedBorder":t.vars?`rgba(${t.vars.palette[o].mainChannel} / 0.5)`:Fr(t.palette[o].main,.5),"--variant-containedColor":(t.vars||t).palette[o].contrastText,"--variant-containedBg":(t.vars||t).palette[o].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[o].dark,"--variant-textBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Fr(t.palette[o].main,t.palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[o].main,"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Fr(t.palette[o].main,t.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":t.vars?t.vars.palette.text.primary:(i=(r=t.palette).getContrastText)==null?void 0:i.call(r,e),"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:Fr(t.palette.text.primary,t.palette.action.hoverOpacity),"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:Fr(t.palette.text.primary,t.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Xo.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Xo.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),Tb=Cr("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${Ht(n.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...wS]}),Cb=Cr("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${Ht(n.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...wS]}),Ab=k.forwardRef(function(e,n){const r=k.useContext(Sb),i=k.useContext(Mb),o=pl(r,e),a=rs({props:o,name:"MuiButton"}),{children:s,color:l="primary",component:c="button",className:u,disabled:f=!1,disableElevation:d=!1,disableFocusRipple:p=!1,endIcon:_,focusVisibleClassName:y,fullWidth:m=!1,size:h="medium",startIcon:x,type:v,variant:M="text",...b}=a,A={...a,color:l,component:c,disabled:f,disableElevation:d,disableFocusRipple:p,fullWidth:m,size:h,type:v,variant:M},C=Eb(A),E=x&&Ee.jsx(Tb,{className:C.startIcon,ownerState:A,children:x}),g=_&&Ee.jsx(Cb,{className:C.endIcon,ownerState:A,children:_}),S=i||"";return Ee.jsxs(wb,{ownerState:A,className:rn(r.className,C.root,u,S),component:c,disabled:f,focusRipple:!p,focusVisibleClassName:rn(C.focusVisible,y),ref:n,type:v,...b,classes:C,children:[E,s,g]})}),Z0=k.createContext();function bb(t){return Xi("MuiGrid",t)}const Rb=[0,1,2,3,4,5,6,7,8,9,10],Pb=["column-reverse","column","row-reverse","row"],Lb=["nowrap","wrap-reverse","wrap"],vs=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ml=Yi("MuiGrid",["root","container","item","zeroMinWidth",...Rb.map(t=>`spacing-xs-${t}`),...Pb.map(t=>`direction-xs-${t}`),...Lb.map(t=>`wrap-xs-${t}`),...vs.map(t=>`grid-xs-${t}`),...vs.map(t=>`grid-sm-${t}`),...vs.map(t=>`grid-md-${t}`),...vs.map(t=>`grid-lg-${t}`),...vs.map(t=>`grid-xl-${t}`)]);function Db({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((r,i)=>{let o={};if(e[i]&&(n=e[i]),!n)return r;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=Eo({values:e.columns,breakpoints:t.breakpoints.values}),s=typeof a=="object"?a[i]:a;if(s==null)return r;const l=`${Math.round(n/s*1e8)/1e6}%`;let c={};if(e.container&&e.item&&e.columnSpacing!==0){const u=t.spacing(e.columnSpacing);if(u!=="0px"){const f=`calc(${l} + ${u})`;c={flexBasis:f,maxWidth:f}}}o={flexBasis:l,flexGrow:0,maxWidth:l,...c}}return t.breakpoints.values[i]===0?Object.assign(r,o):r[t.breakpoints.up(i)]=o,r},{})}function Ib({theme:t,ownerState:e}){const n=Eo({values:e.direction,breakpoints:t.breakpoints.values});return On({theme:t},n,r=>{const i={flexDirection:r};return r.startsWith("column")&&(i[`& > .${ml.item}`]={maxWidth:"none"}),i})}function TS({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(i=>{n===""&&e[i]!==0&&(n=i)});const r=Object.keys(t).sort((i,o)=>t[i]-t[o]);return r.slice(0,r.indexOf(n))}function Ub({theme:t,ownerState:e}){const{container:n,rowSpacing:r}=e;let i={};if(n&&r!==0){const o=Eo({values:r,breakpoints:t.breakpoints.values});let a;typeof o=="object"&&(a=TS({breakpoints:t.breakpoints.values,values:o})),i=On({theme:t},o,(s,l)=>{const c=t.spacing(s);return c!=="0px"?{marginTop:t.spacing(-s),[`& > .${ml.item}`]:{paddingTop:c}}:a!=null&&a.includes(l)?{}:{marginTop:0,[`& > .${ml.item}`]:{paddingTop:0}}})}return i}function Nb({theme:t,ownerState:e}){const{container:n,columnSpacing:r}=e;let i={};if(n&&r!==0){const o=Eo({values:r,breakpoints:t.breakpoints.values});let a;typeof o=="object"&&(a=TS({breakpoints:t.breakpoints.values,values:o})),i=On({theme:t},o,(s,l)=>{const c=t.spacing(s);if(c!=="0px"){const u=t.spacing(-s);return{width:`calc(100% + ${c})`,marginLeft:u,[`& > .${ml.item}`]:{paddingLeft:c}}}return a!=null&&a.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${ml.item}`]:{paddingLeft:0}}})}return i}function Fb(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const r=[];return e.forEach(i=>{const o=t[i];Number(o)>0&&r.push(n[`spacing-${i}-${String(o)}`])}),r}const Ob=Cr("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:c}=n;let u=[];r&&(u=Fb(a,c,e));const f=[];return c.forEach(d=>{const p=n[d];p&&f.push(e[`grid-${d}-${String(p)}`])}),[e.root,r&&e.container,o&&e.item,l&&e.zeroMinWidth,...u,i!=="row"&&e[`direction-xs-${String(i)}`],s!=="wrap"&&e[`wrap-xs-${String(s)}`],...f]}})(({ownerState:t})=>({boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},...t.wrap!=="wrap"&&{flexWrap:t.wrap}}),Ib,Ub,Nb,Db);function kb(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(r=>{const i=t[r];if(Number(i)>0){const o=`spacing-${r}-${String(i)}`;n.push(o)}}),n}const Bb=t=>{const{classes:e,container:n,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=t;let c=[];n&&(c=kb(o,l));const u=[];l.forEach(d=>{const p=t[d];p&&u.push(`grid-${d}-${String(p)}`)});const f={root:["root",n&&"container",i&&"item",s&&"zeroMinWidth",...c,r!=="row"&&`direction-xs-${String(r)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...u]};return Oo(f,bb,e)},lc=k.forwardRef(function(e,n){const r=MS({props:e,name:"MuiGrid"}),{breakpoints:i}=SS(),o=bf(r),{className:a,columns:s,columnSpacing:l,component:c="div",container:u=!1,direction:f="row",item:d=!1,rowSpacing:p,spacing:_=0,wrap:y="wrap",zeroMinWidth:m=!1,...h}=o,x=p||_,v=l||_,M=k.useContext(Z0),b=u?s||12:M,A={},C={...h};i.keys.forEach(S=>{h[S]!=null&&(A[S]=h[S],delete C[S])});const E={...o,columns:b,container:u,direction:f,item:d,rowSpacing:x,columnSpacing:v,wrap:y,zeroMinWidth:m,spacing:_,...A,breakpoints:i.keys},g=Bb(E);return Ee.jsx(Z0.Provider,{value:b,children:Ee.jsx(Ob,{ownerState:E,className:rn(g.root,a),as:c,ref:n,...C})})});function zb(t){return Xi("MuiLink",t)}const Hb=Yi("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Vb=({theme:t,ownerState:e})=>{const n=e.color,r=ja(t,`palette.${n}`,!1)||e.color,i=ja(t,`palette.${n}Channel`);return"vars"in t&&i?`rgba(${i} / 0.4)`:Fr(r,.4)},Q0={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Gb=t=>{const{classes:e,component:n,focusVisible:r,underline:i}=t,o={root:["root",`underline${Ht(i)}`,n==="button"&&"button",r&&"focusVisible"]};return Oo(o,zb,e)},Wb=Cr(lr,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${Ht(n.underline)}`],n.component==="button"&&e.button]}})(Lf(({theme:t})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:n})=>e==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(t.palette).filter(([,e])=>e&&e.main).map(([e])=>({props:{underline:"always",color:e},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette[e].mainChannel} / 0.4)`:Fr(t.palette[e].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:Fr(t.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.secondaryChannel} / 0.4)`:Fr(t.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(t.vars||t).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Hb.focusVisible}`]:{outline:"auto"}}}]}))),J0=k.forwardRef(function(e,n){const r=rs({props:e,name:"MuiLink"}),i=SS(),{className:o,color:a="primary",component:s="a",onBlur:l,onFocus:c,TypographyClasses:u,underline:f="always",variant:d="inherit",sx:p,..._}=r,[y,m]=k.useState(!1),h=b=>{Pu(b.target)||m(!1),l&&l(b)},x=b=>{Pu(b.target)&&m(!0),c&&c(b)},v={...r,color:a,component:s,focusVisible:y,underline:f,variant:d},M=Gb(v);return Ee.jsx(Wb,{color:a,className:rn(M.root,o),classes:u,component:s,onBlur:h,onFocus:x,ref:n,ownerState:v,variant:d,..._,sx:[...Q0[a]===void 0?[{color:a}]:[],...Array.isArray(p)?p:[p]],style:{..._.style,...f==="always"&&a!=="inherit"&&!Q0[a]&&{"--Link-underlineColor":Vb({theme:i,ownerState:v})}}})}),Df=rA({createStyledComponent:Cr("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>MS({props:t,name:"MuiStack"})});/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function It(){return It=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},It.apply(this,arguments)}var $t;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($t||($t={}));const ev="popstate";function $b(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:a,hash:s}=r.location;return gl("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Al(i)}return Xb(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xa(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jb(){return Math.random().toString(36).substr(2,8)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function gl(t,e,n,r){return n===void 0&&(n=null),It({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ki(e):e,{state:n,key:e&&e.key||r||jb()})}function Al(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ki(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Xb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=$t.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(It({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=$t.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:s,location:y.location,delta:h})}function d(m,h){s=$t.Push;let x=gl(y.location,m,h);c=u()+1;let v=tv(x,c),M=y.createHref(x);try{a.pushState(v,"",M)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(M)}o&&l&&l({action:s,location:y.location,delta:1})}function p(m,h){s=$t.Replace;let x=gl(y.location,m,h);c=u();let v=tv(x,c),M=y.createHref(x);a.replaceState(v,"",M),o&&l&&l({action:s,location:y.location,delta:0})}function _(m){let h=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof m=="string"?m:Al(m);return x=x.replace(/ $/,"%20"),Je(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let y={get action(){return s},get location(){return t(i,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,f),l=m,()=>{i.removeEventListener(ev,f),l=null}},createHref(m){return e(i,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return y}var xt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xt||(xt={}));const Yb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Kb(t){return t.index===!0}function vl(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,o)=>{let a=[...n,String(o)],s=typeof i.id=="string"?i.id:a.join("-");if(Je(i.index!==!0||!i.children,"Cannot specify children on an index route"),Je(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Kb(i)){let l=It({},i,e(i),{id:s});return r[s]=l,l}else{let l=It({},i,e(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=vl(i.children,e,a,r)),l}})}function co(t,e,n){return n===void 0&&(n="/"),qc(t,e,n,!1)}function qc(t,e,n,r){let i=typeof e=="string"?Ki(e):e,o=bl(i.pathname||"/",n);if(o==null)return null;let a=CS(t);Zb(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=lR(o);s=aR(a[l],c,r)}return s}function qb(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function CS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Fi([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(Je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),CS(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:iR(c,o.index),routesMeta:u})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of AS(o.path))i(o,a,l)}),e}function AS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=AS(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function Zb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qb=/^:[\w-]+$/,Jb=3,eR=2,tR=1,nR=10,rR=-2,nv=t=>t==="*";function iR(t,e){let n=t.split("/"),r=n.length;return n.some(nv)&&(r+=rR),e&&(r+=eR),n.filter(i=>!nv(i)).reduce((i,o)=>i+(Qb.test(o)?Jb:o===""?tR:nR),r)}function oR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,u=o==="/"?e:e.slice(o.length)||"/",f=rv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=rv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Fi([o,f.pathname]),pathnameBase:fR(Fi([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Fi([o,f.pathnameBase]))}return a}function rv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let y=s[f]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const _=s[f];return p&&!_?c[d]=void 0:c[d]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:t}}function sR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xa(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xa(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ki(t):t;return{pathname:n?n.startsWith("/")?n:uR(n,e):e,search:dR(r),hash:hR(i)}}function uR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RS(t,e){let n=bS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function PS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ki(t):(i=It({},t),Je(!i.pathname||!i.pathname.includes("?"),Sd("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),Sd("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),Sd("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let f=e.length-1;if(!r&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?e[f]:"/"}let l=cR(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Fi=t=>t.join("/").replace(/\/\/+/g,"/"),fR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Iu{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function If(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LS=["post","put","patch","delete"],pR=new Set(LS),mR=["get",...LS],gR=new Set(mR),vR=new Set([301,302,303,307,308]),_R=new Set([307,308]),Md={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_s={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),DS="remix-router-transitions";function SR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Je(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=O=>({hasErrorBoundary:I(O)})}else i=xR;let o={},a=vl(t.routes,i,void 0,o),s,l=t.basename||"/",c=t.unstable_dataStrategy||CR,u=t.unstable_patchRoutesOnNavigation,f=It({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),d=null,p=new Set,_=1e3,y=new Set,m=null,h=null,x=null,v=t.hydrationData!=null,M=co(a,t.history.location,l),b=null;if(M==null&&!u){let I=xn(404,{pathname:t.history.location.pathname}),{matches:O,route:$}=hv(a);M=O,b={[$.id]:I}}M&&!t.hydrationData&&Qi(M,a,t.history.location.pathname).active&&(M=null);let A;if(M)if(M.some(I=>I.route.lazy))A=!1;else if(!M.some(I=>I.route.loader))A=!0;else if(f.v7_partialHydration){let I=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null,$=oe=>oe.route.loader?typeof oe.route.loader=="function"&&oe.route.loader.hydrate===!0?!1:I&&I[oe.route.id]!==void 0||O&&O[oe.route.id]!==void 0:!0;if(O){let oe=M.findIndex(Ce=>O[Ce.route.id]!==void 0);A=M.slice(0,oe+1).every($)}else A=M.every($)}else A=t.hydrationData!=null;else if(A=!1,M=[],f.v7_partialHydration){let I=Qi(null,a,t.history.location.pathname);I.active&&I.matches&&(M=I.matches)}let C,E={historyAction:t.history.action,location:t.history.location,matches:M,initialized:A,navigation:Md,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||b,fetchers:new Map,blockers:new Map},g=$t.Pop,S=!1,R,z=!1,H=new Map,j=null,Z=!1,Y=!1,J=[],U=new Set,W=new Map,te=0,le=-1,Ae=new Map,je=new Set,q=new Map,ce=new Map,pe=new Set,me=new Map,Ie=new Map,We=new Map,Ye=!1;function mt(){if(d=t.history.listen(I=>{let{action:O,location:$,delta:oe}=I;if(Ye){Ye=!1;return}Xa(Ie.size===0||oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ce=ve({currentLocation:E.location,nextLocation:$,historyAction:O});if(Ce&&oe!=null){Ye=!0,t.history.go(oe*-1),re(Ce,{state:"blocked",location:$,proceed(){re(Ce,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),t.history.go(oe)},reset(){let Le=new Map(E.blockers);Le.set(Ce,_s),Ve({blockers:Le})}});return}return Ue(O,$)}),n){BR(e,H);let I=()=>zR(e,H);e.addEventListener("pagehide",I),j=()=>e.removeEventListener("pagehide",I)}return E.initialized||Ue($t.Pop,E.location,{initialHydration:!0}),C}function D(){d&&d(),j&&j(),p.clear(),R&&R.abort(),E.fetchers.forEach((I,O)=>Ge(O)),E.blockers.forEach((I,O)=>ee(O))}function it(I){return p.add(I),()=>p.delete(I)}function Ve(I,O){O===void 0&&(O={}),E=It({},E,I);let $=[],oe=[];f.v7_fetcherPersist&&E.fetchers.forEach((Ce,Le)=>{Ce.state==="idle"&&(pe.has(Le)?oe.push(Le):$.push(Le))}),[...p].forEach(Ce=>Ce(E,{deletedFetchers:oe,unstable_viewTransitionOpts:O.viewTransitionOpts,unstable_flushSync:O.flushSync===!0})),f.v7_fetcherPersist&&($.forEach(Ce=>E.fetchers.delete(Ce)),oe.forEach(Ce=>Ge(Ce)))}function Ke(I,O,$){var oe,Ce;let{flushSync:Le}=$===void 0?{}:$,$e=E.actionData!=null&&E.navigation.formMethod!=null&&yr(E.navigation.formMethod)&&E.navigation.state==="loading"&&((oe=I.state)==null?void 0:oe._isRedirect)!==!0,ye;O.actionData?Object.keys(O.actionData).length>0?ye=O.actionData:ye=null:$e?ye=E.actionData:ye=null;let w=O.loaderData?fv(E.loaderData,O.loaderData,O.matches||[],O.errors):E.loaderData,L=E.blockers;L.size>0&&(L=new Map(L),L.forEach((N,ne)=>L.set(ne,_s)));let F=S===!0||E.navigation.formMethod!=null&&yr(E.navigation.formMethod)&&((Ce=I.state)==null?void 0:Ce._isRedirect)!==!0;s&&(a=s,s=void 0),Z||g===$t.Pop||(g===$t.Push?t.history.push(I,I.state):g===$t.Replace&&t.history.replace(I,I.state));let V;if(g===$t.Pop){let N=H.get(E.location.pathname);N&&N.has(I.pathname)?V={currentLocation:E.location,nextLocation:I}:H.has(I.pathname)&&(V={currentLocation:I,nextLocation:E.location})}else if(z){let N=H.get(E.location.pathname);N?N.add(I.pathname):(N=new Set([I.pathname]),H.set(E.location.pathname,N)),V={currentLocation:E.location,nextLocation:I}}Ve(It({},O,{actionData:ye,loaderData:w,historyAction:g,location:I,initialized:!0,navigation:Md,revalidation:"idle",restoreScrollPosition:kn(I,O.matches||E.matches),preventScrollReset:F,blockers:L}),{viewTransitionOpts:V,flushSync:Le===!0}),g=$t.Pop,S=!1,z=!1,Z=!1,Y=!1,J=[]}async function Te(I,O){if(typeof I=="number"){t.history.go(I);return}let $=Jh(E.location,E.matches,l,f.v7_prependBasename,I,f.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:oe,submission:Ce,error:Le}=iv(f.v7_normalizeFormMethod,!1,$,O),$e=E.location,ye=gl(E.location,oe,O&&O.state);ye=It({},ye,t.history.encodeLocation(ye));let w=O&&O.replace!=null?O.replace:void 0,L=$t.Push;w===!0?L=$t.Replace:w===!1||Ce!=null&&yr(Ce.formMethod)&&Ce.formAction===E.location.pathname+E.location.search&&(L=$t.Replace);let F=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,V=(O&&O.unstable_flushSync)===!0,N=ve({currentLocation:$e,nextLocation:ye,historyAction:L});if(N){re(N,{state:"blocked",location:ye,proceed(){re(N,{state:"proceeding",proceed:void 0,reset:void 0,location:ye}),Te(I,O)},reset(){let ne=new Map(E.blockers);ne.set(N,_s),Ve({blockers:ne})}});return}return await Ue(L,ye,{submission:Ce,pendingError:Le,preventScrollReset:F,replace:O&&O.replace,enableViewTransition:O&&O.unstable_viewTransition,flushSync:V})}function dt(){if(Xe(),Ve({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){Ue(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}Ue(g||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function Ue(I,O,$){R&&R.abort(),R=null,g=I,Z=($&&$.startUninterruptedRevalidation)===!0,dr(E.location,E.matches),S=($&&$.preventScrollReset)===!0,z=($&&$.enableViewTransition)===!0;let oe=s||a,Ce=$&&$.overrideNavigation,Le=co(oe,O,l),$e=($&&$.flushSync)===!0,ye=Qi(Le,oe,O.pathname);if(ye.active&&ye.matches&&(Le=ye.matches),!Le){let{error:ue,notFoundMatches:xe,route:_e}=He(O.pathname);Ke(O,{matches:xe,loaderData:{},errors:{[_e.id]:ue}},{flushSync:$e});return}if(E.initialized&&!Y&&DR(E.location,O)&&!($&&$.submission&&yr($.submission.formMethod))){Ke(O,{matches:Le},{flushSync:$e});return}R=new AbortController;let w=Yo(t.history,O,R.signal,$&&$.submission),L;if($&&$.pendingError)L=[Ta(Le).route.id,{type:xt.error,error:$.pendingError}];else if($&&$.submission&&yr($.submission.formMethod)){let ue=await Oe(w,O,$.submission,Le,ye.active,{replace:$.replace,flushSync:$e});if(ue.shortCircuited)return;if(ue.pendingActionResult){let[xe,_e]=ue.pendingActionResult;if(Vn(_e)&&If(_e.error)&&_e.error.status===404){R=null,Ke(O,{matches:ue.matches,loaderData:{},errors:{[xe]:_e.error}});return}}Le=ue.matches||Le,L=ue.pendingActionResult,Ce=Ed(O,$.submission),$e=!1,ye.active=!1,w=Yo(t.history,w.url,w.signal)}let{shortCircuited:F,matches:V,loaderData:N,errors:ne}=await P(w,O,Le,ye.active,Ce,$&&$.submission,$&&$.fetcherSubmission,$&&$.replace,$&&$.initialHydration===!0,$e,L);F||(R=null,Ke(O,It({matches:V||Le},dv(L),{loaderData:N,errors:ne})))}async function Oe(I,O,$,oe,Ce,Le){Le===void 0&&(Le={}),Xe();let $e=OR(O,$);if(Ve({navigation:$e},{flushSync:Le.flushSync===!0}),Ce){let L=await Zn(oe,O.pathname,I.signal);if(L.type==="aborted")return{shortCircuited:!0};if(L.type==="error"){let{boundaryId:F,error:V}=et(O.pathname,L);return{matches:L.partialMatches,pendingActionResult:[F,{type:xt.error,error:V}]}}else if(L.matches)oe=L.matches;else{let{notFoundMatches:F,error:V,route:N}=He(O.pathname);return{matches:F,pendingActionResult:[N.id,{type:xt.error,error:V}]}}}let ye,w=Is(oe,O);if(!w.route.action&&!w.route.lazy)ye={type:xt.error,error:xn(405,{method:I.method,pathname:O.pathname,routeId:w.route.id})};else if(ye=(await se("action",I,[w],oe))[0],I.signal.aborted)return{shortCircuited:!0};if(_o(ye)){let L;return Le&&Le.replace!=null?L=Le.replace:L=lv(ye.response.headers.get("Location"),new URL(I.url),l)===E.location.pathname+E.location.search,await ge(I,ye,{submission:$,replace:L}),{shortCircuited:!0}}if(vo(ye))throw xn(400,{type:"defer-action"});if(Vn(ye)){let L=Ta(oe,w.route.id);return(Le&&Le.replace)!==!0&&(g=$t.Push),{matches:oe,pendingActionResult:[L.route.id,ye]}}return{matches:oe,pendingActionResult:[w.route.id,ye]}}async function P(I,O,$,oe,Ce,Le,$e,ye,w,L,F){let V=Ce||Ed(O,Le),N=Le||$e||vv(V),ne=!Z&&(!f.v7_partialHydration||!w);if(oe){if(ne){let Be=T(F);Ve(It({navigation:V},Be!==void 0?{actionData:Be}:{}),{flushSync:L})}let Ne=await Zn($,O.pathname,I.signal);if(Ne.type==="aborted")return{shortCircuited:!0};if(Ne.type==="error"){let{boundaryId:Be,error:Tt}=et(O.pathname,Ne);return{matches:Ne.partialMatches,loaderData:{},errors:{[Be]:Tt}}}else if(Ne.matches)$=Ne.matches;else{let{error:Be,notFoundMatches:Tt,route:ct}=He(O.pathname);return{matches:Tt,loaderData:{},errors:{[ct.id]:Be}}}}let ue=s||a,[xe,_e]=ov(t.history,E,$,N,O,f.v7_partialHydration&&w===!0,f.v7_skipActionErrorRevalidation,Y,J,U,pe,q,je,ue,l,F);if(Rt(Ne=>!($&&$.some(Be=>Be.route.id===Ne))||xe&&xe.some(Be=>Be.route.id===Ne)),le=++te,xe.length===0&&_e.length===0){let Ne=Et();return Ke(O,It({matches:$,loaderData:{},errors:F&&Vn(F[1])?{[F[0]]:F[1].error}:null},dv(F),Ne?{fetchers:new Map(E.fetchers)}:{}),{flushSync:L}),{shortCircuited:!0}}if(ne){let Ne={};if(!oe){Ne.navigation=V;let Be=T(F);Be!==void 0&&(Ne.actionData=Be)}_e.length>0&&(Ne.fetchers=X(_e)),Ve(Ne,{flushSync:L})}_e.forEach(Ne=>{W.has(Ne.key)&&ze(Ne.key),Ne.controller&&W.set(Ne.key,Ne.controller)});let ke=()=>_e.forEach(Ne=>ze(Ne.key));R&&R.signal.addEventListener("abort",ke);let{loaderResults:Fe,fetcherResults:Pe}=await we(E.matches,$,xe,_e,I);if(I.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",ke),_e.forEach(Ne=>W.delete(Ne.key));let nt=pv([...Fe,...Pe]);if(nt){if(nt.idx>=xe.length){let Ne=_e[nt.idx-xe.length].key;je.add(Ne)}return await ge(I,nt.result,{replace:ye}),{shortCircuited:!0}}let{loaderData:gt,errors:st}=uv(E,$,xe,Fe,F,_e,Pe,me);me.forEach((Ne,Be)=>{Ne.subscribe(Tt=>{(Tt||Ne.done)&&me.delete(Be)})}),f.v7_partialHydration&&w&&E.errors&&Object.entries(E.errors).filter(Ne=>{let[Be]=Ne;return!xe.some(Tt=>Tt.route.id===Be)}).forEach(Ne=>{let[Be,Tt]=Ne;st=Object.assign(st||{},{[Be]:Tt})});let en=Et(),ot=B(le),De=en||ot||_e.length>0;return It({matches:$,loaderData:gt,errors:st},De?{fetchers:new Map(E.fetchers)}:{})}function T(I){if(I&&!Vn(I[1]))return{[I[0]]:I[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function X(I){return I.forEach(O=>{let $=E.fetchers.get(O.key),oe=ys(void 0,$?$.data:void 0);E.fetchers.set(O.key,oe)}),new Map(E.fetchers)}function G(I,O,$,oe){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(I)&&ze(I);let Ce=(oe&&oe.unstable_flushSync)===!0,Le=s||a,$e=Jh(E.location,E.matches,l,f.v7_prependBasename,$,f.v7_relativeSplatPath,O,oe==null?void 0:oe.relative),ye=co(Le,$e,l),w=Qi(ye,Le,$e);if(w.active&&w.matches&&(ye=w.matches),!ye){Se(I,O,xn(404,{pathname:$e}),{flushSync:Ce});return}let{path:L,submission:F,error:V}=iv(f.v7_normalizeFormMethod,!0,$e,oe);if(V){Se(I,O,V,{flushSync:Ce});return}let N=Is(ye,L);if(S=(oe&&oe.preventScrollReset)===!0,F&&yr(F.formMethod)){ae(I,O,L,N,ye,w.active,Ce,F);return}q.set(I,{routeId:O,path:L}),ie(I,O,L,N,ye,w.active,Ce,F)}async function ae(I,O,$,oe,Ce,Le,$e,ye){Xe(),q.delete(I);function w(ct){if(!ct.route.action&&!ct.route.lazy){let Dt=xn(405,{method:ye.formMethod,pathname:$,routeId:O});return Se(I,O,Dt,{flushSync:$e}),!0}return!1}if(!Le&&w(oe))return;let L=E.fetchers.get(I);fe(I,kR(ye,L),{flushSync:$e});let F=new AbortController,V=Yo(t.history,$,F.signal,ye);if(Le){let ct=await Zn(Ce,$,V.signal);if(ct.type==="aborted")return;if(ct.type==="error"){let{error:Dt}=et($,ct);Se(I,O,Dt,{flushSync:$e});return}else if(ct.matches){if(Ce=ct.matches,oe=Is(Ce,$),w(oe))return}else{Se(I,O,xn(404,{pathname:$}),{flushSync:$e});return}}W.set(I,F);let N=te,ue=(await se("action",V,[oe],Ce))[0];if(V.signal.aborted){W.get(I)===F&&W.delete(I);return}if(f.v7_fetcherPersist&&pe.has(I)){if(_o(ue)||Vn(ue)){fe(I,xi(void 0));return}}else{if(_o(ue))if(W.delete(I),le>N){fe(I,xi(void 0));return}else return je.add(I),fe(I,ys(ye)),ge(V,ue,{fetcherSubmission:ye});if(Vn(ue)){Se(I,O,ue.error);return}}if(vo(ue))throw xn(400,{type:"defer-action"});let xe=E.navigation.location||E.location,_e=Yo(t.history,xe,F.signal),ke=s||a,Fe=E.navigation.state!=="idle"?co(ke,E.navigation.location,l):E.matches;Je(Fe,"Didn't find any matches after fetcher action");let Pe=++te;Ae.set(I,Pe);let nt=ys(ye,ue.data);E.fetchers.set(I,nt);let[gt,st]=ov(t.history,E,Fe,ye,xe,!1,f.v7_skipActionErrorRevalidation,Y,J,U,pe,q,je,ke,l,[oe.route.id,ue]);st.filter(ct=>ct.key!==I).forEach(ct=>{let Dt=ct.key,zo=E.fetchers.get(Dt),Ot=ys(void 0,zo?zo.data:void 0);E.fetchers.set(Dt,Ot),W.has(Dt)&&ze(Dt),ct.controller&&W.set(Dt,ct.controller)}),Ve({fetchers:new Map(E.fetchers)});let en=()=>st.forEach(ct=>ze(ct.key));F.signal.addEventListener("abort",en);let{loaderResults:ot,fetcherResults:De}=await we(E.matches,Fe,gt,st,_e);if(F.signal.aborted)return;F.signal.removeEventListener("abort",en),Ae.delete(I),W.delete(I),st.forEach(ct=>W.delete(ct.key));let Ne=pv([...ot,...De]);if(Ne){if(Ne.idx>=gt.length){let ct=st[Ne.idx-gt.length].key;je.add(ct)}return ge(_e,Ne.result)}let{loaderData:Be,errors:Tt}=uv(E,E.matches,gt,ot,void 0,st,De,me);if(E.fetchers.has(I)){let ct=xi(ue.data);E.fetchers.set(I,ct)}B(Pe),E.navigation.state==="loading"&&Pe>le?(Je(g,"Expected pending action"),R&&R.abort(),Ke(E.navigation.location,{matches:Fe,loaderData:Be,errors:Tt,fetchers:new Map(E.fetchers)})):(Ve({errors:Tt,loaderData:fv(E.loaderData,Be,Fe,Tt),fetchers:new Map(E.fetchers)}),Y=!1)}async function ie(I,O,$,oe,Ce,Le,$e,ye){let w=E.fetchers.get(I);fe(I,ys(ye,w?w.data:void 0),{flushSync:$e});let L=new AbortController,F=Yo(t.history,$,L.signal);if(Le){let ue=await Zn(Ce,$,F.signal);if(ue.type==="aborted")return;if(ue.type==="error"){let{error:xe}=et($,ue);Se(I,O,xe,{flushSync:$e});return}else if(ue.matches)Ce=ue.matches,oe=Is(Ce,$);else{Se(I,O,xn(404,{pathname:$}),{flushSync:$e});return}}W.set(I,L);let V=te,ne=(await se("loader",F,[oe],Ce))[0];if(vo(ne)&&(ne=await OS(ne,F.signal,!0)||ne),W.get(I)===L&&W.delete(I),!F.signal.aborted){if(pe.has(I)){fe(I,xi(void 0));return}if(_o(ne))if(le>V){fe(I,xi(void 0));return}else{je.add(I),await ge(F,ne);return}if(Vn(ne)){Se(I,O,ne.error);return}Je(!vo(ne),"Unhandled fetcher deferred data"),fe(I,xi(ne.data))}}async function ge(I,O,$){let{submission:oe,fetcherSubmission:Ce,replace:Le}=$===void 0?{}:$;O.response.headers.has("X-Remix-Revalidate")&&(Y=!0);let $e=O.response.headers.get("Location");Je($e,"Expected a Location header on the redirect Response"),$e=lv($e,new URL(I.url),l);let ye=gl(E.location,$e,{_isRedirect:!0});if(n){let ne=!1;if(O.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(tg.test($e)){const ue=t.history.createURL($e);ne=ue.origin!==e.location.origin||bl(ue.pathname,l)==null}if(ne){Le?e.location.replace($e):e.location.assign($e);return}}R=null;let w=Le===!0||O.response.headers.has("X-Remix-Replace")?$t.Replace:$t.Push,{formMethod:L,formAction:F,formEncType:V}=E.navigation;!oe&&!Ce&&L&&F&&V&&(oe=vv(E.navigation));let N=oe||Ce;if(_R.has(O.response.status)&&N&&yr(N.formMethod))await Ue(w,ye,{submission:It({},N,{formAction:$e}),preventScrollReset:S});else{let ne=Ed(ye,oe);await Ue(w,ye,{overrideNavigation:ne,fetcherSubmission:Ce,preventScrollReset:S})}}async function se(I,O,$,oe){try{let Ce=await AR(c,I,O,$,oe,o,i);return await Promise.all(Ce.map((Le,$e)=>{if(UR(Le)){let ye=Le.result;return{type:xt.redirect,response:PR(ye,O,$[$e].route.id,oe,l,f.v7_relativeSplatPath)}}return RR(Le)}))}catch(Ce){return $.map(()=>({type:xt.error,error:Ce}))}}async function we(I,O,$,oe,Ce){let[Le,...$e]=await Promise.all([$.length?se("loader",Ce,$,O):[],...oe.map(ye=>{if(ye.matches&&ye.match&&ye.controller){let w=Yo(t.history,ye.path,ye.controller.signal);return se("loader",w,[ye.match],ye.matches).then(L=>L[0])}else return Promise.resolve({type:xt.error,error:xn(404,{pathname:ye.path})})})]);return await Promise.all([gv(I,$,Le,Le.map(()=>Ce.signal),!1,E.loaderData),gv(I,oe.map(ye=>ye.match),$e,oe.map(ye=>ye.controller?ye.controller.signal:null),!0)]),{loaderResults:Le,fetcherResults:$e}}function Xe(){Y=!0,J.push(...Rt()),q.forEach((I,O)=>{W.has(O)&&(U.add(O),ze(O))})}function fe(I,O,$){$===void 0&&($={}),E.fetchers.set(I,O),Ve({fetchers:new Map(E.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Se(I,O,$,oe){oe===void 0&&(oe={});let Ce=Ta(E.matches,O);Ge(I),Ve({errors:{[Ce.route.id]:$},fetchers:new Map(E.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function tt(I){return f.v7_fetcherPersist&&(ce.set(I,(ce.get(I)||0)+1),pe.has(I)&&pe.delete(I)),E.fetchers.get(I)||yR}function Ge(I){let O=E.fetchers.get(I);W.has(I)&&!(O&&O.state==="loading"&&Ae.has(I))&&ze(I),q.delete(I),Ae.delete(I),je.delete(I),pe.delete(I),U.delete(I),E.fetchers.delete(I)}function Re(I){if(f.v7_fetcherPersist){let O=(ce.get(I)||0)-1;O<=0?(ce.delete(I),pe.add(I)):ce.set(I,O)}else Ge(I);Ve({fetchers:new Map(E.fetchers)})}function ze(I){let O=W.get(I);Je(O,"Expected fetch controller: "+I),O.abort(),W.delete(I)}function qe(I){for(let O of I){let $=tt(O),oe=xi($.data);E.fetchers.set(O,oe)}}function Et(){let I=[],O=!1;for(let $ of je){let oe=E.fetchers.get($);Je(oe,"Expected fetcher: "+$),oe.state==="loading"&&(je.delete($),I.push($),O=!0)}return qe(I),O}function B(I){let O=[];for(let[$,oe]of Ae)if(oe<I){let Ce=E.fetchers.get($);Je(Ce,"Expected fetcher: "+$),Ce.state==="loading"&&(ze($),Ae.delete($),O.push($))}return qe(O),O.length>0}function he(I,O){let $=E.blockers.get(I)||_s;return Ie.get(I)!==O&&Ie.set(I,O),$}function ee(I){E.blockers.delete(I),Ie.delete(I)}function re(I,O){let $=E.blockers.get(I)||_s;Je($.state==="unblocked"&&O.state==="blocked"||$.state==="blocked"&&O.state==="blocked"||$.state==="blocked"&&O.state==="proceeding"||$.state==="blocked"&&O.state==="unblocked"||$.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+$.state+" -> "+O.state);let oe=new Map(E.blockers);oe.set(I,O),Ve({blockers:oe})}function ve(I){let{currentLocation:O,nextLocation:$,historyAction:oe}=I;if(Ie.size===0)return;Ie.size>1&&Xa(!1,"A router only supports one blocker at a time");let Ce=Array.from(Ie.entries()),[Le,$e]=Ce[Ce.length-1],ye=E.blockers.get(Le);if(!(ye&&ye.state==="proceeding")&&$e({currentLocation:O,nextLocation:$,historyAction:oe}))return Le}function He(I){let O=xn(404,{pathname:I}),$=s||a,{matches:oe,route:Ce}=hv($);return Rt(),{notFoundMatches:oe,route:Ce,error:O}}function et(I,O){return{boundaryId:Ta(O.partialMatches).route.id,error:xn(400,{type:"route-discovery",pathname:I,message:O.error!=null&&"message"in O.error?O.error:String(O.error)})}}function Rt(I){let O=[];return me.forEach(($,oe)=>{(!I||I(oe))&&($.cancel(),O.push(oe),me.delete(oe))}),O}function Kt(I,O,$){if(m=I,x=O,h=$||null,!v&&E.navigation===Md){v=!0;let oe=kn(E.location,E.matches);oe!=null&&Ve({restoreScrollPosition:oe})}return()=>{m=null,x=null,h=null}}function at(I,O){return h&&h(I,O.map(oe=>qb(oe,E.loaderData)))||I.key}function dr(I,O){if(m&&x){let $=at(I,O);m[$]=x()}}function kn(I,O){if(m){let $=at(I,O),oe=m[$];if(typeof oe=="number")return oe}return null}function Qi(I,O,$){if(u){if(y.has($))return{active:!1,matches:I};if(I){if(Object.keys(I[0].params).length>0)return{active:!0,matches:qc(O,$,l,!0)}}else return{active:!0,matches:qc(O,$,l,!0)||[]}}return{active:!1,matches:null}}async function Zn(I,O,$){let oe=I;for(;;){let Ce=s==null,Le=s||a;try{await TR(u,O,oe,Le,o,i,We,$)}catch(w){return{type:"error",error:w,partialMatches:oe}}finally{Ce&&(a=[...a])}if($.aborted)return{type:"aborted"};let $e=co(Le,O,l);if($e)return Bo(O,y),{type:"success",matches:$e};let ye=qc(Le,O,l,!0);if(!ye||oe.length===ye.length&&oe.every((w,L)=>w.route.id===ye[L].route.id))return Bo(O,y),{type:"success",matches:null};oe=ye}}function Bo(I,O){if(O.size>=_){let $=O.values().next().value;O.delete($)}O.add(I)}function Fl(I){o={},s=vl(I,i,void 0,o)}function Ol(I,O){let $=s==null;US(I,O,s||a,o,i),$&&(a=[...a],Ve({}))}return C={get basename(){return l},get future(){return f},get state(){return E},get routes(){return a},get window(){return e},initialize:mt,subscribe:it,enableScrollRestoration:Kt,navigate:Te,fetch:G,revalidate:dt,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:tt,deleteFetcher:Re,dispose:D,getBlocker:he,deleteBlocker:ee,patchRoutes:Ol,_internalFetchControllers:W,_internalActiveDeferreds:me,_internalSetRoutes:Fl},C}function MR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Jh(t,e,n,r,i,o,a,s){let l,c;if(a){l=[];for(let f of e)if(l.push(f),f.route.id===a){c=f;break}}else l=e,c=e[e.length-1];let u=PS(i||".",RS(l,o),bl(t.pathname,n)||t.pathname,s==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!ng(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Fi([n,u.pathname])),Al(u)}function iv(t,e,n,r){if(!r||!MR(r))return{path:n};if(r.formMethod&&!FR(r.formMethod))return{path:n,error:xn(405,{method:r.formMethod})};let i=()=>({path:n,error:xn(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=t?o.toUpperCase():o.toLowerCase(),s=NS(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yr(a))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,_)=>{let[y,m]=_;return""+p+y+"="+m+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!yr(a))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}Je(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=ep(r.formData),c=r.formData;else if(r.body instanceof FormData)l=ep(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=cv(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=cv(l)}catch{return i()}let u={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(yr(u.formMethod))return{path:n,submission:u};let f=Ki(n);return e&&f.search&&ng(f.search)&&l.append("index",""),f.search="?"+l,{path:Al(f),submission:u}}function ER(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function ov(t,e,n,r,i,o,a,s,l,c,u,f,d,p,_,y){let m=y?Vn(y[1])?y[1].error:y[1].data:void 0,h=t.createURL(e.location),x=t.createURL(i),v=y&&Vn(y[1])?y[0]:void 0,M=v?ER(n,v):n,b=y?y[1].statusCode:void 0,A=a&&b&&b>=400,C=M.filter((g,S)=>{let{route:R}=g;if(R.lazy)return!0;if(R.loader==null)return!1;if(o)return typeof R.loader!="function"||R.loader.hydrate?!0:e.loaderData[R.id]===void 0&&(!e.errors||e.errors[R.id]===void 0);if(wR(e.loaderData,e.matches[S],g)||l.some(j=>j===g.route.id))return!0;let z=e.matches[S],H=g;return av(g,It({currentUrl:h,currentParams:z.params,nextUrl:x,nextParams:H.params},r,{actionResult:m,actionStatus:b,defaultShouldRevalidate:A?!1:s||h.pathname+h.search===x.pathname+x.search||h.search!==x.search||IS(z,H)}))}),E=[];return f.forEach((g,S)=>{if(o||!n.some(Z=>Z.route.id===g.routeId)||u.has(S))return;let R=co(p,g.path,_);if(!R){E.push({key:S,routeId:g.routeId,path:g.path,matches:null,match:null,controller:null});return}let z=e.fetchers.get(S),H=Is(R,g.path),j=!1;d.has(S)?j=!1:c.has(S)?(c.delete(S),j=!0):z&&z.state!=="idle"&&z.data===void 0?j=s:j=av(H,It({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:m,actionStatus:b,defaultShouldRevalidate:A?!1:s})),j&&E.push({key:S,routeId:g.routeId,path:g.path,matches:R,match:H,controller:new AbortController})}),[C,E]}function wR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function IS(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function av(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function TR(t,e,n,r,i,o,a,s){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=a.get(l);c||(c=t({path:e,matches:n,patch:(u,f)=>{s.aborted||US(u,f,r,i,o)}}),a.set(l,c)),c&&IR(c)&&await c}finally{a.delete(l)}}function US(t,e,n,r,i){if(t){var o;let a=r[t];Je(a,"No route found to patch children into: routeId = "+t);let s=vl(e,i,[t,"patch",String(((o=a.children)==null?void 0:o.length)||"0")],r);a.children?a.children.push(...s):a.children=s}else{let a=vl(e,i,["patch",String(n.length||"0")],r);n.push(...a)}}async function sv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Je(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";Xa(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Yb.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,It({},e(i),{lazy:void 0}))}function CR(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function AR(t,e,n,r,i,o,a,s){let l=r.reduce((f,d)=>f.add(d.route.id),new Set),c=new Set,u=await t({matches:i.map(f=>{let d=l.has(f.route.id);return It({},f,{shouldLoad:d,resolve:_=>(c.add(f.route.id),d?bR(e,n,f,o,a,_,s):Promise.resolve({type:xt.data,result:void 0}))})}),request:n,params:i[0].params,context:s});return i.forEach(f=>Je(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),u.filter((f,d)=>l.has(i[d].route.id))}async function bR(t,e,n,r,i,o,a){let s,l,c=u=>{let f,d=new Promise((y,m)=>f=m);l=()=>f(),e.signal.addEventListener("abort",l);let p=y=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):u({request:e,params:n.params,context:a},...y!==void 0?[y]:[]),_;return o?_=o(y=>p(y)):_=(async()=>{try{return{type:"data",result:await p()}}catch(y){return{type:"error",result:y}}})(),Promise.race([_,d])};try{let u=n.route[t];if(n.route.lazy)if(u){let f,[d]=await Promise.all([c(u).catch(p=>{f=p}),sv(n.route,i,r)]);if(f!==void 0)throw f;s=d}else if(await sv(n.route,i,r),u=n.route[t],u)s=await c(u);else if(t==="action"){let f=new URL(e.url),d=f.pathname+f.search;throw xn(405,{method:e.method,pathname:d,routeId:n.route.id})}else return{type:xt.data,result:void 0};else if(u)s=await c(u);else{let f=new URL(e.url),d=f.pathname+f.search;throw xn(404,{pathname:d})}Je(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:xt.error,result:u}}finally{l&&e.signal.removeEventListener("abort",l)}return s}async function RR(t){let{result:e,type:n}=t;if(FS(e)){let c;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(u){return{type:xt.error,error:u}}return n===xt.error?{type:xt.error,error:new Iu(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:xt.data,data:c,statusCode:e.status,headers:e.headers}}if(n===xt.error){if(mv(e)){var r;if(e.data instanceof Error){var i;return{type:xt.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new Iu(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:xt.error,error:e,statusCode:If(e)?e.status:void 0}}if(NR(e)){var o,a;return{type:xt.deferred,deferredData:e,statusCode:(o=e.init)==null?void 0:o.status,headers:((a=e.init)==null?void 0:a.headers)&&new Headers(e.init.headers)}}if(mv(e)){var s,l;return{type:xt.data,data:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}}return{type:xt.data,data:e}}function PR(t,e,n,r,i,o){let a=t.headers.get("Location");if(Je(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!tg.test(a)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);a=Jh(new URL(e.url),s,i,!0,a,o),t.headers.set("Location",a)}return t}function lv(t,e,n){if(tg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),o=bl(i.pathname,n)!=null;if(i.origin===e.origin&&o)return i.pathname+i.search+i.hash}return t}function Yo(t,e,n,r){let i=t.createURL(NS(e)).toString(),o={signal:n};if(r&&yr(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=ep(r.formData):o.body=r.formData}return new Request(i,o)}function ep(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function cv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function LR(t,e,n,r,i,o){let a={},s=null,l,c=!1,u={},f=r&&Vn(r[1])?r[1].error:void 0;return n.forEach((d,p)=>{let _=e[p].route.id;if(Je(!_o(d),"Cannot handle redirect results in processLoaderData"),Vn(d)){let y=d.error;f!==void 0&&(y=f,f=void 0),s=s||{};{let m=Ta(t,_);s[m.route.id]==null&&(s[m.route.id]=y)}a[_]=void 0,c||(c=!0,l=If(d.error)?d.error.status:500),d.headers&&(u[_]=d.headers)}else vo(d)?(i.set(_,d.deferredData),a[_]=d.deferredData.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(l=d.statusCode),d.headers&&(u[_]=d.headers)):(a[_]=d.data,d.statusCode&&d.statusCode!==200&&!c&&(l=d.statusCode),d.headers&&(u[_]=d.headers))}),f!==void 0&&r&&(s={[r[0]]:f},a[r[0]]=void 0),{loaderData:a,errors:s,statusCode:l||200,loaderHeaders:u}}function uv(t,e,n,r,i,o,a,s){let{loaderData:l,errors:c}=LR(e,n,r,i,s);for(let u=0;u<o.length;u++){let{key:f,match:d,controller:p}=o[u];Je(a!==void 0&&a[u]!==void 0,"Did not find corresponding fetcher result");let _=a[u];if(!(p&&p.signal.aborted))if(Vn(_)){let y=Ta(t.matches,d==null?void 0:d.route.id);c&&c[y.route.id]||(c=It({},c,{[y.route.id]:_.error})),t.fetchers.delete(f)}else if(_o(_))Je(!1,"Unhandled fetcher revalidation redirect");else if(vo(_))Je(!1,"Unhandled fetcher deferred data");else{let y=xi(_.data);t.fetchers.set(f,y)}}return{loaderData:l,errors:c}}function fv(t,e,n,r){let i=It({},e);for(let o of n){let a=o.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(i[a]=e[a]):t[a]!==void 0&&o.route.loader&&(i[a]=t[a]),r&&r.hasOwnProperty(a))break}return i}function dv(t){return t?Vn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ta(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function hv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function xn(t,e){let{pathname:n,routeId:r,method:i,type:o,message:a}=e===void 0?{}:e,s="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(s="Bad Request",o==="route-discovery"?l='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):t===403?(s="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(s="Not Found",l='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Iu(t||500,s,new Error(l),!0)}function pv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(_o(n))return{result:n,idx:e}}}function NS(t){let e=typeof t=="string"?Ki(t):t;return Al(It({},e,{hash:""}))}function DR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function IR(t){return typeof t=="object"&&t!=null&&"then"in t}function UR(t){return FS(t.result)&&vR.has(t.result.status)}function vo(t){return t.type===xt.deferred}function Vn(t){return t.type===xt.error}function _o(t){return(t&&t.type)===xt.redirect}function mv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function NR(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function FS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function FR(t){return gR.has(t.toLowerCase())}function yr(t){return pR.has(t.toLowerCase())}async function gv(t,e,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=e[a];if(!l)continue;let c=t.find(f=>f.route.id===l.route.id),u=c!=null&&!IS(c,l)&&(o&&o[l.route.id])!==void 0;if(vo(s)&&(i||u)){let f=r[a];Je(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await OS(s,f,i).then(d=>{d&&(n[a]=d||n[a])})}}}async function OS(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:xt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:xt.error,error:i}}return{type:xt.data,data:t.deferredData.data}}}function ng(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Is(t,e){let n=typeof e=="string"?Ki(e).search:e.search;if(t[t.length-1].route.index&&ng(n||""))return t[t.length-1];let r=bS(t);return r[r.length-1]}function vv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:o,json:a}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:e,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Ed(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function OR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ys(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function kR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function xi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function BR(t,e){try{let n=t.sessionStorage.getItem(DS);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&e.set(i,new Set(o||[]))}}catch{}}function zR(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(DS,JSON.stringify(n))}catch(r){Xa(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uu.apply(this,arguments)}const Uf=k.createContext(null),kS=k.createContext(null),Nf=k.createContext(null),rg=k.createContext(null),ko=k.createContext({outlet:null,matches:[],isDataRoute:!1}),BS=k.createContext(null);function Ff(){return k.useContext(rg)!=null}function zS(){return Ff()||Je(!1),k.useContext(rg).location}function HS(t){k.useContext(Nf).static||k.useLayoutEffect(t)}function VS(){let{isDataRoute:t}=k.useContext(ko);return t?eP():HR()}function HR(){Ff()||Je(!1);let t=k.useContext(Uf),{basename:e,future:n,navigator:r}=k.useContext(Nf),{matches:i}=k.useContext(ko),{pathname:o}=zS(),a=JSON.stringify(RS(i,n.v7_relativeSplatPath)),s=k.useRef(!1);return HS(()=>{s.current=!0}),k.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=PS(c,JSON.parse(a),o,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Fi([e,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[e,r,a,o,t])}const VR=k.createContext(null);function GR(t){let e=k.useContext(ko).outlet;return e&&k.createElement(VR.Provider,{value:t},e)}function WR(t,e,n,r){Ff()||Je(!1);let{navigator:i}=k.useContext(Nf),{matches:o}=k.useContext(ko),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=zS(),u;u=c;let f=u.pathname||"/",d=f;if(l!=="/"){let y=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let p=co(t,{pathname:d});return KR(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Fi([l,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Fi([l,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r)}function $R(){let t=JR(),e=If(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const jR=k.createElement($R,null);class XR extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(ko.Provider,{value:this.props.routeContext},k.createElement(BS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YR(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(ko.Provider,{value:e},r)}function KR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Je(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:p}=n,_=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,d)=>{let p,_=!1,y=null,m=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||jR,l&&(c<0&&d===0?(_=!0,m=null):c===d&&(_=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,d+1)),x=()=>{let v;return p?v=y:_?v=m:f.route.Component?v=k.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=u,k.createElement(YR,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?k.createElement(XR,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var GS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GS||{}),Nu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nu||{});function qR(t){let e=k.useContext(Uf);return e||Je(!1),e}function ZR(t){let e=k.useContext(kS);return e||Je(!1),e}function QR(t){let e=k.useContext(ko);return e||Je(!1),e}function WS(t){let e=QR(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function JR(){var t;let e=k.useContext(BS),n=ZR(Nu.UseRouteError),r=WS(Nu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function eP(){let{router:t}=qR(GS.UseNavigateStable),e=WS(Nu.UseNavigateStable),n=k.useRef(!1);return HS(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Uu({fromRouteId:e},o)))},[t,e])}function tP(t){return GR(t.context)}function $S(t){Je(!1)}function nP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:a=!1,future:s}=t;Ff()&&Je(!1);let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:o,static:a,future:Uu({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:f="",hash:d="",state:p=null,key:_="default"}=r,y=k.useMemo(()=>{let m=bl(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:_},navigationType:i}},[l,u,f,d,p,_,i]);return y==null?null:k.createElement(Nf.Provider,{value:c},k.createElement(rg.Provider,{children:n,value:y}))}new Promise(()=>{});function tp(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,tp(r.props.children,o));return}r.type!==$S&&Je(!1),!r.props.index||!r.props.children||Je(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=tp(r.props.children,o)),n.push(a)}),n}function rP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:k.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}const iP="6";try{window.__reactRouterVersion=iP}catch{}function oP(t,e){return SR({basename:void 0,future:Fu({},void 0,{v7_prependBasename:!0}),history:$b({window:void 0}),hydrationData:aP(),routes:t,mapRouteProperties:rP,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function aP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Fu({},e,{errors:sP(e.errors)})),e}function sP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Iu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const lP=k.createContext({isTransitioning:!1}),cP=k.createContext(new Map),uP="startTransition",_v=Jd[uP],fP="flushSync",yv=nw[fP];function dP(t){_v?_v(t):t()}function xs(t){yv?yv(t):t()}class hP{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function pP(t){let{fallbackElement:e,router:n,future:r}=t,[i,o]=k.useState(n.state),[a,s]=k.useState(),[l,c]=k.useState({isTransitioning:!1}),[u,f]=k.useState(),[d,p]=k.useState(),[_,y]=k.useState(),m=k.useRef(new Map),{v7_startTransition:h}=r||{},x=k.useCallback(E=>{h?dP(E):E()},[h]),v=k.useCallback((E,g)=>{let{deletedFetchers:S,unstable_flushSync:R,unstable_viewTransitionOpts:z}=g;S.forEach(j=>m.current.delete(j)),E.fetchers.forEach((j,Z)=>{j.data!==void 0&&m.current.set(Z,j.data)});let H=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!z||H){R?xs(()=>o(E)):x(()=>o(E));return}if(R){xs(()=>{d&&(u&&u.resolve(),d.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:z.currentLocation,nextLocation:z.nextLocation})});let j=n.window.document.startViewTransition(()=>{xs(()=>o(E))});j.finished.finally(()=>{xs(()=>{f(void 0),p(void 0),s(void 0),c({isTransitioning:!1})})}),xs(()=>p(j));return}d?(u&&u.resolve(),d.skipTransition(),y({state:E,currentLocation:z.currentLocation,nextLocation:z.nextLocation})):(s(E),c({isTransitioning:!0,flushSync:!1,currentLocation:z.currentLocation,nextLocation:z.nextLocation}))},[n.window,d,u,m,x]);k.useLayoutEffect(()=>n.subscribe(v),[n,v]),k.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new hP)},[l]),k.useEffect(()=>{if(u&&a&&n.window){let E=a,g=u.promise,S=n.window.document.startViewTransition(async()=>{x(()=>o(E)),await g});S.finished.finally(()=>{f(void 0),p(void 0),s(void 0),c({isTransitioning:!1})}),p(S)}},[x,a,u,n.window]),k.useEffect(()=>{u&&a&&i.location.key===a.location.key&&u.resolve()},[u,d,i.location,a]),k.useEffect(()=>{!l.isTransitioning&&_&&(s(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),y(void 0))},[l.isTransitioning,_]),k.useEffect(()=>{},[]);let M=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,g,S)=>n.navigate(E,{state:g,preventScrollReset:S==null?void 0:S.preventScrollReset}),replace:(E,g,S)=>n.navigate(E,{replace:!0,state:g,preventScrollReset:S==null?void 0:S.preventScrollReset})}),[n]),b=n.basename||"/",A=k.useMemo(()=>({router:n,navigator:M,static:!1,basename:b}),[n,M,b]),C=k.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return k.createElement(k.Fragment,null,k.createElement(Uf.Provider,{value:A},k.createElement(kS.Provider,{value:i},k.createElement(cP.Provider,{value:m.current},k.createElement(lP.Provider,{value:l},k.createElement(nP,{basename:b,location:i.location,navigationType:i.historyAction,navigator:M,future:C},i.initialized||n.future.v7_partialHydration?k.createElement(mP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const mP=k.memo(gP);function gP(t){let{routes:e,future:n,state:r}=t;return WR(e,void 0,r,n)}var xv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xv||(xv={}));var Sv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sv||(Sv={}));const vP=VA(Ee.jsx("path",{d:"M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"}),"KeyboardReturn");function _P(t){return Ee.jsx(Ab,{endIcon:t.endIcon,startIcon:t.startIcon,type:t.type??"button",sx:{color:"white",backgroundColor:"#444",py:1,px:2,...t.sx},variant:t.variant??"contained",onClick:()=>t.action&&t.action(),children:t.text})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ig="168",yP=0,Mv=1,xP=2,jS=1,SP=2,Kr=3,Vi=0,In=1,Qr=2,Oi=0,Na=1,Ev=2,wv=3,Tv=4,MP=5,uo=100,EP=101,wP=102,TP=103,CP=104,AP=200,bP=201,RP=202,PP=203,np=204,rp=205,LP=206,DP=207,IP=208,UP=209,NP=210,FP=211,OP=212,kP=213,BP=214,zP=0,HP=1,VP=2,Ou=3,GP=4,WP=5,$P=6,jP=7,XS=0,XP=1,YP=2,ki=0,KP=1,qP=2,ZP=3,QP=4,JP=5,e2=6,t2=7,YS=300,Ya=301,Ka=302,ip=303,op=304,Of=306,ap=1e3,yo=1001,sp=1002,ar=1003,n2=1004,cc=1005,Sr=1006,wd=1007,xo=1008,ci=1009,KS=1010,qS=1011,_l=1012,og=1013,Do=1014,ti=1015,Rl=1016,ag=1017,sg=1018,qa=1020,ZS=35902,QS=1021,JS=1022,Mr=1023,eM=1024,tM=1025,Fa=1026,Za=1027,nM=1028,lg=1029,rM=1030,cg=1031,ug=1033,Zc=33776,Qc=33777,Jc=33778,eu=33779,lp=35840,cp=35841,up=35842,fp=35843,dp=36196,hp=37492,pp=37496,mp=37808,gp=37809,vp=37810,_p=37811,yp=37812,xp=37813,Sp=37814,Mp=37815,Ep=37816,wp=37817,Tp=37818,Cp=37819,Ap=37820,bp=37821,tu=36492,Rp=36494,Pp=36495,iM=36283,Lp=36284,Dp=36285,Ip=36286,r2=3200,i2=3201,o2=0,a2=1,Ti="",Pr="srgb",qi="srgb-linear",fg="display-p3",kf="display-p3-linear",ku="linear",At="srgb",Bu="rec709",zu="p3",Ko=7680,Cv=519,s2=512,l2=513,c2=514,oM=515,u2=516,f2=517,d2=518,h2=519,Av=35044,bv="300 es",ni=2e3,Hu=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,Up=180/Math.PI;function Pl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function bn(t,e,n){return Math.max(e,Math.min(n,t))}function p2(t,e){return(t%e+e)%e}function Cd(t,e,n){return(1-n)*t+n*e}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*r-a*i+e.x,this.y=o*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,r,i,o,a,s,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,c)}set(e,n,r,i,o,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],p=r[5],_=r[8],y=i[0],m=i[3],h=i[6],x=i[1],v=i[4],M=i[7],b=i[2],A=i[5],C=i[8];return o[0]=a*y+s*x+l*b,o[3]=a*m+s*v+l*A,o[6]=a*h+s*M+l*C,o[1]=c*y+u*x+f*b,o[4]=c*m+u*v+f*A,o[7]=c*h+u*M+f*C,o[2]=d*y+p*x+_*b,o[5]=d*m+p*v+_*A,o[8]=d*h+p*M+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*s*c-r*o*u+r*s*l+i*o*c-i*a*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,d=s*l-u*o,p=c*o-a*l,_=n*f+r*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(i*c-u*r)*y,e[2]=(s*r-i*a)*y,e[3]=d*y,e[4]=(u*n-i*l)*y,e[5]=(i*o-s*n)*y,e[6]=p*y,e[7]=(r*l-c*n)*y,e[8]=(a*n-r*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Ad.makeScale(e,n)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new Qe;function aM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function m2(){const t=Vu("canvas");return t.style.display="block",t}const Rv={};function $s(t){t in Rv||(Rv[t]=!0,console.warn(t))}function g2(t,e,n){return new Promise(function(r,i){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:r()}}setTimeout(o,n)})}const Pv=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lv=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[qi]:{transfer:ku,primaries:Bu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Pr]:{transfer:At,primaries:Bu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[kf]:{transfer:ku,primaries:zu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Pv)},[fg]:{transfer:At,primaries:zu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Pv).convertLinearToSRGB()}},v2=new Set([qi,kf]),ht={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!v2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=Ms[e].toReference,i=Ms[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ms[t].primaries},getTransfer:function(t){return t===Ti?ku:Ms[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ms[e].luminanceCoefficients)}};function Oa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qo;class _2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qo===void 0&&(qo=Vu("canvas")),qo.width=e.width,qo.height=e.height;const r=qo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=Oa(o[a]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oa(n[r]/255)*255):n[r]=Oa(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y2=0;class sM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y2++}),this.uuid=Pl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?o.push(Rd(i[a].image)):o.push(Rd(i[a]))}else o=Rd(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function Rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x2=0;class Un extends is{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=yo,i=yo,o=Sr,a=xo,s=Mr,l=ci,c=Un.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=Pl(),this.name="",this.source=new sM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==YS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=YS;Un.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,i=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i+a[12]*o,this.y=a[1]*n+a[5]*r+a[9]*i+a[13]*o,this.z=a[2]*n+a[6]*r+a[10]*i+a[14]*o,this.w=a[3]*n+a[7]*r+a[11]*i+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,b=(h+1)/2,A=(u+d)/4,C=(f+y)/4,E=(_+m)/4;return v>M&&v>b?v<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(v),i=A/r,o=C/r):M>b?M<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),r=A/i,o=E/i):b<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(b),r=C/o,i=E/o),this.set(r,i,o,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S2 extends is{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new Un(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Io extends S2{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class lM extends Un{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ar,this.minFilter=ar,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M2 extends Un{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ar,this.minFilter=ar,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,a,s){let l=r[i+0],c=r[i+1],u=r[i+2],f=r[i+3];const d=o[a+0],p=o[a+1],_=o[a+2],y=o[a+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==_){let m=1-s;const h=l*d+c*p+u*_+f*y,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,h*x);m=Math.sin(m*A)/b,s=Math.sin(s*A)/b}const M=s*x;if(l=l*m+d*M,c=c*m+p*M,u=u*m+_*M,f=f*m+y*M,m===1-s){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,o,a){const s=r[i],l=r[i+1],c=r[i+2],u=r[i+3],f=o[a],d=o[a+1],p=o[a+2],_=o[a+3];return e[n]=s*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-s*p,e[n+2]=c*_+u*p+s*d-l*f,e[n+3]=u*_-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(i/2),f=s(o/2),d=l(r/2),p=l(i/2),_=l(o/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],a=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=r+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(a-i)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(o+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(o-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(a-i)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,a=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+a*s+i*c-o*l,this._y=i*u+a*l+o*s-r*c,this._z=o*u+a*c+r*l-i*s,this._w=a*u-r*s-i*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,a=this._w;let s=a*e._w+r*e._x+i*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=r*f+this._x*d,this._y=i*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,a=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*a,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*a,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*a,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*i-s*r),u=2*(s*n-o*i),f=2*(o*r-a*n);return this.x=n+l*c+a*f-s*u,this.y=r+l*u+s*c-o*f,this.z=i+l*f+o*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=i*l-o*s,this.y=o*a-r*l,this.z=r*s-i*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pd=new K,Dv=new Ll;class Dl{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(pr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(pr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=pr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,pr):pr.fromBufferAttribute(o,a),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const i=e.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),fc.subVectors(this.max,Es),Zo.subVectors(e.a,Es),Qo.subVectors(e.b,Es),Jo.subVectors(e.c,Es),pi.subVectors(Qo,Zo),mi.subVectors(Jo,Qo),Ji.subVectors(Zo,Jo);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ji.z,Ji.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ji.z,0,-Ji.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ji.y,Ji.x,0];return!Ld(n,Zo,Qo,Jo,fc)||(n=[1,0,0,0,1,0,0,0,1],!Ld(n,Zo,Qo,Jo,fc))?!1:(dc.crossVectors(pi,mi),n=[dc.x,dc.y,dc.z],Ld(n,Zo,Qo,Jo,fc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wr=[new K,new K,new K,new K,new K,new K,new K,new K],pr=new K,uc=new Dl,Zo=new K,Qo=new K,Jo=new K,pi=new K,mi=new K,Ji=new K,Es=new K,fc=new K,dc=new K,eo=new K;function Ld(t,e,n,r,i){for(let o=0,a=t.length-3;o<=a;o+=3){eo.fromArray(t,o);const s=i.x*Math.abs(eo.x)+i.y*Math.abs(eo.y)+i.z*Math.abs(eo.z),l=e.dot(eo),c=n.dot(eo),u=r.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const E2=new Dl,ws=new K,Dd=new K;class Bf{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):E2.setFromPoints(e).getCenter(r);let i=0;for(let o=0,a=e.length;o<a;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(ws,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Dd)),this.expandByPoint(ws.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $r=new K,Id=new K,hc=new K,gi=new K,Ud=new K,pc=new K,Nd=new K;class cM{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$r)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$r.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($r.copy(this.origin).addScaledVector(this.direction,n),$r.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Id.copy(e).add(n).multiplyScalar(.5),hc.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(Id);const o=e.distanceTo(n)*.5,a=-this.direction.dot(hc),s=gi.dot(this.direction),l=-gi.dot(hc),c=gi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-s,d=a*s-l,_=o*u,f>=0)if(d>=-_)if(d<=_){const y=1/u;f*=y,d*=y,p=f*(f+a*d+2*s)+d*(a*f+d+2*l)+c}else d=o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*o+s)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(f=Math.max(0,-(a*o+s)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c);else d=a>0?-o:o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Id).addScaledVector(hc,d),p}intersectSphere(e,n){$r.subVectors(e.center,this.origin);const r=$r.dot(this.direction),i=$r.dot($r)-r*r,o=e.radius*e.radius;if(i>o)return null;const a=Math.sqrt(o-i),s=r-a,l=r+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),r>a||o>i||((o>r||isNaN(r))&&(r=o),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,$r)!==null}intersectTriangle(e,n,r,i,o){Ud.subVectors(n,e),pc.subVectors(r,e),Nd.crossVectors(Ud,pc);let a=this.direction.dot(Nd),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;gi.subVectors(this.origin,e);const l=s*this.direction.dot(pc.crossVectors(gi,pc));if(l<0)return null;const c=s*this.direction.dot(Ud.cross(gi));if(c<0||l+c>a)return null;const u=-s*gi.dot(Nd);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,i,o,a,s,l,c,u,f,d,p,_,y,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,c,u,f,d,p,_,y,m)}set(e,n,r,i,o,a,s,l,c,u,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=r,h[12]=i,h[1]=o,h[5]=a,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/ea.setFromMatrixColumn(e,0).length(),o=1/ea.setFromMatrixColumn(e,1).length(),a=1/ea.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=a*u,p=a*f,_=s*u,y=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-s*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,y=c*f;n[0]=d+y*s,n[4]=_*s-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-s,n[2]=p*s-_,n[6]=y+d*s,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,y=c*f;n[0]=d-y*s,n[4]=-a*f,n[8]=_+p*s,n[1]=p+_*s,n[5]=a*u,n[9]=y-d*s,n[2]=-a*c,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=s*u,y=s*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=s*l,y=s*c;n[0]=l*u,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=s*l,y=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=s*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w2,e,T2)}lookAt(e,n,r){const i=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),vi.crossVectors(r,Bn),vi.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),vi.crossVectors(r,Bn)),vi.normalize(),mc.crossVectors(Bn,vi),i[0]=vi.x,i[4]=mc.x,i[8]=Bn.x,i[1]=vi.y,i[5]=mc.y,i[9]=Bn.y,i[2]=vi.z,i[6]=mc.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],p=r[13],_=r[2],y=r[6],m=r[10],h=r[14],x=r[3],v=r[7],M=r[11],b=r[15],A=i[0],C=i[4],E=i[8],g=i[12],S=i[1],R=i[5],z=i[9],H=i[13],j=i[2],Z=i[6],Y=i[10],J=i[14],U=i[3],W=i[7],te=i[11],le=i[15];return o[0]=a*A+s*S+l*j+c*U,o[4]=a*C+s*R+l*Z+c*W,o[8]=a*E+s*z+l*Y+c*te,o[12]=a*g+s*H+l*J+c*le,o[1]=u*A+f*S+d*j+p*U,o[5]=u*C+f*R+d*Z+p*W,o[9]=u*E+f*z+d*Y+p*te,o[13]=u*g+f*H+d*J+p*le,o[2]=_*A+y*S+m*j+h*U,o[6]=_*C+y*R+m*Z+h*W,o[10]=_*E+y*z+m*Y+h*te,o[14]=_*g+y*H+m*J+h*le,o[3]=x*A+v*S+M*j+b*U,o[7]=x*C+v*R+M*Z+b*W,o[11]=x*E+v*z+M*Y+b*te,o[15]=x*g+v*H+M*J+b*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+o*l*f-i*c*f-o*s*d+r*c*d+i*s*p-r*l*p)+y*(+n*l*p-n*c*d+o*a*d-i*a*p+i*c*u-o*l*u)+m*(+n*c*f-n*s*p-o*a*f+r*a*p+o*s*u-r*c*u)+h*(-i*s*u-n*l*f+n*s*d+i*a*f-r*a*d+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],x=f*m*c-y*d*c+y*l*p-s*m*p-f*l*h+s*d*h,v=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,M=u*y*c-_*f*c+_*s*p-a*y*p-u*s*h+a*f*h,b=_*f*l-u*y*l-_*s*d+a*y*d+u*s*m-a*f*m,A=n*x+r*v+i*M+o*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(y*d*o-f*m*o-y*i*p+r*m*p+f*i*h-r*d*h)*C,e[2]=(s*m*o-y*l*o+y*i*c-r*m*c-s*i*h+r*l*h)*C,e[3]=(f*l*o-s*d*o-f*i*c+r*d*c+s*i*p-r*l*p)*C,e[4]=v*C,e[5]=(u*m*o-_*d*o+_*i*p-n*m*p-u*i*h+n*d*h)*C,e[6]=(_*l*o-a*m*o-_*i*c+n*m*c+a*i*h-n*l*h)*C,e[7]=(a*d*o-u*l*o+u*i*c-n*d*c-a*i*p+n*l*p)*C,e[8]=M*C,e[9]=(_*f*o-u*y*o-_*r*p+n*y*p+u*r*h-n*f*h)*C,e[10]=(a*y*o-_*s*o+_*r*c-n*y*c-a*r*h+n*s*h)*C,e[11]=(u*s*o-a*f*o-u*r*c+n*f*c+a*r*p-n*s*p)*C,e[12]=b*C,e[13]=(u*y*i-_*f*i+_*r*d-n*y*d-u*r*m+n*f*m)*C,e[14]=(_*s*i-a*y*i-_*r*l+n*y*l+a*r*m-n*s*m)*C,e[15]=(a*f*i-u*s*i+u*r*l-n*f*l-a*r*d+n*s*d)*C,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+r,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+r,u*l-i*a,0,c*l-i*s,u*l+i*a,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,a){return this.set(1,r,o,0,e,1,a,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,c=o+o,u=a+a,f=s+s,d=o*c,p=o*u,_=o*f,y=a*u,m=a*f,h=s*f,x=l*c,v=l*u,M=l*f,b=r.x,A=r.y,C=r.z;return i[0]=(1-(y+h))*b,i[1]=(p+M)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(d+h))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(_+v)*C,i[9]=(m-x)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=ea.set(i[0],i[1],i[2]).length();const a=ea.set(i[4],i[5],i[6]).length(),s=ea.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],mr.copy(this);const c=1/o,u=1/a,f=1/s;return mr.elements[0]*=c,mr.elements[1]*=c,mr.elements[2]*=c,mr.elements[4]*=u,mr.elements[5]*=u,mr.elements[6]*=u,mr.elements[8]*=f,mr.elements[9]*=f,mr.elements[10]*=f,n.setFromRotationMatrix(mr),r.x=o,r.y=a,r.z=s,this}makePerspective(e,n,r,i,o,a,s=ni){const l=this.elements,c=2*o/(n-e),u=2*o/(r-i),f=(n+e)/(n-e),d=(r+i)/(r-i);let p,_;if(s===ni)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(s===Hu)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,a,s=ni){const l=this.elements,c=1/(n-e),u=1/(r-i),f=1/(a-o),d=(n+e)*c,p=(r+i)*u;let _,y;if(s===ni)_=(a+o)*f,y=-2*f;else if(s===Hu)_=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ea=new K,mr=new Yt,w2=new K(0,0,0),T2=new K(1,1,1),vi=new K,mc=new K,Bn=new K,Iv=new Yt,Uv=new Ll;class ui{constructor(e=0,n=0,r=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(bn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class uM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C2=0;const Nv=new K,ta=new Ll,jr=new Yt,gc=new K,Ts=new K,A2=new K,b2=new Ll,Fv=new K(1,0,0),Ov=new K(0,1,0),kv=new K(0,0,1),Bv={type:"added"},R2={type:"removed"},na={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Nn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C2++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new K,n=new ui,r=new Ll,i=new K(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Qe}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ta.setFromAxisAngle(e,n),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,n){return ta.setFromAxisAngle(e,n),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Ov,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,n){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Ov,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gc.copy(e):gc.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jr.lookAt(Ts,gc,this.up):jr.lookAt(gc,Ts,this.up),this.quaternion.setFromRotationMatrix(jr),i&&(jr.extractRotation(i.matrixWorld),ta.setFromRotationMatrix(jr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bv),na.child=e,this.dispatchEvent(na),na.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R2),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bv),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,A2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,b2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));i.material=s}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=i,r;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Nn.DEFAULT_UP=new K(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gr=new K,Xr=new K,Od=new K,Yr=new K,ra=new K,ia=new K,zv=new K,kd=new K,Bd=new K,zd=new K;class Or{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),gr.subVectors(e,n),i.cross(gr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){gr.subVectors(i,n),Xr.subVectors(r,n),Od.subVectors(e,n);const a=gr.dot(gr),s=gr.dot(Xr),l=gr.dot(Od),c=Xr.dot(Xr),u=Xr.dot(Od),f=a*c-s*s;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(c*l-s*u)*d,_=(a*u-s*l)*d;return o.set(1-p-_,_,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,n,r,i,o,a,s,l){return this.getBarycoord(e,n,r,i,Yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Yr.x),l.addScaledVector(a,Yr.y),l.addScaledVector(s,Yr.z),l)}static isFrontFacing(e,n,r,i){return gr.subVectors(r,n),Xr.subVectors(e,n),gr.cross(Xr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),gr.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Or.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,o){return Or.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return Or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let a,s;ra.subVectors(i,r),ia.subVectors(o,r),kd.subVectors(e,r);const l=ra.dot(kd),c=ia.dot(kd);if(l<=0&&c<=0)return n.copy(r);Bd.subVectors(e,i);const u=ra.dot(Bd),f=ia.dot(Bd);if(u>=0&&f<=u)return n.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(r).addScaledVector(ra,a);zd.subVectors(e,o);const p=ra.dot(zd),_=ia.dot(zd);if(_>=0&&p<=_)return n.copy(o);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(r).addScaledVector(ia,s);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return zv.subVectors(o,i),s=(f-u)/(f-u+(p-_)),n.copy(i).addScaledVector(zv,s);const h=1/(m+y+d);return a=y*h,s=d*h,n.copy(r).addScaledVector(ra,a).addScaledVector(ia,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Hd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=ht.workingColorSpace){return this.r=e,this.g=n,this.b=r,ht.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=ht.workingColorSpace){if(e=p2(e,1),n=bn(n,0,1),r=bn(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,a=2*r-o;this.r=Hd(a,o,e+1/3),this.g=Hd(a,o,e),this.b=Hd(a,o,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,n=Pr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pr){const r=fM[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=bd(e.r),this.g=bd(e.g),this.b=bd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pr){return ht.fromWorkingColorSpace(mn.copy(this),e),Math.round(bn(mn.r*255,0,255))*65536+Math.round(bn(mn.g*255,0,255))*256+Math.round(bn(mn.b*255,0,255))}getHexString(e=Pr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,i=mn.g,o=mn.b,a=Math.max(r,i,o),s=Math.min(r,i,o);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case r:l=(i-o)/f+(i<o?6:0);break;case i:l=(o-r)/f+2;break;case o:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Pr){ht.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,i=mn.b;return e!==Pr?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(vc);const r=Cd(_i.h,vc.h,n),i=Cd(_i.s,vc.s,n),o=Cd(_i.l,vc.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new vt;vt.NAMES=fM;let P2=0;class Il extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=Na,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=rp,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ou,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(r.blending=this.blending),this.side!==Vi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==np&&(r.blendSrc=this.blendSrc),this.blendDst!==rp&&(r.blendDst=this.blendDst),this.blendEquation!==uo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ou&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=i(e.textures),a=i(e.images);o.length>0&&(r.textures=o),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dM extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=XS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new K,_c=new pt;class Vr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Av,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_c.fromBufferAttribute(this,n),_c.applyMatrix3(e),this.setXY(n,_c.x,_c.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),i=Cn(i,this.array),o=Cn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Av&&(e.usage=this.usage),e}}class hM extends Vr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class pM extends Vr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class wo extends Vr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let L2=0;const Jn=new Yt,Vd=new Nn,oa=new K,zn=new Dl,Cs=new Dl,tn=new K;class Zi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aM(e)?pM:hM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Qe().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new wo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];Cs.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(zn.min,Cs.min),zn.expandByPoint(tn),tn.addVectors(zn.max,Cs.max),zn.expandByPoint(tn)):(zn.expandByPoint(Cs.min),zn.expandByPoint(Cs.max))}zn.getCenter(r);let i=0;for(let o=0,a=e.count;o<a;o++)tn.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(tn));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)tn.fromBufferAttribute(s,c),l&&(oa.fromBufferAttribute(e,c),tn.add(oa)),i=Math.max(i,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vr(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let E=0;E<r.count;E++)s[E]=new K,l[E]=new K;const c=new K,u=new K,f=new K,d=new pt,p=new pt,_=new pt,y=new K,m=new K;function h(E,g,S){c.fromBufferAttribute(r,E),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,S),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,g),_.fromBufferAttribute(o,S),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),s[E].add(y),s[g].add(y),s[S].add(y),l[E].add(m),l[g].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let E=0,g=x.length;E<g;++E){const S=x[E],R=S.start,z=S.count;for(let H=R,j=R+z;H<j;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new K,M=new K,b=new K,A=new K;function C(E){b.fromBufferAttribute(i,E),A.copy(b);const g=s[E];v.copy(g),v.sub(b.multiplyScalar(b.dot(g))).normalize(),M.crossVectors(A,g);const R=M.dot(l[E])<0?-1:1;a.setXYZW(E,v.x,v.y,v.z,R)}for(let E=0,g=x.length;E<g;++E){const S=x[E],R=S.start,z=S.count;for(let H=R,j=R+z;H<j;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);const i=new K,o=new K,a=new K,s=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),u.subVectors(a,o),f.subVectors(i,o),u.cross(f),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,m),s.add(u),l.add(u),c.add(u),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)i.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,o),f.subVectors(i,o),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){s.isInterleavedBufferAttribute?p=l[y]*s.data.stride+s.offset:p=l[y]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Vr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,r);n.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hv=new Yt,to=new cM,yc=new Bf,Vv=new K,aa=new K,sa=new K,la=new K,Gd=new K,xc=new K,Sc=new pt,Mc=new pt,Ec=new pt,Gv=new K,Wv=new K,$v=new K,wc=new K,Tc=new K;class ri extends Nn{constructor(e=new Zi,n=new dM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,a=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(o&&s){xc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=s[l],f=o[l];u!==0&&(Gd.fromBufferAttribute(f,e),a?xc.addScaledVector(Gd,u):xc.addScaledVector(Gd.sub(n),u))}n.add(xc)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(o),to.copy(e.ray).recast(e.near),!(yc.containsPoint(to.origin)===!1&&(to.intersectSphere(yc,Vv)===null||to.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Hv.copy(o).invert(),to.copy(e.ray).applyMatrix4(Hv),!(r.boundingBox!==null&&to.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,to)))}_computeIntersections(e,n,r){let i;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,b=v;M<b;M+=3){const A=s.getX(M),C=s.getX(M+1),E=s.getX(M+2);i=Cc(this,h,e,r,c,u,f,A,C,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const x=s.getX(m),v=s.getX(m+1),M=s.getX(m+2);i=Cc(this,a,e,r,c,u,f,x,v,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,b=v;M<b;M+=3){const A=M,C=M+1,E=M+2;i=Cc(this,h,e,r,c,u,f,A,C,E),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const x=m,v=m+1,M=m+2;i=Cc(this,a,e,r,c,u,f,x,v,M),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function D2(t,e,n,r,i,o,a,s){let l;if(e.side===In?l=r.intersectTriangle(a,o,i,!0,s):l=r.intersectTriangle(i,o,a,e.side===Vi,s),l===null)return null;Tc.copy(s),Tc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Tc);return c<n.near||c>n.far?null:{distance:c,point:Tc.clone(),object:t}}function Cc(t,e,n,r,i,o,a,s,l,c){t.getVertexPosition(s,aa),t.getVertexPosition(l,sa),t.getVertexPosition(c,la);const u=D2(t,e,n,r,aa,sa,la,wc);if(u){i&&(Sc.fromBufferAttribute(i,s),Mc.fromBufferAttribute(i,l),Ec.fromBufferAttribute(i,c),u.uv=Or.getInterpolation(wc,aa,sa,la,Sc,Mc,Ec,new pt)),o&&(Sc.fromBufferAttribute(o,s),Mc.fromBufferAttribute(o,l),Ec.fromBufferAttribute(o,c),u.uv1=Or.getInterpolation(wc,aa,sa,la,Sc,Mc,Ec,new pt)),a&&(Gv.fromBufferAttribute(a,s),Wv.fromBufferAttribute(a,l),$v.fromBufferAttribute(a,c),u.normal=Or.getInterpolation(wc,aa,sa,la,Gv,Wv,$v,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new K,materialIndex:0};Or.getNormal(aa,sa,la,f.normal),u.face=f}return u}class Ul extends Zi{constructor(e=1,n=1,r=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:a};const s=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,r,n,e,a,o,0),_("z","y","x",1,-1,r,n,-e,a,o,1),_("x","z","y",1,1,e,r,n,i,a,2),_("x","z","y",1,-1,e,r,-n,i,a,3),_("x","y","z",1,-1,e,n,r,i,o,4),_("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new wo(c,3)),this.setAttribute("normal",new wo(u,3)),this.setAttribute("uv",new wo(f,2));function _(y,m,h,x,v,M,b,A,C,E,g){const S=M/C,R=b/E,z=M/2,H=b/2,j=A/2,Z=C+1,Y=E+1;let J=0,U=0;const W=new K;for(let te=0;te<Y;te++){const le=te*R-H;for(let Ae=0;Ae<Z;Ae++){const je=Ae*S-z;W[y]=je*x,W[m]=le*v,W[h]=j,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[h]=A>0?1:-1,u.push(W.x,W.y,W.z),f.push(Ae/C),f.push(1-te/E),J+=1}}for(let te=0;te<E;te++)for(let le=0;le<C;le++){const Ae=d+le+Z*te,je=d+le+Z*(te+1),q=d+(le+1)+Z*(te+1),ce=d+(le+1)+Z*te;l.push(Ae,je,ce),l.push(je,q,ce),U+=6}s.addGroup(p,U,g),p+=U,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const r=Qa(t[n]);for(const i in r)e[i]=r[i]}return e}function I2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const U2={clone:Qa,merge:yn};var N2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N2,this.fragmentShader=F2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=I2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?n.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[i]={type:"m4",value:a.toArray()}:n.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gM extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new K,jv=new pt,Xv=new pt;class ir extends gM{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Up*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Up*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,jv,Xv),n.subVectors(Xv,jv)}setViewOffset(e,n,r,i,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Td*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,n-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ca=-90,ua=1;class O2 extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ir(ca,ua,e,n);i.layers=this.layers,this.add(i);const o=new ir(ca,ua,e,n);o.layers=this.layers,this.add(o);const a=new ir(ca,ua,e,n);a.layers=this.layers,this.add(a);const s=new ir(ca,ua,e,n);s.layers=this.layers,this.add(s);const l=new ir(ca,ua,e,n);l.layers=this.layers,this.add(l);const c=new ir(ca,ua,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,a,s,l]=n;for(const c of n)this.remove(c);if(e===ni)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,a),e.setRenderTarget(r,2,i),e.render(n,s),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class vM extends Un{constructor(e,n,r,i,o,a,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ya,super(e,n,r,i,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k2 extends Io{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new vM(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ul(5,5,5),o=new Gi({name:"CubemapFromEquirect",uniforms:Qa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Oi});o.uniforms.tEquirect.value=n;const a=new ri(i,o),s=n.minFilter;return n.minFilter===xo&&(n.minFilter=Sr),new O2(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,r,i);e.setRenderTarget(o)}}const Wd=new K,B2=new K,z2=new Qe;class so{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Wd.subVectors(r,n).cross(B2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||z2.getNormalMatrix(e),i=this.coplanarPoint(Wd).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new Bf,Ac=new K;class _M{constructor(e=new so,n=new so,r=new so,i=new so,o=new so,a=new so){this.planes=[e,n,r,i,o,a]}set(e,n,r,i,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ni){const r=this.planes,i=e.elements,o=i[0],a=i[1],s=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],_=i[9],y=i[10],m=i[11],h=i[12],x=i[13],v=i[14],M=i[15];if(r[0].setComponents(l-o,d-c,m-p,M-h).normalize(),r[1].setComponents(l+o,d+c,m+p,M+h).normalize(),r[2].setComponents(l+a,d+u,m+_,M+x).normalize(),r[3].setComponents(l-a,d-u,m-_,M-x).normalize(),r[4].setComponents(l-s,d-f,m-y,M-v).normalize(),n===ni)r[5].setComponents(l+s,d+f,m+y,M+v).normalize();else if(n===Hu)r[5].setComponents(s,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Ac.x=i.normal.x>0?e.max.x:e.min.x,Ac.y=i.normal.y>0?e.max.y:e.min.y,Ac.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yM(){let t=null,e=!1,n=null,r=null;function i(o,a){n(o,a),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function H2(t){const e=new WeakMap;function n(s,l){const c=s.array,u=s.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),s.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function r(s,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,s),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,s,l),c.version=s.version}}return{get:i,remove:o,update:a}}class Nl extends Zi{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,a=n/2,s=Math.floor(r),l=Math.floor(i),c=s+1,u=l+1,f=e/s,d=n/l,p=[],_=[],y=[],m=[];for(let h=0;h<u;h++){const x=h*d-a;for(let v=0;v<c;v++){const M=v*f-o;_.push(M,-x,0),y.push(0,0,1),m.push(v/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<s;x++){const v=x+c*h,M=x+c*(h+1),b=x+1+c*(h+1),A=x+1+c*h;p.push(v,M,A),p.push(M,b,A)}this.setIndex(p),this.setAttribute("position",new wo(_,3)),this.setAttribute("normal",new wo(y,3)),this.setAttribute("uv",new wo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}var V2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_L="gl_FragColor = linearToOutputTexel( gl_FragColor );",yL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ML=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$L=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_D=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ND=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$D=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:V2,alphahash_pars_fragment:G2,alphamap_fragment:W2,alphamap_pars_fragment:$2,alphatest_fragment:j2,alphatest_pars_fragment:X2,aomap_fragment:Y2,aomap_pars_fragment:K2,batching_pars_vertex:q2,batching_vertex:Z2,begin_vertex:Q2,beginnormal_vertex:J2,bsdfs:eL,iridescence_fragment:tL,bumpmap_pars_fragment:nL,clipping_planes_fragment:rL,clipping_planes_pars_fragment:iL,clipping_planes_pars_vertex:oL,clipping_planes_vertex:aL,color_fragment:sL,color_pars_fragment:lL,color_pars_vertex:cL,color_vertex:uL,common:fL,cube_uv_reflection_fragment:dL,defaultnormal_vertex:hL,displacementmap_pars_vertex:pL,displacementmap_vertex:mL,emissivemap_fragment:gL,emissivemap_pars_fragment:vL,colorspace_fragment:_L,colorspace_pars_fragment:yL,envmap_fragment:xL,envmap_common_pars_fragment:SL,envmap_pars_fragment:ML,envmap_pars_vertex:EL,envmap_physical_pars_fragment:UL,envmap_vertex:wL,fog_vertex:TL,fog_pars_vertex:CL,fog_fragment:AL,fog_pars_fragment:bL,gradientmap_pars_fragment:RL,lightmap_pars_fragment:PL,lights_lambert_fragment:LL,lights_lambert_pars_fragment:DL,lights_pars_begin:IL,lights_toon_fragment:NL,lights_toon_pars_fragment:FL,lights_phong_fragment:OL,lights_phong_pars_fragment:kL,lights_physical_fragment:BL,lights_physical_pars_fragment:zL,lights_fragment_begin:HL,lights_fragment_maps:VL,lights_fragment_end:GL,logdepthbuf_fragment:WL,logdepthbuf_pars_fragment:$L,logdepthbuf_pars_vertex:jL,logdepthbuf_vertex:XL,map_fragment:YL,map_pars_fragment:KL,map_particle_fragment:qL,map_particle_pars_fragment:ZL,metalnessmap_fragment:QL,metalnessmap_pars_fragment:JL,morphinstance_vertex:eD,morphcolor_vertex:tD,morphnormal_vertex:nD,morphtarget_pars_vertex:rD,morphtarget_vertex:iD,normal_fragment_begin:oD,normal_fragment_maps:aD,normal_pars_fragment:sD,normal_pars_vertex:lD,normal_vertex:cD,normalmap_pars_fragment:uD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:dD,clearcoat_pars_fragment:hD,iridescence_pars_fragment:pD,opaque_fragment:mD,packing:gD,premultiplied_alpha_fragment:vD,project_vertex:_D,dithering_fragment:yD,dithering_pars_fragment:xD,roughnessmap_fragment:SD,roughnessmap_pars_fragment:MD,shadowmap_pars_fragment:ED,shadowmap_pars_vertex:wD,shadowmap_vertex:TD,shadowmask_pars_fragment:CD,skinbase_vertex:AD,skinning_pars_vertex:bD,skinning_vertex:RD,skinnormal_vertex:PD,specularmap_fragment:LD,specularmap_pars_fragment:DD,tonemapping_fragment:ID,tonemapping_pars_fragment:UD,transmission_fragment:ND,transmission_pars_fragment:FD,uv_pars_fragment:OD,uv_pars_vertex:kD,uv_vertex:BD,worldpos_vertex:zD,background_vert:HD,background_frag:VD,backgroundCube_vert:GD,backgroundCube_frag:WD,cube_vert:$D,cube_frag:jD,depth_vert:XD,depth_frag:YD,distanceRGBA_vert:KD,distanceRGBA_frag:qD,equirect_vert:ZD,equirect_frag:QD,linedashed_vert:JD,linedashed_frag:e3,meshbasic_vert:t3,meshbasic_frag:n3,meshlambert_vert:r3,meshlambert_frag:i3,meshmatcap_vert:o3,meshmatcap_frag:a3,meshnormal_vert:s3,meshnormal_frag:l3,meshphong_vert:c3,meshphong_frag:u3,meshphysical_vert:f3,meshphysical_frag:d3,meshtoon_vert:h3,meshtoon_frag:p3,points_vert:m3,points_frag:g3,shadow_vert:v3,shadow_frag:_3,sprite_vert:y3,sprite_frag:x3},Me={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ir={basic:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:yn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:yn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:yn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:yn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:yn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:yn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:yn([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:yn([Me.lights,Me.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ir.physical={uniforms:yn([Ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const bc={r:0,b:0,g:0},ro=new ui,S3=new Yt;function M3(t,e,n,r,i,o,a){const s=new vt(0);let l=o===!0?0:1,c,u,f=null,d=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function y(x){let v=!1;const M=_(x);M===null?h(s,l):M&&M.isColor&&(h(M,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===Of)?(u===void 0&&(u=new ri(new Ul(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Qa(Ir.backgroundCube.uniforms),vertexShader:Ir.backgroundCube.vertexShader,fragmentShader:Ir.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ro.copy(v.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S3.makeRotationFromEuler(ro)),u.material.toneMapped=ht.getTransfer(M.colorSpace)!==At,(f!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ri(new Nl(2,2),new Gi({name:"BackgroundMaterial",uniforms:Qa(Ir.background.uniforms),vertexShader:Ir.background.vertexShader,fragmentShader:Ir.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(M.colorSpace)!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB(bc,mM(t)),r.buffers.color.setClear(bc.r,bc.g,bc.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),l=v,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(s,l)},render:y,addToRenderList:m}}function E3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=d(null);let o=i,a=!1;function s(S,R,z,H,j){let Z=!1;const Y=f(H,z,R);o!==Y&&(o=Y,c(o.object)),Z=p(S,H,z,j),Z&&_(S,H,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(S,R,z,H),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,R,z){const H=z.wireframe===!0;let j=r[S.id];j===void 0&&(j={},r[S.id]=j);let Z=j[R.id];Z===void 0&&(Z={},j[R.id]=Z);let Y=Z[H];return Y===void 0&&(Y=d(l()),Z[H]=Y),Y}function d(S){const R=[],z=[],H=[];for(let j=0;j<n;j++)R[j]=0,z[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,R,z,H){const j=o.attributes,Z=R.attributes;let Y=0;const J=z.getAttributes();for(const U in J)if(J[U].location>=0){const te=j[U];let le=Z[U];if(le===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;Y++}return o.attributesNum!==Y||o.index!==H}function _(S,R,z,H){const j={},Z=R.attributes;let Y=0;const J=z.getAttributes();for(const U in J)if(J[U].location>=0){let te=Z[U];te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const le={};le.attribute=te,te&&te.data&&(le.data=te.data),j[U]=le,Y++}o.attributes=j,o.attributesNum=Y,o.index=H}function y(){const S=o.newAttributes;for(let R=0,z=S.length;R<z;R++)S[R]=0}function m(S){h(S,0)}function h(S,R){const z=o.newAttributes,H=o.enabledAttributes,j=o.attributeDivisors;z[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),j[S]!==R&&(t.vertexAttribDivisor(S,R),j[S]=R)}function x(){const S=o.newAttributes,R=o.enabledAttributes;for(let z=0,H=R.length;z<H;z++)R[z]!==S[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function v(S,R,z,H,j,Z,Y){Y===!0?t.vertexAttribIPointer(S,R,z,j,Z):t.vertexAttribPointer(S,R,z,H,j,Z)}function M(S,R,z,H){y();const j=H.attributes,Z=z.getAttributes(),Y=R.defaultAttributeValues;for(const J in Z){const U=Z[J];if(U.location>=0){let W=j[J];if(W===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const te=W.normalized,le=W.itemSize,Ae=e.get(W);if(Ae===void 0)continue;const je=Ae.buffer,q=Ae.type,ce=Ae.bytesPerElement,pe=q===t.INT||q===t.UNSIGNED_INT||W.gpuType===og;if(W.isInterleavedBufferAttribute){const me=W.data,Ie=me.stride,We=W.offset;if(me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<U.locationSize;Ye++)h(U.location+Ye,me.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ye=0;Ye<U.locationSize;Ye++)m(U.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Ye=0;Ye<U.locationSize;Ye++)v(U.location+Ye,le/U.locationSize,q,te,Ie*ce,(We+le/U.locationSize*Ye)*ce,pe)}else{if(W.isInstancedBufferAttribute){for(let me=0;me<U.locationSize;me++)h(U.location+me,W.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let me=0;me<U.locationSize;me++)m(U.location+me);t.bindBuffer(t.ARRAY_BUFFER,je);for(let me=0;me<U.locationSize;me++)v(U.location+me,le/U.locationSize,q,te,le*ce,le/U.locationSize*me*ce,pe)}}else if(Y!==void 0){const te=Y[J];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(U.location,te);break;case 3:t.vertexAttrib3fv(U.location,te);break;case 4:t.vertexAttrib4fv(U.location,te);break;default:t.vertexAttrib1fv(U.location,te)}}}}x()}function b(){E();for(const S in r){const R=r[S];for(const z in R){const H=R[z];for(const j in H)u(H[j].object),delete H[j];delete R[z]}delete r[S]}}function A(S){if(r[S.id]===void 0)return;const R=r[S.id];for(const z in R){const H=R[z];for(const j in H)u(H[j].object),delete H[j];delete R[z]}delete r[S.id]}function C(S){for(const R in r){const z=r[R];if(z[S.id]===void 0)continue;const H=z[S.id];for(const j in H)u(H[j].object),delete H[j];delete z[S.id]}}function E(){g(),a=!0,o!==i&&(o=i,c(o.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:E,resetDefaultState:g,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function w3(t,e,n){let r;function i(c){r=c}function o(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(r,c,u,f),n.update(u,r,f))}function s(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,r,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y];for(let y=0;y<d.length;y++)n.update(_,r,d[y])}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function T3(t,e,n,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Mr&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(A){const C=A===Rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ci&&r.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:M,maxSamples:b}}function C3(t){const e=this;let n=null,r=0,i=!1,o=!1;const a=new so,s=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||r!==0||i;return i=d,r=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!i||_===null||_.length===0||o&&!m)o?u(null):c();else{const x=o?0:r,v=x*4;let M=h.clippingState||null;l.value=M,M=u(_,d,v,p);for(let b=0;b!==v;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,x=d.matrixWorldInverse;s.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,M=p;v!==y;++v,M+=4)a.copy(f[v]).applyMatrix4(x,s),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function A3(t){let e=new WeakMap;function n(a,s){return s===ip?a.mapping=Ya:s===op&&(a.mapping=Ka),a}function r(a){if(a&&a.isTexture){const s=a.mapping;if(s===ip||s===op)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new k2(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",i),n(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class b3 extends gM{constructor(e=-1,n=1,r=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,a=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ca=4,Yv=[.125,.215,.35,.446,.526,.582],fo=20,$d=new b3,Kv=new vt;let jd=null,Xd=0,Yd=0,Kd=!1;const lo=(1+Math.sqrt(5))/2,fa=1/lo,qv=[new K(-lo,fa,0),new K(lo,fa,0),new K(-fa,0,lo),new K(fa,0,lo),new K(0,lo,-fa),new K(0,lo,fa),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,Yd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ya||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Sr,minFilter:Sr,generateMipmaps:!1,type:Rl,format:Mr,colorSpace:qi,depthBuffer:!1},i=Qv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qv(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R3(o)),this._blurMaterial=P3(o,e,n)}return i}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,$d)}_sceneToCubeUV(e,n,r,i){const s=new ir(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Kv),u.toneMapping=ki,u.autoClear=!1;const p=new dM({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new ri(new Ul,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Kv),y=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):x===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const v=this._cubeSize;Rc(i,x*v,h>2?v:0,v,v),u.setRenderTarget(i),y&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ya||e.mapping===Ka;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new ri(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Rc(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(a,$d)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=qv[(i-o-1)%qv.length];this._blur(e,o-1,o,a,s)}n.autoClear=r}_blur(e,n,r,i,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,r,i,"latitudinal",o),this._halfBlur(a,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ri(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[r]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*fo-1),y=o/_,m=isFinite(o)?1+Math.floor(u*y):fo;m>fo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fo}`);const h=[];let x=0;for(let C=0;C<fo;++C){const E=C/y,g=Math.exp(-E*E/2);h.push(g),C===0?x+=g:C<m&&(x+=2*g)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-r;const M=this._sizeLods[i],b=3*M*(i>v-Ca?i-v+Ca:0),A=4*(this._cubeSize-M);Rc(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(f,$d)}}function R3(t){const e=[],n=[],r=[];let i=t;const o=t-Ca+1+Yv.length;for(let a=0;a<o;a++){const s=Math.pow(2,i);n.push(s);let l=1/s;a>t-Ca?l=Yv[a-t+Ca-1]:a===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,y=3,m=2,h=1,x=new Float32Array(y*_*p),v=new Float32Array(m*_*p),M=new Float32Array(h*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,E=A>2?0:-1,g=[C,E,0,C+2/3,E,0,C+2/3,E+1,0,C,E,0,C+2/3,E+1,0,C,E+1,0];x.set(g,y*_*A),v.set(d,m*_*A);const S=[A,A,A,A,A,A];M.set(S,h*_*A)}const b=new Zi;b.setAttribute("position",new Vr(x,y)),b.setAttribute("uv",new Vr(v,m)),b.setAttribute("faceIndex",new Vr(M,h)),e.push(b),i>Ca&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qv(t,e,n){const r=new Io(t,e,n);return r.texture.mapping=Of,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function P3(t,e,n){const r=new Float32Array(fo),i=new K(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jv(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function e_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function dg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L3(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===ip||l===op,u=l===Ya||l===Ka;if(c||u){let f=e.get(s);const d=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return n===null&&(n=new Zv(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new Zv(t)),f=c?n.fromEquirectangular(s):n.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function D3(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&$s("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function I3(t,e,n,r){const i={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,M=x.length;v<M;v+=3){const b=x[v+0],A=x[v+1],C=x[v+2];d.push(b,A,A,C,C,b)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const b=v+0,A=v+1,C=v+2;d.push(b,A,A,C,C,b)}}else return;const m=new(aM(d)?pM:hM)(d,1);m.version=y;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function u(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function U3(t,e,n){let r;function i(d){r=d}let o,a;function s(d){o=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(r,p,o,d*a),n.update(p,r,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(r,p,o,d*a,_),n.update(p,r,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,o,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,r,1)}function f(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,o,d,0,y,0,_);let h=0;for(let x=0;x<_;x++)h+=p[x];for(let x=0;x<y.length;x++)n.update(h,r,y[x])}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function N3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function F3(t,e,n){const r=new WeakMap,i=new on;function o(a,s,l){const c=a.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=u!==void 0?u.length:0;let d=r.get(s);if(d===void 0||d.count!==f){let S=function(){E.dispose(),r.delete(s),s.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],x=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let b=s.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*f),E=new lM(C,b,A,f);E.type=ti,E.needsUpdate=!0;const g=M*4;for(let R=0;R<f;R++){const z=h[R],H=x[R],j=v[R],Z=b*A*4*R;for(let Y=0;Y<z.count;Y++){const J=Y*g;_===!0&&(i.fromBufferAttribute(z,Y),C[Z+J+0]=i.x,C[Z+J+1]=i.y,C[Z+J+2]=i.z,C[Z+J+3]=0),y===!0&&(i.fromBufferAttribute(H,Y),C[Z+J+4]=i.x,C[Z+J+5]=i.y,C[Z+J+6]=i.z,C[Z+J+7]=0),m===!0&&(i.fromBufferAttribute(j,Y),C[Z+J+8]=i.x,C[Z+J+9]=i.y,C[Z+J+10]=i.z,C[Z+J+11]=j.itemSize===4?i.w:1)}}d={count:f,texture:E,size:new pt(b,A)},r.set(s,d),s.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function O3(t,e,n,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}class xM extends Un{constructor(e,n,r,i,o,a,s,l,c,u=Fa){if(u!==Fa&&u!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Fa&&(r=Do),r===void 0&&u===Za&&(r=qa),super(null,i,o,a,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:ar,this.minFilter=l!==void 0?l:ar,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const SM=new Un,t_=new xM(1,1),MM=new lM,EM=new M2,wM=new vM,n_=[],r_=[],i_=new Float32Array(16),o_=new Float32Array(9),a_=new Float32Array(4);function os(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=n_[i];if(o===void 0&&(o=new Float32Array(i),n_[i]=o),e!==0){r.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Qt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function zf(t,e){let n=r_[e];n===void 0&&(n=new Int32Array(e),r_[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function k3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function B3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function z3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function H3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function V3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;a_.set(r),t.uniformMatrix2fv(this.addr,!1,a_),Jt(n,r)}}function G3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;o_.set(r),t.uniformMatrix3fv(this.addr,!1,o_),Jt(n,r)}}function W3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;i_.set(r),t.uniformMatrix4fv(this.addr,!1,i_),Jt(n,r)}}function $3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function Y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function K3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function Z3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function Q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function J3(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let o;this.type===t.SAMPLER_2D_SHADOW?(t_.compareFunction=oM,o=t_):o=SM,n.setTexture2D(e||o,i)}function eI(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||EM,i)}function tI(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||wM,i)}function nI(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||MM,i)}function rI(t){switch(t){case 5126:return k3;case 35664:return B3;case 35665:return z3;case 35666:return H3;case 35674:return V3;case 35675:return G3;case 35676:return W3;case 5124:case 35670:return $3;case 35667:case 35671:return j3;case 35668:case 35672:return X3;case 35669:case 35673:return Y3;case 5125:return K3;case 36294:return q3;case 36295:return Z3;case 36296:return Q3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return eI;case 35680:case 36300:case 36308:case 36293:return tI;case 36289:case 36303:case 36311:case 36292:return nI}}function iI(t,e){t.uniform1fv(this.addr,e)}function oI(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function aI(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function sI(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function lI(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cI(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uI(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fI(t,e){t.uniform1iv(this.addr,e)}function dI(t,e){t.uniform2iv(this.addr,e)}function hI(t,e){t.uniform3iv(this.addr,e)}function pI(t,e){t.uniform4iv(this.addr,e)}function mI(t,e){t.uniform1uiv(this.addr,e)}function gI(t,e){t.uniform2uiv(this.addr,e)}function vI(t,e){t.uniform3uiv(this.addr,e)}function _I(t,e){t.uniform4uiv(this.addr,e)}function yI(t,e,n){const r=this.cache,i=e.length,o=zf(n,i);Qt(r,o)||(t.uniform1iv(this.addr,o),Jt(r,o));for(let a=0;a!==i;++a)n.setTexture2D(e[a]||SM,o[a])}function xI(t,e,n){const r=this.cache,i=e.length,o=zf(n,i);Qt(r,o)||(t.uniform1iv(this.addr,o),Jt(r,o));for(let a=0;a!==i;++a)n.setTexture3D(e[a]||EM,o[a])}function SI(t,e,n){const r=this.cache,i=e.length,o=zf(n,i);Qt(r,o)||(t.uniform1iv(this.addr,o),Jt(r,o));for(let a=0;a!==i;++a)n.setTextureCube(e[a]||wM,o[a])}function MI(t,e,n){const r=this.cache,i=e.length,o=zf(n,i);Qt(r,o)||(t.uniform1iv(this.addr,o),Jt(r,o));for(let a=0;a!==i;++a)n.setTexture2DArray(e[a]||MM,o[a])}function EI(t){switch(t){case 5126:return iI;case 35664:return oI;case 35665:return aI;case 35666:return sI;case 35674:return lI;case 35675:return cI;case 35676:return uI;case 5124:case 35670:return fI;case 35667:case 35671:return dI;case 35668:case 35672:return hI;case 35669:case 35673:return pI;case 5125:return mI;case 36294:return gI;case 36295:return vI;case 36296:return _I;case 35678:case 36198:case 36298:case 36306:case 35682:return yI;case 35679:case 36299:case 36307:return xI;case 35680:case 36300:case 36308:case 36293:return SI;case 36289:case 36303:case 36311:case 36292:return MI}}class wI{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rI(n.type)}}class TI{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EI(n.type)}}class CI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const s=i[o];s.setValue(e,n[s.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function s_(t,e){t.seq.push(e),t.map[e.id]=e}function AI(t,e,n){const r=t.name,i=r.length;for(qd.lastIndex=0;;){const o=qd.exec(r),a=qd.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){s_(n,c===void 0?new wI(s,t,e):new TI(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new CI(s),s_(n,f)),n=f}}}class nu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),a=e.getUniformLocation(n,o.name);AI(o,a,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const a=e[i];a.id in n&&r.push(a)}return r}}function l_(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const bI=37297;let RI=0;function PI(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=i;a<o;a++){const s=a+1;r.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return r.join(`
`)}function LI(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let r;switch(e===n?r="":e===zu&&n===Bu?r="LinearDisplayP3ToLinearSRGB":e===Bu&&n===zu&&(r="LinearSRGBToLinearDisplayP3"),t){case qi:case kf:return[r,"LinearTransferOETF"];case Pr:case fg:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function c_(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+PI(t.getShaderSource(e),a)}else return i}function DI(t,e){const n=LI(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function II(t,e){let n;switch(e){case KP:n="Linear";break;case qP:n="Reinhard";break;case ZP:n="Cineon";break;case QP:n="ACESFilmic";break;case e2:n="AgX";break;case t2:n="Neutral";break;case JP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pc=new K;function UI(){ht.getLuminanceCoefficients(Pc);const t=Pc.x.toFixed(4),e=Pc.y.toFixed(4),n=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function FI(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function OI(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function Us(t){return t!==""}function u_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(t){return t.replace(kI,zI)}const BI=new Map;function zI(t,e){let n=Ze[e];if(n===void 0){const r=BI.get(e);if(r!==void 0)n=Ze[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Np(n)}const HI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(t){return t.replace(HI,VI)}function VI(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function h_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Kr&&(e="SHADOWMAP_TYPE_VSM"),e}function WI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ya:case Ka:e="ENVMAP_TYPE_CUBE";break;case Of:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $I(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function jI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case XS:e="ENVMAP_BLENDING_MULTIPLY";break;case XP:e="ENVMAP_BLENDING_MIX";break;case YP:e="ENVMAP_BLENDING_ADD";break}return e}function XI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function YI(t,e,n,r){const i=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=GI(n),c=WI(n),u=$I(n),f=jI(n),d=XI(n),p=NI(n),_=FI(o),y=i.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Us).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Us).join(`
`),h.length>0&&(h+=`
`)):(m=[h_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),h=[h_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Ze.tonemapping_pars_fragment:"",n.toneMapping!==ki?II("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,DI("linearToOutputTexel",n.outputColorSpace),UI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),a=Np(a),a=u_(a,n),a=f_(a,n),s=Np(s),s=u_(s,n),s=f_(s,n),a=d_(a),s=d_(s),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+a,M=x+h+s,b=l_(i,i.VERTEX_SHADER,v),A=l_(i,i.FRAGMENT_SHADER,M);i.attachShader(y,b),i.attachShader(y,A),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(R){if(t.debug.checkShaderErrors){const z=i.getProgramInfoLog(y).trim(),H=i.getShaderInfoLog(b).trim(),j=i.getShaderInfoLog(A).trim();let Z=!0,Y=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,b,A);else{const J=c_(i,b,"vertex"),U=c_(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||j==="")&&(Y=!1);Y&&(R.diagnostics={runnable:Z,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:h}})}i.deleteShader(b),i.deleteShader(A),E=new nu(i,y),g=OI(i,y)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let g;this.getAttributes=function(){return g===void 0&&C(this),g};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(y,bI)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let KI=0;class qI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ZI(e),n.set(e,r)),r}}class ZI{constructor(e){this.id=KI++,this.code=e,this.usedTimes=0}}function QI(t,e,n,r,i,o,a){const s=new uM,l=new qI,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,S,R,z,H){const j=z.fog,Z=H.geometry,Y=g.isMeshStandardMaterial?z.environment:null,J=(g.isMeshStandardMaterial?n:e).get(g.envMap||Y),U=J&&J.mapping===Of?J.image.height:null,W=_[g.type];g.precision!==null&&(p=i.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=te!==void 0?te.length:0;let Ae=0;Z.morphAttributes.position!==void 0&&(Ae=1),Z.morphAttributes.normal!==void 0&&(Ae=2),Z.morphAttributes.color!==void 0&&(Ae=3);let je,q,ce,pe;if(W){const at=Ir[W];je=at.vertexShader,q=at.fragmentShader}else je=g.vertexShader,q=g.fragmentShader,l.update(g),ce=l.getVertexShaderID(g),pe=l.getFragmentShaderID(g);const me=t.getRenderTarget(),Ie=H.isInstancedMesh===!0,We=H.isBatchedMesh===!0,Ye=!!g.map,mt=!!g.matcap,D=!!J,it=!!g.aoMap,Ve=!!g.lightMap,Ke=!!g.bumpMap,Te=!!g.normalMap,dt=!!g.displacementMap,Ue=!!g.emissiveMap,Oe=!!g.metalnessMap,P=!!g.roughnessMap,T=g.anisotropy>0,X=g.clearcoat>0,G=g.dispersion>0,ae=g.iridescence>0,ie=g.sheen>0,ge=g.transmission>0,se=T&&!!g.anisotropyMap,we=X&&!!g.clearcoatMap,Xe=X&&!!g.clearcoatNormalMap,fe=X&&!!g.clearcoatRoughnessMap,Se=ae&&!!g.iridescenceMap,tt=ae&&!!g.iridescenceThicknessMap,Ge=ie&&!!g.sheenColorMap,Re=ie&&!!g.sheenRoughnessMap,ze=!!g.specularMap,qe=!!g.specularColorMap,Et=!!g.specularIntensityMap,B=ge&&!!g.transmissionMap,he=ge&&!!g.thicknessMap,ee=!!g.gradientMap,re=!!g.alphaMap,ve=g.alphaTest>0,He=!!g.alphaHash,et=!!g.extensions;let Rt=ki;g.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const Kt={shaderID:W,shaderType:g.type,shaderName:g.name,vertexShader:je,fragmentShader:q,defines:g.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:We,batchingColor:We&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:qi,alphaToCoverage:!!g.alphaToCoverage,map:Ye,matcap:mt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:U,aoMap:it,lightMap:Ve,bumpMap:Ke,normalMap:Te,displacementMap:d&&dt,emissiveMap:Ue,normalMapObjectSpace:Te&&g.normalMapType===a2,normalMapTangentSpace:Te&&g.normalMapType===o2,metalnessMap:Oe,roughnessMap:P,anisotropy:T,anisotropyMap:se,clearcoat:X,clearcoatMap:we,clearcoatNormalMap:Xe,clearcoatRoughnessMap:fe,dispersion:G,iridescence:ae,iridescenceMap:Se,iridescenceThicknessMap:tt,sheen:ie,sheenColorMap:Ge,sheenRoughnessMap:Re,specularMap:ze,specularColorMap:qe,specularIntensityMap:Et,transmission:ge,transmissionMap:B,thicknessMap:he,gradientMap:ee,opaque:g.transparent===!1&&g.blending===Na&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:ve,alphaHash:He,combine:g.combine,mapUv:Ye&&y(g.map.channel),aoMapUv:it&&y(g.aoMap.channel),lightMapUv:Ve&&y(g.lightMap.channel),bumpMapUv:Ke&&y(g.bumpMap.channel),normalMapUv:Te&&y(g.normalMap.channel),displacementMapUv:dt&&y(g.displacementMap.channel),emissiveMapUv:Ue&&y(g.emissiveMap.channel),metalnessMapUv:Oe&&y(g.metalnessMap.channel),roughnessMapUv:P&&y(g.roughnessMap.channel),anisotropyMapUv:se&&y(g.anisotropyMap.channel),clearcoatMapUv:we&&y(g.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&y(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(g.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&y(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(g.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(g.sheenRoughnessMap.channel),specularMapUv:ze&&y(g.specularMap.channel),specularColorMapUv:qe&&y(g.specularColorMap.channel),specularIntensityMapUv:Et&&y(g.specularIntensityMap.channel),transmissionMapUv:B&&y(g.transmissionMap.channel),thicknessMapUv:he&&y(g.thicknessMap.channel),alphaMapUv:re&&y(g.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Te||T),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Ye||re),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ye&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===At,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Qr,flipSided:g.side===In,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:et&&g.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&g.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function h(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)S.push(R),S.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(x(S,g),v(S,g),S.push(t.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function x(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function v(g,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),g.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.doubleSided&&s.enable(10),S.flipSided&&s.enable(11),S.useDepthPacking&&s.enable(12),S.dithering&&s.enable(13),S.transmission&&s.enable(14),S.sheen&&s.enable(15),S.opaque&&s.enable(16),S.pointsUvs&&s.enable(17),S.decodeVideoTexture&&s.enable(18),S.alphaToCoverage&&s.enable(19),g.push(s.mask)}function M(g){const S=_[g.type];let R;if(S){const z=Ir[S];R=U2.clone(z.uniforms)}else R=g.uniforms;return R}function b(g,S){let R;for(let z=0,H=u.length;z<H;z++){const j=u[z];if(j.cacheKey===S){R=j,++R.usedTimes;break}}return R===void 0&&(R=new YI(t,S,g,o),u.push(R)),R}function A(g){if(--g.usedTimes===0){const S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),g.destroy()}}function C(g){l.remove(g)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:E}}function JI(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function r(a){t.delete(a)}function i(a,s,l){t.get(a)[s]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:o}}function eU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function p_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function m_(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function a(f,d,p,_,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function s(f,d,p,_,y,m){const h=a(f,d,p,_,y,m);p.transmission>0?r.push(h):p.transparent===!0?i.push(h):n.push(h)}function l(f,d,p,_,y,m){const h=a(f,d,p,_,y,m);p.transmission>0?r.unshift(h):p.transparent===!0?i.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||eU),r.length>1&&r.sort(d||p_),i.length>1&&i.sort(d||p_)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:s,unshift:l,finish:u,sort:c}}function tU(){let t=new WeakMap;function e(r,i){const o=t.get(r);let a;return o===void 0?(a=new m_,t.set(r,[a])):i>=o.length?(a=new m_,o.push(a)):a=o[i],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new vt};break;case"SpotLight":n={position:new K,direction:new K,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function rU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iU=0;function oU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aU(t){const e=new nU,n=rU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new K);const i=new K,o=new Yt,a=new Yt;function s(c){let u=0,f=0,d=0;for(let g=0;g<9;g++)r.probe[g].set(0,0,0);let p=0,_=0,y=0,m=0,h=0,x=0,v=0,M=0,b=0,A=0,C=0;c.sort(oU);for(let g=0,S=c.length;g<S;g++){const R=c[g],z=R.color,H=R.intensity,j=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*H,f+=z.g*H,d+=z.b*H;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(R.sh.coefficients[Y],H);C++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,U=n.get(R);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,r.directionalShadow[p]=U,r.directionalShadowMap[p]=Z,r.directionalShadowMatrix[p]=R.shadow.matrix,x++}r.directional[p]=Y,p++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(z).multiplyScalar(H),Y.distance=j,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,r.spot[y]=Y;const J=R.shadow;if(R.map&&(r.spotLightMap[b]=R.map,b++,J.updateMatrices(R),R.castShadow&&A++),r.spotLightMatrix[y]=J.matrix,R.castShadow){const U=n.get(R);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,r.spotShadow[y]=U,r.spotShadowMap[y]=Z,M++}y++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(z).multiplyScalar(H),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),r.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const J=R.shadow,U=n.get(R);U.shadowIntensity=J.intensity,U.shadowBias=J.bias,U.shadowNormalBias=J.normalBias,U.shadowRadius=J.radius,U.shadowMapSize=J.mapSize,U.shadowCameraNear=J.camera.near,U.shadowCameraFar=J.camera.far,r.pointShadow[_]=U,r.pointShadowMap[_]=Z,r.pointShadowMatrix[_]=R.shadow.matrix,v++}r.point[_]=Y,_++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(H),Y.groundColor.copy(R.groundColor).multiplyScalar(H),r.hemi[h]=Y,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;const E=r.hash;(E.directionalLength!==p||E.pointLength!==_||E.spotLength!==y||E.rectAreaLength!==m||E.hemiLength!==h||E.numDirectionalShadows!==x||E.numPointShadows!==v||E.numSpotShadows!==M||E.numSpotMaps!==b||E.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=m,r.point.length=_,r.hemi.length=h,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=M+b-A,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=C,E.directionalLength=p,E.pointLength=_,E.spotLength=y,E.rectAreaLength=m,E.hemiLength=h,E.numDirectionalShadows=x,E.numPointShadows=v,E.numSpotShadows=M,E.numSpotMaps=b,E.numLightProbes=C,r.version=iU++)}function l(c,u){let f=0,d=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=r.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=r.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(v.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=r.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:s,setupView:l,state:r}}function g_(t){const e=new aU(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function s(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function sU(t){let e=new WeakMap;function n(i,o=0){const a=e.get(i);let s;return a===void 0?(s=new g_(t),e.set(i,[s])):o>=a.length?(s=new g_(t),a.push(s)):s=a[o],s}function r(){e=new WeakMap}return{get:n,dispose:r}}class lU extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cU extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dU(t,e,n){let r=new _M;const i=new pt,o=new pt,a=new on,s=new lU({depthPacking:i2}),l=new cU,c={},u=n.maxTextureSize,f={[Vi]:In,[In]:Vi,[Qr]:Qr},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:uU,fragmentShader:fU}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ri(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jS;let h=this.type;this.render=function(A,C,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const g=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Oi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=h!==Kr&&this.type===Kr,j=h===Kr&&this.type!==Kr;for(let Z=0,Y=A.length;Z<Y;Z++){const J=A[Z],U=J.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const W=U.getFrameExtents();if(i.multiply(W),o.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/W.x),i.x=o.x*W.x,U.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/W.y),i.y=o.y*W.y,U.mapSize.y=o.y)),U.map===null||H===!0||j===!0){const le=this.type!==Kr?{minFilter:ar,magFilter:ar}:{};U.map!==null&&U.map.dispose(),U.map=new Io(i.x,i.y,le),U.map.texture.name=J.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const te=U.getViewportCount();for(let le=0;le<te;le++){const Ae=U.getViewport(le);a.set(o.x*Ae.x,o.y*Ae.y,o.x*Ae.z,o.y*Ae.w),z.viewport(a),U.updateMatrices(J,le),r=U.getFrustum(),M(C,E,U.camera,J,this.type)}U.isPointLightShadow!==!0&&this.type===Kr&&x(U,E),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(g,S,R)};function x(A,C){const E=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Io(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,E,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,E,p,y,null)}function v(A,C,E,g){let S=null;const R=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=E.isPointLight===!0?l:s,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=S.uuid,H=C.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Z=j[H];Z===void 0&&(Z=S.clone(),j[H]=Z,C.addEventListener("dispose",b)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,g===Kr?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=E}return S}function M(A,C,E,g,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Kr)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const H=e.update(A),j=A.material;if(Array.isArray(j)){const Z=H.groups;for(let Y=0,J=Z.length;Y<J;Y++){const U=Z[Y],W=j[U.materialIndex];if(W&&W.visible){const te=v(A,W,g,S);A.onBeforeShadow(t,A,C,E,H,te,U),t.renderBufferDirect(E,null,H,te,A,U),A.onAfterShadow(t,A,C,E,H,te,U)}}}else if(j.visible){const Z=v(A,j,g,S);A.onBeforeShadow(t,A,C,E,H,Z,null),t.renderBufferDirect(E,null,H,Z,A,null),A.onAfterShadow(t,A,C,E,H,Z,null)}}const z=A.children;for(let H=0,j=z.length;H<j;H++)M(z[H],C,E,g,S)}function b(A){A.target.removeEventListener("dispose",b);for(const E in c){const g=c[E],S=A.target.uuid;S in g&&(g[S].dispose(),delete g[S])}}}function hU(t){function e(){let B=!1;const he=new on;let ee=null;const re=new on(0,0,0,0);return{setMask:function(ve){ee!==ve&&!B&&(t.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){B=ve},setClear:function(ve,He,et,Rt,Kt){Kt===!0&&(ve*=Rt,He*=Rt,et*=Rt),he.set(ve,He,et,Rt),re.equals(he)===!1&&(t.clearColor(ve,He,et,Rt),re.copy(he))},reset:function(){B=!1,ee=null,re.set(-1,0,0,0)}}}function n(){let B=!1,he=null,ee=null,re=null;return{setTest:function(ve){ve?pe(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(ve){he!==ve&&!B&&(t.depthMask(ve),he=ve)},setFunc:function(ve){if(ee!==ve){switch(ve){case zP:t.depthFunc(t.NEVER);break;case HP:t.depthFunc(t.ALWAYS);break;case VP:t.depthFunc(t.LESS);break;case Ou:t.depthFunc(t.LEQUAL);break;case GP:t.depthFunc(t.EQUAL);break;case WP:t.depthFunc(t.GEQUAL);break;case $P:t.depthFunc(t.GREATER);break;case jP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ve}},setLocked:function(ve){B=ve},setClear:function(ve){re!==ve&&(t.clearDepth(ve),re=ve)},reset:function(){B=!1,he=null,ee=null,re=null}}}function r(){let B=!1,he=null,ee=null,re=null,ve=null,He=null,et=null,Rt=null,Kt=null;return{setTest:function(at){B||(at?pe(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(at){he!==at&&!B&&(t.stencilMask(at),he=at)},setFunc:function(at,dr,kn){(ee!==at||re!==dr||ve!==kn)&&(t.stencilFunc(at,dr,kn),ee=at,re=dr,ve=kn)},setOp:function(at,dr,kn){(He!==at||et!==dr||Rt!==kn)&&(t.stencilOp(at,dr,kn),He=at,et=dr,Rt=kn)},setLocked:function(at){B=at},setClear:function(at){Kt!==at&&(t.clearStencil(at),Kt=at)},reset:function(){B=!1,he=null,ee=null,re=null,ve=null,He=null,et=null,Rt=null,Kt=null}}}const i=new e,o=new n,a=new r,s=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,x=null,v=null,M=null,b=null,A=new vt(0,0,0),C=0,E=!1,g=null,S=null,R=null,z=null,H=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=Y>=2);let U=null,W={};const te=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Ae=new on().fromArray(te),je=new on().fromArray(le);function q(B,he,ee,re){const ve=new Uint8Array(4),He=t.createTexture();t.bindTexture(B,He),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ee;et++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(he+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return He}const ce={};ce[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(Ou),Ke(!1),Te(Mv),pe(t.CULL_FACE),it(Oi);function pe(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function me(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Ie(B,he){return u[B]!==he?(t.bindFramebuffer(B,he),u[B]=he,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function We(B,he){let ee=d,re=!1;if(B){ee=f.get(he),ee===void 0&&(ee=[],f.set(he,ee));const ve=B.textures;if(ee.length!==ve.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let He=0,et=ve.length;He<et;He++)ee[He]=t.COLOR_ATTACHMENT0+He;ee.length=ve.length,re=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,re=!0);re&&t.drawBuffers(ee)}function Ye(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const mt={[uo]:t.FUNC_ADD,[EP]:t.FUNC_SUBTRACT,[wP]:t.FUNC_REVERSE_SUBTRACT};mt[TP]=t.MIN,mt[CP]=t.MAX;const D={[AP]:t.ZERO,[bP]:t.ONE,[RP]:t.SRC_COLOR,[np]:t.SRC_ALPHA,[NP]:t.SRC_ALPHA_SATURATE,[IP]:t.DST_COLOR,[LP]:t.DST_ALPHA,[PP]:t.ONE_MINUS_SRC_COLOR,[rp]:t.ONE_MINUS_SRC_ALPHA,[UP]:t.ONE_MINUS_DST_COLOR,[DP]:t.ONE_MINUS_DST_ALPHA,[FP]:t.CONSTANT_COLOR,[OP]:t.ONE_MINUS_CONSTANT_COLOR,[kP]:t.CONSTANT_ALPHA,[BP]:t.ONE_MINUS_CONSTANT_ALPHA};function it(B,he,ee,re,ve,He,et,Rt,Kt,at){if(B===Oi){_===!0&&(me(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),B!==MP){if(B!==y||at!==E){if((m!==uo||v!==uo)&&(t.blendEquation(t.FUNC_ADD),m=uo,v=uo),at)switch(B){case Na:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ev:t.blendFunc(t.ONE,t.ONE);break;case wv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Na:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ev:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}h=null,x=null,M=null,b=null,A.set(0,0,0),C=0,y=B,E=at}return}ve=ve||he,He=He||ee,et=et||re,(he!==m||ve!==v)&&(t.blendEquationSeparate(mt[he],mt[ve]),m=he,v=ve),(ee!==h||re!==x||He!==M||et!==b)&&(t.blendFuncSeparate(D[ee],D[re],D[He],D[et]),h=ee,x=re,M=He,b=et),(Rt.equals(A)===!1||Kt!==C)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Kt),A.copy(Rt),C=Kt),y=B,E=!1}function Ve(B,he){B.side===Qr?me(t.CULL_FACE):pe(t.CULL_FACE);let ee=B.side===In;he&&(ee=!ee),Ke(ee),B.blending===Na&&B.transparent===!1?it(Oi):it(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),i.setMask(B.colorWrite);const re=B.stencilWrite;a.setTest(re),re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){g!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),g=B)}function Te(B){B!==yP?(pe(t.CULL_FACE),B!==S&&(B===Mv?t.cullFace(t.BACK):B===xP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),S=B}function dt(B){B!==R&&(Z&&t.lineWidth(B),R=B)}function Ue(B,he,ee){B?(pe(t.POLYGON_OFFSET_FILL),(z!==he||H!==ee)&&(t.polygonOffset(he,ee),z=he,H=ee)):me(t.POLYGON_OFFSET_FILL)}function Oe(B){B?pe(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function P(B){B===void 0&&(B=t.TEXTURE0+j-1),U!==B&&(t.activeTexture(B),U=B)}function T(B,he,ee){ee===void 0&&(U===null?ee=t.TEXTURE0+j-1:ee=U);let re=W[ee];re===void 0&&(re={type:void 0,texture:void 0},W[ee]=re),(re.type!==B||re.texture!==he)&&(U!==ee&&(t.activeTexture(ee),U=ee),t.bindTexture(B,he||ce[B]),re.type=B,re.texture=he)}function X(){const B=W[U];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(B){Ae.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ae.copy(B))}function Re(B){je.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),je.copy(B))}function ze(B,he){let ee=l.get(he);ee===void 0&&(ee=new WeakMap,l.set(he,ee));let re=ee.get(B);re===void 0&&(re=t.getUniformBlockIndex(he,B.name),ee.set(B,re))}function qe(B,he){const re=l.get(he).get(B);s.get(he)!==re&&(t.uniformBlockBinding(he,re,B.__bindingPointIndex),s.set(he,re))}function Et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,W={},u={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,x=null,v=null,M=null,b=null,A=new vt(0,0,0),C=0,E=!1,g=null,S=null,R=null,z=null,H=null,Ae.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),i.reset(),o.reset(),a.reset()}return{buffers:{color:i,depth:o,stencil:a},enable:pe,disable:me,bindFramebuffer:Ie,drawBuffers:We,useProgram:Ye,setBlending:it,setMaterial:Ve,setFlipSided:Ke,setCullFace:Te,setLineWidth:dt,setPolygonOffset:Ue,setScissorTest:Oe,activeTexture:P,bindTexture:T,unbindTexture:X,compressedTexImage2D:G,compressedTexImage3D:ae,texImage2D:Se,texImage3D:tt,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:Xe,texStorage3D:fe,texSubImage2D:ie,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:we,scissor:Ge,viewport:Re,reset:Et}}function v_(t,e,n,r){const i=pU(r);switch(n){case QS:return t*e;case eM:return t*e;case tM:return t*e*2;case nM:return t*e/i.components*i.byteLength;case lg:return t*e/i.components*i.byteLength;case rM:return t*e*2/i.components*i.byteLength;case cg:return t*e*2/i.components*i.byteLength;case JS:return t*e*3/i.components*i.byteLength;case Mr:return t*e*4/i.components*i.byteLength;case ug:return t*e*4/i.components*i.byteLength;case Zc:case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jc:case eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:case fp:return Math.max(t,16)*Math.max(e,8)/4;case lp:case up:return Math.max(t,8)*Math.max(e,8)/2;case dp:case hp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tu:case Rp:case Pp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case iM:case Lp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dp:case Ip:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pU(t){switch(t){case ci:case KS:return{byteLength:1,components:1};case _l:case qS:case Rl:return{byteLength:2,components:1};case ag:case sg:return{byteLength:2,components:4};case Do:case og:case ti:return{byteLength:4,components:1};case ZS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function mU(t,e,n,r,i,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Vu("canvas")}function y(P,T,X){let G=1;const ae=Oe(P);if((ae.width>X||ae.height>X)&&(G=X/Math.max(ae.width,ae.height)),G<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(G*ae.width),ge=Math.floor(G*ae.height);f===void 0&&(f=_(ie,ge));const se=T?_(ie,ge):f;return se.width=ie,se.height=ge,se.getContext("2d").drawImage(P,0,0,ie,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+ge+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==ar&&P.minFilter!==Sr}function h(P){t.generateMipmap(P)}function x(P,T,X,G,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=T;if(T===t.RED&&(X===t.FLOAT&&(ie=t.R32F),X===t.HALF_FLOAT&&(ie=t.R16F),X===t.UNSIGNED_BYTE&&(ie=t.R8)),T===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ie=t.R8UI),X===t.UNSIGNED_SHORT&&(ie=t.R16UI),X===t.UNSIGNED_INT&&(ie=t.R32UI),X===t.BYTE&&(ie=t.R8I),X===t.SHORT&&(ie=t.R16I),X===t.INT&&(ie=t.R32I)),T===t.RG&&(X===t.FLOAT&&(ie=t.RG32F),X===t.HALF_FLOAT&&(ie=t.RG16F),X===t.UNSIGNED_BYTE&&(ie=t.RG8)),T===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ie=t.RG8UI),X===t.UNSIGNED_SHORT&&(ie=t.RG16UI),X===t.UNSIGNED_INT&&(ie=t.RG32UI),X===t.BYTE&&(ie=t.RG8I),X===t.SHORT&&(ie=t.RG16I),X===t.INT&&(ie=t.RG32I)),T===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),T===t.RGBA){const ge=ae?ku:ht.getTransfer(G);X===t.FLOAT&&(ie=t.RGBA32F),X===t.HALF_FLOAT&&(ie=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ie=ge===At?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(P,T){let X;return P?T===null||T===Do||T===qa?X=t.DEPTH24_STENCIL8:T===ti?X=t.DEPTH32F_STENCIL8:T===_l&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Do||T===qa?X=t.DEPTH_COMPONENT24:T===ti?X=t.DEPTH_COMPONENT32F:T===_l&&(X=t.DEPTH_COMPONENT16),X}function M(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ar&&P.minFilter!==Sr?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){const T=P.target;T.removeEventListener("dispose",b),C(T),T.isVideoTexture&&u.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),g(T)}function C(P){const T=r.get(P);if(T.__webglInit===void 0)return;const X=P.source,G=d.get(X);if(G){const ae=G[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(P),Object.keys(G).length===0&&d.delete(X)}r.remove(P)}function E(P){const T=r.get(P);t.deleteTexture(T.__webglTexture);const X=P.source,G=d.get(X);delete G[T.__cacheKey],a.memory.textures--}function g(P){const T=r.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(T.__webglFramebuffer[G]))for(let ae=0;ae<T.__webglFramebuffer[G].length;ae++)t.deleteFramebuffer(T.__webglFramebuffer[G][ae]);else t.deleteFramebuffer(T.__webglFramebuffer[G]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[G])}else{if(Array.isArray(T.__webglFramebuffer))for(let G=0;G<T.__webglFramebuffer.length;G++)t.deleteFramebuffer(T.__webglFramebuffer[G]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let G=0;G<T.__webglColorRenderbuffer.length;G++)T.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[G]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=P.textures;for(let G=0,ae=X.length;G<ae;G++){const ie=r.get(X[G]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),r.remove(X[G])}r.remove(P)}let S=0;function R(){S=0}function z(){const P=S;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),S+=1,P}function H(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function j(P,T){const X=r.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const G=P.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(X,P,T);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+T)}function Z(P,T){const X=r.get(P);if(P.version>0&&X.__version!==P.version){je(X,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+T)}function Y(P,T){const X=r.get(P);if(P.version>0&&X.__version!==P.version){je(X,P,T);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+T)}function J(P,T){const X=r.get(P);if(P.version>0&&X.__version!==P.version){q(X,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+T)}const U={[ap]:t.REPEAT,[yo]:t.CLAMP_TO_EDGE,[sp]:t.MIRRORED_REPEAT},W={[ar]:t.NEAREST,[n2]:t.NEAREST_MIPMAP_NEAREST,[cc]:t.NEAREST_MIPMAP_LINEAR,[Sr]:t.LINEAR,[wd]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},te={[s2]:t.NEVER,[h2]:t.ALWAYS,[l2]:t.LESS,[oM]:t.LEQUAL,[c2]:t.EQUAL,[d2]:t.GEQUAL,[u2]:t.GREATER,[f2]:t.NOTEQUAL};function le(P,T){if(T.type===ti&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Sr||T.magFilter===wd||T.magFilter===cc||T.magFilter===xo||T.minFilter===Sr||T.minFilter===wd||T.minFilter===cc||T.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,U[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,U[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,U[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,W[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ar||T.minFilter!==cc&&T.minFilter!==xo||T.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",b));const G=T.source;let ae=d.get(G);ae===void 0&&(ae={},d.set(G,ae));const ie=H(T);if(ie!==P.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ae[ie].usedTimes++;const ge=ae[P.__cacheKey];ge!==void 0&&(ae[P.__cacheKey].usedTimes--,ge.usedTimes===0&&E(T)),P.__cacheKey=ie,P.__webglTexture=ae[ie].texture}return X}function je(P,T,X){let G=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(G=t.TEXTURE_3D);const ae=Ae(P,T),ie=T.source;n.bindTexture(G,P.__webglTexture,t.TEXTURE0+X);const ge=r.get(ie);if(ie.version!==ge.__version||ae===!0){n.activeTexture(t.TEXTURE0+X);const se=ht.getPrimaries(ht.workingColorSpace),we=T.colorSpace===Ti?null:ht.getPrimaries(T.colorSpace),Xe=T.colorSpace===Ti||se===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let fe=y(T.image,!1,i.maxTextureSize);fe=Ue(T,fe);const Se=o.convert(T.format,T.colorSpace),tt=o.convert(T.type);let Ge=x(T.internalFormat,Se,tt,T.colorSpace,T.isVideoTexture);le(G,T);let Re;const ze=T.mipmaps,qe=T.isVideoTexture!==!0,Et=ge.__version===void 0||ae===!0,B=ie.dataReady,he=M(T,fe);if(T.isDepthTexture)Ge=v(T.format===Za,T.type),Et&&(qe?n.texStorage2D(t.TEXTURE_2D,1,Ge,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ge,fe.width,fe.height,0,Se,tt,null));else if(T.isDataTexture)if(ze.length>0){qe&&Et&&n.texStorage2D(t.TEXTURE_2D,he,Ge,ze[0].width,ze[0].height);for(let ee=0,re=ze.length;ee<re;ee++)Re=ze[ee],qe?B&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Re.width,Re.height,Se,tt,Re.data):n.texImage2D(t.TEXTURE_2D,ee,Ge,Re.width,Re.height,0,Se,tt,Re.data);T.generateMipmaps=!1}else qe?(Et&&n.texStorage2D(t.TEXTURE_2D,he,Ge,fe.width,fe.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Se,tt,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Ge,fe.width,fe.height,0,Se,tt,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&Et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ge,ze[0].width,ze[0].height,fe.depth);for(let ee=0,re=ze.length;ee<re;ee++)if(Re=ze[ee],T.format!==Mr)if(Se!==null)if(qe){if(B)if(T.layerUpdates.size>0){const ve=v_(Re.width,Re.height,T.format,T.type);for(const He of T.layerUpdates){const et=Re.data.subarray(He*ve/Re.data.BYTES_PER_ELEMENT,(He+1)*ve/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,He,Re.width,Re.height,1,Se,et,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,fe.depth,Se,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ge,Re.width,Re.height,fe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,fe.depth,Se,tt,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ge,Re.width,Re.height,fe.depth,0,Se,tt,Re.data)}else{qe&&Et&&n.texStorage2D(t.TEXTURE_2D,he,Ge,ze[0].width,ze[0].height);for(let ee=0,re=ze.length;ee<re;ee++)Re=ze[ee],T.format!==Mr?Se!==null?qe?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Re.width,Re.height,Se,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ge,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?B&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Re.width,Re.height,Se,tt,Re.data):n.texImage2D(t.TEXTURE_2D,ee,Ge,Re.width,Re.height,0,Se,tt,Re.data)}else if(T.isDataArrayTexture)if(qe){if(Et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ge,fe.width,fe.height,fe.depth),B)if(T.layerUpdates.size>0){const ee=v_(fe.width,fe.height,T.format,T.type);for(const re of T.layerUpdates){const ve=fe.data.subarray(re*ee/fe.data.BYTES_PER_ELEMENT,(re+1)*ee/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,Se,tt,ve)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,tt,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ge,fe.width,fe.height,fe.depth,0,Se,tt,fe.data);else if(T.isData3DTexture)qe?(Et&&n.texStorage3D(t.TEXTURE_3D,he,Ge,fe.width,fe.height,fe.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,tt,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ge,fe.width,fe.height,fe.depth,0,Se,tt,fe.data);else if(T.isFramebufferTexture){if(Et)if(qe)n.texStorage2D(t.TEXTURE_2D,he,Ge,fe.width,fe.height);else{let ee=fe.width,re=fe.height;for(let ve=0;ve<he;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ge,ee,re,0,Se,tt,null),ee>>=1,re>>=1}}else if(ze.length>0){if(qe&&Et){const ee=Oe(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,Ge,ee.width,ee.height)}for(let ee=0,re=ze.length;ee<re;ee++)Re=ze[ee],qe?B&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se,tt,Re):n.texImage2D(t.TEXTURE_2D,ee,Ge,Se,tt,Re);T.generateMipmaps=!1}else if(qe){if(Et){const ee=Oe(fe);n.texStorage2D(t.TEXTURE_2D,he,Ge,ee.width,ee.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,tt,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ge,Se,tt,fe);m(T)&&h(G),ge.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function q(P,T,X){if(T.image.length!==6)return;const G=Ae(P,T),ae=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const ie=r.get(ae);if(ae.version!==ie.__version||G===!0){n.activeTexture(t.TEXTURE0+X);const ge=ht.getPrimaries(ht.workingColorSpace),se=T.colorSpace===Ti?null:ht.getPrimaries(T.colorSpace),we=T.colorSpace===Ti||ge===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,fe=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!Xe&&!fe?Se[re]=y(T.image[re],!0,i.maxCubemapSize):Se[re]=fe?T.image[re].image:T.image[re],Se[re]=Ue(T,Se[re]);const tt=Se[0],Ge=o.convert(T.format,T.colorSpace),Re=o.convert(T.type),ze=x(T.internalFormat,Ge,Re,T.colorSpace),qe=T.isVideoTexture!==!0,Et=ie.__version===void 0||G===!0,B=ae.dataReady;let he=M(T,tt);le(t.TEXTURE_CUBE_MAP,T);let ee;if(Xe){qe&&Et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,tt.width,tt.height);for(let re=0;re<6;re++){ee=Se[re].mipmaps;for(let ve=0;ve<ee.length;ve++){const He=ee[ve];T.format!==Mr?Ge!==null?qe?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,He.width,He.height,Ge,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ze,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,He.width,He.height,Ge,Re,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ze,He.width,He.height,0,Ge,Re,He.data)}}}else{if(ee=T.mipmaps,qe&&Et){ee.length>0&&he++;const re=Oe(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,re.width,re.height)}for(let re=0;re<6;re++)if(fe){qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Ge,Re,Se[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Se[re].width,Se[re].height,0,Ge,Re,Se[re].data);for(let ve=0;ve<ee.length;ve++){const et=ee[ve].image[re].image;qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,et.width,et.height,Ge,Re,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ze,et.width,et.height,0,Ge,Re,et.data)}}else{qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ge,Re,Se[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Ge,Re,Se[re]);for(let ve=0;ve<ee.length;ve++){const He=ee[ve];qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,Ge,Re,He.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ze,Ge,Re,He.image[re])}}}m(T)&&h(t.TEXTURE_CUBE_MAP),ie.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ce(P,T,X,G,ae,ie){const ge=o.convert(X.format,X.colorSpace),se=o.convert(X.type),we=x(X.internalFormat,ge,se,X.colorSpace);if(!r.get(T).__hasExternalTextures){const fe=Math.max(1,T.width>>ie),Se=Math.max(1,T.height>>ie);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ie,we,fe,Se,T.depth,0,ge,se,null):n.texImage2D(ae,ie,we,fe,Se,0,ge,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Te(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,ae,r.get(X).__webglTexture,0,Ke(T)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,ae,r.get(X).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(P,T,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){const G=T.depthTexture,ae=G&&G.isDepthTexture?G.type:null,ie=v(T.stencilBuffer,ae),ge=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=Ke(T);Te(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,ie,T.width,T.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ie,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ie,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,P)}else{const G=T.textures;for(let ae=0;ae<G.length;ae++){const ie=G[ae],ge=o.convert(ie.format,ie.colorSpace),se=o.convert(ie.type),we=x(ie.internalFormat,ge,se,ie.colorSpace),Xe=Ke(T);X&&Te(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,we,T.width,T.height):Te(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,we,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,we,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const G=r.get(T.depthTexture).__webglTexture,ae=Ke(T);if(T.depthTexture.format===Fa)Te(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,G,0);else if(T.depthTexture.format===Za)Te(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const T=r.get(P),X=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const G=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),G){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,G.removeEventListener("dispose",ae)};G.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=G}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[G]),T.__webglDepthbuffer[G]===void 0)T.__webglDepthbuffer[G]=t.createRenderbuffer(),pe(T.__webglDepthbuffer[G],P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ie)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),pe(T.__webglDepthbuffer,P,!1);else{const G=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,G,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(P,T,X){const G=r.get(P);T!==void 0&&ce(G.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ie(P)}function Ye(P){const T=P.texture,X=r.get(P),G=r.get(T);P.addEventListener("dispose",A);const ae=P.textures,ie=P.isWebGLCubeRenderTarget===!0,ge=ae.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=T.version,a.memory.textures++),ie){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let we=0;we<T.mipmaps.length;we++)X.__webglFramebuffer[se][we]=t.createFramebuffer()}else X.__webglFramebuffer[se]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)X.__webglFramebuffer[se]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(ge)for(let se=0,we=ae.length;se<we;se++){const Xe=r.get(ae[se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Te(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<ae.length;se++){const we=ae[se];X.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[se]);const Xe=o.convert(we.format,we.colorSpace),fe=o.convert(we.type),Se=x(we.internalFormat,Xe,fe,we.colorSpace,P.isXRRenderTarget===!0),tt=Ke(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Se,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,X.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),le(t.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ce(X.__webglFramebuffer[se][we],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else ce(X.__webglFramebuffer[se],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ge){for(let se=0,we=ae.length;se<we;se++){const Xe=ae[se],fe=r.get(Xe);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),le(t.TEXTURE_2D,Xe),ce(X.__webglFramebuffer,P,Xe,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),m(Xe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,G.__webglTexture),le(se,T),T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ce(X.__webglFramebuffer[we],P,T,t.COLOR_ATTACHMENT0,se,we);else ce(X.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,se,0);m(T)&&h(se),n.unbindTexture()}P.depthBuffer&&Ie(P)}function mt(P){const T=P.textures;for(let X=0,G=T.length;X<G;X++){const ae=T[X];if(m(ae)){const ie=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=r.get(ae).__webglTexture;n.bindTexture(ie,ge),h(ie),n.unbindTexture()}}}const D=[],it=[];function Ve(P){if(P.samples>0){if(Te(P)===!1){const T=P.textures,X=P.width,G=P.height;let ae=t.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=r.get(P),se=T.length>1;if(se)for(let we=0;we<T.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let we=0;we<T.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const Xe=r.get(T[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,X,G,0,0,X,G,ae,t.NEAREST),l===!0&&(D.length=0,it.length=0,D.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(ie),it.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,it)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let we=0;we<T.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ge.__webglColorRenderbuffer[we]);const Xe=r.get(T[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ke(P){return Math.min(i.maxSamples,P.samples)}function Te(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dt(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Ue(P,T){const X=P.colorSpace,G=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==qi&&X!==Ti&&(ht.getTransfer(X)===At?(G!==Mr||ae!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=J,this.rebindTextures=We,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Te}function gU(t,e){function n(r,i=Ti){let o;const a=ht.getTransfer(i);if(r===ci)return t.UNSIGNED_BYTE;if(r===ag)return t.UNSIGNED_SHORT_4_4_4_4;if(r===sg)return t.UNSIGNED_SHORT_5_5_5_1;if(r===ZS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===KS)return t.BYTE;if(r===qS)return t.SHORT;if(r===_l)return t.UNSIGNED_SHORT;if(r===og)return t.INT;if(r===Do)return t.UNSIGNED_INT;if(r===ti)return t.FLOAT;if(r===Rl)return t.HALF_FLOAT;if(r===QS)return t.ALPHA;if(r===JS)return t.RGB;if(r===Mr)return t.RGBA;if(r===eM)return t.LUMINANCE;if(r===tM)return t.LUMINANCE_ALPHA;if(r===Fa)return t.DEPTH_COMPONENT;if(r===Za)return t.DEPTH_STENCIL;if(r===nM)return t.RED;if(r===lg)return t.RED_INTEGER;if(r===rM)return t.RG;if(r===cg)return t.RG_INTEGER;if(r===ug)return t.RGBA_INTEGER;if(r===Zc||r===Qc||r===Jc||r===eu)if(a===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Zc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Zc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lp||r===cp||r===up||r===fp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===up)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dp||r===hp||r===pp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dp||r===hp)return a===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===pp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mp||r===gp||r===vp||r===_p||r===yp||r===xp||r===Sp||r===Mp||r===Ep||r===wp||r===Tp||r===Cp||r===Ap||r===bp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===mp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_p)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ep)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bp)return a===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tu||r===Rp||r===Pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tu)return a===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===iM||r===Lp||r===Dp||r===Ip)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===tu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ip)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class vU extends ir{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lc extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _U={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,r),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(_U)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const yU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Un,o=e.properties.get(i);o.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Gi({vertexShader:yU,fragmentShader:xU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MU extends is{constructor(e,n){super();const r=this;let i=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const y=new SU,m=n.getContextAttributes();let h=null,x=null;const v=[],M=[],b=new pt;let A=null;const C=new ir;C.layers.enable(1),C.viewport=new on;const E=new ir;E.layers.enable(2),E.viewport=new on;const g=[C,E],S=new vU;S.layers.enable(1),S.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=v[q];return ce===void 0&&(ce=new Zd,v[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=v[q];return ce===void 0&&(ce=new Zd,v[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=v[q];return ce===void 0&&(ce=new Zd,v[q]=ce),ce.getHandSpace()};function H(q){const ce=M.indexOf(q.inputSource);if(ce===-1)return;const pe=v[ce];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<v.length;q++){const ce=M[q];ce!==null&&(M[q]=null,v[q].disconnect(ce))}R=null,z=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,i=null,x=null,je.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,n,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Io(p.framebufferWidth,p.framebufferHeight,{format:Mr,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,pe=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?Za:Fa,pe=m.stencil?qa:Do);const Ie={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:o};f=new XRWebGLBinding(i,n),d=f.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Io(d.textureWidth,d.textureHeight,{format:Mr,type:ci,depthTexture:new xM(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),je.setContext(i),je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(q){for(let ce=0;ce<q.removed.length;ce++){const pe=q.removed[ce],me=M.indexOf(pe);me>=0&&(M[me]=null,v[me].disconnect(pe))}for(let ce=0;ce<q.added.length;ce++){const pe=q.added[ce];let me=M.indexOf(pe);if(me===-1){for(let We=0;We<v.length;We++)if(We>=M.length){M.push(pe),me=We;break}else if(M[We]===null){M[We]=pe,me=We;break}if(me===-1)break}const Ie=v[me];Ie&&Ie.connect(pe)}}const Y=new K,J=new K;function U(q,ce,pe){Y.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const me=Y.distanceTo(J),Ie=ce.projectionMatrix.elements,We=pe.projectionMatrix.elements,Ye=Ie[14]/(Ie[10]-1),mt=Ie[14]/(Ie[10]+1),D=(Ie[9]+1)/Ie[5],it=(Ie[9]-1)/Ie[5],Ve=(Ie[8]-1)/Ie[0],Ke=(We[8]+1)/We[0],Te=Ye*Ve,dt=Ye*Ke,Ue=me/(-Ve+Ke),Oe=Ue*-Ve;if(ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const P=Ye+Ue,T=mt+Ue,X=Te-Oe,G=dt+(me-Oe),ae=D*mt/T*P,ie=it*mt/T*P;q.projectionMatrix.makePerspective(X,G,ae,ie,P,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function W(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ce=q.near,pe=q.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),S.near=E.near=C.near=ce,S.far=E.far=C.far=pe,(R!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far);const me=q.parent,Ie=S.cameras;W(S,me);for(let We=0;We<Ie.length;We++)W(Ie[We],me);Ie.length===2?U(S,C,E):S.projectionMatrix.copy(C.projectionMatrix),te(q,S,me)};function te(q,ce,pe){pe===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Up*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let le=null;function Ae(q,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let me=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let We=0;We<pe.length;We++){const Ye=pe[We];let mt=null;if(p!==null)mt=p.getViewport(Ye);else{const it=f.getViewSubImage(d,Ye);mt=it.viewport,We===0&&(e.setRenderTargetTextures(x,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(x))}let D=g[We];D===void 0&&(D=new ir,D.layers.enable(We),D.viewport=new on,g[We]=D),D.matrix.fromArray(Ye.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ye.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(mt.x,mt.y,mt.width,mt.height),We===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(D)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const We=f.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&y.init(e,We,i.renderState)}}for(let pe=0;pe<v.length;pe++){const me=M[pe],Ie=v[pe];me!==null&&Ie!==void 0&&Ie.update(me,ce,c||a)}le&&le(q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),_=null}const je=new yM;je.setAnimationLoop(Ae),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const io=new ui,EU=new Yt;function wU(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,mM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,x,v,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(o(m,h),_(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),y(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===In&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===In&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,io.copy(M),io.x*=-1,io.y*=-1,io.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),m.envMapRotation.value.setFromMatrix4(EU.makeRotationFromEuler(io)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===In&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function TU(t,e,n,r){let i={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;r.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(_(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",m));const b=v.program;r.updateUBOMapping(x,b);const A=e.render.frame;o[x.id]!==A&&(d(x),o[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const M=t.createBuffer(),b=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let x=0;x<s;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],M=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=M.length;A<C;A++){const E=Array.isArray(M[A])?M[A]:[M[A]];for(let g=0,S=E.length;g<S;g++){const R=E[g];if(p(R,A,g,b)===!0){const z=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let Z=0;Z<H.length;Z++){const Y=H[Z],J=y(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+j,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,M,b){const A=x.value,C=v+"_"+M;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const E=b[C];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return b[C]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function _(x){const v=x.uniforms;let M=0;const b=16;for(let C=0,E=v.length;C<E;C++){const g=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,R=g.length;S<R;S++){const z=g[S],H=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Z=H.length;j<Z;j++){const Y=H[j],J=y(Y),U=M%b,W=U%J.boundary,te=U+W;M+=W,te!==0&&b-te<J.storage&&(M+=b-te),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}const A=M%b;return A>0&&(M+=b-A),x.__size=M,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function h(){for(const x in i)t.deleteBuffer(i[x]);a=[],i={},o={}}return{bind:l,update:c,dispose:h}}class CU{constructor(e={}){const{canvas:n=m2(),context:r=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pr,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let M=!1,b=0,A=0,C=null,E=-1,g=null;const S=new on,R=new on;let z=null;const H=new vt(0);let j=0,Z=n.width,Y=n.height,J=1,U=null,W=null;const te=new on(0,0,Z,Y),le=new on(0,0,Z,Y);let Ae=!1;const je=new _M;let q=!1,ce=!1;const pe=new Yt,me=new K,Ie=new on,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function mt(){return C===null?J:1}let D=r;function it(w,L){return n.getContext(w,L)}try{const w={alpha:!0,depth:i,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ig}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",ve,!1),D===null){const L="webgl2";if(D=it(L,w),D===null)throw it(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Ke,Te,dt,Ue,Oe,P,T,X,G,ae,ie,ge,se,we,Xe,fe,Se,tt,Ge,Re,ze,qe,Et;function B(){Ve=new D3(D),Ve.init(),ze=new gU(D,Ve),Ke=new T3(D,Ve,e,ze),Te=new hU(D),dt=new N3(D),Ue=new JI,Oe=new mU(D,Ve,Te,Ue,Ke,ze,dt),P=new A3(v),T=new L3(v),X=new H2(D),qe=new E3(D,X),G=new I3(D,X,dt,qe),ae=new O3(D,G,X,dt),tt=new F3(D,Ke,Oe),Xe=new C3(Ue),ie=new QI(v,P,T,Ve,Ke,qe,Xe),ge=new wU(v,Ue),se=new tU,we=new sU(Ve),Se=new M3(v,P,T,Te,ae,d,l),fe=new dU(v,ae,Ke),Et=new TU(D,dt,Ke,Te),Ge=new w3(D,Ve,dt),Re=new U3(D,Ve,dt),dt.programs=ie.programs,v.capabilities=Ke,v.extensions=Ve,v.properties=Ue,v.renderLists=se,v.shadowMap=fe,v.state=Te,v.info=dt}B();const he=new MU(v,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Z,Y,!1))},this.getSize=function(w){return w.set(Z,Y)},this.setSize=function(w,L,F=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,Y=L,n.width=Math.floor(w*J),n.height=Math.floor(L*J),F===!0&&(n.style.width=w+"px",n.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(Z*J,Y*J).floor()},this.setDrawingBufferSize=function(w,L,F){Z=w,Y=L,J=F,n.width=Math.floor(w*F),n.height=Math.floor(L*F),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,L,F,V){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,L,F,V),Te.viewport(S.copy(te).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,L,F,V){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,L,F,V),Te.scissor(R.copy(le).multiplyScalar(J).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Te.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(w=!0,L=!0,F=!0){let V=0;if(w){let N=!1;if(C!==null){const ne=C.texture.format;N=ne===ug||ne===cg||ne===lg}if(N){const ne=C.texture.type,ue=ne===ci||ne===Do||ne===_l||ne===qa||ne===ag||ne===sg,xe=Se.getClearColor(),_e=Se.getClearAlpha(),ke=xe.r,Fe=xe.g,Pe=xe.b;ue?(p[0]=ke,p[1]=Fe,p[2]=Pe,p[3]=_e,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=ke,_[1]=Fe,_[2]=Pe,_[3]=_e,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}L&&(V|=D.DEPTH_BUFFER_BIT),F&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),se.dispose(),we.dispose(),Ue.dispose(),P.dispose(),T.dispose(),ae.dispose(),qe.dispose(),Et.dispose(),ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",kn),he.removeEventListener("sessionend",Qi),Zn.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=dt.autoReset,L=fe.enabled,F=fe.autoUpdate,V=fe.needsUpdate,N=fe.type;B(),dt.autoReset=w,fe.enabled=L,fe.autoUpdate=F,fe.needsUpdate=V,fe.type=N}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const L=w.target;L.removeEventListener("dispose",He),et(L)}function et(w){Rt(w),Ue.remove(w)}function Rt(w){const L=Ue.get(w).programs;L!==void 0&&(L.forEach(function(F){ie.releaseProgram(F)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,F,V,N,ne){L===null&&(L=We);const ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=Le(w,L,F,V,N);Te.setMaterial(V,ue);let _e=F.index,ke=1;if(V.wireframe===!0){if(_e=G.getWireframeAttribute(F),_e===void 0)return;ke=2}const Fe=F.drawRange,Pe=F.attributes.position;let nt=Fe.start*ke,gt=(Fe.start+Fe.count)*ke;ne!==null&&(nt=Math.max(nt,ne.start*ke),gt=Math.min(gt,(ne.start+ne.count)*ke)),_e!==null?(nt=Math.max(nt,0),gt=Math.min(gt,_e.count)):Pe!=null&&(nt=Math.max(nt,0),gt=Math.min(gt,Pe.count));const st=gt-nt;if(st<0||st===1/0)return;qe.setup(N,V,xe,F,_e);let en,ot=Ge;if(_e!==null&&(en=X.get(_e),ot=Re,ot.setIndex(en)),N.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*mt()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(N.isLine){let De=V.linewidth;De===void 0&&(De=1),Te.setLineWidth(De*mt()),N.isLineSegments?ot.setMode(D.LINES):N.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else N.isPoints?ot.setMode(D.POINTS):N.isSprite&&ot.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,Ne=N._multiDrawCounts,Be=N._multiDrawCount,Tt=_e?X.get(_e).bytesPerElement:1,ct=Ue.get(V).currentProgram.getUniforms();for(let Dt=0;Dt<Be;Dt++)ct.setValue(D,"_gl_DrawID",Dt),ot.render(De[Dt]/Tt,Ne[Dt])}else if(N.isInstancedMesh)ot.renderInstances(nt,st,N.count);else if(F.isInstancedBufferGeometry){const De=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ne=Math.min(F.instanceCount,De);ot.renderInstances(nt,st,Ne)}else ot.render(nt,st)};function Kt(w,L,F){w.transparent===!0&&w.side===Qr&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,$(w,L,F),w.side=Vi,w.needsUpdate=!0,$(w,L,F),w.side=Qr):$(w,L,F)}this.compile=function(w,L,F=null){F===null&&(F=w),m=we.get(F),m.init(L),x.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==F&&w.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const V=new Set;return w.traverse(function(N){const ne=N.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const xe=ne[ue];Kt(xe,F,N),V.add(xe)}else Kt(ne,F,N),V.add(ne)}),x.pop(),m=null,V},this.compileAsync=function(w,L,F=null){const V=this.compile(w,L,F);return new Promise(N=>{function ne(){if(V.forEach(function(ue){Ue.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){N(w);return}setTimeout(ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let at=null;function dr(w){at&&at(w)}function kn(){Zn.stop()}function Qi(){Zn.start()}const Zn=new yM;Zn.setAnimationLoop(dr),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){at=w,he.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},he.addEventListener("sessionstart",kn),he.addEventListener("sessionend",Qi),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(L),L=he.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,L,C),m=we.get(w,x.length),m.init(L),x.push(m),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(pe),ce=this.localClippingEnabled,q=Xe.init(this.clippingPlanes,ce),y=se.get(w,h.length),y.init(),h.push(y),he.enabled===!0&&he.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&Bo(ne,L,-1/0,v.sortObjects)}Bo(w,L,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(U,W),Ye=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ye&&Se.addToRenderList(y,w),this.info.render.frame++,q===!0&&Xe.beginShadows();const F=m.state.shadowsArray;fe.render(F,w,L),q===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=y.opaque,N=y.transmissive;if(m.setupLights(),L.isArrayCamera){const ne=L.cameras;if(N.length>0)for(let ue=0,xe=ne.length;ue<xe;ue++){const _e=ne[ue];Ol(V,N,w,_e)}Ye&&Se.render(w);for(let ue=0,xe=ne.length;ue<xe;ue++){const _e=ne[ue];Fl(y,w,_e,_e.viewport)}}else N.length>0&&Ol(V,N,w,L),Ye&&Se.render(w),Fl(y,w,L);C!==null&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,L),qe.resetDefaultState(),E=-1,g=null,x.pop(),x.length>0?(m=x[x.length-1],q===!0&&Xe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Bo(w,L,F,V){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){V&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const ue=ae.update(w),xe=w.material;xe.visible&&y.push(w,ue,xe,F,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const ue=ae.update(w),xe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ie.copy(ue.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const _e=ue.groups;for(let ke=0,Fe=_e.length;ke<Fe;ke++){const Pe=_e[ke],nt=xe[Pe.materialIndex];nt&&nt.visible&&y.push(w,ue,nt,F,Ie.z,Pe)}}else xe.visible&&y.push(w,ue,xe,F,Ie.z,null)}}const ne=w.children;for(let ue=0,xe=ne.length;ue<xe;ue++)Bo(ne[ue],L,F,V)}function Fl(w,L,F,V){const N=w.opaque,ne=w.transmissive,ue=w.transparent;m.setupLightsView(F),q===!0&&Xe.setGlobalState(v.clippingPlanes,F),V&&Te.viewport(S.copy(V)),N.length>0&&I(N,L,F),ne.length>0&&I(ne,L,F),ue.length>0&&I(ue,L,F),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ol(w,L,F,V){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Io(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Rl:ci,minFilter:xo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ne=m.state.transmissionRenderTarget[V.id],ue=V.viewport||S;ne.setSize(ue.z,ue.w);const xe=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(H),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Se.render(F);const _e=v.toneMapping;v.toneMapping=ki;const ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),q===!0&&Xe.setGlobalState(v.clippingPlanes,V),I(w,F,V),Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,nt=L.length;Pe<nt;Pe++){const gt=L[Pe],st=gt.object,en=gt.geometry,ot=gt.material,De=gt.group;if(ot.side===Qr&&st.layers.test(V.layers)){const Ne=ot.side;ot.side=In,ot.needsUpdate=!0,O(st,F,V,en,ot,De),ot.side=Ne,ot.needsUpdate=!0,Fe=!0}}Fe===!0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne))}v.setRenderTarget(xe),v.setClearColor(H,j),ke!==void 0&&(V.viewport=ke),v.toneMapping=_e}function I(w,L,F){const V=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ne=w.length;N<ne;N++){const ue=w[N],xe=ue.object,_e=ue.geometry,ke=V===null?ue.material:V,Fe=ue.group;xe.layers.test(F.layers)&&O(xe,L,F,_e,ke,Fe)}}function O(w,L,F,V,N,ne){w.onBeforeRender(v,L,F,V,N,ne),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,L,F,V,w,ne),N.transparent===!0&&N.side===Qr&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,v.renderBufferDirect(F,L,V,N,w,ne),N.side=Vi,N.needsUpdate=!0,v.renderBufferDirect(F,L,V,N,w,ne),N.side=Qr):v.renderBufferDirect(F,L,V,N,w,ne),w.onAfterRender(v,L,F,V,N,ne)}function $(w,L,F){L.isScene!==!0&&(L=We);const V=Ue.get(w),N=m.state.lights,ne=m.state.shadowsArray,ue=N.state.version,xe=ie.getParameters(w,N.state,ne,L,F),_e=ie.getProgramCacheKey(xe);let ke=V.programs;V.environment=w.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(w.isMeshStandardMaterial?T:P).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",He),ke=new Map,V.programs=ke);let Fe=ke.get(_e);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===ue)return Ce(w,xe),Fe}else xe.uniforms=ie.getUniforms(w),w.onBeforeCompile(xe,v),Fe=ie.acquireProgram(xe,_e),ke.set(_e,Fe),V.uniforms=xe.uniforms;const Pe=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=Xe.uniform),Ce(w,xe),V.needsLights=ye(w),V.lightsStateVersion=ue,V.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function oe(w){if(w.uniformsList===null){const L=w.currentProgram.getUniforms();w.uniformsList=nu.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function Ce(w,L){const F=Ue.get(w);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Le(w,L,F,V,N){L.isScene!==!0&&(L=We),Oe.resetTextureUnits();const ne=L.fog,ue=V.isMeshStandardMaterial?L.environment:null,xe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qi,_e=(V.isMeshStandardMaterial?T:P).get(V.envMap||ue),ke=V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Fe=!!F.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,gt=!!F.morphAttributes.color;let st=ki;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(st=v.toneMapping);const en=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=en!==void 0?en.length:0,De=Ue.get(V),Ne=m.state.lights;if(q===!0&&(ce===!0||w!==g)){const Qn=w===g&&V.id===E;Xe.setState(V,w,Qn)}let Be=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ne.state.version||De.outputColorSpace!==xe||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==_e||V.fog===!0&&De.fog!==ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Xe.numPlanes||De.numIntersection!==Xe.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==nt||De.morphColors!==gt||De.toneMapping!==st||De.morphTargetsCount!==ot)&&(Be=!0):(Be=!0,De.__version=V.version);let Tt=De.currentProgram;Be===!0&&(Tt=$(V,L,N));let ct=!1,Dt=!1,zo=!1;const Ot=Tt.getUniforms(),di=De.uniforms;if(Te.useProgram(Tt.program)&&(ct=!0,Dt=!0,zo=!0),V.id!==E&&(E=V.id,Dt=!0),ct||g!==w){Ot.setValue(D,"projectionMatrix",w.projectionMatrix),Ot.setValue(D,"viewMatrix",w.matrixWorldInverse);const Qn=Ot.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,me.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),g!==w&&(g=w,Dt=!0,zo=!0)}if(N.isSkinnedMesh){Ot.setOptional(D,N,"bindMatrix"),Ot.setOptional(D,N,"bindMatrixInverse");const Qn=N.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Ot.setValue(D,"boneTexture",Qn.boneTexture,Oe))}N.isBatchedMesh&&(Ot.setOptional(D,N,"batchingTexture"),Ot.setValue(D,"batchingTexture",N._matricesTexture,Oe),Ot.setOptional(D,N,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",N._indirectTexture,Oe),Ot.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",N._colorsTexture,Oe));const Hf=F.morphAttributes;if((Hf.position!==void 0||Hf.normal!==void 0||Hf.color!==void 0)&&tt.update(N,F,Tt),(Dt||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,Ot.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(di.envMap.value=_e,di.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(di.envMapIntensity.value=L.environmentIntensity),Dt&&(Ot.setValue(D,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&$e(di,zo),ne&&V.fog===!0&&ge.refreshFogUniforms(di,ne),ge.refreshMaterialUniforms(di,V,J,Y,m.state.transmissionRenderTarget[w.id]),nu.upload(D,oe(De),di,Oe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nu.upload(D,oe(De),di,Oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ot.setValue(D,"center",N.center),Ot.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ot.setValue(D,"normalMatrix",N.normalMatrix),Ot.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qn=V.uniformsGroups;for(let Vf=0,AM=Qn.length;Vf<AM;Vf++){const hg=Qn[Vf];Et.update(hg,Tt),Et.bind(hg,Tt)}}return Tt}function $e(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function ye(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,L,F){Ue.get(w.texture).__webglTexture=L,Ue.get(w.depthTexture).__webglTexture=F;const V=Ue.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=F===void 0,V.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,L){const F=Ue.get(w);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,F=0){C=w,b=L,A=F;let V=!0,N=null,ne=!1,ue=!1;if(w){const _e=Ue.get(w);if(_e.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(_e.__webglFramebuffer===void 0)Oe.setupRenderTarget(w);else if(_e.__hasExternalTextures)Oe.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(_e.__boundDepthTexture!==Pe){if(Pe!==null&&Ue.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ue=!0);const Fe=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?N=Fe[L][F]:N=Fe[L],ne=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?N=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[F]:N=Fe,S.copy(w.viewport),R.copy(w.scissor),z=w.scissorTest}else S.copy(te).multiplyScalar(J).floor(),R.copy(le).multiplyScalar(J).floor(),z=Ae;if(Te.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&Te.drawBuffers(w,N),Te.viewport(S),Te.scissor(R),Te.setScissorTest(z),ne){const _e=Ue.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e.__webglTexture,F)}else if(ue){const _e=Ue.get(w.texture),ke=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,F||0,ke)}E=-1},this.readRenderTargetPixels=function(w,L,F,V,N,ne,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Te.bindFramebuffer(D.FRAMEBUFFER,xe);try{const _e=w.texture,ke=_e.format,Fe=_e.type;if(!Ke.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-V&&F>=0&&F<=w.height-N&&D.readPixels(L,F,V,N,ze.convert(ke),ze.convert(Fe),ne)}finally{const _e=C!==null?Ue.get(C).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(w,L,F,V,N,ne,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Te.bindFramebuffer(D.FRAMEBUFFER,xe);try{const _e=w.texture,ke=_e.format,Fe=_e.type;if(!Ke.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=w.width-V&&F>=0&&F<=w.height-N){const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),D.readPixels(L,F,V,N,ze.convert(ke),ze.convert(Fe),0),D.flush();const nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await g2(D,nt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne)}finally{D.deleteBuffer(Pe),D.deleteSync(nt)}return ne}}finally{const _e=C!==null?Ue.get(C).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(w,L=null,F=0){w.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-F),N=Math.floor(w.image.width*V),ne=Math.floor(w.image.height*V),ue=L!==null?L.x:0,xe=L!==null?L.y:0;Oe.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ue,xe,N,ne),Te.unbindTexture()},this.copyTextureToTexture=function(w,L,F=null,V=null,N=0){w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],L=arguments[2],N=arguments[3]||0,F=null);let ne,ue,xe,_e,ke,Fe;F!==null?(ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,xe=F.min.x,_e=F.min.y):(ne=w.image.width,ue=w.image.height,xe=0,_e=0),V!==null?(ke=V.x,Fe=V.y):(ke=0,Fe=0);const Pe=ze.convert(L.format),nt=ze.convert(L.type);Oe.setTexture2D(L,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),Ne=w.isCompressedTexture?w.mipmaps[N]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ne.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,_e),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,ke,Fe,ne,ue,Pe,nt,Ne.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,ke,Fe,Ne.width,Ne.height,Pe,Ne.data):D.texSubImage2D(D.TEXTURE_2D,N,ke,Fe,ne,ue,Pe,nt,Ne),D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),N===0&&L.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,L,F=null,V=null,N=0){w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,V=arguments[1]||null,w=arguments[2],L=arguments[3],N=arguments[4]||0);let ne,ue,xe,_e,ke,Fe,Pe,nt,gt;const st=w.isCompressedTexture?w.mipmaps[N]:w.image;F!==null?(ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,xe=F.max.z-F.min.z,_e=F.min.x,ke=F.min.y,Fe=F.min.z):(ne=st.width,ue=st.height,xe=st.depth,_e=0,ke=0,Fe=0),V!==null?(Pe=V.x,nt=V.y,gt=V.z):(Pe=0,nt=0,gt=0);const en=ze.convert(L.format),ot=ze.convert(L.type);let De;if(L.isData3DTexture)Oe.setTexture3D(L,0),De=D.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Oe.setTexture2DArray(L,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Ne=D.getParameter(D.UNPACK_ROW_LENGTH),Be=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tt=D.getParameter(D.UNPACK_SKIP_PIXELS),ct=D.getParameter(D.UNPACK_SKIP_ROWS),Dt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(De,N,Pe,nt,gt,ne,ue,xe,en,ot,st.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(De,N,Pe,nt,gt,ne,ue,xe,en,st.data):D.texSubImage3D(De,N,Pe,nt,gt,ne,ue,xe,en,ot,st),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Be),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt),N===0&&L.generateMipmaps&&D.generateMipmap(De),Te.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,Te.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fg?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===kf?"display-p3":"srgb"}}class AU extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class TM extends Il{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const __=new Yt,Fp=new cM,Dc=new Bf,Ic=new K;class bU extends Nn{constructor(e=new Zi,n=new TM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(i),Dc.radius+=o,e.ray.intersectsSphere(Dc)===!1)return;__.copy(i).invert(),Fp.copy(e.ray).applyMatrix4(__);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=r.index,f=r.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,y=p;_<y;_++){const m=c.getX(_);Ic.fromBufferAttribute(f,m),y_(Ic,m,l,i,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,y=p;_<y;_++)Ic.fromBufferAttribute(f,_),y_(Ic,_,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function y_(t,e,n,r,i,o,a){const s=Fp.distanceSqToPoint(t);if(s<n){const l=new K;Fp.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);function RU(){const t=k.useRef(null);return k.useEffect(()=>{const e=t.current,n=new AU,r=new ir(90,window.innerWidth/window.innerHeight,.1,1e3),i=new CU({antialias:!0,depth:!0});i.setSize(window.innerWidth,window.innerHeight),e==null||e.appendChild(i.domElement);const o=new Nl(400,400,50,50),a=new TM({color:16777215,size:.1}),s=new bU(o,a);n.add(s),r.position.z=50,r.position.y=1;const l=()=>{requestAnimationFrame(l);const{array:u}=s.geometry.attributes.position;for(let f=0;f<u.length;f+=3)u[f+2]=2*Math.sin(f/5+Date.now()*.001%(2*Math.PI));s.geometry.attributes.position.needsUpdate=!0,i.render(n,r)};l();const c=()=>{i.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),e==null||e.removeChild(i.domElement)}},[]),Ee.jsx(yb,{ref:t,sx:{width:1,height:1,position:"absolute",top:0,left:0,zIndex:-1}})}const x_={color:"#FFFFFFA5",textDecoration:"none","&:hover":{color:"#FFFFFF"}};function PU(){return Ee.jsxs(Df,{direction:"row",justifyContent:"flex-end",alignItems:"center",gap:1,sx:{width:"100vw",position:"fixed",bottom:0,left:0,backgroundColor:"#262626",color:"#FFFFFFA5",padding:.2,fontSize:10,textAlign:"right"},children:[Ee.jsxs(lr,{variant:"caption",children:["Made by ",Ee.jsx(J0,{sx:x_,href:"https://www.linkedin.com/in/agustinferres/",children:"Agustin Ferres |"})]}),Ee.jsxs(lr,{variant:"caption",children:["Find me on "," ",Ee.jsx(J0,{sx:x_,href:"https://github.com/AgustinFerres",children:"GitHub |"})]}),Ee.jsx(lr,{variant:"caption",children:"© 2024 Agustin Ferres."})]})}function LU(){const t=VS(),e=n=>{CM(n,t)};return Ee.jsxs(Df,{direction:"row",justifyContent:"center",alignItems:"center",gap:5,sx:{p:2,pt:5},children:[Ee.jsx(lr,{onClick:()=>e(js.HOME),children:"Home"}),Ee.jsx(lr,{onClick:()=>e(js.ABOUT),children:"About"}),Ee.jsx(lr,{onClick:()=>e(js.CONTACT),children:"Contact"})]})}const Qd=t=>({backgroundColor:t??"transparent",width:1});function DU(t){return Ee.jsxs(lc,{container:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"100svh"},children:[Ee.jsx(lc,{item:!0,sx:Qd(""),children:Ee.jsx(LU,{})}),Ee.jsx(lc,{item:!0,sx:Qd(""),xs:!0,children:t.children}),Ee.jsx(lc,{item:!0,sx:Qd(""),children:Ee.jsx(PU,{})})]})}function IU(){return Ee.jsxs(DU,{children:[Ee.jsxs(Df,{height:1,justifyContent:"center",alignItems:"center",children:[Ee.jsx(lr,{variant:"h3",children:"Just having fun"}),Ee.jsx(lr,{variant:"caption",children:"coming soon..."})]}),Ee.jsx(tP,{})]})}class UU{constructor(e={}){this.map=e}set(e,n){this.map[e]=n}get(e){return this.map[e]}getValues(){return Object.values(this.map)}}var js=(t=>(t.HOME="/",t.ABOUT="/about",t.CONTACT="/contact",t.F_INTERVIEW="/facundo-interview",t))(js||{});const NU=new UU({"/":{path:"/",element:Ee.jsx(IU,{})},"/facundo-interview":{path:"/facundo-interview",element:void 0}});function CM(t,e){e(t??"/")}function FU(){const t=VS();return Ee.jsxs(Df,{justifyContent:"center",alignItems:"center",gap:5,sx:{height:"100svh"},children:[Ee.jsx(lr,{variant:"h1",children:"404"}),Ee.jsx(lr,{variant:"h3",children:"Page not found"}),Ee.jsx(lr,{variant:"body2",children:"Oops... The page you are looking for might have been removed or is temporarily unavailable."}),Ee.jsx(_P,{text:"Go back",endIcon:Ee.jsx(vP,{}),action:()=>CM(js.HOME,t)}),Ee.jsx(RU,{})]})}function OU(){function t(n){return n.map(r=>Ee.jsx($S,{path:r.path,element:r.element,errorElement:Ee.jsx(FU,{}),children:r.children&&t(r.children)}))}const e=oP(tp(t(NU.getValues())));return Ee.jsx(pP,{router:e})}const kU=Pf({typography:{fontFamily:"Source Code Pro, monospace;"}});function BU(){return Ee.jsx(OA,{theme:kU,children:Ee.jsx(OU,{})})}Nx(document.getElementById("root")).render(Ee.jsx(BU,{}));
