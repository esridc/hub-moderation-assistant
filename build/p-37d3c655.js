import{d as r}from"./p-55219373.js";import"./p-3e4c4fe7.js";import"./p-bddf5600.js";import"./p-416f7088.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-529ac440.js";import"./p-0c8f2359.js";import"./p-067fcff5.js";import"./p-807436d6.js";import"./p-6423f684.js";import"./p-099edbe6.js";import"./p-768b95e8.js";import"./p-ddd644c6.js";import"./p-a66e7ea6.js";import"./p-609cb9ab.js";import"./p-81f47ed2.js";import"./p-e7b3487d.js";import"./p-0cf7c05c.js";import"./p-4bd918f5.js";import"./p-020b7fd3.js";import"./p-0bdfaaaa.js";var p="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_");var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"};var m={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};var o={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:p,monthsShort:p,weekStart:6,meridiem:function r(p){return p>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function r(p){return p.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(r){return m[r]})).replace(/،/g,",")},postformat:function r(p){return p.replace(/\d/g,(function(r){return t[r]})).replace(/,/g,"،")},ordinal:function r(p){return p},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};r.locale(o,null,true);export default o;
//# sourceMappingURL=p-37d3c655.js.map