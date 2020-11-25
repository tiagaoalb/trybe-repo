/* const factorial = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
};
console.log(factorial(5)); */

const factorial = (n) => {
  return n >= 1 ? n * factorial(n - 1) : 1;
};
console.log(factorial(5));
