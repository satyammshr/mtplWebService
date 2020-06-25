const db = require("../../models/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const mtpl = db.mtplCalculator

function postMtplCalculator (req,res){
    mtpl.create(req.body).then(data=>{
        if (data){
        dataFormat.data = "data uploaded"
        res.status(200).send(dataFormat)
        }
    }).catch(err => {
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    })
}

function getMtplCalculator (req,res) {
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
    })
}

module.exports = {postMtplCalculator:postMtplCalculator,
    getMtplCalculator : getMtplCalculator
}