const http = require('http');
const fs = require('fs');
const through = require('through2');

const port = 3535;
const contentType = 'text/html';
const filename = 'index.html';
const message = 'Hello World';
const template = '{message}';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': contentType});

  fs.createReadStream(filename)
    .pipe(through(write))
    .pipe(res);
});

server.listen(port);

function write(buffer, encoding, next) {
  this.push(buffer.toString().replace(template, message));
  next();
}
