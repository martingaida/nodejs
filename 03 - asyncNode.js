// Asynchronous function
// Make sure to run command 'node 01-nodeServer.js' first in a second terminal window

const http = require('http');

function func1() {
    return console.log('First function executed.');
};

async function asyncFunc(req, res) {

    let response = await http.get('http://localhost:3000');
    
    if (response.err) console.log('Error');
    else console.log('Async function executed!');
};

function func2() {
    return console.log('Last function executed');
};

func1();
asyncFunc();
func2();