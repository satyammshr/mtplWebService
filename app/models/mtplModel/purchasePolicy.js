const { verifyToken } = require("../../utils/authUtils");


module.exports = (sequelize, Sequelize) => {
    const PurchasePolicy = sequelize.define("purchasepolicy", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        contactinformation: {
            type: Sequelize.JSON
        },
        deliveryinformation: {
            type: Sequelize.JSON
        },
        personalinformation: {
            type: Sequelize.JSON
        },
        vehicleownerinformation: {
            type: Sequelize.JSON
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return PurchasePolicy;
};

// purchasepolicy (id int contactinformation json,deliveryinformation json,personalinformation json,vehicleownerinformation json)