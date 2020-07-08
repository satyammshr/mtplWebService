var express = require("express");
var router = express.Router();
var setup = require("../../controllers/setupControllers/setupDb");
 

//to post data

router.get('/all', (req, res, next) => {
    setup.setupdb().then((data)=>{
        res.json(data)
    })
})


module.exports = router;