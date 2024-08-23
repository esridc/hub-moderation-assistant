import{a as n}from"./p-3e4c4fe7.js";import{e as o}from"./p-fba071a6.js";import{g as s}from"./p-768b95e8.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const t={};const a={};async function r(o){const e=s(o);if(t[e]){return t[e]}if(!a[e]){a[e]=fetch(n(`./assets/date-picker/nls/${e}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${e}" not found or invalid, falling back to english`);return r("en")}))}const i=await a[e];t[e]=i;return i}function e(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,e as g};
//# sourceMappingURL=p-ecef8ce0.js.map