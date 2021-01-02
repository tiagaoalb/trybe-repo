const { test, expect } = require('@jest/globals');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

test('test if a number is divisible by 3 and 5', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('test if a number is divisible only by 3', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

test('test if a number is divisible only by 5', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('test if a number is not divisible by 3 or 5', () => {
  expect(myFizzBuzz(4)).not.toBe('fizzbuzz');
});

test('test if the parameter is not a number', () => {
  expect(myFizzBuzz("15")).toBe(false);
});
