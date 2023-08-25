const mongoose=require('mongoose');
const path=require('path');
const multer=require('multer');
const File_storage= path.join('/uploads/files')

const fileSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    path:{
        type:String,
    }

},{
    timestamps: true,
})

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',File_storage));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

fileSchema.statics.uploadFile = multer({storage:storage}).single('file');
fileSchema.statics.filePath=File_storage;

const File = mongoose.model('File',fileSchema);
module.exports = File;