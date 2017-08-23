let x1 = 2;
let y1 = 4;
let x2 = 5;
let y2 = 0;

function distanceBetweenPoints(x1, y1, x2, y2) {
    let point_1 = { x: x1, y: y1 };
    let point_2 = { x: x2, y: y2 };

    let side_1 = Math.abs(point_1.x - point_2.x);
    let side_2 = Math.abs(point_1.y - point_2.y);

    let distance = Math.sqrt(side_1 * side_1 + side_2 * side_2);
    console.log(distance);
}
