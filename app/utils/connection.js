const { Schema } = require("mongoose");
const Moongoose = require("mongoose");
Moongoose.Promise = global.Promise;
Moongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/InsuranceDB";
const collection = {};



mongoose.connect(url, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);




