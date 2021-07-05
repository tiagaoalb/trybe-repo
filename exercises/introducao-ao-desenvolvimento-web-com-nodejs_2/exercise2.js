const checkNumbers = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (!n1 || !n2 || !n3) return reject(new Error('Informe apenas números'));
    const result = (n1 + n2) / n3;

    result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result);
  });
  return promise;
}

const genRandomNumber = () => Math.floor(Math.random() * 100);

const callDoMath = () => {
  const randomNumber = Array.from({ length: 3 }).map(genRandomNumber);

  checkNumbers(...randomNumber)
    .then(result => console.log(`O resultado do cálculo é ${result}`))
    .catch(err => console.error(err.message));
}

callDoMath();
