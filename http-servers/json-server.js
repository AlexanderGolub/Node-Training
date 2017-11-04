const http = require('http');

const port = 3535;
const contentType = 'application/json';
const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [
    { color: 'blue' },
    { size: 'XL' }
  ]
 }

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': contentType});
  res.end(JSON.stringify(product));
});

server.listen(port);
