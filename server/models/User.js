const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
   
    company: String,
    fullname: String,
    email: String,
    phone: String,
    password: String,

});

var User = module.exports = mongoose.model("users", UserSchema);