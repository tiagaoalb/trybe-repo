let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplied = [];

for (let i = 0; i < numbers.length; i += 1) {    
  arrayMultiplied.push(numbers[i] * (numbers[i + 1] ? numbers[i + 1] : 2));
}

console.log(arrayMultiplied);
