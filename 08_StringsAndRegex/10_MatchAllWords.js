let input = 'A&&^% Regular Expression needs to have the global flag in order to match all occurrences in the text';

matchAllWords(input);

function matchAllWords(input) {
    let words = input.match(/\w+/g);
    console.log(words.join('|'));
}
