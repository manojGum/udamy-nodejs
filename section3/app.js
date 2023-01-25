const http = require("http");
const router= require('./router')
console.log(router.someText)

const server = http.createServer(router.hendler);

server.listen(5000, (req, res) => {
  console.log("listen running in 5000");
});
/*

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
*/