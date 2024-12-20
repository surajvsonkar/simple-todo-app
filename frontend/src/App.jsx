import { useState } from 'react'
import './App.css'
import { CreateTodo } from "../components/CreateTodo"
import { Todos } from "../components/Todos"

function App() {
  const [todos, setTodos] = useState([])
  fetch('http://localhost:4000/todos/', {
    method: "GET"
  })
  .then(async function(res){
    const json = await res.json()
    // console.log(json)
    setTodos(json)
    // console.log(todos)
  })

  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
