/*
    Lesson Name         : Clear Input Placeholder On Focus
    Difficulty          : Piece Of Cake
    What We Will Do     : onfocus, onblur, this
    Author              : ELzero Web School
*/

/////////////////////////

var ourinput = document.getElementById('ourinput');

ourinput.onfocus = function () {
    'use strict';
    if (this.placeholder === 'Type Your Name') {
        this.placeholder = '';
    }
};

ourinput.onblur = function () {
    'use strict';
    if (this.placeholder === '') {
        this.placeholder = 'Type Your Name';
    }
};

/////////////////////////