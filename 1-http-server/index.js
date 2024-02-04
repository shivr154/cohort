// const express = require("express")
// const app = express()
// const port = 3000

// function sum(n){
//     let ans = 0;
//     for(let i=0;i<n;i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// // http://localhost:3000/?n=12 thats how u send query parameter

// app.get("/",function(req,res){
//     const n = req.query.n
//     const ans = sum(n) 
//     res.send(`HI there ans is : ${ans}`)
// })


// app.listen(port)

// --------------****************---------------------

// You need to create 4 routes
// 1-> GET User can check how many kidney they have and their health
// 2->POST User can add a new Kidney
// 3->Put User can replace a kidney make it healthy
// 4->Delete User can remove a kidney

const express = require("express")
const app = express()
const port = 3000

const users = [{
    name:"John",
    kidneys:[{
        healthy:true
    },{
        healthy:false
    },{
        healthy:true
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "DONE"
    })
    
})

app.put("/",function(req,res){
    for(let i =0 ; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/",function(req,res){
 if(isThereAtleastOneUnHealthyKidney()){
    const newKidneys = [];
    for(let i=0;i < users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys
    res.json({
        msg:"DONE"
    })
 }
 else{
    res.status(411).json({
        msg:"You have no unhealthy kidneys"
    })
 }

})

function isThereAtleastOneUnHealthyKidney(){
    let AtleastOneUnHealthyKidney = false
    for(let i =0 ; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            AtleastOneUnHealthyKidney = true
        }
    }
     return AtleastOneUnHealthyKidney;
}

    
app.listen(port)

