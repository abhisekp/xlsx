const xlsx2json = require('xlsx2json');
const path = require('path');

const pathToFile = path.resolve('./test/state-city-codes.xlsx');
console.log(pathToFile);

xlsx2json(pathToFile, {
  sheet: 0,
  dataStartingRow: 2,
  mapping: {
    state_code: 'A',
    state_name: 'B',
    city_code: 'C',
    city_name: 'D',
  },
}).then(jsonArray => {
  console.log(jsonArray);
});
