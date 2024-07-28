import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1);
  }
  function remove(){
    setCount(0)
  }

  return (
    <>
      
      <CreateTodo/>
      
      <Todos todos={[{
        title: "Gym",
        desc: "Jao",
        completed: false
      },{
        title: "Homework",
        desc: "Do it",
        completed: false
      }]} />
      
    </>
  )
}

export default App
