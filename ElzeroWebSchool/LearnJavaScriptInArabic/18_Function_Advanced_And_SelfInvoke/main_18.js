/*global console, alert, document, prompt*/

/////////////////////////

// The Order In JavaScript is Irrelevent, Which Means That You Can Call The Method Before it's Defenation.
// It's Not Recommended Thogh
// function myFunc() {
//     "use strict";
//     alert("My Function");
// }
// myFunc();

/////////

// Self Invoke
// (function sayWelcome() {
//     "use strict";
//     alert("Welcome To My Website");
// }());

/////////

function convertUsdToRiyal() {
    "use strict";
    var amount = document.getElementById("dollar").value,
        result = amount * 3.75,
        message = document.getElementById("message");
    if (amount === "") { // Amount Can't Be Empty
        message.innerHTML = "This Field Can't Be Empty";
    } else if (isNaN(amount)) { // Amount Must Be A Number
        message.innerHTML = "Wake Up!!! This is Not A Number!";
    } else if (amount <= "0") { // Amount Must Be Greater Than 0
        message.innerHTML = "The Amount Has To Be Greater Than 0, Get Educated!!!";
    } else {
        message.innerHTML = amount + " Dollars Worth " + result + " Riyals";
    }
}

/////////////////////////