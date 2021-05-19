const fs = require('fs');

const writeContent = (fileName, fileContent) => {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return 'ok';
}

module.exports = writeContent;
