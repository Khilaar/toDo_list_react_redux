import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { todo } from './actions'
import { deleteTodo } from './actions';


function App() {
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState("")


  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
};

  return (
    <>
    <h1>Todo List</h1>
      
      <div className='inputAndButton'>
        <input type="text" placeholder='Todo' onChange={handleChange} />
        <button onClick={() => dispatch(todo(todoText))}>Add Todo</button>
      </div>

      {todos.map((todo, index) => (
            <div key={index} className='todos'>
                <div className='todosTextCheck'>
                    <p key={index}>{todo}</p>
                    <input type="checkbox" />
                </div>
                <button onClick={() => handleDeleteTodo(index)}>-</button>
            </div>
        ))}
    </>
  )
}

export default App
