/* const longestWord = (string) => {
  const phrase = string.split(' ');
  let longestString = '';
  let longest = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index].length > longest) {
      longest = phrase[index].length;
      longestString = phrase[index];
    }
  }
  return longestString;
};

const result = longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');

console.log(`A maior palavra da frase é ${result}!`);
 */

const findLongestWord = (string) => {
  let longestWord = string.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longestWord;
}
const result = findLongestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')
console.log(`A palavra mais longa na frase é: ${result}.`);
