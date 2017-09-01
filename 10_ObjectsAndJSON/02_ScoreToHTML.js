let json = '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]';

convertToHTML(json);

function convertToHTML(json) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";

    let teams = JSON.parse(json);

    for (team of teams) {
        let name = team.name;
        let score = team.score;

        name = escapeSymbols(name);
        html += `  <tr><td>${name}</td><td>${score}</td></tr>\n`;
    }

    html += '</table>';
    console.log(html);

    function escapeSymbols(name) {
        let forbidden = ["&", "<", ">", '"', '\''];
        let allowed = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];

        for (let i = 0; i < forbidden.length; i++) {
            name = (name + "").split(forbidden[i]) // used + "" in case of number
                .join(allowed[i]);
        }

        return name;
    }
}
