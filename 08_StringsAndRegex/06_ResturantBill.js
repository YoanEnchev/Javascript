let producstAndPrices = ['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69'];

printProductsAndSum(producstAndPrices);

function printProductsAndSum(producstAndPrices) {
    let products = producstAndPrices
        .filter((e, i) => (i % 2 == 0));

    let sum = producstAndPrices
        .filter((e, i) => (i % 2 == 1))
        .map(Number)
        .reduce((a, b) => (a + b));

    let listedProducts = products.join(', ');
    console.log(`You purchased ${listedProducts} for a total sum of ${sum}`);
}

