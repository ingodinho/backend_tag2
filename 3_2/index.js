const fs = require('fs');

fs.readdir('MyFunnyFolder', (err,data) => {
  if(err) {
    fs.mkdir('MyFunnyFolder', ()=> {
      console.log('funny folder erstellt');
    })
    return;
  }
  fs.rmdir('MyFunnyFolder', (err) => {
    console.log('funny folder deleted')
  })
})

fs.access('./what/isThis.txt', (err)=> {
  if(err) {
    fs.mkdir('./what', ()=> {
      fs.writeFile('./what/isThis.txt','', ()=> {
        console.log('datei isthis.txt erstellt')
    })
    })
  }
})