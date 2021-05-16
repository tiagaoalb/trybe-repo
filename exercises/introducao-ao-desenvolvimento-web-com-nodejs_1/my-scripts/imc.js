const readline = require('readline-sync');

const ask_weight = readline.questionInt('What is your weight? ');
const ask_height = readline.questionInt('What is your height? ');

const imcCalc = (weight, height) => {
  console.log(`Weight ${weight} kg and height ${height} m`);
  
  const imc = (weight / Math.pow((height / 100), 2)).toFixed(2);
  
  console.log(`IMC: ${imc}`);

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  } if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
    return;
  } if (imc >= 25 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return;
  } if (imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');
    return;
  } if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
    return;
  } 
  console.log('Obesidades graus III e IV');
}

imcCalc(ask_weight, ask_height);
