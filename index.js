const express = require('express');
const  route = require('./route');
const app = express();

app.use(express.json());
app.use('/auth',route);
app.get('/get',(req,res)=>{
    res.json({
        "name":'shraddha',
        "lastname":"baheti",
        "message":"data is successfully",
        data:req.body
    })
})

let port=5000;
app.listen(port,()=>{
    console.log(port);
})





