const express=require("express");
const connect=require("../src/Config/db")

const app=express();
// app.get('/shaquib',(req,res)=>{
//     res.send("hello worls")
// })

app.listen(5000,async()=>{
    await connect()

    console.log("listening on port 5000")
})