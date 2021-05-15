const readline = require('readline-sync');

const ask_fibonacci = readline.questionInt('Digite o valor limite para a sequência fibonacci: ');

const fibonacci = (intNumber) => {
  return intNumber < 0 ? (() => {
    throw new TypeError('Números negativos não são permitidos!');
  })()
  : Array.from({ length: intNumber }).reduce(
    (acc, cur, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
}

const result = fibonacci(ask_fibonacci);
result.shift();

console.log(`A sequência fibonacci contendo ${ask_fibonacci} valores é ${result}`);
