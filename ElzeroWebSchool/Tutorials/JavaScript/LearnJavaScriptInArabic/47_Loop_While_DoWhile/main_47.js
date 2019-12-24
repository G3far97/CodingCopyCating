/*global console, alert, document, prompt*/

/////////////////////////

/*
    While Syntax:

    while ( Condition ) {

        // Statment

    }

    var i = 0;
    while (i < 10) {
        console.log(i);
        i += 1;
    }
*/

/////////

function generateYears(Start, End) {
    "use strict";
    var years = Start;
    document.write("<select>");
    while (years <= End) {
        document.write("<option value=\"" + years + "\">" + years + "</option>");
        years += 1;
    }
    document.write("</select>");
}

generateYears(1900, 2015); // Mahmoud
generateYears(1950, 2010); // Ahmed
generateYears(2000, 2012); // Osama

/////////

/*
    Do While Vs. While: Do While Executes Atleast Once Before Checking The Condition
    Do While Syntax:

    do {

        // Statment

    } while ( Condition )

    var i = 0;
    do {
        console.log(i);
        i += 1;
    } while (i < 10)
*/

/////////

function generateYears2(Start, End) {
    "use strict";
    var years = Start;
    document.write("<select>");
    do {
        document.write("<option value=\"" + years + "\">" + years + "</option>");
        years += 1;
    } while (years <= End);
    document.write("</select>");
}

generateYears2(1900, 2015); // Mahmoud
generateYears2(1950, 2010); // Ahmed
generateYears2(2000, 2012); // Osama

/////////////////////////