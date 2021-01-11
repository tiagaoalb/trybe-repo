const { test, expect } = require('@jest/globals');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

test('test sum of two number', () => {
  expect(sum(4, 5)).toEqual(9);
  expect(sum(0, 0)).toEqual(0);
});

test('test throws an error when the parameters are 4 and "5"', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

test('test if error message is "parameters must be numbers"', () => {
  expect(() => {
    sum(4, '5');
  }).toThrowError(new Error('parameters must be numbers'));
});
