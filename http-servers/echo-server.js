const http = require('http');

const port = 3535;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  req.pipe(res);
});

server.listen(port);
