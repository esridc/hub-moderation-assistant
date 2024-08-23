import{a as n}from"./p-3e4c4fe7.js";import{g as t}from"./p-768b95e8.js";import{i as s}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const o={};async function c(t,s){const c=`${s}_${t}`;if(o[c]){return o[c]}o[c]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){e()}return n.json()})).catch((()=>e()));return o[c]}function e(){throw new Error("could not fetch component message bundle")}function i(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function r(){}async function a(n){n.defaultMessages=await f(n,n.effectiveLocale);i(n)}async function f(n,o){if(!s()){return{}}const{el:e}=n;const i=e.tagName.toLowerCase();const r=i.replace("calcite-","");return c(t(o,"t9n"),r)}async function u(n,t){n.defaultMessages=await f(n,t);i(n)}function m(n){n.onMessagesChange=h}function p(n){n.onMessagesChange=r}function h(){i(this)}export{m as c,p as d,a as s,u};
//# sourceMappingURL=p-0cf7c05c.js.map