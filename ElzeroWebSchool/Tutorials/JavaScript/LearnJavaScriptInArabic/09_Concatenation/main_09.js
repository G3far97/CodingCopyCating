/*global console, alert, document*/

/////////////////////////

// 2 + 3 = 5, Then A string Comes = "510", Conacitenate 3 = "5103", Evalute The Brackets = "510311".
var $myAge = 2 + 3 + "10" + 3 + (6 + 5),
    _myAge = "10" + 2 + 3, // "10" + "2" + "3" = "1023".
    myName = "Gaafar",
    myAge = 23,
    myCountry = "Egypt";
document.getElementById("test1").innerHTML = $myAge;
document.getElementById("test2").innerHTML = _myAge;
document.getElementById("test3").innerHTML =
        "<span style=\"color:red\">My Name Is</span>: <span style=\"color:green\">" + myName + "</span>," + "<br>" +
        "My Age Is: " + myAge + "<br>" +
        "And My Country Is: " + myCountry + "." + "<br>";

/////////////////////////