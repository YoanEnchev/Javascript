let numberAndPrecision = [10.5, 3];

printRounded(numberAndPrecision);

function printRounded(numberAndPrecision) {
    let number = numberAndPrecision[0];
    let precision = numberAndPrecision[1];

    if (precision > 15) {
        precision = 15;
    }

    let result = number.toFixed(precision);

    if (result[result.length - 1] == "0") {
        console.log(number);
    } else {
        console.log(Number(result).toFixed(precision));
    }
}
