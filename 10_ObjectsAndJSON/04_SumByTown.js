let input = ['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']                 

sumByTown(input);

function sumByTown(input) {
    let citiesAndIncome = {};

    for (let i = 0; i < input.length; i+=2) {
        let city = input[i];
        let income = Number(input[i + 1]);

        if (!citiesAndIncome.hasOwnProperty(city)) {
            citiesAndIncome[city] = 0;
        }

        citiesAndIncome[city] += income;
    }

    console.log(JSON.stringify(citiesAndIncome));
}