// include node's http library
let http = require('http');

let port = 3000;

// start a local web server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>Hello World!!!</h1>');
    res.end();
}).listen(port);

// show in console that server is active
console.log(`Http server running on port ${port}`);