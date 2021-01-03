const { TestScheduler } = require('jest');

const encode = (string) => {
  const stringSwap = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let encondeResult = '';
  encondeResult = string.replace(/[aeiou]/gi, (m) => stringSwap[m]);
  return encondeResult;
};

const decode = (string) => {
  const stringSwap = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let encondeResult = '';
  encondeResult = string.replace(/[12345]/gi, (m) => stringSwap[m]);
  return encondeResult;
};

describe('Test functios encode and decode', () => {
  it('test if encode and decode are functions', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('test if vowel a are converted to number 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('test if vowel e are converted to number 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('test if vowel i are converted to number 3', () => {
    expect(encode('fifi')).toEqual('f3f3');
  });
  it('test if vowel o are converted to number 4', () => {
    expect(encode('fofo')).toEqual('f4f4');
  });
  it('test if vowel u are converted to number 5', () => {
    expect(encode('xuxu')).toEqual('x5x5');
  });
  it('test if number 1 are converted to vowel a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('test if number 2 are converted to vowel e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('test if number 3 are converted to vowel i', () => {
    expect(decode('f3f3')).toEqual('fifi');
  });
  it('test if number 4 are converted to vowel o', () => {
    expect(decode('f4f4')).toEqual('fofo');
  });
  it('test if number 5 are converted to vowel u', () => {
    expect(decode('x5x5')).toEqual('xuxu');
  });
  it('test if returned string has the same length as the string used in parameter', () => {
    expect(encode('Trybe').length).toEqual(5);
    expect(decode('Trybe').length).toEqual(5);
  });
});
