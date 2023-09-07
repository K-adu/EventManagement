import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  country: '',
  occupation: '',
  age:'',
}

export const userInfoSlice= createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserInfo: (state,action) =>{
    
    return {...state,...action.payload}
    }
  }
})

export const {updateUserInfo} = userInfoSlice.actions

export default userInfoSlice.reducer