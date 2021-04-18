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
         res.status(200).json({success: true, message:"User authenticated successfully", username})
       }
       else{
         res.status(401).json({success: false, message:"Username and password does not match!"})
       }
     } 
   } );
   res.status(401).json({success: false, message:"Username does not exist."});
})

router.route("/signup")
// .get((req, res)=>{
//   res.json(userCredentials);
// }) //remove this
.post((req, res)=>{
  const {username, password, email} = req.body;
  const userExist = userCredentials.some(({username:name, email:mail})=>{
    if(username === name){
      res.status(409).json({success:false, message:"Username is taken."})
      return true;
    }
    if(mail === email){
      res.status(409).json({success:false, message:"Email is already registered."});
      return true;
    }
  })
  if(!userExist){
    userCredentials.push({username, password, email});
  res.status(201).json({success:true,message:"User added successfully", username});
  }
})

module.exports = router;