const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC ', script: './imc.js' },
  { name: 'Calcular velocidade média ', script: './velocidade.js' },
  { name: 'Jogo de adivinhação ', script: './sorteio.js' },
];

const msg = scripts
  .map((script, index) => `${index + 1} - ${script.name}`)

msg.unshift('Escolha um número para executar o script correspondente');
msg.push('Digite a opção: ');
const result = msg.join('\n')
const scriptNumber = readline.questionInt(result) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);
