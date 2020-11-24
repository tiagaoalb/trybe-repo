const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* const sortArray = array => {
  for (let index = 1; index < array.length; index += 1) {
    let key = array[index];
    let position = index - 1;
    while (position >= 0 && array[position] > key) {
      array[position + 1] = array[position];
      position = position - 1;
    }
    array[position + 1] = key;
  }
  return array;
}
console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); */

oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
