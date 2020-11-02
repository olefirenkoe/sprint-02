let team = prompt("Please choose your team:");
let universe = prompt("Please choose your universe:");
let race = prompt("Please choose your race:");
let eyecolor = prompt("Please choose your eyeColor:");
let haircolor = prompt("Please choose your hairColor:");

if ((team == "Avengers" || team == "S.H.I.E.L.D") && universe == "Marvel" && race == "human" && eyecolor == "green" && haircolor == "lightBrown\\green") {
    alert("This is Black Window!");
} else if ((team == "Justice League Of America" || team == "Teen Titans") && universe == "DC Comics" && (race == "human" || race == "kryptonian") && eyecolor == "blue" && haircolor == "black") {
    alert("This is a Superman or Robin!");
} else {
    alert("Didn't recognize!");
}