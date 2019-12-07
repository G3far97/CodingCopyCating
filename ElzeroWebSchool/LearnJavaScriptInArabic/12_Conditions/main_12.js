/*global console, alert, document, prompt*/

/////////////////////////

var ticketPrice = 1000; // Ticket Price Variable
/*
    if(Condition){
        Code
    }

    if(Condition 1) {

    } else if (Condition 2){ // Not Condition 1 But Condition 2

    } else { // Other Than Condition 1 or 2

    }
*/
if (ticketPrice < 1500) { // If The Ticket is Cheaper Than 1500
    console.log("Yes, It's Cheap"); // Display a Message That it's Cheap Price.
} else if (ticketPrice === 2000) { // If The Ticket Price is Exactly 2000
    console.log("Yes, It's Good"); // Display a Message That it's Cheap Price.
} else { // If  The Ticket is Whether Exactly 1500 or More Expensive.
    console.log("No, It's Expensive"); // Display a Message That it's Expensive Price.
}

/////////////////////////

var yourAge = prompt("What's Your Age ?1");
if (yourAge < 18) {
    document.getElementById("test").innerHTML =
            "Sorry! Your Age is " + yourAge + ", You're Not Allowed Here.";
} else {
    document.getElementById("test").innerHTML =
            "Hello !!! Your Age is " + yourAge + ", You're More Than Welcomed !";
}

/////////////////////////