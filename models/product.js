/* One way to handle a model is to export a constructor function
Old Gen

module.exports = function Product() {

}

new Gen: 
Create a class

*/

const products = []

module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    
    save() {
        products.push(this)
    }

    //static makes sure you can call the class itself and not an instantiated object
    static fetchAll() {
        return this.products
    }

}