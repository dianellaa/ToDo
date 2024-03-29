import React, { useState } from 'react';
import './App.css';

function ToDoList() {
  const [taskInput, setTaskInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        task: taskInput,
        description: descriptionInput
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setDescriptionInput('');
    }
  };

  function deleteTask (taskId)  {
    const newTask =  tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  };

  return (
    <div className="container">
      <h2>New Task:</h2>
      <div>
        <input
          type="text"
          placeholder=" Your task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <br></br>
        <textarea
          placeholder="Description"
          value={descriptionInput}
          onChange={handleDescriptionInputChange}
        />
        <br></br>
        <button  onClick={handleAddTask}>Add</button>
      </div>
      <h2>My ToDo List:</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.task}</strong>: {task.description}.
            <button  className='btn-delete' onClick={() => deleteTask(task.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

