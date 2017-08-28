let numbers = [1, 3, 8, 4, 10, 12, 3, 2, 24 ];

exctractIncreasingSubsequence(numbers);

function exctractIncreasingSubsequence(numbers) { // 1, 2, 3, 3 is not increasing one
    let currentBiggestNumber = -999999;

    for (let i = 0; i < numbers.length; i++) {

        if (currentBiggestNumber <= numbers[i]) {
            currentBiggestNumber = numbers[i];
            console.log(currentBiggestNumber);
        }
    }
}