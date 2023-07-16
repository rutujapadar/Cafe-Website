const express = require("express");
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var dbConfig= require ("./dbConfig")
var user= require ("./user")
var cart= require ("./cart")
let app=express()
app.use(bodyParser.json());
app.use(express.json());


app.get("/getUser", async (req,res)=>{

    let menuDB=await cart.find()
    res.send({status:200,data:menuDB})

}
)

app.post("/putData", async(req,res)=>{
const name=req.body.name;
const email=req.body.email;
const contact=req.body.contact;

const formData= new user({
    name:name,
    email:email,
    contact:contact
})

await formData.save();
res.send("inserted")

})

app.post("/addCart", async(req,res)=>{
    const name=req.body.name;
    const price=req.body.price;
    const qty=req.body.qty;
    const desc=req.body.desc;
    
    const formData= new cart({
        name:name,
        price:price,
        qty:qty,
        desc:desc
    })
    
    await formData.save();
    res.send("inserted")
    
    })


app.listen(8002, 'localhost',() => {
    console.log(`Server is running on port 8002.`);
  });
