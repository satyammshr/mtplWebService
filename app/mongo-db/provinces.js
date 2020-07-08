const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const provincesSchema = Schema({

  pname: { type: String }

}, { collection: "provinces" });




module.exports = mongoose.model('Provinces', provincesSchema);
