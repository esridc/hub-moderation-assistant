/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{l as e}from"./p-3c9a38fe.js";const n=new Set;const r={trace:0,debug:1,info:2,warn:4,error:8,off:10};function o(n){return r[n]>=r[e]}function t(e,...n){if(!o(e)){return}const r="%ccalcite";const t="background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;";console[e].call(this,r,t,...n)}let c;const s={debug:e=>t("debug",e),info:e=>t("info",e),warn:e=>t("warn",e),error:e=>t("error",e),trace:e=>t("trace",e),deprecated:a};function a(e,{component:r,name:o,suggested:s,removalVersion:a}){const i=`${e}:${e==="component"?"":r}${o}`;if(n.has(i)){return}n.add(i);const f=Array.isArray(s);if(f&&!c){c=new Intl.ListFormat("en",{style:"long",type:"disjunction"})}const d=`[${o}] ${e} is deprecated and will be removed in ${a==="future"?`a future version`:`v${a}`}.${s?` Use ${f?c.format(s.map((e=>`"${e}"`))):`"${s}"`} instead.`:""}`;t("warn",d)}export{s as l};
//# sourceMappingURL=p-7a4b6d8e.js.map