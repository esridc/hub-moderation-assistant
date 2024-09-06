/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{a as r,S as t,i as e,b as n,c as o,r as u,f as a}from"./p-d436f417.js";function c(r,t){var e=-1,n=r==null?0:r.length,o=Array(n);while(++e<n){o[e]=t(r[e],e,r)}return o}var f=Array.isArray;const i=f;var b=1/0;var v=t?t.prototype:undefined,l=v?v.toString:undefined;function s(t){if(typeof t=="string"){return t}if(i(t)){return c(t,s)+""}if(r(t)){return l?l.call(t):""}var e=t+"";return e=="0"&&1/t==-b?"-0":e}function j(r){return r}var y="[object AsyncFunction]",p="[object Function]",d="[object GeneratorFunction]",m="[object Proxy]";function A(r){if(!e(r)){return false}var t=n(r);return t==p||t==d||t==y||t==m}var x=9007199254740991;var g=/^(?:0|[1-9]\d*)$/;function h(r,t){var e=typeof r;t=t==null?x:t;return!!t&&(e=="number"||e!="symbol"&&g.test(r))&&(r>-1&&r%1==0&&r<t)}var O=9007199254740991;function w(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=O}function F(r){return r!=null&&w(r.length)&&!A(r)}var E=Object.prototype;function S(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||E;return r===e}function U(r,t){var e=-1,n=Array(r);while(++e<r){n[e]=t(e)}return n}var I="[object Arguments]";function R(r){return o(r)&&n(r)==I}var $=Object.prototype;var k=$.hasOwnProperty;var B=$.propertyIsEnumerable;var D=R(function(){return arguments}())?R:function(r){return o(r)&&k.call(r,"callee")&&!B.call(r,"callee")};const M=D;function N(){return false}var C=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var G=C&&typeof module=="object"&&module&&!module.nodeType&&module;var L=G&&G.exports===C;var P=L?u.Buffer:undefined;var T=P?P.isBuffer:undefined;var V=T||N;const W=V;var q="[object Arguments]",z="[object Array]",H="[object Boolean]",J="[object Date]",K="[object Error]",Q="[object Function]",X="[object Map]",Y="[object Number]",Z="[object Object]",_="[object RegExp]",rr="[object Set]",tr="[object String]",er="[object WeakMap]";var nr="[object ArrayBuffer]",or="[object DataView]",ur="[object Float32Array]",ar="[object Float64Array]",cr="[object Int8Array]",fr="[object Int16Array]",ir="[object Int32Array]",br="[object Uint8Array]",vr="[object Uint8ClampedArray]",lr="[object Uint16Array]",sr="[object Uint32Array]";var jr={};jr[ur]=jr[ar]=jr[cr]=jr[fr]=jr[ir]=jr[br]=jr[vr]=jr[lr]=jr[sr]=true;jr[q]=jr[z]=jr[nr]=jr[H]=jr[or]=jr[J]=jr[K]=jr[Q]=jr[X]=jr[Y]=jr[Z]=jr[_]=jr[rr]=jr[tr]=jr[er]=false;function yr(r){return o(r)&&w(r.length)&&!!jr[n(r)]}function pr(r){return function(t){return r(t)}}var dr=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var mr=dr&&typeof module=="object"&&module&&!module.nodeType&&module;var Ar=mr&&mr.exports===dr;var xr=Ar&&a.process;var gr=function(){try{var r=mr&&mr.require&&mr.require("util").types;if(r){return r}return xr&&xr.binding&&xr.binding("util")}catch(r){}}();const hr=gr;var Or=hr&&hr.isTypedArray;var wr=Or?pr(Or):yr;const Fr=wr;var Er=Object.prototype;var Sr=Er.hasOwnProperty;function Ur(r,t){var e=i(r),n=!e&&M(r),o=!e&&!n&&W(r),u=!e&&!n&&!o&&Fr(r),a=e||n||o||u,c=a?U(r.length,String):[],f=c.length;for(var b in r){if((t||Sr.call(r,b))&&!(a&&(b=="length"||o&&(b=="offset"||b=="parent")||u&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||h(b,f)))){c.push(b)}}return c}function Ir(r){var t=[];if(r!=null){for(var e in Object(r)){t.push(e)}}return t}var Rr=Object.prototype;var $r=Rr.hasOwnProperty;function kr(r){if(!e(r)){return Ir(r)}var t=S(r),n=[];for(var o in r){if(!(o=="constructor"&&(t||!$r.call(r,o)))){n.push(o)}}return n}function Br(r){return F(r)?Ur(r,true):kr(r)}function Dr(r){return r==null?"":s(r)}function Mr(r){return function(t,e,n){var o=-1,u=Object(t),a=n(t),c=a.length;while(c--){var f=a[r?c:++o];if(e(u[f],f,u)===false){break}}return t}}var Nr=Mr();const Cr=Nr;function Gr(r){return typeof r=="function"?r:j}var Lr=/[\\^$.*+?()[\]{}|]/g,Pr=RegExp(Lr.source);function Tr(r){r=Dr(r);return r&&Pr.test(r)?r.replace(Lr,"\\$&"):r}function Vr(r,t){return r==null?r:Cr(r,Gr(t),Br)}const Wr=(r,t,e)=>{const n=Tr(t);const o=new RegExp(n,"i");if(r.length===0){console.warn(`No data was passed to the filter function.\n    The data argument should be an array of objects`)}const u=(r,t,e)=>{if(r?.constant||r?.filterDisabled){return true}let n=false;Vr(r,((r,o)=>{if(typeof r==="function"||r==null){return}if(e&&!e.includes(o)){return}if(Array.isArray(r)||typeof r==="object"&&r!==null){if(u(r,t)){n=true}}else if(t.test(r)){n=true}}));return n};return r.filter((r=>u(r,o,e)))};export{Tr as e,Wr as f};
//# sourceMappingURL=p-a7174092.js.map