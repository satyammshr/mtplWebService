const db = require("../../models/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const Provinces = db.provinces



function getProvinces (req,res) {
    Provinces.findAll({
        attributes: ['pname'],
    }).then(data => {
        if (data.length > 0) {
            res.status(200).send(data);
        } else {
            errorFormat.error = "No provinces data available"
            res.status(401).send(errorFormat);
        }
    })
        .catch(err => {
            errorFormat.error = err || "Internal Server Error"
            res.status(500).send(errorFormat);
        })

}


module.exports = {
    getProvinces:getProvinces
}