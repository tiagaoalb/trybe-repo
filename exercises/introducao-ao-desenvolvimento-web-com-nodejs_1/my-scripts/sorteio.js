const readline = require('readline-sync');

const result = (intNumber, random_number) => {
  if (intNumber !== random_number) {
    return console.log(`Opa, não foi dessa vez. O número sorteado foi ${random_number}`)
  } 
  return console.log('Parabéns, número correto!')
}

const prizeDraw = () => {
  const random_number = Math.floor(Math.random() * 11);
  const ask_number = readline.questionInt('Tente adivinhar um número de 0 a 10: ');
  result(ask_number, random_number);
  
  const try_again = readline.question('Deseja jogar novamente? (s/n) ');

  if (try_again === 'n') return console.log('Muito obrigado!');

  prizeDraw();
}

prizeDraw();
