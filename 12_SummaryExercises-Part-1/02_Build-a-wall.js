let wallSections = ["21", "25", "28"];

printCosts(wallSections);

function printCosts(wallSections) {
    wallSections = wallSections.map(Number);

    let cubicYards_perDays = [];
    let wallIsCompleted = checkIsWallBuilded(wallSections);
    let count = 0;

    while (!wallIsCompleted) {
        let usedCubicYards = 0;

        for (let i = 0; i < wallSections.length; i++) { //for one day
            if (wallSections[i] < 30) {
                wallSections[i]++;
                usedCubicYards += 195;
            }
        }

        cubicYards_perDays.push(usedCubicYards);
        wallIsCompleted = checkIsWallBuilded(wallSections);
    }

    let cubicYards = cubicYards_perDays.reduce((a, b) => (a + b));
    let totalCost = cubicYards * 1900;

    console.log(cubicYards_perDays.join(', '));
    console.log(`${totalCost} pesos`);


    function checkIsWallBuilded(wallSections) {
        let footSum = wallSections.reduce((a, b) => (a + b));

        if (footSum == 30 * wallSections.length) {
            return true;
        }

        return false;
    }
}

