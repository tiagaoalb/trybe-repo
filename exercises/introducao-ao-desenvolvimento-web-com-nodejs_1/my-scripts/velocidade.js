const readline = require('readline-sync');

const ask_distace = readline.questionInt('Qual a distância? ');
const ask_time = readline.questionInt('Quanto tempo levou para percorrer a distância? ');

const speedCalc = (distance, time) => {
  const avg_speed = (distance / time).toFixed(2);
  console.log(`A velocidade média foi de ${avg_speed}`);
}

speedCalc(ask_distace, ask_time);
