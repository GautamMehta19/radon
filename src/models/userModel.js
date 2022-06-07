const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        require: Boolean
    },
    authorName: String,
    price: {
        indianPrice: String,
        europianPrice: String
    },
    year: {
        type: Number,
        default: 2021,
    },
    tags: ["array"],
    totalPages: Number,
    stockAvailable: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //users



// String, Number
// Boolean, Object/json, array