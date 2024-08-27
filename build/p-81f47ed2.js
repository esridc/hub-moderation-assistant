import{n,b as e,i as t,a as r}from"./p-768b95e8.js";import{d as u}from"./p-e7b3487d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const o=5;function i(n,t,u=true,o){const i={hour:"2-digit",minute:"2-digit",timeZone:"UTC",numberingSystem:r(t)};if(u){i.second="2-digit";if(o){i.fractionalSecondDigits=o}}return e(n,i)}function c(n,e){if(n===null||n===undefined){return}const t=n.toString();const r=u(n);if(n<1&&r>0&&r<4){const n=t.replace("0.","");if(!e||n.length===e){return n}if(n.length<e){return n.padEnd(e,"0")}return n}if(n>=0&&n<10){return t.padStart(2,"0")}if(n>=10){return t}}function s(n){if(!I(n)){return null}const{hour:e,minute:t,second:r,fractionalSecond:u}=$(n);let o=`${c(parseInt(e))}:${c(parseInt(t))}`;if(r){o+=`:${c(parseInt(r))}`;if(u){o+=`.${u}`}}return o}function l(n){return parseInt((parseFloat(`0.${n}`)/.001).toFixed(3))}function a(n,e){const t=i(n,e);const r=t.formatToParts(new Date(Date.UTC(0,0,0,0,0,0)));return m("meridiem",r)?"12":"24"}function f(e,t){n.numberFormatOptions={locale:e,numberingSystem:t};return n.localize("1.1").split("")[1]}function d(n,e,t="latn"){const r=i(e,t);const u=r.formatToParts(new Date(Date.UTC(0,0,0,0,0,0)));return m(`${n}Suffix`,u)}function m(n,e){if(!n||!e){return null}if(n==="hourSuffix"){const n=e.indexOf(e.find((({type:n})=>n==="hour")));const t=e.indexOf(e.find((({type:n})=>n==="minute")));const r=e[n+1];return r&&r.type==="literal"&&t-n===2?r.value?.trim()||null:null}if(n==="minuteSuffix"){const n=e.indexOf(e.find((({type:n})=>n==="minute")));const t=e.indexOf(e.find((({type:n})=>n==="second")));const r=e[n+1];return r&&r.type==="literal"&&t-n===2?r.value?.trim()||null:null}if(n==="secondSuffix"){const n=e.indexOf(e.find((({type:n})=>n==="second")));const t=e[n+1];return t&&t.type==="literal"?t.value?.trim()||null:null}return e.find((({type:e})=>n=="meridiem"?e==="dayPeriod":e===n))?.value||null}function p(n){if(!t(n)){return null}const e=parseInt(n);return e>=0&&e<=11?"AM":"PM"}function S(n){const e=n==="ar"||n==="he";if(e){return 0}const t=D({value:"00:00:00",locale:n,numberingSystem:"latn"});return t.findIndex((n=>n.type==="dayPeriod"))}function I(n){if(!n||n.startsWith(":")||n.endsWith(":")){return false}const e=n.split(":");const r=e.length>1&&e.length<4;if(!r){return false}const[u,o,i]=e;const c=parseInt(e[0]);const s=parseInt(e[1]);const l=parseInt(e[2]);const a=t(u)&&c>=0&&c<24;const f=t(o)&&s>=0&&s<60;const d=t(i)&&l>=0&&l<60;if(a&&f&&!i||a&&f&&d){return true}}function y(n,e){if(e==="meridiem"){return n==="AM"||n==="PM"}if(!t(n)){return false}const r=Number(n);return e==="hour"?r>=0&&r<24:r>=0&&r<60}function h({value:e,part:t,locale:r,numberingSystem:u}){if(t==="fractionalSecond"){const t=f(r,u);let o=null;if(e){n.numberFormatOptions={locale:r,numberingSystem:u};const i=n.localize("0");if(parseInt(e)===0){o="".padStart(e.length,i)}else{o=n.localize(`0.${e}`).replace(`${i}${t}`,"");if(o.length<e.length){o=o.padEnd(e.length,i)}}}return o}if(!y(e,t)){return}const o=parseInt(e);const c=new Date(Date.UTC(0,0,0,t==="hour"?o:t==="meridiem"?e==="AM"?0:12:0,t==="minute"?o:0,t==="second"?o:0));if(!c){return}const s=i(r,u);const l=s.formatToParts(c);return m(t,l)}function b({value:n,locale:e,numberingSystem:t,includeSeconds:r=true,fractionalSecondDigits:u}){if(!I(n)){return null}const{hour:o,minute:c,second:s="0",fractionalSecond:a}=$(n);const f=new Date(Date.UTC(0,0,0,parseInt(o),parseInt(c),parseInt(s),a&&l(a)));const d=i(e,t,r,u);return d.format(f)||null}function g({value:n,locale:e,numberingSystem:t="latn"}){if(!I(n)){return null}const{hour:r,minute:u,second:o="0",fractionalSecond:c}=$(n);const s=new Date(Date.UTC(0,0,0,parseInt(r),parseInt(u),parseInt(o)));if(s){const n=i(e,t);const r=n.formatToParts(s);return{localizedHour:m("hour",r),localizedHourSuffix:m("hourSuffix",r),localizedMinute:m("minute",r),localizedMinuteSuffix:m("minuteSuffix",r),localizedSecond:m("second",r),localizedDecimalSeparator:f(e,t),localizedFractionalSecond:h({value:c,part:"fractionalSecond",locale:e,numberingSystem:t}),localizedSecondSuffix:m("secondSuffix",r),localizedMeridiem:m("meridiem",r)}}return null}function D({value:n,locale:e,numberingSystem:t}){if(!I(n)){return null}const{hour:r,minute:u,second:o="0"}=$(n);const c=new Date(Date.UTC(0,0,0,parseInt(r),parseInt(u),parseInt(o)));if(c){const n=i(e,t);const r=n.formatToParts(c);return r}return null}function $(n){if(I(n)){const[e,t,r]=n.split(":");let u=r;let o=null;if(r?.includes(".")){[u,o]=r.split(".")}return{fractionalSecond:o,hour:e,minute:t,second:u}}return{fractionalSecond:null,hour:null,minute:null,second:null}}function x(n,e=true){if(!I(n)){return""}const{hour:t,minute:r,second:u,fractionalSecond:o}=$(n);let i=`${c(parseInt(t))}:${c(parseInt(r))}`;if(e){i+=`:${c(parseInt(e&&u||"0"))}`;if(o){i+=`.${o}`}}return i}export{c as a,g as b,d as c,f as d,h as e,s as f,p as g,a as h,I as i,S as j,b as l,o as m,$ as p,x as t};
//# sourceMappingURL=p-81f47ed2.js.map