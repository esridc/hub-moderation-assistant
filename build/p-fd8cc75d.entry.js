import{r as e,c as t,h as i,F as s,g as n,f as a,H as o}from"./p-3e4c4fe7.js";import{g as r}from"./p-22ac229a.js";import{t as l,i as c,H as h,f as d,q as f}from"./p-416f7088.js";import{g as p}from"./p-fe89bef4.js";import{i as u}from"./p-067fcff5.js";import{s as m,a as b,c as v}from"./p-099edbe6.js";import{a as g,C as x,I as w,S as y}from"./p-c5dddbc5.js";import{f as k,c as E,b as H,a as z,r as P,F as C}from"./p-42395734.js";import{d as j,a as D,c as I,u as A}from"./p-a66e7ea6.js";import{o as M}from"./p-4bd918f5.js";import{H as B}from"./p-074c5961.js";import{c as L,d as O}from"./p-768b95e8.js";import{u as F,c as S,s as $,d as R}from"./p-0cf7c05c.js";import{c as T}from"./p-ddd644c6.js";import{F as _}from"./p-16fbfa33.js";import{g as U}from"./p-6423f684.js";import"./p-245d8a5c.js";import"./p-0c8f2359.js";import"./p-58421494.js";import"./p-609cb9ab.js";const q=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";const W=["ArrowUp","ArrowDown","End","Home"];const X=class{constructor(i){e(this,i);this.calciteActionMenuOpen=t(this,"calciteActionMenuOpen",6);this.actionElements=[];this.guid=`calcite-action-menu-${p()}`;this.menuId=`${this.guid}-menu`;this.menuButtonId=`${this.guid}-menu-button`;this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:i,label:s}=this;const n=this.slottedMenuButtonEl||this.defaultMenuButtonEl;if(this.menuButtonEl===n){return}this.disconnectMenuButtonEl();this.menuButtonEl=n;this.setTooltipReferenceElement();if(!n){return}n.active=i;n.setAttribute("aria-controls",t);n.setAttribute("aria-expanded",l(i));n.setAttribute("aria-haspopup","true");if(!n.id){n.id=e}if(!n.label){n.label=s}if(!n.text){n.text=s}n.addEventListener("click",this.menuButtonClick);n.addEventListener("keydown",this.menuButtonKeyDown)};this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;if(!e){return}e.removeEventListener("click",this.menuButtonClick);e.removeEventListener("keydown",this.menuButtonKeyDown)};this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:true}).filter((e=>e===null||e===void 0?void 0:e.matches("calcite-action")));this.slottedMenuButtonEl=t[0];this.connectMenuButtonEl()};this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e;this.connectMenuButtonEl()};this.handleCalciteActionClick=()=>{this.open=false;this.setFocus()};this.menuButtonClick=()=>{this.toggleOpen()};this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:true}).filter((e=>e===null||e===void 0?void 0:e.matches("calcite-tooltip")));this.tooltipEl=t[0];this.setTooltipReferenceElement()};this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:i,open:s}=this;if(e){e.referenceElement=!t&&!s?i:null}};this.updateAction=(e,t)=>{const{guid:i,activeMenuItemIndex:s}=this;const n=`${i}-action-${t}`;e.tabIndex=-1;e.setAttribute("role","menuitem");if(!e.id){e.id=n}e.toggleAttribute(g,t===s)};this.updateActions=e=>{e===null||e===void 0?void 0:e.forEach(this.updateAction)};this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:true}).reduce(((e,t)=>{if(t===null||t===void 0?void 0:t.matches("calcite-action")){e.push(t);return e}if(t===null||t===void 0?void 0:t.matches("calcite-action-group")){return e.concat(Array.from(t.querySelectorAll("calcite-action")))}return e}),[]);this.actionElements=t.filter((e=>!e.disabled&&!e.hidden))};this.menuButtonKeyDown=e=>{const{key:t}=e;const{actionElements:i,activeMenuItemIndex:s,open:n}=this;if(!i.length){return}if(u(t)){e.preventDefault();if(!n){this.toggleOpen();return}const t=i[s];t?t.click():this.toggleOpen(false)}if(t==="Tab"){this.open=false;return}if(t==="Escape"){this.toggleOpen(false);e.preventDefault();return}this.handleActionNavigation(e,t,i)};this.handleActionNavigation=(e,t,i)=>{if(!this.isValidKey(t,W)){return}e.preventDefault();if(!this.open){this.toggleOpen();if(t==="Home"||t==="ArrowDown"){this.activeMenuItemIndex=0}if(t==="End"||t==="ArrowUp"){this.activeMenuItemIndex=i.length-1}return}if(t==="Home"){this.activeMenuItemIndex=0}if(t==="End"){this.activeMenuItemIndex=i.length-1}const s=this.activeMenuItemIndex;if(t==="ArrowUp"){this.activeMenuItemIndex=r(Math.max(s-1,-1),i.length)}if(t==="ArrowDown"){this.activeMenuItemIndex=r(s+1,i.length)}};this.toggleOpenEnd=()=>{this.setFocus();this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)};this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd);this.open=e};this.handlePopoverOpen=()=>{this.open=true};this.handlePopoverClose=()=>{this.open=false};this.appearance="solid";this.expanded=false;this.flipPlacements=undefined;this.label=undefined;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.scale=undefined;this.menuButtonEl=undefined;this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){m(this)}componentDidLoad(){b(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=false;this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1;if(this.menuButtonEl){this.menuButtonEl.active=e}this.calciteActionMenuOpen.emit();this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await v(this);return c(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:s,expanded:n}=this;const a=i("slot",{name:y.trigger,onSlotchange:this.setMenuButtonEl},i("calcite-action",{appearance:e,class:x.defaultTrigger,icon:w.menu,ref:this.setDefaultMenuButtonEl,scale:s,text:t,textEnabled:n}));return a}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:s,menuId:n,menuButtonEl:a,label:o,placement:r,overlayPositioning:l,flipPlacements:c}=this;const h=e[t];const d=(h===null||h===void 0?void 0:h.id)||null;return i("calcite-popover",{autoClose:true,flipPlacements:c,focusTrapDisabled:true,label:o,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:s,overlayPositioning:l,placement:r,pointerDisabled:true,referenceElement:a},i("div",{"aria-activedescendant":d,"aria-labelledby":a===null||a===void 0?void 0:a.id,class:x.menu,id:n,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},i("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return i(s,{key:"9feaace5a0750686cc4ad4e7ac83859cc26a7a20"},this.renderMenuButton(),this.renderMenuItems(),i("slot",{key:"ba73adb74c8c729467f300fd4ff33c7af23f2ad7",name:y.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find((t=>t===e))}get el(){return n(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};X.style=q;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */class Y{constructor(){this.registeredElements=new Map;this.registeredElementCount=0;this.queryPopover=e=>{const{registeredElements:t}=this;const i=e.find((e=>t.has(e)));return t.get(i)};this.togglePopovers=e=>{const t=e.composedPath();const i=this.queryPopover(t);if(i&&!i.triggerDisabled){i.open=!i.open}Array.from(this.registeredElements.values()).filter((e=>e!==i&&e.autoClose&&e.open&&!t.includes(e))).forEach((e=>e.open=false))};this.keyDownHandler=e=>{if(e.defaultPrevented){return}if(e.key==="Escape"){this.closeAllPopovers()}else if(u(e.key)){this.togglePopovers(e)}};this.clickHandler=e=>{if(h(e)){return}this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++;this.registeredElements.set(e,t);if(this.registeredElementCount===1){this.addListeners()}}unregisterElement(e){if(this.registeredElements.delete(e)){this.registeredElementCount--}if(this.registeredElementCount===0){this.removeListeners()}}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach((e=>e.open=false))}addListeners(){window.addEventListener("click",this.clickHandler);window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler);window.removeEventListener("keydown",this.keyDownHandler)}}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const K={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"};const V="auto";const G="aria-controls";const J="aria-expanded";const N=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-color-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}.has-header .close-button-container{border-end-end-radius:none}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}";const Q=new Y;const Z=class{constructor(i){e(this,i);this.calcitePopoverBeforeClose=t(this,"calcitePopoverBeforeClose",6);this.calcitePopoverClose=t(this,"calcitePopoverClose",6);this.calcitePopoverBeforeOpen=t(this,"calcitePopoverBeforeOpen",6);this.calcitePopoverOpen=t(this,"calcitePopoverOpen",6);this.mutationObserver=T("mutation",(()=>this.updateFocusTrapElements()));this.guid=`calcite-popover-${p()}`;this.openTransitionProp="opacity";this.hasLoaded=false;this.setTransitionEl=e=>{this.transitionEl=e};this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?k(t,e):null};this.setUpReferenceElement=(e=true)=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();E(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:s}=this;if(e&&i&&!s){console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t})}this.addReferences()};this.getId=()=>this.el.id||this.guid;this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;if(!e){return}if("setAttribute"in e){e.setAttribute(J,l(t))}};this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e){return}const t=this.getId();if("setAttribute"in e){e.setAttribute(G,t)}Q.registerElement(e,this.el);this.setExpandedAttr()};this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e){return}if("removeAttribute"in e){e.removeAttribute(G);e.removeAttribute(J)}Q.unregisterElement(e)};this.hide=()=>{this.open=false};this.storeArrowEl=e=>{this.arrowEl=e;this.reposition(true)};this.autoClose=false;this.closable=false;this.flipDisabled=false;this.focusTrapDisabled=false;this.pointerDisabled=false;this.flipPlacements=undefined;this.heading=undefined;this.headingLevel=undefined;this.label=undefined;this.messageOverrides=undefined;this.messages=undefined;this.offsetDistance=H;this.offsetSkidding=0;this.open=false;this.overlayPositioning="absolute";this.placement=V;this.referenceElement=undefined;this.scale="m";this.triggerDisabled=false;this.effectiveLocale="";this.floatingLayout="vertical";this.effectiveReferenceElement=undefined;this.defaultMessages=undefined}handleFocusTrapDisabled(e){if(!this.open){return}e?j(this):D(this)}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(true)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(true)}offsetSkiddingHandler(){this.reposition(true)}openHandler(){M(this);this.reposition(true);this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}referenceElementHandler(){this.setUpReferenceElement();this.reposition(true)}effectiveLocaleChange(){F(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements();L(this);S(this);I(this);requestAnimationFrame((()=>this.setUpReferenceElement(this.hasLoaded)))}async componentWillLoad(){await $(this);m(this)}componentDidLoad(){b(this);if(this.referenceElement&&!this.effectiveReferenceElement){this.setUpReferenceElement()}if(this.open){M(this)}this.hasLoaded=true}disconnectedCallback(){this.removeReferences();O(this);R(this);z(this,this.effectiveReferenceElement,this.el);j(this)}async reposition(e=false){const{el:t,effectiveReferenceElement:i,placement:s,overlayPositioning:n,flipDisabled:a,filteredFlipPlacements:o,offsetDistance:r,offsetSkidding:l,arrowEl:c}=this;return P(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:s,flipDisabled:a,flipPlacements:o,offsetDistance:r,offsetSkidding:l,arrowEl:c,type:"popover"},e)}async setFocus(){await v(this);a(this.el);d(this.el)}async updateFocusTrapElements(){A(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e==="string"?f(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit();D(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit();j(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?i("div",{class:K.closeButtonContainer,key:K.closeButtonContainer},i("calcite-action",{appearance:"transparent",class:K.closeButton,onClick:this.hide,ref:e=>this.closeButtonEl=e,scale:this.scale,text:e.close},i("calcite-icon",{icon:"x",scale:U(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this;const s=e?i(B,{class:K.heading,level:t},e):null;return s?i("div",{class:K.header,key:K.header},s,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:s,open:n,pointerDisabled:a,floatingLayout:r}=this;const c=e&&n;const h=!c;const d=!a?i(_,{floatingLayout:r,key:"floating-arrow",ref:this.storeArrowEl}):null;return i(o,{key:"3d353c97791fd0d5b2c1138f3b068669024b3512","aria-hidden":l(h),"aria-label":s,"aria-live":"polite","calcite-hydrated-hidden":h,id:this.getId(),role:"dialog"},i("div",{key:"1248ef4c8e83e622335b71a3b0034bf0490d7583",class:{[C.animation]:true,[C.animationActive]:c},ref:this.setTransitionEl},d,i("div",{key:"8b2272c0ba2f4e4a4090942f6fbaf6ebc29e8806",class:{[K.hasHeader]:!!t,[K.container]:true}},this.renderHeader(),i("div",{key:"1891093fcb573a52309328248aa9d4a2a057c7e4",class:K.content},i("slot",{key:"67bcfcbf92172b4575d44a201238faba5ceac271"})),!t?this.renderCloseButton():null)))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}};Z.style=N;export{X as calcite_action_menu,Z as calcite_popover};
//# sourceMappingURL=p-fd8cc75d.entry.js.map