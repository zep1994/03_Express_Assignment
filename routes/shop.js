const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products
  //render method: 2 args, 1: what to render, 2: data to render on 1
  res.render('shop', {prods: products, docTitle: "Shop"}) //now prods is available in the view shop, we could pass in more than one value
});

module.exports = router;
