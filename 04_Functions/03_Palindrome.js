let word = "aba";

printIsItPalindrome(word);

function printIsItPalindrome(word) {
    let isItPalindrome = palindromeCheck(word);
    console.log(isItPalindrome)

    function palindromeCheck(word) {
        for (let i = 0; i < word.length / 2; i++) {

            if (word[i] != word[word.length - i - 1]) {
                return false;
            }
        }

        return true;
    }
}
