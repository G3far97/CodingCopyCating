/*global console, alert, document, prompt*/

/////////////////////////

// var i = 0;
// for(;;) {
//     if(i > 10) break;
//     console.log(i);
//     i+=1;
// }

/////////

var years,
    startYear = document.getElementById("Start"),
    endYear = document.getElementById("End");

function generateYears() {
    "use strict";
    if (startYear !== null && endYear !== null) {
        document.write("<select>");
        var x = parseInt(startYear.value),
            y = parseInt(endYear.value);
        for (years = x; years <= y; years += 1) {
            document.write("<option value=\"" + years + "\">" + years + "</option>");
        }
        document.write("</select>");
    }
}

// generateYears(1900, 2015); // Mahmoud
// generateYears(1950, 2010); // Ahmed
// generateYears(2000, 2012); // Osama

/////////////////////////