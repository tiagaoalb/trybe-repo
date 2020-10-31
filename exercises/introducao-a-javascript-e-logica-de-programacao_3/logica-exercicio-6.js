let numberToCheck = 11;
let divisor;

for (number = 2; number < numberToCheck && divisor !== 1; number += 1) {
  divisor = 0;
  if (numberToCheck % 2 === 0) {
    divisor += 1;
  }
}

if (divisor === 0) {
  console.log(`${numberToCheck} é primo!`);
} else {
  console.log(`${numberToCheck} não é primo!`);
}
