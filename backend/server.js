const express=require('express');
const cors=require('cors');
const logger=require('./logger');
const app=express();

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
logger.info("Home Page Requested");
    res.send("WebChat backend is running");
})


app.listen(5000,()=>{
    logger.info("server started at 5000");
})