const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


const mid1= function ( req, res, next) {
    const header= req.headers.isfreeappuser
    if(!header){
        res.send({msg: "request is missing a mandatory header"})
    }else{
        next()
    }
}



const mid2= async function ( req, res, next) {
    const header=req.headers.isfreeappuser
    if(!header){
        res.send({msg: "request is missing a mandatory header"})
    }else{
        next()
    }
    
}

const mid3= async function ( req, res, next) {
    let data= req.body
    let isUser= await userModel.findOne({_id:data.userId})
    let isProduct=await productModel.findOne({_id:data.productId})

    if(isUser && isProduct){
        next()
    }
    else{
        res.send({msg: "please provide correct userid and productid"})
    }
}

const mid4= async function ( req, res, next) {
    let header= req.headers.isfreeappuser

    if (header==false){
        let balanced= await userModel.select({balance:1})
        res.send({msg: "balanced sufficient"})
    }
    else{
        
        res.send({msg: "balanced insufficient"})
    }
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
