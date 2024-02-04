/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor (){
    this.list_of_todos = []
  }

  add(todo){
      this.list_of_todos.push(todo)
  }
  remove(indexofTodo){
      this.list_of_todos.splice(indexofTodo,1);
  }
  update(index,updatedTodo){
      if(this.list_of_todos.length > index){
        this.list_of_todos.splice(index,1,updatedTodo)
      }
  }
  getAll(){
    return this.list_of_todos
  }
  get(indexOfTodo){
     if(this.list_of_todos.length > indexOfTodo){
        return this.list_of_todos[indexOfTodo]
     }
     else{
      return null
     }
  }
  clear(){
    this.list_of_todos = []
  }
}

module.exports = Todo;
