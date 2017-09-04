let input = [
'RTA72 London 140 land',
'RTA72 Brussels 240 depart',
'RTA72 Sofia 450 land',
'RTA72 Lisbon 240 depart',
'RTA72 Berlin 350 land',
'RTA72 Otava 201 depart',
'RTA72 Haga 350 land',
'RTA72 Otava 201 depart',
'RTA72 Dortmund 150 land',
'RTA72 Montana 243 depart',
'RTA72 Monreal 350 land',
'RTA72 NewYork 201 depart',
'RTA72 Pekin 350 land',
'RTA72 Tokyo 201 depart',
'RTA72 Warshaw 350 land',
'RTA72 Riga 201 depart',
];

printStatistic(input);

function printStatistic(input) {
    let planeAndAction = new Map(); //planes on airport
    let cityAndPassengers = new Map();
    let cityAndPlanes = new Map();

    for (id_city_passCount_action of input) {
        [id, city, passengers, action] = id_city_passCount_action.split(' ');

        if (!planeAndAction.has(id)) {
            if (action === 'land') {
                planeAndAction.set(id, action);

                if (!cityAndPassengers.has(city)) {
                    cityAndPassengers.set(city, []); //[0] = arrivals, [1] = departures

                    cityAndPassengers.get(city)[0] = 0;
                    cityAndPassengers.get(city)[1] = 0;
                }

                cityAndPassengers.get(city)[0] += Number(passengers); //add arrivals
            }

            else { //invalid input
                continue;
            }

        }

        else {
            if (action === 'depart') {
                planeAndAction.delete(id);

                if (!cityAndPassengers.has(city)) {
                    cityAndPassengers.set(city, []); //[0] = arrivals, [1] = departures

                    cityAndPassengers.get(city)[0] = 0;
                    cityAndPassengers.get(city)[1] = 0;
                }

                cityAndPassengers.get(city)[1] += Number(passengers); //add departures

            }

            else {
                continue; // invalid input
            }
        }

        if (!cityAndPlanes.has(city)) {
            cityAndPlanes.set(city, new Set());
        }

        cityAndPlanes.get(city).add(id);
    }

    planeAndAction = Array.from(planeAndAction)
        .sort((a, b) => a[0].localeCompare(b[0])); //sort alphabetically planes on the airport

    cityAndPassengers = Array.from(cityAndPassengers)
        .sort((a, b) => sortCityAndPassengers(a, b));

    (function printData() {
        console.log('Planes left:')

        for (plane of planeAndAction) {
            console.log(`- ${plane[0]}`)
        }

        for (city_passagers of cityAndPassengers) {
            let city = city_passagers[0];
            let arrivals = city_passagers[1][0];
            let departures = city_passagers[1][1];

            console.log(city);
            console.log(`Arrivals: ${arrivals}`);
            console.log(`Departures: ${departures}`)

            let planesForTheCity = cityAndPlanes.get(city);

            console.log('Planes:');

            planesForTheCity = Array.from(planesForTheCity)
                .sort((a, b) => a.localeCompare(b)); //alphabetical sort for planes of the city

            for (plane of planesForTheCity) {
                console.log(`-- ${plane}`)
            }
        }
    })();

    function sortCityAndPassengers(a, b) {
        if (b[1][0] !== a[1][0]) { //main criteria is arrivals count
            return b[1][0] - a[1][0];
        }

        else {
            return a[0].localeCompare(b[0]); //second criteria is alphabetical sort
        }
    }
}