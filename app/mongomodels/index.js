const { Schema } = require("mongoose");
const Moongoose = require("mongoose");
Moongoose.Promise = global.Promise;
Moongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/insuredb";


// //const usersSchema=require("./schema/userModel")
// const provincesSchema = require("../schemas/provincesModel/provincesModel")
// const mtpCalculatorSchema = require("../schemas/mtplModel/mtplCalculator")
// const purchasepolicySchema = require("../schemas/mtplModel/purchasePolicy")
const db = {};

db.users = ()=>{
  return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
    return database.model('users', usersSchema)
})
.catch(() => {
    let err = new Error("Could not connect to users Collection in Database");
    err.status = 500;
    throw err;

})
} 

db.provinces =()=>{
  return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
    return database.model('provinces', provincesSchema)
})
.catch(() => {
    let err = new Error("Could not connect to provinces Collection in Database");
    err.status = 500;
    throw err;

})
}

db.mtplCalculator = ()=>{
  return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
    return database.model('mtpCalculator', mtpCalculatorSchema)
})
.catch(() => {
    let err = new Error("Could not connect to mtpCalculator Collection in Database");
    err.status = 500;
    throw err;

})
}

db.purchasePolicy = ()=>{
  return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
    return database.model('purchasepolicy', purchasepolicySchema)
})
.catch(() => {
    let err = new Error("Could not connect to purchasepolicy Collection in Database");
    err.status = 500;
    throw err;

})
}

module.exports = db;