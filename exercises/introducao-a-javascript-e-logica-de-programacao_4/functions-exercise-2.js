let highestIndexArray = [2, 3, 6, 7, 10, 1];
let highestValue = 0;

function highestIndex() {
  for (i = 0; i < highestIndexArray.length; i += 1) {
    if (highestIndexArray[i] > highestValue) {
      highestValue = i;
    }
  }
  return highestValue;
}

console.log(`O índide que contém o maior valor é o ${highestIndex()}.`);
