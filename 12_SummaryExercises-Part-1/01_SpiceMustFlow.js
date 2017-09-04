let startingYield = ["134217728"];

daysAndConsumation(startingYield);

function daysAndConsumation(startingYield) {
    let totalSpices = 0;
    let days_count = 0;

    let spicesPerDay = Number(startingYield);
    startingYield = Number(startingYield);

    while (startingYield >= 100) {
        let spicesPerDay = startingYield - 26; // worker consumation
        totalSpices += spicesPerDay;

        days_count++;
        startingYield -= 10;
    }

    console.log(days_count);

    if (days_count > 0) {
        console.log(totalSpices - 26); //due to mine exhaustion
    }

    else {
        console.log(totalSpices);
    }
}