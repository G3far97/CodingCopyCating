/*global console, alert, document, prompt*/

/////////////////////////

/*
    getDate(); // Day of The Month, ie. 1-31
    getDay(); // Day of The Week, ie. 0-6, Starting From Sunday @index 0 ==> Saturday @index 6
    getFullYear(); // Get The Full Year
    getHours(); // Get Hours, ie. 0-23
    getMinutes(); // Get Minutes, ie. 0-59
    getSeconds(); // Get Seconds, ie. 0-59
    getMilliseconds(); // Get Milliseconds, ie. 0-999
    getTime(); // Get Milliseconds From 1970 or Specific Date
    getTimezoneOffset(); // Get The Difference Between UTC & Your Local Time In Minutes

    Note: All These Functions Have UTC Version, ie. To Get The International Value, Ex. getUTCDate(), getUTCDay(), etc.
*/

/////////

var theDate = new Date(),
    theDay = theDate.getDate(),
    theWeekDay = theDate.getDay(),
    theYear = theDate.getFullYear(),
    theHours = theDate.getHours(),
    theMinutes = theDate.getMinutes(),
    theSeconds = theDate.getSeconds(),
    theMilliseconds = theDate.getMilliseconds(),
    theTime = theDate.getTime(),
    theTimezoneOffset = theDate.getTimezoneOffset();

console.log(theDate); // Tue Dec 03 2019 08:21:11 GMT+0200 (Eastern European Standard Time)
console.log(theDay); // 3
console.log(theWeekDay); // 2
console.log(theYear); // 2019
console.log(theHours); // 8
console.log(theMinutes); // 21
console.log(theSeconds); // 11
console.log(theMilliseconds); // 903
console.log(theTime); // 1575354071903
console.log(theTimezoneOffset); // -120

/////////////////////////