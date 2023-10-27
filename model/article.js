const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required:[true,"请填入标题"],
        minlength:2,
        maxlength:10
    },
    author:{
        type:String,
        required:[true,"请填入作者"],
        ref:"User"
    },
    publishdate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String
    }
  });
const Aricle = mongoose.model('article', articleSchema);
// user.create({
//     name:'james',
//     email:"james@outlook.com",
//     password:'jamesli110',
//     role:"admin",
//     state:0

// })
module.exports={
    Aricle
}