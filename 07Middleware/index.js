const express = require("express")
const app = express()

const m1 = (req,res,next)=>{
    console.log(`Requested method: ${req.method}, request url: ${req.url}`);
    next();
}

// const m2 = (req,res,next)=>{
//     console.log("Hello from middleware 2");
//     next()
// }

app.use(m1);

app.get('/', (req,res)=>{
    res.send("Hello middleware")
})

app.listen(8000, ()=>{console.log("Server Started")});