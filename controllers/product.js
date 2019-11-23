//temp place to store data
const products = []


//this still take the request (not using) , response object 
exports.getAddProduct = (req, res, next) => {
    res.render(
      //the view that will be rendered
      'add-product', 
      //define the object that will hold the date that will be displayed
      {
      title: "Add-product", 
      path: '/admin/add-product', 
      pageTitle: "Add Product",
      //active class is added
      formCSS: true,
      productsCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title})
    console.log(req.body.title)
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    //This does not need to extracted becaue we moved our products array into the same file
    //const products = adminData.products; //this will access the modules in the amdnin data with name of products
    res.render('shop', {
      prods: products, 
      pageTitle: 'Shop', 
      path: '/', 
      hasProducts: products.length > 0,
      activeShop: true,
      ProductCSS: true
    });
  }