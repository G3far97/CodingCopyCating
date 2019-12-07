/*global console, alert, document, prompt*/

/////////////////////////

var friends = [
    "Ross", // index = 0, length = 1
    "Monica", // index = 1, length = 2
    "Rachel", // index = 2, length = 3
    "Chandler", // index = 3, length = 4
    "Pheope", // index = 4, length = 5
    "Joey" // index = 5, length = 6
];
console.log(friends); // (6) ["Ross", "Monica", "Rachel", "Chandler", "Pheope", "Joey"]

/////////
// Searching in the Array
// indexOf(valueToSearch, startingIndex): Start Searching From 'The Beginning To The End' Of The Array For The First Appearance
// LastIndexOf(valueToSearch, endingIndex): Start Searching From 'The End To The Beginning' Of The Array For The Last Appearance
// In Both ways You start From The least Index

var specialFriend = friends.indexOf("Chandler");
console.log(specialFriend); // 3

document.getElementById("all").innerHTML =
        "My Friends Are: " + friends.slice(0, 5).join(", ") + " And " + friends[friends.length - 1];
document.getElementById("special").innerHTML =
        "My Special Friend Is: " + "<span style = 'color:#F00'>" + friends[specialFriend] + "</span>";

/////////////////////////