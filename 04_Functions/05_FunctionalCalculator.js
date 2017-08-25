let num1 = 2;
let num2 = 4;
let operator = '+';

printCalculation(num1, num2, operator)

function printCalculation(num1, num2, operator) {

    let add = function (num1, num2, operator) {
        return num1 + num2;
    }

    let substract = function (num1, num2, operator) {
        return num1 - num2;
    }

    let multiply = function (num1, num2, operator) {
        return num1 * num2;
    }

    let divide = function (num1, num2, operator) {
        return num1 / num2;
    }

    switch (operator) {
        case '+':
            console.log(add(num1, num2, operator));
            break;
        case '-':
            console.log(substract(num1, num2, operator));
            break;
        case '*':
            console.log(multiply(num1, num2, operator));
            break;
        case '/':
            console.log(divide(num1, num2, operator));
            break;
    }
}
