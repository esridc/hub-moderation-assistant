/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{a as n}from"./p-5dcb8a70.js";import{g as t}from"./p-4cc0e90d.js";import{i as s}from"./p-fbdfad6a.js";const c={};async function o(t,s){const o=`${s}_${t}`;if(c[o]){return c[o]}c[o]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){a()}return n.json()})).catch((()=>a()));return c[o]}function a(){throw new Error("could not fetch component message bundle")}function i(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function r(){}async function f(n){n.defaultMessages=await e(n,n.effectiveLocale);i(n)}async function e(n,c){if(!s()){return{}}const{el:a}=n;const i=a.tagName.toLowerCase();const r=i.replace("calcite-","");return o(t(c,"t9n"),r)}async function u(n,t){n.defaultMessages=await e(n,t);i(n)}function m(n){n.onMessagesChange=d}function p(n){n.onMessagesChange=r}function d(){i(this)}export{m as c,p as d,f as s,u};
//# sourceMappingURL=p-bad38bf3.js.map