const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
     })
     res.json({
        msg : "Admin created succesfully"
     })

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin =  await Admin.find({
         username,
         password
    })

    if(admin){
        const token = jwt.sign({ username }, JWT_SECRET);
         res.json({
             token
         })
    }else{
        res.status(411).json({
            msg : "Incorrect Username and password"
        })
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    
   const newCourse = await Course.create({
      title:title,
      description:description,
      price:price,
      imageLink:imageLink
    })
    res.json({
      message:'Course created successfully' , courseId : newCourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})   
    res.json({
       courses: response
   })

});

module.exports = router;