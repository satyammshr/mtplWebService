var express = require("express");
var router = express.Router();
var setup = require("../../controllers/setupControllers/setupDb");
 

//to post data

router.get("/all",setup.setupDb);


module.exports = router;