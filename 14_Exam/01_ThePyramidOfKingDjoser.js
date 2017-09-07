//Points: 100/100

let base = 12;
let increment = 1;

calculateMaterialsAndHeight(base, increment);

function calculateMaterialsAndHeight(base, increment) {
    let floor = 1;

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (base > 0) {
        if (floor % 5 !== 0 && (base !== 1 && base !== 2)) {
            marble += (base - 1) * 4 * increment; //outer
        }

        else if (floor % 5 === 0 && (base !== 1 && base !== 2)) {
            lapis += (base - 1) * 4 * increment;
        }

        if (base === 1 || base === 2) { //last floor
            gold += base * base * increment;
        }

        else { //any other floor
            stone += ((base - 2) ** 2) * increment;
        }

        base -= 2;
        floor++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((floor - 1) * increment)}`);
}
