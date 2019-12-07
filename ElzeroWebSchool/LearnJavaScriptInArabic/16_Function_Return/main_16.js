/*global console, alert, document, prompt*/

/////////////////////////

// The Default Value of 'return' = undefined

/////////

function myInfo() {
    "use strict";
    var myName = "Gaafar",
        myAge = "23";
    return myName + " " + myAge;
}
document.getElementById("test1").innerHTML = myInfo();

/////////

function myAgeInDays() {
    "use strict";
    var myAge = 23;
    return myAge * 365;
}
var ageCalc = myAgeInDays();
document.getElementById("test2").innerHTML = "Your Age in Days = " + ageCalc + " Days";

/////////

function myAgeInHours() {
    "use strict";
    var myAge = 23;
    return myAge * 365 * 24;
}
var hoursCalc = myAgeInHours();
document.getElementById("test3").innerHTML = "Your Age in Hours = " + hoursCalc + " Hours";

/////////////////////////