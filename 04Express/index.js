const express = require("express");
const http = require("http")
const app = express();

app.get('/', (req,res)=>{
    return res.send('Hello from the homepage')
})

app.get('/about', (req,res)=>{
    return res.send("This is about us page")
})

const myServer = http.createServer(app);
myServer.listen(8000, ()=> console.log("Server Started"))