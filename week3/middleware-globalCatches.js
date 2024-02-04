// You need middleware to do validation and authetication ,at a upper level which are repeated in major route calls 
// middleware are basically call back fnc including next() to pass the control to the next cb they have basically 3 arguments (req,res,next)
// but global catches another middleware have 4 arguments(err,req,res,next)

const express= require("express")
const app = express()
const port = 3000

// DUMB way of doing input validation and authentication --> use middlewares better approach

// app.get("/health-checkup",(req,res)=>{
//     const username = req.headers.username
//     const password = req.headers.password
//     const kidneyId = req.query.kidneyId

//     if(username != "shivam" || password != "123"){
//         res.status(400).json({msg:`something wrong with ur inputs `})
//         return
//     } 

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({msg:`Something wrong with input`})
//         return
//     }

//     res.json({
//         msg:`Your kidney is fine`
//     })

// })

// ======================================Middleware=================================================

// app.use(middleware) // we use this when this has to use at every route so we dnt have to write it all again
// app.use(express.json())


// Syntax ==>  app.get("Route",cb1,cb2,cb3 ,function(req,res,next){
    // all work this need to do validate ,authenticate etc.
    // after that it passes the control to next Cb 
    // next()
// } ..... , function(req,res){
    // res.json({msg:"all good"})
// })

// this call back functions syntax are like they have next to pass the control to next cb/middleware

// another example of using middleware ==============================================================

// let numberofUser = 0
// function incereaseCount(req,res,next){
//     numberofUser++;
//     console.log(numberofUser);
//      next();
// }

// app.use(incereaseCount)

// dnt have to call increaseCount from app.post() bcz we have app.use() which automatically call this in every route

// app.post("/health",function(req,res){
//     res.json({
//         msg:"hi there"
//     })
// })

// app.get("/health",function(req,res){
//     res.json("YOOYOYO")
// })


// ==================================================================================================================

app.use(express.json())

app.post("/health-checkup",function(req,res,next){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length 

    res.send(`you have ${kidneyLength} kidneys`)

})

// global catches -> middleware , have to defined it at the end , if there is any err/exception in the code the control directly reaches here

app.use(function(err,req,res,next){   // syntax of the global catches 
     res.json({
        msg:"sorry something wrong with the server"
     })
    
})



app.listen(port)

