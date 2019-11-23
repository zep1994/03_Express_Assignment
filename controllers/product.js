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