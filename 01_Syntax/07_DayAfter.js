let year = 2015;
let month = 8;
let day = 23;

nextDay(year, month, day);

function nextDay(year, month, day) {
    let date_before = new Date(year, month - 1, day);
    let dayAfter = new Date(date_before.getTime() + 24 * 60 * 60 * 1000);

    let year_print = dayAfter.getFullYear();
    let month_print = dayAfter.getMonth() + 1;
    let day_print = dayAfter.getDate();

    console.log(year_print + "-" + month_print + "-" + day_print);
}
