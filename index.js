const express=require('express');
const app = express();
app.use(express.json())
app.get('/get',(req,res)=>{
    res.json({
        "message":"successfull data ",
        data:req.body
    })
})
let port=4000;
app.listen(port,()=>{
    console.log(port);
})





