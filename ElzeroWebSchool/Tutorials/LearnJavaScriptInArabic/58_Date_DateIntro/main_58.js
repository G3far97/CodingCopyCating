/*global console, alert, document, prompt*/

/////////////////////////

// new Date(); // Print Current Date & Time

var theDate = new Date();
console.log(theDate); // Current Date & Time, Ex. Tue Dec 03 2019 06:49:00 GMT+0200 (Eastern European Standard Time)
console.log(typeof(theDate)); // object

/////////

// new Date(Millseconds); // Print Millseconds From UTC 1 Jan 1970 00:00:00 // 1000 Millseconds = 1 Second

var theDate2 = new Date(10000);
console.log(theDate2); // Date & Time, Ex. Thu Jan 01 1970 02:00:10 GMT+0200 (Eastern European Standard Time)

/////////

// new Date(DateString); // Can Add Data String => new Date("Month Day, Year Hour:Minute:Seconds")

var theDate3 = new Date("May 1, 1997 12:20:50");
console.log(theDate3); // Thu May 01 1997 12:20:50 GMT+0300 (Eastern European Summer Time)

/////////

// new Date(7 arguments) => new Date(Year, Month, Day, Hour, Minutes, Seconds, Millseconds)
// Note: Month Numbering Starts From 0

var theDate4 = new Date(1997, 4, 1, 12, 0, 10, 0);
console.log(theDate4); // Thu May 01 1997 12:00:10 GMT+0300 (Eastern European Summer Time)

/////////////////////////