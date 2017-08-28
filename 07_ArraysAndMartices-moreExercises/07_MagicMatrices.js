let matrix = [[4, 5, 6],
[6, 5, 4],
[5, 5, 5]];

isMatrixMagical(matrix)

function isMatrixMagical(matrix) {
    let equalRows = equalRowsCheck(matrix);
    let equalColums = equalColumsCheck(matrix);

    if (equalRows && equalColums) {
        console.log('true');
    }

    else {
        console.log('false');
    }

    function equalColumsCheck(matrix) {
        let firstColumnSum = matrix.map((e) => e[0]) //elements of the column
            .reduce((a, b) => a + b, 0); // sum of the elements of the column

        for (let i = 1; i < matrix[0].length; i++) {
            let currentColumnSum = matrix.map((e) => e[i]) //elements of the column
                .reduce((a, b) => a + b, 0); // sum of the elements of the column

            if (firstColumnSum != currentColumnSum) {
                return false;
            }         
        }

        return true;
    }

    /**
     * compares the sum of the first row to the others of the matrix
     */
    function equalRowsCheck(matrix) {
        let firstRowSum = matrix[0].reduce((a, b) => a + b, 0); //gets sum

        for (let i = 1; i < matrix.length; i++) {
            let currentRowSum = matrix[i].reduce((a, b) => a + b, 0); //gets sum

            if (firstRowSum != currentRowSum) {
                return false;
            }
        }

        return true;
    }
}
