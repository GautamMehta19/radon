const mongoose = require('mongoose');

const publsherSchema = new mongoose.Schema( {

    name : String,
    headQuarter: String

}, { timestamps: true });

module.exports = mongoose.model('librarypublisher', publsherSchema)
