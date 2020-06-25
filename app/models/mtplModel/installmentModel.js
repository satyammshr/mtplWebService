const { verifyToken } = require("../../utils/authUtils");
const User = require("../userModel/userModel")

module.exports = (sequelize, Sequelize) => {
    const Installments = sequelize.define("installments", {
        freezeTableName: true,
        timestamps: false
    });
    return Installments;
};
