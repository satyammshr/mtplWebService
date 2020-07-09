const mongoose = require("mongoose");
const Schema  = mongoose.Schema;


const purchasepolicySchema = Schema({
    id:{
        type:String ,unique:true,required:true
    },
    contactInformation: {
        a:{ type: String, required: true},
            },
    deliveryInformation:{ 
        e:{ type: String, required: true},
    },
    personalInformation: { 
        c:{type: String, required: true },
    },
    vehicleOwnerInformation: {
        q:{ type: String, required: true},
    },
    user_id:{type: String, required: true}
}, { collection: "purchasepolicy" });



module.exports =  mongoose.model('PurchasePolicySchema', purchasepolicySchema);
