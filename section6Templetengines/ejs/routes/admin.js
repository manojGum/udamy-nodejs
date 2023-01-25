const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const products=[];

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle:"Add Product", path:'/admin/add-product',
formsCSS:true,
productCSS:true,
activeAddProduct:true});
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push(req.body);
  res.redirect('/');
});

exports.router = router;
exports.products= products;
