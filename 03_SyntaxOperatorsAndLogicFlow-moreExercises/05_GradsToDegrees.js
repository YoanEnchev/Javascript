let grads = -50;

convertGradsToDegrees(grads);

function convertGradsToDegrees(grads) {
    let degrees = grads - grads * 1 / 10; // 1/10 = 10 percents of

    if (degrees < 0 || degrees >= 360) { // convert in range: [0; 360)

        while (degrees < 0) {
            degrees += 360;
        }

        while (degrees >= 360) {
            degrees -= 360;
        }

    }
    console.log(degrees)
}
