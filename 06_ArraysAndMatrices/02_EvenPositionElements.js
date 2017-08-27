let elements = ['20', '30', '40'];

printEvenPositionedElements(elements)

function printEvenPositionedElements(elements) {
    elements = elements
        .filter((e, index) => index % 2 == 0); 

    console.log(elements.join(' '));
}
