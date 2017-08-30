let townsAndIncomes = ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'];

printTownsAndIncome(townsAndIncomes);

function printTownsAndIncome(townsAndIncomes) {
    let towns = [];
    let incomes = [];


    for (townAndIncome of townsAndIncomes) {
        townAndIncome = townAndIncome.split('|')
            .filter(e => e != '');

        let town = townAndIncome[0].trim();
        let income = Number(townAndIncome[1]);

        towns.push(town);
        incomes.push(income);
    }

    let sumOfIncomes = incomes.reduce((a, b) => (a + b));

    console.log(towns.join(', '));
    console.log(sumOfIncomes);

}