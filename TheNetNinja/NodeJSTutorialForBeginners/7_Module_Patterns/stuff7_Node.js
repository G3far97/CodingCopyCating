// var counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// };

// var adder = function(a, b){
//     return  `The sum of the 2 numbers ia $(a+b)`
// }

// var pi = 3.142;

// module.exports.counter = counter;
// module.exports.address = adder;
// module.exports.pi = pi;

/////

// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// };

// module.exports.adder = function(a, b){
//     return  `The sum of the 2 numbers ia $(a+b)`
// }

// var pi = 3.142;

/////

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
    return  `The sum of the 2 numbers is $(a+b)`
}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

/////