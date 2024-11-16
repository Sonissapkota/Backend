const express = require("express");
const data = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8000;

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    return res.send("Hello there");
})

app
.route('/api/users')
.get((req,res)=>{
    return res.json(data);
})
.post((req,res)=>{
    const formData = req.body
    data.push(formData)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err,data)=>{
        return res.json({status: "pending"})
    })
})
.patch((req,res)=>{

})
.delete((req,res)=>{

})

app.listen(PORT, ()=>console.log(`Server started at port: ${PORT}`));