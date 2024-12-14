const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: false}));
// Connection
mongoose
.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB connected"))
.catch((err)=> console.log("Mongo Error", err))

app.use()

app.listen(PORT, ()=> console.log("Server started"));