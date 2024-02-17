import{r as x,a as m,_ as f,M as y,u as _,T as R,C as j,R as h,b as v,c as E,d as k}from"./vendor-0YYSY0aN.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=x,S=Symbol.for("react.element"),C=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,T=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(o,e,c){var t,n={},a=null,l=null;c!==void 0&&(a=""+c),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)P.call(e,t)&&!b.hasOwnProperty(t)&&(n[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:S,type:o,key:a,ref:l,props:n,_owner:T.current}}s.Fragment=C;s.jsx=p;s.jsxs=p;d.exports=s;var r=d.exports,i={},u=m;i.createRoot=u.createRoot,i.hydrateRoot=u.hydrateRoot;const g=()=>r.jsx("h1",{children:"Main Page"});function w(){f.ready(),f.setBackgroundColor("#ffffff");const o=()=>{const e=_();return r.jsx(R,{children:r.jsx(j,{classNames:"fade",timeout:300,children:r.jsx(h,{location:e,children:r.jsx(v,{path:"/",element:r.jsx(g,{})})})},e.key)})};return r.jsx(y,{children:r.jsx(o,{})})}E.clarity.init("kzhxxy2ip7");i.createRoot(document.getElementById("root")).render(r.jsx(k.StrictMode,{children:r.jsx(w,{})}));
