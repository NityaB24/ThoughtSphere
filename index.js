require('dotenv').config()
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.get('/hell',(req,res)=>{
    res.send("hell");
})

app.listen(process.env.PORT,()=>{
    console.log("port is running");
})