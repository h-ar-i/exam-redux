import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo } from './reducers/todoSlice';


function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Math.random().toString(36).substr(2, 9),
      text: input,
      completed: false,
    }));
    setInput('');
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div  className='container'>
      <h1> My ToDo  List </h1>
     <div className="d-flex justify-content-between">
     <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> 
      <button style={{color:'red'}} onClick={handleAddTodo}>Delete</button>
     </div>
      

      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
