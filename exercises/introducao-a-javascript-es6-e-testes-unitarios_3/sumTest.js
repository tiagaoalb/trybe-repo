const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum('5', 4);
const expectedZero = sum(0, 0);

assert.strictEqual(expected, 9, 'A soma de 5 + 4 deve ser igual a 9.');
assert.strictEqual(expectedZero, 0, 'A soma de 0 + 0 deve ser igual a 0.');
