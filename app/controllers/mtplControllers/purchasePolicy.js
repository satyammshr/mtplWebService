const db = require("../../models/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const mtpl = db.purchasePolicy

function postPurchasePolicy (req,res){
    let userData = req.body
    mtpl.create(userData).then(data=>{
        if (data){
        dataFormat.data = "Data uploaded"
        res.status(200).send(dataFormat)
        }
    }).catch(err => {
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    })
}

function getPurhasePolicy (req,res) {
    mtpl.findOne({
        where: { id : req.body.id }
    }).then(data=>{
        if(data){
            dataFormat.data = data
            res.status(200).send(dataFormat)
        }
        else{
            errorFormat.error = "Data not found"
            res.status(404).send(errorFormat)
        }
    }).catch(err => {
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    })
}

module.exports = {postPurchasePolicy:postPurchasePolicy,
    getPurhasePolicy : getPurhasePolicy
}