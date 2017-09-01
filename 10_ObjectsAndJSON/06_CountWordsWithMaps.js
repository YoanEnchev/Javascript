let text = ["Far too slow, you're far too slow."];

wordsOccurance(text);

function wordsOccurance(text) {
    text = text.join(' ').toLowerCase();
    let words = text.split(/\W+/g)
        .filter(w => w != '');

    let wordsOccurance = new Map();

    for (word of words) {
        if (!wordsOccurance.has(word)) {
            wordsOccurance.set(word, 0);
        }

        wordsOccurance.set(word, wordsOccurance.get(word) + 1);
    }

    for (kvp of [...wordsOccurance].sort()) { //required to be this way sorted
        console.log(`'${kvp[0]}' -> ${kvp[1]} times`);
    }
}