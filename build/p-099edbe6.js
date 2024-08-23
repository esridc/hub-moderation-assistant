import{f as n}from"./p-3e4c4fe7.js";import{i as e}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const a=new WeakMap;const r=new WeakMap;function s(n){r.set(n,new Promise((e=>a.set(n,e))))}function t(n){a.get(n)()}function o(n){return r.get(n)}async function i(a){await o(a);if(!e()){return}n(a);return new Promise((n=>requestAnimationFrame((()=>n()))))}export{t as a,o as b,i as c,s};
//# sourceMappingURL=p-099edbe6.js.map