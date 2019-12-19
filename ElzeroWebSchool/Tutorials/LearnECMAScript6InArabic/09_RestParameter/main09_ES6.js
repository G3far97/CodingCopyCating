/*
    Rest Parameters ...
*/

/////////////////////////

function sum(x, y) {
    return x + y;
}

console.log(sum(2, 5)); // 7
console.log(sum(2, 5, 6)); // 7

/////////

function showInfo(a, b, c, ...MyParams) {
    console.log('Param a', a);
    console.log('Param b', b);
    console.log('Param c', c);
    console.log('Param MyParams', MyParams);

    return 'Console Output Done!';
}

console.log(showInfo());
/*
    Param a undefined
    Param b undefined
    Param c undefined
    Param MyParams []
    Console Output Done!
*/

console.log(showInfo('One'));
/*
    Param a One
    Param b undefined
    Param c undefined
    Param MyParams []
    Console Output Done!
*/

console.log(showInfo('One', 'Two', 'Three'));
/*
    Param a One
    Param b Two
    Param c Three
    Param MyParams []
    Console Output Done!
*/

console.log(showInfo('One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'));
/*
    Param a One
    Param b Two
    Param c Three
    Param MyParams (4) ["Four", "Five", "Six", "Seven"]
    Console Output Done!
*/

/////////////////////////

let addAll = (...MyParams) => {
    let myNumber = 0;
    for (let myParam of MyParams) myNumber += myParam;
    return myNumber;
}

console.log(addAll()); // 0
console.log(addAll(1)); // 1
console.log(addAll(1, 2, 3)); // 6
console.log(addAll(1, 2, 10, 50, 100)); // 163

/////////////////////////