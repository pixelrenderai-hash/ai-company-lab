(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var td={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function zM(){if(tv)return $o;tv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var p in l)p!=="key"&&(f[p]=l[p])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var ev;function IM(){return ev||(ev=1,td.exports=zM()),td.exports}var Et=IM(),ed={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function BM(){if(nv)return ce;nv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),d=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function z(F,mt,nt){this.props=F,this.context=mt,this.refs=m,this.updater=nt||A}z.prototype.isReactComponent={},z.prototype.setState=function(F,mt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,mt,"setState")},z.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function I(){}I.prototype=z.prototype;function U(F,mt,nt){this.props=F,this.context=mt,this.refs=m,this.updater=nt||A}var H=U.prototype=new I;H.constructor=U,y(H,z.prototype),H.isPureReactComponent=!0;var B=Array.isArray;function L(){}var V={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function D(F,mt,nt){var lt=nt.ref;return{$$typeof:o,type:F,key:mt,ref:lt!==void 0?lt:null,props:nt}}function G(F,mt){return D(F.type,mt,F.props)}function et(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function j(F){var mt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(nt){return mt[nt]})}var at=/\/+/g;function ht(F,mt){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):mt.toString(36)}function q(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(L,L):(F.status="pending",F.then(function(mt){F.status==="pending"&&(F.status="fulfilled",F.value=mt)},function(mt){F.status==="pending"&&(F.status="rejected",F.reason=mt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function ft(F,mt,nt,lt,P){var Y=typeof F;(Y==="undefined"||Y==="boolean")&&(F=null);var ct=!1;if(F===null)ct=!0;else switch(Y){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(F.$$typeof){case o:case e:ct=!0;break;case x:return ct=F._init,ft(ct(F._payload),mt,nt,lt,P)}}if(ct)return P=P(F),ct=lt===""?"."+ht(F,0):lt,B(P)?(nt="",ct!=null&&(nt=ct.replace(at,"$&/")+"/"),ft(P,mt,nt,"",function(w){return w})):P!=null&&(et(P)&&(P=G(P,nt+(P.key==null||F&&F.key===P.key?"":(""+P.key).replace(at,"$&/")+"/")+ct)),mt.push(P)),1;ct=0;var rt=lt===""?".":lt+":";if(B(F))for(var St=0;St<F.length;St++)lt=F[St],Y=rt+ht(lt,St),ct+=ft(lt,mt,nt,Y,P);else if(St=b(F),typeof St=="function")for(F=St.call(F),St=0;!(lt=F.next()).done;)lt=lt.value,Y=rt+ht(lt,St++),ct+=ft(lt,mt,nt,Y,P);else if(Y==="object"){if(typeof F.then=="function")return ft(q(F),mt,nt,lt,P);throw mt=String(F),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Q(F,mt,nt){if(F==null)return F;var lt=[],P=0;return ft(F,lt,"","",function(Y){return mt.call(nt,Y,P++)}),lt}function Mt(F){if(F._status===-1){var mt=F._result,nt=mt();nt.then(function(lt){(F._status===0||F._status===-1)&&(F._status=1,F._result=lt,nt.status===void 0&&(nt.status="fulfilled",nt.value=lt))},function(lt){(F._status===0||F._status===-1)&&(F._status=2,F._result=lt,nt.status===void 0&&(nt.status="rejected",nt.reason=lt))}),F._status===-1&&(F._status=0,F._result=nt)}if(F._status===1)return F._result.default;throw F._result}var At=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Yt(F){var mt=V.T,nt={};nt.types=mt!==null?mt.types:null,V.T=nt;try{var lt=F(),P=V.S;P!==null&&P(nt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(L,At)}catch(Y){At(Y)}finally{mt!==null&&nt.types!==null&&(mt.types=nt.types),V.T=mt}}function oe(F){var mt=V.T;if(mt!==null){var nt=mt.types;nt===null?mt.types=[F]:nt.indexOf(F)===-1&&nt.push(F)}else Yt(oe.bind(null,F))}var Se={map:Q,forEach:function(F,mt,nt){Q(F,function(){mt.apply(this,arguments)},nt)},count:function(F){var mt=0;return Q(F,function(){mt++}),mt},toArray:function(F){return Q(F,function(mt){return mt})||[]},only:function(F){if(!et(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ce.Activity=d,ce.Children=Se,ce.Component=z,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=s,ce.Suspense=v,ce.ViewTransition=S,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ce.__COMPILER_RUNTIME={__proto__:null,c:function(F){return V.H.useMemoCache(F)}},ce.addTransitionType=oe,ce.cache=function(F){return function(){return F.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(F,mt,nt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var lt=y({},F.props),P=F.key;if(mt!=null)for(Y in mt.key!==void 0&&(P=""+mt.key),mt)!R.call(mt,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&mt.ref===void 0||(lt[Y]=mt[Y]);var Y=arguments.length-2;if(Y===1)lt.children=nt;else if(1<Y){for(var ct=Array(Y),rt=0;rt<Y;rt++)ct[rt]=arguments[rt+2];lt.children=ct}return D(F.type,P,lt)},ce.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},ce.createElement=function(F,mt,nt){var lt,P={},Y=null;if(mt!=null)for(lt in mt.key!==void 0&&(Y=""+mt.key),mt)R.call(mt,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(P[lt]=mt[lt]);var ct=arguments.length-2;if(ct===1)P.children=nt;else if(1<ct){for(var rt=Array(ct),St=0;St<ct;St++)rt[St]=arguments[St+2];P.children=rt}if(F&&F.defaultProps)for(lt in ct=F.defaultProps,ct)P[lt]===void 0&&(P[lt]=ct[lt]);return D(F,Y,P)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(F){return{$$typeof:p,render:F}},ce.isValidElement=et,ce.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:Mt}},ce.memo=function(F,mt){return{$$typeof:_,type:F,compare:mt===void 0?null:mt}},ce.startTransition=Yt,ce.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ce.use=function(F){return V.H.use(F)},ce.useActionState=function(F,mt,nt){return V.H.useActionState(F,mt,nt)},ce.useCallback=function(F,mt){return V.H.useCallback(F,mt)},ce.useContext=function(F){return V.H.useContext(F)},ce.useDebugValue=function(){},ce.useDeferredValue=function(F,mt){return V.H.useDeferredValue(F,mt)},ce.useEffect=function(F,mt){return V.H.useEffect(F,mt)},ce.useEffectEvent=function(F){return V.H.useEffectEvent(F)},ce.useId=function(){return V.H.useId()},ce.useImperativeHandle=function(F,mt,nt){return V.H.useImperativeHandle(F,mt,nt)},ce.useInsertionEffect=function(F,mt){return V.H.useInsertionEffect(F,mt)},ce.useLayoutEffect=function(F,mt){return V.H.useLayoutEffect(F,mt)},ce.useMemo=function(F,mt){return V.H.useMemo(F,mt)},ce.useOptimistic=function(F,mt){return V.H.useOptimistic(F,mt)},ce.useReducer=function(F,mt,nt){return V.H.useReducer(F,mt,nt)},ce.useRef=function(F){return V.H.useRef(F)},ce.useState=function(F){return V.H.useState(F)},ce.useSyncExternalStore=function(F,mt,nt){return V.H.useSyncExternalStore(F,mt,nt)},ce.useTransition=function(){return V.H.useTransition()},ce.version="19.3.1",ce}var iv;function Dp(){return iv||(iv=1,ed.exports=BM()),ed.exports}var Un=Dp(),nd={exports:{}},tl={},id={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function FM(){return av||(av=1,(function(o){function e(q,ft){var Q=q.length;q.push(ft);t:for(;0<Q;){var Mt=Q-1>>>1,At=q[Mt];if(0<l(At,ft))q[Mt]=ft,q[Q]=At,Q=Mt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ft=q[0],Q=q.pop();if(Q!==ft){q[0]=Q;t:for(var Mt=0,At=q.length,Yt=At>>>1;Mt<Yt;){var oe=2*(Mt+1)-1,Se=q[oe],F=oe+1,mt=q[F];if(0>l(Se,Q))F<At&&0>l(mt,Se)?(q[Mt]=mt,q[F]=Q,Mt=F):(q[Mt]=Se,q[oe]=Q,Mt=oe);else if(F<At&&0>l(mt,Q))q[Mt]=mt,q[F]=Q,Mt=F;else break t}}return ft}function l(q,ft){var Q=q.sortIndex-ft.sortIndex;return Q!==0?Q:q.id-ft.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var v=[],_=[],x=1,d=null,S=3,M=!1,b=!1,A=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var ft=i(_);ft!==null;){if(ft.callback===null)s(_);else if(ft.startTime<=q)s(_),ft.sortIndex=ft.expirationTime,e(v,ft);else break;ft=i(_)}}function H(q){if(A=!1,U(q),!b)if(i(v)!==null)b=!0,B||(B=!0,et());else{var ft=i(_);ft!==null&&ht(H,ft.startTime-q)}}var B=!1,L=-1,V=5,R=-1;function D(){return y?!0:!(o.unstable_now()-R<V)}function G(){if(y=!1,B){var q=o.unstable_now();R=q;var ft=!0;try{t:{b=!1,A&&(A=!1,z(L),L=-1),M=!0;var Q=S;try{e:{for(U(q),d=i(v);d!==null&&!(d.expirationTime>q&&D());){var Mt=d.callback;if(typeof Mt=="function"){d.callback=null,S=d.priorityLevel;var At=Mt(d.expirationTime<=q);if(q=o.unstable_now(),typeof At=="function"){d.callback=At,U(q),ft=!0;break e}d===i(v)&&s(v),U(q)}else s(v);d=i(v)}if(d!==null)ft=!0;else{var Yt=i(_);Yt!==null&&ht(H,Yt.startTime-q),ft=!1}}break t}finally{d=null,S=Q,M=!1}ft=void 0}}finally{ft?et():B=!1}}}var et;if(typeof I=="function")et=function(){I(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,at=j.port2;j.port1.onmessage=G,et=function(){at.postMessage(null)}}else et=function(){m(G,0)};function ht(q,ft){L=m(function(){q(o.unstable_now())},ft)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(q){switch(S){case 1:case 2:case 3:var ft=3;break;default:ft=S}var Q=S;S=ft;try{return q()}finally{S=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,ft){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Q=S;S=q;try{return ft()}finally{S=Q}},o.unstable_scheduleCallback=function(q,ft,Q){var Mt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Mt+Q:Mt):Q=Mt,q){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=Q+At,q={id:x++,callback:ft,priorityLevel:q,startTime:Q,expirationTime:At,sortIndex:-1},Q>Mt?(q.sortIndex=Q,e(_,q),i(v)===null&&q===i(_)&&(A?(z(L),L=-1):A=!0,ht(H,Q-Mt))):(q.sortIndex=At,e(v,q),b||M||(b=!0,B||(B=!0,et()))),q},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(q){var ft=S;return function(){var Q=S;S=ft;try{return q.apply(this,arguments)}finally{S=Q}}}})(ad)),ad}var rv;function HM(){return rv||(rv=1,id.exports=FM()),id.exports}var rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function GM(){if(sv)return Nn;sv=1;var o=Dp();function e(x){var d="https://react.dev/errors/"+x;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)d+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function p(x,d,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:x,containerInfo:d,implementation:S}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(x,d){if(x==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.browser=function(x){return{$$typeof:f,_reason:x}},Nn.createPortal=function(x,d){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return p(x,d,null,S)},Nn.flushSync=function(x){var d=v.T,S=s.p;try{if(v.T=null,s.p=2,x)return x()}finally{v.T=d,s.p=S,s.d.f()}},Nn.preconnect=function(x,d){typeof x=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(x,d))},Nn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Nn.preinit=function(x,d){if(typeof x=="string"&&d&&typeof d.as=="string"){var S=d.as,M=_(S,d.crossOrigin),b=typeof d.integrity=="string"?d.integrity:void 0,A=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;S==="style"?s.d.S(x,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:A}):S==="script"&&s.d.X(x,{crossOrigin:M,integrity:b,fetchPriority:A,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(x,d){if(typeof x=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var S=_(d.as,d.crossOrigin);s.d.M(x,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0})}}else d==null&&s.d.M(x)},Nn.preload=function(x,d){if(typeof x=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var S=d.as,M=_(S,d.crossOrigin);s.d.L(x,S,{crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(x,d){if(typeof x=="string")if(d){var S=_(d.as,d.crossOrigin);s.d.m(x,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0})}else s.d.m(x)},Nn.requestFormReset=function(x){s.d.r(x)},Nn.unstable_batchedUpdates=function(x,d){return x(d)},Nn.useFormState=function(x,d,S){return v.H.useFormState(x,d,S)},Nn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var ov;function VM(){if(ov)return rd.exports;ov=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=GM(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function kM(){if(lv)return tl;lv=1;var o=HM(),e=Dp(),i=VM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return v(u),t;if(c===r)return v(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,r=c;break}if(E===r){g=!0,r=u,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,r=u;break}if(E===r){g=!0,r=c,a=u;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function d(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&d(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=S(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var m=null,z=null;function I(t,n,a){return t===a?!0:t===n?(m=t,!0):!1}function U(t,n,a){return t===a?(z=t,!1):t===n?(z!==null&&(m=t),!0):!1}function H(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,V=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),at=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Yt=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),Se=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),nt=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=nt&&t[nt]||t["@@iterator"],typeof t=="function"?t:null)}var P=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===P?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case j:return"Profiler";case et:return"StrictMode";case ft:return"Suspense";case Q:return"SuspenseList";case Yt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case ht:return t.displayName||"Context";case at:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mt:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case At:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var ct=Array.isArray,rt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},Lt=[],wt=-1;function Vt(t){return{current:t}}function bt(t){0>wt||(t.current=Lt[wt],Lt[wt]=null,wt--)}function Xt(t,n){wt++,Lt[wt]=t.current,t.current=n}var zt=Vt(null),le=Vt(null),Ye=Vt(null),Ze=Vt(null);function N(t,n){switch(Xt(Ye,n),Xt(le,t),Xt(zt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u_(n),t=c_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}bt(zt),Xt(zt,t)}function T(){bt(zt),bt(le),bt(Ye)}function ot(t){var n=t.memoizedState;n!==null&&(Ns._currentValue=n.memoizedState,Xt(Ze,t)),n=zt.current;var a=c_(n,t.type);n!==a&&(Xt(le,t),Xt(zt,a))}function vt(t){le.current===t&&(bt(zt),bt(le)),Ze.current===t&&(bt(Ze),Ns._currentValue=w)}var Tt,gt;function Zt(t){if(Tt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Tt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+t+gt}var Nt=!1;function $t(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(It){var W=It}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(It){W=It}xt=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(It){W=It}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(It){if(It&&W&&typeof It.stack=="string")return[It.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var O=g.split(`
`),K=E.split(`
`);for(u=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(r===O.length||u===K.length)for(r=O.length-1,u=K.length-1;1<=r&&0<=u&&O[r]!==K[u];)u--;for(;1<=r&&0<=u;r--,u--)if(O[r]!==K[u]){if(r!==1||u!==1)do if(r--,u--,0>u||O[r]!==K[u]){var ut=`
`+O[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function ee(t,n){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return t.child!==n&&n!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return Zt("Activity");case 30:return Zt("ViewTransition");default:return""}}function Dt(t){try{var n="",a=null;do n+=ee(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Bt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Ft=o.unstable_shouldYield,he=o.unstable_requestPaint,X=o.unstable_now,Ut=o.unstable_getCurrentPriorityLevel,Pt=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,fe=o.log,Ve=o.unstable_setDisableYieldValue,Ee=null,nn=null;function gn(t){if(typeof fe=="function"&&Ve(t),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Ee,t)}catch{}}var Ln=Math.clz32?Math.clz32:Sl,ea=Math.log,lo=Math.LN2;function Sl(t){return t>>>=0,t===0?32:31-(ea(t)/lo|0)|0}var hr=256,na=262144,dr=4194304;function hi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?u=hi(r):(g&=E,g!==0?u=hi(g):a||(a=E&~t,a!==0&&(u=hi(a))))):(E=r&~c,E!==0?u=hi(E):g!==0?u=hi(g):a||(a=r&~t,a!==0&&(u=hi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function yl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Ln(a),u=1<<r;n|=t[r],a&=~u}return n}function Rc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(){var t=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),t}function uo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cc(t,n,a,r,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,K=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Ln(a),xt=1<<ut;E[ut]=0,O[ut]=-1;var W=K[ut];if(W!==null)for(K[ut]=null,ut=0;ut<W.length;ut++){var st=W[ut];st!==null&&(st.lane&=-536870913)}a&=~xt}r!==0&&C(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function C(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ln(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function J(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ln(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function dt(t,n){var a=n&-n;return a=(a&42)!==0?1:pt(a),(a&(t.suspendedLanes|n))!==0?0:a}function pt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=St.p;return t!==0?t:(t=window.event,t===void 0?32:W_(t.type))}function Ht(t,n){var a=St.p;try{return St.p=t,n()}finally{St.p=a}}var qt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+qt,Kt="__reactProps$"+qt,re="__reactContainer$"+qt,ie="__reactEvents$"+qt,xe="__reactListeners$"+qt,Ie="__reactHandles$"+qt,$e="__reactResources$"+qt,Oe="__reactMarker$"+qt,De="__reactLoad$"+qt;function ae(t){delete t[Ot],delete t[Kt],delete t[xe],delete t[Ie]}function Pe(t){var n;if(n=t[Ot])return n;for(var a=t.parentNode;a;){if(n=a[re]||a[Ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=R_(t);t!==null;){if(a=t[Ot])return a;t=R_(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[Ot]||t[re]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _n(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function $n(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Oe]=!0}function Ra(t){t[De]=void 0}var Ke=new Set,Bn={};function un(t,n){rn(t,n),rn(t+"Capture",n)}function rn(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},zi={};function eS(t){return Bt.call(zi,t)?!0:Bt.call(Zr,t)?!1:On.test(t)?zi[t]=!0:(Zr[t]=!0,!1)}var Ne=!1;function Zp(){var t=Ne;return Ne=!1,t}function El(t,n,a){if(eS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Tl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wc(t){if(!t._valueTracker){var n=Kp(t)?"checked":"value";t._valueTracker=nS(t,n,""+t[n])}}function Qp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Kp(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var iS=/[\n"\\]/g;function di(t){return t.replace(iS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dc(t,n,a,r,u,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Uc(t,ti(t.value)):Uc(t,ti(n)):a!=null?Uc(t,ti(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ti(E):t.removeAttribute("name")}function Jp(t,n,a,r,u,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){wc(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),wc(t)}function Uc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Kr(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $p(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function tm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),wc(t)}function Qr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var aS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function em(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||aS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function nm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ne=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(em(t,u,r),Ne=!0)}else for(var c in n)n.hasOwnProperty(c)&&em(t,c,n[c])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return sS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function im(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[Kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Dc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Kt]||null;if(!u)throw Error(s(90));Dc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Qp(r)}break t;case"textarea":$p(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Kr(t,!!a.multiple,n,!1)}}}var Pc=!1;function am(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var r=t(n);return r}finally{if(Pc=!1,(Jr!==null||$r!==null)&&(bu(),Jr&&(n=Jr,t=$r,$r=Jr=null,im(n),t)))for(n=0;n<t.length;n++)im(t[n])}}function co(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Kt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(aa)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){zc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{zc=!1}var Ca=null,Ic=null,Al=null;function rm(){if(Al)return Al;var t,n=Ic,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[c-r];r++);return Al=u.slice(t,1<r?1-r:void 0)}function Rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function sm(){return!1}function Fn(t){function n(a,r,u,c,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Cl:sm,this.isPropagationStopped=sm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Fn(wa),ho=L({},wa,{view:0,detail:0}),oS=Fn(ho),Bc,Fc,po,Dl=L({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Bc=t.screenX-po.screenX,Fc=t.screenY-po.screenY):Fc=Bc=0,po=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),om=Fn(Dl),lS=L({},Dl,{dataTransfer:0}),uS=Fn(lS),cS=L({},ho,{relatedTarget:0}),Hc=Fn(cS),fS=L({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=Fn(fS),dS=L({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=Fn(dS),mS=L({},wa,{data:0}),lm=Fn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vS[t])?!!n[t]:!1}function Gc(){return xS}var SS=L({},ho,{key:function(t){if(t.key){var n=gS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yS=Fn(SS),MS=L({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=Fn(MS),ES=L({},wa,{submitter:0}),TS=Fn(ES),bS=L({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),AS=Fn(bS),RS=L({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=Fn(RS),wS=L({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Fn(wS),US=L({},wa,{newState:0,oldState:0,source:0}),NS=Fn(US),LS=[9,13,27,32],Vc=aa&&"CompositionEvent"in window,mo=null;aa&&"documentMode"in document&&(mo=document.documentMode);var OS=aa&&"TextEvent"in window&&!mo,cm=aa&&(!Vc||mo&&8<mo&&11>=mo),fm=" ",hm=!1;function dm(t,n){switch(t){case"keyup":return LS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function PS(t,n){switch(t){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(hm=!0,fm);case"textInput":return t=n.data,t===fm&&hm?null:t;default:return null}}function zS(t,n){if(ts)return t==="compositionend"||!Vc&&dm(t,n)?(t=rm(),Al=Ic=Ca=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cm&&n.locale!=="ko"?null:n.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!IS[t.type]:n==="textarea"}function gm(t,n,a,r){Jr?$r?$r.push(r):$r=[r]:Jr=r,n=Uu(n,"onChange"),0<n.length&&(a=new wl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var go=null,_o=null;function BS(t){i_(t,0)}function Ul(t){var n=_n(t);if(Qp(n))return t}function _m(t,n){if(t==="change")return n}var vm=!1;if(aa){var kc;if(aa){var Xc="oninput"in document;if(!Xc){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Xc=typeof xm.oninput=="function"}kc=Xc}else kc=!1;vm=kc&&(!document.documentMode||9<document.documentMode)}function Sm(){go&&(go.detachEvent("onpropertychange",ym),_o=go=null)}function ym(t){if(t.propertyName==="value"&&Ul(_o)){var n=[];gm(n,_o,t,Oc(t)),am(BS,n)}}function FS(t,n,a){t==="focusin"?(Sm(),go=n,_o=a,go.attachEvent("onpropertychange",ym)):t==="focusout"&&Sm()}function HS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(_o)}function GS(t,n){if(t==="click")return Ul(n)}function VS(t,n){if(t==="input"||t==="change")return Ul(n)}function kS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:kS;function vo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Bt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,n){var a=Mm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mm(a)}}function Tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qc(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var XS=aa&&"documentMode"in document&&11>=document.documentMode,es=null,Wc=null,xo=null,jc=!1;function Am(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||es==null||es!==qc(r)||(r=es,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&vo(xo,r)||(xo=r,r=Uu(Wc,"onSelect"),0<r.length&&(n=new wl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=es)))}function gr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ns={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Zc={},Rm={};aa&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function _r(t){if(Zc[t])return Zc[t];if(!ns[t])return t;var n=ns[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return Zc[t]=n[a];return t}var Cm=_r("animationend"),wm=_r("animationiteration"),Dm=_r("animationstart"),qS=_r("transitionrun"),YS=_r("transitionstart"),WS=_r("transitioncancel"),Um=_r("transitionend"),Nm=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function bi(t,n){Nm.set(t,n),un(n,[t])}var jS=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=jS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Lm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ms;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function sa(t,n){return t=Lm(t),n=Lm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],is=0,Qc=0;function Ll(){for(var t=is,n=Qc=is=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var c=pi[n];if(pi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}c!==0&&Om(a,u,c)}}function Ol(t,n,a,r){pi[is++]=t,pi[is++]=n,pi[is++]=a,pi[is++]=r,Qc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jc(t,n,a,r){return Ol(t,n,a,r),Pl(t)}function vr(t,n){return Ol(t,null,null,n),Pl(t)}function Om(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Ln(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function Pl(t){if(50<Go)throw Go=0,Tu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var as={};function ZS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new ZS(t,n,a,r)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function zl(t,n,a,r,u,c){var g=0;if(r=t,typeof r=="function")$c(r)&&(g=1);else if(typeof r=="string")g=EM(t,a,zt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Yt:return t=qn(31,a,n,u),t.elementType=Yt,t.lanes=c,t;case G:return xr(a.children,u,c,n);case et:g=8,u|=24;break;case j:return t=qn(12,a,n,u|2),t.elementType=j,t.lanes=c,t;case ft:return t=qn(13,a,n,u),t.elementType=ft,t.lanes=c,t;case Q:return t=qn(19,a,n,u),t.elementType=Q,t.lanes=c,t;case oe:case F:return t=u|32,t=qn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ht:g=10;break t;case at:g=9;break t;case q:g=11;break t;case Mt:g=14;break t;case At:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function xr(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function tf(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function zm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function ef(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Im=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Im.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dt(n)},Im.set(t,n),n)}return{value:t,source:n,stack:Dt(n)}}var rs=[],ss=0,Il=null,So=0,gi=[],_i=0,Da=null,Bi=1,Fi="";function la(t,n){rs[ss++]=So,rs[ss++]=Il,Il=t,So=n}function Bm(t,n,a){gi[_i++]=Bi,gi[_i++]=Fi,gi[_i++]=Da,Da=t;var r=Bi;t=Fi;var u=32-Ln(r)-1;r&=~(1<<u),a+=1;var c=32-Ln(n)+u;if(30<c){var g=u-u%5;c=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Bi=1<<32-Ln(n)+u|a<<u|r,Fi=c+t}else Bi=1<<c|a<<u|r,Fi=t}function Bl(t){t.return!==null&&(la(t,1),Bm(t,1,0))}function nf(t){for(;t===Il;)Il=rs[--ss],rs[ss]=null,So=rs[--ss],rs[ss]=null;for(;t===Da;)Da=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null,Bi=gi[--_i],gi[_i]=null}function Fm(t,n){gi[_i++]=Bi,gi[_i++]=Fi,gi[_i++]=Da,Bi=n.id,Fi=n.overflow,Da=t}var yn=null,Qe=null,ve=!1,Ua=null,vi=!1,af=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(mi(n,t)),af}function Hm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ot]=t,n[Kt]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<ko.length;a++)Me(ko[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Jp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),tm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||o_(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Na(t,!0)}function Fl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:yn=yn.return}}function os(t){if(t!==yn)return!1;if(!ve)return Fl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Oh(t.type,t.memoizedProps)),a=!a),a&&Qe&&Na(t),Fl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=A_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=A_(t)}else n===27?(n=Qe,ja(t.type)?(t=kh,kh=null,Qe=t):Qe=n):Qe=yn?Si(t.stateNode.nextSibling):null;return!0}function Sr(){Qe=yn=null,ve=!1}function rf(){var t=Ua;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ua=null),t}function yo(t){Ua===null?Ua=[t]:Ua.push(t)}var sf=Vt(null),yr=null,ua=null;function La(t,n,a){Xt(sf,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=sf.current,bt(sf)}function Hl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function of(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var O=0;O<n.length;O++)if(E.context===n[O]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Hl(c.return,a,t),r||(g=null);break t}c=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Hl(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),Hl(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Mr(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=u.type;ei(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===Ze.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ns):t=[Ns])}u=u.return}return t!==null&&of(n,t,a,r),n.flags|=262144,t!==null}function Gl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){yr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Gm(yr,t)}function Vl(t,n){return yr===null&&Er(t),Gm(t,n)}function Gm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},QS=o.unstable_scheduleCallback,JS=o.unstable_NormalPriority,cn={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new KS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&QS(JS,function(){t.controller.abort()})}function Vm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Eo=null;function $S(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var To=null,uf=0,Tr=0,ls=null;function ty(t,n){if(To===null){var a=To=[];uf=0,Tr=bh(),ls={status:"pending",value:void 0,then:function(r){a.push(r)}}}return uf++,n.then(km,km),n}function km(){if(--uf===0&&(Eo=null,To!==null)){ls!==null&&(ls.status="fulfilled");var t=To;To=null,Tr=0,ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ey(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Xm=rt.S;rt.S=function(t,n){if(zg=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ty(t,n),Eo!==null)for(var a=As;a!==null;)Vm(a,Eo),a=a.next;if(a=t.types,a!==null){for(var r=As;r!==null;)Vm(r,a),r=r.next;if(Tr!==0){r=Eo,r===null&&(r=Eo=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}Xm!==null&&Xm(t,n)};var br=Vt(null);function cf(){var t=br.current;return t!==null?t:We.pooledCache}function kl(t,n){n===null?Xt(br,br.current):Xt(br,n.pool)}function qm(){var t=cf();return t===null?null:{parent:cn._currentValue,pool:t}}var us=Error(s(460)),ff=Error(s(474)),Xl=Error(s(542)),ql={then:function(){}};function Ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t}throw Rr=n,us}}function Ar(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rr=a,us):a}}var Rr=null;function jm(){if(Rr===null)throw Error(s(459));var t=Rr;return Rr=null,t}function Zm(t){if(t===us||t===Xl)throw Error(s(483))}var cs=null,bo=0;function Yl(t){var n=bo;return bo+=1,cs===null&&(cs=[]),Wm(cs,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wl(t,n){throw n.$$typeof===V?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){function n(Z,k){if(t){var it=Z.deletions;it===null?(Z.deletions=[k],Z.flags|=16):it.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key===null?k.set(Z.index,Z):k.set(Z.key,Z),Z=Z.sibling;return k}function u(Z,k){return Z=oa(Z,k),Z.index=0,Z.sibling=null,Z}function c(Z,k,it){return Z.index=it,t?(it=Z.alternate,it!==null?(it=it.index,it<k?(Z.flags|=2,k):it):(Z.flags|=134217730,k)):(Z.flags|=1048576,k)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function E(Z,k,it,_t){return k===null||k.tag!==6?(k=tf(it,Z.mode,_t),k.return=Z,k):(k=u(k,it),k.return=Z,k)}function O(Z,k,it,_t){var Wt=it.type;return Wt===G?(Z=ut(Z,k,it.props.children,_t,it.key),Oa(Z,it),Z):k!==null&&(k.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===At&&Ar(Wt)===k.type)?(k=u(k,it.props),Oa(k,it),k.return=Z,k):(k=zl(it.type,it.key,it.props,null,Z.mode,_t),Oa(k,it),k.return=Z,k)}function K(Z,k,it,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==it.containerInfo||k.stateNode.implementation!==it.implementation?(k=ef(it,Z.mode,_t),k.return=Z,k):(k=u(k,it.children||[]),k.return=Z,k)}function ut(Z,k,it,_t,Wt){return k===null||k.tag!==7?(k=xr(it,Z.mode,_t,Wt),k.return=Z,k):(k=u(k,it),k.return=Z,k)}function xt(Z,k,it){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tf(""+k,Z.mode,it),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case R:return it=zl(k.type,k.key,k.props,null,Z.mode,it),Oa(it,k),it.return=Z,it;case D:return k=ef(k,Z.mode,it),k.return=Z,k;case At:return k=Ar(k),xt(Z,k,it)}if(ct(k)||lt(k))return k=xr(k,Z.mode,it,null),k.return=Z,k;if(typeof k.then=="function")return xt(Z,Yl(k),it);if(k.$$typeof===ht)return xt(Z,Vl(Z,k),it);Wl(Z,k)}return null}function W(Z,k,it,_t){var Wt=k!==null?k.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Wt!==null?null:E(Z,k,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case R:return it.key===Wt?O(Z,k,it,_t):null;case D:return it.key===Wt?K(Z,k,it,_t):null;case At:return it=Ar(it),W(Z,k,it,_t)}if(ct(it)||lt(it))return Wt!==null?null:ut(Z,k,it,_t,null);if(typeof it.then=="function")return W(Z,k,Yl(it),_t);if(it.$$typeof===ht)return W(Z,k,Vl(Z,it),_t);Wl(Z,it)}return null}function st(Z,k,it,_t,Wt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(it)||null,E(k,Z,""+_t,Wt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case R:return Z=Z.get(_t.key===null?it:_t.key)||null,O(k,Z,_t,Wt);case D:return Z=Z.get(_t.key===null?it:_t.key)||null,K(k,Z,_t,Wt);case At:return _t=Ar(_t),st(Z,k,it,_t,Wt)}if(ct(_t)||lt(_t))return Z=Z.get(it)||null,ut(k,Z,_t,Wt,null);if(typeof _t.then=="function")return st(Z,k,it,Yl(_t),Wt);if(_t.$$typeof===ht)return st(Z,k,it,Vl(k,_t),Wt);Wl(k,_t)}return null}function It(Z,k,it,_t){for(var Wt=null,be=null,ne=k,ue=k=0,dn=null;ne!==null&&ue<it.length;ue++){ne.index>ue?(dn=ne,ne=null):dn=ne.sibling;var Ce=W(Z,ne,it[ue],_t);if(Ce===null){ne===null&&(ne=dn);break}t&&ne&&Ce.alternate===null&&n(Z,ne),k=c(Ce,k,ue),be===null?Wt=Ce:be.sibling=Ce,be=Ce,ne=dn}if(ue===it.length)return a(Z,ne),ve&&la(Z,ue),Wt;if(ne===null){for(;ue<it.length;ue++)ne=xt(Z,it[ue],_t),ne!==null&&(k=c(ne,k,ue),be===null?Wt=ne:be.sibling=ne,be=ne);return ve&&la(Z,ue),Wt}for(ne=r(ne);ue<it.length;ue++)dn=st(ne,Z,ue,it[ue],_t),dn!==null&&(t&&(Ce=dn.alternate,Ce!==null&&ne.delete(Ce.key===null?ue:Ce.key)),k=c(dn,k,ue),be===null?Wt=dn:be.sibling=dn,be=dn);return t&&ne.forEach(function($a){return n(Z,$a)}),ve&&la(Z,ue),Wt}function Qt(Z,k,it,_t){if(it==null)throw Error(s(151));for(var Wt=null,be=null,ne=k,ue=k=0,dn=null,Ce=it.next();ne!==null&&!Ce.done;ue++,Ce=it.next()){ne.index>ue?(dn=ne,ne=null):dn=ne.sibling;var $a=W(Z,ne,Ce.value,_t);if($a===null){ne===null&&(ne=dn);break}t&&ne&&$a.alternate===null&&n(Z,ne),k=c($a,k,ue),be===null?Wt=$a:be.sibling=$a,be=$a,ne=dn}if(Ce.done)return a(Z,ne),ve&&la(Z,ue),Wt;if(ne===null){for(;!Ce.done;ue++,Ce=it.next())Ce=xt(Z,Ce.value,_t),Ce!==null&&(k=c(Ce,k,ue),be===null?Wt=Ce:be.sibling=Ce,be=Ce);return ve&&la(Z,ue),Wt}for(ne=r(ne);!Ce.done;ue++,Ce=it.next())Ce=st(ne,Z,ue,Ce.value,_t),Ce!==null&&(t&&(dn=Ce.alternate,dn!==null&&ne.delete(dn.key===null?ue:dn.key)),k=c(Ce,k,ue),be===null?Wt=Ce:be.sibling=Ce,be=Ce);return t&&ne.forEach(function(PM){return n(Z,PM)}),ve&&la(Z,ue),Wt}function pe(Z,k,it,_t){if(typeof it=="object"&&it!==null&&it.type===G&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case R:t:{for(var Wt=it.key;k!==null;){if(k.key===Wt){if(Wt=it.type,Wt===G){if(k.tag===7){a(Z,k.sibling),_t=u(k,it.props.children),Oa(_t,it),_t.return=Z,Z=_t;break t}}else if(k.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===At&&Ar(Wt)===k.type){a(Z,k.sibling),_t=u(k,it.props),Oa(_t,it),_t.return=Z,Z=_t;break t}a(Z,k);break}else n(Z,k);k=k.sibling}it.type===G?(_t=xr(it.props.children,Z.mode,_t,it.key),Oa(_t,it),_t.return=Z,Z=_t):(_t=zl(it.type,it.key,it.props,null,Z.mode,_t),Oa(_t,it),_t.return=Z,Z=_t)}return g(Z);case D:t:{for(Wt=it.key;k!==null;){if(k.key===Wt)if(k.tag===4&&k.stateNode.containerInfo===it.containerInfo&&k.stateNode.implementation===it.implementation){a(Z,k.sibling),_t=u(k,it.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}_t=ef(it,Z.mode,_t),_t.return=Z,Z=_t}return g(Z);case At:return it=Ar(it),pe(Z,k,it,_t)}if(ct(it))return It(Z,k,it,_t);if(lt(it)){if(Wt=lt(it),typeof Wt!="function")throw Error(s(150));return it=Wt.call(it),Qt(Z,k,it,_t)}if(typeof it.then=="function")return pe(Z,k,Yl(it),_t);if(it.$$typeof===ht)return pe(Z,k,Vl(Z,it),_t);Wl(Z,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,k!==null&&k.tag===6?(a(Z,k.sibling),_t=u(k,it),_t.return=Z,Z=_t):(a(Z,k),_t=tf(it,Z.mode,_t),_t.return=Z,Z=_t),g(Z)):a(Z,k)}return function(Z,k,it,_t){try{bo=0;var Wt=pe(Z,k,it,_t);return cs=null,Wt}catch(ne){if(ne===us||ne===Xl)throw ne;var be=qn(29,ne,null,Z.mode);return be.lanes=_t,be.return=Z,be}finally{}}}var Cr=Km(!0),Qm=Km(!1),Pa=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Pl(t),Om(t,null,a),n}return Ol(t,r,n,a),Pl(t)}function Ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,J(t,a)}}function pf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var mf=!1;function Ro(){if(mf){var t=ls;if(t!==null)throw t}}function Co(t,n,a,r){mf=!1;var u=t.updateQueue;Pa=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var O=E,K=O.next;O.next=null,g===null?c=K:g.next=K,g=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=K:E.next=K,ut.lastBaseUpdate=O))}if(c!==null){var xt=u.baseState;g=0,ut=K=O=null,E=c;do{var W=E.lane&-536870913,st=W!==E.lane;if(st?(Te&W)===W:(r&W)===W){W!==0&&W===Tr&&(mf=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,Qt=E;W=n;var pe=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){xt=It.call(pe,xt,W);break t}xt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,W=typeof It=="function"?It.call(pe,xt,W):It,W==null)break t;xt=L({},xt,W);break t;case 2:Pa=!0}}W=E.callback,W!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[W]:st.push(W))}else st={lane:W,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(K=ut=st,O=xt):ut=ut.next=st,g|=W;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;st=E,E=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ut===null&&(O=xt),u.baseState=O,u.firstBaseUpdate=K,u.lastBaseUpdate=ut,c===null&&(u.shared.lanes=0),Xa|=g,t.lanes=g,t.memoizedState=xt}}function Jm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $m(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jm(a[t],n)}var Ba=Vt(null),jl=Vt(0);function t0(t,n){t=ma,Xt(jl,t),Xt(Ba,n),ma=t|n.baseLanes}function gf(){Xt(jl,ma),Xt(Ba,Ba.current)}function _f(){ma=jl.current,bt(Ba),bt(jl)}var Rn=Vt(null),Pn=null;function Fa(t){var n=t.alternate;Xt(Cn,Cn.current&1),Xt(Rn,t),Pn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Pn=t)}function vf(t){Xt(Cn,Cn.current),Xt(Rn,t),Pn===null&&(Pn=t)}function e0(t){t.tag===22?(Xt(Cn,Cn.current),Xt(Rn,t),Pn===null&&(Pn=t)):Ha()}function Ha(){Xt(Cn,Cn.current),Xt(Rn,Rn.current)}function ni(t){bt(Rn),Pn===t&&(Pn=null),bt(Cn)}var Cn=Vt(0);function wo(t,n){Xt(Rn,Rn.current),Xt(Cn,n)}function xf(t){bt(Cn),bt(Rn),Pn===t&&(Pn=null)}function Zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gh(a)||Vh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,de=null,ke=null,fn=null,Kl=!1,fs=!1,wr=!1,Ql=0,Do=0,hs=null,ny=0;function sn(){throw Error(s(321))}function Sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function yf(t,n,a,r,u,c){return fa=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rt.H=t===null||t.memoizedState===null?B0:F0,wr=!1,c=a(r,u),wr=!1,fs&&(c=i0(n,a,r,u)),n0(t),c}function n0(t){rt.H=au;var n=ke!==null&&ke.next!==null;if(fa=0,fn=ke=de=null,Kl=!1,Do=0,hs=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Gl(t)&&(hn=!0))}function i0(t,n,a,r){de=t;var u=0;do{if(fs&&(hs=null),Do=0,fs=!1,25<=u)throw Error(s(301));if(u+=1,fn=ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}rt.H=cy,c=n(a,r)}while(fs);return c}function iy(){var t=rt.H,n=t.useState()[0];return n=typeof n.then=="function"?Uo(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(de.flags|=1024),n}function Mf(){var t=Ql!==0;return Ql=0,t}function Ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Tf(t){if(Kl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Kl=!1}fa=0,fn=ke=de=null,fs=!1,Do=Ql=0,hs=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?de.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=fn===null?de.memoizedState:fn.next;if(n!==null)fn=n,ke=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},fn===null?de.memoizedState=fn=t:fn=fn.next=t}return fn}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(t){var n=Do;return Do+=1,hs===null&&(hs=[]),t=Wm(hs,t,n),n=de,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,rt.H=n===null||n.memoizedState===null?B0:F0),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===mt)return;if(t.$$typeof===ht)return An(t)}throw Error(s(438,String(t)))}function bf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Se;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function tu(t){var n=ln();return Af(n,ke,t)}function Af(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=g=null,O=null,K=n,ut=!1;do{var xt=K.lane&-536870913;if(xt!==K.lane?(Te&xt)===xt:(fa&xt)===xt){var W=K.revertLane;if(W===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),xt===Tr&&(ut=!0);else if((fa&W)===W){K=K.next,W===Tr&&(ut=!0);continue}else xt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},O===null?(E=O=xt,g=c):O=O.next=xt,de.lanes|=W,Xa|=W;xt=K.action,wr&&a(c,xt),c=K.hasEagerState?K.eagerState:a(c,xt)}else W={lane:xt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},O===null?(E=O=W,g=c):O=O.next=W,de.lanes|=xt,Xa|=xt;K=K.next}while(K!==null&&K!==n);if(O===null?g=c:O.next=E,!ei(c,t.memoizedState)&&(hn=!0,ut&&(a=ls,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=O,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Rf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);ei(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function a0(t,n,a){var r=de,u=ln(),c=ve;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ei((ke||u).memoizedState,a);if(g&&(u.memoizedState=a,hn=!0),u=u.queue,Df(o0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||g||fn!==null&&(fn.memoizedState.tag&1)!==0,ds(t?9:8,{destroy:void 0},s0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,We===null)throw Error(s(349));c||(fa&127)!==0||r0(r,n,a)}return a}function r0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Jl(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function s0(t,n,a,r){n.value=a,n.getSnapshot=r,l0(n)&&u0(t)}function o0(t,n,a){return a(function(){l0(n)&&u0(t)})}function l0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function u0(t){var n=vr(t,2);n!==null&&Zn(n,t,2)}function Cf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),wr){gn(!0);try{a()}finally{gn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function c0(t,n,a,r){return t.baseState=a,Af(t,ke,typeof r=="function"?r:ha)}function ay(t,n,a,r,u){if(iu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};rt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,f0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function f0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=rt.T,g={};g.types=c!==null?c.types:null,rt.T=g;try{var E=a(u,r),O=rt.S;O!==null&&O(g,E),h0(t,n,E)}catch(K){wf(t,n,K)}finally{c!==null&&g.types!==null&&(c.types=g.types),rt.T=c}}else try{c=a(u,r),h0(t,n,c)}catch(K){wf(t,n,K)}}function h0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){d0(t,n,r)},function(r){return wf(t,n,r)}):d0(t,n,a)}function d0(t,n,a){n.status="fulfilled",n.value=a,p0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,f0(t,a)))}function wf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,p0(n),n=n.next;while(n!==r)}t.action=null}function p0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function m0(t,n){return n}function g0(t,n){if(ve){var a=We.formState;if(a!==null){t:{var r=de;if(ve){if(Qe){e:{for(var u=Qe,c=vi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Qe=Si(u.nextSibling),r=u.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m0,lastRenderedState:n},a.queue=r,a=P0.bind(null,de,r),r.dispatch=a,r=Cf(!1),c=Pf.bind(null,de,!1,r.queue),r=Hn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=ay.bind(null,de,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function _0(t){var n=ln();return v0(n,ke,t)}function v0(t,n,a){if(n=Af(t,n,m0)[0],t=tu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Uo(n)}catch(g){throw g===us?Xl:g}else r=n;n=ln();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,ds(9,{destroy:void 0},ry.bind(null,u,a),null)),[r,c,t]}function ry(t,n){t.action=n}function x0(t){var n=ln(),a=ke;if(a!==null)return v0(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ds(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=Jl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function S0(){return ln().memoizedState}function eu(t,n,a,r){var u=Hn();de.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,r===void 0?null:r)}function nu(t,n,a,r){var u=ln();r=r===void 0?null:r;var c=u.memoizedState.inst;ke!==null&&r!==null&&Sf(r,ke.memoizedState.deps)?u.memoizedState=ds(n,c,a,r):(de.flags|=t,u.memoizedState=ds(1|n,c,a,r))}function y0(t,n){eu(8390656,8,t,n)}function Df(t,n){nu(2048,8,t,n)}function sy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Jl(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function M0(t){var n=ln().memoizedState;return sy({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function E0(t,n){return nu(4,2,t,n)}function T0(t,n){return nu(4,4,t,n)}function b0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function A0(t,n,a){a=a!=null?a.concat([t]):null,nu(4,4,b0.bind(null,n,t),a)}function Uf(){}function R0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Sf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function C0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Sf(n,r[1]))return r[0];if(r=t(),wr){gn(!0);try{t()}finally{gn(!1)}}return a.memoizedState=[r,n],r}function Nf(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Bg(),de.lanes|=t,Xa|=t,a)}function w0(t,n,a,r){return ei(a,n)?a:Ba.current!==null?(t=Nf(t,a,r),ei(t,n)||(hn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Te&261930)===0?(hn=!0,t.memoizedState=a):(t=Bg(),de.lanes|=t,Xa|=t,n)}function D0(t,n,a,r,u){var c=St.p;St.p=c!==0&&8>c?c:8;var g=rt.T,E={};E.types=g!==null?g.types:null,rt.T=E,Pf(t,!1,n,a);try{var O=u(),K=rt.S;if(K!==null&&K(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=ey(O,r);No(t,n,ut,si(t))}else No(t,n,r,si(t))}catch(xt){No(t,n,{then:function(){},status:"rejected",reason:xt},si())}finally{St.p=c,g!==null&&E.types!==null&&(g.types=E.types),rt.T=g}}function oy(){}function Lf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=U0(t).queue;D0(t,u,n,w,a===null?oy:function(){return N0(t),a(r)})}function U0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:w},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N0(t){var n=U0(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},si())}function Of(){return An(Ns)}function L0(){return ln().memoizedState}function O0(){return ln().memoizedState}function ly(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=za(a);var r=Ia(n,t,a);r!==null&&(Zn(r,n,a),Ao(r,n,a)),n={cache:lf()},t.payload=n;return}n=n.return}}function uy(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(t)?z0(n,a):(a=Jc(t,n,a,r),a!==null&&(Zn(a,t,r),I0(a,n,r)))}function P0(t,n,a){var r=si();No(t,n,a,r)}function No(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(iu(t))z0(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(u.hasEagerState=!0,u.eagerState=E,ei(E,g))return Ol(t,n,u,0),We===null&&Ll(),!1}catch{}finally{}if(a=Jc(t,n,u,r),a!==null)return Zn(a,t,r),I0(a,n,r),!0}return!1}function Pf(t,n,a,r){if(r={lane:2,revertLane:bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},iu(t)){if(n)throw Error(s(479))}else n=Jc(t,a,r,2),n!==null&&Zn(n,t,2)}function iu(t){var n=t.alternate;return t===de||n!==null&&n===de}function z0(t,n){fs=Kl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function I0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,J(t,a)}}var au={readContext:An,use:$l,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},B0={readContext:An,use:$l,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:y0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,eu(4194308,4,b0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return eu(4194308,4,t,n)},useInsertionEffect:function(t,n){eu(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var r=t();if(wr){gn(!0);try{t()}finally{gn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Hn();if(a!==void 0){var u=a(n);if(wr){gn(!0);try{a(n)}finally{gn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=uy.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,a=P0.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(t,n){var a=Hn();return Nf(a,t,n)},useTransition:function(){var t=Cf(!1);return t=D0.bind(null,de,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=de,u=Hn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Te&127)!==0||r0(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,y0(o0.bind(null,r,c,t),[t]),r.flags|=2048,ds(9,{destroy:void 0},s0.bind(null,r,c,a,n),null),a},useId:function(){var t=Hn(),n=We.identifierPrefix;if(ve){var a=Fi,r=Bi;a=(r&~(1<<32-Ln(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:g0,useActionState:g0,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pf.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:bf,useCacheRefresh:function(){return Hn().memoizedState=ly.bind(null,de)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},F0={readContext:An,use:$l,useCallback:R0,useContext:An,useEffect:Df,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:tu,useRef:S0,useState:function(){return tu(ha)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=ln();return w0(a,ke.memoizedState,t,n)},useTransition:function(){var t=tu(ha)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:Of,useFormState:_0,useActionState:_0,useOptimistic:function(t,n){var a=ln();return c0(a,ke,t,n)},useMemoCache:bf,useCacheRefresh:O0,useEffectEvent:M0},cy={readContext:An,use:$l,useCallback:R0,useContext:An,useEffect:Df,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:Rf,useRef:S0,useState:function(){return Rf(ha)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=ln();return ke===null?Nf(a,t,n):w0(a,ke.memoizedState,t,n)},useTransition:function(){var t=Rf(ha)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:Of,useFormState:x0,useActionState:x0,useOptimistic:function(t,n){var a=ln();return ke!==null?c0(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:O0,useEffectEvent:M0};function zf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var If={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),Ao(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),Ao(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=za(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(Zn(n,t,a),Ao(n,t,a))}};function H0(t,n,a,r,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!vo(a,r)||!vo(u,c):!0}function G0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&If.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function V0(t){Nl(t)}function k0(t){console.error(t)}function X0(t){Nl(t)}function ru(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function q0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){ru(t,n)},a}function Y0(t){return t=za(t),t.tag=3,t}function W0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){q0(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){q0(n,a,r),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function fy(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Mr(n,a,u,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Au():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mh(t,r,u)),!1;case 22:return a.flags|=65536,r===ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mh(t,r,u)),!1}throw Error(s(435,a.tag))}return Mh(t,r,u),Au(),!1}if(ve)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==af&&(t=Error(s(422),{cause:r}),yo(mi(t,a)))):(r!==af&&(n=Error(s(423),{cause:r}),yo(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=mi(r,a),u=Bf(t.stateNode,r,u),pf(t,u),on!==4&&(on=2)),!1;var c=Error(s(520),{cause:r});if(c=mi(c,a),Ho===null?Ho=[c]:Ho.push(c),on!==4&&(on=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Bf(a.stateNode,r,t),pf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),W0(u,t,a,r),pf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),hn=!1;function vn(t,n,a,r){n.child=t===null?Qm(n,null,a,r):Cr(n,t.child,a,r)}function j0(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Er(n),r=yf(t,n,a,g,c,u),E=Mf(),t!==null&&!hn?(Ef(t,n,u),da(t,n,u)):(ve&&E&&Bl(n),n.flags|=1,vn(t,n,r,u),n.child)}function Z0(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!$c(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,K0(t,n,c,r,u)):(t=zl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Wf(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(g,r)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=oa(c,r),t.ref=n.ref,t.return=n,n.child=t}function K0(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(vo(c,r)&&t.ref===n.ref)if(hn=!1,n.pendingProps=r=c,Wf(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,da(t,n,u)}return Hf(t,n,a,r,u)}function Q0(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return J0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(n,c!==null?c.cachePool:null),c!==null?t0(n,c):gf(),e0(n);else return r=n.lanes=536870912,J0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(kl(n,c.cachePool),t0(n,c),Ha(),n.memoizedState=null):(t!==null&&kl(n,null),gf(),Ha());return vn(t,n,u,a),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function J0(t,n,a,r,u){var c=cf();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&kl(n,null),gf(),e0(n),t!==null&&Mr(t,n,r,!0),n.childLanes=u,null}function su(t,n){return n=ou({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $0(t,n,a){return Cr(n,t.child,null,a),t=su(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function hy(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=su(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Lo(null,t);if(vf(n),(t=Qe)?(t=b_(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return su(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(vf(n),u)if(n.flags&256)n.flags&=-257,n=$0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||Mr(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(Ba.current===null){if(r=We,r!==null&&(g=dt(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,vr(t,g),Zn(r,t,g),Ff;Au()}n=$0(t,n,a)}else t=c.treeContext,Qe=Si(g.nextSibling),yn=n,ve=!0,Ua=null,vi=!1,t!==null&&Fm(n,t),n=su(n,r),n.flags|=134221824;return n}return t=oa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ps(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Hf(t,n,a,r,u){return Er(n),a=yf(t,n,a,r,void 0,u),r=Mf(),t!==null&&!hn?(Ef(t,n,u),da(t,n,u)):(ve&&r&&Bl(n),n.flags|=1,vn(t,n,a,u),n.child)}function tg(t,n,a,r,u,c){return Er(n),n.updateQueue=null,a=i0(n,r,a,u),n0(t),r=Mf(),t!==null&&!hn?(Ef(t,n,c),da(t,n,c)):(ve&&r&&Bl(n),n.flags|=1,vn(t,n,a,c),n.child)}function eg(t,n,a,r,u){if(Er(n),n.stateNode===null){var c=as,g=a.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=If,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},hf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?An(g):as,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(zf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&If.enqueueReplaceState(c,c.state,null),Co(n,r,c,u),Ro(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,O=Dr(a,E);c.props=O;var K=c.context,ut=a.contextType;g=as,typeof ut=="object"&&ut!==null&&(g=An(ut));var xt=a.getDerivedStateFromProps;ut=typeof xt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||K!==g)&&G0(n,c,r,g),Pa=!1;var W=n.memoizedState;c.state=W,Co(n,r,c,u),Ro(),K=n.memoizedState,E||W!==K||Pa?(typeof xt=="function"&&(zf(n,a,xt,r),K=n.memoizedState),(O=Pa||H0(n,a,O,r,W,K,g))?(ut||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),c.props=r,c.state=K,c.context=g,r=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,df(t,n),g=n.memoizedProps,ut=Dr(a,g),c.props=ut,xt=n.pendingProps,W=c.context,K=a.contextType,O=as,typeof K=="object"&&K!==null&&(O=An(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==xt||W!==O)&&G0(n,c,r,O),Pa=!1,W=n.memoizedState,c.state=W,Co(n,r,c,u),Ro();var st=n.memoizedState;g!==xt||W!==st||Pa||t!==null&&t.dependencies!==null&&Gl(t.dependencies)?(typeof E=="function"&&(zf(n,a,E,r),st=n.memoizedState),(ut=Pa||H0(n,a,ut,r,W,st,O)||t!==null&&t.dependencies!==null&&Gl(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,st,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,st,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),c.props=r,c.state=st,c.context=O,r=ut):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,ps(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Cr(n,t.child,null,u),n.child=Cr(n,null,a,u)):vn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=da(t,n,u),t}function ng(t,n,a,r){return Sr(),n.flags|=256,vn(t,n,a,r),n.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(t){return{baseLanes:t,cachePool:qm()}}function kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function ig(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Fa(n):Ha(),(t=Qe)?(t=b_(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw Na(n);return Vh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(Ha(),u=n.mode,c=ou({mode:"hidden",children:c},u),r=xr(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Vf(a),r.childLanes=kf(t,g,a),n.memoizedState=Gf,Lo(null,r)):(Fa(n),Xf(n,c))}var E=t.memoizedState;if(E!==null){var O=E.dehydrated;if(O!==null)return dy(t,n,c,g,r,O,E,a)}return u?(Ha(),u=r.fallback,c=n.mode,E=t.child,O=E.sibling,r=oa(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,O!==null?u=oa(O,u):(u=xr(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Lo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=Vf(a):(c=u.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=qm(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=kf(t,g,a),n.memoizedState=Gf,Lo(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Xf(t,n){return n=ou({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ou(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function lu(t,n,a){return Cr(n,t.child,null,a),t=Xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dy(t,n,a,r,u,c,g,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,lu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=u.fallback,g=n.mode,u=ou({mode:"visible",children:u.children},g),c=xr(c,g,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Cr(n,t.child,null,E),u=n.child,u.memoizedState=Vf(E),u.childLanes=kf(t,r,E),n.memoizedState=Gf,Lo(null,u));if(Fa(n),Vh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var O=r.dgst;return r=O,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,yo({value:u,source:null,stack:null})),lu(t,n,E)}if(hn||Mr(t,n,E,!1),r=(E&t.childLanes)!==0,hn||r){if(Ba.current!==null)return lu(t,n,E);if(r=We,r!==null&&(u=dt(r,E),u!==0&&u!==g.retryLane))throw g.retryLane=u,vr(t,u),Zn(r,t,u),Ff;return Gh(c)||Au(),lu(t,n,E)}return Gh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=Si(c.nextSibling),yn=n,ve=!0,Ua=null,vi=!1,t!==null&&Fm(n,t),n=Xf(n,u.children),n.flags|=134221824,n)}function ag(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Hl(t.return,n,a)}function rg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Zl(a)===null&&(n=t),t=t.sibling}return n}function uu(t,n,a,r,u,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=c)}function qf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Yf(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return wo(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,wo(n,g),u==="backwards"&&t!==null?(qf(t),vn(t,n,r,a),qf(t)):vn(t,n,r,a),r=ve?So:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,a,n);else if(t.tag===19)ag(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=rg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,qf(n)),uu(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}uu(n,!0,a,null,c,r);break;case"together":uu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=rg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uu(n,!1,u,a,c,r)}return n.child}function sg(t,n,a){var r=n.pendingProps;return La(n,n.type,r.value),vn(t,n,r.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Mr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Gl(t)))}function py(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),Sr();break;case 27:case 5:ot(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=Mr(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?ig(t,n,a):(Fa(n),t=da(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return Yf(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Mr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Yf(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),wo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,Q0(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return da(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Wf(t,a)&&(n.flags&128)===0)return hn=!1,py(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,ve&&(n.flags&1048576)!==0&&Bm(n,So,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ar(n.elementType),n.type=t,typeof t=="function")$c(t)?(r=Dr(t,r),n.tag=1,n=eg(null,n,t,r,a)):(n.tag=0,n=Hf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=j0(null,n,t,r,a);break t}else if(u===Mt){n.tag=14,n=Z0(null,n,t,r,a);break t}else if(u===ht){n.tag=10,n.type=t,n=sg(null,n,a);break t}}throw n=Y(t)||t,Error(s(306,n,""))}}return n;case 0:return Hf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Dr(r,n.pendingProps),eg(t,n,r,u,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,df(t,n),Co(n,r,null,a);var g=n.memoizedState;if(r=g.cache,La(n,cn,r),r!==c.cache&&of(n,[cn],a,!0),Ro(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=ng(t,n,r,a);break t}else if(r!==u){u=mi(Error(s(424)),n),yo(u),n=ng(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=Si(t.firstChild),yn=n,ve=!0,Ua=null,vi=!0,a=Qm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Sr(),r===u){n=da(t,n,a);break t}vn(t,n,r,a)}n=n.child}return n;case 26:return ps(t,n),t===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=f_(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=N_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ot(n),t===null&&ve&&(r=n.stateNode=C_(n.type,n.pendingProps,Ye.current),yn=n,vi=!0,u=Qe,ja(n.type)?(kh=u,Qe=Si(r.firstChild)):Qe=u),vn(t,n,n.pendingProps.children,a),ps(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=r=Qe)&&(r=lM(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,yn=n,Qe=Si(r.firstChild),vi=!1,u=!0):u=!1),u||Na(n)),ot(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Oh(u,c)?r=null:g!==null&&Oh(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=yf(t,n,iy,null,null,a),Ns._currentValue=u),ps(t,n),vn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=Qe)&&(a=uM(a,n.pendingProps,vi),a!==null?(n.stateNode=a,yn=n,Qe=null,t=!0):t=!1),t||Na(n)),null;case 13:return ig(t,n,a);case 4:return N(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Cr(n,null,r,a):vn(t,n,r,a),n.child;case 11:return j0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,ps(t,n),vn(t,n,r,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return sg(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Er(n),u=An(u),r=r(u),n.flags|=1,vn(t,n,r,a),n.child;case 14:return Z0(t,n,n.type,n.pendingProps,a);case 15:return K0(t,n,n.type,n.pendingProps,a);case 19:return Yf(t,n,a);case 31:return hy(t,n,a);case 22:return Q0(t,n,a,n.pendingProps);case 24:return Er(n),r=An(cn),t===null?(u=cf(),u===null&&(u=We,c=lf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},hf(n),La(n,cn,u)):((t.lanes&a)!==0&&(df(t,n),Co(n,null,null,a),Ro()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,r)):(r=c.cache,La(n,cn,r),r!==u.cache&&of(n,[cn],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&Bl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:ps(t,n),vn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function jf(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?z_(n,r):z_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Vg())t.flags|=8192;else throw Rr=ql,ff}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(n))if(Vg())t.flags|=8192;else throw Rr=ql,ff}function cu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ml():536870912,t.lanes|=n,xs|=n)}function Oo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function my(t,n,a){var r=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ca(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(os(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rf())),Je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(Je(n),lg(n,c)):(Je(n),jf(n,u,null,r,a))):c?c!==t.memoizedState?(pa(n),Je(n),lg(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&pa(n),Je(n),jf(n,u,t,r,a)),null;case 27:if(vt(n),a=Ye.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=zt.current,os(n)?Hm(n):(t=C_(u,r,a),n.stateNode=t,pa(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(vt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=zt.current,os(n))Hm(n);else{var g=qo(Ye.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}c[Ot]=n,c[Kt]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Dn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&pa(n)}}return Je(n),n.subtreeFlags&=-33554433,jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ye.current,os(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||o_(t.nodeValue,a)),t||Na(n,!0)}else t=qo(t).createTextNode(r),t[Ot]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=os(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ot]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=os(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ot]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),cu(n,n.updateQueue),Je(n),null);case 4:return T(),t===null&&wh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ca(n.type),Je(n),null;case 19:if(xf(n),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Oo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Zl(t),c!==null){for(n.flags|=128,Oo(r,!1),t=c.updateQueue,n.updateQueue=t,cu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Pm(a,t),a=a.sibling;return wo(n,Cn.current&1|2),ve&&la(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Mu&&(n.flags|=128,u=!0,Oo(r,!1),n.lanes=4194304)}else{if(!u)if(t=Zl(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,cu(n,t),Oo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ve)return Je(n),null}else 2*X()-r.renderingStartTime>Mu&&a!==536870912&&(n.flags|=128,u=!0,Oo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,c=Cn.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ve?wo(n,c):(a=c,Xt(Rn,n),Xt(Cn,a),Pn===null&&(Pn=n)),ve&&la(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ni(n),_f(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&cu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&bt(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(cn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function gy(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return ni(n),_f(),t!==null&&bt(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(cn),null;case 25:return null;default:return null}}function ug(t,n){switch(nf(n),n.tag){case 3:ca(cn),T();break;case 26:case 27:case 5:vt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:xf(n);break;case 10:ca(n.type);break;case 22:case 23:ni(n),_f(),t!==null&&bt(br);break;case 24:ca(cn)}}function Po(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==u)}}catch(E){He(n,n.return,E)}}function Ga(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var O=a,K=E;try{K()}catch(ut){He(u,O,ut)}}}r=r.next}while(r!==c)}}catch(ut){He(n,n.return,ut)}}function cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$m(n,a)}catch(r){He(t,t.return,r)}}}function fg(t,n,a){a.props=Dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){He(t,n,r)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=v_(c)),r=u.ref;break;case 7:if(t.stateNode===null){var g=new oi(t);d(t.child,!1,sM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){He(t,n,E)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function fu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)T_(t.stateNode,n[a])}function hg(t){for(var n=t.return;n!==null&&(Kf(n)&&T_(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function zo(t){for(var n=t.return;n!==null&&(Kf(n)&&oM(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function Zf(t){return t.tag===5||t.tag===3||t.tag===27}function Kf(t){return t&&t.tag===7&&t.stateNode!==null}function Qf(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Jf(t,n,a){try{var r=t.stateNode;Vy(r,t.type,a,n),r[Kt]=n}catch(u){He(t,t.return,u)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function $f(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),fu(t,r),Ne=!0;else if(u!==4&&(u===27&&(fu(t,r),r=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(th(t,n,a,r),t=t.sibling;t!==null;)th(t,n,a,r),t=t.sibling}function hu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),fu(t,r),Ne=!0;else if(u!==4&&(u===27&&(fu(t,r),r=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(hu(t,n,a,r),t=t.sibling;t!==null;)hu(t,n,a,r),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[Ot]=t,n[Kt]=a}catch(c){He(t,t.return,c)}}var du=!1,ii=null;function mg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(du=!0)}var Gi=null;function gg(){var t=Gi;return Gi=null,t}var Yn=0;function ms(t,n,a,r,u){return Yn=0,_g(t.child,n,a,r,u)}function _g(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=Ih(g);r.push(E),E.view&&(c=!0)}else c||Ih(g).view&&(c=!0);du=!0,g_(g,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||_g(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function Vi(t,n){for(;t!==null;)t.tag===5?__(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Vi(t.child,n)),t=t.sibling}function pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=sa(n.default,n.share),n!=="none"&&(ms(t,a,n,null,!1)||Vi(t.child,!1))}t=t.sibling}}function eh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=ra(r,a),c=sa(r.default,a.paired?r.share:r.enter);c!=="none"?ms(t,u,c,null,!1)?(pu(t),a.paired||n||Es(t,r.onEnter)):Vi(t.child,!1):pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t,n),t=t.sibling;else pu(t)}function nh(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=sa(a.default,a.share);if(c!=="none"&&(ms(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Es(t,a.onShare)):Vi(t.child,!1)),n.delete(r),n.size===0)break}}}nh(t)}t=t.sibling}}}function ih(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),r=ii!==null?ii.get(a):void 0,u=sa(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(ms(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ii.delete(a),Es(t,n.onShare)):Es(t,n.onExit):Vi(t.child,!1)),ii!==null&&nh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ih(t),t=t.sibling;else ii!==null&&nh(t)}function vg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=sa(n.default,n.update),t.flags&=-5,n!=="none"&&ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&vg(t);t=t.sibling}}function ah(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Vi(t.child,!1))}ah(t)}t=t.sibling}}function mu(t){if(t.tag===30)t.stateNode.paired=null,Vi(t.child,!1),ah(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mu(t),t=t.sibling;else ah(t)}function xg(t){for(t=t.child;t!==null;)t.tag===30?Vi(t.child,!1):(t.subtreeFlags&33554432)!==0&&xg(t),t=t.sibling}function rh(t,n,a,r,u,c,g){for(var E=!1;n!==null;){if(n.tag===5){var O=n.stateNode;if(c!==null&&Yn<c.length){var K=c[Yn],ut=Ih(O);(K.view||ut.view)&&(E=!0);var xt;if(xt=(t.flags&4)===0)if(ut.clip)xt=!0;else{xt=K.rect;var W=ut.rect;xt=xt.y!==W.y||xt.x!==W.x||xt.height!==W.height||xt.width!==W.width}xt&&(t.flags|=4),ut.abs?ut=!K.abs:(K=K.rect,ut=ut.rect,ut=K.height!==ut.height||K.width!==ut.width),ut&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&g_(O,Yn===0?a:a+"_"+Yn,u),E&&(t.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(O,Yn===0?r:r+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:rh(t,n.child,a,r,u,c,g)&&(E=!0));n=n.sibling}return E}function Sg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=ra(a,r),c=sa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Yn=0,u=rh(r,E,u,u,c,g,!1),(t.flags&4)!==0&&u&&Es(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Sg(t);t=t.sibling}}var Mn=!1,Be=!1,ki=!1,sh=!1,yg=typeof WeakSet=="function"?WeakSet:Set,En=null,Xi=!1,Io=!1,gu=!1,oh=!1;function _y(t,n,a){if(t=t.containerInfo,Nh=Ls,t=bm(t),Yc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,O=-1,K=-1,ut=0,xt=0,W=t,st=null;e:for(;;){for(var It;W!==r||c!==0&&W.nodeType!==3||(O=E+c),W!==g||u!==0&&W.nodeType!==3||(K=E+u),W.nodeType===3&&(E+=W.nodeValue.length),(It=W.firstChild)!==null;)st=W,W=It;for(;;){if(W===t)break e;if(st===r&&++ut===c&&(O=E),st===g&&++xt===u&&(K=E),(It=W.nextSibling)!==null)break;W=st,st=W.parentNode}W=It}r=O===-1||K===-1?null:{start:O,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lh={focusedElem:t,selectionRange:r},Ls=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ih(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&mg(t),_u(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ih(r),_u(a);continue}else if(r!==null&&r.memoizedState!==null){a&&mg(t),_u(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,En=r):(a&&vg(t),_u(a))}}ii=null}function _u(t){for(;En!==null;){var n=En,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Dr(n.type,u);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){He(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Hh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Hh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ra(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=sa(u.default,u.update),u!=="none"&&ms(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,En=r;break}En=n.return}}function Mg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),r&4&&Po(5,a);break;case 1:if(qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){He(a,a.return,g)}else{var u=Dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){He(a,a.return,g)}}r&64&&cg(a),r&512&&Hi(a,a.return);break;case 3:if(qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$m(t,n)}catch(g){He(a,a.return,g)}}break;case 27:n===null&&r&4&&pg(a);case 26:case 5:qi(t,a),n===null&&r&4&&Qf(a),r&512&&Hi(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),r&4&&Ag(t,a);break;case 13:qi(t,a),r&4&&Rg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wy.bind(null,a),cM(t,a))));break;case 22:if(r=a.memoizedState!==null||Mn,!r){var c=n!==null&&n.memoizedState!==null||Be;n=Mn,u=Be,Mn=r,(Be=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):qi(t,a),Mn=n,Be=u}break;case 30:qi(t,a),r&512&&Hi(a,a.return);break;case 7:r&512&&Hi(a,a.return);default:qi(t,a)}}function lh(t,n){for(t=t.child;t!==null;)Eg(t,n),t=t.sibling}function Eg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){He(t,t.return,O)}uh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(O){He(t,t.return,O)}break;case 18:try{var E=t.stateNode;n?m_(E,!0):m_(t.stateNode,!1)}catch(O){He(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&lh(t,n);break;default:lh(t,n)}}function uh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Eg(a,r);break t;case 22:a.memoizedState===null&&uh(a,r);break t;default:uh(a,r)}}t=t.sibling}}function Tg(t){var n=t.alternate;n!==null&&(t.alternate=null,Tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Wn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)bg(t,n,a),a=a.sibling}function bg(t,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:Be||wn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||wn(a,n),zo(a);var r=tn,u=Wn;ja(a.type)&&(tn=a.stateNode,Wn=!1),Ai(t,n,a),w_(a.stateNode,a.type,a.memoizedProps),tn=r,Wn=u;break;case 5:Be||wn(a,n),zo(a);case 6:if(a.tag===6&&zo(a),r=tn,u=Wn,tn=null,Ai(t,n,a),tn=r,Wn=u,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ne=!0}catch(c){He(a,n,c)}else try{tn.removeChild(a.stateNode),Ne=!0}catch(c){He(a,n,c)}break;case 18:tn!==null&&(Wn?(t=tn,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Os(t)):p_(tn,a.stateNode));break;case 4:r=tn,u=Wn,tn=a.stateNode.containerInfo,Wn=!0,Ai(t,n,a),tn=r,Wn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),Be||Ga(4,a,n),Ai(t,n,a);break;case 1:Be||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&fg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Be=(r=Be)||a.memoizedState!==null,Ai(t,n,a),Be=r;break;case 30:wn(a,n),Ai(t,n,a);break;case 7:Be||wn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(a){He(n,n.return,a)}}}function Rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(a){He(n,n.return,a)}}function vy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new yg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new yg),n;default:throw Error(s(435,t.tag))}}function vu(t,n){var a=vy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Dy.bind(null,t,r);r.then(u,u)}})}function Gn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],g=t,E=n,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(ja(O.type)){tn=O.stateNode,Wn=!1;break t}break;case 5:tn=O.stateNode,Wn=!1;break t;case 3:case 4:tn=O.stateNode.containerInfo,Wn=!0;break t}O=O.return}if(tn===null)throw Error(s(160));bg(g,E,c),tn=null,Wn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cg(n,t,a),n=n.sibling}var Ri=null;function Cg(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Gn(n,t,a),Vn(t),u&4&&(Ga(3,t,t.return),Po(3,t),Ga(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),u&512&&(Be||r===null||wn(r,r.return)),u&64&&Mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ri,Gn(n,t,a),Vn(t),u&512&&(Be||r===null||wn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Mn)t.stateNode=f_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Oe]||r[Ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Dn(r,n,a),r[Ot]=t,Ue(r),n=r;break t;case"link":if(c=P_("link","href",u).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=u.createElement(n),Dn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=P_("meta","content",u).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=u.createElement(n),Dn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ot]=t,Ue(r),n=r}t.stateNode=n}else Mn||Wh(c,t.type,t.stateNode);else t.stateNode=O_(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?Mn||Wh(c,t.type,t.stateNode):O_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),u&512&&(Be||r===null||wn(r,r.return)),r!==null&&u&4&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=ki,ki=!1,Gn(n,t,a),ki=c,Vn(t),u&512&&(Be||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{Qr(n,""),Ne=!0}catch(ut){He(t,t.return,ut)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Jf(t,n,r!==null?r.memoizedProps:n)),u&1024&&(sh=!0);break;case 6:if(Gn(n,t,a),Vn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(ut){He(t,t.return,ut)}}break;case 3:if(Ne=!1,Lu=null,c=Ri,Ri=Yo(n.containerInfo),Gn(n,t,a),Ri=c,Vn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(n.containerInfo)}catch(ut){He(t,t.return,ut)}sh&&(sh=!1,wg(t)),Ne=!1;break;case 4:u=ki,ki=Mn,r=Zp(),c=Ri,Ri=Yo(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ri=c,Ne&&Io&&(gu=!0),Ne=r,ki=u;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yu=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=Mn,O=Be,K=ki;Mn=E||c,ki=K||c,Be=O||g,Gn(n,t,a),Be=O,ki=K,Mn=E,Vn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||Mn||Be||(n=g||Be,a=Mn,r=Be,Mn=c||Mn,Be=n,Va(t,2),Mn=a,Be=r),!c&&ki||lh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,vu(t,a))));break;case 19:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 30:u&512&&(Be||r===null||wn(r,r.return)),u=Zp(),c=Io,g=(a&335544064)===a,E=t.memoizedProps,Io=g&&sa(E.default,E.update)!=="none",Gn(n,t,a),Vn(t),g&&r!==null&&Ne&&(t.flags|=4),Io=c,Ne=u;break;case 21:break;case 7:u&512&&(Be||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(dg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(Kf(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(Zf(u))break;u=u.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,O=$f(t);hu(t,O,E,g);break;case 5:var K=a.stateNode;a.flags&32&&(Qr(K,""),a.flags&=-33);var ut=$f(t);hu(t,ut,K,g);break;case 3:case 4:var xt=a.stateNode.containerInfo,W=$f(t);th(t,W,xt,g);break;default:throw Error(s(161))}}catch(st){He(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;wg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ls=!0,n.reset(),Ls=!1),t=t.sibling}}function gs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Dg(n,t),n=n.sibling;else Sg(n)}function Dg(t,n){var a=t.alternate;if(a===null)eh(t,!1);else switch(t.tag){case 3:if(oh=Xi=!1,gg(),gs(n,t),!Xi&&!gu){if(t=Gi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];__(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),oh=!0}Gi=null;break;case 5:gs(n,t);break;case 4:r=Xi,Xi=!1,gs(n,t),Xi&&(gu=!0),Xi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?eh(t,!1):gs(n,t));break;case 30:r=Xi,u=gg(),Xi=!1,gs(n,t),Xi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ra(c,g),g=ra(a.memoizedProps,g);var E=sa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=rh(t,a,n,g,E,c,!0),Yn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Es(t,t.memoizedProps.onUpdate),Gi=u):u!==null&&(u.push.apply(u,Gi),Gi=u),Xi=(t.flags&32)!==0?!0:r;break;default:gs(n,t)}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,r);break;case 1:wn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&fg(a,a.return,u),Va(a,r);break;case 27:(r&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||zo(a),Va(a,r);break;case 6:zo(a);break;case 26:wn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),Va(a,r);break;case 22:a.memoizedState===null&&Va(a,r);break;case 30:wn(a,a.return),Va(a,r);break;case 7:wn(a,a.return);default:Va(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,g=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ci(u,c,a),Po(4,c);break;case 1:if(Ci(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){He(r,r.return,ut)}if(r=c,u=r.updateQueue,u!==null){var O=r.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)Jm(K[u],O)}catch(ut){He(r,r.return,ut)}}E&&g&64&&cg(c),Hi(c,c.return);break;case 27:(a&2)!==0&&pg(c);case 5:c.tag!==5&&c.tag!==27||hg(c),Ci(u,c,a),E&&r===null&&g&4&&Qf(c),Hi(c,c.return);break;case 6:hg(c);break;case 26:O=c.stateNode,c.memoizedState!==null||O===null||Mn||Wh(Yo(O.ownerDocument),c.type,O),Ci(u,c,a),E&&r===null&&g&4&&Qf(c),Hi(c,c.return);break;case 12:Ci(u,c,a);break;case 31:Ci(u,c,a),E&&g&4&&Ag(u,c);break;case 13:Ci(u,c,a),E&&g&4&&Rg(u,c);break;case 22:c.memoizedState===null&&Ci(u,c,a),Hi(c,c.return);break;case 30:Ci(u,c,a),Hi(c,c.return);break;case 7:Hi(c,c.return);default:Ci(u,c,a)}n=n.sibling}}function ch(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function fh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function xi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Ug(t,n,a,r),n=n.sibling;else u&&xg(n)}function Ug(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&mu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&Po(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),u&&oh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Mo(c)));break;case 12:if(c&2048){xi(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,O=g.onPostCommit;typeof O=="function"&&O(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){He(n,n.return,K)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&mu(E),g._visibility&2?xi(t,n,a,r):Bo(t,n)):(u&&E!==null&&E.memoizedState!==null&&mu(n),g._visibility&2?xi(t,n,a,r):(g._visibility|=2,_s(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&ch(E,n);break;case 24:xi(t,n,a,r),c&2048&&fh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Vi(c.child,!0),Vi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function _s(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=a,O=r,K=g.flags;switch(g.tag){case 0:case 11:case 15:_s(c,g,E,O,u),Po(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?_s(c,g,E,O,u):Bo(c,g):(ut._visibility|=2,_s(c,g,E,O,u)),u&&K&2048&&ch(g.alternate,g);break;case 24:_s(c,g,E,O,u),u&&K&2048&&fh(g.alternate,g);break;default:_s(c,g,E,O,u)}n=n.sibling}}function Bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Bo(a,r),u&2048&&ch(r.alternate,r);break;case 24:Bo(a,r),u&2048&&fh(r.alternate,r);break;default:Bo(a,r)}n=n.sibling}}var Ur=8192;function Nr(t,n,a){if(t.subtreeFlags&Ur)for(t=t.child;t!==null;)Ng(t,n,a),t=t.sibling}function Ng(t,n,a){switch(t.tag){case 26:Nr(t,n,a),t.flags&Ur&&(t.memoizedState!==null?TM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&F_(a,t)));break;case 5:Nr(t,n,a),t.flags&Ur&&(t=t.stateNode,(n&335544128)===n&&F_(a,t));break;case 3:case 4:var r=Ri;Ri=Yo(t.stateNode.containerInfo),Nr(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ur,Ur=16777216,Nr(t,n,a),Ur=r):Nr(t,n,a));break;case 30:if((t.flags&Ur)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ii===null&&(ii=new Map),ii.set(r,u)}Nr(t,n,a);break;default:Nr(t,n,a)}}function Lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,Pg(r,t)}Lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xu(t)):Fo(t);break;default:Fo(t)}}function xu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,Pg(r,t)}Lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),xu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xu(n));break;default:xu(n)}t=t.sibling}}function Pg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,En=r;else t:for(a=t;En!==null;){r=En;var u=r.sibling,c=r.return;if(Tg(r),r===a){En=null;break t}if(u!==null){u.return=c,En=u;break t}En=c}}}var xy={getCacheForType:function(t){var n=An(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(cn).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,ze=0,We=null,ye=null,Te=0,Fe=0,ai=null,ka=!1,vs=!1,hh=!1,ma=0,on=0,Xa=0,Lr=0,Su=0,ri=0,xs=0,Ho=null,jn=null,dh=!1,yu=0,zg=0,Mu=1/0,Eu=null,qa=null,an=0,wi=null,Or=null,Yi=0,ph=0,mh=null,Ig=null,Ss=null,ys=null,Ms=null,Go=0,Tu=null;function si(){return(ze&2)!==0&&Te!==0?Te&-Te:rt.T!==null?bh():Ct()}function Bg(){if(ri===0)if((Te&536870912)===0||ve){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ri=t}else ri=536870912;return t=Rn.current,t!==null&&(t.flags|=32),ri}function Es(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=v_(ra(t.memoizedProps,a))),ys===null&&(ys=[]),ys.push(n.bind(null,r))}}function Zn(t,n,a){(t===We&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),Ya(t,Te,ri,!1)),mr(t,a),((ze&2)===0||t!==We)&&(t===We&&((ze&2)===0&&(Lr|=a),on===4&&Ya(t,Te,ri,!1)),Wi(t))}function Fg(t,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),u=r?Ey(t,n):_h(t,n,!0),c=r;do{if(u===0){vs&&!r&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!yy(a)){u=_h(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=Ho;var O=E.current.memoizedState.isDehydrated;if(O&&(Ts(E,g).flags|=256),g=_h(E,g,!1),g!==2&&g!==6){if(hh&&!O){E.errorRecoveryDisabledLanes|=c,Lr|=c,u=4;break t}c=jn,jn=u,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){Ts(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ri,!ka);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=yu+300-X(),10<u)){if(Ya(r,n,ri,!ka),pr(r,0,!0)!==0)break t;Yi=n,r.timeoutHandle=zh(Hg.bind(null,r,a,jn,Eu,dh,n,ri,Lr,xs,ka,c,"Throttled",-0,0),u);break t}Hg(r,a,jn,Eu,dh,n,ri,Lr,xs,ka,c,null,-0,0)}}break}while(!0);Wi(t)}function Hg(t,n,a,r,u,c,g,E,O,K,ut,xt,W,st){t.timeoutHandle=-1;var It=n.subtreeFlags,Qt=(c&335544064)===c;if(xt=null,(Qt||It&8192||(It&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ii=null,Ng(n,c,xt),Qt&&(It=xt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(It.count++,It.waitingForViewTransition=!0,It=Zo.bind(It),Qt.finished.then(It,It))),It=(c&62914560)===c?yu-X():(c&4194048)===c?zg-X():0,It=bM(xt,It),It!==null)){Yi=c,t.cancelPendingCommit=It(jg.bind(null,t,n,c,a,r,u,g,E,O,K,ut,xt,null,W,st)),Ya(t,c,g,!K);return}jg(t,n,c,a,r,u,g,E,O,K,ut,xt)}function yy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!ei(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,r){n=yl(t,n),n&=~Su,n&=~Lr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-Ln(u),g=1<<c;r[c]=-1,u&=~g}a!==0&&C(t,a,n)}function bu(){return(ze&6)===0?(Vo(0),!1):!0}function gh(){if(ye!==null){if(Fe===0)var t=ye.return;else t=ye,ua=yr=null,Tf(t),cs=null,bo=0,t=ye;for(;t!==null;)ug(t.alternate,t),t=t.return;ye=null}}function Ts(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,qy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,gh(),We=t,ye=a=oa(t.current,null),Te=n,Fe=0,ai=null,ka=!1,vs=Aa(t,n),hh=!1,xs=ri=Su=Lr=Xa=on=0,jn=Ho=null,dh=!1,ma=yl(t,n),Ll(),a}function Gg(t,n){de=null,rt.H=au,n===us||n===Xl?(n=jm(),Fe=3):n===ff?(n=jm(),Fe=4):Fe=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(on=1,ru(t,mi(n,t.current)))}function Vg(){var t=Rn.current;return t===null?!0:(Te&4194048)===Te?Pn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Pn:!1}function kg(){var t=rt.H;return rt.H=au,t===null?au:t}function Xg(){var t=rt.A;return rt.A=xy,t}function Au(){on=4,ka||(Te&4194048)!==Te&&Rn.current!==null||(vs=!0),(Xa&134217727)===0&&(Lr&134217727)===0||We===null||Ya(We,Te,ri,!1)}function _h(t,n,a){var r=ze;ze|=2;var u=kg(),c=Xg();(We!==t||Te!==n)&&(Eu=null,Ts(t,n)),n=!1;var g=on;t:do try{if(Fe!==0&&ye!==null){var E=ye,O=ai;switch(Fe){case 8:gh(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var K=Fe;if(Fe=0,ai=null,bs(t,E,O,K),a&&vs){g=0;break t}break;default:K=Fe,Fe=0,ai=null,bs(t,E,O,K)}}My(),g=on;break}catch(ut){Gg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,ua=yr=null,ze=r,rt.H=u,rt.A=c,ye===null&&(We=null,Te=0,Ll()),g}function My(){for(;ye!==null;)qg(ye)}function Ey(t,n){var a=ze;ze|=2;var r=kg(),u=Xg();We!==t||Te!==n?(Eu=null,Mu=X()+500,Ts(t,n)):vs=Aa(t,n);t:do try{if(Fe!==0&&ye!==null){n=ye;var c=ai;e:switch(Fe){case 1:Fe=0,ai=null,bs(t,n,c,1);break;case 2:case 9:if(Ym(c)){Fe=0,ai=null,Yg(n);break}n=function(){Fe!==2&&Fe!==9||We!==t||(Fe=7),Wi(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Ym(c)?(Fe=0,ai=null,Yg(n)):(Fe=0,ai=null,bs(t,n,c,7));break;case 5:var g=null;switch(ye.tag){case 26:g=ye.memoizedState;case 5:case 27:var E=ye;if(g?I_(g):E.stateNode.complete){Fe=0,ai=null;var O=E.sibling;if(O!==null)ye=O;else{var K=E.return;K!==null?(ye=K,Ru(K)):ye=null}break e}}Fe=0,ai=null,bs(t,n,c,5);break;case 6:Fe=0,ai=null,bs(t,n,c,6);break;case 8:gh(),on=6;break t;default:throw Error(s(462))}}Ty();break}catch(ut){Gg(t,ut)}while(!0);return ua=yr=null,rt.H=r,rt.A=u,ze=a,ye!==null?0:(We=null,Te=0,Ll(),on)}function Ty(){for(;ye!==null&&!Ft();)qg(ye)}function qg(t){var n=og(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Ru(t):ye=n}function Yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Tf(n);var r=n;r===yn&&(ve?(Fl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Fl(r),ve=!0));default:ug(a,n),n=ye=Pm(n,ma),n=og(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Ru(t):ye=n}function bs(t,n,a,r){ua=yr=null,Tf(n),cs=null,bo=0;var u=n.return;try{if(fy(t,u,n,a,Te)){on=1,ru(t,mi(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;on=1,ru(t,mi(a,t.current)),ye=null;return}n.flags&32768?(ve||r===1?t=!0:vs||(Te&536870912)!==0?t=!1:(ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wg(n,t)):Ru(n)}function Ru(t){var n=t;do{if((n.flags&32768)!==0){Wg(n,ka);return}t=n.return;var a=my(n.alternate,n,ma);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);on===0&&(on=5)}function Wg(t,n){do{var a=gy(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);on=6,ye=null}function jg(t,n,a,r,u,c,g,E,O,K,ut,xt){t.cancelPendingCommit=null;do Cu();while(an!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===We&&(ye=We=null,Te=0),Or=n,wi=t,Yi=a,mh=u,Ig=r,by(t,n,a,g,E,O,xt)}}function by(t,n,a,r,u,c,g){var E=n.lanes|n.childLanes;if(ph=E,E|=Qc,Cc(t,a,E,r,u,c),ys=null,(a&335544064)===a?(Ms=$S(t),r=10262):(Ms=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Uy(Rt,function(){return yh(),null})):(t.callbackNode=null,t.callbackPriority=0),du=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=rt.T,rt.T=null,u=St.p,St.p=2,c=ze,ze|=4;try{_y(t,n,a)}finally{ze=c,St.p=u,rt.T=r}}an=1,du?Ss=Qy(g,t.containerInfo,Ms,vh,xh,Ry,Sh,yh,Ay):(vh(),xh(),Sh())}function Ay(t){if(an!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Ry(){an===3&&(an=0,Dg(Or,wi),an=4)}function vh(){if(an===1){an=0;var t=wi,n=Or,a=Yi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=rt.T,rt.T=null;var u=St.p;St.p=2;var c=ze;ze|=4;try{Io=gu=!1,Cg(n,t,a),a=Lh;var g=bm(t.containerInfo),E=a.focusedElem,O=a.selectionRange;if(g!==E&&E&&E.ownerDocument&&Tm(E.ownerDocument.documentElement,E)){if(O!==null&&Yc(E)){var K=O.start,ut=O.end;if(ut===void 0&&(ut=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ut,E.value.length);else{var xt=E.ownerDocument||document,W=xt&&xt.defaultView||window;if(W.getSelection){var st=W.getSelection(),It=E.textContent.length,Qt=Math.min(O.start,It),pe=O.end===void 0?Qt:Math.min(O.end,It);!st.extend&&Qt>pe&&(g=pe,pe=Qt,Qt=g);var Z=Em(E,Qt),k=Em(E,pe);if(Z&&k&&(st.rangeCount!==1||st.anchorNode!==Z.node||st.anchorOffset!==Z.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var it=xt.createRange();it.setStart(Z.node,Z.offset),st.removeAllRanges(),Qt>pe?(st.addRange(it),st.extend(k.node,k.offset)):(it.setEnd(k.node,k.offset),st.addRange(it))}}}}for(xt=[],st=E;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var _t=xt[E];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Ls=!!Nh,Lh=Nh=null}finally{ze=c,St.p=u,rt.T=r}}t.current=n,an=2}}function xh(){if(an===2){an=0;var t=wi,n=Or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=rt.T,rt.T=null;var r=St.p;St.p=2;var u=ze;ze|=4;try{Mg(t,n.alternate,n)}finally{ze=u,St.p=r,rt.T=a}}an=3}}function Sh(){if(an===4||an===3){an=0;var t=Ss;Ss=null,he();var n=wi,a=Or,r=Yi,u=Ig,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?an=5:(an=0,Or=wi=null,Zg(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),$(r),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ee,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=rt.T,c=St.p,St.p=2,rt.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var O=u[E];g(O.value,{componentStack:O.stack})}}finally{rt.T=a,St.p=c}}if(u=ys,g=Ms,Ms=null,u!==null&&(ys=null,g===null&&(g=[]),t!==null))for(O=0;O<u.length;O++)a=(0,u[O])(g),a!==void 0&&t.finished.finally(a);(Yi&3)!==0&&Cu(),Wi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Tu?Go++:(Go=0,Tu=n):(Go=0,Tu=null),Vo(0)}}function Zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function Cu(){return Ss!==null&&(Ss.skipTransition(),Ss=null),vh(),xh(),Sh(),yh()}function yh(){if(an!==5)return!1;var t=wi,n=ph;ph=0;var a=$(Yi),r=rt.T,u=St.p;try{St.p=32>a?32:a,rt.T=null,a=mh,mh=null;var c=wi,g=Yi;if(an=0,Or=wi=null,Yi=0,(ze&6)!==0)throw Error(s(331));var E=ze;if(ze|=4,Og(c.current),Ug(c,c.current,g,a),ze=E,Vo(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ee,c)}catch{}return!0}finally{St.p=u,rt.T=r,Zg(t,n)}}function Kg(t,n,a){n=mi(a,n),n=Bf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(mr(t,2),Wi(t))}function He(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=mi(a,t),a=Y0(2),r=Ia(n,a,2),r!==null&&(W0(a,r,n,t),mr(r,2),Wi(r));break}}n=n.return}}function Mh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Sy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(hh=!0,u.add(a),t=Cy.bind(null,t,n,a),n.then(t,t))}function Cy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Te&a)===a&&((on===4||on===3&&(Te&62914560)===Te&&300>X()-yu)&&(ze&2)===0?Ts(t,0):Su|=a,xs===Te&&(xs=0)),Wi(t)}function Qg(t,n){n===0&&(n=Ml()),t=vr(t,n),t!==null&&(mr(t,n),Wi(t))}function wy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function Dy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Qg(t,a)}function Uy(t,n){return se(t,n)}var As=null,Rs=null,Eh=!1,wu=!1,Th=!1,Wa=0;function Wi(t){t!==Rs&&t.next===null&&(Rs===null?As=Rs=t:Rs=Rs.next=t),wu=!0,Eh||(Eh=!0,Ly())}function Vo(t,n){if(!Th&&wu){Th=!0;do for(var a=!1,r=As;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Ln(42|t)+1)-1,c&=u&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,e_(r,c))}else c=Te,c=pr(r,r===We?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Aa(r,c)||(a=!0,e_(r,c));r=r.next}while(a);Th=!1}}function Ny(){Jg()}function Jg(){wu=Eh=!1;var t=0;Wa!==0&&Xy()&&(t=Wa);for(var n=X(),a=null,r=As;r!==null;){var u=r.next,c=$g(r,n);c===0?(r.next=null,a===null?As=u:a.next=u,u===null&&(Rs=a)):(a=r,(t!==0||(c&3)!==0)&&(wu=!0)),r=u}an!==0&&an!==5||Vo(t),Wa!==0&&(Wa=0)}function $g(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ln(c),E=1<<g,O=u[g];O===-1?((E&a)===0||(E&r)!==0)&&(u[g]=Rc(E,n)):O<=n&&(t.expiredLanes|=E),c&=~E}if(n=We,a=Te,a=pr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&te(r),$(a)){case 2:case 8:a=jt;break;case 32:a=Rt;break;case 268435456:a=Jt;break;default:a=Rt}return r=t_.bind(null,t),a=se(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&te(r),t.callbackPriority=2,t.callbackNode=null,2}function t_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cu()&&t.callbackNode!==a)return null;var r=Te;return r=pr(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Fg(t,r,n),$g(t,X()),t.callbackNode!=null&&t.callbackNode===a?t_.bind(null,t):null)}function e_(t,n){if(Cu())return null;Fg(t,n,!0)}function Ly(){Yy(function(){(ze&6)!==0?se(Pt,Ny):Jg()})}function bh(){if(Wa===0){var t=Tr;t===0&&(t=hr,hr<<=1,(hr&261888)===0&&(hr=256)),Wa=t}return Wa}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(t)}function Oy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=n_((u[Kt]||null).action),g=r.submitter;g&&(n=(n=g[Kt]||null)?n_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new wl("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var O=new FormData(u,g);Lf(a,{pending:!0,data:O,method:u.method,action:c},null,O)}}else typeof c=="function"&&(E.preventDefault(),O=new FormData(u,g),Lf(a,{pending:!0,data:O,method:u.method,action:c},c,O))},currentTarget:u}]})}}for(var Ah=0;Ah<Kc.length;Ah++){var Rh=Kc[Ah],Py=Rh.toLowerCase(),zy=Rh[0].toUpperCase()+Rh.slice(1);bi(Py,"on"+zy)}bi(Cm,"onAnimationEnd"),bi(wm,"onAnimationIteration"),bi(Dm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(qS,"onTransitionRun"),bi(YS,"onTransitionStart"),bi(WS,"onTransitionCancel"),bi(Um,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function i_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],O=E.instance,K=E.currentTarget;if(E=E.listener,O!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(ut){Nl(ut)}u.currentTarget=null,c=O}else for(g=0;g<r.length;g++){if(E=r[g],O=E.instance,K=E.currentTarget,E=E.listener,O!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(ut){Nl(ut)}u.currentTarget=null,c=O}}}}function Me(t,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var r=t+"__bubble";a.has(r)||(a_(n,t,2,!1),a.add(r))}function Ch(t,n,a){var r=0;n&&(r|=4),a_(a,t,r,n)}var Du="_reactListening"+Math.random().toString(36).slice(2);function wh(t){if(!t[Du]){t[Du]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(Iy.has(a)||Ch(a,!1,t),Ch(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Du]||(n[Du]=!0,Ch("selectionchange",!1,n))}}function a_(t,n,a,r){switch(W_(n)){case 2:var u=wM;break;case 8:u=DM;break;default:u=Zh}a=u.bind(null,n,a,t),u=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Dh(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=r.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Pe(E),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){r=c=g;continue t}E=E.parentNode}}r=r.return}am(function(){var K=c,ut=Oc(a),xt=[];t:{var W=Nm.get(t);if(W!==void 0){var st=wl,It=t;switch(t){case"keypress":if(Rl(a)===0)break t;case"keydown":case"keyup":st=yS;break;case"focusin":It="focus",st=Hc;break;case"focusout":It="blur",st=Hc;break;case"beforeblur":case"afterblur":st=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=uS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=AS;break;case Cm:case wm:case Dm:st=hS;break;case Um:st=CS;break;case"scroll":case"scrollend":st=oS;break;case"wheel":st=DS;break;case"copy":case"cut":case"paste":st=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=um;break;case"submit":st=TS;break;case"toggle":case"beforetoggle":st=NS}var Qt=(n&4)!==0,pe=!Qt&&(t==="scroll"||t==="scrollend"),Z=Qt?W!==null?W+"Capture":null:W;Qt=[];for(var k=K,it;k!==null;){var _t=k;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||Z===null||(_t=co(k,Z),_t!=null&&Qt.push(Xo(k,_t,it))),pe)break;k=k.return}0<Qt.length&&(W=new st(W,It,null,a,ut),xt.push({event:W,listeners:Qt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",st&&a!==Lc&&(It=a.relatedTarget||a.fromElement)&&(Pe(It)||It[re]))break t;(W||st)&&(It=ut.window===ut?ut:(st=ut.ownerDocument)?st.defaultView||st.parentWindow:window,W?(st=a.relatedTarget||a.toElement,W=K,st=st?Pe(st):null,st!==null&&(pe=f(st),Qt=st.tag,st!==pe||Qt!==5&&Qt!==27&&Qt!==6)&&(st=null)):(W=null,st=K),W!==st&&(Qt=om,_t="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=um,_t="onPointerLeave",Z="onPointerEnter",k="pointer"),pe=W==null?It:_n(W),it=st==null?It:_n(st),It=new Qt(_t,k+"leave",W,a,ut),It.target=pe,It.relatedTarget=it,_t=null,Pe(ut)===K&&(Qt=new Qt(Z,k+"enter",st,a,ut),Qt.target=it,Qt.relatedTarget=pe,_t=Qt),pe=_t,Qt=W&&st?B(W,st,By):null,W!==null&&r_(xt,It,W,Qt,!1),st!==null&&pe!==null&&r_(xt,pe,st,Qt,!0)))}t:{if(W=K?_n(K):window,st=W.nodeName&&W.nodeName.toLowerCase(),st==="select"||st==="input"&&W.type==="file")var Wt=_m;else if(mm(W))if(vm)Wt=VS;else{Wt=HS;var be=FS}else st=W.nodeName,!st||st.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?K&&Nc(K.elementType)&&(Wt=_m):Wt=GS;if(Wt&&(Wt=Wt(t,K))){gm(xt,Wt,a,ut);break t}be&&be(t,W,K)}switch(be=K?_n(K):window,t){case"focusin":(mm(be)||be.contentEditable==="true")&&(es=be,Wc=K,xo=null);break;case"focusout":xo=Wc=es=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Am(xt,a,ut);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Am(xt,a,ut)}var ne;if(Vc)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else ts?dm(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(cm&&a.locale!=="ko"&&(ts||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ts&&(ne=rm()):(Ca=ut,Ic="value"in Ca?Ca.value:Ca.textContent,ts=!0)),be=Uu(K,ue),0<be.length&&(ue=new lm(ue,t,null,a,ut),xt.push({event:ue,listeners:be}),ne?ue.data=ne:(ne=pm(a),ne!==null&&(ue.data=ne)))),(ne=OS?PS(t,a):zS(t,a))&&(ue=Uu(K,"onBeforeInput"),0<ue.length&&(be=new lm("onBeforeInput","beforeinput",null,a,ut),xt.push({event:be,listeners:ue}),be.data=ne)),Oy(xt,t,K,a,ut)}i_(xt,n)})}function Xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Uu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=co(t,a),u!=null&&r.unshift(Xo(t,u,c)),u=co(t,n),u!=null&&r.push(Xo(t,u,c))),t.tag===3)return r;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r_(t,n,a,r,u){for(var c=n._reactName,g=[];a!==null&&a!==r;){var E=a,O=E.alternate,K=E.stateNode;if(E=E.tag,O!==null&&O===r)break;E!==5&&E!==26&&E!==27||K===null||(O=K,u?(K=co(a,c),K!=null&&g.unshift(Xo(a,K,O))):u||(K=co(a,c),K!=null&&g.push(Xo(a,K,O)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Fy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Hy,"")}function o_(t,n){return n=s_(n),s_(t)===n}function Ge(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Qr(t,""+r);else return;break;case"className":Tl(t,"class",r);break;case"tabIndex":Tl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tl(t,a,r);break;case"style":nm(t,r,c);return;case"data":if(n!=="object"){Tl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=bl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=bl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ii);return;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=bl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Me("beforetoggle",t),Me("toggle",t),El(t,"popover",r);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":El(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=rS.get(a)||a,El(t,a,r);else return}Ne=!0}function Uh(t,n,a,r,u,c){switch(a){case"style":nm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")Qr(t,""+r);else return;break;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}Ne=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):El(t,a,r)}return}Ne=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,c,g,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var E=c=g=u=null,O=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":u=ut;break;case"type":g=ut;break;case"checked":O=ut;break;case"defaultChecked":K=ut;break;case"value":c=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Ge(t,n,r,ut,a,null)}}Jp(t,c,E,O,K,g,u,!1);return;case"select":Me("invalid",t),r=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Ge(t,n,u,E,a,null)}n=c,a=g,t.multiple=!!r,n!=null?Kr(t,!!r,n,!1):a!=null&&Kr(t,!!r,a,!0);return;case"textarea":Me("invalid",t),c=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ge(t,n,g,E,a,null)}tm(t,r,u,c);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(r=a[O],r!=null))switch(O){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ge(t,n,O,r,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(r=0;r<ko.length;r++)Me(ko[r],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,K,r,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Uh(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ge(t,n,E,r,a,null))}var Gy={};function Vy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,E=null,O=null,K=null,ut=null;for(st in a){var xt=a[st];if(a.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":O=xt;default:r.hasOwnProperty(st)||Ge(t,n,st,null,r,xt)}}for(var W in r){var st=r[W];if(xt=a[W],r.hasOwnProperty(W)&&(st!=null||xt!=null))switch(W){case"type":st!==xt&&(Ne=!0),c=st;break;case"name":st!==xt&&(Ne=!0),u=st;break;case"checked":st!==xt&&(Ne=!0),K=st;break;case"defaultChecked":st!==xt&&(Ne=!0),ut=st;break;case"value":st!==xt&&(Ne=!0),g=st;break;case"defaultValue":st!==xt&&(Ne=!0),E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==xt&&Ge(t,n,W,st,r,xt)}}Dc(t,g,E,O,K,ut,c,u);return;case"select":st=g=E=W=null;for(c in a)if(O=a[c],a.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":st=O;default:r.hasOwnProperty(c)||Ge(t,n,c,null,r,O)}for(u in r)if(c=r[u],O=a[u],r.hasOwnProperty(u)&&(c!=null||O!=null))switch(u){case"value":c!==O&&(Ne=!0),W=c;break;case"defaultValue":c!==O&&(Ne=!0),E=c;break;case"multiple":c!==O&&(Ne=!0),g=c;default:c!==O&&Ge(t,n,u,c,r,O)}n=E,a=g,r=st,W!=null?Kr(t,!!a,W,!1):!!r!=!!a&&(n!=null?Kr(t,!!a,n,!0):Kr(t,!!a,a?[]:"",!1));return;case"textarea":st=W=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,r,u)}for(g in r)if(u=r[g],c=a[g],r.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":u!==c&&(Ne=!0),W=u;break;case"defaultValue":u!==c&&(Ne=!0),st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&Ge(t,n,g,u,r,c)}$p(t,W,st);return;case"option":for(var It in a)if(W=a[It],a.hasOwnProperty(It)&&W!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Ge(t,n,It,null,r,W)}for(O in r)if(W=r[O],st=a[O],r.hasOwnProperty(O)&&W!==st&&(W!=null||st!=null))switch(O){case"selected":W!==st&&(Ne=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Ge(t,n,O,W,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)W=a[Qt],a.hasOwnProperty(Qt)&&W!=null&&!r.hasOwnProperty(Qt)&&Ge(t,n,Qt,null,r,W);for(K in r)if(W=r[K],st=a[K],r.hasOwnProperty(K)&&W!==st&&(W!=null||st!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:Ge(t,n,K,W,r,st)}return;default:if(Nc(n)){for(var pe in a)W=a[pe],a.hasOwnProperty(pe)&&W!==void 0&&!r.hasOwnProperty(pe)&&Uh(t,n,pe,void 0,r,W);for(ut in r)W=r[ut],st=a[ut],!r.hasOwnProperty(ut)||W===st||W===void 0&&st===void 0||Uh(t,n,ut,W,r,st);return}}for(var Z in a)W=a[Z],a.hasOwnProperty(Z)&&W!=null&&!r.hasOwnProperty(Z)&&Ge(t,n,Z,null,r,W);for(xt in r)W=r[xt],st=a[xt],!r.hasOwnProperty(xt)||W===st||W==null&&st==null||Ge(t,n,xt,W,r,st)}function l_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ky(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,g=u.initiatorType,E=u.duration;if(c&&E&&l_(g)){for(g=0,E=u.responseEnd,r+=1;r<a.length;r++){var O=a[r],K=O.startTime;if(K>E)break;var ut=O.transferSize,xt=O.initiatorType;ut&&l_(xt)&&(O=O.responseEnd,g+=ut*(O<E?1:(E-K)/(O-K)))}if(--r,n+=8*(c+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nh=null,Lh=null;function qo(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function f_(t,n,a,r){return a=qo(a).createElement(t),a[Ot]=r,a[Kt]=n,Dn(a,t,n),Ue(a),a}function Oh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ph=null;function Xy(){var t=window.event;return t&&t.type==="popstate"?t===Ph?!1:(Ph=t,!0):(Ph=null,!1)}var zh=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,d_=typeof requestAnimationFrame=="function"?requestAnimationFrame:zh,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(Wy)}:zh;function Wy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function p_(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Os(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Xh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xh(a);for(var c=a.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Oe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&Xh(t.ownerDocument.body);a=u}while(a);Os(n)}function m_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function g_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function __(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function jy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Ih(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return jy(n,a,t)}function Zy(t){return t.documentElement.clientHeight}function Ky(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Qy(t,n,a,r,u,c,g,E,O){var K=n.nodeType===9?n:n.ownerDocument;try{var ut=K.startViewTransition({update:function(){var W=K.defaultView,st=W.navigation&&W.navigation.transition,It=K.fonts.status;r();var Qt=[];if(It==="loaded"&&(Zy(K),K.fonts.status==="loading"&&Qt.push(K.fonts.ready)),It=Qt.length,t!==null)for(var pe=t.suspenseyImages,Z=0,k=0;k<pe.length;k++){var it=pe[k];if(!it.complete){var _t=it.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<W.innerHeight&&_t.left<W.innerWidth){if(Z+=B_(it),Z>Ou){Qt.length=It;break}it=new Promise(Ky.bind(it)),Qt.push(it)}}}if(0<Qt.length)return W=Promise.race([Promise.all(Qt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(st?Promise.allSettled([st.finished,W]):W).then(c,c);if(u(),st)return st.finished.then(c,c);c()},types:a});K.__reactViewTransition=ut;var xt=[];return ut.ready.then(function(){for(var W=K.documentElement.getAnimations({subtree:!0}),st=0;st<W.length;st++){var It=W[st],Qt=It.effect,pe=Qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){xt.push(It),It=Qt.getKeyframes();for(var Z=pe=void 0,k=!0,it=0;it<It.length;it++){var _t=It[it],Wt=_t.width;if(pe===void 0)pe=Wt;else if(pe!==Wt){k=!1;break}if(Wt=_t.height,Z===void 0)Z=Wt;else if(Z!==Wt){k=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}k&&pe!==void 0&&Z!==void 0&&(Qt.setKeyframes(It),k=getComputedStyle(Qt.target,Qt.pseudoElement),k.width!==pe||k.height!==Z)&&(k=It[0],k.width=pe,k.height=Z,k=It[It.length-1],k.width=pe,k.height=Z,Qt.setKeyframes(It))}}g()},function(W){K.__reactViewTransition===ut&&(K.__reactViewTransition=null);try{if(typeof W=="object"&&W!==null)switch(W.name){case"InvalidStateError":(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null)}W!==null&&O(W)}finally{r(),u(),g()}}),ut.finished.finally(function(){for(var W=0;W<xt.length;W++)xt[W].cancel();K.__reactViewTransition===ut&&(K.__reactViewTransition=null),E()}),ut}catch{return r(),u(),g(),null}}function Pr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Pr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Pr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},Pr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function v_(t){return{name:t,group:new Pr("group",t),imagePair:new Pr("image-pair",t),old:new Pr("old",t),new:new Pr("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(S_(c,t,n,a)===-1){var g=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(O){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,O):n.handleEvent(O)}),r!==null&&(u=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Cs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),d(this._fragmentFiber.child,!1,Jy,t,E,r)}this._eventListeners=c}};function Jy(t,n,a,r){return y(t).addEventListener(n,a,r),!1}oi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=S_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=Cs(u.optionsOrUseCapture),d(this._fragmentFiber.child,!1,$y,t,a,u),r.splice(n,1),c!==null&&c()}};function $y(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function x_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function S_(t,n,a,r){if(t.length===0)return-1;r=x_(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&x_(c.optionsOrUseCapture)===r)return u}return-1}oi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){d(this._fragmentFiber.child,!0,y_,t,void 0,void 0)};function y_(t,n){return t.tag===6?!1:(t=y(t),fM(t,n))}oi.prototype.focusLast=function(t){var n=[];d(this._fragmentFiber.child,!0,Bh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],t);a--);};function Bh(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=qo(t).activeElement,t!==null&&d(this._fragmentFiber.child,!1,tM,t,void 0,void 0))};function tM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),d(this._fragmentFiber.child,!1,eM,t,void 0,void 0)};function eM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),d(this._fragmentFiber.child,!1,nM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function nM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Di=[],Fh=!1;function iM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Fh||(Fh=!0,hM(function(){Fh=!1;var r=Di;Di=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return d(this._fragmentFiber.child,!1,aM,t,void 0,void 0),t};function aM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];d(this._fragmentFiber.child,!1,Bh,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),O=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||O||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rM(t,n,a,r,u){var c=Pe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=B(a,c,H),n===null?n=!1:(d(n,!0,I,c,a),c=m,m=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=B(r,c,H),n===null?n=!1:(d(n,!0,U,c,r),c=m,z=m=null,n=c!==null)),n):!1}function M_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];d(this._fragmentFiber.child,!1,Bh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),M_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=y(u),M_(u,a)):y(u).scrollIntoView(t),r+=a?-1:1}};function sM(t,n){return t=y(t),E_(t,n),!1}function E_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function T_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,E=0;E<Di.length;E++){var O=Di[E];(O.fragmentInstance!==n||O.observer!==c||O.instance!==t)&&(Di[g++]=O)}Di.length=g,c.observe(t)}),E_(t,n))}function oM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Cs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?iM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Hh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hh(a),ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Oe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function uM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function b_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Gh(t){return t.data==="$?"||t.data==="$~"}function Vh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kh=null;function A_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function R_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function fM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function hM(t){d_(function(){d_(function(n){return t(n)})})}function C_(t,n,a){switch(n=qo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function w_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Ge(t,n,r,null,Gy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),ae(t)}function Xh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ae(t)}var yi=new Map,D_=new Set;function Yo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=St.d;St.d={f:dM,r:pM,D:mM,C:gM,L:_M,m:vM,X:SM,S:xM,M:yM};function dM(){var t=ga.f(),n=bu();return t||n}function pM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?N0(n):ga.r(t)}var ws=typeof document>"u"?null:document;function U_(t,n,a){var r=ws;if(r&&typeof n=="string"&&n){var u=di(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D_.has(u)||(D_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",t),Ue(n),r.head.appendChild(n)))}}function mM(t){ga.D(t),U_("dns-prefetch",t,null)}function gM(t,n){ga.C(t,n),U_("preconnect",t,n)}function _M(t,n,a){ga.L(t,n,a);var r=ws;if(r&&t&&n){var u='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+di(a.imageSizes)+'"]')):u+='[href="'+di(t)+'"]';var c=u;switch(n){case"style":c=Ds(t);break;case"script":c=Us(t)}if(!(yi.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Wo(c))||n==="script"&&r.querySelector(jo(c))))){var g=r.createElement("link");Dn(g,"link",t),n==="style"&&(g[De]=!0,g.onload=g.onerror=function(){Ra(g)}),Ue(g),r.head.appendChild(g)}}}function vM(t,n){ga.m(t,n);var a=ws;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Us(t)}if(!yi.has(c)&&(t=L({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(c)))return}r=a.createElement("link"),Dn(r,"link",t),Ue(r),a.head.appendChild(r)}}}function xM(t,n,a){ga.S(t,n,a);var r=ws;if(r&&t){var u=$n(r).hoistableStyles,c=Ds(t);n=n||"default";var g=u.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Wo(c)))E.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&qh(t,a);var O=g=r.createElement("link");Ue(O),Dn(O,"link",t),O._p=new Promise(function(K,ut){O.onload=K,O.onerror=ut}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(c,g)}}}function SM(t,n){ga.X(t,n);var a=ws;if(a&&t){var r=$n(a).hoistableScripts,u=Us(t),c=r.get(u);c||(c=a.querySelector(jo(u)),c||(t=L({src:t,async:!0},n),(n=yi.get(u))&&Yh(t,n),c=a.createElement("script"),Ue(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function yM(t,n){ga.M(t,n);var a=ws;if(a&&t){var r=$n(a).hoistableScripts,u=Us(t),c=r.get(u);c||(c=a.querySelector(jo(u)),c||(t=L({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Yh(t,n),c=a.createElement("script"),Ue(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function N_(t,n,a,r){var u=(u=Ye.current)?Yo(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ds(a.href),n=$n(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ds(a.href);var c=$n(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(Wo(t)))?c._p||(g.instance=c,g.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),MM(u,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Us(a),n=$n(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ds(t){return'href="'+di(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function L_(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function MM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[De]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[De]=!0,n.onload=n.onerror=Ra.bind(null,n),Dn(n,"link",a),Ue(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Us(t){return'[src="'+di(t)+'"]'}function jo(t){return"script[async]"+t}function O_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,Ue(r),r;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ue(r),Dn(r,"style",u),Nu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Ds(a.href);var c=t.querySelector(Wo(u));if(c)return n.state.loading|=4,n.instance=c,Ue(c),c;r=L_(a),(u=yi.get(u))&&qh(r,u),c=(t.ownerDocument||t).createElement("link"),Ue(c);var g=c;return g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Dn(c,"link",r),n.state.loading|=4,Nu(c,a.precedence,t),n.instance=c;case"script":return c=Us(a.src),(u=t.querySelector(jo(c)))?(n.instance=u,Ue(u),u):(r=a,(u=yi.get(c))&&(r=L({},a),Yh(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ue(u),Dn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Nu(r,a.precedence,t));return n.instance}function Nu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Lu=null;function P_(t,n,a){if(Lu===null){var r=new Map,u=Lu=new Map;u.set(a,r)}else u=Lu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Oe]||c[Ot]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function Wh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function EM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function B_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=B_(n),t.suspenseyImages.push(n)),t=AM.bind(t),n.decode().then(t,t))}function TM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ds(r.href),c=n.querySelector(Wo(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zo.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ue(c);return}c=n.ownerDocument||n,r=L_(r),(u=yi.get(u))&&qh(r,u),c=c.createElement("link"),Ue(c);var g=c;g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zo.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ou=0;function bM(t,n){return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Ou===0&&(Ou=62500*ky());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Ou?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function H_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Zo(){this.count--,H_(this)}function AM(){this.imgCount--,H_(this)}var Pu=null;function zu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,n.forEach(RM,t),Pu=null,Zo.call(t))}function RM(t,n){if(!(n.state.loading&4)){var a=Pu.get(t);if(a)var r=a.get(null);else{a=new Map,Pu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,u),a.set(g,u),this.count++,r=Zo.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ns={$$typeof:ht,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function CM(t,n,a,r,u,c,g,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function G_(t,n,a,r,u,c,g,E,O,K,ut,xt){return t=new CM(t,n,a,g,O,K,ut,xt,E),n=1,c===!0&&(n|=24),c=qn(3,null,null,n),t.current=c,c.stateNode=t,n=lf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},hf(c),t}function V_(t){return t?(t=as,t):as}function k_(t,n,a,r,u,c){u=V_(u),r.context===null?r.context=u:r.pendingContext=u,r=za(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ia(t,r,n),a!==null&&(Zn(a,t,n),Ao(a,t,n))}function X_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jh(t,n){X_(t,n),(t=t.alternate)&&X_(t,n)}function q_(t){if(t.tag===13||t.tag===31){var n=vr(t,67108864);n!==null&&Zn(n,t,67108864),jh(t,67108864)}}function Y_(t){if(t.tag===13||t.tag===31){var n=si();n=pt(n);var a=vr(t,n);a!==null&&Zn(a,t,n),jh(t,n)}}var Ls=!0;function wM(t,n,a,r){var u=rt.T;rt.T=null;var c=St.p;try{St.p=2,Zh(t,n,a,r)}finally{St.p=c,rt.T=u}}function DM(t,n,a,r){var u=rt.T;rt.T=null;var c=St.p;try{St.p=8,Zh(t,n,a,r)}finally{St.p=c,rt.T=u}}function Zh(t,n,a,r){if(Ls){var u=Kh(r);if(u===null)Dh(t,n,r,Iu,a),j_(t,r);else if(NM(u,t,n,a,r))r.stopPropagation();else if(j_(t,r),n&4&&-1<UM.indexOf(t)){for(;u!==null;){var c=_e(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=hi(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var O=1<<31-Ln(g);E.entanglements[1]|=O,g&=~O}Wi(c),(ze&6)===0&&(Mu=X()+500,Vo(0))}}break;case 31:case 13:E=vr(c,2),E!==null&&Zn(E,c,2),bu(),jh(c,2)}if(c=Kh(r),c===null&&Dh(t,n,r,Iu,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else Dh(t,n,r,null,a)}}function Kh(t){return t=Oc(t),Qh(t)}var Iu=null;function Qh(t){if(Iu=null,t=Pe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Iu=t,null}function W_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case Pt:return 2;case jt:return 8;case Rt:case yt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var Jh=!1,Za=null,Ka=null,Qa=null,Ko=new Map,Qo=new Map,Ja=[],UM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Jo(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=_e(n),n!==null&&q_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function NM(t,n,a,r,u){switch(n){case"focusin":return Za=Jo(Za,t,n,a,r,u),!0;case"dragenter":return Ka=Jo(Ka,t,n,a,r,u),!0;case"mouseover":return Qa=Jo(Qa,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return Ko.set(c,Jo(Ko.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,Qo.set(c,Jo(Qo.get(c)||null,t,n,a,r,u)),!0}return!1}function Z_(t){var n=Pe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Y_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ht(t.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Lc=r,a.target.dispatchEvent(r),Lc=null}else return n=_e(a),n!==null&&q_(n),t.blockedOn=a,!1;n.shift()}return!0}function K_(t,n,a){Bu(t)&&a.delete(n)}function LM(){Jh=!1,Za!==null&&Bu(Za)&&(Za=null),Ka!==null&&Bu(Ka)&&(Ka=null),Qa!==null&&Bu(Qa)&&(Qa=null),Ko.forEach(K_),Qo.forEach(K_)}function Fu(t,n){t.blockedOn===n&&(t.blockedOn=null,Jh||(Jh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LM)))}var Hu=null;function Q_(t){Hu!==t&&(Hu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hu===t&&(Hu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(Qh(r||a)===null)continue;break}var c=_e(a);c!==null&&(t.splice(n,3),n-=3,Lf(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Os(t){function n(O){return Fu(O,t)}Za!==null&&Fu(Za,t),Ka!==null&&Fu(Ka,t),Qa!==null&&Fu(Qa,t),Ko.forEach(n),Qo.forEach(n);for(var a=0;a<Ja.length;a++){var r=Ja[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Z_(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],g=u[Kt]||null;if(typeof c=="function")g||Q_(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[Kt]||null)E=g.formAction;else if(Qh(u)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Q_(a)}}}function J_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $h(t){this._internalRoot=t}Gu.prototype.render=$h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();k_(a,r,t,n,null,null)},Gu.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k_(t.current,2,null,t,null,null),bu(),n[re]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ct();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Z_(t)}};var $_=e.version;if($_!=="19.3.1")throw Error(s(527,$_,"19.3.1"));St.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var OM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:rt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Ee=Vu.inject(OM),nn=Vu}catch{}}return tl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=V0,c=k0,g=X0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=G_(t,1,!1,null,null,a,r,null,u,c,g,J_),t[re]=n.current,wh(t),new $h(n)},tl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=V0,g=k0,E=X0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=G_(t,1,!0,n,a??null,r,u,O,c,g,E,J_),n.context=V_(null),a=n.current,r=si(),r=pt(r),u=za(r),u.callback=null,Ia(a,u,r),a=r,n.current.lanes=a,mr(n,a),Wi(n),t[re]=n.current,wh(t),new Gu(n)},tl.version="19.3.1",tl}var uv;function XM(){if(uv)return nd.exports;uv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nd.exports=kM(),nd.exports}var qM=XM();const je={generator:{name:"Power cabinet",short:"POWER",description:"Supplies 8 power. The heartbeat of your factory.",cost:140,width:1,height:1,power:0,seconds:0,color:"#edc56c"},intake:{name:"Research desk",short:"DATA",description:"Collects one clean data packet every 6 seconds.",cost:100,width:2,height:1,power:1,seconds:6,color:"#72bea5"},lab:{name:"Model studio",short:"TRAIN",description:"Turns 2 data into a trained model in 10 seconds.",cost:220,width:2,height:2,power:3,seconds:10,color:"#8ea6df"},dispatch:{name:"Shipping desk",short:"SHIP",description:"Packages one model for a contract in 8 seconds.",cost:140,width:1,height:2,power:2,seconds:8,color:"#dd9479"},compute:{name:"Compute rack",short:"BOOST",description:"Speeds up all training labs by 25% while powered.",cost:300,width:2,height:1,power:2,seconds:0,color:"#b7a1d4"}};function Up(o){const e=Math.min(6,Math.floor(o/3));return[{id:o*3+1,name:"Teach a toaster small talk",client:"Toast & Co.",packages:2+e,reward:220+e*120,reputation:10+e*2},{id:o*3+2,name:"An apology bot for seagulls",client:"Harbor Council",packages:4+e,reward:470+e*120,reputation:20+e*2},{id:o*3+3,name:"Make spreadsheets feel loved",client:"Cell Mates Inc.",packages:6+e,reward:740+e*120,reputation:32+e*2}]}function Sx(){return{version:1,credits:900,reputation:0,size:6,data:0,models:0,packages:0,earned:0,completed:0,elapsed:0,nextId:1,machines:[],offers:Up(0),activeContract:1,paused:!1,speed:1}}function vc(o,e,i,s,l){const f=je[e];if(!f||!Number.isInteger(i)||!Number.isInteger(s)||i<0||s<0||i+f.width>o.size||s+f.height>o.size)return"Keep the whole machine inside your site.";if(o.machines.some(h=>h.id!==l&&i<h.x+je[h.kind].width&&i+f.width>h.x&&s<h.y+je[h.kind].height&&s+f.height>h.y))return"That space is already occupied."}const yx=o=>Math.round(je[o.kind].cost*.65*o.level),YM=o=>350+(o.size-6)*150;function Js(o){const e=o.machines.filter(l=>l.kind==="generator"&&!l.paused).reduce((l,f)=>l+8+(f.level-1)*5,0);let i=0;const s=new Set;for(const l of o.machines){if(l.paused||l.kind==="generator")continue;const f=je[l.kind].power+l.level-1;i+f<=e&&(i+=f,s.add(l.id))}return{supply:e,used:i,demand:o.machines.filter(l=>!l.paused).reduce((l,f)=>l+(f.kind==="generator"?0:je[f.kind].power+f.level-1),0),powered:s}}function cv(o,e){const i=je[o.kind],s=je[e.kind];return(o.x+i.width===e.x||e.x+s.width===o.x)&&o.y<e.y+s.height&&o.y+i.height>e.y||(o.y+i.height===e.y||e.y+s.height===o.y)&&o.x<e.x+s.width&&o.x+i.width>e.x}function Mx(o,e,i=Js(o).powered){let s=1+(e.level-1)*.35;return(e.kind==="lab"&&o.machines.some(l=>l.kind==="intake"&&cv(e,l))||e.kind==="dispatch"&&o.machines.some(l=>l.kind==="lab"&&cv(e,l)))&&(s+=.15),e.kind==="lab"&&(s+=o.machines.filter(l=>l.kind==="compute"&&i.has(l.id)).reduce((l,f)=>l+.25*f.level,0)),je[e.kind].seconds/s}function WM(o,e){return e.paused?"Paused":e.kind==="generator"?"Generating power":Js(o).powered.has(e.id)?e.kind==="compute"?"Accelerating labs":e.working?"Working":e.kind==="lab"&&o.data<2?"Needs 2 data":e.kind==="dispatch"&&o.models<1?"Needs a model":"Ready":"Needs power"}function jM(o,e){if(o.paused||!Number.isFinite(e)||e<=0)return o;const i=structuredClone(o);let s=Math.min(e,60);for(;s>0;){const l=Math.min(.25,s);s-=l,i.elapsed+=l;const f=Js(i);for(const h of i.machines)if(!(!f.powered.has(h.id)||!je[h.kind].seconds)){if(!h.working){if(h.kind==="lab"){if(i.data<2)continue;i.data-=2}if(h.kind==="dispatch"){if(i.models<1)continue;i.models--}h.working=!0,h.progress=0}h.progress+=l/Mx(i,h,f.powered),h.progress>=1&&(h.progress=0,h.working=!1,h.produced++,h.kind==="intake"&&i.data++,h.kind==="lab"&&i.models++,h.kind==="dispatch"&&i.packages++)}}return i}function ZM(o,e){const i=structuredClone(o),s=l=>({state:o,error:l});if(e.type==="place"){const l=je[e.kind];if(!l)return s("Unknown machine.");const f=vc(i,e.kind,e.x,e.y);return f?s(f):i.credits<l.cost?s("Not enough credits. Sell a machine for a full refund or finish a contract."):(i.credits-=l.cost,i.machines.push({id:i.nextId++,kind:e.kind,x:e.x,y:e.y,level:1,progress:0,working:!1,paused:!1,invested:l.cost,produced:0}),{state:i,message:`${l.name} built.`})}if(e.type==="move"||e.type==="sell"||e.type==="upgrade"||e.type==="toggle"){const l=i.machines.find(f=>f.id===e.id);if(!l)return s("Machine not found.");if(e.type==="move"){const f=vc(i,l.kind,e.x,e.y,l.id);if(f)return s(f);l.x=e.x,l.y=e.y}if(e.type==="sell"&&(i.credits+=l.invested,l.working&&l.kind==="lab"&&(i.data+=2),l.working&&l.kind==="dispatch"&&i.models++,i.machines=i.machines.filter(f=>f.id!==l.id)),e.type==="upgrade"){if(l.level>=3)return s("This machine is fully upgraded.");const f=yx(l);if(i.credits<f)return s("Not enough credits for this upgrade.");i.credits-=f,l.invested+=f,l.level++}return e.type==="toggle"&&(l.paused=!l.paused),{state:i}}if(e.type==="expand"){if(i.size>=10)return s("Your site has reached its maximum size.");const l=YM(i);return i.credits<l?s("Not enough credits to expand."):i.credits-l+i.machines.reduce((f,h)=>f+h.invested,0)<600?s("Keep $600 in credits and refundable machines to rebuild a production line. Complete another contract before expanding."):(i.credits-=l,i.size+=2,{state:i,message:"Room to grow! Two new rows and columns unlocked."})}if(e.type==="contract"){if(!i.offers.some(l=>l.id===e.id))return s("Contract not found.");i.activeContract=e.id}if(e.type==="deliver"){const l=i.offers.find(f=>f.id===i.activeContract);return l?i.packages<l.packages?s(`Make ${l.packages-i.packages} more packages to deliver this contract.`):(i.packages-=l.packages,i.credits+=l.reward,i.earned+=l.reward,i.reputation+=l.reputation,i.completed++,i.offers=Up(i.completed),i.activeContract=i.offers[0].id,{state:i,message:`Delivered to ${l.client}! +$${l.reward} · +${l.reputation} reputation.`}):s("Choose a contract.")}return e.type==="pause"&&(i.paused=!i.paused),e.type==="speed"&&(i.speed=e.speed),{state:i}}function fv(o){return JSON.stringify(o)}function hv(o){if(o.length>1e5)throw Error("Save is too large.");const e=JSON.parse(o),i=(f,h=1e12)=>typeof f=="number"&&Number.isInteger(f)&&f>=0&&f<=h;if(!e||e.version!==1||![6,8,10].includes(e.size)||![1,2,4].includes(e.speed)||typeof e.paused!="boolean"||!["credits","reputation","data","models","packages","earned","completed","nextId"].every(f=>i(e[f]))||!Number.isFinite(e.elapsed)||e.elapsed<0||!Array.isArray(e.machines)||e.machines.length>100)throw Error("This save is not a valid factory.");const s=Sx();Object.assign(s,{credits:e.credits,reputation:e.reputation,size:e.size,data:e.data,models:e.models,packages:e.packages,earned:e.earned,completed:e.completed,elapsed:e.elapsed,nextId:e.nextId,paused:e.paused,speed:e.speed});const l=new Set;for(const f of e.machines){if(!f||!Object.hasOwn(je,f.kind)||!i(f.id)||f.id<1||l.has(f.id)||f.id>=e.nextId||![1,2,3].includes(f.level)||!Number.isFinite(f.progress)||f.progress<0||f.progress>=1||typeof f.working!="boolean"||typeof f.paused!="boolean"||!i(f.invested)||!i(f.produced)||vc(s,f.kind,f.x,f.y))throw Error("Save contains an invalid machine.");const h=je[f.kind].cost+Array.from({length:f.level-1},(p,v)=>Math.round(je[f.kind].cost*.65*(v+1))).reduce((p,v)=>p+v,0);if(f.invested!==h)throw Error("Save contains invalid machine costs.");l.add(f.id),s.machines.push({id:f.id,kind:f.kind,x:f.x,y:f.y,level:f.level,progress:f.progress,working:f.working,paused:f.paused,invested:f.invested,produced:f.produced})}if(s.offers=Up(e.completed),!s.offers.some(f=>f.id===e.activeContract))throw Error("Save contains an invalid contract.");return s.activeContract=e.activeContract,s}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="180",KM=0,dv=1,QM=2,Ex=1,Tx=2,Ma=3,cr=0,Jn=1,Ea=2,lr=0,Ks=1,pv=2,mv=3,gv=4,JM=5,kr=100,$M=101,tE=102,eE=103,nE=104,iE=200,aE=201,rE=202,sE=203,Hd=204,Gd=205,oE=206,lE=207,uE=208,cE=209,fE=210,hE=211,dE=212,pE=213,mE=214,Vd=0,kd=1,Xd=2,$s=3,qd=4,Yd=5,Wd=6,jd=7,bx=0,gE=1,_E=2,ur=0,vE=1,xE=2,SE=3,Ax=4,yE=5,ME=6,EE=7,Rx=300,to=301,eo=302,Zd=303,Kd=304,Tc=306,Qd=1e3,qr=1001,Jd=1002,fi=1003,TE=1004,ku=1005,Ki=1006,sd=1007,Yr=1008,$i=1009,Cx=1010,wx=1011,cl=1012,Lp=1013,Wr=1014,Ta=1015,ml=1016,Op=1017,Pp=1018,fl=1020,Dx=35902,Ux=35899,Nx=1021,Lx=1022,Pi=1023,hl=1026,dl=1027,Ox=1028,zp=1029,Px=1030,Ip=1031,Bp=1033,dc=33776,pc=33777,mc=33778,gc=33779,$d=35840,tp=35841,ep=35842,np=35843,ip=36196,ap=37492,rp=37496,sp=37808,op=37809,lp=37810,up=37811,cp=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,Sp=36492,yp=36494,Mp=36495,Ep=36283,Tp=36284,bp=36285,Ap=36286,bE=3200,AE=3201,zx=0,RE=1,or="",ci="srgb",no="srgb-linear",xc="linear",Xe="srgb",Ps=7680,_v=519,CE=512,wE=513,DE=514,Ix=515,UE=516,NE=517,LE=518,OE=519,vv=35044,xv="300 es",Qi=2e3,Sc=2001;class ao{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Rp=180/Math.PI;function gl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Ae(o,e,i){return Math.max(e,Math.min(i,o))}function PE(o,e){return(o%e+e)%e}function ld(o,e,i){return(1-i)*o+i*e}function el(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _l{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,p){let v=s[l+0],_=s[l+1],x=s[l+2],d=s[l+3];const S=f[h+0],M=f[h+1],b=f[h+2],A=f[h+3];if(p===0){e[i+0]=v,e[i+1]=_,e[i+2]=x,e[i+3]=d;return}if(p===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=A;return}if(d!==A||v!==S||_!==M||x!==b){let y=1-p;const m=v*S+_*M+x*b+d*A,z=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const H=Math.sqrt(I),B=Math.atan2(H,m*z);y=Math.sin(y*B)/H,p=Math.sin(p*B)/H}const U=p*z;if(v=v*y+S*U,_=_*y+M*U,x=x*y+b*U,d=d*y+A*U,y===1-p){const H=1/Math.sqrt(v*v+_*_+x*x+d*d);v*=H,_*=H,x*=H,d*=H}}e[i]=v,e[i+1]=_,e[i+2]=x,e[i+3]=d}static multiplyQuaternionsFlat(e,i,s,l,f,h){const p=s[l],v=s[l+1],_=s[l+2],x=s[l+3],d=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return e[i]=p*b+x*d+v*M-_*S,e[i+1]=v*b+x*S+_*d-p*M,e[i+2]=_*b+x*M+p*S-v*d,e[i+3]=x*b-p*d-v*S-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,p=Math.cos,v=Math.sin,_=p(s/2),x=p(l/2),d=p(f/2),S=v(s/2),M=v(l/2),b=v(f/2);switch(h){case"XYZ":this._x=S*x*d+_*M*b,this._y=_*M*d-S*x*b,this._z=_*x*b+S*M*d,this._w=_*x*d-S*M*b;break;case"YXZ":this._x=S*x*d+_*M*b,this._y=_*M*d-S*x*b,this._z=_*x*b-S*M*d,this._w=_*x*d+S*M*b;break;case"ZXY":this._x=S*x*d-_*M*b,this._y=_*M*d+S*x*b,this._z=_*x*b+S*M*d,this._w=_*x*d-S*M*b;break;case"ZYX":this._x=S*x*d-_*M*b,this._y=_*M*d+S*x*b,this._z=_*x*b-S*M*d,this._w=_*x*d+S*M*b;break;case"YZX":this._x=S*x*d+_*M*b,this._y=_*M*d+S*x*b,this._z=_*x*b-S*M*d,this._w=_*x*d-S*M*b;break;case"XZY":this._x=S*x*d-_*M*b,this._y=_*M*d-S*x*b,this._z=_*x*b+S*M*d,this._w=_*x*d+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],p=i[5],v=i[9],_=i[2],x=i[6],d=i[10],S=s+p+d;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-v)*M,this._y=(f-_)*M,this._z=(h-l)*M}else if(s>p&&s>d){const M=2*Math.sqrt(1+s-p-d);this._w=(x-v)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(f+_)/M}else if(p>d){const M=2*Math.sqrt(1+p-s-d);this._w=(f-_)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(v+x)/M}else{const M=2*Math.sqrt(1+d-s-p);this._w=(h-l)/M,this._x=(f+_)/M,this._y=(v+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,p=i._x,v=i._y,_=i._z,x=i._w;return this._x=s*x+h*p+l*_-f*v,this._y=l*x+h*v+f*p-s*_,this._z=f*x+h*_+s*v-l*p,this._w=h*x-s*p-l*v-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,h=this._w;let p=h*e._w+s*e._x+l*e._y+f*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=h,this._x=s,this._y=l,this._z=f,this;const v=1-p*p;if(v<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const _=Math.sqrt(v),x=Math.atan2(_,p),d=Math.sin((1-i)*x)/_,S=Math.sin(i*x)/_;return this._w=h*d+this._w*S,this._x=s*d+this._x*S,this._y=l*d+this._y*S,this._z=f*d+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,p=e.z,v=e.w,_=2*(h*l-p*s),x=2*(p*i-f*l),d=2*(f*s-h*i);return this.x=i+v*_+h*d-p*x,this.y=s+v*x+p*_-f*d,this.z=l+v*d+f*x-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,p=i.y,v=i.z;return this.x=l*v-f*p,this.y=f*h-s*v,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new tt,Sv=new _l;class me{constructor(e,i,s,l,f,h,p,v,_){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,p,v,_)}set(e,i,s,l,f,h,p,v,_){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=f,x[5]=v,x[6]=s,x[7]=h,x[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],p=s[3],v=s[6],_=s[1],x=s[4],d=s[7],S=s[2],M=s[5],b=s[8],A=l[0],y=l[3],m=l[6],z=l[1],I=l[4],U=l[7],H=l[2],B=l[5],L=l[8];return f[0]=h*A+p*z+v*H,f[3]=h*y+p*I+v*B,f[6]=h*m+p*U+v*L,f[1]=_*A+x*z+d*H,f[4]=_*y+x*I+d*B,f[7]=_*m+x*U+d*L,f[2]=S*A+M*z+b*H,f[5]=S*y+M*I+b*B,f[8]=S*m+M*U+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],p=e[5],v=e[6],_=e[7],x=e[8];return i*h*x-i*p*_-s*f*x+s*p*v+l*f*_-l*h*v}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],p=e[5],v=e[6],_=e[7],x=e[8],d=x*h-p*_,S=p*v-x*f,M=_*f-h*v,b=i*d+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=d*A,e[1]=(l*_-x*s)*A,e[2]=(p*s-l*h)*A,e[3]=S*A,e[4]=(x*i-l*v)*A,e[5]=(l*f-p*i)*A,e[6]=M*A,e[7]=(s*v-_*i)*A,e[8]=(h*i-s*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,p){const v=Math.cos(f),_=Math.sin(f);return this.set(s*v,s*_,-s*(v*h+_*p)+h+e,-l*_,l*v,-l*(-_*h+v*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(cd.makeScale(e,i)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new me;function Bx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zE(){const o=yc("canvas");return o.style.display="block",o}const yv={};function pl(o){o in yv||(yv[o]=!0,console.warn(o))}function IE(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const Mv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const o={enabled:!0,workingColorSpace:no,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=Qs(l.r),l.g=Qs(l.g),l.b=Qs(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return pl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return pl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[no]:{primaries:e,whitePoint:s,transfer:xc,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Xe,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Le=BE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zs;class FE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zs===void 0&&(zs=yc("canvas")),zs.width=e.width,zs.height=e.height;const l=zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=zs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?f.push(fd(l[h].image)):f.push(fd(l[h]))}else f=fd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;const hd=new tt;class Xn extends ao{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=qr,l=qr,f=Ki,h=Yr,p=Pi,v=$i,_=Xn.DEFAULT_ANISOTROPY,x=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=gl(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=p,this.internalFormat=null,this.type=v,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Rx;Xn.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,i=0,s=0,l=1){qe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const v=e.elements,_=v[0],x=v[4],d=v[8],S=v[1],M=v[5],b=v[9],A=v[2],y=v[6],m=v[10];if(Math.abs(x-S)<.01&&Math.abs(d-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(d+A)<.1&&Math.abs(b+y)<.1&&Math.abs(_+M+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(_+1)/2,U=(M+1)/2,H=(m+1)/2,B=(x+S)/4,L=(d+A)/4,V=(b+y)/4;return I>U&&I>H?I<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(I),l=B/s,f=L/s):U>H?U<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(U),s=B/l,f=V/l):H<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(H),s=L/f,l=V/f),this.set(s,l,f,i),this}let z=Math.sqrt((y-b)*(y-b)+(d-A)*(d-A)+(S-x)*(S-x));return Math.abs(z)<.001&&(z=1),this.x=(y-b)/z,this.y=(d-A)/z,this.z=(S-x)/z,this.w=Math.acos((_+M+m-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this.w=Ae(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this.w=Ae(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends ao{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new qe(0,0,e,i),this.scissorTest=!1,this.viewport=new qe(0,0,e,i);const l={width:e,height:i,depth:s.depth},f=new Xn(l);this.textures=[];const h=s.count;for(let p=0;p<h;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Fp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends VE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Fx extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=f.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(f,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xu.copy(s.boundingBox)),Xu.applyMatrix4(e.matrixWorld),this.union(Xu)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),qu.subVectors(this.max,nl),Is.subVectors(e.a,nl),Bs.subVectors(e.b,nl),Fs.subVectors(e.c,nl),tr.subVectors(Bs,Is),er.subVectors(Fs,Bs),zr.subVectors(Is,Fs);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-zr.z,zr.y,tr.z,0,-tr.x,er.z,0,-er.x,zr.z,0,-zr.x,-tr.y,tr.x,0,-er.y,er.x,0,-zr.y,zr.x,0];return!dd(i,Is,Bs,Fs,qu)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,Is,Bs,Fs,qu))?!1:(Yu.crossVectors(tr,er),i=[Yu.x,Yu.y,Yu.z],dd(i,Is,Bs,Fs,qu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ui=new tt,Xu=new vl,Is=new tt,Bs=new tt,Fs=new tt,tr=new tt,er=new tt,zr=new tt,nl=new tt,qu=new tt,Yu=new tt,Ir=new tt;function dd(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){Ir.fromArray(o,f);const p=l.x*Math.abs(Ir.x)+l.y*Math.abs(Ir.y)+l.z*Math.abs(Ir.z),v=e.dot(Ir),_=i.dot(Ir),x=s.dot(Ir);if(Math.max(-Math.max(v,_,x),Math.min(v,_,x))>p)return!1}return!0}const XE=new vl,il=new tt,pd=new tt;class bc{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):XE.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(pd)),this.expandByPoint(il.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new tt,md=new tt,Wu=new tt,nr=new tt,gd=new tt,ju=new tt,_d=new tt;class Hp{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){md.copy(e).add(i).multiplyScalar(.5),Wu.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(md);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Wu),p=nr.dot(this.direction),v=-nr.dot(Wu),_=nr.lengthSq(),x=Math.abs(1-h*h);let d,S,M,b;if(x>0)if(d=h*v-p,S=h*p-v,b=f*x,d>=0)if(S>=-b)if(S<=b){const A=1/x;d*=A,S*=A,M=d*(d+h*S+2*p)+S*(h*d+S+2*v)+_}else S=f,d=Math.max(0,-(h*S+p)),M=-d*d+S*(S+2*v)+_;else S=-f,d=Math.max(0,-(h*S+p)),M=-d*d+S*(S+2*v)+_;else S<=-b?(d=Math.max(0,-(-h*f+p)),S=d>0?-f:Math.min(Math.max(-f,-v),f),M=-d*d+S*(S+2*v)+_):S<=b?(d=0,S=Math.min(Math.max(-f,-v),f),M=S*(S+2*v)+_):(d=Math.max(0,-(h*f+p)),S=d>0?f:Math.min(Math.max(-f,-v),f),M=-d*d+S*(S+2*v)+_);else S=h>0?-f:f,d=Math.max(0,-(h*S+p)),M=-d*d+S*(S+2*v)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,d),l&&l.copy(md).addScaledVector(Wu,S),M}intersectSphere(e,i){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),p=s-h,v=s+h;return v<0?null:p<0?this.at(v,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,p,v;const _=1/this.direction.x,x=1/this.direction.y,d=1/this.direction.z,S=this.origin;return _>=0?(s=(e.min.x-S.x)*_,l=(e.max.x-S.x)*_):(s=(e.max.x-S.x)*_,l=(e.min.x-S.x)*_),x>=0?(f=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(f=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),d>=0?(p=(e.min.z-S.z)*d,v=(e.max.z-S.z)*d):(p=(e.max.z-S.z)*d,v=(e.min.z-S.z)*d),s>v||p>l)||((p>s||s!==s)&&(s=p),(v<l||l!==l)&&(l=v),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,s,l,f){gd.subVectors(i,e),ju.subVectors(s,e),_d.crossVectors(gd,ju);let h=this.direction.dot(_d),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;nr.subVectors(this.origin,e);const v=p*this.direction.dot(ju.crossVectors(nr,ju));if(v<0)return null;const _=p*this.direction.dot(gd.cross(nr));if(_<0||v+_>h)return null;const x=-p*nr.dot(_d);return x<0?null:this.at(x/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,s,l,f,h,p,v,_,x,d,S,M,b,A,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,p,v,_,x,d,S,M,b,A,y)}set(e,i,s,l,f,h,p,v,_,x,d,S,M,b,A,y){const m=this.elements;return m[0]=e,m[4]=i,m[8]=s,m[12]=l,m[1]=f,m[5]=h,m[9]=p,m[13]=v,m[2]=_,m[6]=x,m[10]=d,m[14]=S,m[3]=M,m[7]=b,m[11]=A,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Hs.setFromMatrixColumn(e,0).length(),f=1/Hs.setFromMatrixColumn(e,1).length(),h=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),p=Math.sin(s),v=Math.cos(l),_=Math.sin(l),x=Math.cos(f),d=Math.sin(f);if(e.order==="XYZ"){const S=h*x,M=h*d,b=p*x,A=p*d;i[0]=v*x,i[4]=-v*d,i[8]=_,i[1]=M+b*_,i[5]=S-A*_,i[9]=-p*v,i[2]=A-S*_,i[6]=b+M*_,i[10]=h*v}else if(e.order==="YXZ"){const S=v*x,M=v*d,b=_*x,A=_*d;i[0]=S+A*p,i[4]=b*p-M,i[8]=h*_,i[1]=h*d,i[5]=h*x,i[9]=-p,i[2]=M*p-b,i[6]=A+S*p,i[10]=h*v}else if(e.order==="ZXY"){const S=v*x,M=v*d,b=_*x,A=_*d;i[0]=S-A*p,i[4]=-h*d,i[8]=b+M*p,i[1]=M+b*p,i[5]=h*x,i[9]=A-S*p,i[2]=-h*_,i[6]=p,i[10]=h*v}else if(e.order==="ZYX"){const S=h*x,M=h*d,b=p*x,A=p*d;i[0]=v*x,i[4]=b*_-M,i[8]=S*_+A,i[1]=v*d,i[5]=A*_+S,i[9]=M*_-b,i[2]=-_,i[6]=p*v,i[10]=h*v}else if(e.order==="YZX"){const S=h*v,M=h*_,b=p*v,A=p*_;i[0]=v*x,i[4]=A-S*d,i[8]=b*d+M,i[1]=d,i[5]=h*x,i[9]=-p*x,i[2]=-_*x,i[6]=M*d+b,i[10]=S-A*d}else if(e.order==="XZY"){const S=h*v,M=h*_,b=p*v,A=p*_;i[0]=v*x,i[4]=-d,i[8]=_*x,i[1]=S*d+A,i[5]=h*x,i[9]=M*d-b,i[2]=b*d-M,i[6]=p*x,i[10]=A*d+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qE,e,YE)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ir.crossVectors(s,li),ir.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ir.crossVectors(s,li)),ir.normalize(),Zu.crossVectors(li,ir),l[0]=ir.x,l[4]=Zu.x,l[8]=li.x,l[1]=ir.y,l[5]=Zu.y,l[9]=li.y,l[2]=ir.z,l[6]=Zu.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],p=s[4],v=s[8],_=s[12],x=s[1],d=s[5],S=s[9],M=s[13],b=s[2],A=s[6],y=s[10],m=s[14],z=s[3],I=s[7],U=s[11],H=s[15],B=l[0],L=l[4],V=l[8],R=l[12],D=l[1],G=l[5],et=l[9],j=l[13],at=l[2],ht=l[6],q=l[10],ft=l[14],Q=l[3],Mt=l[7],At=l[11],Yt=l[15];return f[0]=h*B+p*D+v*at+_*Q,f[4]=h*L+p*G+v*ht+_*Mt,f[8]=h*V+p*et+v*q+_*At,f[12]=h*R+p*j+v*ft+_*Yt,f[1]=x*B+d*D+S*at+M*Q,f[5]=x*L+d*G+S*ht+M*Mt,f[9]=x*V+d*et+S*q+M*At,f[13]=x*R+d*j+S*ft+M*Yt,f[2]=b*B+A*D+y*at+m*Q,f[6]=b*L+A*G+y*ht+m*Mt,f[10]=b*V+A*et+y*q+m*At,f[14]=b*R+A*j+y*ft+m*Yt,f[3]=z*B+I*D+U*at+H*Q,f[7]=z*L+I*G+U*ht+H*Mt,f[11]=z*V+I*et+U*q+H*At,f[15]=z*R+I*j+U*ft+H*Yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],p=e[5],v=e[9],_=e[13],x=e[2],d=e[6],S=e[10],M=e[14],b=e[3],A=e[7],y=e[11],m=e[15];return b*(+f*v*d-l*_*d-f*p*S+s*_*S+l*p*M-s*v*M)+A*(+i*v*M-i*_*S+f*h*S-l*h*M+l*_*x-f*v*x)+y*(+i*_*d-i*p*M-f*h*d+s*h*M+f*p*x-s*_*x)+m*(-l*p*x-i*v*d+i*p*S+l*h*d-s*h*S+s*v*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],p=e[5],v=e[6],_=e[7],x=e[8],d=e[9],S=e[10],M=e[11],b=e[12],A=e[13],y=e[14],m=e[15],z=d*y*_-A*S*_+A*v*M-p*y*M-d*v*m+p*S*m,I=b*S*_-x*y*_-b*v*M+h*y*M+x*v*m-h*S*m,U=x*A*_-b*d*_+b*p*M-h*A*M-x*p*m+h*d*m,H=b*d*v-x*A*v-b*p*S+h*A*S+x*p*y-h*d*y,B=i*z+s*I+l*U+f*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=z*L,e[1]=(A*S*f-d*y*f-A*l*M+s*y*M+d*l*m-s*S*m)*L,e[2]=(p*y*f-A*v*f+A*l*_-s*y*_-p*l*m+s*v*m)*L,e[3]=(d*v*f-p*S*f-d*l*_+s*S*_+p*l*M-s*v*M)*L,e[4]=I*L,e[5]=(x*y*f-b*S*f+b*l*M-i*y*M-x*l*m+i*S*m)*L,e[6]=(b*v*f-h*y*f-b*l*_+i*y*_+h*l*m-i*v*m)*L,e[7]=(h*S*f-x*v*f+x*l*_-i*S*_-h*l*M+i*v*M)*L,e[8]=U*L,e[9]=(b*d*f-x*A*f-b*s*M+i*A*M+x*s*m-i*d*m)*L,e[10]=(h*A*f-b*p*f+b*s*_-i*A*_-h*s*m+i*p*m)*L,e[11]=(x*p*f-h*d*f-x*s*_+i*d*_+h*s*M-i*p*M)*L,e[12]=H*L,e[13]=(x*A*l-b*d*l+b*s*S-i*A*S-x*s*y+i*d*y)*L,e[14]=(b*p*l-h*A*l-b*s*v+i*A*v+h*s*y-i*p*y)*L,e[15]=(h*d*l-x*p*l+x*s*v-i*d*v-h*s*S+i*p*S)*L,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,p=e.y,v=e.z,_=f*h,x=f*p;return this.set(_*h+s,_*p-l*v,_*v+l*p,0,_*p+l*v,x*p+s,x*v-l*h,0,_*v-l*p,x*v+l*h,f*v*v+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,p=i._z,v=i._w,_=f+f,x=h+h,d=p+p,S=f*_,M=f*x,b=f*d,A=h*x,y=h*d,m=p*d,z=v*_,I=v*x,U=v*d,H=s.x,B=s.y,L=s.z;return l[0]=(1-(A+m))*H,l[1]=(M+U)*H,l[2]=(b-I)*H,l[3]=0,l[4]=(M-U)*B,l[5]=(1-(S+m))*B,l[6]=(y+z)*B,l[7]=0,l[8]=(b+I)*L,l[9]=(y-z)*L,l[10]=(1-(S+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=Hs.set(l[0],l[1],l[2]).length();const h=Hs.set(l[4],l[5],l[6]).length(),p=Hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const _=1/f,x=1/h,d=1/p;return Ni.elements[0]*=_,Ni.elements[1]*=_,Ni.elements[2]*=_,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=d,Ni.elements[9]*=d,Ni.elements[10]*=d,i.setFromRotationMatrix(Ni),s.x=f,s.y=h,s.z=p,this}makePerspective(e,i,s,l,f,h,p=Qi,v=!1){const _=this.elements,x=2*f/(i-e),d=2*f/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let b,A;if(v)b=f/(h-f),A=h*f/(h-f);else if(p===Qi)b=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(p===Sc)b=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return _[0]=x,_[4]=0,_[8]=S,_[12]=0,_[1]=0,_[5]=d,_[9]=M,_[13]=0,_[2]=0,_[6]=0,_[10]=b,_[14]=A,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,i,s,l,f,h,p=Qi,v=!1){const _=this.elements,x=2/(i-e),d=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,A;if(v)b=1/(h-f),A=h/(h-f);else if(p===Qi)b=-2/(h-f),A=-(h+f)/(h-f);else if(p===Sc)b=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return _[0]=x,_[4]=0,_[8]=0,_[12]=S,_[1]=0,_[5]=d,_[9]=0,_[13]=M,_[2]=0,_[6]=0,_[10]=b,_[14]=A,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Hs=new tt,Ni=new en,qE=new tt(0,0,0),YE=new tt(1,1,1),ir=new tt,Zu=new tt,li=new tt,Tv=new en,bv=new _l;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],p=l[8],v=l[1],_=l[5],x=l[9],d=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(v,_)):(this._y=Math.atan2(-d,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-d,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(v,f));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(v,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Ae(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-x,_),this._y=Math.atan2(-d,f)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,_),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const Av=new tt,Gs=new _l,xa=new en,Ku=new tt,al=new tt,jE=new tt,ZE=new _l,Rv=new tt(1,0,0),Cv=new tt(0,1,0),wv=new tt(0,0,1),Dv={type:"added"},KE={type:"removed"},Vs={type:"childadded",child:null},vd={type:"childremoved",child:null};class bn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new tt,i=new ta,s=new _l,l=new tt(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,i){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ku.copy(e):Ku.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(al,Ku,this.up):xa.lookAt(Ku,al,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Gs.setFromRotationMatrix(xa),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(KE),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,ZE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(p,v){return p[v.uuid]===void 0&&(p[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const v=p.shapes;if(Array.isArray(v))for(let _=0,x=v.length;_<x;_++){const d=v[_];f(e.shapes,d)}else f(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let v=0,_=this.material.length;v<_;v++)p.push(f(e.materials,this.material[v]));l.material=p}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const v=this.animations[p];l.animations.push(f(e.animations,v))}}if(i){const p=h(e.geometries),v=h(e.materials),_=h(e.textures),x=h(e.images),d=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);p.length>0&&(s.geometries=p),v.length>0&&(s.materials=v),_.length>0&&(s.textures=_),x.length>0&&(s.images=x),d.length>0&&(s.shapes=d),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const v=[];for(const _ in p){const x=p[_];delete x.metadata,v.push(x)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new tt(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new tt,Sa=new tt,xd=new tt,ya=new tt,ks=new tt,Xs=new tt,Uv=new tt,Sd=new tt,yd=new tt,Md=new tt,Ed=new qe,Td=new qe,bd=new qe;class Oi{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Li.subVectors(l,i),Sa.subVectors(s,i),xd.subVectors(e,i);const h=Li.dot(Li),p=Li.dot(Sa),v=Li.dot(xd),_=Sa.dot(Sa),x=Sa.dot(xd),d=h*_-p*p;if(d===0)return f.set(0,0,0),null;const S=1/d,M=(_*v-p*x)*S,b=(h*x-p*v)*S;return f.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,s,l,f,h,p,v){return this.getBarycoord(e,i,s,l,ya)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(f,ya.x),v.addScaledVector(h,ya.y),v.addScaledVector(p,ya.z),v)}static getInterpolatedAttribute(e,i,s,l,f,h){return Ed.setScalar(0),Td.setScalar(0),bd.setScalar(0),Ed.fromBufferAttribute(e,i),Td.fromBufferAttribute(e,s),bd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ed,f.x),h.addScaledVector(Td,f.y),h.addScaledVector(bd,f.z),h}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Sa.subVectors(e,i),Li.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Li.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,p;ks.subVectors(l,s),Xs.subVectors(f,s),Sd.subVectors(e,s);const v=ks.dot(Sd),_=Xs.dot(Sd);if(v<=0&&_<=0)return i.copy(s);yd.subVectors(e,l);const x=ks.dot(yd),d=Xs.dot(yd);if(x>=0&&d<=x)return i.copy(l);const S=v*d-x*_;if(S<=0&&v>=0&&x<=0)return h=v/(v-x),i.copy(s).addScaledVector(ks,h);Md.subVectors(e,f);const M=ks.dot(Md),b=Xs.dot(Md);if(b>=0&&M<=b)return i.copy(f);const A=M*_-v*b;if(A<=0&&_>=0&&b<=0)return p=_/(_-b),i.copy(s).addScaledVector(Xs,p);const y=x*b-M*d;if(y<=0&&d-x>=0&&M-b>=0)return Uv.subVectors(f,l),p=(d-x)/(d-x+(M-b)),i.copy(l).addScaledVector(Uv,p);const m=1/(y+A+S);return h=A*m,p=S*m,i.copy(s).addScaledVector(ks,h).addScaledVector(Xs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Qu={h:0,s:0,l:0};function Ad(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=PE(e,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Ad(h,f,e+1/3),this.g=Ad(h,f,e),this.b=Ad(h,f,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Hx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Le.workingToColorSpace(In.copy(this),e),Math.round(Ae(In.r*255,0,255))*65536+Math.round(Ae(In.g*255,0,255))*256+Math.round(Ae(In.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,f=In.b,h=Math.max(s,l,f),p=Math.min(s,l,f);let v,_;const x=(p+h)/2;if(p===h)v=0,_=0;else{const d=h-p;switch(_=x<=.5?d/(h+p):d/(2-h-p),h){case s:v=(l-f)/d+(l<f?6:0);break;case l:v=(f-s)/d+2;break;case f:v=(s-l)/d+4;break}v/=6}return e.h=v,e.s=_,e.l=x,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ci){Le.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(Qu);const s=ld(ar.h,Qu.h,i),l=ld(ar.s,Qu.s,i),f=ld(ar.l,Qu.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Re;Re.NAMES=Hx;let QE=0;class ro extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Ks,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hd&&(s.blendSrc=this.blendSrc),this.blendDst!==Gd&&(s.blendDst=this.blendDst),this.blendEquation!==kr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ul extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new tt,Ju=new we;let JE=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=vv,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ju.fromBufferAttribute(this,i),Ju.applyMatrix3(e),this.setXY(i,Ju.x,Ju.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=el(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=el(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=el(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=el(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=el(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),f=Kn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class Gx extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Vx extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class mn extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let $E=0;const Mi=new en,Rd=new bn,qs=new tt,ui=new vl,rl=new vl,Tn=new tt;class Ti extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bx(e)?Vx:Gx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new me().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const p=i[f];rl.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(ui.min,rl.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,rl.max),ui.expandByPoint(Tn)):(ui.expandByPoint(rl.min),ui.expandByPoint(rl.max))}ui.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)Tn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let f=0,h=i.length;f<h;f++){const p=i[f],v=this.morphTargetsRelative;for(let _=0,x=p.count;_<x;_++)Tn.fromBufferAttribute(p,_),v&&(qs.fromBufferAttribute(e,_),Tn.add(qs)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],v=[];for(let V=0;V<s.count;V++)p[V]=new tt,v[V]=new tt;const _=new tt,x=new tt,d=new tt,S=new we,M=new we,b=new we,A=new tt,y=new tt;function m(V,R,D){_.fromBufferAttribute(s,V),x.fromBufferAttribute(s,R),d.fromBufferAttribute(s,D),S.fromBufferAttribute(f,V),M.fromBufferAttribute(f,R),b.fromBufferAttribute(f,D),x.sub(_),d.sub(_),M.sub(S),b.sub(S);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(A.copy(x).multiplyScalar(b.y).addScaledVector(d,-M.y).multiplyScalar(G),y.copy(d).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(G),p[V].add(A),p[R].add(A),p[D].add(A),v[V].add(y),v[R].add(y),v[D].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let V=0,R=z.length;V<R;++V){const D=z[V],G=D.start,et=D.count;for(let j=G,at=G+et;j<at;j+=3)m(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const I=new tt,U=new tt,H=new tt,B=new tt;function L(V){H.fromBufferAttribute(l,V),B.copy(H);const R=p[V];I.copy(R),I.sub(H.multiplyScalar(H.dot(R))).normalize(),U.crossVectors(B,R);const G=U.dot(v[V])<0?-1:1;h.setXYZW(V,I.x,I.y,I.z,G)}for(let V=0,R=z.length;V<R;++V){const D=z[V],G=D.start,et=D.count;for(let j=G,at=G+et;j<at;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new tt,f=new tt,h=new tt,p=new tt,v=new tt,_=new tt,x=new tt,d=new tt;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),x.subVectors(h,f),d.subVectors(l,f),x.cross(d),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,A),_.fromBufferAttribute(s,y),p.add(x),v.add(x),_.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(A,v.x,v.y,v.z),s.setXYZ(y,_.x,_.y,_.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,f),d.subVectors(l,f),x.cross(d),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(p,v){const _=p.array,x=p.itemSize,d=p.normalized,S=new _.constructor(v.length*x);let M=0,b=0;for(let A=0,y=v.length;A<y;A++){p.isInterleavedBufferAttribute?M=v[A]*p.data.stride+p.offset:M=v[A]*x;for(let m=0;m<x;m++)S[b++]=_[M++]}return new Ji(S,x,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,s=this.index.array,l=this.attributes;for(const p in l){const v=l[p],_=e(v,s);i.setAttribute(p,_)}const f=this.morphAttributes;for(const p in f){const v=[],_=f[p];for(let x=0,d=_.length;x<d;x++){const S=_[x],M=e(S,s);v.push(M)}i.morphAttributes[p]=v}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const _ in v)v[_]!==void 0&&(e[_]=v[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const v in s){const _=s[v];e.data.attributes[v]=_.toJSON(e.data)}const l={};let f=!1;for(const v in this.morphAttributes){const _=this.morphAttributes[v],x=[];for(let d=0,S=_.length;d<S;d++){const M=_[d];x.push(M.toJSON(e.data))}x.length>0&&(l[v]=x,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const _ in l){const x=l[_];this.setAttribute(_,x.clone(i))}const f=e.morphAttributes;for(const _ in f){const x=[],d=f[_];for(let S=0,M=d.length;S<M;S++)x.push(d[S].clone(i));this.morphAttributes[_]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,x=h.length;_<x;_++){const d=h[_];this.addGroup(d.start,d.count,d.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new en,Br=new Hp,$u=new bc,Lv=new tt,tc=new tt,ec=new tt,nc=new tt,Cd=new tt,ic=new tt,Ov=new tt,ac=new tt;class Qn extends bn{constructor(e=new Ti,i=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const p=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(f&&p){ic.set(0,0,0);for(let v=0,_=f.length;v<_;v++){const x=p[v],d=f[v];x!==0&&(Cd.fromBufferAttribute(d,e),h?ic.addScaledVector(Cd,x):ic.addScaledVector(Cd.sub(i),x))}i.add(ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$u.copy(s.boundingSphere),$u.applyMatrix4(f),Br.copy(e.ray).recast(e.near),!($u.containsPoint(Br.origin)===!1&&(Br.intersectSphere($u,Lv)===null||Br.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Nv.copy(f).invert(),Br.copy(e.ray).applyMatrix4(Nv),!(s.boundingBox!==null&&Br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Br)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,p=f.index,v=f.attributes.position,_=f.attributes.uv,x=f.attributes.uv1,d=f.attributes.normal,S=f.groups,M=f.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],m=h[y.materialIndex],z=Math.max(y.start,M.start),I=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=z,H=I;U<H;U+=3){const B=p.getX(U),L=p.getX(U+1),V=p.getX(U+2);l=rc(this,m,e,s,_,x,d,B,L,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=b,m=A;y<m;y+=3){const z=p.getX(y),I=p.getX(y+1),U=p.getX(y+2);l=rc(this,h,e,s,_,x,d,z,I,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],m=h[y.materialIndex],z=Math.max(y.start,M.start),I=Math.min(v.count,Math.min(y.start+y.count,M.start+M.count));for(let U=z,H=I;U<H;U+=3){const B=U,L=U+1,V=U+2;l=rc(this,m,e,s,_,x,d,B,L,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(v.count,M.start+M.count);for(let y=b,m=A;y<m;y+=3){const z=y,I=y+1,U=y+2;l=rc(this,h,e,s,_,x,d,z,I,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function t1(o,e,i,s,l,f,h,p){let v;if(e.side===Jn?v=s.intersectTriangle(h,f,l,!0,p):v=s.intersectTriangle(l,f,h,e.side===cr,p),v===null)return null;ac.copy(p),ac.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(ac);return _<i.near||_>i.far?null:{distance:_,point:ac.clone(),object:o}}function rc(o,e,i,s,l,f,h,p,v,_){o.getVertexPosition(p,tc),o.getVertexPosition(v,ec),o.getVertexPosition(_,nc);const x=t1(o,e,i,s,tc,ec,nc,Ov);if(x){const d=new tt;Oi.getBarycoord(Ov,tc,ec,nc,d),l&&(x.uv=Oi.getInterpolatedAttribute(l,p,v,_,d,new we)),f&&(x.uv1=Oi.getInterpolatedAttribute(f,p,v,_,d,new we)),h&&(x.normal=Oi.getInterpolatedAttribute(h,p,v,_,d,new tt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:p,b:v,c:_,normal:new tt,materialIndex:0};Oi.getNormal(tc,ec,nc,S.normal),x.face=S,x.barycoord=d}return x}class so extends Ti{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const p=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const v=[],_=[],x=[],d=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,f,0),b("z","y","x",1,-1,s,i,-e,h,f,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,f,4),b("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(v),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(d,2));function b(A,y,m,z,I,U,H,B,L,V,R){const D=U/L,G=H/V,et=U/2,j=H/2,at=B/2,ht=L+1,q=V+1;let ft=0,Q=0;const Mt=new tt;for(let At=0;At<q;At++){const Yt=At*G-j;for(let oe=0;oe<ht;oe++){const Se=oe*D-et;Mt[A]=Se*z,Mt[y]=Yt*I,Mt[m]=at,_.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[y]=0,Mt[m]=B>0?1:-1,x.push(Mt.x,Mt.y,Mt.z),d.push(oe/L),d.push(1-At/V),ft+=1}}for(let At=0;At<V;At++)for(let Yt=0;Yt<L;Yt++){const oe=S+Yt+ht*At,Se=S+Yt+ht*(At+1),F=S+(Yt+1)+ht*(At+1),mt=S+(Yt+1)+ht*At;v.push(oe,Se,mt),v.push(Se,F,mt),Q+=6}p.addGroup(M,Q,R),M+=Q,S+=ft}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=io(o[i]);for(const l in s)e[l]=s[l]}return e}function e1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const n1={clone:io,merge:kn};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=e1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Xx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new tt,Pv=new we,zv=new we;class Ei extends Xx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,Pv,zv),i.subVectors(zv,Pv)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(od*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const v=h.fullWidth,_=h.fullHeight;f+=h.offsetX*l/v,i-=h.offsetY*s/_,l*=h.width/v,s*=h.height/_}const p=this.filmOffset;p!==0&&(f+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ys=-90,Ws=1;class r1 extends bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Ys,Ws,e,i);l.layers=this.layers,this.add(l);const f=new Ei(Ys,Ws,e,i);f.layers=this.layers,this.add(f);const h=new Ei(Ys,Ws,e,i);h.layers=this.layers,this.add(h);const p=new Ei(Ys,Ws,e,i);p.layers=this.layers,this.add(p);const v=new Ei(Ys,Ws,e,i);v.layers=this.layers,this.add(v);const _=new Ei(Ys,Ws,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,p,v]=i;for(const _ of i)this.remove(_);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Sc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,p,v,_,x]=this.children,d=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,p),e.setRenderTarget(s,3,l),e.render(i,v),e.setRenderTarget(s,4,l),e.render(i,_),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(d,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class qx extends Xn{constructor(e=[],i=to,s,l,f,h,p,v,_,x){super(e,i,s,l,f,h,p,v,_,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s1 extends jr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new so(5,5,5),f=new fr({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:lr});f.uniforms.tEquirect.value=i;const h=new Qn(l,f),p=i.minFilter;return i.minFilter===Yr&&(i.minFilter=Ki),new r1(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class ji extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o1={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const p=this._targetRay,v=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),m=this._getHandJoint(_,A);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const x=_.joints["index-finger-tip"],d=_.joints["thumb-tip"],S=x.position.distanceTo(d.position),M=.02,b=.005;_.inputState.pinching&&S>M+b?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&S<=M-b&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,f.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(f.linearVelocity)):v.hasLinearVelocity=!1,f.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(f.angularVelocity)):v.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return p!==null&&(p.visible=l!==null),v!==null&&(v.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ji;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class l1 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Dd=new tt,u1=new tt,c1=new me;class sr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Dd.subVectors(s,i).cross(u1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Dd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||c1.getNormalMatrix(e),l=this.coplanarPoint(Dd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new bc,f1=new we(.5,.5),sc=new tt;class Vp{constructor(e=new sr,i=new sr,s=new sr,l=new sr,f=new sr,h=new sr){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(f),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Qi,s=!1){const l=this.planes,f=e.elements,h=f[0],p=f[1],v=f[2],_=f[3],x=f[4],d=f[5],S=f[6],M=f[7],b=f[8],A=f[9],y=f[10],m=f[11],z=f[12],I=f[13],U=f[14],H=f[15];if(l[0].setComponents(_-h,M-x,m-b,H-z).normalize(),l[1].setComponents(_+h,M+x,m+b,H+z).normalize(),l[2].setComponents(_+p,M+d,m+A,H+I).normalize(),l[3].setComponents(_-p,M-d,m-A,H-I).normalize(),s)l[4].setComponents(v,S,y,U).normalize(),l[5].setComponents(_-v,M-S,m-y,H-U).normalize();else if(l[4].setComponents(_-v,M-S,m-y,H-U).normalize(),i===Qi)l[5].setComponents(_+v,M+S,m+y,H+U).normalize();else if(i===Sc)l[5].setComponents(v,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=f1.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(sc.x=l.normal.x>0?e.max.x:e.min.x,sc.y=l.normal.y>0?e.max.y:e.min.y,sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yx extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new tt,Ec=new tt,Iv=new en,sl=new Hp,oc=new bc,Ud=new tt,Bv=new tt;class h1 extends bn{constructor(e=new Ti,i=new Yx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,f=i.count;l<f;l++)Mc.fromBufferAttribute(i,l-1),Ec.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Mc.distanceTo(Ec);e.setAttribute("lineDistance",new mn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(l),oc.radius+=f,e.ray.intersectsSphere(oc)===!1)return;Iv.copy(l).invert(),sl.copy(e.ray).applyMatrix4(Iv);const p=f/((this.scale.x+this.scale.y+this.scale.z)/3),v=p*p,_=this.isLineSegments?2:1,x=s.index,S=s.attributes.position;if(x!==null){const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=_){const m=x.getX(A),z=x.getX(A+1),I=lc(this,e,sl,v,m,z,A);I&&i.push(I)}if(this.isLineLoop){const A=x.getX(b-1),y=x.getX(M),m=lc(this,e,sl,v,A,y,b-1);m&&i.push(m)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=_){const m=lc(this,e,sl,v,A,A+1,A);m&&i.push(m)}if(this.isLineLoop){const A=lc(this,e,sl,v,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const p=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}}function lc(o,e,i,s,l,f,h){const p=o.geometry.attributes.position;if(Mc.fromBufferAttribute(p,l),Ec.fromBufferAttribute(p,f),i.distanceSqToSegment(Mc,Ec,Ud,Bv)>s)return;Ud.applyMatrix4(o.matrixWorld);const _=e.ray.origin.distanceTo(Ud);if(!(_<e.near||_>e.far))return{distance:_,point:Bv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Fv=new tt,Hv=new tt;class d1 extends h1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,f=i.count;l<f;l+=2)Fv.fromBufferAttribute(i,l),Hv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Fv.distanceTo(Hv);e.setAttribute("lineDistance",new mn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p1 extends Xn{constructor(e,i,s,l,f,h,p,v,_){super(e,i,s,l,f,h,p,v,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wx extends Xn{constructor(e,i,s=Wr,l,f,h,p=fi,v=fi,_,x=hl,d=1){if(x!==hl&&x!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:d};super(S,l,f,h,p,v,x,s,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kp extends Ti{constructor(e=1,i=1,s=1,l=32,f=1,h=!1,p=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:p,thetaLength:v};const _=this;l=Math.floor(l),f=Math.floor(f);const x=[],d=[],S=[],M=[];let b=0;const A=[],y=s/2;let m=0;z(),h===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(S,3)),this.setAttribute("uv",new mn(M,2));function z(){const U=new tt,H=new tt;let B=0;const L=(i-e)/s;for(let V=0;V<=f;V++){const R=[],D=V/f,G=D*(i-e)+e;for(let et=0;et<=l;et++){const j=et/l,at=j*v+p,ht=Math.sin(at),q=Math.cos(at);H.x=G*ht,H.y=-D*s+y,H.z=G*q,d.push(H.x,H.y,H.z),U.set(ht,L,q).normalize(),S.push(U.x,U.y,U.z),M.push(j,1-D),R.push(b++)}A.push(R)}for(let V=0;V<l;V++)for(let R=0;R<f;R++){const D=A[R][V],G=A[R+1][V],et=A[R+1][V+1],j=A[R][V+1];(e>0||R!==0)&&(x.push(D,G,j),B+=3),(i>0||R!==f-1)&&(x.push(G,et,j),B+=3)}_.addGroup(m,B,0),m+=B}function I(U){const H=b,B=new we,L=new tt;let V=0;const R=U===!0?e:i,D=U===!0?1:-1;for(let et=1;et<=l;et++)d.push(0,y*D,0),S.push(0,D,0),M.push(.5,.5),b++;const G=b;for(let et=0;et<=l;et++){const at=et/l*v+p,ht=Math.cos(at),q=Math.sin(at);L.x=R*q,L.y=y*D,L.z=R*ht,d.push(L.x,L.y,L.z),S.push(0,D,0),B.x=ht*.5+.5,B.y=q*.5*D+.5,M.push(B.x,B.y),b++}for(let et=0;et<l;et++){const j=H+et,at=G+et;U===!0?x.push(at,at+1,j):x.push(at+1,at,j),V+=3}_.addGroup(m,V,U===!0?1:2),m+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xl extends Ti{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,p=Math.floor(s),v=Math.floor(l),_=p+1,x=v+1,d=e/p,S=i/v,M=[],b=[],A=[],y=[];for(let m=0;m<x;m++){const z=m*S-h;for(let I=0;I<_;I++){const U=I*d-f;b.push(U,-z,0),A.push(0,0,1),y.push(I/p),y.push(1-m/v)}}for(let m=0;m<v;m++)for(let z=0;z<p;z++){const I=z+_*m,U=z+_*(m+1),H=z+1+_*(m+1),B=z+1+_*m;M.push(I,U,B),M.push(U,H,B)}this.setIndex(M),this.setAttribute("position",new mn(b,3)),this.setAttribute("normal",new mn(A,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xp extends Ti{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const v=Math.min(h+p,Math.PI);let _=0;const x=[],d=new tt,S=new tt,M=[],b=[],A=[],y=[];for(let m=0;m<=s;m++){const z=[],I=m/s;let U=0;m===0&&h===0?U=.5/i:m===s&&v===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const B=H/i;d.x=-e*Math.cos(l+B*f)*Math.sin(h+I*p),d.y=e*Math.cos(h+I*p),d.z=e*Math.sin(l+B*f)*Math.sin(h+I*p),b.push(d.x,d.y,d.z),S.copy(d).normalize(),A.push(S.x,S.y,S.z),y.push(B+U,1-I),z.push(_++)}x.push(z)}for(let m=0;m<s;m++)for(let z=0;z<i;z++){const I=x[m][z+1],U=x[m][z],H=x[m+1][z],B=x[m+1][z+1];(m!==0||h>0)&&M.push(I,U,B),(m!==s-1||v<Math.PI)&&M.push(U,H,B)}this.setIndex(M),this.setAttribute("position",new mn(b,3)),this.setAttribute("normal",new mn(A,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qp extends Ti{constructor(e=1,i=.4,s=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:f},s=Math.floor(s),l=Math.floor(l);const h=[],p=[],v=[],_=[],x=new tt,d=new tt,S=new tt;for(let M=0;M<=s;M++)for(let b=0;b<=l;b++){const A=b/l*f,y=M/s*Math.PI*2;d.x=(e+i*Math.cos(y))*Math.cos(A),d.y=(e+i*Math.cos(y))*Math.sin(A),d.z=i*Math.sin(y),p.push(d.x,d.y,d.z),x.x=e*Math.cos(A),x.y=e*Math.sin(A),S.subVectors(d,x).normalize(),v.push(S.x,S.y,S.z),_.push(b/l),_.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=l;b++){const A=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,m=(l+1)*(M-1)+b,z=(l+1)*M+b;h.push(A,y,z),h.push(y,m,z)}this.setIndex(h),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class m1 extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zx,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g1 extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _1 extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yp extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class v1 extends Yp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Nd=new en,Gv=new tt,Vv=new tt;class Zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vp,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kv=new en,ol=new tt,Ld=new tt;class x1 extends Zx{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,f=e.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),ol.setFromMatrixPosition(e.matrixWorld),s.position.copy(ol),Ld.copy(s.position),Ld.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Ld),s.updateMatrixWorld(),l.makeTranslation(-ol.x,-ol.y,-ol.z),kv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kv,s.coordinateSystem,s.reversedDepth)}}class S1 extends Yp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new x1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wp extends Xx{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,p=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,p-=x*this.view.offsetY,v=p-x*this.view.height}this.projectionMatrix.makeOrthographic(f,h,p,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class y1 extends Zx{constructor(){super(new Wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xv extends Yp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class M1 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qv=new en;class E1{constructor(e,i,s=0,l=1/0){this.ray=new Hp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return qv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qv),this}intersectObject(e,i=!0,s=[]){return Cp(e,this,s,i),s.sort(Yv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,f=e.length;l<f;l++)Cp(e[l],this,s,i);return s.sort(Yv),s}}function Yv(o,e){return o.distance-e.distance}function Cp(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const f=o.children;for(let h=0,p=f.length;h<p;h++)Cp(f[h],e,i,!0)}}class T1 extends d1{constructor(e=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const f=i/2,h=e/i,p=e/2,v=[],_=[];for(let S=0,M=0,b=-p;S<=i;S++,b+=h){v.push(-p,0,b,p,0,b),v.push(b,0,-p,b,0,p);const A=S===f?s:l;A.toArray(_,M),M+=3,A.toArray(_,M),M+=3,A.toArray(_,M),M+=3,A.toArray(_,M),M+=3}const x=new Ti;x.setAttribute("position",new mn(v,3)),x.setAttribute("color",new mn(_,3));const d=new Yx({vertexColors:!0,toneMapped:!1});super(x,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wv(o,e,i,s){const l=b1(s);switch(i){case Nx:return o*e;case Ox:return o*e/l.components*l.byteLength;case zp:return o*e/l.components*l.byteLength;case Px:return o*e*2/l.components*l.byteLength;case Ip:return o*e*2/l.components*l.byteLength;case Lx:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case Bp:return o*e*4/l.components*l.byteLength;case dc:case pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case tp:case np:return Math.max(o,16)*Math.max(e,8)/4;case $d:case ep:return Math.max(o,8)*Math.max(e,8)/2;case ip:case ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sp:case yp:case Mp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ep:case Tp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bp:case Ap:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function b1(o){switch(o){case $i:case Cx:return{byteLength:1,components:1};case cl:case wx:case ml:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case Wr:case Lp:case Ta:return{byteLength:4,components:1};case Dx:case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kx(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function A1(o){const e=new WeakMap;function i(p,v){const _=p.array,x=p.usage,d=_.byteLength,S=o.createBuffer();o.bindBuffer(v,S),o.bufferData(v,_,x),p.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)M=o.HALF_FLOAT;else if(_ instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:S,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:d}}function s(p,v,_){const x=v.array,d=v.updateRanges;if(o.bindBuffer(_,p),d.length===0)o.bufferSubData(_,0,x);else{d.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<d.length;M++){const b=d[S],A=d[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,d[S]=A)}d.length=S+1;for(let M=0,b=d.length;M<b;M++){const A=d[M];o.bufferSubData(_,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=e.get(p);v&&(o.deleteBuffer(v.buffer),e.delete(p))}function h(p,v){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const _=e.get(p);if(_===void 0)e.set(p,i(p,v));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,p,v),_.version=p.version}}return{get:l,remove:f,update:h}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
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
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",aT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
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
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vT=`uniform bool receiveShadow;
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
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
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
#endif`,bT=`struct PhysicalMaterial {
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
}`,AT=`
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
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
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zT=`#if defined( USE_POINTS_UV )
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
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
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
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
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
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ob=`#define DISTANCE
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
}`,Pb=`#define DISTANCE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,Wb=`#define NORMAL
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
}`,jb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,$b=`#define TOON
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
}`,tA=`uniform float size;
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
}`,eA=`uniform vec3 diffuse;
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
}`,nA=`#include <common>
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
}`,iA=`uniform vec3 color;
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
}`,aA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,rA=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:R1,alphahash_pars_fragment:C1,alphamap_fragment:w1,alphamap_pars_fragment:D1,alphatest_fragment:U1,alphatest_pars_fragment:N1,aomap_fragment:L1,aomap_pars_fragment:O1,batching_pars_vertex:P1,batching_vertex:z1,begin_vertex:I1,beginnormal_vertex:B1,bsdfs:F1,iridescence_fragment:H1,bumpmap_pars_fragment:G1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:q1,color_fragment:Y1,color_pars_fragment:W1,color_pars_vertex:j1,color_vertex:Z1,common:K1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:$1,displacementmap_vertex:tT,emissivemap_fragment:eT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:aT,envmap_fragment:rT,envmap_common_pars_fragment:sT,envmap_pars_fragment:oT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:uT,fog_vertex:cT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:_T,lights_pars_begin:vT,lights_toon_fragment:ST,lights_toon_pars_fragment:yT,lights_phong_fragment:MT,lights_phong_pars_fragment:ET,lights_physical_fragment:TT,lights_physical_pars_fragment:bT,lights_fragment_begin:AT,lights_fragment_maps:RT,lights_fragment_end:CT,logdepthbuf_fragment:wT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:UT,logdepthbuf_vertex:NT,map_fragment:LT,map_pars_fragment:OT,map_particle_fragment:PT,map_particle_pars_fragment:zT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:BT,morphinstance_vertex:FT,morphcolor_vertex:HT,morphnormal_vertex:GT,morphtarget_pars_vertex:VT,morphtarget_vertex:kT,normal_fragment_begin:XT,normal_fragment_maps:qT,normal_pars_fragment:YT,normal_pars_vertex:WT,normal_vertex:jT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:$T,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:ub,shadowmap_vertex:cb,shadowmask_pars_fragment:fb,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:Sb,transmission_pars_fragment:yb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:Tb,worldpos_vertex:bb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:wb,cube_vert:Db,cube_frag:Ub,depth_vert:Nb,depth_frag:Lb,distanceRGBA_vert:Ob,distanceRGBA_frag:Pb,equirect_vert:zb,equirect_frag:Ib,linedashed_vert:Bb,linedashed_frag:Fb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:qb,meshnormal_vert:Yb,meshnormal_frag:Wb,meshphong_vert:jb,meshphong_frag:Zb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:tA,points_frag:eA,shadow_vert:nA,shadow_frag:iA,sprite_vert:aA,sprite_frag:rA},Gt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Zi={basic:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([Gt.points,Gt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([Gt.common,Gt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([Gt.sprite,Gt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:kn([Gt.common,Gt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:kn([Gt.lights,Gt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Zi.physical={uniforms:kn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const uc={r:0,b:0,g:0},Hr=new ta,sA=new en;function oA(o,e,i,s,l,f,h){const p=new Re(0);let v=f===!0?0:1,_,x,d=null,S=0,M=null;function b(I){let U=I.isScene===!0?I.background:null;return U&&U.isTexture&&(U=(I.backgroundBlurriness>0?i:e).get(U)),U}function A(I){let U=!1;const H=b(I);H===null?m(p,v):H&&H.isColor&&(m(H,1),U=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(I,U){const H=b(U);H&&(H.isCubeTexture||H.mapping===Tc)?(x===void 0&&(x=new Qn(new so(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:io(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Hr.copy(U.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(sA.makeRotationFromEuler(Hr)),x.material.toneMapped=Le.getTransfer(H.colorSpace)!==Xe,(d!==H||S!==H.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,d=H,S=H.version,M=o.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(_===void 0&&(_=new Qn(new xl(2,2),new fr({name:"BackgroundMaterial",uniforms:io(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=H,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.toneMapped=Le.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),_.material.uniforms.uvTransform.value.copy(H.matrix),(d!==H||S!==H.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,d=H,S=H.version,M=o.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null))}function m(I,U){I.getRGB(uc,kx(o)),s.buffers.color.setClear(uc.r,uc.g,uc.b,U,h)}function z(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return p},setClearColor:function(I,U=1){p.set(I),v=U,m(p,v)},getClearAlpha:function(){return v},setClearAlpha:function(I){v=I,m(p,v)},render:A,addToRenderList:y,dispose:z}}function lA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let f=l,h=!1;function p(D,G,et,j,at){let ht=!1;const q=d(j,et,G);f!==q&&(f=q,_(f.object)),ht=M(D,j,et,at),ht&&b(D,j,et,at),at!==null&&e.update(at,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(D,G,et,j),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(at).buffer))}function v(){return o.createVertexArray()}function _(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function d(D,G,et){const j=et.wireframe===!0;let at=s[D.id];at===void 0&&(at={},s[D.id]=at);let ht=at[G.id];ht===void 0&&(ht={},at[G.id]=ht);let q=ht[j];return q===void 0&&(q=S(v()),ht[j]=q),q}function S(D){const G=[],et=[],j=[];for(let at=0;at<i;at++)G[at]=0,et[at]=0,j[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:j,object:D,attributes:{},index:null}}function M(D,G,et,j){const at=f.attributes,ht=G.attributes;let q=0;const ft=et.getAttributes();for(const Q in ft)if(ft[Q].location>=0){const At=at[Q];let Yt=ht[Q];if(Yt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Yt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Yt=D.instanceColor)),At===void 0||At.attribute!==Yt||Yt&&At.data!==Yt.data)return!0;q++}return f.attributesNum!==q||f.index!==j}function b(D,G,et,j){const at={},ht=G.attributes;let q=0;const ft=et.getAttributes();for(const Q in ft)if(ft[Q].location>=0){let At=ht[Q];At===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(At=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(At=D.instanceColor));const Yt={};Yt.attribute=At,At&&At.data&&(Yt.data=At.data),at[Q]=Yt,q++}f.attributes=at,f.attributesNum=q,f.index=j}function A(){const D=f.newAttributes;for(let G=0,et=D.length;G<et;G++)D[G]=0}function y(D){m(D,0)}function m(D,G){const et=f.newAttributes,j=f.enabledAttributes,at=f.attributeDivisors;et[D]=1,j[D]===0&&(o.enableVertexAttribArray(D),j[D]=1),at[D]!==G&&(o.vertexAttribDivisor(D,G),at[D]=G)}function z(){const D=f.newAttributes,G=f.enabledAttributes;for(let et=0,j=G.length;et<j;et++)G[et]!==D[et]&&(o.disableVertexAttribArray(et),G[et]=0)}function I(D,G,et,j,at,ht,q){q===!0?o.vertexAttribIPointer(D,G,et,at,ht):o.vertexAttribPointer(D,G,et,j,at,ht)}function U(D,G,et,j){A();const at=j.attributes,ht=et.getAttributes(),q=G.defaultAttributeValues;for(const ft in ht){const Q=ht[ft];if(Q.location>=0){let Mt=at[ft];if(Mt===void 0&&(ft==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),ft==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){const At=Mt.normalized,Yt=Mt.itemSize,oe=e.get(Mt);if(oe===void 0)continue;const Se=oe.buffer,F=oe.type,mt=oe.bytesPerElement,nt=F===o.INT||F===o.UNSIGNED_INT||Mt.gpuType===Lp;if(Mt.isInterleavedBufferAttribute){const lt=Mt.data,P=lt.stride,Y=Mt.offset;if(lt.isInstancedInterleavedBuffer){for(let ct=0;ct<Q.locationSize;ct++)m(Q.location+ct,lt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ct=0;ct<Q.locationSize;ct++)y(Q.location+ct);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ct=0;ct<Q.locationSize;ct++)I(Q.location+ct,Yt/Q.locationSize,F,At,P*mt,(Y+Yt/Q.locationSize*ct)*mt,nt)}else{if(Mt.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)m(Q.location+lt,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let lt=0;lt<Q.locationSize;lt++)y(Q.location+lt);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let lt=0;lt<Q.locationSize;lt++)I(Q.location+lt,Yt/Q.locationSize,F,At,Yt*mt,Yt/Q.locationSize*lt*mt,nt)}}else if(q!==void 0){const At=q[ft];if(At!==void 0)switch(At.length){case 2:o.vertexAttrib2fv(Q.location,At);break;case 3:o.vertexAttrib3fv(Q.location,At);break;case 4:o.vertexAttrib4fv(Q.location,At);break;default:o.vertexAttrib1fv(Q.location,At)}}}}z()}function H(){V();for(const D in s){const G=s[D];for(const et in G){const j=G[et];for(const at in j)x(j[at].object),delete j[at];delete G[et]}delete s[D]}}function B(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const et in G){const j=G[et];for(const at in j)x(j[at].object),delete j[at];delete G[et]}delete s[D.id]}function L(D){for(const G in s){const et=s[G];if(et[D.id]===void 0)continue;const j=et[D.id];for(const at in j)x(j[at].object),delete j[at];delete et[D.id]}}function V(){R(),h=!0,f!==l&&(f=l,_(f.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:V,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:y,disableUnusedAttributes:z}}function uA(o,e,i){let s;function l(_){s=_}function f(_,x){o.drawArrays(s,_,x),i.update(x,s,1)}function h(_,x,d){d!==0&&(o.drawArraysInstanced(s,_,x,d),i.update(x,s,d))}function p(_,x,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,x,0,d);let M=0;for(let b=0;b<d;b++)M+=x[b];i.update(M,s,1)}function v(_,x,d,S){if(d===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<_.length;b++)h(_[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,x,0,S,0,d);let b=0;for(let A=0;A<d;A++)b+=x[A]*S[A];i.update(b,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function cA(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Pi&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(L){const V=L===ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$i&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ta&&!V)}function v(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const x=v(_);x!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const d=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:v,textureFormatReadable:h,textureTypeReadable:p,precision:_,logarithmicDepthBuffer:d,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:z,maxVaryings:I,maxFragmentUniforms:U,vertexTextures:H,maxSamples:B}}function fA(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new sr,p=new me,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(d,S){const M=d.length!==0||S||s!==0||l;return l=S,s=d.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(d,S){i=x(d,S,0)},this.setState=function(d,S,M){const b=d.clippingPlanes,A=d.clipIntersection,y=d.clipShadows,m=o.get(d);if(!l||b===null||b.length===0||f&&!y)f?x(null):_();else{const z=f?0:s,I=z*4;let U=m.clippingState||null;v.value=U,U=x(b,S,I,M);for(let H=0;H!==I;++H)U[H]=i[H];m.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function _(){v.value!==i&&(v.value=i,v.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(d,S,M,b){const A=d!==null?d.length:0;let y=null;if(A!==0){if(y=v.value,b!==!0||y===null){const m=M+A*4,z=S.matrixWorldInverse;p.getNormalMatrix(z),(y===null||y.length<m)&&(y=new Float32Array(m));for(let I=0,U=M;I!==A;++I,U+=4)h.copy(d[I]).applyMatrix4(z,p),h.normal.toArray(y,U),y[U+3]=h.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function hA(o){let e=new WeakMap;function i(h,p){return p===Zd?h.mapping=to:p===Kd&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Zd||p===Kd)if(e.has(h)){const v=e.get(h).texture;return i(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const _=new s1(v.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",l),i(_.texture,h.mapping)}else return null}}return h}function l(h){const p=h.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const Zs=4,jv=[.125,.215,.35,.446,.526,.582],Xr=20,Od=new Wp,Zv=new Re;let Pd=null,zd=0,Id=0,Bd=!1;const Vr=(1+Math.sqrt(5))/2,js=1/Vr,Kv=[new tt(-Vr,js,0),new tt(Vr,js,0),new tt(-js,0,Vr),new tt(js,0,Vr),new tt(0,Vr,-js),new tt(0,Vr,js),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],dA=new tt;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:p=dA}=f;Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,s,l,v,p),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,zd,Id),this._renderer.xr.enabled=Bd,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===to||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:ml,format:Pi,colorSpace:no,depthBuffer:!1},l=Jv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(f)),this._blurMaterial=mA(f,e,i)}return l}_compileMaterial(e){const i=new Qn(this._lodPlanes[0],e);this._renderer.compile(i,Od)}_sceneToCubeUV(e,i,s,l,f){const v=new Ei(90,1,i,s),_=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],d=this._renderer,S=d.autoClear,M=d.toneMapping;d.getClearColor(Zv),d.toneMapping=ur,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(l),d.clearDepth(),d.setRenderTarget(null));const A=new ul({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),y=new Qn(new so,A);let m=!1;const z=e.background;z?z.isColor&&(A.color.copy(z),e.background=null,m=!0):(A.color.copy(Zv),m=!0);for(let I=0;I<6;I++){const U=I%3;U===0?(v.up.set(0,_[I],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x+x[I],f.y,f.z)):U===1?(v.up.set(0,0,_[I]),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y+x[I],f.z)):(v.up.set(0,_[I],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y,f.z+x[I]));const H=this._cubeSize;cc(l,U*H,I>2?H:0,H,H),d.setRenderTarget(l),m&&d.render(y,v),d.render(e,v)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=M,d.autoClear=S,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===to||e.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new Qn(this._lodPlanes[0],f),p=f.uniforms;p.envMap.value=e;const v=this._cubeSize;cc(i,0,0,3*v,2*v),s.setRenderTarget(i),s.render(h,Od)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),p=Kv[(l-f-1)%Kv.length];this._blur(e,f-1,f,h,p)}i.autoClear=s}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,p){const v=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,d=new Qn(this._lodPlanes[l],_),S=_.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),A=f/b,y=isFinite(f)?1+Math.floor(x*A):Xr;y>Xr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const m=[];let z=0;for(let L=0;L<Xr;++L){const V=L/A,R=Math.exp(-V*V/2);m.push(R),L===0?z+=R:L<y&&(z+=2*R)}for(let L=0;L<m.length;L++)m[L]=m[L]/z;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=m,S.latitudinal.value=h==="latitudinal",p&&(S.poleAxis.value=p);const{_lodMax:I}=this;S.dTheta.value=b,S.mipInt.value=I-s;const U=this._sizeLods[l],H=3*U*(l>I-Zs?l-I+Zs:0),B=4*(this._cubeSize-U);cc(i,H,B,3*U,2*U),v.setRenderTarget(i),v.render(d,Od)}}function pA(o){const e=[],i=[],s=[];let l=o;const f=o-Zs+1+jv.length;for(let h=0;h<f;h++){const p=Math.pow(2,l);i.push(p);let v=1/p;h>o-Zs?v=jv[h-o+Zs-1]:h===0&&(v=0),s.push(v);const _=1/(p-2),x=-_,d=1+_,S=[x,x,d,x,d,d,x,x,d,d,x,d],M=6,b=6,A=3,y=2,m=1,z=new Float32Array(A*b*M),I=new Float32Array(y*b*M),U=new Float32Array(m*b*M);for(let B=0;B<M;B++){const L=B%3*2/3-1,V=B>2?0:-1,R=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];z.set(R,A*b*B),I.set(S,y*b*B);const D=[B,B,B,B,B,B];U.set(D,m*b*B)}const H=new Ti;H.setAttribute("position",new Ji(z,A)),H.setAttribute("uv",new Ji(I,y)),H.setAttribute("faceIndex",new Ji(U,m)),e.push(H),l>Zs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Jv(o,e,i){const s=new jr(o,e,i);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function cc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function mA(o,e,i){const s=new Float32Array(Xr),l=new tt(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jp(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function $v(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jp(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function tx(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function jp(){return`

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
	`}function gA(o){let e=new WeakMap,i=null;function s(p){if(p&&p.isTexture){const v=p.mapping,_=v===Zd||v===Kd,x=v===to||v===eo;if(_||x){let d=e.get(p);const S=d!==void 0?d.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return i===null&&(i=new Qv(o)),d=_?i.fromEquirectangular(p,d):i.fromCubemap(p,d),d.texture.pmremVersion=p.pmremVersion,e.set(p,d),d.texture;if(d!==void 0)return d.texture;{const M=p.image;return _&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Qv(o)),d=_?i.fromEquirectangular(p):i.fromCubemap(p),d.texture.pmremVersion=p.pmremVersion,e.set(p,d),p.addEventListener("dispose",f),d.texture):null}}}return p}function l(p){let v=0;const _=6;for(let x=0;x<_;x++)p[x]!==void 0&&v++;return v===_}function f(p){const v=p.target;v.removeEventListener("dispose",f);const _=e.get(v);_!==void 0&&(e.delete(v),_.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _A(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&pl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vA(o,e,i,s){const l={},f=new WeakMap;function h(d){const S=d.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function p(d,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function v(d){const S=d.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function _(d){const S=[],M=d.index,b=d.attributes.position;let A=0;if(M!==null){const z=M.array;A=M.version;for(let I=0,U=z.length;I<U;I+=3){const H=z[I+0],B=z[I+1],L=z[I+2];S.push(H,B,B,L,L,H)}}else if(b!==void 0){const z=b.array;A=b.version;for(let I=0,U=z.length/3-1;I<U;I+=3){const H=I+0,B=I+1,L=I+2;S.push(H,B,B,L,L,H)}}else return;const y=new(Bx(S)?Vx:Gx)(S,1);y.version=A;const m=f.get(d);m&&e.remove(m),f.set(d,y)}function x(d){const S=f.get(d);if(S){const M=d.index;M!==null&&S.version<M.version&&_(d)}else _(d);return f.get(d)}return{get:p,update:v,getWireframeAttribute:x}}function xA(o,e,i){let s;function l(S){s=S}let f,h;function p(S){f=S.type,h=S.bytesPerElement}function v(S,M){o.drawElements(s,M,f,S*h),i.update(M,s,1)}function _(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*h,b),i.update(M,s,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let m=0;m<b;m++)y+=M[m];i.update(y,s,1)}function d(S,M,b,A){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<S.length;m++)_(S[m]/h,M[m],A[m]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,A,0,b);let m=0;for(let z=0;z<b;z++)m+=M[z]*A[z];i.update(m,s,1)}}this.setMode=l,this.setIndex=p,this.render=v,this.renderInstances=_,this.renderMultiDraw=x,this.renderMultiDrawInstances=d}function SA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(f/3);break;case o.LINES:i.lines+=p*(f/2);break;case o.LINE_STRIP:i.lines+=p*(f-1);break;case o.LINE_LOOP:i.lines+=p*f;break;case o.POINTS:i.points+=p*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function yA(o,e,i){const s=new WeakMap,l=new qe;function f(h,p,v){const _=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,d=x!==void 0?x.length:0;let S=s.get(p);if(S===void 0||S.count!==d){let D=function(){V.dispose(),s.delete(p),p.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,m=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),y===!0&&(U=3);let H=p.attributes.position.count*U,B=1;H>e.maxTextureSize&&(B=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const L=new Float32Array(H*B*4*d),V=new Fx(L,H,B,d);V.type=Ta,V.needsUpdate=!0;const R=U*4;for(let G=0;G<d;G++){const et=m[G],j=z[G],at=I[G],ht=H*B*4*G;for(let q=0;q<et.count;q++){const ft=q*R;b===!0&&(l.fromBufferAttribute(et,q),L[ht+ft+0]=l.x,L[ht+ft+1]=l.y,L[ht+ft+2]=l.z,L[ht+ft+3]=0),A===!0&&(l.fromBufferAttribute(j,q),L[ht+ft+4]=l.x,L[ht+ft+5]=l.y,L[ht+ft+6]=l.z,L[ht+ft+7]=0),y===!0&&(l.fromBufferAttribute(at,q),L[ht+ft+8]=l.x,L[ht+ft+9]=l.y,L[ht+ft+10]=l.z,L[ht+ft+11]=at.itemSize===4?l.w:1)}}S={count:d,texture:V,size:new we(H,B)},s.set(p,S),p.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<_.length;y++)b+=_[y];const A=p.morphTargetsRelative?1:1-b;v.getUniforms().setValue(o,"morphTargetBaseInfluence",A),v.getUniforms().setValue(o,"morphTargetInfluences",_)}v.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function MA(o,e,i,s){let l=new WeakMap;function f(v){const _=s.render.frame,x=v.geometry,d=e.get(v,x);if(l.get(d)!==_&&(e.update(d),l.set(d,_)),v.isInstancedMesh&&(v.hasEventListener("dispose",p)===!1&&v.addEventListener("dispose",p),l.get(v)!==_&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,_))),v.isSkinnedMesh){const S=v.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return d}function h(){l=new WeakMap}function p(v){const _=v.target;_.removeEventListener("dispose",p),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const Qx=new Xn,ex=new Wx(1,1),Jx=new Fx,$x=new kE,tS=new qx,nx=[],ix=[],ax=new Float32Array(16),rx=new Float32Array(9),sx=new Float32Array(4);function oo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=nx[l];if(f===void 0&&(f=new Float32Array(l),nx[l]=f),e!==0){s.toArray(f,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(f,p)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ac(o,e){let i=ix[e];i===void 0&&(i=new Int32Array(e),ix[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function EA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function TA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function bA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function AA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function RA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;sx.set(s),o.uniformMatrix2fv(this.addr,!1,sx),Sn(i,s)}}function CA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;rx.set(s),o.uniformMatrix3fv(this.addr,!1,rx),Sn(i,s)}}function wA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;ax.set(s),o.uniformMatrix4fv(this.addr,!1,ax),Sn(i,s)}}function DA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function LA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function OA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function PA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function IA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function BA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(ex.compareFunction=Ix,f=ex):f=Qx,i.setTexture2D(e||f,l)}function FA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||$x,l)}function HA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||tS,l)}function GA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Jx,l)}function VA(o){switch(o){case 5126:return EA;case 35664:return TA;case 35665:return bA;case 35666:return AA;case 35674:return RA;case 35675:return CA;case 35676:return wA;case 5124:case 35670:return DA;case 35667:case 35671:return UA;case 35668:case 35672:return NA;case 35669:case 35673:return LA;case 5125:return OA;case 36294:return PA;case 36295:return zA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}function kA(o,e){o.uniform1fv(this.addr,e)}function XA(o,e){const i=oo(e,this.size,2);o.uniform2fv(this.addr,i)}function qA(o,e){const i=oo(e,this.size,3);o.uniform3fv(this.addr,i)}function YA(o,e){const i=oo(e,this.size,4);o.uniform4fv(this.addr,i)}function WA(o,e){const i=oo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jA(o,e){const i=oo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZA(o,e){const i=oo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KA(o,e){o.uniform1iv(this.addr,e)}function QA(o,e){o.uniform2iv(this.addr,e)}function JA(o,e){o.uniform3iv(this.addr,e)}function $A(o,e){o.uniform4iv(this.addr,e)}function tR(o,e){o.uniform1uiv(this.addr,e)}function eR(o,e){o.uniform2uiv(this.addr,e)}function nR(o,e){o.uniform3uiv(this.addr,e)}function iR(o,e){o.uniform4uiv(this.addr,e)}function aR(o,e,i){const s=this.cache,l=e.length,f=Ac(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Qx,f[h])}function rR(o,e,i){const s=this.cache,l=e.length,f=Ac(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||$x,f[h])}function sR(o,e,i){const s=this.cache,l=e.length,f=Ac(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||tS,f[h])}function oR(o,e,i){const s=this.cache,l=e.length,f=Ac(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Jx,f[h])}function lR(o){switch(o){case 5126:return kA;case 35664:return XA;case 35665:return qA;case 35666:return YA;case 35674:return WA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}class uR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VA(i.type)}}class cR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lR(i.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const p=l[f];p.setValue(e,i[p.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function ox(o,e){o.seq.push(e),o.map[e.id]=e}function hR(o,e,i){const s=o.name,l=s.length;for(Fd.lastIndex=0;;){const f=Fd.exec(s),h=Fd.lastIndex;let p=f[1];const v=f[2]==="]",_=f[3];if(v&&(p=p|0),_===void 0||_==="["&&h+2===l){ox(i,_===void 0?new uR(p,o,e):new cR(p,o,e));break}else{let d=i.map[p];d===void 0&&(d=new fR(p),ox(i,d)),i=d}}}class _c{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);hR(f,h,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const p=i[f],v=s[p.id];v.needsUpdate!==!1&&p.setValue(e,v.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function lx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const dR=37297;let pR=0;function mR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const ux=new me;function gR(o){Le._getMatrix(ux,Le.workingColorSpace,o);const e=`mat3( ${ux.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case xc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function cx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+mR(o.getShaderSource(e),p)}else return f}function _R(o,e){const i=gR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vR(o,e){let i;switch(e){case vE:i="Linear";break;case xE:i="Reinhard";break;case SE:i="Cineon";break;case Ax:i="ACESFilmic";break;case ME:i="AgX";break;case EE:i="Neutral";break;case yE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fc=new tt;function xR(){Le.getLuminanceCoefficients(fc);const o=fc.x.toFixed(4),e=fc.y.toFixed(4),i=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function yR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function MR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let p=1;f.type===o.FLOAT_MAT2&&(p=2),f.type===o.FLOAT_MAT3&&(p=3),f.type===o.FLOAT_MAT4&&(p=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function ll(o){return o!==""}function fx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(o){return o.replace(ER,bR)}const TR=new Map;function bR(o,e){let i=ge[e];if(i===void 0){const s=TR.get(e);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return wp(i)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dx(o){return o.replace(AR,RR)}function RR(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function px(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function wR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function UR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bx:e="ENVMAP_BLENDING_MULTIPLY";break;case gE:e="ENVMAP_BLENDING_MIX";break;case _E:e="ENVMAP_BLENDING_ADD";break}return e}function NR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LR(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,p=i.fragmentShader;const v=CR(i),_=wR(i),x=DR(i),d=UR(i),S=NR(i),M=SR(i),b=yR(f),A=l.createProgram();let y,m,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),m.length>0&&(m+=`
`)):(y=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),m=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",i.envMap?"#define "+d:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ur?"#define TONE_MAPPING":"",i.toneMapping!==ur?ge.tonemapping_pars_fragment:"",i.toneMapping!==ur?vR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,_R("linearToOutputTexel",i.outputColorSpace),xR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),h=wp(h),h=fx(h,i),h=hx(h,i),p=wp(p),p=fx(p,i),p=hx(p,i),h=dx(h),p=dx(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=z+y+h,U=z+m+p,H=lx(l,l.VERTEX_SHADER,I),B=lx(l,l.FRAGMENT_SHADER,U);l.attachShader(A,H),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(G){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(A)||"",j=l.getShaderInfoLog(H)||"",at=l.getShaderInfoLog(B)||"",ht=et.trim(),q=j.trim(),ft=at.trim();let Q=!0,Mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,B);else{const At=cx(l,H,"vertex"),Yt=cx(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+At+`
`+Yt)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(q===""||ft==="")&&(Mt=!1);Mt&&(G.diagnostics={runnable:Q,programLog:ht,vertexShader:{log:q,prefix:y},fragmentShader:{log:ft,prefix:m}})}l.deleteShader(H),l.deleteShader(B),V=new _c(l,A),R=MR(l,A)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(A,dR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=B,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new zR(e),i.set(e,s)),s}}class zR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function IR(o,e,i,s,l,f,h){const p=new Gp,v=new PR,_=new Set,x=[],d=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return _.add(R),R===0?"uv":`uv${R}`}function y(R,D,G,et,j){const at=et.fog,ht=j.geometry,q=R.isMeshStandardMaterial?et.environment:null,ft=(R.isMeshStandardMaterial?i:e).get(R.envMap||q),Q=ft&&ft.mapping===Tc?ft.image.height:null,Mt=b[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const At=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Yt=At!==void 0?At.length:0;let oe=0;ht.morphAttributes.position!==void 0&&(oe=1),ht.morphAttributes.normal!==void 0&&(oe=2),ht.morphAttributes.color!==void 0&&(oe=3);let Se,F,mt,nt;if(Mt){const Ee=Zi[Mt];Se=Ee.vertexShader,F=Ee.fragmentShader}else Se=R.vertexShader,F=R.fragmentShader,v.update(R),mt=v.getVertexShaderID(R),nt=v.getFragmentShaderID(R);const lt=o.getRenderTarget(),P=o.state.buffers.depth.getReversed(),Y=j.isInstancedMesh===!0,ct=j.isBatchedMesh===!0,rt=!!R.map,St=!!R.matcap,w=!!ft,Lt=!!R.aoMap,wt=!!R.lightMap,Vt=!!R.bumpMap,bt=!!R.normalMap,Xt=!!R.displacementMap,zt=!!R.emissiveMap,le=!!R.metalnessMap,Ye=!!R.roughnessMap,Ze=R.anisotropy>0,N=R.clearcoat>0,T=R.dispersion>0,ot=R.iridescence>0,vt=R.sheen>0,Tt=R.transmission>0,gt=Ze&&!!R.anisotropyMap,Zt=N&&!!R.clearcoatMap,Nt=N&&!!R.clearcoatNormalMap,$t=N&&!!R.clearcoatRoughnessMap,ee=ot&&!!R.iridescenceMap,Dt=ot&&!!R.iridescenceThicknessMap,Bt=vt&&!!R.sheenColorMap,se=vt&&!!R.sheenRoughnessMap,te=!!R.specularMap,Ft=!!R.specularColorMap,he=!!R.specularIntensityMap,X=Tt&&!!R.transmissionMap,Ut=Tt&&!!R.thicknessMap,Pt=!!R.gradientMap,jt=!!R.alphaMap,Rt=R.alphaTest>0,yt=!!R.alphaHash,Jt=!!R.extensions;let fe=ur;R.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Ve={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:Se,fragmentShader:F,defines:R.defines,customVertexShaderID:mt,customFragmentShaderID:nt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:ct,batchingColor:ct&&j._colorsTexture!==null,instancing:Y,instancingColor:Y&&j.instanceColor!==null,instancingMorph:Y&&j.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:no,alphaToCoverage:!!R.alphaToCoverage,map:rt,matcap:St,envMap:w,envMapMode:w&&ft.mapping,envMapCubeUVHeight:Q,aoMap:Lt,lightMap:wt,bumpMap:Vt,normalMap:bt,displacementMap:S&&Xt,emissiveMap:zt,normalMapObjectSpace:bt&&R.normalMapType===RE,normalMapTangentSpace:bt&&R.normalMapType===zx,metalnessMap:le,roughnessMap:Ye,anisotropy:Ze,anisotropyMap:gt,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:$t,dispersion:T,iridescence:ot,iridescenceMap:ee,iridescenceThicknessMap:Dt,sheen:vt,sheenColorMap:Bt,sheenRoughnessMap:se,specularMap:te,specularColorMap:Ft,specularIntensityMap:he,transmission:Tt,transmissionMap:X,thicknessMap:Ut,gradientMap:Pt,opaque:R.transparent===!1&&R.blending===Ks&&R.alphaToCoverage===!1,alphaMap:jt,alphaTest:Rt,alphaHash:yt,combine:R.combine,mapUv:rt&&A(R.map.channel),aoMapUv:Lt&&A(R.aoMap.channel),lightMapUv:wt&&A(R.lightMap.channel),bumpMapUv:Vt&&A(R.bumpMap.channel),normalMapUv:bt&&A(R.normalMap.channel),displacementMapUv:Xt&&A(R.displacementMap.channel),emissiveMapUv:zt&&A(R.emissiveMap.channel),metalnessMapUv:le&&A(R.metalnessMap.channel),roughnessMapUv:Ye&&A(R.roughnessMap.channel),anisotropyMapUv:gt&&A(R.anisotropyMap.channel),clearcoatMapUv:Zt&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:se&&A(R.sheenRoughnessMap.channel),specularMapUv:te&&A(R.specularMap.channel),specularColorMapUv:Ft&&A(R.specularColorMap.channel),specularIntensityMapUv:he&&A(R.specularIntensityMap.channel),transmissionMapUv:X&&A(R.transmissionMap.channel),thicknessMapUv:Ut&&A(R.thicknessMap.channel),alphaMapUv:jt&&A(R.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(bt||Ze),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ht.attributes.uv&&(rt||jt),fog:!!at,useFog:R.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:P,skinning:j.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:oe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:rt&&R.map.isVideoTexture===!0&&Le.getTransfer(R.map.colorSpace)===Xe,decodeVideoTextureEmissive:zt&&R.emissiveMap.isVideoTexture===!0&&Le.getTransfer(R.emissiveMap.colorSpace)===Xe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ea,flipSided:R.side===Jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Jt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&R.extensions.multiDraw===!0||ct)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ve.vertexUv1s=_.has(1),Ve.vertexUv2s=_.has(2),Ve.vertexUv3s=_.has(3),_.clear(),Ve}function m(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)D.push(G),D.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(z(D,R),I(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function z(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function I(R,D){p.disableAll(),D.supportsVertexTextures&&p.enable(0),D.instancing&&p.enable(1),D.instancingColor&&p.enable(2),D.instancingMorph&&p.enable(3),D.matcap&&p.enable(4),D.envMap&&p.enable(5),D.normalMapObjectSpace&&p.enable(6),D.normalMapTangentSpace&&p.enable(7),D.clearcoat&&p.enable(8),D.iridescence&&p.enable(9),D.alphaTest&&p.enable(10),D.vertexColors&&p.enable(11),D.vertexAlphas&&p.enable(12),D.vertexUv1s&&p.enable(13),D.vertexUv2s&&p.enable(14),D.vertexUv3s&&p.enable(15),D.vertexTangents&&p.enable(16),D.anisotropy&&p.enable(17),D.alphaHash&&p.enable(18),D.batching&&p.enable(19),D.dispersion&&p.enable(20),D.batchingColor&&p.enable(21),D.gradientMap&&p.enable(22),R.push(p.mask),p.disableAll(),D.fog&&p.enable(0),D.useFog&&p.enable(1),D.flatShading&&p.enable(2),D.logarithmicDepthBuffer&&p.enable(3),D.reversedDepthBuffer&&p.enable(4),D.skinning&&p.enable(5),D.morphTargets&&p.enable(6),D.morphNormals&&p.enable(7),D.morphColors&&p.enable(8),D.premultipliedAlpha&&p.enable(9),D.shadowMapEnabled&&p.enable(10),D.doubleSided&&p.enable(11),D.flipSided&&p.enable(12),D.useDepthPacking&&p.enable(13),D.dithering&&p.enable(14),D.transmission&&p.enable(15),D.sheen&&p.enable(16),D.opaque&&p.enable(17),D.pointsUvs&&p.enable(18),D.decodeVideoTexture&&p.enable(19),D.decodeVideoTextureEmissive&&p.enable(20),D.alphaToCoverage&&p.enable(21),R.push(p.mask)}function U(R){const D=b[R.type];let G;if(D){const et=Zi[D];G=n1.clone(et.uniforms)}else G=R.uniforms;return G}function H(R,D){let G;for(let et=0,j=x.length;et<j;et++){const at=x[et];if(at.cacheKey===D){G=at,++G.usedTimes;break}}return G===void 0&&(G=new LR(o,D,R,f),x.push(G)),G}function B(R){if(--R.usedTimes===0){const D=x.indexOf(R);x[D]=x[x.length-1],x.pop(),R.destroy()}}function L(R){v.remove(R)}function V(){v.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:U,acquireProgram:H,releaseProgram:B,releaseShaderCache:L,programs:x,dispose:V}}function BR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,v){o.get(h)[p]=v}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function FR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function mx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gx(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(d,S,M,b,A,y){let m=o[e];return m===void 0?(m={id:d.id,object:d,geometry:S,material:M,groupOrder:b,renderOrder:d.renderOrder,z:A,group:y},o[e]=m):(m.id=d.id,m.object=d,m.geometry=S,m.material=M,m.groupOrder=b,m.renderOrder=d.renderOrder,m.z=A,m.group=y),e++,m}function p(d,S,M,b,A,y){const m=h(d,S,M,b,A,y);M.transmission>0?s.push(m):M.transparent===!0?l.push(m):i.push(m)}function v(d,S,M,b,A,y){const m=h(d,S,M,b,A,y);M.transmission>0?s.unshift(m):M.transparent===!0?l.unshift(m):i.unshift(m)}function _(d,S){i.length>1&&i.sort(d||FR),s.length>1&&s.sort(S||mx),l.length>1&&l.sort(S||mx)}function x(){for(let d=e,S=o.length;d<S;d++){const M=o[d];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:p,unshift:v,finish:x,sort:_}}function HR(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new gx,o.set(s,[h])):l>=f.length?(h=new gx,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function GR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Re};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function VR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let kR=0;function XR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qR(o){const e=new GR,i=VR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new tt);const l=new tt,f=new en,h=new en;function p(_){let x=0,d=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,b=0,A=0,y=0,m=0,z=0,I=0,U=0,H=0,B=0,L=0;_.sort(XR);for(let R=0,D=_.length;R<D;R++){const G=_[R],et=G.color,j=G.intensity,at=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=et.r*j,d+=et.g*j,S+=et.b*j;else if(G.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(G.sh.coefficients[q],j);L++}else if(G.isDirectionalLight){const q=e.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ft=G.shadow,Q=i.get(G);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=G.shadow.matrix,z++}s.directional[M]=q,M++}else if(G.isSpotLight){const q=e.get(G);q.position.setFromMatrixPosition(G.matrixWorld),q.color.copy(et).multiplyScalar(j),q.distance=at,q.coneCos=Math.cos(G.angle),q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),q.decay=G.decay,s.spot[A]=q;const ft=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,ft.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[A]=ft.matrix,G.castShadow){const Q=i.get(G);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,s.spotShadow[A]=Q,s.spotShadowMap[A]=ht,U++}A++}else if(G.isRectAreaLight){const q=e.get(G);q.color.copy(et).multiplyScalar(j),q.halfWidth.set(G.width*.5,0,0),q.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=q,y++}else if(G.isPointLight){const q=e.get(G);if(q.color.copy(G.color).multiplyScalar(G.intensity),q.distance=G.distance,q.decay=G.decay,G.castShadow){const ft=G.shadow,Q=i.get(G);Q.shadowIntensity=ft.intensity,Q.shadowBias=ft.bias,Q.shadowNormalBias=ft.normalBias,Q.shadowRadius=ft.radius,Q.shadowMapSize=ft.mapSize,Q.shadowCameraNear=ft.camera.near,Q.shadowCameraFar=ft.camera.far,s.pointShadow[b]=Q,s.pointShadowMap[b]=ht,s.pointShadowMatrix[b]=G.shadow.matrix,I++}s.point[b]=q,b++}else if(G.isHemisphereLight){const q=e.get(G);q.skyColor.copy(G.color).multiplyScalar(j),q.groundColor.copy(G.groundColor).multiplyScalar(j),s.hemi[m]=q,m++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=d,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==A||V.rectAreaLength!==y||V.hemiLength!==m||V.numDirectionalShadows!==z||V.numPointShadows!==I||V.numSpotShadows!==U||V.numSpotMaps!==H||V.numLightProbes!==L)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=b,s.hemi.length=m,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=U+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=L,V.directionalLength=M,V.pointLength=b,V.spotLength=A,V.rectAreaLength=y,V.hemiLength=m,V.numDirectionalShadows=z,V.numPointShadows=I,V.numSpotShadows=U,V.numSpotMaps=H,V.numLightProbes=L,s.version=kR++)}function v(_,x){let d=0,S=0,M=0,b=0,A=0;const y=x.matrixWorldInverse;for(let m=0,z=_.length;m<z;m++){const I=_[m];if(I.isDirectionalLight){const U=s.directional[d];U.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),d++}else if(I.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),h.identity(),f.copy(I.matrixWorld),f.premultiply(y),h.extractRotation(f),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(I.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(I.matrixWorld),U.direction.transformDirection(y),A++}}}return{setup:p,setupView:v,state:s}}function _x(o){const e=new qR(o),i=[],s=[];function l(x){_.camera=x,i.length=0,s.length=0}function f(x){i.push(x)}function h(x){s.push(x)}function p(){e.setup(i)}function v(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:h}}function YR(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let p;return h===void 0?(p=new _x(o),e.set(l,[p])):f>=h.length?(p=new _x(o),h.push(p)):p=h[f],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const WR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
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
}`;function ZR(o,e,i){let s=new Vp;const l=new we,f=new we,h=new qe,p=new g1({depthPacking:AE}),v=new _1,_={},x=i.maxTextureSize,d={[cr]:Jn,[Jn]:cr,[Ea]:Ea},S=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:WR,fragmentShader:jR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ti;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qn(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ex;let m=this.type;this.render=function(B,L,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const R=o.getRenderTarget(),D=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),et=o.state;et.setBlending(lr),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const j=m!==Ma&&this.type===Ma,at=m===Ma&&this.type!==Ma;for(let ht=0,q=B.length;ht<q;ht++){const ft=B[ht],Q=ft.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Mt=Q.getFrameExtents();if(l.multiply(Mt),f.copy(Q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(f.x=Math.floor(x/Mt.x),l.x=f.x*Mt.x,Q.mapSize.x=f.x),l.y>x&&(f.y=Math.floor(x/Mt.y),l.y=f.y*Mt.y,Q.mapSize.y=f.y)),Q.map===null||j===!0||at===!0){const Yt=this.type!==Ma?{minFilter:fi,magFilter:fi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new jr(l.x,l.y,Yt),Q.map.texture.name=ft.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const At=Q.getViewportCount();for(let Yt=0;Yt<At;Yt++){const oe=Q.getViewport(Yt);h.set(f.x*oe.x,f.y*oe.y,f.x*oe.z,f.y*oe.w),et.viewport(h),Q.updateMatrices(ft,Yt),s=Q.getFrustum(),U(L,V,Q.camera,ft,this.type)}Q.isPointLightShadow!==!0&&this.type===Ma&&z(Q,V),Q.needsUpdate=!1}m=this.type,y.needsUpdate=!1,o.setRenderTarget(R,D,G)};function z(B,L){const V=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new jr(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(L,null,V,S,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(L,null,V,M,A,null)}function I(B,L,V,R){let D=null;const G=V.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)D=G;else if(D=V.isPointLight===!0?v:p,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const et=D.uuid,j=L.uuid;let at=_[et];at===void 0&&(at={},_[et]=at);let ht=at[j];ht===void 0&&(ht=D.clone(),at[j]=ht,L.addEventListener("dispose",H)),D=ht}if(D.visible=L.visible,D.wireframe=L.wireframe,R===Ma?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:d[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const et=o.properties.get(D);et.light=V}return D}function U(B,L,V,R,D){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Ma)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,B.matrixWorld);const j=e.update(B),at=B.material;if(Array.isArray(at)){const ht=j.groups;for(let q=0,ft=ht.length;q<ft;q++){const Q=ht[q],Mt=at[Q.materialIndex];if(Mt&&Mt.visible){const At=I(B,Mt,R,D);B.onBeforeShadow(o,B,L,V,j,At,Q),o.renderBufferDirect(V,null,j,At,B,Q),B.onAfterShadow(o,B,L,V,j,At,Q)}}}else if(at.visible){const ht=I(B,at,R,D);B.onBeforeShadow(o,B,L,V,j,ht,null),o.renderBufferDirect(V,null,j,ht,B,null),B.onAfterShadow(o,B,L,V,j,ht,null)}}const et=B.children;for(let j=0,at=et.length;j<at;j++)U(et[j],L,V,R,D)}function H(B){B.target.removeEventListener("dispose",H);for(const V in _){const R=_[V],D=B.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const KR={[Vd]:kd,[Xd]:Wd,[qd]:jd,[$s]:Yd,[kd]:Vd,[Wd]:Xd,[jd]:qd,[Yd]:$s};function QR(o,e){function i(){let X=!1;const Ut=new qe;let Pt=null;const jt=new qe(0,0,0,0);return{setMask:function(Rt){Pt!==Rt&&!X&&(o.colorMask(Rt,Rt,Rt,Rt),Pt=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,yt,Jt,fe,Ve){Ve===!0&&(Rt*=fe,yt*=fe,Jt*=fe),Ut.set(Rt,yt,Jt,fe),jt.equals(Ut)===!1&&(o.clearColor(Rt,yt,Jt,fe),jt.copy(Ut))},reset:function(){X=!1,Pt=null,jt.set(-1,0,0,0)}}}function s(){let X=!1,Ut=!1,Pt=null,jt=null,Rt=null;return{setReversed:function(yt){if(Ut!==yt){const Jt=e.get("EXT_clip_control");yt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ut=yt;const fe=Rt;Rt=null,this.setClear(fe)}},getReversed:function(){return Ut},setTest:function(yt){yt?lt(o.DEPTH_TEST):P(o.DEPTH_TEST)},setMask:function(yt){Pt!==yt&&!X&&(o.depthMask(yt),Pt=yt)},setFunc:function(yt){if(Ut&&(yt=KR[yt]),jt!==yt){switch(yt){case Vd:o.depthFunc(o.NEVER);break;case kd:o.depthFunc(o.ALWAYS);break;case Xd:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case qd:o.depthFunc(o.EQUAL);break;case Yd:o.depthFunc(o.GEQUAL);break;case Wd:o.depthFunc(o.GREATER);break;case jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}jt=yt}},setLocked:function(yt){X=yt},setClear:function(yt){Rt!==yt&&(Ut&&(yt=1-yt),o.clearDepth(yt),Rt=yt)},reset:function(){X=!1,Pt=null,jt=null,Rt=null,Ut=!1}}}function l(){let X=!1,Ut=null,Pt=null,jt=null,Rt=null,yt=null,Jt=null,fe=null,Ve=null;return{setTest:function(Ee){X||(Ee?lt(o.STENCIL_TEST):P(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!X&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,nn,gn){(Pt!==Ee||jt!==nn||Rt!==gn)&&(o.stencilFunc(Ee,nn,gn),Pt=Ee,jt=nn,Rt=gn)},setOp:function(Ee,nn,gn){(yt!==Ee||Jt!==nn||fe!==gn)&&(o.stencilOp(Ee,nn,gn),yt=Ee,Jt=nn,fe=gn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ve!==Ee&&(o.clearStencil(Ee),Ve=Ee)},reset:function(){X=!1,Ut=null,Pt=null,jt=null,Rt=null,yt=null,Jt=null,fe=null,Ve=null}}}const f=new i,h=new s,p=new l,v=new WeakMap,_=new WeakMap;let x={},d={},S=new WeakMap,M=[],b=null,A=!1,y=null,m=null,z=null,I=null,U=null,H=null,B=null,L=new Re(0,0,0),V=0,R=!1,D=null,G=null,et=null,j=null,at=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ft=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=ft>=2);let Mt=null,At={};const Yt=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),Se=new qe().fromArray(Yt),F=new qe().fromArray(oe);function mt(X,Ut,Pt,jt){const Rt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(X,yt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Pt;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(Ut+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return yt}const nt={};nt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),p.setClear(0),lt(o.DEPTH_TEST),h.setFunc($s),Vt(!1),bt(dv),lt(o.CULL_FACE),Lt(lr);function lt(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function P(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Y(X,Ut){return d[X]!==Ut?(o.bindFramebuffer(X,Ut),d[X]=Ut,X===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=Ut),X===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function ct(X,Ut){let Pt=M,jt=!1;if(X){Pt=S.get(Ut),Pt===void 0&&(Pt=[],S.set(Ut,Pt));const Rt=X.textures;if(Pt.length!==Rt.length||Pt[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,Jt=Rt.length;yt<Jt;yt++)Pt[yt]=o.COLOR_ATTACHMENT0+yt;Pt.length=Rt.length,jt=!0}}else Pt[0]!==o.BACK&&(Pt[0]=o.BACK,jt=!0);jt&&o.drawBuffers(Pt)}function rt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const St={[kr]:o.FUNC_ADD,[$M]:o.FUNC_SUBTRACT,[tE]:o.FUNC_REVERSE_SUBTRACT};St[eE]=o.MIN,St[nE]=o.MAX;const w={[iE]:o.ZERO,[aE]:o.ONE,[rE]:o.SRC_COLOR,[Hd]:o.SRC_ALPHA,[fE]:o.SRC_ALPHA_SATURATE,[uE]:o.DST_COLOR,[oE]:o.DST_ALPHA,[sE]:o.ONE_MINUS_SRC_COLOR,[Gd]:o.ONE_MINUS_SRC_ALPHA,[cE]:o.ONE_MINUS_DST_COLOR,[lE]:o.ONE_MINUS_DST_ALPHA,[hE]:o.CONSTANT_COLOR,[dE]:o.ONE_MINUS_CONSTANT_COLOR,[pE]:o.CONSTANT_ALPHA,[mE]:o.ONE_MINUS_CONSTANT_ALPHA};function Lt(X,Ut,Pt,jt,Rt,yt,Jt,fe,Ve,Ee){if(X===lr){A===!0&&(P(o.BLEND),A=!1);return}if(A===!1&&(lt(o.BLEND),A=!0),X!==JM){if(X!==y||Ee!==R){if((m!==kr||U!==kr)&&(o.blendEquation(o.FUNC_ADD),m=kr,U=kr),Ee)switch(X){case Ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFunc(o.ONE,o.ONE);break;case mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,I=null,H=null,B=null,L.set(0,0,0),V=0,y=X,R=Ee}return}Rt=Rt||Ut,yt=yt||Pt,Jt=Jt||jt,(Ut!==m||Rt!==U)&&(o.blendEquationSeparate(St[Ut],St[Rt]),m=Ut,U=Rt),(Pt!==z||jt!==I||yt!==H||Jt!==B)&&(o.blendFuncSeparate(w[Pt],w[jt],w[yt],w[Jt]),z=Pt,I=jt,H=yt,B=Jt),(fe.equals(L)===!1||Ve!==V)&&(o.blendColor(fe.r,fe.g,fe.b,Ve),L.copy(fe),V=Ve),y=X,R=!1}function wt(X,Ut){X.side===Ea?P(o.CULL_FACE):lt(o.CULL_FACE);let Pt=X.side===Jn;Ut&&(Pt=!Pt),Vt(Pt),X.blending===Ks&&X.transparent===!1?Lt(lr):Lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const jt=X.stencilWrite;p.setTest(jt),jt&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):P(o.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function bt(X){X!==KM?(lt(o.CULL_FACE),X!==G&&(X===dv?o.cullFace(o.BACK):X===QM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):P(o.CULL_FACE),G=X}function Xt(X){X!==et&&(q&&o.lineWidth(X),et=X)}function zt(X,Ut,Pt){X?(lt(o.POLYGON_OFFSET_FILL),(j!==Ut||at!==Pt)&&(o.polygonOffset(Ut,Pt),j=Ut,at=Pt)):P(o.POLYGON_OFFSET_FILL)}function le(X){X?lt(o.SCISSOR_TEST):P(o.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=o.TEXTURE0+ht-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function Ze(X,Ut,Pt){Pt===void 0&&(Mt===null?Pt=o.TEXTURE0+ht-1:Pt=Mt);let jt=At[Pt];jt===void 0&&(jt={type:void 0,texture:void 0},At[Pt]=jt),(jt.type!==X||jt.texture!==Ut)&&(Mt!==Pt&&(o.activeTexture(Pt),Mt=Pt),o.bindTexture(X,Ut||nt[X]),jt.type=X,jt.texture=Ut)}function N(){const X=At[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(X){Se.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Se.copy(X))}function se(X){F.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),F.copy(X))}function te(X,Ut){let Pt=_.get(Ut);Pt===void 0&&(Pt=new WeakMap,_.set(Ut,Pt));let jt=Pt.get(X);jt===void 0&&(jt=o.getUniformBlockIndex(Ut,X.name),Pt.set(X,jt))}function Ft(X,Ut){const jt=_.get(Ut).get(X);v.get(Ut)!==jt&&(o.uniformBlockBinding(Ut,jt,X.__bindingPointIndex),v.set(Ut,jt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Mt=null,At={},d={},S=new WeakMap,M=[],b=null,A=!1,y=null,m=null,z=null,I=null,U=null,H=null,B=null,L=new Re(0,0,0),V=0,R=!1,D=null,G=null,et=null,j=null,at=null,Se.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),p.reset()}return{buffers:{color:f,depth:h,stencil:p},enable:lt,disable:P,bindFramebuffer:Y,drawBuffers:ct,useProgram:rt,setBlending:Lt,setMaterial:wt,setFlipSided:Vt,setCullFace:bt,setLineWidth:Xt,setPolygonOffset:zt,setScissorTest:le,activeTexture:Ye,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:ot,texImage2D:ee,texImage3D:Dt,updateUBOMapping:te,uniformBlockBinding:Ft,texStorage2D:Nt,texStorage3D:$t,texSubImage2D:vt,texSubImage3D:Tt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Zt,scissor:Bt,viewport:se,reset:he}}function JR(o,e,i,s,l,f,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new we,x=new WeakMap;let d;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return M?new OffscreenCanvas(N,T):yc("canvas")}function A(N,T,ot){let vt=1;const Tt=Ze(N);if((Tt.width>ot||Tt.height>ot)&&(vt=ot/Math.max(Tt.width,Tt.height)),vt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const gt=Math.floor(vt*Tt.width),Zt=Math.floor(vt*Tt.height);d===void 0&&(d=b(gt,Zt));const Nt=T?b(gt,Zt):d;return Nt.width=gt,Nt.height=Zt,Nt.getContext("2d").drawImage(N,0,0,gt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+gt+"x"+Zt+")."),Nt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),N;return N}function y(N){return N.generateMipmaps}function m(N){o.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(N,T,ot,vt,Tt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let gt=T;if(T===o.RED&&(ot===o.FLOAT&&(gt=o.R32F),ot===o.HALF_FLOAT&&(gt=o.R16F),ot===o.UNSIGNED_BYTE&&(gt=o.R8)),T===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.R8UI),ot===o.UNSIGNED_SHORT&&(gt=o.R16UI),ot===o.UNSIGNED_INT&&(gt=o.R32UI),ot===o.BYTE&&(gt=o.R8I),ot===o.SHORT&&(gt=o.R16I),ot===o.INT&&(gt=o.R32I)),T===o.RG&&(ot===o.FLOAT&&(gt=o.RG32F),ot===o.HALF_FLOAT&&(gt=o.RG16F),ot===o.UNSIGNED_BYTE&&(gt=o.RG8)),T===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RG8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RG16UI),ot===o.UNSIGNED_INT&&(gt=o.RG32UI),ot===o.BYTE&&(gt=o.RG8I),ot===o.SHORT&&(gt=o.RG16I),ot===o.INT&&(gt=o.RG32I)),T===o.RGB_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),ot===o.UNSIGNED_INT&&(gt=o.RGB32UI),ot===o.BYTE&&(gt=o.RGB8I),ot===o.SHORT&&(gt=o.RGB16I),ot===o.INT&&(gt=o.RGB32I)),T===o.RGBA_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),ot===o.UNSIGNED_INT&&(gt=o.RGBA32UI),ot===o.BYTE&&(gt=o.RGBA8I),ot===o.SHORT&&(gt=o.RGBA16I),ot===o.INT&&(gt=o.RGBA32I)),T===o.RGB&&(ot===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),ot===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),T===o.RGBA){const Zt=Tt?xc:Le.getTransfer(vt);ot===o.FLOAT&&(gt=o.RGBA32F),ot===o.HALF_FLOAT&&(gt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(gt=Zt===Xe?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function U(N,T){let ot;return N?T===null||T===Wr||T===fl?ot=o.DEPTH24_STENCIL8:T===Ta?ot=o.DEPTH32F_STENCIL8:T===cl&&(ot=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===fl?ot=o.DEPTH_COMPONENT24:T===Ta?ot=o.DEPTH_COMPONENT32F:T===cl&&(ot=o.DEPTH_COMPONENT16),ot}function H(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==fi&&N.minFilter!==Ki?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function B(N){const T=N.target;T.removeEventListener("dispose",B),V(T),T.isVideoTexture&&x.delete(T)}function L(N){const T=N.target;T.removeEventListener("dispose",L),D(T)}function V(N){const T=s.get(N);if(T.__webglInit===void 0)return;const ot=N.source,vt=S.get(ot);if(vt){const Tt=vt[T.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&R(N),Object.keys(vt).length===0&&S.delete(ot)}s.remove(N)}function R(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const ot=N.source,vt=S.get(ot);delete vt[T.__cacheKey],h.memory.textures--}function D(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let Tt=0;Tt<T.__webglFramebuffer[vt].length;Tt++)o.deleteFramebuffer(T.__webglFramebuffer[vt][Tt]);else o.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[vt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ot=N.textures;for(let vt=0,Tt=ot.length;vt<Tt;vt++){const gt=s.get(ot[vt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(ot[vt])}s.remove(N)}let G=0;function et(){G=0}function j(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function at(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ht(N,T){const ot=s.get(N);if(N.isVideoTexture&&le(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ot.__version!==N.version){const vt=N.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(ot,N,T);return}}else N.isExternalTexture&&(ot.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+T)}function q(N,T){const ot=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ot.__version!==N.version){nt(ot,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+T)}function ft(N,T){const ot=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ot.__version!==N.version){nt(ot,N,T);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+T)}function Q(N,T){const ot=s.get(N);if(N.version>0&&ot.__version!==N.version){lt(ot,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+T)}const Mt={[Qd]:o.REPEAT,[qr]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},At={[fi]:o.NEAREST,[TE]:o.NEAREST_MIPMAP_NEAREST,[ku]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Yr]:o.LINEAR_MIPMAP_LINEAR},Yt={[CE]:o.NEVER,[OE]:o.ALWAYS,[wE]:o.LESS,[Ix]:o.LEQUAL,[DE]:o.EQUAL,[LE]:o.GEQUAL,[UE]:o.GREATER,[NE]:o.NOTEQUAL};function oe(N,T){if(T.type===Ta&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ki||T.magFilter===sd||T.magFilter===ku||T.magFilter===Yr||T.minFilter===Ki||T.minFilter===sd||T.minFilter===ku||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,At[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==ku&&T.minFilter!==Yr||T.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Se(N,T){let ot=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",B));const vt=T.source;let Tt=S.get(vt);Tt===void 0&&(Tt={},S.set(vt,Tt));const gt=at(T);if(gt!==N.__cacheKey){Tt[gt]===void 0&&(Tt[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ot=!0),Tt[gt].usedTimes++;const Zt=Tt[N.__cacheKey];Zt!==void 0&&(Tt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(T)),N.__cacheKey=gt,N.__webglTexture=Tt[gt].texture}return ot}function F(N,T,ot){return Math.floor(Math.floor(N/ot)/T)}function mt(N,T,ot,vt){const gt=N.updateRanges;if(gt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,ot,vt,T.data);else{gt.sort((Dt,Bt)=>Dt.start-Bt.start);let Zt=0;for(let Dt=1;Dt<gt.length;Dt++){const Bt=gt[Zt],se=gt[Dt],te=Bt.start+Bt.count,Ft=F(se.start,T.width,4),he=F(Bt.start,T.width,4);se.start<=te+1&&Ft===he&&F(se.start+se.count-1,T.width,4)===Ft?Bt.count=Math.max(Bt.count,se.start+se.count-Bt.start):(++Zt,gt[Zt]=se)}gt.length=Zt+1;const Nt=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Dt=0,Bt=gt.length;Dt<Bt;Dt++){const se=gt[Dt],te=Math.floor(se.start/4),Ft=Math.ceil(se.count/4),he=te%T.width,X=Math.floor(te/T.width),Ut=Ft,Pt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,he),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,he,X,Ut,Pt,ot,vt,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Nt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function nt(N,T,ot){let vt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=o.TEXTURE_3D);const Tt=Se(N,T),gt=T.source;i.bindTexture(vt,N.__webglTexture,o.TEXTURE0+ot);const Zt=s.get(gt);if(gt.version!==Zt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+ot);const Nt=Le.getPrimaries(Le.workingColorSpace),$t=T.colorSpace===or?null:Le.getPrimaries(T.colorSpace),ee=T.colorSpace===or||Nt===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Dt=A(T.image,!1,l.maxTextureSize);Dt=Ye(T,Dt);const Bt=f.convert(T.format,T.colorSpace),se=f.convert(T.type);let te=I(T.internalFormat,Bt,se,T.colorSpace,T.isVideoTexture);oe(vt,T);let Ft;const he=T.mipmaps,X=T.isVideoTexture!==!0,Ut=Zt.__version===void 0||Tt===!0,Pt=gt.dataReady,jt=H(T,Dt);if(T.isDepthTexture)te=U(T.format===dl,T.type),Ut&&(X?i.texStorage2D(o.TEXTURE_2D,1,te,Dt.width,Dt.height):i.texImage2D(o.TEXTURE_2D,0,te,Dt.width,Dt.height,0,Bt,se,null));else if(T.isDataTexture)if(he.length>0){X&&Ut&&i.texStorage2D(o.TEXTURE_2D,jt,te,he[0].width,he[0].height);for(let Rt=0,yt=he.length;Rt<yt;Rt++)Ft=he[Rt],X?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ft.width,Ft.height,Bt,se,Ft.data):i.texImage2D(o.TEXTURE_2D,Rt,te,Ft.width,Ft.height,0,Bt,se,Ft.data);T.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(o.TEXTURE_2D,jt,te,Dt.width,Dt.height),Pt&&mt(T,Dt,Bt,se)):i.texImage2D(o.TEXTURE_2D,0,te,Dt.width,Dt.height,0,Bt,se,Dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,te,he[0].width,he[0].height,Dt.depth);for(let Rt=0,yt=he.length;Rt<yt;Rt++)if(Ft=he[Rt],T.format!==Pi)if(Bt!==null)if(X){if(Pt)if(T.layerUpdates.size>0){const Jt=Wv(Ft.width,Ft.height,T.format,T.type);for(const fe of T.layerUpdates){const Ve=Ft.data.subarray(fe*Jt/Ft.data.BYTES_PER_ELEMENT,(fe+1)*Jt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,fe,Ft.width,Ft.height,1,Bt,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ft.width,Ft.height,Dt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Rt,te,Ft.width,Ft.height,Dt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Pt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ft.width,Ft.height,Dt.depth,Bt,se,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Rt,te,Ft.width,Ft.height,Dt.depth,0,Bt,se,Ft.data)}else{X&&Ut&&i.texStorage2D(o.TEXTURE_2D,jt,te,he[0].width,he[0].height);for(let Rt=0,yt=he.length;Rt<yt;Rt++)Ft=he[Rt],T.format!==Pi?Bt!==null?X?Pt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Rt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,Rt,te,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ft.width,Ft.height,Bt,se,Ft.data):i.texImage2D(o.TEXTURE_2D,Rt,te,Ft.width,Ft.height,0,Bt,se,Ft.data)}else if(T.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,te,Dt.width,Dt.height,Dt.depth),Pt)if(T.layerUpdates.size>0){const Rt=Wv(Dt.width,Dt.height,T.format,T.type);for(const yt of T.layerUpdates){const Jt=Dt.data.subarray(yt*Rt/Dt.data.BYTES_PER_ELEMENT,(yt+1)*Rt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Dt.width,Dt.height,1,Bt,se,Jt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Bt,se,Dt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,te,Dt.width,Dt.height,Dt.depth,0,Bt,se,Dt.data);else if(T.isData3DTexture)X?(Ut&&i.texStorage3D(o.TEXTURE_3D,jt,te,Dt.width,Dt.height,Dt.depth),Pt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Bt,se,Dt.data)):i.texImage3D(o.TEXTURE_3D,0,te,Dt.width,Dt.height,Dt.depth,0,Bt,se,Dt.data);else if(T.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(o.TEXTURE_2D,jt,te,Dt.width,Dt.height);else{let Rt=Dt.width,yt=Dt.height;for(let Jt=0;Jt<jt;Jt++)i.texImage2D(o.TEXTURE_2D,Jt,te,Rt,yt,0,Bt,se,null),Rt>>=1,yt>>=1}}else if(he.length>0){if(X&&Ut){const Rt=Ze(he[0]);i.texStorage2D(o.TEXTURE_2D,jt,te,Rt.width,Rt.height)}for(let Rt=0,yt=he.length;Rt<yt;Rt++)Ft=he[Rt],X?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Bt,se,Ft):i.texImage2D(o.TEXTURE_2D,Rt,te,Bt,se,Ft);T.generateMipmaps=!1}else if(X){if(Ut){const Rt=Ze(Dt);i.texStorage2D(o.TEXTURE_2D,jt,te,Rt.width,Rt.height)}Pt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,se,Dt)}else i.texImage2D(o.TEXTURE_2D,0,te,Bt,se,Dt);y(T)&&m(vt),Zt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function lt(N,T,ot){if(T.image.length!==6)return;const vt=Se(N,T),Tt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ot);const gt=s.get(Tt);if(Tt.version!==gt.__version||vt===!0){i.activeTexture(o.TEXTURE0+ot);const Zt=Le.getPrimaries(Le.workingColorSpace),Nt=T.colorSpace===or?null:Le.getPrimaries(T.colorSpace),$t=T.colorSpace===or||Zt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Dt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let yt=0;yt<6;yt++)!ee&&!Dt?Bt[yt]=A(T.image[yt],!0,l.maxCubemapSize):Bt[yt]=Dt?T.image[yt].image:T.image[yt],Bt[yt]=Ye(T,Bt[yt]);const se=Bt[0],te=f.convert(T.format,T.colorSpace),Ft=f.convert(T.type),he=I(T.internalFormat,te,Ft,T.colorSpace),X=T.isVideoTexture!==!0,Ut=gt.__version===void 0||vt===!0,Pt=Tt.dataReady;let jt=H(T,se);oe(o.TEXTURE_CUBE_MAP,T);let Rt;if(ee){X&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,he,se.width,se.height);for(let yt=0;yt<6;yt++){Rt=Bt[yt].mipmaps;for(let Jt=0;Jt<Rt.length;Jt++){const fe=Rt[Jt];T.format!==Pi?te!==null?X?Pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,0,0,fe.width,fe.height,te,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,0,0,fe.width,fe.height,te,Ft,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt,he,fe.width,fe.height,0,te,Ft,fe.data)}}}else{if(Rt=T.mipmaps,X&&Ut){Rt.length>0&&jt++;const yt=Ze(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,he,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Dt){X?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Bt[yt].width,Bt[yt].height,te,Ft,Bt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,he,Bt[yt].width,Bt[yt].height,0,te,Ft,Bt[yt].data);for(let Jt=0;Jt<Rt.length;Jt++){const Ve=Rt[Jt].image[yt].image;X?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,0,0,Ve.width,Ve.height,te,Ft,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,he,Ve.width,Ve.height,0,te,Ft,Ve.data)}}else{X?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,te,Ft,Bt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,he,te,Ft,Bt[yt]);for(let Jt=0;Jt<Rt.length;Jt++){const fe=Rt[Jt];X?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,0,0,te,Ft,fe.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Jt+1,he,te,Ft,fe.image[yt])}}}y(T)&&m(o.TEXTURE_CUBE_MAP),gt.__version=Tt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function P(N,T,ot,vt,Tt,gt){const Zt=f.convert(ot.format,ot.colorSpace),Nt=f.convert(ot.type),$t=I(ot.internalFormat,Zt,Nt,ot.colorSpace),ee=s.get(T),Dt=s.get(ot);if(Dt.__renderTarget=T,!ee.__hasExternalTextures){const Bt=Math.max(1,T.width>>gt),se=Math.max(1,T.height>>gt);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,gt,$t,Bt,se,T.depth,0,Zt,Nt,null):i.texImage2D(Tt,gt,$t,Bt,se,0,Zt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),zt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,Tt,Dt.__webglTexture,0,Xt(T)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,Tt,Dt.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Y(N,T,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const vt=T.depthTexture,Tt=vt&&vt.isDepthTexture?vt.type:null,gt=U(T.stencilBuffer,Tt),Zt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=Xt(T);zt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,gt,T.width,T.height):ot?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,gt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,gt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,N)}else{const vt=T.textures;for(let Tt=0;Tt<vt.length;Tt++){const gt=vt[Tt],Zt=f.convert(gt.format,gt.colorSpace),Nt=f.convert(gt.type),$t=I(gt.internalFormat,Zt,Nt,gt.colorSpace),ee=Xt(T);ot&&zt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,$t,T.width,T.height):zt(T)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,$t,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,$t,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ct(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(T.depthTexture);vt.__renderTarget=T,(!vt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const Tt=vt.__webglTexture,gt=Xt(T);if(T.depthTexture.format===hl)zt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(T.depthTexture.format===dl)zt(T)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function rt(N){const T=s.get(N),ot=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const vt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){const Tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",Tt)};vt.addEventListener("dispose",Tt),T.__depthDisposeCallback=Tt}T.__boundDepthTexture=vt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const vt=N.texture.mipmaps;vt&&vt.length>0?ct(T.__webglFramebuffer[0],N):ct(T.__webglFramebuffer,N)}else if(ot){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=o.createRenderbuffer(),Y(T.__webglDepthbuffer[vt],N,!1);else{const Tt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,gt)}}else{const vt=N.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Y(T.__webglDepthbuffer,N,!1);else{const Tt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,gt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(N,T,ot){const vt=s.get(N);T!==void 0&&P(vt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&rt(N)}function w(N){const T=N.texture,ot=s.get(N),vt=s.get(T);N.addEventListener("dispose",L);const Tt=N.textures,gt=N.isWebGLCubeRenderTarget===!0,Zt=Tt.length>1;if(Zt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=T.version,h.memory.textures++),gt){ot.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0){ot.__webglFramebuffer[Nt]=[];for(let $t=0;$t<T.mipmaps.length;$t++)ot.__webglFramebuffer[Nt][$t]=o.createFramebuffer()}else ot.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)ot.__webglFramebuffer[Nt]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Nt=0,$t=Tt.length;Nt<$t;Nt++){const ee=s.get(Tt[Nt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&zt(N)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Tt.length;Nt++){const $t=Tt[Nt];ot.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[Nt]);const ee=f.convert($t.format,$t.colorSpace),Dt=f.convert($t.type),Bt=I($t.internalFormat,ee,Dt,$t.colorSpace,N.isXRRenderTarget===!0),se=Xt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,se,Bt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,ot.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),Y(ot.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),oe(o.TEXTURE_CUBE_MAP,T);for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0)for(let $t=0;$t<T.mipmaps.length;$t++)P(ot.__webglFramebuffer[Nt][$t],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,$t);else P(ot.__webglFramebuffer[Nt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);y(T)&&m(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Nt=0,$t=Tt.length;Nt<$t;Nt++){const ee=Tt[Nt],Dt=s.get(ee);let Bt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Bt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,Dt.__webglTexture),oe(Bt,ee),P(ot.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+Nt,Bt,0),y(ee)&&m(Bt)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,vt.__webglTexture),oe(Nt,T),T.mipmaps&&T.mipmaps.length>0)for(let $t=0;$t<T.mipmaps.length;$t++)P(ot.__webglFramebuffer[$t],N,T,o.COLOR_ATTACHMENT0,Nt,$t);else P(ot.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Nt,0);y(T)&&m(Nt),i.unbindTexture()}N.depthBuffer&&rt(N)}function Lt(N){const T=N.textures;for(let ot=0,vt=T.length;ot<vt;ot++){const Tt=T[ot];if(y(Tt)){const gt=z(N),Zt=s.get(Tt).__webglTexture;i.bindTexture(gt,Zt),m(gt),i.unbindTexture()}}}const wt=[],Vt=[];function bt(N){if(N.samples>0){if(zt(N)===!1){const T=N.textures,ot=N.width,vt=N.height;let Tt=o.COLOR_BUFFER_BIT;const gt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(N),Nt=T.length>1;if(Nt)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const $t=N.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Dt=s.get(T[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,ot,vt,0,0,ot,vt,Tt,o.NEAREST),v===!0&&(wt.length=0,Vt.length=0,wt.push(o.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(wt.push(gt),Vt.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Dt=s.get(T[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Dt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&v){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Xt(N){return Math.min(l.maxSamples,N.samples)}function zt(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(N){const T=h.render.frame;x.get(N)!==T&&(x.set(N,T),N.update())}function Ye(N,T){const ot=N.colorSpace,vt=N.format,Tt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ot!==no&&ot!==or&&(Le.getTransfer(ot)===Xe?(vt!==Pi||Tt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),T}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(_.width=N.naturalWidth||N.width,_.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(_.width=N.displayWidth,_.height=N.displayHeight):(_.width=N.width,_.height=N.height),_}this.allocateTextureUnit=j,this.resetTextureUnits=et,this.setTexture2D=ht,this.setTexture2DArray=q,this.setTexture3D=ft,this.setTextureCube=Q,this.rebindTextures=St,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=P,this.useMultisampledRTT=zt}function $R(o,e){function i(s,l=or){let f;const h=Le.getTransfer(l);if(s===$i)return o.UNSIGNED_BYTE;if(s===Op)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Dx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Cx)return o.BYTE;if(s===wx)return o.SHORT;if(s===cl)return o.UNSIGNED_SHORT;if(s===Lp)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===Ta)return o.FLOAT;if(s===ml)return o.HALF_FLOAT;if(s===Nx)return o.ALPHA;if(s===Lx)return o.RGB;if(s===Pi)return o.RGBA;if(s===hl)return o.DEPTH_COMPONENT;if(s===dl)return o.DEPTH_STENCIL;if(s===Ox)return o.RED;if(s===zp)return o.RED_INTEGER;if(s===Px)return o.RG;if(s===Ip)return o.RG_INTEGER;if(s===Bp)return o.RGBA_INTEGER;if(s===dc||s===pc||s===mc||s===gc)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===dc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===dc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===tp||s===ep||s===np)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===$d)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ip||s===ap||s===rp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===ip||s===ap)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sp||s===yp||s===Mp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Sp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ep||s===Tp||s===bp||s===Ap)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ep)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ap)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
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

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new jx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new fr({vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new xl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends ao{constructor(e,i){super();const s=this;let l=null,f=1,h=null,p="local-floor",v=1,_=null,x=null,d=null,S=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",y=new n2,m={},z=i.getContextAttributes();let I=null,U=null;const H=[],B=[],L=new we;let V=null;const R=new Ei;R.viewport=new qe;const D=new Ei;D.viewport=new qe;const G=[R,D],et=new M1;let j=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=H[nt];return lt===void 0&&(lt=new wd,H[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=H[nt];return lt===void 0&&(lt=new wd,H[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=H[nt];return lt===void 0&&(lt=new wd,H[nt]=lt),lt.getHandSpace()};function ht(nt){const lt=B.indexOf(nt.inputSource);if(lt===-1)return;const P=H[lt];P!==void 0&&(P.update(nt.inputSource,nt.frame,_||h),P.dispatchEvent({type:nt.type,data:nt.inputSource}))}function q(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",ft);for(let nt=0;nt<H.length;nt++){const lt=B[nt];lt!==null&&(B[nt]=null,H[nt].disconnect(lt))}j=null,at=null,y.reset();for(const nt in m)delete m[nt];e.setRenderTarget(I),M=null,S=null,d=null,l=null,U=null,mt.stop(),s.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){f=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(nt){_=nt},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return d===null&&A&&(d=new XRWebGLBinding(l,i)),d},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",q),l.addEventListener("inputsourceschange",ft),z.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let P=null,Y=null,ct=null;z.depth&&(ct=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,P=z.stencil?dl:hl,Y=z.stencil?fl:Wr);const rt={colorFormat:i.RGBA8,depthFormat:ct,scaleFactor:f};d=this.getBinding(),S=d.createProjectionLayer(rt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new jr(S.textureWidth,S.textureHeight,{format:Pi,type:$i,depthTexture:new Wx(S.textureWidth,S.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const P={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,P),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new jr(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(v),_=null,h=await l.requestReferenceSpace(p),mt.setContext(l),mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ft(nt){for(let lt=0;lt<nt.removed.length;lt++){const P=nt.removed[lt],Y=B.indexOf(P);Y>=0&&(B[Y]=null,H[Y].disconnect(P))}for(let lt=0;lt<nt.added.length;lt++){const P=nt.added[lt];let Y=B.indexOf(P);if(Y===-1){for(let rt=0;rt<H.length;rt++)if(rt>=B.length){B.push(P),Y=rt;break}else if(B[rt]===null){B[rt]=P,Y=rt;break}if(Y===-1)break}const ct=H[Y];ct&&ct.connect(P)}}const Q=new tt,Mt=new tt;function At(nt,lt,P){Q.setFromMatrixPosition(lt.matrixWorld),Mt.setFromMatrixPosition(P.matrixWorld);const Y=Q.distanceTo(Mt),ct=lt.projectionMatrix.elements,rt=P.projectionMatrix.elements,St=ct[14]/(ct[10]-1),w=ct[14]/(ct[10]+1),Lt=(ct[9]+1)/ct[5],wt=(ct[9]-1)/ct[5],Vt=(ct[8]-1)/ct[0],bt=(rt[8]+1)/rt[0],Xt=St*Vt,zt=St*bt,le=Y/(-Vt+bt),Ye=le*-Vt;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ye),nt.translateZ(le),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),ct[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ze=St+le,N=w+le,T=Xt-Ye,ot=zt+(Y-Ye),vt=Lt*w/N*Ze,Tt=wt*w/N*Ze;nt.projectionMatrix.makePerspective(T,ot,vt,Tt,Ze,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Yt(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let lt=nt.near,P=nt.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(P=y.depthFar)),et.near=D.near=R.near=lt,et.far=D.far=R.far=P,(j!==et.near||at!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),j=et.near,at=et.far),et.layers.mask=nt.layers.mask|6,R.layers.mask=et.layers.mask&3,D.layers.mask=et.layers.mask&5;const Y=nt.parent,ct=et.cameras;Yt(et,Y);for(let rt=0;rt<ct.length;rt++)Yt(ct[rt],Y);ct.length===2?At(et,R,D):et.projectionMatrix.copy(R.projectionMatrix),oe(nt,et,Y)};function oe(nt,lt,P){P===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(P.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Rp*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(S===null&&M===null))return v},this.setFoveation=function(nt){v=nt,S!==null&&(S.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(nt){return m[nt]};let Se=null;function F(nt,lt){if(x=lt.getViewerPose(_||h),b=lt,x!==null){const P=x.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Y=!1;P.length!==et.cameras.length&&(et.cameras.length=0,Y=!0);for(let w=0;w<P.length;w++){const Lt=P[w];let wt=null;if(M!==null)wt=M.getViewport(Lt);else{const bt=d.getViewSubImage(S,Lt);wt=bt.viewport,w===0&&(e.setRenderTargetTextures(U,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(U))}let Vt=G[w];Vt===void 0&&(Vt=new Ei,Vt.layers.enable(w),Vt.viewport=new qe,G[w]=Vt),Vt.matrix.fromArray(Lt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Lt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(wt.x,wt.y,wt.width,wt.height),w===0&&(et.matrix.copy(Vt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Y===!0&&et.cameras.push(Vt)}const ct=l.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){d=s.getBinding();const w=d.getDepthInformation(P[0]);w&&w.isValid&&w.texture&&y.init(w,l.renderState)}if(ct&&ct.includes("camera-access")&&A){e.state.unbindTexture(),d=s.getBinding();for(let w=0;w<P.length;w++){const Lt=P[w].camera;if(Lt){let wt=m[Lt];wt||(wt=new jx,m[Lt]=wt);const Vt=d.getCameraImage(Lt);wt.sourceTexture=Vt}}}}for(let P=0;P<H.length;P++){const Y=B[P],ct=H[P];Y!==null&&ct!==void 0&&ct.update(Y,lt,_||h)}Se&&Se(nt,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const mt=new Kx;mt.setAnimationLoop(F),this.setAnimationLoop=function(nt){Se=nt},this.dispose=function(){}}}const Gr=new ta,a2=new en;function r2(o,e){function i(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function s(y,m){m.color.getRGB(y.fogColor.value,kx(o)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function l(y,m,z,I,U){m.isMeshBasicMaterial||m.isMeshLambertMaterial?f(y,m):m.isMeshToonMaterial?(f(y,m),d(y,m)):m.isMeshPhongMaterial?(f(y,m),x(y,m)):m.isMeshStandardMaterial?(f(y,m),S(y,m),m.isMeshPhysicalMaterial&&M(y,m,U)):m.isMeshMatcapMaterial?(f(y,m),b(y,m)):m.isMeshDepthMaterial?f(y,m):m.isMeshDistanceMaterial?(f(y,m),A(y,m)):m.isMeshNormalMaterial?f(y,m):m.isLineBasicMaterial?(h(y,m),m.isLineDashedMaterial&&p(y,m)):m.isPointsMaterial?v(y,m,z,I):m.isSpriteMaterial?_(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function f(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,i(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Jn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,i(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Jn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,i(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,i(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const z=e.get(m),I=z.envMap,U=z.envMapRotation;I&&(y.envMap.value=I,Gr.copy(U),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(a2.makeRotationFromEuler(Gr)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,y.aoMapTransform))}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform))}function p(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function v(y,m,z,I){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*z,y.scale.value=I*.5,m.map&&(y.map.value=m.map,i(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function _(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function x(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function d(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function S(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,z){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function A(y,m){const z=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function s2(o,e,i,s){let l={},f={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(z,I){const U=I.program;s.uniformBlockBinding(z,U)}function _(z,I){let U=l[z.id];U===void 0&&(b(z),U=x(z),l[z.id]=U,z.addEventListener("dispose",y));const H=I.program;s.updateUBOMapping(z,H);const B=e.render.frame;f[z.id]!==B&&(S(z),f[z.id]=B)}function x(z){const I=d();z.__bindingPointIndex=I;const U=o.createBuffer(),H=z.__size,B=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,H,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,U),U}function d(){for(let z=0;z<p;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const I=l[z.id],U=z.uniforms,H=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let B=0,L=U.length;B<L;B++){const V=Array.isArray(U[B])?U[B]:[U[B]];for(let R=0,D=V.length;R<D;R++){const G=V[R];if(M(G,B,R,H)===!0){const et=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let at=0;for(let ht=0;ht<j.length;ht++){const q=j[ht],ft=A(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,et+at,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,at),at+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,I,U,H){const B=z.value,L=I+"_"+U;if(H[L]===void 0)return typeof B=="number"||typeof B=="boolean"?H[L]=B:H[L]=B.clone(),!0;{const V=H[L];if(typeof B=="number"||typeof B=="boolean"){if(V!==B)return H[L]=B,!0}else if(V.equals(B)===!1)return V.copy(B),!0}return!1}function b(z){const I=z.uniforms;let U=0;const H=16;for(let L=0,V=I.length;L<V;L++){const R=Array.isArray(I[L])?I[L]:[I[L]];for(let D=0,G=R.length;D<G;D++){const et=R[D],j=Array.isArray(et.value)?et.value:[et.value];for(let at=0,ht=j.length;at<ht;at++){const q=j[at],ft=A(q),Q=U%H,Mt=Q%ft.boundary,At=Q+Mt;U+=Mt,At!==0&&H-At<ft.storage&&(U+=H-At),et.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=U,U+=ft.storage}}}const B=U%H;return B>0&&(U+=H-B),z.__size=U,z.__cache={},this}function A(z){const I={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(I.boundary=4,I.storage=4):z.isVector2?(I.boundary=8,I.storage=8):z.isVector3||z.isColor?(I.boundary=16,I.storage=12):z.isVector4?(I.boundary=16,I.storage=16):z.isMatrix3?(I.boundary=48,I.storage=48):z.isMatrix4?(I.boundary=64,I.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),I}function y(z){const I=z.target;I.removeEventListener("dispose",y);const U=h.indexOf(I.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete f[I.id]}function m(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},f={}}return{bind:v,update:_,dispose:m}}class o2{constructor(e={}){const{canvas:i=zE(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),A=new Int32Array(4);let y=null,m=null;const z=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=ci;let B=0,L=0,V=null,R=-1,D=null;const G=new qe,et=new qe;let j=null;const at=new Re(0);let ht=0,q=i.width,ft=i.height,Q=1,Mt=null,At=null;const Yt=new qe(0,0,q,ft),oe=new qe(0,0,q,ft);let Se=!1;const F=new Vp;let mt=!1,nt=!1;const lt=new en,P=new tt,Y=new qe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function St(){return V===null?Q:1}let w=s;function Lt(C,J){return i.getContext(C,J)}try{const C={alpha:!0,depth:l,stencil:f,antialias:p,premultipliedAlpha:v,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:d};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Np}`),i.addEventListener("webglcontextlost",Pt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),w===null){const J="webgl2";if(w=Lt(J,C),w===null)throw Lt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let wt,Vt,bt,Xt,zt,le,Ye,Ze,N,T,ot,vt,Tt,gt,Zt,Nt,$t,ee,Dt,Bt,se,te,Ft,he;function X(){wt=new _A(w),wt.init(),te=new $R(w,wt),Vt=new cA(w,wt,e,te),bt=new QR(w,wt),Vt.reversedDepthBuffer&&S&&bt.buffers.depth.setReversed(!0),Xt=new SA(w),zt=new BR,le=new JR(w,wt,bt,zt,Vt,te,Xt),Ye=new hA(U),Ze=new gA(U),N=new A1(w),Ft=new lA(w,N),T=new vA(w,N,Xt,Ft),ot=new MA(w,T,N,Xt),Dt=new yA(w,Vt,le),Nt=new fA(zt),vt=new IR(U,Ye,Ze,wt,Vt,Ft,Nt),Tt=new r2(U,zt),gt=new HR,Zt=new YR(wt),ee=new oA(U,Ye,Ze,bt,ot,M,v),$t=new ZR(U,ot,Vt),he=new s2(w,Xt,Vt,bt),Bt=new uA(w,wt,Xt),se=new xA(w,wt,Xt),Xt.programs=vt.programs,U.capabilities=Vt,U.extensions=wt,U.properties=zt,U.renderLists=gt,U.shadowMap=$t,U.state=bt,U.info=Xt}X();const Ut=new i2(U,w);this.xr=Ut,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(q,ft,!1))},this.getSize=function(C){return C.set(q,ft)},this.setSize=function(C,J,dt=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,ft=J,i.width=Math.floor(C*Q),i.height=Math.floor(J*Q),dt===!0&&(i.style.width=C+"px",i.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(q*Q,ft*Q).floor()},this.setDrawingBufferSize=function(C,J,dt){q=C,ft=J,Q=dt,i.width=Math.floor(C*dt),i.height=Math.floor(J*dt),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(Yt)},this.setViewport=function(C,J,dt,pt){C.isVector4?Yt.set(C.x,C.y,C.z,C.w):Yt.set(C,J,dt,pt),bt.viewport(G.copy(Yt).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,J,dt,pt){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,J,dt,pt),bt.scissor(et.copy(oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){bt.setScissorTest(Se=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,dt=!0){let pt=0;if(C){let $=!1;if(V!==null){const Ct=V.texture.format;$=Ct===Bp||Ct===Ip||Ct===zp}if($){const Ct=V.texture.type,Ht=Ct===$i||Ct===Wr||Ct===cl||Ct===fl||Ct===Op||Ct===Pp,qt=ee.getClearColor(),Ot=ee.getClearAlpha(),Kt=qt.r,re=qt.g,ie=qt.b;Ht?(b[0]=Kt,b[1]=re,b[2]=ie,b[3]=Ot,w.clearBufferuiv(w.COLOR,0,b)):(A[0]=Kt,A[1]=re,A[2]=ie,A[3]=Ot,w.clearBufferiv(w.COLOR,0,A))}else pt|=w.COLOR_BUFFER_BIT}J&&(pt|=w.DEPTH_BUFFER_BIT),dt&&(pt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),ee.dispose(),gt.dispose(),Zt.dispose(),zt.dispose(),Ye.dispose(),Ze.dispose(),ot.dispose(),Ft.dispose(),he.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",gn),Ut.removeEventListener("sessionend",Ln),ea.stop()};function Pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=Xt.autoReset,J=$t.enabled,dt=$t.autoUpdate,pt=$t.needsUpdate,$=$t.type;X(),Xt.autoReset=C,$t.enabled=J,$t.autoUpdate=dt,$t.needsUpdate=pt,$t.type=$}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function yt(C){const J=C.target;J.removeEventListener("dispose",yt),Jt(J)}function Jt(C){fe(C),zt.remove(C)}function fe(C){const J=zt.get(C).programs;J!==void 0&&(J.forEach(function(dt){vt.releaseProgram(dt)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,dt,pt,$,Ct){J===null&&(J=ct);const Ht=$.isMesh&&$.matrixWorld.determinant()<0,qt=yl(C,J,dt,pt,$);bt.setMaterial(pt,Ht);let Ot=dt.index,Kt=1;if(pt.wireframe===!0){if(Ot=T.getWireframeAttribute(dt),Ot===void 0)return;Kt=2}const re=dt.drawRange,ie=dt.attributes.position;let xe=re.start*Kt,Ie=(re.start+re.count)*Kt;Ct!==null&&(xe=Math.max(xe,Ct.start*Kt),Ie=Math.min(Ie,(Ct.start+Ct.count)*Kt)),Ot!==null?(xe=Math.max(xe,0),Ie=Math.min(Ie,Ot.count)):ie!=null&&(xe=Math.max(xe,0),Ie=Math.min(Ie,ie.count));const $e=Ie-xe;if($e<0||$e===1/0)return;Ft.setup($,pt,qt,dt,Ot);let Oe,De=Bt;if(Ot!==null&&(Oe=N.get(Ot),De=se,De.setIndex(Oe)),$.isMesh)pt.wireframe===!0?(bt.setLineWidth(pt.wireframeLinewidth*St()),De.setMode(w.LINES)):De.setMode(w.TRIANGLES);else if($.isLine){let ae=pt.linewidth;ae===void 0&&(ae=1),bt.setLineWidth(ae*St()),$.isLineSegments?De.setMode(w.LINES):$.isLineLoop?De.setMode(w.LINE_LOOP):De.setMode(w.LINE_STRIP)}else $.isPoints?De.setMode(w.POINTS):$.isSprite&&De.setMode(w.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)pl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))De.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ae=$._multiDrawStarts,Pe=$._multiDrawCounts,_e=$._multiDrawCount,_n=Ot?N.get(Ot).bytesPerElement:1,$n=zt.get(pt).currentProgram.getUniforms();for(let Ue=0;Ue<_e;Ue++)$n.setValue(w,"_gl_DrawID",Ue),De.render(ae[Ue]/_n,Pe[Ue])}else if($.isInstancedMesh)De.renderInstances(xe,$e,$.count);else if(dt.isInstancedBufferGeometry){const ae=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Pe=Math.min(dt.instanceCount,ae);De.renderInstances(xe,$e,Pe)}else De.render(xe,$e)};function Ve(C,J,dt){C.transparent===!0&&C.side===Ea&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,hi(C,J,dt),C.side=cr,C.needsUpdate=!0,hi(C,J,dt),C.side=Ea):hi(C,J,dt)}this.compile=function(C,J,dt=null){dt===null&&(dt=C),m=Zt.get(dt),m.init(J),I.push(m),dt.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==dt&&C.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const pt=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let Ht=0;Ht<Ct.length;Ht++){const qt=Ct[Ht];Ve(qt,dt,$),pt.add(qt)}else Ve(Ct,dt,$),pt.add(Ct)}),m=I.pop(),pt},this.compileAsync=function(C,J,dt=null){const pt=this.compile(C,J,dt);return new Promise($=>{function Ct(){if(pt.forEach(function(Ht){zt.get(Ht).currentProgram.isReady()&&pt.delete(Ht)}),pt.size===0){$(C);return}setTimeout(Ct,10)}wt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ee=null;function nn(C){Ee&&Ee(C)}function gn(){ea.stop()}function Ln(){ea.start()}const ea=new Kx;ea.setAnimationLoop(nn),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(C){Ee=C,Ut.setAnimationLoop(C),C===null?ea.stop():ea.start()},Ut.addEventListener("sessionstart",gn),Ut.addEventListener("sessionend",Ln),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(J),J=Ut.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,J,V),m=Zt.get(C,I.length),m.init(J),I.push(m),lt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F.setFromProjectionMatrix(lt,Qi,J.reversedDepth),nt=this.localClippingEnabled,mt=Nt.init(this.clippingPlanes,nt),y=gt.get(C,z.length),y.init(),z.push(y),Ut.enabled===!0&&Ut.isPresenting===!0){const Ct=U.xr.getDepthSensingMesh();Ct!==null&&lo(Ct,J,-1/0,U.sortObjects)}lo(C,J,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(Mt,At),rt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,rt&&ee.addToRenderList(y,C),this.info.render.frame++,mt===!0&&Nt.beginShadows();const dt=m.state.shadowsArray;$t.render(dt,C,J),mt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=y.opaque,$=y.transmissive;if(m.setupLights(),J.isArrayCamera){const Ct=J.cameras;if($.length>0)for(let Ht=0,qt=Ct.length;Ht<qt;Ht++){const Ot=Ct[Ht];hr(pt,$,C,Ot)}rt&&ee.render(C);for(let Ht=0,qt=Ct.length;Ht<qt;Ht++){const Ot=Ct[Ht];Sl(y,C,Ot,Ot.viewport)}}else $.length>0&&hr(pt,$,C,J),rt&&ee.render(C),Sl(y,C,J);V!==null&&L===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(U,C,J),Ft.resetDefaultState(),R=-1,D=null,I.pop(),I.length>0?(m=I[I.length-1],mt===!0&&Nt.setGlobalState(U.clippingPlanes,m.state.camera)):m=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function lo(C,J,dt,pt){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)dt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){pt&&Y.setFromMatrixPosition(C.matrixWorld).applyMatrix4(lt);const Ht=ot.update(C),qt=C.material;qt.visible&&y.push(C,Ht,qt,dt,Y.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const Ht=ot.update(C),qt=C.material;if(pt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Y.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Y.copy(Ht.boundingSphere.center)),Y.applyMatrix4(C.matrixWorld).applyMatrix4(lt)),Array.isArray(qt)){const Ot=Ht.groups;for(let Kt=0,re=Ot.length;Kt<re;Kt++){const ie=Ot[Kt],xe=qt[ie.materialIndex];xe&&xe.visible&&y.push(C,Ht,xe,dt,Y.z,ie)}}else qt.visible&&y.push(C,Ht,qt,dt,Y.z,null)}}const Ct=C.children;for(let Ht=0,qt=Ct.length;Ht<qt;Ht++)lo(Ct[Ht],J,dt,pt)}function Sl(C,J,dt,pt){const $=C.opaque,Ct=C.transmissive,Ht=C.transparent;m.setupLightsView(dt),mt===!0&&Nt.setGlobalState(U.clippingPlanes,dt),pt&&bt.viewport(G.copy(pt)),$.length>0&&na($,J,dt),Ct.length>0&&na(Ct,J,dt),Ht.length>0&&na(Ht,J,dt),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function hr(C,J,dt,pt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[pt.id]===void 0&&(m.state.transmissionRenderTarget[pt.id]=new jr(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?ml:$i,minFilter:Yr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Ct=m.state.transmissionRenderTarget[pt.id],Ht=pt.viewport||G;Ct.setSize(Ht.z*U.transmissionResolutionScale,Ht.w*U.transmissionResolutionScale);const qt=U.getRenderTarget(),Ot=U.getActiveCubeFace(),Kt=U.getActiveMipmapLevel();U.setRenderTarget(Ct),U.getClearColor(at),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),rt&&ee.render(dt);const re=U.toneMapping;U.toneMapping=ur;const ie=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),m.setupLightsView(pt),mt===!0&&Nt.setGlobalState(U.clippingPlanes,pt),na(C,dt,pt),le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct),wt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ie=0,$e=J.length;Ie<$e;Ie++){const Oe=J[Ie],De=Oe.object,ae=Oe.geometry,Pe=Oe.material,_e=Oe.group;if(Pe.side===Ea&&De.layers.test(pt.layers)){const _n=Pe.side;Pe.side=Jn,Pe.needsUpdate=!0,dr(De,dt,pt,ae,Pe,_e),Pe.side=_n,Pe.needsUpdate=!0,xe=!0}}xe===!0&&(le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct))}U.setRenderTarget(qt,Ot,Kt),U.setClearColor(at,ht),ie!==void 0&&(pt.viewport=ie),U.toneMapping=re}function na(C,J,dt){const pt=J.isScene===!0?J.overrideMaterial:null;for(let $=0,Ct=C.length;$<Ct;$++){const Ht=C[$],qt=Ht.object,Ot=Ht.geometry,Kt=Ht.group;let re=Ht.material;re.allowOverride===!0&&pt!==null&&(re=pt),qt.layers.test(dt.layers)&&dr(qt,J,dt,Ot,re,Kt)}}function dr(C,J,dt,pt,$,Ct){C.onBeforeRender(U,J,dt,pt,$,Ct),C.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(U,J,dt,pt,C,Ct),$.transparent===!0&&$.side===Ea&&$.forceSinglePass===!1?($.side=Jn,$.needsUpdate=!0,U.renderBufferDirect(dt,J,pt,$,C,Ct),$.side=cr,$.needsUpdate=!0,U.renderBufferDirect(dt,J,pt,$,C,Ct),$.side=Ea):U.renderBufferDirect(dt,J,pt,$,C,Ct),C.onAfterRender(U,J,dt,pt,$,Ct)}function hi(C,J,dt){J.isScene!==!0&&(J=ct);const pt=zt.get(C),$=m.state.lights,Ct=m.state.shadowsArray,Ht=$.state.version,qt=vt.getParameters(C,$.state,Ct,J,dt),Ot=vt.getProgramCacheKey(qt);let Kt=pt.programs;pt.environment=C.isMeshStandardMaterial?J.environment:null,pt.fog=J.fog,pt.envMap=(C.isMeshStandardMaterial?Ze:Ye).get(C.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",yt),Kt=new Map,pt.programs=Kt);let re=Kt.get(Ot);if(re!==void 0){if(pt.currentProgram===re&&pt.lightsStateVersion===Ht)return Aa(C,qt),re}else qt.uniforms=vt.getUniforms(C),C.onBeforeCompile(qt,U),re=vt.acquireProgram(qt,Ot),Kt.set(Ot,re),pt.uniforms=qt.uniforms;const ie=pt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ie.clippingPlanes=Nt.uniform),Aa(C,qt),pt.needsLights=Ml(C),pt.lightsStateVersion=Ht,pt.needsLights&&(ie.ambientLightColor.value=$.state.ambient,ie.lightProbe.value=$.state.probe,ie.directionalLights.value=$.state.directional,ie.directionalLightShadows.value=$.state.directionalShadow,ie.spotLights.value=$.state.spot,ie.spotLightShadows.value=$.state.spotShadow,ie.rectAreaLights.value=$.state.rectArea,ie.ltc_1.value=$.state.rectAreaLTC1,ie.ltc_2.value=$.state.rectAreaLTC2,ie.pointLights.value=$.state.point,ie.pointLightShadows.value=$.state.pointShadow,ie.hemisphereLights.value=$.state.hemi,ie.directionalShadowMap.value=$.state.directionalShadowMap,ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ie.spotShadowMap.value=$.state.spotShadowMap,ie.spotLightMatrix.value=$.state.spotLightMatrix,ie.spotLightMap.value=$.state.spotLightMap,ie.pointShadowMap.value=$.state.pointShadowMap,ie.pointShadowMatrix.value=$.state.pointShadowMatrix),pt.currentProgram=re,pt.uniformsList=null,re}function pr(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=_c.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Aa(C,J){const dt=zt.get(C);dt.outputColorSpace=J.outputColorSpace,dt.batching=J.batching,dt.batchingColor=J.batchingColor,dt.instancing=J.instancing,dt.instancingColor=J.instancingColor,dt.instancingMorph=J.instancingMorph,dt.skinning=J.skinning,dt.morphTargets=J.morphTargets,dt.morphNormals=J.morphNormals,dt.morphColors=J.morphColors,dt.morphTargetsCount=J.morphTargetsCount,dt.numClippingPlanes=J.numClippingPlanes,dt.numIntersection=J.numClipIntersection,dt.vertexAlphas=J.vertexAlphas,dt.vertexTangents=J.vertexTangents,dt.toneMapping=J.toneMapping}function yl(C,J,dt,pt,$){J.isScene!==!0&&(J=ct),le.resetTextureUnits();const Ct=J.fog,Ht=pt.isMeshStandardMaterial?J.environment:null,qt=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:no,Ot=(pt.isMeshStandardMaterial?Ze:Ye).get(pt.envMap||Ht),Kt=pt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,re=!!dt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),ie=!!dt.morphAttributes.position,xe=!!dt.morphAttributes.normal,Ie=!!dt.morphAttributes.color;let $e=ur;pt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&($e=U.toneMapping);const Oe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,De=Oe!==void 0?Oe.length:0,ae=zt.get(pt),Pe=m.state.lights;if(mt===!0&&(nt===!0||C!==D)){const rn=C===D&&pt.id===R;Nt.setState(pt,C,rn)}let _e=!1;pt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Pe.state.version||ae.outputColorSpace!==qt||$.isBatchedMesh&&ae.batching===!1||!$.isBatchedMesh&&ae.batching===!0||$.isBatchedMesh&&ae.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ae.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ae.instancing===!1||!$.isInstancedMesh&&ae.instancing===!0||$.isSkinnedMesh&&ae.skinning===!1||!$.isSkinnedMesh&&ae.skinning===!0||$.isInstancedMesh&&ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ae.instancingMorph===!1&&$.morphTexture!==null||ae.envMap!==Ot||pt.fog===!0&&ae.fog!==Ct||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Nt.numPlanes||ae.numIntersection!==Nt.numIntersection)||ae.vertexAlphas!==Kt||ae.vertexTangents!==re||ae.morphTargets!==ie||ae.morphNormals!==xe||ae.morphColors!==Ie||ae.toneMapping!==$e||ae.morphTargetsCount!==De)&&(_e=!0):(_e=!0,ae.__version=pt.version);let _n=ae.currentProgram;_e===!0&&(_n=hi(pt,J,$));let $n=!1,Ue=!1,Ra=!1;const Ke=_n.getUniforms(),Bn=ae.uniforms;if(bt.useProgram(_n.program)&&($n=!0,Ue=!0,Ra=!0),pt.id!==R&&(R=pt.id,Ue=!0),$n||D!==C){bt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ke.setValue(w,"projectionMatrix",C.projectionMatrix),Ke.setValue(w,"viewMatrix",C.matrixWorldInverse);const On=Ke.map.cameraPosition;On!==void 0&&On.setValue(w,P.setFromMatrixPosition(C.matrixWorld)),Vt.logarithmicDepthBuffer&&Ke.setValue(w,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Ke.setValue(w,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Ue=!0,Ra=!0)}if($.isSkinnedMesh){Ke.setOptional(w,$,"bindMatrix"),Ke.setOptional(w,$,"bindMatrixInverse");const rn=$.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ke.setValue(w,"boneTexture",rn.boneTexture,le))}$.isBatchedMesh&&(Ke.setOptional(w,$,"batchingTexture"),Ke.setValue(w,"batchingTexture",$._matricesTexture,le),Ke.setOptional(w,$,"batchingIdTexture"),Ke.setValue(w,"batchingIdTexture",$._indirectTexture,le),Ke.setOptional(w,$,"batchingColorTexture"),$._colorsTexture!==null&&Ke.setValue(w,"batchingColorTexture",$._colorsTexture,le));const un=dt.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Dt.update($,dt,_n),(Ue||ae.receiveShadow!==$.receiveShadow)&&(ae.receiveShadow=$.receiveShadow,Ke.setValue(w,"receiveShadow",$.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Bn.envMap.value=Ot,Bn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&J.environment!==null&&(Bn.envMapIntensity.value=J.environmentIntensity),Ue&&(Ke.setValue(w,"toneMappingExposure",U.toneMappingExposure),ae.needsLights&&Rc(Bn,Ra),Ct&&pt.fog===!0&&Tt.refreshFogUniforms(Bn,Ct),Tt.refreshMaterialUniforms(Bn,pt,Q,ft,m.state.transmissionRenderTarget[C.id]),_c.upload(w,pr(ae),Bn,le)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(_c.upload(w,pr(ae),Bn,le),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Ke.setValue(w,"center",$.center),Ke.setValue(w,"modelViewMatrix",$.modelViewMatrix),Ke.setValue(w,"normalMatrix",$.normalMatrix),Ke.setValue(w,"modelMatrix",$.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const rn=pt.uniformsGroups;for(let On=0,Zr=rn.length;On<Zr;On++){const zi=rn[On];he.update(zi,_n),he.bind(zi,_n)}}return _n}function Rc(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,J,dt){const pt=zt.get(C);pt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),zt.get(C.texture).__webglTexture=J,zt.get(C.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:dt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){const dt=zt.get(C);dt.__webglFramebuffer=J,dt.__useDefaultFramebuffer=J===void 0};const uo=w.createFramebuffer();this.setRenderTarget=function(C,J=0,dt=0){V=C,B=J,L=dt;let pt=!0,$=null,Ct=!1,Ht=!1;if(C){const Ot=zt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(w.FRAMEBUFFER,null),pt=!1;else if(Ot.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Ot.__hasExternalTextures)le.rebindTextures(C,zt.get(C.texture).__webglTexture,zt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(Ot.__boundDepthTexture!==ie){if(ie!==null&&zt.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ht=!0);const re=zt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(re[J])?$=re[J][dt]:$=re[J],Ct=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?$=zt.get(C).__webglMultisampledFramebuffer:Array.isArray(re)?$=re[dt]:$=re,G.copy(C.viewport),et.copy(C.scissor),j=C.scissorTest}else G.copy(Yt).multiplyScalar(Q).floor(),et.copy(oe).multiplyScalar(Q).floor(),j=Se;if(dt!==0&&($=uo),bt.bindFramebuffer(w.FRAMEBUFFER,$)&&pt&&bt.drawBuffers(C,$),bt.viewport(G),bt.scissor(et),bt.setScissorTest(j),Ct){const Ot=zt.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ot.__webglTexture,dt)}else if(Ht){const Ot=J;for(let Kt=0;Kt<C.textures.length;Kt++){const re=zt.get(C.textures[Kt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Kt,re.__webglTexture,dt,Ot)}}else if(C!==null&&dt!==0){const Ot=zt.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ot.__webglTexture,dt)}R=-1},this.readRenderTargetPixels=function(C,J,dt,pt,$,Ct,Ht,qt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Ot=Ot[Ht]),Ot){bt.bindFramebuffer(w.FRAMEBUFFER,Ot);try{const Kt=C.textures[qt],re=Kt.format,ie=Kt.type;if(!Vt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-pt&&dt>=0&&dt<=C.height-$&&(C.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+qt),w.readPixels(J,dt,pt,$,te.convert(re),te.convert(ie),Ct))}finally{const Kt=V!==null?zt.get(V).__webglFramebuffer:null;bt.bindFramebuffer(w.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(C,J,dt,pt,$,Ct,Ht,qt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Ot=Ot[Ht]),Ot)if(J>=0&&J<=C.width-pt&&dt>=0&&dt<=C.height-$){bt.bindFramebuffer(w.FRAMEBUFFER,Ot);const Kt=C.textures[qt],re=Kt.format,ie=Kt.type;if(!Vt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,xe),w.bufferData(w.PIXEL_PACK_BUFFER,Ct.byteLength,w.STREAM_READ),C.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+qt),w.readPixels(J,dt,pt,$,te.convert(re),te.convert(ie),0);const Ie=V!==null?zt.get(V).__webglFramebuffer:null;bt.bindFramebuffer(w.FRAMEBUFFER,Ie);const $e=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await IE(w,$e,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,xe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ct),w.deleteBuffer(xe),w.deleteSync($e),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,dt=0){const pt=Math.pow(2,-dt),$=Math.floor(C.image.width*pt),Ct=Math.floor(C.image.height*pt),Ht=J!==null?J.x:0,qt=J!==null?J.y:0;le.setTexture2D(C,0),w.copyTexSubImage2D(w.TEXTURE_2D,dt,0,0,Ht,qt,$,Ct),bt.unbindTexture()};const mr=w.createFramebuffer(),Cc=w.createFramebuffer();this.copyTextureToTexture=function(C,J,dt=null,pt=null,$=0,Ct=null){Ct===null&&($!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=$,$=0):Ct=0);let Ht,qt,Ot,Kt,re,ie,xe,Ie,$e;const Oe=C.isCompressedTexture?C.mipmaps[Ct]:C.image;if(dt!==null)Ht=dt.max.x-dt.min.x,qt=dt.max.y-dt.min.y,Ot=dt.isBox3?dt.max.z-dt.min.z:1,Kt=dt.min.x,re=dt.min.y,ie=dt.isBox3?dt.min.z:0;else{const un=Math.pow(2,-$);Ht=Math.floor(Oe.width*un),qt=Math.floor(Oe.height*un),C.isDataArrayTexture?Ot=Oe.depth:C.isData3DTexture?Ot=Math.floor(Oe.depth*un):Ot=1,Kt=0,re=0,ie=0}pt!==null?(xe=pt.x,Ie=pt.y,$e=pt.z):(xe=0,Ie=0,$e=0);const De=te.convert(J.format),ae=te.convert(J.type);let Pe;J.isData3DTexture?(le.setTexture3D(J,0),Pe=w.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(le.setTexture2DArray(J,0),Pe=w.TEXTURE_2D_ARRAY):(le.setTexture2D(J,0),Pe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,J.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,J.unpackAlignment);const _e=w.getParameter(w.UNPACK_ROW_LENGTH),_n=w.getParameter(w.UNPACK_IMAGE_HEIGHT),$n=w.getParameter(w.UNPACK_SKIP_PIXELS),Ue=w.getParameter(w.UNPACK_SKIP_ROWS),Ra=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Oe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,re),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ie);const Ke=C.isDataArrayTexture||C.isData3DTexture,Bn=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const un=zt.get(C),rn=zt.get(J),On=zt.get(un.__renderTarget),Zr=zt.get(rn.__renderTarget);bt.bindFramebuffer(w.READ_FRAMEBUFFER,On.__webglFramebuffer),bt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let zi=0;zi<Ot;zi++)Ke&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zt.get(C).__webglTexture,$,ie+zi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zt.get(J).__webglTexture,Ct,$e+zi)),w.blitFramebuffer(Kt,re,Ht,qt,xe,Ie,Ht,qt,w.DEPTH_BUFFER_BIT,w.NEAREST);bt.bindFramebuffer(w.READ_FRAMEBUFFER,null),bt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||zt.has(C)){const un=zt.get(C),rn=zt.get(J);bt.bindFramebuffer(w.READ_FRAMEBUFFER,mr),bt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Cc);for(let On=0;On<Ot;On++)Ke?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,un.__webglTexture,$,ie+On):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,un.__webglTexture,$),Bn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,rn.__webglTexture,Ct,$e+On):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,rn.__webglTexture,Ct),$!==0?w.blitFramebuffer(Kt,re,Ht,qt,xe,Ie,Ht,qt,w.COLOR_BUFFER_BIT,w.NEAREST):Bn?w.copyTexSubImage3D(Pe,Ct,xe,Ie,$e+On,Kt,re,Ht,qt):w.copyTexSubImage2D(Pe,Ct,xe,Ie,Kt,re,Ht,qt);bt.bindFramebuffer(w.READ_FRAMEBUFFER,null),bt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?w.texSubImage3D(Pe,Ct,xe,Ie,$e,Ht,qt,Ot,De,ae,Oe.data):J.isCompressedArrayTexture?w.compressedTexSubImage3D(Pe,Ct,xe,Ie,$e,Ht,qt,Ot,De,Oe.data):w.texSubImage3D(Pe,Ct,xe,Ie,$e,Ht,qt,Ot,De,ae,Oe):C.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ct,xe,Ie,Ht,qt,De,ae,Oe.data):C.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ct,xe,Ie,Oe.width,Oe.height,De,Oe.data):w.texSubImage2D(w.TEXTURE_2D,Ct,xe,Ie,Ht,qt,De,ae,Oe);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_n),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$n),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ra),Ct===0&&J.generateMipmaps&&w.generateMipmap(Pe),bt.unbindTexture()},this.initRenderTarget=function(C){zt.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),bt.unbindTexture()},this.resetState=function(){B=0,L=0,V=null,bt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const kt={wood:11697234,edge:7426366,cream:15655368,ink:3162955,teal:4948347,coral:13268578,brass:13017959};function l2(o,e){const i=new o2({antialias:!1});i.setPixelRatio(1),i.shadowMap.enabled=!0,i.shadowMap.type=Tx,i.shadowMap.autoUpdate=!1,i.setClearColor(12961467),i.toneMapping=Ax,i.toneMappingExposure=1.35,o.appendChild(i.domElement);const s=new l1,l=new Wp;l.position.set(12,15,19),l.lookAt(-.5,.3,-.8),s.add(new v1(15003368,9270894,2));const f=new Xv(16770226,3.4);f.position.set(-5,13,-4),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-12,right:12,top:12,bottom:-12}),f.shadow.normalBias=.035,f.shadow.bias=-2e-4,s.add(f);const h=new Xv(12968423,1);h.position.set(6,8,10),s.add(h);const p=new Map,v=[];function _(P){return p.has(P)||p.set(P,new m1({color:P,roughness:.85})),p.get(P)}function x(P,Y,ct,rt,St,w){const Lt=new Qn(Y,_(w));return Lt.position.set(ct,rt,St),Lt.castShadow=!0,Lt.receiveShadow=!0,P.add(Lt),Lt}const d=(P,Y,ct,rt,St,w,Lt,wt)=>x(P,new so(St,w,Lt),Y,ct,rt,wt),S=(P,Y,ct,rt,St,w,Lt,wt=St,Vt=12)=>x(P,new kp(wt,St,w,Vt),Y,ct,rt,Lt);function M(P,Y,ct,rt,St,w,Lt,wt="#eee1c8",Vt="#304b4b"){const bt=document.createElement("canvas");bt.width=256,bt.height=64;const Xt=bt.getContext("2d");Xt.fillStyle=wt,Xt.fillRect(0,0,256,64),Xt.fillStyle=Vt,Xt.font="bold 30px monospace",Xt.textAlign="center",Xt.textBaseline="middle",Xt.fillText(Y,128,33,240);const zt=new p1(bt);zt.magFilter=fi,zt.minFilter=fi,zt.colorSpace=ci,v.push(zt);const le=new Qn(new xl(w,Lt),new ul({map:zt}));return le.position.set(ct,rt,St),P.add(le),le}function b(P,Y,ct,rt,St=1){S(P,Y,ct+.23*St,rt,.24*St,.46*St,12419176,.31*St),S(P,Y,ct+.47*St,rt,.255*St,.03,6705986);for(let w=0;w<7;w++){const Lt=w*2.4,wt=x(P,new Xp(.22*St,5,3),Y+Math.sin(Lt)*.25*St,ct+(.75+w*.06)*St,rt+Math.cos(Lt)*.25*St,w%2?6654825:4353368);wt.scale.set(.6,1.8,.7),wt.rotation.z=Math.sin(Lt)*.7}}function A(P,Y,ct,rt,St=kt.cream){S(P,Y,ct+.09,rt,.085,.18,St),S(P,Y,ct+.185,rt,.063,.012,6705986);const w=new Qn(new qp(.06,.022,4,8),_(St));w.position.set(Y+.095,ct+.1,rt),P.add(w)}function y(P,Y,ct,rt,St=5){for(let w=0;w<St;w++){const Lt=.22+w%3*.055;d(P,Y+w*.12,ct+Lt/2,rt,.09,Lt,.24,[kt.teal,kt.coral,kt.brass,7376032,kt.cream][w%5])}}const m=new ji;s.add(m),d(s,0,-.68,0,200,.1,200,12961467),d(m,-.65,-.28,-.85,12.1,.55,12.1,kt.ink),d(m,-.65,-.04,-.85,12.2,.12,12.2,kt.edge);for(let P=0;P<24;P++)for(let Y=0;Y<4;Y++){const ct=-5.17+Y*3;d(m,ct,.045,-6.6+P*.5,3,.07,.5,[11963237,12819059,12489836,13148540][(P*7+Y)%4]).castShadow=!1}d(m,-.65,1.9,-6.95,12.2,3.8,.2,kt.cream),d(m,-6.65,.72,-.85,.18,1.45,12.1,14145215),d(m,-6.65,1.48,-.85,.25,.12,12.1,kt.edge),d(m,-.65,.32,-6.79,12.1,.58,.14,6587516),d(m,-.65,.65,-6.7,12.1,.075,.18,kt.edge);for(const P of[-4.2,-1]){d(m,P,2.35,-6.78,2.75,2.2,.18,kt.edge),d(m,P,2.35,-6.66,2.5,1.96,.06,11127231),d(m,P,1.93,-6.61,2.5,1.1,.025,9482149);for(let Y=0;Y<4;Y++)d(m,P-1+Y*.66,2.05+Y%2*.15,-6.58,.4,.4+Y%2*.3,.025,8297620);d(m,P,2.35,-6.54,.08,2,.12,kt.cream),d(m,P,2.1,-6.53,2.5,.075,.12,kt.cream),d(m,P,1.18,-6.45,2.95,.12,.55,kt.wood),d(m,P,3.5,-6.48,3,.12,.22,kt.edge);for(const Y of[-1,1]){d(m,P+Y*1.32,2.37,-6.39,.24,2.1,.18,15059361);for(let ct=0;ct<3;ct++)d(m,P+Y*1.32-.07+ct*.07,2.37,-6.28,.025,2.08,.025,13085573)}}d(m,-2.35,.52,-5.95,5.3,.95,1.15,5800057),d(m,-2.35,1.04,-5.95,5.5,.14,1.25,kt.cream);for(let P=0;P<5;P++)d(m,-4.47+P*1.05,.55,-5.36,1,.78,.035,7180678),d(m,-4.13+P*1.05,.78,-5.32,.08,.045,.05,kt.brass);d(m,-3.7,1.42,-5.9,.62,.65,.5,kt.ink),d(m,-3.7,1.52,-5.62,.45,.18,.035,7573386),d(m,-3.7,1.15,-5.5,.65,.05,.3,kt.edge),A(m,-3.7,1.17,-5.55),A(m,-2.9,1.12,-5.65,kt.coral),b(m,-.55,1.12,-5.9,.65),y(m,-2.25,1.12,-6,4),M(m,"PIXEL STARTUP CLUB",2.75,3.16,-6.8,3.55,.62,"#304b4b","#f3e2bb"),d(m,2.9,1.88,-6.65,2.9,1.5,.14,kt.edge),d(m,2.9,1.88,-6.55,2.72,1.32,.06,12362108);for(let P=0;P<6;P++){const Y=d(m,2+P%3*.75,1.55+Math.floor(P/3)*.6,-6.49,.48,.38,.025,[15125379,14857633,11716276][P%3]);Y.rotation.z=(P%3-1)*.07,d(m,2+P%3*.75,1.7+Math.floor(P/3)*.6,-6.46,.03,.04,.025,kt.coral)}d(m,4.55,1.1,-6.1,1.1,2.15,.1,kt.edge);for(const P of[4.02,5.08])d(m,P,1.1,-5.7,.08,2.15,.9,kt.edge);d(m,4.55,2.2,-5.7,1.15,.1,.95,kt.wood);for(let P=0;P<3;P++)d(m,4.55,.36+P*.6,-5.65,1.05,.08,.9,kt.wood),y(m,4.13,.4+P*.6,-5.55,6);b(m,4.55,2.2,-5.7,.7),d(m,-5.65,.15,-1,1.55,.04,5.4,8231823);for(let P=0;P<5;P++)d(m,-5.65,.18,-3.2+P*.9,1.3,.015,.025,13880240);d(m,-5.9,.43,-1.3,.95,.5,2.1,12681320),d(m,-6.25,.85,-1.3,.23,1.05,2.15,11955545);for(const P of[-2.33,-.27])d(m,-5.85,.69,P,1.05,.65,.18,11955545);for(const P of[-1.8,-.8])d(m,-5.85,.75,P,.75,.18,.89,13933180);d(m,-6.05,1.06,-1.75,.25,.46,.6,13944217),S(m,-5.5,.54,1,.5,.1,kt.wood),S(m,-5.5,.3,1,.07,.5,kt.ink),A(m,-5.5,.6,1),b(m,-5.7,0,3,1.2),S(m,-5.7,.1,-3.55,.29,.1,kt.ink),S(m,-5.7,1.2,-3.55,.035,2.3,kt.brass),S(m,-5.7,2.34,-3.55,.4,.4,15126175,.25);const z=new S1(16764037,2,4);z.position.set(-5.7,2,-3.55),s.add(z);const I=S(m,4.9,3.2,-6.7,.31,.09,kt.ink);I.rotation.x=Math.PI/2;const U=S(m,4.9,3.2,-6.63,.27,.025,kt.cream);U.rotation.x=Math.PI/2,d(m,4.9,3.28,-6.6,.025,.17,.02,kt.ink),d(m,4.99,3.2,-6.6,.18,.025,.02,kt.ink),d(m,-.65,3.88,-6.85,12.35,.18,.32,kt.edge),d(m,.6,.13,4.7,3.4,.035,.65,kt.teal),M(m,"GOOD IDEAS START HERE",.6,.15,4.7,2.9,.4,"#4b817b","#eee1c8").rotation.x=-Math.PI/2;const H=new T1(9,6,14403750,14403750);H.position.y=.105,H.visible=!1,s.add(H);const B=new ji,L=new ji;s.add(B,L);let V,R="",D=!1;const G=[];function et(P,Y,ct,rt,St){const w=new ji;w.position.set(Y,0,ct),P.add(w);const Lt=[13934717,11040084,14792595][St%3],wt=[4799542,6835262,3485489][St%3];for(const bt of[-1,1])d(w,bt*.12,.27,.03,.16,.4,.2,4608346),d(w,bt*.12,.1,-.04,.18,.14,.32,3160898);d(w,0,.69,0,.46,.51,.3,rt),d(w,0,.96,0,.13,.13,.14,Lt),d(w,0,1.16,-.01,.35,.35,.33,Lt),d(w,0,1.34,.015,.38,.12,.37,wt),d(w,.155,1.21,.06,.1,.2,.24,wt);for(const bt of[-.09,.09])d(w,bt,1.17,-.184,.045,.045,.02,3814707);const Vt=[];for(const bt of[-1,1]){const Xt=new ji;Xt.position.set(bt*.26,.83,0),w.add(Xt),d(Xt,0,-.04,-.1,.14,.18,.26,rt),d(Xt,0,-.1,-.27,.12,.12,.19,Lt),Vt.push(Xt)}return G.push({group:w,arms:Vt,id:St}),w}function j(P,Y,ct){d(P,0,.86,-.18,Y,.15,ct,kt.edge),d(P,0,.96,-.18,Y+.04,.07,ct+.03,kt.wood);for(const rt of[-Y*.42,Y*.42])d(P,rt,.46,-.18,.1,.8,ct*.8,kt.ink),d(P,rt,.1,-.18,.24,.08,ct*.88,kt.ink);d(P,-Y*.32,.62,-.18,.37,.46,ct*.85,8688774);for(let rt=0;rt<2;rt++)d(P,-Y*.32,.58+rt*.17,ct*.35,.13,.035,.03,kt.brass)}function at(P,Y,ct,rt,St,w,Lt){d(P,Y,ct-.23,rt,.07,.33,.07,kt.ink),d(P,Y,ct-.36,rt,.34,.04,.22,kt.ink),d(P,Y,ct,rt,St,.49,.1,kt.ink),d(P,Y,ct,rt+.058,St-.08,.38,.018,Lt);for(let wt=0;wt<4;wt++)d(P,Y-St*.3,ct+.12-wt*.075,rt+.072,St*(wt%2?.39:.54),.022,.01,13821908);d(P,Y+St*.32,ct-.195,rt+.075,.025,.025,.01,13098649)}function ht(P){const Y=new ji,ct=je[P.kind];Y.position.set(-4.5+P.x*1.5+ct.width*.75,0,-4.5+P.y*1.5+ct.height*.75),B.add(Y),Y.userData.machine=P;const rt=ct.width*1.5-.22,St=ct.height*1.5-.22;d(Y,0,.11,0,rt,.025,St,[10397594,9215897,8953254][P.level-1]);for(const w of[-1,1])d(Y,w*(rt/2-.04),.127,0,.025,.008,St-.08,13553849);if(P.kind==="generator"){const w=1.1+(P.level-1)*.23;d(Y,0,w/2+.15,0,.82,w,.78,13742454),d(Y,0,w+.18,0,.9,.1,.86,kt.cream),d(Y,0,.7,.405,.59,.64,.04,5467495);const Lt=S(Y,0,.82,.45,.15,.03,kt.cream);Lt.rotation.x=Math.PI/2,d(Y,.025,.84,.48,.025,.15,.01,kt.coral);for(let wt=0;wt<3;wt++)d(Y,0,.5-wt*.055,.44,.35,.022,.02,kt.ink);for(let wt=0;wt<P.level;wt++)d(Y,-.26+wt*.26,1.02,.45,.08,.07,.035,10271363);P.level>1&&(S(Y,-.49,.7,0,.08,1.15,kt.teal),S(Y,.49,.7,0,.08,1.15,kt.teal)),P.level===3&&(d(Y,0,1.85,0,.62,.28,.58,kt.teal),M(Y,"POWER",0,1.87,.3,.55,.16,"#4b817b","#eee1c8"))}else if(P.kind==="compute"){const w=1.25+(P.level-1)*.26;for(let Lt=0;Lt<(P.level===3?2:1);Lt++){const wt=P.level===3?(Lt-.5)*1.12:0;d(Y,wt,w/2+.16,0,.92,w,.86,kt.ink),d(Y,wt,w+.19,0,1.03,.09,.96,kt.edge);for(let bt=0;bt<P.level+2;bt++){const Xt=.4+bt*.28;d(Y,wt,Xt,.45,.76,.19,.035,5268840);for(let zt=0;zt<4;zt++)d(Y,wt-.2+zt*.12,Xt,.48,.04,.035,.02,zt===3?kt.coral:10209174);d(Y,wt+.3,Xt,.48,.06,.12,.02,2373693)}const Vt=S(Y,wt,w+.25,0,.22,.04,5860976);for(let bt=0;bt<4;bt++){const Xt=d(Y,wt,w+.28,0,.33,.02,.055,kt.ink);Xt.rotation.y=bt*Math.PI/4}Vt.castShadow=!1}}else if(P.kind==="dispatch"){j(Y,rt,.95),d(Y,0,1.15,-.2,.65,.28,.56,kt.cream),d(Y,0,1.24,.1,.47,.08,.04,kt.ink),d(Y,.03,1.1,.28,.35,.025,.32,15261640),d(Y,0,1.43,-.3,.52,.23,.35,kt.coral);for(let w=0;w<P.level;w++)d(Y,.25,.35+w*.24,-.65,.46,.23,.42,12951673),d(Y,.25,.48+w*.24,-.65,.07,.012,.42,14993053);et(Y,0,.62,kt.coral,P.id),P.level>=2&&at(Y,-.3,1.49,-.46,.42,P.id,9218205),P.level===3&&d(Y,-.38,1.2,.2,.13,.39,.16,kt.teal)}else{j(Y,rt,1);const w=P.level;for(let Lt=0;Lt<w;Lt++)at(Y,(Lt-(w-1)/2)*.64,1.43,-.44,.59,P.id,P.kind==="lab"?7509148:7378305);d(Y,0,1.02,.13,.67,.035,.22,14012346);for(let Lt=0;Lt<7;Lt++)d(Y,-.27+Lt*.09,1.045,.12,.055,.01,.13,10267293);if(d(Y,.49,1.03,.15,.12,.05,.17,kt.cream),A(Y,rt*.38,1,-.12,P.kind==="lab"?kt.coral:kt.cream),y(Y,-rt*.42,1,-.24,3),P.kind==="lab"){d(Y,rt*.35,.42,-.2,.43,.6,.68,kt.ink);for(let Lt=0;Lt<3;Lt++)d(Y,rt*.35,.35+Lt*.13,.15,.29,.035,.02,9681841)}S(Y,0,.35,.65,.055,.5,kt.ink),S(Y,0,.15,.65,.35,.05,kt.ink,.35,5),d(Y,0,.56,.65,.52,.12,.49,kt.teal),d(Y,0,.85,.91,.52,.51,.12,kt.teal),et(Y,0,.63,P.kind==="lab"?7442090:12164705,P.id),P.level===3&&(b(Y,rt*.38,1,-.4,.38),d(Y,rt*.44,1.17,.17,.025,.35,.025,kt.brass),d(Y,rt*.44,1.36,.07,.26,.08,.18,kt.teal))}for(let w=0;w<P.level;w++)d(Y,-.16+w*.16,.15,St*.43,.09,.04,.09,kt.brass)}function q(P){P.traverse(Y=>{Y instanceof Qn&&(Y.geometry.dispose(),Y.material instanceof ul&&Y.material.dispose())}),P.clear()}function ft(P,Y,ct){V=P,D=!!ct,H.visible=D;const rt=P.machines.map(w=>[w.id,w.kind,w.x,w.y,w.level].join(",")).join(";");rt!==R&&(R=rt,q(B),G.length=0,P.machines.forEach(ht),i.shadowMap.needsUpdate=!0),q(L);const St=Js(P);for(const w of P.machines){const Lt=je[w.kind],wt=-4.5+w.x*1.5+Lt.width*.75,Vt=-4.5+w.y*1.5+Lt.height*.75;if(w.id===Y)for(const bt of[-1,1])d(L,wt+bt*(Lt.width*.75-.06),.15,Vt,.045,.035,Lt.height*1.5-.1,14859119),d(L,wt,.15,Vt+bt*(Lt.height*.75-.06),Lt.width*1.5-.1,.035,.045,14859119);w.kind!=="generator"&&w.kind!=="compute"&&(d(L,wt,.19,Vt+Lt.height*.75-.15,.7,.05,.06,kt.ink),w.progress>0&&d(L,wt-(.66-.66*w.progress)/2,.22,Vt+Lt.height*.75-.15,.66*w.progress,.02,.065,St.powered.has(w.id)?11454116:kt.coral))}if(ct){const w=ct.kind?je[ct.kind]:{width:1,height:1};d(L,-4.5+ct.x*1.5+w.width*.75,.15,-4.5+ct.y*1.5+w.height*.75,w.width*1.5-.12,.035,w.height*1.5-.12,ct.valid?11125924:13469043)}}const Q=new E1,Mt=new we,At=new sr(new tt(0,1,0),0),Yt=new tt;function oe(P){const Y=i.domElement.getBoundingClientRect();if(Mt.set((P.clientX-Y.left)/Y.width*2-1,-(P.clientY-Y.top)/Y.height*2+1),Q.setFromCamera(Mt,l),!D){const ct=Q.intersectObjects(B.children,!0)[0];if(ct){let rt=ct.object;for(;rt&&!rt.userData.machine;)rt=rt.parent;if(rt){const St=rt.userData.machine;e(St.x,St.y);return}}}if(Q.ray.intersectPlane(At,Yt)){const ct=Math.floor((Yt.x+4.5)/1.5),rt=Math.floor((Yt.z+4.5)/1.5);ct>=0&&ct<6&&rt>=0&&rt<6&&e(ct,rt)}}i.domElement.addEventListener("pointerdown",oe);function Se(){const P=o.clientWidth,Y=o.clientHeight,ct=P<700?1:Math.max(1.5,Y/720);i.setSize(Math.max(1,Math.round(P/ct)),Math.max(1,Math.round(Y/ct)),!1);const rt=P/Y,St=rt<1?Math.max(20,19/rt):16.8;l.left=-St*rt/2,l.right=St*rt/2,l.top=St/2,l.bottom=-St/2,l.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0}const F=new ResizeObserver(Se);F.observe(o),Se();let mt=0,nt=0;function lt(P){if(mt=requestAnimationFrame(lt),P-nt<33)return;nt=P;const Y=Math.floor(P/90)*90;G.forEach(({group:ct,arms:rt,id:St})=>{const w=V==null?void 0:V.machines.find(wt=>wt.id===St),Lt=!(V!=null&&V.paused)&&(w==null?void 0:w.working)&&Js(V).powered.has(St);ct.rotation.y=Lt?Math.sin(Y*.0015+St)*.035:0,rt.forEach((wt,Vt)=>{wt.rotation.x=Lt?Math.sin(Y*.011+St+Vt*2)*.13:0})}),i.render(s,l)}return mt=requestAnimationFrame(lt),{update:ft,dispose(){cancelAnimationFrame(mt),F.disconnect(),i.domElement.removeEventListener("pointerdown",oe),s.traverse(P=>{P instanceof Qn&&(P.geometry.dispose(),P.material instanceof ul&&P.material.dispose())}),v.forEach(P=>P.dispose()),p.forEach(P=>P.dispose()),i.dispose(),i.domElement.remove()}}}const hc="pixel-startup-club:3d:v1",vx=Object.keys(je),u2={generator:"ϟ",intake:"▤",lab:"▣",dispatch:"▧",compute:"▥"},xx={generator:["Nothing","8 / 13 / 18 power"],intake:["Power","Clean data"],lab:["2 data + power","1 trained model"],dispatch:["1 model + power","1 delivery"],compute:["Power","Faster model training"]};function c2(){const[o,e]=Un.useState(()=>{try{return hv(localStorage.getItem(hc)||"")}catch{return Sx()}}),[i,s]=Un.useState(),[l,f]=Un.useState(),[h,p]=Un.useState(),[v,_]=Un.useState({x:0,y:0}),[x,d]=Un.useState("Welcome aboard. Start with a power cabinet, then a research desk."),[S,M]=Un.useState(!1),[b,A]=Un.useState(!1),y=Un.useRef(null),m=Un.useRef(null),z=Un.useRef(o);z.current=o;const I=Un.useRef(()=>{}),U=j=>{const at=ZM(z.current,j);return z.current=at.state,e(at.state),(at.error||at.message)&&d(at.error||at.message),!at.error},H=(j,at)=>{if(_({x:j,y:at}),l)U({type:"place",kind:l,x:j,y:at})&&(f(void 0),s(z.current.nextId-1));else if(h)U({type:"move",id:h,x:j,y:at})&&(p(void 0),d("A fresh perspective. Desk moved."));else{const ht=z.current.machines.find(q=>j>=q.x&&j<q.x+je[q.kind].width&&at>=q.y&&at<q.y+je[q.kind].height);s(ht==null?void 0:ht.id)}};I.current=H,Un.useEffect(()=>{if(y.current){try{m.current=l2(y.current,(j,at)=>I.current(j,at))}catch{d("WebGL could not start. Try a browser with hardware acceleration enabled.")}return()=>{var j;return(j=m.current)==null?void 0:j.dispose()}}},[]);const B=o.machines.find(j=>j.id===h),L=l||(B==null?void 0:B.kind);Un.useEffect(()=>{var j;(j=m.current)==null||j.update(o,i,L?{...v,kind:L,valid:!vc(o,L,v.x,v.y,h)}:void 0)},[o,i,v,L,h]),Un.useEffect(()=>{const j=setInterval(()=>e(at=>jM(at,.25*at.speed)),250);return()=>clearInterval(j)},[]),Un.useEffect(()=>{const j=setInterval(()=>{try{localStorage.setItem(hc,fv(z.current))}catch{}},3e3);return()=>clearInterval(j)},[]),Un.useEffect(()=>{const j=at=>{var ht,q;at.target.matches("input,select")||at.target.matches("button")&&(at.key===" "||at.key==="Enter"&&!L)||((at.key==="Escape"||at.key.startsWith("Arrow")||"12345".includes(at.key)&&at.key.length===1)&&((q=(ht=at.target).blur)==null||q.call(ht)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," "].includes(at.key)&&at.preventDefault(),at.key==="Escape"&&(f(void 0),p(void 0),s(void 0),M(!1),A(!1)),"12345".includes(at.key)&&at.key.length===1&&(f(vx[Number(at.key)-1]),p(void 0),s(void 0)),at.key===" "&&U({type:"pause"}),at.key==="Enter"&&I.current(v.x,v.y),at.key.startsWith("Arrow")&&_(ft=>({x:Math.max(0,Math.min(5,ft.x+(at.key==="ArrowRight"?1:at.key==="ArrowLeft"?-1:0))),y:Math.max(0,Math.min(5,ft.y+(at.key==="ArrowDown"?1:at.key==="ArrowUp"?-1:0)))})))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)});const V=Js(o),R=o.machines.find(j=>j.id===i),D=o.offers.find(j=>j.id===o.activeContract),G=()=>{try{localStorage.setItem(hc,fv(o)),d("Office saved on this browser.")}catch{d("Browser storage is unavailable. Please allow local storage.")}},et=()=>{try{e(hv(localStorage.getItem(hc)||"")),s(void 0),f(void 0),p(void 0),d("Your saved office is back.")}catch{d("No valid saved office found.")}};return Et.jsxs("main",{children:[Et.jsxs("header",{children:[Et.jsxs("div",{className:"brand",children:[Et.jsxs("span",{className:"logo",children:["p",Et.jsx("span",{children:"sc"})]}),Et.jsxs("div",{children:[Et.jsx("h1",{children:"Pixel Startup Club"}),Et.jsx("p",{children:"THE CREATIVE STUDIO · 3D"})]})]}),Et.jsxs("div",{className:"stats",children:[Et.jsxs("strong",{"aria-label":"Cash",children:["$ ",o.credits.toLocaleString()]}),Et.jsxs("span",{title:"Power demand / supply",className:V.demand>V.supply?"warning":"",children:["ϟ ",V.demand,"/",V.supply]}),Et.jsxs("span",{children:["★ ",o.reputation]})]}),Et.jsxs("div",{className:"time",children:[Et.jsx("button",{"aria-label":o.paused?"Resume":"Pause",onClick:()=>U({type:"pause"}),children:o.paused?"▶":"Ⅱ"}),Et.jsxs("button",{onClick:()=>U({type:"speed",speed:o.speed===1?2:o.speed===2?4:1}),children:[o.speed,"×"]}),Et.jsx("button",{"aria-label":"Help",onClick:()=>A(!b),children:"?"})]})]}),Et.jsxs("section",{className:"stage",children:[Et.jsx("div",{ref:y,className:"world","aria-label":"Interactive 3D office. Choose a station below, then click an empty floor tile."}),Et.jsxs("div",{className:"caption",children:[Et.jsx("span",{className:"eyebrow",children:"SMALL TEAM. BIG IDEAS."}),Et.jsxs("h2",{children:["Good coffee.",Et.jsx("br",{}),"Better ideas."]}),Et.jsx("p",{children:o.machines.length===0?"Your first company starts with an empty room.":o.paused?"Coffee break. The office is paused.":`${o.machines.length} stations · ${o.completed} happy clients`})]}),Et.jsxs("div",{className:"inventory",children:[Et.jsxs("span",{children:["▤ ",Et.jsx("b",{children:o.data})," data"]}),Et.jsxs("span",{children:["▣ ",Et.jsx("b",{children:o.models})," models"]}),Et.jsxs("span",{children:["▧ ",Et.jsx("b",{children:o.packages})," deliveries"]})]}),Et.jsxs("aside",{className:"contract",children:[Et.jsxs("div",{className:"eyebrow",children:["ON THE NOTICEBOARD ",Et.jsx("button",{"aria-label":"Choose contract",onClick:()=>M(!S),children:"↗"})]}),Et.jsx("h3",{children:D.name}),Et.jsxs("p",{children:[D.client," · $",D.reward," · ★ ",D.reputation]}),Et.jsx("div",{className:"progress",children:Et.jsx("i",{style:{width:`${Math.min(100,o.packages/D.packages*100)}%`}})}),Et.jsxs("div",{className:"contract-bottom",children:[Et.jsxs("span",{children:[Math.min(o.packages,D.packages)," / ",D.packages," deliveries"]}),Et.jsx("button",{disabled:o.packages<D.packages,onClick:()=>U({type:"deliver"}),children:"Deliver →"})]})]}),L&&Et.jsxs("div",{className:"placing",children:[Et.jsxs("strong",{children:[h?"Move":"Place"," ",je[L].name]}),Et.jsxs("span",{children:["Click floor · or arrows + Enter · tile ",v.x+1,",",v.y+1]}),Et.jsx("button",{onClick:()=>{f(void 0),p(void 0)},children:"Cancel"})]}),R&&!L&&Et.jsxs("aside",{className:"details",children:[Et.jsx("button",{className:"close","aria-label":"Close details",onClick:()=>s(void 0),children:"×"}),Et.jsxs("div",{className:"eyebrow",children:[["THE STARTER","THE PROFESSIONAL","THE DREAM SETUP"][R.level-1]," · LEVEL ",R.level,"/3"]}),Et.jsx("h3",{children:je[R.kind].name}),Et.jsxs("p",{className:"status",children:["● ",WM(o,R)]}),Et.jsxs("dl",{children:[Et.jsxs("div",{children:[Et.jsx("dt",{children:"Input"}),Et.jsx("dd",{children:xx[R.kind][0]})]}),Et.jsxs("div",{children:[Et.jsx("dt",{children:"Output"}),Et.jsx("dd",{children:R.kind==="generator"?`${8+(R.level-1)*5} power`:R.kind==="compute"?`+${R.level*25}% lab speed`:xx[R.kind][1]})]}),Et.jsxs("div",{children:[Et.jsx("dt",{children:"Power / cycle"}),Et.jsx("dd",{children:R.kind==="generator"?"Supplies the office":`${je[R.kind].power+R.level-1} power${je[R.kind].seconds?` · ${Mx(o,R).toFixed(1)}s`:""}`})]})]}),R.level<3?Et.jsxs(Et.Fragment,{children:[Et.jsxs("p",{className:"benefit",children:["Next: ",R.kind==="generator"?"+5 power capacity":R.kind==="compute"?"+25% lab speed · +1 power use":"faster output · +1 power use"," + a nicer setup."]}),Et.jsxs("button",{className:"primary",onClick:()=>U({type:"upgrade",id:R.id}),children:["Upgrade · $",yx(R)]})]}):Et.jsx("p",{className:"benefit",children:"Top shelf. Maximum level reached."}),Et.jsxs("div",{className:"actions",children:[Et.jsx("button",{onClick:()=>{p(R.id),_({x:R.x,y:R.y})},children:"Move"}),Et.jsx("button",{onClick:()=>U({type:"toggle",id:R.id}),children:R.paused?"Start":"Pause"}),Et.jsxs("button",{onClick:()=>{U({type:"sell",id:R.id}),s(void 0),d(`Sold for $${R.invested}. Full refund, no regrets.`)},children:["Sell $",R.invested]})]})]}),S&&Et.jsxs("aside",{className:"board",children:[Et.jsx("button",{className:"close","aria-label":"Close contracts",onClick:()=>M(!1),children:"×"}),Et.jsx("h3",{children:"Odd jobs. Good money."}),o.offers.map(j=>Et.jsxs("button",{className:j.id===o.activeContract?"chosen":"",onClick:()=>{U({type:"contract",id:j.id}),M(!1)},children:[Et.jsx("strong",{children:j.name}),Et.jsxs("span",{children:[j.client," · ",j.packages," deliveries · $",j.reward]})]},j.id))]}),b&&Et.jsxs("aside",{className:"help",children:[Et.jsx("button",{className:"close","aria-label":"Close help",onClick:()=>A(!1),children:"×"}),Et.jsx("h3",{children:"Your very small startup guide"}),Et.jsxs("p",{children:["Build ",Et.jsx("b",{children:"Power → Research → Model → Shipping"})," to make deliveries. Compute speeds up all model studios. Put research beside a studio for a 15% speed bonus."]}),Et.jsx("p",{children:"Click a station to upgrade, move, pause or sell it. Three levels change its appearance and performance. Power goes to stations in build order."}),Et.jsxs("p",{children:[Et.jsx("b",{children:"Keys 1–5:"})," choose station. ",Et.jsx("b",{children:"Arrows + Enter:"})," place. ",Et.jsx("b",{children:"Space:"})," pause. ",Et.jsx("b",{children:"Esc:"})," cancel. Your office autosaves every 3 seconds."]}),Et.jsx("p",{children:"All work is simulated. Live AI is off, and this prototype makes no AI requests."})]})]}),Et.jsxs("footer",{children:[Et.jsx("div",{className:"notice",role:"status",children:x}),Et.jsx("nav",{"aria-label":"Build stations",children:vx.map((j,at)=>Et.jsxs("button",{className:`station ${l===j?"active":""}`,onClick:()=>{f(l===j?void 0:j),s(void 0),p(void 0),M(!1)},children:[Et.jsx("span",{className:`station-icon ${j}`,children:u2[j]}),Et.jsxs("span",{children:[Et.jsxs("small",{children:[at+1," · ",je[j].short]}),Et.jsx("strong",{children:je[j].name}),Et.jsxs("em",{children:["$",je[j].cost]})]})]},j))}),Et.jsxs("div",{className:"bottom",children:[Et.jsxs("span",{children:["LOCAL SIMULATION ",Et.jsx("i",{})," AI OFF"]}),Et.jsxs("div",{children:[Et.jsx("button",{onClick:G,children:"Save"}),Et.jsx("button",{onClick:et,children:"Load"}),Et.jsx("span",{className:"keyboard",children:"1–5 build · space pause · esc cancel"})]})]})]})]})}qM.createRoot(document.getElementById("root")).render(Et.jsx(c2,{}));
