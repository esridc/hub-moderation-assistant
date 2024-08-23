import{r as t,c as s,h as i,g as e}from"./p-3e4c4fe7.js";import{C as n,n as o,h as a,c as l,o as c,a as r,b as h,D as d,d as u,e as f,g as p,p as b,f as m,R as g,H as v,O as w,t as x,i as C,j as y,S as k,k as A,l as S,m as D}from"./p-c2578774.js";import{k as j,g as $,f as z}from"./p-416f7088.js";import{c as F,d as O,u as I,I as L}from"./p-529ac440.js";import{i as N}from"./p-067fcff5.js";import{c as M,s as P,a as K}from"./p-099edbe6.js";import{c as U,d as E}from"./p-768b95e8.js";import{r as H,c as R,a as T}from"./p-e7b3487d.js";import{u as X,s as q,c as B,d as V}from"./p-0cf7c05c.js";import{t as J}from"./p-7cf0703a.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-0c8f2359.js";import"./p-ddd644c6.js";import"./p-58421494.js";const W=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );outline-offset:6px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}';const Y=16;const _=class{constructor(e){t(this,e);this.calciteColorPickerChange=s(this,"calciteColorPickerChange",6);this.calciteColorPickerInput=s(this,"calciteColorPickerInput",6);this.internalColorUpdateContext=null;this.isActiveChannelInputEmpty=false;this.mode=n.HEX;this.shiftKeyChannelAdjustment=0;this.upOrDownArrowKeyTracker=null;this.handleTabActivate=t=>{this.channelMode=t.currentTarget.getAttribute("data-color-mode");this.updateChannelsFromColor(this.color)};this.handleColorFieldScopeKeyDown=t=>{const{key:s}=t;const i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};if(i[s]){t.preventDefault();this.scopeOrientation=s==="ArrowDown"||s==="ArrowUp"?"vertical":"horizontal";this.captureColorFieldColor(this.colorFieldScopeLeft+i[s].x||0,this.colorFieldScopeTop+i[s].y||0,false)}};this.handleHueScopeKeyDown=t=>{const s=t.shiftKey?10:1;const{key:i}=t;const e={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(e[i]){t.preventDefault();const n=e[i]*s;const o=this.baseColorFieldColor.hue();const a=this.baseColorFieldColor.hue(o+n);this.internalColorSet(a,false)}};this.handleHexInputChange=t=>{t.stopPropagation();const{isClearable:s,color:i}=this;const e=t.target;const n=e.value;if(s&&!n){this.internalColorSet(null);return}const c=i&&o(a(i,f(this.mode)));if(n!==c){this.internalColorSet(l(n))}};this.handleSavedColorSelect=t=>{const s=t.currentTarget;this.internalColorSet(l(s.color))};this.handleChannelInput=t=>{const s=t.currentTarget;const i=Number(s.getAttribute("data-channel-index"));const e=i===3;const n=e?w.max:this.channelMode==="rgb"?g[Object.keys(g)[i]]:v[Object.keys(v)[i]];let o;if(!s.value){o="";this.isActiveChannelInputEmpty=true;this.upOrDownArrowKeyTracker=null}else{const t=Number(s.value);const i=t+this.shiftKeyChannelAdjustment;const e=R(i,0,n);o=e.toString()}s.value=o;if(o!==""&&this.shiftKeyChannelAdjustment!==0){this.handleChannelChange(t)}else if(o!==""){this.handleChannelChange(t)}};this.handleChannelBlur=t=>{var s;const i=t.currentTarget;const e=Number(i.getAttribute("data-channel-index"));const n=[...this.channels];const o=!i.value&&!this.isClearable;if(o){i.value=(s=n[e])===null||s===void 0?void 0:s.toString()}};this.handleChannelFocus=t=>{const s=t.currentTarget;s.selectText()};this.handleChannelChange=t=>{const s=t.currentTarget;const i=Number(s.getAttribute("data-channel-index"));const e=[...this.channels];const n=this.isClearable&&!s.value;if(n){this.channels=[null,null,null,null];this.internalColorSet(null);return}const o=i===3;if(this.isActiveChannelInputEmpty&&this.upOrDownArrowKeyTracker){s.value=this.upOrDownArrowKeyTracker==="up"?(e[i]+1<=this.getChannelInputLimit(i)?e[i]+1:this.getChannelInputLimit(i)).toString():(e[i]-1>=0?e[i]-1:0).toString();this.isActiveChannelInputEmpty=false;this.upOrDownArrowKeyTracker=null}const a=s.value?Number(s.value):e[i];e[i]=o?c(a):a;this.updateColorFromChannels(e)};this.handleSavedColorKeyDown=t=>{if(N(t.key)){t.preventDefault();this.handleSavedColorSelect(t)}};this.handleColorFieldPointerDown=t=>{if(!j(t)){return}const{offsetX:s,offsetY:i}=t;window.addEventListener("pointermove",this.globalPointerMoveHandler);window.addEventListener("pointerup",this.globalPointerUpHandler,{once:true});this.activeCanvasInfo={context:this.colorFieldRenderingContext,bounds:this.colorFieldRenderingContext.canvas.getBoundingClientRect()};this.captureColorFieldColor(s,i);this.focusScope(this.colorFieldScopeNode)};this.handleHueSliderPointerDown=t=>{if(!j(t)){return}const{offsetX:s}=t;window.addEventListener("pointermove",this.globalPointerMoveHandler);window.addEventListener("pointerup",this.globalPointerUpHandler,{once:true});this.activeCanvasInfo={context:this.hueSliderRenderingContext,bounds:this.hueSliderRenderingContext.canvas.getBoundingClientRect()};this.captureHueSliderColor(s);this.focusScope(this.hueScopeNode)};this.handleOpacitySliderPointerDown=t=>{if(!j(t)){return}const{offsetX:s}=t;window.addEventListener("pointermove",this.globalPointerMoveHandler);window.addEventListener("pointerup",this.globalPointerUpHandler,{once:true});this.activeCanvasInfo={context:this.opacitySliderRenderingContext,bounds:this.opacitySliderRenderingContext.canvas.getBoundingClientRect()};this.captureOpacitySliderValue(s);this.focusScope(this.opacityScopeNode)};this.globalPointerUpHandler=t=>{if(!j(t)){return}const s=this.activeCanvasInfo;this.activeCanvasInfo=null;this.drawColorControls();if(s){this.calciteColorPickerChange.emit()}};this.globalPointerMoveHandler=t=>{const{activeCanvasInfo:s,el:i}=this;if(!i.isConnected||!s){return}const{context:e,bounds:n}=s;let o;let a;const{clientX:l,clientY:c}=t;if(e.canvas.matches(":hover")){o=l-n.x;a=c-n.y}else{if(l<n.x+n.width&&l>n.x){o=l-n.x}else if(l<n.x){o=0}else{o=n.width}if(c<n.y+n.height&&c>n.y){a=c-n.y}else if(c<n.y){a=0}else{a=n.height}}if(e===this.colorFieldRenderingContext){this.captureColorFieldColor(o,a,false)}else if(e===this.hueSliderRenderingContext){this.captureHueSliderColor(o)}else if(e===this.opacitySliderRenderingContext){this.captureOpacitySliderValue(o)}};this.storeColorFieldScope=t=>{this.colorFieldScopeNode=t};this.storeHueScope=t=>{this.hueScopeNode=t};this.renderChannelsTabTitle=t=>{const{channelMode:s,messages:e}=this;const n=t===s;const o=t==="rgb"?e.rgb:e.hsv;return i("calcite-tab-title",{class:r.colorMode,"data-color-mode":t,key:t,onCalciteTabsActivate:this.handleTabActivate,selected:n},o)};this.renderChannelsTab=t=>{const{isClearable:s,channelMode:e,channels:n,messages:o,alphaChannel:a}=this;const l=t===e;const c=t==="rgb";const d=c?[o.red,o.green,o.blue]:[o.hue,o.saturation,o.value];const u=$(this.el);const f=a?n:n.slice(0,3);return i("calcite-tab",{class:r.control,key:t,selected:l},i("div",{class:r.channels,dir:"ltr"},f.map(((t,i)=>{const e=i===3;if(e){t=s&&!t?t:h(t)}return this.renderChannel(t,i,d[i],u,e?"%":"")}))))};this.renderChannel=(t,s,e,n,o)=>i("calcite-input-number",{class:r.channel,"data-channel-index":s,dir:n,key:s,label:e,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onCalciteInternalInputNumberBlur:this.handleChannelBlur,onCalciteInternalInputNumberFocus:this.handleChannelFocus,onKeyDown:this.handleKeyDown,scale:this.scale==="l"?"m":"s",style:{marginLeft:s>0&&!(this.scale==="s"&&this.alphaChannel&&s===3)?"-1px":""},suffixText:o,value:t===null||t===void 0?void 0:t.toString()});this.deleteColor=()=>{const t=a(this.color,this.alphaChannel);const s=this.savedColors.indexOf(t)>-1;if(!s){return}const i=this.savedColors.filter((s=>s!==t));this.savedColors=i;const e=`${A}${this.storageId}`;if(this.storageId){localStorage.setItem(e,JSON.stringify(i))}};this.saveColor=()=>{const t=a(this.color,this.alphaChannel);const s=this.savedColors.indexOf(t)>-1;if(s){return}const i=[...this.savedColors,t];this.savedColors=i;const e=`${A}${this.storageId}`;if(this.storageId){localStorage.setItem(e,JSON.stringify(i))}};this.drawColorControls=J(((t="all")=>{if((t==="all"||t==="color-field")&&this.colorFieldRenderingContext){this.drawColorField()}if((t==="all"||t==="hue-slider")&&this.hueSliderRenderingContext){this.drawHueSlider()}if(this.alphaChannel&&(t==="all"||t==="opacity-slider")&&this.opacitySliderRenderingContext){this.drawOpacitySlider()}}),Y);this.captureColorFieldColor=(t,s,i=true)=>{const{dimensions:{colorField:{height:e,width:n}}}=this;const o=Math.round(v.s/n*t);const a=Math.round(v.v/e*(e-s));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(o).value(a),i)};this.initColorField=t=>{this.colorFieldRenderingContext=t.getContext("2d");this.updateCanvasSize("color-field");this.drawColorControls()};this.initHueSlider=t=>{this.hueSliderRenderingContext=t.getContext("2d");this.updateCanvasSize("hue-slider");this.drawHueSlider()};this.initOpacitySlider=t=>{if(!t){return}this.opacitySliderRenderingContext=t.getContext("2d");this.updateCanvasSize("opacity-slider");this.drawOpacitySlider()};this.storeOpacityScope=t=>{this.opacityScopeNode=t};this.handleOpacityScopeKeyDown=t=>{const s=t.shiftKey?10:1;const{key:i}=t;const e={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(e[i]){t.preventDefault();const n=e[i]*s;const o=this.baseColorFieldColor.alpha();const a=this.baseColorFieldColor.alpha(o+n);this.internalColorSet(a,false)}};this.allowEmpty=false;this.alphaChannel=false;this.channelsDisabled=false;this.clearable=false;this.color=d;this.disabled=false;this.format="auto";this.hideChannels=false;this.hexDisabled=false;this.hideHex=false;this.hideSaved=false;this.savedDisabled=false;this.scale="m";this.storageId=undefined;this.messageOverrides=undefined;this.numberingSystem=undefined;this.value=o(a(d,this.alphaChannel));this.channelMode="rgb";this.channels=this.toChannels(d);this.defaultMessages=undefined;this.dimensions=u.m;this.effectiveLocale="";this.messages=undefined;this.savedColors=[];this.colorFieldScopeTop=undefined;this.colorFieldScopeLeft=undefined;this.hueScopeLeft=undefined;this.opacityScopeLeft=undefined;this.scopeOrientation=undefined}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(t){const{format:s}=this;if(t&&s!=="auto"&&!f(s)){console.warn(`ignoring alphaChannel as the current format (${s}) does not support alpha`);this.alphaChannel=false}}handleAlphaChannelDimensionsChange(){this.effectiveSliderWidth=p(this.dimensions,this.alphaChannel);this.drawColorControls()}handleColorChange(t,s){this.drawColorControls();this.updateChannelsFromColor(t);this.previousColor=s}handleFormatOrAlphaChannelChange(){this.setMode(this.format);this.internalColorSet(this.color,false,"internal")}handleScaleChange(t="m"){this.updateDimensions(t);this.updateCanvasSize("all");this.drawColorControls()}onMessagesChange(){}handleValueChange(t,s){const{isClearable:i,format:e}=this;const n=!i||t;let o=false;if(n){const i=b(t);if(!i||e!=="auto"&&i!==e){this.showIncompatibleColorWarning(t,e);this.value=s;return}o=this.mode!==i;this.setMode(i,this.internalColorUpdateContext===null)}const a=this.activeCanvasInfo;if(this.internalColorUpdateContext==="initial"){return}if(this.internalColorUpdateContext==="user-interaction"){this.calciteColorPickerInput.emit();if(!a){this.calciteColorPickerChange.emit()}return}const c=i&&!t?null:l(t!=null&&typeof t==="object"&&f(this.mode)?D(t):t);const r=!m(c,this.color);if(o||r){this.internalColorSet(c,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}}get baseColorFieldColor(){return this.color||this.previousColor||d}effectiveLocaleChange(){X(this,this.effectiveLocale)}handleChannelKeyUpOrDown(t){this.shiftKeyChannelAdjustment=0;const{key:s}=t;if(s!=="ArrowUp"&&s!=="ArrowDown"||!t.composedPath().some((t=>{var s;return(s=t.classList)===null||s===void 0?void 0:s.contains(r.channel)}))){return}const{shiftKey:i}=t;t.preventDefault();if(!this.color){this.internalColorSet(this.previousColor);t.stopPropagation();return}const e=9;this.shiftKeyChannelAdjustment=s==="ArrowUp"&&i?e:s==="ArrowDown"&&i?-e:0;if(s==="ArrowUp"){this.upOrDownArrowKeyTracker="up"}if(s==="ArrowDown"){this.upOrDownArrowKeyTracker="down"}}getChannelInputLimit(t){return this.channelMode==="rgb"?g[Object.keys(g)[t]]:v[Object.keys(v)[t]]}focusScope(t){requestAnimationFrame((()=>{t.focus()}))}async setFocus(){await M(this);z(this.el)}async componentWillLoad(){P(this);this.handleAllowEmptyOrClearableChange();this.handleAlphaChannelDimensionsChange();const{isClearable:t,color:s,format:i,value:e}=this;const n=t&&!e;const o=b(e);const a=n||i==="auto"&&o||i===o;const c=n?null:a?l(e):s;if(!a){this.showIncompatibleColorWarning(e,i)}this.setMode(i,false);this.internalColorSet(c,false,"initial");this.updateDimensions(this.scale);const r=`${A}${this.storageId}`;if(this.storageId&&localStorage.getItem(r)){this.savedColors=JSON.parse(localStorage.getItem(r))}await q(this)}connectedCallback(){F(this);U(this);B(this)}componentDidLoad(){K(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler);window.removeEventListener("pointerup",this.globalPointerUpHandler);O(this);E(this);V(this)}componentDidRender(){I(this)}render(){const{channelsDisabled:t,color:s,colorFieldScopeLeft:e,colorFieldScopeTop:n,dimensions:{thumb:{radius:o}},hexDisabled:l,hideChannels:c,hideHex:u,hideSaved:f,hueScopeLeft:p,messages:b,alphaChannel:m,opacityScopeLeft:g,savedColors:x,savedDisabled:C,scale:y,scopeOrientation:k}=this;const A=this.effectiveSliderWidth;const S=s?a(s,m):null;const D=o;const j=p!==null&&p!==void 0?p:A*d.hue()/v.h;const $=o;const z=g!==null&&g!==void 0?g:A*h(d.alpha())/w.max;const F=s===null;const O=k==="vertical";const I=l||u;const N=t||c;const M=C||f;const[P,K]=this.getAdjustedScopePosition(e,n);const[U,E]=this.getAdjustedScopePosition(j,D);const[H,R]=this.getAdjustedScopePosition(z,$);return i(L,{key:"3fdda1fd2366d3ffb3405dfa28a8424d78586a61",disabled:this.disabled},i("div",{key:"b3e95f63a7b4a9f49587fa458bf663cf82ff6961",class:r.container},i("div",{key:"5770ab5094e87956f0f8a49e16f1a9418cc6e7ff",class:r.controlAndScope},i("canvas",{key:"3773e30ddb17777a93b6091e4accc71e890f8cbb",class:r.colorField,onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),i("div",{key:"66dfba03f7a7e35f50c1fc0f23ccb0c0cf91c247","aria-label":O?b.value:b.saturation,"aria-valuemax":O?v.v:v.s,"aria-valuemin":"0","aria-valuenow":(O?s===null||s===void 0?void 0:s.saturationv():s===null||s===void 0?void 0:s.value())||"0",class:{[r.scope]:true,[r.colorFieldScope]:true},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${K||0}px`,left:`${P||0}px`},tabindex:"0"})),i("div",{key:"61100b2e5e07a647b75641afe11e7dcfb6df3dd1",class:r.previewAndSliders},i("calcite-color-picker-swatch",{key:"3fd47b8fb737f322646f136a22ec5281c12dcdcb",class:r.preview,color:S,scale:this.alphaChannel?"l":this.scale}),i("div",{key:"df7ed65ad05057a4a8c81239f1dc2f3341ea18fb",class:r.sliders},i("div",{key:"5bc288a2e4da751f6e4a1b3a1b0b1294c6421306",class:r.controlAndScope},i("canvas",{key:"b350822aefb25ca6521d21a376c59885666798c5",class:{[r.slider]:true,[r.hueSlider]:true},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),i("div",{key:"5ba9570cb05da8620030918757acd21b57c844eb","aria-label":b.hue,"aria-valuemax":v.h,"aria-valuemin":"0","aria-valuenow":(s===null||s===void 0?void 0:s.round().hue())||d.round().hue(),class:{[r.scope]:true,[r.hueScope]:true},onKeyDown:this.handleHueScopeKeyDown,ref:this.storeHueScope,role:"slider",style:{top:`${E}px`,left:`${U}px`},tabindex:"0"})),m?i("div",{class:r.controlAndScope},i("canvas",{class:{[r.slider]:true,[r.opacitySlider]:true},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),i("div",{"aria-label":b.opacity,"aria-valuemax":w.max,"aria-valuemin":w.min,"aria-valuenow":(s||d).round().alpha(),class:{[r.scope]:true,[r.opacityScope]:true},onKeyDown:this.handleOpacityScopeKeyDown,ref:this.storeOpacityScope,role:"slider",style:{top:`${R}px`,left:`${H}px`},tabindex:"0"})):null)),I&&N?null:i("div",{class:{[r.controlSection]:true,[r.section]:true}},i("div",{class:r.hexAndChannelsGroup},I?null:i("div",{class:r.hexOptions},i("calcite-color-picker-hex-input",{allowEmpty:this.isClearable,alphaChannel:m,class:r.control,messages:b,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:y,value:S})),N?null:i("calcite-tabs",{class:{[r.colorModeContainer]:true,[r.splitSection]:true},scale:y==="l"?"m":"s"},i("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),M?null:i("div",{class:{[r.savedColorsSection]:true,[r.section]:true}},i("div",{class:r.header},i("label",null,b.saved),i("div",{class:r.savedColorsButtons},i("calcite-button",{appearance:"transparent",class:r.deleteColor,disabled:F,iconStart:"minus",kind:"neutral",label:b.deleteColor,onClick:this.deleteColor,scale:y,type:"button"}),i("calcite-button",{appearance:"transparent",class:r.saveColor,disabled:F,iconStart:"plus",kind:"neutral",label:b.saveColor,onClick:this.saveColor,scale:y,type:"button"}))),x.length>0?i("div",{class:r.savedColors},[...x.map((t=>i("calcite-color-picker-swatch",{class:r.savedColor,color:t,key:t,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:y,tabIndex:0})))]):null)))}handleKeyDown(t){if(t.key==="Enter"){t.preventDefault()}}showIncompatibleColorWarning(t,s){console.warn(`ignoring color value (${t}) as it is not compatible with the current format (${s})`)}setMode(t,s=true){const i=t==="auto"?this.mode:t;this.mode=this.ensureCompatibleMode(i,s)}ensureCompatibleMode(t,s){const{alphaChannel:i}=this;const e=f(t);if(i&&!e){const i=S(t);if(s){console.warn(`setting format to (${i}) as the provided one (${t}) does not support alpha`)}return i}if(!i&&e){const i=x(t);if(s){console.warn(`setting format to (${i}) as the provided one (${t}) does not support alpha`)}return i}return t}captureHueSliderColor(t){const s=y/this.effectiveSliderWidth*t;this.internalColorSet(this.baseColorFieldColor.hue(s),false)}captureOpacitySliderValue(t){const s=c(w.max/this.effectiveSliderWidth*t);this.internalColorSet(this.baseColorFieldColor.alpha(s),false)}internalColorSet(t,s=true,i="user-interaction"){if(s&&m(t,this.color)){return}this.internalColorUpdateContext=i;this.color=t;this.value=this.toValue(t);this.internalColorUpdateContext=null}toValue(t,s=this.mode){if(!t){return null}const i="hex";if(s.includes(i)){const i=s===n.HEXA;return o(a(t.round(),i),i)}if(s.includes("-css")){const i=t[s.replace("-css","").replace("a","")]().round().string();const e=(s.endsWith("a")||s.endsWith("a-css"))&&t.alpha()===1;if(e){const s=i.slice(0,3);const e=i.slice(4,-1);return`${s}a(${e}, ${t.alpha()})`}return i}const e=t[x(s)]().round().object();if(s.endsWith("a")){return C(e)}return e}getSliderCapSpacing(){const{dimensions:{slider:{height:t},thumb:{radius:s}}}=this;return s*2-t}updateDimensions(t="m"){this.dimensions=u[t]}drawColorField(){const t=this.colorFieldRenderingContext;const{dimensions:{colorField:{height:s,width:i}}}=this;t.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string();t.fillRect(0,0,i,s);const e=t.createLinearGradient(0,0,i,0);e.addColorStop(0,"rgba(255,255,255,1)");e.addColorStop(1,"rgba(255,255,255,0)");t.fillStyle=e;t.fillRect(0,0,i,s);const n=t.createLinearGradient(0,0,0,s);n.addColorStop(0,"rgba(0,0,0,0)");n.addColorStop(1,"rgba(0,0,0,1)");t.fillStyle=n;t.fillRect(0,0,i,s);this.drawActiveColorFieldColor()}setCanvasContextSize(t,{height:s,width:i}){if(!t){return}const e=window.devicePixelRatio||1;t.width=i*e;t.height=s*e;t.style.height=`${s}px`;t.style.width=`${i}px`;const n=t.getContext("2d");n.scale(e,e)}updateCanvasSize(t="all"){var s,i,e;const{dimensions:n}=this;if(t==="all"||t==="color-field"){this.setCanvasContextSize((s=this.colorFieldRenderingContext)===null||s===void 0?void 0:s.canvas,n.colorField)}const o={width:this.effectiveSliderWidth,height:n.slider.height+(n.thumb.radius-n.slider.height/2)*2};if(t==="all"||t==="hue-slider"){this.setCanvasContextSize((i=this.hueSliderRenderingContext)===null||i===void 0?void 0:i.canvas,o)}if(t==="all"||t==="opacity-slider"){this.setCanvasContextSize((e=this.opacitySliderRenderingContext)===null||e===void 0?void 0:e.canvas,o)}}drawActiveColorFieldColor(){const{color:t}=this;if(!t){return}const s=t.hsv();const{dimensions:{colorField:{height:i,width:e},thumb:{radius:n}}}=this;const o=s.saturationv()/(v.s/e);const a=i-s.value()/(v.v/i);requestAnimationFrame((()=>{this.colorFieldScopeLeft=o;this.colorFieldScopeTop=a}));this.drawThumb(this.colorFieldRenderingContext,n,o,a,s,false)}drawThumb(t,s,i,e,n,o){const a=0;const l=2*Math.PI;const c=1;t.beginPath();t.arc(i,e,s,a,l);t.fillStyle="#fff";t.fill();t.strokeStyle="rgba(0,0,0,0.3)";t.lineWidth=c;t.stroke();if(o&&n.alpha()<1){const n=t.createPattern(this.getCheckeredBackgroundPattern(),"repeat");t.beginPath();t.arc(i,e,s-3,a,l);t.fillStyle=n;t.fill()}t.globalCompositeOperation="source-atop";t.beginPath();t.arc(i,e,s-3,a,l);const r=o?n.alpha():1;t.fillStyle=n.rgb().alpha(r).string();t.fill();t.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:t}=this;if(!t){return}const s=t.hsv().saturationv(100).value(100);const{dimensions:{thumb:{radius:i}}}=this;const e=this.effectiveSliderWidth;const n=s.hue()/(y/e);const o=i;const a=this.getSliderBoundX(n,e,i);requestAnimationFrame((()=>{this.hueScopeLeft=a}));this.drawThumb(this.hueSliderRenderingContext,i,a,o,s,false)}drawHueSlider(){const t=this.hueSliderRenderingContext;const{dimensions:{slider:{height:s},thumb:{radius:i}}}=this;const e=0;const n=i-s/2;const o=this.effectiveSliderWidth;const a=t.createLinearGradient(0,0,o,0);const c=["red","yellow","lime","cyan","blue","magenta","#ff0004"];const r=1/(c.length-1);let h=0;c.forEach((t=>{a.addColorStop(h,l(t).string());h+=r}));t.clearRect(0,0,o,s+this.getSliderCapSpacing()*2);this.drawSliderPath(t,s,o,e,n);t.fillStyle=a;t.fill();t.strokeStyle="rgba(0,0,0,0.3)";t.lineWidth=1;t.stroke();this.drawActiveHueSliderColor()}drawOpacitySlider(){const t=this.opacitySliderRenderingContext;const{baseColorFieldColor:s,dimensions:{slider:{height:i},thumb:{radius:e}}}=this;const n=0;const o=e-i/2;const a=this.effectiveSliderWidth;t.clearRect(0,0,a,i+this.getSliderCapSpacing()*2);const l=t.createLinearGradient(0,o,a,0);const c=s.rgb().alpha(0);const r=s.rgb().alpha(.5);const h=s.rgb().alpha(1);l.addColorStop(0,c.string());l.addColorStop(.5,r.string());l.addColorStop(1,h.string());this.drawSliderPath(t,i,a,n,o);const d=t.createPattern(this.getCheckeredBackgroundPattern(),"repeat");t.fillStyle=d;t.fill();t.fillStyle=l;t.fill();t.strokeStyle="rgba(0,0,0,0.3)";t.lineWidth=1;t.stroke();this.drawActiveOpacitySliderColor()}drawSliderPath(t,s,i,e,n){const o=s/2+1;t.beginPath();t.moveTo(e+o,n);t.lineTo(e+i-o,n);t.quadraticCurveTo(e+i,n,e+i,n+o);t.lineTo(e+i,n+s-o);t.quadraticCurveTo(e+i,n+s,e+i-o,n+s);t.lineTo(e+o,n+s);t.quadraticCurveTo(e,n+s,e,n+s-o);t.lineTo(e,n+o);t.quadraticCurveTo(e,n,e+o,n);t.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern){return this.checkerPattern}const t=document.createElement("canvas");t.width=10;t.height=10;const s=t.getContext("2d");s.fillStyle="#ccc";s.fillRect(0,0,10,10);s.fillStyle="#fff";s.fillRect(0,0,5,5);s.fillRect(5,5,5,5);this.checkerPattern=t;return t}drawActiveOpacitySliderColor(){const{color:t}=this;if(!t){return}const s=t;const{dimensions:{thumb:{radius:i}}}=this;const e=this.effectiveSliderWidth;const n=h(s.alpha())/(w.max/e);const o=i;const a=this.getSliderBoundX(n,e,i);requestAnimationFrame((()=>{this.opacityScopeLeft=a}));this.drawThumb(this.opacitySliderRenderingContext,i,a,o,s,true)}getSliderBoundX(t,s,i){const e=T(t,s,i);return e===0?t:e===-1?H(t,0,s,i,i*2):H(t,0,s,s-i*2,s-i)}updateColorFromChannels(t){this.internalColorSet(l(t,this.channelMode))}updateChannelsFromColor(t){this.channels=t?this.toChannels(t):[null,null,null,null]}toChannels(t){const{channelMode:s}=this;const i=t[s]().array().map(((t,s)=>{const i=s===3;return i?t:Math.floor(t)}));if(i.length===3){i.push(1)}return i}getAdjustedScopePosition(t,s){return[t-k/2,s-k/2]}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{allowEmpty:["handleAllowEmptyOrClearableChange"],clearable:["handleAllowEmptyOrClearableChange"],alphaChannel:["handleAlphaChannelChange","handleAlphaChannelDimensionsChange","handleFormatOrAlphaChannelChange"],dimensions:["handleAlphaChannelDimensionsChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}};_.style=W;export{_ as calcite_color_picker};
//# sourceMappingURL=p-f5469cb5.entry.js.map