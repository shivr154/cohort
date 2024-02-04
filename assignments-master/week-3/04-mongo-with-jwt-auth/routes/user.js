const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

   const newUser = await User.create({
        username:username,
        password:password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const user =  await User.find({
         username,
         password
    })

    if(user){
        const token = jwt.sign({username}, JWT_SECRET);
         res.json({
             token
         })
    }else{
        res.status(411).json({
            msg : "Incorrect Username and password"
        })
    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
     const resp = await Course.find({})
      res.json({
      courses:resp
   })
    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username
    const courseId = req.params.courseId;
    
    User.updateOne({
       username:username
    },{
        "$push":{
         purchasedCourses : courseId
         }
    }).catch(function(e){
          console.log(e);
     })
      res.json({
          message : "Purchased Completed"
     })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
      const username = req.username

      const user = await User.findOne({
        username
      });
      console.log(user.purchasedCourses);
      
      const courses = await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
      })
      res.json({
        courses : courses
      })


});

module.exports = router
