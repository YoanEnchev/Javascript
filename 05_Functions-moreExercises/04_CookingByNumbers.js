let numberAndOperations = ['9', 'dice', 'spice', 'chop', 'bake', 'fillet'];

numberAfterOperations(numberAndOperations);

function numberAfterOperations(numberAndOperations) {
    let number = Number(numberAndOperations[0]);

    for (let i = 1; i < numberAndOperations.length; i++) {
        let operation = numberAndOperations[i];

        switch (operation) {
            case 'chop':
                number = chopAndPrintNumber(number);
                break;
            case 'dice':
                number = diceAndPrintNumber(number);
                break;
            case 'spice':
                number = spiceAndPrintNumber(number);
                break;
            case 'bake':
                number = bakeAndPrintNumber(number);
                break;
            case 'fillet':
                number = filtetAndPrintNumber(number);
                break;
        }
    }

    function chopAndPrintNumber(number) {
        let newValue = number / 2;
        console.log(newValue);

        return newValue;
    }

    function diceAndPrintNumber(number) {
        let newValue = Math.sqrt(number);
        console.log(newValue);

        return newValue;
    }

    function spiceAndPrintNumber(number) {
        let newValue = number + 1;
        console.log(newValue);

        return newValue;
    }

    function bakeAndPrintNumber(number) {
        let newValue = number * 3;
        console.log(newValue);

        return newValue;
    }

    function filtetAndPrintNumber(number) {
        let newValue = number - number * 20/100;
        console.log(newValue);

        return newValue;
    }
}
