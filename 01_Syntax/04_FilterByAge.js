let minimalAge = 5;

let first_name = "Albert";
let first_age = 10;

let second_name = "Alex";
let second_age = 11;

filterByAge(minimalAge, first_name, first_age, second_name, second_age)

function filterByAge(minimalAge, first_name, first_age, second_name, second_age) {

    let first = { name: first_name, age: first_age };
    let second = { name: second_name, age: second_age };

    if (first.age >= minimalAge) {
        console.log(first)
    }

    if (second.age >= minimalAge) {
        console.log(second);
    }

}