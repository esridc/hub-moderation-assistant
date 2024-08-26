/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,h as t,g as s}from"./p-5dcb8a70.js";import{c as i,d as a}from"./p-4cc0e90d.js";import{u as c,c as n,s as r,d as o}from"./p-bad38bf3.js";import{c as l}from"./p-f429933e.js";import{z as d}from"./p-180fb587.js";import"./p-d6cfcab9.js";import"./p-fbdfad6a.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";const f={scrim:"scrim",content:"content"};const h={s:72,l:480};const m=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";const p=m;const u=class{constructor(t){e(this,t);this.resizeObserver=l("resize",(()=>this.handleResize()));this.handleDefaultSlotChange=e=>{this.hasContent=d(e)};this.storeLoaderEl=e=>{this.loaderEl=e;this.handleResize()};this.loading=false;this.messages=undefined;this.messageOverrides=undefined;this.loaderScale=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.hasContent=false}onMessagesChange(){}effectiveLocaleChange(){c(this,this.effectiveLocale)}connectedCallback(){i(this);n(this);this.resizeObserver?.observe(this.el)}async componentWillLoad(){await r(this)}disconnectedCallback(){a(this);o(this);this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:s,messages:i}=this;return t("div",{key:"8a78d64b0efe56e14f45b20f762872bfa92e4b55",class:f.scrim},s?t("calcite-loader",{label:i.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"6602698fbbf1ff03c92ee28c8d59f7a023a84498",class:f.content,hidden:!e},t("slot",{key:"dff9d95e751fec33ea9e68c12dca129050689a61",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){if(e<h.s){return"s"}else if(e>=h.l){return"l"}else{return"m"}}handleResize(){const{loaderEl:e,el:t}=this;if(!e){return}this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0)}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};u.style=p;export{u as calcite_scrim};
//# sourceMappingURL=p-c30bab5c.entry.js.map