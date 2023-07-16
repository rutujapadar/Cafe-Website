const mongoose = require('mongoose');


var cartSchema = new mongoose.Schema({
    name: String,
    price:Number,
    qty:Number, 
    desc:String
});

let cart=mongoose.model('cart',cartSchema,'cart');

module.exports=cart;
