let input = [8, -1, 2, 12, -3, 3];

insideRectangle(input);

function insideRectangle(input) {

    let x = input[0];
    let y = input[1];
    let x_min = input[2];
    let x_max = input[3];
    let y_min = input[4];
    let y_max = input[5];

    if (x >= x_min && x <= x_max && y >= y_min && y <= y_max) {
        console.log("inside");
    }

    else {
        console.log("outside");
    }
}

