let str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
let str2 = "Batman: \"I tried to save you.\"";
let str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.\""

function lenght() {
    let count = str1.length;
    return ('Length: ' + count);
}

function character(number) {
    let char = str1[number];
    return ("Character number " + number + " is: " + char);
}

function upper() {
    let upcase = str1.toUpperCase();
    return ("To uppercase " + upcase);
}

function concat() {
    let conc = str1 + " - Catwoman";
    return ("Concatenation in phrase: " + conc);
}

function batamnreturn() {
    let batman = "[Batman Returns] " + str2;
    return batman;
}

function catreplace() {
    let cat = str3.replace(/catwoman/gi, " ");
    return cat;
}

alert("Just string: " + str1 + "\n" + lenght() + "\n" + character(2) + "\n" + upper() + "\n" + concat() + "\n" + batamnreturn() + "\n" + catreplace());