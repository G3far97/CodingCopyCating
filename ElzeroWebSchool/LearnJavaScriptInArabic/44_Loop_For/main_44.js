/*global console, alert, document, prompt*/

/////////////////////////

/*
    For Loop Syntax:

   for ( Initialization; Condition; Final Expression ) {

        // Statment

   }

   Initialization: Executed Before The Loop Once
   Condition: Define The Condition To Run The Loop
   Final Expression: Executed Everytime The Code Runs

*/

/////////

var i;
for (i = 1; i <= 10; i += 1) {
    console.log(i);
}

var friends = ["Ahmed", "Mahmoud", "Omar", "Amr", "Abdelrahman"];

for (i = 0; i < friends.length; i += 1) {
    console.log(friends[i]);
}

/////////////////////////