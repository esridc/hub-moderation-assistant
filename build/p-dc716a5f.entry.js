import{r as t,c as i,f as e,h as s,H as o,g as a}from"./p-3e4c4fe7.js";import{g as r}from"./p-22ac229a.js";import{g as n,i as c,t as d}from"./p-416f7088.js";import{c as h,d as l,H as f}from"./p-bddf5600.js";import{g as u}from"./p-fe89bef4.js";import{c as p,d as b,u as m,I as k}from"./p-529ac440.js";import{c as v,d as x,g}from"./p-807436d6.js";import{c as w,s as y,a as z}from"./p-099edbe6.js";import"./p-245d8a5c.js";import"./p-0c8f2359.js";import"./p-6423f684.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const C={container:"container"};const A=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}';const R=class{constructor(e){t(this,e);this.calciteInternalRadioButtonBlur=i(this,"calciteInternalRadioButtonBlur",6);this.calciteRadioButtonChange=i(this,"calciteRadioButtonChange",6);this.calciteInternalRadioButtonCheckedChange=i(this,"calciteInternalRadioButtonCheckedChange",6);this.calciteInternalRadioButtonFocus=i(this,"calciteInternalRadioButtonFocus",6);this.selectItem=(t,i)=>{t[i].click()};this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((t=>t.name===this.name));this.isFocusable=()=>{const t=this.queryButtons();const i=t.find((t=>!t.disabled));const e=t.find((t=>t.checked));return i===this.el&&!e};this.check=()=>{if(this.disabled){return}this.focused=true;this.setFocus();if(this.checked){return}this.uncheckAllRadioButtonsInGroup();this.checked=true;this.calciteRadioButtonChange.emit()};this.clickHandler=()=>{if(this.disabled){return}this.check()};this.setContainerEl=t=>{this.containerEl=t};this.handleKeyDown=t=>{const i=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "];const{key:e}=t;const{el:s}=this;if(i.indexOf(e)===-1){return}if(e===" "){this.check();t.preventDefault();return}let o=e;if(n(s)==="rtl"){if(e==="ArrowRight"){o="ArrowLeft"}if(e==="ArrowLeft"){o="ArrowRight"}}const a=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((t=>t.name===this.name));let c=0;const d=a.length;a.some(((t,i)=>{if(t.checked){c=i;return true}}));switch(o){case"ArrowLeft":case"ArrowUp":t.preventDefault();this.selectItem(a,r(Math.max(c-1,-1),d));return;case"ArrowRight":case"ArrowDown":t.preventDefault();this.selectItem(a,r(c+1,d));return;default:return}};this.onContainerBlur=()=>{this.focused=false;this.calciteInternalRadioButtonBlur.emit()};this.onContainerFocus=()=>{if(!this.disabled){this.focused=true;this.calciteInternalRadioButtonFocus.emit()}};this.checked=false;this.disabled=false;this.focused=false;this.form=undefined;this.guid=undefined;this.hovered=false;this.label=undefined;this.name=undefined;this.required=false;this.scale="m";this.value=undefined}handleHiddenChange(){this.updateTabIndexOfOtherRadioButtonsInGroup()}checkedChanged(t){if(t){this.uncheckOtherRadioButtonsInGroup()}this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await w(this);if(!this.disabled){c(this.containerEl)}}syncHiddenFormInput(t){t.type="radio"}onLabelClick(t){if(this.disabled||this.el.hidden){return}const i=t.currentTarget;const e=i.for?this.rootNode.querySelector(`calcite-radio-button[id="${i.for}"]`):i.querySelector(`calcite-radio-button[name="${this.name}"]`);if(!e){return}e.focused=true;this.setFocus();if(e.checked){return}this.uncheckOtherRadioButtonsInGroup();e.checked=true;this.calciteRadioButtonChange.emit()}checkLastRadioButton(){const t=this.queryButtons();const i=t.filter((t=>t.checked));if((i===null||i===void 0?void 0:i.length)>1){const t=i[i.length-1];i.filter((i=>i!==t)).forEach((t=>{t.checked=false;t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){const t=this.queryButtons();t.forEach((t=>{if(t.checked){t.checked=false;t.focused=false}}))}uncheckOtherRadioButtonsInGroup(){const t=this.queryButtons();const i=t.filter((t=>t.guid!==this.guid));i.forEach((t=>{if(t.checked){t.checked=false;t.focused=false}}))}updateTabIndexOfOtherRadioButtonsInGroup(){const t=this.queryButtons();const i=t.filter((t=>t.guid!==this.guid&&!t.disabled));i.forEach((t=>{e(t)}))}getTabIndex(){if(this.disabled){return undefined}return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){if(this.disabled){return}this.hovered=true}pointerLeaveHandler(){if(this.disabled){return}this.hovered=false}connectedCallback(){this.rootNode=this.el.getRootNode();this.guid=this.el.id||`calcite-radio-button-${u()}`;if(this.name){this.checkLastRadioButton()}p(this);v(this);h(this);this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){y(this)}componentDidLoad(){z(this);if(this.focused&&!this.disabled){this.setFocus()}}disconnectedCallback(){b(this);x(this);l(this);this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){m(this)}render(){const t=this.getTabIndex();return s(o,{key:"b397c382efe2d05d99fcf8a0035011c5482ccfe4",onClick:this.clickHandler,onKeyDown:this.handleKeyDown},s(k,{key:"7112738487b0bcda82d1680c08f4026330b2cfde",disabled:this.disabled},s("div",{key:"d3bedbbea15ac3e4aa5656f042a05939be2a8a68","aria-checked":d(this.checked),"aria-label":g(this),class:C.container,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:t},s("div",{key:"eebf3f8fffde27fd58b04cddae6966da4a079c3d",class:"radio"})),s(f,{key:"07fad35c2b428ec42382e6ede6b846d824a524f9",component:this})))}get el(){return a(this)}static get watchers(){return{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}}};R.style=A;export{R as calcite_radio_button};
//# sourceMappingURL=p-dc716a5f.entry.js.map