const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin')
//obv this will be moved to the controller const productd = []

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);//store the function, until it is time to execute it

// /admin/products => GET
router.get('/products', adminController.getProducs)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router 
//We no longer need after moving to the controller
// exports.routes = router;
// exports.products = products;