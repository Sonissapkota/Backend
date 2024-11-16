const express = require("express");
const data = require("./MOCK_DATA.json")
const PORT = 8000;

const app = express();

app.get('/', (req,res)=>{
    return res.send("Hello there");
})

app
.route('/api/users')
.get((req,res)=>{
    return res.json(data);
})
.post((req,res)=>{

})
.patch((req,res)=>{

})
.delete((req,res)=>{

})

app.listen(PORT, ()=>console.log(`Server started at port: ${PORT}`));