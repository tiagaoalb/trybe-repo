let namesArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let longestString = "";

function longestName() {
  for (i = 0; i < namesArray.length; i += 1) {
    if (namesArray[i].length > longestString.length) {
      longestString = namesArray[i];
    }
  }
  return longestString;
}

console.log(`O nome que contém o maior número de caracteres é ${longestName()}.`);
