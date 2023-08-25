const File= require('../models/file');
const fs= require('fs');
const csvParser = require('csv-parser');
const path=require('path');
module.exports.view=async function(req,res){
    try {
        let file= await File.findOne({name:req.params.name});
        console.log(file.path)
        let header=[];
        let data=[];
        if(file){
            fs.createReadStream(file.path)
            .pipe(csvParser())
            .on('headers',function (headers){
                headers.map(function(head){
                    header.push(head);
                });
            })
            .on('data',function(row){
                data.push(row);

            })
            .on('end', function(){
                res.render('view',{
                    title: "viewer",
                    headers:header,
                    data : data,
                })
                console.log(header);
                console.log(data);
            })
        }else{
            return res.redirect('back');
        }
        
        
    } catch (error) {
        console.log(error);
        return;   
    }
}