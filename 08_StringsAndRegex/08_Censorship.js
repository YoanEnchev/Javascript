let text = ' His materials and Inuit bring together modern and traditional Inuit stylistic elements in a personal vision.';
let badWords = ['Inuit'];

censorhip(text, badWords);

function censorhip(text, badWords) {

    for (censorWord of badWords) {
        let replaceWith = '-'.repeat(censorWord.length);

        let censoredWord_index = 0;

        while (censoredWord_index != - 1) {
            censoredWord_index = text.indexOf(censorWord, censoredWord_index + 1);
            text = text.replace(censorWord, replaceWith);
        }
    }

    console.log(text);
}
