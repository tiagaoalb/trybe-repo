const assert = require('assert');

const findTheNeedle = (array, word) => {
  let output = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (word === array[index]) {
      output = Number(index);
    }
  }
  return output;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
