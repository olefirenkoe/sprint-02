let n = prompt("Please, enter your number:");
let j = "";

for (let i = 1; i <= n; i++) {

    for (let k = 1; k <= i; k++) {
        j += "*";
    }
    j += "\n";
}
alert(j);