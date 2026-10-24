(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var nh={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function HM(){if(iv)return tl;iv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return tl.Fragment=e,tl.jsx=i,tl.jsxs=i,tl}var av;function GM(){return av||(av=1,nh.exports=HM()),nh.exports}var Et=GM(),ih={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function VM(){if(rv)return de;rv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),p=Symbol.for("react.view_transition"),y=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function D(z,gt,it){this.props=z,this.context=gt,this.refs=x,this.updater=it||A}D.prototype.isReactComponent={},D.prototype.setState=function(z,gt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,gt,"setState")},D.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function P(){}P.prototype=D.prototype;function U(z,gt,it){this.props=z,this.context=gt,this.refs=x,this.updater=it||A}var G=U.prototype=new P;G.constructor=U,M(G,D.prototype),G.isPureReactComponent=!0;var B=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function w(z,gt,it){var ot=it.ref;return{$$typeof:o,type:z,key:gt,ref:ot!==void 0?ot:null,props:it}}function H(z,gt){return w(z.type,gt,z.props)}function j(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function dt(z){var gt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(it){return gt[it]})}var _t=/\/+/g;function et(z,gt){return typeof z=="object"&&z!==null&&z.key!=null?dt(""+z.key):gt.toString(36)}function q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(gt){z.status==="pending"&&(z.status="fulfilled",z.value=gt)},function(gt){z.status==="pending"&&(z.status="rejected",z.reason=gt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function lt(z,gt,it,ot,wt){var Ht=typeof z;(Ht==="undefined"||Ht==="boolean")&&(z=null);var Ot=!1;if(z===null)Ot=!0;else switch(Ht){case"bigint":case"string":case"number":Ot=!0;break;case"object":switch(z.$$typeof){case o:case e:Ot=!0;break;case S:return Ot=z._init,lt(Ot(z._payload),gt,it,ot,wt)}}if(Ot)return wt=wt(z),Ot=ot===""?"."+et(z,0):ot,B(wt)?(it="",Ot!=null&&(it=Ot.replace(_t,"$&/")+"/"),lt(wt,gt,it,"",function(I){return I})):wt!=null&&(j(wt)&&(wt=H(wt,it+(wt.key==null||z&&z.key===wt.key?"":(""+wt.key).replace(_t,"$&/")+"/")+Ot)),gt.push(wt)),1;Ot=0;var Dt=ot===""?".":ot+":";if(B(z))for(var Kt=0;Kt<z.length;Kt++)ot=z[Kt],Ht=Dt+et(ot,Kt),Ot+=lt(ot,gt,it,Ht,wt);else if(Kt=b(z),typeof Kt=="function")for(z=Kt.call(z),Kt=0;!(ot=z.next()).done;)ot=ot.value,Ht=Dt+et(ot,Kt++),Ot+=lt(ot,gt,it,Ht,wt);else if(Ht==="object"){if(typeof z.then=="function")return lt(q(z),gt,it,ot,wt);throw gt=String(z),Error("Objects are not valid as a React child (found: "+(gt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":gt)+"). If you meant to render a collection of children, use an array instead.")}return Ot}function J(z,gt,it){if(z==null)return z;var ot=[],wt=0;return lt(z,ot,"","",function(Ht){return gt.call(it,Ht,wt++)}),ot}function At(z){if(z._status===-1){var gt=z._result,it=gt();it.then(function(ot){(z._status===0||z._status===-1)&&(z._status=1,z._result=ot,it.status===void 0&&(it.status="fulfilled",it.value=ot))},function(ot){(z._status===0||z._status===-1)&&(z._status=2,z._result=ot,it.status===void 0&&(it.status="rejected",it.reason=ot))}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var Ct=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var gt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(gt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ft(z){var gt=F.T,it={};it.types=gt!==null?gt.types:null,F.T=it;try{var ot=z(),wt=F.S;wt!==null&&wt(it,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(O,Ct)}catch(Ht){Ct(Ht)}finally{gt!==null&&it.types!==null&&(gt.types=it.types),F.T=gt}}function bt(z){var gt=F.T;if(gt!==null){var it=gt.types;it===null?gt.types=[z]:it.indexOf(z)===-1&&it.push(z)}else ft(bt.bind(null,z))}var fe={map:J,forEach:function(z,gt,it){J(z,function(){gt.apply(this,arguments)},it)},count:function(z){var gt=0;return J(z,function(){gt++}),gt},toArray:function(z){return J(z,function(gt){return gt})||[]},only:function(z){if(!j(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return de.Activity=m,de.Children=fe,de.Component=D,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=v,de.ViewTransition=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,de.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},de.addTransitionType=bt,de.cache=function(z){return function(){return z.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(z,gt,it){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ot=M({},z.props),wt=z.key;if(gt!=null)for(Ht in gt.key!==void 0&&(wt=""+gt.key),gt)!C.call(gt,Ht)||Ht==="key"||Ht==="__self"||Ht==="__source"||Ht==="ref"&&gt.ref===void 0||(ot[Ht]=gt[Ht]);var Ht=arguments.length-2;if(Ht===1)ot.children=it;else if(1<Ht){for(var Ot=Array(Ht),Dt=0;Dt<Ht;Dt++)Ot[Dt]=arguments[Dt+2];ot.children=Ot}return w(z.type,wt,ot)},de.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},de.createElement=function(z,gt,it){var ot,wt={},Ht=null;if(gt!=null)for(ot in gt.key!==void 0&&(Ht=""+gt.key),gt)C.call(gt,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(wt[ot]=gt[ot]);var Ot=arguments.length-2;if(Ot===1)wt.children=it;else if(1<Ot){for(var Dt=Array(Ot),Kt=0;Kt<Ot;Kt++)Dt[Kt]=arguments[Kt+2];wt.children=Dt}if(z&&z.defaultProps)for(ot in Ot=z.defaultProps,Ot)wt[ot]===void 0&&(wt[ot]=Ot[ot]);return w(z,Ht,wt)},de.createRef=function(){return{current:null}},de.forwardRef=function(z){return{$$typeof:h,render:z}},de.isValidElement=j,de.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:At}},de.memo=function(z,gt){return{$$typeof:g,type:z,compare:gt===void 0?null:gt}},de.startTransition=ft,de.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},de.use=function(z){return F.H.use(z)},de.useActionState=function(z,gt,it){return F.H.useActionState(z,gt,it)},de.useCallback=function(z,gt){return F.H.useCallback(z,gt)},de.useContext=function(z){return F.H.useContext(z)},de.useDebugValue=function(){},de.useDeferredValue=function(z,gt){return F.H.useDeferredValue(z,gt)},de.useEffect=function(z,gt){return F.H.useEffect(z,gt)},de.useEffectEvent=function(z){return F.H.useEffectEvent(z)},de.useId=function(){return F.H.useId()},de.useImperativeHandle=function(z,gt,it){return F.H.useImperativeHandle(z,gt,it)},de.useInsertionEffect=function(z,gt){return F.H.useInsertionEffect(z,gt)},de.useLayoutEffect=function(z,gt){return F.H.useLayoutEffect(z,gt)},de.useMemo=function(z,gt){return F.H.useMemo(z,gt)},de.useOptimistic=function(z,gt){return F.H.useOptimistic(z,gt)},de.useReducer=function(z,gt,it){return F.H.useReducer(z,gt,it)},de.useRef=function(z){return F.H.useRef(z)},de.useState=function(z){return F.H.useState(z)},de.useSyncExternalStore=function(z,gt,it){return F.H.useSyncExternalStore(z,gt,it)},de.useTransition=function(){return F.H.useTransition()},de.version="19.3.1",de}var sv;function Lp(){return sv||(sv=1,ih.exports=VM()),ih.exports}var pn=Lp(),ah={exports:{}},el={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function kM(){return ov||(ov=1,(function(o){function e(q,lt){var J=q.length;q.push(lt);t:for(;0<J;){var At=J-1>>>1,Ct=q[At];if(0<l(Ct,lt))q[At]=lt,q[J]=Ct,J=At;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var lt=q[0],J=q.pop();if(J!==lt){q[0]=J;t:for(var At=0,Ct=q.length,ft=Ct>>>1;At<ft;){var bt=2*(At+1)-1,fe=q[bt],z=bt+1,gt=q[z];if(0>l(fe,J))z<Ct&&0>l(gt,fe)?(q[At]=gt,q[z]=J,At=z):(q[At]=fe,q[bt]=J,At=bt);else if(z<Ct&&0>l(gt,J))q[At]=gt,q[z]=J,At=z;else break t}}return lt}function l(q,lt){var J=q.sortIndex-lt.sortIndex;return J!==0?J:q.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var v=[],g=[],S=1,m=null,p=3,y=!1,b=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var lt=i(g);lt!==null;){if(lt.callback===null)s(g);else if(lt.startTime<=q)s(g),lt.sortIndex=lt.expirationTime,e(v,lt);else break;lt=i(g)}}function G(q){if(A=!1,U(q),!b)if(i(v)!==null)b=!0,B||(B=!0,j());else{var lt=i(g);lt!==null&&et(G,lt.startTime-q)}}var B=!1,O=-1,F=5,C=-1;function w(){return M?!0:!(o.unstable_now()-C<F)}function H(){if(M=!1,B){var q=o.unstable_now();C=q;var lt=!0;try{t:{b=!1,A&&(A=!1,D(O),O=-1),y=!0;var J=p;try{e:{for(U(q),m=i(v);m!==null&&!(m.expirationTime>q&&w());){var At=m.callback;if(typeof At=="function"){m.callback=null,p=m.priorityLevel;var Ct=At(m.expirationTime<=q);if(q=o.unstable_now(),typeof Ct=="function"){m.callback=Ct,U(q),lt=!0;break e}m===i(v)&&s(v),U(q)}else s(v);m=i(v)}if(m!==null)lt=!0;else{var ft=i(g);ft!==null&&et(G,ft.startTime-q),lt=!1}}break t}finally{m=null,p=J,y=!1}lt=void 0}}finally{lt?j():B=!1}}}var j;if(typeof P=="function")j=function(){P(H)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,_t=dt.port2;dt.port1.onmessage=H,j=function(){_t.postMessage(null)}}else j=function(){x(H,0)};function et(q,lt){O=x(function(){q(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return p},o.unstable_next=function(q){switch(p){case 1:case 2:case 3:var lt=3;break;default:lt=p}var J=p;p=lt;try{return q()}finally{p=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,lt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=p;p=q;try{return lt()}finally{p=J}},o.unstable_scheduleCallback=function(q,lt,J){var At=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?At+J:At):J=At,q){case 1:var Ct=-1;break;case 2:Ct=250;break;case 5:Ct=1073741823;break;case 4:Ct=1e4;break;default:Ct=5e3}return Ct=J+Ct,q={id:S++,callback:lt,priorityLevel:q,startTime:J,expirationTime:Ct,sortIndex:-1},J>At?(q.sortIndex=J,e(g,q),i(v)===null&&q===i(g)&&(A?(D(O),O=-1):A=!0,et(G,J-At))):(q.sortIndex=Ct,e(v,q),b||y||(b=!0,B||(B=!0,j()))),q},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(q){var lt=p;return function(){var J=p;p=lt;try{return q.apply(this,arguments)}finally{p=J}}}})(sh)),sh}var lv;function XM(){return lv||(lv=1,rh.exports=kM()),rh.exports}var oh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function qM(){if(uv)return Nn;uv=1;var o=Lp();function e(S){var m="https://react.dev/errors/"+S;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+S+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,m,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===d?d:""+y,children:S,containerInfo:m,implementation:p}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,m){if(S==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.browser=function(S){return{$$typeof:c,_reason:S}},Nn.createPortal=function(S,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(S,m,null,p)},Nn.flushSync=function(S){var m=v.T,p=s.p;try{if(v.T=null,s.p=2,S)return S()}finally{v.T=m,s.p=p,s.d.f()}},Nn.preconnect=function(S,m){typeof S=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(S,m))},Nn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Nn.preinit=function(S,m){if(typeof S=="string"&&m&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?s.d.S(S,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:A}):p==="script"&&s.d.X(S,{crossOrigin:y,integrity:b,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(S,m){if(typeof S=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=g(m.as,m.crossOrigin);s.d.M(S,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(S)},Nn.preload=function(S,m){if(typeof S=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin);s.d.L(S,p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(S,m){if(typeof S=="string")if(m){var p=g(m.as,m.crossOrigin);s.d.m(S,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(S)},Nn.requestFormReset=function(S){s.d.r(S)},Nn.unstable_batchedUpdates=function(S,m){return S(m)},Nn.useFormState=function(S,m,p){return v.H.useFormState(S,m,p)},Nn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var cv;function YM(){if(cv)return oh.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=qM(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function WM(){if(fv)return el;fv=1;var o=XM(),e=Lp(),i=YM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return v(u),t;if(f===r)return v(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,r=f;break}if(T===r){_=!0,r=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,r=u;break}if(T===r){_=!0,r=f,a=u;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function p(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=p(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,D=null;function P(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function U(t,n,a){return t===a?(D=t,!1):t===n?(D!==null&&(x=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,F=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),dt=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),et=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),bt=Symbol.for("react.legacy_hidden"),fe=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),gt=Symbol.for("react.recoverable"),it=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=it&&t[it]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Symbol.for("react.client.reference");function Ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===wt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case dt:return"Profiler";case j:return"StrictMode";case lt:return"Suspense";case J:return"SuspenseList";case ft:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case et:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return n=t.displayName||null,n!==null?n:Ht(t.type)||"Memo";case Ct:n=t._payload,t=t._init;try{return Ht(t(n))}catch{}}return null}var Ot=Array.isArray,Dt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Kt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ze=[],k=-1;function W(t){return{current:t}}function ct(t){0>k||(t.current=ze[k],ze[k]=null,k--)}function vt(t,n){k++,ze[k]=t.current,t.current=n}var xt=W(null),rt=W(null),zt=W(null),Yt=W(null);function N(t,n){switch(vt(zt,n),vt(rt,t),vt(xt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?d_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=d_(n),t=h_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ct(xt),vt(xt,t)}function E(){ct(xt),ct(rt),ct(zt)}function Z(t){var n=t.memoizedState;n!==null&&(Os._currentValue=n.memoizedState,vt(Yt,t)),n=xt.current;var a=h_(n,t.type);n!==a&&(vt(rt,t),vt(xt,a))}function mt(t){rt.current===t&&(ct(xt),ct(rt)),Yt.current===t&&(ct(Yt),Os._currentValue=I)}var Rt,St;function Jt(t){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+St}var It=!1;function ne(t,n){if(!t||It)return"";It=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(Gt){var Y=Gt}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(Gt){Y=Gt}Mt=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Mt=!0,new t}finally{Mt&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(Gt){Y=Gt}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(Gt){if(Gt&&Y&&typeof Gt.stack=="string")return[Gt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var L=_.split(`
`),Q=T.split(`
`);for(u=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===L.length||u===Q.length)for(r=L.length-1,u=Q.length-1;1<=r&&0<=u&&L[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(L[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||L[r]!==Q[u]){var ut=`
`+L[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=u);break}}}finally{It=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Jt(a):""}function ae(t,n){switch(t.tag){case 26:case 27:case 5:return Jt(t.type);case 16:return Jt("Lazy");case 13:return t.child!==n&&n!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return ne(t.type,!1);case 11:return ne(t.type.render,!1);case 1:return ne(t.type,!0);case 31:return Jt("Activity");case 30:return Jt("ViewTransition");default:return""}}function Lt(t){try{var n="",a=null;do n+=ae(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Vt=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,ie=o.unstable_cancelCallback,kt=o.unstable_shouldYield,pe=o.unstable_requestPaint,X=o.unstable_now,Pt=o.unstable_getCurrentPriorityLevel,Ft=o.unstable_ImmediatePriority,Qt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,Tt=o.unstable_LowPriority,ee=o.unstable_IdlePriority,he=o.log,qe=o.unstable_setDisableYieldValue,be=null,nn=null;function _n(t){if(typeof he=="function"&&qe(t),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(be,t)}catch{}}var Ln=Math.clz32?Math.clz32:yl,ea=Math.log,uo=Math.LN2;function yl(t){return t>>>=0,t===0?32:31-(ea(t)/uo|0)|0}var hr=256,na=262144,pr=4194304;function di(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=di(r):(_&=T,_!==0?u=di(_):a||(a=T&~t,a!==0&&(u=di(a))))):(T=r&~f,T!==0?u=di(T):_!==0?u=di(_):a||(a=r&~t,a!==0&&(u=di(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ml(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Ln(a),u=1<<r;n|=t[r],a&=~u}return n}function wc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(){var t=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),t}function co(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dc(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,L=t.expirationTimes,Q=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Ln(a),Mt=1<<ut;T[ut]=0,L[ut]=-1;var Y=Q[ut];if(Y!==null)for(Q[ut]=null,ut=0;ut<Y.length;ut++){var st=Y[ut];st!==null&&(st.lane&=-536870913)}a&=~Mt}r!==0&&R(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ln(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function $(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ln(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ht(t,n){var a=n&-n;return a=(a&42)!==0?1:pt(a),(a&(t.suspendedLanes|n))!==0?0:a}function pt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nt(){var t=Kt.p;return t!==0?t:(t=window.event,t===void 0?32:K_(t.type))}function Xt(t,n){var a=Kt.p;try{return Kt.p=t,n()}finally{Kt.p=a}}var jt=Math.random().toString(36).slice(2),Bt="__reactFiber$"+jt,$t="__reactProps$"+jt,le="__reactContainer$"+jt,se="__reactEvents$"+jt,Me="__reactListeners$"+jt,He="__reactHandles$"+jt,$e="__reactResources$"+jt,Ie="__reactMarker$"+jt,Ne="__reactLoad$"+jt;function oe(t){delete t[Bt],delete t[$t],delete t[Me],delete t[He]}function Be(t){var n;if(n=t[Bt])return n;for(var a=t.parentNode;a;){if(n=a[le]||a[Bt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=D_(t);t!==null;){if(a=t[Bt])return a;t=D_(t)}return n}t=a,a=t.parentNode}return null}function Se(t){if(t=t[Bt]||t[le]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function $n(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Le(t){t[Ie]=!0}function Ra(t){t[Ne]=void 0}var Ke=new Set,Bn={};function un(t,n){rn(t,n),rn(t+"Capture",n)}function rn(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},zi={};function rS(t){return Vt.call(zi,t)?!0:Vt.call(Qr,t)?!1:On.test(t)?zi[t]=!0:(Qr[t]=!0,!1)}var Oe=!1;function Jp(){var t=Oe;return Oe=!1,t}function Tl(t,n,a){if(rS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function bl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Uc(t){if(!t._valueTracker){var n=$p(t)?"checked":"value";t._valueTracker=sS(t,n,""+t[n])}}function tm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var oS=/[\n"\\]/g;function hi(t){return t.replace(oS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nc(t,n,a,r,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Lc(t,ti(t.value)):Lc(t,ti(n)):a!=null?Lc(t,ti(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ti(T):t.removeAttribute("name")}function em(t,n,a,r,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Uc(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Uc(t)}function Lc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Jr(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function nm(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function im(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ot(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Uc(t)}function $r(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var lS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||lS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function rm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Oe=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(am(t,u,r),Oe=!0)}else for(var f in n)n.hasOwnProperty(f)&&am(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return cS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Pc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,es=null;function sm(t){var n=Se(t);if(n&&(t=n.stateNode)){var a=t[$t]||null;t:switch(t=n.stateNode,n.type){case"input":if(Nc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[$t]||null;if(!u)throw Error(s(90));Nc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tm(r)}break t;case"textarea":nm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jr(t,!!a.multiple,n,!1)}}}var Ic=!1;function om(t,n,a){if(Ic)return t(n,a);Ic=!0;try{var r=t(n);return r}finally{if(Ic=!1,(ts!==null||es!==null)&&(Au(),ts&&(n=ts,t=es,es=ts=null,sm(n),t)))for(n=0;n<t.length;n++)sm(t[n])}}function fo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[$t]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(aa)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Bc=!1}var Ca=null,Fc=null,Rl=null;function lm(){if(Rl)return Rl;var t,n=Fc,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return Rl=u.slice(t,1<r?1-r:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function um(){return!1}function Fn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?wl:um,this.isPropagationStopped=um,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Fn(wa),po=O({},wa,{view:0,detail:0}),fS=Fn(po),Hc,Gc,mo,Ul=O({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Hc=t.screenX-mo.screenX,Gc=t.screenY-mo.screenY):Gc=Hc=0,mo=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),cm=Fn(Ul),dS=O({},Ul,{dataTransfer:0}),hS=Fn(dS),pS=O({},po,{relatedTarget:0}),Vc=Fn(pS),mS=O({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=Fn(mS),_S=O({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vS=Fn(_S),xS=O({},wa,{data:0}),fm=Fn(xS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MS[t])?!!n[t]:!1}function kc(){return ES}var TS=O({},po,{key:function(t){if(t.key){var n=SS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=Fn(TS),AS=O({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Fn(AS),RS=O({},wa,{submitter:0}),CS=Fn(RS),wS=O({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),DS=Fn(wS),US=O({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=Fn(US),LS=O({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Fn(LS),PS=O({},wa,{newState:0,oldState:0,source:0}),zS=Fn(PS),IS=[9,13,27,32],Xc=aa&&"CompositionEvent"in window,go=null;aa&&"documentMode"in document&&(go=document.documentMode);var BS=aa&&"TextEvent"in window&&!go,hm=aa&&(!Xc||go&&8<go&&11>=go),pm=" ",mm=!1;function gm(t,n){switch(t){case"keyup":return IS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function FS(t,n){switch(t){case"compositionend":return _m(n);case"keypress":return n.which!==32?null:(mm=!0,pm);case"textInput":return t=n.data,t===pm&&mm?null:t;default:return null}}function HS(t,n){if(ns)return t==="compositionend"||!Xc&&gm(t,n)?(t=lm(),Rl=Fc=Ca=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hm&&n.locale!=="ko"?null:n.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!GS[t.type]:n==="textarea"}function xm(t,n,a,r){ts?es?es.push(r):es=[r]:ts=r,n=Nu(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var _o=null,vo=null;function VS(t){s_(t,0)}function Nl(t){var n=vn(t);if(tm(n))return t}function Sm(t,n){if(t==="change")return n}var ym=!1;if(aa){var qc;if(aa){var Yc="oninput"in document;if(!Yc){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Yc=typeof Mm.oninput=="function"}qc=Yc}else qc=!1;ym=qc&&(!document.documentMode||9<document.documentMode)}function Em(){_o&&(_o.detachEvent("onpropertychange",Tm),vo=_o=null)}function Tm(t){if(t.propertyName==="value"&&Nl(vo)){var n=[];xm(n,vo,t,zc(t)),om(VS,n)}}function kS(t,n,a){t==="focusin"?(Em(),_o=n,vo=a,_o.attachEvent("onpropertychange",Tm)):t==="focusout"&&Em()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(vo)}function qS(t,n){if(t==="click")return Nl(n)}function YS(t,n){if(t==="input"||t==="change")return Nl(n)}function WS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:WS;function xo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Vt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,n){var a=bm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bm(a)}}function Rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wc(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var jS=aa&&"documentMode"in document&&11>=document.documentMode,is=null,Zc=null,So=null,Kc=!1;function wm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||is==null||is!==Wc(r)||(r=is,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&xo(So,r)||(So=r,r=Nu(Zc,"onSelect"),0<r.length&&(n=new Dl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=is)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var as={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Qc={},Dm={};aa&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function vr(t){if(Qc[t])return Qc[t];if(!as[t])return t;var n=as[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dm)return Qc[t]=n[a];return t}var Um=vr("animationend"),Nm=vr("animationiteration"),Lm=vr("animationstart"),ZS=vr("transitionrun"),KS=vr("transitionstart"),QS=vr("transitioncancel"),Om=vr("transitionend"),Pm=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function bi(t,n){Pm.set(t,n),un(n,[t])}var JS=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=JS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function zm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ts;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function sa(t,n){return t=zm(t),n=zm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],rs=0,$c=0;function Ol(){for(var t=rs,n=$c=rs=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Im(a,u,f)}}function Pl(t,n,a,r){pi[rs++]=t,pi[rs++]=n,pi[rs++]=a,pi[rs++]=r,$c|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function tf(t,n,a,r){return Pl(t,n,a,r),zl(t)}function xr(t,n){return Pl(t,null,null,n),zl(t)}function Im(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ln(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function zl(t){if(50<Vo)throw Vo=0,bu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function $S(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new $S(t,n,a,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Il(t,n,a,r,u,f){var _=0;if(r=t,typeof r=="function")ef(r)&&(_=1);else if(typeof r=="string")_=RM(t,a,xt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case ft:return t=qn(31,a,n,u),t.elementType=ft,t.lanes=f,t;case H:return Sr(a.children,u,f,n);case j:_=8,u|=24;break;case dt:return t=qn(12,a,n,u|2),t.elementType=dt,t.lanes=f,t;case lt:return t=qn(13,a,n,u),t.elementType=lt,t.lanes=f,t;case J:return t=qn(19,a,n,u),t.elementType=J,t.lanes=f,t;case bt:case z:return t=u|32,t=qn(30,a,n,t),t.elementType=z,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:_=10;break t;case _t:_=9;break t;case q:_=11;break t;case At:_=14;break t;case Ct:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Sr(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function nf(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Fm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function af(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hm=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Lt(n)},Hm.set(t,n),n)}return{value:t,source:n,stack:Lt(n)}}var os=[],ls=0,Bl=null,yo=0,gi=[],_i=0,Da=null,Bi=1,Fi="";function la(t,n){os[ls++]=yo,os[ls++]=Bl,Bl=t,yo=n}function Gm(t,n,a){gi[_i++]=Bi,gi[_i++]=Fi,gi[_i++]=Da,Da=t;var r=Bi;t=Fi;var u=32-Ln(r)-1;r&=~(1<<u),a+=1;var f=32-Ln(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Bi=1<<32-Ln(n)+u|a<<u|r,Fi=f+t}else Bi=1<<f|a<<u|r,Fi=t}function Fl(t){t.return!==null&&(la(t,1),Gm(t,1,0))}function rf(t){for(;t===Bl;)Bl=os[--ls],os[ls]=null,yo=os[--ls],os[ls]=null;for(;t===Da;)Da=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null,Bi=gi[--_i],gi[_i]=null}function Vm(t,n){gi[_i++]=Bi,gi[_i++]=Fi,gi[_i++]=Da,Bi=n.id,Fi=n.overflow,Da=t}var Mn=null,Qe=null,ye=!1,Ua=null,vi=!1,sf=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(mi(n,t)),sf}function km(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Bt]=t,n[$t]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Xo.length;a++)Te(Xo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),em(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),im(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||c_(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Na(t,!0)}function Hl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Mn=Mn.return}}function us(t){if(t!==Mn)return!1;if(!ye)return Hl(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zd(t.type,t.memoizedProps)),a=!a),a&&Qe&&Na(t),Hl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=w_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=w_(t)}else n===27?(n=Qe,ja(t.type)?(t=qd,qd=null,Qe=t):Qe=n):Qe=Mn?Si(t.stateNode.nextSibling):null;return!0}function yr(){Qe=Mn=null,ye=!1}function of(){var t=Ua;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Ua=null),t}function Mo(t){Ua===null?Ua=[t]:Ua.push(t)}var lf=W(null),Mr=null,ua=null;function La(t,n,a){vt(lf,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=lf.current,ct(lf)}function Gl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function uf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var L=0;L<n.length;L++)if(T.context===n[L]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Gl(f.return,a,t),r||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Gl(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),Gl(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Er(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=u.type;ei(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===Yt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}u=u.return}return t!==null&&uf(n,t,a,r),n.flags|=262144,t!==null}function Vl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tr(t){Mr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Xm(Mr,t)}function kl(t,n){return Mr===null&&Tr(t),Xm(t,n)}function Xm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var ty=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ey=o.unstable_scheduleCallback,ny=o.unstable_NormalPriority,cn={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new ty,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&ey(ny,function(){t.controller.abort()})}function qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var To=null;function iy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var bo=null,ff=0,br=0,cs=null;function ay(t,n){if(bo===null){var a=bo=[];ff=0,br=Rd(),cs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ff++,n.then(Ym,Ym),n}function Ym(){if(--ff===0&&(To=null,bo!==null)){cs!==null&&(cs.status="fulfilled");var t=bo;bo=null,br=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ry(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Wm=Dt.S;Dt.S=function(t,n){if(Fg=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ay(t,n),To!==null)for(var a=Cs;a!==null;)qm(a,To),a=a.next;if(a=t.types,a!==null){for(var r=Cs;r!==null;)qm(r,a),r=r.next;if(br!==0){r=To,r===null&&(r=To=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}Wm!==null&&Wm(t,n)};var Ar=W(null);function df(){var t=Ar.current;return t!==null?t:Ze.pooledCache}function Xl(t,n){n===null?vt(Ar,Ar.current):vt(Ar,n.pool)}function jm(){var t=df();return t===null?null:{parent:cn._currentValue,pool:t}}var fs=Error(s(460)),hf=Error(s(474)),ql=Error(s(542)),Yl={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t}throw Cr=n,fs}}function Rr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cr=a,fs):a}}var Cr=null;function Qm(){if(Cr===null)throw Error(s(459));var t=Cr;return Cr=null,t}function Jm(t){if(t===fs||t===ql)throw Error(s(483))}var ds=null,Ao=0;function Wl(t){var n=Ao;return Ao+=1,ds===null&&(ds=[]),Km(ds,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $m(t){function n(K,V){if(t){var at=K.deletions;at===null?(K.deletions=[V],K.flags|=16):at.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function r(K){for(var V=new Map;K!==null;)K.key===null?V.set(K.index,K):V.set(K.key,K),K=K.sibling;return V}function u(K,V){return K=oa(K,V),K.index=0,K.sibling=null,K}function f(K,V,at){return K.index=at,t?(at=K.alternate,at!==null?(at=at.index,at<V?(K.flags|=2,V):at):(K.flags|=134217730,V)):(K.flags|=1048576,V)}function _(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function T(K,V,at,yt){return V===null||V.tag!==6?(V=nf(at,K.mode,yt),V.return=K,V):(V=u(V,at),V.return=K,V)}function L(K,V,at,yt){var Zt=at.type;return Zt===H?(K=ut(K,V,at.props.children,yt,at.key),Oa(K,at),K):V!==null&&(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===Ct&&Rr(Zt)===V.type)?(V=u(V,at.props),Oa(V,at),V.return=K,V):(V=Il(at.type,at.key,at.props,null,K.mode,yt),Oa(V,at),V.return=K,V)}function Q(K,V,at,yt){return V===null||V.tag!==4||V.stateNode.containerInfo!==at.containerInfo||V.stateNode.implementation!==at.implementation?(V=af(at,K.mode,yt),V.return=K,V):(V=u(V,at.children||[]),V.return=K,V)}function ut(K,V,at,yt,Zt){return V===null||V.tag!==7?(V=Sr(at,K.mode,yt,Zt),V.return=K,V):(V=u(V,at),V.return=K,V)}function Mt(K,V,at){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=nf(""+V,K.mode,at),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return at=Il(V.type,V.key,V.props,null,K.mode,at),Oa(at,V),at.return=K,at;case w:return V=af(V,K.mode,at),V.return=K,V;case Ct:return V=Rr(V),Mt(K,V,at)}if(Ot(V)||ot(V))return V=Sr(V,K.mode,at,null),V.return=K,V;if(typeof V.then=="function")return Mt(K,Wl(V),at);if(V.$$typeof===et)return Mt(K,kl(K,V),at);jl(K,V)}return null}function Y(K,V,at,yt){var Zt=V!==null?V.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Zt!==null?null:T(K,V,""+at,yt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case C:return at.key===Zt?L(K,V,at,yt):null;case w:return at.key===Zt?Q(K,V,at,yt):null;case Ct:return at=Rr(at),Y(K,V,at,yt)}if(Ot(at)||ot(at))return Zt!==null?null:ut(K,V,at,yt,null);if(typeof at.then=="function")return Y(K,V,Wl(at),yt);if(at.$$typeof===et)return Y(K,V,kl(K,at),yt);jl(K,at)}return null}function st(K,V,at,yt,Zt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return K=K.get(at)||null,T(V,K,""+yt,Zt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case C:return K=K.get(yt.key===null?at:yt.key)||null,L(V,K,yt,Zt);case w:return K=K.get(yt.key===null?at:yt.key)||null,Q(V,K,yt,Zt);case Ct:return yt=Rr(yt),st(K,V,at,yt,Zt)}if(Ot(yt)||ot(yt))return K=K.get(at)||null,ut(V,K,yt,Zt,null);if(typeof yt.then=="function")return st(K,V,at,Wl(yt),Zt);if(yt.$$typeof===et)return st(K,V,at,kl(V,yt),Zt);jl(V,yt)}return null}function Gt(K,V,at,yt){for(var Zt=null,Re=null,re=V,ce=V=0,hn=null;re!==null&&ce<at.length;ce++){re.index>ce?(hn=re,re=null):hn=re.sibling;var De=Y(K,re,at[ce],yt);if(De===null){re===null&&(re=hn);break}t&&re&&De.alternate===null&&n(K,re),V=f(De,V,ce),Re===null?Zt=De:Re.sibling=De,Re=De,re=hn}if(ce===at.length)return a(K,re),ye&&la(K,ce),Zt;if(re===null){for(;ce<at.length;ce++)re=Mt(K,at[ce],yt),re!==null&&(V=f(re,V,ce),Re===null?Zt=re:Re.sibling=re,Re=re);return ye&&la(K,ce),Zt}for(re=r(re);ce<at.length;ce++)hn=st(re,K,ce,at[ce],yt),hn!==null&&(t&&(De=hn.alternate,De!==null&&re.delete(De.key===null?ce:De.key)),V=f(hn,V,ce),Re===null?Zt=hn:Re.sibling=hn,Re=hn);return t&&re.forEach(function($a){return n(K,$a)}),ye&&la(K,ce),Zt}function te(K,V,at,yt){if(at==null)throw Error(s(151));for(var Zt=null,Re=null,re=V,ce=V=0,hn=null,De=at.next();re!==null&&!De.done;ce++,De=at.next()){re.index>ce?(hn=re,re=null):hn=re.sibling;var $a=Y(K,re,De.value,yt);if($a===null){re===null&&(re=hn);break}t&&re&&$a.alternate===null&&n(K,re),V=f($a,V,ce),Re===null?Zt=$a:Re.sibling=$a,Re=$a,re=hn}if(De.done)return a(K,re),ye&&la(K,ce),Zt;if(re===null){for(;!De.done;ce++,De=at.next())De=Mt(K,De.value,yt),De!==null&&(V=f(De,V,ce),Re===null?Zt=De:Re.sibling=De,Re=De);return ye&&la(K,ce),Zt}for(re=r(re);!De.done;ce++,De=at.next())De=st(re,K,ce,De.value,yt),De!==null&&(t&&(hn=De.alternate,hn!==null&&re.delete(hn.key===null?ce:hn.key)),V=f(De,V,ce),Re===null?Zt=De:Re.sibling=De,Re=De);return t&&re.forEach(function(FM){return n(K,FM)}),ye&&la(K,ce),Zt}function ge(K,V,at,yt){if(typeof at=="object"&&at!==null&&at.type===H&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case C:t:{for(var Zt=at.key;V!==null;){if(V.key===Zt){if(Zt=at.type,Zt===H){if(V.tag===7){a(K,V.sibling),yt=u(V,at.props.children),Oa(yt,at),yt.return=K,K=yt;break t}}else if(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===Ct&&Rr(Zt)===V.type){a(K,V.sibling),yt=u(V,at.props),Oa(yt,at),yt.return=K,K=yt;break t}a(K,V);break}else n(K,V);V=V.sibling}at.type===H?(yt=Sr(at.props.children,K.mode,yt,at.key),Oa(yt,at),yt.return=K,K=yt):(yt=Il(at.type,at.key,at.props,null,K.mode,yt),Oa(yt,at),yt.return=K,K=yt)}return _(K);case w:t:{for(Zt=at.key;V!==null;){if(V.key===Zt)if(V.tag===4&&V.stateNode.containerInfo===at.containerInfo&&V.stateNode.implementation===at.implementation){a(K,V.sibling),yt=u(V,at.children||[]),yt.return=K,K=yt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}yt=af(at,K.mode,yt),yt.return=K,K=yt}return _(K);case Ct:return at=Rr(at),ge(K,V,at,yt)}if(Ot(at))return Gt(K,V,at,yt);if(ot(at)){if(Zt=ot(at),typeof Zt!="function")throw Error(s(150));return at=Zt.call(at),te(K,V,at,yt)}if(typeof at.then=="function")return ge(K,V,Wl(at),yt);if(at.$$typeof===et)return ge(K,V,kl(K,at),yt);jl(K,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,V!==null&&V.tag===6?(a(K,V.sibling),yt=u(V,at),yt.return=K,K=yt):(a(K,V),yt=nf(at,K.mode,yt),yt.return=K,K=yt),_(K)):a(K,V)}return function(K,V,at,yt){try{Ao=0;var Zt=ge(K,V,at,yt);return ds=null,Zt}catch(re){if(re===fs||re===ql)throw re;var Re=qn(29,re,null,K.mode);return Re.lanes=yt,Re.return=K,Re}finally{}}}var wr=$m(!0),t0=$m(!1),Pa=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=zl(t),Im(t,null,a),n}return Pl(t,r,n,a),zl(t)}function Ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,$(t,a)}}function gf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _f=!1;function Co(){if(_f){var t=cs;if(t!==null)throw t}}function wo(t,n,a,r){_f=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var L=T,Q=L.next;L.next=null,_===null?f=Q:_.next=Q,_=L;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==_&&(T===null?ut.firstBaseUpdate=Q:T.next=Q,ut.lastBaseUpdate=L))}if(f!==null){var Mt=u.baseState;_=0,ut=Q=L=null,T=f;do{var Y=T.lane&-536870913,st=Y!==T.lane;if(st?(Ae&Y)===Y:(r&Y)===Y){Y!==0&&Y===br&&(_f=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,te=T;Y=n;var ge=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){Mt=Gt.call(ge,Mt,Y);break t}Mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,Y=typeof Gt=="function"?Gt.call(ge,Mt,Y):Gt,Y==null)break t;Mt=O({},Mt,Y);break t;case 2:Pa=!0}}Y=T.callback,Y!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[Y]:st.push(Y))}else st={lane:Y,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(Q=ut=st,L=Mt):ut=ut.next=st,_|=Y;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;st=T,T=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ut===null&&(L=Mt),u.baseState=L,u.firstBaseUpdate=Q,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),Xa|=_,t.lanes=_,t.memoizedState=Mt}}function e0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function n0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)e0(a[t],n)}var Ba=W(null),Zl=W(0);function i0(t,n){t=ma,vt(Zl,t),vt(Ba,n),ma=t|n.baseLanes}function vf(){vt(Zl,ma),vt(Ba,Ba.current)}function xf(){ma=Zl.current,ct(Ba),ct(Zl)}var Cn=W(null),Pn=null;function Fa(t){var n=t.alternate;vt(wn,wn.current&1),vt(Cn,t),Pn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Pn=t)}function Sf(t){vt(wn,wn.current),vt(Cn,t),Pn===null&&(Pn=t)}function a0(t){t.tag===22?(vt(wn,wn.current),vt(Cn,t),Pn===null&&(Pn=t)):Ha()}function Ha(){vt(wn,wn.current),vt(Cn,Cn.current)}function ni(t){ct(Cn),Pn===t&&(Pn=null),ct(wn)}var wn=W(0);function Do(t,n){vt(Cn,Cn.current),vt(wn,n)}function yf(t){ct(wn),ct(Cn),Pn===t&&(Pn=null)}function Kl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kd(a)||Xd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,me=null,Ye=null,fn=null,Ql=!1,hs=!1,Dr=!1,Jl=0,Uo=0,ps=null,sy=0;function sn(){throw Error(s(321))}function Mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Ef(t,n,a,r,u,f){return fa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dt.H=t===null||t.memoizedState===null?G0:V0,Dr=!1,f=a(r,u),Dr=!1,hs&&(f=s0(n,a,r,u)),r0(t),f}function r0(t){Dt.H=ru;var n=Ye!==null&&Ye.next!==null;if(fa=0,fn=Ye=me=null,Ql=!1,Uo=0,ps=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&Vl(t)&&(dn=!0))}function s0(t,n,a,r){me=t;var u=0;do{if(hs&&(ps=null),Uo=0,hs=!1,25<=u)throw Error(s(301));if(u+=1,fn=Ye=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Dt.H=py,f=n(a,r)}while(hs);return f}function oy(){var t=Dt.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(me.flags|=1024),n}function Tf(){var t=Jl!==0;return Jl=0,t}function bf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Af(t){if(Ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ql=!1}fa=0,fn=Ye=me=null,hs=!1,Uo=Jl=0,ps=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?me.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(Ye===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var n=fn===null?me.memoizedState:fn.next;if(n!==null)fn=n,Ye=t;else{if(t===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},fn===null?me.memoizedState=fn=t:fn=fn.next=t}return fn}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=Uo;return Uo+=1,ps===null&&(ps=[]),t=Km(ps,t,n),n=me,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,Dt.H=n===null||n.memoizedState===null?G0:V0),t}function tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===gt)return;if(t.$$typeof===et)return Rn(t)}throw Error(s(438,String(t)))}function Rf(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$l(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=fe;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function eu(t){var n=ln();return Cf(n,Ye,t)}function Cf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,L=null,Q=n,ut=!1;do{var Mt=Q.lane&-536870913;if(Mt!==Q.lane?(Ae&Mt)===Mt:(fa&Mt)===Mt){var Y=Q.revertLane;if(Y===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Mt===br&&(ut=!0);else if((fa&Y)===Y){Q=Q.next,Y===br&&(ut=!0);continue}else Mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(T=L=Mt,_=f):L=L.next=Mt,me.lanes|=Y,Xa|=Y;Mt=Q.action,Dr&&a(f,Mt),f=Q.hasEagerState?Q.eagerState:a(f,Mt)}else Y={lane:Mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(T=L=Y,_=f):L=L.next=Y,me.lanes|=Mt,Xa|=Mt;Q=Q.next}while(Q!==null&&Q!==n);if(L===null?_=f:L.next=T,!ei(f,t.memoizedState)&&(dn=!0,ut&&(a=cs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=L,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function wf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ei(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function o0(t,n,a){var r=me,u=ln(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ei((Ye||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,Nf(c0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||_||fn!==null&&(fn.memoizedState.tag&1)!==0,ms(t?9:8,{destroy:void 0},u0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Ze===null)throw Error(s(349));f||(fa&127)!==0||l0(r,n,a)}return a}function l0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=$l(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function u0(t,n,a,r){n.value=a,n.getSnapshot=r,f0(n)&&d0(t)}function c0(t,n,a){return a(function(){f0(n)&&d0(t)})}function f0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function d0(t){var n=xr(t,2);n!==null&&Zn(n,t,2)}function Df(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Dr){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function h0(t,n,a,r){return t.baseState=a,Cf(t,Ye,typeof r=="function"?r:da)}function ly(t,n,a,r,u){if(au(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Dt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,p0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function p0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=Dt.T,_={};_.types=f!==null?f.types:null,Dt.T=_;try{var T=a(u,r),L=Dt.S;L!==null&&L(_,T),m0(t,n,T)}catch(Q){Uf(t,n,Q)}finally{f!==null&&_.types!==null&&(f.types=_.types),Dt.T=f}}else try{f=a(u,r),m0(t,n,f)}catch(Q){Uf(t,n,Q)}}function m0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){g0(t,n,r)},function(r){return Uf(t,n,r)}):g0(t,n,a)}function g0(t,n,a){n.status="fulfilled",n.value=a,_0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,p0(t,a)))}function Uf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_0(n),n=n.next;while(n!==r)}t.action=null}function _0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function v0(t,n){return n}function x0(t,n){if(ye){var a=Ze.formState;if(a!==null){t:{var r=me;if(ye){if(Qe){e:{for(var u=Qe,f=vi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=Si(u.nextSibling),r=u.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:n},a.queue=r,a=B0.bind(null,me,r),r.dispatch=a,r=Df(!1),f=If.bind(null,me,!1,r.queue),r=Hn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=ly.bind(null,me,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function S0(t){var n=ln();return y0(n,Ye,t)}function y0(t,n,a){if(n=Cf(t,n,v0)[0],t=eu(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=No(n)}catch(_){throw _===fs?ql:_}else r=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,ms(9,{destroy:void 0},uy.bind(null,u,a),null)),[r,f,t]}function uy(t,n){t.action=n}function M0(t){var n=ln(),a=Ye;if(a!==null)return y0(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ms(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=$l(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function E0(){return ln().memoizedState}function nu(t,n,a,r){var u=Hn();me.flags|=t,u.memoizedState=ms(1|n,{destroy:void 0},a,r===void 0?null:r)}function iu(t,n,a,r){var u=ln();r=r===void 0?null:r;var f=u.memoizedState.inst;Ye!==null&&r!==null&&Mf(r,Ye.memoizedState.deps)?u.memoizedState=ms(n,f,a,r):(me.flags|=t,u.memoizedState=ms(1|n,f,a,r))}function T0(t,n){nu(8390656,8,t,n)}function Nf(t,n){iu(2048,8,t,n)}function cy(t){me.flags|=4;var n=me.updateQueue;if(n===null)n=$l(),me.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function b0(t){var n=ln().memoizedState;return cy({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function A0(t,n){return iu(4,2,t,n)}function R0(t,n){return iu(4,4,t,n)}function C0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function w0(t,n,a){a=a!=null?a.concat([t]):null,iu(4,4,C0.bind(null,n,t),a)}function Lf(){}function D0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Mf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function U0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Mf(n,r[1]))return r[0];if(r=t(),Dr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r}function Of(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),me.lanes|=t,Xa|=t,a)}function N0(t,n,a,r){return ei(a,n)?a:Ba.current!==null?(t=Of(t,a,r),ei(t,n)||(dn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ae&261930)===0?(dn=!0,t.memoizedState=a):(t=Gg(),me.lanes|=t,Xa|=t,n)}function L0(t,n,a,r,u){var f=Kt.p;Kt.p=f!==0&&8>f?f:8;var _=Dt.T,T={};T.types=_!==null?_.types:null,Dt.T=T,If(t,!1,n,a);try{var L=u(),Q=Dt.S;if(Q!==null&&Q(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ut=ry(L,r);Lo(t,n,ut,si(t))}else Lo(t,n,r,si(t))}catch(Mt){Lo(t,n,{then:function(){},status:"rejected",reason:Mt},si())}finally{Kt.p=f,_!==null&&T.types!==null&&(_.types=T.types),Dt.T=_}}function fy(){}function Pf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=O0(t).queue;L0(t,u,n,I,a===null?fy:function(){return P0(t),a(r)})}function O0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function P0(t){var n=O0(t);n.next===null&&(n=t.alternate.memoizedState),Lo(t,n.next.queue,{},si())}function zf(){return Rn(Os)}function z0(){return ln().memoizedState}function I0(){return ln().memoizedState}function dy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=za(a);var r=Ia(n,t,a);r!==null&&(Zn(r,n,a),Ro(r,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function hy(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},au(t)?F0(n,a):(a=tf(t,n,a,r),a!==null&&(Zn(a,t,r),H0(a,n,r)))}function B0(t,n,a){var r=si();Lo(t,n,a,r)}function Lo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(au(t))F0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,ei(T,_))return Pl(t,n,u,0),Ze===null&&Ol(),!1}catch{}finally{}if(a=tf(t,n,u,r),a!==null)return Zn(a,t,r),H0(a,n,r),!0}return!1}function If(t,n,a,r){if(r={lane:2,revertLane:Rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},au(t)){if(n)throw Error(s(479))}else n=tf(t,a,r,2),n!==null&&Zn(n,t,2)}function au(t){var n=t.alternate;return t===me||n!==null&&n===me}function F0(t,n){hs=Ql=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function H0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,$(t,a)}}var ru={readContext:Rn,use:tu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},G0={readContext:Rn,use:tu,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:T0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,nu(4194308,4,C0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return nu(4194308,4,t,n)},useInsertionEffect:function(t,n){nu(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var r=t();if(Dr){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Hn();if(a!==void 0){var u=a(n);if(Dr){_n(!0);try{a(n)}finally{_n(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=hy.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Df(t);var n=t.queue,a=B0.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(t,n){var a=Hn();return Of(a,t,n)},useTransition:function(){var t=Df(!1);return t=L0.bind(null,me,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=me,u=Hn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ze===null)throw Error(s(349));(Ae&127)!==0||l0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,T0(c0.bind(null,r,f,t),[t]),r.flags|=2048,ms(9,{destroy:void 0},u0.bind(null,r,f,a,n),null),a},useId:function(){var t=Hn(),n=Ze.identifierPrefix;if(ye){var a=Fi,r=Bi;a=(r&~(1<<32-Ln(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Jl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zf,useFormState:x0,useActionState:x0,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return Hn().memoizedState=dy.bind(null,me)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},V0={readContext:Rn,use:tu,useCallback:D0,useContext:Rn,useEffect:Nf,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:eu,useRef:E0,useState:function(){return eu(da)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=ln();return N0(a,Ye.memoizedState,t,n)},useTransition:function(){var t=eu(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:o0,useId:z0,useHostTransitionStatus:zf,useFormState:S0,useActionState:S0,useOptimistic:function(t,n){var a=ln();return h0(a,Ye,t,n)},useMemoCache:Rf,useCacheRefresh:I0,useEffectEvent:b0},py={readContext:Rn,use:tu,useCallback:D0,useContext:Rn,useEffect:Nf,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:wf,useRef:E0,useState:function(){return wf(da)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=ln();return Ye===null?Of(a,t,n):N0(a,Ye.memoizedState,t,n)},useTransition:function(){var t=wf(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:o0,useId:z0,useHostTransitionStatus:zf,useFormState:M0,useActionState:M0,useOptimistic:function(t,n){var a=ln();return Ye!==null?h0(a,Ye,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:I0,useEffectEvent:b0};function Bf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),Ro(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=za(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(Zn(n,t,r),Ro(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=za(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(Zn(n,t,a),Ro(n,t,a))}};function k0(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!xo(a,r)||!xo(u,f):!0}function X0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ff.enqueueReplaceState(n,n.state,null)}function Ur(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function q0(t){Ll(t)}function Y0(t){console.error(t)}function W0(t){Ll(t)}function su(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function j0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){su(t,n)},a}function Z0(t){return t=za(t),t.tag=3,t}function K0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){j0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){j0(n,a,r),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function my(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Er(n,a,u,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Ru():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Td(t,r,u)),!1;case 22:return a.flags|=65536,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Td(t,r,u)),!1}throw Error(s(435,a.tag))}return Td(t,r,u),Ru(),!1}if(ye)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==sf&&(t=Error(s(422),{cause:r}),Mo(mi(t,a)))):(r!==sf&&(n=Error(s(423),{cause:r}),Mo(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=mi(r,a),u=Hf(t.stateNode,r,u),gf(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:r});if(f=mi(f,a),Go===null?Go=[f]:Go.push(f),on!==4&&(on=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Hf(a.stateNode,r,t),gf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Z0(u),K0(u,t,a,r),gf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Gf=Error(s(461)),dn=!1;function xn(t,n,a,r){n.child=t===null?t0(n,null,a,r):wr(n,t.child,a,r)}function Q0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var T in r)T!=="ref"&&(_[T]=r[T])}else _=r;return Tr(n),r=Ef(t,n,a,_,f,u),T=Tf(),t!==null&&!dn?(bf(t,n,u),ha(t,n,u)):(ye&&T&&Fl(n),n.flags|=1,xn(t,n,r,u),n.child)}function J0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!ef(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$0(t,n,f,r,u)):(t=Il(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(_,r)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=oa(f,r),t.ref=n.ref,t.return=n,n.child=t}function $0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(xo(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,Zf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ha(t,n,u)}return Vf(t,n,a,r,u)}function tg(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return eg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(n,f!==null?f.cachePool:null),f!==null?i0(n,f):vf(),a0(n);else return r=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Xl(n,f.cachePool),i0(n,f),Ha(),n.memoizedState=null):(t!==null&&Xl(n,null),vf(),Ha());return xn(t,n,u,a),n.child}function Oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,r,u){var f=df();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Xl(n,null),vf(),a0(n),t!==null&&Er(t,n,r,!0),n.childLanes=u,null}function ou(t,n){return n=lu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ng(t,n,a){return wr(n,t.child,null,a),t=ou(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function gy(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=ou(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Oo(null,t);if(Sf(n),(t=Qe)?(t=C_(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Mn=n,Qe=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return ou(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Sf(n),u)if(n.flags&256)n.flags&=-257,n=ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Er(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(Ba.current===null){if(r=Ze,r!==null&&(_=ht(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xr(t,_),Zn(r,t,_),Gf;Ru()}n=ng(t,n,a)}else t=f.treeContext,Qe=Si(_.nextSibling),Mn=n,ye=!0,Ua=null,vi=!1,t!==null&&Vm(n,t),n=ou(n,r),n.flags|=134221824;return n}return t=oa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vf(t,n,a,r,u){return Tr(n),a=Ef(t,n,a,r,void 0,u),r=Tf(),t!==null&&!dn?(bf(t,n,u),ha(t,n,u)):(ye&&r&&Fl(n),n.flags|=1,xn(t,n,a,u),n.child)}function ig(t,n,a,r,u,f){return Tr(n),n.updateQueue=null,a=s0(n,r,a,u),r0(t),r=Tf(),t!==null&&!dn?(bf(t,n,f),ha(t,n,f)):(ye&&r&&Fl(n),n.flags|=1,xn(t,n,a,f),n.child)}function ag(t,n,a,r,u){if(Tr(n),n.stateNode===null){var f=ss,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},pf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):ss,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Bf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ff.enqueueReplaceState(f,f.state,null),wo(n,r,f,u),Co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,L=Ur(a,T);f.props=L;var Q=f.context,ut=a.contextType;_=ss,typeof ut=="object"&&ut!==null&&(_=Rn(ut));var Mt=a.getDerivedStateFromProps;ut=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==_)&&X0(n,f,r,_),Pa=!1;var Y=n.memoizedState;f.state=Y,wo(n,r,f,u),Co(),Q=n.memoizedState,T||Y!==Q||Pa?(typeof Mt=="function"&&(Bf(n,a,Mt,r),Q=n.memoizedState),(L=Pa||k0(n,a,L,r,Y,Q,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=_,r=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,mf(t,n),_=n.memoizedProps,ut=Ur(a,_),f.props=ut,Mt=n.pendingProps,Y=f.context,Q=a.contextType,L=ss,typeof Q=="object"&&Q!==null&&(L=Rn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Mt||Y!==L)&&X0(n,f,r,L),Pa=!1,Y=n.memoizedState,f.state=Y,wo(n,r,f,u),Co();var st=n.memoizedState;_!==Mt||Y!==st||Pa||t!==null&&t.dependencies!==null&&Vl(t.dependencies)?(typeof T=="function"&&(Bf(n,a,T,r),st=n.memoizedState),(ut=Pa||k0(n,a,ut,r,Y,st,L)||t!==null&&t.dependencies!==null&&Vl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=L,r=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,gs(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=wr(n,t.child,null,u),n.child=wr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ha(t,n,u),t}function rg(t,n,a,r){return yr(),n.flags|=256,xn(t,n,a,r),n.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:jm()}}function qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function sg(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?Fa(n):Ha(),(t=Qe)?(t=C_(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Mn=n,Qe=null)):t=null,t===null)throw Na(n);return Xd(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(Ha(),u=n.mode,f=lu({mode:"hidden",children:f},u),r=Sr(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Xf(a),r.childLanes=qf(t,_,a),n.memoizedState=kf,Oo(null,r)):(Fa(n),Yf(n,f))}var T=t.memoizedState;if(T!==null){var L=T.dehydrated;if(L!==null)return _y(t,n,f,_,r,L,T,a)}return u?(Ha(),u=r.fallback,f=n.mode,T=t.child,L=T.sibling,r=oa(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,L!==null?u=oa(L,u):(u=Sr(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Oo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=Xf(a):(f=u.cachePool,f!==null?(T=cn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=jm(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=qf(t,_,a),n.memoizedState=kf,Oo(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Yf(t,n){return n=lu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function lu(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function uu(t,n,a){return wr(n,t.child,null,a),t=Yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _y(t,n,a,r,u,f,_,T){if(a)return n.flags&256?(Fa(n),n.flags&=-257,uu(t,n,T)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),f=u.fallback,_=n.mode,u=lu({mode:"visible",children:u.children},_),f=Sr(f,_,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,wr(n,t.child,null,T),u=n.child,u.memoizedState=Xf(T),u.childLanes=qf(t,r,T),n.memoizedState=kf,Oo(null,u));if(Fa(n),Xd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Mo({value:u,source:null,stack:null})),uu(t,n,T)}if(dn||Er(t,n,T,!1),r=(T&t.childLanes)!==0,dn||r){if(Ba.current!==null)return uu(t,n,T);if(r=Ze,r!==null&&(u=ht(r,T),u!==0&&u!==_.retryLane))throw _.retryLane=u,xr(t,u),Zn(r,t,u),Gf;return kd(f)||Ru(),uu(t,n,T)}return kd(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Qe=Si(f.nextSibling),Mn=n,ye=!0,Ua=null,vi=!1,t!==null&&Vm(n,t),n=Yf(n,u.children),n.flags|=134221824,n)}function og(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Gl(t.return,n,a)}function lg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Kl(a)===null&&(n=t),t=t.sibling}return n}function cu(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Wf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function jf(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=wn.current;if(n.flags&128)return Do(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Do(n,_),u==="backwards"&&t!==null?(Wf(t),xn(t,n,r,a),Wf(t)):xn(t,n,r,a),r=ye?yo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=lg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Wf(n)),cu(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Kl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}cu(n,!0,a,null,f,r);break;case"together":cu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=lg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cu(n,!1,u,a,f,r)}return n.child}function ug(t,n,a){var r=n.pendingProps;return La(n,n.type,r.value),xn(t,n,r.children,a),n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Er(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Vl(t)))}function vy(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),yr();break;case 27:case 5:Z(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=Er(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?sg(t,n,a):(Fa(n),t=ha(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return jf(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Er(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return jf(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Do(n,wn.current),r)break;return null;case 22:return n.lanes=0,tg(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return ha(t,n,a)}function cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return dn=!1,vy(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,ye&&(n.flags&1048576)!==0&&Gm(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Rr(n.elementType),n.type=t,typeof t=="function")ef(t)?(r=Ur(t,r),n.tag=1,n=ag(null,n,t,r,a)):(n.tag=0,n=Vf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=Q0(null,n,t,r,a);break t}else if(u===At){n.tag=14,n=J0(null,n,t,r,a);break t}else if(u===et){n.tag=10,n.type=t,n=ug(null,n,a);break t}}throw n=Ht(t)||t,Error(s(306,n,""))}}return n;case 0:return Vf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ur(r,n.pendingProps),ag(t,n,r,u,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,mf(t,n),wo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,cn,r),r!==f.cache&&uf(n,[cn],a,!0),Co(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=rg(t,n,r,a);break t}else if(r!==u){u=mi(Error(s(424)),n),Mo(u),n=rg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=Si(t.firstChild),Mn=n,ye=!0,Ua=null,vi=!0,a=t0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(yr(),r===u){n=ha(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return gs(t,n),t===null?(a=P_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(n.stateNode=p_(n.type,n.pendingProps,zt.current,n)):n.memoizedState=P_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Z(n),t===null&&ye&&(r=n.stateNode=U_(n.type,n.pendingProps,zt.current),Mn=n,vi=!0,u=Qe,ja(n.type)?(qd=u,Qe=Si(r.firstChild)):Qe=u),xn(t,n,n.pendingProps.children,a),gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=r=Qe)&&(r=dM(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,Mn=n,Qe=Si(r.firstChild),vi=!1,u=!0):u=!1),u||Na(n)),Z(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,zd(u,f)?r=null:_!==null&&zd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Ef(t,n,oy,null,null,a),Os._currentValue=u),gs(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Qe)&&(a=hM(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Mn=n,Qe=null,t=!0):t=!1),t||Na(n)),null;case 13:return sg(t,n,a);case 4:return N(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=wr(n,null,r,a):xn(t,n,r,a),n.child;case 11:return Q0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,gs(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return ug(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Tr(n),u=Rn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return J0(t,n,n.type,n.pendingProps,a);case 15:return $0(t,n,n.type,n.pendingProps,a);case 19:return jf(t,n,a);case 31:return gy(t,n,a);case 22:return tg(t,n,a,n.pendingProps);case 24:return Tr(n),r=Rn(cn),t===null?(u=df(),u===null&&(u=Ze,f=cf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},pf(n),La(n,cn,u)):((t.lanes&a)!==0&&(mf(t,n),wo(n,null,null,a),Co()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,r)):(r=f.cache,La(n,cn,r),r!==u.cache&&uf(n,[cn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ye&&Fl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:gs(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function Kf(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?F_(n,r):F_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(qg())t.flags|=8192;else throw Cr=Yl,hf}else t.flags&=-16777217}function fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(n))if(qg())t.flags|=8192;else throw Cr=Yl,hf}function fu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?El():536870912,t.lanes|=n,ys|=n)}function Po(t,n){if(!ye)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function xy(t,n,a){var r=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ca(cn),E(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(us(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(pa(n),f!==null?(Je(n),fg(n,f)):(Je(n),Kf(n,u,null,r,a))):f?f!==t.memoizedState?(pa(n),Je(n),fg(n,f)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&pa(n),Je(n),Kf(n,u,t,r,a)),null;case 27:if(mt(n),a=zt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=xt.current,us(n)?km(n):(t=U_(u,r,a),n.stateNode=t,pa(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(f=xt.current,us(n))km(n);else{var _=Yo(zt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[Bt]=n,f[$t]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Un(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&pa(n)}}return Je(n),n.subtreeFlags&=-33554433,Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=zt.current,us(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Bt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||c_(t.nodeValue,a)),t||Na(n,!0)}else t=Yo(t).createTextNode(r),t[Bt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=us(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Bt]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Bt]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),fu(n,n.updateQueue),Je(n),null);case 4:return E(),t===null&&Ud(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ca(n.type),Je(n),null;case 19:if(yf(n),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Po(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Kl(t),f!==null){for(n.flags|=128,Po(r,!1),t=f.updateQueue,n.updateQueue=t,fu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return Do(n,wn.current&1|2),ye&&la(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Eu&&(n.flags|=128,u=!0,Po(r,!1),n.lanes=4194304)}else{if(!u)if(t=Kl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,fu(n,t),Po(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!ye)return Je(n),null}else 2*X()-r.renderingStartTime>Eu&&a!==536870912&&(n.flags|=128,u=!0,Po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,f=wn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ye?Do(n,f):(a=f,vt(Cn,n),vt(wn,a),Pn===null&&(Pn=n)),ye&&la(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ni(n),xf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&fu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ct(Ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(cn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function Sy(t,n){switch(rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(cn),E(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return yf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return E(),null;case 10:return ca(n.type),null;case 22:case 23:return ni(n),xf(),t!==null&&ct(Ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(cn),null;case 25:return null;default:return null}}function dg(t,n){switch(rf(n),n.tag){case 3:ca(cn),E();break;case 26:case 27:case 5:mt(n);break;case 4:E();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:yf(n);break;case 10:ca(n.type);break;case 22:case 23:ni(n),xf(),t!==null&&ct(Ar);break;case 24:ca(cn)}}function zo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(T){ke(n,n.return,T)}}function Ga(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var L=a,Q=T;try{Q()}catch(ut){ke(u,L,ut)}}}r=r.next}while(r!==f)}}catch(ut){ke(n,n.return,ut)}}function hg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{n0(n,a)}catch(r){ke(t,t.return,r)}}}function pg(t,n,a){a.props=Ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=y_(f)),r=u.ref;break;case 7:if(t.stateNode===null){var _=new oi(t);m(t.child,!1,cM,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){ke(t,n,T)}}function Dn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(t,n,u)}else a.current=null}function du(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)R_(t.stateNode,n[a])}function mg(t){for(var n=t.return;n!==null&&(Jf(n)&&R_(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function Io(t){for(var n=t.return;n!==null&&(Jf(n)&&fM(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function Qf(t){return t.tag===5||t.tag===3||t.tag===27}function Jf(t){return t&&t.tag===7&&t.stateNode!==null}function $f(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ke(t,t.return,u)}}function td(t,n,a){try{var r=t.stateNode;Yy(r,t.type,a,n),r[$t]=n}catch(u){ke(t,t.return,u)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function ed(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),du(t,r),Oe=!0;else if(u!==4&&(u===27&&(du(t,r),r=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(nd(t,n,a,r),t=t.sibling;t!==null;)nd(t,n,a,r),t=t.sibling}function hu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),du(t,r),Oe=!0;else if(u!==4&&(u===27&&(du(t,r),r=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(hu(t,n,a,r),t=t.sibling;t!==null;)hu(t,n,a,r),t=t.sibling}function _g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,r,a),n[Bt]=t,n[$t]=a}catch(f){ke(t,t.return,f)}}var pu=!1,ii=null;function vg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(pu=!0)}var Gi=null;function xg(){var t=Gi;return Gi=null,t}var Yn=0;function _s(t,n,a,r,u){return Yn=0,Sg(t.child,n,a,r,u)}function Sg(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var T=Fd(_);r.push(T),T.view&&(f=!0)}else f||Fd(_).view&&(f=!0);pu=!0,x_(_,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||Sg(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function Vi(t,n){for(;t!==null;)t.tag===5?S_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Vi(t.child,n)),t=t.sibling}function mu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(mu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=sa(n.default,n.share),n!=="none"&&(_s(t,a,n,null,!1)||Vi(t.child,!1))}t=t.sibling}}function id(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=ra(r,a),f=sa(r.default,a.paired?r.share:r.enter);f!=="none"?_s(t,u,f,null,!1)?(mu(t),a.paired||n||bs(t,r.onEnter)):Vi(t.child,!1):mu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)id(t,n),t=t.sibling;else mu(t)}function ad(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=sa(a.default,a.share);if(f!=="none"&&(_s(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,bs(t,a.onShare)):Vi(t.child,!1)),n.delete(r),n.size===0)break}}}ad(t)}t=t.sibling}}}function rd(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),r=ii!==null?ii.get(a):void 0,u=sa(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(_s(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ii.delete(a),bs(t,n.onShare)):bs(t,n.onExit):Vi(t.child,!1)),ii!==null&&ad(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rd(t),t=t.sibling;else ii!==null&&ad(t)}function yg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=sa(n.default,n.update),t.flags&=-5,n!=="none"&&_s(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&yg(t);t=t.sibling}}function sd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Vi(t.child,!1))}sd(t)}t=t.sibling}}function gu(t){if(t.tag===30)t.stateNode.paired=null,Vi(t.child,!1),sd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)gu(t),t=t.sibling;else sd(t)}function Mg(t){for(t=t.child;t!==null;)t.tag===30?Vi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Mg(t),t=t.sibling}function od(t,n,a,r,u,f,_){for(var T=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(f!==null&&Yn<f.length){var Q=f[Yn],ut=Fd(L);(Q.view||ut.view)&&(T=!0);var Mt;if(Mt=(t.flags&4)===0)if(ut.clip)Mt=!0;else{Mt=Q.rect;var Y=ut.rect;Mt=Mt.y!==Y.y||Mt.x!==Y.x||Mt.height!==Y.height||Mt.width!==Y.width}Mt&&(t.flags|=4),ut.abs?ut=!Q.abs:(Q=Q.rect,ut=ut.rect,ut=Q.height!==ut.height||Q.width!==ut.width),ut&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&x_(L,Yn===0?a:a+"_"+Yn,u),T&&(t.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(L,Yn===0?r:r+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:od(t,n.child,a,r,u,f,_)&&(T=!0));n=n.sibling}return T}function Eg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=ra(a,r),f=sa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;Yn=0,u=od(r,T,u,u,f,_,!1),(t.flags&4)!==0&&u&&bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Eg(t);t=t.sibling}}var En=!1,Ge=!1,ki=!1,ld=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Xi=!1,Bo=!1,_u=!1,ud=!1;function yy(t,n,a){if(t=t.containerInfo,Od=Ps,t=Cm(t),jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var T=0,L=-1,Q=-1,ut=0,Mt=0,Y=t,st=null;e:for(;;){for(var Gt;Y!==r||f!==0&&Y.nodeType!==3||(L=T+f),Y!==_||u!==0&&Y.nodeType!==3||(Q=T+u),Y.nodeType===3&&(T+=Y.nodeValue.length),(Gt=Y.firstChild)!==null;)st=Y,Y=Gt;for(;;){if(Y===t)break e;if(st===r&&++ut===f&&(L=T),st===_&&++Mt===u&&(Q=T),(Gt=Y.nextSibling)!==null)break;Y=st,st=Y.parentNode}Y=Gt}r=L===-1||Q===-1?null:{start:L,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pd={focusedElem:t,selectionRange:r},Ps=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&rd(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&vg(t),vu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&rd(r),vu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&vg(t),vu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&yg(t),vu(a))}}ii=null}function vu(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Ur(n.type,u);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){ke(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Vd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ra(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=sa(u.default,u.update),u!=="none"&&_s(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function bg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),r&4&&zo(5,a);break;case 1:if(qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ke(a,a.return,_)}else{var u=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ke(a,a.return,_)}}r&64&&hg(a),r&512&&Hi(a,a.return);break;case 3:if(qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{n0(t,n)}catch(_){ke(a,a.return,_)}}break;case 27:n===null&&r&4&&_g(a);case 26:case 5:qi(t,a),n===null&&r&4&&$f(a),r&512&&Hi(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),r&4&&wg(t,a);break;case 13:qi(t,a),r&4&&Dg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ly.bind(null,a),pM(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var f=n!==null&&n.memoizedState!==null||Ge;n=En,u=Ge,En=r,(Ge=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):qi(t,a),En=n,Ge=u}break;case 30:qi(t,a),r&512&&Hi(a,a.return);break;case 7:r&512&&Hi(a,a.return);default:qi(t,a)}}function cd(t,n){for(t=t.child;t!==null;)Ag(t,n),t=t.sibling}function Ag(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(L){ke(t,t.return,L)}fd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Oe=!0}catch(L){ke(t,t.return,L)}break;case 18:try{var T=t.stateNode;n?v_(T,!0):v_(t.stateNode,!1)}catch(L){ke(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&cd(t,n);break;default:cd(t,n)}}function fd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Ag(a,r);break t;case 22:a.memoizedState===null&&fd(a,r);break t;default:fd(a,r)}}t=t.sibling}}function Rg(t){var n=t.alternate;n!==null&&(t.alternate=null,Rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oe(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Wn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Ge||Dn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Dn(a,n),Io(a);var r=tn,u=Wn;ja(a.type)&&(tn=a.stateNode,Wn=!1),Ai(t,n,a),N_(a.stateNode,a.type,a.memoizedProps),tn=r,Wn=u;break;case 5:Ge||Dn(a,n),Io(a);case 6:if(a.tag===6&&Io(a),r=tn,u=Wn,tn=null,Ai(t,n,a),tn=r,Wn=u,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Oe=!0}catch(f){ke(a,n,f)}else try{tn.removeChild(a.stateNode),Oe=!0}catch(f){ke(a,n,f)}break;case 18:tn!==null&&(Wn?(t=tn,__(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zs(t)):__(tn,a.stateNode));break;case 4:r=tn,u=Wn,tn=a.stateNode.containerInfo,Wn=!0,Ai(t,n,a),tn=r,Wn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),Ge||Ga(4,a,n),Ai(t,n,a);break;case 1:Ge||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&pg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Ai(t,n,a),Ge=r;break;case 30:Dn(a,n),Ai(t,n,a);break;case 7:Ge||Dn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(a){ke(n,n.return,a)}}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(a){ke(n,n.return,a)}}function My(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tg),n;default:throw Error(s(435,t.tag))}}function xu(t,n){var a=My(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Oy.bind(null,t,r);r.then(u,u)}})}function Gn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],_=t,T=n,L=T;t:for(;L!==null;){switch(L.tag){case 27:if(ja(L.type)){tn=L.stateNode,Wn=!1;break t}break;case 5:tn=L.stateNode,Wn=!1;break t;case 3:case 4:tn=L.stateNode.containerInfo,Wn=!0;break t}L=L.return}if(tn===null)throw Error(s(160));Cg(_,T,f),tn=null,Wn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ug(n,t,a),n=n.sibling}var Ri=null;function Ug(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Gn(n,t,a),Vn(t),u&4&&(Ga(3,t,t.return),zo(3,t),Ga(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),u&512&&(Ge||r===null||Dn(r,r.return)),u&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ri,Gn(n,t,a),Vn(t),u&512&&(Ge||r===null||Dn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=p_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ie]||r[Bt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Un(r,n,a),r[Bt]=t,Le(r),n=r;break t;case"link":if(f=B_("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=u.createElement(n),Un(r,n,a),u.head.appendChild(r);break;case"meta":if(f=B_("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=u.createElement(n),Un(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Bt]=t,Le(r),n=r}t.stateNode=n}else En||Zd(f,t.type,t.stateNode);else t.stateNode=I_(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?En||Zd(f,t.type,t.stateNode):I_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&td(t,t.memoizedProps,r.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),u&512&&(Ge||r===null||Dn(r,r.return)),r!==null&&u&4&&td(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=ki,ki=!1,Gn(n,t,a),ki=f,Vn(t),u&512&&(Ge||r===null||Dn(r,r.return)),t.flags&32){n=t.stateNode;try{$r(n,""),Oe=!0}catch(ut){ke(t,t.return,ut)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,td(t,n,r!==null?r.memoizedProps:n)),u&1024&&(ld=!0);break;case 6:if(Gn(n,t,a),Vn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Oe=!0}catch(ut){ke(t,t.return,ut)}}break;case 3:if(Oe=!1,Ou=null,f=Ri,Ri=Wo(n.containerInfo),Gn(n,t,a),Ri=f,Vn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(ut){ke(t,t.return,ut)}ld&&(ld=!1,Ng(t)),Oe=!1;break;case 4:u=ki,ki=En,r=Jp(),f=Ri,Ri=Wo(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ri=f,Oe&&Bo&&(_u=!0),Oe=r,ki=u;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Mu=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 22:f=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var T=En,L=Ge,Q=ki;En=T||f,ki=Q||f,Ge=L||_,Gn(n,t,a),Ge=L,ki=Q,En=T,Vn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||En||Ge||(n=_||Ge,a=En,r=Ge,En=f||En,Ge=n,Va(t,2),En=a,Ge=r),!f&&ki||cd(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,xu(t,a))));break;case 19:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 30:u&512&&(Ge||r===null||Dn(r,r.return)),u=Jp(),f=Bo,_=(a&335544064)===a,T=t.memoizedProps,Bo=_&&sa(T.default,T.update)!=="none",Gn(n,t,a),Vn(t),_&&r!==null&&Oe&&(t.flags|=4),Bo=f,Oe=u;break;case 21:break;case 7:u&512&&(Ge||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(gg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(Jf(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(Qf(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,L=ed(t);hu(t,L,T,_);break;case 5:var Q=a.stateNode;a.flags&32&&($r(Q,""),a.flags&=-33);var ut=ed(t);hu(t,ut,Q,_);break;case 3:case 4:var Mt=a.stateNode.containerInfo,Y=ed(t);nd(t,Y,Mt,_);break;default:throw Error(s(161))}}catch(st){ke(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ps=!0,n.reset(),Ps=!1),t=t.sibling}}function vs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling;else Eg(n)}function Lg(t,n){var a=t.alternate;if(a===null)id(t,!1);else switch(t.tag){case 3:if(ud=Xi=!1,xg(),vs(n,t),!Xi&&!_u){if(t=Gi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];S_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ud=!0}Gi=null;break;case 5:vs(n,t);break;case 4:r=Xi,Xi=!1,vs(n,t),Xi&&(_u=!0),Xi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?id(t,!1):vs(n,t));break;case 30:r=Xi,u=xg(),Xi=!1,vs(n,t),Xi&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=ra(f,_),_=ra(a.memoizedProps,_);var T=sa(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=od(t,a,n,_,T,f,!0),Yn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(bs(t,t.memoizedProps.onUpdate),Gi=u):u!==null&&(u.push.apply(u,Gi),Gi=u),Xi=(t.flags&32)!==0?!0:r;break;default:vs(n,t)}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bg(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,r);break;case 1:Dn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&pg(a,a.return,u),Va(a,r);break;case 27:(r&2)!==0&&N_(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||Io(a),Va(a,r);break;case 6:Io(a);break;case 26:Dn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),Va(a,r);break;case 22:a.memoizedState===null&&Va(a,r);break;case 30:Dn(a,a.return),Va(a,r);break;case 7:Dn(a,a.return);default:Va(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ci(u,f,a),zo(4,f);break;case 1:if(Ci(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){ke(r,r.return,ut)}if(r=f,u=r.updateQueue,u!==null){var L=r.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)e0(Q[u],L)}catch(ut){ke(r,r.return,ut)}}T&&_&64&&hg(f),Hi(f,f.return);break;case 27:(a&2)!==0&&_g(f);case 5:f.tag!==5&&f.tag!==27||mg(f),Ci(u,f,a),T&&r===null&&_&4&&$f(f),Hi(f,f.return);break;case 6:mg(f);break;case 26:L=f.stateNode,f.memoizedState!==null||L===null||En||Zd(Wo(L.ownerDocument),f.type,L),Ci(u,f,a),T&&r===null&&_&4&&$f(f),Hi(f,f.return);break;case 12:Ci(u,f,a);break;case 31:Ci(u,f,a),T&&_&4&&wg(u,f);break;case 13:Ci(u,f,a),T&&_&4&&Dg(u,f);break;case 22:f.memoizedState===null&&Ci(u,f,a),Hi(f,f.return);break;case 30:Ci(u,f,a),Hi(f,f.return);break;case 7:Hi(f,f.return);default:Ci(u,f,a)}n=n.sibling}}function dd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Eo(a))}function hd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t))}function xi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Og(t,n,a,r),n=n.sibling;else u&&Mg(n)}function Og(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&gu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),f&2048&&zo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),u&&ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Eo(f)));break;case 12:if(f&2048){xi(t,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,T=_.id,L=_.onPostCommit;typeof L=="function"&&L(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Q){ke(n,n.return,Q)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&gu(T),_._visibility&2?xi(t,n,a,r):Fo(t,n)):(u&&T!==null&&T.memoizedState!==null&&gu(n),_._visibility&2?xi(t,n,a,r):(_._visibility|=2,xs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&dd(T,n);break;case 24:xi(t,n,a,r),f&2048&&hd(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Vi(f.child,!0),Vi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function xs(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,L=r,Q=_.flags;switch(_.tag){case 0:case 11:case 15:xs(f,_,T,L,u),zo(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?xs(f,_,T,L,u):Fo(f,_):(ut._visibility|=2,xs(f,_,T,L,u)),u&&Q&2048&&dd(_.alternate,_);break;case 24:xs(f,_,T,L,u),u&&Q&2048&&hd(_.alternate,_);break;default:xs(f,_,T,L,u)}n=n.sibling}}function Fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Fo(a,r),u&2048&&dd(r.alternate,r);break;case 24:Fo(a,r),u&2048&&hd(r.alternate,r);break;default:Fo(a,r)}n=n.sibling}}var Nr=8192;function Lr(t,n,a){if(t.subtreeFlags&Nr)for(t=t.child;t!==null;)Pg(t,n,a),t=t.sibling}function Pg(t,n,a){switch(t.tag){case 26:Lr(t,n,a),t.flags&Nr&&(t.memoizedState!==null?CM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&V_(a,t)));break;case 5:Lr(t,n,a),t.flags&Nr&&(t=t.stateNode,(n&335544128)===n&&V_(a,t));break;case 3:case 4:var r=Ri;Ri=Wo(t.stateNode.containerInfo),Lr(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Nr,Nr=16777216,Lr(t,n,a),Nr=r):Lr(t,n,a));break;case 30:if((t.flags&Nr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ii===null&&(ii=new Map),ii.set(r,u)}Lr(t,n,a);break;default:Lr(t,n,a)}}function zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Bg(r,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Su(t)):Ho(t);break;default:Ho(t)}}function Su(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Bg(r,t)}zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Su(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Su(n));break;default:Su(n)}t=t.sibling}}function Bg(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var u=r.sibling,f=r.return;if(Rg(r),r===a){Tn=null;break t}if(u!==null){u.return=f,Tn=u;break t}Tn=f}}}var Ey={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},Ty=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,Ee=null,Ae=0,Ve=0,ai=null,ka=!1,Ss=!1,pd=!1,ma=0,on=0,Xa=0,Or=0,yu=0,ri=0,ys=0,Go=null,jn=null,md=!1,Mu=0,Fg=0,Eu=1/0,Tu=null,qa=null,an=0,wi=null,Pr=null,Yi=0,gd=0,_d=null,Hg=null,Ms=null,Es=null,Ts=null,Vo=0,bu=null;function si(){return(Fe&2)!==0&&Ae!==0?Ae&-Ae:Dt.T!==null?Rd():Nt()}function Gg(){if(ri===0)if((Ae&536870912)===0||ye){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ri=t}else ri=536870912;return t=Cn.current,t!==null&&(t.flags|=32),ri}function bs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=y_(ra(t.memoizedProps,a))),Es===null&&(Es=[]),Es.push(n.bind(null,r))}}function Zn(t,n,a){(t===Ze&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(As(t,0),Ya(t,Ae,ri,!1)),gr(t,a),((Fe&2)===0||t!==Ze)&&(t===Ze&&((Fe&2)===0&&(Or|=a),on===4&&Ya(t,Ae,ri,!1)),Wi(t))}function Vg(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),u=r?Ry(t,n):xd(t,n,!0),f=r;do{if(u===0){Ss&&!r&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!by(a)){u=xd(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;u=Go;var L=T.current.memoizedState.isDehydrated;if(L&&(As(T,_).flags|=256),_=xd(T,_,!1),_!==2&&_!==6){if(pd&&!L){T.errorRecoveryDisabledLanes|=f,Or|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){As(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ri,!ka);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Mu+300-X(),10<u)){if(Ya(r,n,ri,!ka),mr(r,0,!0)!==0)break t;Yi=n,r.timeoutHandle=Bd(kg.bind(null,r,a,jn,Tu,md,n,ri,Or,ys,ka,f,"Throttled",-0,0),u);break t}kg(r,a,jn,Tu,md,n,ri,Or,ys,ka,f,null,-0,0)}}break}while(!0);Wi(t)}function kg(t,n,a,r,u,f,_,T,L,Q,ut,Mt,Y,st){t.timeoutHandle=-1;var Gt=n.subtreeFlags,te=(f&335544064)===f;if(Mt=null,(te||Gt&8192||(Gt&16785408)===16785408)&&(Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ii=null,Pg(n,f,Mt),te&&(Gt=Mt,te=t.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=Ko.bind(Gt),te.finished.then(Gt,Gt))),Gt=(f&62914560)===f?Mu-X():(f&4194048)===f?Fg-X():0,Gt=wM(Mt,Gt),Gt!==null)){Yi=f,t.cancelPendingCommit=Gt(Qg.bind(null,t,n,f,a,r,u,_,T,L,Q,ut,Mt,null,Y,st)),Ya(t,f,_,!Q);return}Qg(t,n,f,a,r,u,_,T,L,Q,ut,Mt)}function by(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,r){n=Ml(t,n),n&=~yu,n&=~Or,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Ln(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&R(t,a,n)}function Au(){return(Fe&6)===0?(ko(0),!1):!0}function vd(){if(Ee!==null){if(Ve===0)var t=Ee.return;else t=Ee,ua=Mr=null,Af(t),ds=null,Ao=0,t=Ee;for(;t!==null;)dg(t.alternate,t),t=t.return;Ee=null}}function As(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Zy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,vd(),Ze=t,Ee=a=oa(t.current,null),Ae=n,Ve=0,ai=null,ka=!1,Ss=Aa(t,n),pd=!1,ys=ri=yu=Or=Xa=on=0,jn=Go=null,md=!1,ma=Ml(t,n),Ol(),a}function Xg(t,n){me=null,Dt.H=ru,n===fs||n===ql?(n=Qm(),Ve=3):n===hf?(n=Qm(),Ve=4):Ve=n===Gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Ee===null&&(on=1,su(t,mi(n,t.current)))}function qg(){var t=Cn.current;return t===null?!0:(Ae&4194048)===Ae?Pn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Pn:!1}function Yg(){var t=Dt.H;return Dt.H=ru,t===null?ru:t}function Wg(){var t=Dt.A;return Dt.A=Ey,t}function Ru(){on=4,ka||(Ae&4194048)!==Ae&&Cn.current!==null||(Ss=!0),(Xa&134217727)===0&&(Or&134217727)===0||Ze===null||Ya(Ze,Ae,ri,!1)}function xd(t,n,a){var r=Fe;Fe|=2;var u=Yg(),f=Wg();(Ze!==t||Ae!==n)&&(Tu=null,As(t,n)),n=!1;var _=on;t:do try{if(Ve!==0&&Ee!==null){var T=Ee,L=ai;switch(Ve){case 8:vd(),_=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var Q=Ve;if(Ve=0,ai=null,Rs(t,T,L,Q),a&&Ss){_=0;break t}break;default:Q=Ve,Ve=0,ai=null,Rs(t,T,L,Q)}}Ay(),_=on;break}catch(ut){Xg(t,ut)}while(!0);return n&&t.shellSuspendCounter++,ua=Mr=null,Fe=r,Dt.H=u,Dt.A=f,Ee===null&&(Ze=null,Ae=0,Ol()),_}function Ay(){for(;Ee!==null;)jg(Ee)}function Ry(t,n){var a=Fe;Fe|=2;var r=Yg(),u=Wg();Ze!==t||Ae!==n?(Tu=null,Eu=X()+500,As(t,n)):Ss=Aa(t,n);t:do try{if(Ve!==0&&Ee!==null){n=Ee;var f=ai;e:switch(Ve){case 1:Ve=0,ai=null,Rs(t,n,f,1);break;case 2:case 9:if(Zm(f)){Ve=0,ai=null,Zg(n);break}n=function(){Ve!==2&&Ve!==9||Ze!==t||(Ve=7),Wi(t)},f.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:Zm(f)?(Ve=0,ai=null,Zg(n)):(Ve=0,ai=null,Rs(t,n,f,7));break;case 5:var _=null;switch(Ee.tag){case 26:_=Ee.memoizedState;case 5:case 27:var T=Ee;if(_?H_(_):T.stateNode.complete){Ve=0,ai=null;var L=T.sibling;if(L!==null)Ee=L;else{var Q=T.return;Q!==null?(Ee=Q,Cu(Q)):Ee=null}break e}}Ve=0,ai=null,Rs(t,n,f,5);break;case 6:Ve=0,ai=null,Rs(t,n,f,6);break;case 8:vd(),on=6;break t;default:throw Error(s(462))}}Cy();break}catch(ut){Xg(t,ut)}while(!0);return ua=Mr=null,Dt.H=r,Dt.A=u,Fe=a,Ee!==null?0:(Ze=null,Ae=0,Ol(),on)}function Cy(){for(;Ee!==null&&!kt();)jg(Ee)}function jg(t){var n=cg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Cu(t):Ee=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Af(n);var r=n;r===Mn&&(ye?(Hl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Hl(r),ye=!0));default:dg(a,n),n=Ee=Bm(n,ma),n=cg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Cu(t):Ee=n}function Rs(t,n,a,r){ua=Mr=null,Af(n),ds=null,Ao=0;var u=n.return;try{if(my(t,u,n,a,Ae)){on=1,su(t,mi(a,t.current)),Ee=null;return}}catch(f){if(u!==null)throw Ee=u,f;on=1,su(t,mi(a,t.current)),Ee=null;return}n.flags&32768?(ye||r===1?t=!0:Ss||(Ae&536870912)!==0?t=!1:(ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Kg(n,t)):Cu(n)}function Cu(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,ka);return}t=n.return;var a=xy(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);on===0&&(on=5)}function Kg(t,n){do{var a=Sy(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);on=6,Ee=null}function Qg(t,n,a,r,u,f,_,T,L,Q,ut,Mt){t.cancelPendingCommit=null;do wu();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ze&&(Ee=Ze=null,Ae=0),Pr=n,wi=t,Yi=a,_d=u,Hg=r,wy(t,n,a,_,T,L,Mt)}}function wy(t,n,a,r,u,f,_){var T=n.lanes|n.childLanes;if(gd=T,T|=$c,Dc(t,a,T,r,u,f),Es=null,(a&335544064)===a?(Ts=iy(t),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Py(Ut,function(){return Ed(),null})):(t.callbackNode=null,t.callbackPriority=0),pu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Dt.T,Dt.T=null,u=Kt.p,Kt.p=2,f=Fe,Fe|=4;try{yy(t,n,a)}finally{Fe=f,Kt.p=u,Dt.T=r}}an=1,pu?Ms=eM(_,t.containerInfo,Ts,Sd,yd,Uy,Md,Ed,Dy):(Sd(),yd(),Md())}function Dy(t){if(an!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Uy(){an===3&&(an=0,Lg(Pr,wi),an=4)}function Sd(){if(an===1){an=0;var t=wi,n=Pr,a=Yi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Dt.T,Dt.T=null;var u=Kt.p;Kt.p=2;var f=Fe;Fe|=4;try{Bo=_u=!1,Ug(n,t,a),a=Pd;var _=Cm(t.containerInfo),T=a.focusedElem,L=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&Rm(T.ownerDocument.documentElement,T)){if(L!==null&&jc(T)){var Q=L.start,ut=L.end;if(ut===void 0&&(ut=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ut,T.value.length);else{var Mt=T.ownerDocument||document,Y=Mt&&Mt.defaultView||window;if(Y.getSelection){var st=Y.getSelection(),Gt=T.textContent.length,te=Math.min(L.start,Gt),ge=L.end===void 0?te:Math.min(L.end,Gt);!st.extend&&te>ge&&(_=ge,ge=te,te=_);var K=Am(T,te),V=Am(T,ge);if(K&&V&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var at=Mt.createRange();at.setStart(K.node,K.offset),st.removeAllRanges(),te>ge?(st.addRange(at),st.extend(V.node,V.offset)):(at.setEnd(V.node,V.offset),st.addRange(at))}}}}for(Mt=[],st=T;st=st.parentNode;)st.nodeType===1&&Mt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Mt.length;T++){var yt=Mt[T];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Ps=!!Od,Pd=Od=null}finally{Fe=f,Kt.p=u,Dt.T=r}}t.current=n,an=2}}function yd(){if(an===2){an=0;var t=wi,n=Pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Dt.T,Dt.T=null;var r=Kt.p;Kt.p=2;var u=Fe;Fe|=4;try{bg(t,n.alternate,n)}finally{Fe=u,Kt.p=r,Dt.T=a}}an=3}}function Md(){if(an===4||an===3){an=0;var t=Ms;Ms=null,pe();var n=wi,a=Pr,r=Yi,u=Hg,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?an=5:(an=0,Pr=wi=null,Jg(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(qa=null),tt(r),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Dt.T,f=Kt.p,Kt.p=2,Dt.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var L=u[T];_(L.value,{componentStack:L.stack})}}finally{Dt.T=a,Kt.p=f}}if(u=Es,_=Ts,Ts=null,u!==null&&(Es=null,_===null&&(_=[]),t!==null))for(L=0;L<u.length;L++)a=(0,u[L])(_),a!==void 0&&t.finished.finally(a);(Yi&3)!==0&&wu(),Wi(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===bu?Vo++:(Vo=0,bu=n):(Vo=0,bu=null),ko(0)}}function Jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Eo(n)))}function wu(){return Ms!==null&&(Ms.skipTransition(),Ms=null),Sd(),yd(),Md(),Ed()}function Ed(){if(an!==5)return!1;var t=wi,n=gd;gd=0;var a=tt(Yi),r=Dt.T,u=Kt.p;try{Kt.p=32>a?32:a,Dt.T=null,a=_d,_d=null;var f=wi,_=Yi;if(an=0,Pr=wi=null,Yi=0,(Fe&6)!==0)throw Error(s(331));var T=Fe;if(Fe|=4,Ig(f.current),Og(f,f.current,_,a),Fe=T,ko(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{Kt.p=u,Dt.T=r,Jg(t,n)}}function $g(t,n,a){n=mi(a,n),n=Hf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(gr(t,2),Wi(t))}function ke(t,n,a){if(t.tag===3)$g(t,t,a);else for(;n!==null;){if(n.tag===3){$g(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=mi(a,t),a=Z0(2),r=Ia(n,a,2),r!==null&&(K0(a,r,n,t),gr(r,2),Wi(r));break}}n=n.return}}function Td(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ty;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(pd=!0,u.add(a),t=Ny.bind(null,t,n,a),n.then(t,t))}function Ny(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Ae&a)===a&&((on===4||on===3&&(Ae&62914560)===Ae&&300>X()-Mu)&&(Fe&2)===0?As(t,0):yu|=a,ys===Ae&&(ys=0)),Wi(t)}function t_(t,n){n===0&&(n=El()),t=xr(t,n),t!==null&&(gr(t,n),Wi(t))}function Ly(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),t_(t,a)}function Oy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),t_(t,a)}function Py(t,n){return ue(t,n)}var Cs=null,ws=null,bd=!1,Du=!1,Ad=!1,Wa=0;function Wi(t){t!==ws&&t.next===null&&(ws===null?Cs=ws=t:ws=ws.next=t),Du=!0,bd||(bd=!0,Iy())}function ko(t,n){if(!Ad&&Du){Ad=!0;do for(var a=!1,r=Cs;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ln(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,a_(r,f))}else f=Ae,f=mr(r,r===Ze?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Aa(r,f)||(a=!0,a_(r,f));r=r.next}while(a);Ad=!1}}function zy(){e_()}function e_(){Du=bd=!1;var t=0;Wa!==0&&jy()&&(t=Wa);for(var n=X(),a=null,r=Cs;r!==null;){var u=r.next,f=n_(r,n);f===0?(r.next=null,a===null?Cs=u:a.next=u,u===null&&(ws=a)):(a=r,(t!==0||(f&3)!==0)&&(Du=!0)),r=u}an!==0&&an!==5||ko(t),Wa!==0&&(Wa=0)}function n_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Ln(f),T=1<<_,L=u[_];L===-1?((T&a)===0||(T&r)!==0)&&(u[_]=wc(T,n)):L<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ze,a=Ae,a=mr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ie(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&ie(r),tt(a)){case 2:case 8:a=Qt;break;case 32:a=Ut;break;case 268435456:a=ee;break;default:a=Ut}return r=i_.bind(null,t),a=ue(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&ie(r),t.callbackPriority=2,t.callbackNode=null,2}function i_(t,n){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(wu()&&t.callbackNode!==a)return null;var r=Ae;return r=mr(t,t===Ze?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Vg(t,r,n),n_(t,X()),t.callbackNode!=null&&t.callbackNode===a?i_.bind(null,t):null)}function a_(t,n){if(wu())return null;Vg(t,n,!0)}function Iy(){Ky(function(){(Fe&6)!==0?ue(Ft,zy):e_()})}function Rd(){if(Wa===0){var t=br;t===0&&(t=hr,hr<<=1,(hr&261888)===0&&(hr=256)),Wa=t}return Wa}function r_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(t)}function By(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=r_((u[$t]||null).action),_=r.submitter;_&&(n=(n=_[$t]||null)?r_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Dl("action","action",null,r,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var L=new FormData(u,_);Pf(a,{pending:!0,data:L,method:u.method,action:f},null,L)}}else typeof f=="function"&&(T.preventDefault(),L=new FormData(u,_),Pf(a,{pending:!0,data:L,method:u.method,action:f},f,L))},currentTarget:u}]})}}for(var Cd=0;Cd<Jc.length;Cd++){var wd=Jc[Cd],Fy=wd.toLowerCase(),Hy=wd[0].toUpperCase()+wd.slice(1);bi(Fy,"on"+Hy)}bi(Um,"onAnimationEnd"),bi(Nm,"onAnimationIteration"),bi(Lm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ZS,"onTransitionRun"),bi(KS,"onTransitionStart"),bi(QS,"onTransitionCancel"),bi(Om,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function s_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var T=r[_],L=T.instance,Q=T.currentTarget;if(T=T.listener,L!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ut){Ll(ut)}u.currentTarget=null,f=L}else for(_=0;_<r.length;_++){if(T=r[_],L=T.instance,Q=T.currentTarget,T=T.listener,L!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ut){Ll(ut)}u.currentTarget=null,f=L}}}}function Te(t,n){var a=n[se];a===void 0&&(a=n[se]=new Set);var r=t+"__bubble";a.has(r)||(o_(n,t,2,!1),a.add(r))}function Dd(t,n,a){var r=0;n&&(r|=4),o_(a,t,r,n)}var Uu="_reactListening"+Math.random().toString(36).slice(2);function Ud(t){if(!t[Uu]){t[Uu]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(Gy.has(a)||Dd(a,!1,t),Dd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Uu]||(n[Uu]=!0,Dd("selectionchange",!1,n))}}function o_(t,n,a,r){switch(K_(n)){case 2:var u=LM;break;case 8:u=OM;break;default:u=Qd}a=u.bind(null,n,a,t),u=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Nd(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var T=r.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=r.return;_!==null;){var L=_.tag;if((L===3||L===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=Be(T),_===null)return;if(L=_.tag,L===5||L===6||L===26||L===27){r=f=_;continue t}T=T.parentNode}}r=r.return}om(function(){var Q=f,ut=zc(a),Mt=[];t:{var Y=Pm.get(t);if(Y!==void 0){var st=Dl,Gt=t;switch(t){case"keypress":if(Cl(a)===0)break t;case"keydown":case"keyup":st=bS;break;case"focusin":Gt="focus",st=Vc;break;case"focusout":Gt="blur",st=Vc;break;case"beforeblur":case"afterblur":st=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=DS;break;case Um:case Nm:case Lm:st=gS;break;case Om:st=NS;break;case"scroll":case"scrollend":st=fS;break;case"wheel":st=OS;break;case"copy":case"cut":case"paste":st=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=dm;break;case"submit":st=CS;break;case"toggle":case"beforetoggle":st=zS}var te=(n&4)!==0,ge=!te&&(t==="scroll"||t==="scrollend"),K=te?Y!==null?Y+"Capture":null:Y;te=[];for(var V=Q,at;V!==null;){var yt=V;if(at=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||at===null||K===null||(yt=fo(V,K),yt!=null&&te.push(qo(V,yt,at))),ge)break;V=V.return}0<te.length&&(Y=new st(Y,Gt,null,a,ut),Mt.push({event:Y,listeners:te}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",st&&a!==Pc&&(Gt=a.relatedTarget||a.fromElement)&&(Be(Gt)||Gt[le]))break t;(Y||st)&&(Gt=ut.window===ut?ut:(st=ut.ownerDocument)?st.defaultView||st.parentWindow:window,Y?(st=a.relatedTarget||a.toElement,Y=Q,st=st?Be(st):null,st!==null&&(ge=c(st),te=st.tag,st!==ge||te!==5&&te!==27&&te!==6)&&(st=null)):(Y=null,st=Q),Y!==st&&(te=cm,yt="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(te=dm,yt="onPointerLeave",K="onPointerEnter",V="pointer"),ge=Y==null?Gt:vn(Y),at=st==null?Gt:vn(st),Gt=new te(yt,V+"leave",Y,a,ut),Gt.target=ge,Gt.relatedTarget=at,yt=null,Be(ut)===Q&&(te=new te(K,V+"enter",st,a,ut),te.target=at,te.relatedTarget=ge,yt=te),ge=yt,te=Y&&st?B(Y,st,Vy):null,Y!==null&&l_(Mt,Gt,Y,te,!1),st!==null&&ge!==null&&l_(Mt,ge,st,te,!0)))}t:{if(Y=Q?vn(Q):window,st=Y.nodeName&&Y.nodeName.toLowerCase(),st==="select"||st==="input"&&Y.type==="file")var Zt=Sm;else if(vm(Y))if(ym)Zt=YS;else{Zt=XS;var Re=kS}else st=Y.nodeName,!st||st.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Oc(Q.elementType)&&(Zt=Sm):Zt=qS;if(Zt&&(Zt=Zt(t,Q))){xm(Mt,Zt,a,ut);break t}Re&&Re(t,Y,Q)}switch(Re=Q?vn(Q):window,t){case"focusin":(vm(Re)||Re.contentEditable==="true")&&(is=Re,Zc=Q,So=null);break;case"focusout":So=Zc=is=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,wm(Mt,a,ut);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":wm(Mt,a,ut)}var re;if(Xc)t:{switch(t){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else ns?gm(t,a)&&(ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(hm&&a.locale!=="ko"&&(ns||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ns&&(re=lm()):(Ca=ut,Fc="value"in Ca?Ca.value:Ca.textContent,ns=!0)),Re=Nu(Q,ce),0<Re.length&&(ce=new fm(ce,t,null,a,ut),Mt.push({event:ce,listeners:Re}),re?ce.data=re:(re=_m(a),re!==null&&(ce.data=re)))),(re=BS?FS(t,a):HS(t,a))&&(ce=Nu(Q,"onBeforeInput"),0<ce.length&&(Re=new fm("onBeforeInput","beforeinput",null,a,ut),Mt.push({event:Re,listeners:ce}),Re.data=re)),By(Mt,t,Q,a,ut)}s_(Mt,n)})}function qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Nu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=fo(t,a),u!=null&&r.unshift(qo(t,u,f)),u=fo(t,n),u!=null&&r.push(qo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Vy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l_(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var T=a,L=T.alternate,Q=T.stateNode;if(T=T.tag,L!==null&&L===r)break;T!==5&&T!==26&&T!==27||Q===null||(L=Q,u?(Q=fo(a,f),Q!=null&&_.unshift(qo(a,Q,L))):u||(Q=fo(a,f),Q!=null&&_.push(qo(a,Q,L)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function u_(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Xy,"")}function c_(t,n){return n=u_(n),u_(t)===n}function Xe(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||$r(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&$r(t,""+r);else return;break;case"className":bl(t,"class",r);break;case"tabIndex":bl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,a,r);break;case"style":rm(t,r,f);return;case"data":if(n!=="object"){bl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Al(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Al(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ii);return;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Al(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Te("beforetoggle",t),Te("toggle",t),Tl(t,"popover",r);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=uS.get(a)||a,Tl(t,a,r);else return}Oe=!0}function Ld(t,n,a,r,u,f){switch(a){case"style":rm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")$r(t,r);else if(typeof r=="number"||typeof r=="bigint")$r(t,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[$t]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}Oe=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Tl(t,a,r)}return}Oe=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,f,_,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var T=f=_=u=null,L=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":u=ut;break;case"type":_=ut;break;case"checked":L=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Xe(t,n,r,ut,a,null)}}em(t,f,T,L,Q,_,u,!1);return;case"select":Te("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":r=T;default:Xe(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Jr(t,!!r,n,!1):a!=null&&Jr(t,!!r,a,!0);return;case"textarea":Te("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,n,_,T,a,null)}im(t,r,u,f);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(r=a[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,L,r,a,null)}return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(r=0;r<Xo.length;r++)Te(Xo[r],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,Q,r,a,null)}return;default:if(Oc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Ld(t,n,ut,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Xe(t,n,T,r,a,null))}var qy={};function Yy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,L=null,Q=null,ut=null;for(st in a){var Mt=a[st];if(a.hasOwnProperty(st)&&Mt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":L=Mt;default:r.hasOwnProperty(st)||Xe(t,n,st,null,r,Mt)}}for(var Y in r){var st=r[Y];if(Mt=a[Y],r.hasOwnProperty(Y)&&(st!=null||Mt!=null))switch(Y){case"type":st!==Mt&&(Oe=!0),f=st;break;case"name":st!==Mt&&(Oe=!0),u=st;break;case"checked":st!==Mt&&(Oe=!0),Q=st;break;case"defaultChecked":st!==Mt&&(Oe=!0),ut=st;break;case"value":st!==Mt&&(Oe=!0),_=st;break;case"defaultValue":st!==Mt&&(Oe=!0),T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==Mt&&Xe(t,n,Y,st,r,Mt)}}Nc(t,_,T,L,Q,ut,f,u);return;case"select":st=_=T=Y=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":st=L;default:r.hasOwnProperty(f)||Xe(t,n,f,null,r,L)}for(u in r)if(f=r[u],L=a[u],r.hasOwnProperty(u)&&(f!=null||L!=null))switch(u){case"value":f!==L&&(Oe=!0),Y=f;break;case"defaultValue":f!==L&&(Oe=!0),T=f;break;case"multiple":f!==L&&(Oe=!0),_=f;default:f!==L&&Xe(t,n,u,f,r,L)}n=T,a=_,r=st,Y!=null?Jr(t,!!a,Y,!1):!!r!=!!a&&(n!=null?Jr(t,!!a,n,!0):Jr(t,!!a,a?[]:"",!1));return;case"textarea":st=Y=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(Oe=!0),Y=u;break;case"defaultValue":u!==f&&(Oe=!0),st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(t,n,_,u,r,f)}nm(t,Y,st);return;case"option":for(var Gt in a)if(Y=a[Gt],a.hasOwnProperty(Gt)&&Y!=null&&!r.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Xe(t,n,Gt,null,r,Y)}for(L in r)if(Y=r[L],st=a[L],r.hasOwnProperty(L)&&Y!==st&&(Y!=null||st!=null))switch(L){case"selected":Y!==st&&(Oe=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Xe(t,n,L,Y,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)Y=a[te],a.hasOwnProperty(te)&&Y!=null&&!r.hasOwnProperty(te)&&Xe(t,n,te,null,r,Y);for(Q in r)if(Y=r[Q],st=a[Q],r.hasOwnProperty(Q)&&Y!==st&&(Y!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Xe(t,n,Q,Y,r,st)}return;default:if(Oc(n)){for(var ge in a)Y=a[ge],a.hasOwnProperty(ge)&&Y!==void 0&&!r.hasOwnProperty(ge)&&Ld(t,n,ge,void 0,r,Y);for(ut in r)Y=r[ut],st=a[ut],!r.hasOwnProperty(ut)||Y===st||Y===void 0&&st===void 0||Ld(t,n,ut,Y,r,st);return}}for(var K in a)Y=a[K],a.hasOwnProperty(K)&&Y!=null&&!r.hasOwnProperty(K)&&Xe(t,n,K,null,r,Y);for(Mt in r)Y=r[Mt],st=a[Mt],!r.hasOwnProperty(Mt)||Y===st||Y==null&&st==null||Xe(t,n,Mt,Y,r,st)}function f_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&f_(_)){for(_=0,T=u.responseEnd,r+=1;r<a.length;r++){var L=a[r],Q=L.startTime;if(Q>T)break;var ut=L.transferSize,Mt=L.initiatorType;ut&&f_(Mt)&&(L=L.responseEnd,_+=ut*(L<T?1:(T-Q)/(L-Q)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Od=null,Pd=null;function Yo(t){return t.nodeType===9?t:t.ownerDocument}function d_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function p_(t,n,a,r){return a=Yo(a).createElement(t),a[Bt]=r,a[$t]=n,Un(a,t,n),Le(a),a}function zd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Id=null;function jy(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,g_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bd,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(t){return m_.resolve(null).then(t).catch(Qy)}:Bd;function Qy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function __(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),zs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Yd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Yd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Ie]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Yd(t.ownerDocument.body);a=u}while(a);zs(n)}function v_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function x_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function S_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Jy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Fd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Jy(n,a,t)}function $y(t){return t.documentElement.clientHeight}function tM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function eM(t,n,a,r,u,f,_,T,L){var Q=n.nodeType===9?n:n.ownerDocument;try{var ut=Q.startViewTransition({update:function(){var Y=Q.defaultView,st=Y.navigation&&Y.navigation.transition,Gt=Q.fonts.status;r();var te=[];if(Gt==="loaded"&&($y(Q),Q.fonts.status==="loading"&&te.push(Q.fonts.ready)),Gt=te.length,t!==null)for(var ge=t.suspenseyImages,K=0,V=0;V<ge.length;V++){var at=ge[V];if(!at.complete){var yt=at.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<Y.innerHeight&&yt.left<Y.innerWidth){if(K+=G_(at),K>Pu){te.length=Gt;break}at=new Promise(tM.bind(at)),te.push(at)}}}if(0<te.length)return Y=Promise.race([Promise.all(te),new Promise(function(Zt){return setTimeout(Zt,500)})]).then(u,u),(st?Promise.allSettled([st.finished,Y]):Y).then(f,f);if(u(),st)return st.finished.then(f,f);f()},types:a});Q.__reactViewTransition=ut;var Mt=[];return ut.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),st=0;st<Y.length;st++){var Gt=Y[st],te=Gt.effect,ge=te.pseudoElement;if(ge!=null&&ge.startsWith("::view-transition")){Mt.push(Gt),Gt=te.getKeyframes();for(var K=ge=void 0,V=!0,at=0;at<Gt.length;at++){var yt=Gt[at],Zt=yt.width;if(ge===void 0)ge=Zt;else if(ge!==Zt){V=!1;break}if(Zt=yt.height,K===void 0)K=Zt;else if(K!==Zt){V=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}V&&ge!==void 0&&K!==void 0&&(te.setKeyframes(Gt),V=getComputedStyle(te.target,te.pseudoElement),V.width!==ge||V.height!==K)&&(V=Gt[0],V.width=ge,V.height=K,V=Gt[Gt.length-1],V.width=ge,V.height=K,te.setKeyframes(Gt))}}_()},function(Y){Q.__reactViewTransition===ut&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&L(Y)}finally{r(),u(),_()}}),ut.finished.finally(function(){for(var Y=0;Y<Mt.length;Y++)Mt[Y].cancel();Q.__reactViewTransition===ut&&(Q.__reactViewTransition=null),T()}),ut}catch{return r(),u(),_(),null}}function zr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}zr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},zr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},zr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function y_(t){return{name:t,group:new zr("group",t),imagePair:new zr("image-pair",t),old:new zr("old",t),new:new zr("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(E_(f,t,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(L){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(u=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Ds(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),m(this._fragmentFiber.child,!1,nM,t,T,r)}this._eventListeners=f}};function nM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}oi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=E_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Ds(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,iM,t,a,u),r.splice(n,1),f!==null&&f()}};function iM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ds(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function M_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function E_(t,n,a,r){if(t.length===0)return-1;r=M_(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&M_(f.optionsOrUseCapture)===r)return u}return-1}oi.prototype.dispatchEvent=function(t){var n=p(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Ds(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Ds(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,T_,t,void 0,void 0)};function T_(t,n){return t.tag===6?!1:(t=M(t),mM(t,n))}oi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Hd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!T_(n[a],t);a--);};function Hd(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=p(this._fragmentFiber);t!==null&&(t=M(t),t=Yo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,aM,t,void 0,void 0))};function aM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,rM,t,void 0,void 0)};function rM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,sM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function sM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],Gd=!1;function oM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Gd||(Gd=!0,gM(function(){Gd=!1;var r=Di;Di=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,lM,t,void 0,void 0),t};function lM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=p(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=p(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Hd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),L=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||L||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uM(t,n,a,r,u){var f=Be(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=p(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=B(a,f,G),n===null?n=!1:(m(n,!0,P,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=B(r,f,G),n===null?n=!1:(m(n,!0,U,f,r),f=x,D=x=null,n=f!==null)),n):!1}function b_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Hd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||p(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),b_(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),b_(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function cM(t,n){return t=M(t),A_(t,n),!1}function A_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function R_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,T=0;T<Di.length;T++){var L=Di[T];(L.fragmentInstance!==n||L.observer!==f||L.instance!==t)&&(Di[_++]=L)}Di.length=_,f.observe(t)}),A_(t,n))}function fM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Ds(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?oM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Vd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vd(a),oe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ie])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function hM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function C_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function kd(t){return t.data==="$?"||t.data==="$~"}function Xd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qd=null;function w_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function D_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function mM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function gM(t){g_(function(){g_(function(n){return t(n)})})}function U_(t,n,a){switch(n=Yo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function N_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Xe(t,n,r,null,qy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),oe(t)}function Yd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oe(t)}var yi=new Map,L_=new Set;function Wo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Kt.d;Kt.d={f:_M,r:vM,D:xM,C:SM,L:yM,m:MM,X:TM,S:EM,M:bM};function _M(){var t=ga.f(),n=Au();return t||n}function vM(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?P0(n):ga.r(t)}var Us=typeof document>"u"?null:document;function O_(t,n,a){var r=Us;if(r&&typeof n=="string"&&n){var u=hi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L_.has(u)||(L_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Un(n,"link",t),Le(n),r.head.appendChild(n)))}}function xM(t){ga.D(t),O_("dns-prefetch",t,null)}function SM(t,n){ga.C(t,n),O_("preconnect",t,n)}function yM(t,n,a){ga.L(t,n,a);var r=Us;if(r&&t&&n){var u='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hi(a.imageSizes)+'"]')):u+='[href="'+hi(t)+'"]';var f=u;switch(n){case"style":f=Ns(t);break;case"script":f=Ls(t)}if(!(yi.has(f)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(jo(f))||n==="script"&&r.querySelector(Zo(f))))){var _=r.createElement("link");Un(_,"link",t),n==="style"&&(_[Ne]=!0,_.onload=_.onerror=function(){Ra(_)}),Le(_),r.head.appendChild(_)}}}function MM(t,n){ga.m(t,n);var a=Us;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hi(r)+'"][href="'+hi(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ls(t)}if(!yi.has(f)&&(t=O({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(f)))return}r=a.createElement("link"),Un(r,"link",t),Le(r),a.head.appendChild(r)}}}function EM(t,n,a){ga.S(t,n,a);var r=Us;if(r&&t){var u=$n(r).hoistableStyles,f=Ns(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=r.querySelector(jo(f)))T.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Wd(t,a);var L=_=r.createElement("link");Le(L),Un(L,"link",t),L._p=new Promise(function(Q,ut){L.onload=Q,L.onerror=ut}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Lu(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function TM(t,n){ga.X(t,n);var a=Us;if(a&&t){var r=$n(a).hoistableScripts,u=Ls(t),f=r.get(u);f||(f=a.querySelector(Zo(u)),f||(t=O({src:t,async:!0},n),(n=yi.get(u))&&jd(t,n),f=a.createElement("script"),Le(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function bM(t,n){ga.M(t,n);var a=Us;if(a&&t){var r=$n(a).hoistableScripts,u=Ls(t),f=r.get(u);f||(f=a.querySelector(Zo(u)),f||(t=O({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&jd(t,n),f=a.createElement("script"),Le(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function P_(t,n,a,r){var u=(u=zt.current)?Wo(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ns(a.href),n=$n(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ns(a.href);var f=$n(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(jo(t)))?f._p||(_.instance=f,_.state.loading=5):(f=yi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,f)),AM(u,t,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ls(a),n=$n(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ns(t){return'href="'+hi(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function z_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function AM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ne]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ne]=!0,n.onload=n.onerror=Ra.bind(null,n),Un(n,"link",a),Le(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ls(t){return'[src="'+hi(t)+'"]'}function Zo(t){return"script[async]"+t}function I_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+hi(a.href)+'"]');if(r)return n.instance=r,Le(r),r;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Le(r),Un(r,"style",u),Lu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Ns(a.href);var f=t.querySelector(jo(u));if(f)return n.state.loading|=4,n.instance=f,Le(f),f;r=z_(a),(u=yi.get(u))&&Wd(r,u),f=(t.ownerDocument||t).createElement("link"),Le(f);var _=f;return _._p=new Promise(function(T,L){_.onload=T,_.onerror=L}),Un(f,"link",r),n.state.loading|=4,Lu(f,a.precedence,t),n.instance=f;case"script":return f=Ls(a.src),(u=t.querySelector(Zo(f)))?(n.instance=u,Le(u),u):(r=a,(u=yi.get(f))&&(r=O({},a),jd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Le(u),Un(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Lu(r,a.precedence,t));return n.instance}function Lu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var T=r[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ou=null;function B_(t,n,a){if(Ou===null){var r=new Map,u=Ou=new Map;u.set(a,r)}else u=Ou,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ie]||f[Bt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=r.get(_);T?T.push(f):r.set(_,[f])}}return r}function Zd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function RM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function G_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function V_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=G_(n),t.suspenseyImages.push(n)),t=DM.bind(t),n.decode().then(t,t))}function CM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ns(r.href),f=n.querySelector(jo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ko.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Le(f);return}f=n.ownerDocument||n,r=z_(r),(u=yi.get(u))&&Wd(r,u),f=f.createElement("link"),Le(f);var _=f;_._p=new Promise(function(T,L){_.onload=T,_.onerror=L}),Un(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ko.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Pu=0;function wM(t,n){return t.stylesheets&&t.count===0&&Iu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Pu===0&&(Pu=62500*Wy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Pu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function k_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Iu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Ko(){this.count--,k_(this)}function DM(){this.imgCount--,k_(this)}var zu=null;function Iu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,n.forEach(UM,t),zu=null,Ko.call(t))}function UM(t,n){if(!(n.state.loading&4)){var a=zu.get(t);if(a)var r=a.get(null);else{a=new Map,zu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=Ko.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Os={$$typeof:et,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function NM(t,n,a,r,u,f,_,T,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.hiddenUpdates=co(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function X_(t,n,a,r,u,f,_,T,L,Q,ut,Mt){return t=new NM(t,n,a,_,L,Q,ut,Mt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},pf(f),t}function q_(t){return t?(t=ss,t):ss}function Y_(t,n,a,r,u,f){u=q_(u),r.context===null?r.context=u:r.pendingContext=u,r=za(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ia(t,r,n),a!==null&&(Zn(a,t,n),Ro(a,t,n))}function W_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kd(t,n){W_(t,n),(t=t.alternate)&&W_(t,n)}function j_(t){if(t.tag===13||t.tag===31){var n=xr(t,67108864);n!==null&&Zn(n,t,67108864),Kd(t,67108864)}}function Z_(t){if(t.tag===13||t.tag===31){var n=si();n=pt(n);var a=xr(t,n);a!==null&&Zn(a,t,n),Kd(t,n)}}var Ps=!0;function LM(t,n,a,r){var u=Dt.T;Dt.T=null;var f=Kt.p;try{Kt.p=2,Qd(t,n,a,r)}finally{Kt.p=f,Dt.T=u}}function OM(t,n,a,r){var u=Dt.T;Dt.T=null;var f=Kt.p;try{Kt.p=8,Qd(t,n,a,r)}finally{Kt.p=f,Dt.T=u}}function Qd(t,n,a,r){if(Ps){var u=Jd(r);if(u===null)Nd(t,n,r,Bu,a),Q_(t,r);else if(zM(u,t,n,a,r))r.stopPropagation();else if(Q_(t,r),n&4&&-1<PM.indexOf(t)){for(;u!==null;){var f=Se(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=di(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var L=1<<31-Ln(_);T.entanglements[1]|=L,_&=~L}Wi(f),(Fe&6)===0&&(Eu=X()+500,ko(0))}}break;case 31:case 13:T=xr(f,2),T!==null&&Zn(T,f,2),Au(),Kd(f,2)}if(f=Jd(r),f===null&&Nd(t,n,r,Bu,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nd(t,n,r,null,a)}}function Jd(t){return t=zc(t),$d(t)}var Bu=null;function $d(t){if(Bu=null,t=Be(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bu=t,null}function K_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case Ft:return 2;case Qt:return 8;case Ut:case Tt:return 32;case ee:return 268435456;default:return 32}default:return 32}}var th=!1,Za=null,Ka=null,Qa=null,Qo=new Map,Jo=new Map,Ja=[],PM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Se(n),n!==null&&j_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zM(t,n,a,r,u){switch(n){case"focusin":return Za=$o(Za,t,n,a,r,u),!0;case"dragenter":return Ka=$o(Ka,t,n,a,r,u),!0;case"mouseover":return Qa=$o(Qa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Qo.set(f,$o(Qo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Jo.set(f,$o(Jo.get(f)||null,t,n,a,r,u)),!0}return!1}function J_(t){var n=Be(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xt(t.priority,function(){Z_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Xt(t.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Pc=r,a.target.dispatchEvent(r),Pc=null}else return n=Se(a),n!==null&&j_(n),t.blockedOn=a,!1;n.shift()}return!0}function $_(t,n,a){Fu(t)&&a.delete(n)}function IM(){th=!1,Za!==null&&Fu(Za)&&(Za=null),Ka!==null&&Fu(Ka)&&(Ka=null),Qa!==null&&Fu(Qa)&&(Qa=null),Qo.forEach($_),Jo.forEach($_)}function Hu(t,n){t.blockedOn===n&&(t.blockedOn=null,th||(th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IM)))}var Gu=null;function tv(t){Gu!==t&&(Gu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if($d(r||a)===null)continue;break}var f=Se(a);f!==null&&(t.splice(n,3),n-=3,Pf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function zs(t){function n(L){return Hu(L,t)}Za!==null&&Hu(Za,t),Ka!==null&&Hu(Ka,t),Qa!==null&&Hu(Qa,t),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<Ja.length;a++){var r=Ja[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[$t]||null;if(typeof f=="function")_||tv(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[$t]||null)T=_.formAction;else if($d(u)!==null)continue}else T=_.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),tv(a)}}}function ev(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function eh(t){this._internalRoot=t}Vu.prototype.render=eh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();Y_(a,r,t,n,null,null)},Vu.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Y_(t.current,2,null,t,null,null),Au(),n[le]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&J_(t)}};var nv=e.version;if(nv!=="19.3.1")throw Error(s(527,nv,"19.3.1"));Kt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var BM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{be=ku.inject(BM),nn=ku}catch{}}return el.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=q0,f=Y0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=X_(t,1,!1,null,null,a,r,null,u,f,_,ev),t[le]=n.current,Ud(t),new eh(n)},el.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=q0,_=Y0,T=W0,L=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=X_(t,1,!0,n,a??null,r,u,L,f,_,T,ev),n.context=q_(null),a=n.current,r=si(),r=pt(r),u=za(r),u.callback=null,Ia(a,u,r),a=r,n.current.lanes=a,gr(n,a),Wi(n),t[le]=n.current,Ud(t),new Vu(n)},el.version="19.3.1",el}var dv;function jM(){if(dv)return ah.exports;dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ah.exports=WM(),ah.exports}var ZM=jM();const _e={generator:{name:"Power cabinet",short:"POWER",description:"Supplies 8 power. The heartbeat of your factory.",cost:140,width:1,height:1,power:0,seconds:0,color:"#edc56c"},intake:{name:"Research desk",short:"DATA",description:"Collects one clean data packet every 6 seconds.",cost:100,width:2,height:1,power:1,seconds:6,color:"#72bea5"},lab:{name:"Model studio",short:"TRAIN",description:"Turns 2 data into a trained model in 10 seconds.",cost:220,width:2,height:2,power:3,seconds:10,color:"#8ea6df"},dispatch:{name:"Shipping desk",short:"SHIP",description:"Packages one model for a contract in 8 seconds.",cost:140,width:1,height:2,power:2,seconds:8,color:"#dd9479"},compute:{name:"Compute rack",short:"BOOST",description:"Speeds up all training labs by 25% while powered.",cost:300,width:2,height:1,power:2,seconds:0,color:"#b7a1d4"}},hv=[["Teach a toaster small talk","Toast & Co.","It keeps asking whether we have tried turning the bread off and on."],["An apology bot for seagulls","Harbor Council","Polite apologies. No promises to stop stealing chips."],["Make spreadsheets feel loved","Cell Mates Inc.","Every cell deserves a little positive reinforcement."],["A chatbot for houseplants","Fern Support","Mostly listening. Absolutely no advice about cryptocurrency."],["Summarize the meeting about meetings","Calendar Goblins","The summary must be shorter than the next meeting."],["Detect suspiciously good puns","Dadabase Ltd.","Our current model thinks everything is a dad joke."],["Write a resignation letter for a printer","Paper Jam Union","After twelve years, it has finally run out of toner."],["Translate cat feedback","Meow Metrics","One star. Bowl visible. Food not visible."],["Coach a nervous weather app","Cloud Confidence","A 40% chance of rain is not a personal failure."]];function Op(o){const e=Math.min(6,Math.floor(o/3));return[0,1,2].map(i=>{const[s,l,c]=hv[(o*3+i)%hv.length];return{id:o*3+i+1,name:s,client:l,brief:c,packages:[2,4,6][i]+e,reward:[220,470,740][i]+e*120,reputation:[10,20,32][i]+e*2}})}function bx(){return{version:1,credits:900,reputation:0,size:6,data:0,models:0,packages:0,earned:0,completed:0,elapsed:0,nextId:1,machines:[],offers:Op(0),activeContract:1,paused:!1,speed:1}}function jr(o,e,i,s,l){const c=_e[e];if(!c||!Number.isInteger(i)||!Number.isInteger(s)||i<0||s<0||i+c.width>o.size||s+c.height>o.size)return"Keep the whole machine inside your site.";if(o.machines.some(d=>d.id!==l&&i<d.x+_e[d.kind].width&&i+c.width>d.x&&s<d.y+_e[d.kind].height&&s+c.height>d.y))return"That space is already occupied."}const Ax=o=>Math.round(_e[o.kind].cost*.65*o.level),KM=o=>350+(o.size-6)*150;function cr(o){const e=o.machines.filter(l=>l.kind==="generator"&&!l.paused).reduce((l,c)=>l+8+(c.level-1)*5,0);let i=0;const s=new Set;for(const l of o.machines){if(l.paused||l.kind==="generator")continue;const c=_e[l.kind].power+l.level-1;i+c<=e&&(i+=c,s.add(l.id))}return{supply:e,used:i,demand:o.machines.filter(l=>!l.paused).reduce((l,c)=>l+(c.kind==="generator"?0:_e[c.kind].power+c.level-1),0),powered:s}}function pv(o,e){const i=_e[o.kind],s=_e[e.kind];return(o.x+i.width===e.x||e.x+s.width===o.x)&&o.y<e.y+s.height&&o.y+i.height>e.y||(o.y+i.height===e.y||e.y+s.height===o.y)&&o.x<e.x+s.width&&o.x+i.width>e.x}function Sc(o,e,i=cr(o).powered){let s=1+(e.level-1)*.35;return(e.kind==="lab"&&o.machines.some(l=>l.kind==="intake"&&pv(e,l))||e.kind==="dispatch"&&o.machines.some(l=>l.kind==="lab"&&pv(e,l)))&&(s+=.15),e.kind==="lab"&&(s+=o.machines.filter(l=>l.kind==="compute"&&i.has(l.id)).reduce((l,c)=>l+.25*c.level,0)),_e[e.kind].seconds/s}function QM(o,e){return e.paused?"Paused":e.kind==="generator"?"Generating power":cr(o).powered.has(e.id)?e.kind==="compute"?"Accelerating labs":e.working?"Working":e.kind==="lab"&&o.data<2?"Needs 2 data":e.kind==="dispatch"&&o.models<1?"Needs a model":"Ready":"Needs power"}function JM(o,e){if(o.paused||!Number.isFinite(e)||e<=0)return o;const i=structuredClone(o);let s=Math.min(e,60);for(;s>0;){const l=Math.min(.25,s);s-=l,i.elapsed+=l;const c=cr(i);for(const d of i.machines)if(!(!c.powered.has(d.id)||!_e[d.kind].seconds)){if(!d.working){if(d.kind==="lab"){if(i.data<2)continue;i.data-=2}if(d.kind==="dispatch"){if(i.models<1)continue;i.models--}d.working=!0,d.progress=0}d.progress+=l/Sc(i,d,c.powered),d.progress>=1&&(d.progress=0,d.working=!1,d.produced++,d.kind==="intake"&&i.data++,d.kind==="lab"&&i.models++,d.kind==="dispatch"&&i.packages++)}}return i}function $M(o,e){const i=structuredClone(o),s=l=>({state:o,error:l});if(e.type==="place"){const l=_e[e.kind];if(!l)return s("Unknown machine.");const c=jr(i,e.kind,e.x,e.y);return c?s(c):i.credits<l.cost?s("Not enough credits. Sell a machine for a full refund or finish a contract."):(i.credits-=l.cost,i.machines.push({id:i.nextId++,kind:e.kind,x:e.x,y:e.y,level:1,progress:0,working:!1,paused:!1,invested:l.cost,produced:0}),{state:i,message:`${l.name} built.`})}if(e.type==="move"||e.type==="sell"||e.type==="upgrade"||e.type==="toggle"){const l=i.machines.find(c=>c.id===e.id);if(!l)return s("Machine not found.");if(e.type==="move"){const c=jr(i,l.kind,e.x,e.y,l.id);if(c)return s(c);l.x=e.x,l.y=e.y}if(e.type==="sell"&&(i.credits+=l.invested,l.working&&l.kind==="lab"&&(i.data+=2),l.working&&l.kind==="dispatch"&&i.models++,i.machines=i.machines.filter(c=>c.id!==l.id)),e.type==="upgrade"){if(l.level>=3)return s("This machine is fully upgraded.");const c=Ax(l);if(i.credits<c)return s("Not enough credits for this upgrade.");i.credits-=c,l.invested+=c,l.level++}return e.type==="toggle"&&(l.paused=!l.paused),{state:i}}if(e.type==="expand"){if(i.size>=10)return s("Your site has reached its maximum size.");const l=KM(i);return i.credits<l?s("Not enough credits to expand."):i.credits-l+i.machines.reduce((c,d)=>c+d.invested,0)<600?s("Keep $600 in credits and refundable machines to rebuild a production line. Complete another contract before expanding."):(i.credits-=l,i.size+=2,{state:i,message:"Room to grow! Two new rows and columns unlocked."})}if(e.type==="contract"){if(!i.offers.some(l=>l.id===e.id))return s("Contract not found.");i.activeContract=e.id}if(e.type==="deliver"){const l=i.offers.find(c=>c.id===i.activeContract);return l?i.packages<l.packages?s(`Make ${l.packages-i.packages} more packages to deliver this contract.`):(i.packages-=l.packages,i.credits+=l.reward,i.earned+=l.reward,i.reputation+=l.reputation,i.completed++,i.offers=Op(i.completed),i.activeContract=i.offers[0].id,{state:i,message:`Delivered to ${l.client}! +$${l.reward} · +${l.reputation} reputation.`}):s("Choose a contract.")}return e.type==="pause"&&(i.paused=!i.paused),e.type==="speed"&&(i.speed=e.speed),{state:i}}function mv(o){return JSON.stringify(o)}function gv(o){if(o.length>1e5)throw Error("Save is too large.");const e=JSON.parse(o),i=(c,d=1e12)=>typeof c=="number"&&Number.isInteger(c)&&c>=0&&c<=d;if(!e||e.version!==1||![6,8,10].includes(e.size)||![1,2,4].includes(e.speed)||typeof e.paused!="boolean"||!["credits","reputation","data","models","packages","earned","completed","nextId"].every(c=>i(e[c]))||!Number.isFinite(e.elapsed)||e.elapsed<0||!Array.isArray(e.machines)||e.machines.length>100)throw Error("This save is not a valid factory.");const s=bx();Object.assign(s,{credits:e.credits,reputation:e.reputation,size:e.size,data:e.data,models:e.models,packages:e.packages,earned:e.earned,completed:e.completed,elapsed:e.elapsed,nextId:e.nextId,paused:e.paused,speed:e.speed});const l=new Set;for(const c of e.machines){if(!c||!Object.hasOwn(_e,c.kind)||!i(c.id)||c.id<1||l.has(c.id)||c.id>=e.nextId||![1,2,3].includes(c.level)||!Number.isFinite(c.progress)||c.progress<0||c.progress>=1||typeof c.working!="boolean"||typeof c.paused!="boolean"||!i(c.invested)||!i(c.produced)||jr(s,c.kind,c.x,c.y))throw Error("Save contains an invalid machine.");const d=_e[c.kind].cost+Array.from({length:c.level-1},(h,v)=>Math.round(_e[c.kind].cost*.65*(v+1))).reduce((h,v)=>h+v,0);if(c.invested!==d)throw Error("Save contains invalid machine costs.");l.add(c.id),s.machines.push({id:c.id,kind:c.kind,x:c.x,y:c.y,level:c.level,progress:c.progress,working:c.working,paused:c.paused,invested:c.invested,produced:c.produced})}if(s.offers=Op(e.completed),!s.offers.some(c=>c.id===e.activeContract))throw Error("Save contains an invalid contract.");return s.activeContract=e.activeContract,s}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="180",tE=0,_v=1,eE=2,Rx=1,Cx=2,Ma=3,fr=0,Jn=1,Ea=2,lr=0,Js=1,vv=2,xv=3,Sv=4,nE=5,Xr=100,iE=101,aE=102,rE=103,sE=104,oE=200,lE=201,uE=202,cE=203,Vh=204,kh=205,fE=206,dE=207,hE=208,pE=209,mE=210,gE=211,_E=212,vE=213,xE=214,Xh=0,qh=1,Yh=2,to=3,Wh=4,jh=5,Zh=6,Kh=7,wx=0,SE=1,yE=2,ur=0,ME=1,EE=2,TE=3,Dx=4,bE=5,AE=6,RE=7,Ux=300,eo=301,no=302,Qh=303,Jh=304,Ac=306,$h=1e3,Yr=1001,tp=1002,fi=1003,CE=1004,Xu=1005,Ki=1006,lh=1007,Wr=1008,$i=1009,Nx=1010,Lx=1011,fl=1012,zp=1013,Zr=1014,Ta=1015,gl=1016,Ip=1017,Bp=1018,dl=1020,Ox=35902,Px=35899,zx=1021,Ix=1022,Pi=1023,hl=1026,pl=1027,Bx=1028,Fp=1029,Fx=1030,Hp=1031,Gp=1033,mc=33776,gc=33777,_c=33778,vc=33779,ep=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37808,up=37809,cp=37810,fp=37811,dp=37812,hp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,Sp=37820,yp=37821,Mp=36492,Ep=36494,Tp=36495,bp=36283,Ap=36284,Rp=36285,Cp=36286,wE=3200,DE=3201,Hx=0,UE=1,or="",ci="srgb",io="srgb-linear",yc="linear",We="srgb",Is=7680,yv=519,NE=512,LE=513,OE=514,Gx=515,PE=516,zE=517,IE=518,BE=519,Mv=35044,Ev="300 es",Qi=2e3,Mc=2001;class ro{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=Math.PI/180,wp=180/Math.PI;function _l(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Ce(o,e,i){return Math.max(e,Math.min(i,o))}function FE(o,e){return(o%e+e)%e}function ch(o,e,i){return(1-i)*o+i*e}function nl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let v=s[l+0],g=s[l+1],S=s[l+2],m=s[l+3];const p=c[d+0],y=c[d+1],b=c[d+2],A=c[d+3];if(h===0){e[i+0]=v,e[i+1]=g,e[i+2]=S,e[i+3]=m;return}if(h===1){e[i+0]=p,e[i+1]=y,e[i+2]=b,e[i+3]=A;return}if(m!==A||v!==p||g!==y||S!==b){let M=1-h;const x=v*p+g*y+S*b+m*A,D=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const G=Math.sqrt(P),B=Math.atan2(G,x*D);M=Math.sin(M*B)/G,h=Math.sin(h*B)/G}const U=h*D;if(v=v*M+p*U,g=g*M+y*U,S=S*M+b*U,m=m*M+A*U,M===1-h){const G=1/Math.sqrt(v*v+g*g+S*S+m*m);v*=G,g*=G,S*=G,m*=G}}e[i]=v,e[i+1]=g,e[i+2]=S,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],v=s[l+1],g=s[l+2],S=s[l+3],m=c[d],p=c[d+1],y=c[d+2],b=c[d+3];return e[i]=h*b+S*m+v*y-g*p,e[i+1]=v*b+S*p+g*m-h*y,e[i+2]=g*b+S*y+h*p-v*m,e[i+3]=S*b-h*m-v*p-g*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,v=Math.sin,g=h(s/2),S=h(l/2),m=h(c/2),p=v(s/2),y=v(l/2),b=v(c/2);switch(d){case"XYZ":this._x=p*S*m+g*y*b,this._y=g*y*m-p*S*b,this._z=g*S*b+p*y*m,this._w=g*S*m-p*y*b;break;case"YXZ":this._x=p*S*m+g*y*b,this._y=g*y*m-p*S*b,this._z=g*S*b-p*y*m,this._w=g*S*m+p*y*b;break;case"ZXY":this._x=p*S*m-g*y*b,this._y=g*y*m+p*S*b,this._z=g*S*b+p*y*m,this._w=g*S*m-p*y*b;break;case"ZYX":this._x=p*S*m-g*y*b,this._y=g*y*m+p*S*b,this._z=g*S*b-p*y*m,this._w=g*S*m+p*y*b;break;case"YZX":this._x=p*S*m+g*y*b,this._y=g*y*m+p*S*b,this._z=g*S*b-p*y*m,this._w=g*S*m-p*y*b;break;case"XZY":this._x=p*S*m-g*y*b,this._y=g*y*m-p*S*b,this._z=g*S*b+p*y*m,this._w=g*S*m+p*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],v=i[9],g=i[2],S=i[6],m=i[10],p=s+h+m;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(S-v)*y,this._y=(c-g)*y,this._z=(d-l)*y}else if(s>h&&s>m){const y=2*Math.sqrt(1+s-h-m);this._w=(S-v)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+g)/y}else if(h>m){const y=2*Math.sqrt(1+h-s-m);this._w=(c-g)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(v+S)/y}else{const y=2*Math.sqrt(1+m-s-h);this._w=(d-l)/y,this._x=(c+g)/y,this._y=(v+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,v=i._y,g=i._z,S=i._w;return this._x=s*S+d*h+l*g-c*v,this._y=l*S+d*v+c*h-s*g,this._z=c*S+d*g+s*v-l*h,this._w=d*S-s*h-l*v-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const v=1-h*h;if(v<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const g=Math.sqrt(v),S=Math.atan2(g,h),m=Math.sin((1-i)*S)/g,p=Math.sin(i*S)/g;return this._w=d*m+this._w*p,this._x=s*m+this._x*p,this._y=l*m+this._y*p,this._z=c*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Tv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Tv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,v=e.w,g=2*(d*l-h*s),S=2*(h*i-c*l),m=2*(c*s-d*i);return this.x=i+v*g+d*m-h*S,this.y=s+v*S+h*g-c*m,this.z=l+v*m+c*S-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,v=i.z;return this.x=l*v-c*h,this.y=c*d-s*v,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ce(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new nt,Tv=new vl;class ve{constructor(e,i,s,l,c,d,h,v,g){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,v,g)}set(e,i,s,l,c,d,h,v,g){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=v,S[6]=s,S[7]=d,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],v=s[6],g=s[1],S=s[4],m=s[7],p=s[2],y=s[5],b=s[8],A=l[0],M=l[3],x=l[6],D=l[1],P=l[4],U=l[7],G=l[2],B=l[5],O=l[8];return c[0]=d*A+h*D+v*G,c[3]=d*M+h*P+v*B,c[6]=d*x+h*U+v*O,c[1]=g*A+S*D+m*G,c[4]=g*M+S*P+m*B,c[7]=g*x+S*U+m*O,c[2]=p*A+y*D+b*G,c[5]=p*M+y*P+b*B,c[8]=p*x+y*U+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],S=e[8];return i*d*S-i*h*g-s*c*S+s*h*v+l*c*g-l*d*v}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],S=e[8],m=S*d-h*g,p=h*v-S*c,y=g*c-d*v,b=i*m+s*p+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=m*A,e[1]=(l*g-S*s)*A,e[2]=(h*s-l*d)*A,e[3]=p*A,e[4]=(S*i-l*v)*A,e[5]=(l*c-h*i)*A,e[6]=y*A,e[7]=(s*v-g*i)*A,e[8]=(d*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const v=Math.cos(c),g=Math.sin(c);return this.set(s*v,s*g,-s*(v*d+g*h)+d+e,-l*g,l*v,-l*(-g*d+v*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(dh.makeScale(e,i)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,i){return this.premultiply(dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new ve;function Vx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function HE(){const o=Ec("canvas");return o.style.display="block",o}const bv={};function ml(o){o in bv||(bv[o]=!0,console.warn(o))}function GE(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Av=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VE(){const o={enabled:!0,workingColorSpace:io,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===We&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===We&&(l.r=$s(l.r),l.g=$s(l.g),l.b=$s(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ml("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ml("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[io]:{primaries:e,whitePoint:s,transfer:yc,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:We,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Pe=VE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class kE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=Ec("canvas")),Bs.width=e.width,Bs.height=e.height;const l=Bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=_l(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(hh(l[d].image)):c.push(hh(l[d]))}else c=hh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qE=0;const ph=new nt;class Xn extends ro{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Yr,l=Yr,c=Ki,d=Wr,h=Pi,v=$i,g=Xn.DEFAULT_ANISOTROPY,S=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=_l(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=v,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Ux;Xn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,s=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const v=e.elements,g=v[0],S=v[4],m=v[8],p=v[1],y=v[5],b=v[9],A=v[2],M=v[6],x=v[10];if(Math.abs(S-p)<.01&&Math.abs(m-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(S+p)<.1&&Math.abs(m+A)<.1&&Math.abs(b+M)<.1&&Math.abs(g+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(g+1)/2,U=(y+1)/2,G=(x+1)/2,B=(S+p)/4,O=(m+A)/4,F=(b+M)/4;return P>U&&P>G?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=B/s,c=O/s):U>G?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=B/l,c=F/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=O/c,l=F/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-b)*(M-b)+(m-A)*(m-A)+(p-S)*(p-S));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(m-A)/D,this.z=(p-S)/D,this.w=Math.acos((g+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this.w=Ce(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this.w=Ce(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends ro{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends YE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class kx extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),qu.copy(s.boundingBox)),qu.applyMatrix4(e.matrixWorld),this.union(qu)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Yu.subVectors(this.max,il),Fs.subVectors(e.a,il),Hs.subVectors(e.b,il),Gs.subVectors(e.c,il),tr.subVectors(Hs,Fs),er.subVectors(Gs,Hs),Ir.subVectors(Fs,Gs);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Ir.z,Ir.y,tr.z,0,-tr.x,er.z,0,-er.x,Ir.z,0,-Ir.x,-tr.y,tr.x,0,-er.y,er.x,0,-Ir.y,Ir.x,0];return!mh(i,Fs,Hs,Gs,Yu)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,Fs,Hs,Gs,Yu))?!1:(Wu.crossVectors(tr,er),i=[Wu.x,Wu.y,Wu.z],mh(i,Fs,Hs,Gs,Yu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ui=new nt,qu=new xl,Fs=new nt,Hs=new nt,Gs=new nt,tr=new nt,er=new nt,Ir=new nt,il=new nt,Yu=new nt,Wu=new nt,Br=new nt;function mh(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Br.fromArray(o,c);const h=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),v=e.dot(Br),g=i.dot(Br),S=s.dot(Br);if(Math.max(-Math.max(v,g,S),Math.min(v,g,S))>h)return!1}return!0}const jE=new xl,al=new nt,gh=new nt;class Rc{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):jE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const i=al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(al,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(gh)),this.expandByPoint(al.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new nt,_h=new nt,ju=new nt,nr=new nt,vh=new nt,Zu=new nt,xh=new nt;class kp{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_h.copy(e).add(i).multiplyScalar(.5),ju.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(_h);const c=e.distanceTo(i)*.5,d=-this.direction.dot(ju),h=nr.dot(this.direction),v=-nr.dot(ju),g=nr.lengthSq(),S=Math.abs(1-d*d);let m,p,y,b;if(S>0)if(m=d*v-h,p=d*h-v,b=c*S,m>=0)if(p>=-b)if(p<=b){const A=1/S;m*=A,p*=A,y=m*(m+d*p+2*h)+p*(d*m+p+2*v)+g}else p=c,m=Math.max(0,-(d*p+h)),y=-m*m+p*(p+2*v)+g;else p=-c,m=Math.max(0,-(d*p+h)),y=-m*m+p*(p+2*v)+g;else p<=-b?(m=Math.max(0,-(-d*c+h)),p=m>0?-c:Math.min(Math.max(-c,-v),c),y=-m*m+p*(p+2*v)+g):p<=b?(m=0,p=Math.min(Math.max(-c,-v),c),y=p*(p+2*v)+g):(m=Math.max(0,-(d*c+h)),p=m>0?c:Math.min(Math.max(-c,-v),c),y=-m*m+p*(p+2*v)+g);else p=d>0?-c:c,m=Math.max(0,-(d*p+h)),y=-m*m+p*(p+2*v)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(_h).addScaledVector(ju,p),y}intersectSphere(e,i){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,v=s+d;return v<0?null:h<0?this.at(v,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,v;const g=1/this.direction.x,S=1/this.direction.y,m=1/this.direction.z,p=this.origin;return g>=0?(s=(e.min.x-p.x)*g,l=(e.max.x-p.x)*g):(s=(e.max.x-p.x)*g,l=(e.min.x-p.x)*g),S>=0?(c=(e.min.y-p.y)*S,d=(e.max.y-p.y)*S):(c=(e.max.y-p.y)*S,d=(e.min.y-p.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),m>=0?(h=(e.min.z-p.z)*m,v=(e.max.z-p.z)*m):(h=(e.max.z-p.z)*m,v=(e.min.z-p.z)*m),s>v||h>l)||((h>s||s!==s)&&(s=h),(v<l||l!==l)&&(l=v),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,s,l,c){vh.subVectors(i,e),Zu.subVectors(s,e),xh.crossVectors(vh,Zu);let d=this.direction.dot(xh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;nr.subVectors(this.origin,e);const v=h*this.direction.dot(Zu.crossVectors(nr,Zu));if(v<0)return null;const g=h*this.direction.dot(vh.cross(nr));if(g<0||v+g>d)return null;const S=-h*nr.dot(xh);return S<0?null:this.at(S/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,s,l,c,d,h,v,g,S,m,p,y,b,A,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,v,g,S,m,p,y,b,A,M)}set(e,i,s,l,c,d,h,v,g,S,m,p,y,b,A,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=v,x[2]=g,x[6]=S,x[10]=m,x[14]=p,x[3]=y,x[7]=b,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Vs.setFromMatrixColumn(e,0).length(),c=1/Vs.setFromMatrixColumn(e,1).length(),d=1/Vs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),v=Math.cos(l),g=Math.sin(l),S=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const p=d*S,y=d*m,b=h*S,A=h*m;i[0]=v*S,i[4]=-v*m,i[8]=g,i[1]=y+b*g,i[5]=p-A*g,i[9]=-h*v,i[2]=A-p*g,i[6]=b+y*g,i[10]=d*v}else if(e.order==="YXZ"){const p=v*S,y=v*m,b=g*S,A=g*m;i[0]=p+A*h,i[4]=b*h-y,i[8]=d*g,i[1]=d*m,i[5]=d*S,i[9]=-h,i[2]=y*h-b,i[6]=A+p*h,i[10]=d*v}else if(e.order==="ZXY"){const p=v*S,y=v*m,b=g*S,A=g*m;i[0]=p-A*h,i[4]=-d*m,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*S,i[9]=A-p*h,i[2]=-d*g,i[6]=h,i[10]=d*v}else if(e.order==="ZYX"){const p=d*S,y=d*m,b=h*S,A=h*m;i[0]=v*S,i[4]=b*g-y,i[8]=p*g+A,i[1]=v*m,i[5]=A*g+p,i[9]=y*g-b,i[2]=-g,i[6]=h*v,i[10]=d*v}else if(e.order==="YZX"){const p=d*v,y=d*g,b=h*v,A=h*g;i[0]=v*S,i[4]=A-p*m,i[8]=b*m+y,i[1]=m,i[5]=d*S,i[9]=-h*S,i[2]=-g*S,i[6]=y*m+b,i[10]=p-A*m}else if(e.order==="XZY"){const p=d*v,y=d*g,b=h*v,A=h*g;i[0]=v*S,i[4]=-m,i[8]=g*S,i[1]=p*m+A,i[5]=d*S,i[9]=y*m-b,i[2]=b*m-y,i[6]=h*S,i[10]=A*m+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZE,e,KE)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ir.crossVectors(s,li),ir.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ir.crossVectors(s,li)),ir.normalize(),Ku.crossVectors(li,ir),l[0]=ir.x,l[4]=Ku.x,l[8]=li.x,l[1]=ir.y,l[5]=Ku.y,l[9]=li.y,l[2]=ir.z,l[6]=Ku.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],v=s[8],g=s[12],S=s[1],m=s[5],p=s[9],y=s[13],b=s[2],A=s[6],M=s[10],x=s[14],D=s[3],P=s[7],U=s[11],G=s[15],B=l[0],O=l[4],F=l[8],C=l[12],w=l[1],H=l[5],j=l[9],dt=l[13],_t=l[2],et=l[6],q=l[10],lt=l[14],J=l[3],At=l[7],Ct=l[11],ft=l[15];return c[0]=d*B+h*w+v*_t+g*J,c[4]=d*O+h*H+v*et+g*At,c[8]=d*F+h*j+v*q+g*Ct,c[12]=d*C+h*dt+v*lt+g*ft,c[1]=S*B+m*w+p*_t+y*J,c[5]=S*O+m*H+p*et+y*At,c[9]=S*F+m*j+p*q+y*Ct,c[13]=S*C+m*dt+p*lt+y*ft,c[2]=b*B+A*w+M*_t+x*J,c[6]=b*O+A*H+M*et+x*At,c[10]=b*F+A*j+M*q+x*Ct,c[14]=b*C+A*dt+M*lt+x*ft,c[3]=D*B+P*w+U*_t+G*J,c[7]=D*O+P*H+U*et+G*At,c[11]=D*F+P*j+U*q+G*Ct,c[15]=D*C+P*dt+U*lt+G*ft,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],v=e[9],g=e[13],S=e[2],m=e[6],p=e[10],y=e[14],b=e[3],A=e[7],M=e[11],x=e[15];return b*(+c*v*m-l*g*m-c*h*p+s*g*p+l*h*y-s*v*y)+A*(+i*v*y-i*g*p+c*d*p-l*d*y+l*g*S-c*v*S)+M*(+i*g*m-i*h*y-c*d*m+s*d*y+c*h*S-s*g*S)+x*(-l*h*S-i*v*m+i*h*p+l*d*m-s*d*p+s*v*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],v=e[6],g=e[7],S=e[8],m=e[9],p=e[10],y=e[11],b=e[12],A=e[13],M=e[14],x=e[15],D=m*M*g-A*p*g+A*v*y-h*M*y-m*v*x+h*p*x,P=b*p*g-S*M*g-b*v*y+d*M*y+S*v*x-d*p*x,U=S*A*g-b*m*g+b*h*y-d*A*y-S*h*x+d*m*x,G=b*m*v-S*A*v-b*h*p+d*A*p+S*h*M-d*m*M,B=i*D+s*P+l*U+c*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=D*O,e[1]=(A*p*c-m*M*c-A*l*y+s*M*y+m*l*x-s*p*x)*O,e[2]=(h*M*c-A*v*c+A*l*g-s*M*g-h*l*x+s*v*x)*O,e[3]=(m*v*c-h*p*c-m*l*g+s*p*g+h*l*y-s*v*y)*O,e[4]=P*O,e[5]=(S*M*c-b*p*c+b*l*y-i*M*y-S*l*x+i*p*x)*O,e[6]=(b*v*c-d*M*c-b*l*g+i*M*g+d*l*x-i*v*x)*O,e[7]=(d*p*c-S*v*c+S*l*g-i*p*g-d*l*y+i*v*y)*O,e[8]=U*O,e[9]=(b*m*c-S*A*c-b*s*y+i*A*y+S*s*x-i*m*x)*O,e[10]=(d*A*c-b*h*c+b*s*g-i*A*g-d*s*x+i*h*x)*O,e[11]=(S*h*c-d*m*c-S*s*g+i*m*g+d*s*y-i*h*y)*O,e[12]=G*O,e[13]=(S*A*l-b*m*l+b*s*p-i*A*p-S*s*M+i*m*M)*O,e[14]=(b*h*l-d*A*l-b*s*v+i*A*v+d*s*M-i*h*M)*O,e[15]=(d*m*l-S*h*l+S*s*v-i*m*v-d*s*p+i*h*p)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,v=e.z,g=c*d,S=c*h;return this.set(g*d+s,g*h-l*v,g*v+l*h,0,g*h+l*v,S*h+s,S*v-l*d,0,g*v-l*h,S*v+l*d,c*v*v+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,v=i._w,g=c+c,S=d+d,m=h+h,p=c*g,y=c*S,b=c*m,A=d*S,M=d*m,x=h*m,D=v*g,P=v*S,U=v*m,G=s.x,B=s.y,O=s.z;return l[0]=(1-(A+x))*G,l[1]=(y+U)*G,l[2]=(b-P)*G,l[3]=0,l[4]=(y-U)*B,l[5]=(1-(p+x))*B,l[6]=(M+D)*B,l[7]=0,l[8]=(b+P)*O,l[9]=(M-D)*O,l[10]=(1-(p+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Vs.set(l[0],l[1],l[2]).length();const d=Vs.set(l[4],l[5],l[6]).length(),h=Vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const g=1/c,S=1/d,m=1/h;return Ni.elements[0]*=g,Ni.elements[1]*=g,Ni.elements[2]*=g,Ni.elements[4]*=S,Ni.elements[5]*=S,Ni.elements[6]*=S,Ni.elements[8]*=m,Ni.elements[9]*=m,Ni.elements[10]*=m,i.setFromRotationMatrix(Ni),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Qi,v=!1){const g=this.elements,S=2*c/(i-e),m=2*c/(s-l),p=(i+e)/(i-e),y=(s+l)/(s-l);let b,A;if(v)b=c/(d-c),A=d*c/(d-c);else if(h===Qi)b=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Mc)b=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=p,g[12]=0,g[1]=0,g[5]=m,g[9]=y,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Qi,v=!1){const g=this.elements,S=2/(i-e),m=2/(s-l),p=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,A;if(v)b=1/(d-c),A=d/(d-c);else if(h===Qi)b=-2/(d-c),A=-(d+c)/(d-c);else if(h===Mc)b=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=0,g[12]=p,g[1]=0,g[5]=m,g[9]=0,g[13]=y,g[2]=0,g[6]=0,g[10]=b,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Vs=new nt,Ni=new en,ZE=new nt(0,0,0),KE=new nt(1,1,1),ir=new nt,Ku=new nt,li=new nt,Cv=new en,wv=new vl;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],v=l[1],g=l[5],S=l[9],m=l[2],p=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(p,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(v,c));break;case"ZYX":this._y=Math.asin(-Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(v,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Ce(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QE=0;const Dv=new nt,ks=new vl,xa=new en,Qu=new nt,rl=new nt,JE=new nt,$E=new vl,Uv=new nt(1,0,0),Nv=new nt(0,1,0),Lv=new nt(0,0,1),Ov={type:"added"},t1={type:"removed"},Xs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class An extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new nt,i=new ta,s=new vl,l=new nt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ve}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Uv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Lv,e)}translateOnAxis(e,i){return Dv.copy(e).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Uv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Lv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Qu.copy(e):Qu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(rl,Qu,this.up):xa.lookAt(Qu,rl,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),ks.setFromRotationMatrix(xa),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ov),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(t1),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ov),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,$E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,v){return h[v.uuid]===void 0&&(h[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const v=h.shapes;if(Array.isArray(v))for(let g=0,S=v.length;g<S;g++){const m=v[g];c(e.shapes,m)}else c(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let v=0,g=this.material.length;v<g;v++)h.push(c(e.materials,this.material[v]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const v=this.animations[h];l.animations.push(c(e.animations,v))}}if(i){const h=d(e.geometries),v=d(e.materials),g=d(e.textures),S=d(e.images),m=d(e.shapes),p=d(e.skeletons),y=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),v.length>0&&(s.materials=v),g.length>0&&(s.textures=g),S.length>0&&(s.images=S),m.length>0&&(s.shapes=m),p.length>0&&(s.skeletons=p),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const v=[];for(const g in h){const S=h[g];delete S.metadata,v.push(S)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new nt(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new nt,Sa=new nt,yh=new nt,ya=new nt,qs=new nt,Ys=new nt,Pv=new nt,Mh=new nt,Eh=new nt,Th=new nt,bh=new je,Ah=new je,Rh=new je;class Oi{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Li.subVectors(l,i),Sa.subVectors(s,i),yh.subVectors(e,i);const d=Li.dot(Li),h=Li.dot(Sa),v=Li.dot(yh),g=Sa.dot(Sa),S=Sa.dot(yh),m=d*g-h*h;if(m===0)return c.set(0,0,0),null;const p=1/m,y=(g*v-h*S)*p,b=(d*S-h*v)*p;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,s,l,c,d,h,v){return this.getBarycoord(e,i,s,l,ya)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(c,ya.x),v.addScaledVector(d,ya.y),v.addScaledVector(h,ya.z),v)}static getInterpolatedAttribute(e,i,s,l,c,d){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(bh,c.x),d.addScaledVector(Ah,c.y),d.addScaledVector(Rh,c.z),d}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Sa.subVectors(e,i),Li.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Li.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;qs.subVectors(l,s),Ys.subVectors(c,s),Mh.subVectors(e,s);const v=qs.dot(Mh),g=Ys.dot(Mh);if(v<=0&&g<=0)return i.copy(s);Eh.subVectors(e,l);const S=qs.dot(Eh),m=Ys.dot(Eh);if(S>=0&&m<=S)return i.copy(l);const p=v*m-S*g;if(p<=0&&v>=0&&S<=0)return d=v/(v-S),i.copy(s).addScaledVector(qs,d);Th.subVectors(e,c);const y=qs.dot(Th),b=Ys.dot(Th);if(b>=0&&y<=b)return i.copy(c);const A=y*g-v*b;if(A<=0&&g>=0&&b<=0)return h=g/(g-b),i.copy(s).addScaledVector(Ys,h);const M=S*b-y*m;if(M<=0&&m-S>=0&&y-b>=0)return Pv.subVectors(c,l),h=(m-S)/(m-S+(y-b)),i.copy(l).addScaledVector(Pv,h);const x=1/(M+A+p);return d=A*x,h=p*x,i.copy(s).addScaledVector(qs,d).addScaledVector(Ys,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Ch(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Pe.workingColorSpace){return this.r=e,this.g=i,this.b=s,Pe.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Pe.workingColorSpace){if(e=FE(e,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ch(d,c,e+1/3),this.g=Ch(d,c,e),this.b=Ch(d,c,e-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Xx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Pe.workingToColorSpace(In.copy(this),e),Math.round(Ce(In.r*255,0,255))*65536+Math.round(Ce(In.g*255,0,255))*256+Math.round(Ce(In.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pe.workingColorSpace){Pe.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let v,g;const S=(h+d)/2;if(h===d)v=0,g=0;else{const m=d-h;switch(g=S<=.5?m/(d+h):m/(2-d-h),d){case s:v=(l-c)/m+(l<c?6:0);break;case l:v=(c-s)/m+2;break;case c:v=(s-l)/m+4;break}v/=6}return e.h=v,e.s=g,e.l=S,e}getRGB(e,i=Pe.workingColorSpace){return Pe.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ci){Pe.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(Ju);const s=ch(ar.h,Ju.h,i),l=ch(ar.s,Ju.s,i),c=ch(ar.l,Ju.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new we;we.NAMES=Xx;let e1=0;class so extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=Js,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==Xr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const v=c[h];delete v.metadata,d.push(v)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cl extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new nt,$u=new Ue;let n1=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Mv,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)$u.fromBufferAttribute(this,i),$u.applyMatrix3(e),this.setXY(i,$u.x,$u.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=nl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=nl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=nl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=nl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=nl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class qx extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Yx extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class gn extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let i1=0;const Mi=new en,wh=new An,Ws=new nt,ui=new xl,sl=new xl,bn=new nt;class Ti extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Yx:qx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];sl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ui.min,sl.min),ui.expandByPoint(bn),bn.addVectors(ui.max,sl.max),ui.expandByPoint(bn)):(ui.expandByPoint(sl.min),ui.expandByPoint(sl.max))}ui.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],v=this.morphTargetsRelative;for(let g=0,S=h.count;g<S;g++)bn.fromBufferAttribute(h,g),v&&(Ws.fromBufferAttribute(e,g),bn.add(Ws)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],v=[];for(let F=0;F<s.count;F++)h[F]=new nt,v[F]=new nt;const g=new nt,S=new nt,m=new nt,p=new Ue,y=new Ue,b=new Ue,A=new nt,M=new nt;function x(F,C,w){g.fromBufferAttribute(s,F),S.fromBufferAttribute(s,C),m.fromBufferAttribute(s,w),p.fromBufferAttribute(c,F),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),S.sub(g),m.sub(g),y.sub(p),b.sub(p);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(A.copy(S).multiplyScalar(b.y).addScaledVector(m,-y.y).multiplyScalar(H),M.copy(m).multiplyScalar(y.x).addScaledVector(S,-b.x).multiplyScalar(H),h[F].add(A),h[C].add(A),h[w].add(A),v[F].add(M),v[C].add(M),v[w].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,C=D.length;F<C;++F){const w=D[F],H=w.start,j=w.count;for(let dt=H,_t=H+j;dt<_t;dt+=3)x(e.getX(dt+0),e.getX(dt+1),e.getX(dt+2))}const P=new nt,U=new nt,G=new nt,B=new nt;function O(F){G.fromBufferAttribute(l,F),B.copy(G);const C=h[F];P.copy(C),P.sub(G.multiplyScalar(G.dot(C))).normalize(),U.crossVectors(B,C);const H=U.dot(v[F])<0?-1:1;d.setXYZW(F,P.x,P.y,P.z,H)}for(let F=0,C=D.length;F<C;++F){const w=D[F],H=w.start,j=w.count;for(let dt=H,_t=H+j;dt<_t;dt+=3)O(e.getX(dt+0)),O(e.getX(dt+1)),O(e.getX(dt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let p=0,y=s.count;p<y;p++)s.setXYZ(p,0,0,0);const l=new nt,c=new nt,d=new nt,h=new nt,v=new nt,g=new nt,S=new nt,m=new nt;if(e)for(let p=0,y=e.count;p<y;p+=3){const b=e.getX(p+0),A=e.getX(p+1),M=e.getX(p+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),S.subVectors(d,c),m.subVectors(l,c),S.cross(m),h.fromBufferAttribute(s,b),v.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),h.add(S),v.add(S),g.add(S),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(A,v.x,v.y,v.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let p=0,y=i.count;p<y;p+=3)l.fromBufferAttribute(i,p+0),c.fromBufferAttribute(i,p+1),d.fromBufferAttribute(i,p+2),S.subVectors(d,c),m.subVectors(l,c),S.cross(m),s.setXYZ(p+0,S.x,S.y,S.z),s.setXYZ(p+1,S.x,S.y,S.z),s.setXYZ(p+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,v){const g=h.array,S=h.itemSize,m=h.normalized,p=new g.constructor(v.length*S);let y=0,b=0;for(let A=0,M=v.length;A<M;A++){h.isInterleavedBufferAttribute?y=v[A]*h.data.stride+h.offset:y=v[A]*S;for(let x=0;x<S;x++)p[b++]=g[y++]}return new Ji(p,S,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,s=this.index.array,l=this.attributes;for(const h in l){const v=l[h],g=e(v,s);i.setAttribute(h,g)}const c=this.morphAttributes;for(const h in c){const v=[],g=c[h];for(let S=0,m=g.length;S<m;S++){const p=g[S],y=e(p,s);v.push(y)}i.morphAttributes[h]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,v=d.length;h<v;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const v in s){const g=s[v];e.data.attributes[v]=g.toJSON(e.data)}const l={};let c=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],S=[];for(let m=0,p=g.length;m<p;m++){const y=g[m];S.push(y.toJSON(e.data))}S.length>0&&(l[v]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const S=l[g];this.setAttribute(g,S.clone(i))}const c=e.morphAttributes;for(const g in c){const S=[],m=c[g];for(let p=0,y=m.length;p<y;p++)S.push(m[p].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,S=d.length;g<S;g++){const m=d[g];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zv=new en,Fr=new kp,tc=new Rc,Iv=new nt,ec=new nt,nc=new nt,ic=new nt,Dh=new nt,ac=new nt,Bv=new nt,rc=new nt;class Qn extends An{constructor(e=new Ti,i=new cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){ac.set(0,0,0);for(let v=0,g=c.length;v<g;v++){const S=h[v],m=c[v];S!==0&&(Dh.fromBufferAttribute(m,e),d?ac.addScaledVector(Dh,S):ac.addScaledVector(Dh.sub(i),S))}i.add(ac)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),tc.copy(s.boundingSphere),tc.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(tc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(tc,Iv)===null||Fr.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(zv.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(zv),!(s.boundingBox!==null&&Fr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Fr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,v=c.attributes.position,g=c.attributes.uv,S=c.attributes.uv1,m=c.attributes.normal,p=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,A=p.length;b<A;b++){const M=p[b],x=d[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let U=D,G=P;U<G;U+=3){const B=h.getX(U),O=h.getX(U+1),F=h.getX(U+2);l=sc(this,x,e,s,g,S,m,B,O,F),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let M=b,x=A;M<x;M+=3){const D=h.getX(M),P=h.getX(M+1),U=h.getX(M+2);l=sc(this,d,e,s,g,S,m,D,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let b=0,A=p.length;b<A;b++){const M=p[b],x=d[M.materialIndex],D=Math.max(M.start,y.start),P=Math.min(v.count,Math.min(M.start+M.count,y.start+y.count));for(let U=D,G=P;U<G;U+=3){const B=U,O=U+1,F=U+2;l=sc(this,x,e,s,g,S,m,B,O,F),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(v.count,y.start+y.count);for(let M=b,x=A;M<x;M+=3){const D=M,P=M+1,U=M+2;l=sc(this,d,e,s,g,S,m,D,P,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function a1(o,e,i,s,l,c,d,h){let v;if(e.side===Jn?v=s.intersectTriangle(d,c,l,!0,h):v=s.intersectTriangle(l,c,d,e.side===fr,h),v===null)return null;rc.copy(h),rc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(rc);return g<i.near||g>i.far?null:{distance:g,point:rc.clone(),object:o}}function sc(o,e,i,s,l,c,d,h,v,g){o.getVertexPosition(h,ec),o.getVertexPosition(v,nc),o.getVertexPosition(g,ic);const S=a1(o,e,i,s,ec,nc,ic,Bv);if(S){const m=new nt;Oi.getBarycoord(Bv,ec,nc,ic,m),l&&(S.uv=Oi.getInterpolatedAttribute(l,h,v,g,m,new Ue)),c&&(S.uv1=Oi.getInterpolatedAttribute(c,h,v,g,m,new Ue)),d&&(S.normal=Oi.getInterpolatedAttribute(d,h,v,g,m,new nt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const p={a:h,b:v,c:g,normal:new nt,materialIndex:0};Oi.getNormal(ec,nc,ic,p.normal),S.face=p,S.barycoord=m}return S}class oo extends Ti{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const v=[],g=[],S=[],m=[];let p=0,y=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(v),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(S,3)),this.setAttribute("uv",new gn(m,2));function b(A,M,x,D,P,U,G,B,O,F,C){const w=U/O,H=G/F,j=U/2,dt=G/2,_t=B/2,et=O+1,q=F+1;let lt=0,J=0;const At=new nt;for(let Ct=0;Ct<q;Ct++){const ft=Ct*H-dt;for(let bt=0;bt<et;bt++){const fe=bt*w-j;At[A]=fe*D,At[M]=ft*P,At[x]=_t,g.push(At.x,At.y,At.z),At[A]=0,At[M]=0,At[x]=B>0?1:-1,S.push(At.x,At.y,At.z),m.push(bt/O),m.push(1-Ct/F),lt+=1}}for(let Ct=0;Ct<F;Ct++)for(let ft=0;ft<O;ft++){const bt=p+ft+et*Ct,fe=p+ft+et*(Ct+1),z=p+(ft+1)+et*(Ct+1),gt=p+(ft+1)+et*Ct;v.push(bt,fe,gt),v.push(fe,z,gt),J+=6}h.addGroup(y,J,C),y+=J,p+=lt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const l in s)e[l]=s[l]}return e}function r1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Wx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pe.workingColorSpace}const s1={clone:ao,merge:kn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new nt,Fv=new Ue,Hv=new Ue;class Ei extends jx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,Fv,Hv),i.subVectors(Hv,Fv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(uh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,g=d.fullHeight;c+=d.offsetX*l/v,i-=d.offsetY*s/g,l*=d.width/v,s*=d.height/g}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const js=-90,Zs=1;class u1 extends An{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(js,Zs,e,i);l.layers=this.layers,this.add(l);const c=new Ei(js,Zs,e,i);c.layers=this.layers,this.add(c);const d=new Ei(js,Zs,e,i);d.layers=this.layers,this.add(d);const h=new Ei(js,Zs,e,i);h.layers=this.layers,this.add(h);const v=new Ei(js,Zs,e,i);v.layers=this.layers,this.add(v);const g=new Ei(js,Zs,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,v]=i;for(const g of i)this.remove(g);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,v,g,S]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,v),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,S),e.setRenderTarget(m,p,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Zx extends Xn{constructor(e=[],i=eo,s,l,c,d,h,v,g,S){super(e,i,s,l,c,d,h,v,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends Kr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new oo(5,5,5),c=new dr({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:lr});c.uniforms.tEquirect.value=i;const d=new Qn(l,c),h=i.minFilter;return i.minFilter===Wr&&(i.minFilter=Ki),new u1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class ji extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f1={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),x=this._getHandJoint(g,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],p=S.position.distanceTo(m.position),y=.02,b=.005;g.inputState.pinching&&p>y+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&p<=y-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(v.matrix.fromArray(c.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,c.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(c.linearVelocity)):v.hasLinearVelocity=!1,c.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(c.angularVelocity)):v.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(f1)))}return h!==null&&(h.visible=l!==null),v!==null&&(v.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ji;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class d1 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Nh=new nt,h1=new nt,p1=new ve;class sr{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Nh.subVectors(s,i).cross(h1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||p1.getNormalMatrix(e),l=this.coplanarPoint(Nh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Rc,m1=new Ue(.5,.5),oc=new nt;class qp{constructor(e=new sr,i=new sr,s=new sr,l=new sr,c=new sr,d=new sr){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Qi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],v=c[2],g=c[3],S=c[4],m=c[5],p=c[6],y=c[7],b=c[8],A=c[9],M=c[10],x=c[11],D=c[12],P=c[13],U=c[14],G=c[15];if(l[0].setComponents(g-d,y-S,x-b,G-D).normalize(),l[1].setComponents(g+d,y+S,x+b,G+D).normalize(),l[2].setComponents(g+h,y+m,x+A,G+P).normalize(),l[3].setComponents(g-h,y-m,x-A,G-P).normalize(),s)l[4].setComponents(v,p,M,U).normalize(),l[5].setComponents(g-v,y-p,x-M,G-U).normalize();else if(l[4].setComponents(g-v,y-p,x-M,G-U).normalize(),i===Qi)l[5].setComponents(g+v,y+p,x+M,G+U).normalize();else if(i===Mc)l[5].setComponents(v,p,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=m1.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(oc.x=l.normal.x>0?e.max.x:e.min.x,oc.y=l.normal.y>0?e.max.y:e.min.y,oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends so{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new nt,bc=new nt,Gv=new en,ol=new kp,lc=new Rc,Lh=new nt,Vv=new nt;class g1 extends An{constructor(e=new Ti,i=new Kx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Tc.fromBufferAttribute(i,l-1),bc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Tc.distanceTo(bc);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(l),lc.radius+=c,e.ray.intersectsSphere(lc)===!1)return;Gv.copy(l).invert(),ol.copy(e.ray).applyMatrix4(Gv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),v=h*h,g=this.isLineSegments?2:1,S=s.index,p=s.attributes.position;if(S!==null){const y=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let A=y,M=b-1;A<M;A+=g){const x=S.getX(A),D=S.getX(A+1),P=uc(this,e,ol,v,x,D,A);P&&i.push(P)}if(this.isLineLoop){const A=S.getX(b-1),M=S.getX(y),x=uc(this,e,ol,v,A,M,b-1);x&&i.push(x)}}else{const y=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let A=y,M=b-1;A<M;A+=g){const x=uc(this,e,ol,v,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=uc(this,e,ol,v,b-1,y,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function uc(o,e,i,s,l,c,d){const h=o.geometry.attributes.position;if(Tc.fromBufferAttribute(h,l),bc.fromBufferAttribute(h,c),i.distanceSqToSegment(Tc,bc,Lh,Vv)>s)return;Lh.applyMatrix4(o.matrixWorld);const g=e.ray.origin.distanceTo(Lh);if(!(g<e.near||g>e.far))return{distance:g,point:Vv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const kv=new nt,Xv=new nt;class _1 extends g1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)kv.fromBufferAttribute(i,l),Xv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+kv.distanceTo(Xv);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v1 extends Xn{constructor(e,i,s,l,c,d,h,v,g){super(e,i,s,l,c,d,h,v,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qx extends Xn{constructor(e,i,s=Zr,l,c,d,h=fi,v=fi,g,S=hl,m=1){if(S!==hl&&S!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:i,depth:m};super(p,l,c,d,h,v,S,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yp extends Ti{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,h=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:v};const g=this;l=Math.floor(l),c=Math.floor(c);const S=[],m=[],p=[],y=[];let b=0;const A=[],M=s/2;let x=0;D(),d===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(S),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(y,2));function D(){const U=new nt,G=new nt;let B=0;const O=(i-e)/s;for(let F=0;F<=c;F++){const C=[],w=F/c,H=w*(i-e)+e;for(let j=0;j<=l;j++){const dt=j/l,_t=dt*v+h,et=Math.sin(_t),q=Math.cos(_t);G.x=H*et,G.y=-w*s+M,G.z=H*q,m.push(G.x,G.y,G.z),U.set(et,O,q).normalize(),p.push(U.x,U.y,U.z),y.push(dt,1-w),C.push(b++)}A.push(C)}for(let F=0;F<l;F++)for(let C=0;C<c;C++){const w=A[C][F],H=A[C+1][F],j=A[C+1][F+1],dt=A[C][F+1];(e>0||C!==0)&&(S.push(w,H,dt),B+=3),(i>0||C!==c-1)&&(S.push(H,j,dt),B+=3)}g.addGroup(x,B,0),x+=B}function P(U){const G=b,B=new Ue,O=new nt;let F=0;const C=U===!0?e:i,w=U===!0?1:-1;for(let j=1;j<=l;j++)m.push(0,M*w,0),p.push(0,w,0),y.push(.5,.5),b++;const H=b;for(let j=0;j<=l;j++){const _t=j/l*v+h,et=Math.cos(_t),q=Math.sin(_t);O.x=C*q,O.y=M*w,O.z=C*et,m.push(O.x,O.y,O.z),p.push(0,w,0),B.x=et*.5+.5,B.y=q*.5*w+.5,y.push(B.x,B.y),b++}for(let j=0;j<l;j++){const dt=G+j,_t=H+j;U===!0?S.push(_t,_t+1,dt):S.push(_t+1,_t,dt),F+=3}g.addGroup(x,F,U===!0?1:2),x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Ti{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),v=Math.floor(l),g=h+1,S=v+1,m=e/h,p=i/v,y=[],b=[],A=[],M=[];for(let x=0;x<S;x++){const D=x*p-d;for(let P=0;P<g;P++){const U=P*m-c;b.push(U,-D,0),A.push(0,0,1),M.push(P/h),M.push(1-x/v)}}for(let x=0;x<v;x++)for(let D=0;D<h;D++){const P=D+g*x,U=D+g*(x+1),G=D+1+g*(x+1),B=D+1+g*x;y.push(P,U,B),y.push(U,G,B)}this.setIndex(y),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wp extends Ti{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const v=Math.min(d+h,Math.PI);let g=0;const S=[],m=new nt,p=new nt,y=[],b=[],A=[],M=[];for(let x=0;x<=s;x++){const D=[],P=x/s;let U=0;x===0&&d===0?U=.5/i:x===s&&v===Math.PI&&(U=-.5/i);for(let G=0;G<=i;G++){const B=G/i;m.x=-e*Math.cos(l+B*c)*Math.sin(d+P*h),m.y=e*Math.cos(d+P*h),m.z=e*Math.sin(l+B*c)*Math.sin(d+P*h),b.push(m.x,m.y,m.z),p.copy(m).normalize(),A.push(p.x,p.y,p.z),M.push(B+U,1-P),D.push(g++)}S.push(D)}for(let x=0;x<s;x++)for(let D=0;D<i;D++){const P=S[x][D+1],U=S[x][D],G=S[x+1][D],B=S[x+1][D+1];(x!==0||d>0)&&y.push(P,U,B),(x!==s-1||v<Math.PI)&&y.push(U,G,B)}this.setIndex(y),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jp extends Ti{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],v=[],g=[],S=new nt,m=new nt,p=new nt;for(let y=0;y<=s;y++)for(let b=0;b<=l;b++){const A=b/l*c,M=y/s*Math.PI*2;m.x=(e+i*Math.cos(M))*Math.cos(A),m.y=(e+i*Math.cos(M))*Math.sin(A),m.z=i*Math.sin(M),h.push(m.x,m.y,m.z),S.x=e*Math.cos(A),S.y=e*Math.sin(A),p.subVectors(m,S).normalize(),v.push(p.x,p.y,p.z),g.push(b/l),g.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=l;b++){const A=(l+1)*y+b-1,M=(l+1)*(y-1)+b-1,x=(l+1)*(y-1)+b,D=(l+1)*y+b;d.push(A,M,D),d.push(M,x,D)}this.setIndex(d),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class x1 extends so{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S1 extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zp extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class M1 extends Zp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Oh=new en,qv=new nt,Yv=new nt;class $x{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(qv),Yv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Yv),i.updateMatrixWorld(),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wv=new en,ll=new nt,Ph=new nt;class E1 extends $x{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new nt(1,0,0),new nt(-1,0,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,1,0),new nt(0,-1,0)],this._cubeUps=[new nt(0,1,0),new nt(0,1,0),new nt(0,1,0),new nt(0,1,0),new nt(0,0,1),new nt(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ll.setFromMatrixPosition(e.matrixWorld),s.position.copy(ll),Ph.copy(s.position),Ph.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Ph),s.updateMatrixWorld(),l.makeTranslation(-ll.x,-ll.y,-ll.z),Wv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wv,s.coordinateSystem,s.reversedDepth)}}class T1 extends Zp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kp extends jx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,h-=S*this.view.offsetY,v=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class b1 extends $x{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jv extends Zp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new b1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A1 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zv=new en;class R1{constructor(e,i,s=0,l=1/0){this.ray=new kp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Zv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zv),this}intersectObject(e,i=!0,s=[]){return Dp(e,this,s,i),s.sort(Kv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Dp(e[l],this,s,i);return s.sort(Kv),s}}function Kv(o,e){return o.distance-e.distance}function Dp(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let d=0,h=c.length;d<h;d++)Dp(c[d],e,i,!0)}}class C1 extends _1{constructor(e=10,i=10,s=4473924,l=8947848){s=new we(s),l=new we(l);const c=i/2,d=e/i,h=e/2,v=[],g=[];for(let p=0,y=0,b=-h;p<=i;p++,b+=d){v.push(-h,0,b,h,0,b),v.push(b,0,-h,b,0,h);const A=p===c?s:l;A.toArray(g,y),y+=3,A.toArray(g,y),y+=3,A.toArray(g,y),y+=3,A.toArray(g,y),y+=3}const S=new Ti;S.setAttribute("position",new gn(v,3)),S.setAttribute("color",new gn(g,3));const m=new Kx({vertexColors:!0,toneMapped:!1});super(S,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qv(o,e,i,s){const l=w1(s);switch(i){case zx:return o*e;case Bx:return o*e/l.components*l.byteLength;case Fp:return o*e/l.components*l.byteLength;case Fx:return o*e*2/l.components*l.byteLength;case Hp:return o*e*2/l.components*l.byteLength;case Ix:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case Gp:return o*e*4/l.components*l.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:case ap:return Math.max(o,16)*Math.max(e,8)/4;case ep:case ip:return Math.max(o,8)*Math.max(e,8)/2;case rp:case sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case fp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case hp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case mp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case gp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Mp:case Ep:case Tp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case bp:case Ap:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rp:case Cp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function w1(o){switch(o){case $i:case Nx:return{byteLength:1,components:1};case fl:case Lx:case gl:return{byteLength:2,components:1};case Ip:case Bp:return{byteLength:2,components:4};case Zr:case zp:case Ta:return{byteLength:4,components:1};case Ox:case Px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tS(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function D1(o){const e=new WeakMap;function i(h,v){const g=h.array,S=h.usage,m=g.byteLength,p=o.createBuffer();o.bindBuffer(v,p),o.bufferData(v,g,S),h.onUploadCallback();let y;if(g instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)y=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)y=o.SHORT;else if(g instanceof Uint32Array)y=o.UNSIGNED_INT;else if(g instanceof Int32Array)y=o.INT;else if(g instanceof Int8Array)y=o.BYTE;else if(g instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:p,type:y,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:m}}function s(h,v,g){const S=v.array,m=v.updateRanges;if(o.bindBuffer(g,h),m.length===0)o.bufferSubData(g,0,S);else{m.sort((y,b)=>y.start-b.start);let p=0;for(let y=1;y<m.length;y++){const b=m[p],A=m[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++p,m[p]=A)}m.length=p+1;for(let y=0,b=m.length;y<b;y++){const A=m[y];o.bufferSubData(g,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const v=e.get(h);v&&(o.deleteBuffer(v.buffer),e.delete(h))}function d(h,v){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,i(h,v));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,h,v),g.version=h.version}}return{get:l,remove:c,update:d}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
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
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,q1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tT=`#define PI 3.141592653589793
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
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nT=`vec3 transformedNormal = objectNormal;
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
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",lT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
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
}`,xT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ST=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MT=`uniform bool receiveShadow;
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
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,TT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,wT=`struct PhysicalMaterial {
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
}`,DT=`
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
#endif`,UT=`#if defined( RE_IndirectDiffuse )
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HT=`#if defined( USE_POINTS_UV )
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
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
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
#endif`,WT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mb=`float getShadowMask() {
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
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,jb=`#define MATCAP
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
}`,Zb=`#define MATCAP
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
}`,Kb=`#define NORMAL
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
}`,Qb=`#define NORMAL
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
}`,Jb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,tA=`#define STANDARD
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
}`,eA=`#define STANDARD
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
}`,nA=`#define TOON
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
}`,iA=`#define TOON
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
}`,aA=`uniform float size;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 color;
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
}`,lA=`uniform float rotation;
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
}`,uA=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:U1,alphahash_pars_fragment:N1,alphamap_fragment:L1,alphamap_pars_fragment:O1,alphatest_fragment:P1,alphatest_pars_fragment:z1,aomap_fragment:I1,aomap_pars_fragment:B1,batching_pars_vertex:F1,batching_vertex:H1,begin_vertex:G1,beginnormal_vertex:V1,bsdfs:k1,iridescence_fragment:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Z1,color_fragment:K1,color_pars_fragment:Q1,color_pars_vertex:J1,color_vertex:$1,common:tT,cube_uv_reflection_fragment:eT,defaultnormal_vertex:nT,displacementmap_pars_vertex:iT,displacementmap_vertex:aT,emissivemap_fragment:rT,emissivemap_pars_fragment:sT,colorspace_fragment:oT,colorspace_pars_fragment:lT,envmap_fragment:uT,envmap_common_pars_fragment:cT,envmap_pars_fragment:fT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:ET,envmap_vertex:hT,fog_vertex:pT,fog_pars_vertex:mT,fog_fragment:gT,fog_pars_fragment:_T,gradientmap_pars_fragment:vT,lightmap_pars_fragment:xT,lights_lambert_fragment:ST,lights_lambert_pars_fragment:yT,lights_pars_begin:MT,lights_toon_fragment:TT,lights_toon_pars_fragment:bT,lights_phong_fragment:AT,lights_phong_pars_fragment:RT,lights_physical_fragment:CT,lights_physical_pars_fragment:wT,lights_fragment_begin:DT,lights_fragment_maps:UT,lights_fragment_end:NT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:zT,map_fragment:IT,map_pars_fragment:BT,map_particle_fragment:FT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:kT,morphcolor_vertex:XT,morphnormal_vertex:qT,morphtarget_pars_vertex:YT,morphtarget_vertex:WT,normal_fragment_begin:jT,normal_fragment_maps:ZT,normal_pars_fragment:KT,normal_pars_vertex:QT,normal_vertex:JT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:ab,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ob,dithering_fragment:lb,dithering_pars_fragment:ub,roughnessmap_fragment:cb,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:hb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:_b,skinning_vertex:vb,skinnormal_vertex:xb,specularmap_fragment:Sb,specularmap_pars_fragment:yb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:bb,uv_pars_fragment:Ab,uv_pars_vertex:Rb,uv_vertex:Cb,worldpos_vertex:wb,background_vert:Db,background_frag:Ub,backgroundCube_vert:Nb,backgroundCube_frag:Lb,cube_vert:Ob,cube_frag:Pb,depth_vert:zb,depth_frag:Ib,distanceRGBA_vert:Bb,distanceRGBA_frag:Fb,equirect_vert:Hb,equirect_frag:Gb,linedashed_vert:Vb,linedashed_frag:kb,meshbasic_vert:Xb,meshbasic_frag:qb,meshlambert_vert:Yb,meshlambert_frag:Wb,meshmatcap_vert:jb,meshmatcap_frag:Zb,meshnormal_vert:Kb,meshnormal_frag:Qb,meshphong_vert:Jb,meshphong_frag:$b,meshphysical_vert:tA,meshphysical_frag:eA,meshtoon_vert:nA,meshtoon_frag:iA,points_vert:aA,points_frag:rA,shadow_vert:sA,shadow_frag:oA,sprite_vert:lA,sprite_frag:uA},qt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Zi={basic:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new we(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:kn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:kn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new we(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:kn([qt.points,qt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:kn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:kn([qt.common,qt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:kn([qt.sprite,qt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:kn([qt.common,qt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:kn([qt.lights,qt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Zi.physical={uniforms:kn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const cc={r:0,b:0,g:0},Gr=new ta,cA=new en;function fA(o,e,i,s,l,c,d){const h=new we(0);let v=c===!0?0:1,g,S,m=null,p=0,y=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function A(P){let U=!1;const G=b(P);G===null?x(h,v):G&&G.isColor&&(x(G,1),U=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,U){const G=b(U);G&&(G.isCubeTexture||G.mapping===Ac)?(S===void 0&&(S=new Qn(new oo(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ao(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(B,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),Gr.copy(U.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),S.material.uniforms.envMap.value=G,S.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Gr)),S.material.toneMapped=Pe.getTransfer(G.colorSpace)!==We,(m!==G||p!==G.version||y!==o.toneMapping)&&(S.material.needsUpdate=!0,m=G,p=G.version,y=o.toneMapping),S.layers.enableAll(),P.unshift(S,S.geometry,S.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new Qn(new Sl(2,2),new dr({name:"BackgroundMaterial",uniforms:ao(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.toneMapped=Pe.getTransfer(G.colorSpace)!==We,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(m!==G||p!==G.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,m=G,p=G.version,y=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function x(P,U){P.getRGB(cc,Wx(o)),s.buffers.color.setClear(cc.r,cc.g,cc.b,U,d)}function D(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,U=1){h.set(P),v=U,x(h,v)},getClearAlpha:function(){return v},setClearAlpha:function(P){v=P,x(h,v)},render:A,addToRenderList:M,dispose:D}}function dA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=p(null);let c=l,d=!1;function h(w,H,j,dt,_t){let et=!1;const q=m(dt,j,H);c!==q&&(c=q,g(c.object)),et=y(w,dt,j,_t),et&&b(w,dt,j,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(et||d)&&(d=!1,U(w,H,j,dt),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function v(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function S(w){return o.deleteVertexArray(w)}function m(w,H,j){const dt=j.wireframe===!0;let _t=s[w.id];_t===void 0&&(_t={},s[w.id]=_t);let et=_t[H.id];et===void 0&&(et={},_t[H.id]=et);let q=et[dt];return q===void 0&&(q=p(v()),et[dt]=q),q}function p(w){const H=[],j=[],dt=[];for(let _t=0;_t<i;_t++)H[_t]=0,j[_t]=0,dt[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:dt,object:w,attributes:{},index:null}}function y(w,H,j,dt){const _t=c.attributes,et=H.attributes;let q=0;const lt=j.getAttributes();for(const J in lt)if(lt[J].location>=0){const Ct=_t[J];let ft=et[J];if(ft===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),Ct===void 0||Ct.attribute!==ft||ft&&Ct.data!==ft.data)return!0;q++}return c.attributesNum!==q||c.index!==dt}function b(w,H,j,dt){const _t={},et=H.attributes;let q=0;const lt=j.getAttributes();for(const J in lt)if(lt[J].location>=0){let Ct=et[J];Ct===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(Ct=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(Ct=w.instanceColor));const ft={};ft.attribute=Ct,Ct&&Ct.data&&(ft.data=Ct.data),_t[J]=ft,q++}c.attributes=_t,c.attributesNum=q,c.index=dt}function A(){const w=c.newAttributes;for(let H=0,j=w.length;H<j;H++)w[H]=0}function M(w){x(w,0)}function x(w,H){const j=c.newAttributes,dt=c.enabledAttributes,_t=c.attributeDivisors;j[w]=1,dt[w]===0&&(o.enableVertexAttribArray(w),dt[w]=1),_t[w]!==H&&(o.vertexAttribDivisor(w,H),_t[w]=H)}function D(){const w=c.newAttributes,H=c.enabledAttributes;for(let j=0,dt=H.length;j<dt;j++)H[j]!==w[j]&&(o.disableVertexAttribArray(j),H[j]=0)}function P(w,H,j,dt,_t,et,q){q===!0?o.vertexAttribIPointer(w,H,j,_t,et):o.vertexAttribPointer(w,H,j,dt,_t,et)}function U(w,H,j,dt){A();const _t=dt.attributes,et=j.getAttributes(),q=H.defaultAttributeValues;for(const lt in et){const J=et[lt];if(J.location>=0){let At=_t[lt];if(At===void 0&&(lt==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),lt==="instanceColor"&&w.instanceColor&&(At=w.instanceColor)),At!==void 0){const Ct=At.normalized,ft=At.itemSize,bt=e.get(At);if(bt===void 0)continue;const fe=bt.buffer,z=bt.type,gt=bt.bytesPerElement,it=z===o.INT||z===o.UNSIGNED_INT||At.gpuType===zp;if(At.isInterleavedBufferAttribute){const ot=At.data,wt=ot.stride,Ht=At.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<J.locationSize;Ot++)x(J.location+Ot,ot.meshPerAttribute);w.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<J.locationSize;Ot++)M(J.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,fe);for(let Ot=0;Ot<J.locationSize;Ot++)P(J.location+Ot,ft/J.locationSize,z,Ct,wt*gt,(Ht+ft/J.locationSize*Ot)*gt,it)}else{if(At.isInstancedBufferAttribute){for(let ot=0;ot<J.locationSize;ot++)x(J.location+ot,At.meshPerAttribute);w.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ot=0;ot<J.locationSize;ot++)M(J.location+ot);o.bindBuffer(o.ARRAY_BUFFER,fe);for(let ot=0;ot<J.locationSize;ot++)P(J.location+ot,ft/J.locationSize,z,Ct,ft*gt,ft/J.locationSize*ot*gt,it)}}else if(q!==void 0){const Ct=q[lt];if(Ct!==void 0)switch(Ct.length){case 2:o.vertexAttrib2fv(J.location,Ct);break;case 3:o.vertexAttrib3fv(J.location,Ct);break;case 4:o.vertexAttrib4fv(J.location,Ct);break;default:o.vertexAttrib1fv(J.location,Ct)}}}}D()}function G(){F();for(const w in s){const H=s[w];for(const j in H){const dt=H[j];for(const _t in dt)S(dt[_t].object),delete dt[_t];delete H[j]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const j in H){const dt=H[j];for(const _t in dt)S(dt[_t].object),delete dt[_t];delete H[j]}delete s[w.id]}function O(w){for(const H in s){const j=s[H];if(j[w.id]===void 0)continue;const dt=j[w.id];for(const _t in dt)S(dt[_t].object),delete dt[_t];delete j[w.id]}}function F(){C(),d=!0,c!==l&&(c=l,g(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:D}}function hA(o,e,i){let s;function l(g){s=g}function c(g,S){o.drawArrays(s,g,S),i.update(S,s,1)}function d(g,S,m){m!==0&&(o.drawArraysInstanced(s,g,S,m),i.update(S,s,m))}function h(g,S,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,S,0,m);let y=0;for(let b=0;b<m;b++)y+=S[b];i.update(y,s,1)}function v(g,S,m,p){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<g.length;b++)d(g[b],S[b],p[b]);else{y.multiDrawArraysInstancedWEBGL(s,g,0,S,0,p,0,m);let b=0;for(let A=0;A<m;A++)b+=S[A]*p[A];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=v}function pA(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Pi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const F=O===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$i&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ta&&!F)}function v(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=v(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const m=i.logarithmicDepthBuffer===!0,p=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:G,maxSamples:B}}function mA(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new sr,h=new ve,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const y=m.length!==0||p||s!==0||l;return l=p,s=m.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,p){i=S(m,p,0)},this.setState=function(m,p,y){const b=m.clippingPlanes,A=m.clipIntersection,M=m.clipShadows,x=o.get(m);if(!l||b===null||b.length===0||c&&!M)c?S(null):g();else{const D=c?0:s,P=D*4;let U=x.clippingState||null;v.value=U,U=S(b,p,P,y);for(let G=0;G!==P;++G)U[G]=i[G];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(m,p,y,b){const A=m!==null?m.length:0;let M=null;if(A!==0){if(M=v.value,b!==!0||M===null){const x=y+A*4,D=p.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,U=y;P!==A;++P,U+=4)d.copy(m[P]).applyMatrix4(D,h),d.normal.toArray(M,U),M[U+3]=d.constant}v.value=M,v.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function gA(o){let e=new WeakMap;function i(d,h){return h===Qh?d.mapping=eo:h===Jh&&(d.mapping=no),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Qh||h===Jh)if(e.has(d)){const v=e.get(d).texture;return i(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const g=new c1(v.height);return g.fromEquirectangularTexture(o,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Qs=4,Jv=[.125,.215,.35,.446,.526,.582],qr=20,zh=new Kp,$v=new we;let Ih=null,Bh=0,Fh=0,Hh=!1;const kr=(1+Math.sqrt(5))/2,Ks=1/kr,tx=[new nt(-kr,Ks,0),new nt(kr,Ks,0),new nt(-Ks,0,kr),new nt(Ks,0,kr),new nt(0,kr,-Ks),new nt(0,kr,Ks),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],_A=new nt;class ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=_A}=c;Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,s,l,v,h),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Bh,Fh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===eo||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:gl,format:Pi,colorSpace:io,depthBuffer:!1},l=nx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vA(c)),this._blurMaterial=xA(c,e,i)}return l}_compileMaterial(e){const i=new Qn(this._lodPlanes[0],e);this._renderer.compile(i,zh)}_sceneToCubeUV(e,i,s,l,c){const v=new Ei(90,1,i,s),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],m=this._renderer,p=m.autoClear,y=m.toneMapping;m.getClearColor($v),m.toneMapping=ur,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const A=new cl({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),M=new Qn(new oo,A);let x=!1;const D=e.background;D?D.isColor&&(A.color.copy(D),e.background=null,x=!0):(A.color.copy($v),x=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(v.up.set(0,g[P],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x+S[P],c.y,c.z)):U===1?(v.up.set(0,0,g[P]),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y+S[P],c.z)):(v.up.set(0,g[P],0),v.position.set(c.x,c.y,c.z),v.lookAt(c.x,c.y,c.z+S[P]));const G=this._cubeSize;fc(l,U*G,P>2?G:0,G,G),m.setRenderTarget(l),x&&m.render(M,v),m.render(e,v)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=y,m.autoClear=p,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===eo||e.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ix());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Qn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const v=this._cubeSize;fc(i,0,0,3*v,2*v),s.setRenderTarget(i),s.render(d,zh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=tx[(l-c-1)%tx.length];this._blur(e,c-1,c,d,h)}i.autoClear=s}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const v=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,m=new Qn(this._lodPlanes[l],g),p=g.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*qr-1),A=c/b,M=isFinite(c)?1+Math.floor(S*A):qr;M>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qr}`);const x=[];let D=0;for(let O=0;O<qr;++O){const F=O/A,C=Math.exp(-F*F/2);x.push(C),O===0?D+=C:O<M&&(D+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/D;p.envMap.value=e.texture,p.samples.value=M,p.weights.value=x,p.latitudinal.value=d==="latitudinal",h&&(p.poleAxis.value=h);const{_lodMax:P}=this;p.dTheta.value=b,p.mipInt.value=P-s;const U=this._sizeLods[l],G=3*U*(l>P-Qs?l-P+Qs:0),B=4*(this._cubeSize-U);fc(i,G,B,3*U,2*U),v.setRenderTarget(i),v.render(m,zh)}}function vA(o){const e=[],i=[],s=[];let l=o;const c=o-Qs+1+Jv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let v=1/h;d>o-Qs?v=Jv[d-o+Qs-1]:d===0&&(v=0),s.push(v);const g=1/(h-2),S=-g,m=1+g,p=[S,S,m,S,m,m,S,S,m,m,S,m],y=6,b=6,A=3,M=2,x=1,D=new Float32Array(A*b*y),P=new Float32Array(M*b*y),U=new Float32Array(x*b*y);for(let B=0;B<y;B++){const O=B%3*2/3-1,F=B>2?0:-1,C=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];D.set(C,A*b*B),P.set(p,M*b*B);const w=[B,B,B,B,B,B];U.set(w,x*b*B)}const G=new Ti;G.setAttribute("position",new Ji(D,A)),G.setAttribute("uv",new Ji(P,M)),G.setAttribute("faceIndex",new Ji(U,x)),e.push(G),l>Qs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function nx(o,e,i){const s=new Kr(o,e,i);return s.texture.mapping=Ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function xA(o,e,i){const s=new Float32Array(qr),l=new nt(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ix(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ax(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Qp(){return`

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
	`}function SA(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const v=h.mapping,g=v===Qh||v===Jh,S=v===eo||v===no;if(g||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ex(o)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new ex(o)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",c),m.texture):null}}}return h}function l(h){let v=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&v++;return v===g}function c(h){const v=h.target;v.removeEventListener("dispose",c);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function yA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ml("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function MA(o,e,i,s){const l={},c=new WeakMap;function d(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",d),delete l[p.id];const y=c.get(p);y&&(e.remove(y),c.delete(p)),s.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function h(m,p){return l[p.id]===!0||(p.addEventListener("dispose",d),l[p.id]=!0,i.memory.geometries++),p}function v(m){const p=m.attributes;for(const y in p)e.update(p[y],o.ARRAY_BUFFER)}function g(m){const p=[],y=m.index,b=m.attributes.position;let A=0;if(y!==null){const D=y.array;A=y.version;for(let P=0,U=D.length;P<U;P+=3){const G=D[P+0],B=D[P+1],O=D[P+2];p.push(G,B,B,O,O,G)}}else if(b!==void 0){const D=b.array;A=b.version;for(let P=0,U=D.length/3-1;P<U;P+=3){const G=P+0,B=P+1,O=P+2;p.push(G,B,B,O,O,G)}}else return;const M=new(Vx(p)?Yx:qx)(p,1);M.version=A;const x=c.get(m);x&&e.remove(x),c.set(m,M)}function S(m){const p=c.get(m);if(p){const y=m.index;y!==null&&p.version<y.version&&g(m)}else g(m);return c.get(m)}return{get:h,update:v,getWireframeAttribute:S}}function EA(o,e,i){let s;function l(p){s=p}let c,d;function h(p){c=p.type,d=p.bytesPerElement}function v(p,y){o.drawElements(s,y,c,p*d),i.update(y,s,1)}function g(p,y,b){b!==0&&(o.drawElementsInstanced(s,y,c,p*d,b),i.update(y,s,b))}function S(p,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,p,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,s,1)}function m(p,y,b,A){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<p.length;x++)g(p[x]/d,y[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,p,0,A,0,b);let x=0;for(let D=0;D<b;D++)x+=y[D]*A[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=v,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=m}function TA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bA(o,e,i){const s=new WeakMap,l=new je;function c(d,h,v){const g=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=S!==void 0?S.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let w=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;p!==void 0&&p.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),M===!0&&(U=3);let G=h.attributes.position.count*U,B=1;G>e.maxTextureSize&&(B=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const O=new Float32Array(G*B*4*m),F=new kx(O,G,B,m);F.type=Ta,F.needsUpdate=!0;const C=U*4;for(let H=0;H<m;H++){const j=x[H],dt=D[H],_t=P[H],et=G*B*4*H;for(let q=0;q<j.count;q++){const lt=q*C;b===!0&&(l.fromBufferAttribute(j,q),O[et+lt+0]=l.x,O[et+lt+1]=l.y,O[et+lt+2]=l.z,O[et+lt+3]=0),A===!0&&(l.fromBufferAttribute(dt,q),O[et+lt+4]=l.x,O[et+lt+5]=l.y,O[et+lt+6]=l.z,O[et+lt+7]=0),M===!0&&(l.fromBufferAttribute(_t,q),O[et+lt+8]=l.x,O[et+lt+9]=l.y,O[et+lt+10]=l.z,O[et+lt+11]=_t.itemSize===4?l.w:1)}}p={count:m,texture:F,size:new Ue(G,B)},s.set(h,p),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<g.length;M++)b+=g[M];const A=h.morphTargetsRelative?1:1-b;v.getUniforms().setValue(o,"morphTargetBaseInfluence",A),v.getUniforms().setValue(o,"morphTargetInfluences",g)}v.getUniforms().setValue(o,"morphTargetsTexture",p.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}return{update:c}}function AA(o,e,i,s){let l=new WeakMap;function c(v){const g=s.render.frame,S=v.geometry,m=e.get(v,S);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",h)===!1&&v.addEventListener("dispose",h),l.get(v)!==g&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),l.set(v,g))),v.isSkinnedMesh){const p=v.skeleton;l.get(p)!==g&&(p.update(),l.set(p,g))}return m}function d(){l=new WeakMap}function h(v){const g=v.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:d}}const eS=new Xn,rx=new Qx(1,1),nS=new kx,iS=new WE,aS=new Zx,sx=[],ox=[],lx=new Float32Array(16),ux=new Float32Array(9),cx=new Float32Array(4);function lo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=sx[l];if(c===void 0&&(c=new Float32Array(l),sx[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Cc(o,e){let i=ox[e];i===void 0&&(i=new Int32Array(e),ox[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function RA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function CA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function DA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function UA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;cx.set(s),o.uniformMatrix2fv(this.addr,!1,cx),yn(i,s)}}function NA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;ux.set(s),o.uniformMatrix3fv(this.addr,!1,ux),yn(i,s)}}function LA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;lx.set(s),o.uniformMatrix4fv(this.addr,!1,lx),yn(i,s)}}function OA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function PA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function IA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function BA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function VA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(rx.compareFunction=Gx,c=rx):c=eS,i.setTexture2D(e||c,l)}function kA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||iS,l)}function XA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||aS,l)}function qA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||nS,l)}function YA(o){switch(o){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return UA;case 35675:return NA;case 35676:return LA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return zA;case 35669:case 35673:return IA;case 5125:return BA;case 36294:return FA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return qA}}function WA(o,e){o.uniform1fv(this.addr,e)}function jA(o,e){const i=lo(e,this.size,2);o.uniform2fv(this.addr,i)}function ZA(o,e){const i=lo(e,this.size,3);o.uniform3fv(this.addr,i)}function KA(o,e){const i=lo(e,this.size,4);o.uniform4fv(this.addr,i)}function QA(o,e){const i=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JA(o,e){const i=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $A(o,e){const i=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function tR(o,e){o.uniform1iv(this.addr,e)}function eR(o,e){o.uniform2iv(this.addr,e)}function nR(o,e){o.uniform3iv(this.addr,e)}function iR(o,e){o.uniform4iv(this.addr,e)}function aR(o,e){o.uniform1uiv(this.addr,e)}function rR(o,e){o.uniform2uiv(this.addr,e)}function sR(o,e){o.uniform3uiv(this.addr,e)}function oR(o,e){o.uniform4uiv(this.addr,e)}function lR(o,e,i){const s=this.cache,l=e.length,c=Cc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||eS,c[d])}function uR(o,e,i){const s=this.cache,l=e.length,c=Cc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||iS,c[d])}function cR(o,e,i){const s=this.cache,l=e.length,c=Cc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||aS,c[d])}function fR(o,e,i){const s=this.cache,l=e.length,c=Cc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),yn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||nS,c[d])}function dR(o){switch(o){case 5126:return WA;case 35664:return jA;case 35665:return ZA;case 35666:return KA;case 35674:return QA;case 35675:return JA;case 35676:return $A;case 5124:case 35670:return tR;case 35667:case 35671:return eR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return aR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return fR}}class hR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class pR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dR(i.type)}}class mR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function fx(o,e){o.seq.push(e),o.map[e.id]=e}function gR(o,e,i){const s=o.name,l=s.length;for(Gh.lastIndex=0;;){const c=Gh.exec(s),d=Gh.lastIndex;let h=c[1];const v=c[2]==="]",g=c[3];if(v&&(h=h|0),g===void 0||g==="["&&d+2===l){fx(i,g===void 0?new hR(h,o,e):new pR(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new mR(h),fx(i,m)),i=m}}}class xc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);gR(c,d,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],v=s[h.id];v.needsUpdate!==!1&&h.setValue(e,v.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function dx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const _R=37297;let vR=0;function xR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const hx=new ve;function SR(o){Pe._getMatrix(hx,Pe.workingColorSpace,o);const e=`mat3( ${hx.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function px(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+xR(o.getShaderSource(e),h)}else return c}function yR(o,e){const i=SR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function MR(o,e){let i;switch(e){case ME:i="Linear";break;case EE:i="Reinhard";break;case TE:i="Cineon";break;case Dx:i="ACESFilmic";break;case AE:i="AgX";break;case RE:i="Neutral";break;case bE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new nt;function ER(){Pe.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function bR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function ul(o){return o!==""}function mx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(o){return o.replace(RR,wR)}const CR=new Map;function wR(o,e){let i=xe[e];if(i===void 0){const s=CR.get(e);if(s!==void 0)i=xe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Up(i)}const DR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(o){return o.replace(DR,UR)}function UR(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function NR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function LR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case no:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function PR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wx:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function zR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function IR(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const v=NR(i),g=LR(i),S=OR(i),m=PR(i),p=zR(i),y=TR(i),b=bR(c),A=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ul).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ul).join(`
`),x.length>0&&(x+=`
`)):(M=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),x=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ur?"#define TONE_MAPPING":"",i.toneMapping!==ur?xe.tonemapping_pars_fragment:"",i.toneMapping!==ur?MR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,yR("linearToOutputTexel",i.outputColorSpace),ER(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ul).join(`
`)),d=Up(d),d=mx(d,i),d=gx(d,i),h=Up(h),h=mx(h,i),h=gx(h,i),d=_x(d),h=_x(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+M+d,U=D+x+h,G=dx(l,l.VERTEX_SHADER,P),B=dx(l,l.FRAGMENT_SHADER,U);l.attachShader(A,G),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",dt=l.getShaderInfoLog(G)||"",_t=l.getShaderInfoLog(B)||"",et=j.trim(),q=dt.trim(),lt=_t.trim();let J=!0,At=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,G,B);else{const Ct=px(l,G,"vertex"),ft=px(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+et+`
`+Ct+`
`+ft)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(q===""||lt==="")&&(At=!1);At&&(H.diagnostics={runnable:J,programLog:et,vertexShader:{log:q,prefix:M},fragmentShader:{log:lt,prefix:x}})}l.deleteShader(G),l.deleteShader(B),F=new xc(l,A),C=AR(l,A)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,_R)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=B,this}let BR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new HR(e),i.set(e,s)),s}}class HR{constructor(e){this.id=BR++,this.code=e,this.usedTimes=0}}function GR(o,e,i,s,l,c,d){const h=new Xp,v=new FR,g=new Set,S=[],m=l.logarithmicDepthBuffer,p=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return g.add(C),C===0?"uv":`uv${C}`}function M(C,w,H,j,dt){const _t=j.fog,et=dt.geometry,q=C.isMeshStandardMaterial?j.environment:null,lt=(C.isMeshStandardMaterial?i:e).get(C.envMap||q),J=lt&&lt.mapping===Ac?lt.image.height:null,At=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Ct=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ft=Ct!==void 0?Ct.length:0;let bt=0;et.morphAttributes.position!==void 0&&(bt=1),et.morphAttributes.normal!==void 0&&(bt=2),et.morphAttributes.color!==void 0&&(bt=3);let fe,z,gt,it;if(At){const be=Zi[At];fe=be.vertexShader,z=be.fragmentShader}else fe=C.vertexShader,z=C.fragmentShader,v.update(C),gt=v.getVertexShaderID(C),it=v.getFragmentShaderID(C);const ot=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=dt.isInstancedMesh===!0,Ot=dt.isBatchedMesh===!0,Dt=!!C.map,Kt=!!C.matcap,I=!!lt,ze=!!C.aoMap,k=!!C.lightMap,W=!!C.bumpMap,ct=!!C.normalMap,vt=!!C.displacementMap,xt=!!C.emissiveMap,rt=!!C.metalnessMap,zt=!!C.roughnessMap,Yt=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,Z=C.iridescence>0,mt=C.sheen>0,Rt=C.transmission>0,St=Yt&&!!C.anisotropyMap,Jt=N&&!!C.clearcoatMap,It=N&&!!C.clearcoatNormalMap,ne=N&&!!C.clearcoatRoughnessMap,ae=Z&&!!C.iridescenceMap,Lt=Z&&!!C.iridescenceThicknessMap,Vt=mt&&!!C.sheenColorMap,ue=mt&&!!C.sheenRoughnessMap,ie=!!C.specularMap,kt=!!C.specularColorMap,pe=!!C.specularIntensityMap,X=Rt&&!!C.transmissionMap,Pt=Rt&&!!C.thicknessMap,Ft=!!C.gradientMap,Qt=!!C.alphaMap,Ut=C.alphaTest>0,Tt=!!C.alphaHash,ee=!!C.extensions;let he=ur;C.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(he=o.toneMapping);const qe={shaderID:At,shaderType:C.type,shaderName:C.name,vertexShader:fe,fragmentShader:z,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ot,batchingColor:Ot&&dt._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&dt.instanceColor!==null,instancingMorph:Ht&&dt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:io,alphaToCoverage:!!C.alphaToCoverage,map:Dt,matcap:Kt,envMap:I,envMapMode:I&&lt.mapping,envMapCubeUVHeight:J,aoMap:ze,lightMap:k,bumpMap:W,normalMap:ct,displacementMap:p&&vt,emissiveMap:xt,normalMapObjectSpace:ct&&C.normalMapType===UE,normalMapTangentSpace:ct&&C.normalMapType===Hx,metalnessMap:rt,roughnessMap:zt,anisotropy:Yt,anisotropyMap:St,clearcoat:N,clearcoatMap:Jt,clearcoatNormalMap:It,clearcoatRoughnessMap:ne,dispersion:E,iridescence:Z,iridescenceMap:ae,iridescenceThicknessMap:Lt,sheen:mt,sheenColorMap:Vt,sheenRoughnessMap:ue,specularMap:ie,specularColorMap:kt,specularIntensityMap:pe,transmission:Rt,transmissionMap:X,thicknessMap:Pt,gradientMap:Ft,opaque:C.transparent===!1&&C.blending===Js&&C.alphaToCoverage===!1,alphaMap:Qt,alphaTest:Ut,alphaHash:Tt,combine:C.combine,mapUv:Dt&&A(C.map.channel),aoMapUv:ze&&A(C.aoMap.channel),lightMapUv:k&&A(C.lightMap.channel),bumpMapUv:W&&A(C.bumpMap.channel),normalMapUv:ct&&A(C.normalMap.channel),displacementMapUv:vt&&A(C.displacementMap.channel),emissiveMapUv:xt&&A(C.emissiveMap.channel),metalnessMapUv:rt&&A(C.metalnessMap.channel),roughnessMapUv:zt&&A(C.roughnessMap.channel),anisotropyMapUv:St&&A(C.anisotropyMap.channel),clearcoatMapUv:Jt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:It&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:ue&&A(C.sheenRoughnessMap.channel),specularMapUv:ie&&A(C.specularMap.channel),specularColorMapUv:kt&&A(C.specularColorMap.channel),specularIntensityMapUv:pe&&A(C.specularIntensityMap.channel),transmissionMapUv:X&&A(C.transmissionMap.channel),thicknessMapUv:Pt&&A(C.thicknessMap.channel),alphaMapUv:Qt&&A(C.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ct||Yt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:dt.isPoints===!0&&!!et.attributes.uv&&(Dt||Qt),fog:!!_t,useFog:C.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:wt,skinning:dt.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:bt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,decodeVideoTexture:Dt&&C.map.isVideoTexture===!0&&Pe.getTransfer(C.map.colorSpace)===We,decodeVideoTextureEmissive:xt&&C.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(C.emissiveMap.colorSpace)===We,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ea,flipSided:C.side===Jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ee&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&C.extensions.multiDraw===!0||Ot)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qe.vertexUv1s=g.has(1),qe.vertexUv2s=g.has(2),qe.vertexUv3s=g.has(3),g.clear(),qe}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)w.push(H),w.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(D(w,C),P(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function D(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function P(C,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function U(C){const w=b[C.type];let H;if(w){const j=Zi[w];H=s1.clone(j.uniforms)}else H=C.uniforms;return H}function G(C,w){let H;for(let j=0,dt=S.length;j<dt;j++){const _t=S[j];if(_t.cacheKey===w){H=_t,++H.usedTimes;break}}return H===void 0&&(H=new IR(o,w,C,c),S.push(H)),H}function B(C){if(--C.usedTimes===0){const w=S.indexOf(C);S[w]=S[S.length-1],S.pop(),C.destroy()}}function O(C){v.remove(C)}function F(){v.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:G,releaseProgram:B,releaseShaderCache:O,programs:S,dispose:F}}function VR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,v){o.get(d)[h]=v}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function kR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function xx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(m,p,y,b,A,M){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:p,material:y,groupOrder:b,renderOrder:m.renderOrder,z:A,group:M},o[e]=x):(x.id=m.id,x.object=m,x.geometry=p,x.material=y,x.groupOrder=b,x.renderOrder=m.renderOrder,x.z=A,x.group=M),e++,x}function h(m,p,y,b,A,M){const x=d(m,p,y,b,A,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function v(m,p,y,b,A,M){const x=d(m,p,y,b,A,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,p){i.length>1&&i.sort(m||kR),s.length>1&&s.sort(p||xx),l.length>1&&l.sort(p||xx)}function S(){for(let m=e,p=o.length;m<p;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:v,finish:S,sort:g}}function XR(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new Sx,o.set(s,[d])):l>=c.length?(d=new Sx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function qR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new we};break;case"SpotLight":i={position:new nt,direction:new nt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function YR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let WR=0;function jR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ZR(o){const e=new qR,i=YR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new nt);const l=new nt,c=new en,d=new en;function h(g){let S=0,m=0,p=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,b=0,A=0,M=0,x=0,D=0,P=0,U=0,G=0,B=0,O=0;g.sort(jR);for(let C=0,w=g.length;C<w;C++){const H=g[C],j=H.color,dt=H.intensity,_t=H.distance,et=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=j.r*dt,m+=j.g*dt,p+=j.b*dt;else if(H.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(H.sh.coefficients[q],dt);O++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const lt=H.shadow,J=i.get(H);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=et,s.directionalShadowMatrix[y]=H.shadow.matrix,D++}s.directional[y]=q,y++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(j).multiplyScalar(dt),q.distance=_t,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,s.spot[A]=q;const lt=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,lt.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[A]=lt.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,s.spotShadow[A]=J,s.spotShadowMap[A]=et,U++}A++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(j).multiplyScalar(dt),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=q,M++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const lt=H.shadow,J=i.get(H);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,J.shadowCameraNear=lt.camera.near,J.shadowCameraFar=lt.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=et,s.pointShadowMatrix[b]=H.shadow.matrix,P++}s.point[b]=q,b++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar(dt),q.groundColor.copy(H.groundColor).multiplyScalar(dt),s.hemi[x]=q,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=m,s.ambient[2]=p;const F=s.hash;(F.directionalLength!==y||F.pointLength!==b||F.spotLength!==A||F.rectAreaLength!==M||F.hemiLength!==x||F.numDirectionalShadows!==D||F.numPointShadows!==P||F.numSpotShadows!==U||F.numSpotMaps!==G||F.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,F.directionalLength=y,F.pointLength=b,F.spotLength=A,F.rectAreaLength=M,F.hemiLength=x,F.numDirectionalShadows=D,F.numPointShadows=P,F.numSpotShadows=U,F.numSpotMaps=G,F.numLightProbes=O,s.version=WR++)}function v(g,S){let m=0,p=0,y=0,b=0,A=0;const M=S.matrixWorldInverse;for(let x=0,D=g.length;x<D;x++){const P=g[x];if(P.isDirectionalLight){const U=s.directional[m];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),m++}else if(P.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),d.identity(),c.copy(P.matrixWorld),c.premultiply(M),d.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(P.isPointLight){const U=s.point[p];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(M),p++}else if(P.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(M),A++}}}return{setup:h,setupView:v,state:s}}function yx(o){const e=new ZR(o),i=[],s=[];function l(S){g.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function d(S){s.push(S)}function h(){e.setup(i)}function v(S){e.setupView(i,S)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:h,setupLightsView:v,pushLight:c,pushShadow:d}}function KR(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new yx(o),e.set(l,[h])):c>=d.length?(h=new yx(o),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const QR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JR=`uniform sampler2D shadow_pass;
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
}`;function $R(o,e,i){let s=new qp;const l=new Ue,c=new Ue,d=new je,h=new S1({depthPacking:DE}),v=new y1,g={},S=i.maxTextureSize,m={[fr]:Jn,[Jn]:fr,[Ea]:Ea},p=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:QR,fragmentShader:JR}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ti;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qn(b,p),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rx;let x=this.type;this.render=function(B,O,F){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),j=o.state;j.setBlending(lr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const dt=x!==Ma&&this.type===Ma,_t=x===Ma&&this.type!==Ma;for(let et=0,q=B.length;et<q;et++){const lt=B[et],J=lt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const At=J.getFrameExtents();if(l.multiply(At),c.copy(J.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/At.x),l.x=c.x*At.x,J.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/At.y),l.y=c.y*At.y,J.mapSize.y=c.y)),J.map===null||dt===!0||_t===!0){const ft=this.type!==Ma?{minFilter:fi,magFilter:fi}:{};J.map!==null&&J.map.dispose(),J.map=new Kr(l.x,l.y,ft),J.map.texture.name=lt.name+".shadowMap",J.camera.updateProjectionMatrix()}o.setRenderTarget(J.map),o.clear();const Ct=J.getViewportCount();for(let ft=0;ft<Ct;ft++){const bt=J.getViewport(ft);d.set(c.x*bt.x,c.y*bt.y,c.x*bt.z,c.y*bt.w),j.viewport(d),J.updateMatrices(lt,ft),s=J.getFrustum(),U(O,F,J.camera,lt,this.type)}J.isPointLightShadow!==!0&&this.type===Ma&&D(J,F),J.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(C,w,H)};function D(B,O){const F=e.update(A);p.defines.VSM_SAMPLES!==B.blurSamples&&(p.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Kr(l.x,l.y)),p.uniforms.shadow_pass.value=B.map.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,F,p,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,F,y,A,null)}function P(B,O,F,C){let w=null;const H=F.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)w=H;else if(w=F.isPointLight===!0?v:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=w.uuid,dt=O.uuid;let _t=g[j];_t===void 0&&(_t={},g[j]=_t);let et=_t[dt];et===void 0&&(et=w.clone(),_t[dt]=et,O.addEventListener("dispose",G)),w=et}if(w.visible=O.visible,w.wireframe=O.wireframe,C===Ma?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:m[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=o.properties.get(w);j.light=F}return w}function U(B,O,F,C,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Ma)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,B.matrixWorld);const dt=e.update(B),_t=B.material;if(Array.isArray(_t)){const et=dt.groups;for(let q=0,lt=et.length;q<lt;q++){const J=et[q],At=_t[J.materialIndex];if(At&&At.visible){const Ct=P(B,At,C,w);B.onBeforeShadow(o,B,O,F,dt,Ct,J),o.renderBufferDirect(F,null,dt,Ct,B,J),B.onAfterShadow(o,B,O,F,dt,Ct,J)}}}else if(_t.visible){const et=P(B,_t,C,w);B.onBeforeShadow(o,B,O,F,dt,et,null),o.renderBufferDirect(F,null,dt,et,B,null),B.onAfterShadow(o,B,O,F,dt,et,null)}}const j=B.children;for(let dt=0,_t=j.length;dt<_t;dt++)U(j[dt],O,F,C,w)}function G(B){B.target.removeEventListener("dispose",G);for(const F in g){const C=g[F],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const t2={[Xh]:qh,[Yh]:Zh,[Wh]:Kh,[to]:jh,[qh]:Xh,[Zh]:Yh,[Kh]:Wh,[jh]:to};function e2(o,e){function i(){let X=!1;const Pt=new je;let Ft=null;const Qt=new je(0,0,0,0);return{setMask:function(Ut){Ft!==Ut&&!X&&(o.colorMask(Ut,Ut,Ut,Ut),Ft=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,Tt,ee,he,qe){qe===!0&&(Ut*=he,Tt*=he,ee*=he),Pt.set(Ut,Tt,ee,he),Qt.equals(Pt)===!1&&(o.clearColor(Ut,Tt,ee,he),Qt.copy(Pt))},reset:function(){X=!1,Ft=null,Qt.set(-1,0,0,0)}}}function s(){let X=!1,Pt=!1,Ft=null,Qt=null,Ut=null;return{setReversed:function(Tt){if(Pt!==Tt){const ee=e.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Pt=Tt;const he=Ut;Ut=null,this.setClear(he)}},getReversed:function(){return Pt},setTest:function(Tt){Tt?ot(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Tt){Ft!==Tt&&!X&&(o.depthMask(Tt),Ft=Tt)},setFunc:function(Tt){if(Pt&&(Tt=t2[Tt]),Qt!==Tt){switch(Tt){case Xh:o.depthFunc(o.NEVER);break;case qh:o.depthFunc(o.ALWAYS);break;case Yh:o.depthFunc(o.LESS);break;case to:o.depthFunc(o.LEQUAL);break;case Wh:o.depthFunc(o.EQUAL);break;case jh:o.depthFunc(o.GEQUAL);break;case Zh:o.depthFunc(o.GREATER);break;case Kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Qt=Tt}},setLocked:function(Tt){X=Tt},setClear:function(Tt){Ut!==Tt&&(Pt&&(Tt=1-Tt),o.clearDepth(Tt),Ut=Tt)},reset:function(){X=!1,Ft=null,Qt=null,Ut=null,Pt=!1}}}function l(){let X=!1,Pt=null,Ft=null,Qt=null,Ut=null,Tt=null,ee=null,he=null,qe=null;return{setTest:function(be){X||(be?ot(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(be){Pt!==be&&!X&&(o.stencilMask(be),Pt=be)},setFunc:function(be,nn,_n){(Ft!==be||Qt!==nn||Ut!==_n)&&(o.stencilFunc(be,nn,_n),Ft=be,Qt=nn,Ut=_n)},setOp:function(be,nn,_n){(Tt!==be||ee!==nn||he!==_n)&&(o.stencilOp(be,nn,_n),Tt=be,ee=nn,he=_n)},setLocked:function(be){X=be},setClear:function(be){qe!==be&&(o.clearStencil(be),qe=be)},reset:function(){X=!1,Pt=null,Ft=null,Qt=null,Ut=null,Tt=null,ee=null,he=null,qe=null}}}const c=new i,d=new s,h=new l,v=new WeakMap,g=new WeakMap;let S={},m={},p=new WeakMap,y=[],b=null,A=!1,M=null,x=null,D=null,P=null,U=null,G=null,B=null,O=new we(0,0,0),F=0,C=!1,w=null,H=null,j=null,dt=null,_t=null;const et=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,lt=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=lt>=1):J.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=lt>=2);let At=null,Ct={};const ft=o.getParameter(o.SCISSOR_BOX),bt=o.getParameter(o.VIEWPORT),fe=new je().fromArray(ft),z=new je().fromArray(bt);function gt(X,Pt,Ft,Qt){const Ut=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(X,Tt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ee=0;ee<Ft;ee++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,Qt,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(Pt+ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return Tt}const it={};it[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(to),W(!1),ct(_v),ot(o.CULL_FACE),ze(lr);function ot(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function wt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Ht(X,Pt){return m[X]!==Pt?(o.bindFramebuffer(X,Pt),m[X]=Pt,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Pt),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Ot(X,Pt){let Ft=y,Qt=!1;if(X){Ft=p.get(Pt),Ft===void 0&&(Ft=[],p.set(Pt,Ft));const Ut=X.textures;if(Ft.length!==Ut.length||Ft[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,ee=Ut.length;Tt<ee;Tt++)Ft[Tt]=o.COLOR_ATTACHMENT0+Tt;Ft.length=Ut.length,Qt=!0}}else Ft[0]!==o.BACK&&(Ft[0]=o.BACK,Qt=!0);Qt&&o.drawBuffers(Ft)}function Dt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Kt={[Xr]:o.FUNC_ADD,[iE]:o.FUNC_SUBTRACT,[aE]:o.FUNC_REVERSE_SUBTRACT};Kt[rE]=o.MIN,Kt[sE]=o.MAX;const I={[oE]:o.ZERO,[lE]:o.ONE,[uE]:o.SRC_COLOR,[Vh]:o.SRC_ALPHA,[mE]:o.SRC_ALPHA_SATURATE,[hE]:o.DST_COLOR,[fE]:o.DST_ALPHA,[cE]:o.ONE_MINUS_SRC_COLOR,[kh]:o.ONE_MINUS_SRC_ALPHA,[pE]:o.ONE_MINUS_DST_COLOR,[dE]:o.ONE_MINUS_DST_ALPHA,[gE]:o.CONSTANT_COLOR,[_E]:o.ONE_MINUS_CONSTANT_COLOR,[vE]:o.CONSTANT_ALPHA,[xE]:o.ONE_MINUS_CONSTANT_ALPHA};function ze(X,Pt,Ft,Qt,Ut,Tt,ee,he,qe,be){if(X===lr){A===!0&&(wt(o.BLEND),A=!1);return}if(A===!1&&(ot(o.BLEND),A=!0),X!==nE){if(X!==M||be!==C){if((x!==Xr||U!==Xr)&&(o.blendEquation(o.FUNC_ADD),x=Xr,U=Xr),be)switch(X){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFunc(o.ONE,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Sv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case xv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,P=null,G=null,B=null,O.set(0,0,0),F=0,M=X,C=be}return}Ut=Ut||Pt,Tt=Tt||Ft,ee=ee||Qt,(Pt!==x||Ut!==U)&&(o.blendEquationSeparate(Kt[Pt],Kt[Ut]),x=Pt,U=Ut),(Ft!==D||Qt!==P||Tt!==G||ee!==B)&&(o.blendFuncSeparate(I[Ft],I[Qt],I[Tt],I[ee]),D=Ft,P=Qt,G=Tt,B=ee),(he.equals(O)===!1||qe!==F)&&(o.blendColor(he.r,he.g,he.b,qe),O.copy(he),F=qe),M=X,C=!1}function k(X,Pt){X.side===Ea?wt(o.CULL_FACE):ot(o.CULL_FACE);let Ft=X.side===Jn;Pt&&(Ft=!Ft),W(Ft),X.blending===Js&&X.transparent===!1?ze(lr):ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Qt=X.stencilWrite;h.setTest(Qt),Qt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function W(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function ct(X){X!==tE?(ot(o.CULL_FACE),X!==H&&(X===_v?o.cullFace(o.BACK):X===eE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=X}function vt(X){X!==j&&(q&&o.lineWidth(X),j=X)}function xt(X,Pt,Ft){X?(ot(o.POLYGON_OFFSET_FILL),(dt!==Pt||_t!==Ft)&&(o.polygonOffset(Pt,Ft),dt=Pt,_t=Ft)):wt(o.POLYGON_OFFSET_FILL)}function rt(X){X?ot(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function zt(X){X===void 0&&(X=o.TEXTURE0+et-1),At!==X&&(o.activeTexture(X),At=X)}function Yt(X,Pt,Ft){Ft===void 0&&(At===null?Ft=o.TEXTURE0+et-1:Ft=At);let Qt=Ct[Ft];Qt===void 0&&(Qt={type:void 0,texture:void 0},Ct[Ft]=Qt),(Qt.type!==X||Qt.texture!==Pt)&&(At!==Ft&&(o.activeTexture(Ft),At=Ft),o.bindTexture(X,Pt||it[X]),Qt.type=X,Qt.texture=Pt)}function N(){const X=Ct[At];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(X){fe.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),fe.copy(X))}function ue(X){z.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),z.copy(X))}function ie(X,Pt){let Ft=g.get(Pt);Ft===void 0&&(Ft=new WeakMap,g.set(Pt,Ft));let Qt=Ft.get(X);Qt===void 0&&(Qt=o.getUniformBlockIndex(Pt,X.name),Ft.set(X,Qt))}function kt(X,Pt){const Qt=g.get(Pt).get(X);v.get(Pt)!==Qt&&(o.uniformBlockBinding(Pt,Qt,X.__bindingPointIndex),v.set(Pt,Qt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},At=null,Ct={},m={},p=new WeakMap,y=[],b=null,A=!1,M=null,x=null,D=null,P=null,U=null,G=null,B=null,O=new we(0,0,0),F=0,C=!1,w=null,H=null,j=null,dt=null,_t=null,fe.set(0,0,o.canvas.width,o.canvas.height),z.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ot,disable:wt,bindFramebuffer:Ht,drawBuffers:Ot,useProgram:Dt,setBlending:ze,setMaterial:k,setFlipSided:W,setCullFace:ct,setLineWidth:vt,setPolygonOffset:xt,setScissorTest:rt,activeTexture:zt,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:ae,texImage3D:Lt,updateUBOMapping:ie,uniformBlockBinding:kt,texStorage2D:It,texStorage3D:ne,texSubImage2D:mt,texSubImage3D:Rt,compressedTexSubImage2D:St,compressedTexSubImage3D:Jt,scissor:Vt,viewport:ue,reset:pe}}function n2(o,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ue,S=new WeakMap;let m;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):Ec("canvas")}function A(N,E,Z){let mt=1;const Rt=Yt(N);if((Rt.width>Z||Rt.height>Z)&&(mt=Z/Math.max(Rt.width,Rt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const St=Math.floor(mt*Rt.width),Jt=Math.floor(mt*Rt.height);m===void 0&&(m=b(St,Jt));const It=E?b(St,Jt):m;return It.width=St,It.height=Jt,It.getContext("2d").drawImage(N,0,0,St,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+St+"x"+Jt+")."),It}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,E,Z,mt,Rt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let St=E;if(E===o.RED&&(Z===o.FLOAT&&(St=o.R32F),Z===o.HALF_FLOAT&&(St=o.R16F),Z===o.UNSIGNED_BYTE&&(St=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(St=o.R8UI),Z===o.UNSIGNED_SHORT&&(St=o.R16UI),Z===o.UNSIGNED_INT&&(St=o.R32UI),Z===o.BYTE&&(St=o.R8I),Z===o.SHORT&&(St=o.R16I),Z===o.INT&&(St=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(St=o.RG32F),Z===o.HALF_FLOAT&&(St=o.RG16F),Z===o.UNSIGNED_BYTE&&(St=o.RG8)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(St=o.RG8UI),Z===o.UNSIGNED_SHORT&&(St=o.RG16UI),Z===o.UNSIGNED_INT&&(St=o.RG32UI),Z===o.BYTE&&(St=o.RG8I),Z===o.SHORT&&(St=o.RG16I),Z===o.INT&&(St=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(St=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(St=o.RGB16UI),Z===o.UNSIGNED_INT&&(St=o.RGB32UI),Z===o.BYTE&&(St=o.RGB8I),Z===o.SHORT&&(St=o.RGB16I),Z===o.INT&&(St=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),Z===o.UNSIGNED_INT&&(St=o.RGBA32UI),Z===o.BYTE&&(St=o.RGBA8I),Z===o.SHORT&&(St=o.RGBA16I),Z===o.INT&&(St=o.RGBA32I)),E===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),E===o.RGBA){const Jt=Rt?yc:Pe.getTransfer(mt);Z===o.FLOAT&&(St=o.RGBA32F),Z===o.HALF_FLOAT&&(St=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(St=Jt===We?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function U(N,E){let Z;return N?E===null||E===Zr||E===dl?Z=o.DEPTH24_STENCIL8:E===Ta?Z=o.DEPTH32F_STENCIL8:E===fl&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===dl?Z=o.DEPTH_COMPONENT24:E===Ta?Z=o.DEPTH_COMPONENT32F:E===fl&&(Z=o.DEPTH_COMPONENT16),Z}function G(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==fi&&N.minFilter!==Ki?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),F(E),E.isVideoTexture&&S.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),w(E)}function F(N){const E=s.get(N);if(E.__webglInit===void 0)return;const Z=N.source,mt=p.get(Z);if(mt){const Rt=mt[E.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&C(N),Object.keys(mt).length===0&&p.delete(Z)}s.remove(N)}function C(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const Z=N.source,mt=p.get(Z);delete mt[E.__cacheKey],d.memory.textures--}function w(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let Rt=0;Rt<E.__webglFramebuffer[mt].length;Rt++)o.deleteFramebuffer(E.__webglFramebuffer[mt][Rt]);else o.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[mt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=N.textures;for(let mt=0,Rt=Z.length;mt<Rt;mt++){const St=s.get(Z[mt]);St.__webglTexture&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),s.remove(Z[mt])}s.remove(N)}let H=0;function j(){H=0}function dt(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function _t(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function et(N,E){const Z=s.get(N);if(N.isVideoTexture&&rt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,N,E);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function q(N,E){const Z=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){it(Z,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function lt(N,E){const Z=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){it(Z,N,E);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function J(N,E){const Z=s.get(N);if(N.version>0&&Z.__version!==N.version){ot(Z,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const At={[$h]:o.REPEAT,[Yr]:o.CLAMP_TO_EDGE,[tp]:o.MIRRORED_REPEAT},Ct={[fi]:o.NEAREST,[CE]:o.NEAREST_MIPMAP_NEAREST,[Xu]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[lh]:o.LINEAR_MIPMAP_NEAREST,[Wr]:o.LINEAR_MIPMAP_LINEAR},ft={[NE]:o.NEVER,[BE]:o.ALWAYS,[LE]:o.LESS,[Gx]:o.LEQUAL,[OE]:o.EQUAL,[IE]:o.GEQUAL,[PE]:o.GREATER,[zE]:o.NOTEQUAL};function bt(N,E){if(E.type===Ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ki||E.magFilter===lh||E.magFilter===Xu||E.magFilter===Wr||E.minFilter===Ki||E.minFilter===lh||E.minFilter===Xu||E.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,At[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,At[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,At[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Ct[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Ct[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,ft[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fi||E.minFilter!==Xu&&E.minFilter!==Wr||E.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function fe(N,E){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const mt=E.source;let Rt=p.get(mt);Rt===void 0&&(Rt={},p.set(mt,Rt));const St=_t(E);if(St!==N.__cacheKey){Rt[St]===void 0&&(Rt[St]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),Rt[St].usedTimes++;const Jt=Rt[N.__cacheKey];Jt!==void 0&&(Rt[N.__cacheKey].usedTimes--,Jt.usedTimes===0&&C(E)),N.__cacheKey=St,N.__webglTexture=Rt[St].texture}return Z}function z(N,E,Z){return Math.floor(Math.floor(N/Z)/E)}function gt(N,E,Z,mt){const St=N.updateRanges;if(St.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Z,mt,E.data);else{St.sort((Lt,Vt)=>Lt.start-Vt.start);let Jt=0;for(let Lt=1;Lt<St.length;Lt++){const Vt=St[Jt],ue=St[Lt],ie=Vt.start+Vt.count,kt=z(ue.start,E.width,4),pe=z(Vt.start,E.width,4);ue.start<=ie+1&&kt===pe&&z(ue.start+ue.count-1,E.width,4)===kt?Vt.count=Math.max(Vt.count,ue.start+ue.count-Vt.start):(++Jt,St[Jt]=ue)}St.length=Jt+1;const It=o.getParameter(o.UNPACK_ROW_LENGTH),ne=o.getParameter(o.UNPACK_SKIP_PIXELS),ae=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Lt=0,Vt=St.length;Lt<Vt;Lt++){const ue=St[Lt],ie=Math.floor(ue.start/4),kt=Math.ceil(ue.count/4),pe=ie%E.width,X=Math.floor(ie/E.width),Pt=kt,Ft=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,pe,X,Pt,Ft,Z,mt,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,It),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,ae)}}function it(N,E,Z){let mt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=o.TEXTURE_3D);const Rt=fe(N,E),St=E.source;i.bindTexture(mt,N.__webglTexture,o.TEXTURE0+Z);const Jt=s.get(St);if(St.version!==Jt.__version||Rt===!0){i.activeTexture(o.TEXTURE0+Z);const It=Pe.getPrimaries(Pe.workingColorSpace),ne=E.colorSpace===or?null:Pe.getPrimaries(E.colorSpace),ae=E.colorSpace===or||It===ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Lt=A(E.image,!1,l.maxTextureSize);Lt=zt(E,Lt);const Vt=c.convert(E.format,E.colorSpace),ue=c.convert(E.type);let ie=P(E.internalFormat,Vt,ue,E.colorSpace,E.isVideoTexture);bt(mt,E);let kt;const pe=E.mipmaps,X=E.isVideoTexture!==!0,Pt=Jt.__version===void 0||Rt===!0,Ft=St.dataReady,Qt=G(E,Lt);if(E.isDepthTexture)ie=U(E.format===pl,E.type),Pt&&(X?i.texStorage2D(o.TEXTURE_2D,1,ie,Lt.width,Lt.height):i.texImage2D(o.TEXTURE_2D,0,ie,Lt.width,Lt.height,0,Vt,ue,null));else if(E.isDataTexture)if(pe.length>0){X&&Pt&&i.texStorage2D(o.TEXTURE_2D,Qt,ie,pe[0].width,pe[0].height);for(let Ut=0,Tt=pe.length;Ut<Tt;Ut++)kt=pe[Ut],X?Ft&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,kt.width,kt.height,Vt,ue,kt.data):i.texImage2D(o.TEXTURE_2D,Ut,ie,kt.width,kt.height,0,Vt,ue,kt.data);E.generateMipmaps=!1}else X?(Pt&&i.texStorage2D(o.TEXTURE_2D,Qt,ie,Lt.width,Lt.height),Ft&&gt(E,Lt,Vt,ue)):i.texImage2D(o.TEXTURE_2D,0,ie,Lt.width,Lt.height,0,Vt,ue,Lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,ie,pe[0].width,pe[0].height,Lt.depth);for(let Ut=0,Tt=pe.length;Ut<Tt;Ut++)if(kt=pe[Ut],E.format!==Pi)if(Vt!==null)if(X){if(Ft)if(E.layerUpdates.size>0){const ee=Qv(kt.width,kt.height,E.format,E.type);for(const he of E.layerUpdates){const qe=kt.data.subarray(he*ee/kt.data.BYTES_PER_ELEMENT,(he+1)*ee/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,he,kt.width,kt.height,1,Vt,qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,0,kt.width,kt.height,Lt.depth,Vt,kt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ut,ie,kt.width,kt.height,Lt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ft&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ut,0,0,0,kt.width,kt.height,Lt.depth,Vt,ue,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ut,ie,kt.width,kt.height,Lt.depth,0,Vt,ue,kt.data)}else{X&&Pt&&i.texStorage2D(o.TEXTURE_2D,Qt,ie,pe[0].width,pe[0].height);for(let Ut=0,Tt=pe.length;Ut<Tt;Ut++)kt=pe[Ut],E.format!==Pi?Vt!==null?X?Ft&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ut,0,0,kt.width,kt.height,Vt,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ut,ie,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ft&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,kt.width,kt.height,Vt,ue,kt.data):i.texImage2D(o.TEXTURE_2D,Ut,ie,kt.width,kt.height,0,Vt,ue,kt.data)}else if(E.isDataArrayTexture)if(X){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Qt,ie,Lt.width,Lt.height,Lt.depth),Ft)if(E.layerUpdates.size>0){const Ut=Qv(Lt.width,Lt.height,E.format,E.type);for(const Tt of E.layerUpdates){const ee=Lt.data.subarray(Tt*Ut/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Ut/Lt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Tt,Lt.width,Lt.height,1,Vt,ue,ee)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Lt.width,Lt.height,Lt.depth,Vt,ue,Lt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ie,Lt.width,Lt.height,Lt.depth,0,Vt,ue,Lt.data);else if(E.isData3DTexture)X?(Pt&&i.texStorage3D(o.TEXTURE_3D,Qt,ie,Lt.width,Lt.height,Lt.depth),Ft&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Lt.width,Lt.height,Lt.depth,Vt,ue,Lt.data)):i.texImage3D(o.TEXTURE_3D,0,ie,Lt.width,Lt.height,Lt.depth,0,Vt,ue,Lt.data);else if(E.isFramebufferTexture){if(Pt)if(X)i.texStorage2D(o.TEXTURE_2D,Qt,ie,Lt.width,Lt.height);else{let Ut=Lt.width,Tt=Lt.height;for(let ee=0;ee<Qt;ee++)i.texImage2D(o.TEXTURE_2D,ee,ie,Ut,Tt,0,Vt,ue,null),Ut>>=1,Tt>>=1}}else if(pe.length>0){if(X&&Pt){const Ut=Yt(pe[0]);i.texStorage2D(o.TEXTURE_2D,Qt,ie,Ut.width,Ut.height)}for(let Ut=0,Tt=pe.length;Ut<Tt;Ut++)kt=pe[Ut],X?Ft&&i.texSubImage2D(o.TEXTURE_2D,Ut,0,0,Vt,ue,kt):i.texImage2D(o.TEXTURE_2D,Ut,ie,Vt,ue,kt);E.generateMipmaps=!1}else if(X){if(Pt){const Ut=Yt(Lt);i.texStorage2D(o.TEXTURE_2D,Qt,ie,Ut.width,Ut.height)}Ft&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,ue,Lt)}else i.texImage2D(o.TEXTURE_2D,0,ie,Vt,ue,Lt);M(E)&&x(mt),Jt.__version=St.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ot(N,E,Z){if(E.image.length!==6)return;const mt=fe(N,E),Rt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Z);const St=s.get(Rt);if(Rt.version!==St.__version||mt===!0){i.activeTexture(o.TEXTURE0+Z);const Jt=Pe.getPrimaries(Pe.workingColorSpace),It=E.colorSpace===or?null:Pe.getPrimaries(E.colorSpace),ne=E.colorSpace===or||Jt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,Vt=[];for(let Tt=0;Tt<6;Tt++)!ae&&!Lt?Vt[Tt]=A(E.image[Tt],!0,l.maxCubemapSize):Vt[Tt]=Lt?E.image[Tt].image:E.image[Tt],Vt[Tt]=zt(E,Vt[Tt]);const ue=Vt[0],ie=c.convert(E.format,E.colorSpace),kt=c.convert(E.type),pe=P(E.internalFormat,ie,kt,E.colorSpace),X=E.isVideoTexture!==!0,Pt=St.__version===void 0||mt===!0,Ft=Rt.dataReady;let Qt=G(E,ue);bt(o.TEXTURE_CUBE_MAP,E);let Ut;if(ae){X&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,pe,ue.width,ue.height);for(let Tt=0;Tt<6;Tt++){Ut=Vt[Tt].mipmaps;for(let ee=0;ee<Ut.length;ee++){const he=Ut[ee];E.format!==Pi?ie!==null?X?Ft&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,0,0,he.width,he.height,ie,he.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,0,0,he.width,he.height,ie,kt,he.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,pe,he.width,he.height,0,ie,kt,he.data)}}}else{if(Ut=E.mipmaps,X&&Pt){Ut.length>0&&Qt++;const Tt=Yt(Vt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Qt,pe,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Lt){X?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Vt[Tt].width,Vt[Tt].height,ie,kt,Vt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pe,Vt[Tt].width,Vt[Tt].height,0,ie,kt,Vt[Tt].data);for(let ee=0;ee<Ut.length;ee++){const qe=Ut[ee].image[Tt].image;X?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,0,0,qe.width,qe.height,ie,kt,qe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,pe,qe.width,qe.height,0,ie,kt,qe.data)}}else{X?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,ie,kt,Vt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pe,ie,kt,Vt[Tt]);for(let ee=0;ee<Ut.length;ee++){const he=Ut[ee];X?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,0,0,ie,kt,he.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,pe,ie,kt,he.image[Tt])}}}M(E)&&x(o.TEXTURE_CUBE_MAP),St.__version=Rt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,Z,mt,Rt,St){const Jt=c.convert(Z.format,Z.colorSpace),It=c.convert(Z.type),ne=P(Z.internalFormat,Jt,It,Z.colorSpace),ae=s.get(E),Lt=s.get(Z);if(Lt.__renderTarget=E,!ae.__hasExternalTextures){const Vt=Math.max(1,E.width>>St),ue=Math.max(1,E.height>>St);Rt===o.TEXTURE_3D||Rt===o.TEXTURE_2D_ARRAY?i.texImage3D(Rt,St,ne,Vt,ue,E.depth,0,Jt,It,null):i.texImage2D(Rt,St,ne,Vt,ue,0,Jt,It,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),xt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Rt,Lt.__webglTexture,0,vt(E)):(Rt===o.TEXTURE_2D||Rt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Rt,Lt.__webglTexture,St),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(N,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const mt=E.depthTexture,Rt=mt&&mt.isDepthTexture?mt.type:null,St=U(E.stencilBuffer,Rt),Jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=vt(E);xt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,St,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,St,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,St,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Jt,o.RENDERBUFFER,N)}else{const mt=E.textures;for(let Rt=0;Rt<mt.length;Rt++){const St=mt[Rt],Jt=c.convert(St.format,St.colorSpace),It=c.convert(St.type),ne=P(St.internalFormat,Jt,It,St.colorSpace),ae=vt(E);Z&&xt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,ne,E.width,E.height):xt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ae,ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(E.depthTexture);mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),et(E.depthTexture,0);const Rt=mt.__webglTexture,St=vt(E);if(E.depthTexture.format===hl)xt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Rt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Rt,0);else if(E.depthTexture.format===pl)xt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Rt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function Dt(N){const E=s.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const Rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",Rt)};mt.addEventListener("dispose",Rt),E.__depthDisposeCallback=Rt}E.__boundDepthTexture=mt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?Ot(E.__webglFramebuffer[0],N):Ot(E.__webglFramebuffer,N)}else if(Z){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ht(E.__webglDepthbuffer[mt],N,!1);else{const Rt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,St)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ht(E.__webglDepthbuffer,N,!1);else{const Rt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,St)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(N,E,Z){const mt=s.get(N);E!==void 0&&wt(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Dt(N)}function I(N){const E=N.texture,Z=s.get(N),mt=s.get(E);N.addEventListener("dispose",O);const Rt=N.textures,St=N.isWebGLCubeRenderTarget===!0,Jt=Rt.length>1;if(Jt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=E.version,d.memory.textures++),St){Z.__webglFramebuffer=[];for(let It=0;It<6;It++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[It]=[];for(let ne=0;ne<E.mipmaps.length;ne++)Z.__webglFramebuffer[It][ne]=o.createFramebuffer()}else Z.__webglFramebuffer[It]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let It=0;It<E.mipmaps.length;It++)Z.__webglFramebuffer[It]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Jt)for(let It=0,ne=Rt.length;It<ne;It++){const ae=s.get(Rt[It]);ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&xt(N)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let It=0;It<Rt.length;It++){const ne=Rt[It];Z.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[It]);const ae=c.convert(ne.format,ne.colorSpace),Lt=c.convert(ne.type),Vt=P(ne.internalFormat,ae,Lt,ne.colorSpace,N.isXRRenderTarget===!0),ue=vt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Vt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Z.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(Z.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),bt(o.TEXTURE_CUBE_MAP,E);for(let It=0;It<6;It++)if(E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)wt(Z.__webglFramebuffer[It][ne],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,ne);else wt(Z.__webglFramebuffer[It],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let It=0,ne=Rt.length;It<ne;It++){const ae=Rt[It],Lt=s.get(ae);let Vt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Vt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Vt,Lt.__webglTexture),bt(Vt,ae),wt(Z.__webglFramebuffer,N,ae,o.COLOR_ATTACHMENT0+It,Vt,0),M(ae)&&x(Vt)}i.unbindTexture()}else{let It=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,mt.__webglTexture),bt(It,E),E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)wt(Z.__webglFramebuffer[ne],N,E,o.COLOR_ATTACHMENT0,It,ne);else wt(Z.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,It,0);M(E)&&x(It),i.unbindTexture()}N.depthBuffer&&Dt(N)}function ze(N){const E=N.textures;for(let Z=0,mt=E.length;Z<mt;Z++){const Rt=E[Z];if(M(Rt)){const St=D(N),Jt=s.get(Rt).__webglTexture;i.bindTexture(St,Jt),x(St),i.unbindTexture()}}}const k=[],W=[];function ct(N){if(N.samples>0){if(xt(N)===!1){const E=N.textures,Z=N.width,mt=N.height;let Rt=o.COLOR_BUFFER_BIT;const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Jt=s.get(N),It=E.length>1;if(It)for(let ae=0;ae<E.length;ae++)i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const ne=N.texture.mipmaps;ne&&ne.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Rt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Rt|=o.STENCIL_BUFFER_BIT)),It){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const Lt=s.get(E[ae]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Lt,0)}o.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,Rt,o.NEAREST),v===!0&&(k.length=0,W.length=0,k.push(o.COLOR_ATTACHMENT0+ae),N.depthBuffer&&N.resolveDepthBuffer===!1&&(k.push(St),W.push(St),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,k))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let ae=0;ae<E.length;ae++){i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const Lt=s.get(E[ae]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ae,o.TEXTURE_2D,Lt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&v){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function vt(N){return Math.min(l.maxSamples,N.samples)}function xt(N){const E=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rt(N){const E=d.render.frame;S.get(N)!==E&&(S.set(N,E),N.update())}function zt(N,E){const Z=N.colorSpace,mt=N.format,Rt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==io&&Z!==or&&(Pe.getTransfer(Z)===We?(mt!==Pi||Rt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(g.width=N.naturalWidth||N.width,g.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(g.width=N.displayWidth,g.height=N.displayHeight):(g.width=N.width,g.height=N.height),g}this.allocateTextureUnit=dt,this.resetTextureUnits=j,this.setTexture2D=et,this.setTexture2DArray=q,this.setTexture3D=lt,this.setTextureCube=J,this.rebindTextures=Kt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=xt}function i2(o,e){function i(s,l=or){let c;const d=Pe.getTransfer(l);if(s===$i)return o.UNSIGNED_BYTE;if(s===Ip)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ox)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Px)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nx)return o.BYTE;if(s===Lx)return o.SHORT;if(s===fl)return o.UNSIGNED_SHORT;if(s===zp)return o.INT;if(s===Zr)return o.UNSIGNED_INT;if(s===Ta)return o.FLOAT;if(s===gl)return o.HALF_FLOAT;if(s===zx)return o.ALPHA;if(s===Ix)return o.RGB;if(s===Pi)return o.RGBA;if(s===hl)return o.DEPTH_COMPONENT;if(s===pl)return o.DEPTH_STENCIL;if(s===Bx)return o.RED;if(s===Fp)return o.RED_INTEGER;if(s===Fx)return o.RG;if(s===Hp)return o.RG_INTEGER;if(s===Gp)return o.RGBA_INTEGER;if(s===mc||s===gc||s===_c||s===vc)if(d===We)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===np||s===ip||s===ap)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rp||s===sp||s===op)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rp||s===sp)return d===We?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===op)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===lp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===up)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_p)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yp)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mp||s===Ep||s===Tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Mp)return d===We?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bp||s===Ap||s===Rp||s===Cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===bp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
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

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Jx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new dr({vertexShader:a2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new Sl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends ro{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",v=1,g=null,S=null,m=null,p=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new s2,x={},D=i.getContextAttributes();let P=null,U=null;const G=[],B=[],O=new Ue;let F=null;const C=new Ei;C.viewport=new je;const w=new Ei;w.viewport=new je;const H=[C,w],j=new A1;let dt=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ot=G[it];return ot===void 0&&(ot=new Uh,G[it]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(it){let ot=G[it];return ot===void 0&&(ot=new Uh,G[it]=ot),ot.getGripSpace()},this.getHand=function(it){let ot=G[it];return ot===void 0&&(ot=new Uh,G[it]=ot),ot.getHandSpace()};function et(it){const ot=B.indexOf(it.inputSource);if(ot===-1)return;const wt=G[ot];wt!==void 0&&(wt.update(it.inputSource,it.frame,g||d),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function q(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",lt);for(let it=0;it<G.length;it++){const ot=B[it];ot!==null&&(B[it]=null,G[it].disconnect(ot))}dt=null,_t=null,M.reset();for(const it in x)delete x[it];e.setRenderTarget(P),y=null,p=null,m=null,l=null,U=null,gt.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(it){g=it},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",q),l.addEventListener("inputsourceschange",lt),D.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Ot=null;D.depth&&(Ot=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=D.stencil?pl:hl,Ht=D.stencil?dl:Zr);const Dt={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};m=this.getBinding(),p=m.createProjectionLayer(Dt),l.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),U=new Kr(p.textureWidth,p.textureHeight,{format:Pi,type:$i,depthTexture:new Qx(p.textureWidth,p.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const wt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Kr(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(v),g=null,d=await l.requestReferenceSpace(h),gt.setContext(l),gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function lt(it){for(let ot=0;ot<it.removed.length;ot++){const wt=it.removed[ot],Ht=B.indexOf(wt);Ht>=0&&(B[Ht]=null,G[Ht].disconnect(wt))}for(let ot=0;ot<it.added.length;ot++){const wt=it.added[ot];let Ht=B.indexOf(wt);if(Ht===-1){for(let Dt=0;Dt<G.length;Dt++)if(Dt>=B.length){B.push(wt),Ht=Dt;break}else if(B[Dt]===null){B[Dt]=wt,Ht=Dt;break}if(Ht===-1)break}const Ot=G[Ht];Ot&&Ot.connect(wt)}}const J=new nt,At=new nt;function Ct(it,ot,wt){J.setFromMatrixPosition(ot.matrixWorld),At.setFromMatrixPosition(wt.matrixWorld);const Ht=J.distanceTo(At),Ot=ot.projectionMatrix.elements,Dt=wt.projectionMatrix.elements,Kt=Ot[14]/(Ot[10]-1),I=Ot[14]/(Ot[10]+1),ze=(Ot[9]+1)/Ot[5],k=(Ot[9]-1)/Ot[5],W=(Ot[8]-1)/Ot[0],ct=(Dt[8]+1)/Dt[0],vt=Kt*W,xt=Kt*ct,rt=Ht/(-W+ct),zt=rt*-W;if(ot.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(zt),it.translateZ(rt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ot[10]===-1)it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Yt=Kt+rt,N=I+rt,E=vt-zt,Z=xt+(Ht-zt),mt=ze*I/N*Yt,Rt=k*I/N*Yt;it.projectionMatrix.makePerspective(E,Z,mt,Rt,Yt,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function ft(it,ot){ot===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ot.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ot=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),j.near=w.near=C.near=ot,j.far=w.far=C.far=wt,(dt!==j.near||_t!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),dt=j.near,_t=j.far),j.layers.mask=it.layers.mask|6,C.layers.mask=j.layers.mask&3,w.layers.mask=j.layers.mask&5;const Ht=it.parent,Ot=j.cameras;ft(j,Ht);for(let Dt=0;Dt<Ot.length;Dt++)ft(Ot[Dt],Ht);Ot.length===2?Ct(j,C,w):j.projectionMatrix.copy(C.projectionMatrix),bt(it,j,Ht)};function bt(it,ot,wt){wt===null?it.matrix.copy(ot.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ot.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=wp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(p===null&&y===null))return v},this.setFoveation=function(it){v=it,p!==null&&(p.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(it){return x[it]};let fe=null;function z(it,ot){if(S=ot.getViewerPose(g||d),b=ot,S!==null){const wt=S.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Ht=!1;wt.length!==j.cameras.length&&(j.cameras.length=0,Ht=!0);for(let I=0;I<wt.length;I++){const ze=wt[I];let k=null;if(y!==null)k=y.getViewport(ze);else{const ct=m.getViewSubImage(p,ze);k=ct.viewport,I===0&&(e.setRenderTargetTextures(U,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(U))}let W=H[I];W===void 0&&(W=new Ei,W.layers.enable(I),W.viewport=new je,H[I]=W),W.matrix.fromArray(ze.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ze.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(k.x,k.y,k.width,k.height),I===0&&(j.matrix.copy(W.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ht===!0&&j.cameras.push(W)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){m=s.getBinding();const I=m.getDepthInformation(wt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(Ot&&Ot.includes("camera-access")&&A){e.state.unbindTexture(),m=s.getBinding();for(let I=0;I<wt.length;I++){const ze=wt[I].camera;if(ze){let k=x[ze];k||(k=new Jx,x[ze]=k);const W=m.getCameraImage(ze);k.sourceTexture=W}}}}for(let wt=0;wt<G.length;wt++){const Ht=B[wt],Ot=G[wt];Ht!==null&&Ot!==void 0&&Ot.update(Ht,ot,g||d)}fe&&fe(it,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),b=null}const gt=new tS;gt.setAnimationLoop(z),this.setAnimationLoop=function(it){fe=it},this.dispose=function(){}}}const Vr=new ta,l2=new en;function u2(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Wx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,P,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),m(M,x)):x.isMeshPhongMaterial?(c(M,x),S(M,x)):x.isMeshStandardMaterial?(c(M,x),p(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?v(M,x,D,P):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Jn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Jn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,U=D.envMapRotation;P&&(M.envMap.value=P,Vr.copy(U),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),M.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(Vr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function v(M,x,D,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function m(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function p(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function c2(o,e,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(D,P){const U=P.program;s.uniformBlockBinding(D,U)}function g(D,P){let U=l[D.id];U===void 0&&(b(D),U=S(D),l[D.id]=U,D.addEventListener("dispose",M));const G=P.program;s.updateUBOMapping(D,G);const B=e.render.frame;c[D.id]!==B&&(p(D),c[D.id]=B)}function S(D){const P=m();D.__bindingPointIndex=P;const U=o.createBuffer(),G=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,G,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function m(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const P=l[D.id],U=D.uniforms,G=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,O=U.length;B<O;B++){const F=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,w=F.length;C<w;C++){const H=F[C];if(y(H,B,C,G)===!0){const j=H.__offset,dt=Array.isArray(H.value)?H.value:[H.value];let _t=0;for(let et=0;et<dt.length;et++){const q=dt[et],lt=A(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,j+_t,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,_t),_t+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,P,U,G){const B=D.value,O=P+"_"+U;if(G[O]===void 0)return typeof B=="number"||typeof B=="boolean"?G[O]=B:G[O]=B.clone(),!0;{const F=G[O];if(typeof B=="number"||typeof B=="boolean"){if(F!==B)return G[O]=B,!0}else if(F.equals(B)===!1)return F.copy(B),!0}return!1}function b(D){const P=D.uniforms;let U=0;const G=16;for(let O=0,F=P.length;O<F;O++){const C=Array.isArray(P[O])?P[O]:[P[O]];for(let w=0,H=C.length;w<H;w++){const j=C[w],dt=Array.isArray(j.value)?j.value:[j.value];for(let _t=0,et=dt.length;_t<et;_t++){const q=dt[_t],lt=A(q),J=U%G,At=J%lt.boundary,Ct=J+At;U+=At,Ct!==0&&G-Ct<lt.storage&&(U+=G-Ct),j.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=lt.storage}}}const B=U%G;return B>0&&(U+=G-B),D.__size=U,D.__cache={},this}function A(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:v,update:g,dispose:x}}class f2{constructor(e={}){const{canvas:i=HE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const b=new Uint32Array(4),A=new Int32Array(4);let M=null,x=null;const D=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=ci;let B=0,O=0,F=null,C=-1,w=null;const H=new je,j=new je;let dt=null;const _t=new we(0);let et=0,q=i.width,lt=i.height,J=1,At=null,Ct=null;const ft=new je(0,0,q,lt),bt=new je(0,0,q,lt);let fe=!1;const z=new qp;let gt=!1,it=!1;const ot=new en,wt=new nt,Ht=new je,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Kt(){return F===null?J:1}let I=s;function ze(R,$){return i.getContext(R,$)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pp}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Qt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),I===null){const $="webgl2";if(I=ze($,R),I===null)throw ze($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let k,W,ct,vt,xt,rt,zt,Yt,N,E,Z,mt,Rt,St,Jt,It,ne,ae,Lt,Vt,ue,ie,kt,pe;function X(){k=new yA(I),k.init(),ie=new i2(I,k),W=new pA(I,k,e,ie),ct=new e2(I,k),W.reversedDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),vt=new TA(I),xt=new VR,rt=new n2(I,k,ct,xt,W,ie,vt),zt=new gA(U),Yt=new SA(U),N=new D1(I),kt=new dA(I,N),E=new MA(I,N,vt,kt),Z=new AA(I,E,N,vt),Lt=new bA(I,W,rt),It=new mA(xt),mt=new GR(U,zt,Yt,k,W,kt,It),Rt=new u2(U,xt),St=new XR,Jt=new KR(k),ae=new fA(U,zt,Yt,ct,Z,y,v),ne=new $R(U,Z,W),pe=new c2(I,vt,W,ct),Vt=new hA(I,k,vt),ue=new EA(I,k,vt),vt.programs=mt.programs,U.capabilities=W,U.extensions=k,U.properties=xt,U.renderLists=St,U.shadowMap=ne,U.state=ct,U.info=vt}X();const Pt=new o2(U,I);this.xr=Pt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=k.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=k.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(q,lt,!1))},this.getSize=function(R){return R.set(q,lt)},this.setSize=function(R,$,ht=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,lt=$,i.width=Math.floor(R*J),i.height=Math.floor($*J),ht===!0&&(i.style.width=R+"px",i.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(q*J,lt*J).floor()},this.setDrawingBufferSize=function(R,$,ht){q=R,lt=$,J=ht,i.width=Math.floor(R*ht),i.height=Math.floor($*ht),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(ft)},this.setViewport=function(R,$,ht,pt){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,$,ht,pt),ct.viewport(H.copy(ft).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,$,ht,pt){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,$,ht,pt),ct.scissor(j.copy(bt).multiplyScalar(J).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(R){ct.setScissorTest(fe=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Ct=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ht=!0){let pt=0;if(R){let tt=!1;if(F!==null){const Nt=F.texture.format;tt=Nt===Gp||Nt===Hp||Nt===Fp}if(tt){const Nt=F.texture.type,Xt=Nt===$i||Nt===Zr||Nt===fl||Nt===dl||Nt===Ip||Nt===Bp,jt=ae.getClearColor(),Bt=ae.getClearAlpha(),$t=jt.r,le=jt.g,se=jt.b;Xt?(b[0]=$t,b[1]=le,b[2]=se,b[3]=Bt,I.clearBufferuiv(I.COLOR,0,b)):(A[0]=$t,A[1]=le,A[2]=se,A[3]=Bt,I.clearBufferiv(I.COLOR,0,A))}else pt|=I.COLOR_BUFFER_BIT}$&&(pt|=I.DEPTH_BUFFER_BIT),ht&&(pt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Qt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),ae.dispose(),St.dispose(),Jt.dispose(),xt.dispose(),zt.dispose(),Yt.dispose(),Z.dispose(),kt.dispose(),pe.dispose(),mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",_n),Pt.removeEventListener("sessionend",Ln),ea.stop()};function Ft(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Qt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=vt.autoReset,$=ne.enabled,ht=ne.autoUpdate,pt=ne.needsUpdate,tt=ne.type;X(),vt.autoReset=R,ne.enabled=$,ne.autoUpdate=ht,ne.needsUpdate=pt,ne.type=tt}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tt(R){const $=R.target;$.removeEventListener("dispose",Tt),ee($)}function ee(R){he(R),xt.remove(R)}function he(R){const $=xt.get(R).programs;$!==void 0&&($.forEach(function(ht){mt.releaseProgram(ht)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ht,pt,tt,Nt){$===null&&($=Ot);const Xt=tt.isMesh&&tt.matrixWorld.determinant()<0,jt=Ml(R,$,ht,pt,tt);ct.setMaterial(pt,Xt);let Bt=ht.index,$t=1;if(pt.wireframe===!0){if(Bt=E.getWireframeAttribute(ht),Bt===void 0)return;$t=2}const le=ht.drawRange,se=ht.attributes.position;let Me=le.start*$t,He=(le.start+le.count)*$t;Nt!==null&&(Me=Math.max(Me,Nt.start*$t),He=Math.min(He,(Nt.start+Nt.count)*$t)),Bt!==null?(Me=Math.max(Me,0),He=Math.min(He,Bt.count)):se!=null&&(Me=Math.max(Me,0),He=Math.min(He,se.count));const $e=He-Me;if($e<0||$e===1/0)return;kt.setup(tt,pt,jt,ht,Bt);let Ie,Ne=Vt;if(Bt!==null&&(Ie=N.get(Bt),Ne=ue,Ne.setIndex(Ie)),tt.isMesh)pt.wireframe===!0?(ct.setLineWidth(pt.wireframeLinewidth*Kt()),Ne.setMode(I.LINES)):Ne.setMode(I.TRIANGLES);else if(tt.isLine){let oe=pt.linewidth;oe===void 0&&(oe=1),ct.setLineWidth(oe*Kt()),tt.isLineSegments?Ne.setMode(I.LINES):tt.isLineLoop?Ne.setMode(I.LINE_LOOP):Ne.setMode(I.LINE_STRIP)}else tt.isPoints?Ne.setMode(I.POINTS):tt.isSprite&&Ne.setMode(I.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ml("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))Ne.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const oe=tt._multiDrawStarts,Be=tt._multiDrawCounts,Se=tt._multiDrawCount,vn=Bt?N.get(Bt).bytesPerElement:1,$n=xt.get(pt).currentProgram.getUniforms();for(let Le=0;Le<Se;Le++)$n.setValue(I,"_gl_DrawID",Le),Ne.render(oe[Le]/vn,Be[Le])}else if(tt.isInstancedMesh)Ne.renderInstances(Me,$e,tt.count);else if(ht.isInstancedBufferGeometry){const oe=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Be=Math.min(ht.instanceCount,oe);Ne.renderInstances(Me,$e,Be)}else Ne.render(Me,$e)};function qe(R,$,ht){R.transparent===!0&&R.side===Ea&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,di(R,$,ht),R.side=fr,R.needsUpdate=!0,di(R,$,ht),R.side=Ea):di(R,$,ht)}this.compile=function(R,$,ht=null){ht===null&&(ht=R),x=Jt.get(ht),x.init($),P.push(x),ht.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),R!==ht&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),x.setupLights();const pt=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Nt=tt.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){const jt=Nt[Xt];qe(jt,ht,tt),pt.add(jt)}else qe(Nt,ht,tt),pt.add(Nt)}),x=P.pop(),pt},this.compileAsync=function(R,$,ht=null){const pt=this.compile(R,$,ht);return new Promise(tt=>{function Nt(){if(pt.forEach(function(Xt){xt.get(Xt).currentProgram.isReady()&&pt.delete(Xt)}),pt.size===0){tt(R);return}setTimeout(Nt,10)}k.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let be=null;function nn(R){be&&be(R)}function _n(){ea.stop()}function Ln(){ea.start()}const ea=new tS;ea.setAnimationLoop(nn),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(R){be=R,Pt.setAnimationLoop(R),R===null?ea.stop():ea.start()},Pt.addEventListener("sessionstart",_n),Pt.addEventListener("sessionend",Ln),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera($),$=Pt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,$,F),x=Jt.get(R,P.length),x.init($),P.push(x),ot.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z.setFromProjectionMatrix(ot,Qi,$.reversedDepth),it=this.localClippingEnabled,gt=It.init(this.clippingPlanes,it),M=St.get(R,D.length),M.init(),D.push(M),Pt.enabled===!0&&Pt.isPresenting===!0){const Nt=U.xr.getDepthSensingMesh();Nt!==null&&uo(Nt,$,-1/0,U.sortObjects)}uo(R,$,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(At,Ct),Dt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Dt&&ae.addToRenderList(M,R),this.info.render.frame++,gt===!0&&It.beginShadows();const ht=x.state.shadowsArray;ne.render(ht,R,$),gt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=M.opaque,tt=M.transmissive;if(x.setupLights(),$.isArrayCamera){const Nt=$.cameras;if(tt.length>0)for(let Xt=0,jt=Nt.length;Xt<jt;Xt++){const Bt=Nt[Xt];hr(pt,tt,R,Bt)}Dt&&ae.render(R);for(let Xt=0,jt=Nt.length;Xt<jt;Xt++){const Bt=Nt[Xt];yl(M,R,Bt,Bt.viewport)}}else tt.length>0&&hr(pt,tt,R,$),Dt&&ae.render(R),yl(M,R,$);F!==null&&O===0&&(rt.updateMultisampleRenderTarget(F),rt.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(U,R,$),kt.resetDefaultState(),C=-1,w=null,P.pop(),P.length>0?(x=P[P.length-1],gt===!0&&It.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function uo(R,$,ht,pt){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ht=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){pt&&Ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const Xt=Z.update(R),jt=R.material;jt.visible&&M.push(R,Xt,jt,ht,Ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const Xt=Z.update(R),jt=R.material;if(pt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ht.copy(R.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Ht.copy(Xt.boundingSphere.center)),Ht.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(jt)){const Bt=Xt.groups;for(let $t=0,le=Bt.length;$t<le;$t++){const se=Bt[$t],Me=jt[se.materialIndex];Me&&Me.visible&&M.push(R,Xt,Me,ht,Ht.z,se)}}else jt.visible&&M.push(R,Xt,jt,ht,Ht.z,null)}}const Nt=R.children;for(let Xt=0,jt=Nt.length;Xt<jt;Xt++)uo(Nt[Xt],$,ht,pt)}function yl(R,$,ht,pt){const tt=R.opaque,Nt=R.transmissive,Xt=R.transparent;x.setupLightsView(ht),gt===!0&&It.setGlobalState(U.clippingPlanes,ht),pt&&ct.viewport(H.copy(pt)),tt.length>0&&na(tt,$,ht),Nt.length>0&&na(Nt,$,ht),Xt.length>0&&na(Xt,$,ht),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function hr(R,$,ht,pt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[pt.id]===void 0&&(x.state.transmissionRenderTarget[pt.id]=new Kr(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?gl:$i,minFilter:Wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Nt=x.state.transmissionRenderTarget[pt.id],Xt=pt.viewport||H;Nt.setSize(Xt.z*U.transmissionResolutionScale,Xt.w*U.transmissionResolutionScale);const jt=U.getRenderTarget(),Bt=U.getActiveCubeFace(),$t=U.getActiveMipmapLevel();U.setRenderTarget(Nt),U.getClearColor(_t),et=U.getClearAlpha(),et<1&&U.setClearColor(16777215,.5),U.clear(),Dt&&ae.render(ht);const le=U.toneMapping;U.toneMapping=ur;const se=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),x.setupLightsView(pt),gt===!0&&It.setGlobalState(U.clippingPlanes,pt),na(R,ht,pt),rt.updateMultisampleRenderTarget(Nt),rt.updateRenderTargetMipmap(Nt),k.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let He=0,$e=$.length;He<$e;He++){const Ie=$[He],Ne=Ie.object,oe=Ie.geometry,Be=Ie.material,Se=Ie.group;if(Be.side===Ea&&Ne.layers.test(pt.layers)){const vn=Be.side;Be.side=Jn,Be.needsUpdate=!0,pr(Ne,ht,pt,oe,Be,Se),Be.side=vn,Be.needsUpdate=!0,Me=!0}}Me===!0&&(rt.updateMultisampleRenderTarget(Nt),rt.updateRenderTargetMipmap(Nt))}U.setRenderTarget(jt,Bt,$t),U.setClearColor(_t,et),se!==void 0&&(pt.viewport=se),U.toneMapping=le}function na(R,$,ht){const pt=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,Nt=R.length;tt<Nt;tt++){const Xt=R[tt],jt=Xt.object,Bt=Xt.geometry,$t=Xt.group;let le=Xt.material;le.allowOverride===!0&&pt!==null&&(le=pt),jt.layers.test(ht.layers)&&pr(jt,$,ht,Bt,le,$t)}}function pr(R,$,ht,pt,tt,Nt){R.onBeforeRender(U,$,ht,pt,tt,Nt),R.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(U,$,ht,pt,R,Nt),tt.transparent===!0&&tt.side===Ea&&tt.forceSinglePass===!1?(tt.side=Jn,tt.needsUpdate=!0,U.renderBufferDirect(ht,$,pt,tt,R,Nt),tt.side=fr,tt.needsUpdate=!0,U.renderBufferDirect(ht,$,pt,tt,R,Nt),tt.side=Ea):U.renderBufferDirect(ht,$,pt,tt,R,Nt),R.onAfterRender(U,$,ht,pt,tt,Nt)}function di(R,$,ht){$.isScene!==!0&&($=Ot);const pt=xt.get(R),tt=x.state.lights,Nt=x.state.shadowsArray,Xt=tt.state.version,jt=mt.getParameters(R,tt.state,Nt,$,ht),Bt=mt.getProgramCacheKey(jt);let $t=pt.programs;pt.environment=R.isMeshStandardMaterial?$.environment:null,pt.fog=$.fog,pt.envMap=(R.isMeshStandardMaterial?Yt:zt).get(R.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Tt),$t=new Map,pt.programs=$t);let le=$t.get(Bt);if(le!==void 0){if(pt.currentProgram===le&&pt.lightsStateVersion===Xt)return Aa(R,jt),le}else jt.uniforms=mt.getUniforms(R),R.onBeforeCompile(jt,U),le=mt.acquireProgram(jt,Bt),$t.set(Bt,le),pt.uniforms=jt.uniforms;const se=pt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(se.clippingPlanes=It.uniform),Aa(R,jt),pt.needsLights=El(R),pt.lightsStateVersion=Xt,pt.needsLights&&(se.ambientLightColor.value=tt.state.ambient,se.lightProbe.value=tt.state.probe,se.directionalLights.value=tt.state.directional,se.directionalLightShadows.value=tt.state.directionalShadow,se.spotLights.value=tt.state.spot,se.spotLightShadows.value=tt.state.spotShadow,se.rectAreaLights.value=tt.state.rectArea,se.ltc_1.value=tt.state.rectAreaLTC1,se.ltc_2.value=tt.state.rectAreaLTC2,se.pointLights.value=tt.state.point,se.pointLightShadows.value=tt.state.pointShadow,se.hemisphereLights.value=tt.state.hemi,se.directionalShadowMap.value=tt.state.directionalShadowMap,se.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,se.spotShadowMap.value=tt.state.spotShadowMap,se.spotLightMatrix.value=tt.state.spotLightMatrix,se.spotLightMap.value=tt.state.spotLightMap,se.pointShadowMap.value=tt.state.pointShadowMap,se.pointShadowMatrix.value=tt.state.pointShadowMatrix),pt.currentProgram=le,pt.uniformsList=null,le}function mr(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=xc.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Aa(R,$){const ht=xt.get(R);ht.outputColorSpace=$.outputColorSpace,ht.batching=$.batching,ht.batchingColor=$.batchingColor,ht.instancing=$.instancing,ht.instancingColor=$.instancingColor,ht.instancingMorph=$.instancingMorph,ht.skinning=$.skinning,ht.morphTargets=$.morphTargets,ht.morphNormals=$.morphNormals,ht.morphColors=$.morphColors,ht.morphTargetsCount=$.morphTargetsCount,ht.numClippingPlanes=$.numClippingPlanes,ht.numIntersection=$.numClipIntersection,ht.vertexAlphas=$.vertexAlphas,ht.vertexTangents=$.vertexTangents,ht.toneMapping=$.toneMapping}function Ml(R,$,ht,pt,tt){$.isScene!==!0&&($=Ot),rt.resetTextureUnits();const Nt=$.fog,Xt=pt.isMeshStandardMaterial?$.environment:null,jt=F===null?U.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:io,Bt=(pt.isMeshStandardMaterial?Yt:zt).get(pt.envMap||Xt),$t=pt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,le=!!ht.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),se=!!ht.morphAttributes.position,Me=!!ht.morphAttributes.normal,He=!!ht.morphAttributes.color;let $e=ur;pt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&($e=U.toneMapping);const Ie=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ne=Ie!==void 0?Ie.length:0,oe=xt.get(pt),Be=x.state.lights;if(gt===!0&&(it===!0||R!==w)){const rn=R===w&&pt.id===C;It.setState(pt,R,rn)}let Se=!1;pt.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Be.state.version||oe.outputColorSpace!==jt||tt.isBatchedMesh&&oe.batching===!1||!tt.isBatchedMesh&&oe.batching===!0||tt.isBatchedMesh&&oe.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&oe.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&oe.instancing===!1||!tt.isInstancedMesh&&oe.instancing===!0||tt.isSkinnedMesh&&oe.skinning===!1||!tt.isSkinnedMesh&&oe.skinning===!0||tt.isInstancedMesh&&oe.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&oe.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&oe.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&oe.instancingMorph===!1&&tt.morphTexture!==null||oe.envMap!==Bt||pt.fog===!0&&oe.fog!==Nt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==It.numPlanes||oe.numIntersection!==It.numIntersection)||oe.vertexAlphas!==$t||oe.vertexTangents!==le||oe.morphTargets!==se||oe.morphNormals!==Me||oe.morphColors!==He||oe.toneMapping!==$e||oe.morphTargetsCount!==Ne)&&(Se=!0):(Se=!0,oe.__version=pt.version);let vn=oe.currentProgram;Se===!0&&(vn=di(pt,$,tt));let $n=!1,Le=!1,Ra=!1;const Ke=vn.getUniforms(),Bn=oe.uniforms;if(ct.useProgram(vn.program)&&($n=!0,Le=!0,Ra=!0),pt.id!==C&&(C=pt.id,Le=!0),$n||w!==R){ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(I,"projectionMatrix",R.projectionMatrix),Ke.setValue(I,"viewMatrix",R.matrixWorldInverse);const On=Ke.map.cameraPosition;On!==void 0&&On.setValue(I,wt.setFromMatrixPosition(R.matrixWorld)),W.logarithmicDepthBuffer&&Ke.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Ke.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Le=!0,Ra=!0)}if(tt.isSkinnedMesh){Ke.setOptional(I,tt,"bindMatrix"),Ke.setOptional(I,tt,"bindMatrixInverse");const rn=tt.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ke.setValue(I,"boneTexture",rn.boneTexture,rt))}tt.isBatchedMesh&&(Ke.setOptional(I,tt,"batchingTexture"),Ke.setValue(I,"batchingTexture",tt._matricesTexture,rt),Ke.setOptional(I,tt,"batchingIdTexture"),Ke.setValue(I,"batchingIdTexture",tt._indirectTexture,rt),Ke.setOptional(I,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ke.setValue(I,"batchingColorTexture",tt._colorsTexture,rt));const un=ht.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Lt.update(tt,ht,vn),(Le||oe.receiveShadow!==tt.receiveShadow)&&(oe.receiveShadow=tt.receiveShadow,Ke.setValue(I,"receiveShadow",tt.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Bn.envMap.value=Bt,Bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&$.environment!==null&&(Bn.envMapIntensity.value=$.environmentIntensity),Le&&(Ke.setValue(I,"toneMappingExposure",U.toneMappingExposure),oe.needsLights&&wc(Bn,Ra),Nt&&pt.fog===!0&&Rt.refreshFogUniforms(Bn,Nt),Rt.refreshMaterialUniforms(Bn,pt,J,lt,x.state.transmissionRenderTarget[R.id]),xc.upload(I,mr(oe),Bn,rt)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(xc.upload(I,mr(oe),Bn,rt),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Ke.setValue(I,"center",tt.center),Ke.setValue(I,"modelViewMatrix",tt.modelViewMatrix),Ke.setValue(I,"normalMatrix",tt.normalMatrix),Ke.setValue(I,"modelMatrix",tt.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const rn=pt.uniformsGroups;for(let On=0,Qr=rn.length;On<Qr;On++){const zi=rn[On];pe.update(zi,vn),pe.bind(zi,vn)}}return vn}function wc(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function El(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,$,ht){const pt=xt.get(R);pt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),xt.get(R.texture).__webglTexture=$,xt.get(R.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:ht,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const ht=xt.get(R);ht.__webglFramebuffer=$,ht.__useDefaultFramebuffer=$===void 0};const co=I.createFramebuffer();this.setRenderTarget=function(R,$=0,ht=0){F=R,B=$,O=ht;let pt=!0,tt=null,Nt=!1,Xt=!1;if(R){const Bt=xt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(I.FRAMEBUFFER,null),pt=!1;else if(Bt.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Bt.__hasExternalTextures)rt.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(Bt.__boundDepthTexture!==se){if(se!==null&&xt.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Xt=!0);const le=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[$])?tt=le[$][ht]:tt=le[$],Nt=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?tt=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?tt=le[ht]:tt=le,H.copy(R.viewport),j.copy(R.scissor),dt=R.scissorTest}else H.copy(ft).multiplyScalar(J).floor(),j.copy(bt).multiplyScalar(J).floor(),dt=fe;if(ht!==0&&(tt=co),ct.bindFramebuffer(I.FRAMEBUFFER,tt)&&pt&&ct.drawBuffers(R,tt),ct.viewport(H),ct.scissor(j),ct.setScissorTest(dt),Nt){const Bt=xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,Bt.__webglTexture,ht)}else if(Xt){const Bt=$;for(let $t=0;$t<R.textures.length;$t++){const le=xt.get(R.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,le.__webglTexture,ht,Bt)}}else if(R!==null&&ht!==0){const Bt=xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,ht)}C=-1},this.readRenderTargetPixels=function(R,$,ht,pt,tt,Nt,Xt,jt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&(Bt=Bt[Xt]),Bt){ct.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const $t=R.textures[jt],le=$t.format,se=$t.type;if(!W.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-pt&&ht>=0&&ht<=R.height-tt&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels($,ht,pt,tt,ie.convert(le),ie.convert(se),Nt))}finally{const $t=F!==null?xt.get(F).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,$,ht,pt,tt,Nt,Xt,jt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xt!==void 0&&(Bt=Bt[Xt]),Bt)if($>=0&&$<=R.width-pt&&ht>=0&&ht<=R.height-tt){ct.bindFramebuffer(I.FRAMEBUFFER,Bt);const $t=R.textures[jt],le=$t.format,se=$t.type;if(!W.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,Nt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels($,ht,pt,tt,ie.convert(le),ie.convert(se),0);const He=F!==null?xt.get(F).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,He);const $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await GE(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Nt),I.deleteBuffer(Me),I.deleteSync($e),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ht=0){const pt=Math.pow(2,-ht),tt=Math.floor(R.image.width*pt),Nt=Math.floor(R.image.height*pt),Xt=$!==null?$.x:0,jt=$!==null?$.y:0;rt.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ht,0,0,Xt,jt,tt,Nt),ct.unbindTexture()};const gr=I.createFramebuffer(),Dc=I.createFramebuffer();this.copyTextureToTexture=function(R,$,ht=null,pt=null,tt=0,Nt=null){Nt===null&&(tt!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=tt,tt=0):Nt=0);let Xt,jt,Bt,$t,le,se,Me,He,$e;const Ie=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(ht!==null)Xt=ht.max.x-ht.min.x,jt=ht.max.y-ht.min.y,Bt=ht.isBox3?ht.max.z-ht.min.z:1,$t=ht.min.x,le=ht.min.y,se=ht.isBox3?ht.min.z:0;else{const un=Math.pow(2,-tt);Xt=Math.floor(Ie.width*un),jt=Math.floor(Ie.height*un),R.isDataArrayTexture?Bt=Ie.depth:R.isData3DTexture?Bt=Math.floor(Ie.depth*un):Bt=1,$t=0,le=0,se=0}pt!==null?(Me=pt.x,He=pt.y,$e=pt.z):(Me=0,He=0,$e=0);const Ne=ie.convert($.format),oe=ie.convert($.type);let Be;$.isData3DTexture?(rt.setTexture3D($,0),Be=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(rt.setTexture2DArray($,0),Be=I.TEXTURE_2D_ARRAY):(rt.setTexture2D($,0),Be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$n=I.getParameter(I.UNPACK_SKIP_PIXELS),Le=I.getParameter(I.UNPACK_SKIP_ROWS),Ra=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,se);const Ke=R.isDataArrayTexture||R.isData3DTexture,Bn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const un=xt.get(R),rn=xt.get($),On=xt.get(un.__renderTarget),Qr=xt.get(rn.__renderTarget);ct.bindFramebuffer(I.READ_FRAMEBUFFER,On.__webglFramebuffer),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let zi=0;zi<Bt;zi++)Ke&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(R).__webglTexture,tt,se+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get($).__webglTexture,Nt,$e+zi)),I.blitFramebuffer($t,le,Xt,jt,Me,He,Xt,jt,I.DEPTH_BUFFER_BIT,I.NEAREST);ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||xt.has(R)){const un=xt.get(R),rn=xt.get($);ct.bindFramebuffer(I.READ_FRAMEBUFFER,gr),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dc);for(let On=0;On<Bt;On++)Ke?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,tt,se+On):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,tt),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,Nt,$e+On):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,Nt),tt!==0?I.blitFramebuffer($t,le,Xt,jt,Me,He,Xt,jt,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(Be,Nt,Me,He,$e+On,$t,le,Xt,jt):I.copyTexSubImage2D(Be,Nt,Me,He,$t,le,Xt,jt);ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Be,Nt,Me,He,$e,Xt,jt,Bt,Ne,oe,Ie.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,Nt,Me,He,$e,Xt,jt,Bt,Ne,Ie.data):I.texSubImage3D(Be,Nt,Me,He,$e,Xt,jt,Bt,Ne,oe,Ie):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Nt,Me,He,Xt,jt,Ne,oe,Ie.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Nt,Me,He,Ie.width,Ie.height,Ne,Ie.data):I.texSubImage2D(I.TEXTURE_2D,Nt,Me,He,Xt,jt,Ne,oe,Ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ra),Nt===0&&$.generateMipmaps&&I.generateMipmap(Be),ct.unbindTexture()},this.initRenderTarget=function(R){xt.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){B=0,O=0,F=null,ct.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pe._getUnpackColorSpace()}}const Wt={wood:11697234,edge:7426366,cream:15655368,ink:3162955,teal:4948347,coral:13268578,brass:13017959};function d2(o,e,i){const s=new f2({antialias:!1});s.setPixelRatio(1),s.shadowMap.enabled=!0,s.shadowMap.type=Cx,s.shadowMap.autoUpdate=!1,s.setClearColor(12961467),s.toneMapping=Dx,s.toneMappingExposure=1.35,o.appendChild(s.domElement);const l=new d1,c=new Kp;c.position.set(12,15,19),c.lookAt(-.5,.3,-.8),l.add(new M1(15003368,9270894,2));const d=new jv(16770226,3.4);d.position.set(-5,13,-4),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),Object.assign(d.shadow.camera,{left:-12,right:12,top:12,bottom:-12}),d.shadow.normalBias=.035,d.shadow.bias=-2e-4,l.add(d);const h=new jv(12968423,1);h.position.set(6,8,10),l.add(h);const v=new Map,g=new Set;function S(k){return v.has(k)||v.set(k,new x1({color:k,roughness:.85})),v.get(k)}function m(k,W,ct,vt,xt,rt){const zt=new Qn(W,S(rt));return zt.position.set(ct,vt,xt),zt.castShadow=!0,zt.receiveShadow=!0,k.add(zt),zt}const p=(k,W,ct,vt,xt,rt,zt,Yt)=>m(k,new oo(xt,rt,zt),W,ct,vt,Yt),y=(k,W,ct,vt,xt,rt,zt,Yt=xt,N=12)=>m(k,new Yp(Yt,xt,rt,N),W,ct,vt,zt);function b(k,W,ct,vt,xt,rt,zt,Yt="#eee1c8",N="#304b4b"){const E=document.createElement("canvas");E.width=256,E.height=64;const Z=E.getContext("2d");Z.fillStyle=Yt,Z.fillRect(0,0,256,64),Z.fillStyle=N,Z.font="bold 30px monospace",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(W,128,33,240);const mt=new v1(E);mt.magFilter=fi,mt.minFilter=fi,mt.colorSpace=ci,g.add(mt);const Rt=new Qn(new Sl(rt,zt),new cl({map:mt}));return Rt.position.set(ct,vt,xt),k.add(Rt),Rt}function A(k,W,ct,vt,xt=1){y(k,W,ct+.23*xt,vt,.24*xt,.46*xt,12419176,.31*xt),y(k,W,ct+.47*xt,vt,.255*xt,.03,6705986);for(let rt=0;rt<7;rt++){const zt=rt*2.4,Yt=m(k,new Wp(.22*xt,5,3),W+Math.sin(zt)*.25*xt,ct+(.75+rt*.06)*xt,vt+Math.cos(zt)*.25*xt,rt%2?6654825:4353368);Yt.scale.set(.6,1.8,.7),Yt.rotation.z=Math.sin(zt)*.7}}function M(k,W,ct,vt,xt=Wt.cream){y(k,W,ct+.09,vt,.085,.18,xt),y(k,W,ct+.185,vt,.063,.012,6705986);const rt=new Qn(new jp(.06,.022,4,8),S(xt));rt.position.set(W+.095,ct+.1,vt),k.add(rt)}function x(k,W,ct,vt,xt=5){for(let rt=0;rt<xt;rt++){const zt=.22+rt%3*.055;p(k,W+rt*.12,ct+zt/2,vt,.09,zt,.24,[Wt.teal,Wt.coral,Wt.brass,7376032,Wt.cream][rt%5])}}const D=new ji;l.add(D),p(l,0,-.68,0,200,.1,200,12961467),p(D,-.65,-.28,-.85,12.1,.55,12.1,Wt.ink),p(D,-.65,-.04,-.85,12.2,.12,12.2,Wt.edge);for(let k=0;k<24;k++)for(let W=0;W<4;W++){const ct=-5.17+W*3;p(D,ct,.045,-6.6+k*.5,3,.07,.5,[11963237,12819059,12489836,13148540][(k*7+W)%4]).castShadow=!1}p(D,-.65,1.9,-6.95,12.2,3.8,.2,Wt.cream),p(D,-6.65,.72,-.85,.18,1.45,12.1,14145215),p(D,-6.65,1.48,-.85,.25,.12,12.1,Wt.edge),p(D,-.65,.32,-6.79,12.1,.58,.14,6587516),p(D,-.65,.65,-6.7,12.1,.075,.18,Wt.edge);for(const k of[-4.2,-1]){p(D,k,2.35,-6.78,2.75,2.2,.18,Wt.edge),p(D,k,2.35,-6.66,2.5,1.96,.06,11127231),p(D,k,1.93,-6.61,2.5,1.1,.025,9482149);for(let W=0;W<4;W++)p(D,k-1+W*.66,2.05+W%2*.15,-6.58,.4,.4+W%2*.3,.025,8297620);p(D,k,2.35,-6.54,.08,2,.12,Wt.cream),p(D,k,2.1,-6.53,2.5,.075,.12,Wt.cream),p(D,k,1.18,-6.45,2.95,.12,.55,Wt.wood),p(D,k,3.5,-6.48,3,.12,.22,Wt.edge);for(const W of[-1,1]){p(D,k+W*1.32,2.37,-6.39,.24,2.1,.18,15059361);for(let ct=0;ct<3;ct++)p(D,k+W*1.32-.07+ct*.07,2.37,-6.28,.025,2.08,.025,13085573)}}p(D,-2.35,.52,-5.95,5.3,.95,1.15,5800057),p(D,-2.35,1.04,-5.95,5.5,.14,1.25,Wt.cream);for(let k=0;k<5;k++)p(D,-4.47+k*1.05,.55,-5.36,1,.78,.035,7180678),p(D,-4.13+k*1.05,.78,-5.32,.08,.045,.05,Wt.brass);p(D,-3.7,1.42,-5.9,.62,.65,.5,Wt.ink),p(D,-3.7,1.52,-5.62,.45,.18,.035,7573386),p(D,-3.7,1.15,-5.5,.65,.05,.3,Wt.edge),M(D,-3.7,1.17,-5.55),M(D,-2.9,1.12,-5.65,Wt.coral),A(D,-.55,1.12,-5.9,.65),x(D,-2.25,1.12,-6,4),b(D,"PIXEL STARTUP CLUB",2.75,3.16,-6.8,3.55,.62,"#304b4b","#f3e2bb"),p(D,2.9,1.88,-6.65,2.9,1.5,.14,Wt.edge),p(D,2.9,1.88,-6.55,2.72,1.32,.06,12362108);for(let k=0;k<6;k++){const W=p(D,2+k%3*.75,1.55+Math.floor(k/3)*.6,-6.49,.48,.38,.025,[15125379,14857633,11716276][k%3]);W.rotation.z=(k%3-1)*.07,p(D,2+k%3*.75,1.7+Math.floor(k/3)*.6,-6.46,.03,.04,.025,Wt.coral)}p(D,4.55,1.1,-6.1,1.1,2.15,.1,Wt.edge);for(const k of[4.02,5.08])p(D,k,1.1,-5.7,.08,2.15,.9,Wt.edge);p(D,4.55,2.2,-5.7,1.15,.1,.95,Wt.wood);for(let k=0;k<3;k++)p(D,4.55,.36+k*.6,-5.65,1.05,.08,.9,Wt.wood),x(D,4.13,.4+k*.6,-5.55,6);A(D,4.55,2.2,-5.7,.7),p(D,-5.65,.15,-1,1.55,.04,5.4,8231823);for(let k=0;k<5;k++)p(D,-5.65,.18,-3.2+k*.9,1.3,.015,.025,13880240);p(D,-5.9,.43,-1.3,.95,.5,2.1,12681320),p(D,-6.25,.85,-1.3,.23,1.05,2.15,11955545);for(const k of[-2.33,-.27])p(D,-5.85,.69,k,1.05,.65,.18,11955545);for(const k of[-1.8,-.8])p(D,-5.85,.75,k,.75,.18,.89,13933180);p(D,-6.05,1.06,-1.75,.25,.46,.6,13944217),y(D,-5.5,.54,1,.5,.1,Wt.wood),y(D,-5.5,.3,1,.07,.5,Wt.ink),M(D,-5.5,.6,1),A(D,-5.7,0,3,1.2),y(D,-5.7,.1,-3.55,.29,.1,Wt.ink),y(D,-5.7,1.2,-3.55,.035,2.3,Wt.brass),y(D,-5.7,2.34,-3.55,.4,.4,15126175,.25);const P=new T1(16764037,2,4);P.position.set(-5.7,2,-3.55),l.add(P);const U=y(D,4.9,3.2,-6.7,.31,.09,Wt.ink);U.rotation.x=Math.PI/2;const G=y(D,4.9,3.2,-6.63,.27,.025,Wt.cream);G.rotation.x=Math.PI/2,p(D,4.9,3.28,-6.6,.025,.17,.02,Wt.ink),p(D,4.99,3.2,-6.6,.18,.025,.02,Wt.ink),p(D,-.65,3.88,-6.85,12.35,.18,.32,Wt.edge),p(D,.6,.13,4.7,3.4,.035,.65,Wt.teal),b(D,"GOOD IDEAS START HERE",.6,.15,4.7,2.9,.4,"#4b817b","#eee1c8").rotation.x=-Math.PI/2;const B=new C1(9,6,14403750,14403750);B.position.y=.105,B.visible=!1,l.add(B);const O=new ji,F=new ji;l.add(O,F);let C,w="",H=!1;const j=new Map,dt=[],_t=new URLSearchParams(location.search).has("diagnostics");let et=0;const q=matchMedia("(prefers-reduced-motion: reduce)").matches,lt=[];function J(k,W,ct,vt,xt){const rt=new ji;rt.position.set(W,0,ct),k.add(rt);const zt=[13934717,11040084,14792595][xt%3],Yt=[4799542,6835262,3485489][xt%3];for(const E of[-1,1])p(rt,E*.12,.27,.03,.16,.4,.2,4608346),p(rt,E*.12,.1,-.04,.18,.14,.32,3160898);p(rt,0,.69,0,.46,.51,.3,vt),p(rt,0,.96,0,.13,.13,.14,zt),p(rt,0,1.16,-.01,.35,.35,.33,zt),p(rt,0,1.34,.015,.38,.12,.37,Yt),p(rt,.155,1.21,.06,.1,.2,.24,Yt);for(const E of[-.09,.09])p(rt,E,1.17,-.184,.045,.045,.02,3814707);const N=[];for(const E of[-1,1]){const Z=new ji;Z.position.set(E*.26,.83,0),rt.add(Z),p(Z,0,-.04,-.1,.14,.18,.26,vt),p(Z,0,-.1,-.27,.12,.12,.19,zt),N.push(Z)}return lt.push({group:rt,arms:N,id:xt}),rt}function At(k,W,ct){p(k,0,.86,-.18,W,.15,ct,Wt.edge),p(k,0,.96,-.18,W+.04,.07,ct+.03,Wt.wood);for(const vt of[-W*.42,W*.42])p(k,vt,.46,-.18,.1,.8,ct*.8,Wt.ink),p(k,vt,.1,-.18,.24,.08,ct*.88,Wt.ink);p(k,-W*.32,.62,-.18,.37,.46,ct*.85,8688774);for(let vt=0;vt<2;vt++)p(k,-W*.32,.58+vt*.17,ct*.35,.13,.035,.03,Wt.brass)}function Ct(k,W,ct,vt,xt,rt,zt){p(k,W,ct-.23,vt,.07,.33,.07,Wt.ink),p(k,W,ct-.36,vt,.34,.04,.22,Wt.ink),p(k,W,ct,vt,xt,.49,.1,Wt.ink),p(k,W,ct,vt+.058,xt-.08,.38,.018,zt);for(let Yt=0;Yt<4;Yt++)p(k,W-xt*.3,ct+.12-Yt*.075,vt+.072,xt*(Yt%2?.39:.54),.022,.01,13821908);p(k,W+xt*.32,ct-.195,vt+.075,.025,.025,.01,13098649)}function ft(k){const W=new ji,ct=_e[k.kind];W.position.set(-4.5+k.x*1.5+ct.width*.75,0,-4.5+k.y*1.5+ct.height*.75),O.add(W),W.userData.machine=k;const vt=ct.width*1.5-.22,xt=ct.height*1.5-.22;p(W,0,.11,0,vt,.025,xt,[10397594,9215897,8953254][k.level-1]);for(const rt of[-1,1])p(W,rt*(vt/2-.04),.127,0,.025,.008,xt-.08,13553849);if(k.kind==="generator"){const rt=1.1+(k.level-1)*.23;p(W,0,rt/2+.15,0,.82,rt,.78,13742454),p(W,0,rt+.18,0,.9,.1,.86,Wt.cream),p(W,0,.7,.405,.59,.64,.04,5467495);const zt=y(W,0,.82,.45,.15,.03,Wt.cream);zt.rotation.x=Math.PI/2,p(W,.025,.84,.48,.025,.15,.01,Wt.coral);for(let Yt=0;Yt<3;Yt++)p(W,0,.5-Yt*.055,.44,.35,.022,.02,Wt.ink);for(let Yt=0;Yt<k.level;Yt++)p(W,-.26+Yt*.26,1.02,.45,.08,.07,.035,10271363);k.level>1&&(y(W,-.49,.7,0,.08,1.15,Wt.teal),y(W,.49,.7,0,.08,1.15,Wt.teal)),k.level===3&&(p(W,0,1.85,0,.62,.28,.58,Wt.teal),b(W,"POWER",0,1.87,.3,.55,.16,"#4b817b","#eee1c8"))}else if(k.kind==="compute"){const rt=1.25+(k.level-1)*.26;for(let zt=0;zt<(k.level===3?2:1);zt++){const Yt=k.level===3?(zt-.5)*1.12:0;p(W,Yt,rt/2+.16,0,.92,rt,.86,Wt.ink),p(W,Yt,rt+.19,0,1.03,.09,.96,Wt.edge);for(let E=0;E<k.level+2;E++){const Z=.4+E*.28;p(W,Yt,Z,.45,.76,.19,.035,5268840);for(let mt=0;mt<4;mt++)p(W,Yt-.2+mt*.12,Z,.48,.04,.035,.02,mt===3?Wt.coral:10209174);p(W,Yt+.3,Z,.48,.06,.12,.02,2373693)}const N=y(W,Yt,rt+.25,0,.22,.04,5860976);for(let E=0;E<4;E++){const Z=p(W,Yt,rt+.28,0,.33,.02,.055,Wt.ink);Z.rotation.y=E*Math.PI/4}N.castShadow=!1}}else if(k.kind==="dispatch"){At(W,vt,.95),p(W,0,1.15,-.2,.65,.28,.56,Wt.cream),p(W,0,1.24,.1,.47,.08,.04,Wt.ink),p(W,.03,1.1,.28,.35,.025,.32,15261640),p(W,0,1.43,-.3,.52,.23,.35,Wt.coral);for(let rt=0;rt<k.level;rt++)p(W,.25,.35+rt*.24,-.65,.46,.23,.42,12951673),p(W,.25,.48+rt*.24,-.65,.07,.012,.42,14993053);J(W,0,.62,Wt.coral,k.id),k.level>=2&&Ct(W,-.3,1.49,-.46,.42,k.id,9218205),k.level===3&&p(W,-.38,1.2,.2,.13,.39,.16,Wt.teal)}else{At(W,vt,1);const rt=k.level;for(let zt=0;zt<rt;zt++)Ct(W,(zt-(rt-1)/2)*.64,1.43,-.44,.59,k.id,k.kind==="lab"?7509148:7378305);p(W,0,1.02,.13,.67,.035,.22,14012346);for(let zt=0;zt<7;zt++)p(W,-.27+zt*.09,1.045,.12,.055,.01,.13,10267293);if(p(W,.49,1.03,.15,.12,.05,.17,Wt.cream),M(W,vt*.38,1,-.12,k.kind==="lab"?Wt.coral:Wt.cream),x(W,-vt*.42,1,-.24,3),k.kind==="lab"){p(W,vt*.35,.42,-.2,.43,.6,.68,Wt.ink);for(let zt=0;zt<3;zt++)p(W,vt*.35,.35+zt*.13,.15,.29,.035,.02,9681841)}y(W,0,.35,.65,.055,.5,Wt.ink),y(W,0,.15,.65,.35,.05,Wt.ink,.35,5),p(W,0,.56,.65,.52,.12,.49,Wt.teal),p(W,0,.85,.91,.52,.51,.12,Wt.teal),J(W,0,.63,k.kind==="lab"?7442090:12164705,k.id),k.level===3&&(A(W,vt*.38,1,-.4,.38),p(W,vt*.44,1.17,.17,.025,.35,.025,Wt.brass),p(W,vt*.44,1.36,.07,.26,.08,.18,Wt.teal))}for(let rt=0;rt<k.level;rt++)p(W,-.16+rt*.16,.15,xt*.43,.09,.04,.09,Wt.brass)}function bt(k){k.traverse(W=>{W instanceof Qn&&(W.geometry.dispose(),W.material instanceof cl&&(W.material.map&&(W.material.map.dispose(),g.delete(W.material.map)),W.material.dispose()))}),k.clear()}function fe(k,W,ct){for(const rt of k.machines){const zt=j.get(rt.id);if(zt!==void 0&&rt.produced>zt){const Yt=_e[rt.kind],N=-4.5+rt.x*1.5+Yt.width*.75,E=-4.5+rt.y*1.5+Yt.height*.75,Z=rt.kind==="intake"?"+1 DATA":rt.kind==="lab"?"+1 MODEL":"+1 DELIVERY",mt=b(l,Z,N,2.15,E,1.4,.35,"#315d58","#fff2cc");mt.quaternion.copy(c.quaternion),mt.renderOrder=2,mt.material.depthTest=!1,dt.push({mesh:mt,start:performance.now(),baseY:2.15})}j.set(rt.id,rt.produced)}for(const rt of j.keys())k.machines.some(zt=>zt.id===rt)||j.delete(rt);C=k,H=!!ct,B.visible=H;const vt=k.machines.map(rt=>[rt.id,rt.kind,rt.x,rt.y,rt.level].join(",")).join(";");vt!==w&&(w=vt,bt(O),lt.length=0,k.machines.forEach(ft),s.shadowMap.needsUpdate=!0),bt(F);const xt=cr(k);for(const rt of k.machines){const zt=_e[rt.kind],Yt=-4.5+rt.x*1.5+zt.width*.75,N=-4.5+rt.y*1.5+zt.height*.75;if(rt.id===W)for(const Z of[-1,1])p(F,Yt+Z*(zt.width*.75-.06),.15,N,.045,.035,zt.height*1.5-.1,14859119),p(F,Yt,.15,N+Z*(zt.height*.75-.06),zt.width*1.5-.1,.035,.045,14859119);const E=rt.paused?"PAUSED":rt.kind!=="generator"&&!xt.powered.has(rt.id)?"NO POWER":rt.kind==="lab"&&!rt.working&&k.data<2?"NEEDS DATA":rt.kind==="dispatch"&&!rt.working&&k.models<1?"NEEDS MODEL":void 0;E&&b(F,E,Yt,1.9,N,1.25,.26,"#e8d4b4","#6a4c3d").quaternion.copy(c.quaternion),rt.kind!=="generator"&&y(F,Yt+zt.width*.75-.17,.2,N+zt.height*.75-.17,.065,.06,rt.paused?13017959:xt.powered.has(rt.id)?8365450:13268578),rt.kind!=="generator"&&rt.kind!=="compute"&&(p(F,Yt,.19,N+zt.height*.75-.15,.7,.05,.06,Wt.ink),rt.progress>0&&p(F,Yt-(.66-.66*rt.progress)/2,.22,N+zt.height*.75-.15,.66*rt.progress,.02,.065,xt.powered.has(rt.id)?11454116:Wt.coral))}if(ct){const rt=ct.kind?_e[ct.kind]:{width:1,height:1};p(F,-4.5+ct.x*1.5+rt.width*.75,.15,-4.5+ct.y*1.5+rt.height*.75,rt.width*1.5-.12,.035,rt.height*1.5-.12,ct.valid?11125924:13469043)}}const z=new R1,gt=new Ue,it=new sr(new nt(0,1,0),0),ot=new nt;function wt(k){const W=s.domElement.getBoundingClientRect();if(gt.set((k.clientX-W.left)/W.width*2-1,-(k.clientY-W.top)/W.height*2+1),z.setFromCamera(gt,c),!H){const ct=z.intersectObjects(O.children,!0)[0];if(ct){let vt=ct.object;for(;vt&&!vt.userData.machine;)vt=vt.parent;if(vt){const xt=vt.userData.machine;e(xt.x,xt.y);return}}}if(z.ray.intersectPlane(it,ot)){const ct=Math.floor((ot.x+4.5)/1.5),vt=Math.floor((ot.z+4.5)/1.5);ct>=0&&ct<6&&vt>=0&&vt<6&&e(ct,vt)}}function Ht(k){if(!H||k.pointerType==="touch")return;const W=s.domElement.getBoundingClientRect();if(gt.set((k.clientX-W.left)/W.width*2-1,-(k.clientY-W.top)/W.height*2+1),z.setFromCamera(gt,c),z.ray.intersectPlane(it,ot)){const ct=Math.floor((ot.x+4.5)/1.5),vt=Math.floor((ot.z+4.5)/1.5);ct>=0&&ct<6&&vt>=0&&vt<6&&(i==null||i(ct,vt))}}s.domElement.addEventListener("pointerdown",wt),s.domElement.addEventListener("pointermove",Ht);function Ot(){const k=o.clientWidth,W=o.clientHeight,ct=k<700?1:Math.max(1.5,W/720);s.setSize(Math.max(1,Math.round(k/ct)),Math.max(1,Math.round(W/ct)),!1);const vt=k/W,xt=vt<1?Math.max(20,19/vt):16.8;c.left=-xt*vt/2,c.right=xt*vt/2,c.top=xt/2,c.bottom=-xt/2,c.updateProjectionMatrix(),s.shadowMap.needsUpdate=!0}const Dt=new ResizeObserver(Ot);Dt.observe(o),Ot();let Kt=0,I=0;function ze(k){if(Kt=requestAnimationFrame(ze),k-I<33)return;I=k;for(let ct=dt.length-1;ct>=0;ct--){const vt=dt[ct],xt=(k-vt.start)/1400;if(xt>1){l.remove(vt.mesh),vt.mesh.geometry.dispose();const rt=vt.mesh.material;rt.map&&(rt.map.dispose(),g.delete(rt.map)),rt.dispose(),dt.splice(ct,1)}else vt.mesh.position.y=vt.baseY+(q?0:xt*.6)}const W=Math.floor(k/90)*90;lt.forEach(({group:ct,arms:vt,id:xt})=>{const rt=C==null?void 0:C.machines.find(Yt=>Yt.id===xt),zt=!q&&!(C!=null&&C.paused)&&(rt==null?void 0:rt.working)&&cr(C).powered.has(xt);ct.rotation.y=zt?Math.sin(W*.0015+xt)*.035:0,vt.forEach((Yt,N)=>{Yt.rotation.x=zt?Math.sin(W*.011+xt+N*2)*.13:0})}),s.render(l,c),_t&&k-et>1e3&&(et=k,o.dataset.renderStats=JSON.stringify({calls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries,textures:s.info.memory.textures}))}return Kt=requestAnimationFrame(ze),{update:fe,dispose(){cancelAnimationFrame(Kt),Dt.disconnect(),s.domElement.removeEventListener("pointerdown",wt),s.domElement.removeEventListener("pointermove",Ht),l.traverse(k=>{k instanceof Qn&&(k.geometry.dispose(),k.material instanceof cl&&(k.material.map&&(k.material.map.dispose(),g.delete(k.material.map)),k.material.dispose()))}),g.forEach(k=>k.dispose()),v.forEach(k=>k.dispose()),s.dispose(),s.domElement.remove()}}}const Np=["generator","intake","lab","dispatch"],h2={generator:{x:0,y:0},intake:{x:1,y:0},lab:{x:1,y:1},dispatch:{x:3,y:1},compute:{x:3,y:3}};function p2(o,e){const i=h2[e];if(!jr(o,e,i.x,i.y))return i;for(let s=0;s<6;s++)for(let l=0;l<6;l++)if(!jr(o,e,l,s))return{x:l,y:s};return{x:0,y:0}}function m2(o){const e=Np.find(l=>!o.machines.some(c=>c.kind===l));if(e)return{kind:e,title:`Build ${_e[e].name.toLowerCase()}`,detail:{generator:"The office needs electricity. This supplies 8 power.",intake:"Your researcher collects clean data for the model studio.",lab:"Turn 2 data into a model. Beside research is 15% faster.",dispatch:"Package models into deliveries. Beside a studio is 15% faster."}[e]};const i=cr(o);if(i.demand>i.supply)return{title:"Give the team more power",detail:"Upgrade a power cabinet, add another, or pause a station."};if(o.machines.some(l=>l.paused))return{title:"A station is taking a break",detail:"Select a paused station and press Start to resume its work."};if(o.paused)return{title:"Ready when you are",detail:"Resume the office to let your team get to work."};const s=o.offers.find(l=>l.id===o.activeContract);return o.packages>=s.packages?{title:"Your first payday is ready",detail:`Deliver ${s.packages} packages to earn $${s.reward}.`}:{title:"Your team is on it",detail:"Data → models → deliveries. Try 2× speed while they work."}}function Mx(o,e){if(e.level===3)return"Maximum level";const i=e.kind==="generator"?0:_e[e.kind].power+e.level,s=cr(o),l=e.kind!=="generator"&&s.demand+1>s.supply?" · needs more power":"";if(e.kind==="generator")return`${8+(e.level-1)*5} → ${8+e.level*5} power capacity`;if(e.kind==="compute")return`+${e.level*25}% → +${(e.level+1)*25}% lab speed · ${i} power${l}`;const c={...e,level:e.level+1};return`${Sc(o,e).toFixed(1)}s → ${Sc(o,c).toFixed(1)}s per output · ${i} power${l}`}const hc={generator:"Supplies 8 power",intake:"1 data / 6s",lab:"2 data → 1 model",dispatch:"1 model → 1 delivery",compute:"+25% lab speed"},pc="pixel-startup-club:3d:v1",Ex=Object.keys(_e),g2={generator:"ϟ",intake:"▤",lab:"▣",dispatch:"▧",compute:"▥"},Tx={generator:["Nothing","8 / 13 / 18 power"],intake:["Power","Clean data"],lab:["2 data + power","1 trained model"],dispatch:["1 model + power","1 delivery"],compute:["Power","Faster model training"]};function _2(){const[o,e]=pn.useState(()=>{try{return gv(localStorage.getItem(pc)||"")}catch{return bx()}}),[i,s]=pn.useState(),[l,c]=pn.useState(),[d,h]=pn.useState(),[v,g]=pn.useState({x:0,y:0}),[S,m]=pn.useState(o.machines.length?"Welcome back. Select a station to inspect, move or upgrade it.":"Welcome aboard. Start with a power cabinet, then a research desk."),[p,y]=pn.useState(!1),[b,A]=pn.useState(!1),M=pn.useRef(null),x=pn.useRef(null),D=pn.useRef(o);D.current=o;const P=pn.useRef(()=>{}),U=pn.useRef(()=>{}),[G,B]=pn.useState(""),O=pn.useRef(null),F=ft=>{const bt=$M(D.current,ft);return D.current=bt.state,e(bt.state),(bt.error||bt.message)&&m(bt.error||bt.message),ft.type==="deliver"&&!bt.error&&(B(bt.message),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>B(""),4500)),!bt.error},C=ft=>{c(ft),g(p2(D.current,ft)),h(void 0),s(void 0),y(!1),m(`${_e[ft].name}: ${hc[ft]}. Choose an empty floor tile.`)},w=(ft,bt)=>{if(g({x:ft,y:bt}),l)F({type:"place",kind:l,x:ft,y:bt})&&(c(void 0),s(D.current.completed===0?void 0:D.current.nextId-1));else if(d)F({type:"move",id:d,x:ft,y:bt})&&(h(void 0),m("A fresh perspective. Desk moved."));else{const fe=D.current.machines.find(z=>ft>=z.x&&ft<z.x+_e[z.kind].width&&bt>=z.y&&bt<z.y+_e[z.kind].height);s(fe==null?void 0:fe.id)}};P.current=w,pn.useEffect(()=>{if(M.current){try{x.current=d2(M.current,(ft,bt)=>P.current(ft,bt),(ft,bt)=>U.current(ft,bt))}catch{m("WebGL could not start. Try a browser with hardware acceleration enabled.")}return()=>{var ft;return(ft=x.current)==null?void 0:ft.dispose()}}},[]);const H=o.machines.find(ft=>ft.id===d),j=l||(H==null?void 0:H.kind);U.current=(ft,bt)=>{j&&g(fe=>fe.x===ft&&fe.y===bt?fe:{x:ft,y:bt})};const dt=j?jr(o,j,v.x,v.y,d):void 0;pn.useEffect(()=>{var ft;(ft=x.current)==null||ft.update(o,i,j?{...v,kind:j,valid:!jr(o,j,v.x,v.y,d)}:void 0)},[o,i,v,j,d]),pn.useEffect(()=>{const ft=setInterval(()=>e(bt=>JM(bt,.25*bt.speed)),250);return()=>clearInterval(ft)},[]),pn.useEffect(()=>{const ft=setInterval(()=>{try{localStorage.setItem(pc,mv(D.current))}catch{}},3e3);return()=>clearInterval(ft)},[]),pn.useEffect(()=>{const ft=bt=>{var fe,z;bt.target.matches("input,select")||bt.target.matches("button")&&(bt.key===" "||bt.key==="Enter"&&!j)||((bt.key==="Escape"||bt.key.startsWith("Arrow")||"12345".includes(bt.key)&&bt.key.length===1)&&((z=(fe=bt.target).blur)==null||z.call(fe)),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," "].includes(bt.key)&&bt.preventDefault(),bt.key==="Escape"&&(c(void 0),h(void 0),s(void 0),y(!1),A(!1)),"12345".includes(bt.key)&&bt.key.length===1&&C(Ex[Number(bt.key)-1]),bt.key===" "&&F({type:"pause"}),bt.key==="Enter"&&P.current(v.x,v.y),bt.key.startsWith("Arrow")&&g(gt=>({x:Math.max(0,Math.min(5,gt.x+(bt.key==="ArrowRight"?1:bt.key==="ArrowLeft"?-1:0))),y:Math.max(0,Math.min(5,gt.y+(bt.key==="ArrowDown"?1:bt.key==="ArrowUp"?-1:0)))})))};return window.addEventListener("keydown",ft),()=>window.removeEventListener("keydown",ft)});const _t=cr(o),et=o.machines.find(ft=>ft.id===i),q=o.offers.find(ft=>ft.id===o.activeContract),lt=m2(o),J=Np.filter(ft=>o.machines.some(bt=>bt.kind===ft)).length,At=()=>{try{localStorage.setItem(pc,mv(o)),m("Office saved on this browser.")}catch{m("Browser storage is unavailable. Please allow local storage.")}},Ct=()=>{try{e(gv(localStorage.getItem(pc)||"")),s(void 0),c(void 0),h(void 0),m("Your saved office is back.")}catch{m("No valid saved office found.")}};return Et.jsxs("main",{children:[Et.jsxs("header",{children:[Et.jsxs("div",{className:"brand",children:[Et.jsxs("span",{className:"logo",children:["p",Et.jsx("span",{children:"sc"})]}),Et.jsxs("div",{children:[Et.jsx("h1",{children:"Pixel Startup Club"}),Et.jsx("p",{children:"THE CREATIVE STUDIO · 3D"})]})]}),Et.jsxs("div",{className:"stats",children:[Et.jsxs("strong",{"aria-label":"Cash",children:["$ ",o.credits.toLocaleString()]}),Et.jsxs("span",{"aria-label":`Power: ${_t.demand} required, ${_t.supply} available`,title:"Power required / available. Upgrade a cabinet if the number turns red.",className:_t.demand>_t.supply?"warning":"",children:["ϟ ",_t.demand,"/",_t.supply]}),Et.jsxs("span",{children:["★ ",o.reputation]})]}),Et.jsxs("div",{className:"time",children:[Et.jsx("button",{"aria-label":o.paused?"Resume":"Pause",onClick:()=>F({type:"pause"}),children:o.paused?"▶":"Ⅱ"}),Et.jsxs("button",{onClick:()=>F({type:"speed",speed:o.speed===1?2:o.speed===2?4:1}),children:[o.speed,"×"]}),Et.jsx("button",{"aria-label":"Help",onClick:()=>A(!b),children:"?"})]})]}),Et.jsxs("section",{className:"stage",children:[Et.jsx("div",{ref:M,className:"world","aria-label":"Interactive 3D office. Choose a station below, then click an empty floor tile."}),Et.jsxs("div",{className:"caption",children:[Et.jsx("span",{className:"eyebrow",children:"SMALL TEAM. BIG IDEAS."}),Et.jsxs("h2",{children:["Good coffee.",Et.jsx("br",{}),"Better ideas."]}),Et.jsx("p",{children:o.machines.length===0?"Your first company starts with an empty room.":o.paused?"Coffee break. The office is paused.":`${o.machines.length} stations · ${o.completed} happy clients`})]}),o.completed===0&&!j&&!et&&Et.jsxs("aside",{className:"starter",children:[Et.jsxs("div",{className:"eyebrow",children:["FIRST PAYDAY · ",J,"/4 STATIONS"]}),Et.jsx("h3",{children:lt.title}),Et.jsx("p",{children:lt.detail}),Et.jsx("div",{className:"starter-steps",children:Np.map((ft,bt)=>Et.jsxs("span",{className:o.machines.some(fe=>fe.kind===ft)?"done":"",children:[bt+1," ",_e[ft].short]},ft))}),lt.kind?Et.jsxs("button",{className:"primary",onClick:()=>C(lt.kind),children:["Choose ",_e[lt.kind].name," · $",_e[lt.kind].cost]}):_t.demand>_t.supply?Et.jsx("button",{className:"primary",onClick:()=>{var ft;return s((ft=o.machines.find(bt=>bt.kind==="generator"))==null?void 0:ft.id)},children:"Inspect power cabinet"}):o.machines.some(ft=>ft.paused)?Et.jsx("button",{className:"primary",onClick:()=>{var ft;return s((ft=o.machines.find(bt=>bt.paused))==null?void 0:ft.id)},children:"Inspect paused station"}):o.paused?Et.jsx("button",{className:"primary",onClick:()=>F({type:"pause"}),children:"Resume office"}):o.packages>=q.packages?Et.jsxs("button",{className:"primary",onClick:()=>F({type:"deliver"}),children:["Collect $",q.reward," →"]}):null]}),G&&Et.jsxs("div",{className:"celebration",role:"status",children:[Et.jsx("span",{children:"★ CLIENT DELIGHTED"}),Et.jsx("strong",{children:G})]}),Et.jsxs("div",{className:"inventory",children:[Et.jsxs("span",{children:["▤ ",Et.jsx("b",{children:o.data})," data"]}),Et.jsx("i",{children:"→"}),Et.jsxs("span",{children:["▣ ",Et.jsx("b",{children:o.models})," models"]}),Et.jsx("i",{children:"→"}),Et.jsxs("span",{children:["▧ ",Et.jsx("b",{children:o.packages})," deliveries"]})]}),Et.jsxs("aside",{className:"contract",children:[Et.jsxs("div",{className:"eyebrow",children:["ON THE NOTICEBOARD ",Et.jsx("button",{"aria-label":"Choose contract",onClick:()=>y(!p),children:"↗"})]}),Et.jsx("h3",{children:q.name}),Et.jsxs("p",{children:[q.client," · $",q.reward," · ★ ",q.reputation]}),Et.jsx("p",{className:"brief",children:q.brief}),Et.jsx("div",{className:"progress",children:Et.jsx("i",{style:{width:`${Math.min(100,o.packages/q.packages*100)}%`}})}),Et.jsxs("div",{className:"contract-bottom",children:[Et.jsxs("span",{children:[Math.min(o.packages,q.packages)," / ",q.packages," deliveries"]}),Et.jsx("button",{disabled:o.packages<q.packages,onClick:()=>F({type:"deliver"}),children:"Deliver →"})]})]}),j&&Et.jsxs("div",{className:"placing",children:[Et.jsxs("strong",{children:[d?"Move":"Place"," ",_e[j].name]}),Et.jsx("span",{children:dt||(l&&o.credits<_e[l].cost?`Need $${_e[l].cost-o.credits} more. Sell a station or deliver a contract.`:`${_e[j].width} × ${_e[j].height} tiles · ${hc[j]}`)}),Et.jsxs("span",{className:dt?"warning":"",children:["Click a clear tile · arrows + Enter · ",v.x+1,",",v.y+1]}),Et.jsx("button",{onClick:()=>{c(void 0),h(void 0)},children:"Cancel"})]}),et&&!j&&Et.jsxs("aside",{className:"details",children:[Et.jsx("button",{className:"close","aria-label":"Close details",onClick:()=>s(void 0),children:"×"}),Et.jsxs("div",{className:"eyebrow",children:[["THE STARTER","THE PROFESSIONAL","THE DREAM SETUP"][et.level-1]," · LEVEL ",et.level,"/3"]}),Et.jsx("h3",{children:_e[et.kind].name}),Et.jsxs("p",{className:"status",children:["● ",QM(o,et)]}),Et.jsxs("dl",{children:[Et.jsxs("div",{children:[Et.jsx("dt",{children:"Input"}),Et.jsx("dd",{children:Tx[et.kind][0]})]}),Et.jsxs("div",{children:[Et.jsx("dt",{children:"Output"}),Et.jsx("dd",{children:et.kind==="generator"?`${8+(et.level-1)*5} power`:et.kind==="compute"?`+${et.level*25}% lab speed`:Tx[et.kind][1]})]}),Et.jsxs("div",{children:[Et.jsx("dt",{children:"Power / cycle"}),Et.jsx("dd",{children:et.kind==="generator"?"Supplies the office":`${_e[et.kind].power+et.level-1} power${_e[et.kind].seconds?` · ${Sc(o,et).toFixed(1)}s`:""}`})]})]}),et.level<3?Et.jsxs(Et.Fragment,{children:[Et.jsxs("p",{className:"benefit",children:["Next: ",Mx(o,et),"."]}),Et.jsxs("button",{className:"primary",onClick:()=>{F({type:"upgrade",id:et.id})&&m(`${_e[et.kind].name} upgraded to level ${et.level+1}. ${Mx(o,et)}.`)},children:["Upgrade · $",Ax(et)]})]}):Et.jsx("p",{className:"benefit",children:"Top shelf. Maximum level reached."}),Et.jsxs("div",{className:"actions",children:[Et.jsx("button",{onClick:()=>{h(et.id),g({x:et.x,y:et.y})},children:"Move"}),Et.jsx("button",{onClick:()=>F({type:"toggle",id:et.id}),children:et.paused?"Start":"Pause"}),Et.jsxs("button",{onClick:()=>{F({type:"sell",id:et.id}),s(void 0),m(`Sold for $${et.invested}. Full refund, no regrets.`)},children:["Sell $",et.invested]})]})]}),p&&Et.jsxs("aside",{className:"board",children:[Et.jsx("button",{className:"close","aria-label":"Close contracts",onClick:()=>y(!1),children:"×"}),Et.jsx("h3",{children:"Odd jobs. Good money."}),o.offers.map(ft=>Et.jsxs("button",{className:ft.id===o.activeContract?"chosen":"",onClick:()=>{F({type:"contract",id:ft.id}),y(!1)},children:[Et.jsx("strong",{children:ft.name}),Et.jsxs("span",{children:[ft.client," · ",ft.packages," deliveries · $",ft.reward]}),Et.jsx("span",{children:ft.brief})]},ft.id))]}),b&&Et.jsxs("aside",{className:"help",children:[Et.jsx("button",{className:"close","aria-label":"Close help",onClick:()=>A(!1),children:"×"}),Et.jsx("h3",{children:"Your very small startup guide"}),Et.jsxs("p",{children:["Build ",Et.jsx("b",{children:"Power → Research → Model → Shipping"})," to make deliveries. Compute speeds up all model studios. Put research beside a studio for a 15% speed bonus."]}),Et.jsx("p",{children:"Click a station to upgrade, move, pause or sell it. Three levels change its appearance and performance. Power goes to stations in build order."}),Et.jsxs("p",{children:[Et.jsx("b",{children:"Keys 1–5:"})," choose station. ",Et.jsx("b",{children:"Arrows + Enter:"})," place. ",Et.jsx("b",{children:"Space:"})," pause. ",Et.jsx("b",{children:"Esc:"})," cancel. Your office autosaves every 3 seconds."]}),Et.jsx("p",{children:"All work is simulated. Live AI is off, and this prototype makes no AI requests."})]})]}),Et.jsxs("footer",{children:[Et.jsx("div",{className:"notice",role:"status",children:S}),Et.jsx("nav",{"aria-label":"Build stations",children:Ex.map((ft,bt)=>Et.jsxs("button",{className:`station ${l===ft?"active":""} ${lt.kind===ft&&o.completed===0?"recommended":""}`,title:`${hc[ft]} · ${_e[ft].width}×${_e[ft].height} tiles · ${_e[ft].power} power`,onClick:()=>{l===ft?c(void 0):C(ft)},children:[Et.jsx("span",{className:`station-icon ${ft}`,children:g2[ft]}),Et.jsxs("span",{children:[Et.jsxs("small",{children:[bt+1," · ",_e[ft].short]}),Et.jsx("strong",{children:_e[ft].name}),Et.jsxs("em",{children:["$",_e[ft].cost," ",Et.jsxs("span",{className:"purpose",children:["· ",hc[ft]]})]})]})]},ft))}),Et.jsxs("div",{className:"bottom",children:[Et.jsxs("span",{children:["LOCAL SIMULATION ",Et.jsx("i",{})," AI OFF"]}),Et.jsxs("div",{children:[Et.jsx("button",{onClick:At,children:"Save"}),Et.jsx("button",{onClick:Ct,children:"Load"}),Et.jsx("span",{className:"keyboard",children:"1–5 build · space pause · esc cancel"})]})]})]})]})}ZM.createRoot(document.getElementById("root")).render(Et.jsx(_2,{}));
