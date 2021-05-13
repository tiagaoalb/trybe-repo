const WEIGHT_76KG = 76;
const HEIGHT_1M_87CM = 1.87;

const calculaImc = () => {
  const weight = WEIGHT_76KG;
  const height = HEIGHT_1M_87CM;
  
  console.log(`Weight ${weight} kg and height ${height} m`);
  
  const imc = (weight / Math.pow(height, 2)).toFixed(2);
  
  console.log(`IMC: ${imc}`);
}

calculaImc();
