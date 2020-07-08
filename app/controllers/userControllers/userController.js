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
        User.create(userData).then(async data => {
        dataFormat.data = data
        var userId = await User.findOne({
             email: req.body.email 
        },{_id})
        dataFormat.data.id = userId._id;
        // JWT token generation 
        var userData = {
            id: dataFormat.data.id,
        };
        var token = authUtils.generateJWTToken({ userData }); // email , mobile not required for JWT
        userData.token = token
        userData.email =  dataFormat.data.email
        
        res.status(200).send(userData); // id,mobile not required 
    }).catch(err => {
            errorFormat.error = err 
            res.status(400).send(errorFormat);
        });
    }
    
}

// async function createUserfirst (req, res) {
//     try{
//     userData = req.body;
//     console.log('1--------------1')
//     if (userData.password != userData.confirmPassword) {
//         errorFormat.error = "Passwords do not match"
//         res.status(400).send(errorFormat)
        
//     } else {
//         userData.password = bcrypt.hashSync(req.body.password, 10);
//         const userdetails = await collection.getUsersCollection();
//         const userDataReturn = await userdetails.insertMany(userData);
            
//             console.log('1--------------2')
//             var userId = await userdetails.findOne({ email: req.body.email })
//             console.log(userId);
            
//             dataFormat.data.id = userId._id;
//             // JWT token generation 
//             var userData = {
//                 id: dataFormat.data.id,
//             };
//             var token = authUtils.generateJWTToken({ userData }); // email , mobile not required for JWT
//             userData.token = token
//             userData.email =  dataFormat.data.email
            
//             res.status(200).send(userData); // id,mobile not required 
//         }
//     } catch(err){
//         errorFormat.error = err.stack || "Internal server error"
//         res.status(500).send(errorFormat);

//     }
    
// }



// function loginUser(req,res) {
//     User.findOne({
//         where: { email: req.body.email }
//     }).then(data => {
//         if (data.length == 0 ) {
//             errorFormat.error = "Invalid User"
//             res.status(400).send(errorFormat);
//         }  else {
//             var userData = {
//                 id: data.id 
//             }
//             bcrypt.compare(req.body.password,data.password,function (err,result) {
//                 if (result == true) {
//                     var token = authUtils.generateJWTToken({ userData});
//                     userData.email = data.email
//                     userData.token = token
//                     res.status(200).send(userData) // remove success  from JSON object
//                 } else {
//                     errorFormat.error = "Password do not match"
//                     res.status(401).send(errorFormat) // response should be in JSON // make 401 unauthorised

//                 }
//             }); 
             
            
//         }
//     }).catch(err => {
//         errorFormat.error = err || "Internal server error"
//         res.status(500).send(errorFormat);
//     })
        
// }

async function loginUser(req,res) {
    

    try{
    const userdetails = await collection.getUsersCollection();

    console.log('1--------------2')
    var userDetail = await userdetails.findOne({ email: req.body.email })
    console.log(userDetail);

    if (!userDetail) {
        errorFormat.error = "Invalid User"
        res.status(400).send(errorFormat);
    }
    else{
        var userData = {
            id : userDetail._id
        }
    }

    bcrypt.compare(req.body.password,userDetail.password,function (err,result) {
        if (result == true) {
            var token = authUtils.generateJWTToken({ userData});
            userData.email = userData.email
            userData.token = token
            res.status(200).send(userData) // remove success  from JSON object
        } else {
            errorFormat.error = "Password do not match"
            res.status(401).send(errorFormat) // response should be in JSON // make 401 unauthorised

        }
    });
    }catch(err){
        errorFormat.error = err.stack || "Internal server error"
        res.status(500).send(errorFormat);

    }




        
}








// function findUserID(req, res) {

    
//     User.findAll({
//         attributes: ['id','mobile'],
//         where: { email: req.body.userData.email }
//     }).then(data => {
//         if (data.length > 0) {
//             res.status(200).send(data);
//         } else {
//             errorFormat.error = "No user data available for this email"
//             res.status(401).send(errorFormat);
//         }
//     })
//         .catch(err => {
//             errorFormat.error = err || "Internal Server Error"
//             res.status(500).send(errorFormat);
//         })
    
    

// }



async function findUserID(req, res) {
 
    try{
    const userdetails = await collection.getUsersCollection();
    console.log(req.body.userData)
    console.log('1--------------2')
    var userData = await userdetails.findOne({ _id: req.body.userData.id })
    console.log(userData);

    if (userData) {
        res.status(200).send(userData);
    } else {
        errorFormat.error = "No user data available for this email"
        res.status(401).send(errorFormat);
    }
    }catch(err){
        errorFormat.error = err.stack || "Internal server error"
        res.status(500).send(errorFormat);
    }
    

}



module.exports = {
    createUserfirst: createUserfirst, // Insurance Route
    loginUser: loginUser , // Insurance Route
    findUserID: findUserID
}