import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  id: '',
  loggedIn: false

}

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    setLoggedInState: (state,action) => {
      state.loggedIn = true
      return {...state,...action.payload}

    }
  }
})
export const {setLoggedInState} = loggedInSlice.actions
export default loggedInSlice.reducer