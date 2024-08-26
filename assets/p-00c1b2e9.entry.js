/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as i,g as s}from"./p-5dcb8a70.js";import{f as a}from"./p-a7174092.js";import{c as n,u as o,d as r,I as c}from"./p-79519f9a.js";import{s as l,a as d,c as h}from"./p-9658e553.js";import{c as p,d as f}from"./p-4cc0e90d.js";import{u as m,s as b,c as u,d as g}from"./p-bad38bf3.js";import{D as y}from"./p-09a4f06c.js";import{d as v}from"./p-d436f417.js";import"./p-fbdfad6a.js";import"./p-180fb587.js";import"./p-8aebc84a.js";import"./p-d6cfcab9.js";import"./p-f429933e.js";const x={container:"container",searchIcon:"search-icon"};const j={search:"search",close:"x"};const k=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}";const w=k;const z=class{constructor(i){e(this,i);this.calciteFilterChange=t(this,"calciteFilterChange",6);this.filterDebounced=v(((e,t=false,i)=>this.items.length&&this.updateFiltered(a(this.items,e,this.filterProps),t,i)),y.filter);this.inputHandler=e=>{const t=e.target;this.value=t.value;this.filterDebounced(t.value,true)};this.keyDownHandler=e=>{if(e.defaultPrevented){return}if(e.key==="Escape"){this.clear();e.preventDefault()}if(e.key==="Enter"){e.preventDefault()}};this.clear=()=>{this.value="";this.filterDebounced("",true);this.setFocus()};this.items=[];this.disabled=false;this.filteredItems=[];this.filterProps=undefined;this.placeholder=undefined;this.scale="m";this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}watchItemsHandler(){this.filterDebounced(this.value)}filterPropsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(e){this.filterDebounced(e)}effectiveLocaleChange(){m(this,this.effectiveLocale)}async componentWillLoad(){l(this);if(this.items.length){this.updateFiltered(a(this.items,this.value,this.filterProps))}await b(this)}connectedCallback(){n(this);p(this);u(this)}componentDidRender(){o(this)}disconnectedCallback(){r(this);f(this);g(this);this.filterDebounced.cancel()}componentDidLoad(){d(this)}async filter(e=this.value){return new Promise((t=>{this.value=e;this.filterDebounced(e,false,t)}))}async setFocus(){await h(this);this.el?.focus()}updateFiltered(e,t=false,i){this.filteredItems=e;if(t){this.calciteFilterChange.emit()}i?.()}render(){const{disabled:e,scale:t}=this;return i(c,{key:"45e216d51b5b12ddc4295ade0be6dd451aeef851",disabled:e},i("div",{key:"72a041cd4c1a9afcc3e20dc48719024fa0bd91d8",class:x.container},i("label",{key:"94096613f5abe9d5334b47986556a7d8aaac4556"},i("calcite-input",{key:"cb61179b03fca1436146f80a96adc6177fb92a2e",clearable:true,disabled:e,icon:j.search,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:e=>{this.textInput=e},scale:t,type:"text",value:this.value}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{items:["watchItemsHandler"],filterProps:["filterPropsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};z.style=w;export{z as calcite_filter};
//# sourceMappingURL=p-00c1b2e9.entry.js.map