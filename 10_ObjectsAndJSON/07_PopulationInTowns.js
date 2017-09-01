let input = ['Sofia <-> 1200000 ',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
];

populatonsInTowns(input);

function populatonsInTowns(input) {
    let townsAndPopulations = new Map();

    for (townAndPop of input) {
        let townAndPop_tokens = townAndPop.split(' <-> ');
        let town = townAndPop_tokens[0];
        let population =  Number(townAndPop_tokens[1]);

        if (!townsAndPopulations.has(town)) {
            townsAndPopulations.set(town, 0);
        }

        townsAndPopulations.set(town, townsAndPopulations.get(town) + population);
    }

    for (kvp of [...townsAndPopulations]) {
        console.log(`${kvp[0]} : ${kvp[1]}`);
    }
}
