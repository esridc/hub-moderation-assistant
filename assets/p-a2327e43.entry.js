/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{r as e,c as t,h as i,H as s,g as a}from"./p-5dcb8a70.js";import{k as n}from"./p-180fb587.js";import{i as l}from"./p-d6cfcab9.js";import{c as o,u as c,d as r,I as h}from"./p-79519f9a.js";import{g as d}from"./p-e38f29cd.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-fbdfad6a.js";const b={lastVisibleRow:"last-visible-row"};const f=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}";const u=f;const p=class{constructor(i){e(this,i);this.calciteTableRowSelect=t(this,"calciteTableRowSelect",6);this.calciteInternalTableRowFocusRequest=t(this,"calciteInternalTableRowFocusRequest",6);this.rowCells=[];this.keyDownHandler=e=>{if(this.interactionMode!=="interactive"){return}const t=e.target;const i=e.key;const s=e.ctrlKey;const a=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header")){switch(i){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous");e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next");e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first");e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last");e.preventDefault();break;case"ArrowLeft":n(a,t,"previous",false);e.preventDefault();break;case"ArrowRight":n(a,t,"next",false);e.preventDefault();break;case"Home":if(s){this.emitTableRowFocusRequest(1,this.positionAll,"first");e.preventDefault()}else{n(a,t,"first",false);e.preventDefault()}break;case"End":if(s){this.emitTableRowFocusRequest(this.rowCells?.length,this.positionAll,"last",true);e.preventDefault()}else{n(a,t,"last",false);e.preventDefault()}break}}};this.emitTableRowFocusRequest=(e,t,i,s)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:i,lastCell:s})};this.updateCells=()=>{const e=this.alignment?this.alignment:this.rowType!=="head"?"center":"start";const t=this.tableRowSlotEl?.assignedElements({flatten:true})?.filter((e=>e.matches("calcite-table-cell")||e.matches("calcite-table-header")));const i=Array.from(this.tableRowEl?.querySelectorAll("calcite-table-header, calcite-table-cell"))?.filter((e=>e.numberCell||e.selectionCell));const s=i?i.concat(t):t;if(s.length>0){s?.forEach(((t,i)=>{t.interactionMode=this.interactionMode;t.lastCell=i===s.length-1;t.parentRowAlignment=e;t.parentRowIsSelected=this.selected;t.parentRowType=this.rowType;t.positionInRow=i+1;t.scale=this.scale;if(t.nodeName==="CALCITE-TABLE-CELL"){t.readCellContentsToAT=this.readCellContentsToAT;t.disabled=this.disabled}}))}this.rowCells=s||[];this.cellCount=s?.length};this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()};this.handleKeyboardSelection=e=>{if(l(e.key)){if(e.key===" "){e.preventDefault()}this.handleSelectionOfRow()}};this.alignment=undefined;this.disabled=false;this.selected=false;this.cellCount=undefined;this.interactionMode="interactive";this.lastVisibleRow=undefined;this.rowType=undefined;this.numbered=false;this.positionSection=undefined;this.positionSectionLocalized=undefined;this.positionAll=undefined;this.readCellContentsToAT=undefined;this.scale=undefined;this.selectionMode="none";this.selectedRowCount=undefined;this.selectedRowCountLocalized=undefined;this.bodyRowCount=undefined;this.effectiveLocale=""}handleCellChanges(){if(this.tableRowEl&&this.rowCells.length>0){this.updateCells()}}handleDelayedCellChanges(){if(this.tableRowEl&&this.rowCells.length>0){requestAnimationFrame((()=>this.updateCells()))}}componentDidLoad(){if(this.tableRowEl&&this.rowCells.length>0){this.updateCells()}}connectedCallback(){o(this)}componentDidRender(){c(this)}disconnectedCallback(){r(this)}calciteInternalTableRowFocusChangeHandler(e){if(e.target.contains(this.el)){const t=e.detail.cellPosition;const i=e.detail.rowPosition;const s=e.detail.destination;const a=e.detail.lastCell;if(i===this.positionAll){if(this.disabled){const e=s==="last"?"previous":s==="first"?"next":s;this.emitTableRowFocusRequest(t,this.positionAll,e);return}const e=a?this.rowCells[this.rowCells.length-1]:this.rowCells?.find(((e,i)=>i+1===t));if(e){e.setFocus()}}}}renderSelectionIcon(){const e=this.selectionMode==="multiple"&&this.selected?"check-square-f":this.selectionMode==="multiple"?"square":this.selected?"circle-f":"circle";return i("calcite-icon",{icon:e,scale:d(this.scale)})}renderSelectableCell(){return this.rowType==="head"?i("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:this.selectionMode==="multiple"&&this.handleSelectionOfRow,onKeyDown:this.selectionMode==="multiple"&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:true,selectionMode:this.selectionMode}):this.rowType==="body"?i("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:true},this.renderSelectionIcon()):i("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:true})}renderNumberedCell(){return this.rowType==="head"?i("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:true,parentRowAlignment:this.alignment}):this.rowType==="body"?i("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:true,parentRowAlignment:this.alignment},this.positionSectionLocalized):i("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:true,parentRowAlignment:this.alignment})}render(){return i(s,{key:"185bf9700be4b1095871b2504f25212df83561b0"},i(h,{key:"d06ab2d2bd334c8eb6c87e788f6078bf2e6a0340",disabled:this.disabled},i("tr",{key:"e8d2091f1d498dfd8a618643d838d2978659057f","aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,class:{[b.lastVisibleRow]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),this.selectionMode!=="none"&&this.renderSelectableCell(),i("slot",{key:"d7b53de55a8ee6cdd0a6289dea9a386bf977a565",onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e}))))}get el(){return a(this)}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}};p.style=u;export{p as calcite_table_row};
//# sourceMappingURL=p-a2327e43.entry.js.map