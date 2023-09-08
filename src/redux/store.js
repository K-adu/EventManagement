import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userInfoReducer from './userInfoSlice'
import loggedInReducer from './LoggedInSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer,
    loggedIn: loggedInReducer
  },
})