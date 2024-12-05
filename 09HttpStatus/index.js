const express = require("express")
const PORT = 8000;

const app = express()

app.get("/", (req,res)=>{
    return res.status(200).send("Hello this is the homepage")
})

app.listen(8000, ()=> console.log(`Server started at port: ${PORT}`))