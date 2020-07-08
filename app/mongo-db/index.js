const mongoose = require("mongoose");



const Users = require("./users");
const Provinces = require("./provinces");
const PurchasePolicy = require("./purchasepolicy");
const MTPLCalculator = require("./mtlpcalculator");




//connection url
const url = "mongodb://localhost:27017/InsuranceDB";



// to connect
mongoose.connect(url);
//if error
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${url}`);
});
// when connected
mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${url}`);
});

// for debugging
mongoose.set('debug', true);



module.exports = {
    User : Users,
    Provinces : Provinces,
    MTPLCalculator : MTPLCalculator,
    PurchasePolicy : PurchasePolicy
}