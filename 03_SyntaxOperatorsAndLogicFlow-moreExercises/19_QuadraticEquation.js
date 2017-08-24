let a = 6;
let b = 11;
let c = -35;

printRoots(a, b, c);

function printRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log('No');
    }

    else if (discriminant == 0) {
        let root = -b / (2 * a);
        console.log(root);
    }

    else if (discriminant > 0) {
        let root_smaller = (-b - Math.sqrt(discriminant)) / (2 * a);
        let root_greater = (-b + Math.sqrt(discriminant)) / (2 * a);

        console.log(root_smaller);
        console.log(root_greater);
    }
}