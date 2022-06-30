const fs = require('fs');

const addToDo = (input) => {
  const lowerInput = input.toLowerCase();
	fs.readFile('todo.json', (err, data) => {
		if (err) {
			console.log(err);
			const obj = {
				todo: [lowerInput],
			};
			fs.writeFile('todo.json', JSON.stringify(obj), (err) => {
				console.log(err);
			});
			return;
		}
		const jsonData = JSON.parse(data);
		jsonData.todo.push(lowerInput);
		fs.writeFile('todo.json', JSON.stringify(jsonData), (err) => {
			if (err) {
        console.log(err);
			}
		});
	});
};

const showToDo = () => {
	fs.readFile('todo.json', (err, data) => {
		if (err) console.log(err);
		console.log(data.toString());
	});
};

const removeToDo = (input) => {
  const lowerInput = input.toLowerCase();
	fs.readFile('todo.json', (err,data) => {
		if (err) {
			console.log('there is no todo to delete');
			return;
		}
    const jsonData = JSON.parse(data);
    if(jsonData.todo.includes(lowerInput)) {
      const newJSONobj = {todo: jsonData.todo.filter(el => el !== lowerInput)};
      fs.writeFile('todo.json', JSON.stringify(newJSONobj), (err) => {
        if(err) {
          console.log('couldnt write json after delete');
        }
      })
      return;
    }
    console.log('sorry, we havent found this to do')
	});
};

module.exports = {
	addToDo,
	showToDo,
	removeToDo,
};
