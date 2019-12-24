/*
    Lesson Name         : Create Countdown Timer
    Difficulty          : Very Easy
    What We Will Do     : setInterval(), clearInterval(), Math.floor() and innerHTML
    Author              : ELzero Web School
*/

/////////////////////////

var seconds     = 190, // Number of seconds
    countDiv    = document.getElementById('countdown'),
    secondPass,
    countDown   = setInterval(function() {
        'use strict';
        secondPass();
    }, 1000);

function secondPass() {
    'use strict';
    var minutes = Math.floor(seconds / 60),
        remSeconds = seconds % 60;
    if(remSeconds < 10) {
        remSeconds = "0" + remSeconds;
    }
    countDiv.innerHTML = minutes + ":" + remSeconds;
    if(seconds >0) {
        seconds = seconds - 1; // Decrease one second [every 1000 Millisecond]
    } else {
        clearInterval(countDown); // Stop Countdown Timer
        countDiv.innerHTML = "Done";
    }
}

/////////////////////////