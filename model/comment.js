const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Aricle"
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    content:{
        type:String,
    },
    time:{
        type:Date,
    }
  });
  const comment = mongoose.model('comment', commentSchema);
  
  module.exports={
      comment
  }