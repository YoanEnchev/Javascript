let number = 8;

chessBoard(number);

function chessBoard(number) {
    let result = '<div class="chessboard">\n';

    for (let row = 1; row <= number; row++) {
        result += "   <div>\n";

        for (let col = 1; col <= number; col++) {
            let color = "";

            if ((row + col) % 2 == 0) {
                color = "black";
            }

            else {
                color = "white";
            }

            result += `      <span class="${color}">x</span>\n`
        }

        result += "   </div>\n";
    }

    return result;
}
