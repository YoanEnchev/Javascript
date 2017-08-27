let numbers = [2, 7, 8, 9];

printFirstAndLastKElements(numbers);

function printFirstAndLastKElements(numbers) {
    let k = numbers[0];
    numbers.shift();

    let first_elements = numbers.slice(0, k);
    let last_elements = numbers.slice(numbers.length - k, numbers.length);

    console.log(first_elements.join(' '));
    console.log(last_elements.join(' '));
}
