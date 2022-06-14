const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let order = req.body
    let createOrder= await orderModel.create(order)
    res.send({msg: createOrder})


}

module.exports.createOrder= createOrder
