let employeeData = ['Isacc - 1000 - CEO',
    'Peter - 500 - Employee',
    'Ivan - 500 - Employee'];

validateAndPrintData(employeeData);

function validateAndPrintData(employeeData) {

    let pattern = /^([A-Z][A-z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (employee of employeeData) {
        let validData = pattern.exec(employee);

        if (validData != null) {
            console.log(`Name: ${validData[1]}`);
            console.log(`Position: ${validData[3]}`);
            console.log(`Salary: ${validData[2]}`);
        }
    }
}
