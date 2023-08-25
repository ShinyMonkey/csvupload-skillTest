const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const app=express();
const port=8000;
const mongoose=require('mongoose');
const db=require('./config/mongoose');

app.use(expressLayouts);
app.use(express.urlencoded());


app.set('view engine','ejs');
app.set('views','./views');






app.use('/',require('./routs'));
app.use(express.static('./assets'));


// extracting scripts and style 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.listen(port,function(err){
    if(err){
        return console.log('Error while starting the server');
       
    }
    console.log('Server is working at port:8000')
});