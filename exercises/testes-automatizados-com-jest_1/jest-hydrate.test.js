const hydrate = (string) => {
  const onlyNumbersArray = string.match(/\d+/g).map(Number);
  const sumArray = onlyNumbersArray.reduce(
    (drinks1, drinks2) => drinks1 + drinks2
  );
  let result = '';
  if (sumArray === 1) {
    result = `${sumArray} copo de água`;
  } else {
    result = `${sumArray} copos de água`;
  }
  return result;
};

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água'
    );
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água'
    );
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água'
    );
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
