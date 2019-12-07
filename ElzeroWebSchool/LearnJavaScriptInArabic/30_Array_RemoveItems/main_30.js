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
console.log(friends);
console.log(friends.length); // 6 ( 0-5 )

/////////

friends[friends.length] = "Rechard";
friends.push("Janice");
friends.unshift("Jack");
friends.splice(1, 0, "suzan", "carol");

console.log(friends);
console.log(friends.length); // 11 ( 0-10 )

/////////
// Removing Items Using 'splice'
// arrayName.splice(startingIndex, numberOfRemovedItems, item1, item2, item3, ..., itemN)

friends.splice(1, 2); // Removes '2' Elements Starting From Index '1'
console.log(friends);
console.log(friends.length); // 9 ( 0-8 )

/////////
// Removing Items Using 'pop'

var lastItem = friends.pop(); // Removes Last Element in The Array, And Returns it
console.log(friends);
console.log(friends.length); // 8 ( 0-7 )
console.log(lastItem); // 'Janice'

/////////
// Removing Items Using 'shift'

var firstItem = friends.shift(); // Removes The First Element in The Array, And Returns it
console.log(friends);
console.log(friends.length); // 7 ( 0-6 )
console.log(firstItem); // 'Jack'

/////////////////////////