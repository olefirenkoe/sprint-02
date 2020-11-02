let name0 = 1;
let name1 = BigInt("123458");
let name2 = 'Hello';
let name3 = true;
let name4 = null;
let name5;
let name6 = Math;
let name7 = Symbol("id");
let name8 = function() {};

function typeoff(names, number) {
    let tip = typeof names;
    return ("name" + number + " is " + tip + "\n");
}
alert(typeoff(name0, 0) + typeoff(name1, 1) + typeoff(name2, 2) + typeoff(name3, 3) + typeoff(name4, 4) + typeoff(name5, 5) + typeoff(name6, 6) + typeoff(name7, 7) + typeoff(name8, 8));