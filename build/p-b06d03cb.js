import{d as _}from"./p-55219373.js";import"./p-3e4c4fe7.js";import"./p-bddf5600.js";import"./p-416f7088.js";import"./p-fe89bef4.js";import"./p-245d8a5c.js";import"./p-529ac440.js";import"./p-0c8f2359.js";import"./p-067fcff5.js";import"./p-807436d6.js";import"./p-6423f684.js";import"./p-099edbe6.js";import"./p-768b95e8.js";import"./p-ddd644c6.js";import"./p-a66e7ea6.js";import"./p-609cb9ab.js";import"./p-81f47ed2.js";import"./p-e7b3487d.js";import"./p-0cf7c05c.js";import"./p-4bd918f5.js";import"./p-020b7fd3.js";import"./p-0bdfaaaa.js";var r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_");var t="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_");var e="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_");var p="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_");var m=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(_,r){var t=_.split("_");return r%10===1&&r%100!==11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function s(_,r,t){var e={mm:r?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};if(t==="m"){return r?"минута":"минуту"}return _+" "+i(e[t],+_)}var o=function _(e,p){if(m.test(p)){return r[e.month()]}return t[e.month()]};o.s=t;o.f=r;var a=function _(r,t){if(m.test(t)){return e[r.month()]}return p[r.month()]};a.s=p;a.f=e;var f={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:a,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function _(r){return r},meridiem:function _(r){if(r<4){return"ночи"}else if(r<12){return"утра"}else if(r<17){return"дня"}return"вечера"}};_.locale(f,null,true);export default f;
//# sourceMappingURL=p-b06d03cb.js.map