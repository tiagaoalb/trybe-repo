const checkNumbers = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(n1) || isNaN(n2) || isNaN(n2)) return reject(new Error('Informe apenas números'));
    if (n3 === 0) return reject(new Error('Não existe divisão por zero!'));
    const result = (n1 + n2) / n3;

    result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result);
  });
  return promise;
}

const genRandomNumber = () => Math.floor(Math.random() * 100);

const callDoMath = async() => {
  const randomNumber = Array.from({ length: 3 }).map(genRandomNumber);
  console.log(randomNumber);
  try {
      const result = await checkNumbers(...randomNumber);
      console.log(`O resultado do cálculo é ${result}`);
    } catch (error) {
      console.error(error.message);
    }
}

callDoMath();
