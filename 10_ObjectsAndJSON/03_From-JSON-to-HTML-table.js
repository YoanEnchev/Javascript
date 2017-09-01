function fromJSONToHTMLTable(input) {
    let html = '<table>\n';

    let object = JSON.parse(input);
    let properties = Object.keys(object[0]);

    html += `   <tr>`;

    for (prop of properties) {
        prop = escapeSymbols(prop);
        html += `<th>${prop}</th>`;
    }

    html += `</tr>\n`;

    for (let i = 0; i < object.length; i++) {
        html += "  <tr>"

        for (prop of properties) {
            let value = escapeSymbols(object[i][prop]);
            html += `<td>${value}</td>`;
        }

        html += '</tr>\n';
    }

    html += "</table>";
    return html;

    function escapeSymbols(string) {
        let forbidden = ["&", "<", ">", '"', '\''];
        let allowed = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];

        for (let i = 0; i < forbidden.length; i++) {
            string = (string + "").split(forbidden[i]) //in case of number
                .join(allowed[i]);
        }

        return string;
    }
}
