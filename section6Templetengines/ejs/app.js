const path = require("path");
const http = require('http')

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const hostname = '127.0.0.1'
const port = 5000
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle:"Page not found!", path:"/"});
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})