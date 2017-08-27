let squareMatrix = [[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]];

sumOfDiagonals(squareMatrix);

function sumOfDiagonals(squareMatrix) {
    let mainDiagonal = getMainDiagonal(squareMatrix); // looks like this: \
    let secondDiagonal = getSecondDiagonal(squareMatrix) // looks like this: /

    console.log(mainDiagonal + " " + secondDiagonal);

    function getMainDiagonal(squareMatrix) {
        let sum = 0;

        for (let row = 0; row < squareMatrix.length; row++) {
            let currentArray = squareMatrix[row] // current row

            for (let col = 0; col < currentArray.length; col++) {
                if (col == row) {
                    sum += currentArray[col]
                }
            }
        }

        return sum;
    }

    function getSecondDiagonal(squareMatrix) {
        let sum = 0;

        for (let row = 0; row < squareMatrix.length; row++) {
            let currentArray = squareMatrix[row] // current row

            for (let col = 0; col < currentArray.length; col++) {
                if (col + row == currentArray.length - 1) {
                    sum += currentArray[col]
                }
            }
        }

        return sum;
    }
}
