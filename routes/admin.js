const path = require('path');

const express = require('express');

const router = express.Router();

const getProduct = require('../controllers/product')
//obv this will be moved to the database
const products = []

// /admin/add-product => GET
router.get('/add-product', getProduct.getAddProduct);//store the function, until it is time to execute it

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title})
  console.log(req.body.title)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;