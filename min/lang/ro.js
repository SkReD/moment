// moment.js language configuration
// language : romanian (ro)
// author : Vlad Gurdiga : https://github.com/gurdiga
// author : Valentin Agachi : https://github.com/avaly
!function(){function e(e){e.lang("ro",{months:"Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),monthsShort:"Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"),weekdays:"Duminic\u0103_Luni_Mar\u0163i_Miercuri_Joi_Vineri_S\xe2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xe2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xeen urm\u0103",s:"c\xe2teva secunde",m:"un minut",mm:"%d minute",h:"o or\u0103",hh:"%d ore",d:"o zi",dd:"%d zile",M:"o lun\u0103",MM:"%d luni",y:"un an",yy:"%d ani"},week:{dow:1,doy:7}})}if(typeof define==="function"&&define.amd){define(["moment"],e)}if(typeof window!=="undefined"&&window.moment){e(window.moment)}}();