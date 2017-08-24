let side_1 = 2.5;
let side_2 = 3.14;

calculate(side_1, side_2)

function calculate(side_1, side_2) {
    let area = side_1 * side_2;
    let perimeter = 2 * (side_1 + side_2);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}