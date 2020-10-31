let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indexOfSmallest = 0;
let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
    indexOfSmallest = i;
  }
}

console.log(`O menor número encontrado foi ${smallestNumber}.`);
