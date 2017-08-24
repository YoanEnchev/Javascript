function printMultiplicationTable(n) {
    let table_string = '<table border="1">\n';

    for (let col = 0; col <= n; col++) { //first row of table
        if (col == 0) { //x
            table_string += "  <tr>";
            table_string += "<th>x</th>";
        }

        else {
            table_string += `<th>${col}</th>`;
        }
    }

    table_string += "</tr>\n"

    for (let row = 1; row <= n; row++) {

        for (let col = 0; col <= n; col++) { // every row except the first one
            if (col == 0) {
                table_string += `  <tr><th>${row}</th>`;
            }

            else {
                table_string += `<td>${row * col}</td>`;
            }
        }

        table_string += '</tr>\n';
    }

    table_string += "</table>";
    return table_string;
}