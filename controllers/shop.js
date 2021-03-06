const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  //call back procss for return to the function in the contoller for products, the function is referring to this anonynomus function 
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    })
  }) 
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
        })
      }) 
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: 'checkout',
        pageTitle: 'Checkout'
    })
}