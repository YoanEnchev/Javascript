let words = ['I', 'am', 'student'];

concatenateAndReverse(words);

function concatenateAndReverse(words) {
    let words_concatinated = words.join('');
    let symbols = words_concatinated.split('');

    let reversed = symbols.reverse().concat('');
    console.log(reversed.join(''));
        
}
