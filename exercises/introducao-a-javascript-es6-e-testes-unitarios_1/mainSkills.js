const array = ['Javascript', 'HTML', 'CSS', 'Git', 'Linux'];

function buildSkillsPhrase(paramOne) {
  const fun1 = (paramInner) =>
    `Tryber ${paramInner} aqui!

    Tudo bem?`;

  let result = `${fun1(paramOne)}

  Minhas cinco principais habilidades são:`;

  array.forEach((skill) => (result = 
    `${result} 
    
    - ${skill}`));

  result = `${result}#goTrybe`;

  return result;
}

console.log(buildSkillsPhrase('Tiago'));
