let pattern = "I love programming";
let symbol = "m";

letterOcurance(pattern, symbol);

function letterOcurance(pattern, symbol) {
    let count = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] == symbol) {
            count++;
        }
    }

    console.log(count);
}
