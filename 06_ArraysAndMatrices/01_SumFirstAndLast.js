let numbers = ['20', '30', '40'];

sumFirstAndLast(numbers);

function sumFirstAndLast(numbers) {
    let first = Number(numbers[0]);
    let last = Number(numbers[numbers.length - 1]);

    console.log(first + last);
}
