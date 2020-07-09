var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const {Provinces} = require("../../mongo-db/index");


async function getProvinces (req,res) {
 
    try {
        const data = await Provinces.find({},{"pname":1,"_id":0});
        if (data.length > 0) {
            res.status(200).send(data);
        }
        errorFormat.error = "No provinces data available"
        res.status(401).send(errorFormat);
    } catch (err) {
        errorFormat.error = err || "Internal Server Error"
        res.status(500).send(errorFormat);
    }    

}




module.exports = {
    getProvinces:getProvinces
}