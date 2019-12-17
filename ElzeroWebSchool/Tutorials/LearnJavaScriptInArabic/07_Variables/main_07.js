/*global console, alert, document*/

/////////////////////////

/*
    Start With Letters, Underscore, $
    Cannot Be A Reserved Word ( var, function, if, return,  )
    var = JavaScript Variable Keyword
    myPrice = Variable Name
    ( = ) = Assignment Operator
    100 = Variable Vsalue
*/

var myPrice, _myPrice, $myPrice; // Declared But Undefined Variable ( Initial Value = 'undefined' )
myPrice = 100;

var _myOldPrice2 = 200; // Declared And Initialized Variable

/////////////////////////

var // My Product Prices
    myOldPrice = 2000,
    myNewPrice = 900,
    myDiscount = myOldPrice - myNewPrice + 500; // 1000 - 900 + 500 = 100

document.getElementById("price").innerHTML = myDiscount;

/////////////////////////

// Why We Use Variables
var mainPrice = 500,
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;

document.getElementById("myPrice").innerHTML = mainPrice; // 500
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 500 - 50 = 450
document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 500 - 100 = 400
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 500 - 250 = 250

/////////////////////////