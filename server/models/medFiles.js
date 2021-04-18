const mongoose = require('mongoose');

//This schema represents the folders & files added

const medFilesSchema = new mongoose.Schema({
    addedBy : {
        type : String,
        required : true 
    },
    folderName :{
        type : String
    },
    description : {
        type : String
    },
    addedAt : {
        type : Date,
        default : Date.now()
    },
    files : [
        {
            name :{
                type : String
            },
            fileType : {
                type : String,
                required : true
            },
            content :{
                 data : Buffer,
                 ContentType : String
            }

        }
    ]


})
module.exports = new mongoose.model('medFiles', medFilesSchema);