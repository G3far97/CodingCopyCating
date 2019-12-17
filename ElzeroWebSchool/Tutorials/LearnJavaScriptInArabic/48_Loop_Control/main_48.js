/*global console, alert, document, prompt*/

/////////////////////////

console.log("Break Usage");

var i;
for (i = 1; i < 10; i += 1) {
    if (i === 4) {
        break;
    }
    console.log(i);
}

/////////

console.log("Continue Usage");

var i2;
for (i2 = 1; i2 < 10; i2 += 1) {
    if (i2 === 4) {
        continue;
    }
    console.log(i2);
}

/////////

console.log("Label Usage: Break1");

var i3, j;
MainLoop:
for (i3 = 1; i3 < 5; i3 += 1) {
ChildLoop:
    for (j = 15; j < 20; j += 1) {
        if (j === 17) {
            break ChildLoop;
        }
        console.log(i3 + " => " + j);
    }
}

/////////

console.log("Label Usage: Break2");

var i4, j2;
MainLoop2:
for (i4 = 1; i4 < 5; i4 += 1) {
ChildLoop2:
    for (j2 = 15; j2 < 20; j2 += 1) {
        if (j2 === 19) {
            break MainLoop2;
        }
        console.log(i4 + " => " + j2);
    }
}
/////////

console.log("Label Usage: Continue1");

var i5, j3;
MainLoop3:
for (i5 = 1; i5 < 5; i5 += 1) {
ChildLoop3:
    for (j3 = 15; j3 < 20; j3 += 1) {
        if (j3 === 17) {
            continue MainLoop3;
        }
        console.log(i5 + " => " + j3);
    }
}
/////////

console.log("Label Usage: Continue2");

var i6, j4;
MainLoop4:
for (i6 = 1; i6 < 5; i6 += 1) {
ChildLoop4:
    for (j4 = 15; j4 < 20; j4 += 1) {
        if (j4 === 17) {
            continue ChildLoop4;
        }
        console.log(i6 + " => " + j4);
    }
}

/////////////////////////