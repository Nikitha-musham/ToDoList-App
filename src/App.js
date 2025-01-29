import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]); // State for tasks

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]); // Add with completed = false by default
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Edit a task
  const editTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        To-Do List App
      </Typography>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </Container>
  );
};

export default App;
