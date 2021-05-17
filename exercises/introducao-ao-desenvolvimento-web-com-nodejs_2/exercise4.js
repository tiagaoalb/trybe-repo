const fs = require('fs/promises');

const readFile = async() => {
  const getJson = await fs.readFile('simpsons.json', 'utf8')
    .then((data) => {
      return JSON.parse(data);
    })
    .then((simpsons) => {
      return simpsons.map(({ id, name }) => `${id} - ${name}`);
    })
    .then((strings) => {
      strings.forEach((string) => console.log(string));
    });
  return getJson;
}

readFile();
