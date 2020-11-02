let animal = prompt("What animal is the superhero most similar to?");
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
let age = prompt("How old is the superhero?");
let req1 = /^[a-zA-Z]{1,20}$/;
let req2 = /^[1-9]{1,5}$/;
let req3 = /\b(male|female)\b/;
let req4 = /^\s*$/;
let description;

// requirements
if (!req1.test(animal) || !req2.test(age) || (!req3.test(gender) && !req4.test(gender))) {
    alert("Wrong input!");
}
if (gender == "male" && age < 18) {
    description = "boy";
} else if (gender == "male" && age >= 18) {
    description = "man";
} else if (gender == "female" && age < 18) {
    description = "girl";
} else if (gender == "female" && age >= 18) {
    description = "woman";
} else if (req4.test(gender) && age < 18) {
    description = "kid";
} else if (req4.test(gender) && age >= 18) {
    description = "hero";
}
alert("The superhero name is: " + animal + "-" + description + "!");