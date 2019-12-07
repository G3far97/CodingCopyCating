/*global console, alert, document*/

/////////////////////////

// Boolean: True, False.

var mainPrice,
/*
    Check if The Product Has Discount or No.
    'true' = Yes, It Has Discount.
    'false' = No, It Has No Discount.
*/
    hasDiscount = true;

if (hasDiscount === true) {
    mainPrice = 350;
} else {
    mainPrice = 450;
}
document.getElementById("test1").innerHTML = mainPrice;

/////////////////////////

// Array: ["element0", "element1", "element2"]

var socialWebsites = ["facebook.com", "youtube.com", "google.com"];
document.getElementById("test2").innerHTML = socialWebsites[1];

/////////////////////////

// Object: {object0AttributeName: "object0AttributeValue", object1AttributeName: "object1AttributeValue"}

var myInfo = {firstName: "Osama", lastName: "Mohamed"};
document.getElementById("test3").innerHTML = myInfo.lastName;

/////////////////////////

/*
    String: "Text".
    Could Be Written in "" or '', However When You Quote Inside A Quate Use The Opposite, ie. ( " '' " ) or ( ' "" ' ).
    ie. ( " "" " ) and ( ' '' ' ) Are Not Allowed.
*/
var myName = 'Ahmed Hisham "Gaafar"';
var myName1 = "Ahmed Hisham \"Gaafar\"";
// '\' That's Called an Escape, Which is Used to Ignore The special treatment of The Quatation.
document.getElementById("test4").innerHTML = myName;
document.getElementById("test44").innerHTML = myName1;

/////////////////////////

// Number
var myAge = 23; // 23 is Not "23", "23" + 10 = 2310 'Concatenation'.
document.getElementById("test5").innerHTML = myAge;

/////////////////////////

// We Will Discuss Later: 'Undefined', 'Null "Type of Objects" ', 'NaN "NaN = Not a Number" ' And 'Symbol'.

/////////////////////////

// 'typeof' Function: Gives The Type of The Given Variable, "typeof 'variableName' = variableDataType ".

/////////////////////////