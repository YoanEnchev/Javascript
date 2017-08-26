let desiredSize_crystalsSizes = [1000, 8100];

processToDesiredShape(desiredSize_crystalsSizes)

function processToDesiredShape(desiredSize_crystalsSizes) {

    for (let i = 1; i < desiredSize_crystalsSizes.length; i++) {
        let desiredSize = desiredSize_crystalsSizes[0];
        let crystalSize = desiredSize_crystalsSizes[i];

        console.log(`Processing chunk ${crystalSize} microns`);

        while (crystalSize > desiredSize) {
            crystalSize = smallCrystalSize(crystalSize, desiredSize); //fails if 1300, 1301 x-ray only
        }

        if (crystalSize == desiredSize - 1) {
            console.log('X-ray x1')
            crystalSize++;
        }

        console.log(`Finished crystal ${desiredSize} microns`);
    }

    function smallCrystalSize(crystalSize, desiredSize) {
        let operation = determineOperationAndIndex(crystalSize, desiredSize);
        console.log(`${operation.name} x${operation.index}`);

        crystalSize = Math.floor(operation.size); //washed and transported
        console.log('Transporting and washing');

        return crystalSize;

        /**
        * will return object: op name, smalled to size and how many times happened the operation (index)
        */
        function determineOperationAndIndex(crystalSize, desiredSize) {
            let cut = { name: 'Cut', size: crystalSize, index: 0 }; //size - size after operation happened n times
            let lap = { name: 'Lap', size: crystalSize, index: 0 }; // index - how many times operation happened
            let grind = { name: 'Grind', size: crystalSize, index: 0 }; //operation with index 0 will not be returned
            let etch = { name: 'Etch', size: crystalSize, index: 0 };

            while (cut.size / 4 >= desiredSize - 1) {
                cut.size /= 4;
                cut.index++;
            }

            if (cut.index == 0) {
                while (lap.size - lap.size * 20 / 100 >= desiredSize - 1) {
                    lap.size = lap.size - lap.size * 20 / 100;
                    lap.index++;
                }
            }

            if (lap.index == 0 && cut.index == 0) {
                while (grind.size - 20 >= desiredSize - 1) {
                    grind.size -= 20;
                    grind.index++;
                }
            }

            if (grind.index == 0 && lap.index == 0 && cut.index == 0) {
                while (etch.size - 2 >= desiredSize - 1) {
                    etch.size -= 2;
                    etch.index++;
                }
            }

            let operations = [cut, lap, grind, etch]
                .filter(op => op.index != 0);

            let performOperation = operations[0];

            if (performOperation === cut) {
                return cut;
            }

            else if (performOperation === lap) {
                return lap;
            }

            else if (performOperation === grind) {
                return grind;
            }

            else if (performOperation === etch) {
                return etch;
            }
        }
    }
}
