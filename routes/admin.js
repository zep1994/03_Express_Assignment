const path = require('path');

const express = require('express');

const router = express.Router();

const getProduct = require('../controllers/product')
const postProduct = require('../controllers/product')
//obv this will be moved to the controller const productd = []

// /admin/add-product => GET
router.get('/add-product', getProduct.getAddProduct);//store the function, until it is time to execute it

// /admin/add-product => POST
router.post('/add-product', postProduct.postAddProduct);

module.exports = router 
//We no longer need after moving to the controller
// exports.routes = router;
// exports.products = products;