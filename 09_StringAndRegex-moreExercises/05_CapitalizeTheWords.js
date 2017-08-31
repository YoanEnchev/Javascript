let text = 'Was that Easy? tRY thIs onE for SiZe';

capitalizedWords(text);

function capitalizedWords(text) {
    let capitalized = text.split(' ')
        .map(e => (e.toLowerCase()));

    let result = [];

    for (word of capitalized) {
        word = word.charAt(0).toUpperCase() + word.substr(1);
        result.push(word);
    }

    console.log(result.join(' '));
}
