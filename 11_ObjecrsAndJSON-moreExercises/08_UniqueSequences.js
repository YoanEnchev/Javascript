let sequences = [
    '[]',
    '[4, -3, 3, -2, 2, -1, 1, 9]',
    '[-3, -2, -1, 0, 1, 2, 3, 4]'
];

sortUniques(sequences);

function sortUniques(sequences) {
    let allArrays = [];

    for (array of sequences) {
        let sorted = JSON.parse(array).sort((a, b) => (b - a));
        allArrays.push(sorted);
    }

    for (let i = 0; i < allArrays.length; i++) {
        let currentArray = allArrays[i];

        for (let p = 0; p < allArrays.length; p++) {

            let sameNumbers = JSON.stringify(currentArray) == JSON.stringify(allArrays[p]);

            if (i !== p && sameNumbers) {
                allArrays.splice(p, 1);

                i--;
                p--;
            }
        }
    }

    let sortedMatrix = allArrays.sort((a, b) => (a.length - b.length));

    for (array of sortedMatrix) {
        let result = '[';

        for (let i = 0; i < array.length; i++) {

            if (i == array.length - 1) {
                result += `${array[i]}`;
            }

            else {
                result += `${array[i]}, `;
            }
        }

        result += ']';

        console.log(result);
    }
}

