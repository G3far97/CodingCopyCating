/*
    Lesson Name         : Generate Random Serial Number
    Difficulty          : Advanced
    What We Will Do     : for loop, Math.floor, Math.random and substring
    Author              : ELzero Web School
*/

/////////////////////////

function generateSerial() {
    'use strict';
    var chars = '1234567890ABCDEFGHILJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        serialLength = 20,
        randomSerial = '',
        i;

    for(i = 0; i < serialLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
    }
    
    document.getElementById('serial').innerHTML = randomSerial;
}

/////////////////////////