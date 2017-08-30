let sequence = 'Hello, World!';

printSymbols(sequence);

function printSymbols(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        console.log(`str[${i}] -> ${sequence[i]}`);
    }
}
