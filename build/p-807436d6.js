import{l as n,q as t,c}from"./p-416f7088.js";import{c as e}from"./p-6423f684.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const o="calciteInternalLabelClick";const s="calciteInternalLabelConnected";const r="calciteInternalLabelDisconnected";const i="calcite-label";const u=new WeakMap;const a=new WeakMap;const f=new WeakMap;const l=new WeakMap;const m=new Set;const d=n=>{const{id:e}=n;const o=e&&t(n,{selector:`${i}[for="${e}"]`});if(o){return o}const s=c(n,i);if(!s||p(s,n)){return null}return s};function p(n,t){let c;const e="custom-element-ancestor-check";const o=e=>{e.stopImmediatePropagation();const o=e.composedPath();c=o.slice(o.indexOf(t),o.indexOf(n))};n.addEventListener(e,o,{once:true});t.dispatchEvent(new CustomEvent(e,{composed:true,bubbles:true}));n.removeEventListener(e,o);const s=c.filter((c=>c!==t&&c!==n)).filter((n=>n.tagName?.includes("-")));return s.length>0}function b(n){if(!n){return}const t=d(n.el);if(a.has(t)&&t===n.labelEl||!t&&m.has(n)){return}const c=C.bind(n);if(t){n.labelEl=t;const e=u.get(t)||[];e.push(n);u.set(t,e.sort(k));if(!a.has(n.labelEl)){a.set(n.labelEl,M);n.labelEl.addEventListener(o,M)}m.delete(n);document.removeEventListener(s,f.get(n));l.set(n,c);document.addEventListener(r,c)}else if(!m.has(n)){c();document.removeEventListener(r,l.get(n))}}function h(n){if(!n){return}m.delete(n);document.removeEventListener(s,f.get(n));document.removeEventListener(r,l.get(n));f.delete(n);l.delete(n);if(!n.labelEl){return}const t=u.get(n.labelEl);if(t.length===1){n.labelEl.removeEventListener(o,a.get(n.labelEl));a.delete(n.labelEl)}u.set(n.labelEl,t.filter((t=>t!==n)).sort(k));n.labelEl=null}function k(t,c){return n(t.el,c.el)?-1:1}function w(n){return n.label||n.labelEl?.textContent?.trim()||""}function M(n){const t=n.detail.sourceEvent.target;const c=u.get(this);const e=c.find((n=>n.el===t));const o=c.includes(e);if(o){return}const s=c[0];if(s.disabled){return}s.onLabelClick(n)}function W(){if(m.has(this)){b(this)}}function C(){m.add(this);const n=f.get(this)||W.bind(this);f.set(this,n);document.addEventListener(s,n)}async function I(n){await e(n);const t=u.has(n);if(t){return}const c=n.ownerDocument?.getElementById(n.for);if(!c){return}requestAnimationFrame((()=>{for(const n of m){if(n.el===c){b(n);break}}}))}export{I as a,r as b,b as c,h as d,w as g,s as l};
//# sourceMappingURL=p-807436d6.js.map