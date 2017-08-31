let text = 'One-Two-Three-Four-Five';
let delimiter = '-';

splitString(text, delimiter);

function splitString(text, delimiter) {
    let split = text.split(delimiter);
    console.log(split.join('\n'));
}
