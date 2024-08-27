/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */
import{d as i}from"./p-dde88d02.js";import"./p-5dcb8a70.js";import"./p-c1f3c681.js";import"./p-180fb587.js";import"./p-8aebc84a.js";import"./p-09a4f06c.js";import"./p-79519f9a.js";import"./p-fbdfad6a.js";import"./p-d6cfcab9.js";import"./p-6ecb195b.js";import"./p-e38f29cd.js";import"./p-9658e553.js";import"./p-4cc0e90d.js";import"./p-f429933e.js";import"./p-0e6a32ae.js";import"./p-3c9a38fe.js";import"./p-0bb7e4c2.js";import"./p-bad38bf3.js";import"./p-f09f68ca.js";import"./p-6bdbf5f7.js";import"./p-fd0590d0.js";function r(i){return i%10<5&&i%10>1&&~~(i/10)%10!==1}function e(i,e,t){var a=i+" ";switch(t){case"m":return e?"minuta":"minutę";case"mm":return a+(r(i)?"minuty":"minut");case"h":return e?"godzina":"godzinę";case"hh":return a+(r(i)?"godziny":"godzin");case"MM":return a+(r(i)?"miesiące":"miesięcy");case"yy":return a+(r(i)?"lata":"lat")}}var t="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");var a="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");var p=/D MMMM/;var s=function i(r,e){if(p.test(e)){return t[r.month()]}return a[r.month()]};s.s=a;s.f=t;var _={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:s,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function i(r){return r+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:e,mm:e,h:e,hh:e,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:e,y:"rok",yy:e},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};i.locale(_,null,true);export{_ as default};
//# sourceMappingURL=p-e14bc018.js.map