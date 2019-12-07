/*global console, alert, document, prompt*/

/////////////////////////

var i = 0;

for (;;) {
    if(i > 10){
        break;
    }
    console.log(i);
    i += 1;
}

/////////

var myCar = {
    name: "Toyota",
    type: "Car",
    color: "Red"
};
console.log(myCar.color);

var prop;
for (prop in myCar) {
    if(myCar.hasOwnProperty(prop)) {
        console.log(myCar[prop]);
    }
}

/////////

var i = 0;

while (i <= 10) {
    console.log(i);
    i += 1;
}

/////////

var i = 0;

do {
    console.log(i);
    i += 1;
} while (i <= 10);

/////////

var i, x;

MainLoop:
for (i = 0; i < 5; i += 1) {
ChildLoop:
    for (x = 10; x < 14; x += 1) {
        if (x === 13) break MainLoop;
       console.log(i + " => " + x);
   }
}

/////////

var i, x;

MainLoop:
for (i = 0; i < 5; i += 1) {
ChildLoop:
    for (x = 10; x <= 14; x += 1) {
        if (x === 13) continue ChildLoop;
       console.log(i + " => " + x);
   }
}

/////////////////////////