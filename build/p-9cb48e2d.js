import{n}from"./p-416f7088.js";import{i as t}from"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const i="CALCITE-COMBOBOX-ITEM";const o="CALCITE-COMBOBOX-ITEM-GROUP";const c=`${i}, ${o}`;const s={input:"input",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon"};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function e(n){const t=n.parentElement?.closest(c);const i=t?.parentElement?.closest(c);return[t,i].filter((n=>n))}function a(n){return n.ancestors?.filter((n=>n.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function r(t){return n(t.querySelectorAll("calcite-combobox-item"))}function l(t){const i=n(t.querySelectorAll("calcite-combobox-item"));return i.filter((n=>n.selected)).length>0}function u(n){if(!t()){return 0}const i=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",n,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return i.snapshotLength}function f(n){return n.includes("single")}function p(n){return n.shortHeading||n.textLabel}export{s as C,u as a,c as b,p as c,a as d,r as e,i as f,e as g,l as h,f as i,o as j};
//# sourceMappingURL=p-9cb48e2d.js.map