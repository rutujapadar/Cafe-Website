const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    full_name: String,
    email_address:String,
    city:String,
    country:String
});

let user=mongoose.model('user',userSchema,'user');

module.exports=user;
