const File = require('../models/file');



// rendering the current page with existing files
module.exports.home= async function(req,res){
    let files= await File.find({});
    return res.render('home',{
        title:'CsvUploader',
        files:files,
    })
}


// to upload a .csv file
module.exports.upload = async function(req,res){
    try {
        // console.log(req.file);
        File.uploadFile(req,res,function(err){
            if(err){console.log("******Multer Error********",err)};
            // backend check if the type of file is csv or not 
            console.log(req.file.mimetype);
            if (req.file.mimetype !== 'text/csv') {
                console.log('Please upload a valid CSV file.');
                return res.redirect('back');
            }
            if(req.file){
                const name = req.file.originalname.split('.').slice(0, -1).join('.');
                const filepath= req.file.path;
                // console.log(path);
                File.create({
                    name:name,
                    path:filepath,
                })
            return res.redirect('back');
        }
    })
    } catch (error) {
        console.log(error);
        return;
    }
}


// delete a file from the database
module.exports.remove= async function(req,res){
    try {
        let file= await File.findOne({name:req.params.name});
        if(file){
            file.deleteOne();
            console.log('file removed');
            return res.redirect('back');
        }else{
            console.log('File not found');
            return res.redirect('back');
        }
        
    } catch (error) {
        console.log(error);
        return;
    }
}

