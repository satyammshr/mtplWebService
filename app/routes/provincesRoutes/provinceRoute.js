var express = require("express");
var router = express.Router();
var provinceController = require("../../controllers/provincesControllers/provinceController");
 

router.get("/getProvincesList", provinceController.getProvinces);

module.exports = router;