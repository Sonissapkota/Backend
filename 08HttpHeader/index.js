const express = require("express");
const PORT = 8000;

const app = express()

app.get('/', (req,res)=>{
    req.set
    return res.send("Hello welcome to the index page");
})

app.get("/users", (req,res)=>{
    return res.send("Here you will get data related to the users");
})


app.listen(PORT, ()=> console.log("Server Started"))