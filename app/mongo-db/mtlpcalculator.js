const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const mtplCalculatorSchema = Schema({
    id:{
        type: Number, required: true, unique: true
    },
    vehicleInfo: {
        registrationNumber:{ type: String, required: true, unique: true},
        certificateNumber:{type: Number, required: true, unique: true},
        purpose:{type: String, required: true},
        outsideBulgarianTerritory:{type: String, required: true,enum:["yes","no"] }
                },
    insuringParty:{ 
        egn:{ type: Number, required: true, unique: true },
        permanentResidence:{ type: String, required: true },
        email:{ type: String, required: true },
    },
    policy: { 
        startDate:{type: String, required: true },
        policyLength:{type: String, required: true}
    },
    installment: {
        type:{ type: String, required: true,enum:["single","two","four"] },
        period:{ type: String, required: true,enum:["12 months","6 months","3 months"]},
        price:{type: Number, required: true}
    },
    additionalCover: {
        type:{ type: String, required: true,enum:["None","Premium","VIP"] },
        price:{type: Number, required: true}
    },
    user_id:{type: String, required: true}

}, { collection: "mtpCalculator" });

module.exports =  mongoose.model('MTPLCalculatorSchema', mtplCalculatorSchema);

