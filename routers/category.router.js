const express = require('express');
const router = express.Router();
const category = require("../data/category");

let idCount = 126;

router.route("/")
.get((req,res)=>{
  res.json(category);
})
.post((req,res) => {
  const newData = req.body;
  const newCategory = {id: idCount++,...newData};
  category.push(newCategory);
  res.status(201).json({status:"success",newCategory});
})


router.route("/:id")
.get((req,res)=>{
  const {id} = req.params;
  const data = category.find(item => item.id === parseInt(id,10));
  res.json(data);
})
.post((req,res) => {
  const {id:catId} = req.params;
  const updatedValue = req.body;
category.forEach(item => {
  if(item.id === parseInt(catId)){
    Object.keys(updatedValue).forEach(key => {
      if(key in item){
        item[key] = updatedValue[key];
      }
    })
  }
})
  res.json({status:"success",category});
})
.delete((req,res) => res.send({success:false, message:"Delete functionality not implemented"}))

module.exports = router;

