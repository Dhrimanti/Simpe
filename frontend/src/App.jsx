import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  async function hello() {
    const response=await fetch("http://localhost:3000/")
    const data=await response.json()
    setTodos(data)
  }
  
  

  return (
    <>
      
      <CreateTodo/>
      <Todos todos={todos}/>
      
      
      
      
    </>
  )
}

export default App
