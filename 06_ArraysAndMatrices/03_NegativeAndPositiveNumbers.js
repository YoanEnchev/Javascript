let numbers = [7, -2, 8, 9];

order(numbers);

function order(numbers) {
    let result = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            result.unshift(numbers[i]);
        }

        else {
            result.push(numbers[i]);
        }
    }

    console.log(result.join('\n'));
}
