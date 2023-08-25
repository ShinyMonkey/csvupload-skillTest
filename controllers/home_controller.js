const File = require('../models/file');
module.exports.home= async function(req,res){
    let files= await File.find({});
    return res.render('home',{
        title:'CsvUploader',
        files:files,
    })
}

module.exports.upload = async function(req,res){
    try {
        // console.log(req.file);
        File.uploadFile(req,res,function(err){
            if(err){console.log("******Multer Error********",err)};
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

