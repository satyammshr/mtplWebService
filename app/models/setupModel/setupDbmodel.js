const user = require("../userModel/userModel")
const provinces = require("../provincesModel/provincesModel")
const mtplCalculator = require("../mtplModel/mtplCalculator")
const purchasePolicy = require("../mtplModel/purchasePolicy")


module.exports = {
    user : user,
    provinces : provinces,
    mtplCalculator : mtplCalculator,
    purchasePolicy : purchasePolicy
}