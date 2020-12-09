const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce(
    (acc, curr) => acc + curr.split('').reduce((acumulator, current) =>
      current === 'a' || current === 'A' ? acumulator + 1 : acumulator, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
