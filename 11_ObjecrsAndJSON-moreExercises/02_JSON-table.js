let employeeData = [
    '{"name": "Pesho", "position": "Promenliva", "salary": 100000 }',
    '{"name": "Teo", "position": "Lecturer", "salary": 1000 }',
    '{"name": "Georgi", "position": "Lecturer", "salary": 1000 }'
];

convertToHTML(employeeData);

function convertToHTML(employeeData) {
    let html = '<table>\n';

    for (let i = 0; i < employeeData.length; i++) {

        html += '	<tr>\n';

        let currentEmpl = JSON.parse(employeeData[i]);
        let values = Object.values(currentEmpl);

        for (value of values) {
            value = escapeSymbols(value);
            html += `       <td>${value}</td>\n`;
        }

        html += '   <tr>\n';
    }

    html += '</table>';

    console.log(html)

    function escapeSymbols(value) {
        let forbidden = ["&", "<", ">", '"', '\''];
        let allowed = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];

        for (let i = 0; i < forbidden.length; i++) {
            value = (value + "").split(forbidden[i]) // used "" in case of number
                .join(allowed[i]);
        }

        return value;
    }
}
