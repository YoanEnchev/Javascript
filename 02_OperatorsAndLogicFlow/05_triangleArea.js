let a = 2;
let b = 3.5;
let c = 4;

calcArea(a, b, c);

function calcArea(a, b, c) {
    let semi_p = (a + b + c) / 2;
    let area = Math.sqrt(semi_p * (semi_p - a) * (semi_p - b) * (semi_p - c));
    console.log(area);
}
