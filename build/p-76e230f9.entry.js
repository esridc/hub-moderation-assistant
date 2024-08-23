import{r as t,c as i,h as e,g as s}from"./p-3e4c4fe7.js";import{d as a}from"./p-416f7088.js";import{c as n,d as o,u as c,I as r}from"./p-529ac440.js";import{c as l,d,g as h}from"./p-807436d6.js";import{s as b,a as p,c as f}from"./p-099edbe6.js";import{c as u,d as g}from"./p-768b95e8.js";import{c as m}from"./p-ddd644c6.js";import{c as v,s as y,d as k,u as w}from"./p-0cf7c05c.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-0c8f2359.js";import"./p-6423f684.js";import"./p-067fcff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const C={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};const j=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-color-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-color-foreground-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-color-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const E=class{constructor(e){t(this,e);this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6);this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6);this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6);this.mutationObserver=m("mutation",(()=>this.mutationObserverCallback()));this.enableEditing=()=>{var t,i;this.valuePriorToEditing=(t=this.inputElement)===null||t===void 0?void 0:t.value;this.editingEnabled=true;(i=this.inputElement)===null||i===void 0?void 0:i.setFocus();this.calciteInternalInlineEditableEnableEditingChange.emit()};this.disableEditing=()=>{this.editingEnabled=false};this.cancelEditing=()=>{if(this.inputElement){this.inputElement.value=this.valuePriorToEditing}this.disableEditing();this.enableEditingButton.setFocus();if(!this.editingEnabled&&!!this.shouldEmitCancel){this.calciteInlineEditableEditCancel.emit()}};this.escapeKeyHandler=async t=>{var i;if(t.defaultPrevented){return}if(t.key==="Escape"){t.preventDefault();this.cancelEditing()}if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();(i=this.inputElement)===null||i===void 0?void 0:i.setFocus()}}};this.cancelEditingHandler=async t=>{t.preventDefault();this.cancelEditing()};this.enableEditingHandler=async t=>{if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}};this.confirmChangesHandler=async t=>{t.preventDefault();this.calciteInlineEditableEditConfirm.emit();try{if(this.afterConfirm){this.loading=true;await this.afterConfirm();this.disableEditing();this.enableEditingButton.setFocus()}}catch(t){}finally{this.loading=false}};this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.scale=undefined;this.afterConfirm=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined}disabledWatcher(t){if(this.inputElement){this.inputElement.disabled=t}}editingEnabledWatcher(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}}onMessagesChange(){}connectedCallback(){var t;n(this);l(this);u(this);v(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.mutationObserverCallback()}async componentWillLoad(){b(this);await y(this)}componentDidLoad(){p(this)}disconnectedCallback(){var t;o(this);d(this);g(this);k(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}componentDidRender(){c(this)}render(){return e(r,{key:"d93607e37bf516e5fa3726e8e4715c64113b771c",disabled:this.disabled},e("div",{key:"5b0b9dae803d012be8a1b716659f424e9f8100f3",class:C.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},e("div",{key:"3036a2f71c798fb649867b435702d28fcc56b93e",class:C.inputWrapper},e("slot",{key:"def90e123156ccc1bfd762ab352bca6b90324f03"})),e("div",{key:"090a1a87210cbfafd5e2e45ab09805f2523f46ac",class:C.controlsWrapper},e("calcite-button",{key:"c45936623bed1a6a10e3fb72e15dd3bd632cf8f1",appearance:"transparent",class:C.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,ref:t=>this.enableEditingButton=t,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[e("div",{key:"da8516b462c97bc00e261c6e6959a26bdb8c5312",class:C.cancelEditingButtonWrapper},e("calcite-button",{key:"d19dba3fad6d1933a212e331aeb1b51c2b480397",appearance:"transparent",class:C.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,ref:t=>this.cancelEditingButton=t,scale:this.scale,type:"button"})),e("calcite-button",{key:"e487af0adfa1ea3da2cd0ec9f39a88fe19c682ed",appearance:"solid",class:C.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:t=>this.confirmEditingButton=t,scale:this.scale,type:"button"})])))}blurHandler(){if(!this.controls){this.disableEditing()}}effectiveLocaleChange(){w(this,this.effectiveLocale)}async setFocus(){var t;await f(this);(t=this.el)===null||t===void 0?void 0:t.focus()}mutationObserverCallback(){var t;this.updateSlottedInput();this.scale=this.scale||((t=this.inputElement)===null||t===void 0?void 0:t.scale)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=a(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||h(this)}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};E.style=j;export{E as calcite_inline_editable};
//# sourceMappingURL=p-76e230f9.entry.js.map