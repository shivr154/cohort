const express = require("express")
const cors = require("cors")
const { createTodo ,updateTodo } = require("./type");
const { todo } = require("./db");
const app = express()
const port = 4000;

app.use(express.json())
app.use(cors())

app.post("/todo", async (req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "input are wrong"
        })
        return;
    }
    
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false
    })
        res.json({
            msg: "New Todo created"
        })   
})

app.get("/todos", async (req,res)=>{

   const todos = await todo.find({})
   res.json({
    todos
   })

})

app.put("/completed",async (req,res)=>{
    const id = req.body.id;
    const response = updateTodo.safeParse(id);
    if(!response){
        res.status(411).json({
            msg: "wrong id"
        })
    }
    else{
      await todo.update({
             _id : id
      },{
        completed: true
      })
      
      res.json({
        msg : "Todo marked as completed"
      })

    }

})



app.listen(port);