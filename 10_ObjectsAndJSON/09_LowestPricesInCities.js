let input = [
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
];

lowestPriceByCity(input);

function lowestPriceByCity(input) {
    let products_cities_prices = new Map();

    for (city_product_price of input) {
        let tokens = city_product_price.split(/\s*\|\s*/);
        [city, product, price] = tokens;

        if (!products_cities_prices.has(product)) { //not registered product
            products_cities_prices.set(product, new Map());
        }

        products_cities_prices.get(product).set(city, Number(price));
    }

    for ([product, pricesAndCities] of products_cities_prices) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let city_lowestPrice = "";

        for ([city, price] of pricesAndCities) {
            if (price < lowestPrice) {
                lowestPrice = price;
                city_lowestPrice = city;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${city_lowestPrice})`);
    }
}