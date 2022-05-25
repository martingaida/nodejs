// A simple Node.js server

const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, host, () => {
    console.log(`Server is listening on port ${port}...`)
})