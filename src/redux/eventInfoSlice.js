// eventInfoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const eventInfoSlice = createSlice({
  name: 'eventInfo',
  initialState,
  reducers: {
    addEvent: (state, action) => {

      state.push(action.payload);
    },
    deleteEvent: (state, action) => {
      const eventIndexToDelete = state.findIndex((event) => event.id === action.payload);
      if (eventIndexToDelete !== -1) {
        state.splice(eventIndexToDelete, 1);
      }
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventInfoSlice.actions;

export default eventInfoSlice.reducer;
