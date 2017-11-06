const http = require('http');

const port = 3535;
const contentType = 'text/plain';
const message = 'Hello World';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': contentType});
  res.end(message);
});

server.listen(port);
