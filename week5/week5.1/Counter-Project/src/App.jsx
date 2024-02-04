// any time a parent get re-render ,its child re-renders as well

import {useState} from 'react'
import './App.css'

// Todo App
// {
//   todos:[{
//     title:"todo1",
//     description:"First todo",
//     completed : false
//   }]
// }
console.log("outside App");

function App() {
console.log("inside App Above state");

  // declaring the state of todo app
    const [todos,setTodos] = useState([
    {
      title:"Go to gym",
      description : "do gym from 6-8",
      completed : false
    },{
      title : "study Dsa",
      description:"do Dsa from 9-11",
      completed : false
    },{
      title : "study Cs",
      description:"do Cs from 11-3",
      completed : true
    }
  ]); 

  // [1,2]
  // [...todos,3] => [1,2,3]
// adding a extra element in todo by using setTodos
console.log("after state");
  function addTodo(){
    console.log("inside addTOdo");
   let newTodos = [];
   for(let i=0;i<todos.length;i++){
       newTodos.push(todos[i]);
   }
   newTodos.push({
    title:"asggsag1",
    description : "asfafasga"
   })

   setTodos(newTodos);
  }

  return (
    <div>
      {console.log("inside return")}
       <button onClick={addTodo} >Add a random Todo</button>

        {/* <Todo title = {todos[0].title} description={todos[0].description} />
        <Todo title = {todos[1].title} description={todos[1].description} /> */}
        {/* <Todo title = "ashu" description="go to park" />
        <Todo title = "harkirat" description="go to park" /> */}
         {/* better way to iterate over array */}

        {todos.map(function(todo){
              return <Todo title={todo.title} description={todo.description} />
        })}

        <DarkNewTodo todos = {todos} />

       <Dummybutton></Dummybutton>

    </div>
  )
}

function DarkNewTodo(props){
  console.log("inside Dark TODO");
  return <div>
     {props.todos.map(function(todo){
      return <div style={{background:"yellow",color:"green"}}> <Todo title={todo.title} description={todo.description} /> </div>
     })}

  </div>

}


function Dummybutton(){
  console.log("inside Dummy butoon");
   console.log("dummy re-render");
  return <button></button>
}

// Component

//Todo
// {
//   title,
//   description,
//   completed
// }

function Todo(props){
     console.log("inside TODO ");
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>

}


export default App
