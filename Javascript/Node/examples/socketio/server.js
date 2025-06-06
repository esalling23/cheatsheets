const http = require('http');
const io = require('socket.io');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
});

const socket = io(server);

socket.on('connection', (client) => {
  console.log('Client connected');
});

server.listen(3000, () => {
  console.log('Server running on <http://localhost:3000/>');
});
