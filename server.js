const express=require('express');
const app=express();

const cheerio=require('cheerio');

var fs=require('fs');
var path = require('path');
var dealjson_url=require('./scripts/deal.json');


app.listen(3000,function(){
    console.log('Server Running');
});

app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/views", express.static(__dirname+'/views'));
app.use("/styles", express.static(__dirname+'/styles'));

app.get('/',function(req,res){
      res.sendFile(__dirname+'/index.html');
});


