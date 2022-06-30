const fs = require('fs');

fs.openSync('blog1.txt');
fs.writeFileSync('blog1.txt','neuer Inhalt');
fs.writeFileSync('blog2.txt', 'hallo hier ein Inhalt in blog2');

// fs.mkdirSync('assets');

fs.readdir('assets', (err,data) => {
  if(err) {
    console.log('ordner existiert nicht');
    return;
  }
  fs.rmdir('assets', () => {
    console.log('assets removed')
  });
})

fs.writeFile('delete.txt','', () => {
  console.log('delete erstellt')
});

fs.access('delete.txt',(err,data) => {
  if(err) {
    console.log('delete.txt existiert nicht');
    return;
  }
  fs.unlink('delete.txt', ()=> {
    console.log('delete wird geloescht');
  })
})

fs.writeFile('Hello.txt','Hallo dies ist ein Text', ()=> {
  console.log('hello.txt erstellt');
  fs.rename('Hello.txt','HelloWorld.txt', ()=> {
    'hello.txt umbenannt'
  })
})