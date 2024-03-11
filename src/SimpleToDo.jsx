import React, { useState } from "react";

export default function SimpleToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      // Only add non-empty tasks
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear input after adding
    }
  }

  function deleteTask(index) {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  }

  return (
    <div className="to-do-list">
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
