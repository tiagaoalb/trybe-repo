const readline = require('readline-sync');

const ask_distace = readline.questionInt('Qual a distância percorrida (m)? ');
const ask_time = readline.questionInt('Quanto tempo levou para percorrer a distância (s)? ');

const speedCalc = (distance, time) => {
  const avg_speed = (distance / time).toFixed(2);
  console.log(`A velocidade média foi de ${avg_speed} m/s`);
}

speedCalc(ask_distace, ask_time);
