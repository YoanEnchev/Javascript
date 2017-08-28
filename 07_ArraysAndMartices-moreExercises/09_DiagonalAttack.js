let matrix = ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'];

printMatrix(matrix);

function printMatrix(matrix) {
    matrix = convertToMatrixOfNumbers(matrix);

    let diagonal_1 = sumOfMainDiagonalElements(matrix) // diagonal looks like this: \
    let diagonal_2 = sumOfSecondDiagonalElements(matrix) // diagonal looks like this: /

    if (diagonal_1 == diagonal_2) { // make non diagonal elements equal to diagonal 1(or 2)
        matrix = changeNonDiagonalElements(matrix, diagonal_1);
    }

    pritnFinalMatrix(matrix);

    function pritnFinalMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let currentRow = matrix[i];

            console.log(currentRow.join(' '));
        }
    }

    function changeNonDiagonalElements(matrix, diagonal_1) {
        for (let r = 0; r < matrix.length; r++) { //rows
            for (let c = 0; c < matrix[r].length; c++) { //columns

                if ((r + c != matrix.length - 1) && (r != c)) { // works for square matrix
                    matrix[r][c] = diagonal_1;
                }
            }
        }

        return matrix;
    }

    function sumOfSecondDiagonalElements(matrix) {
        let sum = 0;

        for (let r = 0; r < matrix.length; r++) { //rows
            for (let c = 0; c < matrix[r].length; c++) { //columns

                if (r + c == matrix.length - 1) { // works for square matrix
                    sum += matrix[r][c];
                }
            }
        }

        return sum;
    }

    function sumOfMainDiagonalElements(matrix) {
        let sum = 0;

        for (let r = 0; r < matrix.length; r++) { //rows
            for (let c = 0; c < matrix[r].length; c++) { //columns

                if (r == c) {
                    sum += matrix[r][c];
                }
            }
        }

        return sum;
    }

    function convertToMatrixOfNumbers(matrix) {
        let matrixOfStrings = matrix;
        let matrixOfNumbers = [];

        for (let i = 0; i < matrixOfStrings.length; i++) {
            let currentString = matrixOfStrings[i];
            let arrayOfNumbers = currentString.split(' ')
                .map(e => Number(e)); //from string to number

            matrixOfNumbers.push(arrayOfNumbers);
        }

        return matrixOfNumbers;       
    }
}
