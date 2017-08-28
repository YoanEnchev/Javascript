let sequenceAndStep = ['5', '20', '31', 4, 20, '2'];

printStepElements(sequenceAndStep);

function printStepElements(sequenceAndStep) {
    let step = Number(sequenceAndStep[sequenceAndStep.length - 1]); // get last one (step)
    let elements = sequenceAndStep.slice(0, sequenceAndStep.length - 1) // get every element except last one

    let steppedElements = elements
        .filter((e, index) => (index % step == 0)); // needed element has position % step == 0

    let result = steppedElements.join('\n');
    console.log(result);
}
