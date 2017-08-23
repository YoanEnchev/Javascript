let year = 1900;

leapYearCheck(year)

function leapYearCheck(year) {
    let isLeap = false;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
