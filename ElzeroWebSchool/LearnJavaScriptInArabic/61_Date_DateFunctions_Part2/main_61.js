/*global console, alert, document, prompt*/

/////////////////////////

/*
    setDate(day[Req]); // Day of The Month, ie. 1-31
    setFullYear(Year[Req], Month[Opt], Day[Opt]); // Set The Full Year
    setHours(Hours[Req], Minutes[Opt], Seconds[Opt], Milliseconds[Opt]); // Set Hours, ie. 0-23
    setMinutes(Minutes[Req], Seconds[Opt], Milliseconds[Opt]); // Set Minutes, ie. 0-59
    setSeconds(Seconds[Req], Milliseconds[Opt]); // Set Seconds, ie. 0-59
    setMilliseconds(Milliseconds[Req]); // Set Milliseconds, ie. 0-999

    setMonth(Month[Req], Day[Opt]);

    Notes:
    If You Enter 0 => Gives You The Last Thing of The Previous
    In Case of Entering Out of Bound Number, Will Give You The First From The Next Thing

    All These Functions Have UTC Version, ie. To Get The International Value Then Modify it, Ex. setUTCDate(), setUTCDay(), etc.
*/

/////////

var theDate = new Date();
theDate.setDate(1); // Modify The Day To 1
theDate.setFullYear(1997, 4); // Modify The Year To 1997, And The Month To May
theDate.setHours(9, 5); // Modify The Hour To 9, And The Minuets To 5
theDate.setMinutes(2, 54); // Override The Minutes To 2, And Modify The Seconds To 54
theDate.setSeconds(23, 21000); // Override The Seconds To 23 + 21 Seconds From The Milliseconds Conversion = 44 Seconds, And 0 Milliseconds
theDate.setMilliseconds(600000); // Override The Minutes To Gain 10 Minutes = 12 Minutes, And Still 44 Seconds, 0 Milliseconds
theDate.setMonth(2); // Override The Month To March

console.log(theDate); // Sat Mar 01 1997 09:12:44 GMT+0200 (Eastern European Standard Time)

/////////////////////////