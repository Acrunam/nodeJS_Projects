const http = require('http');
const uc = require('upper-case');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write(uc('Hello World!'));
  res.end();
}).listen(8080);
