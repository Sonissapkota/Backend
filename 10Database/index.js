const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: false}));
// Connection
mongoose
.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB connected"))
.catch((err)=> console.log("Mongo Error", err))


//Schema definition
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    jobTitle:{
        type: String
    },
    gender:{
        type: String
    }
})

const User = mongoose.model("user", userSchema)

app.post("/api/users", async (req,res)=>{
    const body = req.body;
    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.jobTitle ||
        !body.gender
    ){
        return res.status(400).json({msg: "All fields are req..."})
    }

    try{
        const result = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            jobTitle: body.jobTitle,
            gender: body.gender
        })
        console.log("result",result)
        return res.status(200).json({msg: "Success"})
    }catch(err){
        console.error(err);
        return res.status(500).json({msg: "Server Error", error: err.message})
    }
})

app.get("/home", (req,res)=>{
    res.send("This is home page");
})


app.listen(PORT, ()=> console.log("Server started"));