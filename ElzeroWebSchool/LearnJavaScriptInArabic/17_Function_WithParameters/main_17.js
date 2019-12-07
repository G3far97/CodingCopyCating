/*global console, alert, document, prompt*/

/////////////////////////

function myAgeInDays(myAge) {
    "use strict";
    return myAge * 365;
}
var dynamicAge = prompt("What's Your Age ?");
document.getElementById("test2").innerHTML = "Your Age in Days = " + myAgeInDays(dynamicAge) + " Days";

/////////

function sayHello(firstName, middleName, lastName) {
    "use strict";
    return "Hello " + firstName + " " + middleName + " " + lastName + " How Are You Today ?";
}
document.getElementById("test1").innerHTML = sayHello("Ahmed", "Hisham", "Fouad");

/////////

function makeDiscount(price) {
    "use strict";
    var discount = 200;
    return price - discount;
}
document.getElementById("test3").innerHTML = makeDiscount(900); // 900 - 200 = 700

/////////////////////////