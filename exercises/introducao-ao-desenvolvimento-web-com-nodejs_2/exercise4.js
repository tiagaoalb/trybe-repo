const fs = require('fs/promises');

const readFile = async() => {
  const getJson = await fs.readFile('simpsons.json', 'utf8');
  const setJson = JSON.parse(getJson);
  const result = setJson.map(({ id, name }) => `${id} - ${name}`);
  return console.log(result);
}

readFile();
