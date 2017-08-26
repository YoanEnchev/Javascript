let pointsCoordinates = [5, 1, 1, 1, 5, 4];

calculateDistances(pointsCoordinates);

function calculateDistances(pointsCoordinates) {
    let point_1 = { x: pointsCoordinates[0], y: pointsCoordinates[1] };
    let point_2 = { x: pointsCoordinates[2], y: pointsCoordinates[3] };
    let point_3 = { x: pointsCoordinates[4], y: pointsCoordinates[5] };

    let distance_point_1_point_2 = distanceBetweenTwoPoints(point_1, point_2);
    let distance_point_1_point_3 = distanceBetweenTwoPoints(point_1, point_3);
    let distance_point_2_point_3 = distanceBetweenTwoPoints(point_2, point_3);

    let distances_sorted = [distance_point_1_point_2, distance_point_1_point_3, distance_point_2_point_3].sort();

    (function checkAndPrintShortestWay() {
        let result = "";

        if (distance_point_1_point_2 == distances_sorted[0]) { //shortest

            if (distance_point_1_point_3 < distance_point_2_point_3) {
                console.log(`2->1->3: ${distance_point_1_point_2 + distance_point_1_point_3}`);
            }

            else {
                console.log(`1->2->3: ${distance_point_1_point_2 + distance_point_2_point_3}`);
            }
        }

        else if (distance_point_1_point_3 == distances_sorted[0]) { //shortest

            if (distance_point_1_point_2 < distance_point_2_point_3) {
                console.log(`2->1->3: ${distance_point_1_point_2 + distance_point_1_point_3}`);
            }

            else {
                console.log(`1->3->2: ${distance_point_1_point_3 + distance_point_2_point_3}`);
            }
        }

        else if (distance_point_2_point_3 == distances_sorted[0]) { //shortest
            if (distance_point_1_point_3 < distance_point_1_point_2) {
                console.log(`1->3->2: ${distance_point_1_point_3 + distance_point_2_point_3}`);
            }

            else {
                console.log(`1->2->3: ${distance_point_1_point_2 + distance_point_2_point_3}`);
            }
        }
    })();

    function distanceBetweenTwoPoints(point_a, point_b) {
        let side_x = Math.abs(point_a.x - point_b.x);
        let side_y = Math.abs(point_a.y - point_b.y);

        let distance = Math.sqrt(side_x ** 2 + side_y ** 2); //pythagoras theorem
        return distance;
    }
}
