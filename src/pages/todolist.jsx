import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage when tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = { text: taskInput };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setTaskInput(tasks[index].text);
  };

  const handleUpdateTask = () => {
    if (taskInput.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = { text: taskInput };
      setTasks(updatedTasks);
      setTaskInput("");
      setEditingIndex(null);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Tambahkan tugas baru..."
        />
        {editingIndex !== null ? (
          <button onClick={handleUpdateTask}>Simpan</button>
        ) : (
          <button onClick={handleAddTask}>Tambah</button>
        )}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => handleEditTask(index)}>✏️</button>
            <button onClick={() => handleDeleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
