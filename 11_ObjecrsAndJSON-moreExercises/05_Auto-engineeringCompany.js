let input = [
    'Audi | Q7 | 1000',
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ - 24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
];

registerCars(input);

function registerCars(input) {
    let brand_modelQuantity = new Map();

    for (brand_model_quantity of input) {
        [brand, model, quantity] = brand_model_quantity.split(' | ');

        if (!brand_modelQuantity.has(brand)) { //check for brand
            brand_modelQuantity.set(brand, new Map());
        }

        if (!brand_modelQuantity.get(brand).has(model)) { //check for model
            brand_modelQuantity.get(brand).set(model, 0)
        }

        let currentAmount = brand_modelQuantity.get(brand).get(model);
        brand_modelQuantity.get(brand).set(model, currentAmount + Number(quantity));
    }

    for ([brand, modelAndQuantity] of brand_modelQuantity) {
        console.log(brand);

        for ([model, quantity] of modelAndQuantity) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}