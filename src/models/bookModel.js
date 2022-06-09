const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "libraryAuthor"
    },
    publisher_id:{
        type : ObjectId,
        ref : "librarypublisher"
    },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
