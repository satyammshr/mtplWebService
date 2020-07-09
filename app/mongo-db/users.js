const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const usersSchema = Schema({

  
  email: { type: String, required: true, minlength:1, maxlength:50 },
  password: { type: String, required: true,minlength:1, maxlength:1000 },
  mobile: { type: Number, required: true, unique:true,length:10},
  fullname:{type:String,required:true}


}, { collection: "users" });


//TODO:operations.....



module.exports =  mongoose.model('Users', usersSchema);

