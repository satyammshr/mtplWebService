const mongoose = require("mongoose");



const Users = require("./users");
const Provinces = require("./provinces");
const PurchasePolicy = require("./purchasepolicy");
const MTPLCalculator = require("./mtlpcalculator");




//connection url
// = "mongodb://localhost:27017/InsuranceDB";
const url = "mongodb+srv://DB_Master:Summer01@cluster0.eodxz.mongodb.net/DZI_DB?retryWrites=true&w=majority";


// to connect
// const uri = “YOUR CONNECTION STRING“;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…");
})
.catch(err => console.log(err))








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