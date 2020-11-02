let i = prompt("Please, enter your number:");
let j = 1;
let c = "";

while (j <= 10) {
    c += i + " x " + j + " = " + (i * j) + "\n";
    j++;
}
alert(c);