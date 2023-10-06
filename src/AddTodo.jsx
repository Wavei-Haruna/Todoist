import React,{useState} from 'react'
import axios from 'axios';
import {BsBookmarkPlus} from "react-icons/bs"
import { toast } from 'react-toastify';

export default function AddTodo({currentUser}) {
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');

//   add task
const handleAddTask = () => {
    // Make a POST request to add a new task
    axios.post('http://localhost:3000/todos', {
      task: newTask,
      desc: newDesc,
      completed: false,
      userId: currentUser.id // Associate the task with the logged-in user
    })
      .then(response => {
       console.log(response)
       toast.success("new task added")
        setNewTask('');
      })
      .catch(error => {
        console.error('Error adding task: ', error);
      });
  };
  return (
    <div> <form className="mb-4 mx-auto w-1/2">
        <input
           className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 my-3 "
             type="text"
          placeholder="New Task"
          value={newTask}
          required
          onChange={(e) => setNewTask(e.target.value)}
        />
        <textarea
           className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 my-3"
             
          placeholder="task description"
          value={newDesc}
          required
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <button onClick={handleAddTask} className='bg-blue-600 p-2 rounded text-white font-semibold hover:scale-105 flex justify-center items-center  '> <BsBookmarkPlus className='mx-1'/> Add Task</button>
      </form></div>
  )
}
