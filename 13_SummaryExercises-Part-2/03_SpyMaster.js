let input = [
    `specialKey`,
    `In this text the specialKey HELLOWORLD! is correct, but
     the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not,
    while SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`
];

decode(input);

function decode(input) {
    let specialKey = input[0];

    for (let s = 1; s < input.length; s++) {
        let regex = '(';
        regex += '(^|\\s+)';

        for (let i = 0; i < specialKey.length; i++) {
            let char_lowCase = specialKey[i].toLowerCase();
            let char_upCase = specialKey[i].toUpperCase();

            regex += `[${char_lowCase}|${char_upCase}]`;
        }

        regex += ')'; //end special key search
        regex += '(\\s+([A-Z!%$#]){8,}( |\\.|,|$))' //add message search

        regex = new RegExp(regex, 'g');

        let matches = input[s].match(regex);

        if (matches != null) {

            for (match of matches) {
                let specialKeyAndMessage = regex.exec(match) //in order to get groups of the match

                let specialKey = specialKeyAndMessage[1];
                let message = specialKeyAndMessage[3];

                let decodedMessage = decodeMessage(message);
                input[s] = input[s].replace((specialKey + message), (specialKey + decodedMessage));

                regex.lastIndex = 0;
            }
        }
    }

    input.shift();
    input.map(message => console.log(message));

    function decodeMessage(message) {
        message = message
            .toLowerCase()
            .replace(/\!/g, '1')
            .replace(/\%/g, '2')
            .replace(/\#/g, '3')
            .replace(/\$/g, '4');

        return message;
    }
}

