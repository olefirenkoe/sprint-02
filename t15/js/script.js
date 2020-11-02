let a = prompt("Please, enter number for beginning:");
let b = prompt("Please, enter number for end:");

function checkDivision(beginRange = 1, endRange = 100) {
    while (beginRange <= endRange) {
        if (beginRange % 2 == 0 && beginRange % 3 == 0 && beginRange % 10 == 0) {
            console.log(beginRange + " is even, a multiple of 3, a multiple of 10");
        } else if (beginRange % 2 == 0 && beginRange % 3 == 0) {
            console.log(beginRange + " is even, a multiple of 3");
        } else if (beginRange % 2 == 0 && beginRange % 10 == 0) {
            console.log(beginRange + " is even, a multiple of 10");
        } else if (beginRange % 2 == 0) {
            console.log(beginRange + " is even");
        } else if (beginRange % 3 == 0) {
            console.log(beginRange + " is a multiple of 3");
        } else if (beginRange % 10 == 0) {
            console.log(beginRange + " is a multiple of 10");
        } else {
            console.log(beginRange + " -");
        }
        beginRange++;
    }
}