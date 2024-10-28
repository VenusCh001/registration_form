const express=require("express")
const app=express();
const port=process.env.PORT || 3000
require("./db/conn")
app.get("/",(req,res)=>{
    res.send("hello i am venus")
});

app.listen(port,()=>{
    console.log('server is running at ${port}');
})