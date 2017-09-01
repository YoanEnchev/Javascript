let sentences = ['Lorem ipsum lorem Ipsum '];

uniqueWords(sentences);

function uniqueWords(sentences) {
    let text = sentences.join(' ')

    let uniqueWords =new Set();
    let words = text.match(/\w+/g)
        .map(w => uniqueWords.add(w.toLowerCase())); //adds all words to the set, case sensitive

    console.log([...uniqueWords].join(', '));

}