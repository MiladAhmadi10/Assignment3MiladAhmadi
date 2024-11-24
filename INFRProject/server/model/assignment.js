//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    Due: String,
    Description: String,
},
{
    collection:"Bio_assignments"
});
module.exports =mongoose.model('Assignment', assignmentModel);
