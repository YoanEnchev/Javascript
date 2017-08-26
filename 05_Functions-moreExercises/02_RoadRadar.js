let speedAndArea = [120, 'interstate'];

checkAndPrintSeverity(speedAndArea)

function checkAndPrintSeverity(speedAndArea) { //only if needed
    let drivingSpeed = speedAndArea[0];
    let area = speedAndArea[1];

    let speedLimit = determineSpeedLimit(area);

    if (drivingSpeed > speedLimit) {
        printSeverity(drivingSpeed, speedLimit);
    }

    function determineSpeedLimit(area) {
        switch (area) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
            default: return 1000;
        }
    }

    function printSeverity(drivingSpeed, speedLimit) {
        let overspeeding = drivingSpeed - speedLimit;

        if (overspeeding <= 20) {
            console.log('speeding');
        }

        else if (overspeeding <= 40) {
            console.log('excessive speeding');
        }

        else { //beyound 40 km/h
            console.log('reckless driving')
        }
    }
}
