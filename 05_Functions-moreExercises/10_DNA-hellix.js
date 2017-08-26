let dna_length = 10;

printDNA(dna_length)

function printDNA(dna_length) {
    let dna_string = 'ATCGTTAGGG';
    let dna_letters = dna_string.split('');
    var i = 0; //index for letters

    for (let row = 0; row < dna_length; row++) {
        printFirstRow(dna_letters, i); // 4 lines in cycle of dna - first, second, third, second
        row++;                         // second and forth have same structute (*, -) and diffrent letters

        if (row == dna_length) { // if enough lines are printed then stop
            break;
        }

        printSecondRow(dna_letters, i); 
        row++; 

        if (row == dna_length) {
            break;
        }

        printThirdRow(dna_letters, i);
        row++;

        if (row == dna_length) {
            break;
        }

        printSecondRow(dna_letters, i); 
    }

    function printFirstRow(dna_letters) {
        console.log(`**${dna_letters[i]}${dna_letters[i + 1]}**`);
        i += 2;
        i = ifNeededGoBackToZero(i);
    }

    function printSecondRow(dna_letters) {
        console.log(`*${dna_letters[i]}--${dna_letters[i + 1]}*`);
        i += 2;
        i = ifNeededGoBackToZero(i);
    }

    function printThirdRow(dna_letters) {
        console.log(`${dna_letters[i]}----${dna_letters[i + 1]}`);
        i += 2;
        i = ifNeededGoBackToZero(i);
    }

    function ifNeededGoBackToZero(i) {
        if (i == 10) {
            i = 0;
        }

        return i;
    }
}
