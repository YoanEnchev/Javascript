let text = 'Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)';

textInBrackets(text);

function textInBrackets(text) {
    let extractedText = [];

    let openingBracket = 0;
    let closingBracket = 0;


    while (true) {
        openingBracket = text.indexOf('(', openingBracket + 1);
        closingBracket = text.indexOf(')', closingBracket + 1);

        if (openingBracket < closingBracket) { // in case ) ) ( 
            extractedText.push(text.substring(openingBracket + 1, closingBracket));
        }

        else { // not found pair () => opening bracket ot closing bracket equals -1
            break;
        }
    }

    console.log(extractedText.join(', '));
}
