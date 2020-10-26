let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let pos in numbers) {
  sum += numbers[pos];  
}

const mediaAritmetica = sum / numbers.length;

if (mediaAritmetica <= 20) {
  console.log("Valor menor ou igual que 20.")
} else {
  console.log("Valor maior que 20.")
}