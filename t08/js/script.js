let name = prompt('Please, input your value:');

if (name == 1) {
    alert(name * 2 / 'a');
} else if (name == 2) {
    alert(name - name / 0);
} else if (name == 3) {
    alert(0 * Infinity);
} else if (name == 4) {
    alert(name * 40000000 == Infinity);
} else {
    alert("Wrong input");
}