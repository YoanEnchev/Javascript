let numbers = [1, 2, 3];

binaryLogarithm(numbers);

function binaryLogarithm(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        console.log(Math.log2(numbers[i]));
    }
}
