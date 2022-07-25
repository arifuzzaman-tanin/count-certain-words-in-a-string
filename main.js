const bigString = "cbabcacabcafcabca"; // total abc word count

let count = 0;

function countMatchedWords(sourceBigString, wordToMatch) {
    let arrayOfBigString = sourceBigString.split('');
    let bigStringLength = arrayOfBigString.length;

    if (bigStringLength > 3) {
        if (arrayOfBigString[bigStringLength - 3] + arrayOfBigString[bigStringLength - 2] + arrayOfBigString[bigStringLength - 1]
            === wordToMatch) {
            count++;
            arrayOfBigString.pop();
            arrayOfBigString.pop();
            arrayOfBigString.pop();
        } else {
            arrayOfBigString.pop();
        }
        countMatchedWords(arrayOfBigString.join(''), wordToMatch);
    }
    return count;
}

let match = 'abc';
console.log(countMatchedWords(bigString, match));