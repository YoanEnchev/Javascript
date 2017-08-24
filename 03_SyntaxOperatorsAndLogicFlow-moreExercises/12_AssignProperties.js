let objectInfo = ['name', 'Pesho', 'age', '23', 'gender', 'male'];

printObjectInfo(objectInfo);

function printObjectInfo(objectInfo) {
    console.log('{')

    for (let i = 0; i < objectInfo.length - 1; i += 2) {
        let property = objectInfo[i];
        let value = objectInfo[i + 1];


        if (i == objectInfo.length - 2) {
            console.log('   ' + `${property}: '${value}'`);
        }

        else { //print comma if not last kvp
            console.log('   ' + `${property}: '${value}',`);
        }
    }

    console.log('}');
}
