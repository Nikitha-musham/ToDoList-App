import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const TodoList = ({ tasks, deleteTask, editTask, toggleTaskCompletion }) => {
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the task being edited
  const [editingText, setEditingText] = useState(''); // Store the updated task text

  const handleEditClick = (index, taskText) => {
    setEditingIndex(index); // Set the current index as the one being edited
    setEditingText(taskText); // Set the current task text in the input field
  };

  const handleSaveClick = (index) => {
    editTask(index, editingText); // Save the updated task
    setEditingIndex(null); // Reset editing mode
    setEditingText(''); // Clear the input
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index} divider>
          {/* Checkbox */}
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)} // Toggle task completion
          />

          {/* Task text or editing input */}
          {editingIndex === index ? (
            <TextField
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)} // Update the editing text
              fullWidth
            />
          ) : (
            <ListItemText
              primary={task.text}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none', // Strike-through if completed
              }}
            />
          )}

          {/* Action Buttons */}
          <div>
            {editingIndex === index ? (
              <IconButton edge="end" color="primary" onClick={() => handleSaveClick(index)}>
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton edge="end" color="primary" onClick={() => handleEditClick(index, task.text)}>
                <EditIcon />
              </IconButton>
            )}
            <IconButton edge="end" color="secondary" onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
