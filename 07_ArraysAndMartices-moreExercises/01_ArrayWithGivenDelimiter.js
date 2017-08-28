let wordsAndDelimeter = ['one', 'Two', 'three', '-'];

printWithDelimeter(wordsAndDelimeter);

function printWithDelimeter(wordsAndDelimeter) {
    let delimeter = wordsAndDelimeter[wordsAndDelimeter.length - 1]; //last element
    let words = wordsAndDelimeter.slice(0, wordsAndDelimeter.length - 1); // without last element

    let result = words.join(delimeter);
    console.log(result);
}
