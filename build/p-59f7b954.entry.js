import{r as e,h as i,g as t}from"./p-3e4c4fe7.js";import{g as o}from"./p-fe89bef4.js";import{g as c,a}from"./p-9cb48e2d.js";import"./p-416f7088.js";import"./p-245d8a5c.js";import"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const l={list:"list",label:"label",title:"title"};const n=".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-color-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-color-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}";const s=class{constructor(i){e(this,i);this.guid=o();this.afterEmptyGroup=false;this.ancestors=undefined;this.label=undefined;this.scale="m"}connectedCallback(){this.ancestors=c(this.el)}render(){const{el:e,scale:t}=this;const o=a(e);return i("ul",{key:"e57f7805f680b7d8b89f1f72c98197d81ad743dd","aria-labelledby":this.guid,class:{[l.list]:true,[`scale--${t}`]:true},role:"group"},i("li",{key:"45ab46a79eb035a0785ea9d2665a3fce8cf7c183",class:{[l.label]:true},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":`${o}`}},i("span",{key:"380bfd8d85a132df1252e88971adca1b50104801",class:l.title},this.label)),i("slot",{key:"e0fd9bec45fc259ee2b439a0b80665c742fb5632"}))}get el(){return t(this)}};s.style=n;export{s as calcite_combobox_item_group};
//# sourceMappingURL=p-59f7b954.entry.js.map