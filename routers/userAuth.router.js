const express = require("express");
const router = express.Router();
const userCredentials = require("../data/userCredentials");


router.route("/login")
.get((req, res) => {
    res.json({success: true, message: "User login api found"});
})
.post((req, res) => {
    const {username:name, password:pwd} = req.body;
   userCredentials.forEach(({username, password}) =>{
     if(username === name){
       if(password === pwd){
         res.status(200).json({success: true, message:"User authenticated successfully"})
       }
       else{
         res.status(401).json({success: false, message:"Username and password do not match"})
       }
     } 
   } );
   res.status(401).json({success: false, message:"User is not registered."});
})

module.exports = router;