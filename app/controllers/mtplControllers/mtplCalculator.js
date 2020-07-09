const db = require("../../mongomodels/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const {MTPLCalculator} = require("../../mongo-db/index");


async function postMtplCalculator (req,res){ 
    
    try{
        const data = await MTPLCalculator.create(req.body);
        console.log(data);
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

async function getMtplCalculator (req,res) {
    
    //TODO:get user id

    console.log(req.body)
    try{
        const data = await MTPLCalculator.findOne({ user_id : req.body.userData.id });
        if(data){
            dataFormat.data = data
            res.status(200).send(dataFormat)
        }
        errorFormat.error = "Data not found"
        res.status(404).send(errorFormat)
  
    }catch(err){
        console.log(err);
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    }
    
}



module.exports = {postMtplCalculator:postMtplCalculator,
    getMtplCalculator : getMtplCalculator
}