let rows = 4;

dollarTriangle(rows);

function dollarTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        console.log('$'.repeat(i));
    }
}
