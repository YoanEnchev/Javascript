let text = [`Now lets test.all         ; the     3.14     : functionality! What about trimming "  Trim me please       "!`];

format(text);

function format(text) {
    for (sentence of text) {
        //part 1 - add space after: ". , ! ? : ;" (if needed)
        let forbiden_regex = [/\.(?=[^\s])/g, /\,(?=[^\s])/g, /\!(?=[^\s])/g, /\?(?=[^\s])/g, /\:(?=[^\s])/g, /\;(?=[^\s])/g]
        let replaceForbiden = ['. ', ', ', '! ', '? ', ': ', '; '] //the regex does not match the not space character after

        for (let i = 0; i < forbiden_regex.length; i++) {
            sentence = sentence.split(forbiden_regex[i]);
            sentence = sentence.join(replaceForbiden[i]);
        }

        //part 2 - remove space before: ". , ! ? : ;"
        forbiden_regex = [/\s+\./g, /\s+\,/g, /\s+\!/g, /\s+\?/g, /\s+\:/g, /\s+\;/g] //space before .,!?:;
        replaceForbiden = ['.', ',', '!', '?', ':', ';'];

        for (let i = 0; i < forbiden_regex.length; i++) { 
            sentence = sentence.split(forbiden_regex[i]);
            sentence = sentence.join(replaceForbiden[i]);
        }

        //part 3 - remove space after: ". , ! ? : ;" (if there is more than one space, remove it)
        forbiden_regex = [/\.\s{2,100}/g, /\,\s{2,100}/g, /\!\s{2,100}/g, /\?\s{2,100}/g, /\:\s{2,100}/g, /\;\s{2,100}/g]
        replaceForbiden = ['. ', ', ', '! ', '? ', ': ', '; '];

        for (let i = 0; i < forbiden_regex.length; i++) { 
            sentence = sentence.split(forbiden_regex[i]); 
            sentence = sentence.join(replaceForbiden[i]);
        }

        //part 4 - aposiopesis (three dots) matcher
        let aposiopesis_regex = /\.\s*\.\s*\./g;
        sentence = sentence.split(aposiopesis_regex);
        sentence = sentence.join('...');

        //part 5 - dates
        let dates_regex = /\.\s*(?=\d+)/g;
        sentence = sentence.split(dates_regex).join('.');

        //part 6 - quotes
        sentence = sentence.split('"');

        for (let i = 1; i < sentence.length; i += 2) {
            sentence[i] = sentence[i].trimRight();
            sentence[i] = sentence[i].trimLeft();
        }

        sentence = sentence.join('"');

        console.log(sentence);
    }
}
