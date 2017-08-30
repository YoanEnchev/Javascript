let text = ['I am born on 30-Dec-1994. 26-Jul-1955 ',
    'This is not date: 512-Jan-1996 20-Jul-1955.',
    'My father is born on the 29-Jul-1955.'];

getDates(text);

function getDates(text) {
    text = text.join(' ');

    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let matches = text.match(regex);

    if (matches != null) {

        for (date of matches) {
            let day_month_year = date.split('-');

            let day = day_month_year[0];
            let month = day_month_year[1];
            let year = day_month_year[2];

            console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        }
    }
}
