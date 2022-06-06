const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: {
        type: String,
        unique: true,
        required: true
    },
    category: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        unique: true,
        required: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users



// String, Number
// Boolean, Object/json, array