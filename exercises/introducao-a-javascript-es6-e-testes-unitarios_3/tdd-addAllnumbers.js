const assert = require('assert');

const addAllNumbers = (numbers) => {
  let output = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    output += numbers[index];
  }
  return output;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllNumbers(numbers);

assert.strictEqual(typeof addAllNumbers, 'function');
assert.strictEqual(output, expected);
