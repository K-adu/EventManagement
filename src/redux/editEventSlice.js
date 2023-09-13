import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  id: '',
  title: '',
  description: '',
  priority: '',
  postedBy: '',
}


const editEventSlice = createSlice({
  name: 'editEvent',
  initialState,
  reducers: {
    editEvent: (state,action) =>{
      return {...state,...action.payload}
    }
  }
})

export const {editEvent} = editEventSlice.actions
export default editEventSlice.reducer