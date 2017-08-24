let speedsAndPeriod = [0, 60, 3600];

calcDistance(speedsAndPeriod);

function calcDistance(speedsAndPeriod) {
    let speed_1 = speedsAndPeriod[0] * 1000; //from kilometers to meters per hour
    let speed_2 = speedsAndPeriod[1] * 1000; //from kilometers to meters per hour
    let period = speedsAndPeriod[2]  / 3600 // from minutes to hours;

    let traveledDistance_1 = speed_1 * period;
    let traveledDistance_2 = speed_2 * period;

    let distanceBetweenObjects = Math.abs(traveledDistance_1 - traveledDistance_2);
    console.log(distanceBetweenObjects);
}