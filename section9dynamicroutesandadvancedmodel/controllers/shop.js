const Product = require("../models/product");
const os = require("node:os");

exports.getProducts = (req, res, next) => {
 Product.fetchAll((products) => {
    // console.log(os.version());
    // console.log(products);
    // pug files render
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};
exports.getProduct= (req,res,next)=>{
  const prodId=req.params.productId;
 Product.findById(prodId, product=>{
  console.log(product)
  res.render('shop/product-detail',{
    product:product,
    pageTitle:product.title,
    path:'/product'
  })
 })
}
exports.getIndex = (req,res,next)=>{
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "shop",
      path: "/",
    });
  });
}

exports.getCart = (req , res, next)=>{
  res.render('shop/cart',{
    path:'/cart',
    pageTitle:'Your Cart'
  });
}
exports.getOrders = (req , res, next)=>{
  res.render('shop/orders',{
    path:'/orders',
    pageTitle:'Your Orders'
  });
}
exports.getCheckout = (req , res, next)=>{
  res.render('shop/checkout',{
    path:'/checkout',
    pageTitle:'Checkout'
  });
}
