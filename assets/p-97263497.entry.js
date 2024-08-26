/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as t,c as i,h as e,g as s}from"./p-5dcb8a70.js";import{e as a}from"./p-180fb587.js";import{c as n,d as c,u as o,I as r}from"./p-79519f9a.js";import{c as h,d as l,g as d}from"./p-6ecb195b.js";import{s as b,a as p,c as f}from"./p-9658e553.js";import{c as u,d as g}from"./p-4cc0e90d.js";import{c as m}from"./p-f429933e.js";import{c as y,s as k,d as w,u as C}from"./p-bad38bf3.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-fbdfad6a.js";import"./p-e38f29cd.js";import"./p-d6cfcab9.js";const v={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};const j=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-color-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-color-foreground-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-color-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const E=j;const x=class{constructor(e){t(this,e);this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6);this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6);this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6);this.mutationObserver=m("mutation",(()=>this.mutationObserverCallback()));this.enableEditing=()=>{this.valuePriorToEditing=this.inputElement?.value;this.editingEnabled=true;this.inputElement?.setFocus();this.calciteInternalInlineEditableEnableEditingChange.emit()};this.disableEditing=()=>{this.editingEnabled=false};this.cancelEditing=()=>{if(this.inputElement){this.inputElement.value=this.valuePriorToEditing}this.disableEditing();this.enableEditingButton.setFocus();if(!this.editingEnabled&&!!this.shouldEmitCancel){this.calciteInlineEditableEditCancel.emit()}};this.escapeKeyHandler=async t=>{if(t.defaultPrevented){return}if(t.key==="Escape"){t.preventDefault();this.cancelEditing()}if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();this.inputElement?.setFocus()}}};this.cancelEditingHandler=async t=>{t.preventDefault();this.cancelEditing()};this.enableEditingHandler=async t=>{if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}};this.confirmChangesHandler=async t=>{t.preventDefault();this.calciteInlineEditableEditConfirm.emit();try{if(this.afterConfirm){this.loading=true;await this.afterConfirm();this.disableEditing();this.enableEditingButton.setFocus()}}catch(t){}finally{this.loading=false}};this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.scale=undefined;this.afterConfirm=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined}disabledWatcher(t){if(this.inputElement){this.inputElement.disabled=t}}editingEnabledWatcher(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}}onMessagesChange(){}connectedCallback(){n(this);h(this);u(this);y(this);this.mutationObserver?.observe(this.el,{childList:true});this.mutationObserverCallback()}async componentWillLoad(){b(this);await k(this)}componentDidLoad(){p(this)}disconnectedCallback(){c(this);l(this);g(this);w(this);this.mutationObserver?.disconnect()}componentDidRender(){o(this)}render(){return e(r,{key:"d93607e37bf516e5fa3726e8e4715c64113b771c",disabled:this.disabled},e("div",{key:"5b0b9dae803d012be8a1b716659f424e9f8100f3",class:v.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},e("div",{key:"3036a2f71c798fb649867b435702d28fcc56b93e",class:v.inputWrapper},e("slot",{key:"def90e123156ccc1bfd762ab352bca6b90324f03"})),e("div",{key:"090a1a87210cbfafd5e2e45ab09805f2523f46ac",class:v.controlsWrapper},e("calcite-button",{key:"c45936623bed1a6a10e3fb72e15dd3bd632cf8f1",appearance:"transparent",class:v.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,ref:t=>this.enableEditingButton=t,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[e("div",{key:"da8516b462c97bc00e261c6e6959a26bdb8c5312",class:v.cancelEditingButtonWrapper},e("calcite-button",{key:"d19dba3fad6d1933a212e331aeb1b51c2b480397",appearance:"transparent",class:v.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,ref:t=>this.cancelEditingButton=t,scale:this.scale,type:"button"})),e("calcite-button",{key:"e487af0adfa1ea3da2cd0ec9f39a88fe19c682ed",appearance:"solid",class:v.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:t=>this.confirmEditingButton=t,scale:this.scale,type:"button"})])))}blurHandler(){if(!this.controls){this.disableEditing()}}effectiveLocaleChange(){C(this,this.effectiveLocale)}async setFocus(){await f(this);this.el?.focus()}mutationObserverCallback(){this.updateSlottedInput();this.scale=this.scale||this.inputElement?.scale}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=a(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||d(this)}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};x.style=E;export{x as calcite_inline_editable};
//# sourceMappingURL=p-97263497.entry.js.map