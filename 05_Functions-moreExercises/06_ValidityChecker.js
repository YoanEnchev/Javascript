let pointsCoordinates = [2, 1, 1, 1];

printValiditypointsCoordinates(pointsCoordinates)

function printValiditypointsCoordinates(pointsCoordinates) {
    let point_1 = { x: pointsCoordinates[0], y: pointsCoordinates[1] };
    let point_2 = { x: pointsCoordinates[2], y: pointsCoordinates[3] };

    printDistanceBetweenPointAndCordSysStart(point_1);
    printDistanceBetweenPointAndCordSysStart(point_2);
    printDistanceBetweenTwoPoints(point_1, point_2);


    function printDistanceBetweenTwoPoints(point_1, point_2) {
        let side_x = Math.abs(point_1.x - point_2.x);
        let side_y = Math.abs(point_1.y - point_2.y);

        let distance = Math.sqrt(side_x ** 2 + side_y ** 2);

        if (distance == Math.floor(distance)) {
            console.log(`{${point_1.x}, ${point_1.y}} to {${point_2.x}, ${point_2.y}} is valid`);
        }

        else {
            console.log(`{${point_1.x}, ${point_1.y}} to {${point_2.x}, ${point_2.y}} is invalid`);
        }
    }

    function printDistanceBetweenPointAndCordSysStart(point) {
        side_x = point.x;
        side_y = point.y;

        let distance = Math.sqrt(side_x ** 2 + side_y ** 2);

        if (distance == Math.floor(distance)) {
            console.log(`{${point.x}, ${point.y}} to {0, 0} is valid`);
        }

        else {
            console.log(`{${point.x}, ${point.y}} to {0, 0} is invalid`);
        }
    }
}