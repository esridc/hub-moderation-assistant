/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as s,H as a,g as i}from"./p-5dcb8a70.js";import{k as c,d as o,t as r}from"./p-180fb587.js";import{c as d,u as n,d as h,I as l}from"./p-79519f9a.js";import{a as p,s as b,b as f}from"./p-9658e553.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-fbdfad6a.js";const u=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-card-group-gap:var(--calcite-size-md);display:block}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-card-group-gap)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const m=u;const g=class{constructor(s){e(this,s);this.calciteCardGroupSelect=t(this,"calciteCardGroupSelect",6);this.items=[];this.udpateItemsOnSelectionModeChange=()=>{this.updateSlottedItems(this.slotRefEl);this.updateSelectedItems()};this.updateItemsOnSlotChange=e=>{this.updateSlottedItems(e.target);this.updateSelectedItems()};this.updateSlottedItems=e=>{this.items=e.assignedElements({flatten:true}).filter((e=>e?.matches("calcite-card")))};this.updateSelectedItems=()=>{this.items.forEach((e=>{e.selectionMode=this.selectionMode}));this.setSelectedItems(false)};this.setSelectedItems=(e,t)=>{if(t){this.items.forEach((e=>{const s=t===e;switch(this.selectionMode){case"multiple":if(s){e.selected=!e.selected}break;case"single":e.selected=s?!e.selected:false;break;case"single-persist":e.selected=!!s;break}}))}this.selectedItems=this.items.filter((e=>e.selected));if(e&&this.selectionMode!=="none"&&!this.disabled){this.calciteCardGroupSelect.emit()}};this.disabled=false;this.label=undefined;this.selectionMode="none";this.selectedItems=[]}onSelectionModeChange(){this.udpateItemsOnSelectionModeChange()}connectedCallback(){d(this)}componentDidRender(){n(this)}componentDidLoad(){p(this)}disconnectedCallback(){h(this)}async componentWillLoad(){b(this)}calciteInternalCardKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items.filter((e=>!e.disabled));switch(e.detail["key"]){case"ArrowRight":c(t,e.target,"next");break;case"ArrowLeft":c(t,e.target,"previous");break;case"Home":c(t,e.target,"first");break;case"End":c(t,e.target,"last");break}}}calciteCardSelectListener(e){if(e.composedPath().includes(this.el)&&!e.target.selectable){this.setSelectedItems(true,e.target)}}async setFocus(){await f(this);if(!this.disabled){o(this.items[0])}}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";return s(a,{key:"f7d72ac0d0c8b0cec9b1c5c048ed2a8ee304d9e2"},s(l,{key:"b477bbced684168f1e68c1fe0d8511a689653995",disabled:this.disabled},s("div",{key:"ce0aa841b96ad23886e109203a14ac2b0e54b948","aria-disabled":r(this.disabled),"aria-label":this.label,class:"container",role:e},s("slot",{key:"338c12be0a5a675daf911aad6049aff6319d3064",onSlotchange:this.updateItemsOnSlotChange,ref:e=>this.slotRefEl=e}))))}get el(){return i(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};g.style=m;export{g as calcite_card_group};
//# sourceMappingURL=p-7f6cd4d3.entry.js.map