const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");



const app = express();

const port = 4000;

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    console.log(path.join(__dirname+"/index.html"));
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/api/v1/login",(req,res)=>{
    res.send(`<h1>Done Mr.${req.body.name}</h1>`);
    console.log(req.body)
})

app.listen(port,()=>{
    console.log(`Server is working on ${port}`);
});