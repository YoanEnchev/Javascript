let elementsAndRotation = [1, 2, 3, 4, 2];

rotateArray(elementsAndRotation);

function rotateArray(elementsAndRotation) {
    let elements = elementsAndRotation.slice(0, elementsAndRotation.length - 1);
    let rotationsCount = elementsAndRotation[elementsAndRotation.length - 1];

    rotationsCount = rotationsCount % elements.length; // dont do unneeded laps

    for (let i = 0; i < rotationsCount; i++) {
        elements = rotateElements(elements); // to the right
    }

    console.log(elements.join(' '));

    function rotateElements(elements) {
        let rotatedElements = [];

        rotatedElements[0] = elements[elements.length - 1] //first

        for (let p = 1; p < elements.length; p++) { // all except first
            rotatedElements[p] = elements[p - 1];
        }

        return rotatedElements;
    }
}
