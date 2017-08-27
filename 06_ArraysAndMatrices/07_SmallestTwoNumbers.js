let numbers = [3, 0, 0, 3];

twoSmallestNumbers(numbers);

function twoSmallestNumbers(numbers) {
    let smallestTwoNums = numbers
        .sort((a, b) => (a - b))
        .slice(0, 2)
        .join(' ');

    console.log(smallestTwoNums);
}
