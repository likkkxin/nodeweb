const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    state:{
        type:Number,
        default:0
    }
  });
const User = mongoose.model('user', userSchema);
// user.create({
//     name:'james',
//     email:"james@outlook.com",
//     password:'jamesli110',
//     role:"admin",
//     state:0

// })
module.exports={
    User
}