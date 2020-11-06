let repeatedIntegerArray = [2, 3, 2, 5, 8, 2, 3];
let mostRepeatedInteger = [];

function mostRepeated() {
  for (i = 0; i < repeatedIntegerArray.length; i += 1) {
    for (j = 0; j < repeatedIntegerArray.length; j += 1) {
      if (repeatedIntegerArray[j] !== repeatedIntegerArray[i]) {
        i += 1;
      } else {
        mostRepeatedInteger = repeatedIntegerArray[i];
      }
    }
  }
  return mostRepeatedInteger;
}

console.log(`O número inteiro que mais se repete é o ${mostRepeated()}.`);
