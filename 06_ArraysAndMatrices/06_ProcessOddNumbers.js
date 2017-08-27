let numbers = [10, 15, 20, 25];

processOddPositionedElements(numbers);

function processOddPositionedElements(numbers) {
    numbers = numbers.filter((e, index) => (index % 2 == 1))
        .reverse()
        .map(e => e * 2);

    console.log(numbers.join(' '));
}
