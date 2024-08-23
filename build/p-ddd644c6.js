import{i as t}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function n(n,i,r){if(!t()){return undefined}const e=s(n);return new e(i,r)}function s(t){class n extends window.MutationObserver{constructor(t){super(t);this.observedEntry=[];this.callback=t}observe(t,n){this.observedEntry.push({target:t,options:n});return super.observe(t,n)}unobserve(t){const n=this.observedEntry.filter((n=>n.target!==t));this.observedEntry=[];this.callback(super.takeRecords(),this);this.disconnect();n.forEach((t=>this.observe(t.target,t.options)))}}return function(){return t==="intersection"?window.IntersectionObserver:t==="mutation"?n:window.ResizeObserver}()}export{n as c};
//# sourceMappingURL=p-ddd644c6.js.map