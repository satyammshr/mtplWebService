const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const usersSchema = Schema({

  
  email: { type: String, required: true, minlength:1, maxlength:50 },
  password: { type: String, required: true,minlength:1, maxlength:1000 },
  mobile: { type: Number, required: true, unique:true,length:10}

}, { collection: "users" });


module.exports =  mongoose.model('Users', usersSchema);

