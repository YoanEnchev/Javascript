let n = 2;

squareOfStars(); // missing n so default value activates

function squareOfStars(n = 5) { //default value = 5
    for (let i = 1; i <= n; i++) {
        printStarsRow(n);
    }

    function printStarsRow(i) {
        console.log('* '.repeat(i));
    }
}
