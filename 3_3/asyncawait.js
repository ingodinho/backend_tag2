const fs = require('fs').promises;

const addToDoasync = async (input) => {
	try {
		const lowerInput = input.toLowerCase();
		const json = await fs.readFile('todo1.json');
		const jsonData = JSON.parse(json);
		jsonData.todo.push(lowerInput);
		await fs.writeFile('todo1.json', JSON.stringify(jsonData));
		return;
	} catch (err) {
		console.log('Datei existiert nicht oder kann nicht beschrieben werden', err);
	}

	try {
		const lowerInput = input.toLowerCase();
		const obj = {
			todo: [lowerInput],
		};
		await fs.writeFile('todo1.json', JSON.stringify(obj));
	} catch (err) {
		console.log('error bei erstellung der datei', err);
	}
};


const showToDoasync = async () => {
	try {
		const data = await fs.readFile('todo1.json');
		console.log(data.toString());
	}
	catch(err) {
		console.log('error bei lesen der file', err);
	}
}


const removeToDoasync = async (input) => {
	try {
		const lowerInput = input.toLowerCase();
		const jsonFile = await fs.readFile('todo1.json');
		const jsonData = JSON.parse(jsonFile);

		if(jsonData.todo.includes(lowerInput)) {
			const newJSONobj = {todo: jsonData.todo.filter(el => el !== lowerInput)};
			await fs.writeFile('todo1.json',JSON.stringify(newJSONobj));
		}
		else {
			throw new Error('Kein solches toDo gefunden')
		}
	}
	catch(err) {
		console.log(err);
	}
}

module.exports = {
	addToDoasync,
	showToDoasync,
	removeToDoasync,
};
