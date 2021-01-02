const { test, expect } = require('@jest/globals');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

test('test if return the array [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('test if it does not return the array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('test if return array without changes', () => {
  expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('test if return the expected array', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
