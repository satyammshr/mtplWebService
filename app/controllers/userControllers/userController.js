const db = require("../../models/index");
var dataFormat = require("../../../resources/format/data.json")
var errorFormat = require("../../../resources/format/error.json")
const bcrypt = require('bcryptjs');
const authUtils = require("../../utils/authUtils");
const {User} = require("../../mongo-db/index");
const collection=require('../../mongomodels/userModel.js');



function createUserfirst(req, res) {
    userData = req.body;
    if (userData.password != userData.confirmPassword) {
        errorFormat.error = "Passwords do not match"
        res.status(400).send(errorFormat)
    } else {
        console.log(User);
        userData.password = bcrypt.hashSync(req.body.password, 10);
        //adding the user   
        User.create(userData).then(async data => {
        dataFormat.data = data
        //finding the user saved above
        var userId = await User.findOne({
             email: req.body.email 
        })
        

        console.log(userId)

        // JWT token generation 
        var userData = {
            id: userId._id
        };
        var token = authUtils.generateJWTToken({ userData }); // email , mobile not required for JWT
        
        //Response 
        resData = {
            message : "Registered Successfully"
        }
        
        res.status(200).send(resData); // id,mobile not required 
    }).catch(err => {
            errorFormat.error = err 
            res.status(400).send(errorFormat);
        });
    }
    
}



async function loginUser(req,res) {

    try{
        const data = await User.findOne({
            email: req.body.email 
            });
        if (data.length == 0 ) {
            errorFormat.error = "Invalid User"
            res.status(400).send(errorFormat);
        }  else {
            var userData = {
                id: data._id 
            }
            bcrypt.compare(req.body.password,data.password,function (err,result) {
                if (result == true) {
                    //token generation
                    var token = authUtils.generateJWTToken({ userData});
                    //response creation
                    const resData = {
                        
                    }
                    resData.fullname = data.fullname
                    resData.token = token
                    res.status(200).send(resData) // remove success  from JSON object
                } else {
                    errorFormat.error = "Password do not match"
                    res.status(401).send(errorFormat) // response should be in JSON // make 401 unauthorised

                }
            }); 
        }
        
    }catch(err){
        errorFormat.error = err || "Internal server error"
        res.status(500).send(errorFormat);
    }

        
}



function findUserID(req, res) {

    console.log(req.body);
    User.findOne({
        _id : req.body.userData.id 
    },{password:0}).then(data => {
        if (data) {
            res.status(200).send(data);
        } else {
            errorFormat.error = "No user data available for this email"
            res.status(401).send(errorFormat);
        }
    })
        .catch(err => {
            errorFormat.error = err || "Internal Server Error"
            res.status(500).send(errorFormat);
        })
    
    

}





module.exports = {
    createUserfirst: createUserfirst, // Insurance Route
    loginUser: loginUser , // Insurance Route
    findUserID: findUserID
}