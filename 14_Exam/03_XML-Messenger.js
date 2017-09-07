//Points: 90/100

let message = `<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`;

convertToHTML(message);

function convertToHTML(message) {
    let valid_regex = /^<message(\s*.[a-z]+=\"[A-Za-z0-9 \t.]+\"\s*)*>(.*[\s\S]*)<\/message>$/;
    let validMessage = valid_regex.test(message);

    if (validMessage) {
        let to_regex = /to=\"([A-Za-z0-9 .]+)\"/;
        let from_regex = /from=\"([A-Za-z0-9 .]+)\"/;

        let to_match = message.match(to_regex);
        let from_match = message.match(from_regex);

        if (to_match === null) {
            to_match = [];
        }

        if (from_match === null) { // so it does not execute null.length
            from_match = [];
        }

        if (to_match.length !== 2 || from_match.length !== 2) { //2 because it contains a group
            console.log('Missing attributes'); //invalid to and from attributes
        }

        else { //valid to and from attributes
            let sender = to_regex.exec(message)[1];
            let reciever = from_regex.exec(message)[1];

            let html = '<article>\n';
            html += `  <div>From: <span class="sender">${reciever}</span></div>\n`;
            html += `  <div>To: <span class="recipient">${sender}</span></div>\n`;
            html += `  <div>\n`;

            let content = valid_regex.exec(message);
            let lines = content[2].split('\n'); //gets all linesif the content

            for (line of lines) {
                html += `    <p>${line}</p>\n`;
            }

            html += `  </div>\n`;
            html += `</article>`

            console.log(html);
        }
    }

    else {
        console.log('Invalid message format');
    }
}