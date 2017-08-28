let matrixAndStarCoordinates = [3, 5, 1, 0];

printOrbit(matrixAndStarCoordinates);

function printOrbit(matrixAndStarCoordinates) {
    let matrix_rows = matrixAndStarCoordinates[0];
    let matrix_cols = matrixAndStarCoordinates[1];

    let star_x = matrixAndStarCoordinates[2]; // col
    let star_y = matrixAndStarCoordinates[3]; // row

    let orbit = matrixFilledWithZeros(matrix_rows, matrix_cols);
    orbit = fillWithNumbers(orbit, star_x, star_y);

    pritnOrbit(orbit);

    function pritnOrbit(orbit) {
        for (let i = 0; i < orbit.length; i++) {
            let currentRow = orbit[i];

            console.log(currentRow.join(' '));
        }
    }

    function fillWithNumbers(orbit, star_y, star_x) {
        orbit[star_y][star_x] = 1; // star

        let numberToFill = 2;
        let goOutside = 1;

        let min_x = 0;
        let min_y = 0;

        let max_x = orbit[0].length - 1;
        let max_y = orbit.length - 1;

        for (let i = 0; i < Math.max(orbit.length, orbit[0].length); i++) { // until
            orbit = fillTop();
            orbit = fillBottom()
            orbit = fillRight();
            orbit = fillLeft();

            numberToFill++;
            goOutside++;
        }

        return orbit;

        function fillBottom() {
            for (let i = 0; i < orbit[0].length; i++) {

                if (star_y + goOutside <= max_y) {
                    orbit[star_y + goOutside][i] = numberToFill;
                }
            }

            return orbit;
        }

        function fillTop() {
            for (let i = 0; i < orbit[0].length; i++) {

                if (star_y - goOutside >= min_y) {
                    orbit[star_y - goOutside][i] = numberToFill;
                }
            }

            return orbit;
        }

        function fillRight() {
            for (let i = 0; i < orbit.length; i++) {

                if (star_x + goOutside <= max_x) {
                    orbit[i][star_x + goOutside] = numberToFill;
                }
            }

            return orbit;
        }

        function fillLeft() {
            for (let i = 0; i < orbit.length; i++) {

                if (star_x - goOutside >= min_x) {
                    orbit[i][star_x - goOutside] = numberToFill;
                }
            }

            return orbit;
        }
    }

    function matrixFilledWithZeros(matrix_cols, matrix_rows) {
        let matrixWithZeros = [];

        for (let r = 0; r < matrix_rows; r++) {
            let currentRow = [];

            for (let c = 0; c < matrix_cols; c++) {
                currentRow.push(0);
            }

            matrixWithZeros.push(currentRow);
        }

        return matrixWithZeros;
    }
}
