function isPalindrome (word) {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("arara"));
