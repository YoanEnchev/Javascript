let maxNumber = 11;
stringOfNumbers(maxNumber);

function stringOfNumbers(maxNumber) {

    let result = "";

    for (var i = 1; i <= maxNumber; i++) {
        result += i;
    }

    console.log(result);
}
