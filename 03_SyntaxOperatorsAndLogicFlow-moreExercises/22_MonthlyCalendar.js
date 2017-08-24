function printCalendar(date_tokens) {
    let day = date_tokens[0];
    let month = date_tokens[1];
    let year = date_tokens[2];

    let date = new Date(year, month - 1, day);
    console.log(date);

    let calendar_code = "<table>\n";
    calendar_code += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    /**
     * previous days
     */

    let previousMonth = month - 1;
    let year_previousMonth = year;

    if (month == 1) {
        previousMonth = 12;
        year_previousMonth--;
    }

    let lastDay_previousMonth = new Date(year, month - 1, 0).getDate(); //0 for last day of previous month
    let lastDay_previousMonth_dayOfWeek = new Date(year, month - 1, 0).getDay(); // 0 -> sunday 1-> monday ect

    let start = lastDay_previousMonth - lastDay_previousMonth_dayOfWeek;
    let end = lastDay_previousMonth;
    let onNewLine = 0; //will add <tr> and </tr>

    if (lastDay_previousMonth_dayOfWeek != 6) {
        while (start <= end) { //maybe bugs here???
            calendar_code += `<td class="prev-month">${start}</td>`;
            start++;
            onNewLine++;
        }
    }

    calendar_code += "\n";

    /**
     * current month days
     */
    let lastDay_currentMonth = new Date(year, month, 0).getDate(); //? bug with february

    for (let i = 1; i <= lastDay_currentMonth; i++) {
        if (i == day) { //today
            calendar_code += `<td class="today">${i}</td>`;
        } else {
            calendar_code += `<td>${i}</td>`;
        }

        onNewLine++;

        if (onNewLine % 7 == 0) {
            calendar_code += "</tr><tr>"
        }
    }


    /**
     * next month days
     */

    let firstDay_dayOfWeek = new Date(year, month, 0).getDay() + 1;

    let until = 7 - firstDay_dayOfWeek; // 2 -> tuesay, 0 -> sunday

    for (let i = 1; i <= until; i++) {

        calendar_code += `<td class="next-month">${i}</td>`;
        onNewLine++;

        if (onNewLine % 7 == 0) {
            calendar_code += "</tr><tr>"
        }
    }

    calendar_code += "\n"
    calendar_code += "</table>"
    console.log(calendar_code);

    return calendar_code;
}