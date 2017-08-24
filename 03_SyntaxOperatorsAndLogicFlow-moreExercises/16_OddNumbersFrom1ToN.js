let max = 7;

printOddNumbersToMax(max)

function printOddNumbersToMax(max) { //from 1 to max including
    for (var i = 1; i <= max; i+=2) {
        console.log(i);
    }
}