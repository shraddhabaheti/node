const express = require('express')
const route=express.Router();

route.get('/text',(req,res)=>{
  
    res.send("hello world..!")
     
})
module.exports=route;
