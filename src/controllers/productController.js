const ProductModel = require("../models/productModel.js")

const createProduct= async function (req, res) {
    let product= req.body
    let productCreate = await ProductModel.create(product)
    res.send({msg: productCreate})
}


module.exports.createProduct = createProduct

