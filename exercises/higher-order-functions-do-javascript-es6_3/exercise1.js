const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((element1, element2) => element1.concat(element2), []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
