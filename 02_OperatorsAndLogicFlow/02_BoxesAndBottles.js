let bottles = 15;
let bottlesPerBox = 7;

boxesAndBottles(bottles, bottlesPerBox)

function boxesAndBottles(bottles, bottlesPerBox) {
    let neededBoxes = bottles / bottlesPerBox;
    neededBoxes = Math.ceil(neededBoxes);
    console.log(neededBoxes);
}
