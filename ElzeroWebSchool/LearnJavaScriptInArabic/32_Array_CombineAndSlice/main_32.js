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
console.log(friends); // (6) ["Ross", "Monica", "Rachel", "Chandler", "Pheope", "Joey"]

/////////
/*  Slicing the Array Using 'Slice'

    slice(startingIndex, endingIndex) ([ start, end [)
    OR
    slice(startingIndex) ([start, end of the array])
*/

var mySlicedArray = friends.slice(3);
console.log(mySlicedArray); // (3) ["Chandler", "Pheope", "Joey"]

var mySlicedArray2 = friends.slice(2, 4);
console.log(mySlicedArray2); // (2) ["Rachel", "Chandler"]

var mySlicedArray3 = friends.slice(-4, -2); // (2) ["Rachel", "Chandler"]
console.log(mySlicedArray3);

/////////
// Combining Arrays Using 'Combine'

var otherGellers = [
    "Judy",
    "Jack",
    "Ben",
    "Emma"
];
console.log(otherGellers); // (4) ["Judy", "Jack", "Ben", "Emma"]

var otherFriends = [
    "Carol",
    "Suzan"
];
console.log(otherFriends); // (2) ["Carol", "Suzan"]

var allFriends = friends.concat(otherGellers, otherFriends);
console.log(allFriends); // (12) ["Ross", "Monica", "Rachel", "Chandler", "Pheope", "Joey", "Judy", "Jack", "Ben", "Emma", "Carol", "Suzan"]

/////////////////////////