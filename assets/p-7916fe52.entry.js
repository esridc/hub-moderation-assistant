/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as i,g as s,F as a}from"./p-5dcb8a70.js";import{c as n,d as o,u as c,I as l}from"./p-79519f9a.js";import{s as r,a as d,c as h}from"./p-9658e553.js";import{c as f}from"./p-f429933e.js";import{l as p}from"./p-7a4b6d8e.js";import{m,d as b,a as u,s as g,h as v,b as x,c as k,k as y,i as w,f as z,l as C,j,r as L,o as I,p as H,n as W,q as F,t as _,I as D,L as R,u as V,v as M,w as S,C as A,S as P}from"./p-a611863e.js";import{c as T,d as U}from"./p-df857db6.js";import{e as K,t as O}from"./p-180fb587.js";import{H as q,c as E}from"./p-bf8b7858.js";import{c as B,d as G}from"./p-4cc0e90d.js";import{u as J,c as N,s as Q,d as X}from"./p-bad38bf3.js";import"./p-fbdfad6a.js";import"./p-3c9a38fe.js";import"./p-f38ad59b.js";import"./p-d436f417.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-d6cfcab9.js";const Y=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-color-foreground-1);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}:host([hidden]){display:none}[hidden]{display:none}";const Z=Y;p.deprecated("component",{name:"pick-list",removalVersion:3,suggested:"list"});const $=class{constructor(i){e(this,i);this.calciteListChange=t(this,"calciteListChange",6);this.calciteListFilter=t(this,"calciteListFilter",6);this.lastSelectedItem=null;this.mutationObserver=f("mutation",m.bind(this));this.setFilterEl=e=>{this.filterEl=e};this.setFilteredItems=e=>{this.filteredItems=e};this.deselectRemovedItems=b.bind(this);this.deselectSiblingItems=u.bind(this);this.selectSiblings=g.bind(this);this.handleFilter=v.bind(this);this.handleFilterEvent=x.bind(this);this.getItemData=k.bind(this);this.keyDownHandler=y.bind(this);this.disabled=false;this.filteredItems=[];this.filteredData=[];this.filterEnabled=false;this.filterPlaceholder=undefined;this.filterText=undefined;this.headingLevel=undefined;this.loading=false;this.multiple=false;this.selectionFollowsFocus=false;this.selectedValues=new Map;this.dataForFilter=[]}connectedCallback(){w.call(this);z.call(this);n(this)}disconnectedCallback(){C.call(this);o(this)}componentWillLoad(){r(this)}componentDidLoad(){d(this);j.call(this)}componentDidRender(){c(this)}calciteListItemRemoveHandler(e){L.call(this,e)}calciteListItemChangeHandler(e){I.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation();this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){H.call(this,e);e.stopPropagation()}calciteListFocusOutHandler(e){W.call(this,e)}setUpItems(){F.call(this,"calcite-pick-list-item")}setUpFilter(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}}async getSelectedItems(){return this.selectedValues}async setFocus(e){await h(this);return _.call(this,e)}getIconType(){return this.multiple?D.square:D.circle}render(){return i(R,{key:"870f354277bb55abb2c867ae250d85a8569505ec",onKeyDown:this.keyDownHandler,props:this})}get el(){return s(this)}};$.style=Z;const ee=":host{margin-block-end:0.25rem;box-sizing:border-box;display:block;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host *{box-sizing:border-box}:host(:last-child){margin-block-end:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.heading{margin-block:0.5rem;margin-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-color-text-3)}.container--indented{margin-inline-start:1.5rem}:host([hidden]){display:none}[hidden]{display:none}";const te=ee;p.deprecated("component",{name:"pick-list-group",removalVersion:3,suggested:"list-item-group"});const ie=class{constructor(t){e(this,t);this.groupTitle=undefined;this.headingLevel=undefined}connectedCallback(){T(this)}disconnectedCallback(){U(this)}render(){const{el:e,groupTitle:t,headingLevel:s}=this;const n=K(e,V.parentItem)!==null;const o={[M.container]:true,[M.indented]:n};const c=t;const l=e.closest("calcite-pick-list")?.headingLevel;const r=l?E(l+1):null;const d=s||r;return i(a,{key:"e3448a6990c7190dbadb73660a1fa56d810e5a1f"},c?i(q,{class:M.heading,level:d},c):null,i("slot",{key:"e09a4b57d513cbff0da4db7c3c88c64a40429018",name:V.parentItem}),i("section",{key:"c52a6648a6c0e8d27e1200ecd72189da40a03868",class:o},i("slot",{key:"8860cde839658f69a3cd76b990ac1b3f6b74c064"})))}get el(){return s(this)}};ie.style=te;const se='@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-1);--tw-shadow:0 1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-color-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-color-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-color-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-color-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot::before{opacity:0;content:"•"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot::before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}';const ae=se;p.deprecated("component",{name:"pick-list-item",removalVersion:3,suggested:"list-item"});const ne=class{constructor(i){e(this,i);this.calciteListItemChange=t(this,"calciteListItemChange",6);this.calciteListItemRemove=t(this,"calciteListItemRemove",7);this.calciteInternalListItemPropsChange=t(this,"calciteInternalListItemPropsChange",6);this.calciteInternalListItemValueChange=t(this,"calciteInternalListItemValueChange",6);this.pickListClickHandler=e=>{if(this.disabled||this.deselectDisabled&&this.selected||this.nonInteractive){return}this.shiftPressed=e.shiftKey;this.selected=!this.selected};this.pickListKeyDownHandler=e=>{if(e.key===" "){e.preventDefault();if(this.deselectDisabled&&this.selected||this.nonInteractive){return}this.selected=!this.selected}};this.removeClickHandler=()=>{this.calciteListItemRemove.emit()};this.description=undefined;this.disabled=false;this.deselectDisabled=false;this.nonInteractive=false;this.icon=null;this.iconFlipRtl=false;this.label=undefined;this.messageOverrides=undefined;this.messages=undefined;this.metadata=undefined;this.removable=false;this.selected=false;this.value=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}descriptionWatchHandler(){this.calciteInternalListItemPropsChange.emit()}labelWatchHandler(){this.calciteInternalListItemPropsChange.emit()}onMessagesChange(){}metadataWatchHandler(){this.calciteInternalListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed});this.shiftPressed=false}valueWatchHandler(e,t){this.calciteInternalListItemValueChange.emit({oldValue:t,newValue:e})}effectiveLocaleChange(){J(this,this.effectiveLocale)}connectedCallback(){n(this);B(this);N(this);T(this)}async componentWillLoad(){await Q(this);r(this)}componentDidLoad(){d(this)}disconnectedCallback(){o(this);G(this);X(this);U(this)}componentDidRender(){c(this)}async toggleSelected(e){this.selected=typeof e==="boolean"?e:!this.selected}async setFocus(){await h(this);this.focusEl?.focus()}renderIcon(){const{icon:e,iconFlipRtl:t}=this;if(!e){return null}return i("span",{class:{[A.icon]:true,[A.iconDot]:e===D.circle},onClick:this.pickListClickHandler},e===D.square?i("calcite-icon",{flipRtl:t,icon:S.checked,scale:"s"}):null)}renderRemoveAction(){return this.removable?i("calcite-action",{class:A.remove,icon:S.remove,onClick:this.removeClickHandler,slot:P.actionsEnd,text:this.messages.remove}):null}renderActionsStart(){const{el:e}=this;const t=K(e,P.actionsStart);return t?i("div",{class:{[A.actions]:true,[A.actionsStart]:true}},i("slot",{name:P.actionsStart})):null}renderActionsEnd(){const{el:e,removable:t}=this;const s=K(e,P.actionsEnd);return s||t?i("div",{class:{[A.actions]:true,[A.actionsEnd]:true}},i("slot",{name:P.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:e,label:t}=this;return i(l,{key:"790f70783bc00cd328c001fb08f131484d62d0d4",disabled:this.disabled},this.renderIcon(),this.renderActionsStart(),i("label",{key:"3454f77692d7d8363f185a378de7cbf0065c18e6","aria-label":t,class:A.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:e=>this.focusEl=e,tabIndex:0},i("div",{key:"dc87953b113ac4b54f151cd9e828927ee11fcabe","aria-checked":O(this.selected),class:A.textContainer,role:"menuitemcheckbox"},i("span",{key:"9d5c1ab8bf273680e74b85169d66e3702032dd88",class:A.title},t),e?i("span",{class:A.description},e):null)),this.renderActionsEnd())}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],defaultMessages:["onMessagesChange"],messageOverrides:["onMessagesChange"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"],effectiveLocale:["effectiveLocaleChange"]}}};ne.style=ae;export{$ as calcite_pick_list,ie as calcite_pick_list_group,ne as calcite_pick_list_item};
//# sourceMappingURL=p-7916fe52.entry.js.map