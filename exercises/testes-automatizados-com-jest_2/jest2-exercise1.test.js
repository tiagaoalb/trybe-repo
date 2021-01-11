const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('tiago', (str) => {
    expect(str).toBe('TIAGO');
    done();
  });
});
