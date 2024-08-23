import{d as t,a as e}from"./p-245d8a5c.js";import{s as o}from"./p-609cb9ab.js";import{i as s}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function c(){const{classList:o}=document.body;const s=window.matchMedia("(prefers-color-scheme: dark)").matches;const c=()=>o.contains(t)||o.contains(e)&&s?"dark":"light";const n=t=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:t}}));const r=t=>{a!==t&&n(t);a=t};let a=c();n(a);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>r(t.matches?"dark":"light")));new MutationObserver((()=>r(c()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function n(){if(s()){if(document.readyState==="interactive"){c()}else{document.addEventListener("DOMContentLoaded",(()=>c()),{once:true})}}o()}const r=n;export{r as g};
//# sourceMappingURL=p-a86826a1.js.map