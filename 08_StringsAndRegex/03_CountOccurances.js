let target = 'the';
let text = 'the quick brown fox jumps over the lay dog.';

countOccurances(target, text);

function countOccurances(target, text) {
    let occuranceIndex = text.indexOf(target);
    let occuranceCount = 0;

    while (occuranceIndex > -1) {

        occuranceIndex = text.indexOf(target, occuranceIndex + 1);
        occuranceCount++;
    }

    console.log(occuranceCount);
}
