let numberOfAsterisks = 5;
let symbol = "*";
let output;

for (let i = 1; i <= numberOfAsterisks; i += 1) {
  output = " ";
  for (let j = 1; j <= numberOfAsterisks; j += 1) {
    if (j <= numberOfAsterisks - i) {
      output += " ";
    } else {
      output += symbol;
    }
  }
  console.log(output);
}
