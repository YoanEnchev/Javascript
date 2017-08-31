let string = 'This sentence ends with fun?';
let substring = 'fun?';

substringEndCheck(string, substring);

function substringEndCheck(string, substring) {
    if (string.length < substring.length) {
        console.log('false');
    }

    else {
        let startingIndex = string.length - substring.length;

        if (string.substring(startingIndex, string.length) == substring) {
            console.log('true');
        }

        else {
            console.log('false');
        }
    }
}
