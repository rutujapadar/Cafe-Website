const express = require("express");
const mongoose = require('mongoose');
var dbConfig= require ("./dbConfig")
var user= require ("./user")
let app=express()

app.get("/getUser", async (req,res)=>{

    let menuDB=await user.find()
    res.send({status:"ok",data:menuDB})

}
)

app.listen(8002, 'localhost',() => {
    console.log(`Server is running on port 8003.`);
  });
