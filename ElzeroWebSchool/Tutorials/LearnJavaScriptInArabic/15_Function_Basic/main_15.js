/*global console, alert, document, prompt*/

/////////////////////////

// function = Reserved KeyWord For Functions In JavaScript
//var myName = "Sayed";
function sayHi() {
    "use strict"; // This One Will be Discussed Later
    var myName = "Sayed";
    if (myName === "Gaafar") {
        alert('Hello ' + myName + ' You Are Welcome');
    } else {
        alert('Hello ' + myName + ' You Are Not Welcome');
    }
}
//alert('Hello ' + myName + ' From Outside The Function');
sayHi();

/////////////////////////