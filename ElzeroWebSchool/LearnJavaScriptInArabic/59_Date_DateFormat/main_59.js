/*global console, alert, document, prompt*/

/////////////////////////

/*
    Full Format
    Long Format
    Short Format
    Iso Format

    Js Ignores Commas
    Js Month Insensitive
    [Month Day Year] or [Day Month Year]
*/

/////////

// Full Format

var theDate = new Date("May 1, 1997 12:00:00"); // You don't Have To Write Every Detail, Non-Written Elements Will be Defaulted
console.log(theDate); // Thu May 01 1997 12:00:00 GMT+0300 (Eastern European Summer Time)

/////////

// Long Format

var theDate2 = new Date("May 1 1997 12:00:00"); // Can Ignore commas, swapping Elements and Capital and Full-Length Months
console.log(theDate2); // Thu May 01 1997 12:00:00 GMT+0300 (Eastern European Summer Time)

/////////

// Short Format
// Note: Year Could Be At The Beginning Or The End, But The Month Has To Come Before The Day

var theDate3 = new Date("10/25/1982"); // ( Month/Day/Year Hours:Minuts:Seconds )
console.log(theDate3); // Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)

var theDate4 = new Date("1997/5/1 9:20:50"); // ( Month/Day/Year Hours:Minuts:Seconds )
console.log(theDate4); // Thu May 01 1997 09:20:50 GMT+0300 (Eastern European Summer Time)

/////////

// Iso Format => new Date(YYYY-MM-DD hh:mm:ss TZD)

var theDate5 = new Date("1982-10-25 09:20:50 +3:00");
console.log(theDate5); // Mon Oct 25 1982 08:20:50 GMT+0200 (Eastern European Standard Time)

/////////////////////////