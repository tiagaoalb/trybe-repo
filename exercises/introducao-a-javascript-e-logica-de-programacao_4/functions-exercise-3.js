let lowestIndexArray = [2, 4, 6, 7, 10, 0, -3];
let lowestValue = 0;

function lowestIndex() {
  for (i = 0; i < lowestIndexArray.length; i += 1) {
    if (lowestIndexArray[i] < lowestValue) {
      lowestValue = i;
    }
  }
  return lowestValue;
}

console.log(`O índide que contém o menor valor é o ${lowestIndex()}.`);
