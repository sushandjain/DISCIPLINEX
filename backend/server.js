const express=require('express')
const cors=require('cors')
const mongoose=require("mongoose")
require("dotenv").config()
const User=require("./model/scema.js")
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT;
const mongodb=process.env.MONGOURI

(async()=>{
    mongoose.connect(mongodb).then(()=>console.log("connected")).catch(()=>console.log("there is some error just check it out")
    )
})();

app.get



