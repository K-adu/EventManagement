
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const diaryInfoSlice = createSlice({
  name: 'diaryInfo',
  initialState,
  reducers: {
    addDiary: (state, action) => {
      state.pop()
      state.push(action.payload);
    },
    deleteDiary: (state, action) => {
      const diaryIndexToDelete = state.findIndex((diary) => diary.id === action.payload);
      if (diaryIndexToDelete !== -1) {
        state.splice(diaryIndexToDelete, 1);
      }
    },
  },
});

export const { addDiary} = diaryInfoSlice.actions;

export default diaryInfoSlice.reducer;
