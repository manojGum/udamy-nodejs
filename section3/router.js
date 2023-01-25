const fs = require("fs");
const requestHendler = (req,res)=>{
    const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write(`<html>`);
    res.write(`<head><title>Enter message </title></head>`);
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"></form></body>`
    );
    res.write(`</html>`);
    return res.end();
  }
  if (url ==="/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html><head><title>My First page</title></head><body>Hello from my Node.js server</body></html>`)
  res.end()

};
// module.exports={
//     hendler:requestHendler,
//     someText:"some text for testing "
// }
module.exports.hendler=requestHendler
exports.someText="hello world"