/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
const n=()=>typeof navigator!=="undefined"&&typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;function o(){return navigator.userAgentData}function e(){if(!n()){return""}const e=o();return e?.brands?e.brands.map((({brand:n,version:o})=>`${n}/${o}`)).join(" "):navigator.userAgent}export{e as g,n as i};
//# sourceMappingURL=p-0c8f2359.js.map