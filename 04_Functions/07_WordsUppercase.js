let sentence = 'Hi, how are you?';

printAllWords(sentence);

function printAllWords(sentence) {
    let words = sentence.split(/\W/)
        .filter(e => e != '')
        .map(e => e.toUpperCase());

    let result = words.join(', ');
    console.log(result);
}
