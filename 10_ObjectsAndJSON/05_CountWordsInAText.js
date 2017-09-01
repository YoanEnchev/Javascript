let text = ["Far too slow, you're far too slow."];

wordsOccurance(text);

function wordsOccurance(text) {
    let wordsAndCount = {};

    for (sentence of text) {
        let words = sentence.match(/\w+/g);

        for (word of words) {
            if (!wordsAndCount.hasOwnProperty(word)) {
                wordsAndCount[word] = 0;
            }

            wordsAndCount[word]++;
        }
    }

    console.log(JSON.stringify(wordsAndCount));
}