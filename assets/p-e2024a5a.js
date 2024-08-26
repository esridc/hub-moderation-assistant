/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{d as e,a as t}from"./p-09a4f06c.js";import{s as o}from"./p-3c9a38fe.js";import{i as s}from"./p-fbdfad6a.js";function n(){const{classList:o}=document.body;const s=window.matchMedia("(prefers-color-scheme: dark)").matches;const n=()=>o.contains(e)||o.contains(t)&&s?"dark":"light";const c=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const r=e=>{a!==e&&c(e);a=e};let a=n();c(a);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>r(e.matches?"dark":"light")));new MutationObserver((()=>r(n()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function c(){if(s()){if(document.readyState==="interactive"){n()}else{document.addEventListener("DOMContentLoaded",(()=>n()),{once:true})}}o()}const r=c;export{r as g};
//# sourceMappingURL=p-e2024a5a.js.map