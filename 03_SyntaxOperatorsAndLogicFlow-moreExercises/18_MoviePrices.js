let movieAndDay = ['casablanca', 'sunday'];

printPrice(movieAndDay)

function printPrice(movieAndDay) {
    let movie = movieAndDay[0].toLowerCase(); //avoid capital letter(s)
    let day = movieAndDay[1].toLowerCase();
    let price = "invalid";

    if (movie == "the godfather") {
        switch (day) {
            case "monday":
                price = 12;
                break;
            case "tuesday":
                price = 10;
                break;
            case "wednesday":
                price = 15;
                break;
            case "thursday":
                price = 12.50;
                break;
            case "friday":
                price = 15;
                break;
            case "saturday":
                price = 25;
                break;
            case "sunday":
                price = 30;
                break;
            default: console.log("error");
        }
    }

    else if (movie == "schindler's list") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                price = 8.50;
                break;
            case "saturday":
            case "sunday":
                price = 15;
                break;
            default: console.log("error");
        }
    }

    else if (movie == "casablanca") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                price = 8;
                break;
            case "saturday":
            case "sunday":
                price = 10;
                break;
            default: console.log("error");
        }
    }

    else if (movie == "the wizard of oz") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                price = 10;
                break;
            case "saturday":
            case "sunday":
                price = 15;
                break;
            default: console.log("error");
        }
    }

    else {
        console.log('error');
    }

    if (price != "invalid") {
        console.log(price);
    }
}