const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { addToDo, showToDo, removeToDo } = require('./toDoFunctions');
const { addToDoasync, showToDoasync, removeToDoasync } = require('./asyncawait');

const input = yargs(hideBin(process.argv)).argv;


// if (input.addtodo) addToDo(input.addtodo);
// if (input.showtodo) showToDo();
// if (input.removetodo) removeToDo(input.removetodo);


if (input.addtodo) addToDoasync(input.addtodo);
if (input.showtodo) showToDoasync();
if (input.removetodo) removeToDoasync(input.removetodo);