let matrix = [['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['3', '3', '5', '4', '2'],
['9', '8', '7', '4', '4']];

countNeighbors(matrix);

function countNeighbors(matrix) {
    let verticalNeighbors = countVerticalNeighbors(matrix);
    let horizontalNeighbors = countHorizontalNeightbors(matrix);

    let totalNeighbors = verticalNeighbors + horizontalNeighbors;
    console.log(totalNeighbors);

    function countHorizontalNeightbors(matrix) {
        let neighborsCount = 0;

        for (let i = 0; i < matrix.length; i++) {
            let currentArray = matrix[i];

            for (let p = 0; p < currentArray.length - 1; p++) {
                if (currentArray[p] == currentArray[p + 1]) {
                    neighborsCount++;
                }
            }
        }

        return neighborsCount;
    }

    function countVerticalNeighbors(matrix) {
        let neighborsCount = 0;

        for (let i = 0; i < matrix.length - 1; i++) {
            let currentArray = matrix[i]
            let bottomNeighbour = matrix[i + 1];

            let length = Math.min(currentArray.length, bottomNeighbour.length);
            //so it does not compate undefined

            for (let p = 0; p < length; p++) {
                if (currentArray[p] == bottomNeighbour[p]) {
                    neighborsCount++;
                }
            }
        }

        return neighborsCount;
    }
}
