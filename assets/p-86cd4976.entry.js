/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as a,H as i,g as n}from"./p-5dcb8a70.js";import{a as s,l as o,b as l}from"./p-6ecb195b.js";import"./p-180fb587.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-e38f29cd.js";const c={container:"container"};const r=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const d=r;const h=class{constructor(a){e(this,a);this.calciteInternalLabelClick=t(this,"calciteInternalLabelClick",2);this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})};this.alignment="start";this.for=undefined;this.scale="m";this.layout="default"}handleForChange(){s(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(o))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(l))}render(){return a(i,{key:"41b0e79fa4984972606fb6c73a9940413f8f863a",onClick:this.labelClickHandler},a("div",{key:"21adb621d9944f95bdf632c0717f9debdc844865",class:c.container},a("slot",{key:"cea575ac40565f9aff87e8ad36653b785f758224"})))}get el(){return n(this)}static get watchers(){return{for:["handleForChange"]}}};h.style=d;export{h as calcite_label};
//# sourceMappingURL=p-86cd4976.entry.js.map