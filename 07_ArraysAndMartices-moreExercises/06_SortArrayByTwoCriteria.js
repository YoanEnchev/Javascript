let sequence = ['alpha', 'beta', 'gamma'];

sortByTwoCreteria(sequence);

function sortByTwoCreteria(sequence) {
    let sorted = sequence
        .sort() //sorts alphanumerically, second criteria
        .sort((a, b) => (a.length > b.length)) //sorts by element's lenghth, main criteria

    console.log(sorted.join('\n'));
}