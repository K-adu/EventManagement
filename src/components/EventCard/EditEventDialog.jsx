import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import counterSlice, { incrementToRender } from '../../redux/counterSlice';

export default function EditEventDialog({
  open,
  handleClose,
  event,
  handleEdit,
}) {
  const dispatch = useDispatch();
  const [editedEvent, setEditedEvent] = useState({ ...event });
  const postDetails = useSelector((state) => state.editEvent);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  const handleSave = async () => {
    handleEdit(editedEvent);
    try {
      await axios.patch('http://localhost:4000/events/update', editedEvent, {
        withCredentials: true,
      });
      dispatch(incrementToRender());
    } catch (e) {
      console.log(
        'this is the error form the update handelsave editeventdialogue',
        e
      );
    }
    console.log('this is from the edit event handel edit', editedEvent);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Event</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit the event details:</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Title"
          type="text"
          fullWidth
          value={editedEvent.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="priority"
          name="priority"
          label="Priority"
          type="text"
          fullWidth
          value={editedEvent.priority}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={editedEvent.description}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
