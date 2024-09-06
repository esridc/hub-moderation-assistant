/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{l as e,m as n,n as r,o as t,p as i,d as u,r as a}from"./p-180fb587.js";import{f as o}from"./p-3c9a38fe.js";
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n,r){n=l(n);if(n in e){Object.defineProperty(e,n,{value:r,enumerable:true,configurable:true,writable:true})}else{e[n]=r}return e}function v(e,n){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var t=r.call(e,n||"default");if(typeof t!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function l(e){var n=v(e,"string");return typeof n==="symbol"?n:String(n)}var d={activateTrap:function e(n,r){if(n.length>0){var t=n[n.length-1];if(t!==r){t.pause()}}var i=n.indexOf(r);if(i===-1){n.push(r)}else{n.splice(i,1);n.push(r)}},deactivateTrap:function e(n,r){var t=n.indexOf(r);if(t!==-1){n.splice(t,1)}if(n.length>0){n[n.length-1].unpause()}}};var b=function e(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select==="function"};var p=function e(n){return(n===null||n===void 0?void 0:n.key)==="Escape"||(n===null||n===void 0?void 0:n.key)==="Esc"||(n===null||n===void 0?void 0:n.keyCode)===27};var w=function e(n){return(n===null||n===void 0?void 0:n.key)==="Tab"||(n===null||n===void 0?void 0:n.keyCode)===9};var m=function e(n){return w(n)&&!n.shiftKey};var h=function e(n){return w(n)&&n.shiftKey};var y=function e(n){return setTimeout(n,0)};var F=function e(n,r){var t=-1;n.every((function(e,n){if(r(e)){t=n;return false}return true}));return t};var O=function e(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++){t[i-1]=arguments[i]}return typeof n==="function"?n.apply(void 0,t):n};var k=function e(n){return n.target.shadowRoot&&typeof n.composedPath==="function"?n.composedPath()[0]:n.target};var j=[];var T=function u(a,o){var f=(o===null||o===void 0?void 0:o.document)||document;var s=(o===null||o===void 0?void 0:o.trapStack)||j;var v=c({returnFocusOnDeactivate:true,escapeDeactivates:true,delayInitialFocus:true,isKeyForward:m,isKeyBackward:h},o);var l={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:false,paused:false,delayInitialFocusTimer:undefined,recentNavEvent:undefined};var T;var D=function e(n,r,t){return n&&n[r]!==undefined?n[r]:v[t||r]};var g=function e(n,r){var t=typeof(r===null||r===void 0?void 0:r.composedPath)==="function"?r.composedPath():undefined;return l.containerGroups.findIndex((function(e){var r=e.container,i=e.tabbableNodes;return r.contains(n)||(t===null||t===void 0?void 0:t.includes(r))||i.find((function(e){return e===n}))}))};var E=function e(n){var r=v[n];if(typeof r==="function"){for(var t=arguments.length,i=new Array(t>1?t-1:0),u=1;u<t;u++){i[u-1]=arguments[u]}r=r.apply(void 0,i)}if(r===true){r=undefined}if(!r){if(r===undefined||r===false){return r}throw new Error("`".concat(n,"` was specified but was not a node, or did not return a node"))}var a=r;if(typeof r==="string"){a=f.querySelector(r);if(!a){throw new Error("`".concat(n,"` as selector refers to no known node"))}}return a};var N=function n(){var r=E("initialFocus");if(r===false){return false}if(r===undefined||!e(r,v.tabbableOptions)){if(g(f.activeElement)>=0){r=f.activeElement}else{var t=l.tabbableGroups[0];var i=t&&t.firstTabbableNode;r=i||E("fallbackFocus")}}if(!r){throw new Error("Your focus-trap needs to have at least one focusable element")}return r};var P=function e(){l.containerGroups=l.containers.map((function(e){var u=n(e,v.tabbableOptions);var a=r(e,v.tabbableOptions);var o=u.length>0?u[0]:undefined;var f=u.length>0?u[u.length-1]:undefined;var c=a.find((function(e){return t(e)}));var s=a.slice().reverse().find((function(e){return t(e)}));var l=!!u.find((function(e){return i(e)>0}));return{container:e,tabbableNodes:u,focusableNodes:a,posTabIndexesFound:l,firstTabbableNode:o,lastTabbableNode:f,firstDomTabbableNode:c,lastDomTabbableNode:s,nextTabbableNode:function e(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var i=u.indexOf(n);if(i<0){if(r){return a.slice(a.indexOf(n)+1).find((function(e){return t(e)}))}return a.slice(0,a.indexOf(n)).reverse().find((function(e){return t(e)}))}return u[i+(r?1:-1)]}}}));l.tabbableGroups=l.containerGroups.filter((function(e){return e.tabbableNodes.length>0}));if(l.tabbableGroups.length<=0&&!E("fallbackFocus")){throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")}if(l.containerGroups.find((function(e){return e.posTabIndexesFound}))&&l.containerGroups.length>1){throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")}};var A=function e(n){var r=n.activeElement;if(!r){return}if(r.shadowRoot&&r.shadowRoot.activeElement!==null){return e(r.shadowRoot)}return r};var x=function e(n){if(n===false){return}if(n===A(document)){return}if(!n||!n.focus){e(N());return}n.focus({preventScroll:!!v.preventScroll});l.mostRecentlyFocusedNode=n;if(b(n)){n.select()}};var B=function e(n){var r=E("setReturnFocus",n);return r?r:r===false?false:n};var R=function n(r){var u=r.target,a=r.event,o=r.isBackward,f=o===void 0?false:o;u=u||k(a);P();var c=null;if(l.tabbableGroups.length>0){var s=g(u,a);var d=s>=0?l.containerGroups[s]:undefined;if(s<0){if(f){c=l.tabbableGroups[l.tabbableGroups.length-1].lastTabbableNode}else{c=l.tabbableGroups[0].firstTabbableNode}}else if(f){var b=F(l.tabbableGroups,(function(e){var n=e.firstTabbableNode;return u===n}));if(b<0&&(d.container===u||e(u,v.tabbableOptions)&&!t(u,v.tabbableOptions)&&!d.nextTabbableNode(u,false))){b=s}if(b>=0){var p=b===0?l.tabbableGroups.length-1:b-1;var m=l.tabbableGroups[p];c=i(u)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else if(!w(a)){c=d.nextTabbableNode(u,false)}}else{var h=F(l.tabbableGroups,(function(e){var n=e.lastTabbableNode;return u===n}));if(h<0&&(d.container===u||e(u,v.tabbableOptions)&&!t(u,v.tabbableOptions)&&!d.nextTabbableNode(u))){h=s}if(h>=0){var y=h===l.tabbableGroups.length-1?0:h+1;var O=l.tabbableGroups[y];c=i(u)>=0?O.firstTabbableNode:O.firstDomTabbableNode}else if(!w(a)){c=d.nextTabbableNode(u)}}}else{c=E("fallbackFocus")}return c};var S=function e(n){var r=k(n);if(g(r,n)>=0){return}if(O(v.clickOutsideDeactivates,n)){T.deactivate({returnFocus:v.returnFocusOnDeactivate});return}if(O(v.allowOutsideClick,n)){return}n.preventDefault()};var C=function e(n){var r=k(n);var t=g(r,n)>=0;if(t||r instanceof Document){if(t){l.mostRecentlyFocusedNode=r}}else{n.stopImmediatePropagation();var u;var a=true;if(l.mostRecentlyFocusedNode){if(i(l.mostRecentlyFocusedNode)>0){var o=g(l.mostRecentlyFocusedNode);var f=l.containerGroups[o].tabbableNodes;if(f.length>0){var c=f.findIndex((function(e){return e===l.mostRecentlyFocusedNode}));if(c>=0){if(v.isKeyForward(l.recentNavEvent)){if(c+1<f.length){u=f[c+1];a=false}}else{if(c-1>=0){u=f[c-1];a=false}}}}}else{if(!l.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return i(e)>0}))}))){a=false}}}else{a=false}if(a){u=R({target:l.mostRecentlyFocusedNode,isBackward:v.isKeyBackward(l.recentNavEvent)})}if(u){x(u)}else{x(l.mostRecentlyFocusedNode||N())}}l.recentNavEvent=undefined};var I=function e(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;l.recentNavEvent=n;var t=R({event:n,isBackward:r});if(t){if(w(n)){n.preventDefault()}x(t)}};var G=function e(n){if(p(n)&&O(v.escapeDeactivates,n)!==false){n.preventDefault();T.deactivate();return}if(v.isKeyForward(n)||v.isKeyBackward(n)){I(n,v.isKeyBackward(n))}};var K=function e(n){var r=k(n);if(g(r,n)>=0){return}if(O(v.clickOutsideDeactivates,n)){return}if(O(v.allowOutsideClick,n)){return}n.preventDefault();n.stopImmediatePropagation()};var M=function e(){if(!l.active){return}d.activateTrap(s,T);l.delayInitialFocusTimer=v.delayInitialFocus?y((function(){x(N())})):x(N());f.addEventListener("focusin",C,true);f.addEventListener("mousedown",S,{capture:true,passive:false});f.addEventListener("touchstart",S,{capture:true,passive:false});f.addEventListener("click",K,{capture:true,passive:false});f.addEventListener("keydown",G,{capture:true,passive:false});return T};var U=function e(){if(!l.active){return}f.removeEventListener("focusin",C,true);f.removeEventListener("mousedown",S,true);f.removeEventListener("touchstart",S,true);f.removeEventListener("click",K,true);f.removeEventListener("keydown",G,true);return T};var Y=function e(n){var r=n.some((function(e){var n=Array.from(e.removedNodes);return n.some((function(e){return e===l.mostRecentlyFocusedNode}))}));if(r){x(N())}};var L=typeof window!=="undefined"&&"MutationObserver"in window?new MutationObserver(Y):undefined;var q=function e(){if(!L){return}L.disconnect();if(l.active&&!l.paused){l.containers.map((function(e){L.observe(e,{subtree:true,childList:true})}))}};T={get active(){return l.active},get paused(){return l.paused},activate:function e(n){if(l.active){return this}var r=D(n,"onActivate");var t=D(n,"onPostActivate");var i=D(n,"checkCanFocusTrap");if(!i){P()}l.active=true;l.paused=false;l.nodeFocusedBeforeActivation=f.activeElement;r===null||r===void 0||r();var u=function e(){if(i){P()}M();q();t===null||t===void 0||t()};if(i){i(l.containers.concat()).then(u,u);return this}u();return this},deactivate:function e(n){if(!l.active){return this}var r=c({onDeactivate:v.onDeactivate,onPostDeactivate:v.onPostDeactivate,checkCanReturnFocus:v.checkCanReturnFocus},n);clearTimeout(l.delayInitialFocusTimer);l.delayInitialFocusTimer=undefined;U();l.active=false;l.paused=false;q();d.deactivateTrap(s,T);var t=D(r,"onDeactivate");var i=D(r,"onPostDeactivate");var u=D(r,"checkCanReturnFocus");var a=D(r,"returnFocus","returnFocusOnDeactivate");t===null||t===void 0||t();var o=function e(){y((function(){if(a){x(B(l.nodeFocusedBeforeActivation))}i===null||i===void 0||i()}))};if(a&&u){u(B(l.nodeFocusedBeforeActivation)).then(o,o);return this}o();return this},pause:function e(n){if(l.paused||!l.active){return this}var r=D(n,"onPause");var t=D(n,"onPostPause");l.paused=true;r===null||r===void 0||r();U();q();t===null||t===void 0||t();return this},unpause:function e(n){if(!l.paused||!l.active){return this}var r=D(n,"onUnpause");var t=D(n,"onPostUnpause");l.paused=false;r===null||r===void 0||r();P();M();q();t===null||t===void 0||t();return this},updateContainerElements:function e(n){var r=[].concat(n).filter(Boolean);l.containers=r.map((function(e){return typeof e==="string"?f.querySelector(e):e}));if(l.active){P()}q();return this}};T.updateContainerElements(a);return T};function D(e,n){const{el:r}=e;const t=n?.focusTrapEl||r;if(!t){return}const i={clickOutsideDeactivates:true,escapeDeactivates:false,fallbackFocus:t,setReturnFocus:e=>{u(e);return false},...n?.focusTrapOptions,document:r.ownerDocument,tabbableOptions:a,trapStack:o};e.focusTrap=T(t,i)}function g(e,n){if(!e.focusTrapDisabled){e.focusTrap?.activate(n)}}function E(e,n){e.focusTrap?.deactivate(n)}function N(e){e.focusTrap?.updateContainerElements(e.el)}export{g as a,D as c,E as d,N as u};
//# sourceMappingURL=p-0e6a32ae.js.map