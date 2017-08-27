let matrix = [[20, 50, 10],
    [8, 33, 145]];

biggestElement(matrix);

function biggestElement(matrix) {
    let biggestNumber = matrix
        .map(a => a.sort((a, b) => (a - b))[a.length - 1]) //sort and take last element (biggest) of array
        .sort((a, b) => (a - b)) // now we have an array of the biggest numbers of the arrays creating the matrix
        .reverse()[0] // sort and reverse so first element in the biggest number

    console.log(biggestNumber);
}