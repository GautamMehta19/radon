const { count } = require("console")
const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const mongoose = require('mongoose');



const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data=req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
}

const getBooksByChetanBhagat=async (req,res)=>{
    let data=await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData=await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

const authorOfBook=async function(req,res){
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData=await authorModel.find({author_id:data.author_id}).select("author_name")
    let price=data.price
    res.send({msg:authorData,price})
}

const getBooksbyRs=async function(req,res){
    let data=await BookModel.find( {price: { $gte:50, $lte:100}}).select({author_id:1})
    const id = data.map(x=>x.author_name)

    for(let i= 0; i<id.length; i++){
        const x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1})
        res.send({msg:data})
    }
} 
  
module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getBooksByChetanBhagat=getBooksByChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.getBooksbyRs=getBooksbyRs
