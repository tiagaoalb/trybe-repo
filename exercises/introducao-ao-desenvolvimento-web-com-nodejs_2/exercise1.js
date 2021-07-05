const checkNumbers = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (!n1 || !n2 || !n3) reject('Informe apenas números');
    
    const result = (n1 + n2) / n3;

    result < 50 ? reject('Valor muito baixo') : resolve(result);

    console.log(result);
  });
  return promise;
}

checkNumbers(20, 30, 2);
