var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const {PurchasePolicy} = require("../../mongo-db/index");

async function postPurchasePolicy (req,res){

    try{
        const data = await PurchasePolicy.create(req.body);
        if (data){
            resData={
                "successStatus": "true",
                "failStatus": "false"
            }
            res.status(200).send(resData);
        } 
        resData={
            "successStatus": "false",
            "failStatus": "true"
        }
        res.status(400).send(resData);  
    }catch(err){
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    }

}

async function getPurhasePolicy (req,res) {
    
    //TODO: get user id 
    try{
        const data = await PurchasePolicy.findOne({ user_id : req.body.userData.id });
        if(data){
            dataFormat.data = data
            res.status(200).send(dataFormat)
        }
        errorFormat.error = "Data not found"
        res.status(404).send(errorFormat)
    }catch(err){
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    }
}

module.exports = {postPurchasePolicy:postPurchasePolicy,
    getPurhasePolicy : getPurhasePolicy
}