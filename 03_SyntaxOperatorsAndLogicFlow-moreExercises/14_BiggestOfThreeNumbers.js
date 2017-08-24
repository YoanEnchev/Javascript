let numbers = [-20, -30 ,-10];

biggestNumber(numbers);

function biggestNumber(numbers) {
    let biggestNumber = -999999999;

    for (let i = 0; i < numbers.length; i++) {

        if (biggestNumber <= numbers[i]) {
            biggestNumber = numbers[i];
        }
    }

    console.log(biggestNumber);
}
