import{r as e,h as i,H as t,g as s}from"./p-3e4c4fe7.js";import{e as n}from"./p-416f7088.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const o={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"};const a=":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";const c=class{constructor(i){e(this,i);this.icon=undefined;this.iconFlipRtl=false;this.scale="m";this.status="idle"}handleIconEl(){this.requestedIcon=n(o,this.icon,this.status)}connectedCallback(){this.requestedIcon=n(o,this.icon,this.status)}render(){const e=this.el.hidden;return i(t,{key:"807f74f1838b74f514cb6c79b91be23d634a7a9a","calcite-hydrated-hidden":e},this.renderIcon(this.requestedIcon),i("slot",{key:"15aa8635b2a9646f5b0b02d47e255073789799ef"}))}renderIcon(e){if(e){return i("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}}get el(){return s(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};c.style=a;export{c as calcite_input_message};
//# sourceMappingURL=p-68ec7501.entry.js.map