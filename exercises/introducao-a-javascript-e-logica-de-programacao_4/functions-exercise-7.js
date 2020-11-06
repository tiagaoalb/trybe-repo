function finalString(word, ending) {
  if (
    word[word.length - 1] === ending[ending.length - 1] &&
    word[word.length - 2] === ending[ending.length - 2]
  ) {
    return true;
  }
  return false;
}

console.log(finalString("Trybe", "be"));
