let input = ['100',
    '200',
    '0',
    '3',
    '-1',
    '4',
    '2',
    '5',
    '-1'];

solve(input);

function solve(input) {
    let numbers = input.map(Number);
    let biggestMultiplication = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] <= 9 && (i + numbers[i] <= numbers.length)) {

            let count = 0;
            let currentMultiplication = Number.NEGATIVE_INFINITY;

            for (let p = i + 1; count < numbers[i]; p++) {

                if (p === i + 1) {
                    currentMultiplication = numbers[p];
                }

                else {
                    currentMultiplication *= numbers[p];
                }

                count++;
            }

            if (currentMultiplication > biggestMultiplication) {
                biggestMultiplication = currentMultiplication;
            }
        }
    }

    console.log(biggestMultiplication);
}
