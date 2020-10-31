let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let pos in numbers) {
  sum += numbers[pos];
}

console.log(`A soma dos valores do array é de ${sum}.`);
