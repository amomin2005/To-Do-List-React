import './styles.css'

export default function App(){
 return (
 <>
  
  <form className="newttask">
    <div className="checkk">
      <label htmlFor="item">Enter New Task</label>
      <input type="text" id="item" Type Here />
    </div>
    <button className="button"> Add </button>
  </form>





  <h1 className="header"> ToDoList </h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" ></input>
        Enter Task 1
      </label>
      <button className="Delete1"> Delete Task</button>
    </li>
    <li>
    <label>
        <input type="checkbox" ></input>
        Enter Task 2
      </label>
      <button className="Delete2">Delete Task</button>
    </li>
  </ul>
 </>
 )
}