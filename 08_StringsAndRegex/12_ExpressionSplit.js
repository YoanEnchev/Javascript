let code = 'let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}';

expressionSplit(code);

function expressionSplit(code) {
    let pattern = /\s|;|\.|,|\(|\)/;

    let splitedArray = code.split(pattern)
        .filter(e => (e != ""));
    console.log(splitedArray.join('\n'));
}

