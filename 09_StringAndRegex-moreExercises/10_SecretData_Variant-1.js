let text = ['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    "I can't really remember...",
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really don't know what happened there.",
    'This is all I saw, that night.']

hideSecretData(text);

function hideSecretData(text) {
    let regex_name = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let regex_phone = /\+[0-9\-]{10}(?=\t| |$)/g;
    let regex_id = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let regex_base = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    for (sentence of text) {
        let secret_names = sentence.match(regex_name);
        let secret_phones = sentence.match(regex_phone);
        let secret_ids = sentence.match(regex_id);
        let secret_bases = sentence.match(regex_base);

        sentence = hideSecretWords(sentence, secret_names);
        sentence = hideSecretWords(sentence, secret_phones);
        sentence = hideSecretWords(sentence, secret_ids);
        sentence = hideSecretWords(sentence, secret_bases);

        console.log(sentence);
    }

    function hideSecretWords(sentence, secretWords) {

        if (secretWords != null) {
            for (secretWord of secretWords) {
                let hide = '|'.repeat(secretWord.length);

                sentence = sentence.replace(secretWord, hide);
            }
        }

        return sentence;
    }
}