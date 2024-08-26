/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{d as e}from"./p-dde88d02.js";import"./p-5dcb8a70.js";import"./p-c1f3c681.js";import"./p-180fb587.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-79519f9a.js";import"./p-fbdfad6a.js";import"./p-d6cfcab9.js";import"./p-6ecb195b.js";import"./p-e38f29cd.js";import"./p-9658e553.js";import"./p-4cc0e90d.js";import"./p-f429933e.js";import"./p-0e6a32ae.js";import"./p-3c9a38fe.js";import"./p-0bb7e4c2.js";import"./p-bad38bf3.js";import"./p-f09f68ca.js";import"./p-6bdbf5f7.js";import"./p-fd0590d0.js";function r(e){return e>1&&e<5&&~~(e/10)!==1}function t(e,t,s,n){var m=e+" ";switch(s){case"s":return t||n?"pár sekund":"pár sekundami";case"m":return t?"minuta":n?"minutu":"minutou";case"mm":if(t||n){return m+(r(e)?"minuty":"minut")}return m+"minutami";case"h":return t?"hodina":n?"hodinu":"hodinou";case"hh":if(t||n){return m+(r(e)?"hodiny":"hodin")}return m+"hodinami";case"d":return t||n?"den":"dnem";case"dd":if(t||n){return m+(r(e)?"dny":"dní")}return m+"dny";case"M":return t||n?"měsíc":"měsícem";case"MM":if(t||n){return m+(r(e)?"měsíce":"měsíců")}return m+"měsíci";case"y":return t||n?"rok":"rokem";case"yy":if(t||n){return m+(r(e)?"roky":"let")}return m+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function e(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};e.locale(s,null,true);export{s as default};
//# sourceMappingURL=p-16cf8fbe.js.map