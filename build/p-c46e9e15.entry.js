import{r as e,c as t,h as i,g as s}from"./p-3e4c4fe7.js";import{n as a}from"./p-067fcff5.js";import{i as c,c as n,d as o}from"./p-768b95e8.js";import{u as r,c as h,s as l,d}from"./p-0cf7c05c.js";import{a as u,p as f,i as b,b as p,g as m,c as k,d as w,e as v,h as g,j as y,m as x}from"./p-81f47ed2.js";import{g as S}from"./p-6423f684.js";import{c as D,s as $,a as I}from"./p-099edbe6.js";import{d as A,g as z}from"./p-e7b3487d.js";import"./p-416f7088.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-ddd644c6.js";import"./p-0c8f2359.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const C={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonFractionalSecondDown:"button--fractionalSecond-down",buttonFractionalSecondUp:"button--fractionalSecond-up",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",fractionalSecond:"fractionalSecond",hour:"hour",input:"input",inputFocus:"inputFocus",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"};const M=":host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-color-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-color-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-color-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-2);z-index:var(--calcite-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;outline-offset:0}.time-picker .input.inputFocus,.time-picker .input:hover.inputFocus{box-shadow:inset 0 0 0 2px var(--calcite-color-brand);z-index:var(--calcite-z-index-header)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";function F(e){return e.charAt(0).toUpperCase()+e.slice(1)}const j=class{constructor(i){e(this,i);this.calciteInternalTimePickerBlur=t(this,"calciteInternalTimePickerBlur",6);this.calciteInternalTimePickerChange=t(this,"calciteInternalTimePickerChange",6);this.calciteInternalTimePickerFocus=t(this,"calciteInternalTimePickerFocus",6);this.pointerActivated=false;this.decrementHour=()=>{const e=!this.hour?0:this.hour==="00"?23:parseInt(this.hour)-1;this.setValuePart("hour",e)};this.decrementMeridiem=()=>{const e=this.meridiem==="PM"?"AM":"PM";this.setValuePart("meridiem",e)};this.decrementMinuteOrSecond=e=>{let t;if(c(this[e])){const i=parseInt(this[e]);t=i===0?59:i-1}else{t=59}this.setValuePart(e,t)};this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")};this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")};this.focusHandler=e=>{if(this.pointerActivated){return}this.activeEl=e.currentTarget};this.fractionalSecondKeyDownHandler=e=>{const{key:t}=e;if(a.includes(t)){const e=A(this.step);const i=parseInt(this.fractionalSecond);const s=i.toString().length;let a;if(s>=e){a=t.padStart(e,"0")}else if(s<e){a=`${i}${t}`.padStart(e,"0")}this.setValuePart("fractionalSecond",parseFloat(`0.${a}`))}else{switch(t){case"Backspace":case"Delete":this.setValuePart("fractionalSecond",null);break;case"ArrowDown":e.preventDefault();this.nudgeFractionalSecond("down");break;case"ArrowUp":e.preventDefault();this.nudgeFractionalSecond("up");break;case" ":e.preventDefault();break}}};this.fractionalSecondDownClickHandler=()=>{this.activeEl=this.fractionalSecondEl;this.fractionalSecondEl.focus();this.nudgeFractionalSecond("down")};this.fractionalSecondUpClickHandler=()=>{this.activeEl=this.fractionalSecondEl;this.fractionalSecondEl.focus();this.nudgeFractionalSecond("up")};this.hourDownClickHandler=()=>{this.activeEl=this.hourEl;this.hourEl.focus();this.decrementHour()};this.hourKeyDownHandler=e=>{const{key:t}=e;if(a.includes(t)){const e=parseInt(t);let i;if(c(this.hour)){switch(this.hourCycle){case"12":i=this.hour==="01"&&e>=0&&e<=2?`1${e}`:e;break;case"24":if(this.hour==="01"){i=`1${e}`}else if(this.hour==="02"&&e>=0&&e<=3){i=`2${e}`}else{i=e}break}}else{i=e}this.setValuePart("hour",i)}else{switch(t){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":e.preventDefault();this.decrementHour();break;case"ArrowUp":e.preventDefault();this.incrementHour();break;case" ":e.preventDefault();break}}};this.hourUpClickHandler=()=>{this.activeEl=this.hourEl;this.hourEl.focus();this.incrementHour()};this.incrementMeridiem=()=>{const e=this.meridiem==="AM"?"PM":"AM";this.setValuePart("meridiem",e)};this.incrementHour=()=>{const e=c(this.hour)?this.hour==="23"?0:parseInt(this.hour)+1:1;this.setValuePart("hour",e)};this.incrementMinuteOrSecond=e=>{const t=c(this[e])?this[e]==="59"?0:parseInt(this[e])+1:0;this.setValuePart(e,t)};this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")};this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")};this.inputClickHandler=e=>{this.activeEl=e.target};this.meridiemUpClickHandler=()=>{this.activeEl=this.meridiemEl;this.meridiemEl.focus();this.incrementMeridiem()};this.meridiemKeyDownHandler=e=>{switch(e.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":e.preventDefault();this.incrementMeridiem();break;case"ArrowDown":e.preventDefault();this.decrementMeridiem();break;case" ":e.preventDefault();break}};this.meridiemDownClickHandler=()=>{this.activeEl=this.meridiemEl;this.meridiemEl.focus();this.decrementMeridiem()};this.minuteDownClickHandler=()=>{this.activeEl=this.minuteEl;this.minuteEl.focus();this.decrementMinute()};this.minuteUpClickHandler=()=>{this.activeEl=this.minuteEl;this.minuteEl.focus();this.incrementMinute()};this.minuteKeyDownHandler=e=>{const{key:t}=e;if(a.includes(t)){const e=parseInt(t);let i;if(c(this.minute)&&this.minute.startsWith("0")){const t=parseInt(this.minute);i=t>x?e:`${t}${e}`}else{i=e}this.setValuePart("minute",i)}else{switch(t){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":e.preventDefault();this.decrementMinute();break;case"ArrowUp":e.preventDefault();this.incrementMinute();break;case" ":e.preventDefault();break}}};this.nudgeFractionalSecond=e=>{const t=z(this.step);const i=A(this.step);const s=parseInt(this.fractionalSecond);const a=parseFloat(`0.${this.fractionalSecond}`);let c;let n;let o;let r;if(e==="up"){c=isNaN(s)?0:a+t;n=parseFloat(c.toFixed(i));o=z(n);r=n<1&&A(o)>0?u(o,i):"".padStart(i,"0")}if(e==="down"){c=isNaN(s)||s===0?1-t:a-t;n=parseFloat(c.toFixed(i));o=z(n);r=n<1&&A(o)>0&&Math.sign(o)===1?u(o,i):"".padStart(i,"0")}this.setValuePart("fractionalSecond",r)};this.sanitizeValue=e=>{const{hour:t,minute:i,second:s,fractionalSecond:a}=f(e);if(a){const e=this.sanitizeFractionalSecond(a);return`${t}:${i}:${s}.${e}`}return b(e)&&e};this.sanitizeFractionalSecond=e=>e&&A(this.step)!==e.length?parseFloat(`0.${e}`).toFixed(A(this.step)).replace("0.",""):e;this.secondKeyDownHandler=e=>{const{key:t}=e;if(a.includes(t)){const e=parseInt(t);let i;if(c(this.second)&&this.second.startsWith("0")){const t=parseInt(this.second);i=t>x?e:`${t}${e}`}else{i=e}this.setValuePart("second",i)}else{switch(t){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":e.preventDefault();this.decrementSecond();break;case"ArrowUp":e.preventDefault();this.incrementSecond();break;case" ":e.preventDefault();break}}};this.secondDownClickHandler=()=>{this.activeEl=this.secondEl;this.secondEl.focus();this.decrementSecond()};this.secondUpClickHandler=()=>{this.activeEl=this.secondEl;this.secondEl.focus();this.incrementSecond()};this.setHourEl=e=>this.hourEl=e;this.setMeridiemEl=e=>this.meridiemEl=e;this.setMinuteEl=e=>this.minuteEl=e;this.setSecondEl=e=>this.secondEl=e;this.setFractionalSecondEl=e=>this.fractionalSecondEl=e;this.setValue=e=>{if(b(e)){const{hour:t,minute:i,second:s,fractionalSecond:a}=f(e);const{effectiveLocale:c,numberingSystem:n}=this;const{localizedHour:o,localizedHourSuffix:r,localizedMinute:h,localizedMinuteSuffix:l,localizedSecond:d,localizedDecimalSeparator:u,localizedFractionalSecond:b,localizedSecondSuffix:k,localizedMeridiem:w}=p({value:e,locale:c,numberingSystem:n});this.hour=t;this.minute=i;this.second=s;this.fractionalSecond=this.sanitizeFractionalSecond(a);this.localizedHour=o;this.localizedHourSuffix=r;this.localizedMinute=h;this.localizedMinuteSuffix=l;this.localizedSecond=d;this.localizedDecimalSeparator=u;this.localizedFractionalSecond=b;this.localizedSecondSuffix=k;if(w){this.localizedMeridiem=w;this.meridiem=m(this.hour)}}else{this.hour=null;this.fractionalSecond=null;this.localizedHour=null;this.localizedHourSuffix=k("hour",this.effectiveLocale,this.numberingSystem);this.localizedMeridiem=null;this.localizedMinute=null;this.localizedMinuteSuffix=k("minute",this.effectiveLocale,this.numberingSystem);this.localizedSecond=null;this.localizedDecimalSeparator=w(this.effectiveLocale,this.numberingSystem);this.localizedFractionalSecond=null;this.localizedSecondSuffix=k("second",this.effectiveLocale,this.numberingSystem);this.meridiem=null;this.minute=null;this.second=null;this.value=null}};this.setValuePart=(e,t)=>{var i,s;const{effectiveLocale:a,numberingSystem:n}=this;if(e==="meridiem"){this.meridiem=t;if(c(this.hour)){const e=parseInt(this.hour);switch(t){case"AM":if(e>=12){this.hour=u(e-12)}break;case"PM":if(e<12){this.hour=u(e+12)}break}this.localizedHour=v({value:this.hour,part:"hour",locale:a,numberingSystem:n})}}else if(e==="fractionalSecond"){const e=A(this.step);if(typeof t==="number"){this.fractionalSecond=t===0?"".padStart(e,"0"):u(t,e)}else{this.fractionalSecond=t}this.localizedFractionalSecond=v({value:this.fractionalSecond,part:"fractionalSecond",locale:a,numberingSystem:n})}else{this[e]=typeof t==="number"?u(t):t;this[`localized${F(e)}`]=v({value:this[e],part:e,locale:a,numberingSystem:n})}let o=false;let r;if(this.hour&&this.minute){r=`${this.hour}:${this.minute}`;if(this.showSecond){r=`${r}:${(i=this.second)!==null&&i!==void 0?i:"00"}`;if(this.showFractionalSecond&&this.fractionalSecond){r=`${r}.${this.fractionalSecond}`}}}else{r=null}if(this.value!==r){o=true}this.value=r;this.localizedMeridiem=this.value?((s=p({value:this.value,locale:a,numberingSystem:n}))===null||s===void 0?void 0:s.localizedMeridiem)||null:v({value:this.meridiem,part:"meridiem",locale:a,numberingSystem:n});if(o){this.calciteInternalTimePickerChange.emit()}};this.scale="m";this.step=60;this.numberingSystem=undefined;this.value=null;this.messages=undefined;this.messageOverrides=undefined;this.activeEl=undefined;this.effectiveLocale="";this.fractionalSecond=undefined;this.hour=undefined;this.hourCycle=undefined;this.localizedDecimalSeparator=".";this.localizedHour=undefined;this.localizedHourSuffix=undefined;this.localizedMeridiem=undefined;this.localizedFractionalSecond=undefined;this.localizedMinute=undefined;this.localizedMinuteSuffix=undefined;this.localizedSecond=undefined;this.localizedSecondSuffix=undefined;this.meridiem=undefined;this.minute=undefined;this.second=undefined;this.showFractionalSecond=undefined;this.showSecond=undefined;this.defaultMessages=undefined}stepChange(){this.toggleSecond()}valueWatcher(e){this.setValue(e)}onMessagesChange(){}effectiveLocaleWatcher(){this.updateLocale()}blurHandler(){this.activeEl=undefined;this.pointerActivated=false;this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(e){this.pointerActivated=false;const{defaultPrevented:t,key:i}=e;if(t){return}switch(this.activeEl){case this.hourEl:if(i==="ArrowRight"){this.focusPart("minute");e.preventDefault()}break;case this.minuteEl:switch(i){case"ArrowLeft":this.focusPart("hour");e.preventDefault();break;case"ArrowRight":if(this.step!==60){this.focusPart("second");e.preventDefault()}else if(this.hourCycle==="12"){this.focusPart("meridiem");e.preventDefault()}break}break;case this.secondEl:switch(i){case"ArrowLeft":this.focusPart("minute");e.preventDefault();break;case"ArrowRight":if(this.showFractionalSecond){this.focusPart("fractionalSecond")}else if(this.hourCycle==="12"){this.focusPart("meridiem");e.preventDefault()}break}break;case this.fractionalSecondEl:switch(i){case"ArrowLeft":this.focusPart("second");e.preventDefault();break;case"ArrowRight":if(this.hourCycle==="12"){this.focusPart("meridiem");e.preventDefault()}break}break;case this.meridiemEl:switch(i){case"ArrowLeft":if(this.showFractionalSecond){this.focusPart("fractionalSecond")}else if(this.step!==60){this.focusPart("second");e.preventDefault()}else{this.focusPart("minute");e.preventDefault()}break}break}}pointerDownHandler(){this.pointerActivated=true}async setFocus(){var e;await D(this);(e=this.el)===null||e===void 0?void 0:e.focus()}async focusPart(e){var t;await D(this);(t=this[`${e||"hour"}El`])===null||t===void 0?void 0:t.focus()}toggleSecond(){this.showSecond=this.step<60;this.showFractionalSecond=A(this.step)>0}updateLocale(){r(this,this.effectiveLocale);this.hourCycle=g(this.effectiveLocale,this.numberingSystem);this.localizedDecimalSeparator=w(this.effectiveLocale,this.numberingSystem);this.meridiemOrder=y(this.effectiveLocale);this.setValue(this.sanitizeValue(this.value))}connectedCallback(){n(this);this.updateLocale();h(this);this.toggleSecond()}async componentWillLoad(){$(this);await l(this)}componentDidLoad(){I(this)}disconnectedCallback(){o(this);d(this)}render(){const e=c(this.hour);const t=S(this.scale);const s=c(this.minute);const a=c(this.second);const n=c(this.fractionalSecond);const o=this.hourCycle==="12";return i("div",{key:"d5039206cbfa6109176b2c8b0658f18bf44b1331",class:{[C.timePicker]:true,[C.showMeridiem]:o,[C.showSecond]:this.showSecond,[C[`scale-${this.scale}`]]:true},dir:"ltr"},i("div",{key:"4a39656a37249af5ff6df76fd77db246fa748c9d",class:C.column,role:"group"},i("span",{key:"ec4eef25dc3b26f896f778ba6c3eff916f64e612","aria-label":this.messages.hourUp,class:{[C.button]:true,[C.buttonHourUp]:true,[C.buttonTopLeft]:true},onClick:this.hourUpClickHandler,role:"button"},i("calcite-icon",{key:"cb00900c5c4eef3b2b274ffc3a0b9260fa791f9b",icon:"chevron-up",scale:t})),i("span",{key:"13f4bfdcd4bbffcf41a51b3fdfd0c365feee1395","aria-label":this.messages.hour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":e&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[C.input]:true,[C.hour]:true,[C.inputFocus]:this.activeEl&&this.activeEl===this.hourEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,ref:this.setHourEl,role:"spinbutton",tabIndex:0},this.localizedHour||"--"),i("span",{key:"0ccfcd3eeb04e85f7da68a93e098cf9512917ce5","aria-label":this.messages.hourDown,class:{[C.button]:true,[C.buttonHourDown]:true,[C.buttonBottomLeft]:true},onClick:this.hourDownClickHandler,role:"button"},i("calcite-icon",{key:"4192e90218a65516ecde8a458787610f9b9edd19",icon:"chevron-down",scale:t}))),i("span",{key:"dcd3c4dd5b288d58399c14fd0ed900c5c5f232c8",class:C.delimiter},this.localizedHourSuffix),i("div",{key:"c76be45fb0e44c8ebc4eb9b8f3fe1f2bbce6ff2a",class:C.column,role:"group"},i("span",{key:"33ced1cb8a027ff0cf97405d6e237ae8edfc752c","aria-label":this.messages.minuteUp,class:{[C.button]:true,[C.buttonMinuteUp]:true},onClick:this.minuteUpClickHandler,role:"button"},i("calcite-icon",{key:"8e76ca8a979024044251d8fa7238d78b21f1ab7d",icon:"chevron-up",scale:t})),i("span",{key:"1624aa7493b83aa3ebe4ad8f98d747357cb85133","aria-label":this.messages.minute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":s&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[C.input]:true,[C.minute]:true,[C.inputFocus]:this.activeEl&&this.activeEl===this.minuteEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,ref:this.setMinuteEl,role:"spinbutton",tabIndex:0},this.localizedMinute||"--"),i("span",{key:"c49716f1dc2b7b38919ad223aead9238afc578c4","aria-label":this.messages.minuteDown,class:{[C.button]:true,[C.buttonMinuteDown]:true},onClick:this.minuteDownClickHandler,role:"button"},i("calcite-icon",{key:"71993e8095abe2cc7c59f85570f65d21f79d2a1a",icon:"chevron-down",scale:t}))),this.showSecond&&i("span",{key:"04deb17685d535f071c173306c9f130e40b7dca2",class:C.delimiter},this.localizedMinuteSuffix),this.showSecond&&i("div",{key:"f9ef625ca2de1e3f4b51eaffe5c110919cfefcaf",class:C.column,role:"group"},i("span",{key:"449a6e446bdeec64f2fc2ff9b3e28b35c9fac974","aria-label":this.messages.secondUp,class:{[C.button]:true,[C.buttonSecondUp]:true},onClick:this.secondUpClickHandler,role:"button"},i("calcite-icon",{key:"2264a34b57406266a37fb410636b3b90450444ee",icon:"chevron-up",scale:t})),i("span",{key:"354db8faf89154c0e35b916fbce4589983c60391","aria-label":this.messages.second,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":a&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[C.input]:true,[C.second]:true,[C.inputFocus]:this.activeEl&&this.activeEl===this.secondEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,ref:this.setSecondEl,role:"spinbutton",tabIndex:0},this.localizedSecond||"--"),i("span",{key:"bcbb4dd9b52ee9d181c82872bdf052baf616f36f","aria-label":this.messages.secondDown,class:{[C.button]:true,[C.buttonSecondDown]:true},onClick:this.secondDownClickHandler,role:"button"},i("calcite-icon",{key:"929587373f82a19260f9523391dd66c8efb75142",icon:"chevron-down",scale:t}))),this.showFractionalSecond&&i("span",{key:"7a8c6a7617c2e2297f2af95bb7dd86b6e3ab467c",class:C.delimiter},this.localizedDecimalSeparator),this.showFractionalSecond&&i("div",{key:"30670756880931411b29affce8882a918477a84e",class:C.column,role:"group"},i("span",{key:"21e24abf5a5cf4b2e09e35cf6dd34e2579b239ff","aria-label":this.messages.fractionalSecondUp,class:{[C.button]:true,[C.buttonFractionalSecondUp]:true},onClick:this.fractionalSecondUpClickHandler,role:"button"},i("calcite-icon",{key:"f63960ef5b8ba94dcfde877a5afbb8627e7746f8",icon:"chevron-up",scale:t})),i("span",{key:"320dcee216bb975470a901a10704f6d5c3964fea","aria-label":this.messages.fractionalSecond,"aria-valuemax":"999","aria-valuemin":"1","aria-valuenow":n&&parseInt(this.fractionalSecond)||"0","aria-valuetext":this.localizedFractionalSecond,class:{[C.input]:true,[C.fractionalSecond]:true,[C.inputFocus]:this.activeEl&&this.activeEl===this.fractionalSecondEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.fractionalSecondKeyDownHandler,ref:this.setFractionalSecondEl,role:"spinbutton",tabIndex:0},this.localizedFractionalSecond||"--"),i("span",{key:"c50801abf8b63bd907e4bcc74cf89c0645fe8a8d","aria-label":this.messages.fractionalSecondDown,class:{[C.button]:true,[C.buttonFractionalSecondDown]:true},onClick:this.fractionalSecondDownClickHandler,role:"button"},i("calcite-icon",{key:"fdc6bd9e080141a81e353a2ce1da7e8239481c28",icon:"chevron-down",scale:t}))),this.localizedSecondSuffix&&i("span",{key:"132cccc017aab84aa27e95a70513c85a25ae43bb",class:C.delimiter},this.localizedSecondSuffix),o&&i("div",{key:"9d35ac58eb3febd7365bf8f5d5422a2b82e7b58c",class:{[C.column]:true,[C.meridiemStart]:this.meridiemOrder===0},role:"group"},i("span",{key:"89f0d5da6089d4497fc1b26c9b49053881225aa0","aria-label":this.messages.meridiemUp,class:{[C.button]:true,[C.buttonMeridiemUp]:true,[C.buttonTopRight]:true},onClick:this.meridiemUpClickHandler,role:"button"},i("calcite-icon",{key:"cbebff3749840bd6de63f96eab55e3e1d7e6fe9a",icon:"chevron-up",scale:t})),i("span",{key:"b4f0bd3e47d8cbfadfab045a9c87dbd539f0ee06","aria-label":this.messages.meridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":this.meridiem==="PM"&&"2"||"1","aria-valuetext":this.meridiem,class:{[C.input]:true,[C.meridiem]:true,[C.inputFocus]:this.activeEl&&this.activeEl===this.meridiemEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,ref:this.setMeridiemEl,role:"spinbutton",tabIndex:0},this.localizedMeridiem||"--"),i("span",{key:"4c4530826eaa567d8a23757601539b3432464b52","aria-label":this.messages.meridiemDown,class:{[C.button]:true,[C.buttonMeridiemDown]:true,[C.buttonBottomRight]:true},onClick:this.meridiemDownClickHandler,role:"button"},i("calcite-icon",{key:"835a086eb26e6548b89257ba9709863783e7d115",icon:"chevron-down",scale:t}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{step:["stepChange"],value:["valueWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};j.style=M;export{j as calcite_time_picker};
//# sourceMappingURL=p-c46e9e15.entry.js.map