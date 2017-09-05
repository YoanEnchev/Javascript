let input = ['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'];

solve(input);

function solve(input) {
    let templateHeight = Number(input[0]); //number of lines
    let template = [];
    let message = [];

    for (let i = 1; i <= templateHeight; i++) {
        template.push(input[i].split(" ").map(Number));
    }

    for (let i = 1 + templateHeight; i < input.length; i++) {
        message.push(input[i].split(" ").map(Number));
    }

    let template_messageFormat = convertTomessageFormat(template, message); 
    let sumMessageAndtemplate_messageFormat = sumBothMatrix(message, template_messageFormat);

    let messageOfSmallNumbers = convertToSmallerNumbs(sumMessageAndtemplate_messageFormat); //in the interval [0, 26]
    let messageOfLetters = convertNumbsToLetters(messageOfSmallNumbers);

    (function concatAndPrint() {
        let result = "";

        for (sequenceOfLetters of messageOfLetters) {
            result += sequenceOfLetters.join('');
        }

        console.log(result);
    })()

    function convertNumbsToLetters(messageOfSmallNumbers) {
        let message_letters = [];

        for (arrayOfNumbs of messageOfSmallNumbers) {
            let arrayOfLetters = arrayOfNumbs.map(n => n + 64)
                .map(n => String.fromCharCode(n));

            for (let i = 0; i < arrayOfLetters.length; i++) {
                if (arrayOfLetters[i] == '@') { //it's requited ' ' to be before 'A', but in ascii @ is before 'A'
                    arrayOfLetters[i] = ' ';
                }
            }

            message_letters.push(arrayOfLetters);
        }

        return message_letters;
    }

    function convertToSmallerNumbs(sumMessageAndtemplate_messageFormat) {
        let message_smaller = [];

        for (array of sumMessageAndtemplate_messageFormat) {
            message_smaller.push(array.map(n => n % 27));
        }

        return message_smaller;
    }

    function sumBothMatrix(message, template_messageFormat) {
        for (let col = 0; col < message.length; col++) {
            for (let row = 0; row < message[0].length; row++) {
                message[col][row] += template_messageFormat[col][row];
            }
        }

        return message;
    }

    function convertTomessageFormat(template, message) {
        let template_messageFormat = [];
        let addedRows_count = 0;

        while (true) { //will break when added enough rows

            for (let i = 0; i < template.length; i++) {
                let currentRow = template[i];
                let row = [];
                let numbersOnRow = 0;

                for (let num = 0; num < currentRow.length; num++) {
                    row.push(template[i][num]);

                    if (num == currentRow.length - 1) {
                        num = -1;
                    }

                    numbersOnRow++;

                    if (numbersOnRow == message[0].length) {
                        break;
                    }
                }

                template_messageFormat.push(row);
                addedRows_count++;

                if (addedRows_count === message.length) {
                    return template_messageFormat;
                }
            }
        }
    }
}
