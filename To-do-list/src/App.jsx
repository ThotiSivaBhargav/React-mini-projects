import { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

function App() {

  
  const [task, setTask] = useState("");
  const [todo , setTodo] = useState([]);
  const [error, setError] = useState("");
  const changeHandler = e=>{
    setTask(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
  
    if(task ===""){
      alert("please enter tasks")
    }else{
      const newTodo = [...todo, task] //...todo is get previous data and tasks will show present tasks added
      setTodo(newTodo);
      setTask("");
    }
  }

  const deleteHandler = (indexValue) =>{
    const newTodos = todo.filter((todo,index) => index !== indexValue);
    setTodo(newTodos);
  }
  return (
    <>
    <center >
    <div className='bg-gray-500 text-white max-w-150  justify-center align-middle rounded-2xl border-2 border-white gap-3.5 mt-70'>
      <h1 className='m-1 mt-1.5 pt-5 font-bold text-2xl'>TODO MANAGEMENT APPLICATION</h1>
      <form onSubmit={submitHandler} className='p-10'> 
        <input type="text" placeholder='Enter your tasks' value={task} onChange={changeHandler} className='border-white bg-gray-900  rounded p-1 ' />&nbsp; &nbsp;
      <button className='bg-gray-900 w-20 rounded-2xl cursor-pointer'>Add</button>
      </form>
      <TodoList todos={todo} delete={deleteHandler}/>
    </div>
   </center>
    
  
    </>
  )
}

export default App
