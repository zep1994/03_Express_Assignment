//save to a file
//Model talks to database
const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    )

const getProuctsFromFile  = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
            cb(JSON.parse(fileContent)) //call JSON parse to return as an array, this is async so it runs with undefined, must fix
        })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProuctsFromFile(products => {
            products.push(this) //this refers to class because we used arrow function
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err)
                })
            })
        }

    static fetchAll(cb) { //passing it a callback allows you pass a function, which will execute once fetchAll is done. this function will hold the data and will be aware of it when called
        getProuctsFromFile(cb)
        }
}
