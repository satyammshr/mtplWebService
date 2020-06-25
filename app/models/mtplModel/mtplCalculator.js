const { verifyToken } = require("../../utils/authUtils");
const User = require("../userModel/userModel")

module.exports = (sequelize, Sequelize) => {
    const MtplCalculator = sequelize.define("mtplcalculator", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        vehicleinfo:{
            type:Sequelize.JSON
        },
        insuringparty:{
            type:Sequelize.JSON
        },
        policy:{
            type:Sequelize.JSON
        },
        installment:{
            type:Sequelize.JSON
        },
        additionalcovers:{
            type:Sequelize.JSON
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return MtplCalculator;
};

// CREATE TABLE mtplcalculator (id int vehicleinfo json,insuringparty json,policy json,installment json,additionalcovers json)