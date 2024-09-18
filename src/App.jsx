import { useEffect, useState } from 'react'
import './styles.css'

export default function App(){


  const [newItem, setNewITem] = useState("")
  const [todos, settodos] = useState(()=>{
    const localvalue = localStorage.getItem("ITEMS")
  
    return JSON.parse(localvalue)
  }

  )
  

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function submit(e){
    e.preventDefault()
    settodos(currenttodo => {
      return [
        ...todos, {id: crypto.randomUUID(), title: newItem, completed: false}, 
      ]
    })

    setNewITem("")
  }

  function toggletodo(id, completed){
    settodos(currenttodo => {
      return currenttodo.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deletetodo(id){
    settodos(currenttodo =>{
      return currenttodo.filter(todo => todo.id !== id)
    })
  }

 return (
 <>
  
  <form onSubmit={submit} className="newttask">
    <div className="checkk">
      <label htmlFor="item">Enter New Task</label>
      <input value={newItem} 
      onChange={e => setNewITem(e.target.value)}
      type="text" id="item"/>
    </div>
    <button className="button"> Add </button>
  </form>

  <h1 className="header"> ToDoList </h1>
  <ul className="list">
    {todos.length === 0 && "Add Tasks" }
    {todos.map(todo => {
      return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}
        //onchange to check if item is selected or not
        onChange={e => toggletodo(todo.id, e.target.checked)} ></input>
        {todo.title}
      </label>
      <button onClick={() => deletetodo(todo.id)} className="Delete1"> Delete Task</button>
    </li>
      )
})}
  </ul>
 </>
 )
}