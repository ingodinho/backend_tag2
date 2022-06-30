const fs = require('fs');
const data = require('./data.json');

const contentArray = data.map(el => {
  return `${el.id} - ${el.title}\n${el.description}\n`
})

fs.writeFile('json.txt', contentArray.join('\n'), ()=> {
  console.log('file written')
})