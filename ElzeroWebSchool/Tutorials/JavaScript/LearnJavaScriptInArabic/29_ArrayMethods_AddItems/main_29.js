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
// Adding Items Using 'length'

friends[friends.length] = "Rechard"; // Adding "Rechard" at the end of the Array
console.log(friends);
console.log(friends.length); // 7 ( 0-6 )

friends[friends.length] = "Carol"; // Adding "Carol" at the end of the Array
console.log(friends);
console.log(friends.length); // 8 ( 0-7 )

/////////
// Adding Items Using 'push'

friends.push("Janice"); // Adding "Janice" at the end of the Array
console.log(friends);
console.log(friends.length); // 9 ( 0-8 )

friends.push("Gunther"); // Adding "Gunther" at the end of the Array
console.log(friends);
console.log(friends.length); // 10 ( 0-9 )

/////////
// Adding Items Using 'unshift'

friends.unshift("Jack"); // Adding "Jack" at the begenning of the Array
console.log(friends);
console.log(friends.length); // 11 ( 0-10 )

friends.unshift("Ben"); // Adding "Ben" at the begenning of the Array
console.log(friends);
console.log(friends.length); // 12 ( 0-11 )

/////////
// Adding Items Using 'splice'
// arrayName.splice(startingIndex, numberOfRemovedItems, item1, item2, item3, ..., itemN)

friends.splice(0, 2, "Mr. Heckles", "Judy", "Kathy", "Emma");
console.log(friends);
console.log(friends.length); // 14 ( 0-13 )

friends.splice(2, 0, "suzan");
console.log(friends);
console.log(friends.length); // 15 ( 0-14 )

/////////////////////////