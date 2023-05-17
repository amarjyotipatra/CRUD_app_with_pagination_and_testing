const express=require('express')
require("dotenv").config()

const app=express();
const apiRoutes=require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",apiRoutes)

app.listen(process.env.PORT,()=>{
    if(process.env.PORT==undefined){
        console.log("PORT IS UNDEFINED");
        return;
    }
   console.log(`server started successfully on PORT : ${process.env.PORT}`)
})