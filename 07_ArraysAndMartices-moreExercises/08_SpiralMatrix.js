let x = 5;
let y = 4;

printSpiralMatrix(x, y);

function printSpiralMatrix(x, y) {
    let matrix = createMatrixOfZeroes(x, y);

    let fillNumber = 1;
    let goInside = 0; 

    while (fillNumber <= x * y) {
        matrix = fillNumberFrame(matrix, x, y, fillNumber); // if element is 0, it gets other number
        goInside++;
    }

    pritnMatrix(matrix);

    function pritnMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let currentRow = matrix[i];

            console.log(currentRow.join(' '));
        }
    }

    function fillNumberFrame(matrix, x, y, fillNumber) {
        matrix = fillTop(matrix, x, y, fillNumber);
        matrix = fillRight(matrix, x, y, fillNumber);
        matrix = fillBottom(matrix, x, y, fillNumber);
        matrix = fillLeft(matrix, x, y, fillNumber);

        return matrix;
    }

    function fillLeft(matrix, x, y) {
        for (let i = y - 2; i >= 0; i--) {
            if (matrix[i][0 + goInside] == 0) {
                matrix[i][0 + goInside] = fillNumber;
                fillNumber++;
            }
        }

        return matrix;
    }

    function fillBottom(matrix, x, y) {
        for (let i = x - 1; i >= 0; i--) { // fill last row
            if (matrix[y - 1 - goInside][i] == 0) { 
                matrix[y - 1 - goInside][i] = fillNumber;
                fillNumber++;
            }
        }

        return matrix;
    }

    function fillRight(matrix, x, y) {
        for (let i = 1; i < y; i++) { // rows except first one
            if (matrix[i][x - 1 - goInside] == 0) {
                matrix[i][x - 1 - goInside] = fillNumber;
                fillNumber++;
            }
        }

        return matrix;
    }

    function fillTop(matrix, x, y) {
        for (let i = 0; i < x; i++) {

            if (matrix[0 + goInside][i] == 0) {
                matrix[0 + goInside][i] = fillNumber;
                fillNumber++;
            }
        }

        return matrix;
    }

    function createMatrixOfZeroes(x, y) {
        let getMatrix = [];

        for (let r = 0; r < y; r++) {
            let getRow = [];

            for (let c = 0; c < x; c++) {
                getRow.push(0);
            }

            getMatrix.push(getRow);
        }

        return getMatrix;
    }
}
