const fs = require('fs');
const path = require('path');

function translate(pathName) {
  const csv = fs.readFileSync(pathName);
  let array = csv.toString().replace(/\n/g, '').split("\r");
  return array;
}

module.exports = translate;