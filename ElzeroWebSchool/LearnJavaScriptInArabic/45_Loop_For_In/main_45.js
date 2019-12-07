/*global console, alert, document, prompt*/

/////////////////////////

var myCar = {
    color: "white",
    type: "sedan",
    price: "50.000",
    model: "2015"
};
console.log(myCar.type); // Dot Notation
console.log(myCar["model"]); // Not A Recommended Notation

/////////

/*
    For/In Syntax:

    for ( Variable In Object ) {

        if ( Object.hasOwnProperty(Variable) ) {

            // Statment

        }

    }
*/

var prop;
for (prop in myCar) {
    if (myCar.hasOwnProperty(prop)) {
        console.log(prop + ": " + myCar[prop]);
    }
}

/////////////////////////