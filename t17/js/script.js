let first = prompt("Please, enter your name:");
let last = prompt("Please, enter your last name:");
let canc = first.concat(" " + last);
let regOne = /[0-9]/;
let regTwo = /^[a-z]/;
let regThree = /\s/;
let serchOne = first.search(regOne);
let serchTwo = last.search(regOne);
let serchThree = first.search(regTwo);
let serchFour = last.search(regTwo);
let serchFive = first.search(regThree);
let serchSix = last.search(regThree);

if (serchOne != -1 || serchTwo != -1 || first == "" || last == "" || serchFive != -1 || serchSix != -1) {
    alert("Wrong input!");
    console.log("Wrong input!");
} else if (serchThree != -1 || serchFour != -1) {
    alert(`Hello, ${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}!`);
    console.log(`Hello, ${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}!`);
} else {
    alert(`Hello, ${canc}!`);
    console.log(`Hello, ${canc}!`);
}