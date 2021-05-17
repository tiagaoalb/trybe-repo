const fs = require('fs/promises');

// const readFile = async() => {
//   const getJson = await fs.readFile('./simpsons.json', 'utf8')
//     .then((data) => JSON.parse(data))
//     .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}`))
//     .then((strings) => {
//       strings.forEach((string) => console.log(string));
//     });
//   return getJson;
// }

// readFile();

// const getSimpsonById = async(id) => {
//   const getJson = await fs.readFile('./simpsons.json', 'utf8')
//     .then((data) => JSON.parse(data));

//   const findSimpson = getJson.find((simpson) => simpson.id === id);
//   if (!findSimpson) throw new Error('Id não encontrado!');
//   return console.log(findSimpson);
// }

// getSimpsonById('5');

// const removeTenthAndSixth = async() => {
//   const getJson = await fs.readFile('./simpsons.json', 'utf8')
//     .then((data) => JSON.parse(data));

//     const filterSimpson = getJson
//       .filter((simpson) => simpson.id !== '10' && simpson.id !== '6')
//       .map(({ id, name }) => `${id} - ${name}`)
//       .forEach((string) => console.log(string));
//   return filterSimpson;
// }

// removeTenthAndSixth();
