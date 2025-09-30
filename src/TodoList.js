import { useState } from "react";
import "./App.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]); // Active tasks
  const [completedTasks, setCompletedTasks] = useState([]); // Completed tasks
  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState("");
  const [showCompleted, setShowCompleted] = useState(false); // toggle state

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      setMessage(""); // clear old message
    }
  };

  // Mark task as completed
  const handleCompleteTask = (index) => {
    const task = tasks[index];
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((_, i) => i !== index));
    setMessage("✅ Task Completed!");
    setTimeout(() => setMessage(""), 2000); // hide after 2s
  };

  // Delete task
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2>My Tasks</h2>

        {/* Input */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        {/* Show message */}
        {message && <p className="message">{message}</p>}

        {/* Active tasks */}
        {tasks.length === 0 ? (
          <p>No tasks for today 🎉</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <span className="icons">
                  <button
                    className="complete-btn"
                    onClick={() => handleCompleteTask(index)}
                  >
                    ✅
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTask(index)}
                  >
                    ❌
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Toggle button (logo style) */}
        {completedTasks.length > 0 && (
          <div className="completed-toggle">
            <button onClick={() => setShowCompleted(!showCompleted)}>
              📜 Completed History
            </button>
          </div>
        )}

        {/* Show completed only if toggled */}
        {showCompleted && (
          <div className="completed-section">
            <h3>Completed Tasks</h3>
            <ul className="completed-list">
              {completedTasks.map((task, index) => (
                <li key={index} className="completed-item">
                  {task} ✅
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
