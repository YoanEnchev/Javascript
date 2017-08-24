let n = 5;

printFigure(n);

function printFigure(n) {

    let squares_width = drawSquareWidth(n);  // +--+--+
    let square_height = drawSquareHeight(n); // |  |  |

    if (n == 2) { // there is only one row if n = 2
        console.log(squares_width);
    }

    else if (n > 2 ){ // there are always 3 "widths" rows and two "height" rows if n > 2
        let result = squares_width + square_height + squares_width + square_height + squares_width;
        console.log(result);
    }
}

function drawSquareWidth(n) {

    let squareWidth = "+";

    for (let i = 1; i <= n - 2; i++) {
        squareWidth += "-";
    }

    squareWidth += "+";

    for (let i = 1; i <= n - 2; i++) {
        squareWidth += "-";
    }

    squareWidth += "+\n";

    return squareWidth;
}

function drawSquareHeight(n) {

    let squareHeight = "";

    let height = n / 2 - 1;

    if (n % 2 == 0) {
        height--;
    }

    for (var i = 1; i <= height; i++) {
        squareHeight += "|";

        squareHeight += ' '.repeat(n - 2);

        squareHeight += "|";

        squareHeight += ' '.repeat(n - 2);

        squareHeight += "|\n";
    }

    return squareHeight;
}