const AuthorModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getPublishersData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData