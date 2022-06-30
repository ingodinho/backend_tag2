const fs = require('fs');


// fs.mkdir('ordner', ()=> {
//   console.log('ordner ist angelegt')
// })

// fs.mkdirSync('ordner');

const folder = (par) => {
  fs.readFile('./ordner/file.txt', (err,data) => {
    if(err) {
      console.log(err);
      console.log('ordner existiert nicht!')
      fs.writeFileSync('./ordner/file.txt', par)
    }
    else {
      fs.appendFileSync('./ordner/file.txt',`\n${par}`);   
    }
  })
}

folder('Test1');
