const { verifyToken } = require("../../utils/authUtils");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [1, 50]
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [1, 1000]
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'mobile',
      isNumeric: true,
      validate: {
        isLongEnough: function (val) {
          if (val.length != 10) {
            throw new Error("Please enter 10 digit Valid Phone Number")
          }
        }
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return User;
};
