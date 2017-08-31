let sentences = ['The300',
'What is that?',
'I think it’s the 3rd movie.',
'Lets watch it at 22:45'];

findAndPrintNumbers(sentences);

function findAndPrintNumbers(sentences) {
    let regex = /\d+/g;
    let numbers = [];

    for (sentence of sentences) {
        let matches = sentence.match(regex);

        if (matches !== null) {
            let foundNumbers = matches.join(' ');
            numbers.push(foundNumbers);
        }
    }

    console.log(numbers.join(' '));
}
