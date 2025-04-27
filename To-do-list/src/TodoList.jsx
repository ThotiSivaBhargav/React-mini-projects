import React from 'react'
import App from './App'

const TodoList = ({ todos, delete:deleteHandler }) => {
  return (
    <div className='mt-5'>
      {todos.map((todo, index) => (
        <div key={index}>
          <h4 className='flex justify-around pb-5'>
            {todo} &nbsp;
            <button className='bg-red-600 ml-1 rounded-3xl w-20 cursor-pointer hover:bg-black text-white' onClick={() => {deleteHandler(index)}
              }>Delete</button>
          </h4>
        </div>
      ))}
    </div>
  )
}

export default TodoList
