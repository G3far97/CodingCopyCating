/*global console, alert, document, prompt*/

/////////////////////////

var friendOne = "Ross",
    friendTwo = "Monica",
    friendThree = "Rachel",
    friendFour = "Chandler",
    friendFive = "Pheope",
    friendSix = "Joey";

var friends = [
    "Ross", // index = 0, length = 1
    "Monica", // index = 1, length = 2
    "Rachel", // index = 2, length = 3
    "Chandler", // index = 3, length = 4
    "Pheope", // index = 4, length = 5
    "Joey" // index = 5, length = 6
];
console.log(friends);
console.log(friends.length); // Get Length

var myVariable = "Hello JavaScript";
console.log(myVariable);
console.log(myVariable.length); // Get Length

friends.length = 2; // Set Length to 2
console.log(friends);

/////////////////////////