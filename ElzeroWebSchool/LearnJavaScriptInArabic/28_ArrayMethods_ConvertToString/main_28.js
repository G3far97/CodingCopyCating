/*global console, alert, document, prompt*/

/////////////////////////

var friends = [
    "Ross",
    "Monica",
    "Rachel",
    "Chandler",
    "Pheope",
    "Joey"
];
console.log(friends); // This is an Array

var friendsToString = friends.toString(); // Convert it to String
console.log(friendsToString); // String

var friendsToString2 = friends.toLocaleString(); // Convert the Array to an Array that obays your device's String Settings
console.log(friendsToString2); // String

var myDate = new Date(),
    myString = myDate.toLocaleString();
console.log(myDate);
console.log(myString);

friends = friends.join(" | ");
console.log(friends);

/////////////////////////