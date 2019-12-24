/*global console, alert, document, prompt*/

/////////////////////////

/*
    now(); // Returns The Date in Milliseconds Starting From 1970 Till Now
    parse(Date); // Returns The Date in Milliseconds Starting From 1970 Till A Specific 'Date'

    toIsoString(); // Returns The Date in Iso Format
    toDateString();
    toTimeString();
*/

/////////

var theDate = new Date(),
    now = Date.now(),
    min = 1000 * 60,
    hour = min * 60,
    day = hour * 24,
    month = day * 30,
    year = month * 12;

console.log(theDate); // Tue Dec 03 2019 11:11:56 GMT+0200 (Eastern European Standard Time)
console.log(now); // 1575364316053

console.log(Math.round(now / year)); // 51

/////////

var theDate2 = new Date(),
    myDate = Date.parse("May 1, 1997"),
    min2 = 1000 * 60,
    hour2 = min * 60,
    day2 = hour * 24,
    month2 = day * 30,
    year2 = month * 12;

console.log(theDate2); // Tue Dec 03 2019 11:11:56 GMT+0200 (Eastern European Standard Time)
console.log(myDate); // 862434000000

console.log(Math.round(myDate / year2)); // 28

/////////

var theDate3 = new Date(),
    myIso = theDate3.toISOString();

console.log(theDate3); // Tue Dec 03 2019 11:11:56 GMT+0200 (Eastern European Standard Time)
console.log(myIso); // 2019-12-03T09:11:56.054Z

/////////

var theDate4 = new Date(),
    myDateString = theDate4.toDateString();

console.log(theDate4); // Tue Dec 03 2019 11:11:56 GMT+0200 (Eastern European Standard Time)
console.log(myDateString); // Tue Dec 03 2019

/////////

var theDate5 = new Date(),
    myTimeString = theDate5.toTimeString();

console.log(theDate5); // Tue Dec 03 2019 11:11:56 GMT+0200 (Eastern European Standard Time)
console.log(myTimeString); // 11:11:56 GMT+0200 (Eastern European Standard Time)

/////////////////////////