let elements = [1, 2, 3];

aggregateElements(elements)

function aggregateElements(elements) {
    let sum = elements.reduce((a, b) => a + b, 0);

    let inversedValues = elements.map(e => 1 / e);
    let inversedValuesSum = inversedValues.reduce((a, b) => a + b, 0);

    let makeItArrayOfStrings = elements.map(e => e.toString());
    let concat = elements.reduce((a, b) => a + b, '');

    console.log(sum);
    console.log(inversedValuesSum);
    console.log(concat);
}