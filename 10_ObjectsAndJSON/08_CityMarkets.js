let input = [
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3 '
];

productsIncomeByTown(input);

function productsIncomeByTown(input) {
    let townSoldProductsAndIncome = new Map();

    for (data of input) {
        let tokens = data.split(/\s*->\s*/g);

        let town = tokens[0];
        let product = tokens[1];
        let quantityAndPrice = tokens[2];

        let income = quantityAndPrice.split(/\s*:\s*/) //get quantity and price as elements of array
            .reduce((a, b) => (a * b)) //(multiply quantity and price) = income

        if (!townSoldProductsAndIncome.has(town)) { //if the town is not registered yet
            townSoldProductsAndIncome.set(town, new Map()); // the inner map contains data about product and income
        }

        if (!townSoldProductsAndIncome.get(town).has(product)) { // if the product is not registered yet
            townSoldProductsAndIncome.get(town).set(product, 0); // sets product and it's income
        }

        townSoldProductsAndIncome.get(town).set(product, income);
    }

    printData(townSoldProductsAndIncome);
   
    function printData(townSoldProductsAndIncome) {
        for (townData of townSoldProductsAndIncome) {
            let town = townData[0];
            console.log(`Town - ${town}`);

            let productsAndIncomes = townData[1];

            for (kvp of productsAndIncomes) {
                console.log(`$$$${kvp[0]} : ${kvp[1]}`);
            }
        }
    }
}
