import{r as v,a as R,N as _,T as k,S as t,L as i,B as l,A as O,_ as m,M as P,u as S,b as E,C as F,R as b,c as n,d as A,e as C}from"./vendor-_qBvZdwB.js";import{R as w,I as B,G as u,H as I,A as L}from"./icons-Blbpgiz0.js";var g={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=v,T=Symbol.for("react.element"),G=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,M=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function y(a,r,d){var s,c={},j=null,p=null;d!==void 0&&(j=""+d),r.key!==void 0&&(j=""+r.key),r.ref!==void 0&&(p=r.ref);for(s in r)H.call(r,s)&&!z.hasOwnProperty(s)&&(c[s]=r[s]);if(a&&a.defaultProps)for(s in r=a.defaultProps,r)c[s]===void 0&&(c[s]=r[s]);return{$$typeof:T,type:a,key:j,ref:p,props:c,_owner:M.current}}x.Fragment=G;x.jsx=y;x.jsxs=y;g.exports=x;var e=g.exports,h={},f=R;h.createRoot=f.createRoot,h.hydrateRoot=f.hydrateRoot;const D=()=>k.show({content:"نرو نرو",duration:1e3}),$=e.jsx("div",{style:{fontSize:24},children:e.jsxs(t,{style:{"--gap":"16px"},children:[e.jsx(i,{to:"/help",children:e.jsx(l,{children:e.jsxs(t,{children:[e.jsx(B,{color:"var(--adm-color-primary)"}),e.jsx("span",{children:"راهنما"})]})})}),e.jsx(i,{to:"/game",children:e.jsx(l,{children:e.jsxs(t,{children:[e.jsx(u,{}),e.jsx("span",{children:"بازی"})]})})}),e.jsx(i,{to:"/invite",children:e.jsx(l,{children:e.jsxs(t,{children:[e.jsx(u,{}),e.jsx("span",{children:"دعوت"})]})})}),e.jsx(i,{to:"/ranking",children:e.jsx(l,{children:e.jsxs(t,{children:[e.jsx(I,{}),e.jsx("span",{children:"رده بندی"})]})})}),e.jsx(i,{to:"/elements",children:e.jsx(l,{children:e.jsxs(t,{children:[e.jsx(L,{}),e.jsx("span",{children:"عناصر"})]})})})]})}),U=e.jsx("div",{style:{fontSize:24},children:e.jsx(t,{style:{"--gap":"16px"},children:e.jsx(i,{to:"/profile",children:e.jsx(O,{src:""})})})}),o=()=>e.jsx(_,{left:U,backArrow:e.jsx(w,{color:"var(--adm-color-primary)"}),right:$,back:"برگشت",onBack:D,children:"سلام"}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه شروع"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه پروفایل"})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه بازی"})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه راهنما"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه دعوت دوستان"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه رده بندی"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx("h1",{children:"صفحه عناصر"})]});function X(){m.ready(),m.setBackgroundColor("#ffffff");const a=()=>{const r=S();return e.jsx(E,{children:e.jsx(F,{classNames:"fade",timeout:300,children:e.jsxs(b,{location:r,children:[e.jsx(n,{path:"/",element:e.jsx(q,{})}),e.jsx(n,{path:"/profile",element:e.jsx(J,{})}),e.jsx(n,{path:"/game",element:e.jsx(W,{})}),e.jsx(n,{path:"/help",element:e.jsx(Y,{})}),e.jsx(n,{path:"/invite",element:e.jsx(K,{})}),e.jsx(n,{path:"/ranking",element:e.jsx(Q,{})}),e.jsx(n,{path:"/elements",element:e.jsx(V,{})})]})},r.key)})};return e.jsx(P,{children:e.jsx(a,{})})}A.clarity.init("kzhxxy2ip7");h.createRoot(document.getElementById("root")).render(e.jsx(C.StrictMode,{children:e.jsx(X,{})}));
