import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Todo = ({ currentUser }) => {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    // Fetch todos from the JSON Server API
    axios.get(`http://localhost:3000/todos?userId=${currentUser.id}`)
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  

  return (
    <div>
      <h1 className='font-sans font-semibold text-center my-2 mx-2 px-2 text-xl text-gray-400'>Todo List</h1>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
