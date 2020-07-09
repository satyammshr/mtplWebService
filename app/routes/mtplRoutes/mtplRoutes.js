var express = require("express");
var router = express.Router();
var mtplCalculator = require("../../controllers/mtplControllers/mtplCalculator");
var purchasePolicy = require("../../controllers/mtplControllers/purchasePolicy")
var installment = require("../../controllers/mtplControllers/installmentOptions")
const auth = require("../../services/auth")
 

//to post data
router.post("/postmtplCalculator", mtplCalculator.postMtplCalculator);
router.post("/getmtplCalculator", auth.isValidRequest ,mtplCalculator.getMtplCalculator)
router.post("/postPurchasePolicy", purchasePolicy.postPurchasePolicy)
router.post("/getPurchasePolicy", auth.isValidRequest ,purchasePolicy.getPurhasePolicy)
router.get("/getInstallmentOptions",installment.getInstallmentOptions)


module.exports = router;