const readline = require('readline-sync');

const ask_fatorial = readline.questionInt('Deseja saber o fatorial de qual número? ');

const fatorial = (intNumber) => {
  return intNumber < 0 ? (() => {
    throw new TypeError('Números negativos não são permitidos!');
  })()
  : intNumber <=1 ? 1 : intNumber * fatorial(intNumber - 1);
}

const result = fatorial(ask_fatorial);

console.log(`O fatorial de ${ask_fatorial} é ${result}!`);