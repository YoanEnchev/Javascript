let coordinates = [3.5, 0, 1, 0, 2, -1];

calc_3D_distance(coordinates);

function calc_3D_distance(coordinates) {
    let point_1 = { x: coordinates[0], y: coordinates[1], z: coordinates[2] };
    let point_2 = { x: coordinates[3], y: coordinates[4], z: coordinates[5] };

    let distance_2D = calculate_2D_Distance(point_1, point_2);
    let distance_z = Math.abs(point_1.z - point_2.z);

    let distance_3D = Math.sqrt(distance_2D ** 2 + distance_z ** 2); // Pythagora's theorem 
    console.log(distance_3D);
}

function calculate_2D_Distance(point_1, point_2) {
    let distance_x = Math.abs(point_1.x - point_2.x); 
    let distance_y = Math.abs(point_1.y - point_2.y);

    let distance = Math.sqrt(distance_x ** 2 + distance_y ** 2); // Pythagora's theorem 
    return distance;
}