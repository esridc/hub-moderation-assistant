import{i as t}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const c="calcite-list";const n="calcite-list-item-group";const e="calcite-list-item";function s(t){return Array.from(t.assignedElements({flatten:true}).filter((t=>t.matches(c))))}function i(t){const s=t.assignedElements({flatten:true});const i=s.filter((t=>t?.matches(n))).map((t=>Array.from(t.querySelectorAll(e)))).reduce(((t,c)=>[...t,...c]),[]);const r=s.filter((t=>t?.matches(e)));const a=s.filter((t=>t?.matches(c))).map((t=>Array.from(t.querySelectorAll(e)))).reduce(((t,c)=>[...t,...c]),[]);return[...a,...i,...r]}function r(t){t.forEach((c=>{c.setPosition=t.indexOf(c)+1;c.setSize=t.length}))}function a(c,n=false){if(!t()){return 0}const e=n?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";const s=document.evaluate(e,c,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return s.snapshotLength}export{a,s as b,i as g,r as u};
//# sourceMappingURL=p-448ba095.js.map