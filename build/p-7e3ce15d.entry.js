import{r as e,c as t,h as o,g as i}from"./p-3e4c4fe7.js";import{c as n,d as s}from"./p-7082e2e0.js";import{e as c,d as a}from"./p-416f7088.js";import{s as l,a as r,c as d}from"./p-099edbe6.js";import{c as h,d as f}from"./p-768b95e8.js";import{c as g,d as p,s as m,u as b}from"./p-0cf7c05c.js";import{K as u}from"./p-7ab19287.js";import{o as k}from"./p-4bd918f5.js";import{g as v}from"./p-6423f684.js";import"./p-ddd644c6.js";import"./p-0c8f2359.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-067fcff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const x={title:"title",message:"message",link:"link",actionsEnd:"actions-end"};const w={actionsEnd:"actions-end",close:"notice-close",container:"container",content:"notice-content",icon:"notice-icon"};const z=":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0 solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}";const y=class{constructor(o){e(this,o);this.calciteNoticeBeforeClose=t(this,"calciteNoticeBeforeClose",6);this.calciteNoticeBeforeOpen=t(this,"calciteNoticeBeforeOpen",6);this.calciteNoticeClose=t(this,"calciteNoticeClose",6);this.calciteNoticeOpen=t(this,"calciteNoticeOpen",6);this.setTransitionEl=e=>{this.transitionEl=e};this.close=()=>{this.open=false};this.openTransitionProp="opacity";this.open=false;this.kind="brand";this.closable=false;this.icon=undefined;this.iconFlipRtl=false;this.scale="m";this.width="auto";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}openHandler(){k(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=c(u,this.icon,this.kind)}connectedCallback(){n(this);h(this);g(this)}disconnectedCallback(){s(this);f(this);p(this)}async componentWillLoad(){l(this);this.requestedIcon=c(u,this.icon,this.kind);await m(this);if(this.open){k(this)}}componentDidLoad(){r(this)}render(){const{el:e}=this;const t=o("button",{key:"4de511d4d93ee2078a4ed0d5fee2397d4d433691","aria-label":this.messages.close,class:w.close,onClick:this.close,ref:e=>this.closeButton=e},o("calcite-icon",{key:"bb983d2377b1f8c20b9d23cb63f258b4b6a670d9",icon:"x",scale:v(this.scale)}));const i=a(e,x.actionsEnd);return o("div",{key:"d83f3161115f422c6a6bc8591a2763f0ab17dd83",class:w.container,ref:this.setTransitionEl},this.requestedIcon?o("div",{class:w.icon},o("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:v(this.scale)})):null,o("div",{key:"3851d512eaea58676aa7c3de513e4aedf4e644c9",class:w.content},o("slot",{key:"6393d41eb420b92fc94467c108fc5aa4ab6e941c",name:x.title}),o("slot",{key:"f750570f0675e9f3ef9f76ed8362e848e5c6311c",name:x.message}),o("slot",{key:"2c8ded4623c885d3b2d9897c7c402f96dffbc8d7",name:x.link})),i?o("div",{class:w.actionsEnd},o("slot",{name:x.actionsEnd})):null,this.closable?t:null)}async setFocus(){await d(this);const e=this.el.querySelector("calcite-link");if(!this.closeButton&&!e){return}if(e){return e.setFocus()}else if(this.closeButton){this.closeButton.focus()}}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){b(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return i(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};y.style=z;export{y as calcite_notice};
//# sourceMappingURL=p-7e3ce15d.entry.js.map