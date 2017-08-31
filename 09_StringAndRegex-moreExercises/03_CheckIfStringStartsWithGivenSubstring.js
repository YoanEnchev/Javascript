let string = 'How have you been?';
let substring = 'how';

substringStartCheck(string, substring);

function substringStartCheck(string, substring) {
    if (substring.length > string.length) {
        console.log('false');
    }

    else {
        if (string.substring(0, string.length) == substring) {
            console.log('true');
        }

        else {
            console.log('false');
        }
    }
}