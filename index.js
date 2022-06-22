var date1 = new Date();
var date2 = new Date("Wed Nov 09 2022 00:00:00 GMT+0530 (India Standard Time)");
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
document.write("Total number of days left : " + Math.trunc(Difference_In_Days));