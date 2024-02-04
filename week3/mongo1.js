// mongoose is the library that lets u connect to the database
const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://shivamrathi154:DAC56KqAFoI4CsWk@cluster0.9mywcpk.mongodb.net/userappnew")

const User = mongoose.model('Users',{username : String, 
email: String,
password: String
})


app.post("/signup", async function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password

    const existingUser = await User.findOne({email:email})
    if(existingUser){
        return res.status(400).send("email already exist")
    }
 
    const user = new User({
        username : username,
        email : email,
        password : password
    })

    user.save();
    res.json({
        msg : "user created succesfully"
    })
})

app.listen(3000)


// const user = new User({
//     username:'Shivam Rathi',
//     email : 'shiv1243@gmail.com',
//     password: '123456'
// })

// user.save();

