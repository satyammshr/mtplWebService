const db = require("../../mongomodels/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
//const Provinces = db.provinces



// function getProvinces (req,res) {
//     Provinces.findAll({
//         attributes: ['pname'],
//     }).then(data => {
//         if (data.length > 0) {
//             res.status(200).send(data);
//         } else {
//             errorFormat.error = "No provinces data available"
//             res.status(401).send(errorFormat);
//         }
//     })
//         .catch(err => {
//             errorFormat.error = err || "Internal Server Error"
//             res.status(500).send(errorFormat);
//         })

// }




function getProvinces (req,res) {
    db.provinces().then(Provinces=>{
        Provinces.find({},{"pname":1,"_id":0}).then(data => {
            if (data.length > 0) {
                res.status(200).send(data);
            } else {
                errorFormat.error = "No provinces data available"
                res.status(401).send(errorFormat);
            }
        })
    }).catch(err => {
            errorFormat.error = err || "Internal Server Error"
            res.status(500).send(errorFormat);
        })

}




module.exports = {
    getProvinces:getProvinces
}