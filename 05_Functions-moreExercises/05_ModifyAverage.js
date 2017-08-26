let number = 10.1;

modify(number);

function modify(number) {

    number = removePointIfFloatingNumber(number);

    if (Math.floor(number) != number) {
        let floatingPointSeparator = number.toString().split('.');
        let beforePoint = floatingPointSeparator[0];
        let afterPoint = floatingPointSeparator[1];
        number = Number(beforePoint + afterPoint);
    }

    while (true) {
        let number_string = number.toString(10);

        let digits = number.toString(10)
            .split("")
            .map(e => Number(e));

        let sum = digits.reduce((a, b) => a + b, 0);

        let modificationNeeded = checkIsModificationIsNeeded(sum, number_string);

        if (modificationNeeded) {
            number_string += '9';
            number = Number(number_string);
        }

        else {
            console.log(number_string);
            break;
        }
    }

    function checkIsModificationIsNeeded(sum, number_string) {
        let averageDigit = sum / number_string.length;

        if (averageDigit <= 5) {
            return true;
        }

        else {
            return false;
        }
    }

    function removePointIfFloatingNumber(number) {
        if (Math.floor(number) != number) {
            let floatingPointSeparator = number.toString().split('.');

            let beforePoint = floatingPointSeparator[0];
            let afterPoint = floatingPointSeparator[1];
            number = Number(beforePoint + afterPoint);
        }

        return number;
    }
}
