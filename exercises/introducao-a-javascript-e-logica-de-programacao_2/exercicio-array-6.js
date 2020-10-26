let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

for (let i in numbers) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

if (oddNumbers == "") {
  console.log("Nenhum valor ímpar encontrado!")
} else {
  console.log(`Foram encontrados ${oddNumbers.length} números ímpares.`);
}
