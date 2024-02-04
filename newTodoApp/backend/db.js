const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shivamrathi154:AaNBk8iwNlRFpoq1@cluster0.bpsgr1e.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})
 
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo:todo
}
