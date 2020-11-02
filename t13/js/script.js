let a = Number(prompt("Please, enter your number:"));
let i = 0; //False

while (!i) { //!False = true  || i == 0 -> true
    i = 1; //True

    switch (a) {
        case 1:
            alert("Back to square 1");
            break;

        case 2:
            alert("Goody 2-shoes");
            break;

        case 3:
        case 6:
            alert("Two's company, three's a crowd");
            break;

        case 4:
        case 9:
            alert("Counting sheep");
            break;

        case 5:
            alert("Take five");
            break;

        case 7:
            alert("Seventh heaven");
            break;

        case 8:
            alert("Behind the eight-ball");
            break;

        case 10:
            alert("Cheaper by the dozen");
            break;

        default:
            a = Number(prompt("Please, enter number again (1-10):"));
            i = 0;
    }
}