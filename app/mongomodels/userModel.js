const { Schema } = require("mongoose");
const Moongoose = require("mongoose");
Moongoose.Promise = global.Promise;
Moongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/InsuranceDB";
const collection = {};


const userSchema = Schema({
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    mobile:{
        type : String,
        required : true
    }
}, { collection: "users" });

collection.getUsersCollection = () => {
    return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('users', userSchema)
})
    .catch(() => {
        let err = new Error("Could not connect to users Collection in Database");
        err.status = 500;
        throw err;

    })
}

module.exports = collection;
