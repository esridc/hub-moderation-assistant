/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as i,H as s,g as a}from"./p-5dcb8a70.js";import{s as n,a as c}from"./p-9658e553.js";import{u as l,s as o,c as r,d as h}from"./p-bad38bf3.js";import{n as d,c as f,d as b}from"./p-4cc0e90d.js";import{g as p}from"./p-fbdfad6a.js";import"./p-180fb587.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-d6cfcab9.js";import"./p-f429933e.js";const u={bordered:"bordered",striped:"striped",selectionArea:"selection-area",paginationArea:"pagination-area",container:"container",tableContainer:"table-container",tableFixed:"table--fixed",assistiveText:"assistive-text",selectionActions:"selection-actions"};const g={selectionActions:"selection-actions",tableHeader:"table-header",tableFooter:"table-footer"};const m=":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}";const v=m;const y=class{constructor(i){e(this,i);this.calciteTableSelect=t(this,"calciteTableSelect",6);this.calciteTablePageChange=t(this,"calciteTablePageChange",6);this.calciteInternalTableRowFocusChange=t(this,"calciteInternalTableRowFocusChange",6);this.getSlottedRows=e=>e?.assignedElements({flatten:true})?.filter((e=>e?.matches("calcite-table-row")));this.updateRows=()=>{const e=this.getSlottedRows(this.tableHeadSlotEl)||[];const t=this.getSlottedRows(this.tableBodySlotEl)||[];const i=this.getSlottedRows(this.tableFootSlotEl)||[];const s=[...e,...t,...i];e?.forEach((t=>{const i=e?.indexOf(t);t.rowType="head";t.positionSection=i;t.positionSectionLocalized=this.localizeNumber((i+1).toString())}));t?.forEach((e=>{const i=t?.indexOf(e);e.rowType="body";e.positionSection=i;e.positionSectionLocalized=this.localizeNumber((i+1).toString())}));i?.forEach((e=>{const t=i?.indexOf(e);e.rowType="foot";e.positionSection=t;e.positionSectionLocalized=this.localizeNumber((t+1).toString())}));s?.forEach((e=>{e.interactionMode=this.interactionMode;e.selectionMode=this.selectionMode;e.bodyRowCount=t?.length;e.positionAll=s?.indexOf(e);e.numbered=this.numbered;e.scale=this.scale;e.readCellContentsToAT=this.readCellContentsToAT;e.lastVisibleRow=s?.indexOf(e)===s.length-1}));const a=e[0]?.cellCount||e[0]?.querySelectorAll("calcite-table-header")?.length;this.colCount=a;this.headRows=e;this.bodyRows=t;this.footRows=i;this.allRows=s;this.updateSelectedItems();this.paginateRows()};this.handlePaginationChange=()=>{const e=this.paginationEl?.startItem;this.pageStartRow=e||1;this.calciteTablePageChange.emit();this.updateRows()};this.paginateRows=()=>{this.bodyRows?.forEach((e=>{const t=e.positionSection+1;const i=t>=this.pageStartRow&&t<this.pageStartRow+this.pageSize;e.hidden=this.pageSize>0&&!i&&!this.footRows.includes(e);e.lastVisibleRow=t===this.pageStartRow+this.pageSize-1||t===this.bodyRows.length}))};this.updateSelectedItems=e=>{const t=this.bodyRows?.filter((e=>e.selected));this.selectedItems=t;this.selectedCount=t?.length;this.allRows?.forEach((e=>{e.selectedRowCount=this.selectedCount;e.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)}));if(e){this.calciteTableSelect.emit()}};this.handleDeselectAllRows=()=>{this.bodyRows?.forEach((e=>{e.selected=false}));this.updateSelectedItems(true)};this.setSelectedItems=e=>{this.bodyRows?.forEach((t=>{if(e?.rowType==="head"){t.selected=this.selectedCount!==this.bodyRows?.length}else{t.selected=e===t?!t.selected:this.selectionMode==="multiple"?t.selected:false}}));this.updateSelectedItems(true)};this.localizeNumber=e=>{d.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};return d.localize(e.toString())};this.bordered=false;this.caption=undefined;this.groupSeparator=false;this.interactionMode="interactive";this.layout="auto";this.numbered=false;this.numberingSystem=undefined;this.pageSize=0;this.scale="m";this.selectionMode="none";this.selectionDisplay="top";this.zebra=false;this.striped=false;this.selectedItems=[];this.messages=undefined;this.messageOverrides=undefined;this.colCount=0;this.pageStartRow=1;this.selectedCount=0;this.readCellContentsToAT=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){l(this,this.effectiveLocale)}async componentWillLoad(){n(this);await o(this);this.readCellContentsToAT=/safari/i.test(p());this.updateRows()}componentDidLoad(){c(this)}connectedCallback(){f(this);r(this)}disconnectedCallback(){b(this);h(this)}calciteChipSelectListener(e){if(e.composedPath().includes(this.el)){this.setSelectedItems(e.target)}}calciteInternalTableRowFocusEvent(e){const t=e["detail"].cellPosition;const i=e["detail"].rowPosition;const s=e["detail"].destination;const a=e["detail"].lastCell;const n=this.bodyRows?.filter((e=>!e.hidden));const c=this.allRows?.filter((e=>!e.hidden));const l=this.headRows[this.headRows.length-1]?.positionAll;const o=n[0]?.positionAll;const r=n[n.length-1]?.positionAll;const h=this.footRows[0]?.positionAll;const d=c[c.length-1]?.positionAll;const f=s==="next"&&i===l;const b=s==="previous"&&i===h;const p=s==="previous"&&i===o;const u=s==="next"&&i===r;let g;switch(s){case"first":g=0;break;case"last":g=d;break;case"next":g=f?o:u?h:i+1;break;case"previous":g=b?r:p?l:i-1;break}const m=this.allRows?.find((e=>e.positionAll===g))?.cellCount;const v=t>m?m:t;if(g!==undefined){this.calciteInternalTableRowFocusChange.emit({cellPosition:v,rowPosition:g,destination:s,lastCell:a})}}renderSelectionArea(){const e=this.selectedItems?.filter((e=>e.hidden))?.length;const t=this.localizeNumber(e?.toString());const s=this.localizeNumber(this.selectedCount?.toString());const a=`${s} ${this.messages.selected}`;const n=`${t} ${this.messages.hiddenSelected}`;return i("div",{class:u.selectionArea},i("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:a},a),e>0&&i("calcite-chip",{icon:"hide-empty",scale:this.scale,title:n,value:n},t),this.selectedCount>0&&i("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:true,scale:this.scale,title:`${this.messages.clear} ${a} ${this.messages.row}`},this.messages.clear),i("div",{class:u.selectionActions},i("slot",{name:g.selectionActions})))}renderPaginationArea(){return i("div",{class:u.paginationArea},i("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,ref:e=>this.paginationEl=e,scale:this.scale,startItem:1,totalItems:this.bodyRows?.length}))}renderTHead(){return i("thead",null,i("slot",{name:g.tableHeader,onSlotchange:this.updateRows,ref:e=>this.tableHeadSlotEl=e}))}renderTBody(){return i("tbody",null,i("slot",{onSlotchange:this.updateRows,ref:e=>this.tableBodySlotEl=e}))}renderTFoot(){return i("tfoot",null,i("slot",{name:g.tableFooter,onSlotchange:this.updateRows,ref:e=>this.tableFootSlotEl=e}))}render(){return i(s,{key:"ed1c1bf45702d5d04e75267af35e2a69a61e1612"},i("div",{key:"9f0bbb435c09d96a3157707d4df841c5575a7fc4",class:u.container},this.selectionMode!=="none"&&this.selectionDisplay!=="none"&&this.renderSelectionArea(),i("div",{key:"69897e8661edff6cdf1d7d8e88ff3daa6bb74a56",class:{[u.bordered]:this.bordered,[u.striped]:this.striped||this.zebra,[u.tableContainer]:true}},i("table",{key:"deeea8be49db0e86489ddf471eff2e71e7d7c296","aria-colcount":this.colCount,"aria-multiselectable":this.selectionMode==="multiple","aria-rowcount":this.allRows?.length,class:{[u.tableFixed]:this.layout==="fixed"},role:this.interactionMode==="interactive"?"grid":"table"},i("caption",{key:"80b23568dbffa67a58eb2eef5c93dcd63be19153",class:u.assistiveText},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{groupSeparator:["handleNumberedChange"],interactionMode:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};y.style=v;export{y as calcite_table};
//# sourceMappingURL=p-337760a5.entry.js.map