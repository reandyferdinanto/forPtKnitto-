const theWord = "kitabisa";

const checkPalindrome = (word: string): string => {
  let remove = /[/W_]/g;
  let sampleWord = theWord.toLowerCase().replace(remove, "");
  let reverseSampleWord = sampleWord.split("").reverse().join("");
  for (let i = 0; i < sampleWord.length; i++) {
    if (sampleWord[i] !== reverseSampleWord[i]) {
      return `The word "${theWord}" is not palindrome`;
    }
  }
  return `The word "${theWord}" is palindrome`;
};

console.log(checkPalindrome(theWord));
