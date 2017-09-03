let juicesAndQuantities = [
'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'
]

juicesAndBottles(juicesAndQuantities);

function juicesAndBottles(juicesAndQuantities) {
    let juices_atLeastOnebottles = new Map();
    let allJuices = new Map();

    for (juiceAndQuantity of juicesAndQuantities) {
        [juice, quantity] = juiceAndQuantity.split(/\s*\=\>\s*/);

        if (!allJuices.has(juice)) {
            allJuices.set(juice, 0);
        }

        allJuices.set(juice, Number(allJuices.get(juice) + Number(quantity)));

        if (allJuices.get(juice) >= 1000) {
            juices_atLeastOnebottles.set(juice, Number(allJuices.get(juice)));
        }
    }

    for ([fruit, quantity] of juices_atLeastOnebottles) {
        let bottles = Math.floor(quantity / 1000);
        console.log(`${fruit} => ${bottles}`);
    }
}