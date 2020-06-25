const { verifyToken } = require("../../utils/authUtils");

module.exports = (sequelize, Sequelize) => {
  const Provinces = sequelize.define("provinces", {
      pname:{
        type: Sequelize.STRING,
        primaryKey: true,
      }
  }
  );
  return Provinces;
};
