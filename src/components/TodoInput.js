import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <Box display="flex" gap={2} mt={3}>
      <TextField
        label="Add a Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
