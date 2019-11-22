const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


//obv this will be moved to the database
const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    title: "Add-product", 
    path: '/admin/add-product', 
    pageTitle: "Add Product",
    //active class is added
    formCSS: true,
    productsCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title})
  console.log(req.body.title)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;