const { test, expect } = require('@jest/globals');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

test('test if returns the array [1, 2, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('test if returns the array is not equal to [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('test if returns the array is not equal to [1, 2, 3, 4]', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
