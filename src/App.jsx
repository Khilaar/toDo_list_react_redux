import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todo, deleteTodo } from './actions';

function App() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleToggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const allTodos = todos;
  const checkedTodos = todos.filter((todo) => todo.completed);
  const uncheckedTodos = todos.filter((todo) => !todo.completed);

  return (
    <>
      <div className='upperPart'>
      <h1>Todo List</h1>
      <div className="inputAndButton">
        <input type="text" placeholder="Todo" value={todoText} onChange={handleChange} />
        <button onClick={() => {
          dispatch(todo(todoText));
          setTodoText('');
        }}>Add Todo</button>
      </div>
      </div>

      <div className='allLists'>
      <div className='allContainer'>
      <h2>All</h2>
      {allTodos.map((todo, index) => (
        <div key={index} className="todos">
          <div className="todosTextCheck">
            <p>{todo.text}</p>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
          </div>
          <button onClick={() => handleDeleteTodo(index)}>-</button>
        </div>
      ))}
      </div>

      <div className='allContainer'>
      <h2>Unchecked</h2>
      {uncheckedTodos.map((todo, index) => (
        <div key={index} className="todos">
          <div className="todosTextCheck">
            <p>{todo.text}</p>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
          </div>
          <button onClick={() => handleDeleteTodo(index)}>-</button>
        </div>
      ))}
      </div>

      <div className="allContainer">
      <h2>Checked</h2>
      {checkedTodos.map((todo, index) => (
        <div key={index} className="todos">
          <div className="todosTextCheck">
            <p>{todo.text}</p>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
          </div>
          <button onClick={() => handleDeleteTodo(index)}>-</button>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default App;
