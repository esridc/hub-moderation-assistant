/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{a as n}from"./p-5dcb8a70.js";import{n as t,g as r}from"./p-4cc0e90d.js";function o(n,t,r){if(!n){return}const o=n.getTime();const s=!(t instanceof Date)||o>=t.getTime();const e=!(r instanceof Date)||o<=r.getTime();return s&&e}function s(n,t,r){if(!(n instanceof Date)){return null}const o=n.getTime();const s=t instanceof Date&&o<t.getTime();const e=r instanceof Date&&o>r.getTime();if(s){return t}if(e){return r}return n}function e(n,t=false){if(n instanceof Date){return n}if(!n||typeof n!=="string"){return null}const r=n.split(/[: T-]/).map(parseFloat);const o=new Date(r[0],(r[1]||1)-1,r[2]||1);o.setFullYear(r[0]);if(isNaN(o.getTime())){throw new Error(`Invalid ISO 8601 date: "${n}"`)}if(t){return g(o)}return o}function a(n,t){if(!t){return null}const{separator:r}=t;const o=m(n,t);const{day:s,month:e}=o;const a=c(o.year,t);const i=new Date(a,e,s);i.setFullYear(a);const u=s>0;const f=e>-1;const d=!isNaN(i.getTime());const l=n.split(r).filter((n=>n)).length>2;const D=a.toString().length>0;if(u&&f&&d&&l&&D){return i}return null}function c(n,t){return u(n,t,"read")}function i(n,t){return u(n,t,"write")}function u(n,t,r){if(t["default-calendar"]!=="buddhist"){return n}const o=543;const s=o*(r==="read"?-1:1);return n+s}function f(n,r){const{separator:o,unitOrder:s}=r;const e=h(s);const a=n.split(o).map((n=>t.delocalize(n)));const c=a[e.indexOf("d")];const i=a[e.indexOf("m")];const u=a[e.indexOf("y")];return{day:c,month:i,year:u}}function d(n){if(n instanceof Date){const t=String(n.getMonth()+1).padStart(2,"0");const r=String(n.getDate()).padStart(2,"0");const o=String(n.getFullYear()).padStart(4,"0");return`${o}-${t}-${r}`}return""}function l(n){const t=n.split("-");return{day:t[2],month:t[1],year:t[0]}}function D(n,t){return n instanceof Date&&t instanceof Date&&n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()}function p(n){const t=n.getMonth();const r=new Date(n);r.setMonth(t-1);if(t===r.getMonth()){return new Date(n.getFullYear(),t,0)}return r}function y(n){const t=n.getMonth();const r=new Date(n);r.setMonth(t+1);if((t+2)%7===r.getMonth()%7){return new Date(n.getFullYear(),t+2,0)}return r}function m(n,t){const{day:r,month:o,year:s}=f(n,t);return{day:parseInt(r),month:parseInt(o)-1,year:parseInt(s)}}function h(n){const t=["d","m","y"];const r=n.toLowerCase();return t.sort(((n,t)=>r.indexOf(n)-r.indexOf(t)))}function w(n,t){const r=n.getTime();const o=t.getTime();return(r-o)/(1e3*3600*24)}function g(n){n.setHours(23,59,59,999);return n}const $={};const I={};async function b(t){const o=r(t);if($[o]){return $[o]}if(!I[o]){I[o]=fetch(n(`./assets/date-picker/nls/${o}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${o}" not found or invalid, falling back to english`);return b("en")}))}const s=await I[o];$[o]=s;return s}function j(n){return n.map(((n,t)=>e(n,t===1)))}export{f as a,a as b,d as c,l as d,e,s as f,j as g,b as h,o as i,w as j,D as k,h as l,i as m,y as n,c as o,p,g as s};
//# sourceMappingURL=p-17c53383.js.map