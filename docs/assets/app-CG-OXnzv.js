import{r as x,a as m,N as y,T as _,_ as u,M as R,u as j,b as h,C as v,R as k,c as E,d as O,e as S}from"./vendor-DIUmTYHC.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=x,T=Symbol.for("react.element"),b=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,N=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,i){var t,n={},a=null,l=null;i!==void 0&&(a=""+i),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)w.call(e,t)&&!B.hasOwnProperty(t)&&(n[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:T,type:o,key:a,ref:l,props:n,_owner:N.current}}s.Fragment=b;s.jsx=p;s.jsxs=p;d.exports=s;var r=d.exports,c={},f=m;c.createRoot=f.createRoot,c.hydrateRoot=f.hydrateRoot;const L=()=>_.show({content:"نرو نرو",duration:1e3}),P=()=>r.jsx(y,{onBack:L,children:"سلام"});function g(){u.ready(),u.setBackgroundColor("#ffffff");const o=()=>{const e=j();return r.jsx(h,{children:r.jsx(v,{classNames:"fade",timeout:300,children:r.jsx(k,{location:e,children:r.jsx(E,{path:"/",element:r.jsx(P,{})})})},e.key)})};return r.jsx(R,{children:r.jsx(o,{})})}O.clarity.init("kzhxxy2ip7");c.createRoot(document.getElementById("root")).render(r.jsx(S.StrictMode,{children:r.jsx(g,{})}));
