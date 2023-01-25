const path = require("path");
const http = require('http')

const express = require("express");
const bodyParser = require("body-parser");
const errorController = require('./controllers/error')
const app = express();
const hostname = '127.0.0.1'
const port = 5000
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})