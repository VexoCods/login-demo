import{c,y as u,j as s,m as l}from"./index-Dszc96oZ.js";import{r as n}from"./vendor-DhCgcy2D.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);function f({trigger:i,items:o,align:d="end",ariaLabel:p}){const[a,t]=n.useState(!1),r=n.useRef(null);return u(r,()=>t(!1),a),s.jsxs("div",{ref:r,className:"relative inline-block",children:[s.jsx("button",{type:"button","aria-haspopup":"menu","aria-expanded":a,"aria-label":p,onClick:()=>t(e=>!e),children:i}),a&&s.jsx("div",{role:"menu",className:l("card-surface absolute z-50 mt-1.5 min-w-44 p-1.5 animate-fade-up",d==="end"?"end-0":"start-0"),children:o.map(e=>s.jsxs("button",{role:"menuitem",type:"button",disabled:e.disabled,onClick:()=>{t(!1),e.onSelect()},className:l("flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-sm transition disabled:opacity-50",e.danger?"text-rose-500 hover:bg-rose-500/10":"hover:bg-primary/10"),children:[e.icon,e.label]},e.label))})]})}export{h as C,f as D,b as E};
