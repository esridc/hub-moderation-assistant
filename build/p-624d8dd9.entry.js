import{r as t,c as e,h as i,g as s,H as n}from"./p-3e4c4fe7.js";import{f as a}from"./p-79aa4e40.js";import{c as o,u as c,d as r,I as l}from"./p-529ac440.js";import{s as d,a as h,c as f}from"./p-099edbe6.js";import{c as p,d as u}from"./p-768b95e8.js";import{u as m,s as b,c as g,d as v}from"./p-0cf7c05c.js";import{D as y}from"./p-245d8a5c.js";import{d as x}from"./p-58421494.js";import{b as k}from"./p-416f7088.js";import{S as j,C as w}from"./p-f49c4ed6.js";import"./p-0c8f2359.js";import"./p-067fcff5.js";import"./p-ddd644c6.js";import"./p-fe89bef4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const C={container:"container",searchIcon:"search-icon"};const z={search:"search",close:"x"};const S=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}";const H=class{constructor(i){t(this,i);this.calciteFilterChange=e(this,"calciteFilterChange",6);this.filterDebounced=x(((t,e=false,i)=>this.items.length&&this.updateFiltered(a(this.items,t,this.filterProps),e,i)),y.filter);this.inputHandler=t=>{const e=t.target;this.value=e.value;this.filterDebounced(e.value,true)};this.keyDownHandler=t=>{if(t.defaultPrevented){return}if(t.key==="Escape"){this.clear();t.preventDefault()}if(t.key==="Enter"){t.preventDefault()}};this.clear=()=>{this.value="";this.filterDebounced("",true);this.setFocus()};this.items=[];this.disabled=false;this.filteredItems=[];this.filterProps=undefined;this.placeholder=undefined;this.scale="m";this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}watchItemsHandler(){this.filterDebounced(this.value)}filterPropsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(t){this.filterDebounced(t)}effectiveLocaleChange(){m(this,this.effectiveLocale)}async componentWillLoad(){d(this);if(this.items.length){this.updateFiltered(a(this.items,this.value,this.filterProps))}await b(this)}connectedCallback(){o(this);p(this);g(this)}componentDidRender(){c(this)}disconnectedCallback(){r(this);u(this);v(this);this.filterDebounced.cancel()}componentDidLoad(){h(this)}async filter(t=this.value){return new Promise((e=>{this.value=t;this.filterDebounced(t,false,e)}))}async setFocus(){var t;await f(this);(t=this.el)===null||t===void 0?void 0:t.focus()}updateFiltered(t,e=false,i){this.filteredItems=t;if(e){this.calciteFilterChange.emit()}i===null||i===void 0?void 0:i()}render(){const{disabled:t,scale:e}=this;return i(l,{key:"45e216d51b5b12ddc4295ade0be6dd451aeef851",disabled:t},i("div",{key:"72a041cd4c1a9afcc3e20dc48719024fa0bd91d8",class:C.container},i("label",{key:"94096613f5abe9d5334b47986556a7d8aaac4556"},i("calcite-input",{key:"cb61179b03fca1436146f80a96adc6177fb92a2e",clearable:true,disabled:t,icon:z.search,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:t=>{this.textInput=t},scale:e,type:"text",value:this.value}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{items:["watchItemsHandler"],filterProps:["filterPropsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=S;const D=":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}";const E=class{constructor(e){t(this,e);this.handleActionsStartSlotChange=t=>{this.hasActionsStart=k(t)};this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=k(t)};this.handleContentStartSlotChange=t=>{this.hasContentStart=k(t)};this.handleContentEndSlotChange=t=>{this.hasContentEnd=k(t)};this.disabled=false;this.hasActionsStart=false;this.hasActionsEnd=false;this.hasContentStart=false;this.hasContentEnd=false}renderActionsStart(){const{hasActionsStart:t}=this;return i("div",{class:w.actionsStart,hidden:!t,key:"actions-start-container"},i("slot",{name:j.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:t}=this;return i("div",{class:w.actionsEnd,hidden:!t,key:"actions-end-container"},i("slot",{name:j.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:w.contentStart,hidden:!t},i("slot",{name:j.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return i("div",{class:w.content},i("slot",null))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:w.contentEnd,hidden:!t},i("slot",{name:j.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return i(n,{key:"77243a78e7e5f05ef2fa43193460dc3b0a63afb8"},i("div",{key:"761521ceb58a4d186a1aff5889e29db18e5f5f4d",class:w.container},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}};E.style=D;export{H as calcite_filter,E as calcite_stack};
//# sourceMappingURL=p-624d8dd9.entry.js.map