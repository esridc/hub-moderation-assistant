import{h as n}from"./p-3e4c4fe7.js";import{g as t}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
const i=/firefox/i.test(t());const e=i?new WeakMap:null;function o(){const{disabled:n}=this;if(!n){HTMLElement.prototype.click.call(this)}}function r(n){const t=n.target;if(i&&!e.get(t)){return}const{disabled:o}=t;if(o){n.preventDefault()}}const f=["mousedown","mouseup","click"];function c(n){const t=n.target;if(i&&!e.get(t)){return}if(t.disabled){n.stopImmediatePropagation();n.preventDefault()}}const u={capture:true};function s(n){if(n.disabled){n.el.setAttribute("aria-disabled","true");if(n.el.contains(document.activeElement)){document.activeElement.blur()}a(n);return}m(n);n.el.removeAttribute("aria-disabled")}function a(n){n.el.click=o;if(i){const t=l(n);const i=e.get(n.el);if(i!==t){b(i);e.set(n.el,t)}d(e.get(n.el));return}d(n.el)}function d(n){if(!n){return}n.addEventListener("pointerdown",r,u);f.forEach((t=>n.addEventListener(t,c,u)))}function l(n){return n.el.parentElement||n.el}function p(n){return"disabled"in n}function m(n){delete n.el.click;if(i){const t=e.get(n.el);let i=false;if(t?.children){for(const e of t.children){if(p(e)&&e.disabled&&e!==n.el){i=true;break}}}if(!i){b(t)}e.delete(n.el);return}b(n.el)}function b(n){if(!n){return}n.removeEventListener("pointerdown",r,u);f.forEach((t=>n.removeEventListener(t,c,u)))}function w(n){if(!n.disabled||!i){return}a(n)}function k(n){if(!i){return}m(n)}const h={container:"interaction-container"};function j({disabled:t},i){return n("div",{class:h.container,inert:t},...i)}export{j as I,w as c,k as d,s as u};
//# sourceMappingURL=p-529ac440.js.map