const express=require("express")
const app=express();
const port=process.env.PORT || 

app.get("/",(req,res)=>{
    res.send("hello i am venus")
});

app.listen()