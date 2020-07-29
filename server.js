//jshint esversion: 6
const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at yuka@gmail.com");
});

app.get("/about", function(req,res){
    res.send("Hi I am Yuka. This is my first express server!");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>Coffee</li><li>Data</li><li>Meat</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});