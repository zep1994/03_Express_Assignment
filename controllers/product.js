const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  //call back procss for return to the function in the contoller for products, the function is referring to this anonynomus function 
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });  
};
