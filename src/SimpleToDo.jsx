import React, { useState } from "react";

const styles = {
  todoList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 5,
  },
  heading: {
    marginBottom: 20,
  },
  inputContainer: {
    display: "flex",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 5,
  },
  addButton: {
    padding: 10,
    backgroundColor: "#4CAF50" /* Green */,
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    padding: 5,
    backgroundColor: "#f44336" /* Red */,
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};

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
    <div className="to-do-list" style={styles.todoList}>
      <h1 className="heading" style={styles.heading}>
        My To-Do List
      </h1>
      <div className="input-container" style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="input"
          style={styles.input}
        />
        <button
          onClick={addTask}
          className="add-button"
          style={styles.addButton}>
          Add
        </button>
      </div>
      <ul className="task-list" style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className="task-item" style={styles.taskItem}>
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="delete-button"
              style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
