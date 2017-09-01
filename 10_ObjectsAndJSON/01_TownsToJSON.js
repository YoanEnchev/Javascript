let table = ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'];

convertToJSON(table);

function convertToJSON(table) {
    let properties = table[0].split(/\s*\|\s*/g)
        .filter(e => e != "");

    let townsAndCoordinates = [];

    for (let i = 1; i < table.length; i++) {
        let tokens = table[i].split(/\s*\|\s*/g)
            .filter(e => e != "");

        let currentTown = {};

        for (let p = 0; p < properties.length; p++) {

            if (p == 0) {
                currentTown[properties[p]] = tokens[p];
            }

            else {
                currentTown[properties[p]] = Number(tokens[p]);
            }
        }

        townsAndCoordinates.push(currentTown);
    }

    console.log(JSON.stringify(townsAndCoordinates));
}
