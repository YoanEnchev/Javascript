let day_month_year = [17, 3, 2002];

howManyDaysBefore(day_month_year);

function howManyDaysBefore(day_month_year) { // the month before the given date
    let month = day_month_year[1];
    let year = day_month_year[2];

    let days = new Date(year, month - 1, 0).getDate(); // 0 is the last day of previous month
    console.log(days)
}