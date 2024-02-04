// zod is an external library used for input validation  -> schema validation
// npm install zod
// schema basically describe the structure of our input
// zod return an object with success : true/false 

const express = require("express")
const zod = require("zod")
const app = express()
const port = 4000

app.use(express.json())

const schema = zod.array(zod.number())

// write schema for this input
// {
//     email:string
//     password: atleast 8 letter 
//     country:"IN","Us"
//     kidneys:[1,2,3]
// }

// const schema = zod.object({
//     email:zod.string().email(),
//     password: zod.string().min(8),
//     country:zod.literal("IN").or(zod.literal("US")),
//     kidneys: zod.array(z.number())
// })
 
 

app.post("/health-checkup",function(req,res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }

    // const kidneyLength = kidneys.kidneyLength
    // res.send(`you have ${kidneyLength} kidneys`)
})

app.listen(port)

// ==============================================================================================================

// another example of zod without express , 
// zod is an external library can be used alone also

// const zod = require("zod")

// // if this is an array of number with atleast 1 input , return true else false

// function validateInput(arr){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr)
//     console.log(response);
// }

// validateInput([1,2,3]);

