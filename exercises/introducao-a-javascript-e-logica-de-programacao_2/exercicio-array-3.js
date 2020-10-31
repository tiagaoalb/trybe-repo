let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let pos in numbers) {
  sum += numbers[pos];
}

const mediaAritmetica = sum / numbers.length;

console.log(`A média aritmética do array é de ${mediaAritmetica}.`);
