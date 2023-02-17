const isThisPalindrome = "nurses_Run";

const palindrome = (word) => {
  let remove = /[/W_]/g;
  let sampleWord = isThisPalindrome.toLowerCase().replace(remove, "");
  let reverseSampleWord = sampleWord.split("").reverse().join("");
  for (let i = 0; i < sampleWord.length; i++) {
    if (sampleWord[i] !== reverseSampleWord[i]) {
      return `The word "${isThisPalindrome}" is not palindrome`;
    }
  }
  return `The word "${isThisPalindrome}" is palindrome`;
};

console.log(palindrome(isThisPalindrome));
