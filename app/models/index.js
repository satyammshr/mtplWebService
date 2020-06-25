const dbConfig = require("../../resources/config/dev-psql.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port:5432,
  omitNull:true,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel/userModel.js")(sequelize,Sequelize);
db.provinces = require("./provincesModel/provincesModel")(sequelize,Sequelize)
db.mtplCalculator = require("./mtplModel/mtplCalculator")(sequelize,Sequelize)
db.purchasePolicy = require("./mtplModel/purchasePolicy")(sequelize,Sequelize)
module.exports = db;
