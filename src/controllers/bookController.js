const { model } = require("mongoose")
const BookModel = require("../models/userModel")


const createBook= async function(req, res){
    let data = req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const allBook= async function(req, res){
    let allBooks= await BookModel.find().count()
    res.send({msg: allBooks})
}

const bookList= async function(req, res){
    let allBooks= await BookModel.find().select({bookName:1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}


const getBooksInYear= async function( req, res){
    let data = req.body
    let savedData= await BookModel.find({ year : data.year })
    res.send({msg: savedData})
}


const getParticularBooks= async function(req, res){
    let data = req.body
    let savedData = await BookModel.find({year: data.year}).select( {bookName: 1, _id:0} )
    res.send({msg: savedData})
}


const getXINRBooks = async function( req, res){
    let savedDate = await BookModel.find({"prices.indianPrice": {$in: ["400INR", "500INR","800 INR"]}} ).select({bookName:1,_id:0})
    res.send({msg : savedDate})
}


const getRandomBooks= async function(req, res) {
    let savedData = await BookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: savedData })
}



module.exports.createBook= createBook
module.exports.allBook=allBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks



