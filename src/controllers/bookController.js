const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

const create_book= async function (req, res){
    let book = req.body
    let authId = book.author_id
    console.log(authId)
    let dbId = await bookModel.findOne({_id:authId}).select({_id:1})
    dbId =dbId._id.toString()
    console.log(dbId)

    if(!authId){
        res.send({msg: "Enter Id in Body"})
    }else if(authId!=dbId){
        res.send({msg: "The Author is not present"})
    }
    let createdBook = await bookModel.create(book)
    res.send({msg: createdBook})
}


const create_publisher = async function(req, res){
    let book = req.body
    let pubId = book.publisher_id
    console.log(pubId)

    let dbId= await bookModel.findOne({_id:pubId}).select({_id:1})
    console.log(dbId)
    dbId =dbId_id.toString()


    if(!pubId){
        res.send({msg: "Enter Id in Body"})
    }else if(pubId!=dbId){
        res.send({msg: "The publisher id is not present"})
    }
    let createdBook = await bookModel.create(book)
    res.send({msg: createdBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.create_book= create_book
module.exports.create_publisher= create_publisher
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
