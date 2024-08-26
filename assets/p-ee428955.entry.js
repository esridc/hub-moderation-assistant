/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as t,c as i,f as e,h as s,H as n,g as o}from"./p-5dcb8a70.js";import{e as a,h as l,g as r}from"./p-180fb587.js";import{s as c,c as d,i as h,d as u,H as p}from"./p-c1f3c681.js";import{c as f,d as b,u as m,I as g}from"./p-79519f9a.js";import{c as v,d as x,g as k}from"./p-6ecb195b.js";import{s as y,a as w,c as z}from"./p-9658e553.js";import{c as j,d as C}from"./p-4cc0e90d.js";import{c as I}from"./p-f429933e.js";import{C as L}from"./p-09a4f06c.js";import{u as E,c as W,d as M,s as D}from"./p-bad38bf3.js";import{g as A}from"./p-e38f29cd.js";import{V as T}from"./p-6bdbf5f7.js";import{s as F}from"./p-fd0590d0.js";import"./p-8aebc84a.js";import"./p-fbdfad6a.js";import"./p-d6cfcab9.js";const G={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"};const H={action:"action"};const R=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const V=R;const q=class{constructor(e){t(this,e);this.calciteInternalInputTextFocus=i(this,"calciteInternalInputTextFocus",7);this.calciteInternalInputTextBlur=i(this,"calciteInternalInputTextBlur",7);this.calciteInputTextInput=i(this,"calciteInputTextInput",7);this.calciteInputTextChange=i(this,"calciteInputTextChange",7);this.previousValueOrigin="initial";this.mutationObserver=I("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled||t.defaultPrevented){return}if(this.isClearable&&t.key==="Escape"){this.clearInputTextValue(t);t.preventDefault()}if(t.key==="Enter"){if(c(this)){t.preventDefault()}}};this.clearInputTextValue=t=>{this.setValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue){this.calciteInputTextChange.emit();this.setPreviousEmittedValue(this.value)}};this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value});this.emitChangeIfUserModified()};this.clickHandler=t=>{if(this.disabled){return}const i=a(this.el,"action");if(t.target!==i){this.setFocus()}};this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})};this.inputTextInputHandler=t=>{if(this.disabled||this.readOnly){return}this.setValue({nativeEvent:t,origin:"user",value:t.target.value})};this.inputTextKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(t.key==="Enter"){this.emitChangeIfUserModified()}};this.onHiddenFormInputInput=t=>{if(t.target.name===this.name){this.setValue({value:t.target.value,origin:"direct"})}this.setFocus();t.stopPropagation()};this.setChildElRef=t=>{this.childEl=t};this.setInputValue=t=>{if(!this.childEl){return}this.childEl.value=t};this.setPreviousEmittedValue=t=>{this.previousEmittedValue=t};this.setPreviousValue=t=>{this.previousValue=t};this.setValue=({committing:t=false,nativeEvent:i,origin:e,previousValue:s,value:n})=>{this.setPreviousValue(s??this.value);this.previousValueOrigin=e;this.userChangedValue=e==="user"&&n!==this.value;this.value=n;if(e==="direct"){this.setInputValue(n);this.setPreviousEmittedValue(n)}if(i){const i=this.calciteInputTextInput.emit();if(i.defaultPrevented){this.value=this.previousValue}else if(t){this.emitChangeIfUserModified()}}};this.alignment="start";this.autofocus=undefined;this.clearable=false;this.disabled=false;this.enterKeyHint=undefined;this.form=undefined;this.icon=undefined;this.iconFlipRtl=false;this.inputMode=undefined;this.label=undefined;this.loading=false;this.maxLength=undefined;this.minLength=undefined;this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.name=undefined;this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.autocomplete=undefined;this.pattern=undefined;this.suffixText=undefined;this.editingEnabled=false;this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined;this.slottedActionElDisabledInternally=false}handleGlobalAttributesChanged(){e(this)}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(t,i){if(!this.userChangedValue){this.setValue({origin:"direct",previousValue:i,value:!t?"":t})}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=l({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){E(this,this.effectiveLocale)}connectedCallback(){f(this);j(this);W(this);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}v(this);d(this);this.mutationObserver?.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener(h,this.onHiddenFormInputInput)}disconnectedCallback(){b(this);x(this);u(this);C(this);M(this);this.mutationObserver?.disconnect();this.el.removeEventListener(h,this.onHiddenFormInputInput)}async componentWillLoad(){y(this);this.requestedIcon=l({},this.icon,"text");await D(this);this.setPreviousEmittedValue(this.value);this.setPreviousValue(this.value)}componentDidLoad(){w(this)}componentDidRender(){m(this)}async setFocus(){await z(this);this.childEl?.focus()}async selectText(){this.childEl?.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(t){F("text",this,t)}setDisabledAction(){const t=a(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}render(){const t=r(this.el);const i=s("div",{key:"312dd68091ac57f7846a3e52fc9d800c7fced5b3",class:G.loader},s("calcite-progress",{key:"4debe7e7c6a87be5065019e831c65bc227a557a7",label:this.messages.loading,type:"indeterminate"}));const e=s("button",{key:"fbfd74e5d928be2208ee053208f07d17bf55b4e7","aria-label":this.messages.clear,class:G.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},s("calcite-icon",{key:"0abb236adde179134a48175ccc4bfadd483ab6bc",icon:"x",scale:A(this.scale)}));const o=s("calcite-icon",{key:"4ca36a556db3bb93ff474e21d863bc4a20380421",class:G.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:A(this.scale)});const a=s("div",{key:"066efbe771cc9ea9239f564c4ccd1996a6d8a365",class:G.prefix},this.prefixText);const l=s("div",{key:"9b34f658b7c2dae1f0ccd07be23d91987847aad6",class:G.suffix},this.suffixText);const c=s("input",{key:"198c91add28dd04f74be153edfa17be636126fb2","aria-label":k(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?true:null,class:{[G.editingEnabled]:this.editingEnabled,[G.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.el.enterKeyHint||this.el.getAttribute("enterkeyhint"),inputMode:this.el.inputMode||this.el.getAttribute("inputmode"),maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:this.required?true:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return s(n,{key:"50c546649db474a19c5fedd528e1b61f4eeb1b52",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},s(g,{key:"0157bca7fca6d8e1ea2cf14c1b046eef993945df",disabled:this.disabled},s("div",{key:"b582d6b2b539d4f1fb211d95de1102046b8f747e",class:{[G.inputWrapper]:true,[L.rtl]:t==="rtl"}},this.prefixText?a:null,s("div",{key:"c1b703c7e5942ce0bcd4afd0ca5ed5d9456280fb",class:G.wrapper},c,this.isClearable?e:null,this.requestedIcon?o:null,this.loading?i:null),s("div",{key:"6890177760f4e8da27ab1b64675c875aa47c9467",class:G.actionWrapper},s("slot",{key:"1c3f528c03e4ecc3fe4bde16437dd99a27026dce",name:H.action})),this.suffixText?l:null,s(p,{key:"ff90c44312b1a2d93b44273455bd07ce4946b802",component:this})),this.validationMessage&&this.status==="invalid"?s(T,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};q.style=V;export{q as calcite_input_text};
//# sourceMappingURL=p-ee428955.entry.js.map