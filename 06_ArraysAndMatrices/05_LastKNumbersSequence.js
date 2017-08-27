let length = 6;
let sumOfPrevious = 3;

printSequence(length, sumOfPrevious);

function printSequence(length, sumOfPrevious) {

    let sequence = [1];

    for (let i = 0; i < length - 1; i++) {
        let newElement = getElement(sumOfPrevious, sequence);
        sequence.push(newElement)
    }

    console.log(sequence);

    function getElement(sumOfPrevious, sequence) {
        newElement = 0;
        repeated = 0; // sum of how many elements was added

        for (let i = sequence.length - 1; i != -1; i--) { // add sum of previous element

            if (repeated == sumOfPrevious) {
                break;
            }

            newElement += sequence[i];

            repeated++;
        }

        return newElement;
    }
}
