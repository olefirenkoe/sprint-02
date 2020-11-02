function solver(a, b, c, d, e) {
    let x = Math.pow(a, 2) - 5 * b * c + d / 3 + e;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || !a || !b || !c || !d || !e) {
        return "Wrong input";
    } else {
        return x.toFixed(2);
    }
}
// alert(solver(40, -9, 0.5, 7, 100));