const path = require('path');

const express = require('express');
const adminData=require('./admin')

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
 const products=adminData.products
 // pug files render
  res.render('shop',{prods:products, docTitle:'shop'})
  // html file render
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
