let text = 'My bill: 2*2.50(beer); 2 * 1.20(kepab); -2 * 0.5(deposit);'

matchMultiplication(text);

function matchMultiplication(text) {
    let regex = /(-{0,1}\d+)\s*\*\s*(\-{0,1}\d+(\.{0,1}\d+){0,1})+/g;

    let matches = text.match(regex);

    for (match of matches) {
        match = match.split('*');

        let num1 = Number(match[0].trimRight());
        let num2 = Number(match[1].trimLeft());

        let multiply = num1 * num2;
        match = match.join('*');

        text = text.replace(match, multiply);
    }

    console.log(text);
}
