let sentence = 'The The the waterfall was so high, that the child couldn’t see its peak.';
let searchFor = 'the';

countOccurance(sentence, searchFor);

function countOccurance(sentence, searchFor) {
    let regex = new RegExp(`\\b${searchFor}\\b`, "ig");
    let matches = sentence.match(regex);

    if (matches != null) {
        console.log(matches.length);
    }

    else {
        console.log('0');
    }
}
