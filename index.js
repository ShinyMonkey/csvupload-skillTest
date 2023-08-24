const express=require('express');

const app=express();
const port=8000;


app.listen(port,function(err){
    if(err){
        return console.log('Error while starting the server');
       
    }
    console.log('Server is working at port:8000')
});