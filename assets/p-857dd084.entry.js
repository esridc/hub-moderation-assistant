/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as t,c as e,h as i,g as s,H as n}from"./p-5dcb8a70.js";import{b as a,t as o,G as c,g as l}from"./p-180fb587.js";import{c as r,u as d,d as h,I as f}from"./p-79519f9a.js";import{c as u}from"./p-f429933e.js";import{i as b}from"./p-fbdfad6a.js";import{d as p,c as g}from"./p-876ed35e.js";import{S as m}from"./p-eb4fde2c.js";import{s as v,a as y,c as C}from"./p-9658e553.js";import{c as k,s as x,d as I,u as S}from"./p-bad38bf3.js";import{c as L,d as w,n as E}from"./p-4cc0e90d.js";import{d as D}from"./p-d436f417.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-d6cfcab9.js";const A={wrapper:"wrapper",wrapperBordered:"wrapper--bordered",container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerOpen:"nested-container--open",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container",close:"close"};const z={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"};const F=0;const M={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"};const P="data-test-active";const j="calcite-list";const T="calcite-list-item-group";const H="calcite-list-item";function O(t){return Array.from(t.assignedElements({flatten:true}).filter((t=>t.matches(j))))}function R(t){const e=t.assignedElements({flatten:true});const i=e.filter((t=>t?.matches(T))).map((t=>Array.from(t.querySelectorAll(H)))).reduce(((t,e)=>[...t,...e]),[]);const s=e.filter((t=>t?.matches(H)));const n=e.filter((t=>t?.matches(j))).map((t=>Array.from(t.querySelectorAll(H)))).reduce(((t,e)=>[...t,...e]),[]);return[...n,...i,...s]}function B(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1;e.setSize=t.length}))}function G(t,e=false){if(!b()){return 0}const i=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";const s=document.evaluate(i,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return s.snapshotLength}const _={container:"container",table:"table",scrim:"scrim",stack:"stack",tableContainer:"table-container",sticky:"sticky-pos",assistiveText:"assistive-text"};const N=0;const U={filterNoResults:"filter-no-results",filterActionsStart:"filter-actions-start",filterActionsEnd:"filter-actions-end"};const W=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-color-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";const q=W;const K="calcite-list-item";const X="calcite-list-item-group, calcite-list-item";const J=class{constructor(i){t(this,i);this.calciteListChange=e(this,"calciteListChange",6);this.calciteListDragEnd=e(this,"calciteListDragEnd",6);this.calciteListDragStart=e(this,"calciteListDragStart",6);this.calciteListFilter=e(this,"calciteListFilter",6);this.calciteListOrderChange=e(this,"calciteListOrderChange",6);this.calciteInternalListDefaultSlotChange=e(this,"calciteInternalListDefaultSlotChange",6);this.dragSelector=K;this.focusableItems=[];this.handleSelector="calcite-handle";this.listItems=[];this.mutationObserver=u("mutation",(()=>this.updateListItems()));this.visibleItems=[];this.handleDefaultSlotChange=t=>{B(R(t.target));if(this.parentListEl){this.calciteInternalListDefaultSlotChange.emit()}};this.handleFilterActionsStartSlotChange=t=>{this.hasFilterActionsStart=a(t)};this.handleFilterActionsEndSlotChange=t=>{this.hasFilterActionsEnd=a(t)};this.handleFilterNoResultsSlotChange=t=>{this.hasFilterNoResults=a(t)};this.setActiveListItem=()=>{const{focusableItems:t}=this;if(!t.some((t=>t.active))){if(t[0]){t[0].active=true}}};this.updateSelectedItems=(t=false)=>{this.selectedItems=this.visibleItems.filter((t=>t.selected));if(t){this.calciteListChange.emit()}};this.borderItems=()=>{const t=this.visibleItems.filter((t=>!t.filterHidden&&this.allParentListItemsOpen(t)));t.forEach((e=>e.bordered=e!==t[t.length-1]))};this.updateFilteredItems=(t=false)=>{const{visibleItems:e,filteredData:i,filterText:s}=this;const n=i.map((t=>t.value));const a=e?.filter((t=>e.every((e=>e===t||!t.contains(e)))));const o=e.filter((t=>!s||n.includes(t.value)))||[];const c=new WeakSet;a.forEach((t=>this.filterElements({el:t,filteredItems:o,visibleParents:c})));this.filteredItems=o;if(t){this.calciteListFilter.emit()}};this.setFilterEl=t=>{this.filterEl=t;this.performFilter()};this.handleFilterChange=t=>{t.stopPropagation();const{value:e}=t.currentTarget;this.filterText=e;this.updateFilteredData(true)};this.getItemData=()=>this.listItems.map((t=>({label:t.label,description:t.description,metadata:t.metadata,value:t.value})));this.updateListItems=D(((t=false)=>{const{selectionAppearance:e,selectionMode:i,dragEnabled:s,el:n}=this;const a=Array.from(this.el.querySelectorAll(K));a.forEach((t=>{t.selectionAppearance=e;t.selectionMode=i;if(t.closest("calcite-list")===n){t.dragHandle=s}}));if(this.parentListEl){this.setUpSorting();return}this.listItems=a;if(this.filterEnabled){this.dataForFilter=this.getItemData();if(this.filterEl){this.filterEl.items=this.dataForFilter}}this.visibleItems=this.listItems.filter((t=>!t.closed&&!t.hidden));this.updateFilteredItems(t);this.borderItems();this.focusableItems=this.filteredItems.filter((t=>!t.disabled));this.setActiveListItem();this.updateSelectedItems(t);this.setUpSorting()}),N);this.focusRow=t=>{const{focusableItems:e}=this;if(!t){return}e.forEach((e=>e.active=e===t));t.setFocus()};this.isNavigable=t=>{const e=t.parentElement?.closest(K);if(!e){return true}return e.open&&this.isNavigable(e)};this.handleListKeydown=t=>{if(t.defaultPrevented||!!this.parentListEl){return}const{key:e}=t;const i=this.focusableItems.filter((t=>this.isNavigable(t)));const s=i.findIndex((t=>t.active));if(e==="ArrowDown"){t.preventDefault();const e=t.target===this.filterEl?0:s+1;if(i[e]){this.focusRow(i[e])}}else if(e==="ArrowUp"){t.preventDefault();if(s===0&&this.filterEnabled){this.filterEl?.setFocus();return}const e=s-1;if(i[e]){this.focusRow(i[e])}}else if(e==="Home"){t.preventDefault();const e=i[0];if(e){this.focusRow(e)}}else if(e==="End"){t.preventDefault();const e=i[i.length-1];if(e){this.focusRow(e)}}};this.disabled=false;this.canPull=undefined;this.canPut=undefined;this.dragEnabled=false;this.group=undefined;this.filterEnabled=false;this.filteredItems=[];this.filteredData=[];this.filterPlaceholder=undefined;this.filterText=undefined;this.label=undefined;this.loading=false;this.filterProps=undefined;this.messageOverrides=undefined;this.messages=undefined;this.numberingSystem=undefined;this.openable=false;this.selectedItems=[];this.selectionMode="none";this.selectionAppearance="icon";this.effectiveLocale="";this.defaultMessages=undefined;this.assistiveText=undefined;this.dataForFilter=[];this.hasFilterActionsEnd=false;this.hasFilterActionsStart=false;this.hasFilterNoResults=false}async handleFilterTextChange(){this.performFilter()}async handlefilterPropsChange(){this.performFilter()}onMessagesChange(){}handleListItemChange(){this.updateListItems()}handleCalciteListItemToggle(t){if(this.parentListEl){return}t.stopPropagation();this.borderItems()}handleCalciteInternalFocusPreviousItem(t){if(this.parentListEl){return}t.stopPropagation();const{focusableItems:e}=this;const i=e.findIndex((t=>t.active));const s=i-1;if(e[s]){this.focusRow(e[s])}}handleCalciteInternalListItemActive(t){if(this.parentListEl){return}t.stopPropagation();const e=t.target;const{listItems:i}=this;i.forEach((t=>{t.active=t===e}))}handleCalciteListItemSelect(){if(this.parentListEl){return}this.updateSelectedItems(true)}handleCalciteInternalAssistiveTextChange(t){this.assistiveText=t.detail.message;t.stopPropagation()}handleCalciteHandleNudge(t){if(this.parentListEl){return}this.handleNudgeEvent(t)}handleCalciteInternalListItemSelect(t){if(this.parentListEl){return}t.stopPropagation();const e=t.target;const{listItems:i,selectionMode:s}=this;if(e.selected&&(s==="single"||s==="single-persist")){i.forEach((t=>t.selected=t===e))}this.updateSelectedItems()}handleCalciteInternalListItemSelectMultiple(t){if(this.parentListEl){return}t.stopPropagation();const{target:e,detail:i}=t;const{focusableItems:s,lastSelectedInfo:n}=this;const a=e;if(i.selectMultiple&&!!n){const t=s.indexOf(a);const e=s.indexOf(n.selectedItem);const i=Math.min(e,t);const o=Math.max(e,t);s.slice(i,o+1).forEach((t=>t.selected=n.selected))}else{this.lastSelectedInfo={selectedItem:a,selected:a.selected}}}handleCalciteInternalListItemChange(t){if(this.parentListEl){return}t.stopPropagation();this.updateListItems()}handleCalciteInternalListItemGroupDefaultSlotChange(t){t.stopPropagation()}connectedCallback(){L(this);k(this);this.connectObserver();this.updateListItems();this.setUpSorting();r(this);this.setParentList()}async componentWillLoad(){v(this);await x(this)}componentDidRender(){d(this)}componentDidLoad(){y(this)}disconnectedCallback(){this.disconnectObserver();p(this);h(this);w(this);I(this)}effectiveLocaleChange(){S(this,this.effectiveLocale)}async setFocus(){await C(this);if(this.filterEnabled){return this.filterEl?.setFocus()}return this.focusableItems.find((t=>t.active))?.setFocus()}render(){const{loading:t,label:e,disabled:s,dataForFilter:n,filterEnabled:a,filterPlaceholder:c,filterText:l,filteredItems:r,hasFilterActionsStart:d,hasFilterActionsEnd:h,hasFilterNoResults:u,filterProps:b}=this;return i(f,{key:"835ad7cd3b23dafd88ecb2b203da9cb0ed5c608a",disabled:this.disabled},i("div",{key:"d3a24de65bb88f763d5ea1ac28366ed17fa5b1aa",class:_.container},this.dragEnabled?i("span",{"aria-live":"assertive",class:_.assistiveText},this.assistiveText):null,this.renderItemAriaLive(),t?i("calcite-scrim",{class:_.scrim,loading:t}):null,i("table",{key:"dfeccafe1a193d11e322834ff2c192fd451695eb","aria-busy":o(t),"aria-label":e||"",class:_.table,onKeyDown:this.handleListKeydown,role:"treegrid"},a||d||h?i("thead",{class:_.sticky},i("tr",null,i("th",{colSpan:F},i("calcite-stack",{class:_.stack},i("slot",{name:U.filterActionsStart,onSlotchange:this.handleFilterActionsStartSlotChange,slot:m.actionsStart}),i("calcite-filter",{"aria-label":c,disabled:s,filterProps:b,items:n,onCalciteFilterChange:this.handleFilterChange,placeholder:c,ref:this.setFilterEl,value:l}),i("slot",{name:U.filterActionsEnd,onSlotchange:this.handleFilterActionsEndSlotChange,slot:m.actionsEnd}))))):null,i("tbody",{key:"0c7eac45016250148863ffcb8159944dae887c64",class:_.tableContainer},i("slot",{key:"64c8f6a0ffa7a2179fbb0289bf79f3b5c76b55fc",onSlotchange:this.handleDefaultSlotChange}))),i("div",{key:"91fd4c27deb58481fb0be8117c13f93efc9abb16","aria-live":"polite","data-test-id":"no-results-container",hidden:!(u&&a&&l&&!r.length)},i("slot",{key:"4090a37ff3323e58bdbfe98c773338b03696bbfc",name:U.filterNoResults,onSlotchange:this.handleFilterNoResultsSlotChange}))))}renderItemAriaLive(){const{messages:t,filteredItems:e,parentListEl:s,effectiveLocale:n,numberingSystem:a,filterEnabled:o,filterText:c,filteredData:l}=this;E.numberFormatOptions={locale:n,numberingSystem:a};return!s?i("div",{"aria-live":"polite",class:_.assistiveText},o&&c&&l?.length?i("div",{key:"aria-filter-enabled"},t.filterEnabled):null,i("div",{key:"aria-item-count"},t.total.replace("{count}",E.localize(e.length.toString()))),e.length?i("ol",{key:"aria-item-list"},e.map((t=>i("li",null,t.label)))):null):null}connectObserver(){this.mutationObserver?.observe(this.el,{childList:true,subtree:true})}disconnectObserver(){this.mutationObserver?.disconnect()}setUpSorting(){const{dragEnabled:t}=this;if(!t){return}g(this)}onGlobalDragStart(){this.disconnectObserver()}onGlobalDragEnd(){this.connectObserver()}onDragEnd(t){this.calciteListDragEnd.emit(t)}onDragStart(t){this.calciteListDragStart.emit(t)}onDragSort(t){this.setParentList();this.updateListItems();this.calciteListOrderChange.emit(t)}setParentList(){this.parentListEl=this.el.parentElement?.closest("calcite-list")}filterElements({el:t,filteredItems:e,visibleParents:i}){const s=!i.has(t)&&!e.includes(t);t.filterHidden=s;const n=t.parentElement.closest(X);if(!n){return}if(!s){i.add(n)}this.filterElements({el:n,filteredItems:e,visibleParents:i})}allParentListItemsOpen(t){const e=t.parentElement?.closest(K);if(!e){return true}else if(!e.open){return false}return this.allParentListItemsOpen(e)}updateFilteredData(t=false){const{filterEl:e}=this;if(!e){return}if(e.filteredItems){this.filteredData=e.filteredItems}this.updateListItems(t)}async performFilter(){const{filterEl:t,filterText:e,filterProps:i}=this;if(!t){return}t.value=e;t.filterProps=i;await t.filter(e);this.updateFilteredData()}handleNudgeEvent(t){const{handleSelector:e,dragSelector:i}=this;const{direction:s}=t.detail;const n=t.composedPath();const a=n.find((t=>t?.tagName&&t.matches(e)));const o=n.find((t=>t?.tagName&&t.matches(i)));const c=o?.parentElement;if(!c){return}const{filteredItems:l}=this;const r=l.filter((t=>t.parentElement===c));const d=r.length-1;const h=r.indexOf(o);let f;if(s==="up"){f=h===0?d:h-1}else{f=h===d?0:h+1}this.disconnectObserver();a.blurUnselectDisabled=true;const u=s==="up"&&f!==d||s==="down"&&f===0?r[f]:r[f].nextSibling;c.insertBefore(o,u);this.updateListItems();this.connectObserver();this.calciteListOrderChange.emit({dragEl:o,fromEl:c,toEl:c,newIndex:f,oldIndex:h});a.setFocus().then((()=>a.blurUnselectDisabled=false))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{filterText:["handleFilterTextChange"],filterProps:["handlefilterPropsChange"],messageOverrides:["onMessagesChange"],filterEnabled:["handleListItemChange"],group:["handleListItemChange"],dragEnabled:["handleListItemChange"],selectionMode:["handleListItemChange"],selectionAppearance:["handleListItemChange"],effectiveLocale:["effectiveLocaleChange"]}}};J.style=q;const Q=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;padding-block:0px;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}';const V=Q;const Y=new Map;const Z="calcite-list";const $=class{constructor(i){t(this,i);this.calciteListItemSelect=e(this,"calciteListItemSelect",6);this.calciteListItemClose=e(this,"calciteListItemClose",6);this.calciteListItemDragHandleChange=e(this,"calciteListItemDragHandleChange",6);this.calciteListItemToggle=e(this,"calciteListItemToggle",6);this.calciteInternalListItemSelect=e(this,"calciteInternalListItemSelect",6);this.calciteInternalListItemSelectMultiple=e(this,"calciteInternalListItemSelectMultiple",6);this.calciteInternalListItemActive=e(this,"calciteInternalListItemActive",6);this.calciteInternalFocusPreviousItem=e(this,"calciteInternalFocusPreviousItem",6);this.calciteInternalListItemChange=e(this,"calciteInternalListItemChange",6);this.calciteInternalListItemToggle=e(this,"calciteInternalListItemToggle",6);this.dragHandleSelectedChangeHandler=t=>{this.dragSelected=t.target.selected;this.calciteListItemDragHandleChange.emit();t.stopPropagation()};this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()};this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)};this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)};this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)};this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)};this.handleCloseClick=()=>{this.closed=true;this.calciteListItemClose.emit()};this.handleContentSlotChange=t=>{this.hasCustomContent=a(t)};this.handleActionsStartSlotChange=t=>{this.hasActionsStart=a(t)};this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=a(t)};this.handleContentStartSlotChange=t=>{this.hasContentStart=a(t)};this.handleContentEndSlotChange=t=>{this.hasContentEnd=a(t)};this.handleContentBottomSlotChange=t=>{this.hasContentBottom=a(t)};this.handleDefaultSlotChange=t=>{this.handleOpenableChange(t.target)};this.handleToggleClick=()=>{this.toggle()};this.toggle=(t=!this.open)=>{this.open=t;this.calciteListItemToggle.emit()};this.handleItemClick=t=>{if(t.defaultPrevented){return}this.toggleSelected(t.shiftKey)};this.toggleSelected=t=>{const{selectionMode:e,selected:i}=this;if(this.disabled){return}if(e==="multiple"||e==="single"){this.selected=!i}else if(e==="single-persist"){this.selected=true}this.calciteInternalListItemSelectMultiple.emit({selectMultiple:t&&e==="multiple"});this.calciteListItemSelect.emit()};this.handleItemKeyDown=t=>{if(t.defaultPrevented){return}const{key:e}=t;const i=t.composedPath();const{containerEl:s,actionsStartEl:n,actionsEndEl:a,open:o,openable:c}=this;const l=this.getGridCells();const r=l.findIndex((t=>i.includes(t)));if(e==="Enter"&&!i.includes(n)&&!i.includes(a)){t.preventDefault();this.toggleSelected(t.shiftKey)}else if(e==="ArrowRight"){t.preventDefault();const e=r+1;if(r===-1){if(!o&&c){this.toggle(true);this.focusCell(null)}else if(l[0]){this.focusCell(l[0])}}else if(l[r]&&l[e]){this.focusCell(l[e])}}else if(e==="ArrowLeft"){t.preventDefault();const e=r-1;if(r===-1){this.focusCell(null);if(o&&c){this.toggle(false)}else{this.calciteInternalFocusPreviousItem.emit()}}else if(r===0){this.focusCell(null);s.focus()}else if(l[r]&&l[e]){this.focusCell(l[e])}}};this.focusCellNull=()=>{this.focusCell(null)};this.handleCellFocusIn=t=>{this.setFocusCell(t,c(t),true)};this.setFocusCell=(t,e,i)=>{const{parentListEl:s}=this;if(i){Y.set(s,null)}const n=this.getGridCells();n.forEach((t=>{t.tabIndex=-1;t.removeAttribute(P)}));if(!t){return}t.tabIndex=t===e?0:-1;t.setAttribute(P,"");if(i){Y.set(s,n.indexOf(t))}};this.focusCell=(t,e=true)=>{const i=c(t);this.setFocusCell(t,i,e);i?.focus()};this.active=false;this.bordered=false;this.closable=false;this.closed=false;this.description=undefined;this.disabled=false;this.dragDisabled=false;this.dragHandle=false;this.dragSelected=false;this.filterHidden=false;this.label=undefined;this.metadata=undefined;this.open=false;this.setSize=null;this.setPosition=null;this.selected=false;this.value=undefined;this.selectionMode=null;this.selectionAppearance=null;this.messageOverrides=undefined;this.messages=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.level=null;this.parentListEl=undefined;this.openable=false;this.hasActionsStart=false;this.hasActionsEnd=false;this.hasCustomContent=false;this.hasContentStart=false;this.hasContentEnd=false;this.hasContentBottom=false}activeHandler(t){if(!t){this.focusCell(null,false)}}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(t){t.stopPropagation();this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){S(this,this.effectiveLocale)}connectedCallback(){r(this);L(this);k(this);const{el:t}=this;this.parentListEl=t.closest(Z);this.level=G(t)+1;this.setSelectionDefaults()}async componentWillLoad(){v(this);await x(this)}componentDidLoad(){y(this)}componentDidRender(){d(this)}disconnectedCallback(){h(this);w(this);I(this)}async setFocus(){await C(this);const{containerEl:t,parentListEl:e}=this;const i=Y.get(e);if(typeof i==="number"){const e=this.getGridCells();if(e[i]){this.focusCell(e[i])}else{t?.focus()}return}t?.focus()}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:s}=this;if(e==="none"||s==="border"){return null}return i("td",{class:{[A.selectionContainer]:true,[A.selectionContainerSingle]:e==="single"||e==="single-persist"},key:"selection-container",onClick:this.handleItemClick},i("calcite-icon",{icon:t?e==="multiple"?M.selectedMultiple:M.selectedSingle:e==="multiple"?M.unselectedMultiple:M.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:t,dragHandle:e,dragSelected:s,dragDisabled:n,setPosition:a,setSize:o}=this;return e?i("td",{"aria-label":t,class:A.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,ref:t=>this.handleGridEl=t,role:"gridcell"},i("calcite-handle",{disabled:n,label:t,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:s,setPosition:a,setSize:o})):null}renderOpen(){const{el:t,open:e,openable:s,messages:n}=this;const a=l(t);const o=e?M.open:a==="rtl"?M.closedRTL:M.closedLTR;const c=e?n.collapse:n.expand;return s?i("td",{class:A.openContainer,key:"open-container",onClick:this.handleToggleClick,title:c},i("calcite-icon",{icon:o,key:o,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return i("td",{"aria-label":t,class:A.actionsStart,hidden:!e,key:"actions-start-container",onFocusin:this.focusCellActionsStart,ref:t=>this.actionsStartEl=t,role:"gridcell"},i("slot",{name:z.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e,closable:s,messages:n}=this;return i("td",{"aria-label":t,class:A.actionsEnd,hidden:!(e||s),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,ref:t=>this.actionsEndEl=t,role:"gridcell"},i("slot",{name:z.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),s?i("calcite-action",{appearance:"transparent",class:A.close,icon:M.close,key:"close-action",label:n.close,onClick:this.handleCloseClick,text:n.close}):null)}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:A.contentStart,hidden:!t},i("slot",{name:z.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return i("div",{class:A.customContent,hidden:!t},i("slot",{name:z.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:A.contentEnd,hidden:!t},i("slot",{name:z.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:t}=this;return i("div",{class:A.contentBottom,hidden:!t},i("slot",{name:z.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return i("div",{class:{[A.nestedContainer]:true,[A.nestedContainerOpen]:this.openable&&this.open}},i("slot",{onSlotchange:this.handleDefaultSlotChange,ref:t=>this.defaultSlotEl=t}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:s}=this;return!s&&(!!t||!!e)?i("div",{class:A.content,key:"content"},t?i("div",{class:A.label,key:"label"},t):null,e?i("div",{class:A.description,key:"description"},e):null):null}renderContentContainer(){const{description:t,label:e,selectionMode:s,hasCustomContent:n}=this;const a=n||!!e||!!t;const o=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":e,class:{[A.contentContainer]:true,[A.contentContainerSelectable]:s!=="none",[A.contentContainerHasCenterContent]:a},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,ref:t=>this.contentEl=t,role:"gridcell"},o)}render(){const{openable:t,open:e,level:s,setPosition:a,setSize:c,active:l,label:r,selected:d,selectionAppearance:h,selectionMode:u,closed:b,filterHidden:p,bordered:g,disabled:m}=this;const v=u!=="none"&&h==="border";const y=v&&d;const C=v&&!d;return i(n,{key:"2bdaf5ae9ff5694d5efd860a345a6f1a8c94e007"},i(f,{key:"dbd29243dfff02519b4f79c71cc9afbd203560ea",disabled:m},i("div",{key:"6348bef9e84621e00c8fe8c52877c87ec1c91726",class:{[A.wrapper]:true,[A.wrapperBordered]:g}},i("tr",{key:"9c93f58bda94e540e30655dd23d5c8b747e1dad4","aria-expanded":t?o(e):null,"aria-label":r,"aria-level":s,"aria-posinset":a,"aria-selected":o(d),"aria-setsize":c,class:{[A.container]:true,[A.containerHover]:true,[A.containerBorder]:v,[A.containerBorderSelected]:y,[A.containerBorderUnselected]:C},hidden:b||p,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,ref:t=>this.containerEl=t,role:"row",tabIndex:l?0:-1},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),this.renderDefaultContainer()))}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:i}=this;if(!t){return}if(!e){this.selectionMode=t.selectionMode}if(!i){this.selectionAppearance=t.selectionAppearance}}handleOpenableChange(t){if(!t){return}const e=R(t);const i=O(t);B(e);this.openable=!!e.length||!!i.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter((t=>t&&!t.hidden))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};$.style=V;const tt={container:"container",heading:"heading"};const et=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}";const it=et;const st=class{constructor(i){t(this,i);this.calciteInternalListItemGroupDefaultSlotChange=e(this,"calciteInternalListItemGroupDefaultSlotChange",6);this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()};this.disabled=false;this.filterHidden=false;this.heading=undefined}connectedCallback(){r(this)}componentDidRender(){d(this)}disconnectedCallback(){h(this)}render(){const{disabled:t,heading:e}=this;return i(n,{key:"47c22129d1b6879d3efbb1f98bdefe332e24bfdf"},i(f,{key:"07458b983fa815316690de5dffd4a74df1a5af59",disabled:t},i("tr",{key:"970298669c14dbf7a6b73bbcccfbd8b0416368dd",class:tt.container},i("td",{key:"84768e0299ec183bc51f08b80b90e4c1358c9d6d",class:tt.heading,colSpan:F},e)),i("slot",{key:"ebdbc017ca136f67f5b456994ecc277625056232",onSlotchange:this.handleDefaultSlotChange})))}get el(){return s(this)}};st.style=it;export{J as calcite_list,$ as calcite_list_item,st as calcite_list_item_group};
//# sourceMappingURL=p-857dd084.entry.js.map