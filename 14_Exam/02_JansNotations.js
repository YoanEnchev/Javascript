//Points: 100/100

let tokens = [5,
    3,
    4,
    '*',
    '-'];

solve(tokens);

function solve(tokens) {
    let numbers_count = tokens.filter(e => e === Number(e)).length;
    let operands_count = tokens.filter(e => e !== Number(e)).length;

    while (numbers_count > 1 && operands_count > 0) {
        let numbers = [];

        for (numberOrOperand of tokens) {
            if (numberOrOperand === Number(numberOrOperand)) {
                numbers.push(numberOrOperand);
            }

            else if (numbers.length >= 2) {
                break;
            }
        }

        let num_1 = numbers[numbers.length - 2];
        let num_2 = numbers[numbers.length - 1];

        let operand = tokens.filter(e => e !== Number(e))[0];
        let calculation = 0;

        switch (operand) {
            case '+':
                calculation = num_1 + num_2;
                break;
            case '-':
                calculation = num_1 - num_2;
                break;
            case '*':
                calculation = num_1 * num_2;
                break;
            case '/':
                calculation = num_1 / num_2;
                break;
        }

        let replace_index = tokens.indexOf(num_2);
        let delete_index = tokens.indexOf(num_1);

        tokens[replace_index ] = calculation;
        tokens.splice(delete_index, 1);

        let delete_operator = tokens.indexOf(operand);
        tokens.splice(delete_operator, 1);

        numbers_count = tokens.filter(e => e === Number(e)).length;
        operands_count = tokens.filter(e => e !== Number(e)).length;
    }

    if (numbers_count === 1 && operands_count === 0) {
        console.log(tokens[0]);
    }

    else if (numbers_count < 2) {
        console.log('Error: not enough operands!');
    }

    else {
        console.log('Error: too many operands!')
    }
}
