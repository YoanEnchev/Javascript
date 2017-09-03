let productsAndPrices = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti- Bug Spray : 15',
    'T- Shirt : 10'
]

orderAlphabetically(productsAndPrices);

function orderAlphabetically(productsAndPrices) {
    let registeredProdsAndPrices = new Map();

    for (prodAndPrice of productsAndPrices) {

        [product, price] = prodAndPrice.split(/\s*\:\s*/);
        registeredProdsAndPrices.set(product, price);
    }

    let firstLetters = new Set();
    Array.from(registeredProdsAndPrices.keys())
        .map(x => firstLetters.add(x[0])) //add letters

    firstLetters = Array.from(firstLetters).sort(); //sort letters
    let products_alphabetically = Array.from(registeredProdsAndPrices.keys())
        .sort();


    for (letter of firstLetters) {
        console.log(`${letter}`);

        for (product of products_alphabetically) {
            if (product[0] == letter) {
                console.log(`  ${product}: ${registeredProdsAndPrices.get(product)}`);
            }
        }

    }
}