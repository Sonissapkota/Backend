const express = require("express")
const router = express.Router()

router.post("/api/users", async (req,res)=>{
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

router.get("/home", (req,res)=>{
    res.send("This is home page");
})

module.exports = router;
