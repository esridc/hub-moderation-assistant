import{r as i,c as e,h as t,H as a,g as n}from"./p-3e4c4fe7.js";import{z as s,g as o,f as c}from"./p-416f7088.js";import{d as l,a as r,c as h,u as d}from"./p-a66e7ea6.js";import{s as m,a as p,c as b}from"./p-099edbe6.js";import{c as x}from"./p-ddd644c6.js";import{o as v}from"./p-4bd918f5.js";import{C as f}from"./p-245d8a5c.js";import"./p-fe89bef4.js";import"./p-609cb9ab.js";import"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const g={scrim:"scrim",container:"container",containerOpen:"container--open",content:"content",containerEmbedded:"container--embedded"};const u=":host{position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-color-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--embedded{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";const w=class{constructor(t){i(this,t);this.calciteSheetBeforeClose=e(this,"calciteSheetBeforeClose",6);this.calciteSheetClose=e(this,"calciteSheetClose",6);this.calciteSheetBeforeOpen=e(this,"calciteSheetBeforeOpen",6);this.calciteSheetOpen=e(this,"calciteSheetOpen",6);this.openTransitionProp="opacity";this.ignoreOpenChange=false;this.mutationObserver=x("mutation",(()=>this.handleMutationObserver()));this.setTransitionEl=i=>{this.transitionEl=i;this.contentId=s(i)};this.openEnd=()=>{this.setFocus();this.el.removeEventListener("calciteSheetOpen",this.openEnd)};this.handleOutsideClose=()=>{if(this.outsideCloseDisabled){return}this.open=false};this.closeSheet=async()=>{if(this.beforeClose){try{await this.beforeClose(this.el)}catch(i){requestAnimationFrame((()=>{this.ignoreOpenChange=true;this.open=true;this.ignoreOpenChange=false}));return}}this.opened=false;this.removeOverflowHiddenClass()};this.beforeClose=undefined;this.displayMode="overlay";this.embedded=false;this.escapeDisabled=false;this.heightScale="m";this.focusTrapDisabled=false;this.label=undefined;this.open=false;this.opened=false;this.outsideCloseDisabled=false;this.position="inline-start";this.widthScale="m"}handleFocusTrapDisabled(i){if(!this.open){return}i?l(this):r(this)}toggleSheet(i){if(this.ignoreOpenChange){return}if(i){this.openSheet()}else{this.closeSheet()}}handleOpenedChange(){v(this)}async componentWillLoad(){m(this);if(this.open){requestAnimationFrame((()=>this.openSheet()))}}componentDidLoad(){p(this)}connectedCallback(){var i;(i=this.mutationObserver)===null||i===void 0?void 0:i.observe(this.el,{childList:true,subtree:true});h(this)}disconnectedCallback(){var i;this.removeOverflowHiddenClass();(i=this.mutationObserver)===null||i===void 0?void 0:i.disconnect();l(this);this.embedded=false}render(){const i=o(this.el);return t(a,{key:"28df157ec40bfb6614047f7d5d7aa9b52548c9dd","aria-describedby":this.contentId,"aria-label":this.label,"aria-modal":"true",role:"dialog"},t("div",{key:"a6f864dce3b470bc88798e46990cf5a1bf97f41a",class:{[g.container]:true,[g.containerOpen]:this.opened,[g.containerEmbedded]:this.embedded,[f.rtl]:i==="rtl"}},t("calcite-scrim",{key:"96f8084c552b16875a32423dee461dc60d210164",class:g.scrim,onClick:this.handleOutsideClose}),t("div",{key:"f012185dc7fd7ddffd8fe0dc5a2fa2f92d94db47",class:{[g.content]:true},ref:this.setTransitionEl},t("slot",{key:"2e6add208eae71ea74156169e82026be1088f107"}))))}handleEscape(i){if(this.open&&!this.escapeDisabled&&i.key==="Escape"&&!i.defaultPrevented){this.open=false;i.preventDefault()}}async setFocus(){await b(this);c(this.el)}async updateFocusTrapElements(){d(this)}onBeforeOpen(){this.calciteSheetBeforeOpen.emit()}onOpen(){this.calciteSheetOpen.emit();r(this)}onBeforeClose(){this.calciteSheetBeforeClose.emit()}onClose(){this.calciteSheetClose.emit();l(this)}openSheet(){this.el.addEventListener("calciteSheetOpen",this.openEnd);this.opened=true;if(!this.embedded){this.initialOverflowCSS=document.documentElement.style.overflow;document.documentElement.style.setProperty("overflow","hidden")}}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}handleMutationObserver(){this.updateFocusTrapElements()}get el(){return n(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],open:["toggleSheet"],opened:["handleOpenedChange"]}}};w.style=u;export{w as calcite_sheet};
//# sourceMappingURL=p-4116cbb5.entry.js.map